/**
 * Iris Library — Typography
 * Source: Figma › ◐ Primitives · "Light" frames
 * File key: ZKtEULdYKaXe5uQl1J6ijI
 *
 * Figma node IDs:
 *   [T] sizes   11484:2542
 *   [T] weight  11484:2573 · 11484:2593
 *
 * Named styles confirmed from Figma:
 *   H1/30px - 700 · H1/30px - 400
 *   H2/24px - 400 · H3/20px - 400 · H4/18px - 400
 *   Body 1/16px - 400 · Body 2/14px - 400 · Caption/12px - 400
 * Font family: Inter · Line-height: 1.5 for all
 *
 * CSS tokens defined in styles.css :root:
 *   --text-h1 · --text-h2 · --text-h3 · --text-h4
 *   --text-body-1 · --text-body-2 · --text-caption
 *   --font-light · --font-normal · --font-medium · --font-semibold · --font-bold · --font-extrabold
 *   --leading-base · --font-family-base
 */

export default {
  title: 'Iris Library/Foundation/Typography',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'white' },
    docs: {
      description: {
        component: `
**Typography tokens** define the complete type system for the Iris Library.
All tokens are CSS custom properties in \`:root\` inside \`styles.css\`, applied via \`var(--token)\`.

**Token groups**
- \`--text-h1\` → \`--text-caption\` — Figma named scale (preferred for new work)
- \`--text-xs\` → \`--text-5xl\` — generic Tailwind-style scale (legacy, backward-compat)
- \`--font-light\` → \`--font-extrabold\` — font-weight tokens
- \`--leading-base\` — line-height (1.5 for all sizes)
- \`--font-family-base\` — Inter, ui-sans-serif, system-ui

**When to use**
- Use the Figma named scale (\`--text-h1\` → \`--text-caption\`) for all new components and pages
- Use \`--font-bold\` (700) for headings that need emphasis; use \`--font-normal\` (400) for body text
- Use \`--text-caption\` for labels, helper text, and metadata below the main content hierarchy
- Use \`--leading-base\` (1.5) as the default line-height to match the Figma spec

**When NOT to use**
- Do not hardcode \`font-size: 16px\` — use \`var(--text-body-1)\` so the scale stays overridable
- Do not use the legacy generic scale (\`--text-xs\` etc.) in new components — use the named Figma scale
- Do not mix font sizes from different scales in the same component hierarchy

**Naming convention**
Named scale: \`--text-{role}\` → \`--text-h1\`, \`--text-body-2\`, \`--text-caption\`
Weight tokens: \`--font-{weight-name}\` → \`--font-bold\`, \`--font-semibold\`
        `.trim(),
      },
    },
  },
};

/* ── helpers ──────────────────────────────────────────────────── */

const tag = (label) =>
  `<span style="font-family:ui-monospace,monospace;font-size:10px;background:#F3F4F6;
    border:1px solid #E5E7EB;border-radius:4px;padding:2px 7px;
    color:#6B7280;white-space:nowrap;">${label}</span>`;

const row = (sample, cssVar, px, weight, figmaStyle, isLast) => `
  <div style="display:grid;grid-template-columns:1fr auto;gap:24px;
              align-items:center;padding:20px 28px;
              border-bottom:${isLast ? 'none' : '1px solid #E5E7EB'};">
    <div>
      <div style="font-family:Inter,sans-serif;
                  font-size:var(${cssVar},${px});
                  font-weight:${weight};
                  color:var(--color-text-heading,#101828);
                  line-height:var(--leading-base,1.5);">
        ${sample}
      </div>
      <div style="margin-top:4px;font-size:10px;color:var(--color-text-fg-disabled,#99a1af);">
        Figma: <em>${figmaStyle}</em>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end;">
      ${tag(cssVar)} ${tag(px)} ${tag('weight: ' + weight)}
    </div>
  </div>`;

/* ── stories ──────────────────────────────────────────────────── */

/**
 * Type scale sourced from Figma named styles.
 * Each row shows the live `var(--text-*)` token, its pixel size, and the
 * Figma style name for design–dev traceability.
 */
