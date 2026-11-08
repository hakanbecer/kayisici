/**
 * Sliding window metrics tracker for Dev Panel.
 * Tracks current, initial, and 10-minute rolling peak values.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

class SingleMetric {
  constructor(name, unit = '') {
    this.name = name;
    this.unit = unit;
    this.initial = null;
    this.current = 0;
    this.samples = []; // { t: number, v: number }
  }

  record(val, now = performance.now()) {
    this.current = val;
    if (this.initial === null) {
      this.initial = val;
    }

    this.samples.push({ t: now, v: val });

    // Purge samples older than 10 minutes
    const cutoff = now - WINDOW_MS;
    while (this.samples.length > 0 && this.samples[0].t < cutoff) {
      this.samples.shift();
    }
  }

  getPeak() {
    let max = this.initial !== null ? this.initial : 0;
    for (let i = 0; i < this.samples.length; i++) {
      if (this.samples[i].v > max) {
        max = this.samples[i].v;
      }
    }
    return max;
  }

  format() {
    if (this.initial === null && this.current === 0) {
      return 'N/A';
    }
    const cur = this.current.toLocaleString('tr-TR');
    const init = (this.initial !== null ? this.initial : 0).toLocaleString('tr-TR');
    const peak = this.getPeak().toLocaleString('tr-TR');
    const u = this.unit ? ` ${this.unit}` : '';
    return `${cur}${u} (Baş: ${init} | Tepe: ${peak})`;
  }
}

export class MetricsTracker {
  constructor() {
    this.metrics = {
      geometries: new SingleMetric('Geometriler'),
      textures: new SingleMetric('Dokular'),
      calls: new SingleMetric('Draw Calls'),
      triangles: new SingleMetric('Üçgenler'),
      sceneObjects: new SingleMetric('Sahne Nesneleri'),
      domNodes: new SingleMetric('DOM Elemanları'),
      particles: new SingleMetric('Aktif Parçacıklar'),
      heap: new SingleMetric('JS Heap', 'MB'),
      audioNodes: new SingleMetric('WebAudio Düğümleri')
    };

    this.fps60Samples = []; // { t: number, fps: number }
    this.audioState = 'başlatılmadı';
    this.audioTotalCreated = 0;

    this.lastSampleTime = 0;
    this.sampleInterval = 500; // sample every 500ms
  }

  update({ renderer, scene, particles, audio, fps }) {
    const now = performance.now();
    if (now - this.lastSampleTime < this.sampleInterval) return;
    this.lastSampleTime = now;

    // 1. Renderer memory info
    if (renderer && renderer.info && renderer.info.memory) {
      this.metrics.geometries.record(renderer.info.memory.geometries, now);
      this.metrics.textures.record(renderer.info.memory.textures, now);
    }

    // 2. Renderer render info
    if (renderer && renderer.info && renderer.info.render) {
      this.metrics.calls.record(renderer.info.render.calls, now);
      this.metrics.triangles.record(renderer.info.render.triangles, now);
    }

    // 3. Scene objects count
    if (scene) {
      let sceneCount = 0;
      scene.traverse(() => { sceneCount++; });
      this.metrics.sceneObjects.record(sceneCount, now);
    }

    // 4. DOM elements count
    const domCount = document.querySelectorAll('*').length;
    this.metrics.domNodes.record(domCount, now);

    // 5. Active particles count
    if (particles && typeof particles.getActiveCount === 'function') {
      this.metrics.particles.record(particles.getActiveCount(), now);
    }

    // 6. JS Heap (MB) if performance.memory supported
    if (window.performance && window.performance.memory && typeof window.performance.memory.usedJSHeapSize === 'number') {
      const heapMb = Math.round((window.performance.memory.usedJSHeapSize / (1024 * 1024)) * 10) / 10;
      this.metrics.heap.record(heapMb, now);
    }

    // 7. WebAudio tracking
    if (audio && typeof audio.getAudioStats === 'function') {
      const stats = audio.getAudioStats();
      this.audioState = stats.state;
      this.audioTotalCreated = stats.totalNodes;
      this.metrics.audioNodes.record(stats.activeNodes, now);
    }

    // 8. 60-second sliding window FPS tracking
    if (typeof fps === 'number' && fps > 0) {
      this.fps60Samples.push({ t: now, fps });
      const cutoff60 = now - 60000;
      while (this.fps60Samples.length > 0 && this.fps60Samples[0].t < cutoff60) {
        this.fps60Samples.shift();
      }
    }
  }

  getFps60Stats() {
    if (this.fps60Samples.length === 0) {
      return { avg: 60, min: 60, formatted: 'Hesaplanıyor...' };
    }
    let sum = 0;
    let min = 999;
    for (let i = 0; i < this.fps60Samples.length; i++) {
      const f = this.fps60Samples[i].fps;
      sum += f;
      if (f < min) min = f;
    }
    const avg = Math.round(sum / this.fps60Samples.length);
    const minVal = min === 999 ? avg : min;
    return {
      avg,
      min: minVal,
      formatted: `Ort: ${avg} | En Düşük: ${minVal}`
    };
  }

  getAudioFormatted() {
    const activeMetric = this.metrics.audioNodes;
    const active = activeMetric.current;
    const peak = activeMetric.getPeak();
    return `Aktif: ${active} (Tepe: ${peak}) | Top: ${this.audioTotalCreated} [${this.audioState}]`;
  }

  getSnapshot() {
    const snapshot = {};
    for (const [key, metric] of Object.entries(this.metrics)) {
      snapshot[key] = {
        current: metric.current,
        initial: metric.initial,
        peak: metric.getPeak(),
        formatted: metric.format()
      };
    }
    snapshot.fps60 = this.getFps60Stats();
    snapshot.audioStats = {
      formatted: this.getAudioFormatted()
    };
    return snapshot;
  }
}

export const metricsTracker = new MetricsTracker();
