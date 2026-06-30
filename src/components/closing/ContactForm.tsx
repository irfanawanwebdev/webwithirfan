/* Contact form — wired to a real backend with validation + honeypot.
   Replaces the design-only preview in design/js/closing.jsx.

   Backend: set VITE_FORM_ENDPOINT to a Formspree endpoint (or any handler that
   accepts a POST and returns 2xx). With no endpoint set it degrades to a
   prefilled mailto: so the form is never a dead end. */
import { useState, type FormEvent } from 'react';
import { Icons } from '../Icons';
import { FORM_ENDPOINT, LINKS } from '../../config/links';
import { PROJECT_TYPES, BUDGETS } from '../../data/content';

interface Fields {
  name: string;
  email: string;
  phone: string;
  type: string;
  budget: string;
  message: string;
}
type Errors = Partial<Record<keyof Fields, string>>;
type Status = 'idle' | 'submitting' | 'sent' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY: Fields = { name: '', email: '', phone: '', type: '', budget: '', message: '' };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Enter a valid email address.';
  if (f.message.trim().length < 10) e.message = 'A little more detail helps (10+ characters).';
  return e;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [touched, setTouched] = useState(false);

  const set = (k: keyof Fields, v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    if (touched) setErrors((prev) => ({ ...prev, [k]: validate({ ...fields, [k]: v })[k] }));
  };

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Project inquiry from ${fields.name || 'website'}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone || 'Not set'}\n` +
        `Project type: ${fields.type || 'Not set'}\nBudget: ${fields.budget || 'Not set'}\n\n${fields.message}`,
    );
    const cc = encodeURIComponent(LINKS.emailCc);
    window.location.href = `mailto:${LINKS.email}?cc=${cc}&subject=${subject}&body=${body}`;
  };

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);

    // Honeypot — if a bot filled the hidden field, pretend success and bail.
    const hp = (e.currentTarget.elements.namedItem('_gotcha') as HTMLInputElement)?.value;
    if (hp) {
      setStatus('sent');
      return;
    }

    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length) {
      // focus the first invalid field
      const first = Object.keys(errs)[0];
      document.getElementById('cf-' + first)?.focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      mailtoFallback();
      setStatus('sent');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setStatus('sent');
        setFields(EMPTY);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="cform cform-done" aria-live="polite">
        <span className="big-check">{Icons.check({ size: 26 })}</span>
        <h3>Message sent</h3>
        <p>Thanks. I will get back to you within 24 hours with a clear, honest plan.</p>
        <button
          className="btn btn-ghost"
          onClick={() => {
            setStatus('idle');
            setTouched(false);
            setErrors({});
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={submit} noValidate aria-label="Project inquiry form">
      {/* Honeypot: hidden from users + assistive tech, attractive to bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-company">Company (leave blank)</label>
        <input id="cf-company" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Formspree: send a copy to the second inbox and set the email subject. */}
      <input type="hidden" name="_cc" value={LINKS.emailCc} />
      <input type="hidden" name="_subject" value="New project inquiry from WebWithIrfan" />

      <div className="cform-row">
        <div className="cfield">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => set('name', e.target.value)}
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
            required
          />
          {errors.name && <span className="err" id="cf-name-err">{errors.name}</span>}
        </div>
        <div className="cfield">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => set('email', e.target.value)}
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            required
          />
          {errors.email && <span className="err" id="cf-email-err">{errors.email}</span>}
        </div>
      </div>

      <div className="cfield">
        <label htmlFor="cf-phone">Phone (optional)</label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          placeholder="+92 300 1234567"
          autoComplete="tel"
          value={fields.phone}
          onChange={(e) => set('phone', e.target.value)}
        />
      </div>

      <div className="cform-row">
        <div className="cfield">
          <label htmlFor="cf-type">Project type</label>
          <select
            id="cf-type"
            name="type"
            value={fields.type}
            onChange={(e) => set('type', e.target.value)}
          >
            <option value="" disabled>Select one…</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="cfield">
          <label htmlFor="cf-budget">Budget range</label>
          <select
            id="cf-budget"
            name="budget"
            value={fields.budget}
            onChange={(e) => set('budget', e.target.value)}
          >
            <option value="" disabled>Select one…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="cfield">
        <label htmlFor="cf-message">Your project</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="What are you building? Links, deadlines, and examples all help."
          value={fields.message}
          onChange={(e) => set('message', e.target.value)}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'cf-msg-err' : undefined}
          required
        />
        {errors.message && <span className="err" id="cf-msg-err">{errors.message}</span>}
      </div>

      {status === 'error' && (
        <p className="cform-error" role="alert">
          Something went wrong sending your message. Please email{' '}
          <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a> directly.
        </p>
      )}

      <div className="cform-foot">
        <button type="submit" className="btn btn-primary mag" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'} {Icons.arrow({ size: 15 })}
        </button>
        <span className="cform-note">replies in ~24h · no sales fluff</span>
      </div>
    </form>
  );
}
