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

// ─── Input Field (84:19064) ───────────────────────────────────────────────────
function inputField({ label = 'First name', placeholder = 'Input text', value = '', state = 'normal', size = 'regular', helpText = '', icon = false }) {
  const h = size === 'small' ? 37 : size === 'large' ? 52 : 42;
  const isDisabled = state === 'disabled';
  const isError    = state === 'error';
  const isSuccess  = state === 'success';
  const isFocus    = state === 'typing' || state === 'active';
  const textColor  = isDisabled ? C.disabled : (value ? C.value : C.placeholder);
  const border     = isError ? C.borderErr : isSuccess ? C.borderOk : isFocus ? C.borderFocus : C.borderDef;
  const opacity    = isDisabled ? '0.6' : '1';
  const iconColor  = isDisabled ? C.disabled : C.placeholder;
  const displayVal = value || placeholder;

  const labelEl = label ? `<div style="font-size:14px;font-weight:500;color:${C.label};margin-bottom:6px;font-family:inherit;">${label}</div>` : '';
  const leftIcon = icon ? `<span style="flex-shrink:0;display:flex;align-items:center;">${icnUser(iconColor)}</span>` : '';
  const clearIcon = (value && !isDisabled) ? `<span style="flex-shrink:0;display:flex;align-items:center;cursor:pointer;">${icnX(C.label)}</span>` : '';

  const helpColor = isError ? C.captionErr : isSuccess ? C.captionOk : C.help;
  const helpEl = helpText ? `<div style="font-size:12px;color:${helpColor};margin-top:4px;font-family:inherit;">${helpText}</div>` : '';

  return `<div style="font-family:inherit;opacity:${opacity};">
    ${labelEl}
    <div style="display:flex;align-items:center;gap:8px;height:${h}px;padding:0 12px;
      background:${C.inputBg};border:1px solid ${border};border-radius:8px;
      box-sizing:border-box;width:100%;">
      ${leftIcon}
      <span style="flex:1;font-size:14px;color:${textColor};font-family:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${isFocus && value ? value + '|' : displayVal}</span>
      ${clearIcon}
    </div>
    ${helpEl}
  </div>`;
}

// ─── Floating Label (84:20015) ────────────────────────────────────────────────
function floatingLabel({ state = 'initial', type = 'border-bottom', placeholder = 'Placeholder text' }) {
  const isActive  = state === 'active' || state === 'typing';
  const isSuccess = state === 'success';
  const isDanger  = state === 'danger';
  const isDisabled = state === 'disabled';

  const borderColor = isDanger ? C.captionErr : isSuccess ? C.captionOk : isActive ? C.borderFocus : C.borderDef;
  const labelColor  = isDanger ? C.captionErr : isSuccess ? C.captionOk : isActive ? C.borderFocus : C.placeholder;
  const captionText = isDanger ? 'Oh, snapp! Some helper message' : isSuccess ? 'Oh, snapp! Some helper message' : '';
  const captionColor = isDanger ? C.captionErr : C.captionOk;

  const isBg = type === 'background';
  const inputBg = isBg ? (isActive ? '#eff6ff' : C.inputBg) : 'transparent';
  const borderStyle = isBg ? `border:1px solid ${borderColor};border-radius:8px;` : `border-bottom:2px solid ${borderColor};`;
  const opacity = isDisabled ? '0.5' : '1';

  const floatLabel = isActive || isSuccess || isDanger
    ? `<div style="font-size:12px;font-weight:500;color:${labelColor};margin-bottom:2px;font-family:inherit;">${placeholder}</div>` : '';

  const textColor = isDisabled ? C.disabled : (isActive || isSuccess || isDanger ? C.value : C.placeholder);
  const displayText = isActive ? (type === 'border-bottom' ? 'Typing |' : placeholder) : placeholder;

  return `<div style="opacity:${opacity};font-family:inherit;">
    <div style="position:relative;${borderStyle}background:${inputBg};padding:${isActive || isSuccess || isDanger ? '6px 12px 8px' : '12px 12px'};box-sizing:border-box;">
      ${floatLabel}
      <div style="display:flex;align-items:center;gap:8px;">
        ${icnSearch(isDisabled ? C.disabled : C.placeholder)}
        <span style="font-size:14px;color:${textColor};font-family:inherit;">${displayText}</span>
        ${icnX(isDisabled ? C.disabled : C.placeholder)}
      </div>
    </div>
    ${captionText ? `<div style="font-size:12px;color:${captionColor};margin-top:4px;font-family:inherit;">${captionText}</div>` : ''}
  </div>`;
}

