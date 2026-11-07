import * as THREE from 'three';
import { CONFIG } from '../config.js';

// Cache reusable materials
const materials = {
  groundLight: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.GROUND_LIGHT, flatShading: true }),
  groundDark: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.GROUND_DARK, flatShading: true }),
  border: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.BORDER, flatShading: true }),
  treeTrunk: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TREE_TRUNK, flatShading: true }),
  foliageBottom: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TREE_FOLIAGE_BOTTOM, flatShading: true }),
  foliageTop: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TREE_FOLIAGE_TOP, flatShading: true }),
  apricotFresh: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.APRICOT, flatShading: true }),
  apricotDry1: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.APRICOT_DRY1, flatShading: true }),
  apricotSulfur: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.APRICOT_SULFUR, flatShading: true }),
  apricotDry2: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.APRICOT_DRY2, flatShading: true }),
  apricotLeaf: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.APRICOT_LEAF, flatShading: true }),
  playerShirt: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.PLAYER_SHIRT, flatShading: true }),
  playerSkin: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.PLAYER_SKIN, flatShading: true }),
  playerHat: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.PLAYER_HAT, flatShading: true }),
  playerFeet: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.PLAYER_FEET, flatShading: true }),
  basket: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.BASKET, flatShading: true }),
  crate: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.CRATE, flatShading: true }),
  crateSlat: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.CRATE_SLAT, flatShading: true }),
  stationTable: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.STATION_TABLE, flatShading: true }),
  stationMetal: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.STATION_METAL, flatShading: true }),
  stationFunnel: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.STATION_FUNNEL, flatShading: true }),
  rackFrame: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.RACK_FRAME, flatShading: true }),
  rackNet: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.RACK_NET, flatShading: true }),
  tentRoof: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TENT_ROOF, flatShading: true }),
  tentTrim: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TENT_TRIM, flatShading: true }),
  tentEntrance: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TENT_ENTRANCE, flatShading: true }),
  smoke: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.SMOKE, transparent: true, opacity: 0.5, flatShading: true }),
  road: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.ROAD, flatShading: true }),
  roadLine: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.ROAD_LINE, flatShading: true }),
  truckCabin: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TRUCK_CABIN, flatShading: true }),
  truckRoof: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TRUCK_ROOF, flatShading: true }),
  truckBed: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TRUCK_BED, flatShading: true }),
  truckBumper: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.TRUCK_BUMPER, flatShading: true }),
  zoneInput: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.ZONE_INPUT, transparent: true, opacity: 0.65 }),
  zoneOutput: new THREE.MeshLambertMaterial({ color: CONFIG.COLORS.ZONE_OUTPUT, transparent: true, opacity: 0.65 }),
  zoneIcon: new THREE.MeshLambertMaterial({ color: 0xffffff }),
  progressBg: new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.PROGRESS_BG }),
  progressFill: new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.PROGRESS_FILL }),
  progressPaused: new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.PROGRESS_PAUSED }),
  checkGreen: new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.CHECK_GREEN })
};

/**
 * Creates a low-poly Apricot fruit group.
 * Pivot at bottom center (Y = 0).
 * @param {boolean} isDry
 * @returns {THREE.Group}
 */
export function createApricot(isDry = false) {
  const group = new THREE.Group();
  group.name = 'Apricot';

  const cfg = CONFIG.APRICOT;
  const bodyGeo = new THREE.SphereGeometry(cfg.RADIUS, cfg.WIDTH_SEGMENTS, cfg.HEIGHT_SEGMENTS);
  const bodyMesh = new THREE.Mesh(bodyGeo, isDry ? materials.apricotDry1 : materials.apricotFresh);
  bodyMesh.position.y = cfg.RADIUS;
  group.add(bodyMesh);

  const stemGeo = new THREE.CylinderGeometry(cfg.STEM_RADIUS, cfg.STEM_RADIUS, cfg.STEM_HEIGHT, 4);
  const stemMesh = new THREE.Mesh(stemGeo, materials.treeTrunk);
  stemMesh.position.y = cfg.RADIUS * 2 + cfg.STEM_HEIGHT / 2 - 0.02;
  group.add(stemMesh);

  const leafGeo = new THREE.BoxGeometry(cfg.LEAF_WIDTH, cfg.LEAF_HEIGHT, cfg.LEAF_DEPTH);
  const leafMesh = new THREE.Mesh(leafGeo, materials.apricotLeaf);
  leafMesh.position.set(cfg.LEAF_WIDTH / 2, cfg.RADIUS * 2 + 0.01, 0);
  leafMesh.rotation.z = 0.3;
  group.add(leafMesh);

  return group;
}

/**
 * Creates a Crate containing apricots (Fresh, Dry1, Sulfur, or Dry2).
 * Pivot at bottom center (Y = 0).
 * @param {'crate_fresh' | 'crate_dry1' | 'crate_sulfur' | 'crate_dry2'} type
 * @returns {THREE.Group}
 */
