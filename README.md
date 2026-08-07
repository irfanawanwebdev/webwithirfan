# WebWithIrfan — Portfolio & Freelance-Agency Site

A portfolio/agency site for Irfan Awan, built with **Next.js (static export) +
React + TypeScript**. Every route is prerendered to plain HTML at build time —
no server, deployable on any static host.

It was recreated from a high-fidelity HTML/JSX design prototype as production
code, then migrated from Vite to Next.js so new pages (services, tools, blog,
case studies) each get their own URL and metadata.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in NEXT_PUBLIC_WEB3FORMS_KEY (see "Contact form")
npm run dev                  # local dev server
npm run build                # type-check + static export -> out/
npm run preview              # serve the production build locally
```

## Deployment (Vercel)

Production is a Vercel project connected to this repo — every push to `main`
builds and deploys. Live at <https://webwithirfan.vercel.app/> until the
custom domain is attached.

- `NEXT_PUBLIC_WEB3FORMS_KEY` is set in **Vercel > Settings > Environment
  Variables** (Production). It is injected at build time; nothing secret lives
  in the repo.
- Security headers, legacy-WordPress redirects, and immutable caching for
  `/_next/static/` are configured in [`vercel.json`](vercel.json).
- The output is a plain static `out/`, so it can move to any static host
  (Netlify, Cloudflare Pages, S3, …) if ever needed.

## Project structure

```
app/
  layout.tsx                   # html shell: fonts, global CSS, metadata defaults, JSON-LD
  page.tsx                     # home page (metadata + renders src/App)
  not-found.tsx                # designed 404 (exported to out/404.html)
  sitemap.ts                   # generated sitemap.xml — add every new route here
  robots.ts                    # generated robots.txt
src/
  App.tsx                      # composition root ('use client'); runs the motion engine
  config/links.ts              # ⭐ ALL contact links + Web3Forms config
  data/content.ts              # all page content (services, projects, tools, FAQ, …)
  lib/scroll.ts                # smooth section scroll with fixed-nav offset
  lib/motion.ts                # GSAP reveals/count-ups/pointer-FX (dynamically imported)
  hooks/useUI.ts               # ⌘K hotkey, scroll lock, focus trap
  styles/tokens.css            # design tokens + base (ported ~verbatim)
  styles/sections.css          # all component/section styles
  components/                  # Nav, CommandPalette, Hero, BackgroundFX, Icons, Mocks
  components/sections/         # Stats, Services, Projects, Tools, Process, About, Testimonials, FAQ
  components/closing/          # TechMarquee, Contact (+ ContactForm), Footer
  assets/                      # optimized About photo (webp)
public/                        # favicon.svg, apple-touch-icon, og-cover, privacy/, llms.txt, manifest
scripts/gen-assets.mjs         # regenerates optimized photo + icons (npm run gen-assets)
```

## Contacts & links

All centralized in [`src/config/links.ts`](src/config/links.ts). Current values:

- **Email** — `info@webwithirfan.com`
- **Phone / WhatsApp** — `+92 347 2934523` (Call uses `tel:`, WhatsApp uses `wa.me/923472934523`)
- **GitHub** — `github.com/irfanawanwebdev`
- **LinkedIn** — `linkedin.com/in/muhammad-irfan-webdev`
- **Facebook** — `facebook.com/IrfanAwanDev`
- **Location** — Multan, Pakistan · PKT (UTC+5)

Still to set before full launch:

- **Custom domain** — point `webwithirfan.com` at the Vercel project (currently the old
  WordPress site is still live there).
- **Project screenshots** — set `image: { src, width, height }` on a `Project` to replace
  its CSS faux-UI mock; set `href` to turn the card into a case-study link.
- **Reviews** — `QUOTES` in `data/content.ts` holds the real client feedback shown in the
  Testimonials section; add new quotes here as they come in.
- **Final OG cover** — replace the placeholder `public/og-cover.png` once the logo is final.

## Contact form

The form (`components/closing/ContactForm.tsx`) posts to **Web3Forms**
(`https://api.web3forms.com/submit`) using the access key from
`NEXT_PUBLIC_WEB3FORMS_KEY`.

- **Production**: the key is set in Vercel's environment variables, so it is baked into
  the bundle on deploy. Recipients (primary + CC) are configured in the Web3Forms
  dashboard for the key.
- **Local**: copy `.env.example` to `.env.local` and paste the key. Only `NEXT_PUBLIC_`
  prefixed variables reach the client bundle; with no key the bundler strips the whole
  Web3Forms code path as dead code and the form falls back to mailto.

It includes client-side validation, a honeypot (`botcheck`) for spam, an error state, and
a success state. **With no key set it degrades to a prefilled `mailto:`** so it is never a
dead end.

## What was intentionally excluded / hardcoded

The design-time `<TweaksPanel>` and `js/tweaks-panel.jsx` are **not** shipped. Its defaults
are hardcoded:

| Tweak | Value |
| --- | --- |
| Hero layout | `split` |
| Accent pair | `#6366F1` / `#22D3EE` (the token defaults) |
| Motion intensity | `6/10` |
| Cursor glow | on (hover/fine-pointer devices only) |
| Film grain | on |

## Production checklist (from the handoff UX audit) — status

- ✅ Static build, no dev React / in-browser Babel.
- ✅ JSON-LD `Person` + `ProfessionalService` (`sameAs` socials, `knowsAbout` stack) in `index.html`.
- ✅ `sitemap.xml`, `robots.txt`, designed `404.html`, `site.webmanifest`.
- ✅ JS hover-card effects converted to CSS `:hover` / `:focus-within`.
- ✅ Meaningful micro-labels raised to ≥12px (`--fs-label`).
- ✅ Count-ups: `aria-hidden` animated span + visually-hidden static value.
- ✅ Self-hosted fonts via `@fontsource` (no Google Fonts request; Inter 450 not loaded).
- ✅ Pointer FX gated behind `(hover: hover) and (pointer: fine)`; `prefers-reduced-motion` respected.
- ✅ Background blur/noise reduced on small screens; aurora paused when tab hidden.
- ✅ GSAP dynamically imported (off the initial bundle, after first paint).
- ✅ About photo optimized (749 KB PNG → ~15 KB webp) with `width`/`height` + `loading="lazy"`.
- ✅ Privacy policy at `/privacy/` (static page in `public/`), linked from the footer and
  the contact form.
- ⏳ **Real OG cover** — `public/og-cover.png` is a generated placeholder; design a final
  1200×630 once the logo is final.

## Future pages (architected for, not built)

Per-project case-study pages and standalone tool pages. `Project` already supports an `href`
(card → link), and tool/project data is shaped so cards can become links without refactoring.
If a blog / many sub-pages are added later, migrate to Next.js static export (the components
port directly).

## Regenerating images

```bash
npm run gen-assets   # requires the `sharp` devDependency
```

Reads the owner-provided original photo from `src/assets/source/Irfan_Awan_Profile_Pic.png`
and rebuilds the optimized webp photo, `apple-touch-icon.png`, and `og-cover.png`.
