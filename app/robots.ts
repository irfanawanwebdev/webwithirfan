/* Generated robots.txt (replaces the old public/robots.txt). */
import type { MetadataRoute } from 'next';
import { SITE_URL } from '../src/config/links';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
