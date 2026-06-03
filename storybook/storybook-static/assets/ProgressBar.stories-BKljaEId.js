const I={title:"Iris Library/Progress Bar",tags:["autodocs","stable"],parameters:{layout:"padded",backgrounds:{default:"white"},docs:{description:{component:`
**Progress Bar** communicates the completion status of a task or process as a fraction of a total.

## Quick Start

**1. Import styles** — Copy \`iris-components.css\` from the repository:
\`\`\`html
<link rel="stylesheet" href="iris-components.css">
\`\`\`

**2. Copy component code** — Use the "Interactive (Controls)" story to generate HTML/React.

## When to use
- Show upload, export, or processing progress with a known total
- Visualise a metric against a target (e.g. storage used, budget consumed, goal completion)
- Represent a step completion percentage in a multi-step flow

**When NOT to use**
- Do not use a progress bar for indeterminate loading — use a spinner instead
- Do not use for binary pass/fail states — use a Badge or Status indicator
- Do not use when the metric is best compared across items — use a bar chart instead

**Anatomy**
- **Track** — full-width gray background bar (6 px, \`#e5e7eb\`, border-radius 2 px)
- **Fill** — colored foreground bar growing left-to-right, same height and radius as the track
- **Label** — percentage value shown above (default) or below the track as helper text; always right-aligned

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `.trim()}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value as a percentage (0–100). Maps to the fill bar width.",table:{category:"Content",defaultValue:{summary:"50"}}},color:{control:"select",options:["primary","green","orange","blue","purple","indigo","pink","yellow","dark"],description:"Fill color of the progress bar. Maps to Figma Color variant.",table:{category:"Appearance",defaultValue:{summary:"primary"}}},labelBelow:{control:"boolean",description:"When true, moves the percentage label below the track as helper text (Figma: Bottom helper text=True).",table:{category:"Appearance",defaultValue:{summary:"false"}}}},args:{value:50,color:"primary",labelBelow:!1}},n={orange:"#ff8a4c",primary:"#5850ec",green:"#31c48d",purple:"#7e3af2",yellow:"#ffdf20",pink:"#e74694",indigo:"#5850ec",dark:"#111928",blue:"#1c64f2"};function g({value:o=50,color:e="primary",labelBelow:r=!1}={}){const s=n[e]??n.primary,i=Math.min(100,Math.max(0,o)),a=`
    <div class="progress" style="height:6px;background:var(--color-border-default);border-radius:2px;">
      <div class="progress-bar" style="width:${i}%;background:${s};border-radius:2px;"></div>
    </div>`,t=`
    <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;line-height:1.5;">${i}%</div>`;return`
    <div style="width:100%;">
      ${r?"":t}
      ${r?"":'<div style="height:6px;"></div>'}
      ${a}
      ${r?'<div style="height:6px;"></div>':""}
      ${r?t:""}
    </div>`}const u={name:"Interactive (Controls)",render:o=>{const{value:e,color:r,labelBelow:s}=o,i=Math.min(100,Math.max(0,e));let a="",t="";s?(a=`<div class="progress">
  <div class="progress-bar progress-bar-${r}"></div>
</div>
<div class="progress-label">${i}%</div>`,t=`<div className="progress">
  <div className="progress-bar progress-bar-${r}" />
</div>
<div className="progress-label">${i}%</div>`):(a=`<div class="progress-label">${i}%</div>
<div class="progress">
  <div class="progress-bar progress-bar-${r}"></div>
</div>`,t=`<div className="progress-label">${i}%</div>
<div className="progress">
  <div className="progress-bar progress-bar-${r}" />
</div>`);const v=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"),H=t.replace(/</g,"&lt;").replace(/>/g,"&gt;");return`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          <div style="max-width:480px;">${g(o)}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${v}</code></pre>
            </div>
            <button data-copy="${a.split('"').join("&quot;")}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="8" height="8" rx="1"/>
                <path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/>
              </svg>
              Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${H}</code></pre>
            </div>
            <button data-copy="${t.split('"').join("&quot;")}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="8" height="8" rx="1"/>
                <path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/>
              </svg>
              Copy
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
      <\/script>
    `},parameters:{docs:{description:{story:`
## Progress Bar Snippet Reference

Use the **Controls** panel to experiment. Code updates live.

### Basic Syntax

\`\`\`
<div class="progress">
  <div class="progress-bar progress-bar-{color}" style="width:{value}%"></div>
</div>
\`\`\`

### Colors (Semantic)

- **primary** (purple) — neutral progress, default
- **green** — success, healthy, on-track
- **orange** — warning, attention needed
- **red** — error, failed, critical
- **blue** — info, secondary metric
- **yellow** — caution, needs review
- **purple** — custom, alternative
- **pink** — highlight, special
- **indigo** — secondary info

### With Label

#### Label Above (default)
\`\`\`
<div style="...">
  <div class="progress-label">50%</div>
  <div class="progress">
    <div class="progress-bar progress-bar-primary" style="width:50%"></div>
  </div>
</div>
\`\`\`

#### Label Below
\`\`\`
<div style="...">
  <div class="progress">
    <div class="progress-bar progress-bar-primary" style="width:50%"></div>
  </div>
  <div class="progress-label">50%</div>
</div>
\`\`\`

### ✅ Do

- Use semantic color (green = success, orange/red = warning/error)
- Always show the value (percentage or label)
- Use in context (task progress, completion %, health metrics)
- Pair with descriptive text ("Upload in progress", "4 of 8 steps")

### ❌ Don't

- Don't use to show current time or buffering (use Skeleton instead)
- Don't hide the percentage value
- Don't use multiple progress bars for unrelated metrics in same space
- Don't hardcode width values outside of JavaScript — use \`style="width:{value}%"\` only
        `.trim()},source:{transform:(o,e)=>{const{value:r,color:s,labelBelow:i}=e.args,a=n[s]??n.primary,t=Math.min(100,Math.max(0,r)),v=`<div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">${t}%</div>`;return i?`<div style="width:100%;">
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:${t}%;background:${a};border-radius:2px;"></div>
  </div>
  ${v}
</div>`:`<div style="width:100%;">
  ${v}
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:${t}%;background:${a};border-radius:2px;"></div>
  </div>
</div>`}}}}},l={name:"All colors",args:{value:75},parameters:{controls:{include:["value"]},docs:{description:{story:`
All nine fill colors from Figma (node \`3283:24174\`) at 75%.
Use the **Value** control to see how width scales across the palette.

**✅ Do** — map color to semantic meaning: green for health/success, orange/yellow for warnings, primary for neutral progress.
**❌ Don't** — use Yellow (\`#ffdf20\`) on a white background without sufficient contrast in surrounding text — the bar itself is low-contrast on light surfaces.
        `.trim()},source:{code:`<!-- Primary -->
<div style="width:100%;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
</div>

<!-- Green -->
<div style="width:100%;margin-top:16px;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#31c48d;border-radius:2px;"></div>
  </div>
</div>

<!-- Orange -->
<div style="width:100%;margin-top:16px;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#ff8a4c;border-radius:2px;"></div>
  </div>
</div>`,language:"html"}}},render:({value:o})=>`
    <div style="max-width:480px;display:flex;flex-direction:column;gap:20px;">
      ${Object.entries(n).map(([e,r])=>`
        <div>
          <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;margin-bottom:8px;">${e} — ${r}</div>
          ${g({value:o,color:e})}
        </div>
      `).join("")}
    </div>`},d={name:"All values (25 / 50 / 75 / 100)",args:{color:"primary"},parameters:{controls:{include:["color"]},docs:{description:{story:'\nThe four value breakpoints from Figma (Value=25/50/75/100) using Primary color.\nUse the **Color** control to preview a different fill across all steps.\n\n**✅ Do** — set `aria-valuenow`, `aria-valuemin`, `aria-valuemax` on `role="progressbar"` in production.\n**❌ Don\'t** — hardcode widths in px; use `%` so the bar adapts to its container width.\n        '.trim()},source:{code:`<div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
  style="width:100%;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
</div>`,language:"html"}}},render:({color:o})=>`
    <div style="max-width:480px;display:flex;flex-direction:column;gap:20px;">
      ${[25,50,75,100].map(e=>g({value:e,color:o})).join("")}
    </div>`},p={name:"Label below (helper text)",args:{value:75},parameters:{controls:{include:["value"]},docs:{description:{story:`
\`Bottom helper text=True\` from Figma: the percentage label appears **below** the track.
Use in compact layouts (cards, table rows) where space above the track is unavailable.

**✅ Do** — use the bottom label in dense contexts (card footers, table cells).
**❌ Don't** — show both a top and a bottom label on the same bar — pick one position.
        `.trim()},source:{code:`<div style="width:100%;">
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;margin-top:6px;">75%</div>
</div>`,language:"html"}}},render:({value:o})=>`
    <div style="max-width:480px;display:flex;flex-direction:column;gap:20px;">
      ${["primary","green","orange","blue"].map(e=>g({value:o,color:e,labelBelow:!0})).join("")}
    </div>`},c={name:"In context — dashboard card",parameters:{controls:{disable:!0},docs:{description:{story:`
Realistic example: multiple progress bars inside a dashboard card tracking resource usage across projects.
This shows how bars at different values and colors sit together with labels and context text.
        `.trim()},source:{code:`<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;padding:24px;max-width:480px;">
  <h4 style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;margin:0 0 20px;">Resource usage</h4>

  <div style="display:flex;flex-direction:column;gap:20px;">
    <!-- Storage -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:6px;">
        <span>Storage</span><span>82%</span>
      </div>
      <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
        <div style="position:absolute;left:0;top:0;height:100%;width:82%;background:#ff8a4c;border-radius:2px;"></div>
      </div>
    </div>

    <!-- API quota -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:6px;">
        <span>API quota</span><span>45%</span>
      </div>
      <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
        <div style="position:absolute;left:0;top:0;height:100%;width:45%;background:#5850ec;border-radius:2px;"></div>
      </div>
    </div>

    <!-- Compute -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:6px;">
        <span>Compute</span><span>23%</span>
      </div>
      <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
        <div style="position:absolute;left:0;top:0;height:100%;width:23%;background:#31c48d;border-radius:2px;"></div>
      </div>
    </div>
  </div>
</div>`,language:"html"}}},render:()=>`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;padding:24px;max-width:480px;">
      <h4 style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-semibold);
                 color:#111928;margin:0 0 20px 0;">Resource usage</h4>
      <div style="display:flex;flex-direction:column;gap:20px;">
        ${[{label:"Storage",value:82,color:"orange"},{label:"API quota",value:45,color:"primary"},{label:"Compute",value:23,color:"green"},{label:"Bandwidth",value:61,color:"blue"}].map(({label:o,value:e,color:r})=>`
          <div>
            <div style="display:flex;justify-content:space-between;
                        font-family:inherit;
                        font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);margin-bottom:6px;">
              <span>${o}</span><span>${e}%</span>
            </div>
            <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
              <div style="position:absolute;left:0;top:0;height:100%;width:${e}%;
                          background:${n[r]};border-radius:2px;"></div>
            </div>
          </div>`).join("")}
      </div>
    </div>`};var h,b,f;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Interactive (Controls)',
  render: args => {
    const {
      value,
      color,
      labelBelow
    } = args;
    const fillColor = COLORS[color] ?? COLORS.primary;
    const pct = Math.min(100, Math.max(0, value));
    const labelHtml = \`<div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">\${pct}%</div>\`;
    let htmlCode = '';
    let reactCode = '';
    if (labelBelow) {
      htmlCode = \`<div class="progress">
  <div class="progress-bar progress-bar-\${color}"></div>
</div>
<div class="progress-label">\${pct}%</div>\`;
      reactCode = \`<div className="progress">
  <div className="progress-bar progress-bar-\${color}" />
</div>
<div className="progress-label">\${pct}%</div>\`;
    } else {
      htmlCode = \`<div class="progress-label">\${pct}%</div>
<div class="progress">
  <div class="progress-bar progress-bar-\${color}"></div>
</div>\`;
      reactCode = \`<div className="progress-label">\${pct}%</div>
<div className="progress">
  <div className="progress-bar progress-bar-\${color}" />
</div>\`;
    }
    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return \`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
          <div style="max-width:480px;">\${progressBar(args)}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>\${htmlEscaped}</code></pre>
            </div>
            <button data-copy="\${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="8" height="8" rx="1"/>
                <path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/>
              </svg>
              Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid #e5e7eb;border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:#666;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:#f9fafb;padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>\${reactEscaped}</code></pre>
            </div>
            <button data-copy="\${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:#f3f4f6;color:#374151;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="8" height="8" rx="1"/>
                <path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/>
              </svg>
              Copy
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
      <\/script>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: \`
## Progress Bar Snippet Reference

Use the **Controls** panel to experiment. Code updates live.

### Basic Syntax

\\\`\\\`\\\`
<div class="progress">
  <div class="progress-bar progress-bar-{color}" style="width:{value}%"></div>
</div>
\\\`\\\`\\\`

### Colors (Semantic)

- **primary** (purple) — neutral progress, default
- **green** — success, healthy, on-track
- **orange** — warning, attention needed
- **red** — error, failed, critical
- **blue** — info, secondary metric
- **yellow** — caution, needs review
- **purple** — custom, alternative
- **pink** — highlight, special
- **indigo** — secondary info

### With Label

#### Label Above (default)
\\\`\\\`\\\`
<div style="...">
  <div class="progress-label">50%</div>
  <div class="progress">
    <div class="progress-bar progress-bar-primary" style="width:50%"></div>
  </div>
</div>
\\\`\\\`\\\`

#### Label Below
\\\`\\\`\\\`
<div style="...">
  <div class="progress">
    <div class="progress-bar progress-bar-primary" style="width:50%"></div>
  </div>
  <div class="progress-label">50%</div>
</div>
\\\`\\\`\\\`

### ✅ Do

- Use semantic color (green = success, orange/red = warning/error)
- Always show the value (percentage or label)
- Use in context (task progress, completion %, health metrics)
- Pair with descriptive text ("Upload in progress", "4 of 8 steps")

### ❌ Don't

- Don't use to show current time or buffering (use Skeleton instead)
- Don't hide the percentage value
- Don't use multiple progress bars for unrelated metrics in same space
- Don't hardcode width values outside of JavaScript — use \\\`style="width:{value}%"\\\` only
        \`.trim()
      },
      source: {
        transform: (_src, ctx) => {
          const {
            value,
            color,
            labelBelow
          } = ctx.args;
          const fillColor = COLORS[color] ?? COLORS.primary;
          const pct = Math.min(100, Math.max(0, value));
          const labelHtml = \`<div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">\${pct}%</div>\`;
          if (labelBelow) {
            return \`<div style="width:100%;">
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:\${pct}%;background:\${fillColor};border-radius:2px;"></div>
  </div>
  \${labelHtml}
</div>\`;
          }
          return \`<div style="width:100%;">
  \${labelHtml}
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:\${pct}%;background:\${fillColor};border-radius:2px;"></div>
  </div>
</div>\`;
        }
      }
    }
  }
}`,...(f=(b=u.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var m,x,y,w,k;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'All colors',
  args: {
    value: 75
  },
  parameters: {
    controls: {
      include: ['value']
    },
    docs: {
      description: {
        story: \`
All nine fill colors from Figma (node \\\`3283:24174\\\`) at 75%.
Use the **Value** control to see how width scales across the palette.

**✅ Do** — map color to semantic meaning: green for health/success, orange/yellow for warnings, primary for neutral progress.
**❌ Don't** — use Yellow (\\\`#ffdf20\\\`) on a white background without sufficient contrast in surrounding text — the bar itself is low-contrast on light surfaces.
        \`.trim()
      },
      source: {
        code: \`<!-- Primary -->
<div style="width:100%;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
</div>

<!-- Green -->
<div style="width:100%;margin-top:16px;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#31c48d;border-radius:2px;"></div>
  </div>
</div>

<!-- Orange -->
<div style="width:100%;margin-top:16px;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#ff8a4c;border-radius:2px;"></div>
  </div>
</div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    value
  }) => \`
    <div style="max-width:480px;display:flex;flex-direction:column;gap:20px;">
      \${Object.entries(COLORS).map(([name, hex]) => \`
        <div>
          <div style="font-family:ui-monospace,monospace;font-size:10px;color:#9ca3af;margin-bottom:8px;">\${name} — \${hex}</div>
          \${progressBar({
    value,
    color: name
  })}
        </div>
      \`).join('')}
    </div>\`
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`All nine fill colors from Figma at 75% value.
Use the **Value** slider to see how fill proportions behave across the palette.

**✅ Do** — pick a color that maps to the semantic meaning of the metric
  (green for health/success, orange/red for warnings, primary for neutral progress).
**❌ Don't** — use Yellow (\`#ffdf20\`) on white without ensuring the track contrast is sufficient
  (yellow is low-contrast on light backgrounds; pair it with a dark label or dark container).`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var C,$,z,B,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'All values (25 / 50 / 75 / 100)',
  args: {
    color: 'primary'
  },
  parameters: {
    controls: {
      include: ['color']
    },
    docs: {
      description: {
        story: \`
The four value breakpoints from Figma (Value=25/50/75/100) using Primary color.
Use the **Color** control to preview a different fill across all steps.

**✅ Do** — set \\\`aria-valuenow\\\`, \\\`aria-valuemin\\\`, \\\`aria-valuemax\\\` on \\\`role="progressbar"\\\` in production.
**❌ Don't** — hardcode widths in px; use \\\`%\\\` so the bar adapts to its container width.
        \`.trim()
      },
      source: {
        code: \`<div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
  style="width:100%;">
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;">75%</div>
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
</div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    color
  }) => \`
    <div style="max-width:480px;display:flex;flex-direction:column;gap:20px;">
      \${[25, 50, 75, 100].map(v => progressBar({
    value: v,
    color
  })).join('')}
    </div>\`
}`,...(z=($=d.parameters)==null?void 0:$.docs)==null?void 0:z.source},description:{story:'The four Figma value breakpoints (25 / 50 / 75 / 100) for the Primary color.\nUse the **Color** control to preview a different fill color across all four steps.\n\n**✅ Do** — always set `aria-valuenow`, `aria-valuemin`, `aria-valuemax` on the `<progress>` or\n  role="progressbar" element in production — the visual label alone is not enough for screen readers.\n**❌ Don\'t** — hardcode widths in px; use `%` so the bar adapts to its container.',...(S=(B=d.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};var D,T,L,A,j;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Label below (helper text)',
  args: {
    value: 75
  },
  parameters: {
    controls: {
      include: ['value']
    },
    docs: {
      description: {
        story: \`
\\\`Bottom helper text=True\\\` from Figma: the percentage label appears **below** the track.
Use in compact layouts (cards, table rows) where space above the track is unavailable.

**✅ Do** — use the bottom label in dense contexts (card footers, table cells).
**❌ Don't** — show both a top and a bottom label on the same bar — pick one position.
        \`.trim()
      },
      source: {
        code: \`<div style="width:100%;">
  <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
    <div style="position:absolute;left:0;top:0;height:100%;width:75%;background:#5850ec;border-radius:2px;"></div>
  </div>
  <div style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);text-align:right;margin-top:6px;">75%</div>
</div>\`,
        language: 'html'
      }
    }
  },
  render: ({
    value
  }) => \`
    <div style="max-width:480px;display:flex;flex-direction:column;gap:20px;">
      \${['primary', 'green', 'orange', 'blue'].map(c => progressBar({
    value,
    color: c,
    labelBelow: true
  })).join('')}
    </div>\`
}`,...(L=(T=p.parameters)==null?void 0:T.docs)==null?void 0:L.source},description:{story:`\`Bottom helper text=True\` from Figma: the percentage label appears below the track,
useful when a top label would crowd the layout (e.g. inside a compact card or table row).

**✅ Do** — use the bottom label variant when the bar is inside a dense layout where
  top-label spacing is unavailable.
**❌ Don't** — show both a top label and a bottom helper text simultaneously — pick one position.`,...(j=(A=p.parameters)==null?void 0:A.docs)==null?void 0:j.description}}};var M,O,P,R,U;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'In context — dashboard card',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`
Realistic example: multiple progress bars inside a dashboard card tracking resource usage across projects.
This shows how bars at different values and colors sit together with labels and context text.
        \`.trim()
      },
      source: {
        code: \`<div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;padding:24px;max-width:480px;">
  <h4 style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;margin:0 0 20px;">Resource usage</h4>

  <div style="display:flex;flex-direction:column;gap:20px;">
    <!-- Storage -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:6px;">
        <span>Storage</span><span>82%</span>
      </div>
      <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
        <div style="position:absolute;left:0;top:0;height:100%;width:82%;background:#ff8a4c;border-radius:2px;"></div>
      </div>
    </div>

    <!-- API quota -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:6px;">
        <span>API quota</span><span>45%</span>
      </div>
      <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
        <div style="position:absolute;left:0;top:0;height:100%;width:45%;background:#5850ec;border-radius:2px;"></div>
      </div>
    </div>

    <!-- Compute -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:6px;">
        <span>Compute</span><span>23%</span>
      </div>
      <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
        <div style="position:absolute;left:0;top:0;height:100%;width:23%;background:#31c48d;border-radius:2px;"></div>
      </div>
    </div>
  </div>
</div>\`,
        language: 'html'
      }
    }
  },
  render: () => \`
    <div style="background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:12px;padding:24px;max-width:480px;">
      <h4 style="font-family:inherit;font-size:var(--text-sm);font-weight:var(--font-semibold);
                 color:#111928;margin:0 0 20px 0;">Resource usage</h4>
      <div style="display:flex;flex-direction:column;gap:20px;">
        \${[{
    label: 'Storage',
    value: 82,
    color: 'orange'
  }, {
    label: 'API quota',
    value: 45,
    color: 'primary'
  }, {
    label: 'Compute',
    value: 23,
    color: 'green'
  }, {
    label: 'Bandwidth',
    value: 61,
    color: 'blue'
  }].map(({
    label,
    value,
    color
  }) => \`
          <div>
            <div style="display:flex;justify-content:space-between;
                        font-family:inherit;
                        font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);margin-bottom:6px;">
              <span>\${label}</span><span>\${value}%</span>
            </div>
            <div style="position:relative;height:6px;background:var(--color-border-default);border-radius:2px;overflow:hidden;">
              <div style="position:absolute;left:0;top:0;height:100%;width:\${value}%;
                          background:\${COLORS[color]};border-radius:2px;"></div>
            </div>
          </div>\`).join('')}
      </div>
    </div>\`
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:`A realistic usage example: multiple progress bars in a card-like container,
as seen in dashboards tracking resource consumption or project milestones.`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};const V=["Interactive","AllColors","AllValues","LabelBelow","InContext"];export{l as AllColors,d as AllValues,c as InContext,u as Interactive,p as LabelBelow,V as __namedExportsOrder,I as default};
