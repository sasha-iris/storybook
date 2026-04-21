/**
 * Iris Library — Brand / Icons
 *
 * Source: Figma › Iris Library › Third-party brand icons (node 11484:2633)
 *
 * All icons are rendered at 48 × 48 px containers — the Figma-exact grid size.
 * Each icon has an "original" (colored) and "dark" (monochrome) variant.
 *
 * ## Icon inventory
 * | Group       | Icons                                                          |
 * |-------------|----------------------------------------------------------------|
 * | Social      | Facebook, LinkedIn, Google, YouTube, Snapchat, Pinterest, TikTok |
 * | E-commerce  | Amazon, Shopify ⚠, Google Ads, SPS Commerce, eBay              |
 * | Finance     | QuickBooks, PayPal, Plaid, Stripe, NetSuite, Xero ⚠           |
 *
 * ## Approximations
 * - **Shopify**: 50+ individual vector paths with no single composite raster in Figma.
 *   Rendered as a green 'S' badge. Replace with official Shopify CDN asset in production.
 * - **Xero**: complex mask/clip-path assembly in Figma with no single composite raster.
 *   Rendered as a teal circle 'x' placeholder. Replace with official Xero SVG in production.
 *
 * ## QA notes
 * - Icons sourced from cdn.simpleicons.org (stable, no TTL) — no local hosting required.
 * - Approximated icons (Shopify, Xero, SPS, NetSuite) use text/badge placeholders.
 * - Dark variants should work on both #101828 and #1f2937 backgrounds.
 * - Stripe: same raster for original and dark — context bg provides the dark treatment.
 * - NetSuite dark: same vectors as original — dark bg provides the treatment.
 */

import {
  facebookOriginal48, facebookDark48,
  linkedInOriginal48, linkedInDark48,
  googleOriginal48,   googleDark48,
  youtubeOriginal48,  youtubeDark48,
  snapchatOriginal48, snapchatDark48,
  pinterestOriginal48, pinterestDark48,
  tiktokOriginal48,   tiktokDark48,
  amazonOriginal48,   amazonDark48,
  shopifyOriginal48,  shopifyDark48,
  googleAdsOriginal48, googleAdsDark48,
  spsOriginal48,      spsDark48,
  ebayOriginal48,     ebayDark48,
  quickbooksOriginal48, quickbooksDark48,
  paypalOriginal48,   paypalDark48,
  plaidOriginal48,    plaidDark48,
  stripeOriginal48,   stripeDark48,
  netsuiteOriginal48, netsuiteDark48,
  xeroOriginal48,     xeroDark48,
} from './brand-assets.js';

export default {
  title: 'Iris Library/Brand/Icons',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
Third-party brand icons from the Iris Library design system.

**Source:** Figma node \`11484:2633\`.
All icons are 48 × 48 px containers. Each has an **original** (colored) and **dark** (monochrome) variant.

### Usage

\`\`\`js
import {
  facebookOriginal48,
  googleOriginal48,
  shopifyOriginal48,  // ⚠ approximated
} from './brand-assets.js';

// In a story render function:
facebookOriginal48()  // returns HTML string
\`\`\`

### Approximated icons ⚠

| Icon    | Reason                                    | Replacement                        |
|---------|-------------------------------------------|------------------------------------|
| Shopify | 50+ vector paths, no single composite     | Official Shopify Polaris SVG       |
| Xero    | Complex mask/clip-path, no composite      | Official Xero brand SVG            |

### TTL warning

Figma asset URLs expire after **7 days**. Host icons locally before production use.
        `,
      },
    },
  },
};

/* ── Shared layout helpers ─────────────────────────────── */

const label = (name) =>
  `<span style="font:10px/1.4 sans-serif;color:#9CA3AF;margin-top:6px;text-align:center;
               white-space:nowrap;">${name}</span>`;

const iconCell = (html, name) =>
  `<div style="display:flex;flex-direction:column;align-items:center;gap:0;">
    ${html}
    ${label(name)}
  </div>`;

const sectionHeading = (text) =>
  `<p style="font:11px/1 700 sans-serif;text-transform:uppercase;letter-spacing:.12em;
             color:#6B7280;margin:0 0 16px;border-bottom:1px solid #e5e7eb;
             padding-bottom:8px;width:100%;">${text}</p>`;

const iconRow = (cells) =>
  `<div style="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start;">${cells.join('')}</div>`;

