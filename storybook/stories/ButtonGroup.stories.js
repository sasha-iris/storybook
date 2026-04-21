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
 * - Border: 1px solid #e5e7eb (--color-border-base)
 * - Background (default): #ffffff
 * - Background (hover/active): #f3f4f6 (--color-bg-tertiary)
 * - Text: #111928 (--color-text-heading equivalent)
 * - Font: 14px / 500 (Inter Medium)
 * - Border-radius: 6px on the group container (NOT 12px — group uses 6px in Figma)
 * - Padding per segment: 8px 16px (left segment), 8px (icon segment)
 * - Height: 40px
 *
 * ## QA notes
 * - Segments share a single continuous border — no double border between segments
 * - Only first segment gets left-rounded corners; only last gets right-rounded corners
 * - Hover darkens the segment to #f3f4f6; pressed/focus state gets #d1d5db outline
 * - "With stat" right slot shows a muted count, not a badge pill
 * - "With dropdown" right slot is an icon-only square segment
 * - Tooltip renders above the group, dark bg #111928, 4px radius
 */

export default {
  title: 'Iris Library/Components/Button/Group',
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
        `,
      },
    },
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

/**
 * Default 3-segment text group.
 * QA: Each segment is 40px tall. Active segment gets #f3f4f6 bg.
 */
export const Default = {
  name: 'Default — text segments (Years / Months / Days)',
  render: () => `
    <div class="btn-group">
      <button class="btn">Years</button>
      <button class="btn">Months</button>
      <button class="btn active">Days</button>
    </div>`,
};

/**
 * Icon-only 2-segment group (pagination prev/next).
 * QA: Segments are square, icon centered, 40×40px.
 */
export const OnlyIcon = {
  name: 'Only Icon — prev / next',
  parameters: {
    docs: {
      description: {
        story: 'Icon-only segments — common for pagination controls.',
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
    docs: {
      description: {
        story: 'Left segment: icon + label. Right segment: numeric count in muted style.',
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
    docs: {
      description: {
        story: 'Common pattern: primary action text + secondary icon (save/bookmark).',
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
                  color:#9CA3AF;margin:0 0 6px;">Hover state</p>
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
    docs: {
      description: {
        story: `
Tooltip appears above the hovered segment.
Figma specs: \`bg-[#111928]\`, border-radius 4px, shadow-xs, arrow pointing down.
        `,
      },
    },
  },
  render: () => `
    <div style="display:flex;align-items:flex-end;gap:40px;padding-top:48px;">
      <div style="position:relative;display:inline-block;">
        <!-- Tooltip -->
        <div style="
          position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);
          background:#111928;color:#fff;font-size:12px;font-weight:500;
          padding:6px 12px;border-radius:4px;white-space:nowrap;
          box-shadow:0px 1px 2px rgba(0,0,0,0.08);pointer-events:none;">
          Tooltip on top
          <!-- Arrow -->
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
 * All types side by side for a quick QA scan.
 */
export const AllTypes = {
  name: 'All types — overview',
  render: () => `
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:140px;font:11px/1 sans-serif;color:#6B7280;">Default</span>
        <div class="btn-group">
          <button class="btn">Years</button>
          <button class="btn">Months</button>
          <button class="btn active">Days</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:140px;font:11px/1 sans-serif;color:#6B7280;">Only Icon</span>
        <div class="btn-group">
          <button class="btn" style="padding:9px;" aria-label="Prev">${CHEVRON_LEFT}</button>
          <button class="btn" style="padding:9px;" aria-label="Next">${CHEVRON_RIGHT}</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:140px;font:11px/1 sans-serif;color:#6B7280;">With stat</span>
        <div class="btn-group">
          <button class="btn" style="gap:8px;padding:8px 16px;">${DOWNLOAD_ICON}<span>Download</span></button>
          <button class="btn" style="padding:8px 16px;"><span class="btn-group-stat-count">12k</span></button>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:140px;font:11px/1 sans-serif;color:#6B7280;">With dropdown</span>
        <div class="btn-group">
          <button class="btn" style="padding:8px 16px;">Save changes</button>
          <button class="btn" style="padding:8px 9px;" aria-label="Bookmark">${BOOKMARK_ICON}</button>
        </div>
      </div>
    </div>`,
};
