// Figma nodes: 84:19064 (Input Field), 84:20015 (Floating Label),
//              84:19693 (Textarea), 84:19626 (File Upload),
//              13731:79044 (Tag Input), 9481:135673 (Read-only)
// File key: ZKtEULdYKaXe5uQl1J6ijI

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  label:      '#111928',
  placeholder:'#6b7280',
  value:      '#111928',
  disabled:   'var(--color-border-light)',
  help:       '#6b7280',
  inputBg:    'var(--color-bg-tertiary)',
  borderDef:  'var(--color-border-default)',
  borderFocus:'var(--color-primary)',
  borderOk:   '#0e9f6e',
  borderErr:  '#f05252',
  captionOk:  '#057a55',
  captionErr: '#e02424',
  tagBg:      'var(--color-bg-secondary)',
  tagText:    '#4b5563',
  btnDark:    '#1f2a37',
  btnBlue:    '#1447e6',
  sendBlue:   'var(--color-primary)',
  toolbarBg:  'var(--color-bg-tertiary)',
  footerBg:   'var(--color-bg-tertiary)',
  dragBorder: 'var(--color-border-default)',
  cloudIcon:  'var(--color-border-light)',
};

// ─── SVG icons ────────────────────────────────────────────────────────────────
const icnUser = (c='#6b7280') => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 14s-1 0-1-1 1-4 7-4 7 3 7 4-1 1-1 1H2Z" fill="${c}"/></svg>`;
const icnX   = (c='#6b7280') => `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3 3 9M3 3l6 6" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const icnXSm = (c='#6b7280') => `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7.5 2.5 2.5 7.5M2.5 2.5l5 5" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const icnSearch = (c='#6b7280') => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 14 10.5 10.5M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const icnChevronDown = (c='#6b7280') => `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="m4.5 6.75 4.5 4.5 4.5-4.5" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const icnCloud = (c='var(--color-border-light)') => `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M13 28a7 7 0 0 1 0-14 7 7 0 0 1 6.5-4.4A7 7 0 0 1 28 14.7 6 6 0 1 1 28 27H13Z" stroke="${c}" stroke-width="1.5"/><path d="M20 32v-8M17 27l3-3 3 3" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const icnPhoto = (c='#6b7280') => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="${c}" stroke-width="1.5"/><circle cx="8" cy="10" r="2" stroke="${c}" stroke-width="1.5"/><path d="m2 17 5-4 4 3 3-3 5 4" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
const icnEmoji = (c='#6b7280') => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="${c}" stroke-width="1.5"/><path d="M8.5 14.5s1 2 3.5 2 3.5-2 3.5-2" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="10" r="1" fill="${c}"/><circle cx="15" cy="10" r="1" fill="${c}"/></svg>`;
const icnPlane = (c='var(--color-primary)') => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const icnBold = (c='var(--color-text-primary)') => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3h4.5a3 3 0 0 1 0 6H5V3ZM5 9h5a3 3 0 0 1 0 6H5V9Z" stroke="${c}" stroke-width="1.5"/></svg>`;
const icnItalic = (c='var(--color-text-primary)') => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3H7M9 13H6M9 3 7 13" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const icnLink = (c='var(--color-text-primary)') => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.5 9.5a3.54 3.54 0 0 0 5 0l2-2a3.54 3.54 0 0 0-5-5L7 4M9.5 6.5a3.54 3.54 0 0 0-5 0L2.5 8.5a3.54 3.54 0 0 0 5 5L9 12" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;

