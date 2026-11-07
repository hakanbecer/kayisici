import * as THREE from 'three';
import { CONFIG } from '../config.js';
import {
  createCrate,
  createZoneMarker,
  createFloatingBadge,
  createSmokeParticle,
  createStationStatusPanel
} from './Assets.js';
import { events } from './Events.js';

/**
 * Generic Station class.
 * Capable of processing any production step:
 * (inputType, inputPerBatch) -> processTime (via dt) -> (outputType, slotCount)
 * Features:
 * - Dedicated inputBuffer with inputBufferCapacity (deposit never blocked by outputLimit)
 * - Output clogging (outputLimit pauses processing, input stays open)
 * - Auto-pulling next batch from inputBuffer upon completion
 * - Floating status panel with progress bars, remaining seconds ("18sn"), green checkmark
 * - Reusable smoke pool for stations with smoke
 * - Floating rotating guide badge for accepted item type
 * - Wrong item protection with warning
 */
export class Station {
  /**
   * @param {Object} options
   * @param {string} options.id Unique station identifier
   * @param {string} options.name Display name
   * @param {string} options.inputType Item type accepted
   * @param {string} options.outputType Item type produced
   * @param {number} options.inputPerBatch Amount of input required for 1 output item
   * @param {number} options.processTime Seconds required per batch
   * @param {number} options.slotCount Number of parallel processing slots
   * @param {number} [options.inputBufferCapacity] Maximum items the station can store in its input buffer
   * @param {number} [options.outputLimit] Max ready items allowed at output before pause
   * @param {{x: number, z: number, radius?: number}} options.inputZone Center & radius of drop zone
   * @param {{x: number, z: number, radius?: number}} options.outputZone Center & radius of collect zone
   * @param {Array<{x: number, y: number, z: number}>} options.slotPositions World positions for each slot
   * @param {{x: number, y: number, z: number}} [options.panelPos] World position of floating status panel
   * @param {THREE.Group} [options.stationGroup] Visual mesh group of the station
   * @param {boolean} [options.hasSmoke] Whether to emit smoke when actively processing
   * @param {{x: number, y: number, z: number}} [options.smokeOrigin] Where smoke puffs originate
   * @param {string} [options.floatingIconType] Item type to display hovering above station
   * @param {THREE.Scene} options.scene Target Three.js scene
   * @param {(msg: string) => void} [options.onWarning] Callback when player cannot pick up or deposit
   */
  constructor(options) {
    this.id = options.id;
    this.name = options.name;
    this.inputType = options.inputType;
    this.outputType = options.outputType;
    this.inputPerBatch = options.inputPerBatch;
    this.processTime = options.processTime;
    this.slotCount = options.slotCount;
    this.inputBufferCapacity = options.inputBufferCapacity || (options.slotCount * options.inputPerBatch + 2);
    this.outputLimit = options.outputLimit !== undefined ? options.outputLimit : options.slotCount;
    this.scene = options.scene;
    this.onWarning = options.onWarning || (() => {});

    // Zone geometries
    const defaultRadius = 1.2;
    this.inputZone = {
      x: options.inputZone.x,
      z: options.inputZone.z,
      radius: options.inputZone.radius || defaultRadius
    };
    this.outputZone = {
      x: options.outputZone.x,
      z: options.outputZone.z,
      radius: options.outputZone.radius || defaultRadius
    };

    // Ground zone markers
    this.inputMarker = createZoneMarker('input', this.inputZone.radius);
    this.inputMarker.position.set(this.inputZone.x, 0.01, this.inputZone.z);
    this.scene.add(this.inputMarker);

    this.outputMarker = createZoneMarker('output', this.outputZone.radius);
    this.outputMarker.position.set(this.outputZone.x, 0.01, this.outputZone.z);
    this.scene.add(this.outputMarker);

    // Building mesh group
    this.group = options.stationGroup || null;
    if (this.group && !this.group.parent) {
      this.scene.add(this.group);
    }

    // Input buffer & transfer timing
    this.inputBuffer = 0;
    this.transferTimer = 0;

    // Slots initialization
    this.slots = [];
    this.slotPositions = options.slotPositions || [];

    for (let i = 0; i < this.slotCount; i++) {
      const pos = this.slotPositions[i] || { x: this.inputZone.x, y: 1.0, z: this.inputZone.z };
      this.slots.push({
        index: i,
        state: 'EMPTY', // 'EMPTY' | 'PROCESSING' | 'READY'
        progress: 0.0,
        maxTime: this.processTime,
        position: pos,
        itemMesh: null
      });
    }

    // Unified Floating Status Panel (showing all slots, remaining seconds "18sn", and checkmarks)
    this.panelPos = options.panelPos || {
      x: (this.inputZone.x + this.outputZone.x) / 2,
      y: 2.5,
      z: (this.inputZone.z + this.outputZone.z) / 2
    };
    this.statusPanel = createStationStatusPanel(this.slotCount);
    this.statusPanel.position.set(this.panelPos.x, this.panelPos.y, this.panelPos.z);
    this.scene.add(this.statusPanel);

    // Floating guide badge (showing accepted input type)
    this.floatingIconType = options.floatingIconType || this.inputType;
    if (this.floatingIconType) {
      this.floatingBadge = createFloatingBadge(this.floatingIconType);
      const centerX = (this.inputZone.x + this.outputZone.x) / 2;
      const centerZ = (this.inputZone.z + this.outputZone.z) / 2;
      this.baseBadgeY = this.panelPos.y + (0.22 + this.slotCount * 0.16) / 2 + 0.45;
      this.floatingBadge.position.set(centerX, this.baseBadgeY, centerZ);
      this.scene.add(this.floatingBadge);
      this.badgeTimer = 0;
    }

    // Reusable Smoke Particle Pool (Max 10 spheres, 0 runtime object allocations)
    this.hasSmoke = !!options.hasSmoke;
    this.smokeOrigin = options.smokeOrigin || { x: this.inputZone.x, y: 1.6, z: this.inputZone.z };
    this.smokePool = [];
    this.smokeSpawnTimer = 0;

    if (this.hasSmoke) {
      const poolSize = CONFIG.STATIONS.SMOKE_POOL_SIZE || 10;
      for (let s = 0; s < poolSize; s++) {
        const particle = createSmokeParticle();
        this.scene.add(particle);
        this.smokePool.push(particle);
      }
    }
  }