// ─── Textarea (84:19693) ──────────────────────────────────────────────────────
function textarea({ type = 'default', label = 'Your message', placeholder = 'Write text here ...', help = 'A note for extra info' }) {
  const base = (content, footer = '') => `<div style="font-family:inherit;">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
      <span style="font-size:14px;font-weight:500;color:${C.label};font-family:inherit;">${label}</span>
      <span style="font-size:12px;color:${C.help};font-family:inherit;">${help}</span>
    </div>
    ${content}
    ${footer}
  </div>`;

  const textareaBox = `<textarea style="width:100%;height:120px;padding:10px 12px;background:${C.inputBg};border:1px solid ${C.borderDef};border-radius:8px;font-size:14px;color:${C.placeholder};font-family:inherit;resize:vertical;box-sizing:border-box;outline:none;" placeholder="${placeholder}"></textarea>`;

  if (type === 'default') {
    return base(textareaBox);
  }

  if (type === 'cta') {
    const footer = `<div style="border-top:1px solid ${C.borderDef};padding:10px 12px;background:${C.footerBg};display:flex;justify-content:space-between;align-items:center;border-radius:0 0 8px 8px;">
      <div style="display:flex;gap:8px;">
        <button style="background:none;border:none;cursor:pointer;padding:4px;">${icnBold()}</button>
        <button style="background:none;border:none;cursor:pointer;padding:4px;">${icnItalic()}</button>
        <button style="background:none;border:none;cursor:pointer;padding:4px;">${icnLink()}</button>
      </div>
      <div style="display:flex;gap:8px;">
        <button style="height:34px;padding:0 14px;background:transparent;border:1px solid ${C.borderDef};border-radius:8px;font-size:12px;font-weight:500;color:${C.label};cursor:pointer;font-family:inherit;">Preview</button>
        <button style="height:34px;padding:0 14px;background:${C.btnBlue};border:none;border-radius:8px;font-size:12px;font-weight:500;color:#fff;cursor:pointer;font-family:inherit;">Post comment</button>
      </div>
    </div>`;
    const box = `<div style="border:1px solid ${C.borderDef};border-radius:8px;overflow:hidden;">
      <textarea style="width:100%;height:120px;padding:10px 12px;background:${C.inputBg};border:none;font-size:14px;color:${C.placeholder};font-family:inherit;resize:none;box-sizing:border-box;outline:none;" placeholder="${placeholder}"></textarea>
      ${footer}
    </div>`;
    return `<div style="font-family:inherit;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
        <span style="font-size:14px;font-weight:500;color:${C.label};font-family:inherit;">${label}</span>
        <span style="font-size:12px;color:${C.help};font-family:inherit;">${help}</span>
      </div>
      ${box}
    </div>`;
  }

  if (type === 'wysiwyg') {
    const toolbar = `<div style="display:flex;align-items:center;gap:6px;padding:8px 12px;background:${C.toolbarBg};border-bottom:1px solid ${C.borderDef};">
      <button style="background:none;border:none;cursor:pointer;padding:3px;">${icnBold()}</button>
      <button style="background:none;border:none;cursor:pointer;padding:3px;">${icnItalic()}</button>
      <div style="width:1px;height:16px;background:${C.borderDef};margin:0 2px;"></div>
      <button style="background:none;border:none;cursor:pointer;padding:3px;">${icnLink()}</button>
      <div style="width:1px;height:16px;background:${C.borderDef};margin:0 2px;"></div>
      <button style="background:none;border:none;cursor:pointer;padding:3px;">${icnSearch(C.label)}</button>
    </div>`;
    const editor = `<div style="border:1px solid ${C.borderDef};border-radius:8px;overflow:hidden;">
      ${toolbar}
      <textarea style="width:100%;height:120px;padding:10px 12px;background:var(--color-bg-white);border:none;font-size:14px;color:${C.placeholder};font-family:inherit;resize:none;box-sizing:border-box;outline:none;" placeholder="${placeholder}"></textarea>
    </div>`;
    const sendBtn = `<div style="margin-top:8px;display:flex;justify-content:flex-end;">
      <button style="height:40px;padding:0 16px;background:${C.btnBlue};border:none;border-radius:8px;font-size:12px;font-weight:600;color:#fff;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:6px;">
        ${icnPlane('#fff')} Send message
      </button>
    </div>`;
    return `<div style="font-family:inherit;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
        <span style="font-size:14px;font-weight:500;color:${C.label};font-family:inherit;">${label}</span>
        <span style="font-size:12px;color:${C.help};font-family:inherit;">${help}</span>
      </div>
      ${editor}${sendBtn}
    </div>`;
  }

  if (type === 'chatroom') {
    return `<div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:${C.inputBg};border-top:1px solid ${C.borderDef};font-family:inherit;">
      <button style="background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;display:flex;">${icnPhoto()}</button>
      <button style="background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;display:flex;">${icnEmoji()}</button>
      <div style="flex:1;background:var(--color-bg-white);border:1px solid ${C.borderDef};border-radius:8px;padding:10px 12px;">
        <span style="font-size:14px;color:${C.placeholder};font-family:inherit;">${placeholder}</span>
      </div>
      <button style="background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;display:flex;">${icnPlane()}</button>
    </div>`;
  }

  return textareaBox;
}

