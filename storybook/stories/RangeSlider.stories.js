// Figma node: 3284:22429 (Range Sliders — 5 types)
// File key: ZKtEULdYKaXe5uQl1J6ijI
//
// Built on the REAL `.form-range` class (styles.css + iris-components.css):
// 8px track, 22px white thumb with grey border (Figma-exact). The filled-track
// gradient is value-dependent state and stays inline; everything else is the class.

// ─── Design tokens (for the inline fill gradient only) ───────────────────────
const FILL = 'var(--color-primary)';
const TRACK = 'var(--color-bg-muted)';

// ─── SVG icons ────────────────────────────────────────────────────────────────
const icnVolOff = (c = '#6b7280') =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5 6 9H2v6h4l5 4V5Z" fill="${c}"/><path d="M22 9l-6 6M16 9l6 6" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const icnVolUp = (c = '#6b7280') =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5 6 9H2v6h4l5 4V5Z" fill="${c}"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;

/* ── Core helper — real <input class="form-range"> ───────────────────────── */
const fillGradient = (value, track = TRACK) =>
  `background:linear-gradient(to right,${FILL} 0%,${FILL} ${value}%,${track} ${value}%,${track} 100%);`;

function slider(args) {
  const { sliderType = 'value', value = 35, min = 0, max = 100 } = args;
  const gradientUpdate = `this.style.background='linear-gradient(to right,${FILL} 0%,${FILL} '+this.value+'%,${TRACK} '+this.value+'%,${TRACK} 100%)'`;

  const labels = sliderType === 'with-data'
    ? `<div style="display:flex;justify-content:space-between;margin-top:6px;">
        ${['0', '50', '100', '150'].map((l) => `<span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:#6b7280;">${l}</span>`).join('')}
      </div>` : '';

  const tipUid = 'tip' + Math.random().toString(36).slice(2, 7);
  const tooltip = sliderType === 'with-tooltip'
    ? `<div style="text-align:right;margin-bottom:4px;">
        <span id="${tipUid}" style="display:inline-block;padding:3px 10px;background:#111928;border-radius:6px;font-size:var(--text-xs);font-weight:var(--font-medium);color:#ffffff;">${value}%</span>
      </div>` : '';

  const onInput = sliderType === 'with-tooltip'
    ? `${gradientUpdate};document.getElementById('${tipUid}').textContent=this.value+'%'`
    : gradientUpdate;

  if (sliderType === 'volume') {
    // Volume: lighter track band (#a4cafe) per Figma
    const volGradient = `background:linear-gradient(to right,${FILL} 0%,${FILL} ${value}%,#a4cafe ${value}%,#a4cafe 100%);`;
    const volUpdate = `this.style.background='linear-gradient(to right,${FILL} 0%,${FILL} '+this.value+'%,#a4cafe '+this.value+'%,#a4cafe 100%)'`;
    return `<div style="display:flex;align-items:center;gap:12px;">
      ${icnVolOff()}
      <input type="range" min="0" max="100" value="${value}" class="form-range" aria-label="Volume" style="${volGradient}" oninput="${volUpdate}" />
      ${icnVolUp()}
    </div>`;
  }

  if (sliderType === 'range') {
    // Two thumbs: two overlapping .form-range inputs (standard dual-range pattern)
    const v1 = Math.max(0, value - 20);
    const v2 = Math.min(100, value + 20);
    const uid = 'rng' + Math.random().toString(36).slice(2, 7);
    return `
    <div>
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:var(--text-xs);color:#6b7280;">
        <span id="${uid}-lo">Min: ${v1}%</span><span id="${uid}-hi">Max: ${v2}%</span>
      </div>
      <div style="position:relative;height:22px;">
        <div style="position:absolute;left:0;right:0;height:8px;top:7px;background:${TRACK};border-radius:4px;"></div>
        <div id="${uid}-fill" style="position:absolute;height:8px;top:7px;background:${FILL};border-radius:2px;left:${v1}%;width:${v2 - v1}%;"></div>
        <input id="${uid}-a" type="range" min="0" max="100" value="${v1}" class="form-range" aria-label="Minimum value"
          style="position:absolute;width:100%;top:0;margin:0;height:22px;background:transparent;pointer-events:none;">
        <input id="${uid}-b" type="range" min="0" max="100" value="${v2}" class="form-range" aria-label="Maximum value"
          style="position:absolute;width:100%;top:0;margin:0;height:22px;background:transparent;pointer-events:none;">
      </div>
    </div>
    <style>
      /* Dual-range: thumbs stay draggable while the transparent tracks pass clicks through */
      #${uid}-a::-webkit-slider-thumb, #${uid}-b::-webkit-slider-thumb { pointer-events: auto; }
      #${uid}-a::-moz-range-thumb, #${uid}-b::-moz-range-thumb { pointer-events: auto; }
    </style>
    <script>
    (function(){
      var a = document.getElementById('${uid}-a');
      var b = document.getElementById('${uid}-b');
      var fill = document.getElementById('${uid}-fill');
      var lo = document.getElementById('${uid}-lo');
      var hi = document.getElementById('${uid}-hi');
      function upd(){
        var mn = Math.min(+a.value, +b.value);
        var mx = Math.max(+a.value, +b.value);
        fill.style.left = mn + '%';
        fill.style.width = (mx - mn) + '%';
        lo.textContent = 'Min: ' + mn + '%';
        hi.textContent = 'Max: ' + mx + '%';
      }
      a.addEventListener('input', upd);
      b.addEventListener('input', upd);
    })();
    </script>`;
  }

  return `<div>
    ${tooltip}
    <input type="range" min="${min}" max="${max}" value="${value}" class="form-range" aria-label="Slider" style="${fillGradient(value)}" oninput="${onInput}" />
    ${labels}
  </div>`;
}

