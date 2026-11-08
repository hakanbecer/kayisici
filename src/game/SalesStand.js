import * as THREE from 'three';
import { CONFIG } from '../config.js';
import {
  createSalesStand,
  createSalesBillboard,
  createZoneMarker,
  createCrate,
  createTruck,
  createFloatingNotice
} from './Assets.js';
import { state } from './State.js';
import { events } from './Events.js';

// Module-level temporary vector to avoid per-frame GC allocations
const _tempCrateTarget = new THREE.Vector3();

/**
 * SalesStand and MerchantTruck Manager.
 * Manages the final stage of the apricot tycoon chain:
 * crate_dry2 -> Sales Buffer (capacity 12) -> Merchant Truck (every 60s) -> Gold (+money).
 */
export class SalesStand {
  /**
   * @param {Object} options
   * @param {THREE.Scene} options.scene
   * @param {(msg: string) => void} options.onWarning
   */
  constructor(options) {
    this.scene = options.scene;
    this.onWarning = options.onWarning || (() => {});

    const cfgStand = CONFIG.PROPS.SALES_STAND;
    this.pos = cfgStand.POS;
    this.capacity = CONFIG.ECONOMY.SALES_BUFFER_CAPACITY; // 12
    this.cratesCount = 0; // Current count in depot
    this.transferTimer = 0;

    // 1. Sales Stand Pallet Group
    this.group = createSalesStand();
    this.group.position.set(this.pos.x, 0, this.pos.z);
    this.scene.add(this.group);
    this.crateStackAnchor = this.group.userData.crateStackAnchor;
    this.visualCrates = []; // Meshes currently stacked on pallet

    // 2. Input Zone (Turquoise ring, never closes)
    this.inputZone = {
      x: cfgStand.INPUT_ZONE.x,
      z: cfgStand.INPUT_ZONE.z,
      radius: cfgStand.INPUT_ZONE.radius || 1.2
    };
    this.inputMarker = createZoneMarker('input', this.inputZone.radius);
    this.inputMarker.position.set(this.inputZone.x, 0.01, this.inputZone.z);
    this.scene.add(this.inputMarker);

    // 3. Billboard Panel ("Sonraki kamyon: 42sn", "Depo: X / 12")
    this.billboard = createSalesBillboard();
    this.billboard.position.set(cfgStand.PANEL_POS.x, cfgStand.PANEL_POS.y, cfgStand.PANEL_POS.z);
    this.scene.add(this.billboard);

    // 4. Merchant Truck state
    const cfgTruck = CONFIG.PROPS.MERCHANT_TRUCK;
    this.truckConfig = cfgTruck;
    this.truckState = 'WAITING'; // 'WAITING' | 'ARRIVING' | 'STOPPED' | 'LOADING' | 'POST_LOAD' | 'DEPARTING'
    this.truckTimer = CONFIG.ECONOMY.MERCHANT_INTERVAL; // 60.0s
    this.truckStateTimer = 0;

    this.truckGroup = null;
    this.truckSnapshot = 0; // Crates frozen for current truck
    this.flyingCrates = []; // Crates in flight to truck
    this.floatingNotices = []; // Text popups (+240, Mal yok)
  }

  /**
   * Main update loop for sales depot, truck movement, and crate loading.
   * @param {number} dt Delta time in seconds
   * @param {import('./Player.js').Player} player
   * @param {THREE.Camera} camera
   */
  update(dt, player, camera) {
    // 1. Orient billboard towards camera
    if (camera && this.billboard) {
      this.billboard.quaternion.copy(camera.quaternion);
    }

    // 2. Player Input Deposit Interaction (NEVER blocked by truck or status)
    this._handlePlayerDeposit(dt, player);

    // 3. Merchant Truck State Machine
    this._updateMerchantTruck(dt);

    // 4. Update Flying Crates animation
    this._updateFlyingCrates(dt);

    // 5. Update Floating Notices (+240, Mal yok)
    this._updateFloatingNotices(dt, camera);

    // 6. Update Billboard text & progress
    const isTruckActive =
      this.truckState === 'ARRIVING' ||
      this.truckState === 'STOPPED' ||
      this.truckState === 'LOADING' ||
      this.truckState === 'POST_LOAD';
    if (this.billboard && this.billboard.userData.update) {
      this.billboard.userData.update(this.truckTimer, this.cratesCount, this.capacity, isTruckActive);
    }
  }

