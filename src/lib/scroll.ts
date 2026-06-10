/* Scroll to a section, keep the URL hash shareable, compensate for fixed nav.
   Ported from goSection() in design/js/nav.jsx. */
export function goSection(id: string) {
  if (!id || id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (history.pushState) history.pushState(null, '', window.location.pathname);
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
  if (history.pushState) history.pushState(null, '', '#' + id);
}
