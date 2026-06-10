/* Process timeline. Ported from Process in design/js/sections.jsx. */
import { SectionHead } from '../SectionHead';
import { PROCESS } from '../../data/content';

export function Process() {
  return (
    <section id="process" className="section container" data-tier="3">
      <SectionHead
        center
        eyebrow="How I work"
        title="A clear path from idea to launch."
        lead="Five simple steps, with previews you can review at every milestone."
      />
      <div className="proc" data-proc data-reveal>
        <div className="proc-line"><span className="proc-fill" /></div>
        {PROCESS.map((p) => (
          <div className="pstep" key={p.n}>
            <div className="pnum">{p.n}</div>
            <div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
