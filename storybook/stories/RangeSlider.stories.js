// Figma node: 3284:22429 (Range Sliders — 5 types)
// File key: ZKtEULdYKaXe5uQl1J6ijI

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  track:       '#e5e7eb',
  fill:        '#155dfc',
  fillVolume:  '#a4cafe',
  thumb:       '#ffffff',
  thumbBorder: '#e5e7eb',
  tooltip:     '#111928',
  tooltipText: '#ffffff',
  label:       '#6b7280',
  volumeIcon:  '#6b7280',
};

// ─── SVG icons ────────────────────────────────────────────────────────────────
const icnVolOff = (c='#6b7280') =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5 6 9H2v6h4l5 4V5Z" fill="${c}"/><path d="M22 9l-6 6M16 9l6 6" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const icnVolUp  = (c='#6b7280') =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5 6 9H2v6h4l5 4V5Z" fill="${c}"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`;

// ─── Core slider HTML ─────────────────────────────────────────────────────────
// Renders a pure-HTML/CSS slider since <input type="range"> styling is inconsistent.
// Uses native input with CSS custom appearance for production use.
function trackFill(fillPct, trackWidth = 610) {
  const filled = (fillPct / 100) * trackWidth;
  return { filled, remaining: trackWidth - filled };
}

function sliderTrack({ fillPct = 35, thumbPos = null, secondThumbPos = null, tooltip = false, labels = [], trackWidth = 580, isVolume = false }) {
  const filled = Math.round((fillPct / 100) * trackWidth);
  const fillColor = isVolume ? C.fillVolume : C.fill;

  // Main fill bar
  const fillBar = `<div style="position:absolute;left:0;top:0;height:8px;width:${filled}px;background:${C.fill};border-radius:4px 0 0 4px;"></div>`;

  // Volume uses a gradient fill
  const volFill = isVolume ? `<div style="position:absolute;left:0;top:0;height:8px;width:${filled}px;background:${C.fill};border-radius:4px 0 0 4px;"></div>` : '';

  // Thumb
  const thumbLeft = thumbPos !== null ? thumbPos : filled - 11;
  const thumbEl = thumbPos !== null || secondThumbPos === null
    ? `<div style="position:absolute;top:50%;left:${thumbLeft}px;transform:translate(-50%,-50%);
        width:22px;height:22px;border-radius:50%;background:${C.thumb};border:2px solid ${C.thumbBorder};
        box-shadow:0 1px 4px rgba(0,0,0,0.12);cursor:pointer;"></div>` : '';

  // Tooltip above thumb
  const tooltipEl = tooltip && thumbPos !== null
    ? `<div style="position:absolute;bottom:26px;left:${thumbLeft}px;transform:translateX(-50%);
        padding:4px 10px;background:${C.tooltip};border-radius:6px;white-space:nowrap;">
        <span style="font-size:12px;font-weight:500;color:${C.tooltipText};font-family:inherit;">35%</span>
        <div style="position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);
          width:8px;height:4px;background:${C.tooltip};clip-path:polygon(0 0,100% 0,50% 100%);"></div>
      </div>` : '';

  // Second thumb for range type
  const thumb2Left = secondThumbPos !== null ? secondThumbPos : null;
  const thumb2El = thumb2Left !== null
    ? `<div style="position:absolute;top:50%;left:${thumb2Left}px;transform:translate(-50%,-50%);
        width:22px;height:22px;border-radius:50%;background:${C.thumb};border:2px solid ${C.thumbBorder};
        box-shadow:0 1px 4px rgba(0,0,0,0.12);cursor:pointer;"></div>` : '';

  // Range fill between two thumbs
  const rangeFillEl = thumb2Left !== null
    ? `<div style="position:absolute;top:0;left:${thumbLeft}px;width:${thumb2Left - thumbLeft}px;height:8px;background:${C.fill};"></div>` : '';

  // Data labels below track
  const labelsEl = labels.length > 0
    ? `<div style="display:flex;justify-content:space-between;margin-top:8px;">
        ${labels.map(l => `<span style="font-size:14px;font-weight:500;color:${C.label};font-family:inherit;">${l}</span>`).join('')}
      </div>` : '';

  return `<div style="position:relative;height:40px;display:flex;align-items:center;">
    <div style="position:relative;width:${trackWidth}px;height:8px;background:${C.track};border-radius:4px;">
      ${fillBar}
      ${rangeFillEl}
      ${tooltipEl}
      ${thumbEl}
      ${thumb2El}
    </div>
  </div>${labelsEl}`;
}

