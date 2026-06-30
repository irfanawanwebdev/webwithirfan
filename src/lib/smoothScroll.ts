/* smoothScroll.ts — light inertia scrolling via Lenis.
   - Lenis is dynamically imported so it stays out of the initial bundle and
     loads after first paint (called from App alongside initMotion).
   - Disabled under prefers-reduced-motion.
   - smoothWheel only: touch devices keep native scrolling (faster, and Lenis
     on mobile tends to feel worse), so this never slows phones/tablets.
   - The instance is exposed via getLenis() so goSection() can use lenis.scrollTo
     for anchor jumps instead of fighting the native scroller. */

type Lenis = import('lenis').default;
type Teardown = () => void;

let instance: Lenis | null = null;

/** The active Lenis instance, or null when smooth scroll is off (reduced motion,
    pre-init, or import failure). Callers must handle the null case. */
export function getLenis(): Lenis | null {
  return instance;
}

export async function initSmoothScroll(): Promise<Teardown> {
  if (typeof window === 'undefined') return () => {};

  // Respect reduced-motion: leave the browser's native scroll untouched.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  let lenis: Lenis;
  try {
    const { default: Lenis } = await import('lenis');
    lenis = new Lenis({
      duration: 0.9, // light & responsive — not floaty
      // ease-out expo: catches up fast, settles gently
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1, // native touch (smoothWheel doesn't apply to touch)
    });
  } catch {
    // Import blocked/offline — native scrolling still works fine.
    return () => {};
  }

  instance = lenis;

  let rafId = window.requestAnimationFrame(function raf(time) {
    lenis.raf(time);
    rafId = window.requestAnimationFrame(raf);
  });

  return () => {
    window.cancelAnimationFrame(rafId);
    lenis.destroy();
    instance = null;
  };
}