  /**
   * Updates station logic, delta timers, particles, and player interactions.
   * @param {number} dt Delta time in seconds
   * @param {import('./Player.js').Player} player
   * @param {THREE.Camera} camera
   */
  update(dt, player, camera) {
    const playerPos = player.getPosition();

    // 1. Billboards face camera
    if (camera) {
      if (this.statusPanel) {
        this.statusPanel.quaternion.copy(camera.quaternion);
      }
    }

    // 2. Floating guide badge rotation & gentle hover
    if (this.floatingBadge) {
      this.badgeTimer += dt;
      this.floatingBadge.rotation.y += dt * 1.5;
      this.floatingBadge.position.y = this.baseBadgeY + Math.sin(this.badgeTimer * 2.2) * 0.08;
    }

    // 3. Zone radius checks
    const distToInput = Math.hypot(playerPos.x - this.inputZone.x, playerPos.z - this.inputZone.z);
    const inInputZone = distToInput <= this.inputZone.radius;

    const distToOutput = Math.hypot(playerPos.x - this.outputZone.x, playerPos.z - this.outputZone.z);
    const inOutputZone = distToOutput <= this.outputZone.radius;

    if (this.inputMarker) {
      this.inputMarker.scale.setScalar(inInputZone ? 1.06 : 1.0);
    }
    if (this.outputMarker) {
      this.outputMarker.scale.setScalar(inOutputZone ? 1.06 : 1.0);
    }

    // 4. Output Clogging check (outputLimit)
    const readyCount = this.slots.filter((s) => s.state === 'READY').length;
    const isClogged = readyCount >= this.outputLimit;

    // 5. Handle Input Deposit (NOT blocked by outputLimit, bounded by inputBufferCapacity)
    this._handleInputDeposit(dt, player, inInputZone);

    // 6. Handle Slot Transitions & Process Timers
    this._updateSlots(dt, isClogged);

    // 7. Update Status Panel
    if (this.statusPanel && this.statusPanel.userData.update) {
      this.statusPanel.userData.update(this.slots, isClogged);
    }

    // 8. Update Smoke Pool
    if (this.hasSmoke) {
      this._updateSmoke(dt, isClogged);
    }

    // 9. Handle Output Collection
    this._handleOutputCollection(dt, player, inOutputZone);
  }

