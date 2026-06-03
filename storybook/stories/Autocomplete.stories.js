// Figma: Iris Library / Autocomplete Inputs — node 101:15414
// File: ZKtEULdYKaXe5uQl1J6ijI
// Light mode only (Dark mode variants excluded per project rules).
// Types: Default (plain results) · Advanced (icon results + dismiss/navigate button).
// Sizes: Default (42px / 14px) · Large (52px / 16px).
// States: Initial · Active (open, focused) · Typing (query + clear) · With CTA.

/* ── Icon helpers ────────────────────────────────────────────────────────── */
// All Heroicons v1 solid, viewBox 0 0 20 20
const ico = (path, size = 18, color = 'currentColor') =>
  `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="${color}" aria-hidden="true">${path}</svg>`;

const P_SEARCH       = `<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>`;
const P_X_CIRCLE     = `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 8.707a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>`;
const P_X            = `<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>`;
const P_ARROW_RIGHT  = `<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>`;
const P_PLUS         = `<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>`;
const P_VIEW_GRID    = `<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>`;
const P_COLOR_SWATCH = `<path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"/>`;
const P_MENU         = `<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>`;
const P_DEVICE_MOB   = `<path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"/>`;
const P_CHECK_CIRCLE = `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>`;
const P_DOCUMENT     = `<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>`;
const P_USER_CIRCLE  = `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>`;

/* ── Data (from Figma) ───────────────────────────────────────────────────── */

// Default type: each result has a search icon on the left
const DATA_DEFAULT = {
  active:  { heading: 'Recent',    items: ['Customizing colors', 'Padding', 'Responsive Design', 'Blur', 'Typography'] },
  typing:  { heading: 'Recent',    items: ['Grid Template Columns', 'Grid Column Start / End', 'Grid Template Rows', 'grid', 'Inline Grid'] },
  withCta: { heading: 'Customers', items: ['Bones Joe'], cta: 'Add new' },
};

// Advanced type: each result has a category icon + right-side action button
const DATA_ADVANCED = {
  active: [{
    heading: 'Recent',
    items: [
      { icon: P_COLOR_SWATCH, text: 'Customizing colors' },
      { icon: P_MENU,         text: 'Padding' },
      { icon: P_DEVICE_MOB,   text: 'Responsive Design' },
      { icon: P_CHECK_CIRCLE, text: 'Blur' },
      { icon: P_DOCUMENT,     text: 'Typography' },
    ],
  }],
  typing: [
    {
      heading: 'Flexbox and Grid',
      items: [
        { icon: P_VIEW_GRID, text: 'Grid Template Columns' },
        { icon: P_VIEW_GRID, text: 'Grid Column Start / End' },
        { icon: P_VIEW_GRID, text: 'Grid Template Rows' },
        { icon: P_VIEW_GRID, text: 'grid' },
      ],
    },
    {
      heading: 'Layout',
      items: [
        { icon: P_VIEW_GRID, text: 'Inline Grid' },
        { icon: P_VIEW_GRID, text: 'grid' },
      ],
    },
  ],
  withCta: [{
    heading: 'Customers',
    items: [{ icon: P_USER_CIRCLE, text: 'Bones Joe' }],
    cta: 'Add new',
  }],
};

/* ── Builders ────────────────────────────────────────────────────────────── */

function inputField({ size, state, placeholder, query }) {
  const isOpen   = state !== 'initial';
  const isTyping = state === 'typing' || state === 'withCta';
  const height   = size === 'large' ? '52px' : '42px';
  const fontSize = size === 'large' ? '16px' : '14px';
  const borderColor = isOpen ? '#155dfc' : '#e5e7eb';
  const iconColor   = isOpen ? '#155dfc' : '#6b7280';
  const displayText = isTyping
    ? `${query}|`
    : (isOpen ? `|${placeholder}` : placeholder);
  const textColor = isOpen ? '#111928' : '#6b7280';

  return `
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:${height};background:#f9fafb;border:1px solid ${borderColor};border-radius:8px;box-sizing:border-box;">
  <span style="color:${iconColor};flex-shrink:0;display:flex;">${ico(P_SEARCH, 18)}</span>
  <span style="flex:1;font-size:${fontSize};color:${textColor};font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${displayText}</span>
  ${isTyping ? `<span style="color:#9ca3af;flex-shrink:0;display:flex;cursor:pointer;">${ico(P_X_CIRCLE, 18)}</span>` : ''}
</div>`;
}

