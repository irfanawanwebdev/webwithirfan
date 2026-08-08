/* Root layout — owns everything the old index.html <head> carried: fonts,
   global CSS, sitewide metadata defaults, icons, and the JSON-LD graph.
   Per-page titles/descriptions/canonicals live in each page.tsx. */
import type { Metadata, Viewport } from 'next';
import '../src/styles/fonts.css';
import '../src/styles/tokens.css';
import '../src/styles/sections.css';
import '../src/styles/service-page.css';
import { SITE_URL } from '../src/config/links';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'WebWithIrfan | WordPress, eCommerce & Web App Developer',
    template: '%s | WebWithIrfan',
  },
  description:
    "I'm Irfan, a WordPress and frontend developer. I build fast websites, online stores, and web apps in React and Next.js, and I fix and speed up sites too.",
  authors: [{ name: 'Irfan Awan' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'WebWithIrfan',
    images: [{ url: '/og-cover.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-cover.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#070B14',
  colorScheme: 'dark',
};

/* Structured data: WebPage + Person + ProfessionalService (ported verbatim
   from the old index.html). */
const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webwithirfan.com/#webpage',
      url: 'https://webwithirfan.com/',
      name: 'WebWithIrfan | WordPress, eCommerce & Web App Developer',
      description:
        "I'm Irfan, a WordPress and frontend developer. I build fast websites, online stores, and web apps in React and Next.js, and I fix and speed up sites too.",
      inLanguage: 'en',
      datePublished: '2025-07-01',
      dateModified: '2026-08-04',
      about: { '@id': 'https://webwithirfan.com/#irfan' },
      mainEntity: { '@id': 'https://webwithirfan.com/#service' },
    },
    {
      '@type': 'Person',
      '@id': 'https://webwithirfan.com/#irfan',
      name: 'Irfan Awan',
      alternateName: 'WebWithIrfan',
      jobTitle: 'Frontend Developer & WordPress Expert',
      url: 'https://webwithirfan.com/',
      email: 'mailto:info@webwithirfan.com',
      telephone: '+923472934523',
      image: 'https://webwithirfan.com/og-cover.png',
      knowsAbout: [
        'WordPress',
        'WooCommerce',
        'PHP',
        'JavaScript',
        'React',
        'Next.js',
        'TypeScript',
        'Frontend Development',
        'Web Performance Optimization',
      ],
      sameAs: [
        'https://github.com/irfanawanwebdev',
        'https://www.linkedin.com/in/muhammad-irfan-webdev/',
        'https://facebook.com/IrfanAwanDev',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://webwithirfan.com/#service',
      name: 'WebWithIrfan',
      description:
        'I build custom websites, WooCommerce and multivendor stores, and web apps in React and Next.js.',
      url: 'https://webwithirfan.com/',
      email: 'mailto:info@webwithirfan.com',
      telephone: '+923472934523',
      image: 'https://webwithirfan.com/og-cover.png',
      priceRange: '$$',
      founder: { '@id': 'https://webwithirfan.com/#irfan' },
      provider: { '@id': 'https://webwithirfan.com/#irfan' },
      areaServed: 'Worldwide',
      knowsAbout: [
        'WordPress Development',
        'eCommerce',
        'Multivendor Marketplaces',
        'React',
        'Next.js',
      ],
      sameAs: [
        'https://github.com/irfanawanwebdev',
        'https://www.linkedin.com/in/muhammad-irfan-webdev/',
        'https://facebook.com/IrfanAwanDev',
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
