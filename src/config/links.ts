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
  // Second inbox that also gets a copy of every contact-form submission.
  emailCc: 'mirfanawan545@gmail.com',
  // Phone is used for both the "Call" channel and WhatsApp.
  phoneDisplay: '+92 347 2934523',
  tel: 'tel:+923472934523',
  whatsapp: 'https://wa.me/923472934523',
} as const;

/** Public site origin — used for canonical/OG/sitemap. */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://webwithirfan.com';

/**
 * Contact-form backend (Web3Forms). Get a free access key at https://web3forms.com
 * (enter your email, copy the key it sends you) and set it as VITE_WEB3FORMS_KEY.
 * The key is public by design — safe to ship in the client bundle. When unset,
 * the form degrades to a prefilled mailto: link so it is never a dead end.
 */
export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/** Location shown in the About fact chips. */
export const ABOUT_LOCATION = 'Multan, Pakistan · PKT (UTC+5)';
