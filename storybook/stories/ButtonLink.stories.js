/**
 * Iris Library — Link Button
 *
 * Source: Figma › Iris Library › ---- Buttons page
 * Frame: Link (node 9484:151934)
 *
 * ## Figma variants
 * | Prop         | Options            |
 * |-------------|-------------------|
 * | type        | Semibold · Medium  |
 * | size        | xs · sm · m        |
 * | hover       | true · false       |
 * | showIconLeft| true · false       |
 *
 * ## Design specs (Figma-exact)
 * | type     | weight | color default | color hover |
 * |---------|--------|---------------|-------------|
 * | Semibold | 600   | #42389d       | #362f78     |
 * | Medium   | 500   | #6b7280       | #362f78     |
 *
 * Hover state: underline via `border-bottom: 1px solid #362f78` (not text-decoration)
 * Gap between icon and label: 2px (Figma gap-[2px])
 * Icon: information-circle, lines up with text cap-height (py=3px for xs, 3.5px for sm, 4px for m)
 *
 * ## Size spec
 * | Figma | Font |
 * |-------|------|
 * | xs    | 12px |
 * | sm    | 14px |
 * | m     | 16px |
 *
 * ## QA notes
 * - Semibold default = brand purple #42389d (NOT gray)
 * - Medium default = gray #6b7280 (--color-text-body-subtle)
 * - Hover color is same for both types: #362f78 (brand/900)
 * - The hover underline is a bottom-border, not CSS text-decoration
 * - Icon (if shown) is an information-circle, same color as text
 * - No background, no border-radius, no padding — pure inline-level element
 */

export default {
  title: 'Iris Library/Components/Button/Link',
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
Text-only link buttons — two weight styles (semibold brand / medium subtle),
three sizes, optional left icon.

**CSS:** \`.btn-link\` + \`.btn-link-semibold\` or \`.btn-link-medium\` + \`.btn-{size}\`

\`\`\`html
<!-- Semibold (brand purple) -->
<a class="btn-link btn-link-semibold btn-sm" href="#">Sign In</a>

<!-- Medium (gray) -->
<a class="btn-link btn-link-medium btn-sm" href="#">Sign In</a>

<!-- With icon left -->
<a class="btn-link btn-link-semibold btn-sm" href="#">
  <svg><!-- information-circle --></svg>
  Sign In
</a>
\`\`\`
      `,
      },
    },
  },
  argTypes: {
    label:       { control: 'text'    },
    type:        { control: 'select', options: ['semibold', 'medium'] },
    size:        { control: 'select', options: ['xs', 'sm', 'md'] },
    showIconLeft:{ control: 'boolean' },
    hover:       {
      control: 'boolean',
      description: 'Simulate hover state (applies hover color + underline)',
    },
  },
  args: {
    label: 'Sign In',
    type: 'semibold',
    size: 'sm',
    showIconLeft: false,
    hover: false,
  },
};

/* ── Helpers ──────────────────────────────────────────────── */

const INFO_ICON = (size = 14) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:${size}px;height:${size}px;flex-shrink:0;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9
    9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
    clip-rule="evenodd"/>
</svg>`;

/* Icon size follows Figma icon-container sizes: xs=12, sm=14, m=16 */
const ICON_SIZES = { xs: 12, sm: 14, md: 16 };

const linkBtn = ({ label = 'Sign In', type = 'semibold', size = 'sm', showIconLeft = false, hover = false }) => {
  const weightClass = `btn-link-${type}`;
  /* Hover: inline style override to simulate hover */
  const hoverStyle = hover
    ? 'color:#362f78;border-bottom:1px solid #362f78;'
    : '';
  const iconSize = ICON_SIZES[size] || 14;
  const icon = showIconLeft ? INFO_ICON(iconSize) : '';
  return `<a class="btn-link ${weightClass} btn-${size}" href="#"
    style="${hoverStyle}" onclick="return false;"
  >${icon}<span>${label}</span></a>`;
};

/* ── Stories ─────────────────────────────────────────────── */

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => linkBtn(args),
};

/**
 * Semibold type — brand purple #42389d default, #362f78 hover.
 * QA: color must be #42389d (NOT blue), underline on hover via border-bottom.
 */
export const Semibold = {
  name: 'Semibold — brand purple',
  parameters: {
    docs: {
      description: {
        story: `
