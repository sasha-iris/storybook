/**
 * Iris Library — Shared brand assets
 *
 * Sources:
 *   Iris Logo / Smart mark  node 3778:41269  (file ZKtEULdYKaXe5uQl1J6ijI)
 *   Third-party brand icons node 11484:2633  (file ZKtEULdYKaXe5uQl1J6ijI)
 *
 * Iris mark PNGs are locally hosted in public/assets/ — no TTL.
 * Third-party icons use cdn.simpleicons.org — stable, no TTL.
 *
 * Usage:
 *   import { IRIS_MARK, irisMarkImg, irisLogo, BRAND_ICON_URLS, brandIcon48 } from './brand-assets.js';
 */

/* ═══════════════════════════════════════════════════════════════════
   IRIS SMART MARK
   Hexagonal brand mark. 4 sizes × light + dark modes.
   Source: Figma node 3778:41269 — Smart component variants.
   Locally hosted PNGs — no expiry.
   xs dark is a 7-vector assembly in Figma with no composite raster;
   it falls back to the xs light mark.
═══════════════════════════════════════════════════════════════════ */

export const IRIS_MARK = {
  /* Light mode */
  xs:     './assets/iris-mark-xs.svg',     /* 24 px */
  sm:     './assets/iris-mark-sm.svg',     /* 32 px */
  md:     './assets/iris-mark-md.svg',     /* 48 px */
  lg:     './assets/iris-mark-lg.svg',     /* 64 px */
  /* Dark mode (sm / md / lg only — xs dark falls back to xs light) */
  smDark: './assets/iris-mark-sm-dark.svg', /* 32 px */
  mdDark: './assets/iris-mark-md-dark.svg', /* 48 px */
  lgDark: './assets/iris-mark-lg-dark.svg', /* 64 px */
};

/** Figma-exact size config from LogoNew component (node 3778:41269) */
export const IRIS_MARK_SIZES = {
  xs: { mark: 24, text: 18, lineHeight: '18px', gap:  8 },
  sm: { mark: 32, text: 24, lineHeight: '24px', gap: 12 },
  md: { mark: 48, text: 36, lineHeight: '36px', gap: 16 },
  lg: { mark: 64, text: 60, lineHeight: '60px', gap: 16 },
};

/**
 * Returns an `<img>` element for the Iris Smart mark.
 * @param {{ size?: 'xs'|'sm'|'md'|'lg', dark?: boolean }} opts
 */
export const irisMarkImg = ({ size = 'xs', dark = false } = {}) => {
  const s = IRIS_MARK_SIZES[size];
  const url = dark
    ? (IRIS_MARK[`${size}Dark`] || IRIS_MARK[size]) /* xs dark → falls back to xs light */
    : IRIS_MARK[size];
  return `<img src="${url}" height="${s.mark}" alt="Iris mark"
               style="display:block;flex-shrink:0;width:auto;">`;
};

/**
 * Returns the full Iris logo (mark + optional "Iris" text).
 * @param {{ size?: 'xs'|'sm'|'md'|'lg', dark?: boolean, showText?: boolean }} opts
 */
export const irisLogo = ({ size = 'xs', dark = false, showText = true } = {}) => {
  const s = IRIS_MARK_SIZES[size];
  const color = dark ? '#ffffff' : '#101828';
  return `<div style="display:inline-flex;align-items:center;gap:${s.gap}px;">
  ${irisMarkImg({ size, dark })}
  ${showText ? `<span style="font-size:${s.text}px;font-weight:600;line-height:${s.lineHeight};color:${color};white-space:nowrap;font-family:sans-serif;">Iris</span>` : ''}
</div>`;
};


/* ═══════════════════════════════════════════════════════════════════
   BRAND ICON URLS  (48 × 48 px containers, node 11484:2633)
   Uses cdn.simpleicons.org — stable SVG CDN, no expiry.
   null = no SimpleIcons equivalent; brandIcon48() uses SVG approximation.
═══════════════════════════════════════════════════════════════════ */

export const BRAND_ICON_URLS = {
  /* ── Social ── */
  facebookOriginal:   'https://cdn.simpleicons.org/facebook/1877F2',
  facebookDark:       'https://cdn.simpleicons.org/facebook/ffffff',
  linkedInOriginal:   'https://placehold.co/48x48/0A66C2/ffffff?text=in', /* APPROX — LinkedIn not in SimpleIcons CDN */
  linkedInDark:       'https://placehold.co/48x48/ffffff/0A66C2?text=in', /* APPROX */
  googleOriginal:     'https://cdn.simpleicons.org/google',
  googleDark:         'https://cdn.simpleicons.org/google/ffffff',
  youtubeOriginal:    'https://cdn.simpleicons.org/youtube/FF0000',
  youtubeDark:        'https://cdn.simpleicons.org/youtube/ffffff',
  snapchatOriginal:   'https://cdn.simpleicons.org/snapchat/FFFC00',
  snapchatDark:       'https://cdn.simpleicons.org/snapchat/ffffff',
  pinterestOriginal:  'https://cdn.simpleicons.org/pinterest/E60023',
  pinterestDark:      'https://cdn.simpleicons.org/pinterest/ffffff',
  tiktokOriginal:     'https://cdn.simpleicons.org/tiktok/000000',
  tiktokDark:         'https://cdn.simpleicons.org/tiktok/ffffff',

  /* ── E-commerce ── */
  amazonOriginal:     'https://placehold.co/48x48/FF9900/000000?text=a', /* APPROX — Amazon not in SimpleIcons CDN */
  amazonDark:         'https://placehold.co/48x48/1a1a1a/FF9900?text=a',  /* APPROX */
  shopifyOriginal:    null, /* APPROXIMATED — complex vector assembly, no SimpleIcons composite */
  shopifyDark:        null, /* APPROXIMATED */
  googleAds:          'https://cdn.simpleicons.org/googleads',
  spsOriginal:        null, /* APPROXIMATED — SPS Commerce not in SimpleIcons */
  spsDark:            null, /* APPROXIMATED */
  ebayOriginal:       'https://cdn.simpleicons.org/ebay/E53238',
  ebayDark:           'https://cdn.simpleicons.org/ebay/ffffff',

  /* ── Finance ── */
  quickbooksOriginal: 'https://cdn.simpleicons.org/quickbooks/2CA01C',
  quickbooksDark:     'https://cdn.simpleicons.org/quickbooks/ffffff',
  paypalOriginal:     'https://cdn.simpleicons.org/paypal/003087',
  paypalDark:         'https://cdn.simpleicons.org/paypal/ffffff',
  plaidOriginal:      'https://placehold.co/48x48/000000/ffffff?text=P', /* APPROX — Plaid not resolving on SimpleIcons CDN */
  plaidDark:          'https://placehold.co/48x48/ffffff/000000?text=P', /* APPROX */
  stripe:             'https://cdn.simpleicons.org/stripe/635BFF',
  netsuiteOriginal:   null, /* APPROXIMATED — Netsuite not in SimpleIcons */
  netsuiteDark:       null, /* APPROXIMATED */
  xeroOriginal:       null, /* APPROXIMATED — complex mask/path assembly */
  xeroDark:           null, /* APPROXIMATED */
};


