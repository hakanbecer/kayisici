import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTest() {
  console.log('=== Starting "Kayısı Hasadı" Regression Verification ===\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

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

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  // 1. Initial State
  const initialData = await page.evaluate(() => {
    const { player, world } = window.__GAME__;
    return {
      counterText: document.getElementById('apricot-counter').textContent.trim(),
      isDoluHidden: document.getElementById('full-capacity-badge').classList.contains('badge-hidden'),
      treeCount: world.trees.length,
      treesReady: world.trees.every(t => t.state === 'READY')
    };
  });

  console.log('Initial State:', initialData);
  if (initialData.counterText !== '0 / 0') throw new Error(`Unexpected counter: ${initialData.counterText}`);
  if (!initialData.isDoluHidden) throw new Error('DOLU badge should be hidden initially');
  if (initialData.treeCount !== 4) throw new Error(`Expected 4 trees, got ${initialData.treeCount}`);
  if (!initialData.treesReady) throw new Error('All trees should be READY initially');

  // 2. Joystick Test
  console.log('\nTesting Virtual Joystick on mobile...');
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

  await new Promise(r => setTimeout(r, 1000));

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

  // 3. Tree Harvest Test
  console.log('\nTesting Tree Harvest (standing still for 1.5s near tree 0)...');
  await page.evaluate(() => {
    const player = window.__GAME__.player;
    const tree0 = window.__GAME__.world.trees[0];
    player.group.position.set(tree0.position.x + 1.2, 0, tree0.position.z);
  });

  await page.waitForFunction(() => {
    const game = window.__GAME__;
    return game.player.getCount() === 5 && game.world.flyingFruits.length === 0;
  }, { timeout: 6000 });

  const afterHarvest = await page.evaluate(() => {
    const player = window.__GAME__.player;
    const tree0 = window.__GAME__.world.trees[0];
    return {
      count: player.getCount(),
      counterText: document.getElementById('apricot-counter').textContent.trim(),
      tree0State: tree0.state,
      tree0Cooldown: tree0.cooldownTimer
    };
  });

  console.log('After harvest result:', afterHarvest);
  if (afterHarvest.count !== 5) throw new Error(`Expected 5 apricots, got ${afterHarvest.count}`);
  if (afterHarvest.counterText !== '5 / 10') throw new Error(`Expected HUD "5 / 10", got "${afterHarvest.counterText}"`);
  if (afterHarvest.tree0State !== 'COOLDOWN') throw new Error('Tree 0 should be in COOLDOWN');

  // 4. Fill to capacity (10 apricots) and check DOLU badge
  console.log('\nTesting Capacity (10) & DOLU badge...');
  await page.evaluate(() => {
    const player = window.__GAME__.player;
    while (!player.isFull()) {
      player.addApricot();
    }
  });

  await new Promise(r => setTimeout(r, 100));

  const fullState = await page.evaluate(() => {
    const player = window.__GAME__.player;
    const badge = document.getElementById('full-capacity-badge');
    return {
      count: player.getCount(),
      isFull: player.isFull(),
      counterText: document.getElementById('apricot-counter').textContent.trim(),
      isBadgeVisible: !badge.classList.contains('badge-hidden')
    };
  });

  console.log('Full State:', fullState);
  if (fullState.count !== 10) throw new Error(`Expected count 10, got ${fullState.count}`);
  if (!fullState.isFull) throw new Error('Player should report isFull()');
  if (!fullState.isBadgeVisible) throw new Error('"DOLU!" badge should be visible');

  if (consoleErrors.length > 0) {
    throw new Error('Console errors found');
  }

  await browser.close();
  console.log('\n=== REGRESSION TESTS PASSED! ===');
}

runTest().catch((err) => {
  console.error('\n❌ Regression Test Failed:', err);
  process.exit(1);
});