  _handleInputDeposit(dt, player, inZone) {
    if (!inZone) return;

    const playerType = player.getCurrentType();
    const count = player.getCount();

    if (count <= 0 || playerType === null) {
      return;
    }

    // If player is carrying an incompatible item to this station
    if (playerType !== this.inputType) {
      this.onWarning(CONFIG.STRINGS.WARNING_WRONG_CRATE);
      events.emit('warning', { message: CONFIG.STRINGS.WARNING_WRONG_CRATE });
      return;
    }

    // Check input buffer capacity
    if (this.inputBuffer >= this.inputBufferCapacity) {
      return; // Input buffer full
    }

    // Transfer item into input buffer at interval
    this.transferTimer += dt;
    if (this.transferTimer >= CONFIG.STATIONS.ITEM_TRANSFER_INTERVAL) {
      this.transferTimer = 0;
      if (player.removeItem()) {
        this.inputBuffer += 1;
        events.emit('dropped', { stationId: this.id, itemType: playerType });
      }
    }
  }

  _updateSlots(dt, isClogged) {
    // A. Start processing on empty slots if buffer has enough items and not clogged
    if (!isClogged) {
      for (const slot of this.slots) {
        if (slot.state === 'EMPTY' && this.inputBuffer >= this.inputPerBatch) {
          this.inputBuffer -= this.inputPerBatch;
          slot.state = 'PROCESSING';
          slot.progress = 0.0;

          if (slot.itemMesh) {
            this.scene.remove(slot.itemMesh);
          }
          slot.itemMesh = createCrate(this.inputType === CONFIG.ITEMS.APRICOT ? CONFIG.ITEMS.CRATE_FRESH : this.inputType);
          slot.itemMesh.position.set(slot.position.x, slot.position.y, slot.position.z);
          this.scene.add(slot.itemMesh);

          events.emit('station_started', { stationId: this.id, inputType: this.inputType });
        }
      }
    }

    // B. Advance active processing slots with delta time
    for (const slot of this.slots) {
      if (slot.state === 'PROCESSING') {
        if (!isClogged) {
          slot.progress += dt;
          if (slot.progress >= slot.maxTime) {
            slot.state = 'READY';
            if (slot.itemMesh) {
              this.scene.remove(slot.itemMesh);
            }
            slot.itemMesh = createCrate(this.outputType);
            slot.itemMesh.position.set(slot.position.x, slot.position.y, slot.position.z);
            this.scene.add(slot.itemMesh);

            events.emit('crate_made', { stationId: this.id, outputType: this.outputType });
            events.emit('station_ready', {
              stationId: this.id,
              slotIndex: slot.index,
              position: { x: slot.position.x, y: slot.position.y, z: slot.position.z }
            });
          }
        }
      }
    }
  }

  _updateSmoke(dt, isClogged) {
    const isActivelyProcessing = !isClogged && this.slots.some((s) => s.state === 'PROCESSING');

    if (isActivelyProcessing) {
      this.smokeSpawnTimer += dt;
      if (this.smokeSpawnTimer >= 0.22) {
        this.smokeSpawnTimer = 0;

        const inactivePuff = this.smokePool.find((p) => !p.userData.active);
        if (inactivePuff) {
          inactivePuff.visible = true;
          inactivePuff.userData.active = true;
          inactivePuff.userData.life = 0;
          inactivePuff.userData.maxLife = 2.0 + Math.random() * 0.4;
          inactivePuff.position.set(
            this.smokeOrigin.x + (Math.random() - 0.5) * 0.25,
            this.smokeOrigin.y,
            this.smokeOrigin.z + (Math.random() - 0.5) * 0.25
          );
          inactivePuff.userData.vx = (Math.random() - 0.5) * 0.2;
          inactivePuff.userData.vy = 0.65 + Math.random() * 0.25;
          inactivePuff.userData.vz = (Math.random() - 0.5) * 0.2;
          inactivePuff.scale.setScalar(0.7);
        }
      }
    }

    for (const puff of this.smokePool) {
      if (puff.userData.active) {
        puff.userData.life += dt;
        const progress = puff.userData.life / puff.userData.maxLife;

        if (progress >= 1.0) {
          puff.userData.active = false;
          puff.visible = false;
        } else {
          puff.position.x += puff.userData.vx * dt;
          puff.position.y += puff.userData.vy * dt;
          puff.position.z += puff.userData.vz * dt;
          puff.scale.setScalar(0.7 + progress * 1.5);
        }
      }
    }
  }

