import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { state } from './State.js';

// Module-level temporary vectors to eliminate per-frame allocations
const _tempTutorialTarget = new THREE.Vector3();
const _tempTutorialNdc = new THREE.Vector3();

/**
 * State-driven Interactive Step-by-Step Tutorial.
 * Guides new players through the entire apricot production chain:
 * Tree -> Crate Station -> Pick Crate -> Rack 1 -> Tent -> Rack 2 -> Sales -> Truck -> Upgrade.
 *
 * Architecture:
 * - State predicates (evaluated continuously on game tick, decoupled from ephemeral events)
 * - Auto-advances if player already completed downstream steps
 * - Highlights "Geç" (skip) button after 45s of stagnation on any step
 * - 3D ground target indicator with floating bobbing arrow and pulsating ring
 * - Edge compass pointer when the active target is off-screen
 * - Persisted completion in GameState (version 2)
 */
export class TutorialManager {
  /**
   * @param {THREE.Scene} scene
   * @param {Object} [gameContext] { world, player, state }
   */
  constructor(scene, gameContext = {}) {
    this.scene = scene;
    this.gameContext = gameContext;
    this.steps = (CONFIG.TUTORIAL && CONFIG.TUTORIAL.STEPS) || [];
    this.currentStepIndex = 0;
    this.isActive = false;
    this.animTime = 0;
    this.stepTimer = 0;
    this.predicateTimer = 0;

    // DOM Elements
    this.overlayEl = document.getElementById('tutorial-overlay');
    this.bannerEl = document.getElementById('tutorial-banner');
    this.counterEl = document.getElementById('tutorial-step-counter');
    this.textEl = document.getElementById('tutorial-text');
    this.skipBtn = document.getElementById('tutorial-skip-btn');
    this.closeBtn = document.getElementById('tutorial-close-btn');
    this.edgePointerEl = document.getElementById('tutorial-edge-pointer');
    this.edgeArrowEl = this.edgePointerEl ? this.edgePointerEl.querySelector('.edge-pointer-arrow') : null;

    // Create 3D Ground & Floating Marker
    this._create3DMarker();

    // Define state predicates for each step
    this._initPredicates();

    // Check if tutorial is already completed
    if (state.isTutorialDone() || this.steps.length === 0) {
      this.hide();
    } else {
      this.start();
    }

    this._bindUI();
  }

  setGameContext(context) {
    this.gameContext = context;
  }

