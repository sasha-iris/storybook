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
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Card body state variants: loading (skeleton), empty (zero data), error (fetch failed), loaded. All states use the same `.card` shell — only the body content changes.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'radio', options: ['loaded', 'loading', 'empty', 'error'] },
      description: 'Active data state. Switch here instead of navigating between stories to compare states in one place.',
      table: { category: 'State', type: { summary: "'loaded'|'loading'|'empty'|'error'" } },
    },
    variant: {
      control: { type: 'radio', options: ['content', 'kpi', 'chart'] },
      description: 'Card type to render the state against. `content` = text card, `kpi` = metric card, `chart` = chart card.',
      table: { category: 'State', type: { summary: "'content'|'kpi'|'chart'" } },
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
        <span style="color:#991B1B;font-size:14px;flex-shrink:0;margin-top:1px;">✕</span>
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
export const Default = {
  name: 'Interactive state switcher',
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
    <div style="font-weight:600; margin-bottom:6px;">No data yet</div>
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
    <div style="font-weight:600; margin-bottom:6px;">Failed to load</div>
    <div style="font-size:var(--text-sm); color:var(--color-text-body-subtle); margin-bottom:16px;">
      Something went wrong. Please try again.</div>
    <button class="btn btn-alternative btn-sm">↻ Retry</button>
  </div>
</div>`,
      },
    },
  },
  render: ({ state, variant }) => {
    const bodies = { loaded: loadedBodies, loading: skeletonBodies, empty: emptyBodies, error: errorBodies };
    const body = bodies[state]?.[variant] ?? loadedBodies.content;
    const width = variant === 'chart' ? '400px' : variant === 'kpi' ? '260px' : '380px';
    return `<div class="card" style="max-width:${width};">${body}</div>`;
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
    docs: { description: { story: 'Skeleton placeholder state for content, KPI, and chart cards. Skeleton dimensions mirror the loaded content to minimise layout shift.' } },
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
    docs: { description: { story: 'Zero-data state for content, KPI, and chart cards. Icon is decorative (aria-hidden). CTA is optional — only shown when there is a direct action the user can take.' } },
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
    docs: { description: { story: 'Fetch-failed state. Centred treatment for content/KPI cards; inline error banner for chart cards. Retry button must be keyboard-accessible.' } },
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
    docs: { description: { story: 'Loading / Empty / Error in one view. Use for design review — verify consistent card heights and no content leaks between states.' } },
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
