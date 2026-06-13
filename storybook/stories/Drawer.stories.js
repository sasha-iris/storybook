// Figma node: 13261:81153 (Drawer — Type × Breakpoints × Dark Mode)
// File key: ZKtEULdYKaXe5uQl1J6ijI
//
// ⚠️  HIDDEN FROM SIDEBAR — tags: ['!dev']
// Design story usage unconfirmed. Committed for reference only.

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg:         'var(--color-bg-white)',
  bgDark:     '#1f2a37',
  title:      '#111928',
  titleMuted: '#6b7280',
  body:       '#6b7280',
  bodyDark:   'var(--color-border-light)',
  close:      '#6b7280',
  border:     'var(--color-border-default)',
  navText:    '#111928',
  navIcon:    '#6b7280',
  navActive:  'var(--color-bg-secondary)',
  inputBg:    'var(--color-bg-tertiary)',
  inputBorder:'var(--color-border-default)',
  label:      '#111928',
  btnPurple:  '#42389d',
  overlay:    'rgba(75,85,99,0.5)',
};

// ─── Icons ────────────────────────────────────────────────────────────────────
const CLOSE_ICON = (c='#6b7280') => `<svg width="14" height="14" viewBox="0 0 20 20" fill="${c}" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`;

const NAV_ICONS = {
  overview:   (c) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="${c}"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>`,
  pages:      (c) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="${c}"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/></svg>`,
  sales:      (c) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="${c}"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C4.343 11.227 4.8 12 5.586 12h9.828a1 1 0 000-2H7.586l.35-.35A1 1 0 008 9H5.72l-.899-3.596A.997.997 0 004 5H3zm13 13a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"/></svg>`,
  messages:   (c) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="${c}"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>`,
  auth:       (c) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="${c}"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>`,
  chevDown:   (c) => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
};

// ─── Drawer header ─────────────────────────────────────────────────────────────
function drawerHeader(title, dark) {
  const clr = dark ? 'var(--color-border-light)' : T.titleMuted;
  return `
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
    <h5 style="margin:0;font-size:16px;font-weight:600;color:${clr};font-family:inherit;">${title}</h5>
    <button style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;
                   border:none;background:transparent;cursor:pointer;border-radius:4px;padding:0;">
      ${CLOSE_ICON(clr)}
    </button>
  </div>`;
}

// ─── Type: Default ─────────────────────────────────────────────────────────────
function drawerDefault(dark) {
  const bg   = dark ? T.bgDark : T.bg;
  const body = dark ? T.bodyDark : T.body;
  return `
  <div style="padding:24px 16px;">
    ${drawerHeader('Info', dark)}
    <p style="margin:0 0 24px;font-size:14px;font-weight:400;color:${body};line-height:1.6;font-family:inherit;">
      Supercharge your hiring by taking advantage of our <strong style="font-weight:600;">limited-time sale</strong>
      on Iris Finance Premium. Unlimited access to every dashboard, report, and the full metrics library.
    </p>
    <div style="display:flex;gap:12px;">
      <button class="btn btn-primary btn-md">Get access</button>
      <button class="btn btn-outline-gray btn-md">Decline</button>
    </div>
  </div>`;
}

