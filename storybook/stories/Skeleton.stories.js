// Figma: Iris Library / Skeleton — node 13251:80914
// File: ZKtEULdYKaXe5uQl1J6ijI
// Light mode only (Dark Version variants not implemented per project rules).
// 6 layout types: Card + Image, Image + Text, Text, List, Simple text, Widget.

const STYLES = `<style>
@keyframes sk-shimmer{0%{background-position:-800px 0}100%{background-position:800px 0}}
.sk{background:#e5e7eb}
.sk-d{background:#d1d5db}
.sk-a.sk{background:linear-gradient(90deg,#e5e7eb 25%,#f3f4f6 50%,#e5e7eb 75%);background-size:1600px 100%;animation:sk-shimmer 1.5s linear infinite}
.sk-a.sk-d{background:linear-gradient(90deg,#d1d5db 25%,#f3f4f6 50%,#d1d5db 75%);background-size:1600px 100%;animation:sk-shimmer 1.5s linear infinite}
</style>`;

const IMAGE_ICON = `<svg width="44" height="31" viewBox="0 0 44 31" fill="none" opacity="0.35"><circle cx="7" cy="8" r="4" fill="#6b7280"/><path d="M0 31 L14 12 L27 24 L35 15 L44 31 Z" fill="#6b7280"/></svg>`;

function ac(animated) { return animated ? 'sk-a' : ''; }

function skCardImage({ animated }) {
  const a = ac(animated);
  return `
<div style="width:384px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div class="sk-d ${a}" style="height:95px;border-radius:8px;margin-bottom:16px;display:flex;align-items:center;justify-content:center;">
    ${IMAGE_ICON}
  </div>
  <div style="margin-bottom:14px;">
    <div class="sk-d ${a}" style="height:8px;border-radius:20px;margin-bottom:10px;"></div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div class="sk ${a}" style="height:8px;border-radius:12px;"></div>
      <div class="sk ${a}" style="height:8px;border-radius:12px;width:88%;"></div>
      <div class="sk ${a}" style="height:8px;border-radius:12px;width:75%;"></div>
      <div class="sk ${a}" style="height:8px;border-radius:12px;width:60%;"></div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <div class="sk ${a}" style="width:26px;height:26px;border-radius:50%;flex-shrink:0;"></div>
    <div>
      <div class="sk ${a}" style="width:69px;height:8px;border-radius:6px;margin-bottom:4px;"></div>
      <div class="sk ${a}" style="width:90px;height:6px;border-radius:6px;"></div>
    </div>
  </div>
</div>`;
}

function skImageText({ animated }) {
  const a = ac(animated);
  return `
<div style="width:600px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);display:flex;gap:24px;align-items:flex-start;">
  <div class="sk-d ${a}" style="width:224px;height:148px;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
    ${IMAGE_ICON}
  </div>
  <div style="flex:1;">
    <div class="sk ${a}" style="width:147px;height:9px;border-radius:15px;margin-bottom:14px;"></div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div class="sk ${a}" style="height:6px;border-radius:12px;width:88%;"></div>
      <div class="sk ${a}" style="height:6px;border-radius:12px;width:100%;"></div>
      <div class="sk ${a}" style="height:6px;border-radius:12px;width:74%;"></div>
      <div class="sk ${a}" style="height:6px;border-radius:12px;width:39%;"></div>
    </div>
  </div>
</div>`;
}

function skText({ animated }) {
  const a = ac(animated);
  return `
<div style="width:640px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div style="margin-bottom:14px;">
    <div class="sk-d ${a}" style="width:396px;height:9px;border-radius:15px;margin-bottom:8px;"></div>
    <div class="sk-d ${a}" style="width:246px;height:9px;border-radius:15px;"></div>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:6px;">
      <div class="sk ${a}" style="width:16px;height:16px;border-radius:50%;flex-shrink:0;"></div>
      <div class="sk ${a}" style="width:54px;height:5px;border-radius:6px;"></div>
    </div>
    <div class="sk ${a}" style="width:38px;height:4px;border-radius:6px;"></div>
  </div>
</div>`;
}

