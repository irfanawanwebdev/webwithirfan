/* Generated sitemap (replaces the old public/sitemap.xml).
   Add one entry per route as pages ship, with a real lastModified date —
   this is part of the "new service page" checklist in docs/nextjs-migration.md. */
import type { MetadataRoute } from 'next';
import { SITE_URL } from '../src/config/links';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: '2026-08-04',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy/`,
      lastModified: '2026-08-04',
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