/* ═══════════════════════════════════════════════════════════════════
   BRAND ICON RENDERERS  (48 × 48 px HTML, for BrandIcons.stories.js)
   Approximated icons are labelled APPROX in their JSDoc comments.
═══════════════════════════════════════════════════════════════════ */

/** Shared helper: full-bleed image inside a 48px container */
const fullBleed = (url) =>
  `<img src="${url}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:contain;">`;

/** Wrap HTML in a 48×48 overflow:hidden container */
const wrap48 = (inner) =>
  `<div style="position:relative;width:48px;height:48px;overflow:hidden;flex-shrink:0;">${inner}</div>`;

/* ── Social ─────────────────────────────────────────── */

export const facebookOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.facebookOriginal));

export const facebookDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.facebookDark));

export const linkedInOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.linkedInOriginal));

export const linkedInDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.linkedInDark));

export const googleOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.googleOriginal));

export const googleDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.googleDark));

export const youtubeOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.youtubeOriginal));

export const youtubeDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.youtubeDark));

export const snapchatOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.snapchatOriginal));

export const snapchatDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.snapchatDark));

export const pinterestOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.pinterestOriginal));

export const pinterestDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.pinterestDark));

export const tiktokOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.tiktokOriginal));

export const tiktokDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.tiktokDark));

/* ── E-commerce ─────────────────────────────────────── */

/* Counter ensures gradient/clip IDs are unique when multiple icons render on one page */
let _brandSeq = 0;

/**
 * Amazon — Figma node 10046:75873 (amazon-icon-logo, component 9934:284).
 * Original: dark body #343B45, orange smile arrow #FF9A00.
 */
