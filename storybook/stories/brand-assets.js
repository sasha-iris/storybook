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
  return `<img src="${url}" width="${s.mark}" height="${s.mark}" alt="Iris mark"
               style="display:block;flex-shrink:0;object-fit:contain;">`;
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

export const amazonOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.amazonOriginal));

export const amazonDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.amazonDark));

/** APPROXIMATED — Shopify icon is a 50+ vector path assembly in Figma with no single
 *  composite raster. Rendered here as a recognised green-badge 'S' placeholder.
 *  See Figma node 11484:2633 / shopify-original for exact vector breakdown. */
export const shopifyOriginal48 = () =>
  `<div title="Shopify (approximated)" style="position:relative;width:48px;height:48px;border-radius:8px;background:#96BF48;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <span style="font-size:26px;font-weight:800;color:#fff;font-family:sans-serif;line-height:1;">S</span>
  </div>`;

export const shopifyDark48 = () =>
  `<div title="Shopify dark (approximated)" style="position:relative;width:48px;height:48px;border-radius:8px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <span style="font-size:26px;font-weight:800;color:#96BF48;font-family:sans-serif;line-height:1;">S</span>
  </div>`;

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
 * Shopify 24px badge for card/chip use.
 * APPROXIMATED — the full Shopify mark is a complex bag SVG not renderable
 * as a single inline element at 24px. Uses green 'S' badge instead.
 */
export const shopifyBadge24 =
  `<span aria-label="Shopify" title="Shopify"
         style="display:inline-flex;align-items:center;justify-content:center;
                width:24px;height:24px;border-radius:4px;background:#96BF48;
                font-size:11px;font-weight:800;color:#fff;font-family:sans-serif;
                flex-shrink:0;">S</span>`;

/**
 * Amazon 24px badge for card/chip use.
 * Uses the SimpleIcons CDN URL scaled to fit a 24px slot.
 * @param {boolean} active
 */
export const amazonBadge24 = (active = true) =>
  `<span aria-label="Amazon" title="Amazon"
         style="display:inline-flex;align-items:center;justify-content:center;
                width:24px;height:24px;border-radius:100px;overflow:hidden;
                background:${active ? '#fef9c2' : '#e5e7eb'};flex-shrink:0;">
    <img src="${BRAND_ICON_URLS.amazonOriginal}" alt="Amazon"
         style="width:16px;height:16px;object-fit:contain;display:block;">
  </span>`;
