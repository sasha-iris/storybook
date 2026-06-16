/**
 * Iris Library — Card / States
 * Source: Figma › ---- Cards · Frame: Cards (13559:76419)
 *         + ---- Skeleton (loading state)
 */
import { ICON, compact } from './card-icons.js';

/**
 * ## Card states
 *
 * Every card in the Iris Library can exist in four data states.
 * Only the `.card-body` content changes — the `.card-header` stays consistent.
 *
 * ### States
 * | State | Trigger | Body content |
 * |---|---|---|
 * | **Loading** | Data fetch in progress | Skeleton placeholders matching loaded dimensions |
 * | **Empty** | Query returned 0 results | Icon + heading + supporting text + optional CTA |
 * | **Error** | Fetch failed / network down | Icon + message + Retry button |
 * | **Loaded** | Data available | Normal card body |
 *
 * ### React pattern
 * ```jsx
 * function DataCard({ loading, error, data }) {
 *   return (
 *     <div className="card">
 *       <div className="card-header">…</div>
 *       {loading  && <SkeletonBody />}
 *       {error    && <ErrorBody onRetry={refetch} />}
 *       {!loading && !error && !data?.length && <EmptyBody />}
 *       {data?.length > 0 && <LoadedBody data={data} />}
 *     </div>
 *   );
 * }
 * ```
 *
 * ### Accessibility requirements
 * - **Loading**: skeleton divs are `aria-hidden="true"` (or use `role="status"` with live region)
 * - **Empty**: icon is `aria-hidden="true"`; heading is the accessible label
 * - **Error**: Retry button is keyboard-focusable; error message is visible text (not just icon)
 * - **All states**: minimum card height should match loaded state to avoid layout shift
 *
 * ### Primary interactive story
 * Use the **Default** story to switch between all four states with a single `state` control.
 */
export default {
  title: 'Iris Library/Card/States',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `**Card / States** — data-lifecycle states for all card variants.

All states use the same \`.card\` shell — only the body content changes. The card dimensions must remain constant across all states to prevent layout shift.

**When to use**
- Any card that fetches async data needs all four states: loaded, loading, empty, error
- Use \`loading\` (skeleton) while data is in flight — never a spinner inside a card
- Use \`empty\` when a query returns zero results (not an error)
- Use \`error\` when the fetch fails — always show a retry action

**✅ Do** — keep card height identical across all states to prevent layout shift.
**❌ Don't** — use a spinner instead of skeleton for loading (causes size jump).
**❌ Don't** — show an empty state and an error state with the same message.

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
`,
      },
    },
  },
  argTypes: {
    // ── State ────────────────────────────────────────────────
    state: {
      control: { type: 'radio', options: ['loaded', 'loading', 'empty', 'error'] },
      description: 'Active data state. Switch here to compare all four states without navigating between stories.',
      table: { category: 'State', defaultValue: { summary: 'loaded' } },
    },
    variant: {
      control: { type: 'radio', options: ['content', 'kpi', 'chart'] },
      description: 'Card family to render the state against — `content` (text), `kpi` (metric), `chart` (sparkline).',
      table: { category: 'State', defaultValue: { summary: 'content' } },
    },
  },
  args: {
    state:   'loaded',
    variant: 'content',
  },
};

/* ── Shared body renderers ───────────────────── */

const loadedBodies = {
  content: `
    <div class="card-body-padded">
      <h5 style="font-size:var(--text-lg);font-weight:var(--font-semibold);
                 color:var(--color-text-heading);line-height:1.3;margin-bottom:8px;">
        Iris Design System — Q2 release</h5>
      <p style="font-size:var(--text-sm);color:var(--color-text-body-subtle);
                line-height:1.6;margin-bottom:16px;">
        New component tokens, updated card anatomy, and expanded chart card variants
        now available across all product surfaces.</p>
      <button class="btn btn-primary btn-sm">Read release notes</button>
    </div>`,
  kpi: `
    <div class="card-body-padded">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div class="card-stat-label">Total Revenue</div>
        <div class="card-icon card-icon-blue" style="flex-shrink:0;">${ICON.revenue}</div>
      </div>
      <div class="card-stat-value">$45,231</div>
      <div class="card-trend card-trend-up">
        <span class="card-trend-arrow">↑</span>
        <span>+20.1%</span>
        <span class="card-trend-context">vs last month</span>
      </div>
    </div>`,
  chart: `
    <div class="card-body-padded">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div class="card-stat-label">Total Revenue</div>
        <div class="card-icon card-icon-blue" style="width:32px;height:32px;flex-shrink:0;">${compact(ICON.revenue)}</div>
      </div>
      <div class="card-stat-value" style="font-size:1.625rem;">$45,231</div>
      <div class="card-trend card-trend-up" style="font-size:var(--text-xs);">
        <span class="card-trend-arrow">↑</span>
        <span>+20.1%</span>
        <span class="card-trend-context">vs last month</span>
      </div>
    </div>
    <svg style="width:100%;height:60px;display:block;"
         viewBox="0 0 320 60" preserveAspectRatio="none"
         xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,54 45,46 90,50 140,30 180,32 230,16 275,8 310,4 320,3 320,60 0,60"
               fill="#0E9F6E" opacity="0.12"/>
      <polyline points="0,54 45,46 90,50 140,30 180,32 230,16 275,8 310,4 320,3"
                fill="none" stroke="#0E9F6E" stroke-width="2"
                stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`,
};

