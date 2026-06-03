// Figma node: 12690:51843 (Search — 6 types)
// File key: ZKtEULdYKaXe5uQl1J6ijI

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  inputBg:      'var(--color-bg-tertiary)',
  border:       'var(--color-border-default)',
  placeholder:  '#6b7280',
  value:        '#111928',
  selectBg:     'var(--color-bg-secondary)',
  btnPurple:    '#42389d',
  btnText:      '#111928',
};

// ─── SVG icons ────────────────────────────────────────────────────────────────
const icnSearch = (c='var(--color-bg-white)', size=20) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none"><path d="M17.5 17.5 13.5 13.5M15 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const icnChevronDown = (c='#111928', size=20) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none"><path d="m5 7.5 5 5 5-5" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const icnFlag = () =>
  `<svg width="14" height="12" viewBox="0 0 14 12" fill="none"><rect width="14" height="4" y="0" fill="#B22334"/><rect width="14" height="4" y="4" fill="#FFFFFF"/><rect width="14" height="4" y="8" fill="#B22334"/><rect x="0" y="0" width="6" height="8" fill="#3C3B6E"/></svg>`;

// ─── Search builder helpers ───────────────────────────────────────────────────
function inputBox({ placeholder = 'Search', width = '100%', leftIcon = false, rightIcon = false }) {
  return `<div style="display:flex;align-items:center;gap:8px;height:42px;padding:0 12px;
    background:${C.inputBg};flex:1;min-width:0;box-sizing:border-box;">
    ${leftIcon ? `<span style="flex-shrink:0;display:flex;">${icnSearch(C.placeholder, 18)}</span>` : ''}
    <span style="flex:1;font-size:14px;color:${C.placeholder};font-family:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${placeholder}</span>
    ${rightIcon ? `<span style="flex-shrink:0;display:flex;">${icnMic()}</span>` : ''}
  </div>`;
}

function iconBtn(bg, size = 42) {
  return `<button style="width:${size}px;height:${size}px;background:${bg};border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    ${icnSearch('var(--color-bg-white)', 20)}
  </button>`;
}

function selectBtn(text) {
  return `<button style="height:42px;padding:0 12px;background:${C.selectBg};border:1px solid ${C.border};cursor:pointer;display:flex;align-items:center;gap:6px;white-space:nowrap;flex-shrink:0;">
    <span style="font-size:14px;font-weight:500;color:${C.btnText};font-family:inherit;">${text}</span>
    ${icnChevronDown()}
  </button>`;
}

// ─── Search type renderers ────────────────────────────────────────────────────
const TYPES = {
  'input-select-btn': () =>
    `<div style="display:flex;overflow:hidden;border:1px solid ${C.border};border-radius:8px;">
      ${selectBtn('All categories')}
      ${inputBox({ placeholder: 'Search Mockups, Logos, Design Templates...' })}
      ${iconBtn(C.btnPurple)}
    </div>`,

  'input-btn': () =>
    `<div style="display:flex;overflow:hidden;border:1px solid ${C.border};border-radius:8px;">
      ${inputBox({ placeholder: 'Search', leftIcon: true })}
      ${iconBtn(C.btnPurple)}
    </div>`,

  'input-flag': () =>
    `<div style="display:flex;align-items:center;height:42px;padding:0 12px;background:${C.inputBg};border:1px solid ${C.border};border-radius:8px;gap:8px;box-sizing:border-box;">
      <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;">
        ${icnFlag()}
        <span style="font-size:14px;font-weight:600;color:${C.placeholder};font-family:inherit;">USA</span>
        ${icnChevronDown(C.placeholder, 14)}
      </div>
      <div style="width:1px;height:18px;background:var(--color-border-default);flex-shrink:0;"></div>
      <span style="font-size:14px;color:${C.placeholder};font-family:inherit;">Search for city</span>
    </div>`,

  'btn-inside': () =>
    `<div style="display:flex;align-items:center;height:54px;padding:0 8px;background:${C.inputBg};border:1px solid ${C.border};border-radius:8px;gap:8px;box-sizing:border-box;">
      <span style="display:flex;flex-shrink:0;">${icnSearch(C.placeholder, 18)}</span>
      <span style="flex:1;font-size:14px;color:${C.placeholder};font-family:inherit;">Search Mockups, Logos ...</span>
      <button style="height:34px;padding:0 12px;background:${C.btnBlue};border:none;border-radius:6px;cursor:pointer;font-family:inherit;">
        <span style="font-size:12px;font-weight:500;color:var(--color-bg-white);">Search</span>
      </button>
    </div>`,

};

const TYPE_LABELS = {
  'input-select-btn': 'Input + Select + Button',
  'input-btn':        'Input + Button',
  'input-flag':       'Input + Flag',
  'btn-inside':       'Input & Button inside form',
};