function dropdownDefault(state) {
  const d = DATA_DEFAULT[state];
  if (!d) return '';

  const itemsHtml = d.items.map(text => `
  <div style="display:flex;align-items:center;gap:8px;padding:3px 0;">
    <span style="color:#9ca3af;flex-shrink:0;display:flex;">${ico(P_SEARCH, 14)}</span>
    <span style="font-size:14px;color:#6b7280;font-family:inherit;">${text}</span>
  </div>`).join('');

  const ctaHtml = d.cta ? `
  <div style="margin-top:8px;padding-top:8px;border-top:1px solid #e5e7eb;display:flex;align-items:center;gap:6px;cursor:pointer;">
    <span style="color:#1f2a37;flex-shrink:0;display:flex;">${ico(P_PLUS, 14)}</span>
    <span style="font-size:14px;font-weight:500;color:#155dfc;font-family:inherit;">${d.cta}</span>
  </div>` : '';

  return `
<div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;margin-top:4px;padding:12px 16px 8px;">
  <div style="font-size:14px;font-weight:600;color:#111928;font-family:inherit;margin-bottom:6px;">${d.heading}</div>
  ${itemsHtml}
  ${ctaHtml}
</div>`;
}

function dropdownAdvanced(state) {
  const sections = DATA_ADVANCED[state];
  if (!sections) return '';
  // Active = dismiss X; Typing/WithCTA = navigate arrow
  const isActive = state === 'active';
  const rightIcon = isActive ? ico(P_X, 14) : ico(P_ARROW_RIGHT, 14);

  return `
<div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;margin-top:4px;padding:12px 16px 8px;">
  ${sections.map((s, si) => `
  <div style="font-size:14px;font-weight:600;color:#111928;font-family:inherit;${si > 0 ? 'margin-top:10px;' : ''}margin-bottom:6px;">${s.heading}</div>
  ${s.items.map(({ icon, text }) => `
  <div style="display:flex;align-items:center;gap:8px;padding:4px 8px;border-radius:8px;background:#f9fafb;margin-bottom:4px;">
    <span style="color:#9ca3af;flex-shrink:0;display:flex;">${ico(icon, 14)}</span>
    <span style="flex:1;font-size:14px;color:#6b7280;font-family:inherit;">${text}</span>
    <span style="color:#6b7280;flex-shrink:0;display:flex;cursor:pointer;">${rightIcon}</span>
  </div>`).join('')}
  ${s.cta ? `
  <div style="margin-top:8px;padding-top:8px;border-top:1px solid #e5e7eb;display:flex;align-items:center;gap:6px;cursor:pointer;">
    <span style="color:#1f2a37;flex-shrink:0;display:flex;">${ico(P_PLUS, 14)}</span>
    <span style="font-size:14px;font-weight:500;color:#155dfc;font-family:inherit;">${s.cta}</span>
  </div>` : ''}`).join('')}
</div>`;
}

function autocomplete({ type = 'default', state = 'initial', size = 'default', placeholder = 'Quick search for anything', query = 'gri' }) {
  const isOpen   = state !== 'initial';
  const dropdown = !isOpen ? '' :
    type === 'advanced' ? dropdownAdvanced(state) : dropdownDefault(state);

  return `
<div style="width:400px;">
  ${inputField({ size, state, placeholder, query })}
  ${dropdown}
</div>`;
}

/* ── Default export ──────────────────────────────────────────────────────── */

