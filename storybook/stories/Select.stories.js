// Figma nodes: 12698:50249 (Input/Select), 10071:67527 (Multiselect)
// File key: ZKtEULdYKaXe5uQl1J6ijI

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  label:       '#111928',
  labelDisabled: '#9ca3af',
  optional:    '#6b7280',
  placeholder: '#6b7280',
  value:       '#111928',
  valueDisabled: '#9ca3af',
  inputBg:     '#f9fafb',
  inputBgError:'#fdf2f2',
  borderDef:   '#d1d5db',
  borderDisabled: '#e5e7eb',
  borderHover: '#9ca3af',
  borderError: '#c81e1e',
  borderErrMs: '#f05252',
  errorText:   '#c81e1e',
  errorTextMs: '#f05252',
  chevron:     '#6b7280',
  chevronChk:  '#1f2a37',
  help:        '#6b7280',
};

// ─── SVG icons ────────────────────────────────────────────────────────────────
const icnChevronDown = (c='#6b7280') => `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="m4.5 6.75 4.5 4.5 4.5-4.5" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const icnChevronUp   = (c='#6b7280') => `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="m4.5 11.25 4.5-4.5 4.5 4.5" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const icnCheck = (c='#9ca3af') => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="${c}" stroke-width="1.5"/><path d="m7 10 2 2 4-4" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const icnInfo  = (c='#6b7280') => `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="${c}" stroke-width="1.2"/><path d="M7 6v4M7 4.5v.5" stroke="${c}" stroke-width="1.2" stroke-linecap="round"/></svg>`;
const icnXSm   = (c='#6b7280') => `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7.5 2.5 2.5 7.5M2.5 2.5l5 5" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;

// ─── Select/Input (12698:50249) ───────────────────────────────────────────────
function selectInput(args) {
  const { type = 'default', state = 'default', labelText = '', value = 'Regular Select', optionalText = false, infoIcon = false } = args;
  const isDisabled = state === 'disabled';
  const isHovered  = state === 'hovered';
  const isError    = state === 'error';

  const border = isError ? C.borderError : isHovered ? C.borderHover : isDisabled ? C.borderDisabled : C.borderDef;
  const textColor = isDisabled ? C.valueDisabled : isError ? C.errorText : C.value;
  const chevronColor = isDisabled ? C.borderDisabled : C.chevron;
  const checkColor = isDisabled ? C.borderDisabled : C.chevron;
  const opacity = isDisabled ? '0.7' : '1';

  // With-label variant has a row above the input
  const labelRow = (type === 'with-label' || labelText) ? `
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
      <span style="font-size:14px;font-weight:500;color:${isDisabled ? C.labelDisabled : C.label};font-family:inherit;">${labelText || 'Select language'}</span>
      ${optionalText ? `<span style="font-size:14px;color:${C.optional};font-family:inherit;">(Optional)</span>` : ''}
      ${infoIcon ? `<span style="display:flex;align-items:center;">${icnInfo()}</span>` : ''}
    </div>` : '';

  // Default variant has an inline label prefix
  const inlineLabel = type === 'default' ? `<span style="font-size:14px;color:${C.optional};margin-right:2px;font-family:inherit;">Label:</span>` : '';

  const errorMsg = isError ? `<div style="font-size:12px;color:${C.errorText};margin-top:4px;font-family:inherit;">Error text.</div>` : '';

  return `<div style="opacity:${opacity};font-family:inherit;">
    ${labelRow}
    <div style="display:flex;align-items:center;gap:8px;height:40px;padding:0 10px;
      background:${C.inputBg};border:1px solid ${border};border-radius:8px;
      box-sizing:border-box;cursor:${isDisabled ? 'not-allowed' : 'pointer'};">
      ${icnCheck(checkColor)}
      ${inlineLabel}
      <span style="flex:1;min-width:0;font-size:14px;color:${textColor};font-family:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${value}</span>
      ${isHovered ? icnChevronUp(chevronColor) : icnChevronDown(chevronColor)}
    </div>
    ${errorMsg}
  </div>`;
}

// ─── Filter Select Input with leading outline icon ──────────────────────────────
// ─── Multiselect (10071:67527) ────────────────────────────────────────────────
function multiselect(args) {
  const { state = 'default', showLabel = true, showHelper = true, selectedValues = [] } = args;
  const isError = state === 'error';

  const labelColor = isError ? C.errorTextMs : C.label;
  const border = isError ? C.borderErrMs : C.borderDef;
  const inputBg = isError ? C.inputBgError : '#ffffff';
  const helperColor = isError ? C.errorTextMs : C.help;

  const selectedTags = selectedValues.map(v =>
    `<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 6px;background:#e0e7ff;border-radius:4px;font-size:12px;color:#3730a3;font-family:inherit;">
      ${v} <span style="cursor:pointer;display:flex;">${icnXSm('#3730a3')}</span>
    </span>`
  ).join('');

  return `<div style="font-family:inherit;">
    ${showLabel ? `<div style="font-size:14px;font-weight:500;color:${labelColor};margin-bottom:6px;font-family:inherit;">Label</div>` : ''}
    <div style="display:flex;align-items:center;flex-wrap:wrap;gap:6px;min-height:45px;padding:8px 10px;
      background:${inputBg};border:1px solid ${border};border-radius:8px;box-sizing:border-box;cursor:pointer;">
      ${selectedTags}
      <span style="flex:1;font-size:14px;color:${C.placeholder};font-family:inherit;min-width:80px;">Placeholder</span>
      ${icnChevronDown(C.chevronChk)}
    </div>
    ${showHelper ? `<div style="font-size:12px;color:${helperColor};margin-top:4px;font-family:inherit;">Helper</div>` : ''}
  </div>`;
}

// ─── Default export ────────────────────────────────────────────────────────────
export default {
  title: 'Iris Library/Select',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Select** covers two components: the **Input/Select** (single selection with inline label prefix, icon, and chevron) and the **Multiselect** (multi-value tag-based selector).

**When to use**
- **Input/Select** — choosing one option from a static list (language, country, role)
- **Multiselect** — choosing multiple options (tags, permissions, categories)

**When NOT to use**
- Binary on/off → use **Toggle**
- 2–4 mutually exclusive options visible at once → use **Radio**
- Free-text search with matching suggestions → use **Autocomplete**

**Anatomy (Input/Select)**
- Optional top-label row (label text + "(Optional)" + info icon)
- Input row: leading icon · inline label prefix · value or placeholder · chevron
- Error message below (when state=error)

**Anatomy (Multiselect)**
- Label (optional)
- Input area: dismissible tag pills + placeholder + chevron
- Helper text (optional)
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'with-label'],
      description: '`default` shows an inline label prefix inside the input. `with-label` shows a separate label row above the input.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'disabled', 'error'],
      description: 'Input state. `hovered` swaps chevron-down for chevron-up and darkens border. Keyboard: Space/Enter opens dropdown; Escape closes.',
      table: { category: 'State', defaultValue: { summary: 'default' } },
    },
    value: {
      control: 'text',
      description: 'Selected value displayed inside the input.',
      table: { category: 'Content', defaultValue: { summary: 'Regular Select' } },
    },
    optionalText: {
      control: 'boolean',
      description: 'Show "(Optional)" after the label in with-label type.',
      table: { category: 'Content', defaultValue: { summary: false } },
    },
    infoIcon: {
      control: 'boolean',
      description: 'Show info icon next to the label in with-label type.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
  },
  args: {
    type: 'default',
    state: 'default',
    value: 'Regular Select',
    optionalText: false,
    infoIcon: false,
  },
};

// ─── Interactive (Controls) ───────────────────────────────────────────────────
export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => `<div style="max-width:360px;font-family:inherit;">${selectInput(args)}</div>`,
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const { type, state, value } = ctx.args;
          const border = state === 'error' ? '#c81e1e' : state === 'hovered' ? '#9ca3af' : state === 'disabled' ? '#e5e7eb' : '#d1d5db';
          return `<!-- Input/Select (${type}, ${state}) -->
