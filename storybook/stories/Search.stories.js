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

// ─── Search type renderers — real .iris-search composite classes ──────────────
// Shell `.iris-search` + `__input` / `__cell` (icon+input) / `__select` /
// `__btn` (attached purple button) / `__prefix` (flag) / `--inside` (tall).
const TYPES = {
  'input-select-btn': () =>
    `<div class="iris-search">
      <button class="iris-search__select">All categories ${icnChevronDown()}</button>
      <input type="text" class="iris-search__input" placeholder="Search Mockups, Logos, Design Templates..." />
      <button class="iris-search__btn" aria-label="Search">${icnSearch('currentColor', 20)}</button>
    </div>`,

  'input-btn': () =>
    `<div class="iris-search">
      <div class="iris-search__cell">
        ${icnSearch('#6b7280', 18)}
        <input type="text" class="iris-search__input" placeholder="Search" />
      </div>
      <button class="iris-search__btn" aria-label="Search">${icnSearch('currentColor', 20)}</button>
    </div>`,

  'input-flag': () =>
    `<div class="iris-search">
      <div class="iris-search__prefix">
        ${icnFlag()}
        <span>USA</span>
        ${icnChevronDown('#6b7280', 14)}
      </div>
      <div class="iris-search__divider"></div>
      <input type="text" class="iris-search__input" placeholder="Search for city" />
    </div>`,

  'btn-inside': () =>
    `<div class="iris-search iris-search--inside">
      ${icnSearch('#6b7280', 18)}
      <input type="text" class="iris-search__input" placeholder="Search Mockups, Logos ..." />
      <button class="btn btn-blue btn-sm">Search</button>
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

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
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

    const htmlCode = `<div class="iris-search">\n  <input type="text" class="iris-search__input" placeholder="Search..." />\n  <button class="iris-search__btn" aria-label="Search">\n    <!-- search icon -->\n  </button>\n</div>`;

    const reactCode = `<div className="iris-search">\n  <input\n    type="text"\n    className="iris-search__input"\n    placeholder="Search..."\n    onChange={(e) => setQuery(e.target.value)}\n  />\n  <button className="iris-search__btn" aria-label="Search" onClick={() => onSearch(query)}>\n    {/* search icon */}\n  </button>\n</div>`;

    const componentCode = `export function SearchInput({ placeholder = "Search...", onSearch, onChange }) {\n  const [query, setQuery] = useState('');\n\n  const handleSearch = () => onSearch?.(query);\n\n  return (\n    <div className="iris-search">\n      <input\n        type="text"\n        className="iris-search__input"\n        placeholder={placeholder}\n        value={query}\n        onChange={(e) => {\n          setQuery(e.target.value);\n          onChange?.(e.target.value);\n        }}\n        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}\n      />\n      <button className="iris-search__btn" aria-label="Search" onClick={handleSearch}>\n        {/* search icon */}\n      </button>\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;max-width:400px;">
          <div style="max-width:540px;font-family:inherit;">${fn()}</div>
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
        story: 'Use the Controls panel to switch between search patterns. Preview and snippets emit the real `.iris-search` composite classes.',
      },
      source: {
        transform: (_src, ctx) => {
          const t = ctx.args.type || 'input-btn';
          const snippets = {
            'input-select-btn': `<div class="iris-search">\n  <button class="iris-search__select">All categories</button>\n  <input type="text" class="iris-search__input" placeholder="Search Mockups, Logos, Design Templates..." />\n  <button class="iris-search__btn" aria-label="Search"><!-- icon --></button>\n</div>`,
            'input-btn': `<div class="iris-search">\n  <div class="iris-search__cell">\n    <!-- search icon -->\n    <input type="text" class="iris-search__input" placeholder="Search" />\n  </div>\n  <button class="iris-search__btn" aria-label="Search"><!-- icon --></button>\n</div>`,
            'input-flag': `<div class="iris-search">\n  <div class="iris-search__prefix"><!-- flag --> USA</div>\n  <div class="iris-search__divider"></div>\n  <input type="text" class="iris-search__input" placeholder="Search for city" />\n</div>`,
            'btn-inside': `<div class="iris-search iris-search--inside">\n  <!-- search icon -->\n  <input type="text" class="iris-search__input" placeholder="Search Mockups, Logos ..." />\n  <button class="btn btn-blue btn-sm">Search</button>\n</div>`,
          };
          return snippets[t] || snippets['input-btn'];
        },
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
        language: 'html',
        code: `<!-- Input + Select + Button -->
<div class="iris-search">
  <button class="iris-search__select">All categories <!-- chevron --></button>
  <input type="text" class="iris-search__input" placeholder="Search Mockups, Logos…" />
  <button class="iris-search__btn" aria-label="Search"><!-- search icon --></button>
</div>

<!-- Input + Flag (geo-search) -->
<div class="iris-search">
  <div class="iris-search__prefix"><!-- flag --> USA</div>
  <div class="iris-search__divider"></div>
  <input type="text" class="iris-search__input" placeholder="Search for city" />
</div>

<!-- Button inside the field -->
<div class="iris-search iris-search--inside">
  <!-- search icon -->
  <input type="text" class="iris-search__input" placeholder="Search Mockups, Logos ..." />
  <button class="btn btn-blue btn-sm">Search</button>
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
