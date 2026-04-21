/**
 * Iris Library — Shared brand assets
 *
 * Sources:
 *   Iris Logo / Smart mark  node 3778:41269  (file ZKtEULdYKaXe5uQl1J6ijI)
 *   Third-party brand icons node 11484:2633  (file ZKtEULdYKaXe5uQl1J6ijI)
 *
 * ⚠️  Remote Figma asset URLs expire after 7 days from extraction.
 *     Replace with locally-hosted assets when URLs expire.
 *
 * Usage:
 *   import { IRIS_MARK, irisMarkImg, irisLogo, BRAND_ICON_URLS, brandIcon48 } from './brand-assets.js';
 */

/* ═══════════════════════════════════════════════════════════════════
   IRIS SMART MARK
   Hexagonal brand mark. 4 sizes × light + dark modes.
   Source: Figma node 3778:41269 — Smart component variants.
   xs dark is a 7-vector assembly in Figma with no composite raster;
   it falls back to the xs light mark.
═══════════════════════════════════════════════════════════════════ */

export const IRIS_MARK = {
  /* Light mode — single raster composite per size */
  xs:     'https://www.figma.com/api/mcp/asset/616e45ee-ded1-482f-9197-6ea69f7c13cf', /* 24 px */
  sm:     'https://www.figma.com/api/mcp/asset/575ef668-23b1-440c-8c7b-17501e80ffa0', /* 32 px */
  md:     'https://www.figma.com/api/mcp/asset/d5349122-9ac2-4c8b-8064-4210e5383a09', /* 48 px */
  lg:     'https://www.figma.com/api/mcp/asset/d2cda065-2b23-4736-be93-07508e64d858', /* 64 px */
  /* Dark mode (sm / md / lg only) */
  smDark: 'https://www.figma.com/api/mcp/asset/415e87e5-bf92-4936-add1-cef48ff223d7', /* 32 px */
  mdDark: 'https://www.figma.com/api/mcp/asset/ca8b7931-deb9-4b17-9803-c082915d5c0c', /* 48 px */
  lgDark: 'https://www.figma.com/api/mcp/asset/0912c8f2-10e7-4562-9bdc-3eda5652152b', /* 64 px */
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
               style="display:block;flex-shrink:0;">`;
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
   ⚠️  7-day TTL applies to every URL below.
   null = no single-composite asset available; see brandIcon48() below
         which uses SVG approximations for those entries.
═══════════════════════════════════════════════════════════════════ */

export const BRAND_ICON_URLS = {
  /* ── Social ── */
  facebookOriginal:   'https://www.figma.com/api/mcp/asset/50fa4e9e-ea20-4d32-8f29-207e8ccbfc59',
  facebookDark:       'https://www.figma.com/api/mcp/asset/bb066494-00f1-4d01-aae2-decafd7743a7',
  linkedInOriginal:   'https://www.figma.com/api/mcp/asset/d68e45ef-14fa-42c3-926b-4525da6dbaec', /* Vector83 — centered 48×48 */
  linkedInDark:       'https://www.figma.com/api/mcp/asset/1d56f905-4d03-4c67-8bc6-96ce14d29c50',
  /* Google original is 4 positioned vector fragments; googleDark is a single Union shape */
  googleOriginalV1:   'https://www.figma.com/api/mcp/asset/0220c3b3-7485-4573-992e-6efca8c1da6f', /* inset 40.99% 0.97% 12.07% 51%   */
  googleOriginalV2:   'https://www.figma.com/api/mcp/asset/0404ec22-dc0f-4448-86c7-b56222e4d8b6', /* inset 59.58% 15.86% 0 6.32%     */
  googleOriginalV3:   'https://www.figma.com/api/mcp/asset/9ee61ca1-fe33-4e1b-b9f3-05247e555b7d', /* inset 27.56% 77.07% 27.54% 1%   */
  googleOriginalV4:   'https://www.figma.com/api/mcp/asset/a1f044c1-67f3-4286-b5e1-b8f1e9968621', /* inset 0 15.54% 59.56% 6.32%     */
  googleDark:         'https://www.figma.com/api/mcp/asset/1f6d6204-4211-4e6e-961b-57ece4e4f576', /* Union — full bleed              */
  youtubeOriginalRect:'https://www.figma.com/api/mcp/asset/04d208f7-6ac9-43e8-9f7b-4ce960d226f0', /* red rect — inset 14.77% -0.1%   */
  youtubeOriginalPlay:'https://www.figma.com/api/mcp/asset/9dc8dbb2-8482-446a-b838-39d05614fe81', /* play tri — inset 35.13% 33.99%  */
  youtubeDark:        'https://www.figma.com/api/mcp/asset/fcde3288-be6b-4dd0-b575-0e1c9c664358', /* Lozenge — inset 14.82% 0        */
  snapchatOriginalFg: 'https://www.figma.com/api/mcp/asset/9c861d6c-6b07-42f7-a92d-d8c25f1f8284', /* body — inset 6.32% 5.83%        */
  snapchatOriginalBg: 'https://www.figma.com/api/mcp/asset/b14cf91d-8e2b-411e-ab2e-a15679decef5', /* outline — inset 0.73% 0 0.75%   */
  snapchatDark:       'https://www.figma.com/api/mcp/asset/b1d3bf4e-52f7-41ae-94f9-7cc628f9b8c7',
  pinterestOriginal:  'https://www.figma.com/api/mcp/asset/f93bac90-4646-4c9a-aa2a-ffe118f50260',
  pinterestDark:      'https://www.figma.com/api/mcp/asset/de44050c-a70a-4fe7-9327-48889c1d7878',
  tiktokOriginal:     'https://www.figma.com/api/mcp/asset/401e2490-2fb6-442e-98c9-2cb8701ef7c6', /* Group12 — inset 0 5.94%          */
  tiktokDark:         'https://www.figma.com/api/mcp/asset/8283dc12-a95e-41d1-b232-3a8288c45076', /* inset 0 6.25% 0 8.33%            */

  /* ── E-commerce ── */
  amazonOriginal:     'https://www.figma.com/api/mcp/asset/af0f76c8-feef-4897-8206-4219a7773bcc', /* Group13 — single composite 48px  */
  amazonDarkText:     'https://www.figma.com/api/mcp/asset/e1d9f960-3bae-4ce1-949b-9e1daa0590a1', /* "amazon" text — inset 20.83%...  */
  amazonDarkArrow:    'https://www.figma.com/api/mcp/asset/b53df1e8-d173-486d-9460-8612be089c15', /* smile arrow — inset 62% 20.83%   */
  shopifyOriginal:    null, /* APPROXIMATED — 50+ vector paths, no single composite in Figma */
  shopifyDark:        null, /* APPROXIMATED */
  googleAds:          'https://www.figma.com/api/mcp/asset/f87d18d4-1c1f-4370-b5f3-01a68046947d', /* Group — same for original + dark  */
  spsOriginal:        'https://www.figma.com/api/mcp/asset/704f323f-3344-4737-8796-a92daf97bb1c', /* inset 8.33% 10.21%               */
  spsDark:            'https://www.figma.com/api/mcp/asset/6b485766-cbef-433a-8a28-8dbdb4374915', /* inset 11.46% 10.21%              */
  ebayOriginal:       'https://www.figma.com/api/mcp/asset/b8ae8b6f-7e5f-4340-ac29-6c75e51782d9', /* centered 39.9×16px               */
  ebayDark:           'https://www.figma.com/api/mcp/asset/f5197f0a-a6f2-42c0-9a27-19b5b9f2361f', /* centered 39.9×16px               */

  /* ── Finance ── */
  quickbooksOriginal: 'https://www.figma.com/api/mcp/asset/79c6b545-c0f9-4d13-913c-6dcc9f8ffa14', /* single composite                  */
  quickbooksDark:     'https://www.figma.com/api/mcp/asset/88df0369-2389-4332-b48a-e83775647ac8', /* Subtract — centered               */
  paypalOriginalP1:   'https://www.figma.com/api/mcp/asset/dfcc384a-5763-4327-8bd5-9d5fe302a4ba', /* blue P — inset 20% 14.89% 19.98% 24.43% */
  paypalOriginalP2:   'https://www.figma.com/api/mcp/asset/3c51ae86-797f-46fd-a0ab-558dbe95345f', /* blue p — inset 22.92% 0 0 21.05% */
  paypalOriginalP3:   'https://www.figma.com/api/mcp/asset/79f66106-52c9-4135-a1f9-2bedd42e547d', /* gold P — inset 0 14.89% 20% 0    */
  paypalDarkP1:       'https://www.figma.com/api/mcp/asset/e38d30bb-6b5c-4483-90c6-2ff3ed7c8f0e', /* dark P — inset 20% 14.89% 19.98% 24.43% */
  paypalDarkP2:       'https://www.figma.com/api/mcp/asset/b344ec76-462a-4fcd-aed9-a8a4e75b8ff9', /* dark p — inset 22.92% 0 0 21.05% */
  paypalDarkP3:       'https://www.figma.com/api/mcp/asset/79f66106-52c9-4135-a1f9-2bedd42e547d', /* gold P — shared with original     */
  plaidOriginal:      'https://www.figma.com/api/mcp/asset/e93e096f-c866-4758-a834-a7ddc14b8328', /* centered 40×40px square           */
  plaidDark:          'https://www.figma.com/api/mcp/asset/4c34aa16-472a-495d-91ef-08720fee93a6', /* centered 40×40px square           */
  stripe:             'https://www.figma.com/api/mcp/asset/c80900a6-d863-402c-b025-8c47b812f95f', /* same asset for original + dark     */
  netsuiteV1:         'https://www.figma.com/api/mcp/asset/e53606aa-a7e7-4b28-b8cd-9e76cf9eb5a0', /* main shape — inset 0 0.06%        */
  netsuiteV2:         'https://www.figma.com/api/mcp/asset/cfe647f5-9a15-4b73-8c7b-5b8038f29c9a', /* inner ring — inset 14% 13.51%     */
  netsuiteV3:         'https://www.figma.com/api/mcp/asset/30caa2bc-c676-4743-9e86-f07bd651b1b2', /* outer ring — inset 10.4% 9.91%    */
  xeroOriginal:       null, /* APPROXIMATED — complex mask/path assembly in Figma */
  xeroDark:           null, /* APPROXIMATED */
};


/* ═══════════════════════════════════════════════════════════════════
   BRAND ICON RENDERERS  (48 × 48 px HTML, for BrandIcons.stories.js)
   Approximated icons are labelled APPROX in their JSDoc comments.
═══════════════════════════════════════════════════════════════════ */

/** Shared helper: full-bleed image inside a 48px container */
const fullBleed = (url) =>
  `<img src="${url}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block;">`;

/** Shared helper: percentage-inset fragment inside a 48px container */
const insetFrag = (url, t, r, b, l) =>
  `<div style="position:absolute;top:${t}%;right:${r}%;bottom:${b}%;left:${l}%;">
    <img src="${url}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block;">
  </div>`;

/** Wrap HTML in a 48×48 overflow:hidden container */
const wrap48 = (inner) =>
  `<div style="position:relative;width:48px;height:48px;overflow:hidden;flex-shrink:0;">${inner}</div>`;

/* ── Social ─────────────────────────────────────────── */

export const facebookOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.facebookOriginal));

export const facebookDark48 = () =>
  wrap48(insetFrag(BRAND_ICON_URLS.facebookDark, 0, 0, 0.61, 0));

export const linkedInOriginal48 = () =>
  wrap48(`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:48px;height:48px;">
    ${fullBleed(BRAND_ICON_URLS.linkedInOriginal)}
  </div>`);

export const linkedInDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.linkedInDark));

export const googleOriginal48 = () =>
  wrap48([
    insetFrag(BRAND_ICON_URLS.googleOriginalV4, 0,     15.54, 59.56, 6.32),
    insetFrag(BRAND_ICON_URLS.googleOriginalV3, 27.56, 77.07, 27.54, 1),
    insetFrag(BRAND_ICON_URLS.googleOriginalV2, 59.58, 15.86, 0,    6.32),
    insetFrag(BRAND_ICON_URLS.googleOriginalV1, 40.99, 0.97,  12.07, 51),
  ].join(''));

export const googleDark48 = () =>
  wrap48(insetFrag(BRAND_ICON_URLS.googleDark, 0, 0.97, 0, 1));

export const youtubeOriginal48 = () =>
  wrap48([
    insetFrag(BRAND_ICON_URLS.youtubeOriginalRect, 14.77, 0.1,  14.77, -0.1),
    insetFrag(BRAND_ICON_URLS.youtubeOriginalPlay, 35.13, 33.99, 35.13, 39.87),
  ].join(''));

export const youtubeDark48 = () =>
  wrap48(insetFrag(BRAND_ICON_URLS.youtubeDark, 14.82, 0, 14.84, 0));

export const snapchatOriginal48 = () =>
  wrap48([
    insetFrag(BRAND_ICON_URLS.snapchatOriginalBg, 0.73, 0,    0.75, 0),
    insetFrag(BRAND_ICON_URLS.snapchatOriginalFg, 6.32, 5.83, 6.39, 5.85),
  ].join(''));

export const snapchatDark48 = () =>
  wrap48(insetFrag(BRAND_ICON_URLS.snapchatDark, 0.73, 0, 0.83, 0));

export const pinterestOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.pinterestOriginal));

export const pinterestDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.pinterestDark));

export const tiktokOriginal48 = () =>
  wrap48(insetFrag(BRAND_ICON_URLS.tiktokOriginal, 0, 5.94, 0, 5.93));

export const tiktokDark48 = () =>
  wrap48(insetFrag(BRAND_ICON_URLS.tiktokDark, 0, 6.25, 0, 8.33));

/* ── E-commerce ─────────────────────────────────────── */

export const amazonOriginal48 = () =>
  wrap48(insetFrag(BRAND_ICON_URLS.amazonOriginal, 12.5, 12.5, 12.5, 12.5));

export const amazonDark48 = () =>
  wrap48([
    insetFrag(BRAND_ICON_URLS.amazonDarkText,  20.83, 33.3,  36.8,  31.23),
    insetFrag(BRAND_ICON_URLS.amazonDarkArrow, 62,    20.83, 20.83, 20.83),
  ].join(''));

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
  wrap48(insetFrag(BRAND_ICON_URLS.googleAds, 16.67, 12.5, 16.04, 12.5));

export const googleAdsDark48 = () =>
  wrap48(insetFrag(BRAND_ICON_URLS.googleAds, 16.67, 12.5, 16.04, 12.5));

export const spsOriginal48 = () =>
  wrap48(`<div style="position:absolute;top:50%;transform:translateY(-50%);left:8.33%;right:10.21%;aspect-ratio:36/34.07;">
    <img src="${BRAND_ICON_URLS.spsOriginal}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block;">
  </div>`);

export const spsDark48 = () =>
  wrap48(insetFrag(BRAND_ICON_URLS.spsDark, 11.46, 10.21, 11.46, 8.33));

export const ebayOriginal48 = () =>
  wrap48(`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:39.925px;height:16px;overflow:hidden;">
    <img src="${BRAND_ICON_URLS.ebayOriginal}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block;">
  </div>`);

export const ebayDark48 = () =>
  wrap48(`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:39.925px;height:16px;overflow:hidden;">
    <img src="${BRAND_ICON_URLS.ebayDark}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block;">
  </div>`);

/* ── Finance ─────────────────────────────────────────── */

export const quickbooksOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.quickbooksOriginal));

export const quickbooksDark48 = () =>
  wrap48(`<div style="position:absolute;top:50%;transform:translateY(-50%);left:8.33%;right:8.33%;aspect-ratio:1;">
    <img src="${BRAND_ICON_URLS.quickbooksDark}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block;">
  </div>`);

export const paypalOriginal48 = () =>
  wrap48([
    insetFrag(BRAND_ICON_URLS.paypalOriginalP3, 0,     14.89, 20,    0),
    insetFrag(BRAND_ICON_URLS.paypalOriginalP2, 22.92, 0,     0,     21.05),
    insetFrag(BRAND_ICON_URLS.paypalOriginalP1, 20,    14.89, 19.98, 24.43),
  ].join(''));

export const paypalDark48 = () =>
  wrap48([
    insetFrag(BRAND_ICON_URLS.paypalDarkP3, 0,     14.89, 20,    0),
    insetFrag(BRAND_ICON_URLS.paypalDarkP2, 22.92, 0,     0,     21.05),
    insetFrag(BRAND_ICON_URLS.paypalDarkP1, 20,    14.89, 19.98, 24.43),
  ].join(''));

export const plaidOriginal48 = () =>
  wrap48(`<div style="position:absolute;top:50%;transform:translateY(-50%);left:8.33%;right:8.33%;aspect-ratio:1;">
    <img src="${BRAND_ICON_URLS.plaidOriginal}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block;">
  </div>`);

export const plaidDark48 = () =>
  wrap48(`<div style="position:absolute;top:50%;transform:translateY(-50%);left:8.33%;right:8.33%;aspect-ratio:1;">
    <img src="${BRAND_ICON_URLS.plaidDark}" alt="" style="position:absolute;inset:0;width:100%;height:100%;display:block;">
  </div>`);

export const stripeOriginal48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.stripe));

export const stripeDark48 = () =>
  wrap48(fullBleed(BRAND_ICON_URLS.stripe));

export const netsuiteOriginal48 = () =>
  wrap48([
    insetFrag(BRAND_ICON_URLS.netsuiteV1, 0,    0.06, 0,     0),
    insetFrag(BRAND_ICON_URLS.netsuiteV3, 10.4, 9.91, 12.47, 9.78),
    insetFrag(BRAND_ICON_URLS.netsuiteV2, 14,   13.51, 16.13, 13.44),
  ].join(''));

export const netsuiteDark48 = () => netsuiteOriginal48(); /* Same vectors — dark bg context handles contrast */

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
 * Uses the real Figma asset (Group13 = amazon.com wordmark at 48px)
 * scaled to fit a 24px slot via object-fit. At 24px the wordmark + smile
 * arrow is still recognisable. Active (yellow/100) or inactive (gray/200) bg.
 * @param {boolean} active
 */
export const amazonBadge24 = (active = true) =>
  `<span aria-label="Amazon" title="Amazon"
         style="display:inline-flex;align-items:center;justify-content:center;
                width:24px;height:24px;border-radius:100px;overflow:hidden;
                background:${active ? '#fef9c2' : '#e5e7eb'};flex-shrink:0;">
    <img src="${BRAND_ICON_URLS.amazonOriginal}" alt="Amazon"
         style="width:100%;height:100%;object-fit:contain;display:block;">
  </span>`;
