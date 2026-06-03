/**
 * Controls — Toggle · Checkbox · Radio
 * Figma: 9462:787 (Checkbox) · 9479:135603 (toggle) ·
 *        9675:152295 (Radiobutton) · 84:21156 (Controls wrapper)
 * File key: ZKtEULdYKaXe5uQl1J6ijI
 *
 * CSS classes (styles.css):
 *   .iris-toggle   .iris-toggle--on/off  .iris-toggle--destructive  .iris-toggle--disabled
 *   .iris-toggle__thumb
 *   .iris-checkbox  .iris-checkbox--checked  .iris-checkbox--intermediate
 *   .iris-checkbox--destructive  .iris-checkbox--disabled
 *   .iris-radio    .iris-radio--checked
 *   .iris-radio--destructive  .iris-radio--disabled
 *   .iris-control  .iris-control__check  .iris-control__body
 *   .iris-control__label  .iris-control__helper
 *   .iris-control--destructive  .iris-control--disabled
 */

/* ── helpers ─────────────────────────────────────────────────── */

const toggle = ({ on = true, destructive = false, disabled = false } = {}) => {
  const cls = [
    'iris-toggle',
    on ? 'iris-toggle--on' : 'iris-toggle--off',
    destructive && 'iris-toggle--destructive',
    disabled    && 'iris-toggle--disabled',
  ].filter(Boolean).join(' ');
  return `<span class="${cls}" role="switch" aria-checked="${on}"><span class="iris-toggle__thumb"></span></span>`;
};

const checkbox = ({ checked = false, intermediate = false, destructive = false, disabled = false } = {}) => {
  const cls = [
    'iris-checkbox',
    checked       && 'iris-checkbox--checked',
    intermediate  && 'iris-checkbox--intermediate',
    destructive   && 'iris-checkbox--destructive',
    disabled      && 'iris-checkbox--disabled',
  ].filter(Boolean).join(' ');
  const state = intermediate ? 'mixed' : checked ? 'true' : 'false';
  return `<span class="${cls}" role="checkbox" aria-checked="${state}"></span>`;
};

const radio = ({ checked = false, destructive = false, disabled = false } = {}) => {
  const cls = [
    'iris-radio',
    checked     && 'iris-radio--checked',
    destructive && 'iris-radio--destructive',
    disabled    && 'iris-radio--disabled',
  ].filter(Boolean).join(' ');
  return `<span class="${cls}" role="radio" aria-checked="${checked}"></span>`;
};

/** Full control row: control element + label + helper text */
const controlRow = ({ type = 'toggle', on = false, checked = false, intermediate = false,
                       destructive = false, disabled = false,
                       label = 'Weekly traffic report', helper = 'Sent every Monday at 9 am' } = {}) => {
  const wrapCls = [
    'iris-control',
    destructive && 'iris-control--destructive',
    disabled    && 'iris-control--disabled',
  ].filter(Boolean).join(' ');

  let ctrl = '';
  if (type === 'toggle')   ctrl = toggle({ on, destructive, disabled });
  if (type === 'checkbox') ctrl = checkbox({ checked, intermediate, destructive, disabled });
  if (type === 'radio')    ctrl = radio({ checked, destructive, disabled });

  return `<label class="${wrapCls}">
  <span class="iris-control__check">${ctrl}</span>
  <span class="iris-control__body">
    <span class="iris-control__label">${label}</span>
    <span class="iris-control__helper">${helper}</span>
  </span>
</label>`;
};

/** Inline style helpers for gallery grids */
const row = (items) =>
  `<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;">${items.join('')}</div>`;

const stack = (items) =>
  `<div style="display:flex;flex-direction:column;gap:16px;">${items.join('')}</div>`;

const labeled = (label, content) =>
  `<div style="display:flex;flex-direction:column;gap:8px;">
    <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;
                 color:var(--color-text-secondary);">${label}</span>
    ${content}
  </div>`;

/* ── Default export ──────────────────────────────────────────── */

