/**
 * Iris Library — Modal Dialog
 *
 * Source: Figma › Iris Library — node 3284:23643
 * Component set variants:
 *   Type:      Info · Pop-up · With forms · Crypto wallet
 *   Size:      SM · Default · LG · XL
 *   Dark mode: False · True
 *   Device:    Desktop · Mobile
 *
 * Named styles confirmed from Figma:
 *   Info        — "Terms of Service" info modal, scrollable body, single "I accept" button
 *   Pop-up      — delete confirmation: icon + question + Yes/No buttons (no header title)
 *   With forms  — sign-in form: email + password + "Create account" (no header title)
 *   Crypto wallet — wallet provider list: MetaMask, Coinbase, Opera, WalletConnect, Fortmatic
 *
 * CSS classes used (styles.css):
 *   .modal-backdrop   — fixed overlay (position:fixed; use relative wrapper in stories)
 *   .modal-dialog     — container (max-width:512px) + .modal-dialog-sm/lg/xl for sizes
 *   .modal-header     — header row (title + close) with border-bottom
 *   .modal-title      — heading 18px/600
 *   .modal-close      — × button (top-right)
 *   .modal-body       — body padding + 14px secondary text
 *   .modal-footer     — footer row (buttons) with border-top
 *   .form-group       — form field wrapper
 *   .form-label       — field label
 *   .form-input       — input field
 *   .form-helper      — helper text below input
 *   .btn .btn-primary .btn-md   — blue "I accept" / "Create account"
 *   .btn .btn-red .btn-md       — red "Yes, I'm sure"
 *   .btn .btn-alternative .btn-md — secondary "No, cancel"
 */

// ─── Icons ────────────────────────────────────────────────────────────────────

const closeIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

const exclamationIcon = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="21" cy="21" r="21" fill="#FEF3C7"/>
  <path d="M21 11v12" stroke="#D97706" stroke-width="2" stroke-linecap="round"/>
  <circle cx="21" cy="28.5" r="1.5" fill="#D97706"/>
</svg>`;

const mailIcon = `<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 4h16v12H2V4zm0 0l8 7 8-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const lockIcon = `<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="9" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
  <path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

const questionIcon = `<svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"/>
  <path d="M10 13v1M10 7a2 2 0 012 2c0 1.1-.9 1.7-1.5 2.2-.5.4-.5.6-.5.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

// ─── Dark-mode token helpers ──────────────────────────────────────────────────

function darkTokens(dark) {
  return dark
    ? {
        bg:        'var(--color-text-primary)',
        title:     'var(--color-bg-white)',
        body:      'var(--color-border-light)',
        border:    '#4b5563',
        closeClr:  'var(--color-border-light)',
        walletRow: '#4b5563',
        badgeBg:   'var(--color-text-primary)',
        badgeClr:  'var(--color-border-light)',
      }
    : {
        bg:        'var(--color-bg-surface)',
        title:     'var(--color-text-primary)',
        body:      'var(--color-text-secondary)',
        border:    'var(--color-border-default)',
        closeClr:  'var(--color-text-secondary)',
        walletRow: 'var(--color-bg-default)',
        badgeBg:   'var(--color-bg-muted)',
        badgeClr:  'var(--color-text-secondary)',
      };
}

function sizeClass(size) {
  if (size === 'sm')  return ' modal-dialog-sm';
  if (size === 'lg')  return ' modal-dialog-lg';
  if (size === 'xl')  return ' modal-dialog-xl';
  return '';
}

// ─── Overlay wrapper ──────────────────────────────────────────────────────────

function withOverlay(dialog, show = true) {
  if (!show) return dialog;
  return `<div style="position:relative;width:100%;min-height:420px;
    background:rgba(17,25,40,0.82);display:flex;align-items:center;
    justify-content:center;padding:40px;box-sizing:border-box;">
    ${dialog}
  </div>`;
}

