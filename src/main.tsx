import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

// Self-hosted fonts (via @fontsource — no Google Fonts request).
// Latin subset only: this is an English site, so the cyrillic/greek/vietnamese/
// latin-ext @font-face blocks are dead weight in the CSS. Importing the
// `latin-*` files drops those rules (and their font files) entirely.
import '@fontsource/space-grotesk/latin-400.css';
import '@fontsource/space-grotesk/latin-500.css';
import '@fontsource/space-grotesk/latin-600.css';
import '@fontsource/space-grotesk/latin-700.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import '@fontsource/jetbrains-mono/latin-500.css';

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
