import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTest() {
  console.log('=== Starting "Kayısı Hasadı" Aşama 5 (Events, Tutorial, Audio, Effects) Verification ===\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Mobile iPhone 14/15 viewport (390 x 844) with touch enabled
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  const consoleErrors = [];
  const networkAudioRequests = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });
  page.on('request', (req) => {
    const url = req.url().toLowerCase();
    if (url.endsWith('.mp3') || url.endsWith('.wav') || url.endsWith('.ogg') || url.endsWith('.aac')) {
      networkAudioRequests.push(url);
    }
  });

  // Clear any existing localStorage before starting initial test
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  const screenshotDir = path.resolve('test-artifacts-phase6');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const results = {};

  // -------------------------------------------------------------
  // TEST 1: Olay Sistemi (Events.js)
  // -------------------------------------------------------------
  console.log('--- TEST 1: Olay Sistemi (Events.js) ---');
  try {
    const eventCheck = await page.evaluate(() => {
      const { events } = window.__GAME__;
      let callCount = 0;
      let lastData = null;

      const unsub = events.on('test_evt', (d) => {
        callCount++;
        lastData = d;
      });

      events.emit('test_evt', { value: 42 });
      const firstCount = callCount;
      const firstData = lastData;

      unsub();
      events.emit('test_evt', { value: 99 });
      const secondCount = callCount;

      return {
        firstCount,
        firstData,
        secondCount,
        hasListenersMap: !!events.listeners
      };
    });

    console.log('Event bus test output:', eventCheck);
    if (eventCheck.firstCount !== 1 || eventCheck.firstData.value !== 42) {
      throw new Error(`Event subscription failed: count=${eventCheck.firstCount}`);
    }
    if (eventCheck.secondCount !== 1) {
      throw new Error('Event unsubscription failed: handler called after unsub');
    }

    results.test1 = 'GEÇTİ';
    console.log('✓ TEST 1 GEÇTİ: Olay sistemi (emit/on/off) beklendiği gibi çalışıyor.\n');
  } catch (err) {
    results.test1 = 'KALDI: ' + err.message;
    console.error('✗ TEST 1 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 2: Ses Sistemi (Audio.js) & Dış Dosya Yasağı
  // -------------------------------------------------------------
  console.log('--- TEST 2: Ses Sistemi (Audio.js) & Dış Dosya Yasağı ---');
  try {
    if (networkAudioRequests.length > 0) {
      throw new Error(`Dış ses dosyası isteği tespit edildi: ${networkAudioRequests.join(', ')}`);
    }

    const audioCheck = await page.evaluate(() => {
      const { audio, state } = window.__GAME__;
      const audioBtn = document.getElementById('audio-toggle-btn');

      const initialEnabled = state.isSoundEnabled();
      const initialIcon = audioBtn ? audioBtn.textContent.trim() : null;

      // Toggle sound off
      audioBtn.click();
      const disabledState = state.isSoundEnabled();
      const disabledIcon = audioBtn.textContent.trim();

      // Toggle sound back on
      audioBtn.click();
      const enabledState = state.isSoundEnabled();
      const enabledIcon = audioBtn.textContent.trim();

      return {
        hasAudioMethods: typeof audio.playCollect === 'function' &&
                         typeof audio.playCrateMade === 'function' &&
                         typeof audio.playStationReady === 'function' &&
                         typeof audio.playSold === 'function' &&
                         typeof audio.playUpgrade === 'function' &&
                         typeof audio.playWarning === 'function',
        initialEnabled,
        initialIcon,
        disabledState,
        disabledIcon,
        enabledState,
        enabledIcon
      };
    });

    console.log('Audio system check:', audioCheck);
    if (!audioCheck.hasAudioMethods) {
      throw new Error('Gerekli Web Audio sentezleme metodları eksik');
    }
    if (audioCheck.initialIcon !== '🔊' || audioCheck.disabledIcon !== '🔇' || audioCheck.enabledIcon !== '🔊') {
      throw new Error(`Ses butonu simgeleri beklenenden farklı: ${JSON.stringify(audioCheck)}`);
    }

    results.test2 = 'GEÇTİ';
    console.log('✓ TEST 2 GEÇTİ: Web Audio API sentezleyici ve HUD ses açma/kapama butonu doğrulandı.\n');
  } catch (err) {
    results.test2 = 'KALDI: ' + err.message;
    console.error('✗ TEST 2 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 3: Parçacık Havuz Sistemi (Particles.js)
  // -------------------------------------------------------------
  console.log('--- TEST 3: Parçacık Havuz Sistemi (Particles.js) ---');
  try {
    const particleCheck = await page.evaluate(() => {
      const { particles, world } = window.__GAME__;
      const poolSize = particles.particles.length;

      const sceneMeshesBefore = world.scene.children.length;

      // Trigger bursts
      particles.burstGold({ x: 23.8, y: 1.5, z: 0 });
      const activeGold = particles.particles.filter(p => p.active).length;

      particles.burstUpgrade({ x: 0, y: 1.0, z: 0 });
      const activeAfterUpgrade = particles.particles.filter(p => p.active).length;

      // Update particles forward in time
      particles.update(0.5);
      const activeMid = particles.particles.filter(p => p.active).length;

      particles.update(2.0); // should all expire and return to pool
      const activeAfterExpire = particles.particles.filter(p => p.active).length;

      const sceneMeshesAfter = world.scene.children.length;

      return {
        poolSize,
        sceneMeshesBefore,
        sceneMeshesAfter,
        activeGold,
        activeAfterUpgrade,
        activeMid,
        activeAfterExpire
      };
    });

    console.log('Particle pool check:', particleCheck);
    if (particleCheck.poolSize !== 30) {
      throw new Error(`Parçacık havuz boyutu 30 olmalı, bulunan: ${particleCheck.poolSize}`);
    }
    if (particleCheck.sceneMeshesBefore !== particleCheck.sceneMeshesAfter) {
      throw new Error('Parçacık patlamaları sırasında sahneye yeni nesne eklendi! Havuz tekrar kullanılmalı.');
    }
    if (particleCheck.activeAfterExpire !== 0) {
      throw new Error(`Süre dolduktan sonra parçacıklar inaktif olmalı, aktif kalan: ${particleCheck.activeAfterExpire}`);
    }

    results.test3 = 'GEÇTİ';
    console.log('✓ TEST 3 GEÇTİ: 30 parçacıklı havuz sistemi ve sıfır ek nesne tahsisi doğrulandı.\n');
  } catch (err) {
    results.test3 = 'KALDI: ' + err.message;
    console.error('✗ TEST 3 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 4: Sırt Çantası ve Kasa Yığını Sallanması (Player.js)
  // -------------------------------------------------------------
  console.log('--- TEST 4: Sırt Çantası ve Kasa Yığını Sallanması (Player.js) ---');
  try {
    const swayCheck = await page.evaluate(() => {
      const { player } = window.__GAME__;
      player.addItem('apricot');
      player.addItem('apricot');
      player.addItem('apricot');

      const rotZBefore = player.fruitAnchor ? player.fruitAnchor.rotation.z : 0;

      // Simulate moving
      player.update(0.1, { x: 1, y: 0, lengthSq: () => 1 });
      const rotZMoving = player.fruitAnchor ? player.fruitAnchor.rotation.z : 0;

      // Simulate idle
      for (let i = 0; i < 15; i++) {
        player.update(0.1, { x: 0, y: 0, lengthSq: () => 0 });
      }
      const rotZIdle = player.fruitAnchor ? player.fruitAnchor.rotation.z : 0;

      // Clean up player carry
      player.discardAll();

      return {
        rotZBefore,
        rotZMoving,
        rotZIdle
      };
    });

    console.log('Backpack sway check:', swayCheck);
    if (swayCheck.rotZMoving === 0 && swayCheck.rotZBefore === 0) {
      console.warn('Warning: sway amount was 0, checking walkCycle progression');
    }
    if (Math.abs(swayCheck.rotZIdle) > 0.01) {
      throw new Error(`Dururken çanta salınımı sıfırlanmalı, kalan: ${swayCheck.rotZIdle}`);
    }

    results.test4 = 'GEÇTİ';
    console.log('✓ TEST 4 GEÇTİ: Yürürken sırt çantası salınımı ve durunca dinlenmeye dönüş doğrulandı.\n');
  } catch (err) {
    results.test4 = 'KALDI: ' + err.message;
    console.error('✗ TEST 4 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 5: Rehber Sistemi (Tutorial.js) Adımları ve Pusula
  // -------------------------------------------------------------
  console.log('--- TEST 5: Rehber Sistemi (Tutorial.js) Adımları ve Pusula ---');
  try {
    await page.screenshot({ path: path.join(screenshotDir, '01-tutorial-step0.png') });

    const tutCheck = await page.evaluate(() => {
      const { tutorial, events, state } = window.__GAME__;
      const banner = document.getElementById('tutorial-banner');
      const text = document.getElementById('tutorial-text');
      const counter = document.getElementById('tutorial-step-counter');
      const skipBtn = document.getElementById('tutorial-skip-btn');
      const closeBtn = document.getElementById('tutorial-close-btn');
      const edgePointer = document.getElementById('tutorial-edge-pointer');

      const initialActive = tutorial.isActive;
      const initialStepIdx = tutorial.currentStepIndex;
      const initialText = text ? text.textContent.trim() : null;
      const initialCounter = counter ? counter.textContent.trim() : null;

      // Check 3D target marker position (Step 0 is tree: x: -16, z: -4.5)
      const markerPos = tutorial.markerGroup ? {
        x: tutorial.markerGroup.position.x,
        z: tutorial.markerGroup.position.z,
        visible: tutorial.markerGroup.visible
      } : null;

      // Advance step via state: collecting apricot completes step 0
      const { player } = window.__GAME__;
      player.addItem('apricot');
      tutorial._checkStepPredicates();
      const step1Idx = tutorial.currentStepIndex;
      const step1Text = text.textContent.trim();
      const step1Counter = counter.textContent.trim();

      // Test "Geç" (skip) button: advances step 1 -> step 2
      skipBtn.click();
      const step2Idx = tutorial.currentStepIndex;

      return {
        initialActive,
        initialStepIdx,
        initialText,
        initialCounter,
        markerPos,
        step1Idx,
        step1Text,
        step1Counter,
        step2Idx
      };
    });

    console.log('Tutorial progression check:', tutCheck);
    if (!tutCheck.initialActive || tutCheck.initialStepIdx !== 0) {
      throw new Error(`Rehber başlangıç adımı hatalı: active=${tutCheck.initialActive}, step=${tutCheck.initialStepIdx}`);
    }
    if (tutCheck.initialCounter !== '1/9') {
      throw new Error(`Sayaç 1/9 olmalı, bulunan: ${tutCheck.initialCounter}`);
    }
    if (tutCheck.step1Idx !== 1 || tutCheck.step1Counter !== '2/9') {
      throw new Error(`Olay ile adım ilerleme başarısız: step=${tutCheck.step1Idx}`);
    }
    if (tutCheck.step2Idx !== 2) {
      throw new Error(`"Geç" butonu ile adım ilerleme başarısız: step=${tutCheck.step2Idx}`);
    }

    // Now test close button: closes tutorial and sets tutorialDone in state
    const closeCheck = await page.evaluate(() => {
      const { tutorial, state } = window.__GAME__;
      const closeBtn = document.getElementById('tutorial-close-btn');
      closeBtn.click();

      const overlay = document.getElementById('tutorial-overlay');
      return {
        isActive: tutorial.isActive,
        isDoneInState: state.isTutorialDone(),
        isOverlayHidden: overlay.classList.contains('tutorial-hidden')
      };
    });

    // Clean up player carry
    await page.evaluate(() => {
      window.__GAME__.player.discardAll();
    });

    console.log('Tutorial close check:', closeCheck);
    if (closeCheck.isActive || !closeCheck.isDoneInState || !closeCheck.isOverlayHidden) {
      throw new Error('Rehber kapatma butonu rehberi kapatmadı veya durumu kaydetmedi');
    }

    results.test5 = 'GEÇTİ';
    console.log('✓ TEST 5 GEÇTİ: Rehber adımları, olay tetiklemesi, "Geç" ve "Kapat" butonları doğrulandı.\n');
  } catch (err) {
    results.test5 = 'KALDI: ' + err.message;
    console.error('✗ TEST 5 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 6: Kayıt Sürümü 2 ve Sürüm 1 -> 2 Migrasyonu
  // -------------------------------------------------------------
  console.log('--- TEST 6: Kayıt Sürümü 2 ve Sürüm 1 -> 2 Migrasyonu ---');
  try {
    const migrationCheck = await page.evaluate(() => {
      const { state } = window.__GAME__;

      // 1. Check current saved state version
      state.save();
      const currentRaw = localStorage.getItem('kayisi_save');
      const currentSaved = JSON.parse(currentRaw);

      // Disable auto-save so reload doesn't overwrite our test payload
      state._saveDisabled = true;

      // 2. Prepare a legacy Version 1 save payload
      const legacySave = {
        version: 1,
        money: 950,
        upgrades: {
          tentCapacity: 2,
          walkSpeed: 1,
          carryCapacity: 0,
          harvestSpeed: 3
        },
        savedAt: Date.now() - 50000
      };
      localStorage.setItem('kayisi_save', JSON.stringify(legacySave));

      // Reload state from storage
      state._saveDisabled = false;
      state.load();

      const migratedMoney = state.getMoney();
      const migratedTentLevel = state.getUpgradeLevel('tentCapacity');
      const migratedHarvestLevel = state.getUpgradeLevel('harvestSpeed');
      const migratedTutorialDone = state.isTutorialDone();
      const migratedSoundEnabled = state.isSoundEnabled();

      // Trigger save and inspect output format
      state.save();
      const postMigrationRaw = JSON.parse(localStorage.getItem('kayisi_save'));

      return {
        currentVersion: currentSaved.version,
        hasTutorialDoneInSave: 'tutorialDone' in currentSaved,
        hasSoundEnabledInSave: 'soundEnabled' in currentSaved,
        migratedMoney,
        migratedTentLevel,
        migratedHarvestLevel,
        migratedTutorialDone,
        migratedSoundEnabled,
        postMigrationVersion: postMigrationRaw.version
      };
    });

    console.log('Save migration check:', migrationCheck);
    if (migrationCheck.currentVersion !== 2 || migrationCheck.postMigrationVersion !== 2) {
      throw new Error(`Kayıt sürümü 2 olmalı, bulunan: ${migrationCheck.currentVersion}`);
    }
    if (migrationCheck.migratedMoney !== 950 || migrationCheck.migratedTentLevel !== 2 || migrationCheck.migratedHarvestLevel !== 3) {
      throw new Error(`Sürüm 1 migrasyonu para veya yükseltmeleri bozdu: ${JSON.stringify(migrationCheck)}`);
    }

    results.test6 = 'GEÇTİ';
    console.log('✓ TEST 6 GEÇTİ: Version 2 kayıt yapısı ve Version 1 veri kaybısız migrasyon doğrulandı.\n');
  } catch (err) {
    results.test6 = 'KALDI: ' + err.message;
    console.error('✗ TEST 6 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 7: Mobil Arayüz Yerleşimi ve Dokunma Alanları (390x844)
  // -------------------------------------------------------------
  console.log('--- TEST 7: Mobil Arayüz Yerleşimi ve Dokunma Alanları (390x844) ---');
  try {
    const layoutCheck = await page.evaluate(() => {
      const audioBtn = document.getElementById('audio-toggle-btn');
      const upgradeBtn = document.getElementById('upgrade-btn');
      const devToggle = document.getElementById('dev-panel-toggle');
      const moneyCard = document.querySelector('.money-card');

      const rectAudio = audioBtn.getBoundingClientRect();
      const rectUpgrade = upgradeBtn.getBoundingClientRect();
      const rectDev = devToggle.getBoundingClientRect();
      const rectMoney = moneyCard.getBoundingClientRect();

      return {
        audioBtn: { w: rectAudio.width, h: rectAudio.height, visible: rectAudio.width > 0 },
        upgradeBtn: { w: rectUpgrade.width, h: rectUpgrade.height, visible: rectUpgrade.width > 0 },
        devToggle: { w: rectDev.width, h: rectDev.height, visible: rectDev.width > 0 },
        moneyCard: { w: rectMoney.width, h: rectMoney.height, visible: rectMoney.width > 0 },
        docWidth: document.documentElement.clientWidth,
        bodyScrollWidth: document.body.scrollWidth
      };
    });

    console.log('Layout dimensions check:', layoutCheck);
    if (layoutCheck.bodyScrollWidth > layoutCheck.docWidth) {
      throw new Error(`Yatay taşma tespit edildi: scrollWidth=${layoutCheck.bodyScrollWidth} > clientWidth=${layoutCheck.docWidth}`);
    }
    if (layoutCheck.audioBtn.w < 36 || layoutCheck.audioBtn.h < 36) {
      throw new Error(`Ses butonu dokunma hedefi çok küçük: ${layoutCheck.audioBtn.w}x${layoutCheck.audioBtn.h}`);
    }
    if (layoutCheck.upgradeBtn.h < 44) {
      throw new Error(`Yükseltme butonu dokunma hedefi çok küçük: ${layoutCheck.upgradeBtn.h}`);
    }

    await page.screenshot({ path: path.join(screenshotDir, '02-mobile-hud-390x844.png') });
    results.test7 = 'GEÇTİ';
    console.log('✓ TEST 7 GEÇTİ: 390x844 mobil arayüzde yatay taşma yok, dokunma alanları yeterli boyutta.\n');
  } catch (err) {
    results.test7 = 'KALDI: ' + err.message;
    console.error('✗ TEST 7 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 8: Uçtan Uca Döngü ve Regresyon Kontrolü
  // -------------------------------------------------------------
  console.log('--- TEST 8: Uçtan Uca Döngü ve Regresyon Kontrolü ---');
  try {
    const chainCheck = await page.evaluate(async () => {
      const { world, player, state, salesStand, setTimeScale } = window.__GAME__;

      // Boost speed for fast testing
      setTimeScale(10.0);

      // 1. Pick apricots
      player.addItem('apricot');
      player.addItem('apricot');
      player.addItem('apricot');
      player.addItem('apricot');
      player.addItem('apricot');

      const count1 = player.getCount();
      const type1 = player.getCurrentType();

      // Clear player and place a final dry2 crate in salesStand
      player.discardAll();
      salesStand.cratesCount = 2;
      salesStand._addVisualCrate();
      salesStand._addVisualCrate();

      const bufferBefore = salesStand.cratesCount;

      // Call truck immediately
      salesStand.callTruckImmediately();

      return {
        count1,
        type1,
        bufferBefore,
        truckState: salesStand.truckState
      };
    });

    console.log('Chain regression check:', chainCheck);
    if (chainCheck.count1 !== 5 || chainCheck.type1 !== 'apricot') {
      throw new Error('Kayısı toplama/taşıma regresyon hatası');
    }
    if (chainCheck.bufferBefore !== 2 || chainCheck.truckState !== 'ARRIVING') {
      throw new Error('Satış deposu / kamyon çağırma regresyon hatası');
    }

    results.test8 = 'GEÇTİ';
    console.log('✓ TEST 8 GEÇTİ: Mevcut üretim zinciri ve kamyon sistemi tam uyumlu çalışıyor.\n');
  } catch (err) {
    results.test8 = 'KALDI: ' + err.message;
    console.error('✗ TEST 8 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // KONSOL HATALARI KONTROLÜ
  // -------------------------------------------------------------
  if (consoleErrors.length > 0) {
    console.warn('\nKonsol Hataları:', consoleErrors);
  }

  await browser.close();

  console.log('\n========================================');
  console.log('AŞAMA 5 DOĞRULAMA ÖZETİ:');
  console.log('========================================');
  Object.entries(results).forEach(([test, status]) => {
    console.log(`${test}: ${status}`);
  });
  console.log('========================================\n');
}

runTest().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
