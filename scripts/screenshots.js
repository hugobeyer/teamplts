/**
 * screenshots.js — Take screenshots of the component gallery
 *
 * Usage:  node scripts/screenshots.js
 * Deps:   npm install puppeteer
 *
 * What it does:
 *   1. Launches the gallery.html in a headless browser
 *   2. Takes a full-page screenshot → site/assets/screenshots/gallery-full.png
 *   3. Takes individual screenshots of the first 20 components
 *   4. Saves them to site/assets/screenshots/
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'site', 'assets', 'screenshots');

// The gallery HTML to screenshot — adjust path as needed
const GALLERY_URL = 'file://' + path.join(ROOT, 'compact-saas-component-gallery.html');

// Ensure output directory exists
fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  console.log('▶ Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Set a generous viewport
  await page.setViewport({ width: 1440, height: 900 });

  console.log(`▶ Navigating to ${GALLERY_URL}...`);
  await page.goto(GALLERY_URL, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait for the gallery to render
  await page.waitForSelector('.gallery', { timeout: 10000 });
  // Give a little extra time for Lucide icons and custom elements to paint
  await new Promise(r => setTimeout(r, 2000));

  // ── 1. Full-page screenshot ───────────────────────────────────────────
  console.log('▶ Taking full-page screenshot...');
  await page.screenshot({
    path: path.join(OUT_DIR, 'gallery-full.png'),
    fullPage: true,
  });
  console.log('  ✓ gallery-full.png');

  // ── 2. Individual component screenshots (first 20) ────────────────────
  console.log('▶ Capturing individual components...');
  const cards = await page.$$('.doc-card');

  const limit = Math.min(cards.length, 20);
  for (let i = 0; i < limit; i++) {
    const card = cards[i];

    // Get the component name from the title
    const titleEl = await card.$('.doc-title');
    let name = `component-${i + 1}`;
    if (titleEl) {
      const raw = await page.evaluate(el => el.textContent, titleEl);
      // Sanitize: lowercase, replace non-alphanumeric with dash
      name = raw
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        || `component-${i + 1}`;
    }

    const filePath = path.join(OUT_DIR, `${name}.png`);
    await card.screenshot({ path: filePath });
    console.log(`  ✓ [${i + 1}/${limit}] ${name}.png`);
  }

  console.log(`\n✓ Done — ${limit + 1} screenshots saved to site/assets/screenshots/`);
  await browser.close();
})().catch(err => {
  console.error('Screenshot script failed:', err);
  process.exit(1);
});
