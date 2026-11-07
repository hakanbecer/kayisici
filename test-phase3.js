import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTest() {
  console.log('=== Starting "Kayısı Hasadı" Aşama 3 Automated Verification ===\n');

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

  console.log('[1/8] Loading game at http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  const screenshotDir = path.resolve('test-artifacts-phase3');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // 1. Initial State Verification
  const initialState = await page.evaluate(() => {
    const { world } = window.__GAME__;
    return {
      treeCount: world.trees.length,
      hasCrateStation: !!world.crateStation,
      hasRack1: !!world.dryingRack1,
      hasTent: !!world.sulfurTent,
      hasRack2: !!world.dryingRack2,
      tentSmokePoolSize: world.sulfurTent.smokePool.length,
      floatingBadgesCount: [world.crateStation, world.dryingRack1, world.sulfurTent, world.dryingRack2]
        .filter(s => !!s.floatingBadge).length
    };
  });

  console.log('Initial Setup:', initialState);
  if (initialState.treeCount !== 4) throw new Error('Expected 4 trees');
  if (!initialState.hasCrateStation) throw new Error('Missing crateStation');
  if (!initialState.hasRack1) throw new Error('Missing dryingRack1');
  if (!initialState.hasTent) throw new Error('Missing sulfurTent');
  if (!initialState.hasRack2) throw new Error('Missing dryingRack2');
  if (initialState.tentSmokePoolSize !== 10) throw new Error(`Expected 10 smoke pool particles, got ${initialState.tentSmokePoolSize}`);
  if (initialState.floatingBadgesCount !== 4) throw new Error(`Expected 4 floating guide badges, got ${initialState.floatingBadgesCount}`);

  await page.screenshot({ path: path.join(screenshotDir, '1_initial_linear_world.png') });
  console.log('✓ All 4 stations, floating badges, and smoke pool verified.');

  // 2. Step 1: Harvest 10 Apricots
  console.log('\n[2/8] Step 1: Harvesting 10 apricots...');
  await page.evaluate(() => {
    const { player } = window.__GAME__;
    for (let i = 0; i < 10; i++) player.addApricot();
  });
  await new Promise(r => setTimeout(r, 100));

  const harvestData = await page.evaluate(() => ({
    count: window.__GAME__.player.getCount(),
    type: window.__GAME__.player.getCurrentType(),
    counter: document.getElementById('apricot-counter').textContent.trim()
  }));
  console.log('Player after harvest:', harvestData);
  if (harvestData.count !== 10 || harvestData.type !== 'apricot') throw new Error('Harvest failed');

  // 3. Step 2: Crate Station Packaging
  console.log('\n[3/8] Step 2: Depositing 10 apricots into Crate Station (X: -11.2)...');
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(-11.2, 0, 0);
  });

  await page.waitForFunction(() => {
    const { player, world } = window.__GAME__;
    return player.getCount() === 0 && world.crateStation.slots[0].state === 'PROCESSING';
  }, { timeout: 3500 });

  console.log('Packaging started, waiting for completion (2.0s)...');
  await page.waitForFunction(() => {
    return window.__GAME__.world.crateStation.slots[0].state === 'READY';
  }, { timeout: 3500 });

  // Collect fresh crate from output (-6.8)
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(-6.8, 0, 0);
  });
  await page.waitForFunction(() => {
    return window.__GAME__.player.getCurrentType() === 'crate_fresh';
  }, { timeout: 2500 });

  console.log('✓ Fresh crate collected (crate_fresh).');
  await page.screenshot({ path: path.join(screenshotDir, '2_fresh_crate_collected.png') });

  // 4. Step 3: Test Wrong Crate Protection ("Bu kasa buraya uymaz")
  console.log('\n[4/8] Step 3: Testing wrong crate protection: taking fresh crate to Sulfur Tent input (X: 5.3)...');
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(5.3, 0, 0);
  });

  await new Promise(r => setTimeout(r, 350));

  const wrongCrateCheck = await page.evaluate(() => {
    const toast = document.getElementById('warning-toast');
    const tentSlot = window.__GAME__.world.sulfurTent.slots[0];
    const player = window.__GAME__.player;
    return {
      playerHolding: player.getCurrentType(),
      playerCount: player.getCount(),
      tentSlotState: tentSlot.state,
      isToastVisible: !toast.classList.contains('toast-hidden'),
      toastText: toast.textContent.trim()
    };
  });
  console.log('Wrong crate protection result:', wrongCrateCheck);
  if (wrongCrateCheck.playerCount !== 1) throw new Error('Player crate should not be deposited');
  if (wrongCrateCheck.tentSlotState !== 'EMPTY') throw new Error('Tent slot should remain empty');
  if (!wrongCrateCheck.isToastVisible) throw new Error('Warning toast should be visible');
  if (wrongCrateCheck.toastText !== 'Bu kasa buraya uymaz') throw new Error(`Expected "Bu kasa buraya uymaz", got "${wrongCrateCheck.toastText}"`);

  await page.screenshot({ path: path.join(screenshotDir, '3_warning_bu_kasa_buraya_uymaz.png') });
  console.log('✓ "Bu kasa buraya uymaz" verified.');

  // 5. Step 4: First Sun Drying Rack (crate_fresh -> crate_dry1)
  console.log('\n[5/8] Step 4: Depositing fresh crate into 1st Drying Rack (X: -3.2)...');
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(-3.2, 0, 0);
  });

  await page.waitForFunction(() => {
    const { player, world } = window.__GAME__;
    return player.getCount() === 0 && world.dryingRack1.slots[0].state === 'PROCESSING';
  }, { timeout: 3000 });

  // Fast forward drying to 19.5s to test 20.0s completion
  await page.evaluate(() => {
    window.__GAME__.world.dryingRack1.slots[0].progress = 19.5;
  });

  await page.waitForFunction(() => {
    return window.__GAME__.world.dryingRack1.slots[0].state === 'READY';
  }, { timeout: 3000 });

  // Collect dry1 crate from output (1.2)
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(1.2, 0, 0);
  });

  await page.waitForFunction(() => {
    return window.__GAME__.player.getCurrentType() === 'crate_dry1';
  }, { timeout: 2500 });

  console.log('✓ 1st dry crate collected (crate_dry1).');
  await page.screenshot({ path: path.join(screenshotDir, '4_dry1_crate_collected.png') });

  // 6. Step 5: Sulfur Tent (crate_dry1 -> crate_sulfur) & Smoke Test
  console.log('\n[6/8] Step 5: Depositing dry1 crate into Sulfur Tent (X: 5.3)...');
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(5.3, 0, 0);
  });

  await page.waitForFunction(() => {
    const { player, world } = window.__GAME__;
    return player.getCount() === 0 && world.sulfurTent.slots[0].state === 'PROCESSING';
  }, { timeout: 3000 });

  // Wait 0.5s for smoke particles to emit
  await new Promise(r => setTimeout(r, 600));

  const smokeCheck = await page.evaluate(() => {
    const tent = window.__GAME__.world.sulfurTent;
    const activeSmokeCount = tent.smokePool.filter(p => p.userData.active && p.visible).length;
    return {
      tentState: tent.slots[0].state,
      activeSmokeCount,
      poolTotal: tent.smokePool.length
    };
  });
  console.log('Sulfur Tent Smoke Status:', smokeCheck);
  if (smokeCheck.activeSmokeCount === 0) throw new Error('Smoke particles should be actively rising from tent');

  await page.screenshot({ path: path.join(screenshotDir, '5_sulfur_tent_smoking.png') });
  console.log('✓ Sulfur tent processing & smoke emission from pool verified.');

  // Fast forward tent processing to 24.5s to test 25.0s completion
  await page.evaluate(() => {
    window.__GAME__.world.sulfurTent.slots[0].progress = 24.5;
  });

  await page.waitForFunction(() => {
    return window.__GAME__.world.sulfurTent.slots[0].state === 'READY';
  }, { timeout: 3000 });

  // Collect sulfur crate from output (9.7)
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(9.7, 0, 0);
  });

  await page.waitForFunction(() => {
    return window.__GAME__.player.getCurrentType() === 'crate_sulfur';
  }, { timeout: 2500 });

  const playerWithSulfur = await page.evaluate(() => ({
    type: window.__GAME__.player.getCurrentType(),
    label: document.getElementById('hud-item-label').textContent.trim()
  }));
  console.log('Player with Sulfur Crate:', playerWithSulfur);
  if (playerWithSulfur.type !== 'crate_sulfur') throw new Error('Expected crate_sulfur');
  if (playerWithSulfur.label !== 'KÜKÜRT KASA') throw new Error(`Expected KÜKÜRT KASA, got ${playerWithSulfur.label}`);

  await page.screenshot({ path: path.join(screenshotDir, '6_sulfur_crate_collected.png') });
  console.log('✓ Sulfur crate collected (crate_sulfur).');

  // 7. Step 6: Second Sun Drying Rack (crate_sulfur -> crate_dry2)
  console.log('\n[7/8] Step 6: Depositing sulfur crate into 2nd Drying Rack (X: 13.8)...');
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(13.8, 0, 0);
  });

  await page.waitForFunction(() => {
    const { player, world } = window.__GAME__;
    return player.getCount() === 0 && world.dryingRack2.slots[0].state === 'PROCESSING';
  }, { timeout: 3000 });

  // Fast forward drying to 19.5s
  await page.evaluate(() => {
    window.__GAME__.world.dryingRack2.slots[0].progress = 19.5;
  });

  await page.waitForFunction(() => {
    return window.__GAME__.world.dryingRack2.slots[0].state === 'READY';
  }, { timeout: 3000 });

  // Collect dry2 crate from output (18.2)
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(18.2, 0, 0);
  });

  await page.waitForFunction(() => {
    return window.__GAME__.player.getCurrentType() === 'crate_dry2';
  }, { timeout: 2500 });

  const finalCrate = await page.evaluate(() => ({
    type: window.__GAME__.player.getCurrentType(),
    count: window.__GAME__.player.getCount(),
    label: document.getElementById('hud-item-label').textContent.trim(),
    counter: document.getElementById('apricot-counter').textContent.trim()
  }));
  console.log('Final Crate on Player:', finalCrate);
  if (finalCrate.type !== 'crate_dry2') throw new Error('Expected crate_dry2');
  if (finalCrate.label !== '2. KURU KASA') throw new Error(`Expected 2. KURU KASA, got ${finalCrate.label}`);

  await page.screenshot({ path: path.join(screenshotDir, '7_final_dry2_crate_collected.png') });
  console.log('✓ Final dried crate (crate_dry2) collected on back.');

  // 8. Step 7: Output Clogging Limit Test (outputLimit)
  console.log('\n[8/8] Step 7: Testing outputLimit clogging behavior on Sulfur Tent (outputLimit: 2)...');
  await page.evaluate(() => {
    const tent = window.__GAME__.world.sulfurTent;
    while (window.__GAME__.player.getCount() > 0) window.__GAME__.player.removeItem();
    // Fill both ready slots up to outputLimit: 2
    tent.slots[0].state = 'READY';
    tent.slots[0].progress = 25.0;
    tent.slots[1].state = 'READY';
    tent.slots[1].progress = 25.0;
  });

  const clogCheck = await page.evaluate(() => {
    const tent = window.__GAME__.world.sulfurTent;
    const readyCount = tent.slots.filter(s => s.state === 'READY').length;
    return {
      readyCount,
      outputLimit: tent.outputLimit,
      isClogged: readyCount >= tent.outputLimit
    };
  });
  console.log('Output Clogging Check:', clogCheck);
  if (!clogCheck.isClogged) throw new Error('Station should be clogged at outputLimit');

  // Collect from tent output (9.7) to verify unclogging
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(9.7, 0, 0);
  });

  await page.waitForFunction(() => {
    const tent = window.__GAME__.world.sulfurTent;
    return tent.slots.some(s => s.state === 'EMPTY');
  }, { timeout: 3000 });

  const unclogCheck = await page.evaluate(() => {
    const tent = window.__GAME__.world.sulfurTent;
    const readyCount = tent.slots.filter(s => s.state === 'READY').length;
    return {
      readyCount,
      isClogged: readyCount >= tent.outputLimit
    };
  });
  console.log('Unclogging after collection:', unclogCheck);
  if (unclogCheck.isClogged) throw new Error('Station should be unclogged after player collects output');
  console.log('✓ Output clogging and resume behavior verified.');

  // Verify zero console errors
  console.log(`\nBrowser console errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
    throw new Error('Console errors encountered');
  }

  await browser.close();
  console.log('\n=== ALL PHASE 3 VERIFICATIONS PASSED SUCCESSFULLY! ===');
}

runTest().catch((err) => {
  console.error('\n❌ Phase 3 Test Failed:', err);
  process.exit(1);
});
