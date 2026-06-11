/**
 * Iris Library — Tag
 *
 * Source: Figma › Iris Library › tag (node 9492:152077)
 * Light mode only.
 *
 * ## Figma variants
 * Colour: grey · indigo · green · red · orange · teal · blue · purple · pink
 *
 * ## Size spec (from Figma)
 * Height: 18 px · no background · font: 12px/500
 * Dot: 6×6 px solid circle in 12×12 container · Dismiss ×: 12×12
 *
 * ## Color tokens (dot color / text color)
 * Note: dot and text use slightly different shades for some colors (Figma-exact).
 * grey:   dot #4b5563 / text #4a5565
 * indigo: dot #5850ec / text #5850ec
 * green:  dot #057a55 / text #009966
 * red:    dot #e02424 / text #e7000b
 * orange: dot #d03801 / text #d03801
 * teal:   dot #009689 / text #009689
 * blue:   dot var(--color-primary) / text var(--color-primary)
 * purple: dot #7e3af2 / text #9810fa
 * pink:   dot #d61f69 / text #e60076
 */

const TAG_COLORS = {
  grey:   { dot: '#4b5563', text: '#4a5565' },
  indigo: { dot: '#5850ec', text: '#5850ec' },
  green:  { dot: '#057a55', text: '#009966' },
  red:    { dot: '#e02424', text: '#e7000b' },
  orange: { dot: '#d03801', text: '#d03801' },
  teal:   { dot: '#009689', text: '#009689' },
  blue:   { dot: 'var(--color-primary)', text: 'var(--color-primary)' },
  purple: { dot: '#7e3af2', text: '#9810fa' },
  pink:   { dot: '#d61f69', text: '#e60076' },
};

const COLOR_NAMES = Object.keys(TAG_COLORS);

// Heroicons mini — x-mark (20×20 solid)
const X_PATH = 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';

// Built on the real `.iris-tag` + `.iris-tag--{color}` + `.iris-tag__dot` classes.
// Text colour comes from the class; the dot keeps its Figma-exact fill (some
// colours use a slightly different dot shade — content-level SVG attribute).
function tag({ label = 'Label', color = 'grey', dismissible = false }) {
  const { dot } = TAG_COLORS[color] ?? TAG_COLORS.grey;

  const dotHtml = `<span class="iris-tag__dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="${dot}" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg></span>`;

  const dismissHtml = dismissible
    ? `<button type="button" aria-label="Remove ${label}" style="display:inline-flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;line-height:0;">
        <svg width="12" height="12" viewBox="0 0 20 20" fill="${dot}" aria-hidden="true">
          <path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/>
        </svg>
       </button>`
    : '';

  return `<span class="iris-tag iris-tag--${color}">${dotHtml}<span>${label}</span>${dismissHtml}</span>`;
}

export default {
  title: 'Iris Library/Tag',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Inline text labels with a colored dot indicator — no background, purely typographic.

**When to use**
- Categorize or label items inline within text (e.g. a status label inside a table cell)
- Show a topic, category, or type tag with a color-coded dot for quick scanning
- Complement other elements without adding visual weight (unlike Badge or Chip)

**When NOT to use**
- Standalone status indicators that need a background for contrast → use Badge
- Removable active filters → use Chip
- Prominent action-required states → use Alert

**Anatomy**
\`● dot · label · [×?]\` — dot is always visible; dismiss × is optional.

**Colors** — 9 themes. Note: dot and text use slightly different shades for Green, Red, Purple, Pink (Figma-exact values preserved).

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Tag label text.',
      table: { category: 'Content', defaultValue: { summary: 'Design' } },
    },
    dismissible: {
      control: 'boolean',
      description: 'Show a dismiss × button after the label. Wire `aria-label="Remove [label]"` for screen readers.',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    color: {
      control: 'select',
      options: COLOR_NAMES,
      description: 'Color theme. Sets both dot and text color. `grey` is the neutral default.',
      table: { category: 'Appearance', defaultValue: { summary: 'grey' } },
    },
  },
  args: {
    label: 'Design',
    color: 'grey',
    dismissible: false,
  },
};

/* ─────────────────────────────────────────────
   INTERACTIVE
───────────────────────────────────────────── */
export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;
    const { dot, text } = TAG_COLORS[a.color] ?? TAG_COLORS.grey;
    const dismissPart = a.dismissible
      ? `\n  <button type="button" aria-label="Remove ${a.label}" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">\n    <svg width="12" height="12" viewBox="0 0 20 20" fill="${dot}" aria-hidden="true"><path fill-rule="evenodd" d="${X_PATH}" clip-rule="evenodd"/></svg>\n  </button>`
      : '';

    const htmlCode = `<span class="iris-tag iris-tag--${a.color}">
  <span class="iris-tag__dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="${dot}" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg></span>
  <span>${a.label}</span>${dismissPart}
</span>`;

    const reactCode = `<span className="iris-tag iris-tag--${a.color}">
  <span className="iris-tag__dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="${dot}" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg></span>
  <span>${a.label}</span>${a.dismissible ? `\n  <button type="button" aria-label={\`Remove \${label}\`} onClick={onDismiss}>
    <svg width="12" height="12" viewBox="0 0 20 20" fill="${dot}" aria-hidden="true">{/* x icon */}</svg>
  </button>` : ''}
</span>`;

    const componentCode = `// Dot fill is Figma-exact and can differ slightly from the text colour\nconst DOT = { grey: '#4b5563', indigo: '#5850ec', green: '#057a55', red: '#e02424', orange: '#d03801', teal: '#009689', blue: 'var(--color-primary)', purple: '#7e3af2', pink: '#d61f69' };\n\nexport function Tag({ label = "${a.label}", color = "${a.color}", dismissible = ${a.dismissible}, onDismiss }) {\n  return (\n    <span className={\`iris-tag iris-tag--\${color}\`}>\n      <span className="iris-tag__dot">\n        <svg width="12" height="12" viewBox="0 0 12 12" fill={DOT[color]} aria-hidden="true">\n          <circle cx="6" cy="6" r="3"/>\n        </svg>\n      </span>\n      <span>{label}</span>\n      {dismissible && (\n        <button\n          type="button"\n          aria-label={\`Remove \${label}\`}\n          onClick={onDismiss}\n        >\n          <svg width="12" height="12" viewBox="0 0 20 20" fill={DOT[color]} aria-hidden="true">{/* x icon */}</svg>\n        </button>\n      )}\n    </span>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${tag(args)}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
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
        story: 'Use the **Controls** panel to configure color, label, and dismiss button. Preview and snippets emit the real `.iris-tag` classes.',
      },
      source: {
        transform: (_src, ctx) => {
          const a = ctx.args;
          const { dot } = TAG_COLORS[a.color] ?? TAG_COLORS.grey;
          return `<span class="iris-tag iris-tag--${a.color}">\n  <span class="iris-tag__dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="${dot}"><circle cx="6" cy="6" r="3"/></svg></span>\n  <span>${a.label}</span>${a.dismissible ? `\n  <button type="button" aria-label="Remove ${a.label}"><!-- x icon --></button>` : ''}\n</span>`;
        },
      },
    },
  },
};

