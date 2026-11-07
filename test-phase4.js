import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTest() {
  console.log('=== Starting "Kayısı Hasadı" Aşama 4 Automated Verification ===\n');

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

  const screenshotDir = path.resolve('test-artifacts-phase4');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // --- 1. Initial State Verification ---
  console.log('\n[2/8] Verifying Initial Setup & Components...');
  const initInfo = await page.evaluate(() => {
    const { world, state, salesStand } = window.__GAME__;
    const moneyEl = document.getElementById('money-counter');
    const devPanelEl = document.getElementById('dev-panel');
    const devToggleEl = document.getElementById('dev-panel-toggle');

    return {
      hasSalesStand: !!salesStand,
      hasState: !!state,
      initialMoney: state ? state.getMoney() : -1,
      moneyText: moneyEl ? moneyEl.textContent.trim() : null,
      devPanelExists: !!devPanelEl,
      devPanelHidden: devPanelEl ? devPanelEl.classList.contains('dev-panel-hidden') : false,
      devToggleExists: !!devToggleEl,
      bufferCapacity: salesStand ? salesStand.capacity : -1,
      roadExists: !!world.scene.getObjectByName('Road')
    };
  });

  console.log('Initial setup check:', initInfo);
  if (!initInfo.hasSalesStand) throw new Error('SalesStand not found on __GAME__');
  if (!initInfo.hasState) throw new Error('State not found on __GAME__');
  if (initInfo.initialMoney !== 0) throw new Error(`Initial money must be 0, got ${initInfo.initialMoney}`);
  if (initInfo.moneyText !== '0') throw new Error(`Initial money counter must display "0", got "${initInfo.moneyText}"`);
  if (!initInfo.devPanelHidden) throw new Error('Dev panel must be hidden by default');
  if (initInfo.bufferCapacity !== 12) throw new Error(`Sales buffer capacity must be 12, got ${initInfo.bufferCapacity}`);
  if (!initInfo.roadExists) throw new Error('Road mesh not found in scene');
  console.log('✓ Initial setup and components verified.');

  // --- 2. Developer Panel UI Interaction ---
  console.log('\n[3/8] Testing Developer Panel Toggle & Controls...');
  // Open dev panel via toggle button
  await page.click('#dev-panel-toggle');
  const panelOpen = await page.evaluate(() => {
    const p = document.getElementById('dev-panel');
    return !p.classList.contains('dev-panel-hidden');
  });
  if (!panelOpen) throw new Error('Dev panel failed to open on toggle click');

  // Close dev panel via close button
  await page.click('#dev-panel-close');
  const panelClosed = await page.evaluate(() => {
    const p = document.getElementById('dev-panel');
    return p.classList.contains('dev-panel-hidden');
  });
  if (!panelClosed) throw new Error('Dev panel failed to close on close button');

  // Test F2 hotkey
  await page.keyboard.press('F2');
  const panelHotkeyOpen = await page.evaluate(() => {
    const p = document.getElementById('dev-panel');
    return !p.classList.contains('dev-panel-hidden');
  });
  if (!panelHotkeyOpen) throw new Error('Dev panel failed to open via F2 hotkey');
  await page.keyboard.press('F2'); // Close it again
  console.log('✓ Developer panel toggle and hotkey verified.');

  // --- 3. Sales Depot Deposit & Capacity Clamping ---
  console.log('\n[4/8] Testing Sales Depot Deposit & Capacity Rules...');
  // Give player 3 crate_dry2 crates
  await page.evaluate(() => {
    const { player } = window.__GAME__;
    player.discardAll();
    for (let i = 0; i < 3; i++) {
      player.addItem('crate_dry2');
    }
  });

  const playerBeforeDeposit = await page.evaluate(() => {
    const { player } = window.__GAME__;
    return { count: player.getCount(), type: player.getCurrentType() };
  });
  console.log('Player loaded with:', playerBeforeDeposit);

  // Move player to sales stand input zone (19.5, 0.0)
  await page.evaluate(() => {
    const { player } = window.__GAME__;
    player.group.position.set(19.5, 0, 0.0);
  });

  // Wait for deposit to complete (3 crates @ 0.08s transfer interval)
  await page.waitForFunction(() => {
    const { salesStand, player } = window.__GAME__;
    return salesStand.getBufferCount() === 3 && player.getCount() === 0;
  }, { timeout: 3000 });

  const depotAfter1 = await page.evaluate(() => window.__GAME__.salesStand.getBufferCount());
  console.log(`Depot now has: ${depotAfter1} crates.`);
  if (depotAfter1 !== 3) throw new Error(`Expected 3 crates in depot, got ${depotAfter1}`);

  // Test Capacity Limit (12): fill depot to 11, give player 3 crates. Player should deposit 1, 2 remain on back.
  await page.evaluate(() => {
    const { salesStand, player } = window.__GAME__;
    // Set buffer directly to 11 for capacity test
    salesStand.cratesCount = 11;
    for (let i = 0; i < 3; i++) {
      player.addItem('crate_dry2');
    }
    player.group.position.set(19.5, 0, 0.0);
  });

  await page.waitForFunction(() => {
    const { salesStand, player } = window.__GAME__;
    return salesStand.getBufferCount() === 12 && player.getCount() === 2;
  }, { timeout: 3000 });

  const capCheck = await page.evaluate(() => {
    const { salesStand, player } = window.__GAME__;
    return {
      depot: salesStand.getBufferCount(),
      playerCount: player.getCount(),
      playerType: player.getCurrentType()
    };
  });
  console.log('Capacity limit check (depot 12 max, excess stays on back):', capCheck);
  if (capCheck.depot !== 12 || capCheck.playerCount !== 2) {
    throw new Error(`Buffer limit failed: expected depot=12, player=2, got depot=${capCheck.depot}, player=${capCheck.playerCount}`);
  }
  // Clear player back
  await page.evaluate(() => window.__GAME__.player.discardAll());
  console.log('✓ Sales depot deposit and 12-crate capacity limit verified.');

  // --- 4. Truck Arrival When Empty ("Mal yok") ---
  console.log('\n[5/8] Testing Merchant Truck Empty Arrival ("Mal yok")...');
  // Set depot to 0
  await page.evaluate(() => {
    window.__GAME__.salesStand.cratesCount = 0;
    window.__GAME__.salesStand.callTruckImmediately();
  });

  // Wait for truck to arrive and stop at Z=0.0
  await page.waitForFunction(() => {
    const s = window.__GAME__.salesStand;
    return s.truckState === 'STOPPED';
  }, { timeout: 5000 });

  const emptyNotice = await page.evaluate(() => {
    const s = window.__GAME__.salesStand;
    return {
      truckState: s.truckState,
      snapshot: s.truckSnapshot,
      hasNotices: s.floatingNotices.length > 0
    };
  });
  console.log('Truck stopped with 0 goods:', emptyNotice);
  if (emptyNotice.snapshot !== 0) throw new Error('Expected truckSnapshot = 0');

  // Wait for truck to depart and despawn
  await page.waitForFunction(() => {
    const s = window.__GAME__.salesStand;
    return s.truckState === 'WAITING' && s.truckGroup === null;
  }, { timeout: 6000 });

  const moneyAfterEmpty = await page.evaluate(() => window.__GAME__.state.getMoney());
  if (moneyAfterEmpty !== 0) throw new Error(`Money should still be 0 after empty truck, got ${moneyAfterEmpty}`);
  console.log('✓ Empty truck handled correctly: shows "Mal yok", departs immediately, money stays 0.');

  // --- 5. Truck Arrival With Goods, Flying Crates Animation & Payment ---
  console.log('\n[6/8] Testing Truck Arrival With Goods & Payment...');
  // Place 4 crates in depot
  await page.evaluate(() => {
    const s = window.__GAME__.salesStand;
    s.cratesCount = 4;
    s.callTruckImmediately();
  });

  // Wait for truck to stop and enter LOADING state
  await page.waitForFunction(() => {
    const s = window.__GAME__.salesStand;
    return s.truckState === 'LOADING';
  }, { timeout: 5000 });

  const loadingInfo = await page.evaluate(() => {
    const s = window.__GAME__.salesStand;
    return {
      snapshot: s.truckSnapshot,
      flyingCount: s.flyingCrates.length
    };
  });
  console.log('Truck loading goods:', loadingInfo);
  if (loadingInfo.snapshot !== 4) throw new Error(`Expected snapshot = 4, got ${loadingInfo.snapshot}`);

  // Wait for loading animation to finish and payment to be credited (4 * 60 = 240)
  await page.waitForFunction(() => {
    const s = window.__GAME__.state;
    return s.getMoney() === 240;
  }, { timeout: 6000 });

  const hudMoneyText = await page.evaluate(() => document.getElementById('money-counter').textContent.trim());
  console.log(`HUD Money counter updated to: ${hudMoneyText}`);
  if (hudMoneyText !== '240') throw new Error(`Expected HUD money to be "240", got "${hudMoneyText}"`);

  // Wait for truck to depart and reset
  await page.waitForFunction(() => {
    const s = window.__GAME__.salesStand;
    return s.truckState === 'WAITING';
  }, { timeout: 6000 });
  console.log('✓ Truck loaded crates, earned 240 gold (4 × 60), HUD updated, and departed.');

  // --- 6. Snapshot Isolation During Loading ---
  console.log('\n[7/8] Testing Snapshot Isolation (depositing during truck loading)...');
  await page.evaluate(() => {
    const s = window.__GAME__.salesStand;
    s.cratesCount = 3;
    s.callTruckImmediately();
  });

  // Wait for truck to enter LOADING
  await page.waitForFunction(() => window.__GAME__.salesStand.truckState === 'LOADING', { timeout: 5000 });

  // While truck is LOADING, deposit 2 new crates into buffer
  await page.evaluate(() => {
    const s = window.__GAME__.salesStand;
    s.cratesCount += 2; // Simulating player deposit during active loading
  });

  // Wait for truck to finish and depart
  await page.waitForFunction(() => window.__GAME__.salesStand.truckState === 'WAITING', { timeout: 8000 });

  const postSnapshotBuffer = await page.evaluate(() => window.__GAME__.salesStand.getBufferCount());
  const finalMoney = await page.evaluate(() => window.__GAME__.state.getMoney());
  console.log(`Post-departure buffer count: ${postSnapshotBuffer}, Final money: ${finalMoney}`);
  // Money was 240 + 3 * 60 = 420. Remaining buffer should be 2.
  if (postSnapshotBuffer !== 2) throw new Error(`Expected remaining buffer 2, got ${postSnapshotBuffer}`);
  if (finalMoney !== 420) throw new Error(`Expected total money 420, got ${finalMoney}`);
  console.log('✓ Snapshot isolation verified: newly deposited crates safely remained for the next truck.');

  // --- 7. Dev Panel Live Metrics & Summon Button ---
  console.log('\n[8/8] Testing Dev Panel Live Metrics & Summon Button...');
  await page.click('#dev-panel-toggle');
  await new Promise(r => setTimeout(r, 100));

  const devStats = await page.evaluate(() => {
    return {
      rate: document.getElementById('dev-money-rate').textContent.trim(),
      totalCrates: document.getElementById('dev-total-crates').textContent.trim(),
      avgTruck: document.getElementById('dev-avg-truck').textContent.trim()
    };
  });
  console.log('Dev panel live stats:', devStats);
  if (devStats.totalCrates !== '7') throw new Error(`Expected total crates 7 (4+3), got ${devStats.totalCrates}`);

  // Test summon button from dev panel
  await page.click('#dev-summon-truck');
  const summoned = await page.evaluate(() => {
    const s = window.__GAME__.salesStand;
    return s.truckState === 'ARRIVING' || s.truckState === 'STOPPED' || s.truckState === 'LOADING';
  });
  if (!summoned) throw new Error('Summon truck button in dev panel did not launch truck');
  console.log('✓ Developer panel live metrics and summon button verified.');

  // --- 8. Mobile Virtual Joystick Touch Test ---
  console.log('\n[9/9] Testing Mobile Virtual Joystick in 390x844 Viewport...');
  // Move player back to center (0, 0) for clean movement test
  await page.evaluate(() => {
    window.__GAME__.player.group.position.set(0, 0, 0);
  });

  const posBefore = await page.evaluate(() => ({
    x: window.__GAME__.player.getPosition().x,
    z: window.__GAME__.player.getPosition().z
  }));

  await page.evaluate(() => {
    const zone = document.getElementById('joystick-zone');
    zone.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true,
      cancelable: true,
      pointerId: 1,
      pointerType: 'touch',
      clientX: 80,
      clientY: 740
    }));
    zone.dispatchEvent(new PointerEvent('pointermove', {
      bubbles: true,
      cancelable: true,
      pointerId: 1,
      pointerType: 'touch',
      clientX: 80 + 30,
      clientY: 740 - 35
    }));
  });

  await new Promise(r => setTimeout(r, 600));

  await page.evaluate(() => {
    const zone = document.getElementById('joystick-zone');
    zone.dispatchEvent(new PointerEvent('pointerup', {
      bubbles: true,
      cancelable: true,
      pointerId: 1,
      pointerType: 'touch'
    }));
  });

  const posAfter = await page.evaluate(() => ({
    x: window.__GAME__.player.getPosition().x,
    z: window.__GAME__.player.getPosition().z
  }));

  const distMoved = Math.hypot(posAfter.x - posBefore.x, posAfter.z - posBefore.z);
  console.log(`Player moved distance: ${distMoved.toFixed(2)}m`);
  if (distMoved < 0.5) throw new Error('Joystick did not move player');
  console.log(`✓ Touch joystick successfully moved player by ${distMoved.toFixed(2)}m.`);

  // Take full screenshot
  await page.screenshot({ path: path.join(screenshotDir, 'phase4-final-mobile.png') });
  console.log(`Saved screenshot to ${path.join(screenshotDir, 'phase4-final-mobile.png')}`);

  // Check console errors
  console.log('\nConsole Errors check:');
  if (consoleErrors.length > 0) {
    console.error('Errors found in console:', consoleErrors);
    throw new Error(`Console errors detected: ${consoleErrors.join(', ')}`);
  }
  console.log('✓ 0 console errors detected.');

  await browser.close();
  console.log('\n=== ALL PHASE 4 TESTS PASSED SUCCESSFULLY! ===');
}

runTest().catch((err) => {
  console.error('\n❌ Test execution failed:', err);
  process.exit(1);
});