// ─── File Upload (84:19626) ───────────────────────────────────────────────────
function fileUpload({ type = 'default', size = 'default', label = 'Upload file', help = 'A note for extra info' }) {
  const h = size === 'lg' ? 52 : 42;
  const labelEl = `<div style="font-size:14px;font-weight:500;color:${C.label};margin-bottom:6px;font-family:inherit;">${label}</div>`;
  const helpEl  = `<div style="font-size:12px;color:${C.help};margin-top:4px;font-family:inherit;">${help}</div>`;

  if (type === 'default') {
    return `<div style="font-family:inherit;">
      ${labelEl}
      <div style="display:flex;height:${h}px;border:1px solid ${C.borderDef};border-radius:8px;overflow:hidden;box-sizing:border-box;">
        <div style="display:flex;align-items:center;justify-content:center;gap:6px;padding:0 16px;background:${C.btnDark};cursor:pointer;flex-shrink:0;">
          <span style="font-size:14px;font-weight:500;color:var(--color-bg-white);white-space:nowrap;font-family:inherit;">Choose file</span>
          ${icnChevronDown('var(--color-bg-white)')}
        </div>
        <div style="flex:1;display:flex;align-items:center;padding:0 12px;background:${C.inputBg};">
          <span style="font-size:14px;color:${C.placeholder};font-family:inherit;">No file chosen</span>
        </div>
      </div>
      ${helpEl}
    </div>`;
  }

  if (type === 'drag') {
    return `<div style="font-family:inherit;">
      ${labelEl}
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:32px;
        background:${C.inputBg};border:2px dashed ${C.dragBorder};border-radius:8px;text-align:center;">
        ${icnCloud()}
        <div style="font-size:14px;color:${C.help};font-family:inherit;">Click to upload or drag and drop</div>
        <div style="font-size:12px;color:${C.help};font-family:inherit;">SVG, PNG, JPG or GIF (MAX. 800×400px)</div>
      </div>
      ${helpEl}
    </div>`;
  }

  if (type === 'drag-btn') {
    return `<div style="font-family:inherit;">
      ${labelEl}
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:32px;
        background:${C.inputBg};border:2px dashed ${C.dragBorder};border-radius:8px;text-align:center;">
        ${icnCloud()}
        <div style="font-size:14px;color:${C.help};font-family:inherit;">Click to upload or drag and drop</div>
        <div style="font-size:12px;font-weight:600;color:${C.help};font-family:inherit;">Max. File Size: 30MB</div>
        <button style="height:34px;padding:0 14px;background:${C.btnBlue};border:none;border-radius:8px;font-size:12px;font-weight:500;color:#fff;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:6px;">
          ${icnSearch('#fff')} Browse File
        </button>
      </div>
      ${helpEl}
    </div>`;
  }

  return '';
}

