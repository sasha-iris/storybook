// Figma: Iris Library / Tooltip — node 718:1479
// File: ZKtEULdYKaXe5uQl1J6ijI
// 2 colors (Dark, White) × 4 positions (Top, Right, Bottom, Left).
// Shown statically with a representative trigger — tooltip is always visible for documentation.

// ─── Helpers ─────────────────────────────────────────────────────────────────

function tooltipBody({ color, title, body }) {
  const isDark = color === 'dark';
  const bg         = isDark ? 'var(--color-bg-dark)' : 'var(--color-bg-surface)';
  const titleColor = isDark ? 'var(--color-bg-white)' : 'var(--color-text-heading)';
  const divColor   = isDark ? '#4b5563' : 'var(--color-border-default)';
  const bodyColor  = isDark ? 'var(--color-bg-muted)' : 'var(--color-text-secondary)';
  const shadow     = isDark ? '' : 'box-shadow:0 2px 8px rgba(0,0,0,.15);';
  return `
<div style="background:${bg};border-radius:4px;padding:8px;min-width:100px;max-width:200px;${shadow}font-family:inherit;">
  <div style="color:${titleColor};font-weight:var(--font-medium);font-size:var(--text-sm);line-height:20px;margin-bottom:6px;white-space:nowrap;">${title}</div>
  <div style="height:1px;background:${divColor};margin:0 0 6px;"></div>
  <div style="color:${bodyColor};font-weight:var(--font-normal);font-size:var(--text-xs);line-height:16px;">${body}</div>
</div>`;
}

function tooltipArrow({ position, color }) {
  const fill = color === 'dark' ? 'var(--color-bg-dark)' : 'var(--color-bg-surface)';
  const borders = {
    top:    `border-left:17px solid transparent;border-right:17px solid transparent;border-top:8px solid ${fill}`,
    bottom: `border-left:17px solid transparent;border-right:17px solid transparent;border-bottom:8px solid ${fill}`,
    right:  `border-top:17px solid transparent;border-bottom:17px solid transparent;border-right:8px solid ${fill}`,
    left:   `border-top:17px solid transparent;border-bottom:17px solid transparent;border-left:8px solid ${fill}`,
  };
  return `<div style="width:0;height:0;flex-shrink:0;${borders[position]}"></div>`;
}

const TRIGGER = `<button class="btn btn-primary btn-sm" style="cursor:default;white-space:nowrap;">Show info</button>`;

function tooltip({ color = 'dark', position = 'top', title, body }) {
  const box = tooltipBody({ color, title, body });
  const arr = tooltipArrow({ position, color });
  if (position === 'top') {
    return `<div style="display:inline-flex;flex-direction:column;align-items:center;">${box}${arr}${TRIGGER}</div>`;
  }
  if (position === 'bottom') {
    return `<div style="display:inline-flex;flex-direction:column;align-items:center;">${TRIGGER}${arr}${box}</div>`;
  }
  if (position === 'right') {
    return `<div style="display:inline-flex;flex-direction:row;align-items:center;">${TRIGGER}${arr}${box}</div>`;
  }
  // left
  return `<div style="display:inline-flex;flex-direction:row;align-items:center;">${box}${arr}${TRIGGER}</div>`;
}

// ─── Default export ───────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Tooltip',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Tooltip** surfaces a short label or explanation when a user hovers or focuses an element.

**When to use**
- Clarifying an icon button that has no visible label
- Surfacing extra context for a form field or data point without cluttering the layout
- Showing keyboard shortcuts or command names on hover

**When NOT to use**
- Long or critical information → use a popover or inline help text (tooltips are hidden by default and not read on mobile)
- Required form guidance → use a visible hint below the field
- Error messages → use an inline validation message

**Anatomy**
\`[arrow] [title] [divider] [body]\` — title + body combination; use the \`title\`-only pattern for short single-line labels.

**Colors**: \`dark\` (default) suits most page backgrounds; \`white\` suits dark-background contexts or when the tooltip sits on a dark card.

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Short label rendered at var(--font-medium)/var(--text-sm). Keep to one line — overflow is not handled.',
      table: { category: 'Content', defaultValue: { summary: 'More information' } },
    },
    body: {
      control: 'text',
      description: 'Supporting description at var(--font-normal)/var(--text-xs). Keep to 1–2 sentences maximum.',
      table: { category: 'Content', defaultValue: { summary: 'Descriptive text…' } },
    },
    color: {
      control: 'select',
      options: ['dark', 'white'],
      description: `Color theme. \`dark\` — bg \`var(--color-bg-dark)\`, text white/\`var(--color-bg-muted)\`. \`white\` — bg \`var(--color-bg-surface)\`, text \`var(--color-text-heading)\`/\`var(--color-text-secondary)\` with a drop shadow.`,
      table: { category: 'Appearance', defaultValue: { summary: 'dark' } },
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Direction the tooltip appears relative to its trigger. The arrow caret always points toward the trigger.',
      table: { category: 'Appearance', defaultValue: { summary: 'top' } },
    },
  },
  args: {
    color: 'dark',
    position: 'top',
    title: 'More information',
    body: 'The user wants to find a specific page or site.',
  },
};

// ─── 1. Interactive ───────────────────────────────────────────────────────────

