import { CONFIG } from '../config.js';
import { events } from './Events.js';

/**
 * Central State management for "Kayısı Hasadı".
 * Single source of truth for:
 * - Currency (money)
 * - Upgrades (levels, costs, stat calculations)
 * - Economy tracking metrics (sales history, rates)
 * - Tutorial progress & sound settings
 * - LocalStorage save/load system
 */
export class GameState {
  constructor() {
    this.money = 0; // Integer currency
    this.totalCratesSold = 0;
    this.totalTrucksServed = 0;
    this.salesHistory = []; // { timestamp: number, amount: number, crates: number }

    // Tutorial & Sound states
    this.tutorialDone = false;
    this.soundEnabled = true;

    // Initialize upgrade levels
    this.upgrades = {};
    this.resetUpgrades();

    // Callbacks for upgrade changes
    this.upgradeCallbacks = [];

    // Attempt to load from storage
    this.load();
  }

  /**
   * Resets upgrade levels to 0
   */
  resetUpgrades() {
    if (CONFIG.UPGRADES) {
      Object.keys(CONFIG.UPGRADES).forEach((key) => {
        const def = CONFIG.UPGRADES[key];
        this.upgrades[def.ID] = 0;
      });
    }
  }

  /**
   * Returns current money balance
   * @returns {number}
   */
  getMoney() {
    return this.money;
  }

  /**
   * Adds earnings from crate sales
   * @param {number} amount
   * @param {number} crateCount
   */
  addMoney(amount, crateCount = 0) {
    const intAmount = Math.max(0, Math.round(amount));
    this.money += intAmount;
    this.totalCratesSold += crateCount;
    this.totalTrucksServed += 1;

    this.salesHistory.push({
      timestamp: performance.now(),
      amount: intAmount,
      crates: crateCount
    });

    // Prune history older than 5 minutes to avoid memory growth
    const cutoff = performance.now() - 300000;
    this.salesHistory = this.salesHistory.filter((entry) => entry.timestamp >= cutoff);

    // Save on money addition
    this.save();
  }

  /**
   * Calculates earnings over the last 60 seconds (money per minute)
   * @returns {number}
   */
  getMoneyPerMinute() {
    const windowStart = performance.now() - 60000;
    return this.salesHistory
      .filter((entry) => entry.timestamp >= windowStart)
      .reduce((sum, entry) => sum + entry.amount, 0);
  }

  /**
   * Calculates average money earned per truck
   * @returns {number}
   */
  getAveragePerTruck() {
    if (this.totalTrucksServed === 0) return 0;
    const totalEarnings = this.salesHistory.reduce((sum, e) => sum + e.amount, 0);
    return Math.round(totalEarnings / this.totalTrucksServed);
  }

  /**
   * Total crates sold
   * @returns {number}
   */
  getTotalCratesSold() {
    return this.totalCratesSold;
  }

  /**
   * Total trucks served
   * @returns {number}
   */
  getTotalTrucksServed() {
    return this.totalTrucksServed;
  }

  // -------------------------------------------------------------
  // UPGRADES & STATS ENGINE
  // -------------------------------------------------------------

  /**
   * Returns definition of an upgrade by its ID
   * @param {string} upgradeId
   */
  getUpgradeDefinition(upgradeId) {
    if (!CONFIG.UPGRADES) return null;
    return (
      Object.values(CONFIG.UPGRADES).find((u) => u.ID === upgradeId) || null
    );
  }

  /**
   * Returns current level of an upgrade
   * @param {string} upgradeId
   * @returns {number}
   */
  getUpgradeLevel(upgradeId) {
    return this.upgrades[upgradeId] || 0;
  }

  /**
   * Returns total count of all upgrade levels purchased
   * @returns {number}
   */
  getTotalUpgradesCount() {
    return Object.values(this.upgrades).reduce((sum, lvl) => sum + (lvl || 0), 0);
  }

  /**
   * Calculates next purchase cost for an upgrade
   * Formula: round(baseCost * costMultiplier^level)
   * @param {string} upgradeId
   * @returns {number | null} Cost in gold, or null if maxed/invalid
   */
  getUpgradeCost(upgradeId) {
    const def = this.getUpgradeDefinition(upgradeId);
    if (!def) return null;

    const level = this.getUpgradeLevel(upgradeId);
    if (level >= def.MAX_LEVEL) {
      return null; // Already maxed
    }

    return Math.round(def.BASE_COST * Math.pow(def.COST_MULTIPLIER, level));
  }

