/**
 * Iris Library — Brand / Logo
 *
 * Source: Figma › Iris Library › Iris Logo / Smart mark (node 3778:41269)
 *
 * ## Figma variants
 * Component: LogoNew
 * Props: size (xs · sm · md · lg) × mode (light · dark) × showText (mark-only · with-text)
 *
 * ## Size spec (from Figma, LogoNew component)
 * | Size | Mark  | Text  | Gap  |
 * |------|-------|-------|------|
 * | xs   | 24 px | 18 px |  8px |
 * | sm   | 32 px | 24 px | 12px |
 * | md   | 48 px | 36 px | 16px |
 * | lg   | 64 px | 60 px | 16px |
 *
 * ## Dark mode
 * xs dark is a 7-vector assembly in Figma with no single composite raster.
 * It falls back to the xs light mark (no visible difference at 24 px in practice).
 * sm / md / lg dark have dedicated composite rasters.
 *
 * ## QA notes
 * - Light text color: #101828 (gray/900 — Figma-exact)
 * - Dark text color: #ffffff
 * - Font: semibold (600), sans-serif
 * - No border-radius or additional styling on the mark itself — the raster already includes it
 * - Card usage: use xs mark-only via `irisMarkImg({ size: 'xs' })` from brand-assets.js
 */

import { IRIS_MARK_SIZES, irisMarkImg, irisLogo } from './brand-assets.js';

export default {
  title: 'Iris Library/Brand/Logo',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
Iris hexagonal Smart mark — standalone and with the "Iris" wordmark.

**Source:** Figma node \`3778:41269\` — LogoNew component.

### Sizes

| Size | Mark  | Text  | Gap  |
|------|-------|-------|------|
| xs   | 24 px | 18 px |  8px |
| sm   | 32 px | 24 px | 12px |
| md   | 48 px | 36 px | 16px |
| lg   | 64 px | 60 px | 16px |

### Usage

\`\`\`js
import { irisMarkImg, irisLogo } from './brand-assets.js';

// Mark only (e.g. card avatar, 24px)
irisMarkImg({ size: 'xs' })

// Full logo — mark + "Iris" text
irisLogo({ size: 'md' })

// Dark mode (for dark panels)
irisLogo({ size: 'lg', dark: true })
\`\`\`

### Developer notes

- The mark raster already includes the hexagonal shape and shadow — do **not** add border-radius.
- Use \`irisMarkImg\` (mark only) inside constrained slots (e.g. card owner badges).
- Use \`irisLogo\` (mark + text) for nav bars, onboarding headers, and splash screens.
- Mark PNGs are locally hosted in \`public/assets/\` (served via \`staticDirs\` in \`.storybook/main.js\`) — no TTL.
- \`xs\` dark falls back to \`xs\` light (the Figma xs dark is a raw vector assembly with no composite raster).
        `,
      },
    },
  },
};

const SIZES = ['xs', 'sm', 'md', 'lg'];

const sizeLabel = (size) =>
  `<p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
             color:#9CA3AF;margin:0 0 10px;">${size} — ${IRIS_MARK_SIZES[size].mark}px</p>`;

/* ─────────────────────────────────────────────
   MARK ONLY — LIGHT
───────────────────────────────────────────── */
/**
 * The Iris hexagonal mark at all 4 sizes, light mode.
 *
 * **QA checklist**
 * - xs (24 px): used in card owner badges — verify no blurring at this size
 * - Marks are raster composites — do NOT add border-radius in the surrounding element
 * - All sizes should have equal visual weight (same hex proportion, same shadow depth)
 */
export const MarkOnly = {
  name: 'Mark only — all sizes (light)',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `
Smart mark only (no wordmark), light mode. Used in constrained slots such as card owner badges and favicons.

**✅ Do** — use \`xs\` (24 px) for card owner badges and avatar slots where the wordmark won't fit.
**✅ Do** — use \`md\` or \`lg\` for standalone splash screens, onboarding headers, and email footers.
**❌ Don't** — add \`border-radius\` to the surrounding element — the raster already includes the hexagonal shape.
**❌ Don't** — scale the mark below 24 px — it loses hex detail and the shadow becomes muddy.
        `,
      },
      source: {
        code: `<!-- Mark only — xs (24 px, card badge) -->
<img src="./assets/iris-mark-xs.svg" height="24" alt="Iris mark" style="display:block;width:auto;">

<!-- Mark only — md (48 px) -->
<img src="./assets/iris-mark-md.svg" height="48" alt="Iris mark" style="display:block;width:auto;">`,
        language: 'html',
      },
    },
  },
  render: () => `
    <div style="display:flex;gap:32px;align-items:flex-end;flex-wrap:wrap;">
      ${SIZES.map(size => `
        <div>
          ${sizeLabel(size)}
          ${irisMarkImg({ size, dark: false })}
        </div>`).join('')}
    </div>`,
};