export const amazonOriginal48 = () => {
  const id = ++_brandSeq;
  return `<div style="position:relative;width:48px;height:48px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#amz_o_${id})">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4676 12.6532C12.2202 13.1473 11.7959 13.4654 11.3368 13.5727C11.2672 13.5727 11.1609 13.6075 11.0546 13.6075C10.2785 13.6075 9.8194 13.0071 9.8194 12.1242C9.8194 10.9929 10.4901 10.464 11.3368 10.2155C11.7959 10.1101 12.3265 10.0744 12.8561 10.0744V10.4988C12.8561 11.3111 12.8909 11.9464 12.4676 12.6532ZM12.8561 8.45082C12.397 8.48565 11.8664 8.52047 11.3368 8.59012C10.525 8.69741 9.7131 8.83859 9.0433 9.15671C7.73662 9.68659 6.85327 10.8169 6.85327 12.4762C6.85327 14.5619 8.19476 15.6207 9.8909 15.6207C10.4553 15.6207 10.9144 15.5492 11.3368 15.4447C12.0094 15.232 12.5729 14.8433 13.2437 14.1365C13.6322 14.6664 13.7394 14.9148 14.4092 15.4795C14.5861 15.5492 14.763 15.5492 14.9031 15.4447C15.3274 15.0908 16.0696 14.4546 16.4572 14.1016C16.6341 13.9605 16.5993 13.7478 16.492 13.5727C16.1044 13.0776 15.715 12.6532 15.715 11.6998V8.52047C15.715 7.17835 15.8222 5.94165 14.8335 5.024C14.0217 4.28329 12.7498 4 11.7611 4H11.3368C9.53718 4.10447 7.63126 4.88188 7.20605 7.10776C7.13549 7.39106 7.3481 7.49647 7.48921 7.53129L9.46663 7.77882C9.67829 7.74306 9.7846 7.56612 9.8194 7.39106C9.99532 6.61365 10.6313 6.22494 11.3368 6.15341H11.4789C11.9031 6.15341 12.3622 6.33035 12.6087 6.68424C12.8909 7.10776 12.8561 7.67341 12.8561 8.16847V8.45082Z" fill="#343B45"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9981 15.9821V15.9812C19.9906 15.8146 19.9558 15.6875 19.8862 15.5821L19.8786 15.5718L19.8702 15.5614C19.7996 15.4842 19.7319 15.4551 19.6585 15.4231C19.4393 15.3384 19.1204 15.2932 18.7366 15.2922C18.461 15.2922 18.1571 15.3186 17.8514 15.3854L17.8504 15.3647L17.5428 15.4673L17.5372 15.4701L17.3631 15.5266V15.5341C17.159 15.6188 16.9737 15.7242 16.8015 15.8494C16.6943 15.9294 16.6058 16.0358 16.6011 16.1986C16.5983 16.2871 16.6435 16.3887 16.7178 16.4489C16.7921 16.5092 16.8786 16.5299 16.9548 16.5299C16.9727 16.5299 16.9897 16.5289 17.0047 16.5261L17.0198 16.5252L17.031 16.5233C17.1816 16.4913 17.4008 16.4696 17.6576 16.4339C17.8777 16.4094 18.111 16.3915 18.3133 16.3915C18.4563 16.3906 18.5851 16.4009 18.6736 16.4198C18.7178 16.4292 18.7507 16.4405 18.7686 16.4499C18.7752 16.4518 18.7799 16.4546 18.7827 16.4565C18.7865 16.4687 18.7921 16.5007 18.7912 16.5449C18.793 16.7144 18.7215 17.0287 18.6228 17.3355C18.5268 17.6424 18.4102 17.9501 18.333 18.1544C18.3142 18.2014 18.302 18.2532 18.302 18.3096C18.3001 18.3915 18.334 18.4913 18.4055 18.5572C18.4751 18.6231 18.5654 18.6494 18.6406 18.6494H18.6444C18.7573 18.6485 18.8532 18.6033 18.936 18.5384C19.7168 17.8362 19.9887 16.7144 20 16.0828L19.9981 15.9821ZM17.683 16.9553C17.603 16.9544 17.5212 16.9732 17.445 17.0089C17.3594 17.0428 17.2719 17.0824 17.1891 17.1172L17.0677 17.168L16.9097 17.2311V17.2329C15.1929 17.9294 13.3895 18.3379 11.7206 18.3736C11.6595 18.3755 11.5974 18.3755 11.5381 18.3755C8.91346 18.3774 6.77236 17.1595 4.61243 15.9595C4.53717 15.92 4.45909 15.8993 4.38383 15.8993C4.28694 15.8993 4.18722 15.936 4.11478 16.0038C4.04235 16.0725 3.99907 16.1713 4.00002 16.272C3.99907 16.4028 4.06963 16.5233 4.16841 16.6014C6.19569 18.3624 8.4177 19.9981 11.4064 20C11.4647 20 11.524 19.9981 11.5833 19.9972C13.4845 19.9548 15.6341 19.312 17.3029 18.2635L17.3133 18.2569C17.5315 18.1261 17.7498 17.9774 17.9558 17.8127C18.0837 17.7176 18.1722 17.5689 18.1722 17.4146C18.1665 17.1407 17.9342 16.9553 17.683 16.9553Z" fill="#FF9A00"/>
      </g>
      <defs>
        <clipPath id="amz_o_${id}"><rect width="16" height="16" fill="white" transform="translate(4 4)"/></clipPath>
      </defs>
    </svg>
  </div>`;
};

/**
 * Amazon dark — white 'a' body, orange smile arrow (readable on dark backgrounds).
 */