const skeletonBodies = {
  content: `
    <div style="height:160px;background:#E5E7EB;
                animation:skeleton-pulse 1.5s ease-in-out infinite;"></div>
    <div class="card-body-padded">
      <div class="skeleton-text skeleton-w-2-3" style="height:16px;margin-bottom:10px;"></div>
      <div class="skeleton-text skeleton-w-full" style="height:12px;margin-bottom:6px;"></div>
      <div class="skeleton-text skeleton-w-full" style="height:12px;margin-bottom:6px;"></div>
      <div class="skeleton-text skeleton-w-1-2" style="height:12px;margin-bottom:16px;"></div>
      <div class="skeleton" style="height:32px;width:100px;border-radius:6px;"></div>
    </div>`,
  kpi: `
    <div class="card-body-padded">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div class="skeleton-text skeleton-w-1-2" style="height:12px;"></div>
        <div class="skeleton" style="width:36px;height:36px;border-radius:8px;flex-shrink:0;"></div>
      </div>
      <div class="skeleton-text skeleton-w-2-3" style="height:28px;margin-bottom:8px;"></div>
      <div class="skeleton-text skeleton-w-1-3" style="height:12px;"></div>
    </div>`,
  chart: `
    <div class="card-body-padded">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div class="skeleton-text skeleton-w-1-3" style="height:12px;"></div>
        <div class="skeleton" style="width:32px;height:32px;border-radius:8px;flex-shrink:0;"></div>
      </div>
      <div class="skeleton-text skeleton-w-2-3" style="height:28px;margin-bottom:8px;"></div>
      <div class="skeleton-text skeleton-w-1-3" style="height:12px;margin-bottom:12px;"></div>
    </div>
    <div class="skeleton" style="height:60px;"></div>`,
};

const emptyBodies = {
  content: `
    <div class="card-body-padded" style="text-align:center;padding:40px 20px;">
      <div aria-hidden="true" style="margin-bottom:12px;display:flex;justify-content:center;color:var(--color-text-fg-disabled);">${ICON.inbox}</div>
      <div style="font-size:var(--text-sm);font-weight:var(--font-semibold);
                  color:var(--color-text-heading);margin-bottom:6px;">No articles yet</div>
      <div style="font-size:var(--text-xs);color:var(--color-text-body-subtle);
                  line-height:1.6;margin-bottom:16px;">
        Published articles will appear here.</div>
      <button class="btn btn-primary btn-sm">Write your first article</button>
    </div>`,
  kpi: `
    <div class="card-body-padded" style="text-align:center;padding:32px 20px;">
      <div aria-hidden="true" style="margin-bottom:8px;display:flex;justify-content:center;color:var(--color-text-fg-disabled);">${ICON.chart}</div>
      <div style="font-size:var(--text-sm);font-weight:var(--font-semibold);
                  color:var(--color-text-heading);margin-bottom:6px;">No data yet</div>
      <div style="font-size:var(--text-xs);color:var(--color-text-body-subtle);line-height:1.6;">
        Revenue will appear once your first transaction is recorded.</div>
    </div>`,
  chart: `
    <div class="card-body-padded">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div class="card-stat-label">Revenue</div>
        <div class="card-icon card-icon-green" style="width:32px;height:32px;flex-shrink:0;">${compact(ICON.chart)}</div>
      </div>
      <div style="text-align:center;padding:12px 0 8px;">
        <div aria-hidden="true" style="margin-bottom:8px;">${ICON.inbox}</div>
        <div style="font-size:var(--text-xs);font-weight:var(--font-semibold);
                    color:var(--color-text-heading);margin-bottom:4px;">Not enough data</div>
        <div style="font-size:10px;color:var(--color-text-body-subtle);line-height:1.6;">
          Revenue data will appear after your first transaction.</div>
      </div>
    </div>
    <div style="height:60px;background:#F9FAFB;border-top:1px dashed var(--color-border-base);
                display:flex;align-items:center;justify-content:center;">
      <span style="font-size:10px;color:var(--color-text-fg-disabled);">No chart data</span>
    </div>`,
};

