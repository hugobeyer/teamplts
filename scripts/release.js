/**
 * release.js — Compact SaaS Components release pipeline
 *
 * 1. Runs build.js
 * 2. Creates a versioned zip of dist/pro/
 * 3. Prints release checklist (npm publish, Gumroad upload, Vercel deploy)
 *
 * Usage:  node scripts/release.js [version]
 *   e.g.  node scripts/release.js 1.0.0
 *
 * Deps:   npm install archiver  (for zip creation)
 *
 * Secrets / API keys needed (set as env vars):
 *   GUMROAD_ACCESS_TOKEN  — for Gumroad product upload
 *   NPM_TOKEN             — for npm publish
 *   VERCEL_TOKEN          — for Vercel deploy
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// Parse version
// ---------------------------------------------------------------------------
const VERSION = process.argv[2];
if (!VERSION) {
  console.error("Usage: node scripts/release.js <version>");
  console.error("  e.g.  node scripts/release.js 1.0.0");
  process.exit(1);
}

// Validate semver-ish
if (!/^\d+\.\d+\.\d+/.test(VERSION)) {
  console.error("ERROR: version must be semver-like, e.g. 1.0.0");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Step 0 — Update version in package.json if it exists
// ---------------------------------------------------------------------------
const pkgPath = path.join(ROOT, "package.json");
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.version = VERSION;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
  console.log(`✓ Updated package.json version → ${VERSION}`);
}

// ---------------------------------------------------------------------------
// Step 1 — Run build.js
// ---------------------------------------------------------------------------
console.log("\n▶ Running build.js...");
execSync("node scripts/build.js", { cwd: ROOT, stdio: "inherit" });

// ---------------------------------------------------------------------------
// Step 2 — Create versioned zip of dist/pro/
// ---------------------------------------------------------------------------
const zipName = `saasblocks-pro-v${VERSION}.zip`;
const zipPath = path.join(ROOT, "dist", "pro", zipName);

// Create zip using platform-native commands (no archiver dependency needed)
console.log(`\n▶ Creating ${zipName}...`);
const proDir = path.join(ROOT, "dist", "pro");
if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

try {
  if (process.platform === 'win32') {
    execSync(`powershell -NoProfile -Command "Compress-Archive -Path '${proDir}\\*' -DestinationPath '${zipPath}' -Force"`, { stdio: 'pipe' });
  } else {
    execSync(`cd "${proDir}" && zip -r "${zipName}" . -x "*.zip"`, { stdio: 'pipe' });
  }
  const zipSize = (fs.statSync(zipPath).size / 1024).toFixed(1);
  console.log(`✓ ${zipName}  (${zipSize} KB)`);
  console.log(`  Location: dist/pro/${zipName}`);
} catch (err) {
  console.error('Zip failed:', err.message);
  console.warn('⚠  Manually compress dist/pro/ (excluding .zip files)');
}

// ---------------------------------------------------------------------------
// Step 3 — Release checklist
// ---------------------------------------------------------------------------
console.log("\n──────────────────────────────────────────");
console.log("  RELEASE CHECKLIST");
console.log("──────────────────────────────────────────");
console.log("");
console.log("  [ ] 1. npm publish");
console.log("         cd dist/pro");
console.log("         npm publish --access public");
console.log("         (Set NPM_TOKEN env var for CI/CD)");
console.log("");
console.log("  [ ] 2. Gumroad upload");
console.log("         Upload dist/pro/" + zipName);
console.log("         Product: Compact SaaS Components — Pro");
console.log("         Price: $149 (one-time)");
console.log("");
console.log("         To automate via Gumroad API:");
console.log("         curl -X PUT \\");
console.log('           -H "Authorization: Bearer $GUMROAD_ACCESS_TOKEN" \\');
console.log('           -F "product[file]=@dist/pro/' + zipName + '" \\');
console.log("           https://api.gumroad.com/v2/products/PRODUCT_ID");
console.log("");
console.log("  [ ] 3. Vercel deploy");
console.log("         vercel --prod");
console.log("         (Set VERCEL_TOKEN + VERCEL_ORG_ID + VERCEL_PROJECT_ID)");
console.log("");
console.log("  [ ] 4. Update unpkg/CDN version references in site/index.html");
console.log("");
console.log("──────────────────────────────────────────");

// ---------------------------------------------------------------------------
// Placeholder: automated API calls
// ---------------------------------------------------------------------------
// Uncomment and configure these sections when you have the API keys:

/*
// ── npm publish ─────────────────────────────────────────────────────────
if (process.env.NPM_TOKEN) {
  console.log('\n▶ Publishing to npm...');
  // Write .npmrc with token
  const npmrc = `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}`;
  fs.writeFileSync(path.join(ROOT, 'dist', 'pro', '.npmrc'), npmrc);
  execSync('npm publish --access public', { cwd: path.join(ROOT, 'dist', 'pro'), stdio: 'inherit' });
  fs.unlinkSync(path.join(ROOT, 'dist', 'pro', '.npmrc'));
  console.log('✓ Published to npm');
}
*/

/*
// ── Gumroad upload ──────────────────────────────────────────────────────
async function uploadToGumroad() {
  const fetch = (await import('node-fetch')).default;
  const FormData = (await import('form-data')).default;

  const form = new FormData();
  form.append('product[file]', fs.createReadStream(zipPath));

  const res = await fetch(
    `https://api.gumroad.com/v2/products/${process.env.GUMROAD_PRODUCT_ID}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${process.env.GUMROAD_ACCESS_TOKEN}`,
      },
      body: form,
    }
  );
  const data = await res.json();
  if (data.success) {
    console.log('✓ Uploaded to Gumroad');
  } else {
    console.error('Gumroad upload failed:', data);
  }
}

if (process.env.GUMROAD_ACCESS_TOKEN) {
  uploadToGumroad();
}
*/

/*
// ── Vercel deploy ───────────────────────────────────────────────────────
if (process.env.VERCEL_TOKEN) {
  console.log('\n▶ Deploying to Vercel...');
  execSync('npx vercel --prod --token $VERCEL_TOKEN', { cwd: ROOT, stdio: 'inherit' });
  console.log('✓ Deployed to Vercel');
}
*/
