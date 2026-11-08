import * as THREE from 'three';
import { CONFIG } from './config.js';
import { World } from './game/World.js';
import { Player } from './game/Player.js';
import { Input } from './game/Input.js';
import { UI } from './game/UI.js';
import { state } from './game/State.js';
import { events } from './game/Events.js';
import { audio } from './game/Audio.js';
import { ParticleSystem } from './game/Particles.js';
import { TutorialManager } from './game/Tutorial.js';
import { errorLogger } from './game/ErrorLogger.js';
import { metricsTracker } from './game/MetricsTracker.js';
import { initPWA } from './pwa.js';

function init() {
  const container = document.getElementById('canvas-container');
  if (!container) {
    console.error('Canvas container not found');
    return;
  }

  // 1. Initialize systems
  const ui = new UI();
  const world = new World(container, (msg) => ui.showWarning(msg));
  const player = new Player(world.scene);
  const input = new Input();
  const particles = new ParticleSystem(world.scene);
  const tutorial = new TutorialManager(world.scene, { world, player, state });

  // WebGL context monitoring & error logging
  errorLogger.attachWebGLContext(world.renderer.domElement);
  errorLogger.setProviders({
    getFPS: () => currentFps,
    getTimeScale: () => timeScale
  });

  // Upgrade particle burst listener
  events.on('upgrade_bought', () => {
    const p = player.getPosition();
    particles.burstUpgrade({ x: p.x, y: 1.0, z: p.z });
  });

  // Discard rescue action handler ("At" button & Q key)
  const handleDiscard = () => {
    if (player.getCount() > 0) {
      const pos = player.getPosition().clone();
      const count = player.getCount();
      const itemType = player.getCurrentType();
      player.discardAll();
      ui.showWarning(CONFIG.STRINGS.TOAST_DISCARDED);
      events.emit('dropped', { action: 'discard', itemType, count, pos });
    }
  };

  ui.onDiscard(handleDiscard);
  input.onDiscardCallback = handleDiscard;

  // Developer panel truck summon handler
  ui.onSummonTruck(() => {
    if (world.salesStand) {
      world.salesStand.callTruckImmediately();
    }
  });

  // Developer panel reset save handler
  ui.onResetSave(() => {
    state.resetSave();
    window.location.reload();
  });

  // Global timeScale multiplier for developer speed testing (default: 1.0)
  let timeScale = 1.0;
  ui.onTimeScaleChange((scale) => {
    timeScale = scale;
  });

  // Auto-save timer (every 5 seconds)
  let autoSaveTimer = 0;
  const autoSaveInterval = (CONFIG.STORAGE && CONFIG.STORAGE.AUTO_SAVE_INTERVAL) || 5.0;

  // FPS performance monitoring & dynamic quality reduction variables
  let frameCount = 0;
  let fpsTimer = 0;
  let currentFps = 60;
  let lowFpsDuration = 0;
  let renderSkippedCount = 0;

  // Initialize PWA Service Worker & update prompt
  initPWA();

  // Visibility and unload save triggers
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      state.save();
    } else {
      // Clear clock delta accumulation upon tab return to avoid spike
      clock.getDelta();
      state.save();
    }
  });

  window.addEventListener('beforeunload', () => {
    state.save();
  });

  const zeroVector = new THREE.Vector2(0, 0);
  const clock = new THREE.Clock();

  // 2. Main game loop
  function animate() {
    if (errorLogger.isContextLost) {
      return; // WebGL context lost; halt render loop
    }

    requestAnimationFrame(animate);

    // Guard against huge dt spike on tab background (max 0.1s delta)
    const dt = Math.min(clock.getDelta(), 0.1);

    // Sample performance, memory and scene metrics
    metricsTracker.update({
      renderer: world.renderer,
      scene: world.scene,
      particles,
      audio,
      fps: currentFps
    });

    // Measure FPS (1-second window)
    frameCount++;
    fpsTimer += dt;
    if (fpsTimer >= 0.5) {
      currentFps = Math.round(frameCount / fpsTimer);
      ui.setFPS(currentFps);

      // Automatic quality downgrade: if FPS < 40 for 3 consecutive seconds
      if (currentFps < 40) {
        lowFpsDuration += fpsTimer;
        if (lowFpsDuration >= 3.0) {
          particles.reduceQuality();
        }
      } else {
        lowFpsDuration = 0;
      }

      frameCount = 0;
      fpsTimer = 0;
    }

    // Auto-save countdown
    autoSaveTimer += dt;
    if (autoSaveTimer >= autoSaveInterval) {
      autoSaveTimer = 0;
      state.save();
    }

    // Update input vector
    input.update();

    // Lock player movement while upgrade modal is open (world & timers still run)
    const moveVector = ui.isUpgradePanelOpen() ? zeroVector : input.getMoveVector();

    // Update player movement and boundary clamps (unaffected by timeScale)
    player.update(dt, moveVector);

    // Update world (harvesting, stations, sales stand, flying items, camera follow) using timeScale
    const worldDt = dt * timeScale;
    world.update(worldDt, player, input);

    // Update particle effects
    particles.update(worldDt);

    // Update tutorial indicator & edge compass
    tutorial.update(worldDt, player.getPosition(), world.camera);

    // Update UI (dynamic item HUD, money, dev panel, upgrade panel, discard button, "DOLU" badge)
    ui.update(player, state);

    // Battery / Background Tab Optimization: Skip 3D render when tab is hidden
    if (!document.hidden) {
      world.render();
    } else {
      renderSkippedCount++;
    }
  }

  // Initial trigger for resize to ensure crisp resolution
  world.onResize();

  // Expose game instance for automated tests & debugging
  window.__GAME__ = {
    world,
    player,
    input,
    ui,
    state,
    particles,
    tutorial,
    audio,
    events,
    trees: world.trees,
    stations: world.stations,
    salesStand: world.salesStand,
    salesDepot: world.salesStand,
    errorLogger,
    metricsTracker,
    handleDiscard,
    getFPS: () => currentFps,
    getRenderSkippedCount: () => renderSkippedCount,
    getTimeScale: () => timeScale,
    setTimeScale: (scale) => {
      timeScale = scale;
      ui.setTimeScale(scale);
    }
  };

  requestAnimationFrame(animate);
}

// Start game when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
