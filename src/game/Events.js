import { CONFIG } from '../config.js';

/**
 * Simple pub/sub event bus for "Kayısı Hasadı".
 * Decouples core game systems (World, Station, SalesStand, Player)
 * from reactive presentation systems (Audio, Tutorial, Particles).
 */
export class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  /**
   * Subscribes a handler to an event name.
   * @param {string} event
   * @param {(data: any) => void} handler
   * @returns {() => void} Unsubscribe function
   */
  on(event, handler) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(handler);
    return () => this.off(event, handler);
  }

  /**
   * Unsubscribes a handler from an event name.
   * @param {string} event
   * @param {(data: any) => void} handler
   */
  off(event, handler) {
    const set = this.listeners.get(event);
    if (set) {
      set.delete(handler);
      if (set.size === 0) {
        this.listeners.delete(event);
      }
    }
  }

  /**
   * Emits an event with optional payload data.
   * @param {string} event
   * @param {any} [data]
   */
  emit(event, data) {
    if (CONFIG && CONFIG.DEV_MODE) {
      console.log(`[Event Emit] ${event}:`, data !== undefined ? data : null);
    }
    const set = this.listeners.get(event);
    if (set) {
      set.forEach((handler) => {
        try {
          handler(data);
        } catch (err) {
          console.error(`Error in event listener for "${event}":`, err);
        }
      });
    }
  }
}

// Singleton event bus instance
export const events = new EventEmitter();
