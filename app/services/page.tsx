/* /services/ — index of all service pages. Cards without a live page yet
   render as non-links with a "coming soon" chip (no dead links for crawlers).
   As each service page ships: add it to LIVE below and to app/sitemap.ts. */
import type { Metadata } from 'next';
import { PageShell } from '../../src/components/PageShell';
import { SectionHead } from '../../src/components/SectionHead';
import { Icons } from '../../src/components/Icons';
import { SITE_URL } from '../../src/config/links';

const TITLE = 'Web Development Services';
const DESCRIPTION =
  'WordPress development, WooCommerce stores, speed optimization, maintenance, redesigns, and web apps in React and Next.js. Fixed quotes, honest timelines.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/services/' },
  openGraph: {
    type: 'website',
    siteName: 'WebWithIrfan',
    url: '/services/',
    title: `${TITLE} | WebWithIrfan`,
    description: DESCRIPTION,
    images: [{ url: '/og-cover.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | WebWithIrfan`,
    description: DESCRIPTION,
    images: ['/og-cover.png'],
  },
};

interface ServiceCard {
  name: string;
  desc: string;
  href?: string; // set when the page is live
}

const SERVICES_LIST: ServiceCard[] = [
  {
    name: 'WordPress Speed Optimization',
    desc: 'Slow site to 90+ PageSpeed scores in days: caching, image optimization, database cleanup, and Core Web Vitals fixes. Free audit first.',
    href: '/services/wordpress-speed-optimization/',
  },
  {
    name: 'WordPress Development',
    desc: 'Custom themes, Elementor builds, and plugins that load fast, stay secure, and are easy to edit yourself.',
  },
  {
    name: 'WooCommerce Development',
    desc: 'Stores and multivendor marketplaces built to sell: product catalogs, payment gateways, vendor dashboards, and checkout tuning.',
  },
  {
    name: 'WordPress Maintenance & Care Plans',
    desc: 'Updates, backups, security monitoring, and small changes handled every month, so your site stays fast and safe.',
  },
  {
    name: 'Website Redesign',
    desc: 'Your existing site rebuilt to look sharp and load fast, without losing the content and rankings you already have.',
  },
  {
    name: 'Web App Development',
    desc: 'Web apps in React and Next.js with TypeScript, connected to a real backend. Built in small, steady, reviewable steps.',
  },
  {
    name: 'WordPress SEO',
    desc: 'Technical SEO, on-page structure, and speed work that helps WordPress sites actually rank. Pairs with every service above.',
  },
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services/` },
  ],
};

export default function ServicesIndexPage() {
  return (
    <PageShell>
      <section className="svc-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>
          <span className="eyebrow">Services</span>
          <h1>Built for speed, built to sell</h1>
          <p className="svc-sub">
            Every service comes the same way: a clear plan, a fixed quote, previews at every
            stage, and a result you can edit yourself. Pick the one that fits, or start with
            the form and I will point you right.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="svcx-grid">
          {SERVICES_LIST.map((s) =>
            s.href ? (
              <a className="svcx-card" href={s.href} key={s.name}>
                <h2>{s.name}</h2>
                <p>{s.desc}</p>
                <span className="svcx-go">
                  View service {Icons.arrow({ size: 14 })}
                </span>
              </a>
            ) : (
              <div className="svcx-card" key={s.name}>
                <h2>{s.name}</h2>
                <p>{s.desc}</p>
                <span className="svcx-soon">detailed page coming soon</span>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="section section--band">
        <div className="container svc-final">
          <SectionHead
            center
            eyebrow="Start"
            title="Not sure which one you need?"
            lead="Describe the project in the contact form. You get an honest answer about scope, cost, and timeline within about 24 hours."
          />
          <a className="btn btn-primary mag" href="/#contact">
            Start a project {Icons.arrow({ size: 15 })}
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
    </PageShell>
  );
}