// ─── Type: Navigation ──────────────────────────────────────────────────────────
function drawerNavigation(dark) {
  const bg      = dark ? T.bgDark : T.bg;
  const navText = dark ? 'var(--color-border-default)' : T.navText;
  const navIcon = dark ? 'var(--color-border-light)' : T.navIcon;
  const active  = dark ? 'var(--color-text-primary)' : T.navActive;
  const sep     = dark ? 'var(--color-text-primary)' : T.border;

  const navItem = (label, icon, isActive=false, sub=false) => `
  <div style="display:flex;align-items:center;justify-content:space-between;
              padding:${sub ? '8px 8px 8px 32px' : '8px'};border-radius:6px;
              background:${isActive ? active : 'transparent'};cursor:pointer;gap:8px;">
    <div style="display:flex;align-items:center;gap:10px;">
      ${icon ? `<span style="flex-shrink:0;">${NAV_ICONS[icon](isActive ? navText : navIcon)}</span>` : ''}
      <span style="font-size:${sub ? '14px' : '16px'};font-weight:500;color:${navText};font-family:inherit;">${label}</span>
    </div>
    ${!sub ? `${NAV_ICONS.chevDown(navIcon)}` : ''}
  </div>`;

  return `
  <div style="padding:24px 16px;">
    ${drawerHeader('Menu', dark)}
    <nav style="display:flex;flex-direction:column;gap:2px;">
      ${navItem('Overview','overview')}
      ${navItem('Pages','pages')}
      <div>
        ${navItem('Sales','sales',true)}
        <div style="display:flex;flex-direction:column;gap:1px;margin-top:2px;">
          ${navItem('Product List',null,false,true)}
          ${navItem('Billing',null,false,true)}
          ${navItem('Invoice',null,false,true)}
        </div>
      </div>
      ${navItem('Messages','messages')}
      ${navItem('Authentication','auth')}
    </nav>
    <div style="height:1px;background:${sep};margin:16px 0;"></div>
    <div style="display:flex;flex-direction:column;gap:2px;">
      <div style="display:flex;align-items:center;gap:10px;padding:8px;cursor:pointer;">
        <span style="font-size:14px;color:${navIcon};font-family:inherit;">Docs</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;padding:8px;cursor:pointer;">
        <span style="font-size:14px;color:${navIcon};font-family:inherit;">Components</span>
      </div>
      <div style="display:flex;align-items:center;gap:10px;padding:8px;cursor:pointer;">
        <span style="font-size:14px;color:${navIcon};font-family:inherit;">Blog</span>
      </div>
    </div>
  </div>`;
}

// ─── Type: Contact Form ────────────────────────────────────────────────────────
function drawerContactForm(dark) {
  const bg     = dark ? T.bgDark : T.bg;
  const body   = dark ? T.bodyDark : T.body;
  const label  = dark ? 'var(--color-border-default)' : T.label;
  const inputB = dark ? '#4b5563' : T.inputBg;
  const inputC = dark ? 'var(--color-border-default)' : T.inputBorder;

  return `
  <div style="padding:24px 16px;">
    ${drawerHeader('Contact us', dark)}
    <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:24px;">
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="color:${label};">Your email</label>
        <input class="form-input" type="email" placeholder="name@company.com"
               style="background:${inputB};border-color:${inputC};color:${body};">
        <span class="form-helper" style="color:${body};">We'll never share your details. See our Privacy Policy.</span>
      </div>
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="color:${label};">Subject</label>
        <input class="form-input" type="text" placeholder="Let us know how we can help you"
               style="background:${inputB};border-color:${inputC};color:${body};">
      </div>
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="color:${label};">Your message</label>
        <textarea class="form-textarea" placeholder="Write text here..."
                  style="background:${inputB};border-color:${inputC};color:${body};min-height:80px;"></textarea>
        <span class="form-helper" style="color:${body};">A note for extra info</span>
      </div>
    </div>
    <button style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;
                   background:${T.btnPurple};color:#fff;border:none;border-radius:8px;
                   font-size:14px;font-weight:500;cursor:pointer;font-family:inherit;margin-bottom:16px;">
      Send message
    </button>
    <div style="display:flex;flex-direction:column;gap:4px;padding-top:8px;border-top:1px solid ${dark ? 'var(--color-text-primary)' : T.border};">
      <span style="font-size:14px;color:${body};font-family:inherit;">info@irisfinance.co</span>
      <span style="font-size:14px;color:${body};font-family:inherit;">1-234-56789-10</span>
    </div>
  </div>`;
}