const TYPE_LABELS = {
  'range': 'Range — two thumbs',
  'value': 'Value — single thumb',
  'with-data': 'With data labels',
  'with-tooltip': 'With tooltip',
  'volume': 'Volume control',
};

// ─── Default export ────────────────────────────────────────────────────────────
export default {
  title: 'Iris Library/Range Slider',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Range Slider** lets users select a numeric value or range by dragging a thumb along a track.
5 types from Figma node 3284:22429 — all built on the real \`.form-range\` class.

**When to use**
- Price range filters (Range type)
- Volume / brightness controls (Volume type)
- Progress or severity rating (Value type)
- Precision input where step labels help (With data)

**When NOT to use**
- Precise numeric entry where a specific value matters → use a number **Input Field** instead
- Binary on/off → use **Toggle**
- More than 2 boundary values → use multiple separate inputs

**Anatomy**
- Track — \`.form-range\`: 8px height, bg \`var(--color-bg-muted)\`; filled segment \`var(--color-primary)\` (inline gradient, value-dependent)
- Thumb — from the class: 22×22px white circle, 2px \`var(--color-border-default)\` border (Figma-exact)
- Tooltip (optional) — \`bg:#111928\`, above the track
- Data labels (optional) — tick values below track, \`#6b7280\`
- Volume variant — volume-off / volume-up icons flank the track; unfilled band \`#a4cafe\`

**Accessibility** — always provide \`aria-label\` (or a visible label); the native input exposes \`aria-valuemin/max/now\` automatically. Keyboard: arrows step the value, Home/End jump to min/max.

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    sliderType: {
      control: 'select',
      options: Object.keys(TYPE_LABELS),
      description: 'Slider variant. `range`=two thumbs; `value`=single; `with-data`=tick labels; `with-tooltip`=tooltip above; `volume`=icon flanks.',
      table: { category: 'Appearance', defaultValue: { summary: 'value' } },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value (0–100). Drives the filled-track gradient and tooltip display.',
      table: { category: 'Content', defaultValue: { summary: 35 } },
    },
    min: {
      control: 'number',
      description: 'Minimum value — native `min` attribute (exposed as `aria-valuemin`).',
      table: { category: 'Content', defaultValue: { summary: 0 } },
    },
    max: {
      control: 'number',
      description: 'Maximum value — native `max` attribute (exposed as `aria-valuemax`).',
      table: { category: 'Content', defaultValue: { summary: 100 } },
    },
  },
  args: {
    sliderType: 'value',
    value: 35,
    min: 0,
    max: 100,
  },
};

// ─── Interactive (Controls) ───────────────────────────────────────────────────
export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => {
    const val = args.value || 35;

    const htmlCode = `<input\n  type="range"\n  class="form-range"\n  min="0"\n  max="100"\n  value="${val}"\n  aria-label="Slider"\n  style="${fillGradient(val)}"\n/>`;

    const reactCode = `<input\n  type="range"\n  className="form-range"\n  min="0"\n  max="100"\n  value={value}\n  onChange={(e) => setValue(e.target.value)}\n  aria-label="Slider"\n  style={{\n    background: \`linear-gradient(to right,var(--color-primary) 0%,var(--color-primary) \${value}%,var(--color-bg-muted) \${value}%,var(--color-bg-muted) 100%)\`,\n  }}\n/>`;

    const componentCode = `export function RangeSlider({ min = 0, max = 100, value, onChange, label = 'Range slider' }) {\n  const pct = ((value - min) / (max - min)) * 100;\n  return (\n    <input\n      type="range"\n      className="form-range"\n      min={min}\n      max={max}\n      value={value}\n      onChange={(e) => onChange?.(Number(e.target.value))}\n      aria-label={label}\n      style={{\n        background: \`linear-gradient(to right,var(--color-primary) 0%,var(--color-primary) \${pct}%,var(--color-bg-muted) \${pct}%,var(--color-bg-muted) 100%)\`,\n      }}\n    />\n  );\n}`;

    const esc = (s) => s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const panel = (title, code) => `
      <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
        <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">${title}</div>
        <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
          <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${esc(code)}</code></pre>
        </div>
        <button data-copy="${code.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
        </button>
      </div>`;

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          <div style="max-width:580px;padding:16px 0;">${slider(args)}</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
          ${panel('HTML', htmlCode)}
          ${panel('React', reactCode)}
          ${panel('Component (With Events)', componentCode)}
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
        story: 'Use **Controls** to adjust the slider value and switch types. Preview and snippets emit the real `.form-range` class.',
      },
      source: {
        transform: (_src, ctx) => {
          const v = ctx.args.value || 35;
          return `<input type="range" class="form-range" min="${ctx.args.min ?? 0}" max="${ctx.args.max ?? 100}" value="${v}" aria-label="Slider"\n  style="${fillGradient(v)}" />`;
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
        story: `All 5 slider types — every track is a real \`<input class="form-range">\`.

✅ **Range** — always label both min and max values so users understand the boundaries
✅ **With tooltip** — use when the exact value is important (price filter, font size)
✅ **Volume** — icon flanks are mandatory; don't omit them in audio/media contexts
❌ Don't use the **Range** type for a single boundary — use **Value** instead`,
      },
      source: {
        language: 'html',
        code: `<!-- Single value slider -->
<input type="range" class="form-range" min="0" max="100" value="35" aria-label="Slider"
  style="background:linear-gradient(to right,var(--color-primary) 0%,var(--color-primary) 35%,var(--color-bg-muted) 35%,var(--color-bg-muted) 100%);" />

<!-- Range slider (two overlapping .form-range inputs) -->
<div style="position:relative;height:22px;">
  <input type="range" class="form-range" min="0" max="100" value="15" aria-label="Minimum value"
    style="position:absolute;width:100%;background:transparent;pointer-events:none;" />
  <input type="range" class="form-range" min="0" max="100" value="68" aria-label="Maximum value"
    style="position:absolute;width:100%;background:transparent;pointer-events:none;" />
  <!-- thumbs re-enable pointer-events via ::-webkit-slider-thumb { pointer-events:auto; } -->
</div>

<!-- Volume -->
<input type="range" class="form-range" min="0" max="100" value="47" aria-label="Volume"
  style="background:linear-gradient(to right,var(--color-primary) 0%,var(--color-primary) 47%,#a4cafe 47%,#a4cafe 100%);" />`,
      },
    },
  },
  render: () => {
    const VALUES = { 'range': 45, 'value': 35, 'with-data': 34, 'with-tooltip': 35, 'volume': 47 };
    return `<div style="display:flex;flex-direction:column;gap:28px;max-width:580px;padding:8px 0;">
      ${Object.entries(TYPE_LABELS).map(([key, label]) =>
        `<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:8px;">${label}</div>
          <div style="padding:4px 0;">${slider({ sliderType: key, value: VALUES[key] })}</div>
        </div>`
      ).join('')}
    </div>`;
  },
};