// ─── Default export ────────────────────────────────────────────────────────────
export default {
  title: 'Iris Library/Search',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Search** provides 6 composite search input patterns, each combining an input field with buttons, selects, or flags in a single visual unit.

**When to use**
- Site-wide search (Input + Button)
- Category-filtered search (Input + Select + Button)
- Location/country search (Input + Flag)
- Embedded in a card or modal (Button inside form)

**When NOT to use**
- When the user types open-ended text and you don't need a trigger button → use plain **Input Field**
- For filtering a visible list as you type → use **Autocomplete**

**Anatomy**
- Input area — \`bg:var(--color-bg-tertiary)\`, \`border:var(--color-border-default)\`, placeholder \`#6b7280\`
- Category select (optional) — \`bg:var(--color-bg-secondary)\`, dropdown chevron
- Search button — icon-only (\`bg:#42389d\`) or labeled (\`bg:#1447e6\`)
- Flag + country code (optional) — for geo-search
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(TYPE_LABELS),
      description: 'Search composite type. Each combines input + controls differently.',
      table: { category: 'Appearance', defaultValue: { summary: 'input-btn' } },
    },
  },
  args: {
    type: 'input-btn',
  },
};

// ─── Interactive (Controls) ───────────────────────────────────────────────────
export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const t = args.type || 'input-btn';
    const fn = TYPES[t] || TYPES['input-btn'];

    const htmlCode = `<div class="flex overflow-hidden rounded-lg border border-gray-300">\n  <input type="text" placeholder="Search..." class="flex-1 px-3 h-[42px] bg-gray-50 border-none outline-none" />\n  <button class="w-[42px] h-[42px] bg-[#42389d] flex items-center justify-center" aria-label="Search">\n    <!-- search icon -->\n  </button>\n</div>`;

    const reactCode = `<div className="flex overflow-hidden rounded-lg border border-gray-300">\n  <input\n    type="text"\n    placeholder="Search..."\n    className="flex-1 px-3 h-[42px] bg-gray-50 border-none outline-none"\n    onChange={(e) => setQuery(e.target.value)}\n  />\n  <button\n    className="w-[42px] h-[42px] bg-[#42389d] flex items-center justify-center"\n    aria-label="Search"\n    onClick={() => onSearch(query)}\n  >\n    {/* search icon */}\n  </button>\n</div>`;

    const componentCode = `export function SearchInput({ placeholder = "Search...", onSearch, onChange }) {\n  const [query, setQuery] = useState('');\n\n  const handleSearch = () => {\n    onSearch?.(query);\n  };\n\n  return (\n    <div className="flex overflow-hidden rounded-lg border border-gray-300">\n      <input\n        type="text"\n        placeholder={placeholder}\n        className="flex-1 px-3 h-[42px] bg-gray-50 border-none outline-none"\n        value={query}\n        onChange={(e) => {\n          setQuery(e.target.value);\n          onChange?.(e.target.value);\n        }}\n        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}\n      />\n      <button\n        className="w-[42px] h-[42px] bg-[#42389d] flex items-center justify-center hover:bg-[#362f78]"\n        aria-label="Search"\n        onClick={handleSearch}\n      >\n        {/* search icon */}\n      </button>\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;max-width:400px;">
          <div style="max-width:540px;font-family:inherit;">${fn()}</div>
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
        story: 'Use the Controls panel to switch between search patterns.',
      },
    },
  },
};

// ─── Gallery: All types ───────────────────────────────────────────────────────
export const AllTypes = {
    name: 'All types',
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `All 6 search patterns from Figma. Each is a full-width composite — place them in headers, filter bars, or hero sections.

✅ **Input + Select + Button** — most common pattern for marketplace/catalog search
✅ **Button inside** — use when search is embedded in a card with rounded container
✅ **Input + Flag** — geo-search or international phone number prefix
❌ Don't put two button variants side-by-side in the same form — pick one style per context`,
      },
      source: {
        code: `<!-- Input + Select + Button -->
<div class="flex overflow-hidden rounded-lg border border-gray-300">
  <button class="h-[42px] px-3 bg-gray-100 border-r border-gray-300 flex items-center gap-2">
    All categories <svg>…chevron…</svg>
  </button>
  <input class="flex-1 px-3 bg-gray-50 text-sm text-gray-400" placeholder="Search Mockups, Logos…" />
  <button class="w-[42px] bg-[#42389d]"><svg>…search icon…</svg></button>
</div>`,
      },
    },
  },
  render: () => {
    return `<div style="display:flex;flex-direction:column;gap:20px;max-width:680px;font-family:inherit;">
      ${Object.entries(TYPE_LABELS).map(([key, label]) =>
        `<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:6px;font-family:inherit;">${label}</div>
          ${TYPES[key]()}
        </div>`
      ).join('')}
    </div>`;
  },
};
