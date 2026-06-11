// Figma node: 3284:24121 (List — Type=Default × Icons=True/False × Dark=True/False)
// File key: ZKtEULdYKaXe5uQl1J6ijI

// ─── SVG icons (16×16, matching Figma fills) ──────────────────────────────────
const ICONS = {
  'user-circle': (c) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.4 13.6A6 6 0 0 1 14 13.6" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="8" cy="8" r="7" stroke="${c}" stroke-width="1.3"/>
  </svg>`,
  'adjustments': (c) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4h12M2 8h12M2 12h12" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="5" cy="4" r="1.5" fill="${c}"/>
    <circle cx="10" cy="8" r="1.5" fill="${c}"/>
    <circle cx="6" cy="12" r="1.5" fill="${c}"/>
  </svg>`,
  'inbox': (c) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="14" height="14" rx="2" stroke="${c}" stroke-width="1.3"/>
    <path d="M1 9h3l2 2h4l2-2h3" stroke="${c}" stroke-width="1.3" stroke-linejoin="round"/>
  </svg>`,
  'cloud-download': (c) => `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 12.5H4a3 3 0 0 1 0-6h.15A4.5 4.5 0 0 1 13 7.5a3 3 0 0 1-1 5.5h-1.5" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M8 8.5v5M6 11.5l2 2 2-2" stroke="${c}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

// ─── Default items from Figma ──────────────────────────────────────────────────
const DEFAULT_ITEMS = [
  { label: 'Profile',  icon: 'user-circle'  },
  { label: 'Settings', icon: 'adjustments'  },
  { label: 'Messages', icon: 'inbox'        },
  { label: 'Download', icon: 'cloud-download'},
];

// ─── List Group renderer ───────────────────────────────────────────────────────
// All styling comes from the real .list-group* classes; width inline = data.
function listGroup({ items = DEFAULT_ITEMS, showIcons = false, dark = false, width = 240 }) {
  const rows = items.map((item) => {
    const iconEl = showIcons && item.icon
      ? `<span class="list-group-item__icon">${(ICONS[item.icon] || ICONS['user-circle'])('currentColor')}</span>`
      : '';
    return `  <li class="list-group-item">${iconEl}${item.label}</li>`;
  }).join('\n');

  return `<ul class="list-group${dark ? ' list-group--dark' : ''}" style="width:${width}px;">
${rows}
</ul>`;
}

// ─── Default export ────────────────────────────────────────────────────────────
export default {
  title: 'Iris Library/List Group',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**List Group** is a vertical menu or option list, typically rendered as a dropdown panel or sidebar sub-menu. It supports optional leading icons and light/dark themes.

**When to use**
- User account dropdown menus (Profile · Settings · Sign out)
- Context menus and action lists on right-click or overflow button
- Navigation sub-panels in sidebars

**When NOT to use**
- Long scrollable lists of data → use a **Table** instead
- Mutually exclusive choices → use **Radio** or **Select**
- Multi-select → use **Multiselect** or **Tag Input**

**Anatomy** (CSS classes — Figma 3284:24121)
- Container — \`.list-group\`: white bg, \`1px solid var(--color-border-default)\`, radius 8px. Width is data — Figma default 240px, set inline.
- List item — \`.list-group-item\`: padding \`8px 16px\` (37px row), gap 6px, divider \`1px solid var(--color-border-default)\`
- Leading icon (optional) — \`.list-group-item__icon\`, 16×16px, \`currentColor\` (inherits item text color)
- Label — \`font-size:14px\`, \`font-weight:500\`, color \`#111928\`

**Dark mode** — add \`.list-group--dark\` to the container
- Container: \`bg:#374151\` (gray-700), border \`#4b5563\`
- Dividers: \`#4b5563\`
- Text + icons: white (icons inherit via \`currentColor\`)

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    // ── Appearance ─────────────────────────────────────────────────────
    showIcons: {
      control: 'boolean',
      description: 'Show a 16×16px leading icon beside each item label.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
    dark: {
      control: 'boolean',
      description: 'Dark theme. CSS class: `.list-group--dark` — container `#374151`, border/dividers `#4b5563`, text/icons white. Use on dark surfaces or inside dark dropdowns.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
    width: {
      control: { type: 'range', min: 160, max: 400, step: 8 },
      description: 'Container width in px. Figma default is 240px.',
      table: { category: 'Appearance', defaultValue: { summary: 240 } },
    },
  },
  args: {
    showIcons: false,
    dark: false,
    width: 240,
  },
};