  /**
   * Checks whether player can afford the next upgrade level
   * @param {string} upgradeId
   * @returns {boolean}
   */
  canAffordUpgrade(upgradeId) {
    const cost = this.getUpgradeCost(upgradeId);
    return cost !== null && this.money >= cost;
  }

  /**
   * Checks whether an upgrade has reached max level
   * @param {string} upgradeId
   * @returns {boolean}
   */
  isUpgradeMaxed(upgradeId) {
    const def = this.getUpgradeDefinition(upgradeId);
    if (!def) return false;
    return this.getUpgradeLevel(upgradeId) >= def.MAX_LEVEL;
  }

  /**
   * Attempts to purchase next level of an upgrade
   * @param {string} upgradeId
   * @returns {boolean} true if purchased successfully
   */
  purchaseUpgrade(upgradeId) {
    const def = this.getUpgradeDefinition(upgradeId);
    if (!def) return false;

    const cost = this.getUpgradeCost(upgradeId);
    if (cost === null || this.money < cost) {
      return false;
    }

    this.money -= cost;
    this.upgrades[upgradeId] = (this.upgrades[upgradeId] || 0) + 1;

    // Persist immediately
    this.save();

    // Notify listeners
    this._notifyUpgradeChanged(upgradeId, this.upgrades[upgradeId]);

    // Emit event for tutorial, audio, and particles
    events.emit('upgrade_bought', { upgradeId, level: this.upgrades[upgradeId] });
    return true;
  }

  isTutorialDone() {
    return this.tutorialDone;
  }

  setTutorialDone(done = true) {
    this.tutorialDone = done;
    this.save();
  }

  isSoundEnabled() {
    return this.soundEnabled;
  }

  setSoundEnabled(enabled = true) {
    this.soundEnabled = enabled;
    this.save();
  }

  /**
   * Subscribes a listener to upgrade changes
   * @param {(upgradeId: string, level: number) => void} callback
   */
  onUpgradeChanged(callback) {
    this.upgradeCallbacks.push(callback);
  }

  _notifyUpgradeChanged(upgradeId, level) {
    this.upgradeCallbacks.forEach((cb) => {
      try {
        cb(upgradeId, level);
      } catch (err) {
        console.error('Error in upgrade callback:', err);
      }
    });
  }

  /**
   * Core stats calculation method. Game systems call this instead of checking levels directly.
   * @param {'walkSpeed' | 'carryCapacityApricot' | 'carryCapacityCrate' | 'tentSlots' | 'standStillTime'} statName
   * @returns {number}
   */
  getStat(statName) {
    switch (statName) {
      case 'walkSpeed': {
        const lvl = this.upgrades.walkSpeed || 0;
        const bonus = lvl * CONFIG.UPGRADES.WALK_SPEED.MULTIPLIER_PER_LEVEL;
        return CONFIG.PLAYER.SPEED * (1 + bonus);
      }

      case 'carryCapacityApricot': {
        const lvl = this.upgrades.carryCapacity || 0;
        const bonus = lvl * CONFIG.UPGRADES.CARRY_CAPACITY.APRICOT_BONUS_PER_LEVEL;
        return CONFIG.CAPACITIES.apricot + bonus;
      }

      case 'carryCapacityCrate': {
        const lvl = this.upgrades.carryCapacity || 0;
        const bonus = lvl * CONFIG.UPGRADES.CARRY_CAPACITY.CRATE_BONUS_PER_LEVEL;
        return CONFIG.CAPACITIES.crate_fresh + bonus;
      }

      case 'tentSlots': {
        const lvl = this.upgrades.tentCapacity || 0;
        const bonus = lvl * CONFIG.UPGRADES.TENT_CAPACITY.BONUS_PER_LEVEL;
        return CONFIG.STATIONS.SULFUR_TENT.SLOT_COUNT + bonus;
      }

      case 'standStillTime': {
        const lvl = this.upgrades.harvestSpeed || 0;
        const reduction = lvl * CONFIG.UPGRADES.HARVEST_SPEED.REDUCTION_PER_LEVEL;
        return CONFIG.HARVEST.STAND_STILL_TIME * Math.max(0.1, 1 - reduction);
      }

      default:
        return 0;
    }
  }

