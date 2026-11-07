import { registerSW } from 'virtual:pwa-register';

/**
 * Initializes PWA Service Worker with prompt-based update flow.
 * Rules:
 * - registerType: 'prompt'
 * - Displays "Yeni sürüm hazır, yenile" toast when an update is found
 * - NEVER forces automatic reload during active gameplay
 */
export function initPWA() {
  const updatePromptEl = document.getElementById('pwa-update-prompt');
  const reloadBtn = document.getElementById('pwa-reload-btn');

  const updateSW = registerSW({
    onNeedRefresh() {
      if (updatePromptEl) {
        updatePromptEl.classList.remove('pwa-prompt-hidden');
      }
    },
    onOfflineReady() {
      console.log('[PWA] Çevrimdışı çalışmaya hazır.');
    }
  });

  if (reloadBtn) {
    reloadBtn.addEventListener('click', () => {
      updateSW(true);
    });
  }
}
