/* Server entry for build-time prerendering (SSG).
   Rendered once at build time by scripts/prerender.mjs and injected into
   dist/index.html so the full page ships in the raw HTML response — search
   engines and AI crawlers that don't run JavaScript see real content.
   No CSS/font imports here (those live in main.tsx) so the SSR bundle stays clean. */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
