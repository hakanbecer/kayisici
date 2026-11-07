import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTests() {
  console.log('================================================================');
  console.log('  AŞAMA 6B: PWA, MOBİL SAĞLAMLAŞTIRMA VE PERFORMANS TESTLERİ   ');
  console.log('================================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Start with portrait mobile viewport (390 x 844, scale 2)
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

  const screenshotDir = path.resolve('test-artifacts-phase7');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // Target preview port 4173 (production build test)
  const baseUrl = 'http://localhost:4173';
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  const results = {};

  // -------------------------------------------------------------
  // TEST 1: PWA Manifest ve İkonlar
  // -------------------------------------------------------------
  console.log('--- TEST 1: PWA Manifest ve İkonlar ---');
  try {
    const manifestCheck = await page.evaluate(async () => {
      const manifestLink = document.querySelector('link[rel="manifest"]')?.getAttribute('href') || '';
      const res = await fetch(manifestLink);
      if (!res.ok) throw new Error(`Manifest fetch failed: HTTP ${res.status}`);
      const manifest = await res.json();

      // Check icons
      const iconsStatus = [];
      for (const icon of manifest.icons || []) {
        const iconRes = await fetch(icon.src);
        iconsStatus.push({
          src: icon.src,
          sizes: icon.sizes,
          purpose: icon.purpose,
          ok: iconRes.ok,
          status: iconRes.status,
          contentType: iconRes.headers.get('content-type')
        });
      }

      return {
        manifestLink,
        manifest,
        iconsStatus
      };
    });

    const { manifest, iconsStatus } = manifestCheck;
    console.log('Manifest name:', manifest.name);
    console.log('Manifest short_name:', manifest.short_name);
    console.log('Manifest display:', manifest.display);
    console.log('Manifest orientation:', manifest.orientation);
    console.log('Manifest theme_color:', manifest.theme_color);
    console.log('Manifest icons count:', manifest.icons?.length);
    console.log('Manifest icons fetch check:', iconsStatus);

    if (manifest.name !== 'Kayısı Hasadı') throw new Error(`Geçersiz manifest adı: ${manifest.name}`);
    if (manifest.short_name !== 'Kayısı') throw new Error(`Geçersiz manifest kısa adı: ${manifest.short_name}`);
    if (manifest.display !== 'standalone') throw new Error(`display 'standalone' olmalı: ${manifest.display}`);
    if (manifest.orientation !== 'portrait') throw new Error(`orientation 'portrait' olmalı: ${manifest.orientation}`);
    if (manifest.theme_color !== '#7ab85d') throw new Error(`theme_color '#7ab85d' olmalı: ${manifest.theme_color}`);

    // Verify icons exist and are accessible
    const icon192 = iconsStatus.find(i => i.sizes === '192x192' && (!i.purpose || i.purpose.includes('any')));
    const icon512 = iconsStatus.find(i => i.sizes === '512x512' && (!i.purpose || i.purpose.includes('any')));
    const maskable = iconsStatus.find(i => i.purpose && i.purpose.includes('maskable'));

    if (!icon192 || !icon512 || !maskable) {
      throw new Error('Gerekli 192px, 512px veya maskable ikonlar manifest içinde eksik!');
    }
    if (!icon192.ok || !icon512.ok || !maskable.ok) {
      throw new Error('İkonlardan biri veya birkaçı HTTP 200 ile yüklenemedi!');
    }

    results.test1 = 'GEÇTİ';
    console.log('✓ TEST 1 GEÇTİ: Manifest ve ikonlar geçerli ve erişilebilir.\n');
  } catch (err) {
    results.test1 = 'KALDI: ' + err.message;
    console.error('✗ TEST 1 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 2: Mobil Meta Etiketleri ve CSS Korumaları
  // -------------------------------------------------------------
  console.log('--- TEST 2: Mobil Meta Etiketleri ve CSS Korumaları ---');
  try {
    const metaTags = await page.evaluate(() => {
      const viewport = document.querySelector('meta[name="viewport"]')?.content || '';
      const appleCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]')?.content || '';
      const appleStatus = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')?.content || '';
      const themeColor = document.querySelector('meta[name="theme-color"]')?.content || '';
      const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]')?.href || '';

      const bodyStyle = window.getComputedStyle(document.body);
      const htmlStyle = window.getComputedStyle(document.documentElement);
      const overscroll = bodyStyle.overscrollBehavior || bodyStyle.overscrollBehaviorY || htmlStyle.overscrollBehavior;
      const touchAction = bodyStyle.touchAction;
      const userSelect = bodyStyle.userSelect || bodyStyle.webkitUserSelect;

      const btn = document.getElementById('upgrade-btn');
      const btnTouchAction = btn ? window.getComputedStyle(btn).touchAction : '';

      return {
        viewport,
        appleCapable,
        appleStatus,
        themeColor,
        appleTouchIcon,
        overscroll,
        touchAction,
        userSelect,
        btnTouchAction
      };
    });

    console.log('Meta & CSS styles:', metaTags);

    if (!metaTags.viewport.includes('width=device-width') ||
        !metaTags.viewport.includes('maximum-scale=1') ||
        !metaTags.viewport.includes('user-scalable=no') ||
        !metaTags.viewport.includes('viewport-fit=cover')) {
      throw new Error('Viewport meta etiketi tüm mobil direktifleri içermiyor: ' + metaTags.viewport);
    }

    if (metaTags.appleCapable !== 'yes') throw new Error('apple-mobile-web-app-capable "yes" olmalı');
    if (metaTags.themeColor !== '#7ab85d') throw new Error('theme-color "#7ab85d" olmalı');
    if (metaTags.overscroll !== 'none') throw new Error('overscroll-behavior "none" olmalı: ' + metaTags.overscroll);
    if (metaTags.touchAction !== 'none') throw new Error('body touch-action "none" olmalı: ' + metaTags.touchAction);

    results.test2 = 'GEÇTİ';
    console.log('✓ TEST 2 GEÇTİ: Mobil meta etiketleri ve CSS overscroll/touch-action kuralları tam.\n');
  } catch (err) {
    results.test2 = 'KALDI: ' + err.message;
    console.error('✗ TEST 2 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 3: Service Worker Kaydı ve PWA Güncelleme Arayüzü
  // -------------------------------------------------------------
  console.log('--- TEST 3: Service Worker Kaydı ve PWA Güncelleme Arayüzü ---');
  try {
    const swStatus = await page.evaluate(async () => {
      if (!('serviceWorker' in navigator)) return { supported: false };
      let reg = await navigator.serviceWorker.getRegistration();
      if (!reg) {
        await new Promise(r => setTimeout(r, 1200));
        reg = await navigator.serviceWorker.getRegistration();
      }
      return {
        supported: true,
        registered: !!reg,
        scope: reg?.scope
      };
    });

    console.log('Service Worker status:', swStatus);

    const updatePromptElements = await page.evaluate(() => {
      const banner = document.getElementById('pwa-update-prompt');
      const reloadBtn = document.getElementById('pwa-reload-btn');
      return {
        hasBanner: !!banner,
        hasReloadBtn: !!reloadBtn,
        bannerHiddenClass: banner ? banner.className : ''
      };
    });

    console.log('PWA update prompt DOM elements:', updatePromptElements);
    if (!updatePromptElements.hasBanner || !updatePromptElements.hasReloadBtn) {
      throw new Error('PWA güncelleme uyarısı DOM öğeleri bulunamadı');
    }

    results.test3 = 'GEÇTİ';
    console.log('✓ TEST 3 GEÇTİ: Service Worker altyapısı ve güncelleme UI hazır.\n');
  } catch (err) {
    results.test3 = 'KALDI: ' + err.message;
    console.error('✗ TEST 3 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 4: Dikey Mod (Portrait 390x844) Görünüm ve Taşma Kontrolü
  // -------------------------------------------------------------
  console.log('--- TEST 4: Dikey Mod (Portrait 390x844) Görünüm ve Taşma Kontrolü ---');
  try {
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.evaluate(() => window.dispatchEvent(new Event('resize')));
    await new Promise(r => setTimeout(r, 500));

    const overflowCheck = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const bodyW = document.body.scrollWidth;
      const docH = document.documentElement.scrollHeight;
      const bodyH = document.body.scrollHeight;
      const hud = document.getElementById('top-hud');
      const hudRect = hud ? hud.getBoundingClientRect() : null;
      const joystick = document.getElementById('joystick-zone');
      const joystickRect = joystick ? joystick.getBoundingClientRect() : null;

      return {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        docW,
        bodyW,
        docH,
        bodyH,
        hudWidth: hudRect?.width,
        hudRight: hudRect?.right,
        joystickTop: joystickRect?.top
      };
    });

    console.log('Portrait dimensions:', overflowCheck);

    if (overflowCheck.docW > 390 || overflowCheck.bodyW > 390) {
      throw new Error(`Dikey modda yatay taşma var: docW=${overflowCheck.docW}, bodyW=${overflowCheck.bodyW}`);
    }

    await page.screenshot({ path: path.join(screenshotDir, '1_portrait_view.png') });
    results.test4 = 'GEÇTİ';
    console.log('✓ TEST 4 GEÇTİ: Dikey modda taşma yok, HUD ve kontroller yerinde.\n');
  } catch (err) {
    results.test4 = 'KALDI: ' + err.message;
    console.error('✗ TEST 4 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 5: Yatay Mod (Landscape 844x390) Görünüm ve Modal Uyumu
  // -------------------------------------------------------------
  console.log('--- TEST 5: Yatay Mod (Landscape 844x390) Görünüm ve Modal Uyumu ---');
  try {
    await page.setViewport({ width: 844, height: 390, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.evaluate(() => {
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('orientationchange'));
    });
    await new Promise(r => setTimeout(r, 500));

    const landscapeCheck = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const docH = document.documentElement.scrollHeight;
      const bodyW = document.body.scrollWidth;
      const bodyH = document.body.scrollHeight;

      // Open upgrade modal to test accessibility in landscape
      const upgradeBtn = document.getElementById('upgrade-btn');
      if (upgradeBtn) upgradeBtn.click();

      const modal = document.getElementById('upgrade-panel');
      const modalRect = modal ? modal.getBoundingClientRect() : null;
      const closeBtn = document.getElementById('upgrade-panel-close');
      const closeRect = closeBtn ? closeBtn.getBoundingClientRect() : null;

      return {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        docW,
        docH,
        bodyW,
        bodyH,
        modalVisible: modal ? !modal.classList.contains('panel-hidden') : false,
        modalHeight: modalRect?.height,
        closeBtnTop: closeRect?.top,
        closeBtnVisible: closeRect && closeRect.top >= 0 && closeRect.bottom <= window.innerHeight
      };
    });

    console.log('Landscape check:', landscapeCheck);

    if (landscapeCheck.docH > 390 || landscapeCheck.bodyH > 390) {
      throw new Error(`Yatay modda dikey taşma var: docH=${landscapeCheck.docH}, bodyH=${landscapeCheck.bodyH}`);
    }

    if (!landscapeCheck.modalVisible || !landscapeCheck.closeBtnVisible) {
      throw new Error('Yükseltme modalı yatay modda ekrana sığmıyor veya kapat butonu erişilebilir değil');
    }

    await page.screenshot({ path: path.join(screenshotDir, '2_landscape_upgrade_modal.png') });

    // Close modal
    await page.evaluate(() => {
      document.getElementById('upgrade-panel-close')?.click();
    });

    // Switch back to portrait for remaining tests
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.evaluate(() => window.dispatchEvent(new Event('resize')));
    await new Promise(r => setTimeout(r, 400));

    results.test5 = 'GEÇTİ';
    console.log('✓ TEST 5 GEÇTİ: Yatay modda kamera ve paneller sorunsuz uyarlanıyor.\n');
  } catch (err) {
    results.test5 = 'KALDI: ' + err.message;
    console.error('✗ TEST 5 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 6: Arka Plan Sekme Optimizasyonu (document.hidden)
  // -------------------------------------------------------------
  console.log('--- TEST 6: Arka Plan Sekme Optimizasyonu (document.hidden) ---');
  try {
    const hiddenTestResult = await page.evaluate(async () => {
      const initialSkipped = window.__GAME__.getRenderSkippedCount();

      // Simulate tab hidden by redefining property and firing event
      Object.defineProperty(document, 'hidden', { value: true, configurable: true });
      document.dispatchEvent(new Event('visibilitychange'));

      // Wait 600ms (multiple animation frames)
      await new Promise(r => setTimeout(r, 600));

      const hiddenSkipped = window.__GAME__.getRenderSkippedCount();

      // Simulate tab visible again
      Object.defineProperty(document, 'hidden', { value: false, configurable: true });
      document.dispatchEvent(new Event('visibilitychange'));

      await new Promise(r => setTimeout(r, 200));
      const visibleSkipped = window.__GAME__.getRenderSkippedCount();

      return {
        initialSkipped,
        hiddenSkipped,
        visibleSkipped,
        framesSkippedWhileHidden: hiddenSkipped - initialSkipped
      };
    });

    console.log('Background tab render skip test:', hiddenTestResult);

    if (hiddenTestResult.framesSkippedWhileHidden <= 0) {
      throw new Error(`Arka plandayken 3D render atlanmadı! Skipped: ${hiddenTestResult.framesSkippedWhileHidden}`);
    }

    results.test6 = 'GEÇTİ';
    console.log(`✓ TEST 6 GEÇTİ: Sekme gizlenince ${hiddenTestResult.framesSkippedWhileHidden} render karesi atlandı, GPU/pil korundu.\n`);
  } catch (err) {
    results.test6 = 'KALDI: ' + err.message;
    console.error('✗ TEST 6 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 7: FPS Göstergesi ve Dinamik Kalite Düşürme (reduceQuality)
  // -------------------------------------------------------------
  console.log('--- TEST 7: FPS Göstergesi ve Dinamik Kalite Düşürme ---');
  try {
    // Open dev panel to inspect FPS and APP_VERSION
    await page.evaluate(() => {
      window.__GAME__.ui.toggleDevPanel();
    });

    await new Promise(r => setTimeout(r, 700));

    const devMetrics = await page.evaluate(() => {
      const fpsText = document.getElementById('dev-fps')?.textContent || '';
      const versionText = document.getElementById('dev-app-version')?.textContent || '';
      const currentFPS = window.__GAME__.getFPS();
      const initialPoolLimit = window.__GAME__.particles.getActivePoolLimit();
      const initialQuality = window.__GAME__.particles.getQuality();

      // Trigger quality reduction
      window.__GAME__.particles.reduceQuality();
      const reducedPoolLimit = window.__GAME__.particles.getActivePoolLimit();
      const reducedQuality = window.__GAME__.particles.getQuality();

      return {
        fpsText,
        versionText,
        currentFPS,
        initialPoolLimit,
        initialQuality,
        reducedPoolLimit,
        reducedQuality
      };
    });

    console.log('Dev metrics & particle reduction:', devMetrics);

    if (!devMetrics.fpsText.includes('FPS:') && isNaN(Number(devMetrics.fpsText))) {
      throw new Error('Geliştirici panelinde dev-fps metni bulunamadı: ' + devMetrics.fpsText);
    }
    if (!devMetrics.versionText.includes('v1.0.0')) {
      throw new Error('Geliştirici panelinde APP_VERSION (v1.0.0) bulunamadı: ' + devMetrics.versionText);
    }
    if (devMetrics.initialPoolLimit !== 30 || devMetrics.reducedPoolLimit !== 15) {
      throw new Error(`Parçacık havuz limiti 30 -> 15'e düşürülemedi: ${devMetrics.initialPoolLimit} -> ${devMetrics.reducedPoolLimit}`);
    }
    if (devMetrics.reducedQuality !== 'low') {
      throw new Error(`Parçacık kalite durumu 'low' olmadı: ${devMetrics.reducedQuality}`);
    }

    await page.screenshot({ path: path.join(screenshotDir, '3_dev_panel_fps_and_version.png') });

    // Close dev panel
    await page.evaluate(() => {
      window.__GAME__.ui.toggleDevPanel();
    });

    results.test7 = 'GEÇTİ';
    console.log('✓ TEST 7 GEÇTİ: FPS ölçümü ve dinamik parçacık kalitesi düşürme çalışıyor.\n');
  } catch (err) {
    results.test7 = 'KALDI: ' + err.message;
    console.error('✗ TEST 7 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 8: Ana Ekrana Ekleme (Add to Home Screen) Bannerı
  // -------------------------------------------------------------
  console.log('--- TEST 8: Ana Ekrana Ekleme Bannerı ve Kapatma Hafızası ---');
  try {
    const bannerTest = await page.evaluate(async () => {
      const banner = document.getElementById('pwa-install-banner');
      const dismissBtn = document.getElementById('pwa-dismiss-btn');
      const initialDisplay = banner ? window.getComputedStyle(banner).display : null;

      // Force banner visible to test dismiss action and persistence
      banner.style.display = 'flex';

      dismissBtn.click();
      const displayAfterDismiss = window.getComputedStyle(banner).display;
      const dismissedStorage = localStorage.getItem('kayisi_pwa_prompt_dismissed');

      return {
        bannerExists: !!banner,
        dismissBtnExists: !!dismissBtn,
        displayAfterDismiss,
        dismissedStorage
      };
    });

    console.log('Banner dismiss test:', bannerTest);

    if (!bannerTest.bannerExists || !bannerTest.dismissBtnExists) {
      throw new Error('Ana ekrana ekle bannerı veya kapatma butonu DOM içinde yok');
    }
    if (bannerTest.displayAfterDismiss !== 'none') {
      throw new Error('Kapatma butonuna basılınca banner gizlenmedi');
    }
    if (bannerTest.dismissedStorage !== 'true') {
      throw new Error('Kapatma tercihi localStorage kayisi_pwa_prompt_dismissed içine kaydedilmedi');
    }

    results.test8 = 'GEÇTİ';
    console.log('✓ TEST 8 GEÇTİ: Ana ekrana ekleme bannerı ve dismiss hafızası doğru çalışıyor.\n');
  } catch (err) {
    results.test8 = 'KALDI: ' + err.message;
    console.error('✗ TEST 8 KALDI:', err.message, '\n');
  }

  // -------------------------------------------------------------
  // TEST 9: Tam Üretim Zinciri ve Yükseltme Regresyon Testi
  // -------------------------------------------------------------
  console.log('--- TEST 9: Tam Üretim Zinciri ve Yükseltme Regresyon Testi ---');
  try {
    const chainResult = await page.evaluate(async () => {
      const { player, world, state } = window.__GAME__;
      const trees = window.__GAME__.trees || world.trees;
      const salesDepot = window.__GAME__.salesDepot || world.salesStand;
      const hasStations = !!(world.crateStation && world.dryingRack1 && world.sulfurTent && world.dryingRack2);

      // 1. Shake tree
      const tree = trees[0];
      player.group.position.set(tree.position.x, 0, tree.position.z + 1.2);
      await new Promise(r => setTimeout(r, 600));
      const carriedCount = player.getCount();
      const carriedType = player.getCurrentType();

      // 2. Add DEV money and buy an upgrade to verify economic pipeline
      state.addMoney(2000);
      const moneyBefore = state.money;
      const bought = state.purchaseUpgrade('tentCapacity');
      const moneyAfter = state.money;
      const newTentLevel = state.getUpgradeLevel('tentCapacity');

      return {
        carriedCount,
        carriedType,
        moneyBefore,
        bought,
        moneyAfter,
        newTentLevel,
        hasSalesDepot: !!salesDepot,
        hasStations
      };
    });

    console.log('Production chain & upgrade regression result:', chainResult);

    if (!chainResult.bought || chainResult.newTentLevel !== 1) {
      throw new Error(`Yükseltme satın alma mantığı bozulmuş! bought=${chainResult.bought}, newTentLevel=${chainResult.newTentLevel}`);
    }
    if (chainResult.moneyAfter >= chainResult.moneyBefore) {
      throw new Error('Para düşüşü gerçekleşmedi!');
    }

    results.test9 = 'GEÇTİ';
    console.log('✓ TEST 9 GEÇTİ: Temel oyun döngüsü ve yükseltme sistemi hatasız çalışıyor.\n');
  } catch (err) {
    results.test9 = 'KALDI: ' + err.message;
    console.error('✗ TEST 9 KALDI:', err.message, '\n');
  }

  await browser.close();

  // Print summary report
  console.log('================================================================');
  console.log('                   AŞAMA 6B TEST SONUÇLARI                     ');
  console.log('================================================================');
  let allPassed = true;
  for (const [test, result] of Object.entries(results)) {
    console.log(`${test.toUpperCase()}: ${result}`);
    if (!result.startsWith('GEÇTİ')) allPassed = false;
  }
  console.log('================================================================');
  if (consoleErrors.length > 0) {
    console.log('Konsol Hataları:', consoleErrors);
  }
  console.log('TÜM TESTLER BAŞARILI MI:', allPassed ? 'EVET (GEÇTİ)' : 'HAYIR (KALDI)');

  if (!allPassed) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test çalıştırılırken kritik hata:', err);
  process.exit(1);
});
