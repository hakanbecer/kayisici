import { CONFIG } from '../config.js';
import { events } from './Events.js';

export class UI {
  constructor() {
    this.iconEl = document.getElementById('hud-item-icon');
    this.labelEl = document.getElementById('hud-item-label');
    this.counterEl = document.getElementById('apricot-counter');
    this.fullBadgeEl = document.getElementById('full-capacity-badge');
    this.toastEl = document.getElementById('warning-toast');
    this.discardBtnEl = document.getElementById('discard-btn');
    this.audioToggleBtn = document.getElementById('audio-toggle-btn');

    // Money & Developer Panel elements
    this.moneyEl = document.getElementById('money-counter');
    this.devPanelEl = document.getElementById('dev-panel');
    this.devToggleBtn = document.getElementById('dev-panel-toggle');
    this.devCloseBtn = document.getElementById('dev-panel-close');
    this.devMoneyRateEl = document.getElementById('dev-money-rate');
    this.devTotalCratesEl = document.getElementById('dev-total-crates');
    this.devAvgTruckEl = document.getElementById('dev-avg-truck');
    this.devSummonTruckBtn = document.getElementById('dev-summon-truck');
    this.devResetSaveBtn = document.getElementById('dev-reset-save');
    this.devFpsEl = document.getElementById('dev-fps');
    this.devAppVersionEl = document.getElementById('dev-app-version');
    if (this.devAppVersionEl && CONFIG.APP_VERSION) {
      this.devAppVersionEl.textContent = `v${CONFIG.APP_VERSION}`;
    }

    // PWA Install Banner elements
    this.pwaBannerEl = document.getElementById('pwa-install-banner');
    this.pwaInstallBtn = document.getElementById('pwa-install-btn');
    this.pwaDismissBtn = document.getElementById('pwa-dismiss-btn');
    this.pwaBannerText = document.getElementById('pwa-banner-text');
    this.deferredPrompt = null;
    this._initPwaInstallBanner();

    // Developer Test Tools elements
    this.devToolsSectionEl = document.getElementById('dev-tools-section');
    this.devAdd1000Btn = document.getElementById('dev-add-1000');
    this.devAdd10000Btn = document.getElementById('dev-add-10000');
    this.devMaxUpgradesBtn = document.getElementById('dev-max-upgrades');
    this.timescaleBtns = document.querySelectorAll('.timescale-btn');

    // Upgrade Panel elements
    this.upgradeBtnEl = document.getElementById('upgrade-btn');
    this.upgradePanelEl = document.getElementById('upgrade-panel');
    this.upgradePanelCloseEl = document.getElementById('upgrade-panel-close');
    this.upgradeListEl = document.getElementById('upgrade-list');
    this.upgradeModalBackdropEl = this.upgradePanelEl
      ? this.upgradePanelEl.querySelector('.upgrade-modal-backdrop')
      : null;

    if (this.fullBadgeEl) {
      this.fullBadgeEl.textContent = CONFIG.STRINGS.FULL;
    }
    if (this.discardBtnEl) {
      this.discardBtnEl.textContent = CONFIG.STRINGS.DISCARD_BUTTON;
    }

    this.lastType = undefined;
    this.lastCount = -1;
    this.lastCapacity = -1;
    this.lastIsFull = false;
    this.lastHasItems = false;
    this.lastMoney = -1;
    this.toastTimer = null;
    this.onDiscardCallback = null;
    this.onSummonTruckCallback = null;
    this.onResetSaveCallback = null;
    this.onTimeScaleCallback = null;
    this.currentTimeScale = 1.0;
    this.gameStateRef = null;
    this.lastSoundEnabled = undefined;

    // Audio toggle button
    if (this.audioToggleBtn) {
      this.audioToggleBtn.addEventListener('click', () => {
        if (this.gameStateRef) {
          const next = !this.gameStateRef.isSoundEnabled();
          this.gameStateRef.setSoundEnabled(next);
          this.updateAudioButton(next);
        }
      });
    }

    // Discard button
    if (this.discardBtnEl) {
      this.discardBtnEl.addEventListener('click', () => {
        if (this.onDiscardCallback) {
          this.onDiscardCallback();
        }
      });
    }

    // Dev panel toggle
    if (this.devToggleBtn) {
      this.devToggleBtn.addEventListener('click', () => {
        this.toggleDevPanel();
      });
    }

    if (this.devCloseBtn) {
      this.devCloseBtn.addEventListener('click', () => {
        this.closeDevPanel();
      });
    }

    if (this.devSummonTruckBtn) {
      this.devSummonTruckBtn.addEventListener('click', () => {
        if (this.onSummonTruckCallback) {
          this.onSummonTruckCallback();
        }
      });
    }

    if (this.devResetSaveBtn) {
      this.devResetSaveBtn.addEventListener('click', () => {
        if (confirm(CONFIG.STRINGS.RESET_SAVE_CONFIRM)) {
          if (this.onResetSaveCallback) {
            this.onResetSaveCallback();
          }
        }
      });
    }

    // Developer Test Tools listeners (Gated by CONFIG.DEV_MODE)
    if (CONFIG.DEV_MODE === false) {
      if (this.devToolsSectionEl) {
        this.devToolsSectionEl.style.display = 'none';
      }
    } else {
      if (this.devAdd1000Btn) {
        this.devAdd1000Btn.addEventListener('click', () => {
          if (this.gameStateRef) {
            this.gameStateRef.addMoney(1000);
          }
        });
      }

      if (this.devAdd10000Btn) {
        this.devAdd10000Btn.addEventListener('click', () => {
          if (this.gameStateRef) {
            this.gameStateRef.addMoney(10000);
          }
        });
      }

      if (this.devMaxUpgradesBtn) {
        this.devMaxUpgradesBtn.addEventListener('click', () => {
          if (this.gameStateRef) {
            this.gameStateRef.maxAllUpgrades();
            this.updateUpgradeRows(this.gameStateRef);
          }
        });
      }

      if (this.timescaleBtns) {
        this.timescaleBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
            const scale = parseFloat(btn.dataset.scale) || 1.0;
            this.setTimeScale(scale);
            if (this.onTimeScaleCallback) {
              this.onTimeScaleCallback(scale);
            }
          });
        });
      }
    }

    // Upgrade panel open/close
    if (this.upgradeBtnEl) {
      this.upgradeBtnEl.addEventListener('click', () => {
        this.openUpgradePanel();
      });
    }

    if (this.upgradePanelCloseEl) {
      this.upgradePanelCloseEl.addEventListener('click', () => {
        this.closeUpgradePanel();
      });
    }

    if (this.upgradeModalBackdropEl) {
      this.upgradeModalBackdropEl.addEventListener('click', () => {
        this.closeUpgradePanel();
      });
    }

    // Desktop keyboard shortcut for Dev Panel (F2 or Backquote/Tilde) & Esc to close modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'F2' || e.key === '`') {
        e.preventDefault();
        this.toggleDevPanel();
      } else if (e.key === 'Escape') {
        if (this.isUpgradePanelOpen()) {
          this.closeUpgradePanel();
        } else if (this.isDevPanelOpen()) {
          this.closeDevPanel();
        }
      }
    });
  }

  /**
   * Registers callback for calling the merchant truck immediately
   * @param {() => void} callback
   */
  onSummonTruck(callback) {
    this.onSummonTruckCallback = callback;
  }

  /**
   * Registers callback for clearing saved game
   * @param {() => void} callback
   */
  onResetSave(callback) {
    this.onResetSaveCallback = callback;
  }

  /**
   * Registers callback when developer timeScale changes (x1, x3, x10)
   * @param {(scale: number) => void} callback
   */
  onTimeScaleChange(callback) {
    this.onTimeScaleCallback = callback;
  }

  /**
   * Sets active time scale and updates UI toggle buttons
   * @param {number} scale
   */
  setTimeScale(scale) {
    this.currentTimeScale = scale;
    if (this.timescaleBtns) {
      this.timescaleBtns.forEach((btn) => {
        const btnScale = parseFloat(btn.dataset.scale) || 1.0;
        if (btnScale === scale) {
          btn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });
    }
  }

  toggleDevPanel(force) {
    if (!this.devPanelEl) return;
    const shouldOpen =
      force !== undefined ? force : this.devPanelEl.classList.contains('dev-panel-hidden');
    if (shouldOpen) {
      this.devPanelEl.classList.remove('dev-panel-hidden');
    } else {
      this.devPanelEl.classList.add('dev-panel-hidden');
    }
  }

  closeDevPanel() {
    if (this.devPanelEl) {
      this.devPanelEl.classList.add('dev-panel-hidden');
    }
  }

  isDevPanelOpen() {
    return this.devPanelEl && !this.devPanelEl.classList.contains('dev-panel-hidden');
  }

  // -------------------------------------------------------------
  // UPGRADE PANEL CONTROLS & RENDERING
  // -------------------------------------------------------------

  openUpgradePanel() {
    if (!this.upgradePanelEl) return;
    this.upgradePanelEl.classList.remove('panel-hidden');
    if (this.gameStateRef) {
      this.renderUpgradePanel(this.gameStateRef);
    }
  }

  closeUpgradePanel() {
    if (this.upgradePanelEl) {
      this.upgradePanelEl.classList.add('panel-hidden');
    }
  }

  isUpgradePanelOpen() {
    return this.upgradePanelEl && !this.upgradePanelEl.classList.contains('panel-hidden');
  }

  /**
   * Builds or updates the upgrade items list inside the modal
   * @param {import('./State.js').GameState} gameState
   */
  renderUpgradePanel(gameState) {
    if (!this.upgradeListEl || !CONFIG.UPGRADES) return;
    this.gameStateRef = gameState;

    const upgradesList = Object.values(CONFIG.UPGRADES);

    // If already rendered, just update state in place
    if (this.upgradeListEl.children.length === upgradesList.length) {
      this.updateUpgradeRows(gameState);
      return;
    }

    this.upgradeListEl.innerHTML = '';

    upgradesList.forEach((def) => {
      const row = document.createElement('div');
      row.className = 'upgrade-row';
      row.id = `upgrade-row-${def.ID}`;
      row.dataset.upgradeId = def.ID;

      row.innerHTML = `
        <div class="upgrade-icon">${def.ICON}</div>
        <div class="upgrade-info">
          <div class="upgrade-title-row">
            <span class="upgrade-title">${def.NAME}</span>
            <span class="upgrade-level" id="upgrade-lvl-${def.ID}">Seviye 0/5</span>
          </div>
          <div class="upgrade-effect" id="upgrade-effect-${def.ID}">${def.DESC}</div>
        </div>
        <div class="upgrade-action">
          <button class="upgrade-buy-btn" id="upgrade-btn-${def.ID}" data-upgrade-id="${def.ID}">
            Al
          </button>
        </div>
      `;

      const buyBtn = row.querySelector('.upgrade-buy-btn');
      buyBtn.addEventListener('click', () => {
        this.handleBuyUpgrade(def.ID, row);
      });

      this.upgradeListEl.appendChild(row);
    });

    this.updateUpgradeRows(gameState);
  }

  /**
   * Refreshes text, prices, and button states for all upgrade rows
   * @param {import('./State.js').GameState} gameState
   */
  updateUpgradeRows(gameState) {
    if (!this.upgradeListEl || !CONFIG.UPGRADES) return;

    Object.values(CONFIG.UPGRADES).forEach((def) => {
      const level = gameState.getUpgradeLevel(def.ID);
      const isMax = level >= def.MAX_LEVEL;
      const cost = gameState.getUpgradeCost(def.ID);
      const canAfford = !isMax && cost !== null && gameState.getMoney() >= cost;

      const lvlEl = document.getElementById(`upgrade-lvl-${def.ID}`);
      const effectEl = document.getElementById(`upgrade-effect-${def.ID}`);
      const btnEl = document.getElementById(`upgrade-btn-${def.ID}`);

      if (lvlEl) {
        lvlEl.textContent = `Seviye ${level}/${def.MAX_LEVEL}`;
      }

      if (effectEl) {
        effectEl.textContent = this._getUpgradeEffectText(def.ID, level, gameState);
      }

      if (btnEl) {
        if (isMax) {
          btnEl.textContent = CONFIG.STRINGS.LEVEL_MAX;
          btnEl.disabled = true;
          btnEl.className = 'upgrade-buy-btn is-max';
        } else {
          btnEl.textContent = `${CONFIG.STRINGS.BUY_BUTTON} (${cost.toLocaleString('tr-TR')} 💰)`;
          btnEl.disabled = !canAfford;
          if (canAfford) {
            btnEl.className = 'upgrade-buy-btn';
          } else {
            btnEl.className = 'upgrade-buy-btn is-disabled';
          }
        }
      }
    });
  }

  _getUpgradeEffectText(upgradeId, currentLevel, gameState) {
    switch (upgradeId) {
      case 'tentCapacity': {
        const slots = gameState.getStat('tentSlots');
        return currentLevel >= 5
          ? `Maksimum Kapasite (${slots} Yuva)`
          : `+1 Kükürt Yuvası (Mevcut: ${slots})`;
      }
      case 'walkSpeed': {
        const pct = Math.round(currentLevel * 12);
        return currentLevel >= 5
          ? `Maksimum Hız (+%${pct})`
          : `+%12 Hız (Şu an: +%${pct})`;
      }
      case 'carryCapacity': {
        const apr = gameState.getStat('carryCapacityApricot');
        const crt = gameState.getStat('carryCapacityCrate');
        return currentLevel >= 5
          ? `Maksimum Kapasite (${apr} 🍑 / ${crt} 📦)`
          : `+3 Kayısı, +1 Kasa (Mevcut: ${apr}/${crt})`;
      }
      case 'harvestSpeed': {
        const pct = Math.round(currentLevel * 15);
        return currentLevel >= 5
          ? `Maksimum Hız (-%${pct} Süre)`
          : `-%15 Silkeleme Süresi (Şu an: -%${pct})`;
      }
      default:
        return '';
    }
  }

  handleBuyUpgrade(upgradeId, rowEl) {
    if (!this.gameStateRef) return;

    const success = this.gameStateRef.purchaseUpgrade(upgradeId);
    if (success) {
      // Visual feedback flash
      if (rowEl) {
        rowEl.classList.remove('upgrade-success-flash');
        // Force reflow
        void rowEl.offsetWidth;
        rowEl.classList.add('upgrade-success-flash');
      }
      this.updateUpgradeRows(this.gameStateRef);
    }
  }

  /**
   * Registers callback for the Discard ("At") action
   * @param {() => void} callback
   */
  onDiscard(callback) {
    this.onDiscardCallback = callback;
  }

  /**
   * Updates audio speaker button icon and tooltip
   * @param {boolean} enabled
   */
  updateAudioButton(enabled) {
    if (this.audioToggleBtn) {
      this.audioToggleBtn.textContent = enabled ? '🔊' : '🔇';
      this.audioToggleBtn.title = enabled ? 'Sesi Kapat' : 'Sesi Aç';
    }
  }

  /**
   * Updates average FPS displayed in Developer Panel
   * @param {number} fps
   */
  setFPS(fps) {
    if (this.devFpsEl && this.isDevPanelOpen()) {
      this.devFpsEl.textContent = Math.round(fps).toString();
    }
  }

  _initPwaInstallBanner() {
    if (!this.pwaBannerEl) return;

    // Check if dismissed or running as standalone PWA
    const isDismissed = localStorage.getItem('kayisi_pwa_dismissed') === '1';
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;

    if (isDismissed || isStandalone) {
      return;
    }

    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isMobile =
      isIOS ||
      /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768;

    if (!isMobile) {
      return;
    }

    if (isIOS) {
      if (this.pwaBannerText) {
        this.pwaBannerText.textContent = 'Ana ekrana eklemek için: Paylaş ➔ Ana Ekrana Ekle seçeneğine dokun.';
      }
      if (this.pwaInstallBtn) {
        this.pwaInstallBtn.style.display = 'none';
      }
      setTimeout(() => {
        if (!localStorage.getItem('kayisi_pwa_prompt_dismissed') && this.pwaBannerEl) {
          this.pwaBannerEl.classList.remove('pwa-banner-hidden');
        }
      }, 2500);
    } else {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
        if (!localStorage.getItem('kayisi_pwa_prompt_dismissed') && this.pwaBannerEl) {
          this.pwaBannerEl.classList.remove('pwa-banner-hidden');
        }
      });

      if (this.pwaInstallBtn) {
        this.pwaInstallBtn.addEventListener('click', async () => {
          if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            try {
              const { outcome } = await this.deferredPrompt.userChoice;
              console.log('[PWA] User choice:', outcome);
            } catch (err) {}
            this.deferredPrompt = null;
          }
          this._dismissPwaBanner();
        });
      }
    }

    if (this.pwaDismissBtn) {
      this.pwaDismissBtn.addEventListener('click', () => {
        this._dismissPwaBanner();
      });
    }
  }

  _dismissPwaBanner() {
    if (this.pwaBannerEl) {
      this.pwaBannerEl.classList.add('pwa-banner-hidden');
      this.pwaBannerEl.style.display = 'none';
    }
    localStorage.setItem('kayisi_pwa_prompt_dismissed', 'true');
  }

  /**
   * Displays temporary warning toast
   * @param {string} message
   */
  showWarning(message) {
    events.emit('warning', { message });

    if (!this.toastEl) return;

    this.toastEl.textContent = message;
    this.toastEl.classList.remove('toast-hidden');

    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }

    this.toastTimer = setTimeout(() => {
      this.toastEl.classList.add('toast-hidden');
      this.toastTimer = null;
    }, 2200);
  }

  /**
   * Updates HUD elements, money, dev panel and discard button visibility
   * @param {import('./Player.js').Player} player
   * @param {import('./State.js').GameState} [gameState]
   */
  update(player, gameState) {
    this.gameStateRef = gameState;
    const currentType = player.getCurrentType();
    const count = player.getCount();
    const capacity = player.getCapacity();
    const isFull = player.isFull();
    const hasItems = count > 0;

    // 1. Update item type icon & label
    if (currentType !== this.lastType) {
      this.lastType = currentType;
      const meta = currentType ? CONFIG.ITEM_LABELS[currentType] : CONFIG.ITEM_LABELS.EMPTY;
      if (this.iconEl) this.iconEl.textContent = meta.icon;
      if (this.labelEl) this.labelEl.textContent = meta.label;
    }

    // 2. Update count & capacity counter
    if (count !== this.lastCount || capacity !== this.lastCapacity) {
      this.lastCount = count;
      this.lastCapacity = capacity;
      if (this.counterEl) {
        if (!currentType) {
          this.counterEl.textContent = '0 / 0';
        } else {
          this.counterEl.textContent = `${count} / ${capacity}`;
        }
      }
    }

    // 3. Toggle "DOLU!" badge
    if (isFull !== this.lastIsFull) {
      this.lastIsFull = isFull;
      if (this.fullBadgeEl) {
        if (isFull) {
          this.fullBadgeEl.classList.remove('badge-hidden');
        } else {
          this.fullBadgeEl.classList.add('badge-hidden');
        }
      }
    }

    // 4. Toggle "At" (Discard) button (visible ONLY when carrying something)
    if (hasItems !== this.lastHasItems) {
      this.lastHasItems = hasItems;
      if (this.discardBtnEl) {
        if (hasItems) {
          this.discardBtnEl.classList.remove('discard-btn-hidden');
        } else {
          this.discardBtnEl.classList.add('discard-btn-hidden');
        }
      }
    }

    // 5. Update Money counter in HUD
    if (gameState && this.moneyEl) {
      const money = gameState.getMoney();
      if (money !== this.lastMoney) {
        this.lastMoney = money;
        this.moneyEl.textContent = money.toLocaleString('tr-TR');
      }
    }

    // 6. Update Developer Panel (if open)
    if (gameState && this.isDevPanelOpen()) {
      if (this.devMoneyRateEl) {
        this.devMoneyRateEl.textContent = `${gameState.getMoneyPerMinute()} 💰/dk`;
      }
      if (this.devTotalCratesEl) {
        this.devTotalCratesEl.textContent = gameState.getTotalCratesSold().toString();
      }
      if (this.devAvgTruckEl) {
        this.devAvgTruckEl.textContent = `${gameState.getAveragePerTruck()} 💰`;
      }
    }

    // 7. Update Upgrade Panel (if open)
    if (gameState && this.isUpgradePanelOpen()) {
      this.updateUpgradeRows(gameState);
    }

    // 8. Update Audio button state
    if (gameState) {
      const soundEnabled = gameState.isSoundEnabled();
      if (soundEnabled !== this.lastSoundEnabled) {
        this.lastSoundEnabled = soundEnabled;
        this.updateAudioButton(soundEnabled);
      }
    }
  }
}
