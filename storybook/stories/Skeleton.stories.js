// Figma: Iris Library / Skeleton — node 13251:80914
// File: ZKtEULdYKaXe5uQl1J6ijI
// Light mode only (Dark Version variants not implemented per project rules).
// 6 layout types: Card + Image, Image + Text, Text, List, Simple text, Widget.

const IMAGE_ICON = `<svg width="44" height="31" viewBox="0 0 44 31" fill="none" opacity="0.35"><circle cx="7" cy="8" r="4" fill="#6b7280"/><path d="M0 31 L14 12 L27 24 L35 15 L44 31 Z" fill="#6b7280"/></svg>`;

// .skeleton       = lighter placeholder (#E5E7EB + pulse animation) — body text, avatars
// .skeleton-image = image placeholder (same bg, rounded-md)
// .skeleton-avatar = circular placeholder
// Darker headings/image areas: .skeleton + inline style override for background:var(--color-border-default)
// animated=false: disable animation via inline style="animation:none;"

// Build the style string for a skeleton block — merges optional extras
function sk(animated, extra = '') {
  const anim = animated ? '' : 'animation:none;';
  return `class="skeleton" style="${anim}${extra}"`;
}
// Darker variant (headings, image frames)
function skd(animated, extra = '') {
  const anim = animated ? '' : 'animation:none;';
  return `class="skeleton" style="background:var(--color-border-default);${anim}${extra}"`;
}
// Avatar placeholder (circle)
function ska(animated, extra = '') {
  const anim = animated ? '' : 'animation:none;';
  return `class="skeleton-avatar" style="${anim}${extra}"`;
}
// Image placeholder (rounded rect)
function ski(animated, extra = '') {
  const anim = animated ? '' : 'animation:none;';
  return `class="skeleton-image" style="background:var(--color-border-default);${anim}${extra}"`;
}

function skCardImage({ animated }) {
  return `
<div style="width:384px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div ${ski(animated, 'height:95px;border-radius:8px;margin-bottom:16px;display:flex;align-items:center;justify-content:center;')}>
    ${IMAGE_ICON}
  </div>
  <div style="margin-bottom:14px;">
    <div ${skd(animated, 'height:8px;border-radius:20px;margin-bottom:10px;')}></div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div ${sk(animated, 'height:8px;border-radius:12px;')}></div>
      <div ${sk(animated, 'height:8px;border-radius:12px;width:88%;')}></div>
      <div ${sk(animated, 'height:8px;border-radius:12px;width:75%;')}></div>
      <div ${sk(animated, 'height:8px;border-radius:12px;width:60%;')}></div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <div ${ska(animated, 'width:26px;height:26px;flex-shrink:0;')}></div>
    <div>
      <div ${sk(animated, 'width:69px;height:8px;border-radius:6px;margin-bottom:4px;')}></div>
      <div ${sk(animated, 'width:90px;height:6px;border-radius:6px;')}></div>
    </div>
  </div>
</div>`;
}

function skImageText({ animated }) {
  return `
<div style="width:600px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);display:flex;gap:24px;align-items:flex-start;">
  <div ${ski(animated, 'width:224px;height:148px;flex-shrink:0;display:flex;align-items:center;justify-content:center;')}>
    ${IMAGE_ICON}
  </div>
  <div style="flex:1;">
    <div ${sk(animated, 'width:147px;height:9px;border-radius:15px;margin-bottom:14px;')}></div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div ${sk(animated, 'height:6px;border-radius:12px;width:88%;')}></div>
      <div ${sk(animated, 'height:6px;border-radius:12px;width:100%;')}></div>
      <div ${sk(animated, 'height:6px;border-radius:12px;width:74%;')}></div>
      <div ${sk(animated, 'height:6px;border-radius:12px;width:39%;')}></div>
    </div>
  </div>
</div>`;
}

function skText({ animated }) {
  return `
<div style="width:640px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div style="margin-bottom:14px;">
    <div ${skd(animated, 'width:396px;height:9px;border-radius:15px;margin-bottom:8px;')}></div>
    <div ${skd(animated, 'width:246px;height:9px;border-radius:15px;')}></div>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <div style="display:flex;align-items:center;gap:6px;">
      <div ${ska(animated, 'width:16px;height:16px;flex-shrink:0;')}></div>
      <div ${sk(animated, 'width:54px;height:5px;border-radius:6px;')}></div>
    </div>
    <div ${sk(animated, 'width:38px;height:4px;border-radius:6px;')}></div>
  </div>
</div>`;
}