export default {
  title: 'Iris Library/Autocomplete',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Autocomplete** combines a search input with a dropdown panel that surfaces suggestions as the user types.

**When to use**
- Global site/doc search with instant results (Default type)
- Entity lookup — searching users, customers, or tagged items (Advanced type with CTA)
- Filtering a long list by keyword when a dropdown alone is too small

**When NOT to use**
- Selecting from a short fixed list (≤ 8 items) → use a \`<select>\` or radio group
- Navigation menus → use Sidebar or Tabs
- Forms where free text is valid — do not constrain with suggestions

**Anatomy**
- **Input** (\`#f9fafb\` bg) — search icon (turns \`#155dfc\` on focus) + placeholder / typed text + clear × button
- **Dropdown panel** (\`#ffffff\`, \`#e5e7eb\` border, \`r:8px\`) — section heading + result rows + optional CTA
- **Result row — Default**: search icon + label
- **Result row — Advanced**: category icon + label + dismiss × (active) or navigate → (typing)
- **CTA row** (With CTA state): \`#e5e7eb\` divider + plus icon + action label in \`#155dfc\`
        `,
      },
    },
  },

  argTypes: {
    // ── Appearance ────────────────────────────────────────────────────────
    type: {
      control: 'select',
      options: ['default', 'advanced'],
      description: `**Default** — result rows show a plain search icon on the left. **Advanced** — result rows show a category-specific icon on the left and a dismiss × (active) or navigate → (typing) button on the right. Advanced items have a \`#f9fafb\` pill background.`,
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Input height and font size. Default = 42px / 14px. Large = 52px / 16px.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    // ── State ─────────────────────────────────────────────────────────────
    state: {
      control: 'select',
      options: ['initial', 'active', 'typing', 'withCta'],
      description: `Simulated interaction state:
- **initial** — closed, placeholder visible, gray border
- **active** — dropdown open, blue focus border (\`#155dfc\`), cursor before placeholder
- **typing** — open with typed query, clear × button visible, filtered results
- **withCta** — open with result + CTA row ("Add new")

Maps to \`aria-expanded\` on the input wrapper.`,
      table: { category: 'State', defaultValue: { summary: 'active' } },
    },
    // ── Content ───────────────────────────────────────────────────────────
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when the input is empty. Announced by screen readers as the input label.',
      table: { category: 'Content', defaultValue: { summary: 'Quick search for anything' } },
    },
    query: {
      control: 'text',
      description: 'Typed query shown in the **typing** and **withCta** states (cursor appended). Has no effect in initial / active states.',
      table: { category: 'Content', defaultValue: { summary: 'gri' } },
    },
  },

  args: {
    type: 'default',
    size: 'default',
    state: 'active',
    placeholder: 'Quick search for anything',
    query: 'gri',
  },
};

/* ── 1. Interactive ──────────────────────────────────────────────────────── */

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;
    const isOpen = a.state !== 'initial';
    const border = isOpen ? '#155dfc' : '#e5e7eb';
    const height = a.size === 'large' ? '52px' : '42px';

    const htmlCode = `<div role="combobox" style="position:relative;width:400px;">\n  <div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:${height};background:#f9fafb;border:1px solid ${border};border-radius:8px;">\n    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"><circle cx="6" cy="6" r="4"/><path d="m10 10 3 3"/></svg>\n    <input type="text" placeholder="${a.placeholder}" style="flex:1;border:none;background:transparent;" />\n  </div>\n  ${isOpen ? `<div role="listbox" style="position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #e5e7eb;border-radius:8px;margin-top:4px;padding:12px;z-index:10;">\n    <div style="font-weight:600;color:#111928;">Recent</div>\n    <div role="option" style="padding:8px 0;color:#6b7280;">Customizing colors</div>\n  </div>` : ''}\n</div>`;

    const reactCode = `<div role="combobox" style={{ position: 'relative' }}>\n  <div\n    style={{\n      display: 'flex',\n      alignItems: 'center',\n      gap: '8px',\n      padding: '0 12px',\n      height: '${height}',\n      background: '#f9fafb',\n      border: \`1px solid \${isOpen ? '#155dfc' : '#e5e7eb'}\`,\n      borderRadius: '8px',\n    }}\n  >\n    <input\n      type="text"\n      value={query}\n      onChange={(e) => setQuery(e.target.value)}\n      onFocus={() => setOpen(true)}\n      placeholder="${a.placeholder}"\n      role="combobox"\n      aria-expanded={isOpen}\n    />\n  </div>\n  {isOpen && (\n    <div role="listbox\" style={{ position: 'absolute', top: '100%', zIndex: 10 }}>\n      {results.map((item) => (\n        <div key={item} role="option\" onClick={() => onSelect(item)}>\n          {item}\n        </div>\n      ))}\n    </div>\n  )}\n</div>`;

    const componentCode = `export function Autocomplete({ items = [], placeholder, onSelect, size = 'default' }) {\n  const [open, setOpen] = useState(false);\n  const [query, setQuery] = useState('');\n  const [results, setResults] = useState(items);\n\n  const handleChange = (value) => {\n    setQuery(value);\n    setResults(items.filter((item) => item.toLowerCase().includes(value.toLowerCase())));\n  };\n\n  const handleSelect = (item) => {\n    setQuery(item);\n    setOpen(false);\n    onSelect?.(item);\n  };\n\n  return (\n    <div style={{ position: 'relative' }}>\n      <div\n        style={{\n          display: 'flex',\n          alignItems: 'center',\n          height: size === 'large' ? '52px' : '42px',\n          border: open ? '1px solid #155dfc' : '1px solid #e5e7eb',\n          borderRadius: '8px',\n          padding: '0 12px',\n          background: '#f9fafb',\n        }}\n      >\n        <input\n          type="text"\n          value={query}\n          onChange={(e) => handleChange(e.target.value)}\n          onFocus={() => setOpen(true)}\n          placeholder={placeholder}\n          role="combobox"\n          aria-expanded={open}\n          style={{ flex: 1, border: 'none', background: 'transparent' }}\n        />\n      </div>\n      {open && (\n        <div style={{\n          position: 'absolute',\n          top: '100%',\n          left: 0,\n          right: 0,\n          background: '#fff',\n          border: '1px solid #e5e7eb',\n          borderRadius: '8px',\n          marginTop: '4px',\n          zIndex: 1000,\n        }}>\n          {results.map((item) => (\n            <div\n              key={item}\n              role="option\"\n              onClick={() => handleSelect(item)}\n              style={{ padding: '8px 12px', cursor: 'pointer' }}\n            >\n              {item}\n            </div>\n          ))}\n        </div>\n      )}\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          ${autocomplete(args)}
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${componentEscaped}</code></pre>
            </div>
            <button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
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
            this.style.background = '#dcfce7';
            this.style.color = '#166534';
            this.style.borderColor = '#bbf7d0';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = '#f3f4f6';
              this.style.color = '#374151';
              this.style.borderColor = '#d1d5db';
            }, 2000);
          });
        });
      </script>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to test different states and sizes. Always show suggestions on focus.',
      },
    },
  },
};

/* ── 2. States — Default type ────────────────────────────────────────────── */

export const StatesDefault = {
  name: 'States — Default type',
  args: { size: 'default' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `All four states of the **Default** type (plain search-icon results). Toggle **size** to preview at Default (42px) or Large (52px).

