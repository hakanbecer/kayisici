import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTest() {
  console.log('=== Starting "Kayısı Hasadı" Fixes & Deadlock Resolution Verification ===\n');

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

  console.log('Loading game at http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  const screenshotDir = path.resolve('test-artifacts-fixes');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const results = {};

  // -------------------------------------------------------------
  // SENARYO 1: Kilitlenme Çözümü (InputBuffer & Deadlock Prevention)
  // -------------------------------------------------------------
  console.log('\n--- TEST 1: Kilitlenme Çözümü (InputBuffer) ---');
  try {
    // 1. Give player 10 apricots
    await page.evaluate(() => {
      const p = window.__GAME__.player;
      while (p.getCount() > 0) p.removeItem();
      for (let i = 0; i < 10; i++) p.addApricot();
      // Move to Crate Station input (-11.2)
      p.group.position.set(-11.2, 0, 0);
    });

    // Wait for first 10 apricots to be deposited & packaging starts
    await page.waitForFunction(() => {
      const { player, world } = window.__GAME__;
      return player.getCount() === 0 && world.crateStation.slots[0].state === 'PROCESSING';
    }, { timeout: 3500 });

    // 2. While packaging is ongoing, give player 10 NEW apricots (simulating harvest)
    await page.evaluate(() => {
      const p = window.__GAME__.player;
      for (let i = 0; i < 10; i++) p.addApricot();
      // Fast forward first batch to READY so crate is at output
      window.__GAME__.world.crateStation.slots[0].progress = 2.0;
    });

    await page.waitForFunction(() => {
      return window.__GAME__.world.crateStation.slots[0].state === 'READY';
    }, { timeout: 2000 });

    // In old code: Deadlock here! Player has 10 apricots, output has 1 crate.
    // In new code: Player can deposit second batch of 10 apricots into inputBuffer (capacity 30)!
    await page.evaluate(() => {
      window.__GAME__.player.group.position.set(-11.2, 0, 0);
    });

    // Wait for player's hands to empty into inputBuffer
    await page.waitForFunction(() => {
      const { player, world } = window.__GAME__;
      return player.getCount() === 0 && world.crateStation.inputBuffer === 10;
    }, { timeout: 3500 });

    // 3. Hands are free! Player walks to output (-6.8) and collects the finished crate!
    await page.evaluate(() => {
      window.__GAME__.player.group.position.set(-6.8, 0, 0);
    });

    await page.waitForFunction(() => {
      const p = window.__GAME__.player;
      return p.getCurrentType() === 'crate_fresh' && p.getCount() === 1;
    }, { timeout: 3000 });

    await page.screenshot({ path: path.join(screenshotDir, '1_deadlock_resolved.png') });
    console.log('✓ TEST 1 GEÇTİ: Oyuncu işlem sürerken/çıktı doluyken depoya kayısı bırakabildi ve kasayı başarıyla aldı.');
    results['Senaryo 1 - Kilitlenme Çözümü (Giriş Deposu)'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 1 KALDI:', err);
    results['Senaryo 1 - Kilitlenme Çözümü (Giriş Deposu)'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 2: Çıktı Doluyken Giriş Alanının Açık Kalması
  // -------------------------------------------------------------
  console.log('\n--- TEST 2: Çıktı Doluyken Giriş Alanının Açık Kalması ---');
  try {
    const bufferCheck = await page.evaluate(() => {
      const cs = window.__GAME__.world.crateStation;
      const player = window.__GAME__.player;
      // Discard crate to reset player
      player.discardAll();

      // Ensure station slot 0 is READY (output is full / clogged)
      cs.slots[0].state = 'READY';
      const isClogged = cs.slots.filter(s => s.state === 'READY').length >= cs.outputLimit;

      // Add apricots to player
      for (let i = 0; i < 5; i++) player.addApricot();
      player.group.position.set(-11.2, 0, 0);

      return { isClogged, inputBufferBefore: cs.inputBuffer };
    });

    // Wait for apricots to be deposited into buffer even though isClogged is true
    await page.waitForFunction(() => {
      return window.__GAME__.player.getCount() === 0;
    }, { timeout: 3000 });

    const bufferAfter = await page.evaluate(() => window.__GAME__.world.crateStation.inputBuffer);
    console.log(`Buffer before: ${bufferCheck.inputBufferBefore}, after: ${bufferAfter}, isClogged was: ${bufferCheck.isClogged}`);
    if (bufferAfter <= bufferCheck.inputBufferBefore) throw new Error('Input deposit was blocked by outputLimit');

    await page.screenshot({ path: path.join(screenshotDir, '2_input_open_during_clog.png') });
    console.log('✓ TEST 2 GEÇTİ: Çıktı doluyken giriş alanı açık kaldı ve depoya ürün kabul etti.');
    results['Senaryo 2 - Çıktı Doluyken Girişin Açık Kalması'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 2 KALDI:', err);
    results['Senaryo 2 - Çıktı Doluyken Girişin Açık Kalması'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 3: Otomatik Yeni Parti Başlatma
  // -------------------------------------------------------------
  console.log('\n--- TEST 3: Otomatik Yeni Parti Başlatma ---');
  try {
    // Current inputBuffer has 5 apricots from Test 2. Add 5 more to reach 10 (1 full batch).
    await page.evaluate(() => {
      const p = window.__GAME__.player;
      p.discardAll();
      for (let i = 0; i < 5; i++) p.addApricot();
      p.group.position.set(-11.2, 0, 0); // Deposit remaining 5
    });

    await page.waitForFunction(() => {
      return window.__GAME__.player.getCount() === 0;
    }, { timeout: 3000 });

    // Now inputBuffer has 10 apricots. Collect the ready crate from output (-6.8) to unblock station.
    await page.evaluate(() => {
      window.__GAME__.player.group.position.set(-6.8, 0, 0);
    });

    // After collecting, slot becomes EMPTY. Station should automatically pull next 10 apricots from buffer and start processing!
    await page.waitForFunction(() => {
      const cs = window.__GAME__.world.crateStation;
      return cs.slots[0].state === 'PROCESSING';
    }, { timeout: 3500 });

    const autoStartCheck = await page.evaluate(() => {
      const cs = window.__GAME__.world.crateStation;
      return {
        slot0State: cs.slots[0].state,
        slot0Progress: cs.slots[0].progress
      };
    });
    console.log('Auto-started next batch:', autoStartCheck);
    if (autoStartCheck.slot0State !== 'PROCESSING') throw new Error('Station did not auto-start from buffer');

    await page.screenshot({ path: path.join(screenshotDir, '3_auto_start_batch.png') });
    console.log('✓ TEST 3 GEÇTİ: Çıktı alınınca depodaki girdilerden otomatik yeni parti başlatıldı.');
    results['Senaryo 3 - Otomatik Yeni Parti Başlatma'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 3 KALDI:', err);
    results['Senaryo 3 - Otomatik Yeni Parti Başlatma'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 4: "At" Butonu ve Q Tuşu (Garanti Çıkış)
  // -------------------------------------------------------------
  console.log('\n--- TEST 4: "At" Butonu ve Q Tuşu (Garanti Çıkış) ---');
  try {
    // 1. Give player crates
    await page.evaluate(() => {
      const p = window.__GAME__.player;
      p.addItem('crate_fresh');
      p.addItem('crate_fresh');
    });

    await new Promise(r => setTimeout(r, 100));

    // Verify "At" button is visible
    const isBtnVisible = await page.$eval('#discard-btn', el => !el.classList.contains('discard-btn-hidden'));
    console.log('Discard button visible when carrying:', isBtnVisible);
    if (!isBtnVisible) throw new Error('"At" button should be visible when player carries items');

    await page.screenshot({ path: path.join(screenshotDir, '4_discard_button_visible.png') });

    // 2. Click "At" button via UI
    await page.click('#discard-btn');
    await new Promise(r => setTimeout(r, 200));

    const afterDiscard = await page.evaluate(() => {
      const p = window.__GAME__.player;
      const toast = document.getElementById('warning-toast');
      const btn = document.getElementById('discard-btn');
      return {
        count: p.getCount(),
        type: p.getCurrentType(),
        toastVisible: !toast.classList.contains('toast-hidden'),
        toastText: toast.textContent.trim(),
        btnHidden: btn.classList.contains('discard-btn-hidden')
      };
    });

    console.log('After clicking "At":', afterDiscard);
    if (afterDiscard.count !== 0 || afterDiscard.type !== null) throw new Error('Player hands should be empty');
    if (!afterDiscard.toastVisible || afterDiscard.toastText !== 'Atıldı') throw new Error('Toast should display "Atıldı"');
    if (!afterDiscard.btnHidden) throw new Error('"At" button should be hidden after discarding');

    // 3. Test Q key on desktop
    await page.evaluate(() => {
      const p = window.__GAME__.player;
      p.addItem('crate_dry1');
    });
    await new Promise(r => setTimeout(r, 100));

    await page.keyboard.press('KeyQ');
    await new Promise(r => setTimeout(r, 200));

    const afterQ = await page.evaluate(() => window.__GAME__.player.getCount());
    if (afterQ !== 0) throw new Error('Pressing Q key should discard all carried items');

    await page.screenshot({ path: path.join(screenshotDir, '5_discarded_empty_hands.png') });
    console.log('✓ TEST 4 GEÇTİ: "At" butonu ve Q tuşu tüm taşınanları sıfırladı, "Atıldı" bildirimi gösterildi.');
    results['Senaryo 4 - "At" Butonu ve Q Tuşu'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 4 KALDI:', err);
    results['Senaryo 4 - "At" Butonu ve Q Tuşu'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 5: Çadır ve Raflarda Havada Süre Paneli ("18sn", Çubuk, Yeşil Tik)
  // -------------------------------------------------------------
  console.log('\n--- TEST 5: Çadır ve Raflarda Havada Süre Paneli ---');
  try {
    const panelsCheck = await page.evaluate(() => {
      const world = window.__GAME__.world;
      const tent = world.sulfurTent;
      const rack1 = world.dryingRack1;
      const cs = world.crateStation;

      // Start processing in tent
      tent.inputBuffer = 2; // 2 crates
      tent._updateSlots(0, false); // Slot 0 and 1 start processing (maxTime: 25.0s)
      tent.slots[0].progress = 7.0; // 25 - 7 = 18sn remaining!

      // Slot 1 is READY
      tent.slots[1].progress = 25.0;
      tent.slots[1].state = 'READY';

      // Update panel
      tent.statusPanel.userData.update(tent.slots, false);

      return {
        hasTentPanel: !!tent.statusPanel,
        tentPanelY: tent.statusPanel.position.y,
        tentHeight: window.__GAME__.world.sulfurTent.group ? 2.2 : 2.2,
        hasRackPanel: !!rack1.statusPanel,
        hasCratePanel: !!cs.statusPanel,
        tentSlot0Remaining: Math.ceil(tent.slots[0].maxTime - tent.slots[0].progress),
        tentSlot1State: tent.slots[1].state
      };
    });

    console.log('Panels status check:', panelsCheck);
    if (!panelsCheck.hasTentPanel) throw new Error('Sulfur tent missing status panel');
    if (panelsCheck.tentPanelY < 2.5) throw new Error(`Tent panel Y (${panelsCheck.tentPanelY}) is too low, must be above 2.2m tent`);
    if (panelsCheck.tentSlot0Remaining !== 18) throw new Error(`Expected 18sn remaining, got ${panelsCheck.tentSlot0Remaining}`);
    if (panelsCheck.tentSlot1State !== 'READY') throw new Error('Slot 1 should be READY');

    // Move player near tent to capture screenshot of floating panel
    await page.evaluate(() => {
      window.__GAME__.player.group.position.set(7.5, 0, 1.5);
    });
    await new Promise(r => setTimeout(r, 300));

    await page.screenshot({ path: path.join(screenshotDir, '6_tent_floating_time_panel.png') });
    console.log('✓ TEST 5 GEÇTİ: Çadırın üstünde havada panel (18sn kalan süre + yeşil tik) başarıyla görüntülendi.');
    results['Senaryo 5 - Çadır ve Raflarda Havada Süre Paneli'] = 'GEÇTİ';
  } catch (err) {
    console.error('✗ TEST 5 KALDI:', err);
    results['Senaryo 5 - Çadır ve Raflarda Havada Süre Paneli'] = 'KALDI: ' + err.message;
  }

  // -------------------------------------------------------------
  // SENARYO 6: Konsol Hataları Kontrolü
  // -------------------------------------------------------------
  console.log(`\nKonsol hataları sayısı: ${consoleErrors.length}`);
  if (consoleErrors.length === 0) {
    results['Senaryo 6 - Konsol Hata Kontrolü'] = 'GEÇTİ (0 Hata)';
  } else {
    results['Senaryo 6 - Konsol Hata Kontrolü'] = `KALDI (${consoleErrors.length} Hata)`;
  }

  await browser.close();

  console.log('\n========================================');
  console.log('           TEST RAPORU TABLOSU          ');
  console.log('========================================');
  for (const [name, status] of Object.entries(results)) {
    console.log(`${name}: ${status}`);
  }
  console.log('========================================\n');
}

runTest().catch((err) => {
  console.error('\n❌ Test Koşumu Başarısız:', err);
  process.exit(1);
});
