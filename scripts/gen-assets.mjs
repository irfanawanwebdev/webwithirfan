/* One-off asset generation (run with: node scripts/gen-assets.mjs).
   Produces:
     - src/assets/Irfan_Awan_Profile_Pic.webp  (compressed, responsive-sized About photo)
     - public/apple-touch-icon.png             (180x180 home-screen icon)
     - public/og-cover.png                     (1200x630 social share card)
   sharp is a dev-only tool here; it is not a runtime dependency. */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync } from 'node:fs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Owner-provided original (full-res). Optimized derivatives are written to
// src/assets and public/ by this script.
const SRC_PHOTO = resolve(root, 'src/assets/source/Irfan_Awan_Profile_Pic.png');

mkdirSync(resolve(root, 'src/assets'), { recursive: true });
mkdirSync(resolve(root, 'public'), { recursive: true });

// 1) About photo -> webp, sized for a ~400px display box at up to 2x DPR.
await sharp(SRC_PHOTO)
  .resize({ width: 800, withoutEnlargement: true })
  .webp({ quality: 78 })
  .toFile(resolve(root, 'src/assets/Irfan_Awan_Profile_Pic.webp'));

// Brand "W" mark as an SVG, reused for the icon and OG card.
const mark = (size, radius, font) => `
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6366F1"/><stop offset="1" stop-color="#22D3EE"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${radius}" fill="url(#g)"/>
  <text x="50%" y="52%" dominant-baseline="central" text-anchor="middle"
    font-family="Arial, sans-serif" font-weight="700" font-size="${font}" fill="#fff">W</text>`;

// 2) apple-touch-icon 180x180
await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">${mark(180, 40, 96)}</svg>`))
  .png()
  .toFile(resolve(root, 'public/apple-touch-icon.png'));

// 3) og-cover 1200x630
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#070B14"/><stop offset="1" stop-color="#0B1322"/>
    </linearGradient>
    <linearGradient id="mk" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6366F1"/><stop offset="1" stop-color="#22D3EE"/>
    </linearGradient>
    <linearGradient id="tx" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#FBFCFE"/><stop offset="0.6" stop-color="#6366F1"/><stop offset="1" stop-color="#22D3EE"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1050" cy="120" r="260" fill="#22D3EE" opacity="0.10"/>
  <circle cx="120" cy="560" r="280" fill="#6366F1" opacity="0.12"/>
  <g transform="translate(96,150)">
    <rect width="96" height="96" rx="24" fill="url(#mk)"/>
    <text x="48" y="52" dominant-baseline="central" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="52" fill="#fff">W</text>
    <text x="124" y="48" dominant-baseline="central" font-family="Arial, sans-serif" font-weight="700" font-size="40" fill="#FBFCFE">WebWith<tspan fill="#22D3EE">Irfan</tspan></text>
  </g>
  <text x="96" y="340" font-family="Arial, sans-serif" font-weight="700" font-size="76" fill="url(#tx)">Fast websites, online</text>
  <text x="96" y="430" font-family="Arial, sans-serif" font-weight="700" font-size="76" fill="url(#tx)">stores &amp; web apps.</text>
  <text x="96" y="520" font-family="Arial, sans-serif" font-size="32" fill="#AAB6C8">Frontend developer &amp; WordPress expert · React · Next.js · WooCommerce</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile(resolve(root, 'public/og-cover.png'));

console.log('Assets generated.');