// ─── Type=Info ────────────────────────────────────────────────────────────────
// Figma: header title + ×, scrollable body paragraphs, single blue "I accept" footer

function modalInfo({ size = 'default', darkMode = false, showOverlay = true } = {}) {
  const t = darkTokens(darkMode);
  const dialog = `
<div role="dialog" aria-modal="true" aria-labelledby="modal-title"
     class="modal-dialog${sizeClass(size)}"
     style="background:${t.bg};">
  <div class="modal-header" style="border-color:${t.border};">
    <h2 class="modal-title" id="modal-title" style="color:${t.title};">Terms of Service</h2>
    <button class="modal-close" aria-label="Close dialog" style="color:${t.closeClr};">${closeIcon}</button>
  </div>
  <div class="modal-body" style="color:${t.body};font-size:var(--text-base);line-height:1.7;">
    <p style="margin:0 0 12px;">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <p style="margin:0;">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  </div>
  <div class="modal-footer" style="border-color:${t.border};">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>`;
  return withOverlay(dialog, showOverlay);
}

// ─── Type=Pop-up ──────────────────────────────────────────────────────────────
// Figma: header has ONLY × (no title, no border), centered icon + question in body,
//        red "Yes, I'm sure" + alternative "No, cancel" in footer

function modalPopUp({ size = 'sm', darkMode = false, showOverlay = true } = {}) {
  const t = darkTokens(darkMode);
  const dialog = `
<div role="dialog" aria-modal="true" aria-labelledby="popup-title"
     class="modal-dialog${sizeClass(size)}"
     style="background:${t.bg};">
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;padding-bottom:8px;">
    <button class="modal-close" aria-label="Close dialog" style="color:${t.closeClr};">${closeIcon}</button>
  </div>
  <div class="modal-body" style="text-align:center;padding-top:0;color:${t.body};">
    <div style="display:flex;justify-content:center;margin-bottom:16px;">${exclamationIcon}</div>
    <p id="popup-title" style="margin:0;font-size:var(--text-base);line-height:1.6;color:${t.body};">Are you sure you want to delete this product?</p>
  </div>
  <div class="modal-footer" style="border-color:${t.border};justify-content:center;gap:12px;">
    <button class="btn btn-red btn-md">Yes, I'm sure</button>
    <button class="btn btn-alternative btn-md">No, cancel</button>
  </div>
</div>`;
  return withOverlay(dialog, showOverlay);
}

// ─── Type=With forms ──────────────────────────────────────────────────────────
// Figma: header has ONLY × (no title, no border), form fields in body (no separate footer)

function modalWithForms({ size = 'sm', darkMode = false, showOverlay = true } = {}) {
  const t = darkTokens(darkMode);
  const dialog = `
<div role="dialog" aria-modal="true" aria-labelledby="form-modal-title"
     class="modal-dialog${sizeClass(size)}"
     style="background:${t.bg};">
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;padding-bottom:8px;">
    <button class="modal-close" aria-label="Close dialog" style="color:${t.closeClr};">${closeIcon}</button>
  </div>
  <div class="modal-body" style="padding-top:4px;">
    <h3 id="form-modal-title" style="font-size:var(--text-xl);font-weight:var(--font-semibold);
         color:${t.title};margin:0 0 20px;line-height:1.4;">Sign in to our platform</h3>

    <div class="form-group">
      <label class="form-label" style="color:${t.body};">Your email</label>
      <div style="position:relative;">
        <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:${t.body};">${mailIcon}</span>
        <input class="form-input" type="email" placeholder="name@flowbite.com"
               style="padding-left:36px;background:${darkMode ? '#4b5563' : 'var(--color-bg-default)'};
                      color:${t.body};border-color:${t.border};">
      </div>
      <span class="form-helper" style="color:${t.body};">We'll never share your details. See our Privacy Policy.</span>
    </div>

    <div class="form-group">
      <label class="form-label" style="color:${t.title};">Password</label>
      <div style="position:relative;">
        <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:${t.body};">${lockIcon}</span>
        <input class="form-input" type="password" placeholder="••••••••••"
               style="padding-left:36px;background:${darkMode ? '#4b5563' : 'var(--color-bg-default)'};
                      color:${t.body};border-color:${t.border};">
      </div>
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <label style="display:flex;align-items:center;gap:8px;font-size:var(--text-sm);color:${t.title};cursor:pointer;">
        <span class="iris-checkbox" role="checkbox" aria-checked="false"></span>
        Remember me
      </label>
      <a href="#" style="font-size:var(--text-sm);color:var(--color-primary);text-decoration:none;">Lost Password?</a>
    </div>

    <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;margin-bottom:12px;">
      Create account
    </button>
    <p style="text-align:center;font-size:var(--text-sm);margin:0;">
      <a href="#" style="color:var(--color-primary);font-weight:var(--font-medium);text-decoration:none;">Not registered? Create account</a>
    </p>
  </div>
</div>`;
  return withOverlay(dialog, showOverlay);
}