// ─── Interactive (Controls) ───────────────────────────────────────────────────
export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const darkCls = args.dark ? ' list-group--dark' : '';

    // HTML snippet = simplified builder output → preview and snippet share the same classes
    const htmlCode = `<ul class="list-group${darkCls}" style="width:${args.width}px;">\n  <li class="list-group-item">Profile</li>\n  <li class="list-group-item">Settings</li>\n  <li class="list-group-item">Messages</li>\n  <li class="list-group-item">Download</li>\n</ul>`;

    const reactCode = `<ul className="list-group${darkCls}" style={{ width: ${args.width} }}>\n  {items.map((item) => (\n    <li key={item.label} className="list-group-item" onClick={() => onSelect(item)}>\n      ${args.showIcons ? '<span className="list-group-item__icon">{item.icon}</span>\n      ' : ''}{item.label}\n    </li>\n  ))}\n</ul>`;

    const componentCode = `// Layout and colors come from the real .list-group* classes (iris-components.css)\nexport function ListGroup({ items = [], showIcons = false, dark = false, width = 240, onSelect }) {\n  return (\n    <ul className={\`list-group\${dark ? ' list-group--dark' : ''}\`} style={{ width }}>\n      {items.map((item) => (\n        <li key={item.label} className="list-group-item" onClick={() => onSelect?.(item)}>\n          {showIcons && item.icon && (\n            <span className="list-group-item__icon">{item.icon}</span>\n          )}\n          {item.label}\n        </li>\n      ))}\n    </ul>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;"><div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">${listGroup({ ...args, items: DEFAULT_ITEMS })}</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;"><div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;"><div style="font-weight:600;font-size:12px;margin-bottom:12px;text-transform:uppercase;">HTML</div><div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;"><pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;"><code>${htmlEscaped}</code></pre></div><button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-size:12px;">Copy</button></div><div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;"><div style="font-weight:600;font-size:12px;margin-bottom:12px;text-transform:uppercase;">React</div><div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;"><pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;"><code>${reactEscaped}</code></pre></div><button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-size:12px;">Copy</button></div><div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;"><div style="font-weight:600;font-size:12px;margin-bottom:12px;text-transform:uppercase;">Component</div><div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;"><pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;"><code>${componentEscaped}</code></pre></div><button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-size:12px;">Copy</button></div></div></div><script>document.querySelectorAll('.storybook-copy-btn').forEach(b=>{b.addEventListener('click',function(){navigator.clipboard.writeText(this.dataset.copy);this.innerHTML='Copied!';this.style.background='var(--color-success-light)';setTimeout(()=>{this.innerHTML='Copy';this.style.background='var(--color-bg-secondary)';},2000);});});</script>`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to test dark theme and icon variants.',
      },
      source: {
        // Snippet = the actual builder output → always matches the preview
        transform: (_src, ctx) => listGroup({ ...ctx.args, items: DEFAULT_ITEMS }).trim(),
      },
    },
  },
};

// ─── Gallery: All variants ────────────────────────────────────────────────────
export const AllVariants = {
    name: 'All variants',
  args: { width: 240 },
  parameters: {
    controls: { include: ['width'] },
    docs: {
      description: {
        story: `All 4 Figma variants in a 2×2 grid: icons on/off × light/dark. Use the **width** control to preview all variants at any container width.

✅ Always use icons consistently — either all items have icons or none do
✅ In dark dropdowns, make sure the container background matches the surrounding dark surface
❌ Don't mix icon sizes within one list — all icons must be the same size`,
      },
      source: {
        code: `<!-- Light, no icons -->
<ul class="list-group" style="width:240px;">
  <li class="list-group-item">Profile</li>
  <li class="list-group-item">Settings</li>
  <li class="list-group-item">Messages</li>
  <li class="list-group-item">Download</li>
</ul>

<!-- Light, with icons (16×16, currentColor) -->
<ul class="list-group" style="width:240px;">
  <li class="list-group-item">
    <span class="list-group-item__icon"><svg><!-- user-circle --></svg></span>Profile
  </li>
  ...
</ul>

<!-- Dark -->
<ul class="list-group list-group--dark" style="width:240px;">
  <li class="list-group-item">Profile</li>
  ...
</ul>`,
      },
    },
  },
  render: ({ width }) => {
    const variants = [
      { showIcons: false, dark: false, label: 'Light — no icons' },
      { showIcons: true,  dark: false, label: 'Light — with icons' },
      { showIcons: false, dark: true,  label: 'Dark — no icons' },
      { showIcons: true,  dark: true,  label: 'Dark — with icons' },
    ];
    return `<div style="display:grid;grid-template-columns:repeat(2,auto);gap:24px;align-items:start;font-family:inherit;">
      ${variants.map(v =>
        `<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${v.label}</div>
          ${listGroup({ ...v, width, items: DEFAULT_ITEMS })}
        </div>`
      ).join('')}
    </div>`;
  },
};

