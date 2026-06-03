const T={title:"Iris Library/Foundation/Typography",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"white"},docs:{description:{component:`
# Typography Tokens

**All typography in Iris uses CSS custom properties.** Never hardcode font-size or font-weight.

## Quick Reference

\`\`\`css
/* Headings */
font: var(--text-h1);    /* 30px, bold */
font: var(--text-h2);    /* 24px, normal */
font: var(--text-h3);    /* 20px, normal */
font: var(--text-h4);    /* 18px, normal */

/* Body text */
font: var(--text-body-1); /* 16px, normal */
font: var(--text-body-2); /* 14px, normal */
font: var(--text-caption); /* 12px, normal */

/* Font weights (can be mixed with any size) */
font-weight: var(--font-normal);     /* 400 */
font-weight: var(--font-medium);     /* 500 */
font-weight: var(--font-semibold);   /* 600 */
font-weight: var(--font-bold);       /* 700 */

/* Line height (same for all sizes) */
line-height: var(--leading-base);    /* 1.5 */
\`\`\`

## HTML Usage

\`\`\`html
<!-- Heading (30px, bold) -->
<h1 style="font: var(--text-h1);">Page Title</h1>

<!-- Subheading (24px) -->
<h2 style="font: var(--text-h2);">Section Title</h2>

<!-- Body text (16px) -->
<p style="font: var(--text-body-1);">Regular paragraph text goes here.</p>

<!-- Secondary text (14px) -->
<p style="font: var(--text-body-2);">Secondary content or description.</p>

<!-- Label/helper text (12px) -->
<span style="font: var(--text-caption);">Optional helper text</span>

<!-- Bold text with custom weight -->
<strong style="font-weight: var(--font-bold);">Emphasis</strong>
\`\`\`

## React Usage

\`\`\`jsx
export function MyComponent() {
  return (
    <>
      {/* Heading */}
      <h1 style={{ font: 'var(--text-h1)' }}>Title</h1>

      {/* Body text */}
      <p style={{ font: 'var(--text-body-1)' }}>Paragraph</p>

      {/* Caption/helper */}
      <span style={{ font: 'var(--text-caption)' }}>Helper text</span>

      {/* Bold emphasis */}
      <strong style={{ fontWeight: 'var(--font-bold)' }}>Important</strong>

      {/* Semantic HTML with tokens */}
      <p style={{ font: 'var(--text-body-2)', color: 'var(--color-text-body-subtle)' }}>
        Metadata or secondary info
      </p>
    </>
  );
}
\`\`\`

## Type Scale

| Token | Size | Weight | Use For |
|-------|------|--------|---------|
| \`--text-h1\` | 30px | 700 (bold) | Page title, main heading |
| \`--text-h2\` | 24px | 400 | Section heading, modal title |
| \`--text-h3\` | 20px | 400 | Subsection, card title |
| \`--text-h4\` | 18px | 400 | Minor heading, input label |
| \`--text-body-1\` | 16px | 400 | Primary body text, paragraphs |
| \`--text-body-2\` | 14px | 400 | Secondary text, metadata |
| \`--text-caption\` | 12px | 400 | Labels, helpers, timestamps |

## Font Weights

| Token | Value | Use For |
|-------|-------|---------|
| \`--font-normal\` | 400 | Body text, most content |
| \`--font-medium\` | 500 | Slightly emphasized text |
| \`--font-semibold\` | 600 | Labels, tab names |
| \`--font-bold\` | 700 | Headings, strong emphasis |
| \`--font-extrabold\` | 800 | Maximum emphasis (rare) |

## ✅ Do

- Use the **Figma named scale** (\`--text-h1\` → \`--text-caption\`) for all new work
- Always use \`var(--text-...)\` instead of hardcoding font-size
- Combine size tokens with weight tokens when needed
- Use \`--text-caption\` for labels, hints, and secondary metadata
- Maintain \`line-height: var(--leading-base)\` (1.5) as default

## ❌ Don't

- Don't hardcode \`font-size: 16px\` — use \`var(--text-body-1)\`
- Don't use the legacy generic scale (\`--text-xs\`, \`--text-sm\`) in new components
- Don't change line-height unless the design specifically requires it
- Don't use font-weight values outside the token set (use \`--font-bold\`, not 700)
- Don't omit \`font-family: var(--font-family-base)\` from custom text components
- Do not mix font sizes from different scales in the same component hierarchy

**Naming convention**
Named scale: \`--text-{role}\` → \`--text-h1\`, \`--text-body-2\`, \`--text-caption\`
Weight tokens: \`--font-{weight-name}\` → \`--font-bold\`, \`--font-semibold\`
        `.trim()}}}},a=e=>`<span style="font-family:ui-monospace,monospace;font-size:10px;background:#F3F4F6;
    border:1px solid #E5E7EB;border-radius:4px;padding:2px 7px;
    color:#6B7280;white-space:nowrap;">${e}</span>`,H=(e,t,o,n,r,i)=>`
  <div style="display:grid;grid-template-columns:1fr auto;gap:24px;
              align-items:center;padding:20px 28px;
              border-bottom:${i?"none":"1px solid #E5E7EB"};">
    <div>
      <div style="font-family:Inter,sans-serif;
                  font-size:var(${t},${o});
                  font-weight:${n};
                  color:var(--color-text-heading,#101828);
                  line-height:var(--leading-base,1.5);">
        ${e}
      </div>
      <div style="margin-top:4px;font-size:10px;color:var(--color-text-fg-disabled,#99a1af);">
        Figma: <em>${r}</em>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end;">
      ${a(t)} ${a(o)} ${a("weight: "+n)}
    </div>
  </div>`,s={name:"Type scale (H1 – Caption)",parameters:{controls:{disable:!0},docs:{description:{story:"\nNamed typography scale from the Figma Primitive page (node `11484:2542`).\nTokens map to `--text-h1` through `--text-caption` in `styles.css`.\n\n**✅ Do** — use `--text-body-1` (16px) as the default body size; `--text-body-2` (14px) for secondary/supporting text.\n**✅ Do** — pair H1–H4 with `--color-text-heading` and body/caption with `--color-text-body` or `--color-text-body-subtle`.\n**❌ Don't** — skip heading levels (e.g. H1 → H4) — maintain a logical document hierarchy for screen readers.\n**❌ Don't** — use `--text-caption` (12px) for body content — it is only legible at normal reading distances as a label or hint.\n        ".trim()},source:{code:`<!-- Page heading -->
<h1 style="font-size: var(--text-h1); font-weight: var(--font-bold); color: var(--color-text-heading); line-height: var(--leading-base);">
  Dashboard overview
</h1>

<!-- Section heading -->
<h2 style="font-size: var(--text-h2); font-weight: var(--font-normal); color: var(--color-text-heading);">
  Monthly performance
</h2>

<!-- Body text -->
<p style="font-size: var(--text-body-1); font-weight: var(--font-normal); color: var(--color-text-body);">
  Showing results for the last 30 days. Export the report to share with your team.
</p>

<!-- Supporting / secondary text -->
<p style="font-size: var(--text-body-2); color: var(--color-text-body-subtle);">
  Last updated 3 minutes ago
</p>

<!-- Label / hint -->
<span style="font-size: var(--text-caption); color: var(--color-text-fg-disabled);">
  Required field
</span>`,language:"html"}}},render:()=>`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;overflow:hidden;">
      ${[["H1 — Bold heading","--text-h1","30px",700,"H1/30px - 700"],["H1 — Regular heading","--text-h1","30px",400,"H1/30px - 400"],["H2 — Section heading","--text-h2","24px",400,"H2/24px - 400"],["H3 — Sub-section heading","--text-h3","20px",400,"H3/20px - 400"],["H4 — Card / panel heading","--text-h4","18px",400,"H4/18px - 400"],["Body 1 — Primary body text","--text-body-1","16px",400,"Body 1/16px - 400"],["Body 2 — Secondary body text","--text-body-2","14px",400,"Body 2/14px - 400"],["Caption — Labels and hints","--text-caption","12px",400,"Caption/12px - 400"]].map(([e,t,o,n,r],i,x)=>H(e,t,o,n,r,i===x.length-1)).join("")}
    </div>`},d={name:"Generic size scale (legacy)",parameters:{controls:{disable:!0},docs:{description:{story:"\nTailwind-style size tokens (`--text-xs` through `--text-5xl`) defined in `styles.css`.\nKept for backward compatibility — do not use in new components.\n\n**✅ Do** — keep using these tokens in existing components that already reference them to avoid unintended size changes.\n**❌ Don't** — use this scale in new components or stories — use the Figma named scale (`--text-h1` → `--text-caption`) instead.\n\nMigration guide:\n| Legacy | Replace with |\n|---|---|\n| `--text-3xl` (30px) | `--text-h1` |\n| `--text-2xl` (24px) | `--text-h2` |\n| `--text-xl`  (20px) | `--text-h3` |\n| `--text-lg`  (18px) | `--text-h4` |\n| `--text-base` (16px) | `--text-body-1` |\n| `--text-sm`  (14px) | `--text-body-2` |\n| `--text-xs`  (12px) | `--text-caption` |\n        ".trim()},source:{code:`/* Legacy usage — keep as-is in existing components */
.card-title { font-size: var(--text-xl); }

/* New components — use Figma named scale instead */
.card-title { font-size: var(--text-h3); font-weight: var(--font-normal); }`,language:"css"}}},render:()=>`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;overflow:hidden;">
      ${[["--text-5xl","3rem","48px",800,"The quick brown fox"],["--text-4xl","2.25rem","36px",700,"The quick brown fox"],["--text-3xl","1.875rem","30px",700,"The quick brown fox"],["--text-2xl","1.5rem","24px",600,"The quick brown fox jumps"],["--text-xl","1.25rem","20px",600,"The quick brown fox jumps over"],["--text-lg","1.125rem","18px",500,"The quick brown fox jumps over the lazy dog"],["--text-base","1rem","16px",400,"The quick brown fox jumps over the lazy dog"],["--text-sm","0.875rem","14px",400,"The quick brown fox jumps over the lazy dog"],["--text-xs","0.75rem","12px",400,"The quick brown fox jumps over the lazy dog"]].map(([e,t,o,n,r],i,x)=>`
        <div style="display:grid;grid-template-columns:1fr 260px;gap:16px;
                    align-items:center;padding:20px 28px;
                    border-bottom:${i<x.length-1?"1px solid #E5E7EB":"none"};">
          <span style="font-family:Inter,sans-serif;font-size:var(${e},${t});
                       font-weight:${n};color:var(--color-text-heading,#101828);
                       line-height:var(--leading-base,1.5);">
            ${r}
          </span>
          <div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end;">
            ${a(e)} ${a(t)} ${a(o)}
          </div>
        </div>`).join("")}
    </div>`},l={name:"Font weights",parameters:{controls:{disable:!0},docs:{description:{story:"\nAvailable Inter font weights from the Figma `[T] weight` frame (nodes `11484:2573`, `11484:2593`).\nTokens `--font-light` through `--font-extrabold` are defined in `styles.css`.\n\n**✅ Do** — use `--font-bold` (700) for H1 headings and primary CTAs; `--font-semibold` (600) for H2–H4 and table headers.\n**✅ Do** — use `--font-normal` (400) as the default for all body text and labels.\n**❌ Don't** — use `--font-extrabold` (800) outside of display/hero contexts — it overwhelms body text hierarchies.\n**❌ Don't** — use `--font-light` (300) for small text (below 16px) — low weight at small sizes fails WCAG contrast on most backgrounds.\n        ".trim()},source:{code:`/* Heading weights */
h1 { font-weight: var(--font-bold); }      /* 700 */
h2 { font-weight: var(--font-semibold); }  /* 600 */
h3 { font-weight: var(--font-medium); }    /* 500 */

/* Body */
p  { font-weight: var(--font-normal); }    /* 400 */

/* Emphasis within body */
strong { font-weight: var(--font-semibold); }`,language:"css"}}},render:()=>`
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
      ${[["--font-light","Light",300],["--font-normal","Normal",400],["--font-medium","Medium",500],["--font-semibold","Semibold",600],["--font-bold","Bold",700],["--font-extrabold","Extrabold",800]].map(([e,t,o])=>`
        <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
                    padding:16px 20px;min-width:130px;">
          <div style="font-family:Inter,sans-serif;font-size:1.5rem;
                      font-weight:var(${e},${o});
                      color:var(--color-text-heading,#101828);
                      line-height:1.2;margin-bottom:8px;">Aa</div>
          <div style="font-family:ui-monospace,monospace;font-size:10px;
                      color:var(--color-text-body,#4a5565);margin-bottom:3px;">${e}</div>
          <div style="font-size:10px;color:var(--color-text-fg-disabled,#99a1af);">${t} / ${o}</div>
        </div>`).join("")}
    </div>`};var p,c,h,g,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Type scale (H1 – Caption)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Named typography scale from the Figma Primitive page (node \\\`11484:2542\\\`).
Tokens map to \\\`--text-h1\\\` through \\\`--text-caption\\\` in \\\`styles.css\\\`.

**✅ Do** — use \\\`--text-body-1\\\` (16px) as the default body size; \\\`--text-body-2\\\` (14px) for secondary/supporting text.
**✅ Do** — pair H1–H4 with \\\`--color-text-heading\\\` and body/caption with \\\`--color-text-body\\\` or \\\`--color-text-body-subtle\\\`.
**❌ Don't** — skip heading levels (e.g. H1 → H4) — maintain a logical document hierarchy for screen readers.
**❌ Don't** — use \\\`--text-caption\\\` (12px) for body content — it is only legible at normal reading distances as a label or hint.
        \`.trim()
      },
      source: {
        code: \`<!-- Page heading -->
<h1 style="font-size: var(--text-h1); font-weight: var(--font-bold); color: var(--color-text-heading); line-height: var(--leading-base);">
  Dashboard overview
</h1>

<!-- Section heading -->
<h2 style="font-size: var(--text-h2); font-weight: var(--font-normal); color: var(--color-text-heading);">
  Monthly performance
</h2>

<!-- Body text -->
<p style="font-size: var(--text-body-1); font-weight: var(--font-normal); color: var(--color-text-body);">
  Showing results for the last 30 days. Export the report to share with your team.
</p>

<!-- Supporting / secondary text -->
<p style="font-size: var(--text-body-2); color: var(--color-text-body-subtle);">
  Last updated 3 minutes ago
</p>

<!-- Label / hint -->
<span style="font-size: var(--text-caption); color: var(--color-text-fg-disabled);">
  Required field
</span>\`,
        language: 'html'
      }
    }
  },
  render: () => \`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;overflow:hidden;">
      \${[['H1 — Bold heading', '--text-h1', '30px', 700, 'H1/30px - 700'], ['H1 — Regular heading', '--text-h1', '30px', 400, 'H1/30px - 400'], ['H2 — Section heading', '--text-h2', '24px', 400, 'H2/24px - 400'], ['H3 — Sub-section heading', '--text-h3', '20px', 400, 'H3/20px - 400'], ['H4 — Card / panel heading', '--text-h4', '18px', 400, 'H4/18px - 400'], ['Body 1 — Primary body text', '--text-body-1', '16px', 400, 'Body 1/16px - 400'], ['Body 2 — Secondary body text', '--text-body-2', '14px', 400, 'Body 2/14px - 400'], ['Caption — Labels and hints', '--text-caption', '12px', 400, 'Caption/12px - 400']].map(([sample, cssVar, px, weight, figmaStyle], i, arr) => row(sample, cssVar, px, weight, figmaStyle, i === arr.length - 1)).join('')}
    </div>\`
}`,...(h=(c=s.parameters)==null?void 0:c.docs)==null?void 0:h.source},description:{story:"Type scale sourced from Figma named styles.\nEach row shows the live `var(--text-*)` token, its pixel size, and the\nFigma style name for design–dev traceability.",...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.description}}};var f,u,y,b,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Generic size scale (legacy)',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Tailwind-style size tokens (\\\`--text-xs\\\` through \\\`--text-5xl\\\`) defined in \\\`styles.css\\\`.
Kept for backward compatibility — do not use in new components.

**✅ Do** — keep using these tokens in existing components that already reference them to avoid unintended size changes.
**❌ Don't** — use this scale in new components or stories — use the Figma named scale (\\\`--text-h1\\\` → \\\`--text-caption\\\`) instead.

Migration guide:
| Legacy | Replace with |
|---|---|
| \\\`--text-3xl\\\` (30px) | \\\`--text-h1\\\` |
| \\\`--text-2xl\\\` (24px) | \\\`--text-h2\\\` |
| \\\`--text-xl\\\`  (20px) | \\\`--text-h3\\\` |
| \\\`--text-lg\\\`  (18px) | \\\`--text-h4\\\` |
| \\\`--text-base\\\` (16px) | \\\`--text-body-1\\\` |
| \\\`--text-sm\\\`  (14px) | \\\`--text-body-2\\\` |
| \\\`--text-xs\\\`  (12px) | \\\`--text-caption\\\` |
        \`.trim()
      },
      source: {
        code: \`/* Legacy usage — keep as-is in existing components */
.card-title { font-size: var(--text-xl); }

/* New components — use Figma named scale instead */
.card-title { font-size: var(--text-h3); font-weight: var(--font-normal); }\`,
        language: 'css'
      }
    }
  },
  render: () => \`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;overflow:hidden;">
      \${[['--text-5xl', '3rem', '48px', 800, 'The quick brown fox'], ['--text-4xl', '2.25rem', '36px', 700, 'The quick brown fox'], ['--text-3xl', '1.875rem', '30px', 700, 'The quick brown fox'], ['--text-2xl', '1.5rem', '24px', 600, 'The quick brown fox jumps'], ['--text-xl', '1.25rem', '20px', 600, 'The quick brown fox jumps over'], ['--text-lg', '1.125rem', '18px', 500, 'The quick brown fox jumps over the lazy dog'], ['--text-base', '1rem', '16px', 400, 'The quick brown fox jumps over the lazy dog'], ['--text-sm', '0.875rem', '14px', 400, 'The quick brown fox jumps over the lazy dog'], ['--text-xs', '0.75rem', '12px', 400, 'The quick brown fox jumps over the lazy dog']].map(([cssVar, rem, px, weight, sample], i, arr) => \`
        <div style="display:grid;grid-template-columns:1fr 260px;gap:16px;
                    align-items:center;padding:20px 28px;
                    border-bottom:\${i < arr.length - 1 ? '1px solid #E5E7EB' : 'none'};">
          <span style="font-family:Inter,sans-serif;font-size:var(\${cssVar},\${rem});
                       font-weight:\${weight};color:var(--color-text-heading,#101828);
                       line-height:var(--leading-base,1.5);">
            \${sample}
          </span>
          <div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end;">
            \${tag(cssVar)} \${tag(rem)} \${tag(px)}
          </div>
        </div>\`).join('')}
    </div>\`
}`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source},description:{story:`Previous generic size scale (text-xs → text-5xl) kept for backward compatibility.
New work should use the named Figma scale above.`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.description}}};var w,k,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Font weights',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Available Inter font weights from the Figma \\\`[T] weight\\\` frame (nodes \\\`11484:2573\\\`, \\\`11484:2593\\\`).
Tokens \\\`--font-light\\\` through \\\`--font-extrabold\\\` are defined in \\\`styles.css\\\`.

**✅ Do** — use \\\`--font-bold\\\` (700) for H1 headings and primary CTAs; \\\`--font-semibold\\\` (600) for H2–H4 and table headers.
**✅ Do** — use \\\`--font-normal\\\` (400) as the default for all body text and labels.
**❌ Don't** — use \\\`--font-extrabold\\\` (800) outside of display/hero contexts — it overwhelms body text hierarchies.
**❌ Don't** — use \\\`--font-light\\\` (300) for small text (below 16px) — low weight at small sizes fails WCAG contrast on most backgrounds.
        \`.trim()
      },
      source: {
        code: \`/* Heading weights */
h1 { font-weight: var(--font-bold); }      /* 700 */
h2 { font-weight: var(--font-semibold); }  /* 600 */
h3 { font-weight: var(--font-medium); }    /* 500 */

/* Body */
p  { font-weight: var(--font-normal); }    /* 400 */

/* Emphasis within body */
strong { font-weight: var(--font-semibold); }\`,
        language: 'css'
      }
    }
  },
  render: () => \`
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
      \${[['--font-light', 'Light', 300], ['--font-normal', 'Normal', 400], ['--font-medium', 'Medium', 500], ['--font-semibold', 'Semibold', 600], ['--font-bold', 'Bold', 700], ['--font-extrabold', 'Extrabold', 800]].map(([cssVar, name, w]) => \`
        <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
                    padding:16px 20px;min-width:130px;">
          <div style="font-family:Inter,sans-serif;font-size:1.5rem;
                      font-weight:var(\${cssVar},\${w});
                      color:var(--color-text-heading,#101828);
                      line-height:1.2;margin-bottom:8px;">Aa</div>
          <div style="font-family:ui-monospace,monospace;font-size:10px;
                      color:var(--color-text-body,#4a5565);margin-bottom:3px;">\${cssVar}</div>
          <div style="font-size:10px;color:var(--color-text-fg-disabled,#99a1af);">\${name} / \${w}</div>
        </div>\`).join('')}
    </div>\`
}`,...(z=(k=l.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const $=["TypeScale","GenericScale","FontWeights"];export{l as FontWeights,d as GenericScale,s as TypeScale,$ as __namedExportsOrder,T as default};