Semibold weight (600), default color = **#42389d** (brand/800 purple).
Hover color = **#362f78** (brand/900) + bottom-border underline.
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Default</p>
        <div style="display:flex;gap:16px;align-items:center;">
          ${['xs','sm','md'].map(size => linkBtn({ label:`Sign In (${size})`, type:'semibold', size })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Hover</p>
        <div style="display:flex;gap:16px;align-items:center;">
          ${['xs','sm','md'].map(size => linkBtn({ label:`Sign In (${size})`, type:'semibold', size, hover:true })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">With icon left</p>
        <div style="display:flex;gap:16px;align-items:center;">
          ${['xs','sm','md'].map(size => linkBtn({ label:`Sign In (${size})`, type:'semibold', size, showIconLeft:true })).join('')}
        </div>
      </div>
    </div>`,
};

/**
 * Medium type — gray #6b7280 default, #362f78 hover.
 * QA: default color is --color-text-body-subtle (#6a7282), NOT brand color.
 */
export const Medium = {
  name: 'Medium — subtle gray',
  parameters: {
    docs: {
      description: {
        story: `
Medium weight (500), default color = **#6b7280** (gray/500 = \`--color-text-body-subtle\`).
Hover color = **#362f78** (brand/900) — same as Semibold hover.
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Default</p>
        <div style="display:flex;gap:16px;align-items:center;">
          ${['xs','sm','md'].map(size => linkBtn({ label:`Sign In (${size})`, type:'medium', size })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Hover</p>
        <div style="display:flex;gap:16px;align-items:center;">
          ${['xs','sm','md'].map(size => linkBtn({ label:`Sign In (${size})`, type:'medium', size, hover:true })).join('')}
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">With icon left</p>
        <div style="display:flex;gap:16px;align-items:center;">
          ${['xs','sm','md'].map(size => linkBtn({ label:`Sign In (${size})`, type:'medium', size, showIconLeft:true })).join('')}
        </div>
      </div>
    </div>`,
};

/**
 * Side-by-side comparison of both types — all 3 sizes.
 * QA: Semibold should appear visibly darker/more prominent than Medium.
 */
export const TypeComparison = {
  name: 'Type comparison — Semibold vs Medium',
  parameters: {
    docs: {
      description: {
        story: 'Both types at all 3 sizes — default and hover states.',
      },
    },
  },
  render: () => `
    <table style="border-collapse:collapse;font-size:13px;width:auto;">
      <thead>
        <tr>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Size</th>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Semibold default</th>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Semibold hover</th>
          <th style="text-align:left;padding:6px 16px 6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Medium default</th>
          <th style="text-align:left;padding:6px 0;color:#9CA3AF;font-size:10px;
                     text-transform:uppercase;letter-spacing:.1em;font-weight:600;">Medium hover</th>
        </tr>
      </thead>
      <tbody>
        ${['xs','sm','md'].map(size => `
          <tr>
            <td style="padding:8px 16px 8px 0;color:#9CA3AF;">${size}</td>
            <td style="padding:8px 16px 8px 0;">${linkBtn({ label:'Sign In', type:'semibold', size })}</td>
            <td style="padding:8px 16px 8px 0;">${linkBtn({ label:'Sign In', type:'semibold', size, hover:true })}</td>
            <td style="padding:8px 16px 8px 0;">${linkBtn({ label:'Sign In', type:'medium', size })}</td>
            <td style="padding:8px 0;">${linkBtn({ label:'Sign In', type:'medium', size, hover:true })}</td>
          </tr>`
        ).join('')}
      </tbody>
    </table>`,
};