export function createCrate(type = CONFIG.ITEMS.CRATE_FRESH) {
  const group = new THREE.Group();
  group.name = `Crate_${type}`;
  const cfg = CONFIG.PROPS.CRATE;

  // Outer wooden box bottom
  const bottomGeo = new THREE.BoxGeometry(cfg.WIDTH, 0.04, cfg.DEPTH);
  const bottomMesh = new THREE.Mesh(bottomGeo, materials.crateSlat);
  bottomMesh.position.y = 0.02;
  group.add(bottomMesh);

  // Side walls
  const wallH = cfg.HEIGHT - 0.04;
  const longWallGeo = new THREE.BoxGeometry(cfg.WIDTH, wallH, cfg.WALL_THICKNESS);
  const shortWallGeo = new THREE.BoxGeometry(cfg.WALL_THICKNESS, wallH, cfg.DEPTH - cfg.WALL_THICKNESS * 2);

  const frontWall = new THREE.Mesh(longWallGeo, materials.crate);
  frontWall.position.set(0, wallH / 2 + 0.04, cfg.DEPTH / 2 - cfg.WALL_THICKNESS / 2);

  const backWall = new THREE.Mesh(longWallGeo, materials.crate);
  backWall.position.set(0, wallH / 2 + 0.04, -cfg.DEPTH / 2 + cfg.WALL_THICKNESS / 2);

  const leftWall = new THREE.Mesh(shortWallGeo, materials.crate);
  leftWall.position.set(-cfg.WIDTH / 2 + cfg.WALL_THICKNESS / 2, wallH / 2 + 0.04, 0);

  const rightWall = new THREE.Mesh(shortWallGeo, materials.crate);
  rightWall.position.set(cfg.WIDTH / 2 - cfg.WALL_THICKNESS / 2, wallH / 2 + 0.04, 0);

  group.add(frontWall, backWall, leftWall, rightWall);

  // Material selection based on crate type
  let fruitMat = materials.apricotFresh;
  if (type === CONFIG.ITEMS.CRATE_DRY1) {
    fruitMat = materials.apricotDry1;
  } else if (type === CONFIG.ITEMS.CRATE_SULFUR) {
    fruitMat = materials.apricotSulfur;
  } else if (type === CONFIG.ITEMS.CRATE_DRY2) {
    fruitMat = materials.apricotDry2;
  }

  const fruitGeo = new THREE.SphereGeometry(0.08, 6, 5);
  const fruitRows = 2;
  const fruitCols = 3;
  const spacingX = 0.16;
  const spacingZ = 0.16;

  for (let r = 0; r < fruitRows; r++) {
    for (let c = 0; c < fruitCols; c++) {
      const f = new THREE.Mesh(fruitGeo, fruitMat);
      const fx = (c - (fruitCols - 1) / 2) * spacingX;
      const fz = (r - (fruitRows - 1) / 2) * spacingZ;
      f.position.set(fx, 0.14, fz);
      group.add(f);
    }
  }

  group.userData = {
    type,
    height: cfg.HEIGHT
  };

  return group;
}

/**
 * Creates the Crate Packaging Station.
 * Pivot at bottom center (Y = 0).
 * @returns {THREE.Group}
 */
export function createCrateStation() {
  const group = new THREE.Group();
  group.name = 'CrateStation';
  const cfg = CONFIG.PROPS.CRATE_STATION;

  const tableGeo = new THREE.BoxGeometry(cfg.TABLE_WIDTH, 0.1, cfg.TABLE_DEPTH);
  const tableMesh = new THREE.Mesh(tableGeo, materials.stationTable);
  tableMesh.position.y = cfg.TABLE_HEIGHT;
  group.add(tableMesh);

  const legGeo = new THREE.CylinderGeometry(0.06, 0.06, cfg.TABLE_HEIGHT, 6);
  const halfW = cfg.TABLE_WIDTH / 2 - 0.15;
  const halfD = cfg.TABLE_DEPTH / 2 - 0.15;
  [
    [-halfW, -halfD],
    [halfW, -halfD],
    [-halfW, halfD],
    [halfW, halfD]
  ].forEach(([x, z]) => {
    const leg = new THREE.Mesh(legGeo, materials.stationMetal);
    leg.position.set(x, cfg.TABLE_HEIGHT / 2, z);
    group.add(leg);
  });

  // Funnel on left (Input)
  const funnelGeo = new THREE.CylinderGeometry(0.48, 0.18, cfg.FUNNEL_HEIGHT, 8, 1, true);
  const funnelMesh = new THREE.Mesh(funnelGeo, materials.stationFunnel);
  funnelMesh.position.set(-cfg.TABLE_WIDTH / 4, cfg.TABLE_HEIGHT + cfg.FUNNEL_HEIGHT / 2, 0);
  group.add(funnelMesh);

  // Tray on right (Output)
  const trayGeo = new THREE.BoxGeometry(cfg.TABLE_WIDTH / 2.2, 0.06, cfg.TABLE_DEPTH * 0.7);
  const trayMesh = new THREE.Mesh(trayGeo, materials.stationMetal);
  trayMesh.position.set(cfg.TABLE_WIDTH / 4, cfg.TABLE_HEIGHT + 0.06, 0);
  group.add(trayMesh);

  return group;
}