export const TypeScale = {
  name: 'Type scale (H1 – Caption)',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Named typography scale from the Figma Primitive page (node \`11484:2542\`).
Tokens map to \`--text-h1\` through \`--text-caption\` in \`styles.css\`.

**✅ Do** — use \`--text-body-1\` (16px) as the default body size; \`--text-body-2\` (14px) for secondary/supporting text.
**✅ Do** — pair H1–H4 with \`--color-text-heading\` and body/caption with \`--color-text-body\` or \`--color-text-body-subtle\`.
**❌ Don't** — skip heading levels (e.g. H1 → H4) — maintain a logical document hierarchy for screen readers.
**❌ Don't** — use \`--text-caption\` (12px) for body content — it is only legible at normal reading distances as a label or hint.
        `.trim(),
      },
      source: {
        code: `<!-- Page heading -->
<h1 style="font-size: var(--text-h1); font-weight: var(--font-bold); color: var(--color-text-heading); line-height: var(--leading-base);">
  Dashboard overview
</h1>

<!-- Section heading -->
<h2 style="font-size: var(--text-h2); font-weight: var(--font-normal); color: var(--color-text-heading);">
  Monthly performance
</h2>

<!-- Body text -->
<p style="font-size: var(--text-body-1); font-weight: var(--font-normal); color: var(--color-text-body);">
  Showing results for the last 30 days. Export the report to share with your team.
</p>

<!-- Supporting / secondary text -->
<p style="font-size: var(--text-body-2); color: var(--color-text-body-subtle);">
  Last updated 3 minutes ago
</p>

<!-- Label / hint -->
<span style="font-size: var(--text-caption); color: var(--color-text-fg-disabled);">
  Required field
</span>`,
        language: 'html',
      },
    },
  },
  render: () => `
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;overflow:hidden;">
      ${[
        ['H1 — Bold heading',           '--text-h1',      '30px', 700, 'H1/30px - 700'],
        ['H1 — Regular heading',         '--text-h1',      '30px', 400, 'H1/30px - 400'],
        ['H2 — Section heading',         '--text-h2',      '24px', 400, 'H2/24px - 400'],
        ['H3 — Sub-section heading',     '--text-h3',      '20px', 400, 'H3/20px - 400'],
        ['H4 — Card / panel heading',    '--text-h4',      '18px', 400, 'H4/18px - 400'],
        ['Body 1 — Primary body text',   '--text-body-1',  '16px', 400, 'Body 1/16px - 400'],
        ['Body 2 — Secondary body text', '--text-body-2',  '14px', 400, 'Body 2/14px - 400'],
        ['Caption — Labels and hints',   '--text-caption', '12px', 400, 'Caption/12px - 400'],
      ].map(([sample, cssVar, px, weight, figmaStyle], i, arr) =>
        row(sample, cssVar, px, weight, figmaStyle, i === arr.length - 1)
      ).join('')}
    </div>`,
};

/**
 * Previous generic size scale (text-xs → text-5xl) kept for backward compatibility.
 * New work should use the named Figma scale above.
 */
