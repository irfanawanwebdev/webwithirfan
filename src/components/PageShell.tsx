'use client';

/* Shared page chrome: skip link, background FX, Nav, Footer, floating actions,
   command palette, and the motion/smooth-scroll engines. The home page and
   every subpage (services, tools, ...) render inside this single client
   boundary so the chrome behaves identically everywhere. */
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { BackgroundFX } from './BackgroundFX';
import { Nav } from './Nav';
import { CommandPalette } from './CommandPalette';
import { Footer } from './closing/Footer';
import { FloatingActions } from './FloatingActions';
import { useHotkey } from '../hooks/useUI';
import { initMotion } from '../lib/motion';
import { initSmoothScroll } from '../lib/smoothScroll';

const MOTION_INTENSITY = 6; // hardcoded Tweaks default

export function PageShell({ children }: { children: ReactNode }) {
  const [cmd, setCmd] = useState(false);
  useHotkey(useCallback(() => setCmd(true), []));

  useEffect(() => {
    let cleanupMotion: (() => void) | undefined;
    let cleanupScroll: (() => void) | undefined;
    // Defer until after first paint so GSAP + Lenis load off the critical path.
    const id = window.requestAnimationFrame(() => {
      initMotion(MOTION_INTENSITY).then((fn) => {
        cleanupMotion = fn;
      });
      initSmoothScroll().then((fn) => {
        cleanupScroll = fn;
      });
    });
    return () => {
      window.cancelAnimationFrame(id);
      cleanupMotion?.();
      cleanupScroll?.();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <BackgroundFX />
      <Nav onOpenCmd={() => setCmd(true)} />
      <main id="main">{children}</main>
      <Footer />
      <FloatingActions />
      <CommandPalette open={cmd} onClose={() => setCmd(false)} />
    </>
  );
}
