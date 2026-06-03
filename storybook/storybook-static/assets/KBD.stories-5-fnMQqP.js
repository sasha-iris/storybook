const W={left:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18",right:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3",up:"M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18",down:"M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"},u={Esc:37,Tab:38,Ctrl:38,Alt:38,Shift:44,Enter:47,Spacebar:72,"Caps Lock":77};function I(e){return e in u?u[e]:e.startsWith("F")&&/^F\d{1,2}$/.test(e)||["↑","↓","←","→"].includes(e)?32:29}function T(e){return`<kbd style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0;">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-bg-dark)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="${W[e]}"/>
  </svg>
</kbd>`}const L={"←":"left","→":"right","↑":"up","↓":"down"};function t({label:e="K",size:r="md"}){const n=I(e),o=L[e];if(o)return T(o);const s=r==="sm"?10:12,b=r==="sm"?22:30;return`<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:${r==="sm"?Math.round(n*.75):n}px;height:${b}px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-family:inherit;font-size:${s}px;font-weight:var(--font-semibold);color:var(--color-bg-dark);white-space:nowrap;box-sizing:border-box;">${e}</kbd>`}function z(e){return`<span class="kbd-combo">${e.map(r=>t({label:r})).join("")}</span>`}const M={title:"Iris Library/KBD",tags:["autodocs","stable"],parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{label:{control:"text",description:"Key label. Use single characters for letter/number keys, full words for modifiers (`Shift`, `Ctrl`, `Enter`, `Esc`, `Tab`, `Spacebar`, `Caps Lock`), `F1`–`F12` for function keys, or `←` `→` `↑` `↓` for arrow keys.",table:{category:"Content",defaultValue:{summary:"K"}}},size:{control:"select",options:["md","sm"],description:"Key size. `md` (default) matches Figma spec at 30px height. `sm` is a compact variant for dense UI.",table:{category:"Appearance",defaultValue:{summary:"md"}}}},args:{label:"K",size:"md"}},a={name:"Interactive (Controls)",render:e=>t(e),parameters:{docs:{description:{story:"Use the **Controls** panel to set any key label. Try `Shift`, `Enter`, `F5`, `←`, or any letter."},source:{transform:(e,r)=>{const{label:n}=r.args,o=I(n),s=L[n];return s?`<kbd style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0;">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f2a37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="${W[s]}"/>
  </svg>
</kbd>`:`<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:${o}px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0 6px;font-family:inherit;font-size:12px;font-weight:600;color:#1f2a37;white-space:nowrap;">${n}</kbd>`}}}}},i={name:"Letter keys — A–Z",parameters:{controls:{disable:!0},docs:{description:{story:`
All 26 letter keys. Width: 29×30px.

**✅ Do** — use uppercase labels to match physical key cap conventions.
**❌ Don't** — use KBD for single characters that aren't keyboard keys — use inline \`<code>\` instead.
        `},source:{code:'<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">A</kbd>',language:"html"}}},render:()=>`<div class="kbd-combo" style="flex-wrap:wrap;">
      ${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(r=>t({label:r})).join(`
      `)}
    </div>`},d={name:"Special keys — modifiers & control",parameters:{controls:{disable:!0},docs:{description:{story:`
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
        `},source:{code:`<!-- Modifier combo example -->
<span class="kbd-combo">
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:44px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">Shift</kbd>
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">S</kbd>
</span>`,language:"html"}}},render:()=>`<div class="kbd-combo" style="flex-wrap:wrap;">
      ${["Esc","Tab","Caps Lock","Shift","Ctrl","Alt","Enter","Spacebar"].map(r=>t({label:r})).join(`
      `)}
    </div>`},l={name:"Function keys — F1–F12",parameters:{controls:{disable:!0},docs:{description:{story:"All 12 function keys. Width: 32×30px."},source:{code:'<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0 6px;font-size:12px;font-weight:600;color:#1f2a37;">F5</kbd>',language:"html"}}},render:()=>`<div class="kbd-combo" style="flex-wrap:wrap;">
      ${Array.from({length:12},(r,n)=>`F${n+1}`).map(r=>t({label:r})).join(`
      `)}
    </div>`},c={name:"Arrow keys — ←→↑↓",parameters:{controls:{disable:!0},docs:{description:{story:`
Arrow keys rendered as SVG vector icons (Figma-exact). Width: 32×30px.

**✅ Do** — use arrow key KBDs for navigation instructions (e.g. "Press \`↓\` to open the dropdown").
**❌ Don't** — use arrow symbols (\`←\`) as text characters to represent direction — use the arrow KBD component.
        `},source:{code:`<!-- Left arrow key -->
<kbd style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0;">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f2a37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
  </svg>
</kbd>`,language:"html"}}},render:()=>`<div class="kbd-combo">
      ${["←","→","↑","↓"].map(r=>t({label:r})).join(`
      `)}
    </div>`},p={name:"In context — shortcut combos",parameters:{controls:{disable:!0},docs:{description:{story:`
Common keyboard shortcuts as they appear in product UI — multiple \`<kbd>\` elements side-by-side.

**✅ Do** — place shortcut combos inside a \`<span style="display:inline-flex;align-items:center;gap:4px;">\` wrapper.
**✅ Do** — use KBD inline within prose for contextual references.
**❌ Don't** — add a "+" character between keys — the gap is sufficient and the "+" adds visual noise.
        `},source:{code:`<!-- Save: Ctrl + S -->
<span class="kbd-combo">
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:38px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">Ctrl</kbd>
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">S</kbd>
</span>`,language:"html"}}},render:()=>`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;">
      ${[{label:"Save",keys:["Ctrl","S"]},{label:"Undo",keys:["Ctrl","Z"]},{label:"Redo",keys:["Ctrl","Shift","Z"]},{label:"Find",keys:["Ctrl","F"]},{label:"New tab",keys:["Ctrl","T"]},{label:"Close tab",keys:["Ctrl","W"]},{label:"Select all",keys:["Ctrl","A"]},{label:"Dismiss",keys:["Esc"]},{label:"Submit",keys:["Enter"]},{label:"Indent",keys:["Tab"]},{label:"Navigate",keys:["↑","↓"]},{label:"Refresh",keys:["F5"]}].map(({label:r,keys:n})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--color-border-default);border-radius:8px;gap:8px;">
        <span style="font-size:var(--text-sm);color:var(--color-text-heading);">${r}</span>
        ${z(n)}
      </div>`).join(`
      `)}
    </div>`};var m,f,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => kbd(args),
  parameters: {
    docs: {
      description: {
        story: 'Use the **Controls** panel to set any key label. Try \`Shift\`, \`Enter\`, \`F5\`, \`←\`, or any letter.'
      },
      source: {
        transform: (_src, ctx) => {
          const {
            label
          } = ctx.args;
          const w = keyWidth(label);
          const arrowDir = ARROW_DIRS[label];
          if (arrowDir) {
            const path = ARROW_PATHS[arrowDir];
            return \`<kbd style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0;">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f2a37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="\${path}"/>
  </svg>
</kbd>\`;
          }
          return \`<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:\${w}px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0 6px;font-family:inherit;font-size:12px;font-weight:600;color:#1f2a37;white-space:nowrap;">\${label}</kbd>\`;
        }
      }
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,x,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Letter keys — A–Z',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
All 26 letter keys. Width: 29×30px.

**✅ Do** — use uppercase labels to match physical key cap conventions.
**❌ Don't** — use KBD for single characters that aren't keyboard keys — use inline \\\`<code>\\\` instead.
        \`
      },
      source: {
        code: \`<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">A</kbd>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return \`<div class="kbd-combo" style="flex-wrap:wrap;">
      \${letters.map(l => kbd({
      label: l
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var k,v,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Special keys — modifiers & control',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
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

**✅ Do** — spell out full modifier names (\\\`Shift\\\`, \\\`Ctrl\\\`, \\\`Alt\\\`) for keyboard shortcuts — not abbreviations like \\\`⌃\\\`.
**✅ Do** — use \\\`Spacebar\\\` for the space key to avoid an empty-looking badge.
        \`
      },
      source: {
        code: \`<!-- Modifier combo example -->
<span class="kbd-combo">
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:44px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">Shift</kbd>
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">S</kbd>
</span>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const specials = ['Esc', 'Tab', 'Caps Lock', 'Shift', 'Ctrl', 'Alt', 'Enter', 'Spacebar'];
    return \`<div class="kbd-combo" style="flex-wrap:wrap;">
      \${specials.map(l => kbd({
      label: l
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,C,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Function keys — F1–F12',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'All 12 function keys. Width: 32×30px.'
      },
      source: {
        code: \`<kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0 6px;font-size:12px;font-weight:600;color:#1f2a37;">F5</kbd>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const fkeys = Array.from({
      length: 12
    }, (_, i) => \`F\${i + 1}\`);
    return \`<div class="kbd-combo" style="flex-wrap:wrap;">
      \${fkeys.map(l => kbd({
      label: l
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var j,A,F;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Arrow keys — ←→↑↓',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Arrow keys rendered as SVG vector icons (Figma-exact). Width: 32×30px.

**✅ Do** — use arrow key KBDs for navigation instructions (e.g. "Press \\\`↓\\\` to open the dropdown").
**❌ Don't** — use arrow symbols (\\\`←\\\`) as text characters to represent direction — use the arrow KBD component.
        \`
      },
      source: {
        code: \`<!-- Left arrow key -->
<kbd style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:30px;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:0;">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f2a37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
  </svg>
</kbd>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const arrows = ['←', '→', '↑', '↓'];
    return \`<div class="kbd-combo">
      \${arrows.map(a => kbd({
      label: a
    })).join('\\n      ')}
    </div>\`;
  }
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var K,$,E;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'In context — shortcut combos',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Common keyboard shortcuts as they appear in product UI — multiple \\\`<kbd>\\\` elements side-by-side.

**✅ Do** — place shortcut combos inside a \\\`<span style="display:inline-flex;align-items:center;gap:4px;">\\\` wrapper.
**✅ Do** — use KBD inline within prose for contextual references.
**❌ Don't** — add a "+" character between keys — the gap is sufficient and the "+" adds visual noise.
        \`
      },
      source: {
        code: \`<!-- Save: Ctrl + S -->
<span class="kbd-combo">
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:38px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">Ctrl</kbd>
  <kbd style="display:inline-flex;align-items:center;justify-content:center;min-width:29px;height:30px;background:var(--color-bg-muted);border:1px solid var(--color-border-default);border-radius:8px;padding:0 6px;font-size:var(--text-xs);font-weight:var(--font-semibold);color:var(--color-bg-dark);">S</kbd>
</span>\`,
        language: 'html'
      }
    }
  },
  render: () => {
    const combos = [{
      label: 'Save',
      keys: ['Ctrl', 'S']
    }, {
      label: 'Undo',
      keys: ['Ctrl', 'Z']
    }, {
      label: 'Redo',
      keys: ['Ctrl', 'Shift', 'Z']
    }, {
      label: 'Find',
      keys: ['Ctrl', 'F']
    }, {
      label: 'New tab',
      keys: ['Ctrl', 'T']
    }, {
      label: 'Close tab',
      keys: ['Ctrl', 'W']
    }, {
      label: 'Select all',
      keys: ['Ctrl', 'A']
    }, {
      label: 'Dismiss',
      keys: ['Esc']
    }, {
      label: 'Submit',
      keys: ['Enter']
    }, {
      label: 'Indent',
      keys: ['Tab']
    }, {
      label: 'Navigate',
      keys: ['↑', '↓']
    }, {
      label: 'Refresh',
      keys: ['F5']
    }];
    return \`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;">
      \${combos.map(({
      label,
      keys
    }) => \`<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--color-border-default);border-radius:8px;gap:8px;">
        <span style="font-size:var(--text-sm);color:var(--color-text-heading);">\${label}</span>
        \${shortcut(keys)}
      </div>\`).join('\\n      ')}
    </div>\`;
  }
}`,...(E=($=p.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};const R=["Interactive","LetterKeys","SpecialKeys","FunctionKeys","ArrowKeys","InContext"];export{c as ArrowKeys,l as FunctionKeys,p as InContext,a as Interactive,i as LetterKeys,d as SpecialKeys,R as __namedExportsOrder,M as default};
