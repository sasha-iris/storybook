/**
 * Iris Library — KBD (Keyboard Key)
 *
 * Source: Figma › Iris Library › KBD (node 13693:81993)
 * Light mode only.
 *
 * ## Visual spec (all keys share one style)
 * fill: #f3f4f6 · stroke: #e5e7eb · border-radius: 8px
 * font: 12px/600 · text: #1f2a37
 *
 * ## Key widths (height always 30px)
 * Regular (A–Z, 0–9, symbols): 29px
 * Function (F1–F12): 32px
 * Arrow (←→↓↑): 32px — rendered as SVG vector arrows, no text
 * Esc: 37px · Tab: 38px · Ctrl: 38px · Shift: 44px
 * Enter: 47px · Spacebar: 72px · Caps Lock: 77px
 */

// Arrow SVG paths (from Figma vectors)
const ARROW_PATHS = {
  left:  'M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18',
  right: 'M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3',
  up:    'M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18',
  down:  'M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3',
};

const SPECIAL_WIDTHS = {
  'Esc': 37, 'Tab': 38, 'Ctrl': 38, 'Alt': 38, 'Shift': 44,
  'Enter': 47, 'Spacebar': 72, 'Caps Lock': 77,
};

function keyWidth(label) {
  if (label in SPECIAL_WIDTHS) return SPECIAL_WIDTHS[label];
  if (label.startsWith('F') && /^F\d{1,2}$/.test(label)) return 32;
  if (['↑','↓','←','→'].includes(label)) return 32;
  return 29;
}

function arrowKey(dir) {
  const path = ARROW_PATHS[dir];
  return `<kbd style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0;">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-bg-dark)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="${path}"/>
  </svg>
</kbd>`;
}

const ARROW_DIRS = { '←': 'left', '→': 'right', '↑': 'up', '↓': 'down' };

function kbd({ label = 'K', size = 'md' }) {
  const w = keyWidth(label);
  const arrowDir = ARROW_DIRS[label];

  if (arrowDir) return arrowKey(arrowDir);

  const fs = size === 'sm' ? 10 : 12;
  const h = size === 'sm' ? 22 : 30;
  const wAdjusted = size === 'sm' ? Math.round(w * 0.75) : w;

  return `<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:${wAdjusted}px;height:${h}px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-family:inherit;font-size:${fs}px;font-weight:var(--font-semibold);color:var(--color-bg-dark);white-space:nowrap;box-sizing:border-box;">${label}</kbd>`;
}

function shortcut(keys) {
  return `<span class="kbd-combo">${keys.map(k => kbd({ label: k })).join('')}</span>`;
}

export default {
  title: 'Iris Library/KBD',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Keyboard key badge — visually represents a physical key or keyboard shortcut.

**When to use**
- Document keyboard shortcuts in help text, tooltips, or onboarding flows
- Inline within prose to reference a key (e.g. "Press \`Esc\` to dismiss")
- Show shortcut combos in command palettes, menus, or shortcut references

**When NOT to use**
- Interactive buttons that perform an action on click → use Button
- Code or command strings → use a \`<code>\` element or Code block
- Touch/gesture references — KBD implies a physical keyboard

**Anatomy**
\`[key label]\` — a single styled box. Combine multiple \`<kbd>\` elements side-by-side for shortcut combos. Arrow keys render as SVG icons instead of text.

**Accessibility**
Wrap key labels in \`<kbd>\` for semantic meaning. Screen readers will announce "keyboard" before the key label, which is appropriate.
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Key label. Use single characters for letter/number keys, full words for modifiers (`Shift`, `Ctrl`, `Enter`, `Esc`, `Tab`, `Spacebar`, `Caps Lock`), `F1`–`F12` for function keys, or `←` `→` `↑` `↓` for arrow keys.',
      table: { category: 'Content', defaultValue: { summary: 'K' } },
    },
    size: {
      control: 'select',
      options: ['md', 'sm'],
      description: 'Key size. `md` (default) matches Figma spec at 30px height. `sm` is a compact variant for dense UI.',
      table: { category: 'Appearance', defaultValue: { summary: 'md' } },
    },
  },
  args: {
    label: 'K',
    size: 'md',
  },
};

/* ─────────────────────────────────────────────
   INTERACTIVE
───────────────────────────────────────────── */
export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => kbd(args),
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to set any key label. Try `Shift`, `Enter`, `F5`, `←`, or any letter.',
      },
      source: {
        transform: (_src, ctx) => {
          const { label } = ctx.args;
          const w = keyWidth(label);
          const arrowDir = ARROW_DIRS[label];
          if (arrowDir) {
            const path = ARROW_PATHS[arrowDir];
            return `<kbd style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0;">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f2a37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="${path}"/>
  </svg>
</kbd>`;
          }
          return `<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:${w}px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0 6px;font-family:inherit;font-size:12px;font-weight:600;color:#1f2a37;white-space:nowrap;">${label}</kbd>`;
        },
      },
    },
  },
};

