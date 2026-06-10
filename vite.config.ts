import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static build. Output is plain HTML/CSS/JS suitable for Vercel/Netlify/any static host.
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Keep GSAP in its own chunk so the initial bundle stays small (it is
        // dynamically imported by the motion engine after first paint anyway).
        manualChunks: {
          gsap: ['gsap'],
        },
      },
    },
  },
});