/* ─────────────────────────────────────────────
   LOGO WITH TEXT — LIGHT
───────────────────────────────────────────── */
/**
 * Mark + "Iris" wordmark at all 4 sizes, light mode.
 *
 * **QA checklist**
 * - Text color: #101828 (Figma gray/900)
 * - Font-weight: 600 (semibold)
 * - Gap matches Figma: xs=8px, sm=12px, md/lg=16px
 * - Text and mark are vertically centered
 */
export const WithText = {
  name: 'Logo with text — all sizes (light)',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `
Full logo: Smart mark + "Iris" wordmark. Light mode. Used in nav bars, headers, and marketing surfaces.

**✅ Do** — use \`sm\` (32 px mark, 24 px text) for top nav bars; \`md\` for page headers and onboarding.
**✅ Do** — keep text color \`#101828\` (Figma gray/900) on all light surfaces.
**❌ Don't** — use the full logo in icon-only slots (collapsed sidebars, favicons) — use mark-only instead.

**QA** — Text color: \`#101828\` · Font-weight: 600 · Gaps: xs=8 px, sm=12 px, md=16 px, lg=16 px · Mark and text vertically centered.
        `,
      },
      source: {
        code: `<!-- Full logo — sm (nav bar) -->
<div style="display:inline-flex;align-items:center;gap:12px;">
  <img src="./assets/iris-mark-sm.svg" height="32" alt="Iris mark" style="display:block;width:auto;">
  <span style="font-size:24px;font-weight:600;color:#101828;white-space:nowrap;">Iris</span>
</div>

<!-- Full logo — md (page header) -->
<div style="display:inline-flex;align-items:center;gap:16px;">
  <img src="./assets/iris-mark-md.svg" height="48" alt="Iris mark" style="display:block;width:auto;">
  <span style="font-size:36px;font-weight:600;color:#101828;white-space:nowrap;">Iris</span>
</div>`,
        language: 'html',
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:24px;">
      ${SIZES.map(size => `
        <div style="display:flex;align-items:center;gap:24px;">
          <span style="width:32px;font:10px/1 sans-serif;color:#9CA3AF;">${size}</span>
          ${irisLogo({ size, dark: false })}
        </div>`).join('')}
    </div>`,
};

/* ─────────────────────────────────────────────
   DARK VARIANTS
───────────────────────────────────────────── */
/**
 * Dark-mode logo variants (sm / md / lg) on a dark panel.
 * xs dark falls back to the xs light raster.
 *
 * **QA checklist**
 * - Text color: #ffffff
 * - Dark marks use dedicated Figma rasters (sm/md/lg)
 * - xs dark is the light raster — visually identical at this size in practice
 * - Verify no "white halo" around mark edges on the dark panel
 */
export const DarkVariants = {
  name: 'Dark variants — sm / md / lg',
  parameters: {
    controls: { include: [] },
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: `
Dark mode — sm, md, lg on a dark background. \`xs\` dark falls back to the light-mode raster (Figma xs dark is a raw 7-vector assembly with no composite raster — visually identical at 24 px).

**✅ Do** — use dark variants on dark panels, dark sidebars, and dark email headers.
**✅ Do** — verify no white halo around mark edges on the dark panel (transparent PNG edges matter here).
**❌ Don't** — use the light logo on dark backgrounds — text \`#101828\` is invisible on dark surfaces.

**QA** — Dark text color: \`#ffffff\` · Dark marks: dedicated rasters for sm/md/lg · xs dark = xs light raster fallback · No halo artifacts on \`#101828\` dark bg.
        `,
      },
      source: {
        code: `<!-- Dark logo — md (dark nav bar or panel header) -->
<div style="display:inline-flex;align-items:center;gap:16px;">
  <img src="./assets/iris-mark-md-dark.svg" height="48" alt="Iris mark" style="display:block;width:auto;">
  <span style="font-size:36px;font-weight:600;color:#ffffff;white-space:nowrap;">Iris</span>
</div>

<!-- Dark mark only — sm (icon slot on dark panel) -->
<img src="./assets/iris-mark-sm-dark.svg" height="32" alt="Iris mark" style="display:block;width:auto;">`,
        language: 'html',
      },
    },
  },
  render: () => `
    <div style="background:#101828;padding:32px;border-radius:12px;display:flex;flex-direction:column;gap:24px;">
      ${['sm','md','lg'].map(size => `
        <div style="display:flex;align-items:center;gap:24px;">
          <span style="width:32px;font:10px/1 sans-serif;color:#6B7280;">${size}</span>
          ${irisLogo({ size, dark: true })}
        </div>`).join('')}
    </div>`,
};