// ─── Input Field (84:19064) — built on the real .form-input class ──────────────
// Renders a real <input class="form-input">, NOT an inline-styled mockup, so the
// Storybook preview === the shippable component === the copyable snippet.
// Real classes used: form-group · form-label · form-input · form-input-sm/-lg ·
// is-error/is-success · form-helper · form-feedback-error/-success · form-search-wrap.
function inputField({ label = 'First name', placeholder = 'Input text', value = '', state = 'normal', size = 'regular', helpText = '', icon = false }) {
  const sizeClass  = size === 'small' ? ' form-input-sm' : size === 'large' ? ' form-input-lg' : '';
  const stateClass = state === 'error' ? ' is-error' : state === 'success' ? ' is-success' : '';
  const disAttr    = state === 'disabled' ? ' disabled' : '';
  const valAttr    = value ? ` value="${value}"` : '';

  const labelEl = label ? `<label class="form-label">${label}</label>` : '';
  const feedbackCls = state === 'error' ? 'form-feedback-error' : state === 'success' ? 'form-feedback-success' : 'form-helper';
  const helpEl = helpText ? `<p class="${feedbackCls}">${helpText}</p>` : '';

  const inputEl = icon
    ? `<div class="form-search-wrap">
      <span class="form-search-icon">${icnUser()}</span>
      <input type="text" class="form-input${sizeClass}${stateClass}" placeholder="${placeholder}"${valAttr}${disAttr} />
    </div>`
    : `<input type="text" class="form-input${sizeClass}${stateClass}" placeholder="${placeholder}"${valAttr}${disAttr} />`;

  return `<div class="form-group">
    ${labelEl}
    ${inputEl}
    ${helpEl}
  </div>`;
}

// ─── Floating Label (84:20015) — real .form-floating classes ─────────────────
// `.form-floating` (background style) / `.form-floating--underline` (border-bottom
// style) + real `.form-input` + `.form-float-label`. Float-up is CSS-driven via
// :focus / :not(:placeholder-shown) — the input needs placeholder=" ".
function floatingLabel({ state = 'initial', type = 'border-bottom', placeholder = 'Placeholder text' }) {
  const underline  = type === 'border-bottom' ? ' form-floating--underline' : '';
  const stateClass = state === 'danger' ? ' is-error' : state === 'success' ? ' is-success' : '';
  const disAttr    = state === 'disabled' ? ' disabled' : '';
  const hasValue   = state === 'typing' || state === 'active' || state === 'success' || state === 'danger';
  const valAttr    = hasValue ? ' value="Typing"' : '';
  const caption = state === 'danger'
    ? '<p class="form-feedback-error">Oh, snapp! Some helper message</p>'
    : state === 'success'
      ? '<p class="form-feedback-success">Oh, snapp! Some helper message</p>'
      : '';
  return `<div>
    <div class="form-floating${underline}">
      <input type="text" class="form-input${stateClass}" placeholder=" "${valAttr}${disAttr} />
      <label class="form-float-label">${placeholder}</label>
    </div>
    ${caption}
  </div>`;
}

