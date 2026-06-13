// Figma: Iris Library / Banner — node 248:17595
// File: ZKtEULdYKaXe5uQl1J6ijI
// 5 types × 3 breakpoints × 2 dark modes = 30 variants.
// Light mode only; Desktop breakpoint rendered (responsive notes in docs).

// ─── Icons (Heroicons v1 solid, 20×20 viewBox unless noted) ──────────────────

const LIGHT_BULB_PATH      = 'M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.997.138-2.004.4-2.947a4.978 4.978 0 00.6-2.053C13 7.343 11.657 6 10 6c-1.657 0-3 1.343-3 3a4.978 4.978 0 00.6 2.053c.262.943.385 1.95.4 2.947h4z';
const RECEIPT_TAX_PATH     = 'M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7H17a1 1 0 010 2h-3.434l.498 2.233A1 1 0 0113 12.97V17a1 1 0 11-2 0v-4h-.5a1 1 0 010-2H11V9H9a1 1 0 010-2h2.354L12.033 2.744A1 1 0 0112 2z';
const ARROW_NARROW_RIGHT   = 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z';
const BOOK_OPEN_PATH       = 'M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z';
const X_PATH               = 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';

function iconSvg(path, size, color) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="${color}" aria-hidden="true"><path fill-rule="evenodd" d="${path}" clip-rule="evenodd"/></svg>`;
}

function dismissBtn(size = 16) {
  return `<button type="button" class="banner__dismiss" aria-label="Dismiss">${iconSvg(X_PATH, size, 'currentColor')}</button>`;
}

// ─── Type renderers ───────────────────────────────────────────────────────────
// All visual styling comes from the real .banner* classes (styles.css /
// iris-components.css). Inline styles below are layout-only wrappers or data.

function bannerDefault({ text, dismissible }) {
  return `
<div role="banner" class="banner banner--default">
  <div class="banner__icon-text">
    <div class="banner__icon-circle">
      ${iconSvg(LIGHT_BULB_PATH, 14, 'currentColor')}
    </div>
    <span class="banner__text">${text}</span>
  </div>
  ${dismissible ? dismissBtn(16) : ''}
</div>`;
}

function bannerContainerCTA({ text, dismissible }) {
  return `
<div role="banner" class="banner banner--container-cta">
  <div class="banner__container">
    <div style="display:flex;align-items:center;gap:16px;flex:1;min-width:0;">
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
        <div style="width:24px;height:24px;background:#4208e5;border-radius:4px;display:flex;align-items:center;justify-content:center;">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="1" width="5" height="5" rx="1" fill="#fff"/><rect x="8" y="1" width="5" height="5" rx="1" fill="#fff"/><rect x="1" y="8" width="5" height="5" rx="1" fill="#fff"/><rect x="8" y="8" width="5" height="5" rx="1" fill="#fff"/></svg>
        </div>
        <span style="font-size:var(--text-sm);font-weight:var(--font-bold);color:var(--color-text-heading);">Smart</span>
      </div>
      <div class="banner__divider-text">
        <span class="banner__tagline">${text}</span>
      </div>
    </div>
    <div class="banner__actions" style="gap:12px;">
      <button type="button" class="btn btn-primary btn-xs">Sign up for free</button>
      ${dismissible ? dismissBtn(16) : ''}
    </div>
  </div>
</div>`;
}

function bannerBottom({ text, link, dismissible }) {
  return `
<div role="banner" class="banner banner--bottom">
  <div style="display:flex;align-items:center;gap:24px;flex:1;">
    <div style="display:flex;align-items:center;gap:6px;">
      ${iconSvg(RECEIPT_TAX_PATH, 16, 'var(--color-text-secondary)')}
      <span class="banner__label">${text}</span>
    </div>
    <a href="#" class="banner__link">
      ${link}
      ${iconSvg(ARROW_NARROW_RIGHT, 16, 'currentColor')}
    </a>
  </div>
  ${dismissible ? dismissBtn(16) : ''}
</div>`;
}

function bannerCTA({ heading, text, dismissible }) {
  return `
<div role="banner" class="banner banner--cta">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:32px;flex:1;min-width:0;">
    <div style="display:flex;flex-direction:column;gap:4px;flex:1;min-width:0;">
      <span class="banner__heading">${heading}</span>
      <span class="banner__desc">${text}</span>
    </div>
    <div class="banner__actions">
      <button type="button" class="btn btn-light btn-xs" style="display:flex;align-items:center;gap:8px;white-space:nowrap;">
        ${iconSvg(BOOK_OPEN_PATH, 16, 'currentColor')}Learn more
      </button>
      <button type="button" class="btn btn-primary btn-xs" style="display:flex;align-items:center;gap:8px;white-space:nowrap;">
        ${iconSvg(ARROW_NARROW_RIGHT, 16, 'var(--color-bg-white)')}Get started
      </button>
    </div>
  </div>
  ${dismissible ? dismissBtn(16) : ''}