<div style="height:40px;border:1px solid ${border};border-radius:8px;background:#f9fafb;display:flex;align-items:center;padding:0 10px;gap:8px;cursor:pointer;">
  <!-- leading icon -->
  ${type === 'default' ? '<span style="color:#6b7280;font-size:14px;">Label:</span>' : ''}
  <span style="flex:1;font-size:14px;color:#111928;">${value}</span>
  <!-- chevron-down icon -->
</div>${state === 'error' ? '\n<div style="font-size:12px;color:#c81e1e;margin-top:4px;">Error text.</div>' : ''}`;
        },
      },
    },
  },
};

// ─── Gallery: All states ──────────────────────────────────────────────────────
export const AllStates = {
  name: 'Select — all states',
  args: { type: 'default' },
  parameters: {
    controls: { include: ['type'] },
    docs: {
      description: {
        story: 'All 4 states of Input/Select. Toggle the **type** control to see inline vs top-label variant.',
      },
      source: {
        code: `<!-- Default -->
<div style="border:1px solid #d1d5db;border-radius:8px;height:40px;"></div>

<!-- Hovered (chevron flips to up) -->
<div style="border:1px solid #9ca3af;border-radius:8px;height:40px;"></div>

<!-- Disabled -->
<div style="border:1px solid #e5e7eb;border-radius:8px;height:40px;opacity:0.7;cursor:not-allowed;"></div>