export const amazonDark48 = () => {
  const id = ++_brandSeq;
  return `<div style="position:relative;width:48px;height:48px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#amz_d_${id})">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4676 12.6532C12.2202 13.1473 11.7959 13.4654 11.3368 13.5727C11.2672 13.5727 11.1609 13.6075 11.0546 13.6075C10.2785 13.6075 9.8194 13.0071 9.8194 12.1242C9.8194 10.9929 10.4901 10.464 11.3368 10.2155C11.7959 10.1101 12.3265 10.0744 12.8561 10.0744V10.4988C12.8561 11.3111 12.8909 11.9464 12.4676 12.6532ZM12.8561 8.45082C12.397 8.48565 11.8664 8.52047 11.3368 8.59012C10.525 8.69741 9.7131 8.83859 9.0433 9.15671C7.73662 9.68659 6.85327 10.8169 6.85327 12.4762C6.85327 14.5619 8.19476 15.6207 9.8909 15.6207C10.4553 15.6207 10.9144 15.5492 11.3368 15.4447C12.0094 15.232 12.5729 14.8433 13.2437 14.1365C13.6322 14.6664 13.7394 14.9148 14.4092 15.4795C14.5861 15.5492 14.763 15.5492 14.9031 15.4447C15.3274 15.0908 16.0696 14.4546 16.4572 14.1016C16.6341 13.9605 16.5993 13.7478 16.492 13.5727C16.1044 13.0776 15.715 12.6532 15.715 11.6998V8.52047C15.715 7.17835 15.8222 5.94165 14.8335 5.024C14.0217 4.28329 12.7498 4 11.7611 4H11.3368C9.53718 4.10447 7.63126 4.88188 7.20605 7.10776C7.13549 7.39106 7.3481 7.49647 7.48921 7.53129L9.46663 7.77882C9.67829 7.74306 9.7846 7.56612 9.8194 7.39106C9.99532 6.61365 10.6313 6.22494 11.3368 6.15341H11.4789C11.9031 6.15341 12.3622 6.33035 12.6087 6.68424C12.8909 7.10776 12.8561 7.67341 12.8561 8.16847V8.45082Z" fill="#ffffff"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9981 15.9821V15.9812C19.9906 15.8146 19.9558 15.6875 19.8862 15.5821L19.8786 15.5718L19.8702 15.5614C19.7996 15.4842 19.7319 15.4551 19.6585 15.4231C19.4393 15.3384 19.1204 15.2932 18.7366 15.2922C18.461 15.2922 18.1571 15.3186 17.8514 15.3854L17.8504 15.3647L17.5428 15.4673L17.5372 15.4701L17.3631 15.5266V15.5341C17.159 15.6188 16.9737 15.7242 16.8015 15.8494C16.6943 15.9294 16.6058 16.0358 16.6011 16.1986C16.5983 16.2871 16.6435 16.3887 16.7178 16.4489C16.7921 16.5092 16.8786 16.5299 16.9548 16.5299C16.9727 16.5299 16.9897 16.5289 17.0047 16.5261L17.0198 16.5252L17.031 16.5233C17.1816 16.4913 17.4008 16.4696 17.6576 16.4339C17.8777 16.4094 18.111 16.3915 18.3133 16.3915C18.4563 16.3906 18.5851 16.4009 18.6736 16.4198C18.7178 16.4292 18.7507 16.4405 18.7686 16.4499C18.7752 16.4518 18.7799 16.4546 18.7827 16.4565C18.7865 16.4687 18.7921 16.5007 18.7912 16.5449C18.793 16.7144 18.7215 17.0287 18.6228 17.3355C18.5268 17.6424 18.4102 17.9501 18.333 18.1544C18.3142 18.2014 18.302 18.2532 18.302 18.3096C18.3001 18.3915 18.334 18.4913 18.4055 18.5572C18.4751 18.6231 18.5654 18.6494 18.6406 18.6494H18.6444C18.7573 18.6485 18.8532 18.6033 18.936 18.5384C19.7168 17.8362 19.9887 16.7144 20 16.0828L19.9981 15.9821ZM17.683 16.9553C17.603 16.9544 17.5212 16.9732 17.445 17.0089C17.3594 17.0428 17.2719 17.0824 17.1891 17.1172L17.0677 17.168L16.9097 17.2311V17.2329C15.1929 17.9294 13.3895 18.3379 11.7206 18.3736C11.6595 18.3755 11.5974 18.3755 11.5381 18.3755C8.91346 18.3774 6.77236 17.1595 4.61243 15.9595C4.53717 15.92 4.45909 15.8993 4.38383 15.8993C4.28694 15.8993 4.18722 15.936 4.11478 16.0038C4.04235 16.0725 3.99907 16.1713 4.00002 16.272C3.99907 16.4028 4.06963 16.5233 4.16841 16.6014C6.19569 18.3624 8.4177 19.9981 11.4064 20C11.4647 20 11.524 19.9981 11.5833 19.9972C13.4845 19.9548 15.6341 19.312 17.3029 18.2635L17.3133 18.2569C17.5315 18.1261 17.7498 17.9774 17.9558 17.8127C18.0837 17.7176 18.1722 17.5689 18.1722 17.4146C18.1665 17.1407 17.9342 16.9553 17.683 16.9553Z" fill="#FF9A00"/>
      </g>
      <defs>
        <clipPath id="amz_d_${id}"><rect width="16" height="16" fill="white" transform="translate(4 4)"/></clipPath>
      </defs>
    </svg>
  </div>`;
};

/**
 * Shopify — Figma node 10046:75871 (shopify-original, component 602:21924).
 * Real multi-path SVG with gradient fills. Counter ensures unique gradient IDs.
 */
