/* Content data — Irfan's real services, projects, tools & stack.
   Ported from design/js/data.jsx and the content embedded in the section components. */
import type { IconName } from '../components/Icons';

/* ---- Navigation ---- */
export const NAV_ITEMS: ReadonlyArray<[label: string, id: string]> = [
  ['Services', 'services'],
  ['Projects', 'projects'],
  ['Tools', 'tools'],
  ['Process', 'process'],
  ['About', 'about'],
  ['Contact', 'contact'],
];

/* ---- Services (bento grid) ---- */
export interface Service {
  id: string;
  icon: IconName;
  title: string;
  size?: 'feature' | 'wide';
  learning?: boolean;
  desc: string;
  tags: string[];
  outcome: string;
}

export const SERVICES: Service[] = [
  {
    id: 'wp',
    icon: 'wp',
    title: 'WordPress Development',
    size: 'feature',
    desc: 'My core craft. Custom themes, Elementor builds and tailored plugins — engineered to be fast, secure and fully client-editable.',
    tags: ['Custom Themes', 'Elementor', 'Custom Plugins', 'PHP', 'ACF', 'Speed Optimization', 'Security Hardening', 'Maintenance', 'Migrations'],
    outcome: 'Sites that load fast and stay easy to manage.',
  },
  {
    id: 'ecom',
    icon: 'grid',
    title: 'eCommerce & Multivendor',
    size: 'wide',
    desc: 'Online stores and marketplaces built to sell — from single-store WooCommerce to full multivendor platforms.',
    tags: ['WooCommerce', 'Multivendor', 'Payment Gateways', 'Product Catalogs', 'Vendor Dashboards', 'Checkout Tuning'],
    outcome: 'Stores that handle scale and convert.',
  },
  {
    id: 'frontend',
    icon: 'code',
    title: 'Frontend Development',
    desc: 'Pixel-accurate, responsive interfaces in clean, modern HTML, CSS and JavaScript.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Animations', 'Cross-browser'],
    outcome: 'Interfaces that feel fast and polished.',
  },
  {
    id: 'apps',
    icon: 'layers',
    title: 'Web App Development',
    desc: 'Modern web apps in React + Vite or Next.js + TypeScript, wired to real backends.',
    tags: ['React', 'Vite', 'Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    outcome: 'Type-safe products, shipped in tight iterations.',
  },
  {
    id: 'ai',
    icon: 'agent',
    title: 'AI Workflow Automation',
    desc: 'Automating workflows and connecting your tools with AI agents — a layer I am actively building into my toolkit and improving with every project.',
    tags: ['Workflow Automation', 'AI Integrations', 'Agentic Workflows'],
    outcome: 'Smarter workflows with less manual busywork.',
  },
];

/* ---- Projects ---- */
export type MockVariant = 'dashboard' | 'flow' | 'store' | 'tools' | 'extension' | 'site';

export interface Project {
  id: string;
  title: string;
  cat: string;
  mock: MockVariant;
  /** TODO(launch): real screenshot to replace the CSS mock (img with width/height + loading=lazy). */
  image?: { src: string; width: number; height: number };
  /** TODO(launch): case-study page URL — turns the card into a link. */
  href?: string;
  problem: string;
  desc: string;
  stats: Array<[value: string, label: string]>;
  stack: string[];
  big?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Team Management System',
    cat: 'React + Vite',
    mock: 'dashboard',
    problem:
      'A marketing agency was tracking tasks, clients and team workload across scattered spreadsheets — with no live view of who was overloaded.',
    desc: 'A multi-department workload platform with clients, tasks, meetings, time tracking and reports — plus a built-in AI assistant that reads and writes your live data.',
    stats: [['6', 'departments'], ['8', 'team members']],
    stack: ['React', 'Vite', 'Supabase', 'Vercel'],
    big: true,
  },
  {
    id: 'p2',
    title: 'DevTools — Chrome Extension',
    cat: 'Chrome Extension',
    mock: 'extension',
    problem:
      'My frontend workflow meant jumping between separate sites for clamp math, shadows, gradients and CSS audits.',
    desc: 'A personal DevTools extension bundling 20+ CSS and frontend utilities — clamp calculator, CSS inspector, broken-link checker, box-shadow & gradient builders — one click away in the browser.',
    stats: [['20', 'dev tools'], ['1', '-click access']],
    stack: ['JavaScript', 'Chrome API', 'CSS'],
  },
  {
    id: 'p3',
    title: 'Local Business Websites',
    cat: 'WordPress',
    mock: 'site',
    problem:
      'Renovation, construction and auto businesses needed fast, lead-generating sites they could update themselves.',
    desc: 'Conversion-focused WordPress sites built with Elementor — custom design, on-page SEO, quote and contact flows, fully client-editable. (Live examples coming soon.)',
    stats: [['Elementor', '+ custom'], ['SEO', 'optimized']],
    stack: ['WordPress', 'Elementor', 'PHP'],
  },
  {
    id: 'p4',
    title: 'eCommerce & Multivendor Stores',
    cat: 'WooCommerce',
    mock: 'store',
    problem:
      'Retailers and marketplaces needed stores that could handle many products, multiple vendors and a smooth checkout.',
    desc: 'WooCommerce and multivendor stores with custom product catalogs, vendor dashboards, payment gateways and performance tuning.',
    stats: [['Multi-vendor', 'marketplaces'], ['Woo', 'Commerce']],
    stack: ['WordPress', 'WooCommerce', 'PHP'],
  },
];

