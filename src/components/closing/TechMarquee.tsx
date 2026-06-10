/* Stack marquee — two infinite rows, opposite directions. Ported from TechMarquee in design/js/closing.jsx. */
import { TECH } from '../../data/content';

function Row({ rev }: { rev?: boolean }) {
  return (
    <div className={'marquee' + (rev ? ' rev' : '')} aria-hidden="true">
      <div className="marquee-track">
        {[...TECH, ...TECH].map(([name, color, glyph], i) => (
          <div className="mq-item" key={i}>
            <span className="glyph" style={{ background: color === '#fff' ? '#1e293b' : color }}>
              {glyph}
            </span>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section id="stack" className="section--tight" data-reveal aria-label="Tech stack">
      <div className="container">
        <div className="sec-head center" style={{ marginBottom: 36 }}>
          <span className="eyebrow">The stack</span>
          <h2 style={{ fontSize: 'var(--fs-h3)' }}>Tools I reach for every day</h2>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Row />
        <Row rev />
      </div>
      {/* Screen-reader equivalent of the decorative marquee */}
      <p className="sr-only">{TECH.map(([n]) => n).join(', ')}</p>
    </section>
  );
}