export const shopifyOriginal48 = () => {
  const s = ++_brandSeq;
  return `<div style="position:relative;width:48px;height:48px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0673 8.00203C10.0571 8.00203 10.0374 8.00203 10.0272 8.00203C9.85784 7.98139 9.71846 7.82623 9.71846 7.65042C9.70826 7.4849 9.61847 3.61674 11.8006 2.73766C12.3486 2.52044 12.8573 2.56178 13.2857 2.88247C13.8133 3.26514 14.1921 4.03047 14.4212 5.14748C14.5804 5.93353 14.6103 6.6161 14.6103 6.64716C14.6205 6.81261 14.4913 6.93679 14.3213 6.90573C14.152 6.88502 14.0126 6.72992 14.0126 6.56441C13.9827 5.86112 13.7535 3.92707 12.9967 3.36853C12.7573 3.19273 12.4581 3.17202 12.0998 3.31683C10.2264 4.07182 10.3161 7.70212 10.3161 7.74347C10.3161 7.88828 10.2169 8.00203 10.0673 8.00203Z" fill="#595961"/>
<path opacity="0.46" fill-rule="evenodd" clip-rule="evenodd" d="M13.1754 2.90308C12.7769 2.61346 12.3091 2.57211 11.8004 2.76862C10.9137 3.13058 10.2861 4.08215 9.97739 5.53013C9.74824 6.59537 9.77814 7.55729 9.77814 7.59863C9.77814 7.65033 9.79786 7.7021 9.83798 7.74344C9.87742 7.78479 9.91754 7.81585 9.96718 7.81585C9.97738 7.81585 9.98759 7.81585 9.99711 7.81585C10.0869 7.81585 10.1569 7.74344 10.1569 7.65033C10.1569 7.60899 10.0672 3.91663 11.9902 3.14094C12.3785 2.98584 12.7171 3.00648 12.9965 3.21334C13.803 3.80288 14.0424 5.79904 14.0723 6.51268C14.0723 6.61608 14.1621 6.71955 14.2715 6.72983C14.3715 6.74018 14.451 6.66778 14.451 6.56438C14.4408 6.44028 14.3314 3.75118 13.1754 2.90308Z" fill="#B2B2C2"/>
<path opacity="0.46" fill-rule="evenodd" clip-rule="evenodd" d="M9.97736 7.69173C9.96716 7.69173 9.96717 7.69173 9.95765 7.69173C9.89781 7.68137 9.84747 7.61932 9.83795 7.55727C9.83795 7.51585 9.80805 6.57472 10.0372 5.5094C10.3357 4.09248 10.964 3.15127 11.8303 2.7996C12.3185 2.60309 12.7572 2.6445 13.1359 2.91342C14.2518 3.73045 14.3613 6.3782 14.3613 6.49196C14.3613 6.55401 14.3116 6.59535 14.2518 6.58507C14.1919 6.57472 14.1423 6.52302 14.1321 6.45061C14.1321 6.41955 14.0226 3.82356 13.0162 3.07887C12.717 2.86172 12.3485 2.83066 11.9303 2.99611C9.97737 3.81321 10.0671 7.55727 10.0671 7.59861C10.0767 7.65031 10.0372 7.69173 9.97736 7.69173Z" fill="#B2B2C2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7496 4.21654L6.30071 6.92628C6.30071 6.92628 5.94235 7.02974 5.8526 7.1435C5.76284 7.25725 5.74311 7.57786 5.74311 7.57786L4.4375 18.024L14.2416 19.927L14.9991 4.20619C14.8897 4.18548 14.7795 4.20619 14.7496 4.21654Z" fill="url(#sp${s}_3)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6695 5.56111C17.6695 5.56111 17.6593 5.47835 17.6097 5.44735C17.5696 5.41629 17.5199 5.4163 17.5199 5.4163L16.1348 5.3129L15.1189 4.26829C15.0787 4.23723 15.0386 4.21659 14.989 4.20624L14.2322 19.9271L19.5422 18.7377L17.6695 5.56111Z" fill="url(#sp${s}_4)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2626 12.9457C11.113 12.7389 10.9342 12.5527 10.7547 12.3872C10.5752 12.2217 10.3861 12.0873 10.1964 11.9632C10.0672 11.8804 9.94754 11.7977 9.84758 11.7149C9.7483 11.6322 9.66874 11.5494 9.6089 11.477C9.54906 11.3943 9.49941 11.3219 9.46949 11.2392C9.43957 11.1564 9.42935 11.0737 9.42935 10.9909C9.42935 10.8772 9.45929 10.7634 9.49941 10.6703C9.53885 10.5772 9.60889 10.4945 9.67825 10.4221C9.75849 10.3497 9.84757 10.298 9.95773 10.2566C10.0672 10.2152 10.1964 10.1946 10.3358 10.1842C10.4854 10.1739 10.635 10.1842 10.7744 10.1946C10.9138 10.2049 11.0437 10.2359 11.1729 10.2669C11.2925 10.298 11.4122 10.3393 11.5115 10.3807C11.6115 10.4221 11.7107 10.4634 11.7808 10.5048L12.4383 8.47768C12.3391 8.42598 12.2194 8.37421 12.0895 8.34322C11.9501 8.30181 11.8005 8.27081 11.6312 8.25011C11.4619 8.22947 11.2823 8.21912 11.0933 8.21912C10.9043 8.21912 10.7051 8.22947 10.4956 8.26046C10.0475 8.32251 9.64834 8.44662 9.28999 8.63278C8.95135 8.80865 8.65215 9.03615 8.40327 9.31542C8.16391 9.58434 7.97486 9.8946 7.83546 10.2463C7.70558 10.5876 7.62604 10.9703 7.60632 11.3839C7.59612 11.6322 7.61584 11.8597 7.67567 12.0666C7.72531 12.2734 7.80555 12.4699 7.91502 12.6561C8.0143 12.8423 8.14418 13.0078 8.28357 13.1629C8.42297 13.318 8.59229 13.4629 8.76161 13.5973C8.90101 13.7007 9.02069 13.8041 9.12065 13.8972C9.21993 13.9903 9.30018 14.0834 9.35934 14.1868C9.41918 14.2799 9.45928 14.373 9.4892 14.4764C9.51912 14.5695 9.52933 14.6729 9.51913 14.7764C9.51913 14.8798 9.48923 14.9832 9.44911 15.0659C9.40967 15.1487 9.35934 15.2315 9.27978 15.2935C9.21042 15.3556 9.12067 15.3969 9.02071 15.4176C8.92143 15.4382 8.80176 15.4486 8.67188 15.428C8.52296 15.4073 8.37333 15.3659 8.23394 15.3038C8.09454 15.2521 7.95449 15.1797 7.82529 15.1073C7.6961 15.0349 7.57642 14.9522 7.47646 14.8798C7.36698 14.8074 7.27721 14.7246 7.20785 14.6626L6.75903 16.2037C6.82907 16.307 6.92837 16.4002 7.03785 16.4932C7.14801 16.5863 7.27722 16.6794 7.42682 16.7725C7.57642 16.8552 7.73554 16.9379 7.90486 17.0103C8.07417 17.0827 8.26387 17.1448 8.45291 17.1966C8.90103 17.2896 9.28998 17.3103 9.65854 17.2586C10.0373 17.2068 10.3861 17.0724 10.6846 16.8656C10.9933 16.6484 11.2429 16.3587 11.4319 15.9761C11.6216 15.5934 11.7311 15.128 11.7508 14.6005C11.761 14.2695 11.7209 13.98 11.6312 13.7111C11.5414 13.4008 11.4122 13.1629 11.2626 12.9457Z" fill="url(#sp${s}_5)"/>
      <defs>
        <linearGradient id="sp${s}_3" x1="9.34982" y1="4.85538" x2="9.34982" y2="19.927" gradientUnits="userSpaceOnUse">
          <stop stop-color="#95BF46"/><stop offset="1" stop-color="#5E8E3E"/>
        </linearGradient>
        <linearGradient id="sp${s}_4" x1="16.8872" y1="4.20624" x2="16.8872" y2="19.9271" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8DB849"/><stop offset="1" stop-color="#507E2C"/>
        </linearGradient>
        <linearGradient id="sp${s}_5" x1="9.09845" y1="8.21912" x2="9.09845" y2="17.2896" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CCE5A4"/><stop offset="1" stop-color="#9DC462"/>
        </linearGradient>
      </defs>
    </svg>
  </div>`;
};

