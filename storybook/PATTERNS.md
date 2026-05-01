# Storybook Patterns — Iris Library

Concrete code patterns established in April 2026.
Reference this file when building or improving any component family.

---

## 0. Sidebar hierarchy and title conventions

### The approved structure

```
Iris Library/
  Foundation/        Colors, Typography
  Brand/             Logo, Icons (brand icon set)
  Button/            default + Group / Link / Social / Special
  Card/              Basics / KPI / Layouts / Reporting / States
  Navigation/        Sidebar (and future nav components)
  Table/             Cells / Cohort / Composed
```

### Title format

```js
// Top-level family
export default { title: 'Iris Library/Button' }

// Sub-variant
export default { title: 'Iris Library/Button/Group' }

// ❌ WRONG — Components wrapper was removed
export default { title: 'Iris Library/Components/Button' }

// ❌ WRONG — do not invent new top-level categories without checking CLAUDE.md
export default { title: 'Iris Library/UI/Button' }
```

### Adding a new Figma component

1. Identify which family it belongs to from the list above
2. If it fits an existing family → `Iris Library/Family/SubVariant`
3. If it's genuinely new (e.g. Input, Modal, Badge) → new top-level `Iris Library/NewFamily/`
4. Update the hierarchy table in CLAUDE.md

### Pending renames (not done yet, requires updating all titles + rebuilding)

| Current | Target | Reason |
|---|---|---|
| `Iris Library/Primitives/Colors` | `Iris Library/Foundation/Colors` | Industry standard naming |
| `Iris Library/Primitives/Typography` | `Iris Library/Foundation/Typography` | Industry standard naming |
| `Iris Library/Icons` | `Iris Library/Foundation/Icons` | Remove duplicate, merge into Foundation |
| `Iris Library/Components/Button` | `Iris Library/Button` | Remove Components wrapper |
| `Iris Library/Components/Button/Group` | `Iris Library/Button/Group` | Same |

Do these renames together in one session, not one at a time.

---

## 1. argTypes template

Every component-level `argTypes` block follows this structure:

```js
argTypes: {
  // ── Content ──────────────────────────────────────────────
  label: {
    control: 'text',
    description: 'Visible text. Ignored when iconOnly is true.',
    table: { category: 'Content', defaultValue: { summary: 'Button text' } },
  },

  // ── Appearance ───────────────────────────────────────────
  color: {
    control: 'select',
    options: ['primary', 'dark', 'green', 'red'],
    description: 'Color variant. CSS class: `btn-{color}` or `btn-outline-{color}`.',
    table: { category: 'Appearance', defaultValue: { summary: 'primary' } },
  },
  size: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
    description: 'Size variant. CSS class: `btn-{size}`.',
    table: { category: 'Appearance', defaultValue: { summary: 'md' } },
  },
  outline: {
    control: 'boolean',
    description: 'Ghost / outline mode.',
    table: { category: 'Appearance', defaultValue: { summary: false } },
  },

  // ── State ────────────────────────────────────────────────
  disabled: {
    control: 'boolean',
    description: 'Disabled state — 50% opacity, pointer-events none.',
    table: { category: 'State', defaultValue: { summary: false } },
  },
},
args: {
  label: 'Button text',
  color: 'primary',
  size: 'md',
  outline: false,
  disabled: false,
},
```

Rules:
- `table.category` must be one of: Content / Appearance / State / Layout / Data
- `table.defaultValue.summary` must match the value in `args`
- `description` should name the CSS class or design token when relevant

---

## 2. Actions tab — KNOWN LIMITATION in html-vite

**Status: не работает в этом проекте (Storybook 8 html-vite статическая сборка).**

Actions tab рассчитан прежде всего на React/Vue/Angular, где события передаются как функции-пропы.
Для HTML-string stories надёжного решения в Storybook 8 html-vite нет.

Подходы, проверенные и подтверждённо не работающие:
```
❌ console.log в addEventListener         — идёт в браузерный консоль, не в Actions
❌ action() из @storybook/addon-actions   — action() не достигает Actions panel
❌ parameters.actions.handles             — withActions использует previewApi.useEffect,
                                            который не срабатывает в html-vite
❌ Кастомный decorator + setTimeout       — channel emission молча не работает
                                            в статической сборке
```

**Для диагностики нужна живая браузерная сессия:**
открыть DevTools в preview iframe, кликнуть элемент, проверить вызывается ли
`addons.getChannel().emit('storybook/actions/action-event')` и доходит ли
postMessage до manager.

**Не тратить время на это без доступа к браузеру.** Controls, Docs и source snippets
работают и имеют значительно большую ценность.

---

## 3. Interactive story (full Controls playground)

