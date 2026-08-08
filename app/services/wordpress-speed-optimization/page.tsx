/* /services/wordpress-speed-optimization/ — flagship service page.
   Primary keyword: "wordpress speed optimization service". Content lives in
   src/data/services/wordpress-speed-optimization.ts. */
import type { Metadata } from 'next';
import { PageShell } from '../../../src/components/PageShell';
import { ServicePageView } from '../../../src/components/services/ServicePageView';
import { wordpressSpeedOptimization as data } from '../../../src/data/services/wordpress-speed-optimization';
import { SITE_URL } from '../../../src/config/links';

const PAGE_URL = `${SITE_URL}/services/${data.slug}/`;
const TITLE = 'WordPress Speed Optimization Service | 90+ PageSpeed Scores';
const DESCRIPTION =
  'Slow WordPress or WooCommerce site? I take it to a 90+ PageSpeed score with caching, image optimization, and Core Web Vitals fixes. Free audit, fixed price.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/services/${data.slug}/` },
  /* Pages must carry COMPLETE openGraph/twitter objects: Next replaces the
     layout's, it does not deep-merge. */
  openGraph: {
    type: 'website',
    siteName: 'WebWithIrfan',
    url: `/services/${data.slug}/`,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-cover.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-cover.png'],
  },
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services/` },
        { '@type': 'ListItem', position: 3, name: data.name, item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: data.name,
      serviceType: 'WordPress speed optimization',
      description: DESCRIPTION,
      url: PAGE_URL,
      provider: { '@id': `${SITE_URL}/#irfan` },
      areaServed: 'Worldwide',
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: data.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function WordPressSpeedOptimizationPage() {
  return (
    <PageShell>
      <ServicePageView data={data} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
    </PageShell>
  );
}