export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;
    const htmlCode = `<!-- Tooltip: ${a.color} / ${a.position} -->
<div class="tooltip-wrap tooltip-${a.position}" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-1">Show info</button>
  <div class="tooltip-bubble tooltip-${a.color}" role="tooltip" id="tip-1">
    <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);">${a.title}</strong>
    <div style="height:1px;background:var(--color-border-default);margin:6px 0;"></div>
    <p style="font-size:var(--text-xs);color:var(--color-text-secondary);">${a.body}</p>
  </div>
</div>`;

    const reactCode = `<div className="tooltip-wrap tooltip-${a.position}" data-tooltip>
  <button className="btn btn-primary btn-sm" aria-describedby="tip-1">
    Show info
  </button>
  <div className="tooltip-bubble tooltip-${a.color}" role="tooltip" id="tip-1">
    <strong>${a.title}</strong>
    <div style={{ height: '1px', background: 'var(--color-border-default)', margin: '6px 0' }} />
    <p>${a.body}</p>
  </div>
</div>`;

    const componentCode = `export function Tooltip({ trigger = "Show info", title = "${a.title}", body = "${a.body}", position = "${a.position}", color = "${a.color}", children }) {\n  return (\n    <div className={\`tooltip-wrap tooltip-\${position}\`} data-tooltip>\n      <button className="btn btn-primary btn-sm" aria-describedby="tooltip">\n        {trigger}\n      </button>\n      <div className={\`tooltip-bubble tooltip-\${color}\`} role="tooltip" id="tooltip">\n        <strong>{title}</strong>\n        <div style={{ height: '1px', background: 'var(--color-border-default)', margin: '6px 0' }} />\n        <p>{body}</p>\n      </div>\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:60px;border:1px solid var(--color-border-default);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          ${tooltip(args)}
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
        story: 'Use **Controls** to switch color, position, and content. The tooltip is always visible here — in production it appears on hover/focus.',
      },
    },
  },
};

// ─── 2. All Positions ─────────────────────────────────────────────────────────

export const AllPositions = {
    name: 'All positions',
  args: { color: 'dark' },
  parameters: {
    controls: { include: ['color'] },
    docs: {
      description: {
        story: `All four position variants. Switch **color** to preview both themes across all positions.

**✅ Do** — choose the position that keeps the tooltip within the viewport (prefer \`top\` or \`bottom\` for most inline elements).
**❌ Don't** — use \`left\`/\`right\` on elements near viewport edges; the tooltip will clip.`,
      },
      source: {
        code: `<!-- Top -->
<div class="tooltip-wrap tooltip-top" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-top">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-top"> … </div>
</div>

<!-- Right -->
<div class="tooltip-wrap tooltip-right" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-right">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-right"> … </div>
</div>

<!-- Bottom -->
<div class="tooltip-wrap tooltip-bottom" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-bottom">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-bottom"> … </div>
</div>

<!-- Left -->
<div class="tooltip-wrap tooltip-left" data-tooltip>
  <button class="btn btn-primary btn-sm" aria-describedby="tip-left">Trigger</button>
  <div class="tooltip-bubble tooltip-dark" role="tooltip" id="tip-left"> … </div>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ color }) => {
    const t = { title: 'More information', body: 'The user wants to find a specific page or site.' };
    const positions = ['top', 'right', 'bottom', 'left'];
    const labels    = { top: 'Top', right: 'Right', bottom: 'Bottom', left: 'Left' };
    return `
<div style="display:grid;grid-template-columns:1fr 1fr;gap:64px 80px;padding:80px 60px;background:var(--color-bg-default);width:fit-content;">
  ${positions.map(pos => `
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <span style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">${labels[pos]}</span>
      ${tooltip({ color, position: pos, ...t })}
    </div>`).join('')}
</div>`;
  },
};

// ─── 3. Both Colors ───────────────────────────────────────────────────────────

export const BothColors = {
    name: 'Both colors',
  args: { position: 'top' },
  parameters: {
    controls: { include: ['position'] },
    docs: {
      description: {
        story: `Dark vs White color themes side by side. Switch **position** to compare arrow placement across both themes.

**✅ Do** — use \`dark\` (default) on light-background pages.
**✅ Do** — use \`white\` on dark-background surfaces (dark cards, dark sidebars).
**❌ Don't** — use \`white\` on a white page background without ensuring the drop shadow provides sufficient separation.`,
      },
      source: {
        code: `<!-- Dark tooltip -->
<div class="tooltip-bubble tooltip-dark" role="tooltip">
  <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);color:var(--color-bg-white);">More information</strong>
  <div style="height:1px;background:#4b5563;margin:6px 0;"></div>
  <p style="font-size:var(--text-xs);color:var(--color-bg-muted);">The user wants to find a specific page or site.</p>
</div>

<!-- White tooltip -->
<div class="tooltip-bubble tooltip-light" role="tooltip">
  <strong style="font-weight:var(--font-medium);font-size:var(--text-sm);color:var(--color-text-heading);">More information</strong>
  <div style="height:1px;background:var(--color-border-default);margin:6px 0;"></div>
  <p style="font-size:var(--text-xs);color:var(--color-text-secondary);">The user wants to find a specific page or site.</p>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ position }) => {
    const t = { title: 'More information', body: 'The user wants to find a specific page or site.' };
    return `
<div style="display:flex;gap:80px;padding:80px 60px;align-items:center;justify-content:center;background:var(--color-bg-muted);">
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <span style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">Dark</span>
    ${tooltip({ color: 'dark', position, ...t })}
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <span style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">White</span>
    ${tooltip({ color: 'white', position, ...t })}
  </div>
</div>`;
  },
};