// ─── 5 slider types ───────────────────────────────────────────────────────────
const TYPES = {
  'range': {
    label: 'Range — two thumbs',
    render: (tw) => sliderTrack({ fillPct: 25, thumbPos: Math.round(tw*0.25), secondThumbPos: Math.round(tw*0.68), trackWidth: tw }),
  },
  'value': {
    label: 'Value — single thumb',
    render: (tw) => sliderTrack({ fillPct: 35, thumbPos: Math.round(tw*0.35), trackWidth: tw }),
  },
  'with-data': {
    label: 'With data labels',
    render: (tw) => sliderTrack({ fillPct: 34, thumbPos: Math.round(tw*0.34), labels: ['0','50','100','150'], trackWidth: tw }),
  },
  'with-tooltip': {
    label: 'With tooltip',
    render: (tw) => sliderTrack({ fillPct: 35, thumbPos: Math.round(tw*0.35), tooltip: true, trackWidth: tw }),
  },
  'volume': {
    label: 'Volume control',
    render: () => `<div style="display:flex;align-items:center;gap:12px;">
      ${icnVolOff()}
      <div style="position:relative;flex:1;height:8px;background:#a4cafe;border-radius:4px;">
        <div style="position:absolute;left:0;top:0;height:8px;width:47%;background:${C.fill};border-radius:4px 0 0 4px;"></div>
        <div style="position:absolute;top:50%;left:47%;transform:translate(-50%,-50%);
          width:22px;height:22px;border-radius:50%;background:${C.thumb};border:2px solid ${C.thumbBorder};
          box-shadow:0 1px 4px rgba(0,0,0,0.12);cursor:pointer;"></div>
      </div>
      ${icnVolUp()}
    </div>`,
  },
};

// ─── Full interactive slider with native range input ──────────────────────────
function nativeSlider(args) {
  const { sliderType = 'value', value = 35, min = 0, max = 100 } = args;

  const trackStyle = `
    appearance:none;-webkit-appearance:none;width:100%;height:8px;
    border-radius:4px;background:linear-gradient(to right,${C.fill} 0%,${C.fill} ${value}%,${C.track} ${value}%,${C.track} 100%);
    outline:none;cursor:pointer;
  `;
  const thumbStyle = `
    <style>
      .iris-range::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:${C.thumb};border:2px solid ${C.thumbBorder};box-shadow:0 1px 4px rgba(0,0,0,.12);cursor:pointer;}
      .iris-range::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:${C.thumb};border:2px solid ${C.thumbBorder};box-shadow:0 1px 4px rgba(0,0,0,.12);cursor:pointer;}
    </style>`;

  const labels = sliderType === 'with-data'
    ? `<div style="display:flex;justify-content:space-between;margin-top:6px;">
        ${['0','50','100','150'].map(l => `<span style="font-size:14px;font-weight:500;color:${C.label};font-family:inherit;">${l}</span>`).join('')}
      </div>` : '';

  const tooltip = sliderType === 'with-tooltip'
    ? `<div style="text-align:right;margin-bottom:4px;">
        <span style="display:inline-block;padding:3px 10px;background:${C.tooltip};border-radius:6px;font-size:12px;font-weight:500;color:${C.tooltipText};font-family:inherit;">${value}%</span>
      </div>` : '';

  const onInput = `this.style.background='linear-gradient(to right,${C.fill} 0%,${C.fill} '+this.value+'%,${C.track} '+this.value+'%,${C.track} 100%)'`;

  if (sliderType === 'volume') {
    return `${thumbStyle}<div style="display:flex;align-items:center;gap:12px;font-family:inherit;">
      ${icnVolOff()}
      <input type="range" min="0" max="100" value="${value}" class="iris-range" style="${trackStyle}" oninput="${onInput}" />
      ${icnVolUp()}
    </div>`;
  }

  if (sliderType === 'range') {
    const v1 = Math.max(0, value - 20);
    const v2 = Math.min(100, value + 20);
    const onInput1 = `this.style.background='linear-gradient(to right,${C.fill} 0%,${C.fill} '+this.value+'%,${C.track} '+this.value+'%,${C.track} 100%)'`;
    return `${thumbStyle}<div style="font-family:inherit;">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:12px;color:${C.label};font-family:inherit;">
        <span>Min: ${v1}%</span><span>Max: ${v2}%</span>
      </div>
      <input type="range" min="0" max="100" value="${v1}" class="iris-range" style="${trackStyle}" oninput="${onInput1}" />
      <input type="range" min="0" max="100" value="${v2}" class="iris-range" style="${trackStyle};margin-top:8px;" oninput="${onInput1}" />
    </div>`;
  }

  return `${thumbStyle}<div style="font-family:inherit;">
    ${tooltip}
    <input type="range" min="${min}" max="${max}" value="${value}" class="iris-range" style="${trackStyle}" oninput="${onInput}" />
    ${labels}
  </div>`;
}