export default {
  title: 'Iris Library/Controls',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Controls** are interactive selection elements: Toggle, Checkbox, and Radio.
Use them to let users turn features on/off or choose from a set of options.

**When to use**
- **Toggle** — enable/disable a single binary setting with immediate effect (no submit button needed)
- **Checkbox** — select one or more independent options from a list; or represent an indeterminate (mixed) state
- **Radio** — select exactly one option from a mutually exclusive set

**When NOT to use**
- Do not use Toggle when the action requires confirmation before applying (use a Checkbox + submit instead)
- Do not use Radio for more than ~6 options — prefer a Select dropdown
- Do not use Checkbox as a toggle for live settings — use Toggle instead

**Anatomy**
- **Control element** (16×16 px checkbox/radio; 28×16 px toggle) — the visual indicator
- **Label** (14px/500) — primary text; required
- **Helper text** (12px/400, gray/500) — optional secondary description
- **Destructive variant** — red palette for dangerous or error states
- **Disabled variant** — muted palette; \`pointer-events:none\`
        `,
      },
    },
  },

  argTypes: {
    type: {
      name: 'Control type',
      control: { type: 'select', options: ['toggle', 'checkbox', 'radio'] },
      description: 'Which control element to render (`toggle`, `checkbox`, `radio`).',
      table: { category: 'Appearance', defaultValue: { summary: 'toggle' } },
    },
    on: {
      name: 'Toggle ON',
      control: { type: 'boolean' },
      description: 'Toggle only — `true` = ON (brand/800 purple), `false` = OFF (gray/300). Maps to `aria-checked`.',
      table: { category: 'State', defaultValue: { summary: 'false' } },
      if: { arg: 'type', eq: 'toggle' },
    },
    checked: {
      name: 'Checked',
      control: { type: 'boolean' },
      description: 'Checkbox / Radio — whether the control is selected. Maps to `aria-checked="true"`.',
      table: { category: 'State', defaultValue: { summary: 'false' } },
      if: { arg: 'type', neq: 'toggle' },
    },
    intermediate: {
      name: 'Intermediate',
      control: { type: 'boolean' },
      description: 'Checkbox only — indeterminate state (partial selection). Maps to `aria-checked="mixed"`. Overrides `checked`.',
      table: { category: 'State', defaultValue: { summary: 'false' } },
      if: { arg: 'type', eq: 'checkbox' },
    },
    destructive: {
      name: 'Destructive',
      control: { type: 'boolean' },
      description: 'Enables the red destructive palette. Use for irreversible or error-state controls.',
      table: { category: 'Appearance', defaultValue: { summary: 'false' } },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
      description: 'Disables pointer-events and applies the muted disabled palette. WCAG: disabled elements are exempt from contrast requirements.',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    label: {
      name: 'Label',
      control: { type: 'text' },
      description: 'Primary label text rendered next to the control.',
      table: { category: 'Content', defaultValue: { summary: 'Weekly traffic report' } },
    },
    helper: {
      name: 'Helper text',
      control: { type: 'text' },
      description: 'Optional secondary description shown below the label (gray/500).',
      table: { category: 'Content', defaultValue: { summary: 'Sent every Monday at 9 am' } },
    },
  },

  args: {
    type: 'toggle',
    on: false,
    checked: false,
    intermediate: false,
    destructive: false,
    disabled: false,
    label: 'Weekly traffic report',
    helper: 'Sent every Monday at 9 am',
  },
};

/* ── Interactive ─────────────────────────────────────────────── */

