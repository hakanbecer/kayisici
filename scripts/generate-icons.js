import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function generateIcons() {
  console.log('--- Generating PWA Icons via Canvas ---');

  const iconsDir = path.resolve('public/icons');
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('about:blank');

  const configs = [
    { name: 'icon-192.png', size: 192, maskable: false },
    { name: 'icon-512.png', size: 512, maskable: false },
    { name: 'icon-maskable-192.png', size: 192, maskable: true },
    { name: 'icon-maskable-512.png', size: 512, maskable: true },
    { name: '../apple-touch-icon.png', size: 180, maskable: true },
    { name: '../favicon.png', size: 64, maskable: false }
  ];

  for (const cfg of configs) {
    const dataUrl = await page.evaluate(({ size, maskable }) => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      const s = size;
      ctx.clearRect(0, 0, s, s);

      // Background for maskable icons (theme color)
      if (maskable) {
        ctx.fillStyle = '#7ab85d';
        ctx.fillRect(0, 0, s, s);
      }

      // Safe zone scaling: maskable requires content within 80% circle
      const scale = maskable ? 0.72 : 0.88;
      ctx.save();
      ctx.translate(s / 2, s / 2);
      ctx.scale(scale, scale);
      ctx.translate(-s / 2, -s / 2);

      const cx = s * 0.5;
      const cy = s * 0.55;
      const r = s * 0.38;

      // Drop shadow for 3D depth
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.22)';
      ctx.shadowBlur = s * 0.06;
      ctx.shadowOffsetY = s * 0.03;

      // Base Apricot shape (Two overlapping spheres for natural cleft)
      const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r * 1.2);
      grad.addColorStop(0, '#ffd32a');
      grad.addColorStop(0.35, '#ff9f1a');
      grad.addColorStop(0.8, '#ff5e57');
      grad.addColorStop(1, '#e55039');

      ctx.fillStyle = grad;
      ctx.beginPath();
      // Left cheek
      ctx.arc(cx - r * 0.28, cy, r * 0.86, Math.PI * 0.4, Math.PI * 1.8);
      // Right cheek
      ctx.arc(cx + r * 0.28, cy, r * 0.86, Math.PI * 1.2, Math.PI * 0.6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Cleft line in the center
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy - r * 0.8);
      ctx.quadraticCurveTo(cx - r * 0.08, cy, cx, cy + r * 0.85);
      ctx.strokeStyle = 'rgba(180, 40, 20, 0.35)';
      ctx.lineWidth = s * 0.022;
      ctx.stroke();
      ctx.restore();

      // Top soft highlight (glossy sheen)
      ctx.save();
      const highlightGrad = ctx.createRadialGradient(cx - r * 0.4, cy - r * 0.4, 0, cx - r * 0.4, cy - r * 0.4, r * 0.4);
      highlightGrad.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
      highlightGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = highlightGrad;
      ctx.beginPath();
      ctx.ellipse(cx - r * 0.38, cy - r * 0.38, r * 0.35, r * 0.22, -Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Stem (small wood curve)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy - r * 0.78);
      ctx.quadraticCurveTo(cx + s * 0.04, cy - r * 1.15, cx + s * 0.08, cy - r * 1.25);
      ctx.strokeStyle = '#574b32';
      ctx.lineWidth = s * 0.045;
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.restore();

      // Leaf (fresh green leaf on the right)
      ctx.save();
      ctx.beginPath();
      const leafX = cx + s * 0.03;
      const leafY = cy - r * 0.95;
      ctx.moveTo(leafX, leafY);
      ctx.quadraticCurveTo(leafX + s * 0.22, leafY - s * 0.14, leafX + s * 0.26, leafY + s * 0.02);
      ctx.quadraticCurveTo(leafX + s * 0.12, leafY + s * 0.12, leafX, leafY);
      const leafGrad = ctx.createLinearGradient(leafX, leafY, leafX + s * 0.26, leafY + s * 0.02);
      leafGrad.addColorStop(0, '#2ed573');
      leafGrad.addColorStop(1, '#10ac84');
      ctx.fillStyle = leafGrad;
      ctx.fill();

      // Leaf central vein
      ctx.beginPath();
      ctx.moveTo(leafX, leafY);
      ctx.quadraticCurveTo(leafX + s * 0.13, leafY - s * 0.02, leafX + s * 0.25, leafY + s * 0.02);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = s * 0.012;
      ctx.stroke();
      ctx.restore();

      ctx.restore(); // end scale
      return canvas.toDataURL('image/png');
    }, cfg);

    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
    const outPath = path.resolve('public/icons', cfg.name);
    fs.writeFileSync(outPath, base64Data, 'base64');
    console.log(`✓ Generated ${cfg.name} (${cfg.size}x${cfg.size})`);
  }

  await browser.close();
  console.log('--- All icons generated successfully! ---\n');
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