<!-- Error -->
<div style="border:1px solid #c81e1e;border-radius:8px;height:40px;"></div>`,
      },
    },
  },
  render: ({ type }) => {
    const states = [
      { state: 'default',  label: 'Default',  value: 'English (UK)' },
      { state: 'hovered',  label: 'Hovered',  value: 'English (UK)' },
      { state: 'disabled', label: 'Disabled', value: 'English (UK)' },
      { state: 'error',    label: 'Error',    value: 'English (UK)' },
    ];
    return `<div style="display:grid;grid-template-columns:repeat(4,220px);gap:16px;font-family:inherit;">
      ${states.map(s => `<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${s.label}</div>
        ${selectInput({ ...s, type, labelText: type === 'with-label' ? 'Select language' : '', optionalText: type === 'with-label' })}
      </div>`).join('')}
    </div>`;
  },
};

// ─── Gallery: Multiselect ─────────────────────────────────────────────────────
export const MultiselectVariants = {
  name: 'Multiselect — variants',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Multiselect in Default and Error states, with and without label/helper. Error state shows red label, red border, \`#fdf2f2\` background, and red helper text.

✅ Use the helper text to explain expected input (e.g. "Select all that apply")
✅ Always show a count or scrollable area if more than 5 values may be selected
❌ Don't show selected tag pills that overflow outside the input width — truncate or collapse`,
      },
      source: {
        code: `<!-- Default with label + helper -->
<div>
  <label style="font-size:14px;font-weight:500;color:#111928;">Label</label>
  <div style="min-height:45px;border:1px solid #d1d5db;border-radius:8px;background:#fff;display:flex;flex-wrap:wrap;gap:6px;padding:8px 10px;">
    <span class="tag-pill">Option A ×</span>
    <span class="placeholder">Placeholder</span>
    <!-- chevron-down -->
  </div>
  <p style="font-size:12px;color:#6b7280;">Helper</p>
</div>

<!-- Error state -->
<div>
  <label style="font-size:14px;font-weight:500;color:#f05252;">Label</label>
  <div style="border:1px solid #f05252;background:#fdf2f2;..."></div>
  <p style="font-size:12px;color:#f05252;">Helper</p>
</div>`,
      },
    },
  },
  render: () => {
    const variants = [
      { state: 'default', showLabel: true,  showHelper: true,  selectedValues: [],         title: 'Default — empty' },
      { state: 'default', showLabel: true,  showHelper: true,  selectedValues: ['Design','Marketing'], title: 'Default — with values' },
      { state: 'default', showLabel: false, showHelper: true,  selectedValues: [],         title: 'No label' },
      { state: 'default', showLabel: true,  showHelper: false, selectedValues: [],         title: 'No helper' },
      { state: 'error',   showLabel: true,  showHelper: true,  selectedValues: [],         title: 'Error — with label + helper' },
      { state: 'error',   showLabel: true,  showHelper: false, selectedValues: [],         title: 'Error — no helper' },
    ];
    return `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:800px;font-family:inherit;">
      ${variants.map(v => `<div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${v.title}</div>
        ${multiselect(v)}
      </div>`).join('')}
    </div>`;
  },
};

/* ── Select with leading icon (filter/selector buttons) ────────────── */

const ICON_CATEGORY = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM15 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zM5 13a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5z"/></svg>`;
const ICON_LOCATION = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>`;
const ICON_DOCUMENT = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/></svg>`;
const ICON_LIGHTNING = `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0110 2v5H6a1 1 0 00-.82 1.573l6 8A1 1 0 0012 16v-5h4a1 1 0 00.82-1.573l-6-8a1 1 0 00-.82-.381z" clip-rule="evenodd"/></svg>`;