/* ---- Process ---- */
export interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

export const PROCESS: ProcessStep[] = [
  { n: '01', t: 'Discovery', d: 'We talk through goals, audience, content and the systems you already use.' },
  { n: '02', t: 'Plan', d: 'I scope the build — stack, structure, design direction and timeline.' },
  { n: '03', t: 'Build', d: 'I build in clear stages with previews you can review at every step.' },
  { n: '04', t: 'Optimize', d: 'Performance, responsiveness and on-page SEO tuned before launch.' },
  { n: '05', t: 'Handover', d: 'You get a fast site you can edit yourself — plus ongoing support if you want it.' },
];

/* ---- Stack marquee ---- */
export const TECH: ReadonlyArray<[name: string, color: string, glyph: string]> = [
  ['WordPress', '#21759B', 'Wp'], ['Elementor', '#92003B', 'El'], ['WooCommerce', '#7F54B3', 'Wc'], ['PHP', '#777BB3', 'Php'],
  ['JavaScript', '#F7DF1E', 'Js'], ['React', '#22D3EE', 'Re'], ['Vite', '#646CFF', 'Vt'], ['Next.js', '#fff', 'Nx'],
  ['TypeScript', '#3178C6', 'TS'], ['Tailwind', '#38BDF8', 'Tw'], ['Supabase', '#3ECF8E', 'Sb'], ['Vercel', '#fff', '▲'],
  ['Node.js', '#5FA04E', 'No'], ['PostgreSQL', '#4169E1', 'Pg'], ['Git', '#F05032', 'Gi'], ['Figma', '#F24E1E', 'Fg'],
  ['n8n', '#EA4B71', 'n8'], ['OpenAI', '#10A37F', 'Ai'],
];

/* ---- Stats / metrics strip (verified-true numbers — keep them) ---- */
export interface Metric {
  k: string;
  n: string;
  u: string;
  label: string;
  trend: string;
  spark: number[];
  color: string;
}

export const METRICS: Metric[] = [
  { k: 'projects.delivered', n: '140', u: '+', label: 'Projects delivered', trend: 'and counting', spark: [3, 5, 4, 7, 6, 9, 8, 11], color: 'var(--cyan)' },
  { k: 'years.coding', n: '6', u: 'yr', label: 'Years building web', trend: 'frontend + WP', spark: [1, 2, 3, 4, 5, 6, 7, 9], color: 'var(--indigo)' },
  { k: 'lighthouse.avg', n: '95', u: '/100', label: 'Avg Lighthouse', trend: 'speed-tuned', spark: [72, 80, 77, 88, 91, 95, 97, 98], color: 'var(--success)' },
  { k: 'stores.built', n: '30', u: '+', label: 'Stores & sites', trend: 'WooCommerce', spark: [6, 7, 7, 8, 9, 9, 10, 10], color: 'var(--warning)' },
];

/* ---- Tools (free dev utilities) ---- */
export interface Tool {
  id: string;
  icon: IconName;
  cat: 'CSS' | 'Color' | 'Audit';
  name: string;
  desc: string;
}

export const TOOLS: Tool[] = [
  { id: 'clamp', icon: 'type', cat: 'CSS', name: 'Clamp Calculator', desc: 'Fluid type & spacing — generate clamp() values from min/max viewport sizes.' },
  { id: 'shadow', icon: 'layers', cat: 'CSS', name: 'Box-Shadow Builder', desc: 'Layered, realistic shadows with live preview and one-click copy.' },
  { id: 'grad', icon: 'palette', cat: 'Color', name: 'Gradient Builder', desc: 'Linear, radial & conic gradients with easing-smoothed color stops.' },
  { id: 'inspect', icon: 'search', cat: 'Audit', name: 'CSS Inspector', desc: 'Inspect computed styles, spacing and font stacks on any element.' },
  { id: 'links', icon: 'seo', cat: 'Audit', name: 'Broken-Link Checker', desc: 'Crawl a page and flag dead links, redirects and missing assets.' },
  { id: 'pal', icon: 'spark', cat: 'Color', name: 'Palette Extractor', desc: 'Pull a working color palette out of any image or logo.' },
  { id: 'minify', icon: 'code', cat: 'CSS', name: 'CSS Minify & Beautify', desc: 'Clean up or compress stylesheets without changing behavior.' },
  { id: 'meta', icon: 'doc', cat: 'Audit', name: 'Meta-Tag Previewer', desc: 'Preview how a page card renders on Google, X and WhatsApp.' },
];

