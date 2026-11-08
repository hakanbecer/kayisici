import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('test-artifacts-phase8');

if (!fs.existsSync(ARTIFACTS_DIR)) {
  fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });
}

async function run5MinStressTest() {
  console.log('================================================================');
  console.log('  KAYISI HASADI - 5 DAKİKA x10 MASAÜSTÜ STRES VE SIZINTI TESTİ   ');
  console.log('================================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Desktop viewport & User Agent
  await page.setViewport({
    width: 1280,
    height: 800,
    deviceScaleFactor: 1.0,
    isMobile: false,
    hasTouch: false
  });

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  const baseUrl = 'http://localhost:4173';
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  // 1. Initialize audio & interactions
  await page.mouse.click(100, 100);
  await page.evaluate(() => {
    if (window.__GAME__.audio && window.__GAME__.audio._ensureContext) {
      window.__GAME__.audio._ensureContext();
    }
  });

  // 2. Open DEV panel
  await page.click('#dev-panel-toggle');
  await new Promise((r) => setTimeout(r, 300));

  // 3. Apply MAX upgrades & +10000 TL
  console.log('⚡ Tüm yükseltmeler MAX yapılıyor...');
  await page.click('#dev-max-upgrades');
  await page.click('#dev-add-10000');
  await page.click('#dev-add-10000');

  // 4. Set timeScale to x10
  console.log('⚡ Zaman hızı x10 seçiliyor...');
  const x10Btn = await page.$('.timescale-btn[data-scale="10"]');
  if (x10Btn) {
    await x10Btn.click();
  } else {
    await page.evaluate(() => window.__GAME__.setTimeScale(10));
  }

  // Allow 2 seconds for initial state to settle
  await new Promise((r) => setTimeout(r, 2000));

  // 5. Measure baseline initial numbers
  const initialMetrics = await page.evaluate(() => {
    const snap = window.__GAME__.metricsTracker.getSnapshot();
    const stats = {
      geometries: snap.geometries,
      textures: snap.textures,
      calls: snap.calls,
      triangles: snap.triangles,
      sceneObjects: snap.sceneObjects,
      domNodes: snap.domNodes,
      particles: snap.particles,
      heap: snap.heap,
      audioStats: snap.audioStats,
      fps60: snap.fps60,
      cratesSold: window.__GAME__.state.getTotalCratesSold(),
      money: window.__GAME__.state.getMoney(),
      timeScale: window.__GAME__.getTimeScale()
    };
    return stats;
  });

  console.log('\n--- BAŞLANGIÇ DEĞERLERİ ---');
  console.log(`Geometriler:      ${initialMetrics.geometries.formatted}`);
  console.log(`Dokular:          ${initialMetrics.textures.formatted}`);
  console.log(`Draw Calls:       ${initialMetrics.calls.formatted}`);
  console.log(`Üçgenler:         ${initialMetrics.triangles.formatted}`);
  console.log(`Sahne Nesneleri:  ${initialMetrics.sceneObjects.formatted}`);
  console.log(`DOM Elemanları:   ${initialMetrics.domNodes.formatted}`);
  console.log(`Aktif Parçacık:   ${initialMetrics.particles.formatted}`);
  console.log(`JS Heap:          ${initialMetrics.heap ? initialMetrics.heap.formatted : 'N/A'}`);
  console.log(`WebAudio:         ${initialMetrics.audioStats ? initialMetrics.audioStats.formatted : 'N/A'}`);
  console.log(`60sn FPS:         ${initialMetrics.fps60 ? initialMetrics.fps60.formatted : 'N/A'}`);
  console.log(`Zaman Hızı:       x${initialMetrics.timeScale}`);
  console.log('----------------------------\n');

  console.log('🚀 5 dakikalık x10 stres testi başlatılıyor (toplam süre: 300 saniye)...');

  const DURATION_SEC = 300; // 5 full minutes
  const SAMPLE_INTERVAL_SEC = 30; // log every 30 seconds
  const startTime = Date.now();
  let nextSampleTime = 30;

  const samples = [];
  samples.push({ sec: 0, ...initialMetrics });

  let truckTriggerCount = 0;

  while ((Date.now() - startTime) / 1000 < DURATION_SEC) {
    const elapsedSec = Math.round((Date.now() - startTime) / 1000);

    // Keep active simulated production flow: harvest apricots, move crates, summon trucks if buffer has items
    await page.evaluate(() => {
      const g = window.__GAME__;
      // If salesStand has crates ready and truck is waiting, summon truck
      if (g.salesStand) {
        if (g.salesStand.truckState === 'WAITING' && g.salesStand.cratesCount >= 3) {
          g.salesStand.callTruckImmediately();
        }
      }
      // Fill sales stand buffer from time to time to simulate rapid continuous operation
      if (g.salesStand && g.salesStand.cratesCount < 12) {
        g.salesStand.cratesCount = Math.min(12, g.salesStand.cratesCount + 2);
      }
      // Also occasionally play a sound to verify audio tracking
      if (Math.random() < 0.3 && g.audio) {
        g.audio.playCollect();
      }
    });

    if (elapsedSec >= nextSampleTime) {
      const currentStats = await page.evaluate(() => {
        const snap = window.__GAME__.metricsTracker.getSnapshot();
        return {
          geometries: snap.geometries.current,
          geomPeak: snap.geometries.peak,
          textures: snap.textures.current,
          calls: snap.calls.current,
          sceneObjects: snap.sceneObjects.current,
          particles: snap.particles.current,
          heap: snap.heap ? snap.heap.current : null,
          heapPeak: snap.heap ? snap.heap.peak : null,
          audio: snap.audioStats ? snap.audioStats.formatted : null,
          fps60: snap.fps60 ? snap.fps60.formatted : null,
          cratesSold: window.__GAME__.state.getTotalCratesSold(),
          money: window.__GAME__.state.getMoney()
        };
      });

      console.log(
        `[${String(elapsedSec).padStart(3, ' ')}s / 300s] ` +
        `Geom: ${currentStats.geometries} (Tepe: ${currentStats.geomPeak}) | ` +
        `DrawCalls: ${currentStats.calls} | ` +
        `Heap: ${currentStats.heap !== null ? currentStats.heap + ' MB (Tepe: ' + currentStats.heapPeak + ' MB)' : 'N/A'} | ` +
        `Satılan: ${currentStats.cratesSold} kasa | ` +
        `FPS: ${currentStats.fps60}`
      );

      samples.push({ sec: elapsedSec, ...currentStats });
      nextSampleTime += SAMPLE_INTERVAL_SEC;
    }

    await new Promise((r) => setTimeout(r, 1000));
  }

  // 6. Final measurements after 5 full minutes
  const finalMetrics = await page.evaluate(() => {
    const snap = window.__GAME__.metricsTracker.getSnapshot();
    return {
      geometries: snap.geometries,
      textures: snap.textures,
      calls: snap.calls,
      triangles: snap.triangles,
      sceneObjects: snap.sceneObjects,
      domNodes: snap.domNodes,
      particles: snap.particles,
      heap: snap.heap,
      audioStats: snap.audioStats,
      fps60: snap.fps60,
      cratesSold: window.__GAME__.state.getTotalCratesSold(),
      money: window.__GAME__.state.getMoney(),
      errCount: window.__GAME__.errorLogger.getLogCount()
    };
  });

  console.log('\n================================================================');
  console.log('  5 DAKİKA x10 STRES TESTİ SONUÇLARI (Masaüstü)');
  console.log('================================================================');
  console.log(`Geometriler:      ${finalMetrics.geometries.formatted}`);
  console.log(`Dokular:          ${finalMetrics.textures.formatted}`);
  console.log(`Draw Calls:       ${finalMetrics.calls.formatted}`);
  console.log(`Üçgenler:         ${finalMetrics.triangles.formatted}`);
  console.log(`Sahne Nesneleri:  ${finalMetrics.sceneObjects.formatted}`);
  console.log(`DOM Elemanları:   ${finalMetrics.domNodes.formatted}`);
  console.log(`Aktif Parçacık:   ${finalMetrics.particles.formatted}`);
  console.log(`JS Heap:          ${finalMetrics.heap ? finalMetrics.heap.formatted : 'N/A'}`);
  console.log(`WebAudio:         ${finalMetrics.audioStats ? finalMetrics.audioStats.formatted : 'N/A'}`);
  console.log(`60sn FPS:         ${finalMetrics.fps60 ? finalMetrics.fps60.formatted : 'N/A'}`);
  console.log(`Toplam Satılan:   ${finalMetrics.cratesSold} kasa`);
  console.log(`Toplam Para:      ${finalMetrics.money.toLocaleString('tr-TR')} 💰`);
  console.log(`Hata Sayısı:      ${finalMetrics.errCount}`);
  console.log('================================================================\n');

  // Take screenshot
  const screenshotPath = path.join(ARTIFACTS_DIR, 'desktop-5min-final.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`📸 Ekran görüntüsü kaydedildi: ${screenshotPath}`);

  // Write results JSON
  const results = {
    initial: initialMetrics,
    final: finalMetrics,
    samples,
    consoleErrors
  };
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'results.json'), JSON.stringify(results, null, 2));

  await browser.close();
  console.log('✅ Test tamamlandı!');
}

run5MinStressTest().catch((err) => {
  console.error('Test hatası:', err);
  process.exit(1);
});