export const GenericScale = {
  name: 'Generic size scale (legacy)',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Tailwind-style size tokens (\`--text-xs\` through \`--text-5xl\`) defined in \`styles.css\`.
Kept for backward compatibility — do not use in new components.

**✅ Do** — keep using these tokens in existing components that already reference them to avoid unintended size changes.
**❌ Don't** — use this scale in new components or stories — use the Figma named scale (\`--text-h1\` → \`--text-caption\`) instead.

Migration guide:
| Legacy | Replace with |
|---|---|
| \`--text-3xl\` (30px) | \`--text-h1\` |
| \`--text-2xl\` (24px) | \`--text-h2\` |
| \`--text-xl\`  (20px) | \`--text-h3\` |
| \`--text-lg\`  (18px) | \`--text-h4\` |
| \`--text-base\` (16px) | \`--text-body-1\` |
| \`--text-sm\`  (14px) | \`--text-body-2\` |
| \`--text-xs\`  (12px) | \`--text-caption\` |
        `.trim(),
      },
      source: {
        code: `/* Legacy usage — keep as-is in existing components */
.card-title { font-size: var(--text-xl); }

/* New components — use Figma named scale instead */
.card-title { font-size: var(--text-h3); font-weight: var(--font-normal); }`,
        language: 'css',
      },
    },
  },
  render: () => `
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;overflow:hidden;">
      ${[
        ['--text-5xl',  '3rem',    '48px', 800,  'The quick brown fox'],
        ['--text-4xl',  '2.25rem', '36px', 700,  'The quick brown fox'],
        ['--text-3xl',  '1.875rem','30px', 700,  'The quick brown fox'],
        ['--text-2xl',  '1.5rem',  '24px', 600,  'The quick brown fox jumps'],
        ['--text-xl',   '1.25rem', '20px', 600,  'The quick brown fox jumps over'],
        ['--text-lg',   '1.125rem','18px', 500,  'The quick brown fox jumps over the lazy dog'],
        ['--text-base', '1rem',    '16px', 400,  'The quick brown fox jumps over the lazy dog'],
        ['--text-sm',   '0.875rem','14px', 400,  'The quick brown fox jumps over the lazy dog'],
        ['--text-xs',   '0.75rem', '12px', 400,  'The quick brown fox jumps over the lazy dog'],
      ].map(([cssVar, rem, px, weight, sample], i, arr) => `
        <div style="display:grid;grid-template-columns:1fr 260px;gap:16px;
                    align-items:center;padding:20px 28px;
                    border-bottom:${i < arr.length - 1 ? '1px solid #E5E7EB' : 'none'};">
          <span style="font-family:Inter,sans-serif;font-size:var(${cssVar},${rem});
                       font-weight:${weight};color:var(--color-text-heading,#101828);
                       line-height:var(--leading-base,1.5);">
            ${sample}
          </span>
          <div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end;">
            ${tag(cssVar)} ${tag(rem)} ${tag(px)}
          </div>
        </div>`).join('')}
    </div>`,
};

export const FontWeights = {
  name: 'Font weights',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Available Inter font weights from the Figma \`[T] weight\` frame (nodes \`11484:2573\`, \`11484:2593\`).
Tokens \`--font-light\` through \`--font-extrabold\` are defined in \`styles.css\`.

**✅ Do** — use \`--font-bold\` (700) for H1 headings and primary CTAs; \`--font-semibold\` (600) for H2–H4 and table headers.
**✅ Do** — use \`--font-normal\` (400) as the default for all body text and labels.
**❌ Don't** — use \`--font-extrabold\` (800) outside of display/hero contexts — it overwhelms body text hierarchies.
**❌ Don't** — use \`--font-light\` (300) for small text (below 16px) — low weight at small sizes fails WCAG contrast on most backgrounds.
        `.trim(),
      },
      source: {
        code: `/* Heading weights */
h1 { font-weight: var(--font-bold); }      /* 700 */
h2 { font-weight: var(--font-semibold); }  /* 600 */
h3 { font-weight: var(--font-medium); }    /* 500 */

/* Body */
p  { font-weight: var(--font-normal); }    /* 400 */

/* Emphasis within body */
strong { font-weight: var(--font-semibold); }`,
        language: 'css',
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
      ${[
        ['--font-light',     'Light',     300],
        ['--font-normal',    'Normal',    400],
        ['--font-medium',    'Medium',    500],
        ['--font-semibold',  'Semibold',  600],
        ['--font-bold',      'Bold',      700],
        ['--font-extrabold', 'Extrabold', 800],
      ].map(([cssVar, name, w]) => `
        <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
                    padding:16px 20px;min-width:130px;">
          <div style="font-family:Inter,sans-serif;font-size:1.5rem;
                      font-weight:var(${cssVar},${w});
                      color:var(--color-text-heading,#101828);
                      line-height:1.2;margin-bottom:8px;">Aa</div>
          <div style="font-family:ui-monospace,monospace;font-size:10px;
                      color:var(--color-text-body,#4a5565);margin-bottom:3px;">${cssVar}</div>
          <div style="font-size:10px;color:var(--color-text-fg-disabled,#99a1af);">${name} / ${w}</div>
        </div>`).join('')}
    </div>`,
};