// ─── Type=Crypto wallet ───────────────────────────────────────────────────────
// Figma: header title "Connect wallet" + ×, wallet list, helper text, "I accept" footer

function modalCryptoWallet({ size = 'sm', darkMode = false, showOverlay = true } = {}) {
  const t = darkTokens(darkMode);

  const wallets = [
    { name: 'MetaMask',       badge: 'Popular', icon: '🦊' },
    { name: 'Coinbase Wallet', badge: '',       icon: '🔵' },
    { name: 'Opera Wallet',    badge: '',       icon: '🔴' },
    { name: 'WalletConnect',   badge: '',       icon: '🔷' },
    { name: 'Fortmatic',       badge: '',       icon: '🟣' },
  ];

  const walletRows = wallets.map(w => `
    <div style="display:flex;align-items:center;justify-content:space-between;
                padding:12px 16px;background:${t.walletRow};border-radius:var(--radius-md);">
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:22px;line-height:1;">${w.icon}</span>
        <span style="font-size:var(--text-base);font-weight:var(--font-bold);color:${t.title};">${w.name}</span>
      </div>
      ${w.badge ? `<span style="font-size:var(--text-xs);font-weight:var(--font-medium);
        background:${t.badgeBg};color:${t.badgeClr};
        padding:2px 8px;border-radius:var(--radius-full);">${w.badge}</span>` : ''}
    </div>`).join('');

  const dialog = `
<div role="dialog" aria-modal="true" aria-labelledby="wallet-title"
     class="modal-dialog${sizeClass(size)}"
     style="background:${t.bg};">
  <div class="modal-header" style="border-color:${t.border};">
    <h2 class="modal-title" id="wallet-title" style="color:${t.title};">Connect wallet</h2>
    <button class="modal-close" aria-label="Close dialog" style="color:${t.closeClr};">${closeIcon}</button>
  </div>
  <div class="modal-body">
    <p style="margin:0 0 16px;font-size:var(--text-sm);color:${t.body};line-height:1.6;">
      Connect with one of our available wallet providers or create a new one.
    </p>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">${walletRows}</div>
    <div style="display:flex;align-items:center;gap:6px;color:${t.body};font-size:var(--text-xs);">
      <span style="flex-shrink:0;color:${t.body};">${questionIcon}</span>
      Why do I need to connect with my wallet?
    </div>
  </div>
  <div class="modal-footer" style="border-color:${t.border};">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>`;
  return withOverlay(dialog, showOverlay);
}

// ─── Default export ───────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Modal',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Modal Dialog** — a layer above the page that requires user interaction before continuing.

Figma source: \`3284:23643\` (Modal component set).

CSS classes: \`.modal-dialog\` → \`.modal-header\` + \`.modal-title\` + \`.modal-close\` + \`.modal-body\` + \`.modal-footer\`

**When to use**
- Displaying legal or consent content (Terms of Service, Privacy Policy) before proceeding
- Confirming a destructive action (delete, remove) — use the Pop-up type
- Collecting authentication data inline — use the With forms type
- Selecting a third-party integration provider — use the Crypto wallet type

**When NOT to use**
- Simple success/error feedback → use an Alert or Toast instead
- Complex multi-step flows → use a dedicated page or side panel
- Non-blocking information → use an inline Banner

**Anatomy**
\`[.modal-header: .modal-title + .modal-close] / [.modal-body] / [.modal-footer]\`

Pop-up and With forms types have no \`.modal-title\` in the header — only the close button.

**Sizes** (via modifier class on \`.modal-dialog\`)
| Class | Max-width | Figma |
|---|---|---|
| *(default)* | 512px | Size=Default |
| \`.modal-dialog-sm\` | 320px | Size=SM |
| \`.modal-dialog-lg\` | 720px | Size=LG |
| \`.modal-dialog-xl\` | 1024px | Size=XL |

**Accessibility**
- \`role="dialog"\`, \`aria-modal="true"\`, \`aria-labelledby\` on every dialog
- Close button: \`aria-label="Close dialog"\`
- Keyboard: Escape closes; Tab cycles within the dialog (trap focus in JS)
        `.trim(),
      },
    },
  },
  argTypes: {
    // ── Appearance ───────────────────────────────────────────
    type: {
      control: 'select',
      options: ['info', 'popup', 'forms', 'wallet'],
      description: 'Modal type matching Figma variants: `info` (Terms of Service), `popup` (delete confirm), `forms` (sign-in), `wallet` (crypto wallet).',
      table: { category: 'Appearance', defaultValue: { summary: 'info' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
      description: '`sm`=320px · `default`=512px · `lg`=720px · `xl`=1024px. Applied via `.modal-dialog-{size}` modifier class.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    darkMode: {
      control: 'boolean',
      description: 'Dark mode variant — Figma `Dark mode=True`. Applies dark background and inverted text tokens.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
    // ── State ────────────────────────────────────────────────
    showOverlay: {
      control: 'boolean',
      description: 'Show the dark overlay background behind the dialog. Disable for isolated component preview.',
      table: { category: 'State', defaultValue: { summary: true } },
    },
  },
  args: {
    type: 'info',
    size: 'default',
    darkMode: false,
    showOverlay: true,
  },
};

// ─── Interactive ──────────────────────────────────────────────────────────────

export const Interactive = {
    name: 'Interactive (Controls)',
  render: ({ type, size, darkMode, showOverlay }) => {
    const sizeClass = size === 'sm' ? 'modal-dialog-sm' : size === 'lg' ? 'modal-dialog-lg' : size === 'xl' ? 'modal-dialog-xl' : '';

    const htmlCode = `<div class="modal-backdrop">\n  <div role="dialog" class="modal-dialog ${sizeClass}">\n    <div class="modal-header">\n      <h2>Modal Title</h2>\n      <button aria-label="Close">&times;</button>\n    </div>\n    <div class="modal-body">\n      <p>Modal content goes here</p>\n    </div>\n    <div class="modal-footer">\n      <button class="btn btn-outline">Cancel</button>\n      <button class="btn btn-primary">Confirm</button>\n    </div>\n  </div>\n</div>`;

    const reactCode = `<div\n  className="modal-backdrop"\n  onClick={onClose}\n>\n  <div\n    role="dialog"\n    className={\`modal-dialog \${sizeClass}\`}\n    onClick={(e) => e.stopPropagation()}\n  >\n    <div className="modal-header">\n      <h2>{title}</h2>\n      <button onClick={onClose}>&times;</button>\n    </div>\n    <div className="modal-body">{children}</div>\n    <div className="modal-footer">\n      <button onClick={onClose}>Cancel</button>\n      <button onClick={onConfirm}>Confirm</button>\n    </div>\n  </div>\n</div>`;

    const componentCode = `export function Modal({ isOpen, title, children, onClose, onConfirm, size = 'default', type = 'info' }) {\n  if (!isOpen) return null;\n\n  const sizeClass = size === 'sm' ? 'modal-dialog-sm' : size === 'lg' ? 'modal-dialog-lg' : size === 'xl' ? 'modal-dialog-xl' : '';\n\n  return (\n    <div className="modal-backdrop" onClick={onClose}>\n      <div\n        role="dialog"\n        aria-modal="true"\n        className={\`modal-dialog \${sizeClass}\`}\n        onClick={(e) => e.stopPropagation()}\n      >\n        <div className="modal-header">\n          <h2>{title}</h2>\n          <button onClick={onClose} aria-label="Close dialog\">&times;</button>\n        </div>\n        <div className="modal-body\">{children}</div>\n        <div className="modal-footer\">\n          <button onClick={onClose} className="btn btn-outline\">Cancel</button>\n          <button onClick={onConfirm} className="btn btn-primary\">Confirm</button>\n        </div>\n      </div>\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    let preview;
    if (type === 'popup')  preview = modalPopUp({ size, darkMode, showOverlay });
    else if (type === 'forms')  preview = modalWithForms({ size, darkMode, showOverlay });
    else if (type === 'wallet') preview = modalCryptoWallet({ size, darkMode, showOverlay });
    else preview = modalInfo({ size, darkMode, showOverlay });

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;position:relative;">
          ${preview}
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
        story: 'Use **Controls** to switch between modal types, sizes, and light/dark mode.',
      },
    },
  },
};

// ─── Info ─────────────────────────────────────────────────────────────────────

export const Info = {
    name: 'Info — Terms of Service',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Informational modal — Figma: \`Type=Info\`. Presents legal or consent content before a user can proceed.

**✅ Do** — use a single primary action button ("I accept", "Got it") — never put Cancel here.
**✅ Do** — make the body scrollable when content is long — \`max-height: 90vh\` is set on \`.modal-dialog\`.
**❌ Don't** — use this type for destructive confirmations — use **Pop-up** instead.
**❌ Don't** — omit \`aria-labelledby\` pointing to \`.modal-title\`.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">
  <div class="modal-header">
    <h2 class="modal-title" id="modal-title">Terms of Service</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union.</p>
    <p>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  render: () => modalInfo({ size: 'default', darkMode: false }),
};

// ─── Pop-up ───────────────────────────────────────────────────────────────────

export const PopUp = {
    name: 'Pop-up — delete confirmation',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Destructive confirmation modal — Figma: \`Type=Pop-up\`. No title in header; body centers a warning icon + question; footer has two actions.

**✅ Do** — use \`.btn-red\` for the destructive action; \`.btn-alternative\` for dismiss.
**✅ Do** — use the warning icon (exclamation-circle) to signal danger.
**❌ Don't** — add a title to the header in this type — the Figma spec omits it intentionally.
**❌ Don't** — label the confirm button just "Yes" — use the specific action verb ("Yes, I'm sure", "Delete it").
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="popup-title" class="modal-dialog modal-dialog-sm">
  <!-- Header: close button only, no title, no border -->
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body" style="text-align:center;">
    <!-- exclamation-circle icon 42×42 -->
    <p id="popup-title">Are you sure you want to delete this product?</p>
  </div>
  <div class="modal-footer" style="justify-content:center;">
    <button class="btn btn-red btn-md">Yes, I'm sure</button>
    <button class="btn btn-alternative btn-md">No, cancel</button>
  </div>
</div>`,
      },
    },
  },
  render: () => modalPopUp({ size: 'sm', darkMode: false }),
};

