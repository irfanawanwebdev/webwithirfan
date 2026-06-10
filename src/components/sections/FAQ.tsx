/* FAQ — native details/summary. Ported from FAQ in design/js/sections.jsx. */
import { SectionHead } from '../SectionHead';
import { FAQS } from '../../data/content';

export function FAQ() {
  return (
    <section id="faq" className="section container">
      <SectionHead
        center
        eyebrow="Questions"
        title="Answers before you ask."
        lead="The things most clients want to know before starting a project."
      />
      <div className="faq-wrap" data-reveal>
        {FAQS.map((f, i) => (
          <details className="faq-item" key={i}>
            <summary>
              {f.q}
              <span className="fx-plus" aria-hidden="true">+</span>
            </summary>
            <div className="faq-a">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
