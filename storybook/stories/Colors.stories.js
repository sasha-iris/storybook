/**
 * Iris Library — Color Tokens
 * Source: Figma › ◐ Primitives · "Light" frames
 * File key: ZKtEULdYKaXe5uQl1J6ijI
 *
 * Figma node IDs:
 *   Text color variables       11498:1293
 *   Background color variables 11498:1658
 *   Border color variables     11498:2268
 *
 * Covers all light-mode primitive color groups:
 *   - Text color variables (22 tokens)
 *   - Background color variables (36 tokens)
 *   - Border color variables (18 tokens)
 *   - Semantic aliases (legacy)
 *
 * All swatches render via live CSS custom properties so any
 * downstream token override is immediately reflected here.
 *
 * @note Dark-mode tokens are out of scope for this pass.
 */

export default {
  title: 'Iris Library/Foundation/Colors',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**Color tokens** are the single source of truth for all colors in the Iris Library.
They are CSS custom properties defined in \`:root\` inside \`styles.css\` and available globally
via \`var(--color-<group>-<name>)\`.

**Token groups**
- \`--color-text-*\` — foreground: text, icons, labels
- \`--color-bg-*\` — surface fills, overlays, state-driven backgrounds
- \`--color-border-*\` — dividers, input outlines, focus rings
- \`--color-*\` (no group) — legacy semantic aliases (kept for backward compatibility)

**When to use**
- Always reference a token instead of a raw hex value in component styles
- Use \`-soft\` and \`-subtle\` variants for tinted backgrounds and borders in alerts, badges, and inline callouts
- Use \`-strong\` variants for filled, high-contrast surfaces (e.g. primary buttons, danger banners)
- Use \`-disabled\` tokens for any disabled UI state to stay consistent across the system

**When NOT to use**
- Do not hardcode hex values in component CSS — use a token so overrides propagate automatically
- Do not use \`--color-bg-*\` tokens as text colors or vice versa — each group is scoped to its role
- Do not use legacy \`--color-primary\`, \`--color-danger\`, etc. for new work — migrate to the Figma-sourced tokens

**Naming convention**
\`--color-{group}-{semantic?}-{shade?}\`
Examples: \`--color-text-fg-brand\`, \`--color-bg-success-soft\`, \`--color-border-danger\`

---

> ⚠️ **Important for developers — token coverage gap**
>
> This page documents the **primitive token layer** (text / bg / border variables from the Figma Primitives frame).
> Component families — Badge, Chip, Tag, Tabs, Progress Bar, and others — are built directly from
> **Figma component nodes** and use additional hex values that are not yet mapped to CSS custom properties.
>
> **What this means in practice:**
> - Component source snippets in this Storybook show raw hex values (e.g. \`#5850ec\`, \`#e7000b\`).
>   These are Figma-exact and visually correct, but they bypass the token layer.
> - Until a full token audit maps every component color to a \`--color-*\` variable,
>   raw hex values in components should be treated as **provisional** — do not copy them into new work without checking against this page first.
>
> **Action required (design + engineering):**
> Audit each component family against this token page and replace raw hex values with the corresponding
> \`--color-*\` CSS variable. Tracked as a known debt item.
>
> **Affected families (as of May 2026):** Badge · Chip · Tag · Button · Tabs · Progress Bar
        `.trim(),
      },
    },
  },
};

/* ── helpers ──────────────────────────────────────────────────── */

/** Render a labeled group of color swatches. */
const group = (title, swatches) => `
  <div style="margin-bottom:40px">
    <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;
              color:var(--color-text-fg-disabled,#99a1af);margin-bottom:14px;">${title}</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
      ${swatches.map(([cssVar, hex, label]) => `
        <div style="width:120px;border:1px solid var(--color-border-base,#e5e7eb);
                    border-radius:8px;overflow:hidden;">
          <div style="height:64px;background:var(${cssVar},${hex});
                      outline:${hex === '#ffffff' ? '1px solid #e5e7eb' : 'none'};
                      outline-offset:-1px;"></div>
          <div style="padding:8px 10px;background:var(--color-bg-surface);">
            <div style="font-size:10px;font-weight:600;color:#101828;
                        margin-bottom:2px;line-height:1.3;">${cssVar}</div>
            <div style="font-family:ui-monospace,monospace;font-size:10px;
                        color:#4a5565;">${hex}</div>
            ${label ? `<div style="font-size:9px;color:#99a1af;margin-top:2px;">${label}</div>` : ''}
          </div>
        </div>`).join('')}
    </div>
  </div>`;