// ─── Textarea (84:19693) — real .form-textarea + .form-label/.form-helper + .btn ──
// The textarea itself is always the real `.form-textarea`. Composite frames
// (CTA footer, WYSIWYG toolbar, chatroom bar) are layout wrappers; their buttons
// are real `.btn` classes. Inline styles carry layout only.
function textarea({ type = 'default', label = 'Your message', placeholder = 'Write text here ...', help = 'A note for extra info' }) {
  const head = `<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
      <label class="form-label" style="margin:0;">${label}</label>
      <span class="form-helper" style="margin:0;">${help}</span>
    </div>`;

  const textareaBox = `<textarea class="form-textarea" placeholder="${placeholder}"></textarea>`;

  if (type === 'default') {
    return `<div>${head}${textareaBox}</div>`;
  }

  if (type === 'cta') {
    return `<div>
      ${head}
      <div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;">
        <textarea class="form-textarea" style="border:none;border-radius:0;resize:none;" placeholder="${placeholder}"></textarea>
        <div style="border-top:1px solid var(--color-border-default);padding:10px 12px;background:var(--color-bg-tertiary);display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;gap:8px;">
            <button class="btn-icon" aria-label="Bold">${icnBold()}</button>
            <button class="btn-icon" aria-label="Italic">${icnItalic()}</button>
            <button class="btn-icon" aria-label="Insert link">${icnLink()}</button>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-outline-dark btn-sm">Preview</button>
            <button class="btn btn-blue btn-sm">Post comment</button>
          </div>
        </div>
      </div>
    </div>`;
  }

  if (type === 'wysiwyg') {
    return `<div>
      ${head}
      <div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;">
        <div style="display:flex;align-items:center;gap:6px;padding:8px 12px;background:var(--color-bg-tertiary);border-bottom:1px solid var(--color-border-default);">
          <button class="btn-icon" aria-label="Bold">${icnBold()}</button>
          <button class="btn-icon" aria-label="Italic">${icnItalic()}</button>
          <div style="width:1px;height:16px;background:var(--color-border-default);margin:0 2px;"></div>
          <button class="btn-icon" aria-label="Insert link">${icnLink()}</button>
          <div style="width:1px;height:16px;background:var(--color-border-default);margin:0 2px;"></div>
          <button class="btn-icon" aria-label="Search">${icnSearch(C.label)}</button>
        </div>
        <textarea class="form-textarea" style="background:var(--color-bg-white);border:none;border-radius:0;resize:none;" placeholder="${placeholder}"></textarea>
      </div>
      <div style="margin-top:8px;display:flex;justify-content:flex-end;">
        <button class="btn btn-blue btn-md" style="display:flex;align-items:center;gap:6px;">${icnPlane('#fff')} Send message</button>
      </div>
    </div>`;
  }

  if (type === 'chatroom') {
    return `<div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--color-bg-tertiary);border-top:1px solid var(--color-border-default);">
      <button class="btn-icon" aria-label="Attach photo">${icnPhoto()}</button>
      <button class="btn-icon" aria-label="Insert emoji">${icnEmoji()}</button>
      <input type="text" class="form-input" style="background:var(--color-bg-white);" placeholder="${placeholder}" />
      <button class="btn-icon" aria-label="Send">${icnPlane()}</button>
    </div>`;
  }

  return textareaBox;
}

// ─── File Upload (84:19626) — real .form-file-* classes ──────────────────────
// Default = `.form-file-label` + `.form-file-btn` + `.form-file-placeholder`.
// Drag zones = `.form-file-drop` (+ `__hint` / `__formats`). Buttons = real `.btn`.
function fileUpload({ type = 'default', size = 'default', label = 'Upload file', help = 'A note for extra info' }) {
  const labelEl = `<label class="form-label">${label}</label>`;
  const helpEl  = `<p class="form-helper">${help}</p>`;
  const lgStyle = size === 'lg' ? ' style="padding-top:15px;padding-bottom:15px;"' : '';

  if (type === 'default') {
    return `<div>
      ${labelEl}
      <label class="form-file-label">
        <input type="file" style="display:none;" />
        <span class="form-file-btn"${lgStyle}>Choose file ${icnChevronDown('currentColor')}</span>
        <span class="form-file-placeholder"${lgStyle}>No file chosen</span>
      </label>
      ${helpEl}
    </div>`;
  }

  if (type === 'drag') {
    return `<div>
      ${labelEl}
      <div class="form-file-drop">
        ${icnCloud()}
        <div class="form-file-drop__hint">Click to upload or drag and drop</div>
        <div class="form-file-drop__formats">SVG, PNG, JPG or GIF (MAX. 800×400px)</div>
      </div>
      ${helpEl}
    </div>`;
  }

  if (type === 'drag-btn') {
    return `<div>
      ${labelEl}
      <div class="form-file-drop">
        ${icnCloud()}
        <div class="form-file-drop__hint">Click to upload or drag and drop</div>
        <div class="form-file-drop__formats" style="font-weight:var(--font-semibold);">Max. File Size: 30MB</div>
        <button class="btn btn-blue btn-sm" style="display:flex;align-items:center;gap:6px;">${icnSearch('#fff')} Browse File</button>
      </div>
      ${helpEl}
    </div>`;
  }

  return '';
}

