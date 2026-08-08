/* WordPress Speed Optimization service page.
   Target keywords (Ahrefs, US): "wordpress speed optimization service" (500/mo,
   KD 11), "website speed optimization service" (300, KD 12), "core web vitals
   optimization" (450, KD 10), "woocommerce speed optimization" (100, KD 5). */
import type { ServicePageData } from './types';

export const wordpressSpeedOptimization: ServicePageData = {
  slug: 'wordpress-speed-optimization',
  name: 'WordPress Speed Optimization',
  eyebrow: 'Services · Speed',
  h1: 'WordPress Speed Optimization Service',
  sub: 'I take slow WordPress and WooCommerce sites to 90+ PageSpeed scores with caching, image optimization, and Core Web Vitals fixes. Most sites are done in 3 to 5 days, with a before and after report you can check yourself.',
  primaryCta: { label: 'Get a free speed audit', href: '/#contact' },
  secondaryCta: { label: 'See what is included', href: '#whats-included' },
  trust: [
    ['95/100', 'avg Lighthouse score'],
    ['140+', 'projects delivered'],
    ['6+', 'years building for the web'],
    ['~24h', 'reply time'],
  ],
  problemTitle: 'A slow site quietly costs you every single day',
  problem: [
    'Visitors leave before the page finishes loading. Google measures that through Core Web Vitals (LCP, INP, and CLS) and ranks faster sites above slower ones. If your WordPress site takes more than a few seconds to load, you are paying for it twice: in lost sales and in lost rankings.',
    'The usual suspects are a heavy theme, too many plugins doing overlapping work, full-size images, no real caching, and hosting that was never configured properly. None of that means rebuilding your site. In most cases the site you already have can be made fast.',
  ],
  deliverablesTitle: 'What is included',
  deliverablesLead: 'A complete optimization pass, not a plugin install. Every item comes with notes on what was changed and why.',
  deliverables: [
    {
      icon: 'search',
      title: 'Full speed audit',
      desc: 'PageSpeed Insights, Lighthouse, and real-device testing to find what is actually slowing your site down, before anything gets changed.',
    },
    {
      icon: 'layers',
      title: 'Caching done right',
      desc: 'Page, browser, and object caching configured for your exact hosting, so repeat visits and busy periods stay fast.',
    },
    {
      icon: 'palette',
      title: 'Image optimization',
      desc: 'Conversion to WebP or AVIF, correct sizing, compression, and lazy loading. Images are the number one weight on most WordPress sites.',
    },
    {
      icon: 'code',
      title: 'CSS and JavaScript cleanup',
      desc: 'Minification, deferring, and removal of unused code so the browser stops waiting on files your page never needed.',
    },
    {
      icon: 'grid',
      title: 'Database cleanup',
      desc: 'Old revisions, expired transients, bloated autoload data, and leftover plugin tables cleared out safely.',
    },
    {
      icon: 'wp',
      title: 'Plugin and theme audit',
      desc: 'The honest list: which plugins are hurting you, which have lighter replacements, and which can simply go.',
    },
    {
      icon: 'spark',
      title: 'Core Web Vitals fixes',
      desc: 'Targeted work on LCP, INP, and CLS, the three numbers Google actually uses in ranking.',
    },
    {
      icon: 'seo',
      title: 'CDN and hosting configuration',
      desc: 'Cloudflare or your host CDN set up properly, plus server-level settings like PHP version and compression. WooCommerce cart and checkout tuning included for stores.',
    },
  ],
  proof: {
    title: 'The proof loads in front of you',
    body: [
      'This site is my own work: prerendered pages, optimized images, self-hosted fonts, and no bloat. Do not take my word for it. Run it through PageSpeed Insights right now and watch the score come back.',
      'The same discipline goes into client work. Speed tuning is part of every site I deliver, which is where the average Lighthouse score below comes from.',
    ],
    stats: [
      ['95/100', 'average Lighthouse score across projects'],
      ['140+', 'projects delivered'],
      ['30+', 'stores and sites, WooCommerce included'],
    ],
    link: {
      label: 'Test this site on PageSpeed Insights',
      href: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwebwithirfan.com%2F',
    },
  },
  stepsTitle: 'How it works',
  steps: [
    { n: '01', t: 'Free audit', d: 'Send your URL. I test the site and send you the main problems and the score range I expect to reach, free.' },
    { n: '02', t: 'Fixed quote', d: 'One price for the whole job, agreed before any work starts. No hourly meter.' },
    { n: '03', t: 'Backup, then fix', d: 'Full backup first, staging where possible. Then I work through the audit list item by item.' },
    { n: '04', t: 'Measure', d: 'Before and after scores from PageSpeed Insights on the same pages, so the improvement is verifiable.' },
    { n: '05', t: 'Handover', d: 'A plain-language report of everything changed, plus optional monthly care to keep it fast.' },
  ],
  guarantee: {
    title: 'The audit is free, and so is honesty',
    body: [
      'Every project starts with a free audit. If I look at your site and do not believe I can improve it meaningfully, I tell you that before you spend anything.',
      'You get one fixed price for the whole optimization, agreed up front after the audit. Send your URL through the form with the project type "Speed-up / fix my site" and you will have the audit back within about 24 hours.',
    ],
  },
  faqs: [
    {
      q: 'How long does WordPress speed optimization take?',
      a: 'Most sites take 3 to 5 days from access to final report. Large WooCommerce stores or sites with heavy page builders can take a few days longer, and I tell you that in the audit before you commit.',
    },
    {
      q: 'What PageSpeed score can you actually reach?',
      a: 'Most WordPress sites I optimize land at 90 or above on desktop and 80 to 95 on mobile. The honest exceptions are sites loaded with ad scripts, trackers, or very heavy page builders, where I give you a realistic range in the free audit instead of a promise I cannot keep.',
    },
    {
      q: 'Will anything on my site break?',
      a: 'A full backup is taken before any work starts, and changes are tested on a staging copy where the hosting allows it. Optimization is done step by step, so if any change conflicts with a plugin, it is caught and rolled back immediately.',
    },
    {
      q: 'Do you optimize WooCommerce stores?',
      a: 'Yes, and stores benefit the most. WooCommerce adds its own weight through cart fragments, sessions, and checkout scripts, so store optimization covers those specifically along with everything in the standard list.',
    },
    {
      q: 'Do I need to change my hosting?',
      a: 'Usually not. Most sites can be made fast on the hosting they already have. If your host is genuinely the bottleneck, the audit will show it, and I recommend a move only when the numbers justify it.',
    },
    {
      q: 'Why is my WordPress site slow?',
      a: 'The most common causes are unoptimized images, too many plugins, a heavy theme, no caching, an old PHP version, and a bloated database. It is almost never one single thing, which is why a proper audit comes before any fixes.',
    },
    {
      q: 'Is this a one-time job or ongoing?',
      a: 'The optimization itself is a one-time project with a fixed price. Sites do slow down again as plugins update and content grows, so an optional monthly care plan is available to keep the scores where we left them. No lock-in either way.',
    },
    {
      q: 'What do you need from me to start?',
      a: 'WordPress admin access and, ideally, hosting panel access. If you prefer, we start on a staging copy. Everything I change is documented in the final report.',
    },
  ],
  related: [
    { label: 'All services', href: '/services/' },
    { label: 'WordPress development', href: '/#services' },
    { label: 'Free dev tools', href: '/#tools' },
  ],
  finalCta: {
    title: 'Find out how fast your site can be',
    body: 'Send your URL and get a free speed audit back within about 24 hours: the main problems, the score I expect to reach, and one fixed price.',
    cta: { label: 'Send my URL for a free audit', href: '/#contact' },
  },
};