/* ─────────────────────────────────────────────
   ALL COLORS
───────────────────────────────────────────── */
export const AllColors = {
    name: 'Colors — all 9 themes',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All 9 color themes. Tags have no background — the dot and text carry the color.

**✅ Do** — use \`grey\` for neutral/default states; semantic colors for status or category.
**✅ Do** — use tags inside dense layouts (table cells, list rows) where a Badge would be too heavy.
**❌ Don't** — rely on color alone — always pair with a meaningful label (WCAG 1.4.1).
        `,
      },
      source: {
        code: `<!-- Grey (neutral) -->
<span class="iris-tag iris-tag--grey">
  <span class="iris-tag__dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="#4b5563" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg></span>
  <span>Neutral</span>
</span>

<!-- Green (dot is Figma-exact #057a55, text from the class) -->
<span class="iris-tag iris-tag--green">
  <span class="iris-tag__dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="#057a55" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg></span>
  <span>Active</span>
</span>

<!-- Red -->
<span class="iris-tag iris-tag--red">
  <span class="iris-tag__dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="#e02424" aria-hidden="true"><circle cx="6" cy="6" r="3"/></svg></span>
  <span>Failed</span>
</span>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const labels = { grey: 'Neutral', indigo: 'Design', green: 'Active', red: 'Failed', orange: 'Urgent', teal: 'Support', blue: 'Engineering', purple: 'Product', pink: 'Creative' };
    return `<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      ${COLOR_NAMES.map(c => tag({ label: labels[c], color: c })).join('\n      ')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   DISMISSIBLE
───────────────────────────────────────────── */
export const Dismissible = {
    name: 'Dismissible — with × button',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All 9 themes with a dismiss × button. The × uses the same color as the dot.

**✅ Do** — use dismissible tags for inline removable labels (e.g. topic tags on a post, selected categories).
**✅ Do** — wire \`aria-label="Remove [label]"\` on the × for screen readers.
**❌ Don't** — use dismissible tags as primary filter chips — use Chip for that pattern.
        `,
      },
      source: {
        code: `<span class="iris-tag iris-tag--indigo">
  <span class="iris-tag__dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="#5850ec" aria-hidden="true">
    <circle cx="6" cy="6" r="3"/>
  </svg></span>
  <span>Design</span>
  <button type="button" aria-label="Remove Design" style="display:inline-flex;align-items:center;background:none;border:none;cursor:pointer;padding:0;">
    <svg width="12" height="12" viewBox="0 0 20 20" fill="#5850ec" aria-hidden="true"><!-- x icon --></svg>
  </button>
</span>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const labels = { grey: 'Neutral', indigo: 'Design', green: 'Active', red: 'Failed', orange: 'Urgent', teal: 'Support', blue: 'Engineering', purple: 'Product', pink: 'Creative' };
    return `<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
      ${COLOR_NAMES.map(c => tag({ label: labels[c], color: c, dismissible: true })).join('\n      ')}
    </div>`;
  },
};