function skList({ animated }) {
  const a = ac(animated);
  const nameWidths = [70, 85, 76, 92, 68];
  const roleWidths = [50, 62, 55, 48, 60];
  const rows = nameWidths.map((nw, i) => `
    <div style="display:flex;align-items:center;justify-content:space-between;height:40px;${i < 4 ? 'border-bottom:1px solid var(--color-bg-muted);' : ''}">
      <div style="display:flex;align-items:center;gap:8px;">
        <div class="sk ${a}" style="width:32px;height:32px;border-radius:50%;flex-shrink:0;"></div>
        <div>
          <div class="sk-d ${a}" style="width:${nw}px;height:8px;border-radius:6px;margin-bottom:4px;"></div>
          <div class="sk ${a}" style="width:${roleWidths[i]}px;height:6px;border-radius:6px;"></div>
        </div>
      </div>
      <div class="sk ${a}" style="width:20px;height:5px;border-radius:4px;"></div>
    </div>`).join('');
  return `
<div style="width:300px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:0 16px;">
  ${rows}
</div>`;
}

function skSimpleText({ animated }) {
  const a = ac(animated);
  // From Figma: 7 rows at 8px. Most are #d1d5db; middle cells in 3-col rows are #e5e7eb.
  return `
<div style="width:640px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div style="display:flex;flex-direction:column;gap:16px;">
    <div class="sk-d ${a}" style="height:8px;border-radius:6px;"></div>
    <div class="sk-d ${a}" style="height:8px;border-radius:6px;width:371px;"></div>
    <div style="display:flex;gap:8px;">
      <div class="sk-d ${a}" style="flex:1;height:8px;border-radius:6px;"></div>
      <div class="sk ${a}" style="flex:1;height:8px;border-radius:6px;"></div>
      <div class="sk-d ${a}" style="flex:1;height:8px;border-radius:6px;"></div>
    </div>
    <div class="sk-d ${a}" style="height:8px;border-radius:6px;width:610px;"></div>
    <div class="sk-d ${a}" style="height:8px;border-radius:6px;width:432px;"></div>
    <div style="display:flex;gap:8px;">
      <div class="sk-d ${a}" style="flex:1;height:8px;border-radius:6px;"></div>
      <div class="sk ${a}" style="flex:1;height:8px;border-radius:6px;"></div>
      <div class="sk-d ${a}" style="flex:1;height:8px;border-radius:6px;"></div>
    </div>
    <div class="sk-d ${a}" style="height:8px;border-radius:6px;width:294px;"></div>
  </div>
</div>`;
}

function skWidget({ animated }) {
  const a = ac(animated);
  // From Figma: 7 bars × 17.7px wide × 229px tall, fill=#e5e7eb, gap ~24px
  const bars = Array(7).fill(null).map(() =>
    `<div class="sk ${a}" style="width:17px;height:229px;border-radius:2px;"></div>`
  ).join('');
  return `
<div style="width:300px;padding:16px;background:var(--color-bg-surface);border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div style="margin-bottom:16px;">
    <div class="sk-d ${a}" style="width:119px;height:8px;border-radius:2px;margin-bottom:6px;"></div>
    <div class="sk ${a}" style="width:79px;height:6px;border-radius:2px;"></div>
  </div>
  <div style="display:flex;gap:24px;align-items:flex-end;">
    ${bars}
  </div>
</div>`;
}

const TYPE_MAP = {
  'card-image':  skCardImage,
  'image-text':  skImageText,
  'text':        skText,
  'list':        skList,
  'simple-text': skSimpleText,
  'widget':      skWidget,
};

function skeleton(args) {
  const fn = TYPE_MAP[args.type] || skCardImage;
  return STYLES + fn(args);
}

// ─────────────────────────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Skeleton',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Skeleton** renders a low-fidelity placeholder that mirrors the shape of content while it loads.

**When to use**
- While async data is being fetched (API calls, lazy imports)
- When the exact shape of the incoming content is known
- To reduce perceived latency — users see structure immediately

**When NOT to use**
- Short waits (< 300 ms) → use a spinner instead
- Unknown content shape → use a generic full-area spinner
- Error or empty states → use a dedicated empty-state component