// ─── Tag Input (13731:79044) — real .form-tag-* classes ───────────────────────
function tagInput({ label = true, help = false, tags = ['bonnie.green@company.com', 'jese.leos@company.com'] }) {
  // Figma: label "Tags" is 16px (not the 14px form-label default)
  const labelEl = label ? `<label class="form-label" style="font-size:16px;">Tags</label>` : '';
  const helpEl  = help  ? `<p class="form-helper">A note for extra info</p>` : '';

  const tagEls = tags.map(t =>
    `<span class="form-tag">${t}<button class="form-tag__x" aria-label="Remove ${t}">${icnXSm('#6b7280')}</button></span>`
  ).join('');

  return `<div>
    ${labelEl}
    <div class="form-tag-wrap">
      ${tagEls}
      <input type="text" class="form-tag-input" placeholder="Add tag..." />
    </div>
    ${helpEl}
  </div>`;
}

// ─── Read-only (9481:135673) — real .form-readonly classes ───────────────────
function readOnly({ fieldLabel = 'Email:', value = 'namesurname@company.com' }) {
  return `<div class="form-readonly">
    <span class="form-readonly__label">${fieldLabel}</span>
    <span class="form-readonly__value">${value}</span>
    ${icnChevronDown('#d1d5db')}
  </div>`;
}

// ─── Combined full form (Interactive) ─────────────────────────────────────────
function fullForm(args) {
  const { fieldState, size, showIcon, showHelp } = args;
  const helpText = showHelp ? "We'll never share your details. See our Privacy Policy." : '';
  return `<div style="display:flex;flex-direction:column;gap:20px;max-width:400px;font-family:inherit;">
    ${inputField({ label: 'First name', placeholder: 'Enter your first name', value: fieldState === 'typing' ? 'John' : '', state: fieldState, size, icon: showIcon, helpText })}
    ${inputField({ label: 'Last name',  placeholder: 'Enter your last name',  value: fieldState === 'typing' ? 'Doe' : '', state: fieldState === 'normal' ? 'normal' : 'normal', size, icon: false, helpText })}
    ${inputField({ label: 'Email address', placeholder: 'name@company.com', value: '', state: fieldState === 'error' ? 'error' : 'normal', size, icon: false, helpText: fieldState === 'error' ? 'Please enter a valid email address.' : helpText })}
  </div>`;
}

