/* Home page. Server component so it can export metadata; the interactive
   composition lives in src/App.tsx behind a single 'use client' boundary. */
import type { Metadata } from 'next';
import App from '../src/App';

export const metadata: Metadata = {
  title: { absolute: 'WebWithIrfan | WordPress, eCommerce & Web App Developer' },
  description:
    "I'm Irfan, a WordPress and frontend developer. I build fast websites, online stores, and web apps in React and Next.js, and I fix and speed up sites too.",
  alternates: { canonical: '/' },
  /* NOTE: Next does NOT deep-merge openGraph/twitter with the layout's —
     a page that sets either must set it completely (images, card, siteName). */
  openGraph: {
    type: 'website',
    siteName: 'WebWithIrfan',
    url: '/',
    title: 'WebWithIrfan | WordPress, eCommerce & Web App Developer',
    description:
      'I build fast websites, online stores, and web apps with WordPress, WooCommerce, React, and Next.js. Tell me what you need.',
    images: [{ url: '/og-cover.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebWithIrfan | WordPress, eCommerce & Web App Developer',
    description:
      'I build fast websites, online stores, and web apps with WordPress, WooCommerce, React, and Next.js. Tell me what you need.',
    images: ['/og-cover.png'],
  },
};

export default function HomePage() {
  return <App />;
}
