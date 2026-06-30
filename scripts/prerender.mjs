/* Build-time prerender (SSG).
 *
 * Runs after both the client build (dist/) and the SSR build (dist-server/).
 * It renders <App /> to an HTML string and injects it into the empty
 * <div id="root"></div> of dist/index.html, then deletes the temporary SSR
 * bundle. The result: the full page ships in the raw HTML response, so search
 * engines and AI crawlers that don't execute JavaScript see real content.
 * The client bundle then hydrates this markup in the browser.
 */
import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const indexPath = resolve(root, 'dist/index.html');
const serverEntry = resolve(root, 'dist-server/entry-server.js');

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html not found — run `vite build` before prerendering.');
}
if (!existsSync(serverEntry)) {
  throw new Error('dist-server/entry-server.js not found — run the --ssr build before prerendering.');
}

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

let html = readFileSync(indexPath, 'utf8');

const marker = '<div id="root"></div>';
if (!html.includes(marker)) {
  throw new Error(`Could not find "${marker}" in dist/index.html — prerender aborted.`);
}

html = html.replace(marker, `<div id="root">${appHtml}</div>`);
writeFileSync(indexPath, html);

// The SSR bundle is a build artifact only — remove it from the deploy output.
rmSync(resolve(root, 'dist-server'), { recursive: true, force: true });

console.log(`✓ Prerendered dist/index.html (${appHtml.length.toLocaleString()} chars of HTML injected)`);
