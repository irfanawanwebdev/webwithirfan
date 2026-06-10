/* motion.ts — GSAP wiring, ported from design/js/motion.js.
   - GSAP + ScrollTrigger are dynamically imported so they stay out of the
     initial bundle and load after first paint.
   - Pointer FX (cursor glow, magnetic buttons, hero tilt) are gated behind
     `(hover: hover) and (pointer: fine)` per the handoff.
   - prefers-reduced-motion reveals all content instantly and skips animation. */

type Teardown = () => void;

const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const canHover =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/** Force every animated element visible (used for reduced motion / no-GSAP / failsafe). */
function revealAll() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    el.style.opacity = '1';
    el.style.filter = 'none';
    el.style.transform = 'none';
  });
  document.querySelectorAll<HTMLElement>('[data-codeline]').forEach((el) => {
    el.style.opacity = '1';
  });
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const v = el.getAttribute('data-count');
    if (v) el.textContent = v;
  });
  const pf = document.querySelector<HTMLElement>('.proc-fill');
  if (pf) pf.style.width = '100%';
  document.querySelectorAll('.pstep').forEach((s) => s.classList.add('on'));
}

/**
 * Initialize motion. Returns a cleanup function.
 * @param intensity 0..10 (hardcoded Tweaks default: 6)
 */
export async function initMotion(intensity = 6): Promise<Teardown> {
  const teardown: Teardown[] = [];
  const clearAll: Teardown = () => {
    teardown.forEach((fn) => {
      try {
        fn();
      } catch {
        /* noop */
      }
    });
    teardown.length = 0;
  };

  const k = Math.max(0, Math.min(10, intensity)) / 10; // 0..1 strength

  // Reduced motion or zero intensity -> just reveal everything.
  if (reduced || k === 0) {
    revealAll();
    return clearAll;
  }

  // Load GSAP only when we actually animate. If the import fails for any
  // reason (offline, blocked CDN-like chunk), reveal everything so content is
  // never stuck invisible.
  let gsap: GsapApi;
  let ScrollTrigger: typeof import('gsap/ScrollTrigger')['ScrollTrigger'];
  try {
    const [gsapMod, stMod] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]);
    gsap = gsapMod.gsap;
    ScrollTrigger = stMod.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  } catch {
    revealAll();
    return clearAll;
  }

  const dur = 0.55 + k * 0.45;
  const dist = 18 + k * 30;

  // ---- Hero: renders instantly. Keep ambient float drift only. ----
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.querySelectorAll<HTMLElement>('[data-float]').forEach((chip, i) => {
      const drift = gsap.to(chip, {
        y: '+=' + (10 + k * 12),
        duration: 2.6 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      teardown.push(() => drift.kill());
    });
  }

  // ---- Scroll reveals (everything except hero copy) ----
  const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')].filter(
    (el) => !el.closest('.hero-copy') && !el.hasAttribute('data-reveal-visual'),
  );
  targets.forEach((el) => {
    gsap.set(el, { opacity: 0, y: dist, filter: 'blur(8px)' });
    const tw = gsap.to(el, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: dur,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
    teardown.push(() => {
      tw.scrollTrigger?.kill();
      tw.kill();
    });
  });

  // ---- count-up stats (supports decimals) ----
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const raw = el.getAttribute('data-count');
    if (!raw) return;
    const target = parseFloat(raw);
    if (isNaN(target)) return;
    const dp = (raw.split('.')[1] || '').length;
    const fmt = (x: number) => (dp ? x.toFixed(dp) : Math.round(x).toString());
    const obj = { v: 0 };
    const tw = gsap.to(obj, {
      v: target,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = fmt(obj.v);
      },
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
    });
    teardown.push(() => {
      tw.scrollTrigger?.kill();
      tw.kill();
    });
  });

  // ---- process timeline: one-shot fill + staggered light-up on enter ----
  const proc = document.querySelector('[data-proc]');
  if (proc) {
    const fill = proc.querySelector('.proc-fill');
    const steps = proc.querySelectorAll('.pstep');
    const ptl = gsap.timeline({
      scrollTrigger: { trigger: proc, start: 'top 72%', once: true },
    });
    if (fill) ptl.fromTo(fill, { width: '0%' }, { width: '100%', duration: 1.4, ease: 'power2.inOut' }, 0);
    steps.forEach((s, i) => ptl.add(() => s.classList.add('on'), 0.12 + i * 0.24));
    teardown.push(() => {
      ptl.scrollTrigger?.kill();
      ptl.kill();
    });
  }

  ScrollTrigger.refresh();

  // ---- Pointer FX: desktop / hover devices only ----
  if (canHover) {
    wireCursor(gsap, teardown);
    wireMagnetic(gsap, k, teardown);
    wireTilt(gsap, k, teardown);
  }

  // ---- Failsafe: if the rAF ticker never advances, reveal everything. ----
  const startFrame = gsap.ticker.frame;
  const failsafe = window.setTimeout(() => {
    if (gsap.ticker.frame - startFrame < 3) {
      gsap.set('[data-reveal], [data-codeline]', {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        clearProps: 'filter',
      });
      document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const v = el.getAttribute('data-count');
        if (v) el.textContent = v;
      });
      const pf = document.querySelector<HTMLElement>('.proc-fill');
      if (pf) pf.style.width = '100%';
      document.querySelectorAll('.pstep').forEach((s) => s.classList.add('on'));
    }
  }, 1400);
  teardown.push(() => clearTimeout(failsafe));

  return clearAll;
}