/* ─────────────────────────────────────────────
   ALL ORIGINAL (colored)
───────────────────────────────────────────── */
/**
 * All 20 brand icons — original/colored variants.
 *
 * **QA checklist**
 * - Facebook: blue circle with 'f'
 * - Google: 4-fragment multicolor 'G'
 * - YouTube: red rectangle + white play triangle
 * - Snapchat: yellow ghost on white bg
 * - PayPal: 3-layer 'P'/'p' mark
 * - NetSuite: 3-fragment ring composition
 * - Shopify ⚠: green 'S' badge (approximated)
 * - Xero ⚠: teal circle 'x' (approximated)
 * - Stripe: same raster used for both original and dark
 */
export const AllOriginal = {
  name: 'All icons — original (colored)',
  parameters: {
    docs: {
      description: {
        story: `
All brand icons in original/colored variant. Grouped by Social, E-commerce, Finance.
Icons marked ⚠ are approximated (Shopify, Xero).
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:32px;">

      ${sectionHeading('Social')}
      ${iconRow([
        iconCell(facebookOriginal48(),  'Facebook'),
        iconCell(linkedInOriginal48(),  'LinkedIn'),
        iconCell(googleOriginal48(),    'Google'),
        iconCell(youtubeOriginal48(),   'YouTube'),
        iconCell(snapchatOriginal48(),  'Snapchat'),
        iconCell(pinterestOriginal48(), 'Pinterest'),
        iconCell(tiktokOriginal48(),    'TikTok'),
      ])}

      ${sectionHeading('E-commerce')}
      ${iconRow([
        iconCell(amazonOriginal48(),     'Amazon'),
        iconCell(shopifyOriginal48(),    'Shopify ⚠'),
        iconCell(googleAdsOriginal48(),  'Google Ads'),
        iconCell(spsOriginal48(),        'SPS Commerce'),
        iconCell(ebayOriginal48(),       'eBay'),
      ])}

      ${sectionHeading('Finance')}
      ${iconRow([
        iconCell(quickbooksOriginal48(), 'QuickBooks'),
        iconCell(paypalOriginal48(),     'PayPal'),
        iconCell(plaidOriginal48(),      'Plaid'),
        iconCell(stripeOriginal48(),     'Stripe'),
        iconCell(netsuiteOriginal48(),   'NetSuite'),
        iconCell(xeroOriginal48(),       'Xero ⚠'),
      ])}

    </div>`,
};

/* ─────────────────────────────────────────────
   ALL DARK
───────────────────────────────────────────── */
/**
 * All 20 brand icons — dark/monochrome variants on a dark panel.
 *
 * **QA checklist**
 * - All dark icons should be fully visible on #101828 background
 * - LinkedIn dark: white square mark
 * - Snapchat dark: white ghost lozenge
 * - TikTok dark: white mark (no cyan/red split)
 * - Stripe dark: same raster as original — ensure visible on dark bg
 * - NetSuite dark: same vectors as original — dark bg provides contrast
 */
export const AllDark = {
  name: 'All icons — dark (monochrome)',
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: `
All brand icons in dark/monochrome variant on a dark panel (#101828).
Stripe and NetSuite use the same raster as original — the dark background provides the contrast treatment.
        `,
      },
    },
  },
  render: () => `
    <div style="background:#101828;padding:32px;border-radius:12px;display:flex;flex-direction:column;gap:32px;">

      <p style="font:11px/1 700 sans-serif;text-transform:uppercase;letter-spacing:.12em;
                color:#374151;margin:0 0 4px;">Social</p>
      ${iconRow([
        iconCell(facebookDark48(),  'Facebook'),
        iconCell(linkedInDark48(),  'LinkedIn'),
        iconCell(googleDark48(),    'Google'),
        iconCell(youtubeDark48(),   'YouTube'),
        iconCell(snapchatDark48(),  'Snapchat'),
        iconCell(pinterestDark48(), 'Pinterest'),
        iconCell(tiktokDark48(),    'TikTok'),
      ].map(c => c.replace(/color:#9CA3AF/g, 'color:#4B5563')))}

      <p style="font:11px/1 700 sans-serif;text-transform:uppercase;letter-spacing:.12em;
                color:#374151;margin:0;">E-commerce</p>
      ${iconRow([
        iconCell(amazonDark48(),    'Amazon'),
        iconCell(shopifyDark48(),   'Shopify ⚠'),
        iconCell(googleAdsDark48(), 'Google Ads'),
        iconCell(spsDark48(),       'SPS Commerce'),
        iconCell(ebayDark48(),      'eBay'),
      ].map(c => c.replace(/color:#9CA3AF/g, 'color:#4B5563')))}

      <p style="font:11px/1 700 sans-serif;text-transform:uppercase;letter-spacing:.12em;
                color:#374151;margin:0;">Finance</p>
      ${iconRow([
        iconCell(quickbooksDark48(), 'QuickBooks'),
        iconCell(paypalDark48(),     'PayPal'),
        iconCell(plaidDark48(),      'Plaid'),
        iconCell(stripeDark48(),     'Stripe'),
        iconCell(netsuiteDark48(),   'NetSuite'),
        iconCell(xeroDark48(),       'Xero ⚠'),
      ].map(c => c.replace(/color:#9CA3AF/g, 'color:#4B5563')))}

    </div>`,
};