/* ── stories ──────────────────────────────────────────────────── */

export const TextColors = {
  name: 'Text color variables',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All \`--color-text-*\` tokens from the Figma "Text color variables / Light" frame (node \`11498:1293\`).
Use these for any foreground text, icons, or labels.

**✅ Do** — pair \`--color-text-body\` with \`--color-bg-white\` or \`--color-bg-secondary-soft\` for readable body text.
**✅ Do** — use \`--color-text-fg-disabled\` for any input placeholder, inactive nav item, or muted label.
**❌ Don't** — use \`--color-text-fg-brand-subtle\` (#bedbff) as body text on white — it fails WCAG AA contrast.
**❌ Don't** — use accent tokens (purple, cyan, pink) for informational text without verifying contrast on the target background.
        `.trim(),
      },
      source: {
        code: `/* Page-level typography */
.page-title   { color: var(--color-text-heading); }
.body-copy    { color: var(--color-text-body); }
.helper-text  { color: var(--color-text-body-subtle); }

/* Interactive / brand */
.link         { color: var(--color-text-fg-brand); }
.link:hover   { color: var(--color-text-fg-brand-strong); }

/* Feedback states */
.error-msg    { color: var(--color-text-fg-danger); }
.success-msg  { color: var(--color-text-fg-success); }
.warning-msg  { color: var(--color-text-fg-warning); }

/* Disabled */
.label--disabled { color: var(--color-text-fg-disabled); }`,
        language: 'css',
      },
    },
  },
  render: () => group('Text color variables — light mode', [
    ['--color-text-white',            '#ffffff', 'text/white'],
    ['--color-text-black',            '#101828', 'text/black'],
    ['--color-text-heading',          '#101828', 'text/heading'],
    ['--color-text-body',             '#4a5565', 'text/body'],
    ['--color-text-body-subtle',      '#6a7282', 'text/body-subtle'],
    ['--color-text-fg-brand-subtle',  '#bedbff', 'text/fg-brand-subtle'],
    ['--color-text-fg-brand',         '#1447e6', 'text/fg-brand'],
    ['--color-text-fg-brand-strong',  '#1c398e', 'text/fg-brand-strong'],
    ['--color-text-fg-success',       '#007a55', 'text/fg-success'],
    ['--color-text-fg-success-strong','#004f3b', 'text/fg-success-strong'],
    ['--color-text-fg-danger',        '#c70036', 'text/fg-danger'],
    ['--color-text-fg-danger-strong', '#8b0836', 'text/fg-danger-strong'],
    ['--color-text-fg-warning-subtle','#d03801', 'text/fg-warning-subtle'],
    ['--color-text-fg-warning',       '#771d1d', 'text/fg-warning'],
    ['--color-text-fg-yellow',        '#fdc700', 'text/fg-yellow'],
    ['--color-text-fg-info',          '#1c398e', 'text/fg-info'],
    ['--color-text-fg-disabled',      '#99a1af', 'text/fg-disabled'],
    ['--color-text-fg-purple',        '#9810fa', 'text/fg-purple'],
    ['--color-text-fg-cyan',          '#0092b8', 'text/fg-cyan'],
    ['--color-text-fg-indigo',        '#4f39f6', 'text/fg-indigo'],
    ['--color-text-fg-pink',          '#e60076', 'text/fg-pink'],
    ['--color-text-fg-lime',          '#5ea500', 'text/fg-lime'],
  ]),
};

