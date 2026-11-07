import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class Input {
  constructor() {
    // Current input in isometric world coordinates
    this.moveVector = new THREE.Vector2(0, 0); // (x, z)
    this.screenVector = new THREE.Vector2(0, 0); // (screenX, screenY)

    // Keyboard state
    this.keys = {
      up: false,
      down: false,
      left: false,
      right: false
    };

    // Joystick state
    this.isJoystickActive = false;
    this.joystickPointerId = null;
    this.joystickOrigin = { x: 0, y: 0 };
    this.joystickDelta = { x: 0, y: 0 };

    // DOM Elements
    this.zoneEl = document.getElementById('joystick-zone');
    this.baseEl = document.getElementById('joystick-base');
    this.knobEl = document.getElementById('joystick-knob');

    this._initKeyboard();
    this._initJoystick();
  }

  _initKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyQ') {
        if (this.onDiscardCallback) this.onDiscardCallback();
      }
      this._handleKey(e.code, true);
    });

    window.addEventListener('keyup', (e) => {
      this._handleKey(e.code, false);
    });

    // Reset keys if window loses focus
    window.addEventListener('blur', () => {
      this.keys.up = false;
      this.keys.down = false;
      this.keys.left = false;
      this.keys.right = false;
    });
  }

  _handleKey(code, isPressed) {
    switch (code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.up = isPressed;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.down = isPressed;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = isPressed;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = isPressed;
        break;
    }
  }

  _initJoystick() {
    if (!this.zoneEl || !this.baseEl || !this.knobEl) return;

    this.zoneEl.addEventListener('pointerdown', (e) => {
      if (this.isJoystickActive) return;

      this.isJoystickActive = true;
      this.joystickPointerId = e.pointerId;
      this.zoneEl.setPointerCapture(e.pointerId);

      const rect = this.zoneEl.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Position joystick base where user touched
      this.joystickOrigin = { x: clientX, y: clientY };
      this.baseEl.style.left = `${clientX - rect.left}px`;
      this.baseEl.style.top = `${clientY - rect.top}px`;
      this.baseEl.style.bottom = 'auto';
      this.baseEl.classList.add('active');

      this._updateJoystick(clientX, clientY);
    });

    this.zoneEl.addEventListener('pointermove', (e) => {
      if (!this.isJoystickActive || e.pointerId !== this.joystickPointerId) return;
      this._updateJoystick(e.clientX, e.clientY);
    });

    const resetJoystick = (e) => {
      if (!this.isJoystickActive || (e && e.pointerId !== this.joystickPointerId)) return;
      this.isJoystickActive = false;
      this.joystickPointerId = null;
      this.joystickDelta = { x: 0, y: 0 };

      // Return knob to center
      this.knobEl.style.transform = 'translate(0px, 0px)';
      this.baseEl.classList.remove('active');

      // Reset base back to default CSS bottom-left anchor
      this.baseEl.style.left = `${CONFIG.JOYSTICK.DEFAULT_POS.x}px`;
      this.baseEl.style.bottom = `${CONFIG.JOYSTICK.DEFAULT_POS.y}px`;
      this.baseEl.style.top = 'auto';
    };

    this.zoneEl.addEventListener('pointerup', resetJoystick);
    this.zoneEl.addEventListener('pointercancel', resetJoystick);
  }

  _updateJoystick(clientX, clientY) {
    const rawDx = clientX - this.joystickOrigin.x;
    const rawDy = clientY - this.joystickOrigin.y;
    const distance = Math.hypot(rawDx, rawDy);
    const maxRadius = CONFIG.JOYSTICK.MAX_RADIUS;

    let clampedDx = rawDx;
    let clampedDy = rawDy;

    if (distance > maxRadius) {
      const angle = Math.atan2(rawDy, rawDx);
      clampedDx = Math.cos(angle) * maxRadius;
      clampedDy = Math.sin(angle) * maxRadius;
    }

    this.knobEl.style.transform = `translate(${clampedDx}px, ${clampedDy}px)`;

    const deadzone = CONFIG.JOYSTICK.DEADZONE * maxRadius;
    if (distance < deadzone) {
      this.joystickDelta = { x: 0, y: 0 };
    } else {
      this.joystickDelta = {
        x: clampedDx / maxRadius,
        y: clampedDy / maxRadius // Screen Y is down
      };
    }
  }

  /**
   * Updates input state and calculates normalized 3D world movement vector.
   */
  update() {
    // 1. Keyboard vector (Screen coordinates: +X right, +Y up)
    let kx = 0;
    let ky = 0;
    if (this.keys.right) kx += 1;
    if (this.keys.left) kx -= 1;
    if (this.keys.up) ky += 1;
    if (this.keys.down) ky -= 1;

    // 2. Joystick vector (Screen coordinates: +X right, +Y up)
    const jx = this.joystickDelta.x;
    const jy = -this.joystickDelta.y; // Invert screen Y so up is positive

    // 3. Combine both inputs simultaneously
    let sx = kx + jx;
    let sy = ky + jy;

    const mag = Math.hypot(sx, sy);
    if (mag > 1.0) {
      sx /= mag;
      sy /= mag;
    }

    this.screenVector.set(sx, sy);

    // 4. Transform screen coordinates to isometric 3D world coordinates (X, Z)
    // Isometric camera has 45 deg yaw:
    // Screen Up (sy = 1) -> World (-1/sqrt2, -1/sqrt2)
    // Screen Right (sx = 1) -> World (1/sqrt2, -1/sqrt2)
    const invSqrt2 = 1.0 / Math.SQRT2;
    const worldX = (sx - sy) * invSqrt2;
    const worldZ = (-sx - sy) * invSqrt2;

    this.moveVector.set(worldX, worldZ);
  }

  /**
   * Returns current world movement vector (x, z)
   */
  getMoveVector() {
    return this.moveVector;
  }

  /**
   * Returns true if player is giving active movement input
   */
  hasInput() {
    return this.moveVector.lengthSq() > 0.001;
  }
}