// ─── Tag Input (13731:79044) ──────────────────────────────────────────────────
function tagInput({ label = true, help = false, tags = ['bonnie.green@company.com', 'jese.leos@company.com'] }) {
  const labelEl = label ? `<div style="font-size:16px;font-weight:500;color:${C.label};margin-bottom:6px;font-family:inherit;">Tags</div>` : '';
  const helpEl  = help  ? `<div style="font-size:12px;color:${C.help};margin-top:4px;font-family:inherit;">A note for extra info</div>` : '';

  const tagEls = tags.map(t =>
    `<div style="display:inline-flex;align-items:center;gap:6px;padding:2px 8px;background:${C.tagBg};border-radius:4px;">
      <span style="font-size:12px;font-weight:500;color:${C.tagText};font-family:inherit;">${t}</span>
      <span style="cursor:pointer;display:flex;align-items:center;">${icnXSm(C.tagText)}</span>
    </div>`
  ).join('');

  return `<div style="font-family:inherit;">
    ${labelEl}
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:8px 12px;min-height:46px;
      background:var(--color-bg-white);border:1px solid ${C.borderDef};border-radius:8px;box-sizing:border-box;">
      ${tagEls}
      <input type="text" placeholder="Add tag..." style="border:none;outline:none;font-size:12px;color:${C.placeholder};background:transparent;min-width:80px;font-family:inherit;" />
    </div>
    ${helpEl}
  </div>`;
}