/**
 * Creates the Sun Drying Rack (Güneş Kurutma Rafı).
 * Can be reused for Rack 1 and Rack 2.
 * Pivot at bottom center (Y = 0).
 * @returns {THREE.Group}
 */
export function createDryingRack() {
  const group = new THREE.Group();
  group.name = 'DryingRack';
  const cfg = CONFIG.PROPS.DRYING_RACK_1;

  const shelfGeo = new THREE.BoxGeometry(cfg.WIDTH, cfg.SHELF_THICKNESS, cfg.DEPTH);
  const shelfMesh = new THREE.Mesh(shelfGeo, materials.rackNet);
  shelfMesh.position.y = cfg.HEIGHT;
  group.add(shelfMesh);

  const legGeo = new THREE.CylinderGeometry(cfg.LEG_RADIUS, cfg.LEG_RADIUS, cfg.HEIGHT, 6);
  const halfW = cfg.WIDTH / 2 - 0.1;
  const halfD = cfg.DEPTH / 2 - 0.1;
  [
    [-halfW, -halfD],
    [0, -halfD],
    [halfW, -halfD],
    [-halfW, halfD],
    [0, halfD],
    [halfW, halfD]
  ].forEach(([x, z]) => {
    const leg = new THREE.Mesh(legGeo, materials.rackFrame);
    leg.position.set(x, cfg.HEIGHT / 2, z);
    group.add(leg);
  });

  const dividerXGeo = new THREE.BoxGeometry(0.04, 0.08, cfg.DEPTH);
  const dividerX = new THREE.Mesh(dividerXGeo, materials.rackFrame);
  dividerX.position.set(0, cfg.HEIGHT + 0.04, 0);

  const dividerZGeo = new THREE.BoxGeometry(cfg.WIDTH, 0.08, 0.04);
  const dividerZ = new THREE.Mesh(dividerZGeo, materials.rackFrame);
  dividerZ.position.set(0, cfg.HEIGHT + 0.04, 0);

  group.add(dividerX, dividerZ);
  return group;
}

/**
 * Creates the Sulfur Tent (Kükürt Çadırı).
 * Closed triangular cross-section structure with entrance flap and vent.
 * Pivot at bottom center (Y = 0).
 * @returns {THREE.Group}
 */
export function createTent() {
  const group = new THREE.Group();
  group.name = 'SulfurTent';
  const cfg = CONFIG.PROPS.SULFUR_TENT;

  // Triangular prism tent roof (Cylinder with 3 segments)
  const roofRadius = cfg.WIDTH / 1.5;
  const roofGeo = new THREE.CylinderGeometry(roofRadius, roofRadius, cfg.DEPTH, 3);
  roofGeo.rotateZ(Math.PI / 2); // Orient triangle horizontally along Z
  roofGeo.rotateY(Math.PI / 6); // Point apex straight UP

  const roofMesh = new THREE.Mesh(roofGeo, materials.tentRoof);
  roofMesh.position.set(0, cfg.HEIGHT / 2 + 0.2, 0);
  group.add(roofMesh);

  // Roof ridge trim (Box)
  const ridgeGeo = new THREE.BoxGeometry(0.12, 0.12, cfg.DEPTH + 0.1);
  const ridgeMesh = new THREE.Mesh(ridgeGeo, materials.tentTrim);
  ridgeMesh.position.set(0, cfg.HEIGHT + 0.25, 0);
  group.add(ridgeMesh);

  // Front entrance opening (Dark flap / doorway)
  const doorGeo = new THREE.BoxGeometry(0.06, 1.2, 0.9);
  const doorMesh = new THREE.Mesh(doorGeo, materials.tentEntrance);
  doorMesh.position.set(-cfg.WIDTH / 2 + 0.15, 0.6, 0);
  group.add(doorMesh);

  // Wooden base footing
  const baseGeo = new THREE.BoxGeometry(cfg.WIDTH + 0.2, 0.15, cfg.DEPTH + 0.2);
  const baseMesh = new THREE.Mesh(baseGeo, materials.stationTable);
  baseMesh.position.y = 0.075;
  group.add(baseMesh);

  return group;
}

/**
 * Creates a floating spinning guide badge representing the item accepted by a station.
 * @param {string} itemType 'apricot' | 'crate_fresh' | 'crate_dry1' | 'crate_sulfur'
 * @returns {THREE.Group}
 */
export function createFloatingBadge(itemType) {
  const group = new THREE.Group();
  group.name = `FloatingBadge_${itemType}`;

  let innerMesh;
  if (itemType === CONFIG.ITEMS.APRICOT) {
    innerMesh = createApricot(false);
    innerMesh.scale.setScalar(1.2);
  } else {
    innerMesh = createCrate(itemType);
    innerMesh.scale.setScalar(0.7);
  }

  // Center inner mesh vertically
  innerMesh.position.y = 0;
  group.add(innerMesh);

  // Gentle floating shadow disk beneath badge
  const shadowGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.01, 16);
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 });
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.position.y = -0.3;
  group.add(shadowMesh);

  return group;
}