</div>`;
}

function bannerNewsletter({ text, dismissible }) {
  return `
<div role="banner" class="banner banner--newsletter">
  <div style="display:flex;align-items:center;gap:32px;flex:1;min-width:0;">
    <span class="banner__label banner__label--secondary" style="flex-shrink:0;">${text}</span>
    <div class="banner__form">
      <div style="display:flex;flex-direction:column;gap:4px;min-width:0;">
        <label class="form-label" style="margin-bottom:0;">First name</label>
        <input type="text" class="form-input" placeholder="e.g. John" style="min-width:200px;" />
      </div>
      <button type="button" class="btn btn-primary btn-md" style="white-space:nowrap;flex-shrink:0;">Subscribe</button>
    </div>
  </div>
  ${dismissible ? dismissBtn(20) : ''}
</div>`;
}

const TYPE_MAP = {
  'default':        bannerDefault,
  'container-cta':  bannerContainerCTA,
  'bottom':         bannerBottom,
  'cta':            bannerCTA,
  'newsletter':     bannerNewsletter,
};

function banner(args) {
  return (TYPE_MAP[args.type] || bannerDefault)(args);
}

// ─────────────────────────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Banner',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Banner** displays a prominent, persistent message at the top (or bottom) of the screen for site-wide or contextually critical information.

**When to use**
- Communicating site-wide outages, maintenance windows, or planned downtime
- Promoting a time-sensitive offer or product update to all users
- Collecting newsletter signups inline at the top of a page
- Surfacing a partner/referral opportunity contextually

**When NOT to use**
- Single-action confirmations or errors → use an **Alert** or **Toast**
- Decisions that require user input → use a **Modal Dialog**
- Short ephemeral feedback → use a **Toast** (auto-dismisses in ≥ 5 s)

**Anatomy**
\`[icon] [text] [optional CTA] [optional dismiss ×]\`

**Types**
- \`default\` — lightbulb icon + message text; general-purpose notification bar
- \`container-cta\` — brand logo + description + primary CTA button; marketing/promotional
- \`bottom\` — feature highlight + partner link; persistent awareness strip
- \`cta\` — heading + description + two action buttons; high-intent conversion
- \`newsletter\` — inline name input + subscribe button; lead capture

**Responsiveness** — At tablet/mobile breakpoints the layout stacks vertically and buttons become full-width. The banner always spans 100% of the viewport width.

**Accessibility** — Use \`role="banner"\` on the root element (only once per page — it maps to the HTML \`<header>\` landmark). Dismiss buttons require \`aria-label="Dismiss"\`. Banners should not use \`role="alert"\` — they are persistent, not time-sensitive.

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'container-cta', 'bottom', 'cta', 'newsletter'],
      description: `Banner layout pattern.\n\n- \`default\` — icon + message text\n- \`container-cta\` — brand logo + text + CTA (centered card)\n- \`bottom\` — icon/feature label + partner link\n- \`cta\` — heading + description + two action buttons\n- \`newsletter\` — text label + name input + subscribe button`,
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    text: {
      control: 'text',
      description: 'Primary message text. Role varies by type: notification copy (default), marketing tagline (container-cta), feature label (bottom), description (cta), or label (newsletter).',
      table: { category: 'Content', defaultValue: { summary: 'New brand identity has been launched for the Iris Library.' } },
    },
    heading: {
      control: 'text',
      description: 'Bold heading shown above the description. **Only used by the `cta` type.**',
      table: { category: 'Content', defaultValue: { summary: 'Integration is the key' } },
    },
    link: {
      control: 'text',
      description: 'Link label for the "bottom" type partner link.',
      table: { category: 'Content', defaultValue: { summary: 'Become a partner' } },
    },
    dismissible: {
      control: 'boolean',
      description: 'Show the dismiss × button. Map to `aria-label="Dismiss"` on the close button. Note: banners are non-dismissible by default per the Notification system guidelines — enable only when the message is non-critical.',
      table: { category: 'State', defaultValue: { summary: true } },
    },
  },
  args: {
    type:        'default',
    text:        'New brand identity has been launched for the Iris Library.',
    heading:     'Integration is the key',
    link:        'Become a partner',
    dismissible: true,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. Interactive

export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;

    // HTML snippet = the actual builder output → preview and snippet can never diverge
    const htmlCode = banner(a).trim();

    const reactCode = `<div role="banner" className="banner banner--${a.type}">\n  <div className="banner__icon-text">\n    <div className="banner__icon-circle">{/* icon */}</div>\n    <span className="banner__text">{message}</span>\n  </div>\n  ${a.dismissible ? '{dismissible && (\n    <button type="button" className="banner__dismiss" aria-label="Dismiss" onClick={onDismiss}>×</button>\n  )}' : '{/* non-dismissible */}'}\n</div>`;

    const componentCode = `// Layout and colors come from the real .banner* classes (iris-components.css)\nexport function Banner({ type = 'default', message, dismissible = false, onDismiss }) {\n  const [visible, setVisible] = useState(true);\n  if (!visible) return null;\n\n  return (\n    <div role="banner" className={\`banner banner--\${type}\`}>\n      <div className="banner__icon-text">\n        <div className="banner__icon-circle">{/* icon */}</div>\n        <span className="banner__text">{message}</span>\n      </div>\n      {dismissible && (\n        <button\n          type="button"\n          className="banner__dismiss"\n          aria-label="Dismiss"\n          onClick={() => {\n            setVisible(false);\n            onDismiss?.();\n          }}\n        >\n          ×\n        </button>\n      )}\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="background:var(--color-bg-muted);padding:12px 0;">
          ${banner(args)}
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
        story: 'Use **Controls** to switch banner type, edit text content, and toggle the dismiss button.',
      },
      source: {
        // Snippet = the actual builder output → always matches the preview
        transform: (_src, ctx) => banner(ctx.args).trim(),
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. All Types

export const AllTypes = {
    name: 'All types',
  args: { dismissible: true },
  parameters: {
    controls: { include: ['dismissible'] },
    docs: {
      description: {
        story: `All five banner layout types stacked for comparison. Toggle **dismissible** to preview the non-dismissible state across all types.

**✅ Do** — match the banner type to the communication goal: \`default\` for announcements, \`cta\` for conversion, \`newsletter\` for lead capture.
**❌ Don't** — stack multiple banners on the same page — one banner at a time per the Notification system guidelines.
**❌ Don't** — use \`cta\` for low-priority informational messages — the two-button layout implies a required decision.`,
      },
      source: {
        code: `<!-- Default notification banner -->
<div role="banner" class="banner banner--default"> … </div>

<!-- Container CTA (centered card) -->
<div role="banner" class="banner banner--container-cta"> … </div>

<!-- Bottom awareness strip -->
<div role="banner" class="banner banner--bottom"> … </div>

<!-- CTA with two action buttons -->
<div role="banner" class="banner banner--cta"> … </div>

<!-- Newsletter signup -->
<div role="banner" class="banner banner--newsletter"> … </div>`,
        language: 'html',
      },
    },
  },
  render: ({ dismissible }) => {
    const items = [
      { type: 'default',       label: 'Default',        args: { text: 'New brand identity has been launched for the Iris Library.', dismissible } },
      { type: 'container-cta', label: 'Container CTA',  args: { text: 'Build websites even faster with components on top of Tailwind CSS.', dismissible } },
      { type: 'bottom',        label: 'Bottom',         args: { text: 'Get 2% pricing commission', link: 'Become a partner', dismissible } },
      { type: 'cta',           label: 'CTA',            args: { heading: 'Integration is the key', text: 'You can integrate Iris Finance with many tools to make your workflow smoother.', dismissible } },
      { type: 'newsletter',    label: 'Newsletter',     args: { text: 'Sign up to our newsletter', dismissible } },
    ];
    return `
<div style="display:flex;flex-direction:column;gap:2px;background:var(--color-border-default);">
  ${items.map(({ type, label, args }) => `
    <div>
      <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;padding:8px 20px 4px;background:var(--color-bg-default);">${label}</div>
      ${banner({ type, ...args })}
    </div>`).join('')}
</div>`;
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. Non-dismissible

export const NonDismissible = {
    name: 'Non-dismissible',
  args: { type: 'default', dismissible: false },
  parameters: {
    controls: { include: ['type'] },
    docs: {
      description: {
        story: `Banner without the dismiss button — the default per Notification system guidelines. Switch **type** to preview all layouts without dismiss controls.

**✅ Do** — use non-dismissible banners for critical outages or mandatory notices that must remain visible.
**✅ Do** — add a dismiss button only for promotional or low-urgency banners where missing the message is acceptable.
**❌ Don't** — hide the dismiss on marketing banners — it frustrates users who have already seen the message.`,
      },
      source: {
        code: `<!-- Non-dismissible: omit the × button entirely -->
<div role="banner" class="banner banner--default">
  <div class="banner__icon-text">
    <div class="banner__icon-circle"><!-- lightbulb icon, 14px, currentColor --></div>
    <span class="banner__text">New brand identity has been launched for the Iris Library.</span>
  </div>
  <!-- no dismiss button -->
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ type }) => banner({
    type,
    dismissible: false,
    text:    'New brand identity has been launched for the Iris Library.',
    heading: 'Integration is the key',
    link:    'Become a partner',
  }),
};