  _initPredicates() {
    this.predicates = {
      // Step 0: tree -> "Ağaca git ve durarak kayısı topla"
      tree: (world, player, gameState) => {
        const pType = player.getCurrentType();
        const pCount = player.getCount();
        if (pType === 'apricot' && pCount > 0) return true;
        // Downstream check: player has any crate or stations have items or sales done
        if (pType && pType !== 'apricot') return true;
        if (world.crateStation && (world.crateStation.getTotalItems() > 0 || world.crateStation.hasReadyCrate())) return true;
        if (world.dryingRack1 && world.dryingRack1.getTotalItems() > 0) return true;
        if (world.sulfurTent && world.sulfurTent.getTotalItems() > 0) return true;
        if (world.dryingRack2 && world.dryingRack2.getTotalItems() > 0) return true;
        if (world.salesStand && world.salesStand.getCratesCount() > 0) return true;
        if (gameState && gameState.getTotalCratesSold() > 0) return true;
        return false;
      },

      // Step 1: crate_station -> "Topladığın kayısıları Kasa İstasyonu girişine bırak"
      crate_station: (world, player, gameState) => {
        const pType = player.getCurrentType();
        if (world.crateStation && (world.crateStation.getTotalItems() > 0 || world.crateStation.hasReadyCrate())) return true;
        if (pType && pType !== 'apricot') return true;
        if (world.dryingRack1 && world.dryingRack1.getTotalItems() > 0) return true;
        if (world.sulfurTent && world.sulfurTent.getTotalItems() > 0) return true;
        if (world.dryingRack2 && world.dryingRack2.getTotalItems() > 0) return true;
        if (world.salesStand && world.salesStand.getCratesCount() > 0) return true;
        if (gameState && gameState.getTotalCratesSold() > 0) return true;
        return false;
      },

      // Step 2: pick_crate -> "Kasa İstasyonu çıkışındaki taze kasayı al"
      pick_crate: (world, player, gameState) => {
        const pType = player.getCurrentType();
        if (pType === 'crate_fresh') return true;
        if (pType === 'crate_dry1' || pType === 'crate_sulfur' || pType === 'crate_dry2') return true;
        if (world.dryingRack1 && world.dryingRack1.getTotalItems() > 0) return true;
        if (world.sulfurTent && world.sulfurTent.getTotalItems() > 0) return true;
        if (world.dryingRack2 && world.dryingRack2.getTotalItems() > 0) return true;
        if (world.salesStand && world.salesStand.getCratesCount() > 0) return true;
        if (gameState && gameState.getTotalCratesSold() > 0) return true;
        return false;
      },

      // Step 3: rack_1 -> "Kasayı 1. Güneş Rafı girişine bırak"
      rack_1: (world, player, gameState) => {
        const pType = player.getCurrentType();
        if (world.dryingRack1 && world.dryingRack1.getTotalItems() > 0) return true;
        if (pType === 'crate_dry1' || pType === 'crate_sulfur' || pType === 'crate_dry2') return true;
        if (world.sulfurTent && world.sulfurTent.getTotalItems() > 0) return true;
        if (world.dryingRack2 && world.dryingRack2.getTotalItems() > 0) return true;
        if (world.salesStand && world.salesStand.getCratesCount() > 0) return true;
        if (gameState && gameState.getTotalCratesSold() > 0) return true;
        return false;
      },

      // Step 4: tent -> "Kurutulan kasayı Kükürt Çadırı girişine bırak"
      tent: (world, player, gameState) => {
        const pType = player.getCurrentType();
        if (world.sulfurTent && world.sulfurTent.getTotalItems() > 0) return true;
        if (pType === 'crate_sulfur' || pType === 'crate_dry2') return true;
        if (world.dryingRack2 && world.dryingRack2.getTotalItems() > 0) return true;
        if (world.salesStand && world.salesStand.getCratesCount() > 0) return true;
        if (gameState && gameState.getTotalCratesSold() > 0) return true;
        return false;
      },

      // Step 5: rack_2 -> "Kükürtlü kasayı 2. Güneş Rafı girişine bırak"
      rack_2: (world, player, gameState) => {
        const pType = player.getCurrentType();
        if (world.dryingRack2 && world.dryingRack2.getTotalItems() > 0) return true;
        if (pType === 'crate_dry2') return true;
        if (world.salesStand && world.salesStand.getCratesCount() > 0) return true;
        if (gameState && gameState.getTotalCratesSold() > 0) return true;
        return false;
      },

      // Step 6: sales -> "Kuru altın kayısı kasasını Satış Deposuna bırak"
      sales: (world, player, gameState) => {
        if (world.salesStand && world.salesStand.getCratesCount() > 0) return true;
        if (gameState && gameState.getTotalCratesSold() > 0) return true;
        return false;
      },

      // Step 7: wait_truck -> "Tüccar kamyonunu bekle ve altınları kazan"
      wait_truck: (world, player, gameState) => {
        if (gameState && gameState.getTotalCratesSold() > 0) return true;
        if (gameState && gameState.getTotalUpgradesCount() > 0) return true;
        return false;
      },

      // Step 8: upgrade -> "⚡ Yükselt butonuna dokun ve geliştirme yap"
      upgrade: (world, player, gameState) => {
        return gameState && gameState.getTotalUpgradesCount() >= 1;
      }
    };
  }