/**
 * Creates a reusable Smoke Particle for the static smoke pool.
 * @returns {THREE.Mesh}
 */
export function createSmokeParticle() {
  const geo = new THREE.SphereGeometry(0.2, 6, 5);
  const mesh = new THREE.Mesh(geo, materials.smoke);
  mesh.visible = false;
  mesh.userData = {
    active: false,
    life: 0,
    maxLife: 2.2,
    vx: 0,
    vy: 0.8,
    vz: 0,
    baseScale: 1.0
  };
  return mesh;
}

/**
 * Creates an interactive Ground Zone Marker (Turquoise for Input, Yellow for Output).
 * Pivot at bottom center (Y = 0).
 * @param {'input' | 'output'} type
 * @param {number} radius
 * @returns {THREE.Group}
 */
export function createZoneMarker(type, radius = 1.2) {
  const group = new THREE.Group();
  group.name = `ZoneMarker_${type}`;

  const isInput = type === 'input';
  const mat = isInput ? materials.zoneInput : materials.zoneOutput;

  const ringGeo = new THREE.CylinderGeometry(radius, radius, 0.02, 24);
  const ringMesh = new THREE.Mesh(ringGeo, mat);
  ringMesh.position.y = 0.01;
  group.add(ringMesh);

  const iconGroup = new THREE.Group();
  iconGroup.position.y = 0.025;

  if (isInput) {
    const shaftGeo = new THREE.BoxGeometry(0.12, 0.01, 0.35);
    const shaft = new THREE.Mesh(shaftGeo, materials.zoneIcon);
    shaft.position.z = -0.08;

    const headGeo = new THREE.CylinderGeometry(0.24, 0.0, 0.01, 3);
    headGeo.rotateY(Math.PI);
    const head = new THREE.Mesh(headGeo, materials.zoneIcon);
    head.position.z = 0.16;

    iconGroup.add(shaft, head);
  } else {
    const shaftGeo = new THREE.BoxGeometry(0.12, 0.01, 0.35);
    const shaft = new THREE.Mesh(shaftGeo, materials.zoneIcon);
    shaft.position.z = 0.08;

    const headGeo = new THREE.CylinderGeometry(0.24, 0.0, 0.01, 3);
    const head = new THREE.Mesh(headGeo, materials.zoneIcon);
    head.position.z = -0.16;

    iconGroup.add(shaft, head);
  }

  group.add(iconGroup);
  group.userData = { ringMesh, iconGroup };
  return group;
}

/**
 * Creates a 3D Billboard Progress Bar with Green Checkmark when Ready.
 * Pivot at bottom center (Y = 0).
 * @returns {THREE.Group}
 */
export function createSlotProgressBar() {
  const group = new THREE.Group();
  group.name = 'SlotProgressBar';

  const barW = 0.55;
  const barH = 0.09;
  const barD = 0.05;

  const bgGeo = new THREE.BoxGeometry(barW, barH, barD);
  const bgMesh = new THREE.Mesh(bgGeo, materials.progressBg);
  group.add(bgMesh);

  const fillGeo = new THREE.BoxGeometry(barW - 0.04, barH - 0.03, barD + 0.01);
  const fillMesh = new THREE.Mesh(fillGeo, materials.progressFill);
  fillMesh.position.z = 0.01;
  fillMesh.scale.x = 0.0001;
  group.add(fillMesh);

  const checkGroup = new THREE.Group();
  checkGroup.name = 'Checkmark';
  checkGroup.visible = false;
  checkGroup.position.z = 0.02;

  const stem1Geo = new THREE.BoxGeometry(0.06, 0.14, 0.04);
  const stem1 = new THREE.Mesh(stem1Geo, materials.checkGreen);
  stem1.rotation.z = -Math.PI / 4;
  stem1.position.set(-0.06, -0.02, 0);

  const stem2Geo = new THREE.BoxGeometry(0.06, 0.28, 0.04);
  const stem2 = new THREE.Mesh(stem2Geo, materials.checkGreen);
  stem2.rotation.z = Math.PI / 4;
  stem2.position.set(0.05, 0.04, 0);

  checkGroup.add(stem1, stem2);
  group.add(checkGroup);

  group.userData = {
    fillMesh,
    checkGroup,
    bgMesh,
    setProgress: (ratio, isReady, isPaused = false) => {
      if (isReady) {
        bgMesh.visible = false;
        fillMesh.visible = false;
        checkGroup.visible = true;
      } else {
        bgMesh.visible = true;
        fillMesh.visible = true;
        checkGroup.visible = false;
        fillMesh.material = isPaused ? materials.progressPaused : materials.progressFill;
        const clamped = Math.max(0.0001, Math.min(1.0, ratio));
        fillMesh.scale.x = clamped;
        fillMesh.position.x = ((clamped - 1.0) * (barW - 0.04)) / 2;
      }
    }
  };

  return group;
}