// ─── Read-only (9481:135673) ──────────────────────────────────────────────────
function readOnly({ fieldLabel = 'Email:', value = 'namesurname@company.com' }) {
  return `<div style="display:inline-flex;align-items:center;gap:8px;font-family:inherit;">
    <span style="font-size:14px;font-weight:500;color:${C.label};white-space:nowrap;">${fieldLabel}</span>
    <span style="font-size:14px;color:${C.value};">${value}</span>
    ${icnChevronDown(C.borderDef)}
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
    const h = a.size === 'small' ? 37 : a.size === 'large' ? 52 : 42;
    const border = a.fieldState === 'error' ? '#f05252' : a.fieldState === 'success' ? '#0e9f6e' : a.fieldState === 'typing' || a.fieldState === 'active' ? 'var(--color-primary)' : 'var(--color-border-default)';

    const htmlCode = `<div style="margin-bottom:16px;">\n  <label style="display:block;font-size:var(--text-sm);font-weight:var(--font-medium);margin-bottom:4px;">First name</label>\n  <input type="text"\n    style="height:${h}px;border-color:${border};padding:0 12px;width:100%;background:var(--color-bg-tertiary);border:1px solid;border-radius:8px;"\n    placeholder="Enter your first name"\n    ${a.fieldState === 'disabled' ? 'disabled' : ''}\n  />\n  <p style="font-size:var(--text-xs);color:#6b7280;margin-top:4px;">Helper text</p>\n</div>`;

    const reactCode = `<div style={{ marginBottom: '16px' }}>\n  <label style={{ fontWeight: 'var(--font-medium)' }}>First name</label>\n  <input\n    type="text"\n    value={name}\n    onChange={(e) => setName(e.target.value)}\n    placeholder="Enter your first name"\n    style={{\n      height: '${h}px',\n      borderColor: '${border}',\n      borderRadius: '8px',\n    }}\n    disabled={${a.fieldState === 'disabled'}}\n  />\n  <p style={{ fontSize: 'var(--text-xs)' }}>Helper text</p>\n</div>`;

    const componentCode = `export function FormField({ label, value, onChange, fieldState = 'default', size = 'regular', disabled = false }) {\n  const h = size === 'small' ? 37 : size === 'large' ? 52 : 42;\n  const borderColor = fieldState === 'error' ? '#f05252' : fieldState === 'success' ? '#0e9f6e' : fieldState === 'active' ? 'var(--color-primary)' : 'var(--color-border-default)';\n\n  return (\n    <div style={{ marginBottom: '16px' }}>\n      <label style={{ fontWeight: 'var(--font-medium)' }}>{label}</label>\n      <input\n        type="text"\n        value={value}\n        onChange={(e) => onChange?.(e.target.value)}\n        style={{\n          height: h,\n          borderColor: borderColor,\n          width: '100%',\n          padding: '0 12px',\n          borderRadius: '8px',\n        }}\n        disabled={disabled}\n      />\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${fullForm(args)}
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
        story: 'Use **Controls** to test different field states: default, active, typing, success, error, disabled.',
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
        story: `All 6 input states side-by-side at the selected size.

✅ Use \`error\` state together with a helper message explaining what went wrong
✅ Use \`success\` for real-time validation (email, username availability)
❌ Don't show \`success\` state before the user has finished typing`,
      },
      source: {
        code: `<!-- Normal -->
<div><input style="border:1px solid var(--color-border-default);" /></div>

<!-- Focus / typing -->
<div><input style="border:1px solid var(--color-primary);" /></div>

<!-- Success -->
<div><input style="border:1px solid #0e9f6e;" /></div>

<!-- Error -->
<div><input style="border:1px solid #f05252;" /></div>

<!-- Disabled -->
<div><input disabled style="border:1px solid var(--color-border-default);opacity:0.6;" /></div>`,
      },
    },
  },
  render: ({ size }) => {
    const states = [
      { state: 'normal',   label: 'Normal',   value: '',       help: "We'll never share your details." },
      { state: 'typing',   label: 'Typing',   value: 'John',   help: '' },
      { state: 'success',  label: 'Success',  value: 'John',   help: 'Great, that username is available!' },
      { state: 'error',    label: 'Error',    value: '',       help: 'Please enter your first name.' },
      { state: 'disabled', label: 'Disabled', value: '',       help: '' },
      { state: 'active',   label: 'Active',   value: '',       help: '' },
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
        code: `<!-- Small 37px -->
<input style="height:37px;" class="..." />

<!-- Regular 42px (default) -->
<input style="height:42px;" class="..." />

<!-- Large 52px -->
<input style="height:52px;" class="..." />`,
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
        code: `<!-- Border bottom — initial -->
<div style="border-bottom:2px solid var(--color-border-default);padding:12px;">
  <span style="color:#6b7280;font-size:14px;">Placeholder text</span>
</div>

<!-- Border bottom — active (label floated) -->
<div style="border-bottom:2px solid var(--color-primary);padding:6px 0 8px;">
  <div style="font-size:12px;font-weight:500;color:var(--color-primary);">Placeholder text</div>
  <span style="color:#111928;font-size:14px;">Typing |</span>
</div>`,
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
        code: `<!-- Default textarea -->
<textarea class="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm resize-y"></textarea>

<!-- Chatroom bar -->
<div class="flex items-center gap-2 p-3 bg-gray-50 border-t border-gray-200">
  <!-- photo / emoji icons -->
  <textarea class="flex-1 bg-white border border-gray-300 rounded-lg p-2 text-sm resize-none"></textarea>
  <!-- send icon -->
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
        code: `<!-- Default file input -->
<input type="file" class="hidden" id="file" />
<label for="file" style="height:42px;display:flex;border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;">
  <span style="background:#1f2a37;color:#fff;padding:0 16px;display:flex;align-items:center;">Choose file</span>
  <span style="background:var(--color-bg-tertiary);padding:0 12px;display:flex;align-items:center;color:#6b7280;">No file chosen</span>
</label>

<!-- Drag & Drop zone -->
<div style="border:2px dashed var(--color-border-default);border-radius:8px;background:var(--color-bg-tertiary);padding:32px;text-align:center;">
  <!-- cloud icon -->
  <p>Click to upload or drag and drop</p>
  <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800×400px)</p>
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
    return `<div style="display:flex;flex-direction:column;gap:24px;max-width:540px;font-family:inherit;">
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
        code: `<div class="flex flex-wrap gap-1 p-2 border border-gray-300 rounded-lg min-h-[46px]">
  <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600">
    bonnie.green@company.com
    <button>×</button>
  </span>
  <input class="text-xs outline-none flex-1 min-w-[80px]" placeholder="Add tag..." />
</div>`,
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
        code: `<div class="flex items-center gap-2">
  <span class="text-sm font-medium text-gray-900">Email:</span>
  <span class="text-sm text-gray-900">namesurname@company.com</span>
  <!-- disabled chevron -->
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
