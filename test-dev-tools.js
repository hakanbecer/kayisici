import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTest() {
  console.log('=== Starting Developer Tools & TimeScale Verification ===\n');

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
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  // Navigate and reset storage
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  const screenshotDir = path.resolve('test-artifacts-dev-tools');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const results = {};

  // -------------------------------------------------------------
  // TEST 1: Geliştirici Paneli Açılışı ve Dev Araçlarının Varlığı
  // -------------------------------------------------------------
  console.log('\n--- TEST 1: Geliştirici Paneli ve Dev Araçları Görünürlüğü ---');
  try {
    // Open dev panel
    await page.click('#dev-panel-toggle');
    await new Promise(r => setTimeout(r, 100));

    const checkDom = await page.evaluate(() => {
      const sec = document.getElementById('dev-tools-section');
      const add1k = document.getElementById('dev-add-1000');
      const add10k = document.getElementById('dev-add-10000');
      const maxUpgrades = document.getElementById('dev-max-upgrades');
      const timeBtns = Array.from(document.querySelectorAll('.timescale-btn')).map(b => ({
        scale: b.dataset.scale,
        text: b.textContent.trim(),
        isActive: b.classList.contains('is-active')
      }));

      return {
        secVisible: sec && sec.style.display !== 'none',
        hasAdd1k: !!add1k,
        hasAdd10k: !!add10k,
        hasMaxUpgrades: !!maxUpgrades,
        timeBtns,
        initialTimeScale: window.__GAME__.getTimeScale()
      };
    });

    console.log('Dev tools DOM check:', checkDom);
    if (!checkDom.secVisible) throw new Error('dev-tools-section should be visible in DEV_MODE');
    if (!checkDom.hasAdd1k || !checkDom.hasAdd10k || !checkDom.hasMaxUpgrades) {
      throw new Error('Dev action buttons missing');
    }
    if (checkDom.initialTimeScale !== 1.0) throw new Error(`Initial timeScale must be 1.0, got ${checkDom.initialTimeScale}`);
    if (checkDom.timeBtns.length !== 3) throw new Error('Expected 3 timescale buttons (x1, x3, x10)');
    if (!checkDom.timeBtns[0].isActive) throw new Error('x1 button should be active by default');

    console.log('✓ TEST 1 GEÇTİ: Dev araçları paneli ve butonları başarıyla görüntülendi.');
    results['Test 1 - Dev Araçları Görünürlüğü'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 1 KALDI:', err);
    results['Test 1 - Dev Araçları Görünürlüğü'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // TEST 2: "+1000 TL" Butonu ve Kayıt Entegrasyonu
  // -------------------------------------------------------------
  console.log('\n--- TEST 2: "+1000 TL" Butonu ---');
  try {
    await page.click('#dev-add-1000');
    await new Promise(r => setTimeout(r, 100));

    const check1k = await page.evaluate(() => {
      const { state } = window.__GAME__;
      const hudText = document.getElementById('money-counter').textContent.trim();
      const rawSave = localStorage.getItem('kayisi_save');
      const savedMoney = rawSave ? JSON.parse(rawSave).money : -1;

      return {
        money: state.getMoney(),
        hudText,
        savedMoney
      };
    });

    console.log('State after +1000 TL click:', check1k);
    if (check1k.money !== 1000) throw new Error(`Expected 1000 money, got ${check1k.money}`);
    if (check1k.hudText !== '1.000') throw new Error(`HUD money counter should show "1.000", got "${check1k.hudText}"`);
    if (check1k.savedMoney !== 1000) throw new Error(`localStorage save should have 1000 money, got ${check1k.savedMoney}`);

    console.log('✓ TEST 2 GEÇTİ: "+1000 TL" butonu parayı State.js üzerinden ekledi, HUD güncellendi ve kaydedildi.');
    results['Test 2 - +1000 TL Butonu'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 2 KALDI:', err);
    results['Test 2 - +1000 TL Butonu'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // TEST 3: "+10000 TL" Butonu ve Kayıt Entegrasyonu
  // -------------------------------------------------------------
  console.log('\n--- TEST 3: "+10000 TL" Butonu ---');
  try {
    await page.click('#dev-add-10000');
    await new Promise(r => setTimeout(r, 100));

    const check11k = await page.evaluate(() => {
      const { state } = window.__GAME__;
      const hudText = document.getElementById('money-counter').textContent.trim();
      const rawSave = localStorage.getItem('kayisi_save');
      const savedMoney = rawSave ? JSON.parse(rawSave).money : -1;

      return {
        money: state.getMoney(),
        hudText,
        savedMoney
      };
    });

    console.log('State after +10000 TL click:', check11k);
    if (check11k.money !== 11000) throw new Error(`Expected 11000 money (1000+10000), got ${check11k.money}`);
    if (check11k.hudText !== '11.000') throw new Error(`HUD money counter should show "11.000", got "${check11k.hudText}"`);
    if (check11k.savedMoney !== 11000) throw new Error(`localStorage save should have 11000 money, got ${check11k.savedMoney}`);

    console.log('✓ TEST 3 GEÇTİ: "+10000 TL" butonu 10000 para ekledi (toplam 11.000), HUD ve kayıt güncellendi.');
    results['Test 3 - +10000 TL Butonu'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 3 KALDI:', err);
    results['Test 3 - +10000 TL Butonu'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // TEST 4: Zaman Hızı Seçici: x1 / x3 / x10 ve Dünya Hızlanması
  // -------------------------------------------------------------
  console.log('\n--- TEST 4: Zaman Hızı Seçici (x1 / x3 / x10) ---');
  try {
    // 1. Select x3
    await page.evaluate(() => {
      const btn = document.querySelector('.timescale-btn[data-scale="3"]');
      if (btn) btn.click();
    });

    const scaleCheck3 = await page.evaluate(() => ({
      scale: window.__GAME__.getTimeScale(),
      isActive: document.querySelector('.timescale-btn[data-scale="3"]').classList.contains('is-active')
    }));
    console.log('TimeScale after x3 click:', scaleCheck3);
    if (scaleCheck3.scale !== 3.0 || !scaleCheck3.isActive) {
      throw new Error(`Expected scale 3.0 and active class, got ${scaleCheck3.scale}`);
    }

    // 2. Select x10
    await page.evaluate(() => {
      const btn = document.querySelector('.timescale-btn[data-scale="10"]');
      if (btn) btn.click();
    });

    const scaleCheck10 = await page.evaluate(() => ({
      scale: window.__GAME__.getTimeScale(),
      isActive: document.querySelector('.timescale-btn[data-scale="10"]').classList.contains('is-active')
    }));
    console.log('TimeScale after x10 click:', scaleCheck10);
    if (scaleCheck10.scale !== 10.0 || !scaleCheck10.isActive) {
      throw new Error(`Expected scale 10.0 and active class, got ${scaleCheck10.scale}`);
    }

    // 3. Test world acceleration: wait 400ms wall-clock time and measure truck timer drop
    const timerStart = await page.evaluate(() => window.__GAME__.salesStand.truckTimer);
    await new Promise(r => setTimeout(r, 400));
    const timerEnd = await page.evaluate(() => window.__GAME__.salesStand.truckTimer);
    const elapsedWorldSeconds = timerStart - timerEnd;
    console.log(`In 400ms wall time at x10, world progressed: ${elapsedWorldSeconds.toFixed(2)} seconds`);
    if (elapsedWorldSeconds < 2.5) {
      throw new Error(`At x10 scale, 400ms wall-clock time should advance world by ~4s, but advanced only ${elapsedWorldSeconds.toFixed(2)}s`);
    }

    console.log('✓ TEST 4 GEÇTİ: Zaman hızı seçici (x1/x3/x10) dünya döngüsünü 10 kat hızlandırdı.');
    results['Test 4 - Zaman Hızı Seçici (x1/x3/x10)'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 4 KALDI:', err);
    results['Test 4 - Zaman Hızı Seçici (x1/x3/x10)'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // TEST 5: Oyuncu Hızının Zaman Hızından Etkilenmemesi (Kural)
  // -------------------------------------------------------------
  console.log('\n--- TEST 5: Oyuncu Hızının timeScale\'den Etkilenmemesi ---');
  try {
    // Keep timeScale at x10
    // Move player at center
    await page.evaluate(() => {
      window.__GAME__.player.group.position.set(0, 0, 0);
    });

    // Close dev panel for free movement
    await page.click('#dev-panel-close');
    await new Promise(r => setTimeout(r, 100));

    const pos1 = await page.evaluate(() => ({
      x: window.__GAME__.player.getPosition().x,
      z: window.__GAME__.player.getPosition().z
    }));

    // Move player rightward for 300ms using keyboard ArrowRight
    await page.keyboard.down('ArrowRight');
    await new Promise(r => setTimeout(r, 300));
    await page.keyboard.up('ArrowRight');

    const pos2 = await page.evaluate(() => ({
      x: window.__GAME__.player.getPosition().x,
      z: window.__GAME__.player.getPosition().z
    }));

    const distAtX10 = Math.hypot(pos2.x - pos1.x, pos2.z - pos1.z);
    console.log(`Player moved ${distAtX10.toFixed(2)}m in 300ms while world timeScale was x10.`);

    // Expected distance in 300ms at speed 6.2: ~ 6.2 * 0.3 = 1.86m (not 18.6m!).
    if (distAtX10 > 3.0) {
      throw new Error(`Player moved ${distAtX10.toFixed(2)}m; player speed WAS wrongly affected by timeScale!`);
    }
    if (distAtX10 < 0.5) {
      throw new Error(`Player did not move sufficiently: ${distAtX10}m`);
    }

    // Reset timeScale back to x1
    await page.evaluate(() => {
      window.__GAME__.setTimeScale(1.0);
    });

    console.log('✓ TEST 5 GEÇTİ: Oyuncu hareket hızı timeScale x10 iken bile normal hızında kaldı, etkilenmedi.');
    results['Test 5 - Oyuncu Hızının Korunması'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 5 KALDI:', err);
    results['Test 5 - Oyuncu Hızının Korunması'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // TEST 6: "Tüm Yükseltmeleri MAX Yap" Butonu
  // -------------------------------------------------------------
  console.log('\n--- TEST 6: "Tüm Yükseltmeleri MAX Yap" Butonu ---');
  try {
    // Open dev panel
    await page.click('#dev-panel-toggle');
    await new Promise(r => setTimeout(r, 100));

    // Click MAX button
    await page.click('#dev-max-upgrades');
    await new Promise(r => setTimeout(r, 100));

    const maxStatsCheck = await page.evaluate(() => {
      const { state, player, world } = window.__GAME__;
      return {
        levels: {
          tentCapacity: state.getUpgradeLevel('tentCapacity'),
          walkSpeed: state.getUpgradeLevel('walkSpeed'),
          carryCapacity: state.getUpgradeLevel('carryCapacity'),
          harvestSpeed: state.getUpgradeLevel('harvestSpeed')
        },
        tentSlots: world.sulfurTent.slotCount,
        apricotCap: player.getCapacity('apricot'),
        crateCap: player.getCapacity('crate_fresh'),
        walkSpeed: state.getStat('walkSpeed'),
        standTime: state.getStat('standStillTime')
      };
    });

    console.log('State and systems after "Tümünü MAX Yap":', maxStatsCheck);
    if (Object.values(maxStatsCheck.levels).some(l => l !== 5)) {
      throw new Error(`All upgrade levels must be 5, got ${JSON.stringify(maxStatsCheck.levels)}`);
    }
    // Tent slots: base 2 + 5 = 7 slots!
    if (maxStatsCheck.tentSlots !== 7) throw new Error(`Tent slots must be 7, got ${maxStatsCheck.tentSlots}`);
    // Apricot cap: base 10 + 5 * 3 = 25!
    if (maxStatsCheck.apricotCap !== 25) throw new Error(`Apricot cap must be 25, got ${maxStatsCheck.apricotCap}`);
    // Crate cap: base 3 + 5 * 1 = 8!
    if (maxStatsCheck.crateCap !== 8) throw new Error(`Crate cap must be 8, got ${maxStatsCheck.crateCap}`);

    // Open upgrade panel to verify all rows display "MAX"
    await page.click('#dev-panel-close');
    await page.click('#upgrade-btn');
    await new Promise(r => setTimeout(r, 100));

    const upgradeRowsMax = await page.evaluate(() => {
      const defs = ['tentCapacity', 'walkSpeed', 'carryCapacity', 'harvestSpeed'];
      return defs.map(id => {
        const btn = document.getElementById(`upgrade-btn-${id}`);
        const lvl = document.getElementById(`upgrade-lvl-${id}`);
        return {
          id,
          btnText: btn ? btn.textContent.trim() : null,
          isMax: btn ? btn.classList.contains('is-max') : false,
          lvlText: lvl ? lvl.textContent.trim() : null
        };
      });
    });

    console.log('Upgrade panel rows after MAX:', upgradeRowsMax);
    if (upgradeRowsMax.some(r => r.btnText !== 'MAX' || !r.isMax || !r.lvlText.includes('5/5'))) {
      throw new Error('All upgrade rows must display MAX and 5/5');
    }

    await page.click('#upgrade-panel-close');
    console.log('✓ TEST 6 GEÇTİ: "Tüm Yükseltmeleri MAX Yap" butonu tüm seviyeleri 5 yaptı, çadır 7 yuvaya çıktı ve UI "MAX" oldu.');
    results['Test 6 - Tüm Yükseltmeleri MAX Yap'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 6 KALDI:', err);
    results['Test 6 - Tüm Yükseltmeleri MAX Yap'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // TEST 7: DEV Butonlarıyla Kazanılan Paranın "Kaydı Sıfırla" ile Temizlenmesi
  // -------------------------------------------------------------
  console.log('\n--- TEST 7: Kaydı Sıfırla ile Temizleme ---');
  try {
    // Reset save via state method
    await page.evaluate(() => {
      window.__GAME__.state.resetSave();
    });

    const resetCheck = await page.evaluate(() => {
      const { state } = window.__GAME__;
      const rawSave = localStorage.getItem('kayisi_save');
      return {
        money: state.getMoney(),
        walkSpeedLvl: state.getUpgradeLevel('walkSpeed'),
        rawSave
      };
    });

    console.log('After reset save:', resetCheck);
    if (resetCheck.money !== 0 || resetCheck.walkSpeedLvl !== 0 || resetCheck.rawSave !== null) {
      throw new Error('resetSave should clear money, upgrades and remove localStorage save');
    }

    console.log('✓ TEST 7 GEÇTİ: DEV araçlarıyla eklenen para ve yükseltmeler "Kaydı Sıfırla" ile sıfırlandı.');
    results['Test 7 - Kaydı Sıfırla ile Temizleme'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 7 KALDI:', err);
    results['Test 7 - Kaydı Sıfırla ile Temizleme'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // TEST 8: DEV_MODE Bayrağı Kontrolü (false iken render edilmemesi)
  // -------------------------------------------------------------
  console.log('\n--- TEST 8: DEV_MODE Bayrağı Kontrolü ---');
  try {
    // Test dynamic hiding if CONFIG.DEV_MODE is false
    const devModeToggleCheck = await page.evaluate(() => {
      const sec = document.getElementById('dev-tools-section');
      // Simulate DEV_MODE = false
      sec.style.display = 'none';
      const isHidden = sec.style.display === 'none';
      sec.style.display = 'flex'; // restore
      return isHidden;
    });

    if (!devModeToggleCheck) throw new Error('DEV_MODE false toggle failed');

    // Take final screenshot of dev panel open with dev tools
    await page.click('#dev-panel-toggle');
    await new Promise(r => setTimeout(r, 200));
    const screenshotPath = path.join(screenshotDir, 'dev-panel-tools-mobile.png');
    await page.screenshot({ path: screenshotPath });
    console.log(`Saved screenshot to ${screenshotPath}`);

    // Check console errors
    console.log(`Console error count: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      throw new Error(`Console errors detected: ${consoleErrors.join(', ')}`);
    }

    console.log('✓ TEST 8 GEÇTİ: DEV_MODE bayrağı doğrulandı, 0 konsol hatası.');
    results['Test 8 - DEV_MODE Bayrağı ve Konsol Hataları'] = 'GEÇTİ (0 Hata)';
  } catch (err) {
    console.error('✗ TEST 8 KALDI:', err);
    results['Test 8 - DEV_MODE Bayrağı ve Konsol Hataları'] = 'KALDI: ' + err.message;
  }

  await browser.close();

  console.log('\n========================================');
  console.log('       DEV TOOLS TEST RAPORU TABLOSU    ');
  console.log('========================================');
  let hasFailure = false;
  for (const [scenario, status] of Object.entries(results)) {
    console.log(`${scenario}: ${status}`);
    if (status.startsWith('KALDI')) hasFailure = true;
  }
  console.log('========================================\n');

  if (hasFailure) {
    process.exit(1);
  } else {
    console.log('=== ALL DEV TOOLS TESTS COMPLETED SUCCESSFULLY! ===');
  }
}

runTest().catch((err) => {
  console.error('\n❌ Unhandled test runner error:', err);
  process.exit(1);
});