  _create3DMarker() {
    this.markerGroup = new THREE.Group();
    this.markerGroup.visible = false;

    // 1. Pulsing golden ground ring
    const ringGeom = new THREE.RingGeometry(0.7, 0.95, 24);
    ringGeom.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    this.ringMesh = new THREE.Mesh(ringGeom, ringMat);
    this.ringMesh.position.y = 0.05;
    this.markerGroup.add(this.ringMesh);

    // 2. Floating downward arrow
    this.arrowGroup = new THREE.Group();
    this.arrowGroup.position.y = 1.3;

    // Downward cone head
    const coneGeom = new THREE.ConeGeometry(0.3, 0.55, 6);
    coneGeom.rotateX(Math.PI); // Point down
    const coneMat = new THREE.MeshLambertMaterial({
      color: 0xf59e0b,
      flatShading: true
    });
    const coneMesh = new THREE.Mesh(coneGeom, coneMat);
    coneMesh.position.y = -0.15;
    this.arrowGroup.add(coneMesh);

    // Arrow stem
    const stemGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.45, 6);
    const stemMesh = new THREE.Mesh(stemGeom, coneMat);
    stemMesh.position.y = 0.3;
    this.arrowGroup.add(stemMesh);

    this.markerGroup.add(this.arrowGroup);
    this.scene.add(this.markerGroup);
  }

  _bindUI() {
    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextStep();
      });
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeTutorial();
      });
    }
  }

  start() {
    this.currentStepIndex = 0;
    this.stepTimer = 0;
    this.isActive = true;
    if (this.overlayEl) {
      this.overlayEl.classList.remove('tutorial-hidden');
    }
    this._renderCurrentStep();
  }

  getCurrentStep() {
    if (this.currentStepIndex < this.steps.length) {
      return this.steps[this.currentStepIndex];
    }
    return null;
  }

  nextStep() {
    this.currentStepIndex++;
    this.stepTimer = 0;
    if (this.skipBtn) {
      this.skipBtn.classList.remove('tutorial-btn-highlight');
    }

    if (this.currentStepIndex >= this.steps.length) {
      this._completeTutorial();
    } else {
      this._renderCurrentStep();
    }
  }

  _renderCurrentStep() {
    const step = this.getCurrentStep();
    if (!step) return;

    if (this.counterEl) {
      this.counterEl.textContent = `${this.currentStepIndex + 1}/${this.steps.length}`;
    }

    if (this.textEl) {
      this.textEl.textContent = step.text;
    }

    if (step.target) {
      this.markerGroup.position.set(step.target.x, step.target.y, step.target.z);
      this.markerGroup.visible = true;
    } else {
      this.markerGroup.visible = false;
      if (this.edgePointerEl) {
        this.edgePointerEl.classList.add('edge-pointer-hidden');
      }
    }
  }

  _completeTutorial() {
    this.isActive = false;
    this.markerGroup.visible = false;
    if (this.edgePointerEl) {
      this.edgePointerEl.classList.add('edge-pointer-hidden');
    }

    state.setTutorialDone(true);

    if (this.counterEl) {
      this.counterEl.textContent = '🎉';
    }
    if (this.textEl) {
      this.textEl.textContent =
        (CONFIG.TUTORIAL && CONFIG.TUTORIAL.STRINGS && CONFIG.TUTORIAL.STRINGS.COMPLETE_TEXT) ||
        'Tebrikler! Çiftlik döngüsünü öğrendin. Bol kazançlar!';
    }
    if (this.skipBtn) {
      this.skipBtn.style.display = 'none';
    }

    setTimeout(() => {
      this.hide();
    }, 3500);
  }

  closeTutorial() {
    this.isActive = false;
    this.markerGroup.visible = false;
    if (this.edgePointerEl) {
      this.edgePointerEl.classList.add('edge-pointer-hidden');
    }
    state.setTutorialDone(true);
    this.hide();
  }

  hide() {
    this.isActive = false;
    if (this.markerGroup) {
      this.markerGroup.visible = false;
    }
    if (this.overlayEl) {
      this.overlayEl.classList.add('tutorial-hidden');
    }
    if (this.edgePointerEl) {
      this.edgePointerEl.classList.add('edge-pointer-hidden');
    }
    if (this.skipBtn) {
      this.skipBtn.classList.remove('tutorial-btn-highlight');
    }
  }

  /**
   * Evaluates state predicates. If satisfied, advances to the next step.
   * Auto-advances across multiple steps if downstream conditions are already met.
   */
  _checkStepPredicates() {
    if (!this.isActive) return;
    const { world, player, state: gameState } = this.gameContext;
    if (!world || !player || !gameState) return;

    let advancements = 0;
    while (this.isActive && advancements < 9) {
      const step = this.getCurrentStep();
      if (!step) break;

      const predicate = this.predicates[step.id];
      if (predicate && predicate(world, player, gameState)) {
        this.nextStep();
        advancements++;
      } else {
        break;
      }
    }
  }

  /**
   * Main tutorial animation, stagnation timer and screen edge pointer update.
   * @param {number} dt Delta time
   * @param {THREE.Vector3} playerPos
   * @param {THREE.Camera} camera
   */
  update(dt, playerPos, camera) {
    if (!this.isActive) return;

    this.animTime += dt;
    this.stepTimer += dt;

    // Stagnation highlight: If stuck on one step for >= 45s, highlight "Geç" button
    if (this.stepTimer >= 45.0) {
      if (this.skipBtn && !this.skipBtn.classList.contains('tutorial-btn-highlight')) {
        this.skipBtn.classList.add('tutorial-btn-highlight');
      }
    }

    // Evaluate state predicates periodically
    this.predicateTimer += dt;
    if (this.predicateTimer >= 0.1) {
      this.predicateTimer = 0;
      this._checkStepPredicates();
    }

    const step = this.getCurrentStep();
    if (!step || !step.target || !camera) {
      if (this.edgePointerEl) {
        this.edgePointerEl.classList.add('edge-pointer-hidden');
      }
      return;
    }

    // 1. Animate 3D ground marker
    this.arrowGroup.position.y = 1.3 + Math.sin(this.animTime * 4.5) * 0.18;
    this.arrowGroup.rotation.y += dt * 2.2;

    const ringScale = 1.0 + Math.sin(this.animTime * 3.5) * 0.12;
    this.ringMesh.scale.set(ringScale, ringScale, 1.0);

    // 2. Project target to NDC (-1 to 1) using reusable vectors
    _tempTutorialTarget.set(step.target.x, step.target.y, step.target.z);
    _tempTutorialNdc.copy(_tempTutorialTarget).project(camera);

    const isVisibleOnScreen =
      _tempTutorialNdc.x >= -0.80 && _tempTutorialNdc.x <= 0.80 &&
      _tempTutorialNdc.y >= -0.78 && _tempTutorialNdc.y <= 0.78 &&
      _tempTutorialNdc.z < 1.0;

    if (isVisibleOnScreen) {
      // Show 3D marker in world, hide 2D edge indicator
      this.markerGroup.visible = true;
      if (this.edgePointerEl) {
        this.edgePointerEl.classList.add('edge-pointer-hidden');
      }
    } else {
      // Target is off-screen! Show edge pointer pointing toward target
      this.markerGroup.visible = false;

      if (this.edgePointerEl) {
        this.edgePointerEl.classList.remove('edge-pointer-hidden');

        const winW = window.innerWidth;
        const winH = window.innerHeight;
        const halfW = winW / 2;
        const halfH = winH / 2;

        const angle = Math.atan2(_tempTutorialNdc.y, _tempTutorialNdc.x);

        const padX = 36;
        const padY = 56;
        const boundW = halfW - padX;
        const boundH = halfH - padY;

        let screenX, screenY;
        const slope = Math.tan(angle);

        if (Math.abs(Math.cos(angle)) * boundH > Math.abs(Math.sin(angle)) * boundW) {
          const signX = _tempTutorialNdc.x > 0 ? 1 : -1;
          screenX = halfW + signX * boundW;
          screenY = halfH - signX * boundW * slope;
        } else {
          const signY = _tempTutorialNdc.y > 0 ? 1 : -1;
          screenY = halfH - signY * boundH;
          screenX = halfW + (signY * boundH) / (slope || 0.0001);
        }

        screenX = Math.max(padX, Math.min(winW - padX, screenX));
        screenY = Math.max(padY, Math.min(winH - padY, screenY));

        this.edgePointerEl.style.left = `${screenX}px`;
        this.edgePointerEl.style.top = `${screenY}px`;
        this.edgePointerEl.style.transform = 'translate(-50%, -50%)';

        if (this.edgeArrowEl) {
          const deg = -(angle * 180) / Math.PI;
          this.edgeArrowEl.style.transform = `rotate(${deg}deg)`;
        }
      }
    }
  }
}