/* ─────────────────────────────────────────────
   SOCIAL ICONS
───────────────────────────────────────────── */
/**
 * Social icons — original vs dark side-by-side.
 *
 * **QA checklist**
 * - Google original: 4 fragments correctly positioned (no gap, no overlap)
 * - YouTube original: red rect + play triangle aligned
 * - Snapchat original: ghost body + outline layers aligned
 */
export const SocialIcons = {
  name: 'Social icons — original vs dark',
  parameters: {
    docs: {
      description: {
        story: `
Social channel icons (Facebook, LinkedIn, Google, YouTube, Snapchat, Pinterest, TikTok).
Left column: original (colored). Right column: dark (monochrome) shown on a dark panel.

| Icon      | Multi-fragment? | Note                                     |
|-----------|----------------|------------------------------------------|
| Google    | Yes (4 frags)  | V1–V4 positioned via % insets            |
| YouTube   | Yes (2 frags)  | Red rect + play triangle                 |
| Snapchat  | Yes (2 frags)  | Ghost body + outline layers              |
| Others    | No             | Single composite raster                  |
        `,
      },
    },
  },
  render: () => `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:640px;">

      <!-- Original column -->
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 16px;">Original</p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${[
            [facebookOriginal48(),  'Facebook'],
            [linkedInOriginal48(),  'LinkedIn'],
            [googleOriginal48(),    'Google'],
            [youtubeOriginal48(),   'YouTube'],
            [snapchatOriginal48(),  'Snapchat'],
            [pinterestOriginal48(), 'Pinterest'],
            [tiktokOriginal48(),    'TikTok'],
          ].map(([html, name]) =>
            `<div style="display:flex;align-items:center;gap:12px;">
              ${html}
              <span style="font:13px/1 sans-serif;color:#374151;">${name}</span>
            </div>`
          ).join('')}
        </div>
      </div>

      <!-- Dark column -->
      <div style="background:#101828;padding:16px;border-radius:8px;">
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#4B5563;margin:0 0 16px;">Dark</p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${[
            [facebookDark48(),  'Facebook'],
            [linkedInDark48(),  'LinkedIn'],
            [googleDark48(),    'Google'],
            [youtubeDark48(),   'YouTube'],
            [snapchatDark48(),  'Snapchat'],
            [pinterestDark48(), 'Pinterest'],
            [tiktokDark48(),    'TikTok'],
          ].map(([html, name]) =>
            `<div style="display:flex;align-items:center;gap:12px;">
              ${html}
              <span style="font:13px/1 sans-serif;color:#6B7280;">${name}</span>
            </div>`
          ).join('')}
        </div>
      </div>

    </div>`,
};

/* ─────────────────────────────────────────────
   E-COMMERCE ICONS
───────────────────────────────────────────── */
/**
 * E-commerce icons — original vs dark.
 *
 * **QA checklist**
 * - Amazon original: wordmark + smile arrow visible at 48px
 * - Amazon dark: 2-fragment assembly (text + arrow), both white
 * - Shopify ⚠: approximated — green badge 'S'
 * - eBay: logo centered, horizontally wide (39.9px wide × 16px tall)
 */