// ─── With forms ───────────────────────────────────────────────────────────────

export const WithForms = {
    name: 'With forms — sign in',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Form modal — Figma: \`Type=With forms\`. No title in header; form fields and heading inside the body.

Uses \`.form-group\` + \`.form-label\` + \`.form-input\` + \`.form-helper\` from \`styles.css\`.

**✅ Do** — include \`aria-labelledby\` pointing to the inline heading inside \`.modal-body\`.
**✅ Do** — set \`type="email"\` and \`type="password"\` for native browser validation.
**❌ Don't** — add a \`.modal-footer\` — the submit button lives inside \`.modal-body\` for this type.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="form-modal-title" class="modal-dialog modal-dialog-sm">
  <!-- Header: close button only, no title, no border -->
  <div class="modal-header" style="border-bottom:none;justify-content:flex-end;">
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <h3 id="form-modal-title">Sign in to our platform</h3>

    <div class="form-group">
      <label class="form-label">Your email</label>
      <input class="form-input" type="email" placeholder="name@flowbite.com">
      <span class="form-helper">We'll never share your details. See our Privacy Policy.</span>
    </div>

    <div class="form-group">
      <label class="form-label">Password</label>
      <input class="form-input" type="password" placeholder="••••••••••">
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <label style="display:flex;align-items:center;gap:8px;">
        <input type="checkbox"> Remember me
      </label>
      <a href="#" style="color:var(--color-primary);">Lost Password?</a>
    </div>

    <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;">Create account</button>
    <p style="text-align:center;margin-top:12px;">
      <a href="#" style="color:var(--color-primary);">Not registered? Create account</a>
    </p>
  </div>
</div>`,
      },
    },
  },
  render: () => modalWithForms({ size: 'sm', darkMode: false }),
};

