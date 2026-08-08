/* Generic service-page renderer. Feed it a ServicePageData object
   (src/data/services/*) inside a <PageShell>. Follows the 10-section
   blueprint from the SEO playbook: hero, trust, problem, deliverables,
   proof, process, guarantee, FAQ, related links, final CTA. */
import { SectionHead } from '../SectionHead';
import { Icons } from '../Icons';
import type { ServicePageData } from '../../data/services/types';

export function ServicePageView({ data }: { data: ServicePageData }) {
  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/services/">Services</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{data.name}</span>
          </nav>
          <span className="eyebrow">{data.eyebrow}</span>
          <h1>{data.h1}</h1>
          <p className="svc-sub">{data.sub}</p>
          <div className="hero-actions">
            <a className="btn btn-primary mag" href={data.primaryCta.href}>
              {data.primaryCta.label} {Icons.arrow({ size: 15 })}
            </a>
            {data.secondaryCta && (
              <a className="btn btn-ghost" href={data.secondaryCta.href}>
                {data.secondaryCta.label}
              </a>
            )}
          </div>
          <div className="svc-trust">
            {data.trust.map(([value, label]) => (
              <div className="svc-trust-item" key={label}>
                <b>{value}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container svc-tight">
        <SectionHead eyebrow="The problem" title={data.problemTitle} />
        <div className="svc-prose" data-reveal>
          {data.problem.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section id="whats-included" className="section section--band">
        <div className="container">
          <SectionHead
            eyebrow="Deliverables"
            title={data.deliverablesTitle}
            lead={data.deliverablesLead}
          />
          <div className="deliv-grid">
            {data.deliverables.map((d) => (
              <article className="deliv-card" key={d.title} data-reveal>
                <span className="deliv-ico" aria-hidden="true">{Icons[d.icon]({ size: 18 })}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container svc-tight">
        <SectionHead eyebrow="Proof" title={data.proof.title} />
        <div className="proof-panel glasspanel" data-reveal>
          <div className="svc-prose">
            {data.proof.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="proof-stats">
            {data.proof.stats.map(([value, label]) => (
              <div className="svc-trust-item" key={label}>
                <b>{value}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
          {data.proof.link && (
            <a
              className="btn btn-ghost"
              href={data.proof.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.proof.link.label} {Icons.arrow({ size: 14 })}
            </a>
          )}
        </div>
      </section>

      <section className="section section--band">
        <div className="container">
          <SectionHead eyebrow="Process" title={data.stepsTitle} />
          <ol className="svc-steps">
            {data.steps.map((s) => (
              <li key={s.n} data-reveal>
                <span className="svc-step-n" aria-hidden="true">{s.n}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="svc-guarantee" data-reveal>
            <h3>{data.guarantee.title}</h3>
            {data.guarantee.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section container svc-tight">
        <SectionHead
          center
          eyebrow="Questions"
          title="Speed optimization, answered"
        />
        <div className="faq-wrap" data-reveal>
          {data.faqs.map((f, i) => (
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

      <section className="section section--band">
        <div className="container svc-final">
          <h2>{data.finalCta.title}</h2>
          <p>{data.finalCta.body}</p>
          <a className="btn btn-primary mag" href={data.finalCta.cta.href}>
            {data.finalCta.cta.label} {Icons.arrow({ size: 15 })}
          </a>
          <div className="svc-related">
            <span>Also see:</span>
            {data.related.map((r) => (
              <a key={r.href} href={r.href}>{r.label}</a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