/* ─────────────────────────────────────────────
   LETTER KEYS
───────────────────────────────────────────── */
export const LetterKeys = {
  name: 'Letter keys — A–Z',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
All 26 letter keys. Width: 29×30px.

**✅ Do** — use uppercase labels to match physical key cap conventions.
**❌ Don't** — use KBD for single characters that aren't keyboard keys — use inline \`<code>\` instead.
        `,
      },
      source: {
        code: `<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">A</kbd>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return `<div class="kbd-combo" style="flex-wrap:wrap;">
      ${letters.map(l => kbd({ label: l })).join('\n      ')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   MODIFIER / SPECIAL KEYS
───────────────────────────────────────────── */
export const SpecialKeys = {
  name: 'Special keys — modifiers & control',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Modifier and control keys with Figma-spec widths.

| Key | Width |
|---|---|
| Esc | 37px |
| Tab | 38px |
| Ctrl | 38px |
| Shift | 44px |
| Enter | 47px |
| Spacebar | 72px |
| Caps Lock | 77px |

**✅ Do** — spell out full modifier names (\`Shift\`, \`Ctrl\`, \`Alt\`) for keyboard shortcuts — not abbreviations like \`⌃\`.
**✅ Do** — use \`Spacebar\` for the space key to avoid an empty-looking badge.
        `,
      },
      source: {
        code: `<!-- Modifier combo example -->
<span class="kbd-combo">
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:44px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">Shift</kbd>
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">S</kbd>
</span>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const specials = ['Esc', 'Tab', 'Caps Lock', 'Shift', 'Ctrl', 'Alt', 'Enter', 'Spacebar'];
    return `<div class="kbd-combo" style="flex-wrap:wrap;">
      ${specials.map(l => kbd({ label: l })).join('\n      ')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   FUNCTION KEYS
───────────────────────────────────────────── */
export const FunctionKeys = {
  name: 'Function keys — F1–F12',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'All 12 function keys. Width: 32×30px.',
      },
      source: {
        code: `<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0 6px;font-size:12px;font-weight:600;color:#1f2a37;">F5</kbd>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const fkeys = Array.from({ length: 12 }, (_, i) => `F${i + 1}`);
    return `<div class="kbd-combo" style="flex-wrap:wrap;">
      ${fkeys.map(l => kbd({ label: l })).join('\n      ')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   ARROW KEYS
───────────────────────────────────────────── */
export const ArrowKeys = {
  name: 'Arrow keys — ←→↑↓',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Arrow keys rendered as SVG vector icons (Figma-exact). Width: 32×30px.

**✅ Do** — use arrow key KBDs for navigation instructions (e.g. "Press \`↓\` to open the dropdown").
**❌ Don't** — use arrow symbols (\`←\`) as text characters to represent direction — use the arrow KBD component.
        `,
      },
      source: {
        code: `<!-- Left arrow key -->
<kbd style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0;">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f2a37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
  </svg>
</kbd>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const arrows = ['←', '→', '↑', '↓'];
    return `<div class="kbd-combo">
      ${arrows.map(a => kbd({ label: a })).join('\n      ')}
    </div>`;
  },
};

/* ─────────────────────────────────────────────
   IN CONTEXT — SHORTCUT COMBOS
───────────────────────────────────────────── */
export const InContext = {
  name: 'In context — shortcut combos',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Common keyboard shortcuts as they appear in product UI — multiple \`<kbd>\` elements side-by-side.

**✅ Do** — place shortcut combos inside a \`<span style="display:inline-flex;align-items:center;gap:4px;">\` wrapper.
**✅ Do** — use KBD inline within prose for contextual references.
**❌ Don't** — add a "+" character between keys — the gap is sufficient and the "+" adds visual noise.
        `,
      },
      source: {
        code: `<!-- Save: Ctrl + S -->
<span class="kbd-combo">
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:38px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">Ctrl</kbd>
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">S</kbd>
</span>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const combos = [
      { label: 'Save', keys: ['Ctrl', 'S'] },
      { label: 'Undo', keys: ['Ctrl', 'Z'] },
      { label: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
      { label: 'Find', keys: ['Ctrl', 'F'] },
      { label: 'New tab', keys: ['Ctrl', 'T'] },
      { label: 'Close tab', keys: ['Ctrl', 'W'] },
      { label: 'Select all', keys: ['Ctrl', 'A'] },
      { label: 'Dismiss', keys: ['Esc'] },
      { label: 'Submit', keys: ['Enter'] },
      { label: 'Indent', keys: ['Tab'] },
      { label: 'Navigate', keys: ['↑', '↓'] },
      { label: 'Refresh', keys: ['F5'] },
    ];
    return `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;">
      ${combos.map(({ label, keys }) => `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--color-border-default);border-radius:8px;gap:8px;">
        <span style="font-size:var(--text-sm);color:var(--color-text-heading);">${label}</span>
        ${shortcut(keys)}
      </div>`).join('\n      ')}
    </div>`;
  },
};