const errorBodies = {
  content: `
    <div class="card-body-padded" style="text-align:center;padding:40px 20px;">
      <div aria-hidden="true"
           style="width:44px;height:44px;border-radius:50%;background:#FEE2E2;
                  display:flex;align-items:center;justify-content:center;
                  color:#991B1B;margin:0 auto 12px;">${ICON.warning}</div>
      <div style="font-size:var(--text-sm);font-weight:var(--font-semibold);
                  color:var(--color-text-heading);margin-bottom:6px;">Failed to load</div>
      <div style="font-size:var(--text-xs);color:var(--color-text-body-subtle);
                  line-height:1.6;margin-bottom:16px;">
        Something went wrong. Please try again.</div>
      <button class="btn btn-alternative btn-sm">↻ Retry</button>
    </div>`,
  kpi: `
    <div class="card-body-padded" style="text-align:center;padding:24px 20px;">
      <div aria-hidden="true"
           style="width:36px;height:36px;border-radius:50%;background:#FEE2E2;
                  display:flex;align-items:center;justify-content:center;
                  color:#991B1B;margin:0 auto 10px;">${ICON.warning}</div>
      <div style="font-size:var(--text-xs);font-weight:var(--font-semibold);
                  color:var(--color-text-heading);margin-bottom:4px;">Load failed</div>
      <div style="font-size:10px;color:var(--color-text-body-subtle);margin-bottom:10px;">
        Something went wrong.</div>
      <button class="btn btn-alternative btn-xs">↻ Retry</button>
    </div>`,
  chart: `
    <div class="card-body-padded">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <div class="card-stat-label">Revenue</div>
        <div class="card-icon card-icon-green" style="width:32px;height:32px;flex-shrink:0;">${compact(ICON.chart)}</div>
      </div>
      <div style="padding:10px 12px;background:#FEF2F2;border:1px solid #FECACA;
                  border-radius:var(--radius-md);display:flex;align-items:flex-start;gap:8px;">
        <span style="color:#991B1B;font-size:var(--text-sm);flex-shrink:0;margin-top:1px;">✕</span>
        <div>
          <div style="font-size:var(--text-xs);font-weight:var(--font-semibold);
                      color:#991B1B;margin-bottom:2px;">Data unavailable</div>
          <div style="font-size:10px;color:#991B1B;opacity:0.8;
                      line-height:1.5;margin-bottom:6px;">
            Unable to fetch revenue data. Error code: 503.</div>
          <button class="btn btn-sm"
                  style="background:#FEE2E2;border-color:#FECACA;color:#991B1B;
                         font-size:10px;">↻ Try again</button>
        </div>
      </div>
    </div>
    <div style="height:60px;background:#FEF2F2;border-top:1px solid #FECACA;
                display:flex;align-items:center;justify-content:center;">
      <span style="font-size:10px;color:#991B1B;opacity:0.6;">Chart unavailable</span>
    </div>`,
};

const CARD_TITLES = { content: 'Recent articles', kpi: 'Total Revenue', chart: 'Revenue' };

/* ─────────────────────────────────────────────
   DEFAULT — fully interactive state switcher
───────────────────────────────────────────── */
/**
 * Switch `state` + `variant` in Controls to preview every combination
 * without leaving this single story.
 *
 * **QA checklist**
 * - `state:loading` → skeleton animation running (`skeleton-pulse` keyframe); no real content visible
 * - `state:empty` → icon present and `aria-hidden="true"`; heading is readable; CTA present on content variant only
 * - `state:error` → Retry/Try again button is keyboard-focusable; error message is visible text
 * - `state:loaded` → normal card body renders with no skeleton residue
 * - All states: card height consistent to avoid layout shift (compare loading vs loaded heights)
 * - `variant:kpi` → icon box renders in all states (header stays constant)
 * - `variant:chart` → period selector visible in all states (header stays constant)
 */