✅ **Active** state should appear immediately when the input receives focus — show "Recent" without waiting for input
✅ **Typing** state: highlight matched characters in result labels (not shown in static story)
❌ Don't show an empty dropdown — if there are no results, show a "No results" message instead`,
      },
      source: {
        language: 'html',
        code: `<!-- Initial: closed -->
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
  <!-- search icon #6b7280 -->
  <input placeholder="Quick search for anything" style="flex:1;border:none;background:transparent;font-size:14px;color:#6b7280;"/>
</div>

<!-- Active: open, focus ring #155dfc -->
<div style="width:400px;">
  <div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #155dfc;border-radius:8px;">
    <!-- search icon #155dfc -->
    <input placeholder="Quick search for anything" style="flex:1;border:none;background:transparent;font-size:14px;color:#111928;"/>
  </div>
  <div role="listbox" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;margin-top:4px;padding:12px 16px 8px;">
    <div style="font-size:14px;font-weight:600;color:#111928;margin-bottom:6px;">Recent</div>
    <div role="option" style="display:flex;align-items:center;gap:8px;padding:3px 0;">
      <!-- search icon 14px #9ca3af -->
      <span style="font-size:14px;color:#6b7280;">Customizing colors</span>
    </div>
    <!-- more rows... -->
  </div>
</div>

<!-- Typing: × clear button, filtered results -->
<!-- With CTA: last row has divider + plus + "Add new" in #155dfc -->`,
      },
    },
  },
  render: ({ size }) => {
    const states = [
      { state: 'initial', label: 'Initial' },
      { state: 'active',  label: 'Active (open)' },
      { state: 'typing',  label: 'Typing ("gri")' },
      { state: 'withCta', label: 'With CTA ("Bonnie Green")' },
    ];
    const queries = { typing: 'gri', withCta: 'Bonnie Green' };
    return `
<div style="display:flex;flex-wrap:wrap;gap:32px;align-items:flex-start;padding:24px;background:var(--color-bg-default);">
  ${states.map(({ state, label }) => `
  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);letter-spacing:.06em;margin-bottom:10px;">${label}</p>
    ${autocomplete({ type: 'default', state, size, placeholder: 'Quick search for anything', query: queries[state] || 'gri' })}
  </div>`).join('')}
</div>`;
  },
};

/* ── 3. States — Advanced type ───────────────────────────────────────────── */

