/* Services bento grid. Ported from Services in design/js/sections.jsx. */
import { Icons } from '../Icons';
import { SectionHead } from '../SectionHead';
import { SERVICES } from '../../data/content';

export function Services() {
  return (
    <section id="services" className="section container">
      <SectionHead
        eyebrow="What I build"
        title="Frontend, WordPress, and modern web apps, end to end."
        lead="My main skills are WordPress, PHP, and JavaScript. Each service below shows exactly what it covers."
      />
      <div className="services-grid">
        {SERVICES.map((s) => (
          <div key={s.id} className={'card svc ' + (s.size || '')} data-reveal>
            <div className="svc-head-row">
              <div className="svc-ico">{Icons[s.icon]({ size: 22 })}</div>
              {s.learning && <span className="svc-flag">Learning · 2026</span>}
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="svc-foot">
              <div className="svc-tags">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="svc-outcome">
                {Icons.check({ size: 15 })}
                <span>{s.outcome}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
