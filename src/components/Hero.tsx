/* Hero — split layout with animated code/visual panel. Ported from design/js/hero.jsx.
   Layout is hardcoded to "split" (the Tweaks default). */
import type { CSSProperties } from 'react';
import { Icons, type IconName } from './Icons';
import { CODE_LINES } from '../data/content';
import { goSection } from '../lib/scroll';

function CodePanel() {
  return (
    <div className="glasspanel code-panel" data-tilt>
      <div className="code-bar">
        <span className="tl"><i /><i /><i /></span>
        <span className="fname">build.ts</span>
        <span className="live chip" style={{ padding: '4px 10px' }}>
          <span className="dot" /> deployed
        </span>
      </div>
      <div className="code-body">
        {CODE_LINES.map((line, i) => (
          <div className="ln" data-codeline key={i}>
            <span className="num">{i + 1}</span>
            <span>
              {line.map(([cls, txt], j) =>
                cls ? (
                  <span className={cls} key={j}>{txt}</span>
                ) : (
                  <span key={j}>{txt}</span>
                ),
              )}
              {i === CODE_LINES.length - 1 && <span className="code-cursor" />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloatChip({
  className,
  icon,
  color,
  big,
  label,
  style,
}: {
  className: string;
  icon: IconName;
  color: string;
  big: string;
  label: string;
  style?: CSSProperties;
}) {
  return (
    <div className={'float-chip ' + className} data-float style={style}>
      <span
        className="ico"
        style={{ background: `rgba(${color},.14)`, border: `1px solid rgba(${color},.4)` }}
      >
        {Icons[icon]({ size: 16 })}
      </span>
      <span>
        <b>{big}</b>
        <small>{label}</small>
      </span>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <CodePanel />
      <FloatChip className="fc-1" icon="gauge" color="16, 185, 129" big="95 / 100" label="Lighthouse" style={{ top: '-26px', right: '6%' }} />
      <FloatChip className="fc-2" icon="wp" color="33, 117, 155" big="WordPress" label="+ Elementor" style={{ bottom: '14%', left: '-34px' }} />
      <FloatChip className="fc-3" icon="layers" color="99, 102, 241" big="React" label="+ Next.js apps" style={{ bottom: '-22px', right: '14%' }} />
    </div>
  );
}

const HERO_SKILLS = ['WordPress', 'Elementor', 'WooCommerce', 'PHP', 'JavaScript', 'React', 'Next.js'];

export function Hero() {
  return (
    <section id="top" className="hero section" data-layout="split">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="chip">
            <span className="dot" /> Available for new projects · 2026
          </span>
          <h1 className="hero-headline" data-hero-h>
            Fast <span className="grad">websites</span>, online stores &amp;{' '}
            <span className="grad">web apps</span>.
          </h1>
          <p className="hero-sub">
            I'm Irfan — a frontend developer and WordPress expert. I build custom websites,
            eCommerce stores and modern apps in React &amp; Next.js.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary mag"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goSection('contact');
              }}
            >
              Start a project {Icons.arrow({ size: 15 })}
            </a>
            <a
              className="btn btn-ghost mag"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                goSection('projects');
              }}
            >
              View work
            </a>
          </div>
          <div className="hero-skills" data-reveal>
            {HERO_SKILLS.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
