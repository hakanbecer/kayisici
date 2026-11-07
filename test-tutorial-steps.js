import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTutorialStepTests() {
  console.log('=== Starting "Kayısı Hasadı" Tutorial Step-by-Step Verification ===\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true });

  const consoleLogs = [];
  page.on('console', (msg) => {
    consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
  });

  // 1. Start with completely fresh empty save
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForFunction(() => window.__GAME__ !== undefined);

  const stepResults = {};

  try {
    // -------------------------------------------------------------
    // ADIM 0: tree ("Ağaca git ve durarak kayısı topla")
    // -------------------------------------------------------------
    console.log('Testing Adım 0: tree...');
    const step0Init = await page.evaluate(() => {
      const { tutorial } = window.__GAME__;
      const step = tutorial.getCurrentStep();
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: step ? step.id : null,
        text: document.getElementById('tutorial-text').textContent.trim()
      };
    });

    if (step0Init.stepIdx !== 0 || step0Init.stepId !== 'tree') {
      throw new Error(`Adım 0 başlangıç hatası: ${JSON.stringify(step0Init)}`);
    }

    // Simulate player collecting 1 apricot from tree
    await page.evaluate(() => {
      const { player } = window.__GAME__;
      player.addItem('apricot');
    });

    // Wait for predicate evaluation
    await new Promise(r => setTimeout(r, 200));

    const step0After = await page.evaluate(() => {
      const { tutorial } = window.__GAME__;
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: tutorial.getCurrentStep() ? tutorial.getCurrentStep().id : null
      };
    });

    if (step0After.stepIdx === 1 && step0After.stepId === 'crate_station') {
      stepResults['Adım 0 (tree - Kayısı toplama)'] = 'tamamlandı';
      console.log('✓ Adım 0 tamamlandı -> Adım 1\'e geçildi.\n');
    } else {
      stepResults['Adım 0 (tree - Kayısı toplama)'] = `tamamlanmadı (stepIdx=${step0After.stepIdx})`;
      throw new Error(`Adım 0 başarısız: ${JSON.stringify(step0After)}`);
    }

    // -------------------------------------------------------------
    // ADIM 1: crate_station ("Topladığın kayısıları Kasa İstasyonu girişine bırak")
    // -------------------------------------------------------------
    console.log('Testing Adım 1: crate_station...');
    // Simulate player depositing apricot into crate station buffer
    await page.evaluate(() => {
      const { player, world } = window.__GAME__;
      player.discardAll();
      world.crateStation.inputBuffer = 5;
    });

    await new Promise(r => setTimeout(r, 200));

    const step1After = await page.evaluate(() => {
      const { tutorial } = window.__GAME__;
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: tutorial.getCurrentStep() ? tutorial.getCurrentStep().id : null
      };
    });

    if (step1After.stepIdx === 2 && step1After.stepId === 'pick_crate') {
      stepResults['Adım 1 (crate_station - Kasa İstasyonuna kayısı bırakma)'] = 'tamamlandı';
      console.log('✓ Adım 1 tamamlandı -> Adım 2\'ye geçildi.\n');
    } else {
      stepResults['Adım 1 (crate_station - Kasa İstasyonuna kayısı bırakma)'] = `tamamlanmadı (stepIdx=${step1After.stepIdx})`;
      throw new Error(`Adım 1 başarısız: ${JSON.stringify(step1After)}`);
    }

    // -------------------------------------------------------------
    // ADIM 2: pick_crate ("Kasa İstasyonu çıkışındaki taze kasayı al")
    // -------------------------------------------------------------
    console.log('Testing Adım 2: pick_crate...');
    // Simulate picking up fresh crate
    await page.evaluate(() => {
      const { player, world } = window.__GAME__;
      world.crateStation.inputBuffer = 0;
      player.addItem('crate_fresh');
    });

    await new Promise(r => setTimeout(r, 200));

    const step2After = await page.evaluate(() => {
      const { tutorial } = window.__GAME__;
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: tutorial.getCurrentStep() ? tutorial.getCurrentStep().id : null
      };
    });

    if (step2After.stepIdx === 3 && step2After.stepId === 'rack_1') {
      stepResults['Adım 2 (pick_crate - Taze kasayı alma)'] = 'tamamlandı';
      console.log('✓ Adım 2 tamamlandı -> Adım 3\'e geçildi.\n');
    } else {
      stepResults['Adım 2 (pick_crate - Taze kasayı alma)'] = `tamamlanmadı (stepIdx=${step2After.stepIdx})`;
      throw new Error(`Adım 2 başarısız: ${JSON.stringify(step2After)}`);
    }

    // -------------------------------------------------------------
    // ADIM 3: rack_1 ("Kasayı 1. Güneş Rafı girişine bırak")
    // -------------------------------------------------------------
    console.log('Testing Adım 3: rack_1...');
    // Simulate depositing fresh crate into rack 1
    await page.evaluate(() => {
      const { player, world } = window.__GAME__;
      player.discardAll();
      world.dryingRack1.inputBuffer = 1;
    });

    await new Promise(r => setTimeout(r, 200));

    const step3After = await page.evaluate(() => {
      const { tutorial } = window.__GAME__;
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: tutorial.getCurrentStep() ? tutorial.getCurrentStep().id : null
      };
    });

    if (step3After.stepIdx === 4 && step3After.stepId === 'tent') {
      stepResults['Adım 3 (rack_1 - 1. Güneş Rafına bırakma)'] = 'tamamlandı';
      console.log('✓ Adım 3 tamamlandı -> Adım 4\'e geçildi.\n');
    } else {
      stepResults['Adım 3 (rack_1 - 1. Güneş Rafına bırakma)'] = `tamamlanmadı (stepIdx=${step3After.stepIdx})`;
      throw new Error(`Adım 3 başarısız: ${JSON.stringify(step3After)}`);
    }

    // -------------------------------------------------------------
    // ADIM 4: tent ("Kurutulan kasayı Kükürt Çadırı girişine bırak")
    // -------------------------------------------------------------
    console.log('Testing Adım 4: tent...');
    // Simulate depositing dry1 crate into sulfur tent
    await page.evaluate(() => {
      const { world } = window.__GAME__;
      world.dryingRack1.inputBuffer = 0;
      world.sulfurTent.inputBuffer = 1;
    });

    await new Promise(r => setTimeout(r, 200));

    const step4After = await page.evaluate(() => {
      const { tutorial } = window.__GAME__;
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: tutorial.getCurrentStep() ? tutorial.getCurrentStep().id : null
      };
    });

    if (step4After.stepIdx === 5 && step4After.stepId === 'rack_2') {
      stepResults['Adım 4 (tent - Kükürt Çadırına bırakma)'] = 'tamamlandı';
      console.log('✓ Adım 4 tamamlandı -> Adım 5\'e geçildi.\n');
    } else {
      stepResults['Adım 4 (tent - Kükürt Çadırına bırakma)'] = `tamamlanmadı (stepIdx=${step4After.stepIdx})`;
      throw new Error(`Adım 4 başarısız: ${JSON.stringify(step4After)}`);
    }

    // -------------------------------------------------------------
    // ADIM 5: rack_2 ("Kükürtlü kasayı 2. Güneş Rafı girişine bırak")
    // -------------------------------------------------------------
    console.log('Testing Adım 5: rack_2...');
    // Simulate depositing sulfur crate into rack 2
    await page.evaluate(() => {
      const { world } = window.__GAME__;
      world.sulfurTent.inputBuffer = 0;
      world.dryingRack2.inputBuffer = 1;
    });

    await new Promise(r => setTimeout(r, 200));

    const step5After = await page.evaluate(() => {
      const { tutorial } = window.__GAME__;
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: tutorial.getCurrentStep() ? tutorial.getCurrentStep().id : null
      };
    });

    if (step5After.stepIdx === 6 && step5After.stepId === 'sales') {
      stepResults['Adım 5 (rack_2 - 2. Güneş Rafına bırakma)'] = 'tamamlandı';
      console.log('✓ Adım 5 tamamlandı -> Adım 6\'ya geçildi.\n');
    } else {
      stepResults['Adım 5 (rack_2 - 2. Güneş Rafına bırakma)'] = `tamamlanmadı (stepIdx=${step5After.stepIdx})`;
      throw new Error(`Adım 5 başarısız: ${JSON.stringify(step5After)}`);
    }

    // -------------------------------------------------------------
    // ADIM 6: sales ("Kuru altın kayısı kasasını Satış Deposuna bırak")
    // -------------------------------------------------------------
    console.log('Testing Adım 6: sales...');
    // Simulate placing dry2 crate in sales buffer
    await page.evaluate(() => {
      const { world } = window.__GAME__;
      world.dryingRack2.inputBuffer = 0;
      world.salesStand.cratesCount = 1;
    });

    await new Promise(r => setTimeout(r, 200));

    const step6After = await page.evaluate(() => {
      const { tutorial } = window.__GAME__;
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: tutorial.getCurrentStep() ? tutorial.getCurrentStep().id : null
      };
    });

    if (step6After.stepIdx === 7 && step6After.stepId === 'wait_truck') {
      stepResults['Adım 6 (sales - Satış Deposuna bırakma)'] = 'tamamlandı';
      console.log('✓ Adım 6 tamamlandı -> Adım 7\'ye geçildi.\n');
    } else {
      stepResults['Adım 6 (sales - Satış Deposuna bırakma)'] = `tamamlanmadı (stepIdx=${step6After.stepIdx})`;
      throw new Error(`Adım 6 başarısız: ${JSON.stringify(step6After)}`);
    }

    // -------------------------------------------------------------
    // ADIM 7: wait_truck ("Tüccar kamyonunu bekle ve altınları kazan")
    // -------------------------------------------------------------
    console.log('Testing Adım 7: wait_truck...');
    // Simulate crate sold to merchant truck
    await page.evaluate(() => {
      const { state, world } = window.__GAME__;
      world.salesStand.cratesCount = 0;
      state.addMoney(60, 1);
    });

    await new Promise(r => setTimeout(r, 200));

    const step7After = await page.evaluate(() => {
      const { tutorial } = window.__GAME__;
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: tutorial.getCurrentStep() ? tutorial.getCurrentStep().id : null
      };
    });

    if (step7After.stepIdx === 8 && step7After.stepId === 'upgrade') {
      stepResults['Adım 7 (wait_truck - Kamyona satış yapma)'] = 'tamamlandı';
      console.log('✓ Adım 7 tamamlandı -> Adım 8\'e geçildi.\n');
    } else {
      stepResults['Adım 7 (wait_truck - Kamyona satış yapma)'] = `tamamlanmadı (stepIdx=${step7After.stepIdx})`;
      throw new Error(`Adım 7 başarısız: ${JSON.stringify(step7After)}`);
    }

    // -------------------------------------------------------------
    // ADIM 8: upgrade ("⚡ Yükselt butonuna dokun ve geliştirme yap")
    // -------------------------------------------------------------
    console.log('Testing Adım 8: upgrade...');
    // Simulate purchasing an upgrade
    await page.evaluate(() => {
      const { state } = window.__GAME__;
      state.money = 500;
      state.purchaseUpgrade('harvestSpeed');
    });

    await new Promise(r => setTimeout(r, 200));

    const step8After = await page.evaluate(() => {
      const { tutorial, state } = window.__GAME__;
      return {
        stepIdx: tutorial.currentStepIndex,
        isActive: tutorial.isActive,
        isDone: state.isTutorialDone(),
        counterText: document.getElementById('tutorial-step-counter').textContent.trim()
      };
    });

    if (!step8After.isActive && step8After.isDone && step8After.counterText === '🎉') {
      stepResults['Adım 8 (upgrade - Yükseltme satın alma)'] = 'tamamlandı';
      console.log('✓ Adım 8 tamamlandı -> Rehber başarıyla tamamlandı (tutorialDone: true).\n');
    } else {
      stepResults['Adım 8 (upgrade - Yükseltme satın alma)'] = `tamamlanmadı (${JSON.stringify(step8After)})`;
      throw new Error(`Adım 8 başarısız: ${JSON.stringify(step8After)}`);
    }

    // -------------------------------------------------------------
    // BONUS TEST 1: 45 Saniye Takılma (Stagnation) Vurgusu
    // -------------------------------------------------------------
    console.log('Testing 45s stagnation highlight...');
    const stagnationCheck = await page.evaluate(() => {
      const { tutorial, state, player, world } = window.__GAME__;
      // Completely clear slots, buffers and upgrades so predicates do not trigger
      state.totalCratesSold = 0;
      state.resetUpgrades();
      player.discardAll();
      [world.crateStation, world.dryingRack1, world.sulfurTent, world.dryingRack2].forEach(st => {
        st.inputBuffer = 0;
        st.slots.forEach(s => {
          s.state = 'EMPTY';
          if (s.itemMesh) world.scene.remove(s.itemMesh);
        });
      });
      world.salesStand.cratesCount = 0;

      tutorial.start();
      const skipBtn = document.getElementById('tutorial-skip-btn');

      const beforeClass = skipBtn.classList.contains('tutorial-btn-highlight');

      // Simulate 45s of stagnation without completing the step
      tutorial.update(45.5, { x: 0, y: 0, z: 0 }, null);
      const afterClass = skipBtn.classList.contains('tutorial-btn-highlight');

      // Advance step
      tutorial.nextStep();
      const afterNextClass = skipBtn.classList.contains('tutorial-btn-highlight');

      tutorial.closeTutorial();

      return {
        beforeClass,
        afterClass,
        afterNextClass
      };
    });

    console.log('Stagnation highlight result:', stagnationCheck);
    if (!stagnationCheck.beforeClass && stagnationCheck.afterClass && !stagnationCheck.afterNextClass) {
      stepResults['Takılma Vurgusu (45sn Geç butonu parlaması)'] = 'tamamlandı';
      console.log('✓ 45 sn takılma vurgusu başarıyla doğrulandı.\n');
    } else {
      stepResults['Takılma Vurgusu (45sn Geç butonu parlaması)'] = 'tamamlanmadı';
      throw new Error(`Takılma vurgusu başarısız: ${JSON.stringify(stagnationCheck)}`);
    }

    // -------------------------------------------------------------
    // BONUS TEST 2: Önceden Yapılan İşi Anında Atlama (Downstream Skip)
    // -------------------------------------------------------------
    console.log('Testing downstream auto-skip (rehberden önce yapılmış eylemler)...');
    const downstreamCheck = await page.evaluate(() => {
      const { tutorial, player, world } = window.__GAME__;
      // Reset tutorial to step 0
      tutorial.start();

      // Suppose player is already carrying crate_dry1 (downstream of step 0, 1, 2, 3)
      player.addItem('crate_dry1');

      // Update predicates
      tutorial._checkStepPredicates();

      const currentStep = tutorial.getCurrentStep();
      return {
        stepIdx: tutorial.currentStepIndex,
        stepId: currentStep ? currentStep.id : null
      };
    });

    console.log('Downstream skip result:', downstreamCheck);
    if (downstreamCheck.stepIdx === 4 && downstreamCheck.stepId === 'tent') {
      stepResults['Önceden Yapılan İşi Atlama (Downstream skip)'] = 'tamamlandı';
      console.log('✓ Oyuncu önceden ilerlemişse adımları otomatik atlama doğrulandı.\n');
    } else {
      stepResults['Önceden Yapılan İşi Atlama (Downstream skip)'] = `tamamlanmadı (stepIdx=${downstreamCheck.stepIdx})`;
      throw new Error(`Downstream skip başarısız: ${JSON.stringify(downstreamCheck)}`);
    }

  } catch (err) {
    console.error('Test execution error:', err.message);
  } finally {
    await browser.close();
  }

  console.log('\n========================================');
  console.log('REHBER ADIM TESTLERİ RAPORU:');
  console.log('========================================');
  Object.entries(stepResults).forEach(([step, res]) => {
    console.log(`${step}: ${res}`);
  });
  console.log('========================================\n');
}

runTutorialStepTests().catch((e) => {
  console.error('Fatal test error:', e);
  process.exit(1);
});