/* ─────────────────────────────────────────────
   REFERENCE GRID (mark + logo, both modes)
───────────────────────────────────────────── */
/**
 * Full QA reference grid: all sizes × mark-only and with-text × light and dark.
 */
export const ReferenceGrid = {
  name: 'Reference grid — all sizes × modes',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `
Full QA reference grid: all 4 sizes × mark-only/with-text × light/dark.
Use this story to verify proportions, spacing, and color fidelity across all variants before a design review or release.

**✅ Do** — use this grid to spot-check mark proportions after any asset update (all sizes should maintain the same hex aspect ratio).
**❌ Don't** — use this grid in production — it's a QA tool only.
        `,
      },
      source: {
        code: `<!-- Reference: import helpers from brand-assets.js -->
import { irisMarkImg, irisLogo } from './brand-assets.js';

// Mark only
irisMarkImg({ size: 'xs' })   // 24 px light
irisMarkImg({ size: 'md' })   // 48 px light
irisMarkImg({ size: 'md', dark: true })  // 48 px dark

// Full logo
irisLogo({ size: 'sm' })             // 32 px + wordmark, light
irisLogo({ size: 'lg', dark: true }) // 64 px + wordmark, dark`,
        language: 'js',
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:40px;">

      <!-- Light section -->
      <div>
        <p style="font:11px/1 700 sans-serif;text-transform:uppercase;letter-spacing:.12em;
                  color:#6B7280;margin:0 0 20px;border-bottom:1px solid #e5e7eb;padding-bottom:8px;">
          Light mode
        </p>
        <div style="display:grid;grid-template-columns:60px repeat(4,auto);gap:16px 32px;align-items:center;">
          <!-- header row -->
          <span></span>
          ${SIZES.map(s => `<span style="font:10px/1 600 sans-serif;text-transform:uppercase;
            letter-spacing:.08em;color:#9CA3AF;">${s}</span>`).join('')}
          <!-- mark row -->
          <span style="font:11px/1.4 sans-serif;color:#6B7280;">Mark only</span>
          ${SIZES.map(size => irisMarkImg({ size, dark: false })).join('')}
          <!-- logo row -->
          <span style="font:11px/1.4 sans-serif;color:#6B7280;">With text</span>
          ${SIZES.map(size => irisLogo({ size, dark: false })).join('')}
        </div>
      </div>

      <!-- Dark section -->
      <div style="background:#101828;padding:24px;border-radius:12px;">
        <p style="font:11px/1 700 sans-serif;text-transform:uppercase;letter-spacing:.12em;
                  color:#374151;margin:0 0 20px;border-bottom:1px solid #1f2937;padding-bottom:8px;">
          Dark mode (sm · md · lg — xs falls back to light raster)
        </p>
        <div style="display:grid;grid-template-columns:60px repeat(4,auto);gap:16px 32px;align-items:center;">
          <span></span>
          ${SIZES.map(s => `<span style="font:10px/1 600 sans-serif;text-transform:uppercase;
            letter-spacing:.08em;color:#4B5563;">${s}</span>`).join('')}
          <span style="font:11px/1.4 sans-serif;color:#6B7280;">Mark only</span>
          ${SIZES.map(size => irisMarkImg({ size, dark: true })).join('')}
          <span style="font:11px/1.4 sans-serif;color:#6B7280;">With text</span>
          ${SIZES.map(size => irisLogo({ size, dark: true })).join('')}
        </div>
      </div>

    </div>`,
};