function cardStates({ state = 'loaded', variant = 'content' }) {
  let body = '';

  if (state === 'loaded') {
    body = variant === 'kpi'
      ? '<div style="font-size:28px;font-weight:600;color:var(--color-text-heading);margin:0 0 8px 0;">$24,556</div><div style="font-size:12px;color:var(--color-text-secondary);">+12.5% vs last month</div>'
      : variant === 'chart'
      ? '<div style="height:80px;background:var(--color-bg-tertiary);border-radius:6px;margin-bottom:12px;"></div><div style="font-size:12px;color:var(--color-text-secondary);">Weekly trend</div>'
      : '<p style="margin:0 0 12px 0;font-size:14px;color:var(--color-text-heading);font-weight:600;">Card Title</p><p style="margin:0 0 12px 0;font-size:13px;color:var(--color-text-secondary);">This is the loaded content state. All data is ready to display.</p>';
  } else if (state === 'loading') {
    body = '<div style="height:40px;background:var(--color-bg-tertiary);border-radius:6px;margin-bottom:8px;animation:skeleton-pulse 1.5s ease-in-out infinite;"></div><div style="height:24px;background:var(--color-bg-tertiary);border-radius:6px;animation:skeleton-pulse 1.5s ease-in-out infinite;"></div>';
  } else if (state === 'empty') {
    body = '<div style="text-align:center;"><div style="font-size:32px;margin-bottom:8px;">📭</div><p style="margin:0 0 4px 0;font-size:14px;font-weight:600;color:var(--color-text-heading);">No data available</p><p style="margin:0;font-size:12px;color:var(--color-text-secondary);">Start by adding your first item</p></div>';
  } else if (state === 'error') {
    body = '<div style="text-align:center;"><div style="font-size:32px;margin-bottom:8px;">⚠️</div><p style="margin:0 0 4px 0;font-size:14px;font-weight:600;color:var(--color-text-heading);">Failed to load</p><p style="margin:0;font-size:12px;color:var(--color-text-secondary);">Please try again later</p></div>';
  }

  return `<div class="card" style="width:${variant === 'kpi' ? '240px' : variant === 'chart' ? '380px' : '300px'};min-height:120px;padding:20px;border:1px solid var(--color-border-default);border-radius:12px;background:var(--color-bg-white);">${body}</div>`;
}

export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const { state = 'loaded', variant = 'content' } = args;
    const title = CARD_TITLES[variant] || 'Card title';

    const bodyByState = {
      loaded: '<!-- normal card body — see Loaded story for full per-variant markup -->',
      loading: '<div class="skeleton-text skeleton-w-2-3" style="height:16px;margin-bottom:10px;"></div>\n    <div class="skeleton-text skeleton-w-full" style="height:12px;margin-bottom:6px;"></div>\n    <div class="skeleton-text skeleton-w-1-2" style="height:12px;"></div>',
      empty: '<div aria-hidden="true" style="margin-bottom:12px;display:flex;justify-content:center;color:var(--color-text-fg-disabled);"><!-- inbox icon --></div>\n    <div style="font-weight:var(--font-semibold);margin-bottom:6px;">No data yet</div>\n    <div style="font-size:var(--text-xs);color:var(--color-text-body-subtle);">Items will appear here once added.</div>',
      error: '<div aria-hidden="true" style="width:44px;height:44px;border-radius:50%;background:#FEE2E2;display:flex;align-items:center;justify-content:center;color:#991B1B;margin:0 auto 12px;"><!-- warning icon --></div>\n    <div style="font-weight:var(--font-semibold);margin-bottom:6px;">Failed to load</div>\n    <div style="font-size:var(--text-xs);color:var(--color-text-body-subtle);margin-bottom:16px;">Something went wrong. Please try again.</div>\n    <button class="btn btn-alternative btn-sm">↻ Retry</button>',
    };

    const htmlCode = `<div class="card">\n  <div class="card-header">\n    <div class="card-header-title">${title}</div>\n  </div>\n  <div class="card-body-padded"${state === 'empty' || state === 'error' ? ' style="text-align:center;padding:40px 20px;"' : ''}>\n    ${bodyByState[state]}\n  </div>\n</div>`;

    const reactCode = `<div className="card">\n  <div className="card-header">\n    <div className="card-header-title">{title}</div>\n  </div>\n  {loading && <SkeletonBody variant="${variant}" />}\n  {error && <ErrorBody onRetry={onRetry} />}\n  {!loading && !error && isEmpty && <EmptyBody />}\n  {!loading && !error && !isEmpty && <LoadedBody data={data} variant="${variant}" />}\n</div>`;

    const componentCode = `export function DataCard({\n  title = "${title}",\n  variant = "${variant}",\n  loading = ${state === 'loading'},\n  error = ${state === 'error'},\n  data,\n  onRetry,\n}) {\n  const isEmpty = !loading && !error && (!data || data.length === 0);\n\n  return (\n    <div className="card">\n      <div className="card-header">\n        <div className="card-header-title">{title}</div>\n      </div>\n      {loading && <SkeletonBody variant={variant} />}\n      {error && (\n        <div className="card-body-padded" style={{ textAlign: 'center', padding: '40px 20px' }}>\n          <p>Failed to load</p>\n          <button className="btn btn-alternative btn-sm" onClick={onRetry}>\n            ↻ Retry\n          </button>\n        </div>\n      )}\n      {isEmpty && (\n        <div className="card-body-padded" style={{ textAlign: 'center', padding: '40px 20px' }}>\n          <p>No data yet</p>\n        </div>\n      )}\n      {!loading && !error && !isEmpty && (\n        <div className="card-body-padded">{/* LoadedBody(data, variant) */}</div>\n      )}\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${cardStates(args)}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
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
    backgrounds: { default: 'white' },
    docs: {
      description: { story: 'Primary QA story. Use `state` + `variant` Controls to switch between all four data states across content, KPI, and chart card types.' },
      source: {
        language: 'html',
        code: `<!-- Loading state: skeleton placeholders -->
