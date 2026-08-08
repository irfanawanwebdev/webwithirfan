'use client';

/* App — home page composition. Section order inside the shared PageShell
   chrome (Nav, Footer, palette, motion engine live there).
   The design-time <TweaksPanel> is intentionally excluded; its defaults are
   hardcoded (hero layout "split", accent indigo/cyan via tokens.css, motion 6/10,
   cursor glow ON, film grain ON). */
import { PageShell } from './components/PageShell';
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

export default function App() {
  return (
    <PageShell>
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
    </PageShell>
  );
}