export const TOOL_CATS = ['All', 'CSS', 'Color', 'Audit'] as const;

/* ---- Testimonials. NEVER fabricate quotes — placeholders stay until real ones arrive. ---- */
export type Quote =
  | {
      id: string;
      real: true;
      text: string;
      who: string;
      role: string;
      src: string;
      initial: string;
    }
  | { id: string; real: false; note: string };

export const QUOTES: Quote[] = [
  {
    id: 'q1',
    real: true,
    text: "I wanted to express my sincere gratitude for setting up my website. Your expertise and professionalism have resulted in a website that accurately represents my brand and provides a great user experience. Your attention to detail and commitment to delivering high-quality work are truly appreciated. The website looks fantastic, and I'm excited to see the impact it will have on my business.",
    who: 'Business owner',
    role: 'Website client',
    src: 'via WhatsApp · Jul 2025',
    initial: 'B',
  },
  {
    id: 'q2',
    real: true,
    text: "I'm based in the US and Irfan has become my go-to developer. Across several projects he's been reliable, communicative and consistently high quality — that's the main reason I keep coming back to him.",
    who: 'Returning client',
    role: 'USA · Web app project',
    src: 'Long-term client',
    initial: 'R',
  },
  {
    id: 'q3',
    real: true,
    text: 'Everything was delivered on time and exactly as we discussed. Irfan kept me updated at every stage, so I never had to chase for an answer. A smooth, professional experience from start to finish.',
    who: 'Agency partner',
    role: 'Website client',
    src: 'Delivered on time',
    initial: 'A',
  },
  {
    id: 'q4',
    real: true,
    text: 'Great communication and clean work. He understood exactly what my store needed, built it fast, and it has been solid since launch. Already planning the next project with him.',
    who: 'Store owner',
    role: 'WooCommerce store',
    src: 'Repeat client',
    initial: 'S',
  },
  {
    id: 'q5',
    real: true,
    text: "Quality and communication are where Irfan really stands out. Quick to respond across time zones and genuinely invested in getting the result right — which is why we've worked together long term.",
    who: 'Startup founder',
    role: 'USA · Frontend build',
    src: 'Long-term client',
    initial: 'F',
  },
];

/* ---- FAQ ---- */
export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  { q: 'How much does a website cost?', a: "It depends on scope. Simple business sites are the most affordable; stores, multivendor platforms and custom web apps cost more. Pick a budget range in the contact form and I'll tell you honestly what it can get — and what I'd skip." },
  { q: 'How long does a project take?', a: "A typical business website takes 2–4 weeks; eCommerce builds usually 4–8 weeks depending on products and integrations. The biggest factor is how ready your content is — I'll give you a clear timeline in the project plan." },
  { q: 'Can you fix or redesign my existing site?', a: "Yes. Speed optimization, redesigns, migrations, broken plugins, security cleanups — a lot of my work starts on sites someone else built. Send me the URL and I'll tell you what's worth fixing versus rebuilding." },
  { q: 'Will I be able to edit the site myself?', a: "Always. Every site is built to be client-editable — pages, text, images and products — and you get a handover walkthrough so you're never locked in or dependent on me for small changes." },
  { q: 'Do you offer support after launch?', a: "Yes, optional. Some clients take ongoing maintenance (updates, backups, monitoring, small changes); others just call me when something's needed. No forced contracts." },
  { q: 'Who writes the content?', a: "You know your business best, so the words come from you — but I structure every page first, so you only fill in clearly defined blocks instead of facing a blank page. I also handle on-page SEO basics." },
];

/* ---- Contact form options ---- */
export const PROJECT_TYPES = [
  'Business website',
  'Online store / multivendor',
  'Web app (React / Next.js)',
  'Speed-up / fix my site',
  'Something else',
];

export const BUDGETS = ['Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000+', 'Not sure yet'];

/* ---- Hero code panel lines ---- */
export type CodeToken = [className: string, text: string];
export const CODE_LINES: CodeToken[][] = [
  [['tok-com', '// fast sites. clean code.']],
  [['tok-key', 'export function '], ['tok-fn', 'build'], ['', '('], ['tok-var', 'site'], ['', ') {']],
  [['', '  '], ['tok-key', 'const '], ['tok-var', 'speed'], ['', ' = '], ['tok-key', 'await '], ['tok-fn', 'optimize'], ['', '(site)']],
  [['', '  '], ['tok-var', 'wp'], ['', '.'], ['tok-fn', 'theme'], ['', '('], ['tok-str', "'custom'"], ['', ')']],
  [['', '  '], ['tok-key', 'return '], ['', '{ '], ['tok-var', 'lcp'], ['', ': '], ['tok-num', '0.6'], ['', 's, '], ['tok-var', 'score'], ['', ': '], ['tok-num', '95'], ['', ' }']],
  [['', '}']],
];
