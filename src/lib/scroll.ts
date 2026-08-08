/* Scroll to a section, keep the URL hash shareable, compensate for fixed nav.
   Ported from goSection() in design/js/nav.jsx.
   Uses the Lenis instance when smooth scroll is active so anchor jumps share the
   same inertia; falls back to native smooth scrollTo otherwise. */
import { getLenis } from './smoothScroll';

const NAV_OFFSET = 80; // fixed-nav height compensation

export function goSection(id: string) {
  const lenis = getLenis();
  const onHome = window.location.pathname === '/';

  if (!id || id === 'top') {
    // On subpages the brand/back-to-top goes home instead of scrolling.
    if (!onHome) {
      window.location.href = '/';
      return;
    }
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    if (history.pushState) history.pushState(null, '', window.location.pathname);
    return;
  }
  const el = document.getElementById(id);
  // Section lives on the home page — navigate there when we're on a subpage
  // (service pages reuse Nav/Footer, whose links are home-section anchors).
  if (!el) {
    if (!onHome) window.location.href = '/#' + id;
    return;
  }
  if (lenis) {
    lenis.scrollTo(el, { offset: -NAV_OFFSET });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  if (history.pushState) history.pushState(null, '', '#' + id);
}
