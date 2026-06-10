/* Footer. Ported from Footer in design/js/closing.jsx. */
import { Icons } from '../Icons';
import { LINKS } from '../../config/links';
import { goSection } from '../../lib/scroll';

const COLS: Array<[title: string, links: Array<[label: string, id: string]>]> = [
  ['Services', [['WordPress', 'services'], ['eCommerce', 'services'], ['Frontend', 'services'], ['Web Apps', 'services']]],
  ['Explore', [['Projects', 'projects'], ['Tools', 'tools'], ['Process', 'process'], ['Contact', 'contact']]],
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
              Frontend developer &amp; WordPress expert building fast websites, online stores and
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
              {links.map(([label, id]) => (
                <a
                  key={label}
                  href={'#' + id}
                  onClick={(e) => {
                    e.preventDefault();
                    goSection(id);
                  }}
                >
                  {label}
                </a>
              ))}
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
          <small>© 2026 WebWithIrfan · Frontend &amp; WordPress development.</small>
          <small>{LINKS.email}</small>
        </div>
      </div>
    </footer>
  );
}
