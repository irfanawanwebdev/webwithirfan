/* App — composition root. Wires sections, background FX and the motion engine.
   The design-time <TweaksPanel> is intentionally excluded; its defaults are
   hardcoded (hero layout "split", accent indigo/cyan via tokens.css, motion 6/10,
   cursor glow ON, film grain ON). */
import { useCallback, useEffect, useState } from 'react';
import { BackgroundFX } from './components/BackgroundFX';
import { Nav } from './components/Nav';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './components/Hero';
import { Stats } from './components/sections/Stats';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Tools } from './components/sections/Tools';
import { Process } from './components/sections/Process';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { TechMarquee } from './components/closing/TechMarquee';
import { Contact } from './components/closing/Contact';
import { Footer } from './components/closing/Footer';
import { useHotkey } from './hooks/useUI';
import { initMotion } from './lib/motion';
import { initSmoothScroll } from './lib/smoothScroll';

const MOTION_INTENSITY = 6; // hardcoded Tweaks default

export default function App() {
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
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Tools />
        <Process />
        <About />
        <Testimonials />
        <TechMarquee />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={cmd} onClose={() => setCmd(false)} />
    </>
  );
}
