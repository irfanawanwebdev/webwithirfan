/* Projects grid. Ported from Projects in design/js/sections.jsx.
   Cards are structured so they can become <a> links to case-study pages later
   (set `href` in data) and so CSS mocks can be swapped for real screenshots
   (set `image` in data). */
import type { ReactNode } from 'react';
import { SectionHead } from '../SectionHead';
import { ProjectMock } from '../Mocks';
import { PROJECTS, type Project } from '../../data/content';

/** Animated stat with accessible static fallback. */
function StatVal({ v }: { v: string }) {
  const m = v.match(/^([^\d.\-]*)(-?[\d.]+)(.*)$/);
  if (!m) return <b>{v}</b>;
  const [, pre, num, suf] = m;
  return (
    <b>
      <span aria-hidden="true">
        {pre}
        <span data-count={num}>{num}</span>
        {suf}
      </span>
      <span className="sr-only">{v}</span>
    </b>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const className = 'card proj' + (p.big ? ' big' : '');
  const inner: ReactNode = (
    <>
      <div className="proj-media">
        <span className="badge chip" style={{ position: 'absolute', top: 16, left: 16, zIndex: 3 }}>
          {p.cat}
        </span>
        {p.image ? (
          <img
            src={p.image.src}
            alt={p.title}
            width={p.image.width}
            height={p.image.height}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <ProjectMock variant={p.mock} />
        )}
      </div>
      <div className="proj-body">
        <span className="proj-cap">{p.cat}</span>
        <h3>{p.title}</h3>
        <div className="proj-ps">
          <div className="ps-row ps-problem">
            <span className="psl">Problem</span>
            <p>{p.problem}</p>
          </div>
          <div className="ps-row ps-solution">
            <span className="psl">What I built</span>
            <p>{p.desc}</p>
          </div>
        </div>
        <div className="proj-stats">
          {p.stats.map(([v, l], i) => (
            <div className="ps" key={i}>
              <StatVal v={v} />
              <small>{l}</small>
            </div>
          ))}
        </div>
        <div className="proj-stack">
          {p.stack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </>
  );

  return p.href ? (
    <a className={className} href={p.href} data-reveal>
      {inner}
    </a>
  ) : (
    <div className={className} data-reveal>
      {inner}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section container" data-tier="1">
      <SectionHead
        eyebrow="Selected work"
        title="Projects I've built."
        lead="A mix of recent client work and tools I've made for my own workflow."
      />
      <div className="proj-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
