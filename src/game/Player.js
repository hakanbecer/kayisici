import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { createPlayer, createApricot, createCrate } from './Assets.js';
import { state } from './State.js';

export class Player {
  constructor(scene) {
    this.scene = scene;
    this.group = createPlayer();
    this.scene.add(this.group);

    // Carried item state
    this.currentType = null; // null | 'apricot' | 'crate_fresh' | 'crate_dry1'
    this.stack = []; // Array of visual meshes in current stack

    this.speed = CONFIG.PLAYER.SPEED;

    // Visual references from Assets.js
    this.fruitAnchor = this.group.userData.fruitAnchor;
    this.crateAnchor = this.group.userData.crateAnchor;
    this.leftFoot = this.group.userData.leftFoot;
    this.rightFoot = this.group.userData.rightFoot;

    // Movement & animation state
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.walkCycle = 0;
    this.targetRotationY = 0;

    // Initial position
    this.group.position.set(0, 0, 0);
  }

  /**
   * Updates player position, rotation, walk animation, and boundary clamping.
   * @param {number} dt Delta time in seconds
   * @param {THREE.Vector2} moveVector (x, z) movement direction
   */
  update(dt, moveVector) {
    const isMoving = moveVector.lengthSq() > 0.001;

    if (isMoving) {
      // 1. Move player (speed dynamically calculated from State)
      const currentSpeed = state ? state.getStat('walkSpeed') : this.speed;
      const dx = moveVector.x * currentSpeed * dt;
      const dz = moveVector.y * currentSpeed * dt;

      this.group.position.x += dx;
      this.group.position.z += dz;

      // 2. Clamp inside world bounds
      const bounds = CONFIG.WORLD.BOUNDS;
      this.group.position.x = Math.max(bounds.MIN_X, Math.min(bounds.MAX_X, this.group.position.x));
      this.group.position.z = Math.max(bounds.MIN_Z, Math.min(bounds.MAX_Z, this.group.position.z));

      // 3. Smooth rotation towards movement direction
      this.targetRotationY = Math.atan2(moveVector.x, moveVector.y);
      let diff = this.targetRotationY - this.group.rotation.y;

      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;

      this.group.rotation.y += diff * CONFIG.PLAYER.ROTATION_LERP;

      // 4. Subtle foot swing walk animation
      this.walkCycle += dt * 14.0;
      const swing = Math.sin(this.walkCycle) * 0.22;
      if (this.leftFoot) this.leftFoot.position.z = swing;
      if (this.rightFoot) this.rightFoot.position.z = -swing;

      // Subtle body bounce
      this.group.position.y = Math.abs(Math.sin(this.walkCycle)) * 0.05;

      // Subtle backpack swaying while walking (pure visual sway, doesn't affect capacity)
      const stackRatio = Math.min(this.stack.length / 5, 1.0);
      const swayZ = Math.sin(this.walkCycle) * 0.08 * (0.3 + 0.7 * stackRatio);
      const tiltX = -0.06;
      if (this.fruitAnchor) {
        this.fruitAnchor.rotation.z = swayZ;
        this.fruitAnchor.rotation.x = tiltX;
      }
      if (this.crateAnchor) {
        this.crateAnchor.rotation.z = swayZ * 0.7;
        this.crateAnchor.rotation.x = tiltX;
      }
    } else {
      // Return feet and bounce to rest
      if (this.leftFoot) this.leftFoot.position.z = 0;
      if (this.rightFoot) this.rightFoot.position.z = 0;
      this.group.position.y = 0;

      // Smoothly return backpack sway to rest
      if (this.fruitAnchor) {
        this.fruitAnchor.rotation.z *= 0.8;
        this.fruitAnchor.rotation.x *= 0.8;
      }
      if (this.crateAnchor) {
        this.crateAnchor.rotation.z *= 0.8;
        this.crateAnchor.rotation.x *= 0.8;
      }
    }
  }

  /**
   * Adds an item of specified type to player's carry stack.
   * Enforces single-type carrying rule and capacity per type.
   * @param {'apricot' | 'crate_fresh' | 'crate_dry1'} type
   * @returns {boolean} true if added, false if rejected
   */
  addItem(type) {
    // 1. Rule: Only ONE item type carried at a time
    if (this.currentType !== null && this.currentType !== type) {
      return false;
    }

    const capacity = this.getCapacity(type);
    if (this.stack.length >= capacity) {
      return false;
    }

    this.currentType = type;
    const index = this.stack.length;

    if (type === CONFIG.ITEMS.APRICOT) {
      // Apricot: 2x2 grid inside fruitAnchor
      const apricot = createApricot(false);
      const cfg = CONFIG.PLAYER.STACK;
      apricot.scale.setScalar(cfg.SCALE);

      const perLayer = cfg.COLS * cfg.ROWS;
      const layer = Math.floor(index / perLayer);
      const posInLayer = index % perLayer;
      const col = posInLayer % cfg.COLS;
      const row = Math.floor(posInLayer / cfg.COLS);

      const x = (col - (cfg.COLS - 1) / 2) * cfg.SPACING_X;
      const y = layer * cfg.SPACING_Y;
      const z = (row - (cfg.ROWS - 1) / 2) * cfg.SPACING_Z;

      apricot.position.set(x, y, z);
      this.fruitAnchor.add(apricot);
      this.stack.push(apricot);
    } else {
      // Crates (Fresh or Dried): Vertical stack inside crateAnchor
      const crate = createCrate(type);
      const cfg = CONFIG.PLAYER.CRATE_STACK;
      crate.scale.setScalar(cfg.SCALE);

      const y = index * cfg.SPACING_Y;
      crate.position.set(0, y, 0);

      this.crateAnchor.add(crate);
      this.stack.push(crate);
    }

    return true;
  }

  /**
   * Removes one item from the stack (e.g. deposited into a station).
   * @returns {boolean} true if item was removed
   */
  removeItem() {
    if (this.stack.length === 0) return false;

    const item = this.stack.pop();
    if (item.parent) {
      item.parent.remove(item);
    }

    // If all items removed, player hands are now completely free
    if (this.stack.length === 0) {
      this.currentType = null;
    }

    return true;
  }

  /**
   * Discards all carried items immediately (Rescue / Escape action).
   * @returns {number} Count of items discarded
   */
  discardAll() {
    const count = this.stack.length;
    if (count === 0) return 0;

    while (this.stack.length > 0) {
      const item = this.stack.pop();
      if (item && item.parent) {
        item.parent.remove(item);
      }
    }

    this.currentType = null;
    return count;
  }

  /**
   * Backward-compatible helper for apricot harvesting
   */
  addApricot() {
    return this.addItem(CONFIG.ITEMS.APRICOT);
  }

  getCurrentType() {
    return this.currentType;
  }

  getCount() {
    return this.stack.length;
  }

  getCapacity(type = this.currentType) {
    if (!type) return 0;
    if (state) {
      if (type === CONFIG.ITEMS.APRICOT) {
        return state.getStat('carryCapacityApricot');
      }
      return state.getStat('carryCapacityCrate');
    }
    return CONFIG.CAPACITIES[type] || 0;
  }

  isFull() {
    if (!this.currentType) return false;
    return this.stack.length >= this.getCapacity();
  }

  getPosition() {
    return this.group.position;
  }

  /**
   * World position of the backpack anchor for fruit fly animation target
   */
  getStackWorldPosition(targetVec = new THREE.Vector3()) {
    this.fruitAnchor.getWorldPosition(targetVec);
    return targetVec;
  }
}
