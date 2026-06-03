/**
 * Iris Library — Button Group
 *
 * Source: Figma › Iris Library › ---- Buttons page
 * Frame: Group Buttons (node 3254:21142)
 *
 * ## Figma variants
 * | Type            | Description                                      |
 * |----------------|--------------------------------------------------|
 * | Default         | 3-segment text group (Years · Months · Days)     |
 * | Only Icon       | 2-segment icon-only (chevron-left / chevron-right)|
 * | With stat       | Left: icon+label, Right: numeric count badge     |
 * | With dropdown   | Left: text, Right: icon (bookmark/save action)   |
 * | With tooltip    | Default group with tooltip above active segment  |
 *
 * ## Design specs
 * - Border: 1px solid var(--color-border-default) (--color-border-base)
 * - Background (default): var(--color-bg-white)
 * - Background (hover/active): var(--color-bg-secondary) (--color-bg-tertiary)
 * - Text: #111928 (--color-text-heading equivalent)
 * - Font: 14px / 500 (Inter Medium)
 * - Border-radius: 6px on the group container (NOT 12px — group uses 6px in Figma)
 * - Padding per segment: 8px 16px (text segment), 8px 9px (icon segment)
 * - Height: 40px
 *
 * ## QA notes
 * - Segments share a single continuous border — no double border between segments
 * - Only first segment gets left-rounded corners; only last gets right-rounded corners
 * - Hover darkens the segment to var(--color-bg-secondary); active class applies the same fill
 * - "With stat" right slot shows a muted count, not a badge pill
 * - "With dropdown" right slot is an icon-only square segment
 * - Tooltip renders above the group, dark bg #111928, 4px radius
 */

export default {
  title: 'Iris Library/Button/Group',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
Segmented button groups — joined segments sharing a single border line.

**CSS:** wrap \`.btn\` elements in \`.btn-group\`

\`\`\`html
<div class="btn-group">
  <button class="btn">Years</button>
  <button class="btn">Months</button>
  <button class="btn active">Days</button>
</div>
\`\`\`

Border-radius: **6px** on the container (not the standard 12px).

        See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────
    seg1: {
      control: 'text',
      description: 'Label for segment 1 (leftmost).',
      table: { category: 'Content', defaultValue: { summary: 'Years' } },
    },
    seg2: {
      control: 'text',
      description: 'Label for segment 2 (middle).',
      table: { category: 'Content', defaultValue: { summary: 'Months' } },
    },
    seg3: {
      control: 'text',
      description: 'Label for segment 3 (rightmost).',
      table: { category: 'Content', defaultValue: { summary: 'Days' } },
    },
    // ── Appearance ───────────────────────────────────────────
    primary: {
      control: 'boolean',
      description: 'Adds `btn-group--primary` — soft indigo active state for chart/visualisation toggles.',
      table: { category: 'Appearance', defaultValue: { summary: false } },
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: '`sm` adds `btn-group--sm` — compact ~32px height for card/chart areas.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    // ── State ────────────────────────────────────────────────
    activeIndex: {
      control: 'select',
      options: [0, 1, 2],
      description: 'Which segment (0-indexed) gets the `.active` class.',
      table: { category: 'State', defaultValue: { summary: 2 } },
    },
  },
  args: {
    seg1: 'Years',
    seg2: 'Months',
    seg3: 'Days',
    primary: false,
    size: 'default',
    activeIndex: 2,
  },
};

/* ── Helpers ──────────────────────────────────────────────── */

const CHEVRON_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:16px;height:16px;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4
    a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
</svg>`;

const CHEVRON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:16px;height:16px;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4
    a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
</svg>`;

const DOWNLOAD_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:16px;height:16px;" aria-hidden="true">
  <path fill-rule="evenodd"
    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9
    10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414
    0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
</svg>`;

const BOOKMARK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
  style="width:16px;height:16px;" aria-hidden="true">
  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
</svg>`;

/* ── Stories ─────────────────────────────────────────────── */

export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;
    const cls = ['btn-group', a.primary && 'btn-group--primary', a.size === 'sm' && 'btn-group--sm'].filter(Boolean).join(' ');
    const segs = [a.seg1, a.seg2, a.seg3];

    const htmlCode = `<div class="${cls}">\n${segs.map((seg, i) => `  <button class="btn${i === a.activeIndex ? ' active' : ''}">${seg}</button>`).join('\n')}\n</div>`;

    const reactCode = `<div className="${cls}">\n${segs.map((seg, i) => `  <button className={\`btn\${${i} === activeIndex ? ' active' : ''}\`}>${seg}</button>`).join('\n')}\n</div>`;

    const componentCode = `export function ButtonGroup({ segments = ["${a.seg1}", "${a.seg2}", "${a.seg3}"], activeIndex = ${a.activeIndex}, primary = ${a.primary}, size = "${a.size}", onChange }) {\n  const cls = [\n    'btn-group',\n    primary && 'btn-group--primary',\n    size === 'sm' && 'btn-group--sm'\n  ].filter(Boolean).join(' ');\n  \n  return (\n    <div className={cls}>\n      {segments.map((seg, i) => (\n        <button\n          key={i}\n          className={i === activeIndex ? 'btn active' : 'btn'}\n          onClick={() => onChange?.(i)}\n        >\n          {seg}\n        </button>\n      ))}\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
          <div class="${cls}">
            <button class="btn${a.activeIndex === 0 ? ' active' : ''}">${a.seg1}</button>
            <button class="btn${a.activeIndex === 1 ? ' active' : ''}">${a.seg2}</button>
            <button class="btn${a.activeIndex === 2 ? ' active' : ''}">${a.seg3}</button>
          </div>
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
        story: 'Configure all modifiers and content. Use **primary** + **size=sm** to match chart-area toggles.',
      },
    },
  },
};