// ─── Crypto wallet ────────────────────────────────────────────────────────────

export const CryptoWallet = {
    name: 'Crypto wallet — connect wallet',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Wallet selection modal — Figma: \`Type=Crypto wallet\`. Title in header; wallet list with optional badge; single "I accept" footer.

**✅ Do** — use background \`var(--color-bg-default)\` for wallet list rows.
**✅ Do** — show the "Popular" badge on the most common wallet provider.
**❌ Don't** — use this pattern for non-wallet provider selection — use a standard list or radio group.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="wallet-title" class="modal-dialog modal-dialog-sm">
  <div class="modal-header">
    <h2 class="modal-title" id="wallet-title">Connect wallet</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>Connect with one of our available wallet providers or create a new one.</p>

    <!-- Wallet list -->
    <div style="display:flex;flex-direction:column;gap:8px;margin:16px 0;">
      <!-- Item with badge -->
      <div style="display:flex;align-items:center;justify-content:space-between;
                  padding:12px 16px;background:var(--color-bg-default);border-radius:var(--radius-md);">
        <!-- wallet icon + name -->
        <span style="font-size:var(--text-base);font-weight:var(--font-bold);">MetaMask</span>
        <span style="font-size:var(--text-xs);background:var(--color-bg-muted);padding:2px 8px;
                     border-radius:var(--radius-full);">Popular</span>
      </div>
      <!-- More items... -->
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>`,
      },
    },
  },
  render: () => modalCryptoWallet({ size: 'sm', darkMode: false }),
};

