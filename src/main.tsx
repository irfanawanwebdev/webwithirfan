import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

// Self-hosted fonts (via @fontsource — no Google Fonts request).
// Only the weights actually used are imported (no Inter 450).
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';

import './styles/tokens.css';
import './styles/sections.css';
import App from './App';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// In production the HTML is prerendered (SSG) at build time, so hydrate it.
// During `vite dev` #root is empty, so mount fresh instead.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