export const StatesAdvanced = {
  name: 'States — Advanced type',
  args: { size: 'default' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `All four states of the **Advanced** type (category icon + dismiss/navigate per result). Toggle **size** to preview at Default or Large.

- **Active** — each item has a dismiss **×** on the right (remove from recent)
- **Typing** — each item has a navigate **→** on the right (go to that result)
- **With CTA** — single result + "Add new" CTA with \`#155dfc\` blue text

✅ Use Advanced type when results come from different categories (docs sections, user records, settings pages)
❌ Don't use Advanced type for simple homogeneous lists — Default type is less noisy`,
      },
      source: {
        language: 'html',
        code: `<!-- Advanced type — Active state (dismiss × on each item) -->
<div style="width:400px;">
  <div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #155dfc;border-radius:8px;">
    <!-- search icon #155dfc -->
    <input value="|Quick search for anything" style="flex:1;border:none;background:transparent;font-size:14px;color:#111928;"/>
  </div>
  <div role="listbox" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;margin-top:4px;padding:12px 16px 8px;">
    <div style="font-size:14px;font-weight:600;color:#111928;margin-bottom:6px;">Recent</div>
    <!-- Advanced result row: pill bg #f9fafb, r:8px -->
    <div role="option" style="display:flex;align-items:center;gap:8px;padding:4px 8px;border-radius:8px;background:#f9fafb;margin-bottom:4px;">
      <!-- category icon 14px #9ca3af (e.g. color-swatch, view-grid, user-circle) -->
      <span style="flex:1;font-size:14px;color:#6b7280;">Customizing colors</span>
      <!-- dismiss × icon 14px #6b7280 (active) or navigate → (typing) -->
    </div>
  </div>
</div>`,
      },
    },
  },
  render: ({ size }) => {
    const states = [
      { state: 'initial', label: 'Initial' },
      { state: 'active',  label: 'Active (dismiss ×)' },
      { state: 'typing',  label: 'Typing (navigate →)' },
      { state: 'withCta', label: 'With CTA' },
    ];
    const queries = { typing: 'gri', withCta: 'Bonnie Green' };
    return `
<div style="display:flex;flex-wrap:wrap;gap:32px;align-items:flex-start;padding:24px;background:var(--color-bg-default);">
  ${states.map(({ state, label }) => `
  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);letter-spacing:.06em;margin-bottom:10px;">${label}</p>
    ${autocomplete({ type: 'advanced', state, size, placeholder: 'Quick search for anything', query: queries[state] || 'gri' })}
  </div>`).join('')}
</div>`;
  },
};

/* ── 4. Sizes ────────────────────────────────────────────────────────────── */

export const Sizes = {
  name: 'Sizes — Default vs Large',
  args: { type: 'default' },
  parameters: {
    controls: { include: ['type'] },
    docs: {
      description: {
        story: `Default (42px / 14px) vs Large (52px / 16px). Toggle **type** to compare Default and Advanced side-by-side.

✅ Use **Large** for prominent search bars — hero sections, top nav, modal search
✅ Use **Default** for inline search within a data table or sidebar filter panel
❌ Do not mix sizes within the same search context`,
      },
      source: {
        language: 'html',
        code: `<!-- Default size: 42px height, 14px font -->
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:42px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
  <!-- search icon 18px -->
  <input placeholder="Quick search for anything" style="font-size:14px;border:none;background:transparent;"/>
</div>

<!-- Large size: 52px height, 16px font -->
<div style="display:flex;align-items:center;gap:8px;padding:0 12px;height:52px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
  <!-- search icon 18px -->
  <input placeholder="Quick search for anything" style="font-size:16px;border:none;background:transparent;"/>
</div>`,
      },
    },
  },
  render: ({ type }) => `
<div style="display:flex;flex-wrap:wrap;gap:40px;align-items:flex-start;padding:24px;background:var(--color-bg-default);">
  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);letter-spacing:.06em;margin-bottom:10px;">Default — 42px / 14px</p>
    ${autocomplete({ type, state: 'active', size: 'default', placeholder: 'Quick search for anything', query: 'gri' })}
  </div>
  <div>
    <p style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--color-text-secondary);letter-spacing:.06em;margin-bottom:10px;">Large — 52px / 16px</p>
    ${autocomplete({ type, state: 'active', size: 'large', placeholder: 'Quick search for anything', query: 'gri' })}
  </div>
</div>`,
};