export const BackgroundColors = {
  name: 'Background color variables',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All \`--color-bg-*\` tokens from the Figma "Background color variables / Light" frame (node \`11498:1658\`).
Use these for surface fills, overlays, and state-driven backgrounds.

**✅ Do** — use \`-soft\` / \`-medium\` variants for tinted alert and badge backgrounds; reserve the solid variant for filled interactive elements.
**✅ Do** — layer neutral tokens: \`--color-bg-white\` → \`--color-bg-secondary-soft\` → \`--color-bg-tertiary\` for page → sidebar → hover progressions.
**❌ Don't** — place dark text on \`--color-bg-brand\` or \`--color-bg-danger\` without checking contrast — these require white text.
**❌ Don't** — use accent tokens (purple, sky, fuchsia, etc.) as primary surface colors — they are for data-vis and category badges only.
        `.trim(),
      },
      source: {
        code: `/* Page surfaces */
.page         { background: var(--color-bg-secondary-soft); }
.card         { background: var(--color-bg-white); }
.sidebar      { background: var(--color-bg-tertiary); }

/* Semantic state backgrounds */
.alert--success { background: var(--color-bg-success-soft); }
.alert--danger  { background: var(--color-bg-danger-soft); }
.alert--warning { background: var(--color-bg-warning-soft); }

/* Filled interactive elements */
.btn-primary    { background: var(--color-bg-brand); }
.btn-primary:hover { background: var(--color-bg-brand-strong); }

/* Disabled surface */
.input--disabled { background: var(--color-bg-disabled); }`,
        language: 'css',
      },
    },
  },
  render: () => `
    ${group('Neutral', [
      ['--color-bg-white',          '#ffffff', 'bg/white'],
      ['--color-bg-primary-soft',   '#ffffff', 'bg/primary-soft'],
      ['--color-bg-secondary-soft', '#f9fafb', 'bg/secondary-soft'],
      ['--color-bg-secondary',      '#f9fafb', 'bg/secondary'],
      ['--color-bg-tertiary-soft',  '#f3f4f6', 'bg/tertiary-soft'],
      ['--color-bg-tertiary',       '#f3f4f6', 'bg/tertiary'],
      ['--color-bg-quaternary',     '#e5e7eb', 'bg/quaternary'],
      ['--color-bg-gray',           '#d1d5dc', 'bg/gray'],
      ['--color-bg-disabled',       '#f3f4f6', 'bg/disabled'],
    ])}
    ${group('Brand', [
      ['--color-bg-brand-softer', '#eef6ff', 'bg/brand-softer'],
      ['--color-bg-brand-soft',   '#dbeafe', 'bg/brand-soft'],
      ['--color-bg-brand-medium', '#bedbff', 'bg/brand-medium'],
      ['--color-bg-brand',        '#5145cd', 'bg/brand'],
      ['--color-bg-brand-strong', '#193cb8', 'bg/brand-strong'],
    ])}
    ${group('Success', [
      ['--color-bg-success-soft',   '#ecfdf5', 'bg/success-soft'],
      ['--color-bg-success-medium', '#d0fae5', 'bg/success-medium'],
      ['--color-bg-success',        '#007a55', 'bg/success'],
      ['--color-bg-success-strong', '#006045', 'bg/success-strong'],
    ])}
    ${group('Danger', [
      ['--color-bg-danger-soft',   '#fef0f2', 'bg/danger-soft'],
      ['--color-bg-danger-medium', '#ffe4e6', 'bg/danger-medium'],
      ['--color-bg-danger',        '#c70036', 'bg/danger'],
      ['--color-bg-danger-strong', '#a50036', 'bg/danger-strong'],
    ])}
    ${group('Warning', [
      ['--color-bg-warning-soft',   '#fff8f1', 'bg/warning-soft'],
      ['--color-bg-warning-medium', '#feecdc', 'bg/warning-medium'],
      ['--color-bg-warning',        '#ff5a1f', 'bg/warning'],
      ['--color-bg-warning-strong', '#b43403', 'bg/warning-strong'],
    ])}
    ${group('Dark', [
      ['--color-bg-dark-strong', '#101828', 'bg/dark-strong'],
      ['--color-bg-dark',        '#1e2939', 'bg/dark'],
    ])}
    ${group('Accent', [
      ['--color-bg-purple',  '#ad46ff', 'bg/purple'],
      ['--color-bg-sky',     '#00a6f4', 'bg/sky'],
      ['--color-bg-teal',    '#009689', 'bg/teal'],
      ['--color-bg-pink',    '#e60076', 'bg/pink'],
      ['--color-bg-cyan',    '#00b8db', 'bg/cyan'],
      ['--color-bg-fuchsia', '#c800de', 'bg/fuchsia'],
      ['--color-bg-indigo',  '#4f39f6', 'bg/indigo'],
      ['--color-bg-orange',  '#ff8a4c', 'bg/orange'],
    ])}
  `,
};

