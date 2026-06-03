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
  title: 'Iris Library/Button/Link',
  tags: ['autodocs', 'stable'],
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
    // ── Content ──────────────────────────────────────────────
    label: {
      control: 'text',
      description: 'Link text.',
      table: { category: 'Content', defaultValue: { summary: 'Sign In' } },
    },
    showIconLeft: {
      control: 'boolean',
      description: 'Show information-circle icon to the left of the label. Icon scales with size: 12px (xs) / 14px (sm) / 16px (md).',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    // ── Appearance ───────────────────────────────────────────
    type: {
      control: 'select',
      options: ['semibold', 'medium'],
      description: 'Font weight style. CSS class: `btn-link-semibold` (weight 600, color #42389d) or `btn-link-medium` (weight 500, color #6b7280).',
      table: { category: 'Appearance', defaultValue: { summary: 'semibold' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
      description: 'Size variant. CSS class: `btn-{size}`. Maps to 12px (xs) / 14px (sm) / 16px (md) font size.',
      table: { category: 'Appearance', defaultValue: { summary: 'sm' } },
    },
    // ── State ────────────────────────────────────────────────
    hover: {
      control: 'boolean',
      description: 'Simulate hover state — applies color #362f78 (brand/900) + `border-bottom: 1px solid #362f78`.',
      table: { category: 'State', defaultValue: { summary: false } },
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
  render: (args) => {
    const a = args;
    const weightClass = `btn-link-${a.type}`;
    const hoverStyle = a.hover ? ' style="color:#362f78;border-bottom:1px solid #362f78;"' : '';
    const icon = a.showIconLeft ? '\n  <svg><!-- information-circle --></svg>' : '';

    const htmlCode = `<a class="btn-link ${weightClass} btn-${a.size}" href="#"${hoverStyle}>${icon}\n  <span>${a.label}</span>\n</a>`;

    const reactCode = `<a className={\`btn-link btn-link-\${type} btn-\${size}\`} href="#">${a.showIconLeft ? '\n  <svg>{/* information-circle */}</svg>' : ''}\n  <span>${a.label}</span>\n</a>`;

    const componentCode = `export function ButtonLink({ label = "${a.label}", type = "${a.type}", size = "${a.size}", icon = ${a.showIconLeft}, href = "#", onClick }) {\n  return (\n    <a\n      className={\`btn-link btn-link-\${type} btn-\${size}\`}\n      href={href}\n      onClick={onClick}\n    >\n      {icon && <svg>{/* information-circle */}</svg>}\n      <span>{label}</span>\n    </a>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${linkBtn(args)}
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${componentEscaped}</code></pre>
            </div>
            <button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
        </div>
      </div>
      <script>
        document.querySelectorAll('.storybook-copy-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            navigator.clipboard.writeText(this.dataset.copy);
            const originalText = this.innerHTML;
            this.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="13 2 3 13 1 11"></polyline></svg>Copied!';
            this.style.background = 'var(--color-success-light)';
            this.style.color = 'var(--color-success-dark)';
            this.style.borderColor = 'var(--color-success-lighter)';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = 'var(--color-bg-secondary)';
              this.style.color = 'var(--color-text-primary)';
              this.style.borderColor = 'var(--color-border-default)';
            }, 2000);
          });
        });
      </script>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure any combination. The rendered HTML updates live.',
      },
    },
  },
};

/**
 * Semibold type — brand purple #42389d default, #362f78 hover.
 * Shows all 3 sizes. Use `hover` + `showIconLeft` controls to preview states.
 * QA: color must be #42389d (NOT blue), underline on hover via border-bottom.
 */
export const Semibold = {
    name: 'Semibold — brand purple',
  args: { hover: false, showIconLeft: false },
  parameters: {
    controls: { include: ['hover', 'showIconLeft'] },
    docs: {
      description: {
        story: `
Semibold weight (600), default color = **#42389d** (brand/800 purple).
Hover color = **#362f78** (brand/900) + bottom-border underline.
Use **hover** and **showIconLeft** controls to preview states across all 3 sizes at once.
        `,
      },
      source: {
        code: `<a class="btn-link btn-link-semibold btn-xs" href="#">Sign In</a>
<a class="btn-link btn-link-semibold btn-sm" href="#">Sign In</a>
<a class="btn-link btn-link-semibold btn-md" href="#">Sign In</a>`,
        language: 'html',
      },
    },
  },
  render: ({ hover, showIconLeft }) => `
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      ${['xs','sm','md'].map(size => linkBtn({ label:`Sign In (${size})`, type:'semibold', size, hover, showIconLeft })).join('')}
    </div>`,
};

/**
 * Medium type — gray #6b7280 default, #362f78 hover.
 * QA: default color is --color-text-body-subtle (#6b7280), NOT brand color.
 */
export const Medium = {
    name: 'Medium — subtle gray',
  args: { hover: false, showIconLeft: false },
  parameters: {
    controls: { include: ['hover', 'showIconLeft'] },
    docs: {
      description: {
        story: `
Medium weight (500), default color = **#6b7280** (gray/500 = \`--color-text-body-subtle\`).
Hover color = **#362f78** (brand/900) — same as Semibold hover.
Use **hover** and **showIconLeft** controls to preview states across all 3 sizes at once.
        `,
      },
      source: {
        code: `<a class="btn-link btn-link-medium btn-xs" href="#">Sign In</a>
<a class="btn-link btn-link-medium btn-sm" href="#">Sign In</a>
<a class="btn-link btn-link-medium btn-md" href="#">Sign In</a>`,
        language: 'html',
      },
    },
  },
  render: ({ hover, showIconLeft }) => `
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      ${['xs','sm','md'].map(size => linkBtn({ label:`Sign In (${size})`, type:'medium', size, hover, showIconLeft })).join('')}
    </div>`,
};

/**
 * Side-by-side comparison of both types — all 3 sizes, default + hover states.
 * Use `showIconLeft` control to add icons to all cells simultaneously.
 * QA: Semibold should appear visibly darker/more prominent than Medium.
 */
export const TypeComparison = {
    name: 'Type comparison — Semibold vs Medium',
  args: { showIconLeft: false },
  parameters: {
    controls: { include: ['showIconLeft'] },
    docs: {
      description: {
        story: 'Both types at all 3 sizes — default and hover states. Use **showIconLeft** control to toggle icons on all cells.',
      },
    },
  },
  render: ({ showIconLeft }) => `
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
            <td style="padding:8px 16px 8px 0;">${linkBtn({ label:'Sign In', type:'semibold', size, showIconLeft })}</td>
            <td style="padding:8px 16px 8px 0;">${linkBtn({ label:'Sign In', type:'semibold', size, hover:true, showIconLeft })}</td>
            <td style="padding:8px 16px 8px 0;">${linkBtn({ label:'Sign In', type:'medium', size, showIconLeft })}</td>
            <td style="padding:8px 0;">${linkBtn({ label:'Sign In', type:'medium', size, hover:true, showIconLeft })}</td>
          </tr>`
        ).join('')}
      </tbody>
    </table>`,
};
