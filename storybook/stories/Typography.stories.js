/**
 * Iris Library — Typography
 * Source: Figma › ◐ Primitives · "Light" frames
 * File key: ZKtEULdYKaXe5uQl1J6ijI
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
 */

export default {
  title: 'Iris Library/Primitives/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'white' },
    docs: {
      description: {
        component: `
**Typography primitives** from the Figma Primitive page (◐ Primitives).

All size tokens (\`--text-h1\` through \`--text-caption\`) are defined in \`styles.css\`.
The type scale maps directly to the named Figma styles: \`H1/30px - 700\`, \`Body 1/16px - 400\`, etc.
Font family is **Inter** at line-height **1.5** for all sizes.
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
    docs: {
      description: {
        story: 'Named typography scale from the Figma Primitive page. Tokens map to `--text-h1` through `--text-caption` in `styles.css`.',
      },
    },
  },
  render: () => `
    <div style="background:#fff;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">
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
    docs: {
      description: {
        story: 'Tailwind-style size tokens (`--text-xs` through `--text-5xl`) defined in `styles.css`. Kept for backward compatibility — prefer the Figma named scale for new work.',
      },
    },
  },
  render: () => `
    <div style="background:#fff;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">
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

/** Font weights from the Figma [T] weight frame. */
export const FontWeights = {
  name: 'Font weights',
  parameters: {
    docs: {
      description: {
        story: 'Available Inter font weights. Tokens `--font-light` through `--font-extrabold` are defined in `styles.css`.',
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
        <div style="background:#fff;border:1px solid #E5E7EB;border-radius:8px;
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