function skList({ animated }) {
  const nameWidths = [70, 85, 76, 92, 68];
  const roleWidths = [50, 62, 55, 48, 60];
  const rows = nameWidths.map((nw, i) => `
    <div style="display:flex;align-items:center;justify-content:space-between;height:40px;${i < 4 ? 'border-bottom:1px solid var(--color-bg-muted);' : ''}">
      <div style="display:flex;align-items:center;gap:8px;">
        <div ${ska(animated, 'width:32px;height:32px;flex-shrink:0;')}></div>
        <div>
          <div ${skd(animated, `width:${nw}px;height:8px;border-radius:6px;margin-bottom:4px;`)}></div>
          <div ${sk(animated, `width:${roleWidths[i]}px;height:6px;border-radius:6px;`)}></div>
        </div>
      </div>
      <div ${sk(animated, 'width:20px;height:5px;border-radius:4px;')}></div>
    </div>`).join('');
  return `
<div style="width:300px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:0 16px;">
  ${rows}
</div>`;
}

function skSimpleText({ animated }) {
  // From Figma: 7 rows at 8px. Most are var(--color-border-default); middle cells in 3-col rows are var(--color-border-default).
  return `
<div style="width:640px;padding:16px;background:var(--color-bg-surface);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div style="display:flex;flex-direction:column;gap:16px;">
    <div ${skd(animated, 'height:8px;border-radius:6px;')}></div>
    <div ${skd(animated, 'height:8px;border-radius:6px;width:371px;')}></div>
    <div style="display:flex;gap:8px;">
      <div ${skd(animated, 'flex:1;height:8px;border-radius:6px;')}></div>
      <div ${sk(animated, 'flex:1;height:8px;border-radius:6px;')}></div>
      <div ${skd(animated, 'flex:1;height:8px;border-radius:6px;')}></div>
    </div>
    <div ${skd(animated, 'height:8px;border-radius:6px;width:610px;')}></div>
    <div ${skd(animated, 'height:8px;border-radius:6px;width:432px;')}></div>
    <div style="display:flex;gap:8px;">
      <div ${skd(animated, 'flex:1;height:8px;border-radius:6px;')}></div>
      <div ${sk(animated, 'flex:1;height:8px;border-radius:6px;')}></div>
      <div ${skd(animated, 'flex:1;height:8px;border-radius:6px;')}></div>
    </div>
    <div ${skd(animated, 'height:8px;border-radius:6px;width:294px;')}></div>
  </div>
</div>`;
}

function skWidget({ animated }) {
  // From Figma: 7 bars × 17.7px wide × 229px tall, fill=var(--color-border-default), gap ~24px
  const bars = Array(7).fill(null).map(() =>
    `<div ${sk(animated, 'width:17px;height:229px;border-radius:2px;')}></div>`
  ).join('');
  return `
<div style="width:300px;padding:16px;background:var(--color-bg-surface);border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
  <div style="margin-bottom:16px;">
    <div ${skd(animated, 'width:119px;height:8px;border-radius:2px;')}></div>
    <div ${sk(animated, 'width:79px;height:6px;border-radius:2px;margin-top:6px;')}></div>
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
  return fn(args);
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
Skeleton blocks come in two weights: \`var(--color-border-default)\` (darker, used for headings and image areas)
and \`var(--color-border-default)\` (lighter, used for body text). Both support an optional shimmer animation.
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
  render: (args) => {
    const a = args;

    const htmlCode = `<!-- Skeleton loader -->\n<div class="skeleton skeleton--${a.type}${a.animated ? '' : ' skeleton--static'}" style="min-height:100px;border-radius:8px;background:var(--color-border-default)${a.animated ? ';animation:pulse 2s infinite;' : ''}"></div>\n<!-- Replace with real content once data is loaded -->`;

    const reactCode = `<div\n  className="skeleton skeleton--${a.type}${a.animated ? '' : ' skeleton--static'}"\n  style={{\n    minHeight: '100px',\n    borderRadius: '8px',\n    background: 'var(--color-border-default)',\n    animation: ${a.animated ? "'pulse 2s infinite'" : 'none'},\n  }}\n/>\n{/* Replace with real content once data is loaded */}`;

    const componentCode = `export function SkeletonLoader({ type = 'text', animated = true, height = 100 }) {\n  return (\n    <div\n      className={\`skeleton skeleton--\${type}\${animated ? '' : ' skeleton--static'}\`}\n      style={{\n        minHeight: height,\n        borderRadius: '8px',\n        background: 'var(--color-border-default)',\n        animation: animated ? 'pulse 2s infinite' : 'none',\n      }}\n    />\n  );\n}\n\n/* CSS */\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${skeleton(args)}
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
        story: 'Use **Controls** to switch between skeleton layouts and toggle the shimmer animation.',
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
    return `
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