  /**
   * Developer Tool: Sets all upgrades to their maximum level (5).
   */
  maxAllUpgrades() {
    if (CONFIG.UPGRADES) {
      Object.values(CONFIG.UPGRADES).forEach((def) => {
        this.upgrades[def.ID] = def.MAX_LEVEL;
      });
    }
    this.save();
    this._notifyUpgradeChanged('*', 5);
  }

  // -------------------------------------------------------------
  // LOCALSTORAGE PERSISTENCE
  // -------------------------------------------------------------

  /**
   * Saves game state to localStorage
   */
  save() {
    if (this._saveDisabled) return;
    try {
      const payload = {
        version: CONFIG.STORAGE.VERSION,
        money: this.money,
        upgrades: this.upgrades,
        tutorialDone: this.tutorialDone,
        soundEnabled: this.soundEnabled,
        savedAt: Date.now()
      };
      localStorage.setItem(CONFIG.STORAGE.KEY, JSON.stringify(payload));
    } catch (err) {
      console.warn('Failed to save game state to localStorage:', err);
    }
  }

  /**
   * Loads and validates game state from localStorage.
   * If save is Version 1: migrates to Version 2 while preserving money and upgrades.
   * If save data is invalid or corrupt: gracefully resets to clean state without throwing.
   * @returns {boolean} true if a valid save was restored
   */
  load() {
    try {
      const raw = localStorage.getItem(CONFIG.STORAGE.KEY);
      if (!raw) return false;

      const data = JSON.parse(raw);
      if (!data || typeof data !== 'object') {
        this._handleCorruptSave('Save is not an object');
        return false;
      }

      // 1. Version check: supports version 1 (with automatic migration) and version 2
      if (data.version !== 1 && data.version !== 2) {
        this._handleCorruptSave(`Version mismatch: expected 1 or 2, got ${data.version}`);
        return false;
      }

      // 2. Validate money (must be a valid non-negative number)
      if (typeof data.money !== 'number' || isNaN(data.money) || data.money < 0) {
        this._handleCorruptSave('Invalid money value');
        return false;
      }

      // 3. Validate upgrades
      if (!data.upgrades || typeof data.upgrades !== 'object') {
        this._handleCorruptSave('Invalid upgrades object');
        return false;
      }

      // Verify each known upgrade
      const validatedUpgrades = {};
      for (const key of Object.keys(CONFIG.UPGRADES)) {
        const def = CONFIG.UPGRADES[key];
        const lvl = data.upgrades[def.ID];
        if (typeof lvl !== 'number' || isNaN(lvl) || lvl < 0 || lvl > def.MAX_LEVEL) {
          this._handleCorruptSave(`Invalid level for upgrade ${def.ID}: ${lvl}`);
          return false;
        }
        validatedUpgrades[def.ID] = Math.floor(lvl);
      }

      // All validations passed! Apply loaded state
      this.money = Math.round(data.money);
      this.upgrades = validatedUpgrades;
      this.tutorialDone = typeof data.tutorialDone === 'boolean' ? data.tutorialDone : false;
      this.soundEnabled = typeof data.soundEnabled === 'boolean' ? data.soundEnabled : true;

      // If loaded from version 1, migrate and persist immediately as version 2
      if (data.version === 1) {
        console.log('[Save System] Successfully migrated save from version 1 to 2.');
        this.save();
      }

      return true;
    } catch (err) {
      this._handleCorruptSave(`JSON parse or read error: ${err.message}`);
      return false;
    }
  }

  _handleCorruptSave(reason) {
    console.warn(`[Save System] Resilient fallback: ${reason}. Starting fresh.`);
    this.money = 0;
    this.resetUpgrades();
    this.tutorialDone = false;
    this.soundEnabled = true;
    try {
      localStorage.removeItem(CONFIG.STORAGE.KEY);
    } catch (e) {
      // Ignore
    }
  }

  /**
   * Clears saved game and resets state to zero
   */
  resetSave() {
    try {
      localStorage.removeItem(CONFIG.STORAGE.KEY);
    } catch (e) {
      // Ignore
    }
    this.money = 0;
    this.totalCratesSold = 0;
    this.totalTrucksServed = 0;
    this.salesHistory = [];
    this.tutorialDone = false;
    this.soundEnabled = true;
    this.resetUpgrades();
    this._notifyUpgradeChanged('*', 0);
  }
}

// Singleton state instance
export const state = new GameState();