// ─── Default export ────────────────────────────────────────────────────────────
export default {
  title: 'Iris Library/Forms',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Forms** collects the core form input elements used across the Iris Library: Input Field, Floating Label, Textarea, File Upload, Tag Input, and Read-only display.

**When to use**
- Any user-facing form: sign-up, settings, contact, checkout
- Filtering and search configuration panels
- Inline editing within data tables or cards

**When NOT to use**
- For single-item selection from a list → use **Dropdown** or **Select**
- For toggle/checkbox/radio → use **Controls**
- For multi-value selection → use **Multiselect** or **Tag Input**

**Anatomy (Input Field)**
- Label (required) — \`font-size:14px font-weight:500\`
- Input container — \`height:37px/42px/52px\`, bg \`var(--color-bg-tertiary)\`, border \`var(--color-border-default)\`
- Leading icon (optional) — 16×16px
- Input text or placeholder
- Clear × button (shown when value present)
- Helper/caption text — \`font-size:12px\`, color varies by state

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    fieldState: {
      control: 'select',
      options: ['normal', 'typing', 'active', 'success', 'error', 'disabled'],
      description: 'Input state. Affects border color and text color. Keyboard: Tab moves focus (triggering active); Escape clears active state.',
      table: { category: 'State', defaultValue: { summary: 'normal' } },
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
      description: 'Input height. `small`=37px, `regular`=42px, `large`=52px.',
      table: { category: 'Appearance', defaultValue: { summary: 'regular' } },
    },
    showIcon: {
      control: 'boolean',
      description: 'Show leading icon (user icon) inside the input.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
    showHelp: {
      control: 'boolean',
      description: 'Show helper/caption text below the input.',
      table: { category: 'Appearance', defaultValue: { summary: true } },
    },
  },
  args: {
    fieldState: 'normal',
    size: 'regular',
    showIcon: false,
    showHelp: true,
  },
};

// ─── Interactive (Controls) ───────────────────────────────────────────────────
export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;
    const sizeCls  = a.size === 'small' ? ' form-input-sm' : a.size === 'large' ? ' form-input-lg' : '';
    const stateCls = a.fieldState === 'error' ? ' is-error' : a.fieldState === 'success' ? ' is-success' : '';
    const disAttr  = a.fieldState === 'disabled' ? ' disabled' : '';
    const feedback = a.fieldState === 'error' ? 'form-feedback-error' : a.fieldState === 'success' ? 'form-feedback-success' : 'form-helper';

    const htmlCode = `<div class="form-group">\n  <label class="form-label">First name</label>\n  <input type="text" class="form-input${sizeCls}${stateCls}" placeholder="Enter your first name"${disAttr} />\n  <p class="${feedback}">We'll never share your details.</p>\n</div>`;

    const reactCode = `<div className="form-group">\n  <label className="form-label">First name</label>\n  <input\n    type="text"\n    className="form-input${sizeCls}${stateCls}"\n    value={name}\n    onChange={(e) => setName(e.target.value)}\n    placeholder="Enter your first name"${a.fieldState === 'disabled' ? '\n    disabled' : ''}\n  />\n  <p className="${feedback}">We'll never share your details.</p>\n</div>`;

    const componentCode = `export function FormField({ label, value, onChange, helpText, fieldState = 'default', size = 'regular', disabled = false }) {\n  const sizeClass  = size === 'small' ? ' form-input-sm' : size === 'large' ? ' form-input-lg' : '';\n  const stateClass = fieldState === 'error' ? ' is-error' : fieldState === 'success' ? ' is-success' : '';\n  const feedback   = fieldState === 'error' ? 'form-feedback-error' : fieldState === 'success' ? 'form-feedback-success' : 'form-helper';\n\n  return (\n    <div className="form-group">\n      <label className="form-label">{label}</label>\n      <input\n        type="text"\n        className={"form-input" + sizeClass + stateClass}\n        value={value}\n        onChange={(e) => onChange?.(e.target.value)}\n        disabled={disabled}\n      />\n      {helpText && <p className={feedback}>{helpText}</p>}\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${fullForm(args)}
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
        story: 'Use **Controls** to configure the field. The preview, the HTML/React panels, and the **Show code** snippet all render the real `form-input` class — copy any of them and you get the shippable component.',
      },
      source: {
        transform: (_src, ctx) => {
          const a = ctx.args;
          const sizeCls  = a.size === 'small' ? ' form-input-sm' : a.size === 'large' ? ' form-input-lg' : '';
          const stateCls = a.fieldState === 'error' ? ' is-error' : a.fieldState === 'success' ? ' is-success' : '';
          const disAttr  = a.fieldState === 'disabled' ? ' disabled' : '';
          const feedback = a.fieldState === 'error' ? 'form-feedback-error' : a.fieldState === 'success' ? 'form-feedback-success' : 'form-helper';
          return `<div class="form-group">\n  <label class="form-label">First name</label>\n  <input type="text" class="form-input${sizeCls}${stateCls}" placeholder="Enter your first name"${disAttr} />\n  <p class="${feedback}">We'll never share your details.</p>\n</div>`;
        },
      },
    },
  },
};

