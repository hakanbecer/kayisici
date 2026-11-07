import { CONFIG } from '../config.js';
import { state } from './State.js';
import { events } from './Events.js';

/**
 * Web Audio API synthesized sound effects manager.
 * Strict rules:
 * - NO external sound files (.mp3, .wav)
 * - AudioContext created/resumed on first user gesture
 * - Rate limited for rapid harvest actions
 * - Toggled via state.isSoundEnabled()
 */
export class AudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.lastCollectTime = 0;
    this.initialized = false;

    // Set up user interaction listeners
    this._setupUserGestureListener();

    // Wire event bus listeners
    this._bindEvents();
  }

  _setupUserGestureListener() {
    const resume = () => {
      this._ensureContext();
      window.removeEventListener('pointerdown', resume);
      window.removeEventListener('keydown', resume);
      window.removeEventListener('touchstart', resume);
      window.removeEventListener('click', resume);
    };

    window.addEventListener('pointerdown', resume, { once: true });
    window.addEventListener('keydown', resume, { once: true });
    window.addEventListener('touchstart', resume, { once: true });
    window.addEventListener('click', resume, { once: true });
  }

  _ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        try {
          this.ctx = new AudioCtx();
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(0.22, this.ctx.currentTime);
          this.masterGain.connect(this.ctx.destination);
          this.initialized = true;
        } catch (e) {
          console.warn('AudioContext initialization failed:', e);
        }
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  _canPlay() {
    if (!state.isSoundEnabled()) return false;
    if (!this.ctx) {
      this._ensureContext();
    }
    return this.ctx && this.ctx.state === 'running';
  }

  _bindEvents() {
    events.on('apricot_collected', () => this.playCollect());
    events.on('crate_made', () => this.playCrateMade());
    events.on('station_ready', () => this.playStationReady());
    events.on('sold', () => this.playSold());
    events.on('upgrade_bought', () => this.playUpgrade());
    events.on('warning', () => this.playWarning());
  }

  /**
   * Short pleasant "pop / tick" sound for collecting apricots.
   * Throttled to prevent audio clipping during rapid harvesting.
   */
  playCollect() {
    const now = performance.now() / 1000;
    const minInterval = (CONFIG.AUDIO && CONFIG.AUDIO.MIN_COLLECT_INTERVAL) || 0.125;
    if (now - this.lastCollectTime < minInterval) {
      return;
    }
    this.lastCollectTime = now;

    if (!this._canPlay()) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, t);
      osc.frequency.exponentialRampToValueAtTime(750, t + 0.05);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.06);
    } catch (e) {}
  }

  /**
   * Low wood/thump impact for crate assembled.
   */
  playCrateMade() {
    if (!this._canPlay()) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, t);
      osc.frequency.exponentialRampToValueAtTime(55, t + 0.12);

      gain.gain.setValueAtTime(0.32, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.14);
    } catch (e) {}
  }

  /**
   * Bright cheerful ding/bell for station ready.
   */
  playStationReady() {
    if (!this._canPlay()) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, t); // A5
      osc.frequency.exponentialRampToValueAtTime(1320, t + 0.04);

      gain.gain.setValueAtTime(0.24, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.32);
    } catch (e) {}
  }

  /**
   * Ascending coin chime / arpeggio for sale completion.
   */
  playSold() {
    if (!this._canPlay()) return;

    try {
      const notes = [987.77, 1318.51, 1760.0]; // B5, E6, A6
      const baseTime = this.ctx.currentTime;

      notes.forEach((freq, i) => {
        const t = baseTime + i * 0.08;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.22, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 0.22);
      });
    } catch (e) {}
  }

  /**
   * Celebratory ascending fanfare for upgrade purchase.
   */
  playUpgrade() {
    if (!this._canPlay()) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const baseTime = this.ctx.currentTime;

      notes.forEach((freq, i) => {
        const t = baseTime + i * 0.07;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.28, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.26);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 0.26);
      });
    } catch (e) {}
  }

  /**
   * Low buzz / soft warning tone.
   */
  playWarning() {
    if (!this._canPlay()) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, t);
      osc.frequency.exponentialRampToValueAtTime(95, t + 0.14);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.15);
    } catch (e) {}
  }
}

export const audio = new AudioManager();