  _handlePlayerDeposit(dt, player) {
    const playerPos = player.getPosition();
    const dist = Math.hypot(playerPos.x - this.inputZone.x, playerPos.z - this.inputZone.z);
    const inZone = dist <= this.inputZone.radius;

    if (this.inputMarker) {
      this.inputMarker.scale.setScalar(inZone ? 1.06 : 1.0);
    }

    if (!inZone) return;

    const count = player.getCount();
    const type = player.getCurrentType();

    if (count <= 0 || type === null) return;

    // Wrong crate protection
    if (type !== CONFIG.ITEMS.CRATE_DRY2) {
      this.onWarning(CONFIG.STRINGS.WARNING_WRONG_CRATE);
      events.emit('warning', { message: CONFIG.STRINGS.WARNING_WRONG_CRATE });
      return;
    }

    // Check sales buffer capacity
    if (this.cratesCount >= this.capacity) {
      return; // Buffer full; excess remains on player's back
    }

    this.transferTimer += dt;
    if (this.transferTimer >= CONFIG.STATIONS.ITEM_TRANSFER_INTERVAL) {
      this.transferTimer = 0;
      if (player.removeItem()) {
        this.cratesCount += 1;
        this._addVisualCrate();
        events.emit('dropped', { stationId: 'sales', itemType: type });
      }
    }
  }

  _addVisualCrate() {
    const crate = createCrate(CONFIG.ITEMS.CRATE_DRY2);
    crate.scale.setScalar(0.72);

    // Place in 2x3x2 grid on pallet
    const idx = this.visualCrates.length;
    const perLayer = 6;
    const layer = Math.floor(idx / perLayer);
    const posInLayer = idx % perLayer;
    const col = posInLayer % 3;
    const row = Math.floor(posInLayer / 3);

    const x = (col - 1) * 0.52;
    const y = layer * 0.28;
    const z = (row - 0.5) * 0.44;

    crate.position.set(x, y, z);
    this.crateStackAnchor.add(crate);
    this.visualCrates.push(crate);
  }

  _removeVisualCrate() {
    if (this.visualCrates.length === 0) return null;
    const crate = this.visualCrates.pop();
    if (crate && crate.parent) {
      crate.parent.remove(crate);
    }
    return crate;
  }

  _updateMerchantTruck(dt) {
    const cfg = this.truckConfig;

    switch (this.truckState) {
      case 'WAITING':
        this.truckTimer -= dt;
        if (this.truckTimer <= 0) {
          this._spawnTruck();
        }
        break;

      case 'ARRIVING':
        if (this.truckGroup) {
          // Drive along Z towards STOP_Z
          this.truckGroup.position.z += cfg.SPEED * dt;
          if (this.truckGroup.position.z >= cfg.STOP_Z) {
            this.truckGroup.position.z = cfg.STOP_Z;
            this.truckState = 'STOPPED';
            this.truckStateTimer = 0;
            this._handleTruckArrival();
          }
        }
        break;

      case 'STOPPED':
        // If truck snapshot was 0 (no goods)
        this.truckStateTimer += dt;
        if (this.truckSnapshot === 0) {
          if (this.truckStateTimer >= cfg.EMPTY_WAIT) {
            this.truckState = 'DEPARTING';
          }
        }
        break;

      case 'LOADING':
        // Handled by _updateFlyingCrates when all finished
        break;

      case 'POST_LOAD':
        this.truckStateTimer += dt;
        if (this.truckStateTimer >= cfg.DEPART_DELAY) {
          this.truckState = 'DEPARTING';
        }
        break;

      case 'DEPARTING':
        if (this.truckGroup) {
          this.truckGroup.position.z += cfg.SPEED * dt;
          if (this.truckGroup.position.z >= cfg.END_Z) {
            this._despawnTruck();
          }
        }
        break;
    }
  }

  _spawnTruck() {
    const cfg = this.truckConfig;
    this.truckGroup = createTruck();
    this.truckGroup.position.set(cfg.ROAD_X, 0, cfg.START_Z);
    this.scene.add(this.truckGroup);
    this.truckState = 'ARRIVING';
  }

  _handleTruckArrival() {
    // 1. Snapshot current count
    this.truckSnapshot = this.cratesCount;

    if (this.truckSnapshot === 0) {
      // No goods! Show "Mal yok" notice
      this._spawnNotice(CONFIG.STRINGS.NO_GOODS, '#ff4757');
    } else {
      // Start loading snapshotted crates!
      this.truckState = 'LOADING';
      this.truckStateTimer = 0;

      // Deduct snapshotted count from available buffer
      this.cratesCount -= this.truckSnapshot;

      // Launch flying crates from pallet into truck bed
      this._launchLoadingAnimation(this.truckSnapshot);
    }
  }

  _launchLoadingAnimation(count) {
    const truckAnchor = this.truckGroup.userData.crateBedAnchor;
    const targetWorldPos = new THREE.Vector3();
    truckAnchor.getWorldPosition(targetWorldPos);

    for (let i = 0; i < count; i++) {
      // Remove visual crate from pallet
      this._removeVisualCrate();

      // Create flying crate
      const flyingMesh = createCrate(CONFIG.ITEMS.CRATE_DRY2);
      flyingMesh.scale.setScalar(0.72);

      // Start position from pallet
      const startPos = new THREE.Vector3(this.pos.x, 0.4, this.pos.z + (Math.random() - 0.5) * 0.4);
      flyingMesh.position.copy(startPos);
      this.scene.add(flyingMesh);

      this.flyingCrates.push({
        mesh: flyingMesh,
        startPos: startPos.clone(),
        progress: 0.0,
        delay: i * 0.12, // Staggered flight
        duration: this.truckConfig.CRATE_FLY_DURATION,
        arcHeight: 1.8
      });
    }
  }