<div class="card">
  <div class="card-header">
    <div class="skeleton-text skeleton-w-1-2" style="height:14px;"></div>
  </div>
  <div class="card-body-padded">
    <div class="skeleton-text skeleton-w-2-3" style="height:16px; margin-bottom:10px;"></div>
    <div class="skeleton-text skeleton-w-full" style="height:12px; margin-bottom:6px;"></div>
    <div class="skeleton-text skeleton-w-1-2" style="height:12px;"></div>
  </div>
</div>

<!-- Empty state -->
<div class="card">
  <div class="card-body-padded" style="text-align:center; padding:40px 20px;">
    <!-- aria-hidden decorative icon: inline SVG, e.g. inbox icon -->
    <div aria-hidden="true" style="margin-bottom:12px; display:flex; justify-content:center;
         color:var(--color-text-fg-disabled);"><!-- inbox SVG here --></div>
    <div style="font-weight:var(--font-semibold); margin-bottom:6px;">No data yet</div>
    <div style="font-size:var(--text-sm); color:var(--color-text-body-subtle);">
      Items will appear here once added.</div>
  </div>
</div>

<!-- Error state -->
<div class="card">
  <div class="card-body-padded" style="text-align:center; padding:40px 20px;">
    <div aria-hidden="true"
         style="width:44px;height:44px;border-radius:50%;background:#FEE2E2;
                display:flex;align-items:center;justify-content:center;
                color:#991B1B;margin:0 auto 12px;"><!-- warning SVG here --></div>
    <div style="font-weight:var(--font-semibold); margin-bottom:6px;">Failed to load</div>
    <div style="font-size:var(--text-sm); color:var(--color-text-body-subtle); margin-bottom:16px;">
      Something went wrong. Please try again.</div>
    <button class="btn btn-alternative btn-sm">↻ Retry</button>
  </div>
</div>`,
      },
    },
  },
};

/* ─────────────────────────────────────────────
   LOADING STATE
───────────────────────────────────────────── */
/**
 * Skeleton placeholders should match the loaded content dimensions as closely as possible
 * to prevent layout shift when data arrives.
 *
 * **QA checklist**
 * - Skeleton pulse animation running (`animation: skeleton-pulse 1.5s ease-in-out infinite`)
 * - Image placeholder height matches expected `<img>` height (160 px for content, n/a for KPI)
 * - Skeleton widths: title → 2/3, body lines → full, trend → 1/3 — all via utility classes
 * - No real text or values visible
 * - Chart card footer (legend) also skeletonised
 */
export const Loading = {
    name: 'Loading (skeleton)',
  parameters: {
    backgrounds: { default: 'white' },
    docs: {
      description: { story: 'Skeleton placeholder state for content, KPI, and chart cards. Skeleton dimensions mirror the loaded content to minimise layout shift.' },
      source: {
        language: 'html',
        code: `<!-- Loading state: skeleton placeholders (content card example) -->
<div class="card" style="width:300px;">
  <!-- Image placeholder — same height as loaded image -->
  <div style="height:160px;background:#E5E7EB;animation:skeleton-pulse 1.5s ease-in-out infinite;"></div>
  <div class="card-body-padded">
    <!-- Title skeleton: 2/3 width -->
    <div class="skeleton-text skeleton-w-2-3" style="height:16px;margin-bottom:10px;"></div>
    <!-- Body lines: full width -->
    <div class="skeleton-text skeleton-w-full" style="height:12px;margin-bottom:6px;"></div>
    <div class="skeleton-text skeleton-w-full" style="height:12px;margin-bottom:6px;"></div>
    <!-- Shorter line -->
    <div class="skeleton-text skeleton-w-1-2" style="height:12px;margin-bottom:16px;"></div>
    <!-- Button skeleton -->
    <div class="skeleton" style="height:32px;width:100px;border-radius:6px;"></div>
  </div>
</div>

<!-- Loading state: KPI card -->
<div class="card" style="width:240px;">
  <div class="card-body-padded">
    <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
      <div class="skeleton-text skeleton-w-1-2" style="height:12px;"></div>
      <div class="skeleton" style="width:36px;height:36px;border-radius:8px;"></div>
    </div>
    <div class="skeleton-text skeleton-w-2-3" style="height:28px;margin-bottom:8px;"></div>
    <div class="skeleton-text skeleton-w-1-3" style="height:12px;"></div>
  </div>