export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;
    const wrapCls = ['iris-control', a.destructive && 'iris-control--destructive', a.disabled && 'iris-control--disabled'].filter(Boolean).join(' ');
    let ctrlHtml = '';
    if (a.type === 'toggle') {
      const cls = ['iris-toggle', a.on ? 'iris-toggle--on' : 'iris-toggle--off', a.destructive && 'iris-toggle--destructive', a.disabled && 'iris-toggle--disabled'].filter(Boolean).join(' ');
      ctrlHtml = `<span class="${cls}" role="switch" aria-checked="${a.on}"><span class="iris-toggle__thumb"></span></span>`;
    } else if (a.type === 'checkbox') {
      const cls = ['iris-checkbox', a.checked && 'iris-checkbox--checked', a.intermediate && 'iris-checkbox--intermediate', a.destructive && 'iris-checkbox--destructive', a.disabled && 'iris-checkbox--disabled'].filter(Boolean).join(' ');
      ctrlHtml = `<span class="${cls}" role="checkbox" aria-checked="${a.intermediate ? 'mixed' : a.checked}"></span>`;
    } else {
      const cls = ['iris-radio', a.checked && 'iris-radio--checked', a.destructive && 'iris-radio--destructive', a.disabled && 'iris-radio--disabled'].filter(Boolean).join(' ');
      ctrlHtml = `<span class="${cls}" role="radio" aria-checked="${a.checked}"></span>`;
    }

    const htmlCode = `<label class="${wrapCls}">\n  <span class="iris-control__check">${ctrlHtml}</span>\n  <span class="iris-control__body">\n    <span class="iris-control__label">${a.label}</span>\n    <span class="iris-control__helper">${a.helper}</span>\n  </span>\n</label>`;

    const reactCode = `<label className={\`iris-control\${destructive ? ' iris-control--destructive' : ''}\${disabled ? ' iris-control--disabled' : ''}\`}>\n  <span className="iris-control__check">\n    ${a.type === 'toggle' ? `<span className={\`iris-toggle iris-toggle--\${on ? 'on' : 'off'}\`} role="switch" aria-checked={on}><span className="iris-toggle__thumb" /></span>` : a.type === 'checkbox' ? `<span className="iris-checkbox" role="checkbox" aria-checked={checked} />` : `<span className="iris-radio" role="radio" aria-checked={checked} />`}\n  </span>\n  <span className="iris-control__body">\n    <span className="iris-control__label">{label}</span>\n    <span className="iris-control__helper">{helper}</span>\n  </span>\n</label>`;

    const componentCode = `export function Control({ type = "${a.type}", label = "${a.label}", helper = "${a.helper}", checked = ${a.checked}, on = ${a.on}, disabled = ${a.disabled}, destructive = ${a.destructive}, onChange }) {\n  const isChecked = type === 'toggle' ? on : checked;\n  const wrapCls = [\n    'iris-control',\n    destructive && 'iris-control--destructive',\n    disabled && 'iris-control--disabled'\n  ].filter(Boolean).join(' ');\n\n  return (\n    <label className={wrapCls}>\n      <span className="iris-control__check">\n        {type === 'toggle' && (\n          <span\n            className={\`iris-toggle iris-toggle--\${isChecked ? 'on' : 'off'}\`}\n            role="switch"\n            aria-checked={isChecked}\n            onClick={() => onChange?.(!isChecked)}\n          >\n            <span className="iris-toggle__thumb" />\n          </span>\n        )}\n        {type === 'checkbox' && (\n          <span\n            className="iris-checkbox"\n            role="checkbox"\n            aria-checked={isChecked}\n            onClick={() => onChange?.(!isChecked)}\n          />\n        )}\n        {type === 'radio' && (\n          <span\n            className="iris-radio"\n            role="radio"\n            aria-checked={isChecked}\n            onClick={() => onChange?.(true)}\n          />\n        )}\n      </span>\n      <span className="iris-control__body">\n        <span className="iris-control__label">{label}</span>\n        {helper && <span className="iris-control__helper">{helper}</span>}\n      </span>\n    </label>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${controlRow(args)}
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
        story: `
Use the Controls panel to explore all state combinations.

✅ Change **type** between Toggle / Checkbox / Radio
✅ Toggle **ON**, **Checked**, **Intermediate**, **Destructive**, **Disabled**
✅ Edit **Label** and **Helper text** with real copy

❌ Don't use placeholder text like "Label" or "Toggle label" in production
        `,
      },
    },
  },
};

/* ── Toggle — all states ─────────────────────────────────────── */

export const TogglesGallery = {
    name: 'Toggle — all states',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All Toggle variants from Figma node **9479:135603**.

| State | ON bg | OFF bg |
|-------|-------|--------|
| Default | brand/800 \`#42389d\` | gray/300 \`var(--color-border-default)\` |
| Hover | brand/900 \`#362f78\` | gray/400 \`var(--color-border-light)\` |
| Destructive | red/700 \`#c81e1e\` | red/700 \`#c81e1e\` |
| Disabled ON | indigo/200 \`#cddbfe\` | gray/200 \`var(--color-border-default)\` |
| Disabled Destructive | red/200 \`#ffc9c9\` | — |

✅ Use Toggle for binary settings that take immediate effect (e.g. enable notifications)
❌ Do not use Toggle inside a form that requires a Save button — use Checkbox instead
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Toggle ON (default) -->
<span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle OFF (default) -->
<span class="iris-toggle iris-toggle--off" role="switch" aria-checked="false">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle ON — destructive -->
<span class="iris-toggle iris-toggle--on iris-toggle--destructive" role="switch" aria-checked="true">
  <span class="iris-toggle__thumb"></span>
</span>

<!-- Toggle ON — disabled -->
<span class="iris-toggle iris-toggle--on iris-toggle--disabled" role="switch" aria-checked="true" aria-disabled="true">
  <span class="iris-toggle__thumb"></span>
</span>`,
      },
    },
  },
  render: () => stack([
    labeled('Default', row([
      toggle({ on: true }),
      toggle({ on: false }),
    ])),
    labeled('Destructive', row([
      toggle({ on: true,  destructive: true }),
      toggle({ on: false, destructive: true }),
    ])),
    labeled('Disabled ON', row([
      toggle({ on: true, disabled: true }),
      toggle({ on: true, disabled: true, destructive: true }),
    ])),
    labeled('Disabled OFF', row([
      toggle({ on: false, disabled: true }),
      toggle({ on: false, disabled: true, destructive: true }),
    ])),
  ]),
};

/* ── Checkbox — all states ───────────────────────────────────── */

export const CheckboxesGallery = {
    name: 'Checkbox — all states',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All Checkbox variants from Figma node **9462:787**.

- **Unchecked** — gray/50 bg, gray/300 border
- **Checked** — brand/800 bg + white checkmark
- **Intermediate** — brand/800 bg + white minus bar (use for "select all" when partial selection)
- **Destructive** — red fill/border; unchecked border is \`#c10007\`
- **Disabled** — indigo/200 fill (checked) or gray/200 border (unchecked); \`pointer-events:none\`

✅ Use Intermediate state for parent checkboxes controlling a partial selection
❌ Do not use Checkbox for a single binary setting — use Toggle instead
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Unchecked -->
<span class="iris-checkbox" role="checkbox" aria-checked="false"></span>

<!-- Checked -->
<span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>

<!-- Intermediate (indeterminate) -->
<span class="iris-checkbox iris-checkbox--intermediate" role="checkbox" aria-checked="mixed"></span>

<!-- Destructive + checked -->
<span class="iris-checkbox iris-checkbox--checked iris-checkbox--destructive" role="checkbox" aria-checked="true"></span>

<!-- Disabled + checked -->
<span class="iris-checkbox iris-checkbox--checked iris-checkbox--disabled" role="checkbox" aria-checked="true" aria-disabled="true"></span>`,
      },
    },
  },
  render: () => stack([
    labeled('Default', row([
      checkbox({ checked: false }),
      checkbox({ checked: true }),
      checkbox({ intermediate: true }),
    ])),
    labeled('Destructive', row([
      checkbox({ checked: false, destructive: true }),
      checkbox({ checked: true, destructive: true }),
      checkbox({ intermediate: true, destructive: true }),
    ])),
    labeled('Disabled unchecked', row([
      checkbox({ checked: false, disabled: true }),
      checkbox({ checked: false, disabled: true, destructive: true }),
    ])),
    labeled('Disabled checked', row([
      checkbox({ checked: true, disabled: true }),
      checkbox({ intermediate: true, disabled: true }),
      checkbox({ checked: true, disabled: true, destructive: true }),
      checkbox({ intermediate: true, disabled: true, destructive: true }),
    ])),
  ]),
};