// ─── Default export ────────────────────────────────────────────────────────────
export default {
  title: 'Iris Library/Range Slider',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Range Slider** lets users select a numeric value or range by dragging a thumb along a track. 5 types from Figma node 3284:22429.

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
- Track — \`height:8px\`, bg \`#e5e7eb\`, filled \`#155dfc\`
- Thumb — \`22×22px\` circle, bg \`#ffffff\`, border \`#e5e7eb\`
- Tooltip (optional) — \`bg:#111928\`, appears above thumb
- Data labels (optional) — tick values below track, \`color:#6b7280\`
- Volume variant — volume-off / volume-up icons flank the track, active fill \`#a4cafe→#155dfc\`
        `,
      },
    },
  },
  argTypes: {
    sliderType: {
      control: 'select',
      options: Object.keys(TYPES),
      description: 'Slider variant. `range`=two thumbs; `value`=single; `with-data`=tick labels; `with-tooltip`=tooltip on thumb; `volume`=icon flanks.',
      table: { category: 'Appearance', defaultValue: { summary: 'value' } },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value (0–100). Drives the filled track width and tooltip display.',
      table: { category: 'Content', defaultValue: { summary: 35 } },
    },
    min: {
      control: 'number',
      description: 'Minimum value. Affects the accessible `min` attribute. ARIA: `aria-valuemin`.',
      table: { category: 'Content', defaultValue: { summary: 0 } },
    },
    max: {
      control: 'number',
      description: 'Maximum value. Affects the accessible `max` attribute. ARIA: `aria-valuemax`.',
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
  render: (args) => `<div style="max-width:580px;padding:16px 0;font-family:inherit;">${nativeSlider(args)}</div>`,
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const { value = 35 } = ctx.args;
          return `<input
  type="range"
  min="0"
  max="100"
  value="${value}"
  aria-label="Slider"
  style="
    appearance:none;
    width:100%;
    height:8px;
    border-radius:4px;
    background:linear-gradient(to right,#155dfc 0%,#155dfc ${value}%,#e5e7eb ${value}%,#e5e7eb 100%);
    outline:none;cursor:pointer;
  "
/>`;
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
        story: `All 5 slider types rendered at full width for visual comparison.

✅ **Range** — always label both min and max values so users understand the boundaries
✅ **With tooltip** — use when the exact value is important (price filter, font size)
✅ **Volume** — icon flanks are mandatory; don't omit them in audio/media contexts
❌ Don't use the **Range** type for a single boundary — use **Value** instead`,
      },
      source: {
        code: `<!-- Single value slider -->
<input type="range" min="0" max="100" value="35"
  style="
    appearance:none;width:100%;height:8px;border-radius:4px;
    background:linear-gradient(to right,#155dfc 0%,#155dfc 35%,#e5e7eb 35%,#e5e7eb 100%);
  "
/>

<!-- Range slider (two inputs stacked) -->
<input type="range" min="0" max="100" value="15" style="...fill 15%..." />
<input type="range" min="0" max="100" value="68" style="...fill 68%..." />`,
      },
    },
  },
  render: () => {
    const tw = 500;
    return `<div style="display:flex;flex-direction:column;gap:28px;max-width:580px;font-family:inherit;padding:8px 0;">
      ${Object.entries(TYPES).map(([key, { label, render }]) =>
        `<div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:8px;font-family:inherit;">${label}</div>
          <div style="padding:4px 0;">${render(tw)}</div>
        </div>`
      ).join('')}
    </div>`;
  },
};