/**
 * Shopify dark — white/light version on dark background (simplified gradient → white tones).
 */
export const shopifyDark48 = () => {
  const s = ++_brandSeq;
  return `<div style="position:relative;width:48px;height:48px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0673 8.00203C10.0571 8.00203 10.0374 8.00203 10.0272 8.00203C9.85784 7.98139 9.71846 7.82623 9.71846 7.65042C9.70826 7.4849 9.61847 3.61674 11.8006 2.73766C12.3486 2.52044 12.8573 2.56178 13.2857 2.88247C13.8133 3.26514 14.1921 4.03047 14.4212 5.14748C14.5804 5.93353 14.6103 6.6161 14.6103 6.64716C14.6205 6.81261 14.4913 6.93679 14.3213 6.90573C14.152 6.88502 14.0126 6.72992 14.0126 6.56441C13.9827 5.86112 13.7535 3.92707 12.9967 3.36853C12.7573 3.19273 12.4581 3.17202 12.0998 3.31683C10.2264 4.07182 10.3161 7.70212 10.3161 7.74347C10.3161 7.88828 10.2169 8.00203 10.0673 8.00203Z" fill="#e0e0e0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7496 4.21654L6.30071 6.92628C6.30071 6.92628 5.94235 7.02974 5.8526 7.1435C5.76284 7.25725 5.74311 7.57786 5.74311 7.57786L4.4375 18.024L14.2416 19.927L14.9991 4.20619C14.8897 4.18548 14.7795 4.20619 14.7496 4.21654Z" fill="#ffffff"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6695 5.56111C17.6695 5.56111 17.6593 5.47835 17.6097 5.44735C17.5696 5.41629 17.5199 5.4163 17.5199 5.4163L16.1348 5.3129L15.1189 4.26829C15.0787 4.23723 15.0386 4.21659 14.989 4.20624L14.2322 19.9271L19.5422 18.7377L17.6695 5.56111Z" fill="#cccccc"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2626 12.9457C11.113 12.7389 10.9342 12.5527 10.7547 12.3872C10.5752 12.2217 10.3861 12.0873 10.1964 11.9632C10.0672 11.8804 9.94754 11.7977 9.84758 11.7149C9.7483 11.6322 9.66874 11.5494 9.6089 11.477C9.54906 11.3943 9.49941 11.3219 9.46949 11.2392C9.43957 11.1564 9.42935 11.0737 9.42935 10.9909C9.42935 10.8772 9.45929 10.7634 9.49941 10.6703C9.53885 10.5772 9.60889 10.4945 9.67825 10.4221C9.75849 10.3497 9.84757 10.298 9.95773 10.2566C10.0672 10.2152 10.1964 10.1946 10.3358 10.1842C10.4854 10.1739 10.635 10.1842 10.7744 10.1946C10.9138 10.2049 11.0437 10.2359 11.1729 10.2669C11.2925 10.298 11.4122 10.3393 11.5115 10.3807C11.6115 10.4221 11.7107 10.4634 11.7808 10.5048L12.4383 8.47768C12.3391 8.42598 12.2194 8.37421 12.0895 8.34322C11.9501 8.30181 11.8005 8.27081 11.6312 8.25011C11.4619 8.22947 11.2823 8.21912 11.0933 8.21912C10.9043 8.21912 10.7051 8.22947 10.4956 8.26046C10.0475 8.32251 9.64834 8.44662 9.28999 8.63278C8.95135 8.80865 8.65215 9.03615 8.40327 9.31542C8.16391 9.58434 7.97486 9.8946 7.83546 10.2463C7.70558 10.5876 7.62604 10.9703 7.60632 11.3839C7.59612 11.6322 7.61584 11.8597 7.67567 12.0666C7.72531 12.2734 7.80555 12.4699 7.91502 12.6561C8.0143 12.8423 8.14418 13.0078 8.28357 13.1629C8.42297 13.318 8.59229 13.4629 8.76161 13.5973C8.90101 13.7007 9.02069 13.8041 9.12065 13.8972C9.21993 13.9903 9.30018 14.0834 9.35934 14.1868C9.41918 14.2799 9.45928 14.373 9.4892 14.4764C9.51912 14.5695 9.52933 14.6729 9.51913 14.7764C9.51913 14.8798 9.48923 14.9832 9.44911 15.0659C9.40967 15.1487 9.35934 15.2315 9.27978 15.2935C9.21042 15.3556 9.12067 15.3969 9.02071 15.4176C8.92143 15.4382 8.80176 15.4486 8.67188 15.428C8.52296 15.4073 8.37333 15.3659 8.23394 15.3038C8.09454 15.2521 7.95449 15.1797 7.82529 15.1073C7.6961 15.0349 7.57642 14.9522 7.47646 14.8798C7.36698 14.8074 7.27721 14.7246 7.20785 14.6626L6.75903 16.2037C6.82907 16.307 6.92837 16.4002 7.03785 16.4932C7.14801 16.5863 7.27722 16.6794 7.42682 16.7725C7.57642 16.8552 7.73554 16.9379 7.90486 17.0103C8.07417 17.0827 8.26387 17.1448 8.45291 17.1966C8.90103 17.2896 9.28998 17.3103 9.65854 17.2586C10.0373 17.2068 10.3861 17.0724 10.6846 16.8656C10.9933 16.6484 11.2429 16.3587 11.4319 15.9761C11.6216 15.5934 11.7311 15.128 11.7508 14.6005C11.761 14.2695 11.7209 13.98 11.6312 13.7111C11.5414 13.4008 11.4122 13.1629 11.2626 12.9457Z" fill="#aaaaaa"/>
    </svg>
  </div>`;
};

