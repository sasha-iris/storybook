// Figma node: 3284:24121 (List — Type=Default × Icons=True/False × Dark=True/False)
// File key: ZKtEULdYKaXe5uQl1J6ijI

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  // Light
  bg:         'var(--color-bg-white)',
  border:     'var(--color-border-default)',
  divider:    'var(--color-border-default)',
  text:       '#111928',
  iconFill:   '#111928',
  // Dark
  dark_bg:    'var(--color-text-primary)',
  dark_border:'#4b5563',
  dark_div:   '#4b5563',
  dark_text:  'var(--color-bg-white)',
  dark_icon:  'var(--color-bg-white)',
};

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
function listGroup({ items = DEFAULT_ITEMS, showIcons = false, dark = false, width = 240 }) {
  const bg      = dark ? T.dark_bg     : T.bg;
  const border  = dark ? T.dark_border : T.border;
  const divider = dark ? T.dark_div    : T.divider;
  const text    = dark ? T.dark_text   : T.text;
  const iconClr = dark ? T.dark_icon   : T.iconFill;

  const rows = items.map((item, i) => {
    const borderTop = i > 0 ? `border-top:1px solid ${divider};` : '';
    const iconEl = showIcons && item.icon
      ? `<span style="flex-shrink:0;display:flex;align-items:center;">${(ICONS[item.icon] || ICONS['user-circle'])(iconClr)}</span>`
      : '';
    return `<div style="display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;
      box-sizing:border-box;cursor:pointer;${borderTop}
      font-family:inherit;">
      ${iconEl}
      <span style="font-size:14px;font-weight:500;color:${text};font-family:inherit;">${item.label}</span>
    </div>`;
  }).join('');

  return `<div style="width:${width}px;background:${bg};border:1px solid ${border};
    border-radius:8px;overflow:hidden;font-family:inherit;">${rows}</div>`;
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

**Anatomy**
- Container — \`bg:var(--color-bg-white)\`, \`border:1px solid var(--color-border-default)\`, \`border-radius:8px\`, \`width:240px\`
- List item — \`height:37px\`, \`padding:0 16px\`, separated by \`1px solid var(--color-border-default)\` dividers
- Leading icon (optional) — \`16×16px\`, fill \`#111928\` (light) / \`var(--color-bg-white)\` (dark)
- Label — \`font-size:14px\`, \`font-weight:500\`

**Dark mode**
- Container: \`bg:var(--color-text-primary)\`, \`border:#4b5563\`
- Dividers: \`#4b5563\`
- Text + icons: \`var(--color-bg-white)\`

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
      description: 'Dark theme. Container `bg:var(--color-text-primary)`, dividers `#4b5563`, text/icons `var(--color-bg-white)`. Use on dark surfaces or inside dark dropdowns.',
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
    const bg = args.dark ? 'var(--color-text-primary)' : 'var(--color-bg-white)';
    const border = args.dark ? '#4b5563' : 'var(--color-border-default)';
    const text = args.dark ? 'var(--color-bg-white)' : '#111928';

    const htmlCode = `<ul style="width:240px;background:${bg};border:1px solid ${border};border-radius:8px;overflow:hidden;list-style:none;margin:0;padding:0;">\n  <li style="display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;color:${text};">Profile</li>\n  <li style="border-top:1px solid ${border};display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;color:${text};">Settings</li>\n  <li style="border-top:1px solid ${border};display:flex;align-items:center;gap:10px;height:37px;padding:0 16px;color:${text};">Messages</li>\n</ul>`;

    const reactCode = `<ul style={{ background: '${bg}', border: '1px solid ' + '${border}', borderRadius: '8px', listStyle: 'none' }}>\n  {items.map((item, i) => (\n    <li key={i} onClick={() => onSelect(item)} style={{\n      display: 'flex',\n      padding: '0 16px',\n      height: '37px',\n      borderTop: i > 0 ? '1px solid ${border}' : 'none',\n    }}>\n      {item}\n    </li>\n  ))}\n</ul>`;

    const componentCode = `export function ListGroup({ items = [], dark = false, onSelect }) {\n  return (\n    <ul style={{\n      background: dark ? 'var(--color-text-primary)' : 'var(--color-bg-white)',\n      border: '1px solid ' + (dark ? '#4b5563' : 'var(--color-border-default)'),\n      borderRadius: '8px',\n      listStyle: 'none',\n      margin: 0,\n      padding: 0,\n    }}>\n      {items.map((item, i) => (\n        <li\n          key={i}\n          onClick={() => onSelect?.(item)}\n          style={{\n            display: 'flex',\n            alignItems: 'center',\n            padding: '0 16px',\n            height: '37px',\n            borderTop: i > 0 ? '1px solid' + (dark ? '#4b5563' : 'var(--color-border-default)') : 'none',\n            cursor: 'pointer',\n            color: dark ? 'var(--color-bg-white)' : '#111928',\n          }}\n        >\n          {item}\n        </li>\n      ))}\n    </ul>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;"><div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">${listGroup({ ...args, items: DEFAULT_ITEMS })}</div><div style="display:flex;flex-direction:column;gap:24px;"><div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;"><div style="font-weight:600;font-size:12px;margin-bottom:12px;text-transform:uppercase;">HTML</div><div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;"><pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;"><code>${htmlEscaped}</code></pre></div><button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-size:12px;">Copy</button></div><div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;"><div style="font-weight:600;font-size:12px;margin-bottom:12px;text-transform:uppercase;">React</div><div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;"><pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;"><code>${reactEscaped}</code></pre></div><button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-size:12px;">Copy</button></div><div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;"><div style="font-weight:600;font-size:12px;margin-bottom:12px;text-transform:uppercase;">Component</div><div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;"><pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;"><code>${componentEscaped}</code></pre></div><button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-size:12px;">Copy</button></div></div></div><script>document.querySelectorAll('.storybook-copy-btn').forEach(b=>{b.addEventListener('click',function(){navigator.clipboard.writeText(this.dataset.copy);this.innerHTML='Copied!';this.style.background='var(--color-success-light)';setTimeout(()=>{this.innerHTML='Copy';this.style.background='var(--color-bg-secondary)';},2000);});});</script>`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to test dark theme and icon variants.',
      },
    },
  },
};