// ─── Type: Alert message ───────────────────────────────────────────────────────
function drawerAlertMessage(dark) {
  const body = dark ? T.bodyDark : T.body;
  return `
  <div style="padding:24px 16px;">
    ${drawerHeader('Notice', dark)}
    <div class="alert alert-info" style="margin-bottom:16px;">
      <div class="alert-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
      </div>
      <div class="alert-body">
        <div class="alert-title">New update available</div>
        <p style="margin:4px 0 0;font-size:14px;line-height:1.5;">
          A new software version is available for download. It is important that you update as soon as possible to stay secure.
        </p>
      </div>
    </div>
    <div style="display:flex;gap:12px;">
      <button class="btn btn-primary btn-md">Update now</button>
      <button class="btn btn-outline-gray btn-md">Skip</button>
    </div>
  </div>`;
}

// ─── Type: Text Bottom (bottom sheet) ─────────────────────────────────────────
function drawerTextBottom(dark) {
  const bg   = dark ? T.bgDark : T.bg;
  const body = dark ? T.bodyDark : T.body;
  const sep  = dark ? 'var(--color-text-primary)' : T.border;
  return `
  <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 24px;
              border-top:1px solid ${sep};font-family:inherit;">
    <div style="display:flex;align-items:center;gap:24px;flex:1;">
      <p style="margin:0;font-size:14px;color:${body};max-width:600px;line-height:1.5;">
        Supercharge your hiring by taking advantage of our <strong style="font-weight:600;">limited-time sale</strong>
        on Iris Finance Premium. Unlimited access to every dashboard, report,.
      </p>
    </div>
    <div style="display:flex;gap:12px;flex-shrink:0;">
      <button class="btn btn-primary btn-md">Get access</button>
      <button class="btn btn-outline-gray btn-md">No, thanks</button>
    </div>
  </div>`;
}

// ─── Drawer shell (side or bottom) ────────────────────────────────────────────
function drawer({ type='default', dark=false, position='right', showOverlay=true }) {
  const bg = dark ? T.bgDark : T.bg;
  const isBottom = type === 'textBottom';

  let content;
  if      (type === 'navigation')   content = drawerNavigation(dark);
  else if (type === 'contactForm')  content = drawerContactForm(dark);
  else if (type === 'alertMessage') content = drawerAlertMessage(dark);
  else if (type === 'textBottom')   content = drawerTextBottom(dark);
  else                              content = drawerDefault(dark);

  if (isBottom) {
    return `
<div style="position:relative;width:700px;height:200px;font-family:inherit;">
  ${showOverlay ? `<div style="position:absolute;inset:0;background:${T.overlay};border-radius:8px;"></div>` : ''}
  <div style="position:absolute;bottom:0;left:0;right:0;background:${bg};border-radius:8px 8px 0 0;
              box-shadow:0 -4px 16px rgba(0,0,0,.12);">
    ${content}
  </div>
</div>`;
  }

  const side = position === 'left' ? 'left:0;' : 'right:0;';
  return `
<div style="position:relative;width:700px;height:520px;font-family:inherit;overflow:hidden;border-radius:8px;">
  ${showOverlay ? `<div style="position:absolute;inset:0;background:${T.overlay};"></div>` : ''}
  <div style="position:absolute;top:0;bottom:0;${side}width:320px;background:${bg};
              box-shadow:${position==='right'?'-4px':'4px'} 0 16px rgba(0,0,0,.12);overflow-y:auto;">
    ${content}
  </div>
</div>`;
}