/**
 * Creates a reusable Station Status Panel (CanvasTexture Billboard).
 * Shows each slot's progress bar, remaining seconds ("18sn"), or green checkmark when ready.
 * @param {number} slotCount
 * @returns {THREE.Mesh}
 */
export function createStationStatusPanel(slotCount = 1) {
  const canvas = document.createElement('canvas');
  const rowHeight = 44;
  const padding = 14;
  const canvasW = 340;
  const canvasH = padding * 2 + slotCount * rowHeight;
  canvas.width = canvasW;
  canvas.height = canvasH;

  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  // 3D Plane dimensions proportional to slot count
  const planeW = 1.35;
  const planeH = 0.22 + slotCount * 0.16;
  const geo = new THREE.PlaneGeometry(planeW, planeH);
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'StationStatusPanel';

  let lastStateKey = '';

  mesh.userData = {
    update: (slots, isClogged) => {
      const stateKey = slots.map(s => {
        const rem = Math.max(0, Math.ceil(s.maxTime - s.progress));
        return `${s.state}_${rem}_${isClogged ? 1 : 0}`;
      }).join('|');

      if (stateKey === lastStateKey) return;
      lastStateKey = stateKey;

      ctx.clearRect(0, 0, canvasW, canvasH);

      // Panel background
      ctx.fillStyle = 'rgba(26, 36, 43, 0.88)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 3;
      drawRoundRect(ctx, 4, 4, canvasW - 8, canvasH - 8, 12);
      ctx.fill();
      ctx.stroke();

      // Draw each slot row
      slots.forEach((slot, index) => {
        const y = padding + index * rowHeight;

        ctx.fillStyle = '#dfe4ea';
        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(`S${index + 1}:`, 14, y + 15);

        const barX = 48;
        const barY = y + 4;
        const barW = 180;
        const barH = 22;

        if (slot.state === 'EMPTY') {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
          drawRoundRect(ctx, barX, barY, barW, barH, 5);
          ctx.fill();

          ctx.fillStyle = '#a4b0be';
          ctx.font = '13px sans-serif';
          ctx.fillText('Boş', barX + 10, barY + barH / 2);
        } else if (slot.state === 'PROCESSING') {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
          drawRoundRect(ctx, barX, barY, barW, barH, 5);
          ctx.fill();

          const ratio = Math.max(0.02, Math.min(1.0, slot.progress / slot.maxTime));
          ctx.fillStyle = isClogged ? '#e67e22' : '#10ac84';
          drawRoundRect(ctx, barX, barY, barW * ratio, barH, 5);
          ctx.fill();

          const remSec = Math.max(0, Math.ceil(slot.maxTime - slot.progress));
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 14px sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(isClogged ? 'Durakladı' : `${remSec}sn`, barX + barW + 10, barY + barH / 2);
        } else if (slot.state === 'READY') {
          ctx.fillStyle = 'rgba(46, 213, 115, 0.2)';
          drawRoundRect(ctx, barX, barY, barW, barH, 5);
          ctx.fill();

          ctx.fillStyle = '#2ed573';
          ctx.font = 'bold 15px sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText('✓ HAZIR', barX + 10, barY + barH / 2);
        }
      });

      texture.needsUpdate = true;
    }
  };

  return mesh;
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Creates a Player character group.
 * Pivot at bottom center (Y = 0).
 * @returns {THREE.Group}
 */
export function createPlayer() {
  const group = new THREE.Group();
  group.name = 'Player';
  const cfg = CONFIG.PLAYER;

  const footGeo = new THREE.BoxGeometry(cfg.FEET_WIDTH, cfg.FEET_HEIGHT, cfg.FEET_DEPTH);
  const leftFoot = new THREE.Mesh(footGeo, materials.playerFeet);
  leftFoot.position.set(-cfg.FEET_SPACING, cfg.FEET_Y, 0.02);
  const rightFoot = new THREE.Mesh(footGeo, materials.playerFeet);
  rightFoot.position.set(cfg.FEET_SPACING, cfg.FEET_Y, 0.02);
  group.add(leftFoot, rightFoot);

  const bodyGeo = new THREE.CylinderGeometry(
    cfg.BODY_RADIUS_TOP,
    cfg.BODY_RADIUS_BOTTOM,
    cfg.BODY_HEIGHT,
    8
  );
  const bodyMesh = new THREE.Mesh(bodyGeo, materials.playerShirt);
  bodyMesh.position.y = cfg.BODY_Y;
  group.add(bodyMesh);

  const headGeo = new THREE.SphereGeometry(cfg.HEAD_RADIUS, 8, 7);
  const headMesh = new THREE.Mesh(headGeo, materials.playerSkin);
  headMesh.position.y = cfg.HEAD_HEIGHT;
  group.add(headMesh);

  const hatBrimGeo = new THREE.CylinderGeometry(cfg.HAT_RADIUS, cfg.HAT_RADIUS, cfg.HAT_HEIGHT, 8);
  const hatBrimMesh = new THREE.Mesh(hatBrimGeo, materials.playerHat);
  hatBrimMesh.position.y = cfg.HAT_Y;

  const hatTopGeo = new THREE.CylinderGeometry(cfg.HAT_TOP_RADIUS, cfg.HAT_TOP_RADIUS, cfg.HAT_TOP_HEIGHT, 8);
  const hatTopMesh = new THREE.Mesh(hatTopGeo, materials.playerHat);
  hatTopMesh.position.y = cfg.HAT_Y + cfg.HAT_HEIGHT / 2 + cfg.HAT_TOP_HEIGHT / 2;
  group.add(hatBrimMesh, hatTopMesh);

  const basketGeo = new THREE.BoxGeometry(cfg.BASKET_WIDTH, cfg.BASKET_HEIGHT, cfg.BASKET_DEPTH);
  const basketMesh = new THREE.Mesh(basketGeo, materials.basket);
  basketMesh.position.set(0, cfg.BASKET_Y, cfg.BASKET_Z);
  group.add(basketMesh);

  const fruitAnchor = new THREE.Group();
  fruitAnchor.name = 'FruitAnchor';
  fruitAnchor.position.set(0, cfg.STACK.OFFSET_Y, cfg.STACK.OFFSET_Z);
  group.add(fruitAnchor);

  const crateAnchor = new THREE.Group();
  crateAnchor.name = 'CrateAnchor';
  crateAnchor.position.set(0, cfg.CRATE_STACK.OFFSET_Y, cfg.CRATE_STACK.OFFSET_Z);
  group.add(crateAnchor);

  group.userData = {
    fruitAnchor,
    crateAnchor,
    basketMesh,
    leftFoot,
    rightFoot
  };

  return group;
}

/**
 * Creates an Apricot Tree group.
 * Pivot at bottom center (Y = 0).
 * @returns {THREE.Group}
 */
export function createTree() {
  const group = new THREE.Group();
  group.name = 'Tree';
  const cfg = CONFIG.TREES;

  const trunkGeo = new THREE.CylinderGeometry(
    cfg.TRUNK_RADIUS_TOP,
    cfg.TRUNK_RADIUS_BOTTOM,
    cfg.TRUNK_HEIGHT,
    cfg.TRUNK_SEGMENTS
  );
  const trunkMesh = new THREE.Mesh(trunkGeo, materials.treeTrunk);
  trunkMesh.position.y = cfg.TRUNK_HEIGHT / 2;
  group.add(trunkMesh);

  const crownGroup = new THREE.Group();
  crownGroup.name = 'CrownGroup';

  cfg.CROWN_TIERS.forEach((tier, index) => {
    const foliageGeo = new THREE.CylinderGeometry(
      0.1,
      tier.radius,
      tier.height,
      tier.segments
    );
    const foliageMat = index === 0 ? materials.foliageBottom : materials.foliageTop;
    const foliageMesh = new THREE.Mesh(foliageGeo, foliageMat);
    foliageMesh.position.y = tier.y + tier.height / 2;
    crownGroup.add(foliageMesh);
  });
  group.add(crownGroup);

  const fruitMeshes = [];
  for (let i = 0; i < cfg.FRUITS_PER_TREE; i++) {
    const fruit = createApricot(false);
    const offset = cfg.FRUIT_OFFSETS[i] || { x: 0, y: 2.0, z: 0 };
    fruit.position.set(offset.x, offset.y, offset.z);
    fruit.userData = {
      basePos: fruit.position.clone(),
      index: i
    };
    crownGroup.add(fruit);
    fruitMeshes.push(fruit);
  }

  group.userData = {
    crownGroup,
    fruitMeshes
  };

  return group;
}

/**
 * Creates a Ground Tile (Box).
 * Pivot at bottom center (Y = 0) with top surface at 0.
 * @param {boolean} isAlt
 * @param {number} size
 * @returns {THREE.Group}
 */
export function createGroundTile(isAlt = false, size = CONFIG.WORLD.TILE_SIZE) {
  const group = new THREE.Group();
  const geo = new THREE.BoxGeometry(size, 0.4, size);
  const mat = isAlt ? materials.groundDark : materials.groundLight;
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = -0.2;
  group.add(mesh);
  return group;
}

/**
 * Creates a boundary wall/border segment.
 * @param {number} width
 * @param {number} height
 * @param {number} depth
 * @returns {THREE.Group}
 */
export function createBorderSegment(width, height, depth) {
  const group = new THREE.Group();
  const geo = new THREE.BoxGeometry(width, height, depth);
  const mesh = new THREE.Mesh(geo, materials.border);
  mesh.position.y = height / 2;
  group.add(mesh);
  return group;
}

/**
 * Creates the Merchant Truck (Low-poly truck with cabin, flatbed, wheels, and cargo anchor).
 * Pivot at bottom center (Y = 0).
 * @returns {THREE.Group}
 */
export function createTruck() {
  const group = new THREE.Group();
  group.name = 'MerchantTruck';

  const wheelR = 0.36;
  const wheelW = 0.28;
  const bedW = 2.1;
  const bedL = 3.2;
  const bedH = 0.7;

  // Cargo Bed (Flatbed)
  const bedFloorGeo = new THREE.BoxGeometry(bedW, 0.12, bedL);
  const bedFloor = new THREE.Mesh(bedFloorGeo, materials.truckBed);
  bedFloor.position.set(0, wheelR * 2 + 0.06, -0.4);
  group.add(bedFloor);

  // Bed side railings
  const railSideGeo = new THREE.BoxGeometry(0.08, bedH, bedL);
  const leftRail = new THREE.Mesh(railSideGeo, materials.truckBed);
  leftRail.position.set(-bedW / 2 + 0.04, wheelR * 2 + bedH / 2, -0.4);
  const rightRail = new THREE.Mesh(railSideGeo, materials.truckBed);
  rightRail.position.set(bedW / 2 - 0.04, wheelR * 2 + bedH / 2, -0.4);
  const backRailGeo = new THREE.BoxGeometry(bedW, bedH, 0.08);
  const backRail = new THREE.Mesh(backRailGeo, materials.truckBed);
  backRail.position.set(0, wheelR * 2 + bedH / 2, -0.4 - bedL / 2 + 0.04);
  group.add(leftRail, rightRail, backRail);

  // Cabin (Front)
  const cabinW = 1.9;
  const cabinH = 1.5;
  const cabinL = 1.5;
  const cabinGeo = new THREE.BoxGeometry(cabinW, cabinH, cabinL);
  const cabin = new THREE.Mesh(cabinGeo, materials.truckCabin);
  cabin.position.set(0, wheelR * 2 + cabinH / 2, 1.35);
  group.add(cabin);

  // Windshield
  const glassGeo = new THREE.BoxGeometry(cabinW - 0.2, 0.6, 0.04);
  const glassMat = new THREE.MeshLambertMaterial({ color: 0x2f3542, flatShading: true });
  const windshield = new THREE.Mesh(glassGeo, glassMat);
  windshield.position.set(0, wheelR * 2 + cabinH * 0.65, 1.35 + cabinL / 2 + 0.01);
  group.add(windshield);

  // Front bumper & grille
  const bumperGeo = new THREE.BoxGeometry(cabinW + 0.1, 0.35, 0.2);
  const bumper = new THREE.Mesh(bumperGeo, materials.truckBumper);
  bumper.position.set(0, wheelR + 0.1, 1.35 + cabinL / 2 + 0.1);
  group.add(bumper);

  // Headlights (2 small yellow boxes)
  const lightGeo = new THREE.BoxGeometry(0.24, 0.18, 0.04);
  const lightMat = new THREE.MeshBasicMaterial({ color: 0xf1c40f });
  const leftLight = new THREE.Mesh(lightGeo, lightMat);
  leftLight.position.set(-0.6, wheelR + 0.15, 1.35 + cabinL / 2 + 0.21);
  const rightLight = new THREE.Mesh(lightGeo, lightMat);
  rightLight.position.set(0.6, wheelR + 0.15, 1.35 + cabinL / 2 + 0.21);
  group.add(leftLight, rightLight);

  // 6 Wheels (2 front, 4 rear)
  const wheelGeo = new THREE.CylinderGeometry(wheelR, wheelR, wheelW, 12);
  wheelGeo.rotateZ(Math.PI / 2);

  const wheelPositions = [
    [-bedW / 2 - wheelW / 2, wheelR, 1.35],
    [bedW / 2 + wheelW / 2, wheelR, 1.35],
    [-bedW / 2 - wheelW / 2, wheelR, -0.1],
    [bedW / 2 + wheelW / 2, wheelR, -0.1],
    [-bedW / 2 - wheelW / 2, wheelR, -1.3],
    [bedW / 2 + wheelW / 2, wheelR, -1.3]
  ];

  wheelPositions.forEach(([x, y, z]) => {
    const wheel = new THREE.Mesh(wheelGeo, materials.truckWheel);
    wheel.position.set(x, y, z);
    group.add(wheel);
  });

  // Anchor where loaded crates sit in the truck bed
  const crateBedAnchor = new THREE.Group();
  crateBedAnchor.name = 'CrateBedAnchor';
  crateBedAnchor.position.set(0, wheelR * 2 + 0.12, -0.4);
  group.add(crateBedAnchor);

  group.userData = { crateBedAnchor };
  return group;
}

/**
 * Creates the Road mesh strip with dashed white center stripes.
 * @param {number} width
 * @param {number} length
 * @returns {THREE.Group}
 */
export function createRoadMesh(width = 3.2, length = 54.0) {
  const group = new THREE.Group();
  group.name = 'Road';

  // Road asphalt surface
  const roadGeo = new THREE.BoxGeometry(width, 0.04, length);
  const roadMesh = new THREE.Mesh(roadGeo, materials.road);
  roadMesh.position.y = 0.02;
  group.add(roadMesh);

  // Dashed white lines along center
  const dashCount = Math.floor(length / 2.4);
  const dashGeo = new THREE.BoxGeometry(0.18, 0.045, 1.2);

  for (let i = 0; i < dashCount; i++) {
    const dash = new THREE.Mesh(dashGeo, materials.roadLine);
    dash.position.set(0, 0.025, -length / 2 + 1.2 + i * 2.4);
    group.add(dash);
  }

  return group;
}

/**
 * Creates the Sales Stand (Pallet platform for storing crate_dry2).
 * Pivot at bottom center (Y = 0).
 * @returns {THREE.Group}
 */
export function createSalesStand() {
  const group = new THREE.Group();
  group.name = 'SalesStand';
  const cfg = CONFIG.PROPS.SALES_STAND;

  // Wood Pallet Base
  const palletGeo = new THREE.BoxGeometry(cfg.PALLET_WIDTH, cfg.PALLET_HEIGHT, cfg.PALLET_DEPTH);
  const pallet = new THREE.Mesh(palletGeo, materials.crateSlat);
  pallet.position.y = cfg.PALLET_HEIGHT / 2;
  group.add(pallet);

  // 4 Corner metal bollards / boundary posts
  const postGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.6, 6);
  const halfW = cfg.PALLET_WIDTH / 2 - 0.08;
  const halfD = cfg.PALLET_DEPTH / 2 - 0.08;
  [
    [-halfW, -halfD],
    [halfW, -halfD],
    [-halfW, halfD],
    [halfW, halfD]
  ].forEach(([x, z]) => {
    const post = new THREE.Mesh(postGeo, materials.stationMetal);
    post.position.set(x, 0.3, z);
    group.add(post);
  });

  // Anchor where stored crates are visually stacked on the pallet
  const crateStackAnchor = new THREE.Group();
  crateStackAnchor.name = 'CrateStackAnchor';
  crateStackAnchor.position.set(0, cfg.PALLET_HEIGHT, 0);
  group.add(crateStackAnchor);

  group.userData = { crateStackAnchor };
  return group;
}