// ─── Gallery: In context (user dropdown) ─────────────────────────────────────
export const InContext = {
    name: 'In context — user dropdown',
  args: { dark: false },
  parameters: {
    controls: { include: ['dark'] },
    docs: {
      description: {
        story: `Shows the List Group as a user-account dropdown triggered from an avatar button — the most common usage pattern. Toggle **dark** to preview the dark-mode variant.`,
      },
      source: {
        code: `<!-- Avatar trigger (demo — not a library component) -->
<button type="button" aria-haspopup="menu" style="background:none;border:none;padding:0;cursor:pointer;">
  <img src="avatar.jpg" alt="User avatar" style="width:32px;height:32px;border-radius:50%;" />
</button>

<!-- Dropdown panel (shown on click) -->
<ul class="list-group" style="position:absolute;top:100%;right:0;width:240px;z-index:50;">
  <li class="list-group-item"><span class="list-group-item__icon"><!-- user-circle svg --></span>Profile</li>
  <li class="list-group-item"><span class="list-group-item__icon"><!-- adjustments svg --></span>Settings</li>
  <li class="list-group-item"><span class="list-group-item__icon"><!-- inbox svg --></span>Messages</li>
  <li class="list-group-item"><span class="list-group-item__icon"><!-- cloud-download svg --></span>Download</li>
</ul>`,
      },
    },
  },
  render: ({ dark }) => {
    const bg      = dark ? 'var(--color-text-heading)' : 'var(--color-bg-secondary)';
    const avatarBg = dark ? 'var(--color-text-primary)' : 'var(--color-border-default)';
    return `<div style="position:relative;display:inline-block;padding:16px;background:${bg};border-radius:12px;font-family:inherit;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:36px;height:36px;border-radius:50%;background:${avatarBg};display:flex;align-items:center;justify-content:center;cursor:pointer;">
          ${ICONS['user-circle'](dark ? 'var(--color-border-light)' : '#6b7280')}
        </div>
        <span style="font-size:13px;font-weight:500;color:${dark ? 'var(--color-border-default)' : 'var(--color-text-primary)'};font-family:inherit;">bonnie.green</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="m3 5 4 4 4-4" stroke="${dark ? 'var(--color-border-light)' : '#6b7280'}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      ${listGroup({ items: DEFAULT_ITEMS, showIcons: true, dark })}
    </div>`;
  },
};

// ─── Gallery: Custom items ────────────────────────────────────────────────────
export const CustomItems = {
    name: 'Custom items — longer list',
  args: { showIcons: true, dark: false },
  parameters: {
    controls: { include: ['showIcons', 'dark'] },
    docs: {
      description: {
        story: 'An 8-item list demonstrating that dividers and padding stay consistent regardless of item count.',
      },
      source: {
        code: `<ul class="list-group" style="width:240px;">
  <!-- repeat <li class="list-group-item"> for each entry -->
</ul>`,
      },
    },
  },
  render: ({ showIcons, dark }) => {
    const items = [
      { label: 'Profile',       icon: 'user-circle'   },
      { label: 'Settings',      icon: 'adjustments'   },
      { label: 'Messages',      icon: 'inbox'         },
      { label: 'Downloads',     icon: 'cloud-download'},
      { label: 'Edit account',  icon: 'adjustments'   },
      { label: 'Notifications', icon: 'inbox'         },
      { label: 'Privacy',       icon: 'adjustments'   },
      { label: 'Sign out',      icon: 'user-circle'   },
    ];
    return `<div style="font-family:inherit;">
      ${listGroup({ items, showIcons, dark })}
    </div>`;
  },
};
