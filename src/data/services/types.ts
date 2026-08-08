/* Shape of a service page. One data file per service in src/data/services/,
   rendered by components/services/ServicePageView. Keep all copy free of
   em dashes and all numbers verifiable (same rule as testimonials). */
import type { IconName } from '../../components/Icons';

export interface ServiceCta {
  label: string;
  href: string;
}

export interface ServicePageData {
  slug: string;
  /** Short name used in breadcrumbs, cards, and related-link labels. */
  name: string;
  eyebrow: string;
  h1: string;
  sub: string;
  primaryCta: ServiceCta;
  secondaryCta?: ServiceCta;
  /** Trust strip under the hero: [value, label] pairs, verified numbers only. */
  trust: Array<[value: string, label: string]>;
  problemTitle: string;
  problem: string[];
  deliverablesTitle: string;
  deliverablesLead: string;
  deliverables: Array<{ icon: IconName; title: string; desc: string }>;
  proof: {
    title: string;
    body: string[];
    stats: Array<[value: string, label: string]>;
    link?: { label: string; href: string };
  };
  stepsTitle: string;
  steps: Array<{ n: string; t: string; d: string }>;
  guarantee: { title: string; body: string[] };
  faqs: Array<{ q: string; a: string }>;
  related: ServiceCta[];
  finalCta: { title: string; body: string; cta: ServiceCta };
}
