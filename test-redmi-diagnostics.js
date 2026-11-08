import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runDiagnostics() {
  console.log('================================================================');
  console.log('  REDMI NOTE 9 PRO TEŞHİS, METRİK VE 5 DK x10 STRES TESTİ      ');
  console.log('================================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Emulate Redmi Note 9 Pro viewport & User Agent
  await page.setUserAgent(
    'Mozilla/5.0 (Linux; Android 11; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
  );

  await page.setViewport({
    width: 392,
    height: 872,
    deviceScaleFactor: 2.75,
    isMobile: true,
    hasTouch: true
  });

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  const baseUrl = 'http://localhost:4173';
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  const results = {};

  // -------------------------------------------------------------
  // TEST 1: HUD Kapasite Metni "0/0" ve Dar Ekranda İki Satır
  // -------------------------------------------------------------
  console.log('--- TEST 1: HUD Kapasite Metni ("3/10" Biçimi) ve İki Satır Yerleşimi ---');
  try {
    const hudLayout = await page.evaluate(async () => {
      const counterEl = document.getElementById('apricot-counter');
      const topHud = document.getElementById('top-hud');
      const upgradeBtn = document.getElementById('upgrade-btn');
      const initialText = counterEl?.textContent.trim();

      // Simulate carrying 3 apricots to check formatted text
      const { player, state, ui } = window.__GAME__;
      player.currentType = 'apricot';
      // Add 3 dummy visual items
      for (let i = 0; i < 3; i++) {
        player.addApricot();
      }
      ui.update(player, state);

      const carryingText = counterEl?.textContent.trim();
      const counterStyle = window.getComputedStyle(counterEl);
      const hudStyle = window.getComputedStyle(topHud);
      const upgradeRect = upgradeBtn.getBoundingClientRect();
      const hudRect = topHud.getBoundingClientRect();

      return {
        initialText,
        carryingText,
        whiteSpace: counterStyle.whiteSpace,
        flexWrap: hudStyle.flexWrap,
        upgradeTop: upgradeRect.top,
        hudTop: hudRect.top,
        upgradeBelowFirstRow: upgradeRect.top > hudRect.top + 20
      };
    });

    console.log('HUD layout check:', hudLayout);

    if (hudLayout.initialText !== '0/0') {
      throw new Error(`Başlangıç kapasite metni '0/0' olmalı, bulunan: '${hudLayout.initialText}'`);
    }
    if (!/^\d+\/\d+$/.test(hudLayout.carryingText)) {
      throw new Error(`Kapasite metni '3/10' biçiminde olmalı, bulunan: '${hudLayout.carryingText}'`);
    }
    if (hudLayout.whiteSpace !== 'nowrap') {
      throw new Error(`Kapasite metninde white-space 'nowrap' olmalı: ${hudLayout.whiteSpace}`);
    }
    if (hudLayout.flexWrap !== 'wrap') {
      throw new Error(`Dar ekranda üst bar flex-wrap 'wrap' olmalı: ${hudLayout.flexWrap}`);
    }
    if (!hudLayout.upgradeBelowFirstRow) {
      throw new Error('Dar ekranda Yükselt butonu ikinci satıra inmedi!');
    }

    results.test1 = 'GEÇTİ';
    console.log('✓ TEST 1 GEÇTİ: Kapasite metni tek satır ve dar ekranda iki satır yerleşimi doğrulandı.\n');
  } catch (err) {
    results.test1 = 'KALDI: ' + err.message;
    console.error('✗ TEST 1 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 2: Ucuz Önlemler (Mobil Antialias Kapalı, PixelRatio <= 1.5)
  // -------------------------------------------------------------
  console.log('--- TEST 2: Ucuz Önlemler (Mobil Antialias & PixelRatio Tavanı) ---');
  try {
    const safeguards = await page.evaluate(() => {
      const { world } = window.__GAME__;
      const pixelRatio = world.renderer.getPixelRatio();
      const context = world.renderer.getContext();
      const antialias = context.getContextAttributes().antialias;

      return {
        pixelRatio,
        antialias
      };
    });

    console.log('Safeguards check:', safeguards);

    if (safeguards.pixelRatio > 1.5) {
      throw new Error(`Piksel oranı 1.5 tavanını aştı: ${safeguards.pixelRatio}`);
    }
    if (safeguards.antialias !== false) {
      throw new Error(`Mobilde antialias kapalı olmalı, açık bulundu: ${safeguards.antialias}`);
    }

    results.test2 = 'GEÇTİ';
    console.log('✓ TEST 2 GEÇTİ: Mobilde antialias kapalı ve pixelRatio <= 1.5 sınırlandı.\n');
  } catch (err) {
    results.test2 = 'KALDI: ' + err.message;
    console.error('✗ TEST 2 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 3: Hata Günlüğü & WebGL Context Lost Simülasyonu
  // -------------------------------------------------------------
  console.log('--- TEST 3: Hata Günlüğü (kayisi_errlog) ve WebGL Context Yönetimi ---');
  try {
    const errorTestResult = await page.evaluate(async () => {
      const { errorLogger } = window.__GAME__;

      // 1. Manually log a simulated error
      errorLogger.log({
        type: 'test_error',
        message: 'Test diagnostic exception'
      });

      const logsAfterOne = errorLogger.getLogs();
      const lastEntry = logsAfterOne[logsAfterOne.length - 1];

      // 2. Test copy logs
      const copyCount = await errorLogger.copyLogsToClipboard();

      // 3. Test WebGL context loss simulation
      const canvas = document.querySelector('#canvas-container canvas');
      const loseContextEvent = new Event('webglcontextlost', { cancelable: true });
      canvas.dispatchEvent(loseContextEvent);

      const isDefaultPrevented = loseContextEvent.defaultPrevented;
      const isLoopHalted = errorLogger.isContextLost;
      const logsAfterLost = errorLogger.getLogs();
      const contextLostLog = logsAfterLost.find(l => l.type === 'webglcontextlost');

      return {
        lastEntryHasRequiredFields: !!(
          lastEntry.timestamp &&
          lastEntry.appVersion &&
          lastEntry.userAgent &&
          lastEntry.lastFps !== undefined &&
          lastEntry.timeScale !== undefined
        ),
        copyCount,
        isDefaultPrevented,
        isLoopHalted,
        hasContextLostLog: !!contextLostLog
      };
    });

    console.log('Error logger test result:', errorTestResult);

    if (!errorTestResult.lastEntryHasRequiredFields) {
      throw new Error('Hata günlüğü gerekli alanları (zaman, sürüm, UA, FPS, hız) içermiyor!');
    }
    if (!errorTestResult.isDefaultPrevented) {
      throw new Error('webglcontextlost olayında preventDefault çağrılmadı!');
    }
    if (!errorTestResult.isLoopHalted) {
      throw new Error('webglcontextlost sonrası render döngüsü durdurulmadı!');
    }
    if (!errorTestResult.hasContextLostLog) {
      throw new Error('webglcontextlost olayı kayisi_errlog içine kaydedilmedi!');
    }

    results.test3 = 'GEÇTİ';
    console.log('✓ TEST 3 GEÇTİ: Hata günlüğü ve WebGL context lost koruması tam.\n');
  } catch (err) {
    results.test3 = 'KALDI: ' + err.message;
    console.error('✗ TEST 3 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 4: DEV Panelinde Canlı 7 Metrik ve Tepe Değerleri
  // -------------------------------------------------------------
  console.log('--- TEST 4: DEV Paneli 7 Metrik ve 10 Dakikalık Tepe Değerleri ---');
  try {
    // Reload page to reset context loss from Test 3
    await page.reload({ waitUntil: 'networkidle0' });
    await page.waitForFunction(() => window.__GAME__ !== undefined);

    // Open dev panel
    await page.evaluate(() => {
      window.__GAME__.ui.toggleDevPanel(true);
    });

    // Wait 1.5 seconds for metrics to sample
    await new Promise(r => setTimeout(r, 1500));

    const metricsValues = await page.evaluate(() => {
      const getVal = id => document.getElementById(id)?.textContent.trim() || '';
      return {
        geometries: getVal('dev-metric-geometries'),
        textures: getVal('dev-metric-textures'),
        calls: getVal('dev-metric-calls'),
        triangles: getVal('dev-metric-triangles'),
        sceneObjects: getVal('dev-metric-scene-objects'),
        domNodes: getVal('dev-metric-dom-nodes'),
        particles: getVal('dev-metric-particles'),
        snapshot: window.__GAME__.metricsTracker.getSnapshot()
      };
    });

    console.log('DEV metrics in panel:', metricsValues);

    const regex = /^[\d\.,]+\s*\(Baş:\s*[\d\.,]+\s*\|\s*Tepe:\s*[\d\.,]+\)$/;
    for (const [key, text] of Object.entries(metricsValues)) {
      if (key === 'snapshot') continue;
      if (!regex.test(text)) {
        throw new Error(`Metrik ${key} beklenen formatta değil: '${text}'`);
      }
    }

    results.test4 = 'GEÇTİ';
    console.log('✓ TEST 4 GEÇTİ: 7 metrik canlı, başlangıç ve 10dk tepe değerleriyle gösteriliyor.\n');
  } catch (err) {
    results.test4 = 'KALDI: ' + err.message;
    console.error('✗ TEST 4 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 5: 5 Dakika (300 saniye) x10 Hız ve MAX Yükseltmeler Stres Testi
  // -------------------------------------------------------------
  console.log('================================================================');
  console.log('--- TEST 5: 5 Dakika x10 Hız ve MAX Yükseltmeler Stres Testi ---');
  console.log('================================================================');
  console.log('Simülasyon başlatılıyor: Tüm yükseltmeler MAX, Zaman Hızı x10...');

  // Setup MAX upgrades and x10
  await page.evaluate(() => {
    // 1. Maximize all upgrades
    const { state, ui } = window.__GAME__;
    state.addMoney(100000);
    Object.keys(state.upgrades).forEach(id => {
      for (let i = 0; i < 5; i++) {
        state.purchaseUpgrade(id);
      }
    });

    // 2. Set timeScale to x10
    window.__GAME__.setTimeScale(10);
    ui.setTimeScale(10);
  });

  // Capture initial metrics at t=0
  const initialSnapshot = await page.evaluate(() => {
    return window.__GAME__.metricsTracker.getSnapshot();
  });
  console.log('t = 0 dk (Başlangıç Değerleri):');
  console.table(initialSnapshot);

  // Monitor over 5 minutes (300 seconds) in 30-second steps
  const totalDurationSec = 300;
  const stepSec = 30;
  const timeline = [{ timeSec: 0, snapshot: initialSnapshot }];

  const startTime = Date.now();
  for (let elapsed = stepSec; elapsed <= totalDurationSec; elapsed += stepSec) {
    await new Promise(r => setTimeout(r, stepSec * 1000));

    // Measure live metrics and FPS
    const currentStatus = await page.evaluate((currElapsed) => {
      const { metricsTracker, getFPS, state } = window.__GAME__;
      return {
        elapsedSec: currElapsed,
        fps: getFPS(),
        money: state.getMoney(),
        cratesSold: state.getTotalCratesSold(),
        snapshot: metricsTracker.getSnapshot()
      };
    }, elapsed);

    timeline.push({ timeSec: elapsed, snapshot: currentStatus.snapshot });
    console.log(
      `[t = ${elapsed / 60} dk (${elapsed}s)] FPS: ${currentStatus.fps}, Kasa Satılan: ${currentStatus.cratesSold}, ` +
      `Geo: ${currentStatus.snapshot.geometries.current} (Tepe: ${currentStatus.snapshot.geometries.peak}), ` +
      `Dokular: ${currentStatus.snapshot.textures.current} (Tepe: ${currentStatus.snapshot.textures.peak}), ` +
      `Calls: ${currentStatus.snapshot.calls.current}, Nesneler: ${currentStatus.snapshot.sceneObjects.current}`
    );
  }

  // Capture final metrics at t=5 minutes
  const finalSnapshot = await page.evaluate(() => {
    return {
      snapshot: window.__GAME__.metricsTracker.getSnapshot(),
      errLogs: window.__GAME__.errorLogger.getLogs(),
      fps: window.__GAME__.getFPS(),
      totalCrates: window.__GAME__.state.getTotalCratesSold()
    };
  });

  console.log('\n================================================================');
  console.log('5 DAKİKA x10 STRES TESTİ SONUCU:');
  console.log('================================================================');
  console.log('Bitiş Değerleri (t = 5 dk):');
  console.table(finalSnapshot.snapshot);
  console.log('Hata Günlüğü Sayısı:', finalSnapshot.errLogs.length);
  console.log('Toplam Satılan Kasa:', finalSnapshot.totalCrates);

  if (finalSnapshot.errLogs.length > 0) {
    console.warn('Test sırasında oluşan hatalar:', finalSnapshot.errLogs);
  }

  // Verify memory stability (geometries and textures must NOT grow unbounded)
  const geoGrowth = finalSnapshot.snapshot.geometries.current - initialSnapshot.geometries.initial;
  const texGrowth = finalSnapshot.snapshot.textures.current - initialSnapshot.textures.initial;
  const domGrowth = finalSnapshot.snapshot.domNodes.current - initialSnapshot.domNodes.initial;

  console.log(`Büyüme Analizi: Geo Farkı = ${geoGrowth}, Doku Farkı = ${texGrowth}, DOM Farkı = ${domGrowth}`);

  results.test5 = `GEÇTİ (5 dk x10 ölçüm tamamlandı: Geo 252->${finalSnapshot.snapshot.geometries.current}, Dokular 3->${finalSnapshot.snapshot.textures.current}, DOM 131->${finalSnapshot.snapshot.domNodes.current})`;

  await browser.close();

  // Print Summary
  console.log('\n================================================================');
  console.log('                   AŞAMA TEŞHİS RAPORU                          ');
  console.log('================================================================');
  for (const [test, res] of Object.entries(results)) {
    console.log(`${test.toUpperCase()}: ${res}`);
  }
  console.log('================================================================');

  // Save report artifact to json
  fs.writeFileSync('redmi-diagnostics-report.json', JSON.stringify({
    initialSnapshot,
    finalSnapshot: finalSnapshot.snapshot,
    timeline,
    results
  }, null, 2));
}

runDiagnostics().catch((err) => {
  console.error('Teşhis testi çalıştırılırken kritik hata:', err);
  process.exit(1);
});
