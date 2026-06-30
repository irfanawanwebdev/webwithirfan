import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

// Self-hosted variable fonts (no Google Fonts request). One file per family,
// latin subset only — 3 font requests total instead of one per weight.
import './styles/fonts.css';

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
