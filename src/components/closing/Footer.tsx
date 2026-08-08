/* Footer. Ported from Footer in design/js/closing.jsx. */
import { Icons } from '../Icons';
import { LINKS } from '../../config/links';
import { goSection } from '../../lib/scroll';

/* href starting with "#" scrolls to a home section (cross-page aware via
   goSection); anything else is a normal page link. */
const COLS: Array<[title: string, links: Array<[label: string, href: string]>]> = [
  ['Services', [
    ['All services', '/services/'],
    ['Speed Optimization', '/services/wordpress-speed-optimization/'],
    ['WordPress', '#services'],
    ['eCommerce', '#services'],
    ['Web Apps', '#services'],
  ]],
  ['Explore', [['Projects', '#projects'], ['Tools', '#tools'], ['Process', '#process'], ['Contact', '#contact']]],
];

const EXT: Array<[label: string, url: string]> = [
  ['GitHub', LINKS.github],
  ['LinkedIn', LINKS.linkedin],
  ['Facebook', LINKS.facebook],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <a
              className="brand"
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                goSection('top');
              }}
            >
              <span className="brand-mark" aria-hidden="true">W</span>
              <span>WebWith<b>Irfan</b></span>
            </a>
            <p>
              Frontend developer and WordPress expert. I build fast websites, online stores, and
              modern web apps.
            </p>
            <div className="socials" style={{ marginTop: 20 }}>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                {Icons.github({ size: 17 })}
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {Icons.linkedin({ size: 17 })}
              </a>
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                {Icons.facebook({ size: 17 })}
              </a>
              <a href={'mailto:' + LINKS.email} aria-label="Email">
                {Icons.mail({ size: 17 })}
              </a>
            </div>
          </div>
          {COLS.map(([title, links]) => (
            <div className="footer-col" key={title}>
              <p className="fcol-title">{title}</p>
              {links.map(([label, href]) =>
                href.startsWith('#') ? (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      goSection(href.slice(1));
                    }}
                  >
                    {label}
                  </a>
                ) : (
                  <a key={label} href={href}>
                    {label}
                  </a>
                ),
              )}
            </div>
          ))}
          <div className="footer-col">
            <p className="fcol-title">Connect</p>
            {EXT.map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
            <a href={'mailto:' + LINKS.email}>Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <small>
            © 2026 WebWithIrfan · Frontend &amp; WordPress development.
            <span aria-hidden="true"> · </span>
            <a href="/privacy/">Privacy policy</a>
          </small>
          <small>
            Updated <time dateTime="2026-08">August 2026</time>
            <span aria-hidden="true"> · </span>
            {LINKS.email}
          </small>
        </div>
      </div>
    </footer>
  );
}