// ─── Dark mode ────────────────────────────────────────────────────────────────

export const DarkMode = {
    name: 'Dark mode — all types',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All 4 modal types in dark mode — Figma: \`Dark mode=True\`.

Dark mode tokens: \`bg:var(--color-text-primary)\`, \`title:var(--color-bg-white)\`, \`body:var(--color-border-light)\`, \`separator:#4b5563\`.

**✅ Do** — apply dark tokens consistently to header, body, and footer.
**❌ Don't** — mix light and dark tokens within the same modal instance.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<!-- Dark mode: inline style overrides for bg, text, and border colors -->
<div class="modal-dialog" style="background:var(--color-text-primary);">
  <div class="modal-header" style="border-color:#4b5563;">
    <h2 class="modal-title" style="color:var(--color-bg-white);">Terms of Service</h2>
    <button class="modal-close" style="color:var(--color-border-light);"><!-- × --></button>
  </div>
  <div class="modal-body" style="color:var(--color-border-light);">...</div>
  <div class="modal-footer" style="border-color:#4b5563;">
    <button class="btn btn-primary btn-md">I accept</button>
  </div>
</div>`,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-wrap:wrap;gap:24px;padding:32px;
                background:rgba(17,25,40,0.9);justify-content:center;">
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:var(--color-border-light);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Info</div>
        ${modalInfo({ size: 'sm', darkMode: true, showOverlay: false })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:var(--color-border-light);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Pop-up</div>
        ${modalPopUp({ size: 'sm', darkMode: true, showOverlay: false })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:var(--color-border-light);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With forms</div>
        ${modalWithForms({ size: 'sm', darkMode: true, showOverlay: false })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:var(--color-border-light);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Crypto wallet</div>
        ${modalCryptoWallet({ size: 'sm', darkMode: true, showOverlay: false })}
      </div>
    </div>
  `,
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes = {
    name: 'Sizes — SM / Default / LG / XL',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All four size variants — Figma: \`Size=SM/Default/LG/XL\`. All use the Info type.

| Size | Class | Max-width |
|---|---|---|
| SM | \`.modal-dialog-sm\` | 320px |
| Default | *(none)* | 512px |
| LG | \`.modal-dialog-lg\` | 720px |
| XL | \`.modal-dialog-xl\` | 1024px |
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div class="modal-dialog modal-dialog-sm">...</div>    <!-- 320px -->
<div class="modal-dialog">...</div>               <!-- 512px (default) -->
<div class="modal-dialog modal-dialog-lg">...</div>  <!-- 720px -->
<div class="modal-dialog modal-dialog-xl">...</div>  <!-- 1024px -->`,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:var(--color-text-primary);">
      ${[
        ['SM · 320px',      modalInfo({ size: 'sm',      darkMode: false, showOverlay: false })],
        ['Default · 512px', modalInfo({ size: 'default', darkMode: false, showOverlay: false })],
        ['LG · 720px',      modalInfo({ size: 'lg',      darkMode: false, showOverlay: false })],
        ['XL · 1024px',     modalInfo({ size: 'xl',      darkMode: false, showOverlay: false })],
      ].map(([label, html]) => `
        <div>
          <div style="font-family:ui-monospace,monospace;font-size:10px;color:var(--color-border-light);
                      text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${label}</div>
          ${html}
        </div>`).join('')}
    </div>
  `,
};

// ─── All types ────────────────────────────────────────────────────────────────

export const AllTypes = {
    name: 'All types — light mode',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'All 4 modal types side-by-side in light mode: Info, Pop-up, With forms, Crypto wallet.',
      },
      source: {
        language: 'html',
        code: `<!-- Info: .modal-dialog (default) + title + body paragraphs + single button -->
<!-- Pop-up: .modal-dialog-sm + no title + icon + two buttons -->
<!-- With forms: .modal-dialog-sm + no title + form fields + submit in body -->
<!-- Crypto wallet: .modal-dialog-sm + title + wallet list + single button -->`,
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-wrap:wrap;gap:24px;padding:32px;
                background:rgba(17,25,40,0.82);justify-content:center;">
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:var(--color-border-light);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Info</div>
        ${modalInfo({ size: 'sm', darkMode: false, showOverlay: false })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:var(--color-border-light);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Pop-up</div>
        ${modalPopUp({ size: 'sm', darkMode: false, showOverlay: false })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:var(--color-border-light);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">With forms</div>
        ${modalWithForms({ size: 'sm', darkMode: false, showOverlay: false })}
      </div>
      <div>
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:var(--color-border-light);
                    text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Crypto wallet</div>
        ${modalCryptoWallet({ size: 'sm', darkMode: false, showOverlay: false })}
      </div>
    </div>
  `,
};