export const EcommerceIcons = {
  name: 'E-commerce icons — original vs dark',
  parameters: {
    docs: {
      description: {
        story: `
E-commerce channel icons: Amazon, Shopify, Google Ads, SPS Commerce, eBay.

**Approximations:**
- **Shopify ⚠** — 50+ vector paths in Figma, no single composite. Replace with official Shopify Polaris icon SVG.

| Icon       | Fragments | Note                                     |
|------------|-----------|------------------------------------------|
| Amazon     | 1 (orig)  | Group13 composite — single raster        |
| Amazon dark| 2 frags   | Text + smile arrow, both white           |
| Shopify    | APPROX    | Green 'S' badge placeholder              |
| Google Ads | 1         | Same raster for orig + dark              |
| SPS        | 1         | Centered, aspect-ratio preserved         |
| eBay       | 1         | Wide logo (39.9×16px), vertically centered|
        `,
      },
    },
  },
  render: () => `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:640px;">

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 16px;">Original</p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${[
            [amazonOriginal48(),    'Amazon'],
            [shopifyOriginal48(),   'Shopify ⚠'],
            [googleAdsOriginal48(), 'Google Ads'],
            [spsOriginal48(),       'SPS Commerce'],
            [ebayOriginal48(),      'eBay'],
          ].map(([html, name]) =>
            `<div style="display:flex;align-items:center;gap:12px;">
              ${html}
              <span style="font:13px/1 sans-serif;color:#374151;">${name}</span>
            </div>`
          ).join('')}
        </div>
      </div>

      <div style="background:#101828;padding:16px;border-radius:8px;">
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#4B5563;margin:0 0 16px;">Dark</p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${[
            [amazonDark48(),    'Amazon'],
            [shopifyDark48(),   'Shopify ⚠'],
            [googleAdsDark48(), 'Google Ads'],
            [spsDark48(),       'SPS Commerce'],
            [ebayDark48(),      'eBay'],
          ].map(([html, name]) =>
            `<div style="display:flex;align-items:center;gap:12px;">
              ${html}
              <span style="font:13px/1 sans-serif;color:#6B7280;">${name}</span>
            </div>`
          ).join('')}
        </div>
      </div>

    </div>`,
};

/* ─────────────────────────────────────────────
   FINANCE ICONS
───────────────────────────────────────────── */
/**
 * Finance icons — original vs dark.
 *
 * **QA checklist**
 * - QuickBooks: recognizable green gear/Q mark
 * - PayPal: 3 overlapping 'P' fragments aligned correctly (P3=gold at back, P2=blue, P1=blue on top)
 * - Stripe: same raster used for both original and dark
 * - NetSuite: 3-fragment ring assembly — verify no overlap artifacts
 * - Xero ⚠: approximated — teal circle 'x'
 */
export const FinanceIcons = {
  name: 'Finance icons — original vs dark',
  parameters: {
    docs: {
      description: {
        story: `
Finance integration icons: QuickBooks, PayPal, Plaid, Stripe, NetSuite, Xero.

**Approximations:**
- **Xero ⚠** — complex mask/clip-path in Figma, no single composite. Replace with official Xero brand SVG.

| Icon       | Fragments | Note                                                    |
|------------|-----------|----------------------------------------------------------|
| PayPal     | 3 frags   | P3 (gold, back) → P2 (blue) → P1 (blue, front)          |
| NetSuite   | 3 frags   | Outer shape + outer ring + inner ring                    |
| Stripe     | 1         | Same raster for orig + dark; bg provides dark treatment  |
| Xero       | APPROX    | Teal circle 'x' placeholder                              |
        `,
      },
    },
  },
  render: () => `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:640px;">

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 16px;">Original</p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${[
            [quickbooksOriginal48(), 'QuickBooks'],
            [paypalOriginal48(),     'PayPal'],
            [plaidOriginal48(),      'Plaid'],
            [stripeOriginal48(),     'Stripe'],
            [netsuiteOriginal48(),   'NetSuite'],
            [xeroOriginal48(),       'Xero ⚠'],
          ].map(([html, name]) =>
            `<div style="display:flex;align-items:center;gap:12px;">
              ${html}
              <span style="font:13px/1 sans-serif;color:#374151;">${name}</span>
            </div>`
          ).join('')}
        </div>
      </div>

      <div style="background:#101828;padding:16px;border-radius:8px;">
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#4B5563;margin:0 0 16px;">Dark</p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${[
            [quickbooksDark48(), 'QuickBooks'],
            [paypalDark48(),     'PayPal'],
            [plaidDark48(),      'Plaid'],
            [stripeDark48(),     'Stripe'],
            [netsuiteDark48(),   'NetSuite'],
            [xeroDark48(),       'Xero ⚠'],
          ].map(([html, name]) =>
            `<div style="display:flex;align-items:center;gap:12px;">
              ${html}
              <span style="font:13px/1 sans-serif;color:#6B7280;">${name}</span>
            </div>`
          ).join('')}
        </div>
      </div>

    </div>`,
};

