import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static build. Output is plain HTML/CSS/JS suitable for Vercel/Netlify/any static host.
// The page is prerendered to HTML at build time (see scripts/prerender.mjs) via an
// extra `vite build --ssr` pass; manualChunks only applies to the client build
// (gsap is external during SSR, so it can't be force-chunked there).
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            // Keep GSAP in its own chunk so the initial bundle stays small (it is
            // dynamically imported by the motion engine after first paint anyway).
            manualChunks: {
              gsap: ['gsap'],
            },
          },
        },
  },
}));
