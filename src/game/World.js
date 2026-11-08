import * as THREE from 'three';
import { CONFIG } from '../config.js';
import {
  createTree,
  createApricot,
  createGroundTile,
  createBorderSegment,
  createCrateStation,
  createDryingRack,
  createTent,
  createRoadMesh
} from './Assets.js';
import { Station } from './Station.js';
import { SalesStand } from './SalesStand.js';
import { state } from './State.js';
import { events } from './Events.js';

// Module-level temporary vector to avoid per-frame GC allocations
const _tempFruitTarget = new THREE.Vector3();

function getOptimalPixelRatio() {
  const dpr = window.devicePixelRatio || 1;
  const isLowMemory =
    (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  const maxRatio = isLowMemory ? 1.0 : 1.5;
  return Math.min(dpr, maxRatio);
}

export class World {
  /**
   * @param {HTMLElement} container
   * @param {(msg: string) => void} [onWarning]
   */
  constructor(container, onWarning = () => {}) {
    this.container = container;
    this.onWarning = onWarning;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(CONFIG.COLORS.BACKGROUND);

    // 2. Camera (Orthographic Isometric)
    const aspect = container.clientWidth / container.clientHeight;
    const frustum = CONFIG.CAMERA.FRUSTUM_SIZE;
    this.camera = new THREE.OrthographicCamera(
      (-frustum * aspect) / 2,
      (frustum * aspect) / 2,
      frustum / 2,
      -frustum / 2,
      CONFIG.CAMERA.NEAR,
      CONFIG.CAMERA.FAR
    );

    const dist = CONFIG.CAMERA.DISTANCE;
    const camX = dist * Math.SQRT1_2;
    const camZ = dist * Math.SQRT1_2;
    const camY = dist * Math.tan(CONFIG.CAMERA.ANGLE_X);
    this.cameraOffset = new THREE.Vector3(camX, camY, camZ);
    this.cameraTarget = new THREE.Vector3(0, 0, 0);

    // 3. Renderer (Cheap mobile safeguards: antialias off on mobile, pixelRatio capped at 1.5, or 1.0 on low-memory)
    const isMobile =
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
      window.innerWidth < 768;
    const antialias = !isMobile;

    this.renderer = new THREE.WebGLRenderer({ antialias, alpha: false });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(getOptimalPixelRatio());
    this.renderer.shadowMap.enabled = false;
    container.appendChild(this.renderer.domElement);

    // 4. Lights
    this._initLighting();

    // 5. Environment
    this._initGround();

    // 6. Apricot Trees on the Far Left
    this.trees = [];
    this._initTrees();

    // 7. Linear Stations Chain (Left to Right)
    this._initStations();

    // 8. Flying fruit animations
    this.flyingFruits = [];

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.onResize(), 150);
    });
  }

  _initLighting() {
    const ambient = new THREE.AmbientLight(
      CONFIG.LIGHT.AMBIENT_COLOR,
      CONFIG.LIGHT.AMBIENT_INTENSITY
    );
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(
      CONFIG.LIGHT.DIRECTIONAL_COLOR,
      CONFIG.LIGHT.DIRECTIONAL_INTENSITY
    );
    dirLight.position.set(
      CONFIG.LIGHT.DIRECTIONAL_POS.x,
      CONFIG.LIGHT.DIRECTIONAL_POS.y,
      CONFIG.LIGHT.DIRECTIONAL_POS.z
    );
    dirLight.castShadow = false;
    this.scene.add(dirLight);
  }

  _initGround() {
    const worldSize = CONFIG.WORLD.SIZE;
    const tileSize = CONFIG.WORLD.TILE_SIZE;
    const halfSize = worldSize / 2;
    const tilesCount = Math.floor(worldSize / tileSize);
    const startOffset = -halfSize + tileSize / 2;

    const groundGroup = new THREE.Group();
    groundGroup.name = 'GroundTiles';

    for (let ix = 0; ix < tilesCount; ix++) {
      for (let iz = 0; iz < tilesCount; iz++) {
        const isAlt = (ix + iz) % 2 === 1;
        const tile = createGroundTile(isAlt, tileSize);
        tile.position.set(startOffset + ix * tileSize, 0, startOffset + iz * tileSize);
        groundGroup.add(tile);
      }
    }
    this.scene.add(groundGroup);

    // Perimeter boundary border
    const bounds = CONFIG.WORLD.BOUNDS;
    const w = bounds.MAX_X - bounds.MIN_X;
    const d = bounds.MAX_Z - bounds.MIN_Z;
    const bh = CONFIG.WORLD.BORDER_HEIGHT;
    const bt = CONFIG.WORLD.BORDER_THICKNESS;

    const northBorder = createBorderSegment(w + bt * 2, bh, bt);
    northBorder.position.set(0, 0, bounds.MIN_Z - bt / 2);

    const southBorder = createBorderSegment(w + bt * 2, bh, bt);
    southBorder.position.set(0, 0, bounds.MAX_Z + bt / 2);

    const westBorder = createBorderSegment(bt, bh, d);
    westBorder.position.set(bounds.MIN_X - bt / 2, 0, 0);

    const eastBorder = createBorderSegment(bt, bh, d);
    eastBorder.position.set(bounds.MAX_X + bt / 2, 0, 0);

    this.scene.add(northBorder, southBorder, westBorder, eastBorder);

    // Road on the right side
    const roadCfg = CONFIG.PROPS.ROAD;
    const road = createRoadMesh(roadCfg.WIDTH, roadCfg.LENGTH);
    road.position.set(roadCfg.X, 0, 0);
    this.scene.add(road);
  }

  _initTrees() {
    CONFIG.TREES.POSITIONS.forEach((pos, index) => {
      const treeGroup = createTree();
      treeGroup.position.set(pos.x, 0, pos.y || pos.z);
      this.scene.add(treeGroup);

      this.trees.push({
        id: index,
        group: treeGroup,
        crownGroup: treeGroup.userData.crownGroup,
        fruitMeshes: treeGroup.userData.fruitMeshes,
        position: treeGroup.position,
        state: 'READY',
        standTimer: 0.0,
        shakeTimer: 0.0,
        cooldownTimer: 0.0,
        respawnScale: 1.0
      });
    });
  }

  _initStations() {
    // 1. Crate Packaging Station (X ~ -9.0)
    const crateStationGroup = createCrateStation();
    crateStationGroup.position.set(
      CONFIG.PROPS.CRATE_STATION.POS.x,
      0,
      CONFIG.PROPS.CRATE_STATION.POS.z
    );

    this.crateStation = new Station({
      id: CONFIG.STATIONS.CRATE_STATION.ID,
      name: CONFIG.STATIONS.CRATE_STATION.NAME,
      inputType: CONFIG.STATIONS.CRATE_STATION.INPUT_TYPE,
      outputType: CONFIG.STATIONS.CRATE_STATION.OUTPUT_TYPE,
      inputPerBatch: CONFIG.STATIONS.CRATE_STATION.INPUT_PER_BATCH,
      processTime: CONFIG.STATIONS.CRATE_STATION.PROCESS_TIME,
      slotCount: CONFIG.STATIONS.CRATE_STATION.SLOT_COUNT,
      inputBufferCapacity: CONFIG.STATIONS.CRATE_STATION.INPUT_BUFFER_CAPACITY,
      outputLimit: CONFIG.STATIONS.CRATE_STATION.OUTPUT_LIMIT,
      inputZone: CONFIG.PROPS.CRATE_STATION.INPUT_ZONE,
      outputZone: CONFIG.PROPS.CRATE_STATION.OUTPUT_ZONE,
      slotPositions: CONFIG.PROPS.CRATE_STATION.SLOT_POSITIONS,
      panelPos: CONFIG.PROPS.CRATE_STATION.PANEL_POS,
      stationGroup: crateStationGroup,
      floatingIconType: CONFIG.ITEMS.APRICOT,
      scene: this.scene,
      onWarning: this.onWarning
    });

    // 2. 1st Sun Drying Rack (X ~ -1.0)
    const dryingRack1Group = createDryingRack();
    dryingRack1Group.position.set(
      CONFIG.PROPS.DRYING_RACK_1.POS.x,
      0,
      CONFIG.PROPS.DRYING_RACK_1.POS.z
    );

    this.dryingRack1 = new Station({
      id: CONFIG.STATIONS.DRYING_RACK_1.ID,
      name: CONFIG.STATIONS.DRYING_RACK_1.NAME,
      inputType: CONFIG.STATIONS.DRYING_RACK_1.INPUT_TYPE,
      outputType: CONFIG.STATIONS.DRYING_RACK_1.OUTPUT_TYPE,
      inputPerBatch: CONFIG.STATIONS.DRYING_RACK_1.INPUT_PER_BATCH,
      processTime: CONFIG.STATIONS.DRYING_RACK_1.PROCESS_TIME,
      slotCount: CONFIG.STATIONS.DRYING_RACK_1.SLOT_COUNT,
      inputBufferCapacity: CONFIG.STATIONS.DRYING_RACK_1.INPUT_BUFFER_CAPACITY,
      outputLimit: CONFIG.STATIONS.DRYING_RACK_1.OUTPUT_LIMIT,
      inputZone: CONFIG.PROPS.DRYING_RACK_1.INPUT_ZONE,
      outputZone: CONFIG.PROPS.DRYING_RACK_1.OUTPUT_ZONE,
      slotPositions: CONFIG.PROPS.DRYING_RACK_1.SLOT_POSITIONS,
      panelPos: CONFIG.PROPS.DRYING_RACK_1.PANEL_POS,
      stationGroup: dryingRack1Group,
      floatingIconType: CONFIG.ITEMS.CRATE_FRESH,
      scene: this.scene,
      onWarning: this.onWarning
    });

    // 3. Sulfur Tent (X ~ +7.5)
    const sulfurTentGroup = createTent();
    sulfurTentGroup.position.set(
      CONFIG.PROPS.SULFUR_TENT.POS.x,
      0,
      CONFIG.PROPS.SULFUR_TENT.POS.z
    );

    const initialTentSlots = state ? state.getStat('tentSlots') : CONFIG.STATIONS.SULFUR_TENT.SLOT_COUNT;

    this.sulfurTent = new Station({
      id: CONFIG.STATIONS.SULFUR_TENT.ID,
      name: CONFIG.STATIONS.SULFUR_TENT.NAME,
      inputType: CONFIG.STATIONS.SULFUR_TENT.INPUT_TYPE,
      outputType: CONFIG.STATIONS.SULFUR_TENT.OUTPUT_TYPE,
      inputPerBatch: CONFIG.STATIONS.SULFUR_TENT.INPUT_PER_BATCH,
      processTime: CONFIG.STATIONS.SULFUR_TENT.PROCESS_TIME,
      slotCount: initialTentSlots,
      inputBufferCapacity: initialTentSlots * CONFIG.STATIONS.SULFUR_TENT.INPUT_PER_BATCH + 2,
      outputLimit: CONFIG.STATIONS.SULFUR_TENT.OUTPUT_LIMIT,
      inputZone: CONFIG.PROPS.SULFUR_TENT.INPUT_ZONE,
      outputZone: CONFIG.PROPS.SULFUR_TENT.OUTPUT_ZONE,
      slotPositions: CONFIG.PROPS.SULFUR_TENT.SLOT_POSITIONS,
      panelPos: CONFIG.PROPS.SULFUR_TENT.PANEL_POS,
      stationGroup: sulfurTentGroup,
      hasSmoke: CONFIG.STATIONS.SULFUR_TENT.HAS_SMOKE,
      smokeOrigin: CONFIG.PROPS.SULFUR_TENT.SMOKE_ORIGIN,
      floatingIconType: CONFIG.ITEMS.CRATE_DRY1,
      scene: this.scene,
      onWarning: this.onWarning
    });

    if (state) {
      state.onUpgradeChanged((upgradeId) => {
        if (upgradeId === 'tentCapacity' || upgradeId === '*') {
          this.sulfurTent.setSlotCount(state.getStat('tentSlots'));
        }
      });
    }

    // 4. 2nd Sun Drying Rack (X ~ +16.0)
    const dryingRack2Group = createDryingRack();
    dryingRack2Group.position.set(
      CONFIG.PROPS.DRYING_RACK_2.POS.x,
      0,
      CONFIG.PROPS.DRYING_RACK_2.POS.z
    );

    this.dryingRack2 = new Station({
      id: CONFIG.STATIONS.DRYING_RACK_2.ID,
      name: CONFIG.STATIONS.DRYING_RACK_2.NAME,
      inputType: CONFIG.STATIONS.DRYING_RACK_2.INPUT_TYPE,
      outputType: CONFIG.STATIONS.DRYING_RACK_2.OUTPUT_TYPE,
      inputPerBatch: CONFIG.STATIONS.DRYING_RACK_2.INPUT_PER_BATCH,
      processTime: CONFIG.STATIONS.DRYING_RACK_2.PROCESS_TIME,
      slotCount: CONFIG.STATIONS.DRYING_RACK_2.SLOT_COUNT,
      inputBufferCapacity: CONFIG.STATIONS.DRYING_RACK_2.INPUT_BUFFER_CAPACITY,
      outputLimit: CONFIG.STATIONS.DRYING_RACK_2.OUTPUT_LIMIT,
      inputZone: CONFIG.PROPS.DRYING_RACK_2.INPUT_ZONE,
      outputZone: CONFIG.PROPS.DRYING_RACK_2.OUTPUT_ZONE,
      slotPositions: CONFIG.PROPS.DRYING_RACK_2.SLOT_POSITIONS,
      panelPos: CONFIG.PROPS.DRYING_RACK_2.PANEL_POS,
      stationGroup: dryingRack2Group,
      floatingIconType: CONFIG.ITEMS.CRATE_SULFUR,
      scene: this.scene,
      onWarning: this.onWarning
    });

    // 5. Roadside Sales Stand
    this.salesStand = new SalesStand({
      scene: this.scene,
      onWarning: this.onWarning
    });
  }

  /**
   * Main world update loop
   * @param {number} dt Delta time in seconds
   * @param {import('./Player.js').Player} player
   * @param {import('./Input.js').Input} input
   */
  update(dt, player, input) {
    const playerPos = player.getPosition();
    const isPlayerMoving = input.hasInput();

    // 1. Process trees harvesting & cooldowns
    this.trees.forEach((tree) => {
      const distToPlayer = playerPos.distanceTo(tree.position);
      const isNearby = distToPlayer <= CONFIG.HARVEST.TRIGGER_DISTANCE;

      switch (tree.state) {
        case 'READY':
          if (isNearby) {
            const curType = player.getCurrentType();
            if (curType !== null && curType !== CONFIG.ITEMS.APRICOT) {
              if (!isPlayerMoving) {
                this.onWarning(CONFIG.STRINGS.WARNING_EMPTY_HANDS);
              }
              tree.standTimer = 0.0;
              tree.crownGroup.rotation.z = 0;
              break;
            }

            if (!player.isFull()) {
              if (!isPlayerMoving) {
                tree.standTimer += dt;
                const standTime = state ? state.getStat('standStillTime') : CONFIG.HARVEST.STAND_STILL_TIME;
                const progress = tree.standTimer / standTime;
                if (progress > 0.4) {
                  tree.crownGroup.rotation.z = Math.sin(tree.standTimer * 20.0) * (0.02 * progress);
                }

                if (tree.standTimer >= standTime) {
                  tree.state = 'SHAKING';
                  tree.shakeTimer = 0.0;
                  tree.standTimer = 0.0;
                }
              } else {
                tree.standTimer = 0.0;
                tree.crownGroup.rotation.z = 0;
              }
            }
          } else {
            tree.standTimer = 0.0;
            tree.crownGroup.rotation.z = 0;
          }
          break;

        case 'SHAKING':
          tree.shakeTimer += dt;
          const shakeFactor = Math.sin(tree.shakeTimer * CONFIG.HARVEST.SHAKE_FREQUENCY);
          tree.crownGroup.rotation.z = shakeFactor * CONFIG.HARVEST.SHAKE_INTENSITY;
          tree.crownGroup.rotation.x = Math.cos(tree.shakeTimer * CONFIG.HARVEST.SHAKE_FREQUENCY) * (CONFIG.HARVEST.SHAKE_INTENSITY * 0.6);

          if (tree.shakeTimer >= CONFIG.HARVEST.SHAKE_DURATION) {
            tree.crownGroup.rotation.set(0, 0, 0);
            tree.state = 'COOLDOWN';
            tree.cooldownTimer = CONFIG.HARVEST.RESPAWN_COOLDOWN;

            tree.fruitMeshes.forEach((f) => (f.visible = false));
            this._spawnHarvestDrop(tree, player);
          }
          break;

        case 'COOLDOWN':
          tree.cooldownTimer -= dt;
          if (tree.cooldownTimer <= 0) {
            tree.state = 'READY';
            tree.standTimer = 0.0;
            tree.fruitMeshes.forEach((f) => {
              f.visible = true;
              f.scale.set(0.01, 0.01, 0.01);
            });
            tree.respawnScale = 0.01;
          }
          break;
      }

      if (tree.state === 'READY' && tree.respawnScale < 1.0) {
        tree.respawnScale = Math.min(1.0, tree.respawnScale + dt * 3.5);
        tree.fruitMeshes.forEach((f) => {
          f.scale.setScalar(tree.respawnScale);
        });
      }
    });

    // 2. Update active flying fruits
    this._updateFlyingFruits(dt, player);

    // 3. Update All Stations & Sales Stand
    this.crateStation.update(dt, player, this.camera);
    this.dryingRack1.update(dt, player, this.camera);
    this.sulfurTent.update(dt, player, this.camera);
    this.dryingRack2.update(dt, player, this.camera);
    this.salesStand.update(dt, player, this.camera);

    // 4. Smooth Camera Follow
    this._updateCamera(dt, playerPos);
  }

  _spawnHarvestDrop(tree, player) {
    const fruitsToDrop = CONFIG.TREES.FRUITS_PER_TREE;

    for (let i = 0; i < fruitsToDrop; i++) {
      const dropMesh = createApricot(false);
      this.scene.add(dropMesh);

      const sourceFruit = tree.fruitMeshes[i];
      const startWorldPos = new THREE.Vector3();
      sourceFruit.getWorldPosition(startWorldPos);
      dropMesh.position.copy(startWorldPos);

      this.flyingFruits.push({
        mesh: dropMesh,
        startPos: startWorldPos.clone(),
        progress: 0.0,
        delay: i * 0.08,
        duration: CONFIG.HARVEST.DROP_FLIGHT_DURATION,
        arcHeight: CONFIG.HARVEST.DROP_ARC_HEIGHT
      });
    }
  }

  _updateFlyingFruits(dt, player) {
    for (let i = this.flyingFruits.length - 1; i >= 0; i--) {
      const item = this.flyingFruits[i];

      if (item.delay > 0) {
        item.delay -= dt;
        continue;
      }

      item.progress += dt / item.duration;
      player.getStackWorldPosition(_tempFruitTarget);

      if (item.progress >= 1.0) {
        this.scene.remove(item.mesh);
        player.addApricot();
        events.emit('apricot_collected', { count: player.getCount() });
        this.flyingFruits.splice(i, 1);
      } else {
        const p = item.progress;
        item.mesh.position.lerpVectors(item.startPos, _tempFruitTarget, p);
        const arc = Math.sin(p * Math.PI) * item.arcHeight;
        item.mesh.position.y += arc;
        item.mesh.rotation.x += dt * 8.0;
        item.mesh.rotation.y += dt * 6.0;
      }
    }
  }

  _updateCamera(dt, playerPos) {
    this.cameraTarget.lerp(playerPos, CONFIG.CAMERA.FOLLOW_LERP);
    this.camera.position.copy(this.cameraTarget).add(this.cameraOffset);
    this.camera.lookAt(this.cameraTarget.x, this.cameraTarget.y + 0.6, this.cameraTarget.z);
  }

  onResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width === 0 || height === 0) return;

    const aspect = width / height;
    const frustum = CONFIG.CAMERA.FRUSTUM_SIZE;

    let halfW, halfH;
    if (aspect >= 1.0) {
      // Landscape: keep constant vertical height
      halfH = frustum / 2;
      halfW = halfH * aspect;
    } else {
      // Portrait: ensure comfortable horizontal view for stations
      const minW = 12.0;
      halfW = Math.max(minW, frustum * aspect) / 2;
      halfH = halfW / aspect;
    }

    this.camera.left = -halfW;
    this.camera.right = halfW;
    this.camera.top = halfH;
    this.camera.bottom = -halfH;
    this.camera.updateProjectionMatrix();

    this.renderer.setPixelRatio(getOptimalPixelRatio());
    this.renderer.setSize(width, height);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
