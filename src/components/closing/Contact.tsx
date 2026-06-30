/* Contact CTA panel (copy + alt channels + form). Ported from CTA in design/js/closing.jsx. */
import { Icons } from '../Icons';
import { LINKS } from '../../config/links';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="section container">
      <div className="cta cta--contact" data-reveal>
        <div className="cta-grid">
          <div className="cta-copy">
            <span className="eyebrow">Let's build</span>
            <h2>Got a website, store or web app in mind?</h2>
            <p className="lead">
              Tell me what you are building. I will reply within 24 hours with a clear, honest plan.
            </p>
            <div className="cta-alt">
              <a href={'mailto:' + LINKS.email}>
                {Icons.mail({ size: 16 })} {LINKS.email}
              </a>
              <a href={LINKS.tel}>
                {Icons.phone({ size: 16 })} Call {LINKS.phoneDisplay}
              </a>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                {Icons.users({ size: 16 })} Chat on WhatsApp
              </a>
            </div>
            <span className="chip" style={{ marginTop: 8 }}>
              <span className="dot" /> Available for new projects · 2026
            </span>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