/**
 * Creates the Sales Stand Billboard Panel (CanvasTexture Billboard).
 * Shows "Sonraki kamyon: 42sn" and "Depo: X / 12" (or "Yükleniyor...").
 * @returns {THREE.Mesh}
 */
export function createSalesBillboard() {
  const canvas = document.createElement('canvas');
  canvas.width = 380;
  canvas.height = 140;

  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const planeW = 1.45;
  const planeH = 0.55;
  const geo = new THREE.PlaneGeometry(planeW, planeH);
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'SalesBillboard';

  let lastKey = '';

  mesh.userData = {
    update: (countdownSec, bufferCount, bufferCap, isTruckActive) => {
      const key = `${Math.ceil(countdownSec)}_${bufferCount}_${bufferCap}_${isTruckActive ? 1 : 0}`;
      if (key === lastKey) return;
      lastKey = key;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = 'rgba(26, 36, 43, 0.92)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 3;
      drawRoundRect(ctx, 4, 4, canvas.width - 8, canvas.height - 8, 14);
      ctx.fill();
      ctx.stroke();

      // Top line: Status / Countdown
      if (isTruckActive) {
        ctx.fillStyle = '#2ed573';
        ctx.font = 'bold 20px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🚚 Yükleniyor...', canvas.width / 2, 42);
      } else {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px sans-serif';
        ctx.textAlign = 'center';
        const rem = Math.max(0, Math.ceil(countdownSec));
        ctx.fillText(`Sonraki kamyon: ${rem}sn`, canvas.width / 2, 42);
      }

      // Bottom line: Depot count & progress bar
      ctx.fillStyle = '#f1f2f6';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`Depo: ${bufferCount} / ${bufferCap}`, 32, 95);

      // Mini bar
      const barX = 180;
      const barY = 80;
      const barW = 160;
      const barH = 20;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      drawRoundRect(ctx, barX, barY, barW, barH, 5);
      ctx.fill();

      const ratio = Math.max(0, Math.min(1.0, bufferCount / bufferCap));
      ctx.fillStyle = '#e67e22';
      drawRoundRect(ctx, barX, barY, barW * ratio, barH, 5);
      ctx.fill();

      texture.needsUpdate = true;
    }
  };

  return mesh;
}

/**
 * Creates a floating text banner that floats up and fades (e.g. "+240 💰" or "Mal yok").
 * @param {string} text
 * @param {string} color
 * @returns {THREE.Mesh}
 */
export function createFloatingNotice(text, color = '#2ed573') {
  const canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 90;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = color;
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 4;
  ctx.font = '900 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const geo = new THREE.PlaneGeometry(1.6, 0.48);
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = `FloatingNotice_${text}`;
  mesh.userData = {
    life: 0,
    maxLife: 1.8,
    vy: 1.4
  };

  return mesh;
}