</div>`,
      },
    },
  },
  render: () => `
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">

      <!-- Content card loading -->
      <div class="card" style="width:300px;">
        ${skeletonBodies.content}
      </div>

      <!-- KPI card loading -->
      <div class="card" style="width:240px;">
        ${skeletonBodies.kpi}
      </div>

      <!-- Chart card loading -->
      <div class="card" style="width:380px;">
        ${skeletonBodies.chart}
        <div class="card-footer">
          <div style="display:flex;gap:12px;">
            <div class="skeleton" style="width:60px;height:12px;border-radius:6px;"></div>
            <div class="skeleton" style="width:60px;height:12px;border-radius:6px;"></div>
          </div>
        </div>
      </div>

    </div>`,
};

/* ─────────────────────────────────────────────
   EMPTY STATE
───────────────────────────────────────────── */
/**
 * Zero-data state. Centered icon + heading + supporting text + optional CTA.
 * Min-height should match the loaded card height to avoid layout shift.
 *
 * **QA checklist**
 * - Icon is `aria-hidden="true"` — heading is the accessible description
 * - CTA present only when there is a direct action available (not on chart/KPI)
 * - Minimum card height approximates loaded state (no sudden collapse)
 * - Text hierarchy: semibold heading → secondary supporting copy
 */
export const Empty = {
    name: 'Empty state',
  parameters: {
    backgrounds: { default: 'white' },
    docs: {
      description: { story: 'Zero-data state for content, KPI, and chart cards. Icon is decorative (aria-hidden). CTA is optional — only shown when there is a direct action the user can take.' },
      source: {
        language: 'html',
        code: `<!-- Empty state: content card (with CTA) -->
<div class="card" style="width:300px;">
  <div class="card-header">
    <div class="card-header-title">Recent articles</div>
  </div>
  <div class="card-body-padded" style="text-align:center;padding:40px 20px;">
    <!-- Decorative icon — aria-hidden -->
    <div aria-hidden="true" style="margin-bottom:12px;display:flex;justify-content:center;
         color:var(--color-text-fg-disabled);"><!-- inbox SVG here --></div>
    <div style="font-size:var(--text-sm);font-weight:600;color:var(--color-text-heading);
                margin-bottom:6px;">No articles yet</div>
    <div style="font-size:var(--text-xs);color:var(--color-text-body-subtle);
                line-height:1.6;margin-bottom:16px;">
      Published articles will appear here.</div>
    <!-- CTA: only when a direct action is available -->
    <button class="btn btn-primary btn-sm">Write your first article</button>
  </div>
</div>

<!-- Empty state: KPI card (no CTA) -->
<div class="card" style="width:240px;">
  <div class="card-body-padded" style="text-align:center;padding:32px 20px;">
    <div aria-hidden="true" style="margin-bottom:8px;display:flex;justify-content:center;
         color:var(--color-text-fg-disabled);"><!-- chart SVG here --></div>
    <div style="font-size:var(--text-sm);font-weight:600;color:var(--color-text-heading);
                margin-bottom:6px;">No data yet</div>
    <div style="font-size:var(--text-xs);color:var(--color-text-body-subtle);line-height:1.6;">
      Revenue will appear once your first transaction is recorded.</div>
  </div>
</div>`,
      },
    },
  },
  render: () => `
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">

      <!-- Content empty -->
      <div class="card" style="width:300px;">
        <div class="card-header">
          <div class="card-header-title">Recent articles</div>
        </div>
        ${emptyBodies.content}
      </div>

      <!-- KPI empty -->
      <div class="card" style="width:240px;">
        ${emptyBodies.kpi}
      </div>

      <!-- Chart empty -->
      <div class="card" style="width:380px;">
        ${emptyBodies.chart}
      </div>

    </div>`,
};

/* ─────────────────────────────────────────────
   ERROR STATE
───────────────────────────────────────────── */
/**
 * Fetch-failed or network-down state.
 * Three visual treatments shown here:
 * - **Centred** (content / KPI): icon circle + message + Retry button
 * - **Inline banner** (chart): red banner inside card body; less disruptive for data cards
 *
 * **QA checklist**
 * - Retry / Try again button is keyboard-accessible (focus ring visible, `<button>` not `<div>`)
 * - Error message is visible text — do not rely solely on the icon colour to communicate failure
 * - Icon circle `background:#FEE2E2` (red-100); no border
 * - Inline banner: `background:#FEF2F2`, `border:1px solid #FECACA`, `color:#991B1B`
 * - Do not use a full `.alert` component inside a card — use inline error styling instead
 */