/* ── Radio — all states ──────────────────────────────────────── */

export const RadiosGallery = {
    name: 'Radio — all states',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All Radiobutton variants from Figma node **9675:152295**.

- **Unselected** — gray/50 bg, gray/300 border
- **Selected** — brand/800 bg + white 6×6 dot
- **Destructive** — red/700 fill/border
- **Disabled** — indigo/200 (selected) or gray/200 border (unselected)

✅ Group radio buttons in a \`role="radiogroup"\` with a descriptive \`aria-labelledby\`
❌ Do not use Radio for fewer than 2 or more than ~6 options
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Unselected -->
<span class="iris-radio" role="radio" aria-checked="false"></span>

<!-- Selected -->
<span class="iris-radio iris-radio--checked" role="radio" aria-checked="true"></span>

<!-- Destructive + selected -->
<span class="iris-radio iris-radio--checked iris-radio--destructive" role="radio" aria-checked="true"></span>

<!-- Disabled + selected -->
<span class="iris-radio iris-radio--checked iris-radio--disabled" role="radio" aria-checked="true" aria-disabled="true"></span>`,
      },
    },
  },
  render: () => stack([
    labeled('Default', row([
      radio({ checked: false }),
      radio({ checked: true }),
    ])),
    labeled('Destructive', row([
      radio({ checked: false, destructive: true }),
      radio({ checked: true,  destructive: true }),
    ])),
    labeled('Disabled', row([
      radio({ checked: false, disabled: true }),
      radio({ checked: true,  disabled: true }),
      radio({ checked: false, disabled: true, destructive: true }),
      radio({ checked: true,  disabled: true, destructive: true }),
    ])),
  ]),
};