/* ─────────────────────────────────────────────
   ORIGINAL vs DARK — side-by-side overview
───────────────────────────────────────────── */
/**
 * Full side-by-side comparison: all icons, original vs dark.
 * Use for design review and export.
 */
export const OriginalVsDark = {
  name: 'Overview — original vs dark',
  parameters: {
    docs: {
      description: {
        story: `
Complete original-vs-dark comparison. All 20 icons in a single view.
Approximated icons (Shopify, Xero) are labelled ⚠.
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:40px;">

      <div>
        ${sectionHeading('Social — original vs dark')}
        <div style="display:grid;grid-template-columns:repeat(7,60px);gap:16px;">
          ${[
            [facebookOriginal48(),  facebookDark48(),  'FB'],
            [linkedInOriginal48(),  linkedInDark48(),  'LI'],
            [googleOriginal48(),    googleDark48(),    'G'],
            [youtubeOriginal48(),   youtubeDark48(),   'YT'],
            [snapchatOriginal48(),  snapchatDark48(),  'SC'],
            [pinterestOriginal48(), pinterestDark48(), 'PT'],
            [tiktokOriginal48(),    tiktokDark48(),    'TT'],
          ].map(([orig, dark, abbr]) => `
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              ${orig}
              <span style="font:9px/1 sans-serif;color:#9CA3AF;">${abbr}</span>
            </div>`
          ).join('')}
        </div>
        <div style="background:#101828;padding:12px;border-radius:8px;margin-top:8px;">
          <div style="display:grid;grid-template-columns:repeat(7,60px);gap:16px;">
            ${[
              facebookDark48(), linkedInDark48(), googleDark48(),
              youtubeDark48(), snapchatDark48(), pinterestDark48(), tiktokDark48(),
            ].map(html => `<div style="display:flex;justify-content:center;">${html}</div>`).join('')}
          </div>
        </div>
      </div>

      <div>
        ${sectionHeading('E-commerce — original vs dark')}
        <div style="display:grid;grid-template-columns:repeat(5,60px);gap:16px;">
          ${[
            [amazonOriginal48(),    'AMZ'],
            [shopifyOriginal48(),   'SHO ⚠'],
            [googleAdsOriginal48(), 'GAds'],
            [spsOriginal48(),       'SPS'],
            [ebayOriginal48(),      'eBay'],
          ].map(([html, abbr]) => `
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              ${html}
              <span style="font:9px/1 sans-serif;color:#9CA3AF;">${abbr}</span>
            </div>`
          ).join('')}
        </div>
        <div style="background:#101828;padding:12px;border-radius:8px;margin-top:8px;">
          <div style="display:grid;grid-template-columns:repeat(5,60px);gap:16px;">
            ${[amazonDark48(), shopifyDark48(), googleAdsDark48(), spsDark48(), ebayDark48()]
              .map(html => `<div style="display:flex;justify-content:center;">${html}</div>`).join('')}
          </div>
        </div>
      </div>

      <div>
        ${sectionHeading('Finance — original vs dark')}
        <div style="display:grid;grid-template-columns:repeat(6,60px);gap:16px;">
          ${[
            [quickbooksOriginal48(), 'QB'],
            [paypalOriginal48(),     'PP'],
            [plaidOriginal48(),      'Plaid'],
            [stripeOriginal48(),     'Stripe'],
            [netsuiteOriginal48(),   'NS'],
            [xeroOriginal48(),       'Xero ⚠'],
          ].map(([html, abbr]) => `
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              ${html}
              <span style="font:9px/1 sans-serif;color:#9CA3AF;">${abbr}</span>
            </div>`
          ).join('')}
        </div>
        <div style="background:#101828;padding:12px;border-radius:8px;margin-top:8px;">
          <div style="display:grid;grid-template-columns:repeat(6,60px);gap:16px;">
            ${[quickbooksDark48(), paypalDark48(), plaidDark48(), stripeDark48(), netsuiteDark48(), xeroDark48()]
              .map(html => `<div style="display:flex;justify-content:center;">${html}</div>`).join('')}
          </div>
        </div>
      </div>

    </div>`,
};