type GsapApi = typeof import('gsap')['gsap'];

function wireCursor(gsap: GsapApi, teardown: Teardown[]) {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;
  const qx = gsap.quickTo(glow, 'left', { duration: 0.5, ease: 'power3' });
  const qy = gsap.quickTo(glow, 'top', { duration: 0.5, ease: 'power3' });
  const move = (e: PointerEvent) => {
    glow.style.opacity = '1';
    qx(e.clientX);
    qy(e.clientY);
  };
  const leave = () => {
    glow.style.opacity = '0';
  };
  window.addEventListener('pointermove', move);
  document.addEventListener('pointerleave', leave);
  teardown.push(() => {
    window.removeEventListener('pointermove', move);
    document.removeEventListener('pointerleave', leave);
    glow.style.opacity = '0';
  });
}

function wireMagnetic(gsap: GsapApi, k: number, teardown: Teardown[]) {
  if (k === 0) return;
  const strength = 0.3 * k;
  document.querySelectorAll<HTMLElement>('.mag').forEach((el) => {
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      gsap.to(el, { x, y, duration: 0.4, ease: 'power3.out' });
    };
    const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' });
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    teardown.push(() => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
      gsap.set(el, { x: 0, y: 0 });
    });
  });
}

function wireTilt(gsap: GsapApi, k: number, teardown: Teardown[]) {
  if (k === 0) return;
  const wrap = document.querySelector<HTMLElement>('.hero-visual');
  const panel = document.querySelector<HTMLElement>('[data-tilt]');
  if (!wrap || !panel) return;
  const move = (e: PointerEvent) => {
    const r = wrap.getBoundingClientRect();
    const rx = ((e.clientY - (r.top + r.height / 2)) / r.height) * -6 * k;
    const ry = ((e.clientX - (r.left + r.width / 2)) / r.width) * 8 * k;
    gsap.to(panel, {
      rotateX: rx + 3,
      rotateY: ry - 7,
      duration: 0.6,
      ease: 'power2.out',
      transformPerspective: 1400,
    });
  };
  const leave = () => gsap.to(panel, { rotateX: 3, rotateY: -7, duration: 0.8, ease: 'power2.out' });
  wrap.addEventListener('pointermove', move);
  wrap.addEventListener('pointerleave', leave);
  teardown.push(() => {
    wrap.removeEventListener('pointermove', move);
    wrap.removeEventListener('pointerleave', leave);
  });
}