```js
export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => component(args),
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to configure any combination. The rendered HTML updates live.',
      },
      source: {
        // Generates a clean HTML snippet that reflects current Control values
        transform: (_src, storyCtx) => {
          const a = storyCtx.args;
          const colorClass = a.outline ? `btn-outline-${a.color}` : `btn-${a.color}`;
          const classes = ['btn', colorClass, `btn-${a.size}`, a.disabled ? '' : ''].filter(Boolean).join(' ');
          const dis = a.disabled ? ' disabled aria-disabled="true"' : '';
          return `<button class="${classes}"${dis}>\n  <span>${a.label}</span>\n</button>`;
        },
      },
    },
  },
};
```

Rules:
- Always named "Interactive (Controls)"
- Always uses `render: (args) => component(args)` — never a static render
- Always has a `source.transform` that produces clean HTML (not the raw render function string)
- No `parameters.controls.include` — all controls are available

---

## 3. Gallery story with scoped Controls

The key pattern: each gallery story shows one fixed dimension and exposes only the orthogonal control(s).

```js
// Colors gallery — shows all colors, exposes SIZE control
export const AllColors = {
  name: 'Colors — all variants',
  args: { size: 'md' },                             // default for the control
  parameters: {
    controls: { include: ['size'] },                // only size is shown in Controls panel
    docs: {
      description: {
        story: 'All color variants at the selected size. Use **size** control to preview at any size.',
      },
      source: {
        code: `<button class="btn btn-primary btn-md">Primary</button>
<button class="btn btn-dark btn-md">Dark</button>`,
        language: 'html',
      },
    },
  },
  render: ({ size }) => `                           // render receives the arg
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      ${['primary', 'dark', 'green', 'red'].map(c =>
        component({ color: c, size })               // size is live from Controls
      ).join('')}
    </div>
  `,
};

// Sizes gallery — shows all sizes, exposes COLOR + OUTLINE controls
export const AllSizes = {
  name: 'Sizes — xs to xl',
  args: { color: 'primary', outline: false },
  parameters: {
    controls: { include: ['color', 'outline'] },
    docs: { /* ... */ },
  },
  render: ({ color, outline }) => `
    <div style="display:flex;gap:8px;align-items:center;">
      ${['xs', 'sm', 'md', 'lg', 'xl'].map(size =>
        component({ color, size, outline })
      ).join('')}
    </div>
  `,
};
```

### Which control to expose per gallery type

| Gallery shows | Expose as Controls |
|---|---|
| All colors (solid + outline) | `size` |
| All sizes | `color`, `outline` |
| All states (default/disabled/hover) | `size` |
| Icon placements (left/right/only) | `color`, `size` |
| Shape variants (pill, square) | `color`, `size` |
| All disabled | `size` |
| All error/loading states | `color` |

### What NOT to do

```js
// ❌ WRONG — controls disabled, completely useless
export const BadGallery = {
  parameters: { controls: { disable: true } },
  render: () => `...static HTML...`,
};

// ❌ WRONG — render ignores args, controls do nothing
export const AlsoBad = {
  args: { size: 'md' },
  parameters: { controls: { include: ['size'] } },
  render: () => `...static HTML with hardcoded size...`,  // args not used!
};

// ✅ CORRECT
export const Good = {
  args: { size: 'md' },
  parameters: { controls: { include: ['size'] } },
  render: ({ size }) => `...HTML using ${size}...`,       // arg flows through
};
```

---

## 4. Source snippets

### Static (for gallery stories)

```js
parameters: {
  docs: {
    source: {
      code: `<button class="btn btn-primary btn-md">Label</button>`,
      language: 'html',
    },
  },
},
```

### Dynamic (for Interactive story)

```js
parameters: {
  docs: {
    source: {
      transform: (_src, storyCtx) => {
        const a = storyCtx.args;
        // Build the HTML string from args
        return `<button class="btn btn-${a.color} btn-${a.size}">...</button>`;
      },
    },
  },
},
```

Rules:
- Static `source.code` goes on gallery stories — shows a representative example
- Dynamic `source.transform` goes on Interactive — reflects the current Controls state
- Language is always `'html'` for this project (HTML-string Storybook)

---

## 5. Figma fidelity rules

- Never invent variants. If it is not in Figma, it does not go in Storybook.
- Before writing a story, fetch the Figma node: `get_design_context(nodeId, fileKey)`
- Colors, spacing, border-radius, font sizes must match Figma tokens exactly
- If a Figma component uses raster images for charts/graphs, approximate with SVG paths
- Node IDs for confirmed Figma components should be noted in the story file header comment

### Confirmed Figma node IDs (Iris Library — ZKtEULdYKaXe5uQl1J6ijI)

| Component | Node | Notes |
|---|---|---|
| Button | 84:13517 | Main Buttons frame |
| Card KPI | 602:20752 | All KPI chart variants |
| Sidebar | 9272:163206 | Navigation sidebar |

---

## 6. Icon rules

All icons in this project are **Heroicons v1 solid** set:
- `viewBox="0 0 20 20"`
- `fill="currentColor"`
- NO stroke attributes

Outline icons (chevrons etc.) use `viewBox="0 0 24 24"` with `stroke="currentColor"`.

Never mix solid paths into outline viewBox or vice versa — the icon renders at wrong size/position.
