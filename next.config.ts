import type { NextConfig } from 'next';

// Static export: `next build` writes plain HTML/CSS/JS to out/, one file per
// route — no server. Vercel serves it like any static site, and the headers +
// legacy-WordPress redirects in vercel.json keep applying.
const config: NextConfig = {
  output: 'export',
  // /services/x -> out/services/x/index.html, so every page URL ends in a
  // slash and works on any static host (matches the existing /privacy/ page).
  trailingSlash: true,
  // next/image optimization needs a server; assets are pre-optimized by
  // scripts/gen-assets.mjs instead (webp, explicit width/height).
  images: { unoptimized: true },
};

export default config;
