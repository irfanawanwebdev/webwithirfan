/* Navigation: fixed bar, scroll-spy, mobile menu. Ported from design/js/nav.jsx. */
import { useEffect, useRef, useState } from 'react';
import { Icons } from './Icons';
import { NAV_ITEMS } from '../data/content';
import { goSection } from '../lib/scroll';
import { useScrollLock, useFocusTrap } from '../hooks/useUI';

export function Nav({ onOpenCmd }: { onOpenCmd: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const els = NAV_ITEMS.map(([, id]) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!els.length || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useScrollLock(mobile);
  useFocusTrap(menuRef, mobile);
  useEffect(() => {
    if (!mobile) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobile(false);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [mobile]);

  const go = (id: string) => {
    setMobile(false);
    goSection(id);
  };

  return (
    <>
      <header className={'nav' + (scrolled ? ' scrolled' : '')}>
        <div className="nav-inner">
          <a
            className="brand"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              go('top');
            }}
          >
            <span className="brand-mark" aria-hidden="true">W</span>
            <span>WebWith<b>Irfan</b></span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {NAV_ITEMS.map(([label, id]) => (
              <a
                key={id}
                className={'nav-link' + (active === id ? ' active' : '')}
                href={'#' + id}
                onClick={(e) => {
                  e.preventDefault();
                  go(id);
                }}
                aria-current={active === id ? 'true' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-right">
            <button className="kbtn" onClick={onOpenCmd} aria-label="Open command palette">
              {Icons.search({ size: 15 })}
              <span className="kbtn-label">Search</span>
              <kbd>⌘K</kbd>
            </button>
            <a
              className="btn btn-primary mag nav-cta"
              href="#contact"
              aria-label="Start a project"
              onClick={(e) => {
                e.preventDefault();
                go('contact');
              }}
            >
              <span className="btn-label">Start a project</span>
              <span className="nav-cta-arrow">{Icons.arrow({ size: 15 })}</span>
              <span className="nav-cta-icon" aria-hidden="true">{Icons.calendar({ size: 16 })}</span>
            </a>
            <button
              className="kbtn nav-burger"
              onClick={() => setMobile(true)}
              aria-label="Open menu"
              aria-expanded={mobile}
            >
              {Icons.menu({ size: 18 })}
            </button>
          </div>
        </div>
      </header>
      {mobile && (
        <div
          className="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <button className="mm-close" onClick={() => setMobile(false)} aria-label="Close menu">
            ✕
          </button>
          {NAV_ITEMS.map(([label, id]) => (
            <a
              key={id}
              href={'#' + id}
              onClick={(e) => {
                e.preventDefault();
                go(id);
              }}
            >
              {label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            style={{ marginTop: 24, alignSelf: 'flex-start' }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go('contact');
            }}
          >
            Start a project
          </a>
        </div>
      )}
    </>
  );
}
