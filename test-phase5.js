import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTest() {
  console.log('=== Starting "Kayısı Hasadı" Aşama 5 Automated Verification ===\n');

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

  // Clear any existing localStorage before starting initial test
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  const screenshotDir = path.resolve('test-artifacts-phase5');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const results = {};

  // -------------------------------------------------------------
  // SENARYO 1: Yükseltme Tanımları ve Başlangıç Durumu
  // -------------------------------------------------------------
  console.log('\n--- TEST 1: Yükseltme Tanımları ve Başlangıç Durumu ---');
  try {
    const initCheck = await page.evaluate(() => {
      const { state } = window.__GAME__;
      const defs = ['tentCapacity', 'walkSpeed', 'carryCapacity', 'harvestSpeed'];
      const levels = defs.map(id => state.getUpgradeLevel(id));
      const costs = defs.map(id => state.getUpgradeCost(id));
      const btn = document.getElementById('upgrade-btn');

      return {
        levels,
        costs,
        hasUpgradeBtn: !!btn,
        btnText: btn ? btn.textContent.trim() : null,
        initialMoney: state.getMoney()
      };
    });

    console.log('Initial upgrades check:', initCheck);
    if (!initCheck.hasUpgradeBtn) throw new Error('Upgrade button not found in DOM');
    if (initCheck.levels.some(l => l !== 0)) throw new Error(`All levels must start at 0, got ${initCheck.levels}`);
    // Expected base costs: tent 400, walk 250, carry 300, harvest 200
    const expectedBaseCosts = [400, 250, 300, 200];
    for (let i = 0; i < 4; i++) {
      if (initCheck.costs[i] !== expectedBaseCosts[i]) {
        throw new Error(`Cost mismatch at index ${i}: expected ${expectedBaseCosts[i]}, got ${initCheck.costs[i]}`);
      }
    }

    console.log('✓ TEST 1 GEÇTİ: 4 yükseltme tanımı, baz fiyatları ve seviye 0 başlangıcı doğrulandı.');
    results['Senaryo 1 - Yükseltme Tanımları ve Başlangıç Durumu'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 1 KALDI:', err);
    results['Senaryo 1 - Yükseltme Tanımları ve Başlangıç Durumu'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 2: Yükseltme Paneli & Hareket Kilidi (Dünya Durmaz)
  // -------------------------------------------------------------
  console.log('\n--- TEST 2: Yükseltme Paneli & Hareket Kilidi ---');
  try {
    // 1. Open upgrade panel
    await page.click('#upgrade-btn');
    await new Promise(r => setTimeout(r, 100));

    const isOpen = await page.evaluate(() => window.__GAME__.ui.isUpgradePanelOpen());
    if (!isOpen) throw new Error('Upgrade panel failed to open');

    // 2. Check that player movement is locked while panel is open
    const posBefore = await page.evaluate(() => ({
      x: window.__GAME__.player.getPosition().x,
      z: window.__GAME__.player.getPosition().z
    }));

    // Trigger joystick input while panel is open
    await page.evaluate(() => {
      const zone = document.getElementById('joystick-zone');
      zone.dispatchEvent(new PointerEvent('pointerdown', {
        bubbles: true, cancelable: true, pointerId: 1, pointerType: 'touch', clientX: 80, clientY: 740
      }));
      zone.dispatchEvent(new PointerEvent('pointermove', {
        bubbles: true, cancelable: true, pointerId: 1, pointerType: 'touch', clientX: 120, clientY: 700
      }));
    });

    await new Promise(r => setTimeout(r, 400));

    await page.evaluate(() => {
      const zone = document.getElementById('joystick-zone');
      zone.dispatchEvent(new PointerEvent('pointerup', {
        bubbles: true, cancelable: true, pointerId: 1, pointerType: 'touch'
      }));
    });

    const posAfter = await page.evaluate(() => ({
      x: window.__GAME__.player.getPosition().x,
      z: window.__GAME__.player.getPosition().z
    }));

    const distMoved = Math.hypot(posAfter.x - posBefore.x, posAfter.z - posBefore.z);
    console.log(`Player movement during open panel: ${distMoved.toFixed(4)}m (must be 0)`);
    if (distMoved > 0.001) throw new Error(`Player moved ${distMoved}m while upgrade panel was open!`);

    // 3. Verify world timer still flows while panel is open (truckTimer decreases)
    const truckTimer1 = await page.evaluate(() => window.__GAME__.salesStand.truckTimer);
    await new Promise(r => setTimeout(r, 500));
    const truckTimer2 = await page.evaluate(() => window.__GAME__.salesStand.truckTimer);
    console.log(`Truck timer before: ${truckTimer1.toFixed(2)}, after: ${truckTimer2.toFixed(2)}`);
    if (truckTimer2 >= truckTimer1) throw new Error('Game world paused while upgrade panel was open; world must keep running!');

    // Close panel
    await page.click('#upgrade-panel-close');
    const isClosed = await page.evaluate(() => !window.__GAME__.ui.isUpgradePanelOpen());
    if (!isClosed) throw new Error('Upgrade panel failed to close');

    console.log('✓ TEST 2 GEÇTİ: Panel açılınca oyuncu hareketi kilitlendi, dünya sayaçları akmaya devam etti.');
    results['Senaryo 2 - Yükseltme Paneli & Hareket Kilidi'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 2 KALDI:', err);
    results['Senaryo 2 - Yükseltme Paneli & Hareket Kilidi'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 3: Yetersiz Bakiye ve Fiyat/Buton Durumu
  // -------------------------------------------------------------
  console.log('\n--- TEST 3: Yetersiz Bakiye ve Buton Pasifliği ---');
  try {
    await page.click('#upgrade-btn');
    await new Promise(r => setTimeout(r, 100));

    const unaffordableCheck = await page.evaluate(() => {
      const defs = ['tentCapacity', 'walkSpeed', 'carryCapacity', 'harvestSpeed'];
      return defs.map(id => {
        const btn = document.getElementById(`upgrade-btn-${id}`);
        return {
          id,
          disabled: btn ? btn.disabled : false,
          hasDisabledClass: btn ? btn.classList.contains('is-disabled') : false
        };
      });
    });

    console.log('Unaffordable buttons status:', unaffordableCheck);
    if (unaffordableCheck.some(b => !b.disabled || !b.hasDisabledClass)) {
      throw new Error('All buttons must be disabled and have is-disabled class when money is 0');
    }

    await page.click('#upgrade-panel-close');
    console.log('✓ TEST 3 GEÇTİ: Yetersiz bakiyede butonlar pasif ve kırmızı fiyat ile gösterildi.');
    results['Senaryo 3 - Yetersiz Bakiye ve Buton Pasifliği'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 3 KALDI:', err);
    results['Senaryo 3 - Yetersiz Bakiye ve Buton Pasifliği'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 4: Satın Alma, Para Düşümü ve Görsel Geri Bildirim
  // -------------------------------------------------------------
  console.log('\n--- TEST 4: Satın Alma, Para Düşümü ve Fiyat Güncellemesi ---');
  try {
    // Add 1000 gold
    await page.evaluate(() => {
      window.__GAME__.state.addMoney(1000);
    });

    await page.click('#upgrade-btn');
    await new Promise(r => setTimeout(r, 100));

    // Buy Walk Speed (cost 250)
    await page.click('#upgrade-btn-walkSpeed');
    await new Promise(r => setTimeout(r, 100));

    const postBuyState = await page.evaluate(() => {
      const { state } = window.__GAME__;
      const row = document.getElementById('upgrade-row-walkSpeed');
      const lvlText = document.getElementById('upgrade-lvl-walkSpeed').textContent.trim();
      const btnText = document.getElementById('upgrade-btn-walkSpeed').textContent.trim();

      return {
        remainingMoney: state.getMoney(),
        walkSpeedLevel: state.getUpgradeLevel('walkSpeed'),
        nextCost: state.getUpgradeCost('walkSpeed'),
        lvlText,
        btnText,
        hasFlashAnim: row ? row.classList.contains('upgrade-success-flash') : false
      };
    });

    console.log('State after buying Walk Speed level 1:', postBuyState);
    if (postBuyState.remainingMoney !== 750) throw new Error(`Expected 750 money, got ${postBuyState.remainingMoney}`);
    if (postBuyState.walkSpeedLevel !== 1) throw new Error(`Expected level 1, got ${postBuyState.walkSpeedLevel}`);
    // Next cost: round(250 * 1.7) = 425
    if (postBuyState.nextCost !== 425) throw new Error(`Expected next cost 425, got ${postBuyState.nextCost}`);
    if (!postBuyState.hasFlashAnim) throw new Error('Row did not receive upgrade-success-flash animation');

    await page.click('#upgrade-panel-close');
    console.log('✓ TEST 4 GEÇTİ: Satın alma başarıyla gerçekleşti, para düştü, seviye ve bir sonraki fiyat güncellendi, parlama efekti oluştu.');
    results['Senaryo 4 - Satın Alma, Para Düşümü ve Görsel Geri Bildirim'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 4 KALDI:', err);
    results['Senaryo 4 - Satın Alma, Para Düşümü ve Görsel Geri Bildirim'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 5: 4 Yükseltmenin Sistemlere Etkisi
  // -------------------------------------------------------------
  console.log('\n--- TEST 5: 4 Yükseltmenin Sistemlere Etkisi ---');
  try {
    // Current walkSpeed is level 1
    // Buy Tent Capacity (cost 400), Carry Capacity (cost 300) -> need more gold
    await page.evaluate(() => {
      const s = window.__GAME__.state;
      s.addMoney(2000); // Plenty of gold
      s.purchaseUpgrade('tentCapacity'); // level 1 (cost 400)
      s.purchaseUpgrade('carryCapacity'); // level 1 (cost 300)
      s.purchaseUpgrade('harvestSpeed'); // level 1 (cost 200)
    });

    const systemsEffect = await page.evaluate(() => {
      const { player, world, state } = window.__GAME__;
      return {
        // 1. Walk Speed
        statSpeed: state.getStat('walkSpeed'), // 5.0 * 1.12 = 5.6
        // 2. Carry Capacity
        apricotCap: player.getCapacity('apricot'), // 10 + 3 = 13
        crateCap: player.getCapacity('crate_fresh'), // 3 + 1 = 4
        // 3. Tent Capacity
        tentSlots: world.sulfurTent.slotCount, // 2 + 1 = 3
        tentBufferCap: world.sulfurTent.inputBufferCapacity, // 3 * 1 + 2 = 5
        // 4. Harvest Stand Still Time
        standTime: state.getStat('standStillTime') // 1.5 * 0.85 = 1.275
      };
    });

    console.log('Systems effect after all upgrades level 1:', systemsEffect);
    const expectedSpeed = 6.2 * 1.12; // CONFIG.PLAYER.SPEED (6.2) * (1 + 0.12)
    if (Math.abs(systemsEffect.statSpeed - expectedSpeed) > 0.01) {
      throw new Error(`Walk speed mismatch: expected ${expectedSpeed}, got ${systemsEffect.statSpeed}`);
    }
    if (systemsEffect.apricotCap !== 13 || systemsEffect.crateCap !== 4) {
      throw new Error(`Capacity mismatch: expected 13 apr / 4 crate, got ${systemsEffect.apricotCap} / ${systemsEffect.crateCap}`);
    }
    if (systemsEffect.tentSlots !== 3 || systemsEffect.tentBufferCap !== 5) {
      throw new Error(`Tent slots mismatch: expected 3 slots / 5 buffer, got ${systemsEffect.tentSlots} / ${systemsEffect.tentBufferCap}`);
    }
    if (Math.abs(systemsEffect.standTime - 1.275) > 0.01) {
      throw new Error(`Harvest stand time mismatch: expected 1.275, got ${systemsEffect.standTime}`);
    }

    console.log('✓ TEST 5 GEÇTİ: 4 yükseltmenin sistemlere etkisi (Hız +%12, Kapasite +3/+1, Çadır +1 slot, Silkeleme -%15) tam olarak doğrulandı.');
    results['Senaryo 5 - 4 Yükseltmenin Sistemlere Etkisi'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 5 KALDI:', err);
    results['Senaryo 5 - 4 Yükseltmenin Sistemlere Etkisi'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 6: Maksimum Seviye (Level 5) ve "MAX" Durumu
  // -------------------------------------------------------------
  console.log('\n--- TEST 6: Maksimum Seviye ve "MAX" Durumu ---');
  try {
    // Max out harvestSpeed to level 5
    await page.evaluate(() => {
      const s = window.__GAME__.state;
      s.addMoney(10000);
      while (s.getUpgradeLevel('harvestSpeed') < 5) {
        s.purchaseUpgrade('harvestSpeed');
      }
    });

    await page.click('#upgrade-btn');
    await new Promise(r => setTimeout(r, 100));

    const maxCheck = await page.evaluate(() => {
      const s = window.__GAME__.state;
      const btn = document.getElementById('upgrade-btn-harvestSpeed');
      const lvlText = document.getElementById('upgrade-lvl-harvestSpeed').textContent.trim();
      const buyAttempt = s.purchaseUpgrade('harvestSpeed'); // Should fail

      return {
        level: s.getUpgradeLevel('harvestSpeed'),
        isMaxed: s.isUpgradeMaxed('harvestSpeed'),
        cost: s.getUpgradeCost('harvestSpeed'),
        btnText: btn ? btn.textContent.trim() : null,
        btnDisabled: btn ? btn.disabled : false,
        btnIsMaxClass: btn ? btn.classList.contains('is-max') : false,
        lvlText,
        buyAttempt
      };
    });

    console.log('Max level check for harvestSpeed:', maxCheck);
    if (maxCheck.level !== 5 || !maxCheck.isMaxed) throw new Error('harvestSpeed should be level 5 and maxed');
    if (maxCheck.cost !== null) throw new Error(`Cost should be null when maxed, got ${maxCheck.cost}`);
    if (maxCheck.btnText !== 'MAX') throw new Error(`Button text should be "MAX", got "${maxCheck.btnText}"`);
    if (!maxCheck.btnDisabled || !maxCheck.btnIsMaxClass) throw new Error('Button must be disabled with is-max class');
    if (maxCheck.buyAttempt !== false) throw new Error('purchaseUpgrade must return false when maxed');

    await page.click('#upgrade-panel-close');
    console.log('✓ TEST 6 GEÇTİ: 5. seviyede buton "MAX" oldu, devre dışı kaldı ve daha fazla alım engellendi.');
    results['Senaryo 6 - Maksimum Seviye ve "MAX" Durumu'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 6 KALDI:', err);
    results['Senaryo 6 - Maksimum Seviye ve "MAX" Durumu'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 7: LocalStorage Otomatik Kayıt ve Yeniden Yükleme
  // -------------------------------------------------------------
  console.log('\n--- TEST 7: LocalStorage Otomatik Kayıt ve Yeniden Yükleme ---');
  try {
    const savedDataBefore = await page.evaluate(() => {
      const raw = localStorage.getItem('kayisi_save');
      return raw ? JSON.parse(raw) : null;
    });

    console.log('Saved data in localStorage before reload:', savedDataBefore);
    if (!savedDataBefore) throw new Error('No save data found in localStorage');
    if (savedDataBefore.version !== 1 && savedDataBefore.version !== 2) throw new Error(`Save version must be 1 or 2, got ${savedDataBefore.version}`);
    if (savedDataBefore.upgrades.harvestSpeed !== 5) throw new Error(`Expected harvestSpeed 5, got ${savedDataBefore.upgrades.harvestSpeed}`);

    const expectedMoney = savedDataBefore.money;

    // Reload page to test full state restoration
    console.log('Reloading page...');
    await page.reload({ waitUntil: 'networkidle0' });
    await page.waitForFunction(() => window.__GAME__ !== undefined);

    const restoredState = await page.evaluate(() => {
      const { state, player, world } = window.__GAME__;
      return {
        money: state.getMoney(),
        walkSpeedLvl: state.getUpgradeLevel('walkSpeed'),
        tentCapacityLvl: state.getUpgradeLevel('tentCapacity'),
        carryCapacityLvl: state.getUpgradeLevel('carryCapacity'),
        harvestSpeedLvl: state.getUpgradeLevel('harvestSpeed'),
        tentSlots: world.sulfurTent.slotCount,
        playerHolding: player.getCount(),
        stationBuffer: world.sulfurTent.inputBuffer
      };
    });

    console.log('Restored state after reload:', restoredState);
    if (restoredState.money !== expectedMoney) throw new Error(`Money mismatch: expected ${expectedMoney}, got ${restoredState.money}`);
    if (restoredState.harvestSpeedLvl !== 5) throw new Error(`Expected harvestSpeed level 5, got ${restoredState.harvestSpeedLvl}`);
    if (restoredState.tentSlots !== 3) throw new Error(`Expected tent to have 3 slots (level 1), got ${restoredState.tentSlots}`);
    if (restoredState.playerHolding !== 0) throw new Error('Player should start with empty hands on reload');
    if (restoredState.stationBuffer !== 0) throw new Error('Stations should start empty on reload');

    console.log('✓ TEST 7 GEÇTİ: LocalStorage kaydı başarıyla yüklendi; para ve seviyeler korundu, istasyonlar temiz başladı.');
    results['Senaryo 7 - LocalStorage Kayıt ve Yeniden Yükleme'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 7 KALDI:', err);
    results['Senaryo 7 - LocalStorage Kayıt ve Yeniden Yükleme'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 8: Bozuk/Geçersiz Kayıt Direnci (Crash Önleme)
  // -------------------------------------------------------------
  console.log('\n--- TEST 8: Bozuk/Geçersiz Kayıt Direnci ---');
  try {
    // Disable saving on the current instance so beforeunload doesn't overwrite test corrupt data
    await page.evaluate(() => {
      window.__GAME__.state._saveDisabled = true;
      localStorage.setItem('kayisi_save', JSON.stringify({
        version: 999, // Mismatched version
        money: "invalid_money",
        upgrades: { badKey: 99 }
      }));
    });

    // Reload
    console.log('Reloading with corrupted save...');
    await page.reload({ waitUntil: 'networkidle0' });
    await page.waitForFunction(() => window.__GAME__ !== undefined);

    const safeState = await page.evaluate(() => {
      const { state } = window.__GAME__;
      return {
        money: state.getMoney(),
        walkSpeedLvl: state.getUpgradeLevel('walkSpeed'),
        harvestSpeedLvl: state.getUpgradeLevel('harvestSpeed')
      };
    });

    console.log('State after corrupted save recovery:', safeState);
    if (safeState.money !== 0 || safeState.walkSpeedLvl !== 0 || safeState.harvestSpeedLvl !== 0) {
      throw new Error(`Corrupt save should have reset to 0, got money=${safeState.money}`);
    }

    console.log('✓ TEST 8 GEÇTİ: Bozuk/geçersiz kayıt çökme yaşanmadan sessizce sıfırlandı ve oyun sağlıklı başladı.');
    results['Senaryo 8 - Bozuk/Geçersiz Kayıt Direnci'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 8 KALDI:', err);
    results['Senaryo 8 - Bozuk/Geçersiz Kayıt Direnci'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 9: Geliştirici Paneli "Kaydı Sıfırla" Butonu
  // -------------------------------------------------------------
  console.log('\n--- TEST 9: Geliştirici Paneli "Kaydı Sıfırla" ---');
  try {
    // Add some money and upgrades first
    await page.evaluate(() => {
      const s = window.__GAME__.state;
      s.addMoney(500);
      s.purchaseUpgrade('walkSpeed');
    });

    // Verify localStorage has save
    const hasSaveBefore = await page.evaluate(() => !!localStorage.getItem('kayisi_save'));
    if (!hasSaveBefore) throw new Error('Save not found in storage before reset');

    // Call resetSave directly (as confirm() triggers modal in browser)
    await page.evaluate(() => {
      window.__GAME__.state.resetSave();
    });

    const hasSaveAfter = await page.evaluate(() => !!localStorage.getItem('kayisi_save'));
    const stateAfterReset = await page.evaluate(() => ({
      money: window.__GAME__.state.getMoney(),
      walkLvl: window.__GAME__.state.getUpgradeLevel('walkSpeed')
    }));

    console.log('State after reset save:', stateAfterReset, 'Storage exists:', hasSaveAfter);
    if (hasSaveAfter) throw new Error('Save still exists in localStorage after resetSave');
    if (stateAfterReset.money !== 0 || stateAfterReset.walkLvl !== 0) {
      throw new Error(`Expected money=0, walkLvl=0, got money=${stateAfterReset.money}, walkLvl=${stateAfterReset.walkLvl}`);
    }

    console.log('✓ TEST 9 GEÇTİ: "Kaydı Sıfırla" depoyu ve tüm yükseltmeleri başarıyla sıfırladı.');
    results['Senaryo 9 - Geliştirici Paneli "Kaydı Sıfırla"'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 9 KALDI:', err);
    results['Senaryo 9 - Geliştirici Paneli "Kaydı Sıfırla"'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 10: Mobil 390x844 Görünümü, Ekran Düzeni ve Konsol Hataları
  // -------------------------------------------------------------
  console.log('\n--- TEST 10: Mobil 390x844 Düzen ve Konsol Hataları ---');
  try {
    // Open upgrade panel and capture screenshot
    await page.click('#upgrade-btn');
    await new Promise(r => setTimeout(r, 200));

    const screenshotPath = path.join(screenshotDir, 'phase5-mobile-upgrade-panel.png');
    await page.screenshot({ path: screenshotPath });
    console.log(`Saved screenshot to ${screenshotPath}`);

    // Check console errors
    console.log(`Console error count: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      throw new Error(`Console errors detected: ${consoleErrors.join(', ')}`);
    }

    console.log('✓ TEST 10 GEÇTİ: 390x844 mobil görünümünde arayüz başarıyla işlendi, 0 konsol hatası.');
    results['Senaryo 10 - Mobil Görünüm ve Konsol Hataları'] = 'GEÇTİ (0 Hata)';
  } catch (err) {
    console.error('✗ TEST 10 KALDI:', err);
    results['Senaryo 10 - Mobil Görünüm ve Konsol Hataları'] = 'KALDI: ' + err.message;
  }

  await browser.close();

  console.log('\n========================================');
  console.log('           TEST RAPORU TABLOSU          ');
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
    console.log('=== ALL PHASE 5 TESTS COMPLETED SUCCESSFULLY! ===');
  }
}

runTest().catch((err) => {
  console.error('\n❌ Unhandled test runner error:', err);
  process.exit(1);
});
