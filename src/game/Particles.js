import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { events } from './Events.js';

/**
 * Reusable particle pool system.
 * Strict rules:
 * - Exactly POOL_SIZE meshes created once at startup and reused (0 allocations during runtime)
 * - Visual effects: gold burst on sale, upgrade burst, ready sparkle, discard dust puff
 */
export class ParticleSystem {
  /**
   * @param {THREE.Scene} scene
   */
  constructor(scene) {
    this.scene = scene;
    this.poolSize = (CONFIG.PARTICLES && CONFIG.PARTICLES.POOL_SIZE) || 30;
    this.activePoolLimit = this.poolSize; // 30 (can be halved to 15 if FPS drops below 40)
    this.quality = 'high'; // 'high' | 'low'
    this.particles = [];

    // Shared geometry for low-poly look
    const geom = new THREE.BoxGeometry(0.12, 0.12, 0.12);

    for (let i = 0; i < this.poolSize; i++) {
      const mat = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        flatShading: true,
        transparent: true,
        opacity: 1.0
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.visible = false;
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        mat,
        active: false,
        life: 0,
        maxLife: 1.0,
        velocity: new THREE.Vector3(),
        gravity: -9.8,
        startScale: 1.0,
        rotSpeed: new THREE.Vector3()
      });
    }

    // Bind event bus listeners
    this._bindEvents();
  }

  _bindEvents() {
    events.on('sold', (data) => {
      const pos = data && data.pos ? data.pos : { x: 23.8, y: 1.5, z: 0 };
      this.burstGold(pos);
    });

    events.on('station_ready', (data) => {
      if (data && data.position) {
        this.burstReady(data.position);
      }
    });

    events.on('dropped', (data) => {
      if (data && data.action === 'discard' && data.pos) {
        this.burstDust(data.pos);
      }
    });
  }

  /**
   * Halves the active particle pool size (quality downgrade when FPS < 40 for 3s).
   */
  reduceQuality() {
    if (this.quality === 'low') return;
    this.quality = 'low';
    this.activePoolLimit = Math.floor(this.poolSize / 2); // 15
    for (let i = this.activePoolLimit; i < this.particles.length; i++) {
      this.particles[i].active = false;
      this.particles[i].mesh.visible = false;
    }
    console.warn('[Performance] Düşük FPS tespit edildi, parçacık havuzu 15\'e düşürüldü.');
  }

  getQualityLevel() {
    return this.quality;
  }

  getQuality() {
    return this.quality;
  }

  getActivePoolLimit() {
    return this.activePoolLimit;
  }

  getActiveCount() {
    let count = 0;
    for (let i = 0; i < this.activePoolLimit; i++) {
      if (this.particles[i].active) count++;
    }
    return count;
  }

  /**
   * Spawns a burst of particles from the pool.
   */
  spawn({
    pos = { x: 0, y: 0, z: 0 },
    count = 6,
    color = 0xffcc00,
    speed = 2.0,
    gravity = -9.8,
    life = 0.8,
    scale = 1.0,
    spreadX = 1.0,
    spreadY = 1.0,
    spreadZ = 1.0,
    baseVy = 2.0
  }) {
    let spawned = 0;
    let targetCount = this.quality === 'low' ? Math.max(1, Math.round(count * 0.5)) : count;

    // Halve particle visual density at x3 or higher speed to prevent GPU/CPU saturation
    const isHighSpeed = window.__GAME__ && window.__GAME__.getTimeScale && window.__GAME__.getTimeScale() >= 3;
    if (isHighSpeed) {
      targetCount = Math.max(1, Math.round(targetCount * 0.5));
    }

    for (let i = 0; i < this.activePoolLimit; i++) {
      if (spawned >= targetCount) break;
      const p = this.particles[i];
      if (p.active) continue;

      p.active = true;
      p.life = 0;
      p.maxLife = life * (0.8 + Math.random() * 0.4);
      p.gravity = gravity;
      p.startScale = scale * (0.8 + Math.random() * 0.5);

      p.mat.color.setHex(color);
      p.mat.opacity = 1.0;

      // Position with small random offset
      p.mesh.position.set(
        pos.x + (Math.random() - 0.5) * 0.3,
        pos.y + (Math.random() - 0.5) * 0.2,
        pos.z + (Math.random() - 0.5) * 0.3
      );
      p.mesh.scale.setScalar(p.startScale);
      p.mesh.visible = true;

      // Velocity
      const angle = Math.random() * Math.PI * 2;
      const horizSpeed = speed * (0.4 + Math.random() * 0.6);
      p.velocity.set(
        Math.cos(angle) * horizSpeed * spreadX,
        baseVy + Math.random() * speed * spreadY,
        Math.sin(angle) * horizSpeed * spreadZ
      );

      // Rotation speed
      p.rotSpeed.set(
        (Math.random() - 0.5) * 12.0,
        (Math.random() - 0.5) * 12.0,
        (Math.random() - 0.5) * 12.0
      );

      spawned++;
    }
  }

  /**
   * Gold coin burst on crate sale.
   */
  burstGold(pos) {
    this.spawn({
      pos,
      count: 9,
      color: 0xf59e0b,
      speed: 2.5,
      gravity: -11.0,
      life: 0.9,
      scale: 1.1,
      baseVy: 3.5
    });
  }

  /**
   * Emerald celebration sparkle on upgrade purchase.
   */
  burstUpgrade(pos) {
    this.spawn({
      pos,
      count: 10,
      color: 0x22c55e,
      speed: 3.0,
      gravity: -7.0,
      life: 0.85,
      scale: 1.0,
      baseVy: 2.8
    });
  }

  /**
   * Golden shimmer when a station finishes a crate.
   */
  burstReady(pos) {
    this.spawn({
      pos,
      count: 5,
      color: 0xfef08a,
      speed: 1.2,
      gravity: -3.5,
      life: 0.7,
      scale: 0.8,
      baseVy: 1.8
    });
  }

  /**
   * Dust puff on item discard.
   */
  burstDust(pos) {
    this.spawn({
      pos: { x: pos.x, y: 0.1, z: pos.z },
      count: 7,
      color: 0xd4d4d8,
      speed: 2.0,
      gravity: -10.0,
      life: 0.55,
      scale: 0.9,
      baseVy: 1.4,
      spreadY: 0.4
    });
  }

  /**
   * Updates all active particles.
   * @param {number} dt Delta time in seconds
   */
  update(dt) {
    for (const p of this.particles) {
      if (!p.active) continue;

      p.life += dt;
      if (p.life >= p.maxLife) {
        p.active = false;
        p.mesh.visible = false;
        continue;
      }

      const t = p.life / p.maxLife;

      p.velocity.y += p.gravity * dt;
      p.mesh.position.addScaledVector(p.velocity, dt);

      p.mesh.rotation.x += p.rotSpeed.x * dt;
      p.mesh.rotation.y += p.rotSpeed.y * dt;
      p.mesh.rotation.z += p.rotSpeed.z * dt;

      // Scale down and fade out
      const scale = p.startScale * Math.max(0.01, 1.0 - t * 0.75);
      p.mesh.scale.setScalar(scale);
      p.mat.opacity = Math.max(0, 1.0 - t);
    }
  }
}
