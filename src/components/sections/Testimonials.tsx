/* Testimonials masonry. Ported from Testimonials in design/js/sections.jsx.
   Only the one real quote is shown; placeholder slots stay until real ones arrive. */
import { Icons } from '../Icons';
import { SectionHead } from '../SectionHead';
import { QUOTES } from '../../data/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="section container">
      <SectionHead
        center
        eyebrow="Client feedback"
        title="What clients say."
        lead="Real feedback from finished projects. I am collecting more."
      />
      <div className="tcols">
        {QUOTES.map((q) =>
          q.real ? (
            <figure key={q.id} className="card tcard" data-reveal>
              <div className="stars" role="img" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i}>{Icons.star({ size: 15 })}</span>
                ))}
              </div>
              <blockquote style={{ margin: 0 }}>
                <p>“{q.text}”</p>
              </blockquote>
              <figcaption className="who">
                <span className="av" aria-hidden="true">{q.initial}</span>
                <span>
                  <b>{q.who}</b>
                  <small>{q.role}</small>
                </span>
              </figcaption>
              <span className="tsrc">{q.src}</span>
            </figure>
          ) : (
            <div key={q.id} className="card tcard tph" data-reveal>
              <span>{q.note}</span>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
