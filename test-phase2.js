import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTest() {
  console.log('=== Starting "Kayısı Hasadı" Aşama 2 Automated Verification ===\n');

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
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  console.log('[1/7] Loading game at http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  await page.waitForFunction(() => window.__GAME__ !== undefined);

  const screenshotDir = path.resolve('test-artifacts-phase2');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // 1. Initial State Verification
  const initialState = await page.evaluate(() => {
    const { player, world } = window.__GAME__;
    return {
      label: document.getElementById('hud-item-label').textContent.trim(),
      icon: document.getElementById('hud-item-icon').textContent.trim(),
      counter: document.getElementById('apricot-counter').textContent.trim(),
      crateStationExists: !!world.crateStation,
      dryingRackExists: !!world.dryingRack,
      dryingRackSlotCount: world.dryingRack.slots.length,
      crateStationSlotCount: world.crateStation.slots.length
    };
  });

  console.log('Initial State:', initialState);
  if (initialState.label !== 'BOŞ') throw new Error(`Expected BOŞ, got ${initialState.label}`);
  if (initialState.counter !== '0 / 0') throw new Error(`Expected 0 / 0, got ${initialState.counter}`);
  if (initialState.dryingRackSlotCount !== 4) throw new Error(`Expected 4 drying rack slots, got ${initialState.dryingRackSlotCount}`);
  if (initialState.crateStationSlotCount !== 1) throw new Error(`Expected 1 crate station slot, got ${initialState.crateStationSlotCount}`);

  await page.screenshot({ path: path.join(screenshotDir, '1_initial_state.png') });
  console.log('✓ Initial mobile view & stations verified.');

  // 2. Harvest 10 Apricots from Trees
  console.log('\n[2/7] Harvesting 10 apricots from trees on the left...');
  await page.evaluate(() => {
    const { player } = window.__GAME__;
    // Harvest 10 apricots into player backpack
    for (let i = 0; i < 10; i++) {
      player.addApricot();
    }
  });

  await new Promise(r => setTimeout(r, 100));

  const afterHarvest = await page.evaluate(() => {
    const { player } = window.__GAME__;
    return {
      type: player.getCurrentType(),
      count: player.getCount(),
      capacity: player.getCapacity(),
      isFull: player.isFull(),
      label: document.getElementById('hud-item-label').textContent.trim(),
      counter: document.getElementById('apricot-counter').textContent.trim(),
      isDoluVisible: !document.getElementById('full-capacity-badge').classList.contains('badge-hidden')
    };
  });

  console.log('After Harvesting 10 Apricots:', afterHarvest);
  if (afterHarvest.type !== 'apricot') throw new Error(`Expected type apricot, got ${afterHarvest.type}`);
  if (afterHarvest.count !== 10) throw new Error(`Expected 10 apricots, got ${afterHarvest.count}`);
  if (afterHarvest.capacity !== 10) throw new Error(`Expected capacity 10, got ${afterHarvest.capacity}`);
  if (!afterHarvest.isFull) throw new Error('Player should be full');
  if (!afterHarvest.isDoluVisible) throw new Error('DOLU badge should be visible');

  await page.screenshot({ path: path.join(screenshotDir, '2_apricot_capacity_full.png') });
  console.log('✓ Harvested 10 apricots, HUD updated, DOLU badge verified.');

  // 3. Deposit Apricots into Crate Station
  console.log('\n[3/7] Moving to Crate Station Input Zone (X: -2.2, Z: 0.0)...');
  await page.evaluate(() => {
    const { player } = window.__GAME__;
    player.group.position.set(-2.2, 0, 0.0);
  });

  // Wait for automatic deposit of 10 apricots (takes ~1.0s)
  await page.waitForFunction(() => {
    const { player, world } = window.__GAME__;
    return player.getCount() === 0 && world.crateStation.slots[0].state === 'PROCESSING';
  }, { timeout: 4000 });

  const crateStationProcessing = await page.evaluate(() => {
    const { player, world } = window.__GAME__;
    const slot0 = world.crateStation.slots[0];
    return {
      playerCount: player.getCount(),
      playerType: player.getCurrentType(),
      slot0State: slot0.state,
      slot0Progress: slot0.progress,
      slot0BarVisible: slot0.progressBar.visible
    };
  });
  console.log('Crate Station Processing:', crateStationProcessing);
  if (crateStationProcessing.slot0State !== 'PROCESSING') throw new Error('Crate Station slot 0 should be PROCESSING');

  await page.screenshot({ path: path.join(screenshotDir, '3_crate_station_processing.png') });
  console.log('✓ 10 apricots deposited, packaging started, billboard progress bar visible.');

  // Wait 2.2s for packaging to finish (processTime = 2.0s)
  console.log('Waiting for crate packaging to complete (2.0s)...');
  await page.waitForFunction(() => {
    const { world } = window.__GAME__;
    return world.crateStation.slots[0].state === 'READY';
  }, { timeout: 3500 });

  const crateReadyState = await page.evaluate(() => {
    const slot0 = window.__GAME__.world.crateStation.slots[0];
    return {
      state: slot0.state,
      progress: slot0.progress,
      isCheckmarkVisible: slot0.progressBar.userData.checkGroup.visible
    };
  });
  console.log('Crate Station Finished:', crateReadyState);
  if (crateReadyState.state !== 'READY') throw new Error('Crate Station slot should be READY');
  if (!crateReadyState.isCheckmarkVisible) throw new Error('Green checkmark should be visible on billboard');

  await page.screenshot({ path: path.join(screenshotDir, '4_crate_ready_with_green_check.png') });
  console.log('✓ Packaging finished, fresh crate ready, green checkmark displayed.');

  // 4. Collect Fresh Crate from Crate Station Output Zone
  console.log('\n[4/7] Moving to Crate Station Output Zone (X: 2.2, Z: 0.0)...');
  await page.evaluate(() => {
    const { player } = window.__GAME__;
    player.group.position.set(2.2, 0, 0.0);
  });

  await page.waitForFunction(() => {
    const { player } = window.__GAME__;
    return player.getCurrentType() === 'crate_fresh' && player.getCount() === 1;
  }, { timeout: 3000 });

  const playerWithCrate = await page.evaluate(() => {
    const { player } = window.__GAME__;
    return {
      type: player.getCurrentType(),
      count: player.getCount(),
      capacity: player.getCapacity(),
      label: document.getElementById('hud-item-label').textContent.trim(),
      counter: document.getElementById('apricot-counter').textContent.trim()
    };
  });
  console.log('Player with Fresh Crate:', playerWithCrate);
  if (playerWithCrate.type !== 'crate_fresh') throw new Error('Player should hold crate_fresh');
  if (playerWithCrate.count !== 1) throw new Error('Player should hold 1 crate');
  if (playerWithCrate.capacity !== 3) throw new Error('Crate capacity should be 3');
  if (playerWithCrate.label !== 'TAZE KASA') throw new Error(`Expected TAZE KASA, got ${playerWithCrate.label}`);
  if (playerWithCrate.counter !== '1 / 3') throw new Error(`Expected 1 / 3, got ${playerWithCrate.counter}`);

  await page.screenshot({ path: path.join(screenshotDir, '5_player_carrying_fresh_crate.png') });
  console.log('✓ Fresh crate collected on back, HUD shows "TAZE KASA 1 / 3".');

  // 5. Test "Önce ellerini boşalt" Rule (Single Type Carrying Enforcement)
  console.log('\n[5/7] Testing single-type carrying rule: moving near tree while holding crate...');
  await page.evaluate(() => {
    const { player } = window.__GAME__;
    // Move near Tree 0 at (-11.5, -4.5)
    player.group.position.set(-11.5 + 1.2, 0, -4.5);
  });

  // Wait 0.3s for proximity check and warning trigger
  await new Promise(r => setTimeout(r, 400));

  const warningCheck = await page.evaluate(() => {
    const toast = document.getElementById('warning-toast');
    return {
      isToastVisible: !toast.classList.contains('toast-hidden'),
      toastText: toast.textContent.trim()
    };
  });
  console.log('Warning Toast Check:', warningCheck);
  if (!warningCheck.isToastVisible) throw new Error('Warning toast should be visible');
  if (warningCheck.toastText !== 'Önce ellerini boşalt') throw new Error(`Expected "Önce ellerini boşalt", got "${warningCheck.toastText}"`);

  await page.screenshot({ path: path.join(screenshotDir, '6_warning_once_ellerini_bosalt.png') });
  console.log('✓ "Önce ellerini boşalt" warning verified.');

  // 6. Sun Drying Rack Deposit & Drying Process
  console.log('\n[6/7] Moving to Sun Drying Rack Input Zone (X: 7.2, Z: 0.0)...');
  await page.evaluate(() => {
    const { player } = window.__GAME__;
    player.group.position.set(7.2, 0, 0.0);
  });

  await page.waitForFunction(() => {
    const { world, player } = window.__GAME__;
    return player.getCount() === 0 && world.dryingRack.slots[0].state === 'PROCESSING';
  }, { timeout: 3000 });

  console.log('Crate deposited onto Drying Rack slot 0.');

  // Advance drying progress via time step (dt-based drying test)
  console.log('Testing 20-second drying duration with delta updates...');
  await page.evaluate(() => {
    const slot0 = window.__GAME__.world.dryingRack.slots[0];
    // Advance progress near completion to test 20.0s transition
    slot0.progress = 19.5;
  });

  // Wait 1.0 second for slot 0 to naturally cross 20.0s via game loop dt
  await page.waitForFunction(() => {
    const slot0 = window.__GAME__.world.dryingRack.slots[0];
    return slot0.state === 'READY';
  }, { timeout: 3000 });

  const dryingReady = await page.evaluate(() => {
    const slot0 = window.__GAME__.world.dryingRack.slots[0];
    return {
      state: slot0.state,
      progress: slot0.progress,
      isCheckVisible: slot0.progressBar.userData.checkGroup.visible,
      meshName: slot0.itemMesh ? slot0.itemMesh.name : null
    };
  });
  console.log('Drying Rack Slot 0 Ready:', dryingReady);
  if (dryingReady.state !== 'READY') throw new Error('Drying rack slot 0 should be READY');
  if (!dryingReady.isCheckVisible) throw new Error('Green checkmark should be visible on drying rack slot');
  if (dryingReady.meshName !== 'Crate_crate_dry1') throw new Error(`Expected Crate_crate_dry1, got ${dryingReady.meshName}`);

  await page.screenshot({ path: path.join(screenshotDir, '7_drying_complete_dried_crate.png') });
  console.log('✓ Drying complete, dried crate (Crate_crate_dry1) ready on rack.');

  // 7. Collect Dried Crate from Drying Rack Output Zone
  console.log('\n[7/7] Moving to Sun Drying Rack Output Zone (X: 11.8, Z: 0.0)...');
  await page.evaluate(() => {
    const { player } = window.__GAME__;
    player.group.position.set(11.8, 0, 0.0);
  });

  await page.waitForFunction(() => {
    const { player } = window.__GAME__;
    return player.getCurrentType() === 'crate_dry1' && player.getCount() === 1;
  }, { timeout: 3000 });

  const playerWithDriedCrate = await page.evaluate(() => {
    const { player } = window.__GAME__;
    return {
      type: player.getCurrentType(),
      count: player.getCount(),
      capacity: player.getCapacity(),
      label: document.getElementById('hud-item-label').textContent.trim(),
      counter: document.getElementById('apricot-counter').textContent.trim()
    };
  });
  console.log('Player with Dried Crate:', playerWithDriedCrate);
  if (playerWithDriedCrate.type !== 'crate_dry1') throw new Error('Player should hold crate_dry1');
  if (playerWithDriedCrate.count !== 1) throw new Error('Player should hold 1 crate');
  if (playerWithDriedCrate.capacity !== 3) throw new Error('Crate capacity should be 3');
  if (playerWithDriedCrate.label !== 'KURU KASA') throw new Error(`Expected KURU KASA, got ${playerWithDriedCrate.label}`);
  if (playerWithDriedCrate.counter !== '1 / 3') throw new Error(`Expected 1 / 3, got ${playerWithDriedCrate.counter}`);

  await page.screenshot({ path: path.join(screenshotDir, '8_player_carrying_dried_crate.png') });
  console.log('✓ Dried crate collected on back, HUD shows "KURU KASA 1 / 3".');

  // Check for any browser errors
  console.log(`\nBrowser console errors count: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
    throw new Error('Browser console errors encountered!');
  }

  await browser.close();
  console.log('\n=== ALL PHASE 2 VERIFICATIONS PASSED SUCCESSFULLY! ===');
}

runTest().catch((err) => {
  console.error('\n❌ Phase 2 Test Failed:', err);
  process.exit(1);
});