export const googleAdsOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.googleAds));

export const googleAdsDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.googleAds));

/** APPROXIMATED — SPS Commerce not available in SimpleIcons. */
export const spsOriginal48 = () =>
  `<div title="SPS Commerce (approximated)" style="position:relative;width:48px;height:48px;border-radius:8px;background:#003087;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <span style="font-size:13px;font-weight:800;color:#fff;font-family:sans-serif;line-height:1;">SPS</span>
  </div>`;

export const spsDark48 = () =>
  `<div title="SPS Commerce dark (approximated)" style="position:relative;width:48px;height:48px;border-radius:8px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <span style="font-size:13px;font-weight:800;color:#fff;font-family:sans-serif;line-height:1;">SPS</span>
  </div>`;

export const ebayOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.ebayOriginal));

export const ebayDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.ebayDark));

/* ── Finance ─────────────────────────────────────────── */

export const quickbooksOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.quickbooksOriginal));

export const quickbooksDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.quickbooksDark));

export const paypalOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.paypalOriginal));

export const paypalDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.paypalDark));

export const plaidOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.plaidOriginal));

export const plaidDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.plaidDark));

export const stripeOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.stripe));

export const stripeDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.stripe));

/** APPROXIMATED — Netsuite not in SimpleIcons. */
export const netsuiteOriginal48 = () =>
  `<div title="Netsuite (approximated)" style="position:relative;width:48px;height:48px;border-radius:8px;background:#007AC1;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <span style="font-size:11px;font-weight:800;color:#fff;font-family:sans-serif;line-height:1;">NS</span>
  </div>`;

export const netsuiteDark48 = () => netsuiteOriginal48();

/** APPROXIMATED — Xero icon uses a complex mask/clip-path assembly in Figma
 *  with no single composite raster. Rendered as a recognisable teal 'x' placeholder.
 *  See Figma node 11484:2633 / xero-original for exact mask breakdown. */
export const xeroOriginal48 = () =>
  `<div title="Xero (approximated)" style="position:relative;width:48px;height:48px;border-radius:50%;background:#13B5EA;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <span style="font-size:22px;font-weight:700;color:#fff;font-family:sans-serif;line-height:1;">x</span>
  </div>`;

export const xeroDark48 = () =>
  `<div title="Xero dark (approximated)" style="position:relative;width:48px;height:48px;border-radius:50%;background:#0d8fb5;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <span style="font-size:22px;font-weight:700;color:#fff;font-family:sans-serif;line-height:1;">x</span>
  </div>`;


/* ═══════════════════════════════════════════════════════════════════
   CARD-CONTEXT HELPERS  (small-badge versions for use in card stories)
   These are stable SVG/CSS approximations — no TTL concern.
   Used by CardReporting.stories.js for the sales channel badges.
═══════════════════════════════════════════════════════════════════ */

/**
 * Shopify 24px badge — Figma node 10046:75871 (real SVG, flat green, no gradients for badge size).
 * Main paths: hang-tag body #95BF46, shadow #5E8E3E, strap detail #595961.
 */
export const shopifyBadge24 =
  `<span aria-label="Shopify" title="Shopify"
         style="display:inline-flex;align-items:center;justify-content:center;
                width:24px;height:24px;border-radius:4px;flex-shrink:0;overflow:hidden;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7496 4.21654L6.30071 6.92628C6.30071 6.92628 5.94235 7.02974 5.8526 7.1435C5.76284 7.25725 5.74311 7.57786 5.74311 7.57786L4.4375 18.024L14.2416 19.927L14.9991 4.20619C14.8897 4.18548 14.7795 4.20619 14.7496 4.21654Z" fill="#95BF46"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6695 5.56111C17.6695 5.56111 17.6593 5.47835 17.6097 5.44735C17.5696 5.41629 17.5199 5.4163 17.5199 5.4163L16.1348 5.3129L15.1189 4.26829C15.0787 4.23723 15.0386 4.21659 14.989 4.20624L14.2322 19.9271L19.5422 18.7377L17.6695 5.56111Z" fill="#5E8E3E"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0673 8.00203C10.0571 8.00203 10.0374 8.00203 10.0272 8.00203C9.85784 7.98139 9.71846 7.82623 9.71846 7.65042C9.70826 7.4849 9.61847 3.61674 11.8006 2.73766C12.3486 2.52044 12.8573 2.56178 13.2857 2.88247C13.8133 3.26514 14.1921 4.03047 14.4212 5.14748C14.5804 5.93353 14.6103 6.6161 14.6103 6.64716C14.6205 6.81261 14.4913 6.93679 14.3213 6.90573C14.152 6.88502 14.0126 6.72992 14.0126 6.56441C13.9827 5.86112 13.7535 3.92707 12.9967 3.36853C12.7573 3.19273 12.4581 3.17202 12.0998 3.31683C10.2264 4.07182 10.3161 7.70212 10.3161 7.74347C10.3161 7.88828 10.2169 8.00203 10.0673 8.00203Z" fill="#595961"/>
    </svg>
  </span>`;