export const Error = {
    name: 'Error state',
  parameters: {
    backgrounds: { default: 'white' },
    docs: {
      description: { story: 'Fetch-failed state. Centred treatment for content/KPI cards; inline error banner for chart cards. Retry button must be keyboard-accessible.' },
      source: {
        language: 'html',
        code: `<!-- Error state: centred treatment (content / KPI cards) -->
<div class="card" style="width:300px;">
  <div class="card-header">
    <div class="card-header-title">Recent articles</div>
  </div>
  <div class="card-body-padded" style="text-align:center;padding:40px 20px;">
    <!-- Icon circle: bg #FEE2E2 (red-100), icon color #991B1B -->
    <div aria-hidden="true"
         style="width:44px;height:44px;border-radius:50%;background:#FEE2E2;
                display:flex;align-items:center;justify-content:center;
                color:#991B1B;margin:0 auto 12px;"><!-- warning SVG here --></div>
    <div style="font-size:var(--text-sm);font-weight:600;color:var(--color-text-heading);
                margin-bottom:6px;">Failed to load</div>
    <div style="font-size:var(--text-xs);color:var(--color-text-body-subtle);
                line-height:1.6;margin-bottom:16px;">
      Something went wrong. Please try again.</div>
    <!-- Retry must be a <button>, keyboard-accessible -->
    <button class="btn btn-alternative btn-sm">↻ Retry</button>
  </div>
</div>

<!-- Error state: inline banner (chart cards) -->
<div class="card" style="width:380px;">
  <div class="card-body-padded">
    <!-- normal KPI header stays visible -->
    <div style="padding:10px 12px;background:#FEF2F2;border:1px solid #FECACA;
                border-radius:var(--radius-md);display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#991B1B;font-size:var(--text-sm);flex-shrink:0;margin-top:1px;">✕</span>
      <div>
        <div style="font-size:var(--text-xs);font-weight:600;color:#991B1B;margin-bottom:2px;">
          Data unavailable</div>
        <div style="font-size:10px;color:#991B1B;opacity:.8;line-height:1.5;margin-bottom:6px;">
          Unable to fetch data. Error code: 503.</div>
        <button class="btn btn-sm"
                style="background:#FEE2E2;border-color:#FECACA;color:#991B1B;font-size:10px;">
          ↻ Try again</button>
      </div>
    </div>
  </div>
  <div style="height:60px;background:#FEF2F2;border-top:1px solid #FECACA;
              display:flex;align-items:center;justify-content:center;">
    <span style="font-size:10px;color:#991B1B;opacity:.6;">Chart unavailable</span>
  </div>
</div>`,
      },
    },
  },
  render: () => `
    <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">

      <!-- Content error -->
      <div class="card" style="width:300px;">
        <div class="card-header">
          <div class="card-header-title">Recent articles</div>
        </div>
        ${errorBodies.content}
      </div>

      <!-- KPI error -->
      <div class="card" style="width:240px;">
        ${errorBodies.kpi}
      </div>

      <!-- Chart inline error -->
      <div class="card" style="width:380px;">
        ${errorBodies.chart}
      </div>

      <!-- Network-specific error with two actions -->
      <div class="card" style="width:300px;">
        <div class="card-header">
          <div class="card-header-title">Analytics</div>
        </div>
        <div class="card-body-padded" style="text-align:center;padding:40px 20px;">
          <div aria-hidden="true"
               style="width:44px;height:44px;border-radius:50%;background:#FEF3C7;
                      display:flex;align-items:center;justify-content:center;
                      color:#92400E;margin:0 auto 12px;">${ICON.wifiOff}</div>
          <div style="font-size:var(--text-sm);font-weight:var(--font-semibold);
                      color:var(--color-text-heading);margin-bottom:6px;">No connection</div>
          <div style="font-size:var(--text-xs);color:var(--color-text-body-subtle);
                      line-height:1.6;margin-bottom:16px;">
            Check your connection and try again.</div>
          <div style="display:flex;gap:8px;justify-content:center;">
            <button class="btn btn-primary btn-sm">↻ Retry</button>
            <button class="btn btn-alternative btn-sm">Dismiss</button>
          </div>
        </div>
      </div>

    </div>`,
};

/* ─────────────────────────────────────────────
   ALL STATES — side by side
───────────────────────────────────────────── */
/**
 * Loading → Empty → Error in a single row — one card type each.
 * Use this story to verify consistent card heights across all three non-loaded states.
 *
 * **QA checklist**
 * - All three cards same height (grid stretch)
 * - Skeleton animation running in loading column
 * - No content leaks between state columns
 */