// ─── Gallery: All states ──────────────────────────────────────────────────────
export const AllStates = {
    name: 'Input — all states',
  args: { size: 'regular' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `Class-based input states at the selected size. \`success\`→\`is-success\`, \`error\`→\`is-error\`. Focus is a live \`:focus\` state (click a field) — it is not a class.

✅ Use \`error\` state together with a helper message explaining what went wrong
✅ Use \`success\` for real-time validation (email, username availability)
❌ Don't show \`success\` state before the user has finished typing`,
      },
      source: {
        code: `<!-- Normal -->
<div class="form-group">
  <input class="form-input" placeholder="First name" />
</div>

<!-- Success -->
<div class="form-group">
  <input class="form-input is-success" value="John" />
  <p class="form-feedback-success">Great, that username is available!</p>
</div>

<!-- Error -->
<div class="form-group">
  <input class="form-input is-error" placeholder="First name" />
  <p class="form-feedback-error">Please enter your first name.</p>
</div>

<!-- Disabled -->
<div class="form-group">
  <input class="form-input" disabled />
</div>`,
      },
    },
  },
  render: ({ size }) => {
    const states = [
      { state: 'normal',   label: 'Normal',   value: '',       help: "We'll never share your details." },
      { state: 'normal',   label: 'Filled',   value: 'John',   help: '' },
      { state: 'success',  label: 'Success',  value: 'John',   help: 'Great, that username is available!' },
      { state: 'error',    label: 'Error',    value: '',       help: 'Please enter your first name.' },
      { state: 'disabled', label: 'Disabled', value: '',       help: '' },
    ];
    return `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:800px;font-family:inherit;">
      ${states.map(s => `<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${s.label}</div>
        ${inputField({ label: 'First name', placeholder: 'Input text', value: s.value, state: s.state, size, helpText: s.help })}
      </div>`).join('')}
    </div>`;
  },
};

// ─── Gallery: All sizes ───────────────────────────────────────────────────────
export const AllSizes = {
    name: 'Input — all sizes',
  args: { fieldState: 'normal' },
  parameters: {
    controls: { include: ['fieldState'] },
    docs: {
      description: {
        story: 'Three input heights from Figma. **Small** (37px) for dense data tables; **Regular** (42px) for standard forms; **Large** (52px) for prominent CTAs or hero sections.',
      },
      source: {
        code: `<!-- Small -->
<input class="form-input form-input-sm" placeholder="First name" />

<!-- Regular (default) -->
<input class="form-input" placeholder="First name" />

<!-- Large -->
<input class="form-input form-input-lg" placeholder="First name" />`,
      },
    },
  },
  render: ({ fieldState }) => {
    return `<div style="display:flex;flex-direction:column;gap:20px;max-width:380px;font-family:inherit;">
      ${['small','regular','large'].map(s =>
        `<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:6px;font-family:inherit;">${s.charAt(0).toUpperCase()+s.slice(1)} (${s==='small'?37:s==='large'?52:42}px)</div>
          ${inputField({ label: 'First name', placeholder: 'Input text', state: fieldState, size: s })}
        </div>`
      ).join('')}
    </div>`;
  },
};