// ─── Gallery: All variants ────────────────────────────────────────────────────
export const AllVariants = {
    name: 'All variants',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `All 4 Figma variants in a 2×2 grid: icons on/off × light/dark.

✅ Always use icons consistently — either all items have icons or none do
✅ In dark dropdowns, make sure the container background matches the surrounding dark surface
❌ Don't mix icon sizes within one list — all icons must be the same size`,
      },
      source: {
        code: `<!-- Light, no icons -->
<ul class="list-group">
  <li class="list-group-item">Profile</li>
  <li class="list-group-item">Settings</li>
  <li class="list-group-item">Messages</li>
  <li class="list-group-item">Download</li>
</ul>

<!-- Light, with icons -->
<ul class="list-group">
  <li class="list-group-item">
    <svg><!-- user-circle --></svg> Profile
  </li>
  ...
</ul>`,
      },
    },
  },
  render: () => {
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
          ${listGroup({ ...v, items: DEFAULT_ITEMS })}
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
        code: `<!-- Avatar trigger button -->
<button class="avatar-btn">
  <img src="avatar.jpg" alt="User avatar" class="w-8 h-8 rounded-full" />
</button>

<!-- Dropdown panel (shown on click) -->
<ul class="list-group" style="position:absolute;top:100%;right:0;width:240px;z-index:50;">
  <li class="list-group-item"><svg>user-circle</svg> Profile</li>
  <li class="list-group-item"><svg>adjustments</svg> Settings</li>
  <li class="list-group-item"><svg>inbox</svg> Messages</li>
  <li class="list-group-item"><svg>cloud-download</svg> Download</li>
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
        code: `<ul style="width:240px;background:#fff;border:1px solid var(--color-border-default);border-radius:8px;overflow:hidden;">
  <!-- repeat list-item pattern for each entry -->
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
