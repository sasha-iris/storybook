// Figma nodes: 12698:50249 (Input/Select), 10071:67527 (Multiselect)
// File key: ZKtEULdYKaXe5uQl1J6ijI

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  label:       '#111928',
  labelDisabled: 'var(--color-border-light)',
  optional:    '#6b7280',
  placeholder: '#6b7280',
  value:       '#111928',
  valueDisabled: 'var(--color-border-light)',
  inputBg:     'var(--color-bg-tertiary)',
  inputBgError:'#fdf2f2',
  borderDef:   'var(--color-border-default)',
  borderDisabled: 'var(--color-border-default)',
  borderHover: 'var(--color-border-light)',
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
const icnCheck = (c='var(--color-border-light)') => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="${c}" stroke-width="1.5"/><path d="m7 10 2 2 4-4" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const icnInfo  = (c='#6b7280') => `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="${c}" stroke-width="1.2"/><path d="M7 6v4M7 4.5v.5" stroke="${c}" stroke-width="1.2" stroke-linecap="round"/></svg>`;
const icnXSm   = (c='#6b7280') => `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7.5 2.5 2.5 7.5M2.5 2.5l5 5" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;

// ─── Select/Input (12698:50249) — real .form-select / .form-select-wrap ───────
// Plain selects render a native <select class="form-select">. Icon variants use
// `.form-select-wrap` (leading SVG + borderless native select inside).
// States via real classes/attrs: is-error · disabled. `hovered` simulates the
// CSS :hover border (border-color only) — preview-only, the class is unchanged.
function selectInput(args) {
  const { type = 'default', state = 'default', labelText = '', value = 'Regular Select', optionalText = false, infoIcon = false } = args;
  const isDisabled = state === 'disabled';
  const isHovered  = state === 'hovered';
  const isError    = state === 'error';

  const stateClass = isError ? ' is-error' : '';
  const disAttr    = isDisabled ? ' disabled style="opacity:.7;cursor:not-allowed;"' : '';
  const hoverStyle = isHovered ? ' style="border-color:var(--color-border-light);"' : '';

  const labelRow = (type === 'with-label' || labelText) ? `
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
      <label class="form-label" style="margin:0;">${labelText || 'Select language'}</label>
      ${optionalText ? `<span style="font-size:var(--text-sm);color:${C.optional};">(Optional)</span>` : ''}
      ${infoIcon ? `<span style="display:flex;align-items:center;">${icnInfo()}</span>` : ''}
    </div>` : '';

  const errorMsg = isError ? `<p class="form-feedback-error">Error text.</p>` : '';
  const options = `<option selected>${value}</option><option>English (US)</option><option>Deutsch</option>`;

  // default type = select-wrap with leading icon; with-label = plain form-select
  const control = type === 'default'
    ? `<div class="form-select-wrap"${isHovered ? ' style="border-color:var(--color-border-light);"' : isError ? ' style="border-color:#c81e1e;"' : ''}>
        ${icnCheck(isDisabled ? C.borderDisabled : C.chevron)}
        <select${isDisabled ? ' disabled' : ''}>${options}</select>
      </div>`
    : `<select class="form-select${stateClass}"${disAttr}${!isDisabled && !isError ? hoverStyle : ''}>${options}</select>`;

  return `<div${isDisabled ? ' style="opacity:.85;"' : ''}>
    ${labelRow}
    ${control}
    ${errorMsg}
  </div>`;
}

// ─── Multiselect (10071:67527) — real .form-tag-wrap + .form-tag--indigo ──────
function multiselect(args) {
  const { state = 'default', showLabel = true, showHelper = true, selectedValues = [] } = args;
  const isError = state === 'error';

  const selectedTags = selectedValues.map(v =>
    `<span class="form-tag form-tag--indigo">${v}<button class="form-tag__x" aria-label="Remove ${v}">${icnXSm('#3730a3')}</button></span>`
  ).join('');

  const labelEl = showLabel
    ? `<label class="form-label"${isError ? ' style="color:#f05252;"' : ''}>Label</label>` : '';
  const helperEl = showHelper
    ? (isError ? `<p class="form-feedback-error">Helper</p>` : `<p class="form-helper">Helper</p>`) : '';

  return `<div>
    ${labelEl}
    <div class="form-tag-wrap${isError ? ' is-error' : ''}" style="cursor:pointer;">
      ${selectedTags}
      <input type="text" class="form-tag-input" placeholder="Placeholder" />
      ${icnChevronDown(C.chevronChk)}
    </div>
    ${helperEl}
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
**Native popup caveat:** the OPEN option list of a native \`<select>\` is rendered by the OS and cannot be styled (it will look gray/dark on macOS dark mode). When the open list must match the design system, compose a combobox instead: \`<button class="form-select">\` trigger (the chevron comes from the class) + the Dropdown family list (\`.dropdown-menu.dropdown-menu--absolute\` + \`.dropdown-item\`, selected = \`.active\`), with \`role="combobox"\`/\`aria-expanded\` on the trigger and \`role="listbox"\`/\`role="option"\`+\`aria-selected\` on the list; Arrow keys navigate, Enter selects, Escape closes.

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

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
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
      if: { arg: 'type', eq: 'with-label' },
    },
    infoIcon: {
      control: 'boolean',
      description: 'Show info icon next to the label in with-label type.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
      if: { arg: 'type', eq: 'with-label' },
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
  render: (args) => {
    const a = args;
    const stateClass = a.state === 'error' ? ' is-error' : '';
    const disAttr = a.state === 'disabled' ? ' disabled' : '';

    const htmlCode = a.type === 'default'
      ? `<div class="form-select-wrap">\n  <!-- leading icon SVG -->\n  <select${disAttr}>\n    <option selected>${a.value}</option>\n    <option>English (US)</option>\n  </select>\n</div>`
      : `<label class="form-label">Select language</label>\n<select class="form-select${stateClass}"${disAttr}>\n  <option selected>${a.value}</option>\n  <option>English (US)</option>\n</select>${a.state === 'error' ? '\n<p class="form-feedback-error">Error text.</p>' : ''}`;

    const reactCode = a.type === 'default'
      ? `<div className="form-select-wrap">\n  {/* leading icon SVG */}\n  <select${a.state === 'disabled' ? ' disabled' : ''}>\n    <option>${a.value}</option>\n  </select>\n</div>`
      : `<select className="form-select${stateClass}"${a.state === 'disabled' ? ' disabled' : ''}>\n  <option>${a.value}</option>\n</select>`;

    const componentCode = `export function Select({ options = [], value, onChange, disabled = false, error = false, icon = null }) {\n  const select = (\n    <select\n      className={'form-select' + (error ? ' is-error' : '')}\n      value={value}\n      disabled={disabled}\n      onChange={(e) => onChange?.(e.target.value)}\n    >\n      {options.map((opt) => <option key={opt}>{opt}</option>)}\n    </select>\n  );\n  if (!icon) return select;\n  return (\n    <div className="form-select-wrap">\n      {icon}\n      {select}\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          <div style="max-width:360px;">${selectInput(args)}</div>
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
        story: 'Use **Controls** to test select states and variants. Preview and snippets emit the real `.form-select` / `.form-select-wrap` classes.',
      },
      source: {
        transform: (_src, ctx) => {
          const a = ctx.args;
          const stateClass = a.state === 'error' ? ' is-error' : '';
          const disAttr = a.state === 'disabled' ? ' disabled' : '';
          return a.type === 'default'
            ? `<div class="form-select-wrap">\n  <!-- leading icon SVG -->\n  <select${disAttr}>\n    <option selected>${a.value}</option>\n  </select>\n</div>`
            : `<select class="form-select${stateClass}"${disAttr}>\n  <option selected>${a.value}</option>\n</select>`;
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
        language: 'html',
        code: `<!-- Default — icon variant -->
<div class="form-select-wrap">
  <!-- leading icon SVG -->
  <select><option selected>English (UK)</option></select>
</div>

<!-- Plain select with label -->
<label class="form-label">Select language</label>
<select class="form-select"><option selected>English (UK)</option></select>

<!-- Disabled -->
<select class="form-select" disabled><option>English (UK)</option></select>

<!-- Error -->
<select class="form-select is-error"><option>English (UK)</option></select>
<p class="form-feedback-error">Error text.</p>`,
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
        language: 'html',
        code: `<!-- Default with label + helper -->
<label class="form-label">Label</label>
<div class="form-tag-wrap">
  <span class="form-tag form-tag--indigo">
    Design
    <button class="form-tag__x" aria-label="Remove Design">×</button>
  </span>
  <input type="text" class="form-tag-input" placeholder="Placeholder" />
  <!-- chevron-down -->
</div>
<p class="form-helper">Helper</p>

<!-- Error state -->
<div class="form-tag-wrap is-error">
  <input type="text" class="form-tag-input" placeholder="Placeholder" />
</div>
<p class="form-feedback-error">Helper</p>`,
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

// ─── Custom listbox (combobox) — styled open list ────────────────────────────
// The open list of a native <select> is OS-rendered and unstylable (gray/dark
// on macOS dark mode). This recipe composes two existing families instead:
// Select trigger (.form-select on a <button>) + Dropdown list (.dropdown-menu
// + .dropdown-item, selected = .active). CSS-only library: the behaviour
// script below IS part of the recipe — copy both.
export const CustomListbox = {
  name: 'Custom listbox (combobox)',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Styled replacement for a native \`<select>\` whose open list must match the design system (the native popup is OS-rendered and unstylable — gray/dark on macOS dark mode).

**Composition** (no new classes): trigger = \`<button class="form-select">\` (surface, border and chevron come from the class) · list = \`.dropdown-menu.dropdown-menu--absolute\` + \`.dropdown-item\`, selected option = \`.active\` (brand purple #42389d).

**A11y contract (required, the script implements it)**
- Trigger: \`role="combobox"\` + \`aria-expanded\` + \`aria-haspopup="listbox"\` + \`aria-controls\`
- List: \`role="listbox"\`; options: \`role="option"\` + \`aria-selected\`
- Focus: opening focuses the selected option; selecting or Escape returns focus to the trigger

**Keyboard**: ArrowDown/ArrowUp — open, then move between options · Enter/Space — select (native button activation) · Escape — close without changes · click outside — close.

✅ Brand-consistent menus, dark-mode-critical surfaces, short curated lists (2–10 items)
❌ Long lists (countries, time zones) — keep the native \`<select>\`, the OS popup scrolls/types-ahead better
❌ Mobile-heavy forms — native selects open OS pickers, which beat any custom menu on touch
❌ Never try to style native \`<option>\` — it is not stylable, that is the whole reason this recipe exists`,
      },
      source: { code: `<!-- Trigger: .form-select on a <button> — surface, border and chevron come from the class -->
<div style="position:relative;max-width:320px;">
  <button type="button" id="orgSelect" class="form-select" role="combobox"
          aria-expanded="false" aria-haspopup="listbox" aria-controls="orgListbox"
          style="text-align:left;cursor:pointer;">Test Invite</button>

  <!-- Open list: Dropdown family — selected option = .active (brand purple) -->
  <ul class="dropdown-menu dropdown-menu--absolute" id="orgListbox" role="listbox"
      aria-label="Default organization" hidden style="width:100%;margin:0;padding:0;">
    <li><button type="button" class="dropdown-item active" role="option" aria-selected="true">Test Invite</button></li>
    <li><button type="button" class="dropdown-item" role="option" aria-selected="false">Test 2005</button></li>
    <li><button type="button" class="dropdown-item" role="option" aria-selected="false">Iris Finance HQ</button></li>
  </ul>
</div>

<script>
  const trigger = document.getElementById('orgSelect');
  const listbox = document.getElementById('orgListbox');
  const options = [...listbox.querySelectorAll('[role="option"]')];

  function setOpen(open) {
    listbox.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
    if (open) (options.find(o => o.getAttribute('aria-selected') === 'true') || options[0]).focus();
  }

  trigger.addEventListener('click', () => setOpen(listbox.hidden));
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); setOpen(true); }
  });

  options.forEach((opt, i) => {
    opt.addEventListener('click', () => {
      options.forEach(o => { o.setAttribute('aria-selected', 'false'); o.classList.remove('active'); });
      opt.setAttribute('aria-selected', 'true');
      opt.classList.add('active');
      trigger.textContent = opt.textContent;
      setOpen(false);
      trigger.focus();
    });
    opt.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown')      { e.preventDefault(); (options[i + 1] || options[0]).focus(); }
      else if (e.key === 'ArrowUp')   { e.preventDefault(); (options[i - 1] || options[options.length - 1]).focus(); }
      else if (e.key === 'Escape')    { setOpen(false); trigger.focus(); }
    });
  });

  document.addEventListener('click', (e) => {
    if (!listbox.hidden && !e.target.closest('#orgSelect, #orgListbox')) setOpen(false);
  });
</script>` },
    },
  },
  render: () => `
    <div style="min-height:260px;padding:8px;">
      <label class="form-label" for="sbOrgSelect" style="display:block;margin-bottom:6px;">Default Organization</label>
      <div style="position:relative;max-width:320px;">
        <button type="button" id="sbOrgSelect" class="form-select" role="combobox"
                aria-expanded="false" aria-haspopup="listbox" aria-controls="sbOrgListbox"
                style="text-align:left;cursor:pointer;">Test Invite</button>
        <ul class="dropdown-menu dropdown-menu--absolute" id="sbOrgListbox" role="listbox"
            aria-label="Default organization" hidden style="width:100%;margin:0;padding:0;">
          <li><button type="button" class="dropdown-item active" role="option" aria-selected="true">Test Invite</button></li>
          <li><button type="button" class="dropdown-item" role="option" aria-selected="false">Test 2005</button></li>
          <li><button type="button" class="dropdown-item" role="option" aria-selected="false">Iris Finance HQ</button></li>
        </ul>
      </div>
      <p class="form-helper" style="margin-top:8px;">Live demo — click or use ArrowDown / Enter / Escape.</p>
      <script>
        (function () {
          const trigger = document.getElementById('sbOrgSelect');
          const listbox = document.getElementById('sbOrgListbox');
          if (!trigger || trigger.dataset.init) return;
          trigger.dataset.init = '1';
          const options = [...listbox.querySelectorAll('[role="option"]')];
          function setOpen(open) {
            listbox.hidden = !open;
            trigger.setAttribute('aria-expanded', String(open));
            if (open) (options.find(o => o.getAttribute('aria-selected') === 'true') || options[0]).focus();
          }
          trigger.addEventListener('click', () => setOpen(listbox.hidden));
          trigger.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); setOpen(true); }
          });
          options.forEach((opt, i) => {
            opt.addEventListener('click', () => {
              options.forEach(o => { o.setAttribute('aria-selected', 'false'); o.classList.remove('active'); });
              opt.setAttribute('aria-selected', 'true');
              opt.classList.add('active');
              trigger.textContent = opt.textContent;
              setOpen(false);
              trigger.focus();
            });
            opt.addEventListener('keydown', (e) => {
              if (e.key === 'ArrowDown')    { e.preventDefault(); (options[i + 1] || options[0]).focus(); }
              else if (e.key === 'ArrowUp') { e.preventDefault(); (options[i - 1] || options[options.length - 1]).focus(); }
              else if (e.key === 'Escape')  { setOpen(false); trigger.focus(); }
            });
          });
          document.addEventListener('click', (e) => {
            if (!listbox.hidden && !e.target.closest('#sbOrgSelect, #sbOrgListbox')) setOpen(false);
          });
        })();
      </script>
    </div>`,
};
