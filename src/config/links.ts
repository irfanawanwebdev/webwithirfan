/**
 * Centralized external links & site config.
 *
 * Components import from this single module so there is one source of truth —
 * change a URL once and it updates everywhere.
 */

export const LINKS = {
  github: 'https://github.com/irfanawanwebdev',
  linkedin: 'https://www.linkedin.com/in/muhammad-irfan-webdev/',
  facebook: 'https://facebook.com/IrfanAwanDev',
  email: 'info@webwithirfan.com',
  // Phone is used for both the "Call" channel and WhatsApp.
  phoneDisplay: '+92 347 2934523',
  tel: 'tel:+923472934523',
  whatsapp: 'https://wa.me/923472934523',
} as const;

/** Public site origin — used for canonical/OG/sitemap. */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://webwithirfan.com';

/**
 * Contact-form backend. Set VITE_FORM_ENDPOINT to a Formspree endpoint
 * (https://formspree.io/f/xxxx) or any handler that accepts a POST of form
 * fields and returns 2xx. When unset, the form degrades to a mailto: link.
 */
export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';

/** Location shown in the About fact chips. */
export const ABOUT_LOCATION = 'Multan, Pakistan · PKT (UTC+5)';