export const BorderColors = {
  name: 'Border color variables',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All \`--color-border-*\` tokens from the Figma "Border color variables / Light" frame (node \`11498:2268\`).
Use these for dividers, input outlines, focus rings, and card borders.

**✅ Do** — use \`--color-border-base\` as the default border for cards, inputs, and dividers.
**✅ Do** — use \`--color-border-brand\` for focus rings on interactive elements to meet WCAG focus-visible requirements.
**❌ Don't** — use \`--color-border-muted\` or \`--color-border-light\` as the only visual boundary on white backgrounds — they are near-invisible and fail 3:1 UI contrast.
**❌ Don't** — mix state border tokens with the wrong background token (e.g. \`--color-border-success\` on a danger background).
        `.trim(),
      },
      source: {
        code: `/* Default input */
.input {
  border: 1px solid var(--color-border-base);
}
.input:focus {
  border-color: var(--color-border-brand);
  outline: 2px solid var(--color-border-brand-subtle);
}

/* Validation states */
.input--error   { border-color: var(--color-border-danger); }
.input--success { border-color: var(--color-border-success); }
.input--warning { border-color: var(--color-border-warning); }

/* Dividers */
.divider { border-top: 1px solid var(--color-border-base-soft); }

/* Card */
.card { border: 1px solid var(--color-border-base); }`,
        language: 'css',
      },
    },
  },
  render: () => `
    ${group('Base', [
      ['--color-border-dark',        '#4a5565', 'border/dark'],
      ['--color-border-muted',       '#f9fafb', 'border/muted'],
      ['--color-border-light-subtle','#f3f4f6', 'border/light-subtle'],
      ['--color-border-light',       '#f3f4f6', 'border/light'],
      ['--color-border-base-soft',   '#e5e7eb', 'border/base-soft'],
      ['--color-border-base',        '#e5e7eb', 'border/base'],
      ['--color-border-dark-subtle', '#1e2939', 'border/dark-subtle'],
    ])}
    ${group('Brand', [
      ['--color-border-brand-subtle', '#bedbff', 'border/brand-subtle'],
      ['--color-border-brand-light',  '#5850ec', 'border/brand-light'],
      ['--color-border-brand',        '#5145cd', 'border/brand'],
    ])}
    ${group('State', [
      ['--color-border-success-subtle', '#a4f4cf', 'border/success-subtle'],
      ['--color-border-success',        '#007a55', 'border/success'],
      ['--color-border-danger-subtle',  '#ffccd3', 'border/danger-subtle'],
      ['--color-border-danger',         '#c70036', 'border/danger'],
      ['--color-border-warning-subtle', '#fcd9bd', 'border/warning-subtle'],
      ['--color-border-warning',        '#d03801', 'border/warning'],
    ])}
    ${group('Accent', [
      ['--color-border-purple', '#ad46ff', 'border/purple'],
      ['--color-border-orange', '#ff8a4c', 'border/orange'],
    ])}
  `,
};

export const SemanticColors = {
  name: 'Semantic aliases (legacy)',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Legacy semantic aliases defined before the Figma token migration. Kept for backward compatibility with existing components.

**✅ Do** — keep using these tokens in components that already reference them to avoid accidental color drift.
**❌ Don't** — use these tokens in new components or new stories — use the Figma-sourced \`--color-text-fg-*\`, \`--color-bg-*\`, and \`--color-border-*\` tokens instead.

Migration guide:
| Legacy | Replace with |
|---|---|
| \`--color-primary\` | \`--color-bg-brand\` / \`--color-text-fg-brand\` |
| \`--color-success\` | \`--color-bg-success\` / \`--color-text-fg-success\` |
| \`--color-warning\` | \`--color-bg-warning\` / \`--color-text-fg-warning\` |
| \`--color-danger\`  | \`--color-bg-danger\` / \`--color-text-fg-danger\` |
| \`--color-info\`    | \`--color-text-fg-info\` |
        `.trim(),
      },
      source: {
        code: `/* Legacy usage — keep as-is in existing components */
.badge--success { color: var(--color-success); }
.badge--danger  { color: var(--color-danger); }

/* New components — use Figma-sourced tokens instead */
.badge--success { color: var(--color-text-fg-success); background: var(--color-bg-success-soft); }
.badge--danger  { color: var(--color-text-fg-danger);  background: var(--color-bg-danger-soft); }`,
        language: 'css',
      },
    },
  },
  render: () => group('Semantic aliases', [
    ['--color-primary', '#1C64F2', 'blue-700'],
    ['--color-success', '#0E9F6E', 'green-500'],
    ['--color-warning', '#C27803', 'yellow-600'],
    ['--color-danger',  '#E02424', 'red-600'],
    ['--color-info',    '#1C64F2', 'blue-700'],
  ]),
};
