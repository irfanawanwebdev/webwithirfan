/* About band. Ported from About in design/js/sections.jsx. */
import { Icons } from '../Icons';
import { ABOUT_LOCATION } from '../../config/links';
import aboutPhoto from '../../assets/Irfan_Awan_Profile_Pic.webp';

export function About() {
  return (
    <section id="about" className="section section--band">
      <div className="container about-grid">
        <div className="about-photo" data-reveal>
          <img
            src={aboutPhoto}
            alt="Irfan Awan, frontend developer and WordPress expert"
            width={699}
            height={727}
            loading="lazy"
            decoding="async"
          />
          <div className="float-chip">
            <span
              className="ico"
              style={{ background: 'rgba(99,102,241,.14)', border: '1px solid rgba(99,102,241,.4)' }}
            >
              {Icons.check({ size: 16 })}
            </span>
            <span>
              <b>140+ projects</b>
              <small>over 6 years</small>
            </span>
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow" data-reveal>About me</span>
          <h2 data-reveal>The developer behind the work.</h2>
          <p data-reveal>
            I'm <b>Irfan Awan</b>, a frontend developer and WordPress expert. For the last six
            years I have built websites, online stores, and web apps for small businesses and
            agencies. That adds up to 140+ projects, from local business sites to multivendor
            marketplaces.
          </p>
          <p data-reveal>
            My core stack is <b>WordPress, PHP, and JavaScript</b>. These days I also build apps
            in React and Next.js, and I am adding AI workflow automation to my toolkit.
            Every build comes down to the same three things:{' '}
            <b>speed, clean code, and a site you can edit yourself</b>.
          </p>
          <div className="about-facts" data-reveal>
            <span className="chip">6+ years building web</span>
            <span className="chip">WordPress · React · Next.js</span>
            <span className="chip">Remote · mostly USA clients</span>
            <span className="chip">{ABOUT_LOCATION}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
