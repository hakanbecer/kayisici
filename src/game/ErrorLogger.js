import { CONFIG } from '../config.js';

const STORAGE_KEY = 'kayisi_errlog';
const MAX_LOGS = 20;

class ErrorLogger {
  constructor() {
    this.fpsProvider = () => 60;
    this.timeScaleProvider = () => 1;
    this.isContextLost = false;
    this._initGlobalHandlers();
  }

  setProviders({ getFPS, getTimeScale }) {
    if (getFPS) this.fpsProvider = getFPS;
    if (getTimeScale) this.timeScaleProvider = getTimeScale;
  }

  _initGlobalHandlers() {
    window.addEventListener('error', (event) => {
      this.log({
        type: 'onerror',
        message: event.message || 'Unknown window error',
        stack: event.error ? event.error.stack : null,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      const reason = event.reason;
      this.log({
        type: 'unhandledrejection',
        message: reason instanceof Error ? reason.message : String(reason),
        stack: reason instanceof Error ? reason.stack : null
      });
    });
  }

  attachWebGLContext(canvas) {
    if (!canvas) return;

    canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault(); // Required to allow WebGL context recovery
      this.isContextLost = true;

      this.log({
        type: 'webglcontextlost',
        message: 'WebGL context lost (GPU crash or memory pressure). Render loop halted.'
      });
      console.error('[WebGL] Context lost! Loop halted.');
    });

    canvas.addEventListener('webglcontextrestored', () => {
      this.log({
        type: 'webglcontextrestored',
        message: 'WebGL context restored. Reloading page...'
      });
      console.warn('[WebGL] Context restored! Reloading application...');
      window.location.reload();
    });
  }

  log(data) {
    try {
      const entry = {
        timestamp: new Date().toISOString(),
        appVersion: CONFIG.APP_VERSION || '1.0.0',
        userAgent: navigator.userAgent,
        lastFps: this.fpsProvider(),
        timeScale: this.timeScaleProvider(),
        ...data
      };

      const logs = this.getLogs();
      logs.push(entry);

      while (logs.length > MAX_LOGS) {
        logs.shift();
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
    } catch (err) {
      console.error('[ErrorLogger] Failed to write error to localStorage:', err);
    }
  }

  getLogs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  getLogCount() {
    return this.getLogs().length;
  }

  async copyLogsToClipboard() {
    const logs = this.getLogs();
    const formatted = JSON.stringify(logs, null, 2);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(formatted);
    } else {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = formatted;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    return logs.length;
  }
}

export const errorLogger = new ErrorLogger();