/**
 * Amazon 24px badge — Figma node 10046:75873 (real SVG inline, no clip-path to avoid ID conflicts).
 * Active: yellow bg #fef9c2. Inactive: gray bg #e5e7eb.
 * @param {boolean} active
 */
export const amazonBadge24 = (active = true) =>
  `<span aria-label="Amazon" title="Amazon"
         style="display:inline-flex;align-items:center;justify-content:center;
                width:24px;height:24px;border-radius:100px;overflow:hidden;
                background:${active ? '#fef9c2' : '#e5e7eb'};flex-shrink:0;">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4676 12.6532C12.2202 13.1473 11.7959 13.4654 11.3368 13.5727C11.2672 13.5727 11.1609 13.6075 11.0546 13.6075C10.2785 13.6075 9.8194 13.0071 9.8194 12.1242C9.8194 10.9929 10.4901 10.464 11.3368 10.2155C11.7959 10.1101 12.3265 10.0744 12.8561 10.0744V10.4988C12.8561 11.3111 12.8909 11.9464 12.4676 12.6532ZM12.8561 8.45082C12.397 8.48565 11.8664 8.52047 11.3368 8.59012C10.525 8.69741 9.7131 8.83859 9.0433 9.15671C7.73662 9.68659 6.85327 10.8169 6.85327 12.4762C6.85327 14.5619 8.19476 15.6207 9.8909 15.6207C10.4553 15.6207 10.9144 15.5492 11.3368 15.4447C12.0094 15.232 12.5729 14.8433 13.2437 14.1365C13.6322 14.6664 13.7394 14.9148 14.4092 15.4795C14.5861 15.5492 14.763 15.5492 14.9031 15.4447C15.3274 15.0908 16.0696 14.4546 16.4572 14.1016C16.6341 13.9605 16.5993 13.7478 16.492 13.5727C16.1044 13.0776 15.715 12.6532 15.715 11.6998V8.52047C15.715 7.17835 15.8222 5.94165 14.8335 5.024C14.0217 4.28329 12.7498 4 11.7611 4H11.3368C9.53718 4.10447 7.63126 4.88188 7.20605 7.10776C7.13549 7.39106 7.3481 7.49647 7.48921 7.53129L9.46663 7.77882C9.67829 7.74306 9.7846 7.56612 9.8194 7.39106C9.99532 6.61365 10.6313 6.22494 11.3368 6.15341H11.4789C11.9031 6.15341 12.3622 6.33035 12.6087 6.68424C12.8909 7.10776 12.8561 7.67341 12.8561 8.16847V8.45082Z" fill="#343B45"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9981 15.9821V15.9812C19.9906 15.8146 19.9558 15.6875 19.8862 15.5821L19.8786 15.5718L19.8702 15.5614C19.7996 15.4842 19.7319 15.4551 19.6585 15.4231C19.4393 15.3384 19.1204 15.2932 18.7366 15.2922C18.461 15.2922 18.1571 15.3186 17.8514 15.3854L17.8504 15.3647L17.5428 15.4673L17.5372 15.4701L17.3631 15.5266V15.5341C17.159 15.6188 16.9737 15.7242 16.8015 15.8494C16.6943 15.9294 16.6058 16.0358 16.6011 16.1986C16.5983 16.2871 16.6435 16.3887 16.7178 16.4489C16.7921 16.5092 16.8786 16.5299 16.9548 16.5299C16.9727 16.5299 16.9897 16.5289 17.0047 16.5261L17.0198 16.5252L17.031 16.5233C17.1816 16.4913 17.4008 16.4696 17.6576 16.4339C17.8777 16.4094 18.111 16.3915 18.3133 16.3915C18.4563 16.3906 18.5851 16.4009 18.6736 16.4198C18.7178 16.4292 18.7507 16.4405 18.7686 16.4499C18.7752 16.4518 18.7799 16.4546 18.7827 16.4565C18.7865 16.4687 18.7921 16.5007 18.7912 16.5449C18.793 16.7144 18.7215 17.0287 18.6228 17.3355C18.5268 17.6424 18.4102 17.9501 18.333 18.1544C18.3142 18.2014 18.302 18.2532 18.302 18.3096C18.3001 18.3915 18.334 18.4913 18.4055 18.5572C18.4751 18.6231 18.5654 18.6494 18.6406 18.6494H18.6444C18.7573 18.6485 18.8532 18.6033 18.936 18.5384C19.7168 17.8362 19.9887 16.7144 20 16.0828L19.9981 15.9821ZM17.683 16.9553C17.603 16.9544 17.5212 16.9732 17.445 17.0089C17.3594 17.0428 17.2719 17.0824 17.1891 17.1172L17.0677 17.168L16.9097 17.2311V17.2329C15.1929 17.9294 13.3895 18.3379 11.7206 18.3736C11.6595 18.3755 11.5974 18.3755 11.5381 18.3755C8.91346 18.3774 6.77236 17.1595 4.61243 15.9595C4.53717 15.92 4.45909 15.8993 4.38383 15.8993C4.28694 15.8993 4.18722 15.936 4.11478 16.0038C4.04235 16.0725 3.99907 16.1713 4.00002 16.272C3.99907 16.4028 4.06963 16.5233 4.16841 16.6014C6.19569 18.3624 8.4177 19.9981 11.4064 20C11.4647 20 11.524 19.9981 11.5833 19.9972C13.4845 19.9548 15.6341 19.312 17.3029 18.2635L17.3133 18.2569C17.5315 18.1261 17.7498 17.9774 17.9558 17.8127C18.0837 17.7176 18.1722 17.5689 18.1722 17.4146C18.1665 17.1407 17.9342 16.9553 17.683 16.9553Z" fill="#FF9A00"/>
    </svg>
  </span>`;