export const AllStates = {
    name: 'All states — side by side',
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: { story: 'Loading / Empty / Error in one view. Use for design review — verify consistent card heights and no content leaks between states.' },
      source: {
        language: 'html',
        code: `<!-- All states side by side — 3-column grid -->
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:780px;">

  <!-- Loading column -->
  <div>
    <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;
              color:var(--color-text-fg-disabled);margin-bottom:8px;">Loading</p>
    <div class="card">
      <div class="card-header">
        <div class="skeleton-text skeleton-w-1-2" style="height:14px;"></div>
      </div>
      <div class="card-body-padded" style="padding-top:0;">
        <div class="skeleton-text skeleton-w-1-3" style="height:28px;margin-bottom:8px;"></div>
        <div class="skeleton-text skeleton-w-1-2" style="height:12px;margin-bottom:12px;"></div>
        <div class="skeleton" style="height:60px;border-radius:6px;"></div>
      </div>
    </div>
  </div>

  <!-- Empty column -->
  <div>
    <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;
              color:var(--color-text-fg-disabled);margin-bottom:8px;">Empty</p>
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">Metric</div>
      </div>
      <div class="card-body-padded" style="text-align:center;padding:24px 16px;">
        <div aria-hidden="true"
             style="margin-bottom:8px;display:flex;justify-content:center;
                    color:var(--color-text-fg-disabled);"><!-- inbox SVG --></div>
        <div style="font-size:var(--text-xs);font-weight:600;color:var(--color-text-heading);
                    margin-bottom:4px;">No data yet</div>
        <div style="font-size:10px;color:var(--color-text-body-subtle);">
          Data will appear here soon.</div>
      </div>
    </div>
  </div>

  <!-- Error column -->
  <div>
    <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;
              color:var(--color-text-fg-disabled);margin-bottom:8px;">Error</p>
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">Metric</div>
      </div>
      <div class="card-body-padded" style="text-align:center;padding:24px 16px;">
        <div aria-hidden="true"
             style="margin-bottom:8px;display:flex;justify-content:center;
                    color:var(--color-text-fg-danger);"><!-- x-circle SVG --></div>
        <div style="font-size:var(--text-xs);font-weight:600;color:var(--color-text-heading);
                    margin-bottom:4px;">Load failed</div>
        <div style="font-size:10px;color:var(--color-text-body-subtle);margin-bottom:10px;">
          Something went wrong.</div>
        <button class="btn btn-alternative btn-xs">↻ Retry</button>
      </div>
    </div>
  </div>

</div>`,
      },
    },
  },
  render: () => `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:780px;">

      <div>
        <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;
                  color:var(--color-text-fg-disabled);margin-bottom:8px;">Loading</p>
        <div class="card">
          <div class="card-header">
            <div class="skeleton-text skeleton-w-1-2" style="height:14px;"></div>
          </div>
          <div class="card-body-padded" style="padding-top:0;">
            <div class="skeleton-text skeleton-w-1-3" style="height:28px;margin-bottom:8px;"></div>
            <div class="skeleton-text skeleton-w-1-2" style="height:12px;margin-bottom:12px;"></div>
            <div class="skeleton" style="height:60px;border-radius:6px;"></div>
          </div>
        </div>
      </div>

      <div>
        <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;
                  color:var(--color-text-fg-disabled);margin-bottom:8px;">Empty</p>
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">Metric</div>
          </div>
          <div class="card-body-padded" style="text-align:center;padding:24px 16px;">
            <div aria-hidden="true" style="margin-bottom:8px;display:flex;justify-content:center;color:var(--color-text-fg-disabled);">${ICON.inbox}</div>
            <div style="font-size:var(--text-xs);font-weight:var(--font-semibold);
                        color:var(--color-text-heading);margin-bottom:4px;">No data yet</div>
            <div style="font-size:10px;color:var(--color-text-body-subtle);">
              Data will appear here soon.</div>
          </div>
        </div>
      </div>

      <div>
        <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;
                  color:var(--color-text-fg-disabled);margin-bottom:8px;">Error</p>
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">Metric</div>
          </div>
          <div class="card-body-padded" style="text-align:center;padding:24px 16px;">
            <div aria-hidden="true" style="margin-bottom:8px;display:flex;justify-content:center;color:var(--color-text-fg-danger);">${ICON.xCircle}</div>
            <div style="font-size:var(--text-xs);font-weight:var(--font-semibold);
                        color:var(--color-text-heading);margin-bottom:4px;">Load failed</div>
            <div style="font-size:10px;color:var(--color-text-body-subtle);margin-bottom:10px;">
              Something went wrong.</div>
            <button class="btn btn-alternative btn-xs">↻ Retry</button>
          </div>
        </div>
      </div>

    </div>`,
};