// ─── Default export ────────────────────────────────────────────────────────────
export default {
  title: 'Iris Library/Drawer',
  tags: ['!dev'],
  parameters: {
    docs: {
      description: {
        component: `
**Drawer** (also called a side sheet or flyout) slides in from the edge of the screen to reveal supplementary content without navigating away from the current page.

> ⚠️ **Status: hidden — design story usage unconfirmed.** This component is committed for reference. It is not shown in the sidebar until it is used in active design stories.

**Types confirmed in Figma (node 13261:81153)**
- \`default\` — info text + CTA buttons (right panel)
- \`navigation\` — site nav menu with icons + submenus
- \`contactForm\` — email/subject/message form fields
- \`alertMessage\` — alert card + action buttons
- \`textBottom\` — bottom sheet with text + CTAs

**Breakpoints**
- Desktop & Tablet & Mobile: panel width \`320px\`
- Text Bottom: full-width bottom sheet, ~\`150px\` height

**When to use**
- Displaying supplementary details without leaving the current context
- Mobile navigation menus (hamburger → Navigation drawer)
- Quick-fill forms like contact or filters without a full page

**When NOT to use**
- Complex multi-step flows → use a full page or wizard
- Critical destructive actions → use a **Modal** with explicit confirmation
- Simple one-field inputs → use an inline form

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'navigation', 'contactForm', 'alertMessage', 'textBottom'],
      description: 'Drawer content type. Maps to Figma `Type=` variant.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    dark: {
      control: 'boolean',
      description: 'Dark theme. Drawer bg changes to `#1f2a37`, text to `var(--color-border-light)`.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
    position: {
      control: 'select',
      options: ['right', 'left'],
      description: 'Side from which the panel slides in.',
      table: { category: 'Appearance', defaultValue: { summary: 'right' } },
      if: { arg: 'type', neq: 'textBottom' },
    },
    showOverlay: {
      control: 'boolean',
      description: 'Show the semi-transparent overlay behind the drawer. Use `false` to inspect the panel alone.',
      table: { category: 'Appearance', defaultValue: { summary: true } },
    },
  },
  args: {
    type: 'default',
    dark: false,
    position: 'right',
    showOverlay: true,
  },
};

// ─── Interactive (Controls) ────────────────────────────────────────────────────
export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;
    const bg = a.dark ? '#1f2a37' : 'var(--color-bg-white)';
    const side = a.position === 'left' ? 'left:0' : 'right:0';

    const htmlCode = `<!-- Overlay -->\n<div style="position:fixed;inset:0;background:rgba(75,85,99,0.5);z-index:40;"></div>\n\n<!-- Drawer panel -->\n<div style="position:fixed;top:0;bottom:0;${side};width:320px;background:${bg};z-index:50;overflow-y:auto;box-shadow:0 0 16px rgba(0,0,0,.2);">\n  <div style="padding:20px;">\n    <h3>Drawer ${a.position}</h3>\n    <p>Content goes here</p>\n  </div>\n</div>`;

    const reactCode = `<div>\n  {/* Overlay */}\n  <div\n    style={{\n      position: 'fixed',\n      inset: 0,\n      background: 'rgba(75,85,99,0.5)',\n      zIndex: 40,\n    }}\n    onClick={onClose}\n  />\n  {/* Drawer panel */}\n  <div\n    style={{\n      position: 'fixed',\n      top: 0,\n      bottom: 0,\n      [position]: 0,\n      width: '320px',\n      background: dark ? '#1f2a37' : 'var(--color-bg-white)',\n      zIndex: 50,\n      overflowY: 'auto',\n      boxShadow: '0 0 16px rgba(0,0,0,.2)',\n    }}\n  >\n    <div style={{ padding: '20px' }}>{children}</div>\n  </div>\n</div>`;

    const componentCode = `export function Drawer({ isOpen, position = 'right', dark = false, children, onClose }) {\n  if (!isOpen) return null;\n\n  const side = position === 'left' ? 'left:0' : 'right:0';\n  const bgColor = dark ? '#1f2a37' : 'var(--color-bg-white)';\n\n  return (\n    <>\n      {/* Overlay */}\n      <div\n        style={{\n          position: 'fixed',\n          inset: '0',\n          background: 'rgba(75,85,99,0.5)',\n          zIndex: 40,\n        }}\n        onClick={onClose}\n      />\n      {/* Drawer panel */}\n      <div\n        style={{\n          position: 'fixed',\n          top: 0,\n          bottom: 0,\n          [position]: 0,\n          width: '320px',\n          background: bgColor,\n          zIndex: 50,\n          overflowY: 'auto',\n          boxShadow: '0 0 16px rgba(0,0,0,.2)',\n        }}\n      >\n        <div style={{ padding: '20px' }}>\n          <button onClick={onClose} style={{ float: 'right' }}>&times;</button>\n          {children}\n        </div>\n      </div>\n    </>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;position:relative;height:520px;overflow:hidden;">
          ${drawer(args)}
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
        story: 'Use **Controls** to switch between types, themes, and position.',
      },
    },
  },
};

// ─── Gallery: All types ────────────────────────────────────────────────────────
export const AllTypes = {
    name: 'All types',
  args: { dark: false },
  parameters: {
    controls: { include: ['dark'] },
    docs: {
      description: {
        story: `All 5 Figma drawer types. Toggle **dark** to preview dark theme across all.

✅ Use \`default\` for info panels and announcements
✅ Use \`navigation\` for mobile hamburger menu
✅ Use \`contactForm\` for quick-submit forms
✅ Use \`textBottom\` for cookie banners or upgrade nudges
❌ Don't use Drawer for destructive confirmations — use Modal instead`,
      },
      source: {
        language: 'html',
        code: `<!-- Side drawer (right) -->
<div style="position:fixed;top:0;bottom:0;right:0;width:320px;background:#fff;z-index:50;box-shadow:-4px 0 16px rgba(0,0,0,.12);">
  <!-- drawer content -->
</div>

<!-- Bottom sheet -->
<div style="position:fixed;bottom:0;left:0;right:0;background:#fff;z-index:50;box-shadow:0 -4px 16px rgba(0,0,0,.12);">
  <!-- bottom content -->
</div>`,
      },
    },
  },
  render: ({ dark }) => {
    const types = [
      { type: 'default',      label: 'Default' },
      { type: 'navigation',   label: 'Navigation' },
      { type: 'contactForm',  label: 'Contact Form' },
      { type: 'alertMessage', label: 'Alert Message' },
    ];
    const panelsBg = dark ? '#1f2a37' : 'var(--color-bg-white)';
    const labelClr = '#6b7280';
    return `
<div style="display:flex;flex-direction:column;gap:32px;font-family:inherit;">
  <div style="display:grid;grid-template-columns:repeat(2,auto);gap:24px;align-items:start;">
    ${types.map(({ type, label }) => `
    <div>
      <div style="font-size:11px;color:${labelClr};margin-bottom:8px;font-family:inherit;">${label}</div>
      <div style="position:relative;width:340px;height:360px;overflow:hidden;border-radius:8px;
                  border:1px solid var(--color-border-default);">
        <div style="position:absolute;inset:0;background:rgba(75,85,99,0.3);"></div>
        <div style="position:absolute;top:0;bottom:0;right:0;width:320px;background:${panelsBg};
                    box-shadow:-4px 0 16px rgba(0,0,0,.12);overflow-y:auto;">
          ${type==='navigation'   ? drawerNavigation(dark) :
            type==='contactForm'  ? drawerContactForm(dark) :
            type==='alertMessage' ? drawerAlertMessage(dark) :
                                    drawerDefault(dark)}
        </div>
      </div>
    </div>`).join('')}
  </div>
  <div>
    <div style="font-size:11px;color:${labelClr};margin-bottom:8px;font-family:inherit;">Text Bottom</div>
    <div style="position:relative;width:700px;height:140px;border-radius:8px;
                border:1px solid var(--color-border-default);overflow:hidden;">
      <div style="position:absolute;inset:0;background:rgba(75,85,99,0.3);"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;background:${panelsBg};
                  box-shadow:0 -4px 16px rgba(0,0,0,.12);">
        ${drawerTextBottom(dark)}
      </div>
    </div>
  </div>
</div>`;
  },
};