**Anatomy**
Skeleton blocks come in two weights: \`#d1d5db\` (darker, used for headings and image areas)
and \`#e5e7eb\` (lighter, used for body text). Both support an optional shimmer animation.
The \`animated\` prop should be disabled when \`prefers-reduced-motion: reduce\` is detected.
        `,
      },
    },
  },
  argTypes: {
    // ── Appearance ──────────────────────────────────────────────────────────
    type: {
      control: 'select',
      options: ['card-image', 'image-text', 'text', 'list', 'simple-text', 'widget'],
      description: `Layout pattern to render. Each type mirrors a real UI pattern:
\`card-image\` — blog/content card with image header;
\`image-text\` — media object (image left, text right);
\`text\` — article header with author row;
\`list\` — data list with avatar + metadata rows;
\`simple-text\` — paragraph block with 7 text rows;
\`widget\` — dashboard widget with bar chart.`,
      table: { category: 'Appearance', defaultValue: { summary: 'card-image' } },
    },
    // ── State ────────────────────────────────────────────────────────────────
    animated: {
      control: 'boolean',
      description: 'Enables the left-to-right shimmer animation. **Disable** when `prefers-reduced-motion: reduce` is active — the WCAG 2.1 AA guideline requires no animation for users who request it.',
      table: { category: 'State', defaultValue: { summary: true } },
    },
  },
  args: {
    type: 'card-image',
    animated: true,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. Interactive

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => skeleton(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch between skeleton layouts and toggle the shimmer animation.',
      },
      source: {
        transform: (_src, ctx) => {
          const { type, animated } = ctx.args;
          return `<!-- Skeleton loader: ${type} -->
<div class="skeleton skeleton--${type}${animated ? '' : ' skeleton--static'}">
  <!-- Replace with real content once data is loaded -->
</div>`;
        },
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. All Types

export const AllTypes = {
  name: 'All types',
  args: { animated: true },
  parameters: {
    controls: { include: ['animated'] },
    docs: {
      description: {
        story: `All six skeleton layout types. Toggle **animated** to preview the static (no-motion) state.

**✅ Do** — match the skeleton layout to the actual content shape that will replace it.
**❌ Don't** — use a generic rectangle when the content shape is known — it increases layout shift.
**❌ Don't** — leave skeletons visible after data loads; always replace them immediately.`,
      },
      source: {
        code: `<!-- Card + Image skeleton -->
<div class="skeleton skeleton--card-image"> … </div>

<!-- Image + Text skeleton -->
<div class="skeleton skeleton--image-text"> … </div>

<!-- Text skeleton -->
<div class="skeleton skeleton--text"> … </div>

<!-- List skeleton (5 rows) -->
<div class="skeleton skeleton--list"> … </div>

<!-- Simple text skeleton (7 rows) -->
<div class="skeleton skeleton--simple-text"> … </div>

<!-- Widget (bar chart) skeleton -->
<div class="skeleton skeleton--widget"> … </div>`,
        language: 'html',
      },
    },
  },
  render: ({ animated }) => {
    const types = ['card-image', 'image-text', 'text', 'list', 'simple-text', 'widget'];
    const labels = {
      'card-image':  'Card + Image',
      'image-text':  'Image + Text',
      'text':        'Text',
      'list':        'List',
      'simple-text': 'Simple text',
      'widget':      'Widget',
    };
    return STYLES + `
<div style="display:flex;flex-direction:column;gap:32px;padding:24px;background:var(--color-bg-default);">
  ${types.map(type => `
    <div>
      <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;">${labels[type]}</div>
      ${TYPE_MAP[type]({ animated })}
    </div>`).join('')}
</div>`;
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. Static (no animation)

export const StaticNoAnimation = {
  name: 'Static — no animation',
  args: { animated: false },
  parameters: {
    controls: { include: ['type'] },
    docs: {
      description: {
        story: `Skeleton with animation disabled — for \`prefers-reduced-motion: reduce\` users.

**✅ Do** — detect \`prefers-reduced-motion\` via a media query and pass \`animated={false}\` when active.
**❌ Don't** — rely on CSS alone to disable animation; the prop must also stop JS-driven loops.`,
      },
      source: {
        code: `<!-- Check for reduced motion preference -->
<script>
  const animated = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
</script>

<!-- Pass animated=false when reduced motion is preferred -->
<div class="skeleton skeleton--card-image skeleton--static"> … </div>`,
        language: 'html',
      },
    },
  },
  render: ({ type }) => skeleton({ type, animated: false }),
};