/**
 * Default 3-segment text group.
 * Use `activeIndex` control to change which segment is active.
 * QA: Each segment is 40px tall. Active segment gets var(--color-bg-secondary) bg.
 */
export const Default = {
    name: 'Default — text segments (Years / Months / Days)',
  args: { activeIndex: 2 },
  parameters: {
    controls: { include: ['activeIndex'] },
    docs: {
      description: {
        story: 'Standard 3-segment text group. Use **activeIndex** control to highlight a different segment.',
      },
      source: {
        code: `<div class="btn-group">
  <button class="btn">Years</button>
  <button class="btn">Months</button>
  <button class="btn active">Days</button>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ activeIndex }) => `
    <div class="btn-group">
      <button class="btn${activeIndex === 0 ? ' active' : ''}">Years</button>
      <button class="btn${activeIndex === 1 ? ' active' : ''}">Months</button>
      <button class="btn${activeIndex === 2 ? ' active' : ''}">Days</button>
    </div>`,
};

/**
 * Icon-only 2-segment group (pagination prev/next).
 * QA: Segments are square, icon centered, 40×40px.
 */
export const OnlyIcon = {
    name: 'Only Icon — prev / next',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Icon-only segments — common for pagination controls. Segments are square (40×40px).',
      },
      source: {
        code: `<div class="btn-group">
  <button class="btn" style="padding:9px;" aria-label="Previous"><!-- chevron-left --></button>
  <button class="btn" style="padding:9px;" aria-label="Next"><!-- chevron-right --></button>
</div>`,
        language: 'html',
      },
    },
  },
  render: () => `
    <div class="btn-group">
      <button class="btn" style="padding:9px;" aria-label="Previous">${CHEVRON_LEFT}</button>
      <button class="btn" style="padding:9px;" aria-label="Next">${CHEVRON_RIGHT}</button>
    </div>`,
};

/**
 * With stat — left segment has icon+label, right segment shows a count.
 * QA: Right slot text is smaller, muted color (#6a7282). No pill around the count.
 */
export const WithStat = {
    name: 'With stat — action + count',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Left segment: icon + label. Right segment: numeric count in muted style (`btn-group-stat-count`).',
      },
      source: {
        code: `<div class="btn-group">
  <button class="btn" style="gap:8px;padding:8px 16px;">
    <!-- download icon -->
    <span>Download</span>
  </button>
  <button class="btn" style="padding:8px 16px;">
    <span class="btn-group-stat-count">12k</span>
  </button>
</div>`,
        language: 'html',
      },
    },
  },
  render: () => `
    <div class="btn-group">
      <button class="btn" style="gap:8px;padding:8px 16px;">
        ${DOWNLOAD_ICON}
        <span>Download</span>
      </button>
      <button class="btn" style="padding:8px 16px;">
        <span class="btn-group-stat-count">12k</span>
      </button>
    </div>`,
};

/**
 * With dropdown — text action on the left, icon action on the right.
 * QA: Right segment is icon-only square. Hover state darkens both independently.
 */
export const WithDropdown = {
    name: 'With dropdown — text + icon slot',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Common pattern: primary action text + secondary icon (save/bookmark). Right slot is icon-only square.',
      },
      source: {
        code: `<div class="btn-group">
  <button class="btn" style="padding:8px 16px;">Save changes</button>
  <button class="btn" style="padding:8px 9px;" aria-label="Bookmark"><!-- bookmark icon --></button>
</div>`,
        language: 'html',
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 6px;">Default</p>
        <div class="btn-group">
          <button class="btn" style="padding:8px 16px;">Save changes</button>
          <button class="btn" style="padding:8px 9px;" aria-label="Bookmark">${BOOKMARK_ICON}</button>
        </div>
      </div>
      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 6px;">Active (hover) state</p>
        <div class="btn-group">
          <button class="btn active" style="padding:8px 16px;">Save changes</button>
          <button class="btn active" style="padding:8px 9px;" aria-label="Bookmark">${BOOKMARK_ICON}</button>
        </div>
      </div>
    </div>`,
};

/**
 * With tooltip — active segment triggers a tooltip positioned above.
 * QA: Tooltip bg = #111928, text white, 4px border-radius.
 *     Tooltip arrow points down toward the triggering segment.
 */
export const WithTooltip = {
    name: 'With tooltip',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Tooltip appears above the active segment.
Figma specs: bg \`#111928\`, border-radius 4px, shadow-xs, arrow pointing down.
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;align-items:flex-end;gap:40px;padding-top:48px;">
      <div style="position:relative;display:inline-block;">
        <div style="
          position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);
          background:#111928;color:#fff;font-size:12px;font-weight:500;
          padding:6px 12px;border-radius:4px;white-space:nowrap;
          box-shadow:0px 1px 2px rgba(0,0,0,0.08);pointer-events:none;">
          Tooltip on top
          <span style="
            position:absolute;top:100%;left:50%;transform:translateX(-50%);
            border:5px solid transparent;border-top-color:#111928;display:block;width:0;height:0;">
          </span>
        </div>
        <div class="btn-group">
          <button class="btn">Years</button>
          <button class="btn active">Months</button>
          <button class="btn">Days</button>
        </div>
      </div>
    </div>`,
};

/**
 * Primary modifier — for toggles attached to charts or data visualisations.
 * Active segment gets a soft indigo bg (#e5edff) with brand purple text (#42389d)
 * instead of the default grey — visually connects the control to the chart it drives.
 *
 * Use cases: Daily/Cumulative chart mode, Entire month/Week pickers, KPI metric toggles.
 * Plain UI filters and toolbars should use the default btn-group (grey active).
 */
export const Primary = {
    name: 'Primary — chart & visualisation toggles',
  args: { size: 'sm' },
  parameters: {
    controls: { include: ['size'] },
    docs: {
      description: {
        story: `
Add \`btn-group--primary\` for the brand purple active state.
Add \`btn-group--sm\` for compact ~32px height — typical for chart-area toggles.
Modifiers are independent and composable.

**When to use primary:** toggle directly controls a chart — Daily/Cumulative, time-range pickers, KPI metric selectors.
**When to use sm:** toggle sits inside a card or chart area where full-size feels heavy.
**Default btn-group** (no modifiers) → filter bars, toolbars, table-mode toggles.

Use the **size** control below to compare sm vs default height across all examples.

\`\`\`html
<!-- chart toggle: compact + purple -->
<div class="btn-group btn-group--primary btn-group--sm">
  <button class="btn active">Daily</button>
  <button class="btn">Cumulative</button>
</div>
\`\`\`
        `,
      },
    },
  },
  render: ({ size }) => {
    const sm = size === 'sm' ? ' btn-group--sm' : '';
    return `
    <div style="display:flex;flex-direction:column;gap:24px;">

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Chart mode toggle — primary${sm ? ' + sm' : ''}</p>
        <div class="btn-group btn-group--primary${sm}">
          <button class="btn active">Daily</button>
          <button class="btn">Cumulative</button>
        </div>
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Time-range picker — primary${sm ? ' + sm' : ''} (5 segments)</p>
        <div class="btn-group btn-group--primary${sm}">
          <button class="btn active">Entire month</button>
          <button class="btn">Week 1</button>
          <button class="btn">Week 2</button>
          <button class="btn">Week 3</button>
          <button class="btn">Week 4</button>
        </div>
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 8px;">Default btn-group for comparison (grey)</p>
        <div class="btn-group${sm}">
          <button class="btn active">Daily</button>
          <button class="btn">Cumulative</button>
        </div>
      </div>

    </div>`;
  },
};

/**
 * All group types side by side for a quick QA scan.
 */
export const AllTypes = {
    name: 'All types — overview',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'All group patterns in one view for quick QA comparison.',
      },
    },
  },
  render: () => `
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Default</span>
        <div class="btn-group">
          <button class="btn">Years</button>
          <button class="btn">Months</button>
          <button class="btn active">Days</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Primary (chart toggle)</span>
        <div class="btn-group btn-group--primary">
          <button class="btn active">Daily</button>
          <button class="btn">Cumulative</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">Only Icon</span>
        <div class="btn-group">
          <button class="btn" style="padding:9px;" aria-label="Prev">${CHEVRON_LEFT}</button>
          <button class="btn" style="padding:9px;" aria-label="Next">${CHEVRON_RIGHT}</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">With stat</span>
        <div class="btn-group">
          <button class="btn" style="gap:8px;padding:8px 16px;">${DOWNLOAD_ICON}<span>Download</span></button>
          <button class="btn" style="padding:8px 16px;"><span class="btn-group-stat-count">12k</span></button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:160px;font:11px/1 sans-serif;color:var(--color-text-secondary);">With dropdown</span>
        <div class="btn-group">
          <button class="btn" style="padding:8px 16px;">Save changes</button>
          <button class="btn" style="padding:8px 9px;" aria-label="Bookmark">${BOOKMARK_ICON}</button>
        </div>
      </div>
    </div>`,
};