// ─── Gallery: Floating Label ──────────────────────────────────────────────────
export const FloatingLabels = {
    name: 'Floating Label — all states',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Floating label floats above the input when active. Two styles: **Border bottom** (minimal, for clean dashboards) and **Background** (filled, for form cards).

✅ Use border-bottom style in data-heavy tables or compact forms
✅ Use background style in modal dialogs and settings panels
❌ Don't mix border-bottom and background styles within a single form`,
      },
      source: {
        language: 'html',
        code: `<!-- Background style — label floats on focus / value -->
<div class="form-floating">
  <input type="text" class="form-input" placeholder=" " />
  <label class="form-float-label">Placeholder text</label>
</div>

<!-- Underline (border-bottom) style -->
<div class="form-floating form-floating--underline">
  <input type="text" class="form-input" placeholder=" " value="Typing" />
  <label class="form-float-label">Placeholder text</label>
</div>

<!-- Error state -->
<div class="form-floating">
  <input type="text" class="form-input is-error" placeholder=" " value="Typing" />
  <label class="form-float-label">Placeholder text</label>
</div>
<p class="form-feedback-error">Oh, snapp! Some helper message</p>`,
      },
    },
  },
  render: () => {
    const states = ['initial','typing','success','danger','disabled'];
    const types  = ['border-bottom','background'];
    return `<div style="display:flex;flex-direction:column;gap:32px;font-family:inherit;">
      ${types.map(tp => `
        <div>
          <div style="font-size:11px;font-weight:600;color:var(--color-text-primary);margin-bottom:16px;font-family:inherit;text-transform:uppercase;letter-spacing:0.05em;">
            ${tp === 'border-bottom' ? 'Border bottom' : 'Background fill'}
          </div>
          <div style="display:grid;grid-template-columns:repeat(5,180px);gap:16px;">
            ${states.map(st => `<div>
              <div style="font-size:10px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${st.charAt(0).toUpperCase()+st.slice(1)}</div>
              ${floatingLabel({ state: st, type: tp })}
            </div>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>`;
  },
};

// ─── Gallery: Textarea types ──────────────────────────────────────────────────
export const TextareaTypes = {
    name: 'Textarea — all types',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `4 textarea variants from Figma.

- **Default** — plain multiline input for feedback forms
- **CTA + Button** — with formatting toolbar and Post/Preview buttons (comments, replies)
- **WYSIWYG** — rich text editor with icon toolbar + Send button (articles, docs)
- **Chatroom** — horizontal bar with photo/emoji actions (messaging UIs)

✅ Use **Chatroom** only in full-height chat layouts where the bar sticks to the bottom
❌ Don't use **WYSIWYG** for short user inputs like names or addresses`,
      },
      source: {
        language: 'html',
        code: `<!-- Default textarea -->
<label class="form-label">Your message</label>
<textarea class="form-textarea" placeholder="Write text here ..."></textarea>

<!-- CTA + Button footer (composite) -->
<div style="border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;">
  <textarea class="form-textarea" style="border:none;border-radius:0;resize:none;"></textarea>
  <div style="border-top:1px solid var(--color-border-default);padding:10px 12px;background:var(--color-bg-tertiary);display:flex;justify-content:space-between;">
    <!-- .btn-icon formatting buttons -->
    <div style="display:flex;gap:8px;">
      <button class="btn btn-outline-dark btn-sm">Preview</button>
      <button class="btn btn-blue btn-sm">Post comment</button>
    </div>
  </div>
</div>

<!-- Chatroom bar (composite) -->
<div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--color-bg-tertiary);border-top:1px solid var(--color-border-default);">
  <button class="btn-icon" aria-label="Attach photo"><!-- icon --></button>
  <input type="text" class="form-input" style="background:var(--color-bg-white);" placeholder="Write text here ..." />
  <button class="btn-icon" aria-label="Send"><!-- icon --></button>
</div>`,
      },
    },
  },
  render: () => {
    const types = [
      { type: 'default',  title: 'Default' },
      { type: 'cta',      title: 'CTA + Button' },
      { type: 'wysiwyg',  title: 'WYSIWYG editor' },
      { type: 'chatroom', title: 'Chatroom' },
    ];
    return `<div style="display:flex;flex-direction:column;gap:32px;max-width:540px;font-family:inherit;">
      ${types.map(t => `<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${t.title}</div>
        ${textarea({ type: t.type })}
      </div>`).join('')}
    </div>`;
  },
};