/* ── Controls wrapper — all types ────────────────────────────── */

export const ControlsGallery = {
    name: 'Controls — all types',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Full control rows from Figma node **84:21156**: control element + label + helper text.

Three types × three states (default · destructive · disabled) = 9 combinations shown.

Label color: \`--color-text-heading\` (#101828) | Helper color: \`--color-text-secondary\` (#6b7280)
Destructive: label + helper → \`#c81e1e\` / \`#fb2c36\`
Disabled: label + helper → gray/300 \`var(--color-border-default)\`
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Toggle control row -->
<label class="iris-control">
  <span class="iris-control__check">
    <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true">
      <span class="iris-toggle__thumb"></span>
    </span>
  </span>
  <span class="iris-control__body">
    <span class="iris-control__label">Enable daily digest</span>
    <span class="iris-control__helper">Sent every morning at 7 am</span>
  </span>
</label>

<!-- Checkbox control row — destructive -->
<label class="iris-control iris-control--destructive">
  <span class="iris-control__check">
    <span class="iris-checkbox iris-checkbox--checked iris-checkbox--destructive"
          role="checkbox" aria-checked="true"></span>
  </span>
  <span class="iris-control__body">
    <span class="iris-control__label">Delete all historical data</span>
    <span class="iris-control__helper">This action cannot be undone</span>
  </span>
</label>

<!-- Radio control row — disabled -->
<label class="iris-control iris-control--disabled">
  <span class="iris-control__check">
    <span class="iris-radio iris-radio--disabled" role="radio" aria-checked="false" aria-disabled="true"></span>
  </span>
  <span class="iris-control__body">
    <span class="iris-control__label">Premium plan</span>
    <span class="iris-control__helper">Upgrade to access this option</span>
  </span>
</label>`,
      },
    },
  },
  render: () => `
<div style="display:flex;flex-direction:column;gap:24px;max-width:340px;">

  ${labeled('Toggle', stack([
    controlRow({ type: 'toggle', on: true,  label: 'Enable daily digest',        helper: 'Sent every morning at 7 am' }),
    controlRow({ type: 'toggle', on: true,  destructive: true, label: 'Disable all notifications', helper: 'You will stop receiving alerts' }),
    controlRow({ type: 'toggle', on: false, disabled: true,    label: 'Auto-archive reports',       helper: 'Requires admin permissions' }),
  ]))}

  ${labeled('Checkbox', stack([
    controlRow({ type: 'checkbox', checked: true,  label: 'Remember my preferences',      helper: 'Saved to your account' }),
    controlRow({ type: 'checkbox', checked: true,  destructive: true, label: 'Delete all historical data', helper: 'This action cannot be undone' }),
    controlRow({ type: 'checkbox', checked: false, disabled: true,    label: 'Export raw data',            helper: 'Requires export permissions' }),
  ]))}

  ${labeled('Radio', stack([
    controlRow({ type: 'radio', checked: true,  label: 'Standard plan',  helper: 'Up to 10 team members' }),
    controlRow({ type: 'radio', checked: true,  destructive: true, label: 'Cancel subscription', helper: 'Effective at end of billing period' }),
    controlRow({ type: 'radio', checked: false, disabled: true,    label: 'Enterprise plan',    helper: 'Contact sales to unlock' }),
  ]))}

</div>`,
};