  _handleOutputCollection(dt, player, inZone) {
    if (!inZone) return;

    const readySlot = this.slots.find((s) => s.state === 'READY');
    if (!readySlot) return;

    const playerCurrentType = player.getCurrentType();

    // Single-type carrying rule
    if (playerCurrentType !== null && playerCurrentType !== this.outputType) {
      this.onWarning(CONFIG.STRINGS.WARNING_EMPTY_HANDS);
      events.emit('warning', { message: CONFIG.STRINGS.WARNING_EMPTY_HANDS });
      return;
    }

    if (player.isFull()) {
      return;
    }

    const added = player.addItem(this.outputType);
    if (added) {
      if (readySlot.itemMesh) {
        this.scene.remove(readySlot.itemMesh);
        readySlot.itemMesh = null;
      }
      readySlot.state = 'EMPTY';
      readySlot.progress = 0.0;
      events.emit('crate_picked', { stationId: this.id, type: this.outputType });
    }
  }

  getSlots() {
    return this.slots;
  }

  getInputBuffer() {
    return this.inputBuffer;
  }

  getProcessingCount() {
    return this.slots.filter((s) => s.state === 'PROCESSING').length;
  }

  getReadyCount() {
    return this.slots.filter((s) => s.state === 'READY').length;
  }

  hasReadyCrate() {
    return this.slots.some((s) => s.state === 'READY');
  }

  getTotalItems() {
    return this.inputBuffer + this.slots.filter((s) => s.state !== 'EMPTY').length;
  }

  /**
   * Dynamically resizes the station slot capacity (used for Tent Capacity upgrades).
   * @param {number} newCount
   */
  setSlotCount(newCount) {
    if (newCount <= 0 || newCount === this.slotCount) return;

    this.slotCount = newCount;
    this.inputBufferCapacity = this.slotCount * this.inputPerBatch + 2;

    // Expand slots array if newCount is greater
    while (this.slots.length < this.slotCount) {
      const i = this.slots.length;
      const basePos = this.slotPositions[0] || { x: this.inputZone.x, y: 0.25, z: 0 };
      const offsetZ = ((i % 3) - 1) * 0.45;
      const offsetX = Math.floor(i / 3) * 0.4;
      const pos = {
        x: basePos.x + offsetX,
        y: basePos.y,
        z: (basePos.z || 0) + offsetZ
      };

      this.slots.push({
        index: i,
        state: 'EMPTY',
        progress: 0.0,
        maxTime: this.processTime,
        position: pos,
        itemMesh: null
      });
    }

    // Shrink slots array if newCount is smaller (reset/refund)
    if (this.slots.length > this.slotCount) {
      for (let i = this.slotCount; i < this.slots.length; i++) {
        if (this.slots[i].itemMesh) {
          this.scene.remove(this.slots[i].itemMesh);
        }
      }
      this.slots.length = this.slotCount;
    }

    // Replace status panel with new slot count
    if (this.statusPanel) {
      this.scene.remove(this.statusPanel);
    }
    this.statusPanel = createStationStatusPanel(this.slotCount);
    this.statusPanel.position.set(this.panelPos.x, this.panelPos.y, this.panelPos.z);
    this.scene.add(this.statusPanel);

    // Adjust floating badge Y
    if (this.floatingBadge) {
      const panelHeight = 0.22 + this.slotCount * 0.16;
      this.baseBadgeY = this.panelPos.y + panelHeight / 2 + 0.45;
      this.floatingBadge.position.y = this.baseBadgeY;
    }
  }
}