// ─── Gallery: File Upload types ───────────────────────────────────────────────
export const FileUploadTypes = {
    name: 'File Upload — all types',
  args: { size: 'default' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `4 file upload variants. **Default** suits form rows; **Drag & Drop** suits profile/media upload pages.

✅ Always show accepted file formats and size limits
✅ Use "Browse File" button in drag-and-drop when the drop zone is the primary action
❌ Don't use drag-and-drop in compact forms or mobile-first layouts — use the default style instead`,
      },
      source: {
        language: 'html',
        code: `<!-- Default file input -->
<label class="form-label">Upload file</label>
<label class="form-file-label">
  <input type="file" style="display:none;" />
  <span class="form-file-btn">Choose file</span>
  <span class="form-file-placeholder">No file chosen</span>
</label>
<p class="form-helper">A note for extra info</p>

<!-- Drag & Drop zone -->
<div class="form-file-drop">
  <!-- cloud icon -->
  <div class="form-file-drop__hint">Click to upload or drag and drop</div>
  <div class="form-file-drop__formats">SVG, PNG, JPG or GIF (MAX. 800×400px)</div>
</div>

<!-- Drag & Drop + Button -->
<div class="form-file-drop">
  <!-- cloud icon -->
  <div class="form-file-drop__hint">Click to upload or drag and drop</div>
  <button class="btn btn-blue btn-sm">Browse File</button>
</div>`,
      },
    },
  },
  render: ({ size }) => {
    const types = [
      { type: 'default',  title: 'Default' },
      { type: 'default',  title: 'Default — LG', size: 'lg' },
      { type: 'drag',     title: 'Drag & Drop' },
      { type: 'drag-btn', title: 'Drag & Drop + Button' },
    ];
    return `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;max-width:540px;font-family:inherit;">
      ${types.map(t => `<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${t.title}</div>
        ${fileUpload({ type: t.type, size: t.size || size })}
      </div>`).join('')}
    </div>`;
  },
};

// ─── Gallery: Tag Input ───────────────────────────────────────────────────────
export const TagInputVariants = {
    name: 'Tag Input — variants',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Tag (multi-value) input field for email addresses, keywords, or labels. Tags render as dismissible pills inside the input.

✅ Use for email recipient fields, label assignment, keyword tagging
❌ Don't use for mutually-exclusive options — use Radio or Select instead`,
      },
      source: {
        language: 'html',
        code: `<label class="form-label" style="font-size:16px;">Tags</label>
<div class="form-tag-wrap">
  <span class="form-tag">
    bonnie.green@company.com
    <button class="form-tag__x" aria-label="Remove bonnie.green@company.com">×</button>
  </span>
  <input type="text" class="form-tag-input" placeholder="Add tag..." />
</div>
<p class="form-helper">A note for extra info</p>`,
      },
    },
  },
  render: () => {
    const variants = [
      { label: true,  help: false, title: 'With label' },
      { label: false, help: false, title: 'No label' },
      { label: true,  help: true,  title: 'With label + helper' },
      { label: false, help: true,  title: 'Helper only' },
    ];
    return `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px;max-width:700px;font-family:inherit;">
      ${variants.map(v => `<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${v.title}</div>
        ${tagInput({ label: v.label, help: v.help })}
      </div>`).join('')}
    </div>`;
  },
};

// ─── Gallery: Read-only ───────────────────────────────────────────────────────
export const ReadOnlyField = {
    name: 'Read-only field',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Inline read-only display: label + value + disabled chevron. Use in profile summaries or confirmation screens where the user cannot edit the value.

✅ Always pair with an "Edit" affordance nearby if the value is editable elsewhere
❌ Don't use inside dense data tables — use plain text cells instead`,
      },
      source: {
        language: 'html',
        code: `<div class="form-readonly">
  <span class="form-readonly__label">Email:</span>
  <span class="form-readonly__value">namesurname@company.com</span>
  <!-- disabled chevron (#d1d5db) -->
</div>`,
      },
    },
  },
  render: () => {
    const items = [
      { fieldLabel: 'Email:',    value: 'namesurname@company.com' },
      { fieldLabel: 'Username:', value: 'bonnie.green' },
      { fieldLabel: 'Role:',     value: 'Administrator' },
    ];
    return `<div style="display:flex;flex-direction:column;gap:12px;font-family:inherit;">
      ${items.map(i => readOnly(i)).join('')}
    </div>`;
  },
};
