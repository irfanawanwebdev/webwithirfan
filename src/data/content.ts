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
    desc: 'This is my main work. I build custom themes, Elementor sites, and plugins made for what you need. They load fast, stay secure, and you can edit them yourself.',
    tags: ['Custom Themes', 'Elementor', 'Custom Plugins', 'PHP', 'ACF', 'Speed Optimization', 'Security Hardening', 'Maintenance', 'Migrations'],
    outcome: 'A fast site that stays easy to manage.',
  },
  {
    id: 'ecom',
    icon: 'grid',
    title: 'eCommerce & Multivendor',
    size: 'wide',
    desc: 'Online stores and marketplaces made to sell. I build everything from a single WooCommerce shop to a full multivendor platform.',
    tags: ['WooCommerce', 'Multivendor', 'Payment Gateways', 'Product Catalogs', 'Vendor Dashboards', 'Checkout Tuning'],
    outcome: 'Stores that grow with you and turn visitors into buyers.',
  },
  {
    id: 'frontend',
    icon: 'code',
    title: 'Frontend Development',
    desc: 'Clean, responsive pages in modern HTML, CSS, and JavaScript. They match your design and work well on every screen.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Animations', 'Cross-browser'],
    outcome: 'Pages that feel fast and look sharp.',
  },
  {
    id: 'apps',
    icon: 'layers',
    title: 'Web App Development',
    desc: 'Web apps in React with Vite, or Next.js with TypeScript, connected to a real backend like Supabase.',
    tags: ['React', 'Vite', 'Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    outcome: 'Solid products, shipped in small, steady steps.',
  },
  {
    id: 'ai',
    icon: 'agent',
    title: 'AI Workflow Automation',
    desc: 'I connect your tools and automate the repeat tasks that eat your time. This is a newer part of my work, and I keep improving it with every project.',
    tags: ['Workflow Automation', 'AI Integrations', 'Agentic Workflows'],
    outcome: 'Less busywork, so you spend time on what matters.',
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
      'A marketing agency tracked tasks, clients, and team workload across many spreadsheets. They had no clear view of who had too much on their plate.',
    desc: 'I built a workload platform for six departments. It handles clients, tasks, meetings, time tracking, and reports, with a built-in assistant that reads and updates live data.',
    stats: [['6', 'departments'], ['8', 'team members']],
    stack: ['React', 'Vite', 'Supabase', 'Vercel'],
    big: true,
  },
  {
    id: 'p2',
    title: 'DevTools Chrome Extension',
    cat: 'Chrome Extension',
    mock: 'extension',
    problem:
      'My frontend work meant jumping between many sites for clamp math, shadows, gradients, and CSS checks.',
    desc: 'So I built one Chrome extension with 20+ CSS and frontend tools. It has a clamp calculator, CSS inspector, broken link checker, and box shadow and gradient builders, all one click away.',
    stats: [['20', 'dev tools'], ['1', '-click access']],
    stack: ['JavaScript', 'Chrome API', 'CSS'],
  },
  {
    id: 'p3',
    title: 'Local Business Websites',
    cat: 'WordPress',
    mock: 'site',
    problem:
      'Renovation, construction, and auto businesses needed fast sites that bring in leads and that they can update on their own.',
    desc: 'I built WordPress sites with Elementor that focus on getting more enquiries. Custom design, on-page SEO, and quote and contact forms, all easy for the owner to edit. (Live examples coming soon.)',
    stats: [['Elementor', '+ custom'], ['SEO', 'optimized']],
    stack: ['WordPress', 'Elementor', 'PHP'],
  },
  {
    id: 'p4',
    title: 'eCommerce & Multivendor Stores',
    cat: 'WooCommerce',
    mock: 'store',
    problem:
      'Retailers and marketplaces needed stores that handle lots of products, many vendors, and a smooth checkout.',
    desc: 'I built WooCommerce and multivendor stores with custom product catalogs, vendor dashboards, payment gateways, and speed tuning.',
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
  { n: '01', t: 'Discovery', d: 'We talk through your goals, your audience, your content, and the tools you already use.' },
  { n: '02', t: 'Plan', d: 'I map out the build: the tech, the structure, the design direction, and the timeline.' },
  { n: '03', t: 'Build', d: 'I build in clear stages and share previews so you can review every step.' },
  { n: '04', t: 'Optimize', d: 'I tune speed, mobile layout, and on-page SEO before we go live.' },
  { n: '05', t: 'Handover', d: 'You get a fast site you can edit yourself, plus ongoing support if you want it.' },
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
  { id: 'clamp', icon: 'type', cat: 'CSS', name: 'Clamp Calculator', desc: 'Fluid type and spacing. Get clamp() values from your min and max viewport sizes.' },
  { id: 'shadow', icon: 'layers', cat: 'CSS', name: 'Box-Shadow Builder', desc: 'Build layered, realistic shadows with a live preview and one-click copy.' },
  { id: 'grad', icon: 'palette', cat: 'Color', name: 'Gradient Builder', desc: 'Make linear, radial, and conic gradients with smooth color stops.' },
  { id: 'inspect', icon: 'search', cat: 'Audit', name: 'CSS Inspector', desc: 'Check computed styles, spacing, and font stacks on any element.' },
  { id: 'links', icon: 'seo', cat: 'Audit', name: 'Broken-Link Checker', desc: 'Scan a page and flag dead links, redirects, and missing files.' },
  { id: 'pal', icon: 'spark', cat: 'Color', name: 'Palette Extractor', desc: 'Pull a ready color palette from any image or logo.' },
  { id: 'minify', icon: 'code', cat: 'CSS', name: 'CSS Minify & Beautify', desc: 'Clean up or shrink your stylesheets without changing how they work.' },
  { id: 'meta', icon: 'doc', cat: 'Audit', name: 'Meta-Tag Previewer', desc: 'See how your page card looks on Google, X, and WhatsApp.' },
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
    text: "I'm based in the US and Irfan has become my go-to developer. Across several projects he's been reliable, communicative and consistently high quality, and that's the main reason I keep coming back to him.",
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
    text: "Quality and communication are where Irfan really stands out. Quick to respond across time zones and genuinely invested in getting the result right, which is why we've worked together long term.",
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
  { q: 'How much does a website cost?', a: "It depends on the scope. Simple business sites cost the least. Stores, multivendor platforms, and custom web apps cost more. Pick a budget range in the form, and I will tell you honestly what it can cover and what I would leave out." },
  { q: 'How long does a project take?', a: "A typical business website takes 2 to 4 weeks. Online stores usually take 4 to 8 weeks, based on products and integrations. The biggest factor is how ready your content is, and I give you a clear timeline in the project plan." },
  { q: 'Can you fix or redesign my existing site?', a: "Yes. Speed fixes, redesigns, migrations, broken plugins, and security cleanups. A lot of my work starts on sites someone else built. Send me the URL, and I will tell you what is worth fixing and what is better to rebuild." },
  { q: 'Will I be able to edit the site myself?', a: "Always. I build every site so you can edit it yourself: pages, text, images, and products. You also get a handover walkthrough, so you are never stuck waiting on me for small changes." },
  { q: 'Do you offer support after launch?', a: "Yes, and it is optional. Some clients take ongoing care like updates, backups, monitoring, and small changes. Others just call me when they need something. There are no locked-in contracts." },
  { q: 'Who writes the content?', a: "You know your business best, so the words come from you. I set up the structure of every page first, so you just fill in clear blocks instead of staring at a blank page. I also handle the on-page SEO basics." },
];

/* ---- Contact form options ---- */
export const PROJECT_TYPES = [
  'Business website',
  'Online store / multivendor',
  'Web app (React / Next.js)',
  'Speed-up / fix my site',
  'Something else',
];

export const BUDGETS = ['Under $500', '$500 to $1,500', '$1,500 to $5,000', '$5,000+', 'Not sure yet'];

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