  _updateFlyingCrates(dt) {
    if (this.flyingCrates.length === 0) return;

    const truckAnchor = this.truckGroup ? this.truckGroup.userData.crateBedAnchor : null;
    if (truckAnchor) {
      truckAnchor.getWorldPosition(_tempCrateTarget);
    } else {
      _tempCrateTarget.set(0, 0, 0);
    }

    for (let i = this.flyingCrates.length - 1; i >= 0; i--) {
      const item = this.flyingCrates[i];

      if (item.delay > 0) {
        item.delay -= dt;
        continue;
      }

      item.progress += dt / item.duration;

      if (item.progress >= 1.0) {
        // Crate landed in truck bed
        this.scene.remove(item.mesh);

        if (truckAnchor) {
          const bedCrate = createCrate(CONFIG.ITEMS.CRATE_DRY2);
          bedCrate.scale.setScalar(0.65);
          const bedIndex = truckAnchor.children.length;
          bedCrate.position.set(
            ((bedIndex % 3) - 1) * 0.44,
            Math.floor(bedIndex / 6) * 0.24,
            ((Math.floor(bedIndex / 3) % 2) - 0.5) * 0.55
          );
          truckAnchor.add(bedCrate);
        }

        this.flyingCrates.splice(i, 1);

        // Check if all snapshotted crates finished loading!
        if (this.flyingCrates.length === 0 && this.truckState === 'LOADING') {
          this._finalizeLoading();
        }
      } else {
        const p = item.progress;
        item.mesh.position.lerpVectors(item.startPos, _tempCrateTarget, p);
        const arc = Math.sin(p * Math.PI) * item.arcHeight;
        item.mesh.position.y += arc;
        item.mesh.rotation.y += dt * 6.0;
      }
    }
  }

  _finalizeLoading() {
    // Payment: snapshot * cratePrice
    const earnings = this.truckSnapshot * CONFIG.ECONOMY.CRATE_PRICE;
    state.addMoney(earnings, this.truckSnapshot);

    events.emit('sold', {
      earnings,
      crateCount: this.truckSnapshot,
      pos: { x: this.truckConfig.ROAD_X, y: 1.5, z: this.truckConfig.STOP_Z }
    });

    // Floating text: +X 💰
    this._spawnNotice(`+${earnings} 💰`, '#2ed573');

    // Transition to departing after brief moment (timed with delta)
    this.truckState = 'POST_LOAD';
    this.truckStateTimer = 0;
  }

  _spawnNotice(text, color) {
    // Halve floating notice generation at x3 or higher speed (visual only, earnings logic unaffected)
    const isHighSpeed = window.__GAME__ && window.__GAME__.getTimeScale && window.__GAME__.getTimeScale() >= 3;
    if (isHighSpeed) {
      this.noticeSkipCounter = (this.noticeSkipCounter || 0) + 1;
      if (this.noticeSkipCounter % 2 !== 0) {
        return;
      }
    }

    const notice = createFloatingNotice(text, color);
    const originZ = this.truckGroup ? this.truckGroup.position.z : 0;
    notice.position.set(this.truckConfig.ROAD_X, 2.8, originZ);
    this.scene.add(notice);
    this.floatingNotices.push(notice);
  }

  _updateFloatingNotices(dt, camera) {
    for (let i = this.floatingNotices.length - 1; i >= 0; i--) {
      const notice = this.floatingNotices[i];
      notice.userData.life += dt;

      if (camera) {
        notice.quaternion.copy(camera.quaternion);
      }

      notice.position.y += notice.userData.vy * dt;

      if (notice.userData.life >= notice.userData.maxLife) {
        this.scene.remove(notice);
        // Note: notice.geometry is cachedNoticePlaneGeo, do NOT dispose it!
        if (notice.material) {
          if (notice.material.map) notice.material.map.dispose();
          notice.material.dispose();
        }
        this.floatingNotices.splice(i, 1);
      }
    }
  }

  _despawnTruck() {
    if (this.truckGroup) {
      this.scene.remove(this.truckGroup);
      this.truckGroup = null;
    }
    this.truckSnapshot = 0;
    this.truckTimer = CONFIG.ECONOMY.MERCHANT_INTERVAL;
    this.truckState = 'WAITING';
  }

  /**
   * Fast test helper: calls the merchant truck immediately
   */
  callTruckImmediately() {
    if (this.truckState === 'WAITING') {
      this.truckTimer = 0;
      this._spawnTruck();
    }
  }

  getBufferCount() {
    return this.cratesCount;
  }

  getCratesCount() {
    return this.cratesCount;
  }
}
