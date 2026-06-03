/**
 * Iris Library — Reporting / Card
 *
 * Source: Figma › Iris Library › ---- Reporting / Card (node 10046:76406)
 *
 * Scheduled-report configuration card from the Iris Finance reporting
 * dashboard. Shows delivery channels, schedule, recipients, connected
 * sales channels (Shopify, Amazon), and owner attribution.
 *
 * ## Figma variants — light mode only
 * | Prop   | Options                  |
 * |--------|--------------------------|
 * | State  | Default · Hovered        |
 * | Active | yes · no                 |
 * | Owner  | Iris · User              |
 *
 * ## Design specs (Figma-exact)
 * Container: 362px × 230px min, padding 16px, border-radius 12px, gap 12px.
 *
 * | State    | BG       | Border         | Shadow    |
 * |---------|----------|----------------|-----------|
 * | Default  | var(--color-bg-white)  | transparent    | shadow-sm |
 * | Hovered  | var(--color-bg-white)  | 1px #6875f5   | shadow-md |
 * | Inactive | var(--color-bg-tertiary)  | transparent    | shadow-sm |
 *
 * ## QA notes
 * - **Hovered**: title color → #42389d (brand/800) + arrow-right icon appears next to title
 * - **Inactive**: toggle off (gray/300 bg), E-mail+Slack chips → gray/100,
 *   Amazon icon bg → gray/200 (var(--color-border-default) not yellow), schedule text = paused message
 * - **Owner=Iris**: Iris Smart mark (xs, 24px, real Figma asset) + "Iris Finance" label
 * - **Owner=User**: round avatar circle + user name ("Jese Leos")
 * - Channel chip icons (mail, slack) use fill="currentColor" → color follows chip bg
 *
 * ## Approximations
 * - Shopify channel icon: real Figma SVG (node 10046:75871), flat green at 24px.
 *   See `shopifyBadge24` in brand-assets.js.
 * - Amazon channel icon: real Figma asset (Group13 composite) via `amazonBadge24()` from brand-assets.js.
 * - Iris Finance owner mark: real Figma asset (xs Smart mark) via `irisMarkImg({ size:'xs' })` from brand-assets.js.
 * - User avatar: initials circle (photo asset not embedded).
 * - All Figma asset URLs expire after 7 days — host locally before production.
 */

import { irisMarkImg, shopifyBadge24, amazonBadge24 } from './brand-assets.js';

export default {
  title: 'Iris Library/Card/Reporting',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
**Card / Reporting** — Figma node \`10046:76406\`.

Scheduled-report card for the Iris Finance reporting dashboard. Shows report configuration: delivery channels (E-mail / Slack), schedule, recipients, connected sales channels (Shopify, Amazon), and owner attribution.

**When to use**
- Displaying a configured scheduled report in a report list or dashboard
- Showing report status (active / paused) with delivery channel detail
- Letting users toggle a report on/off inline

**When NOT to use**
- General content display → use Card/Basics
- Metric data → use Card/KPI or Card/Reporting

**Anatomy**
\`[title + arrow] / [delivery chips] / [schedule] / [recipients] / [channels] / [owner + toggle]\`

**CSS:** \`.card-reporting\` + optional state modifier.

\`\`\`html
<!-- Default (active, Iris-owned) -->
<div class="card-reporting">…</div>

<!-- Hover state -->
<div class="card-reporting card-reporting--hovered">…</div>

<!-- Inactive (paused) -->
<div class="card-reporting card-reporting--inactive">…</div>
\`\`\`

> **Note:** This card is **not** the same as \`.card\`. It has no base border,
> uses \`border-radius: 12px\` (not 16px), and its own toggle + chip sub-components.
        `,
      },
    },
  },
  argTypes: {
    // ── State ────────────────────────────────────────────────
    active: {
      control: 'boolean',
      description: 'Report is enabled — toggle ON. When false, applies `card-reporting--inactive`: gray/50 bg, chips gray, toggle OFF.',
      table: { category: 'State', defaultValue: { summary: true } },
    },
    hovered: {
      control: 'boolean',
      description: 'Simulate hover: brand/500 border (#6875f5), shadow-md, title → brand purple (#42389d) + arrow-right icon.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
    // ── Content ──────────────────────────────────────────────
    owner: {
      control: 'select',
      options: ['iris', 'user'],
      description: '`iris` = Iris Finance logo + "Iris Finance" label. `user` = avatar circle + "Jese Leos" name.',
      table: { category: 'Content', defaultValue: { summary: 'iris' } },
    },
  },
  args: {
    active:  true,
    hovered: false,
    owner:   'iris',
  },
};

/* ── Icon constants ─────────────────────────────────────────── */

/** Heroicons envelope (20px viewBox, fill=currentColor) — used at 12px in chips */
const MAIL_ICON = `<svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
</svg>`;

/** SimpleIcons Slack (24px viewBox, fill=currentColor) — used at 12px in chips */
const SLACK_ICON = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.527 2.527 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.527 2.527 0 01-2.522 2.521h-2.522V8.834zM17.688 8.834a2.527 2.527 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 01-2.52-2.523 2.527 2.527 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z"/>
</svg>`;

/** Heroicons arrow-right (20px viewBox) — appears in title row on hover */
const ARROW_RIGHT = `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
</svg>`;

/* ── Sub-component helpers ──────────────────────────────────── */

const toggle = (on) =>
  `<span class="iris-toggle iris-toggle--${on ? 'on' : 'off'}" role="switch" aria-checked="${on}" aria-label="Report ${on ? 'enabled' : 'disabled'}">
    <span class="iris-toggle__thumb"></span>
  </span>`;

/** Channel chips: colored (active) or muted gray (inactive) */
const channelChips = (active) => active
  ? `<span class="rpt-chip rpt-chip--email">${MAIL_ICON}E-mail</span>
     <span class="rpt-chip rpt-chip--slack">${SLACK_ICON}Slack</span>`
  : `<span class="rpt-chip rpt-chip--muted">${MAIL_ICON}E-mail</span>
     <span class="rpt-chip rpt-chip--muted">${SLACK_ICON}Slack</span>`;

/** Recipient email address chips — same in both active and inactive states */
const recipientChips = () =>
  `<div style="display:flex;flex-wrap:wrap;gap:4px;">
    <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">namesur@gmail.com</span>
    <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">name@gmail.com</span>
    <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">+5</span>
  </div>`;

/**
 * Sales channel icon badges.
 * Shopify: `shopifyBadge24` — real Figma SVG (node 10046:75871), flat-color at 24px.
 * Amazon: `amazonBadge24(active)` — real Figma SVG (node 10046:75873); yellow bg active, gray inactive.
 */
const salesChannels = (active) => `
  <div style="display:flex;gap:8px;align-items:center;">
    ${shopifyBadge24}
    ${amazonBadge24(active)}
  </div>`;

/**
 * Owner section — bottom-right.
 * Owner=Iris: purple monogram + "Iris Finance".
 * Owner=User: initials avatar + "Jese Leos".
 */
const ownerSection = (owner) => {
  const label = owner === 'iris'
    ? `${irisMarkImg({ size: 'xs' })}
       <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;line-height:1.5;
                    white-space:nowrap;">Iris Finance</span>`
    : `<span aria-label="Jese Leos avatar"
             style="display:inline-flex;align-items:center;justify-content:center;
                    width:20px;height:20px;border-radius:100px;border:1px solid var(--color-border-default);
                    background:var(--color-bg-muted);font-size:8px;font-weight:600;color:var(--color-text-primary);
                    flex-shrink:0;">JL</span>
       <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;line-height:1.5;
                    white-space:nowrap;">Jese Leos</span>`;

  return `
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
      <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);line-height:1.5;">Owned by</span>
      <div style="display:flex;align-items:center;gap:4px;">${label}</div>
    </div>`;
};

/* ── Card builder ────────────────────────────────────────────── */

const reportingCard = ({ active = true, owner = 'iris', hovered = false }) => {
  const cls = [
    'card-reporting',
    hovered && 'card-reporting--hovered',
    !active && 'card-reporting--inactive',
  ].filter(Boolean).join(' ');

  const titleColor = hovered ? '#42389d' : '#111928';

  const scheduleText = active
    ? 'Every day at 7am (PST)'
    : 'Right now the report is paused. We\u2019ll send it to you at 7am tomorrow morning when you turn it on';

  return `
    <div class="${cls}">

      <!-- ① Heading row: title + toggle -->
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:8px;">

          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);line-height:1.5;color:${titleColor};
                        margin:0;white-space:nowrap;">Daily Report</p>
              ${hovered ? `<span style="color:${titleColor};display:inline-flex;">${ARROW_RIGHT}</span>` : ''}
            </div>
            ${toggle(active)}
          </div>

          <!-- Delivery channel chips -->
          <div style="display:flex;gap:4px;">${channelChips(active)}</div>

        </div>
      </div>

      <!-- ② Details: schedule text + recipient chips -->
      <div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:12px;">
        <p style="font-size:var(--text-sm);font-weight:var(--font-normal);line-height:1.5;
                  color:${active ? '#111928' : '#4b5563'};margin:0;">
          ${scheduleText}
        </p>
        ${recipientChips()}
      </div>

      <!-- ③ Footer: sales channel icons + owner attribution -->
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px;">
        ${salesChannels(active)}
        ${ownerSection(owner)}
      </div>

    </div>`;
};

/* ── Stories ─────────────────────────────────────────────────── */

/**
 * Primary interactive story. Use Controls to toggle all three props.
 *
 * QA checklist:
 * - `active:true, hovered:false` → white bg, no border, toggle ON (purple)
 * - `active:true, hovered:true`  → brand border (#6875f5), title purple, arrow icon
 * - `active:false`               → gray/50 bg, toggle OFF, chips gray, paused text
 * - `owner:user`                 → avatar circle + "Jese Leos" in owner section
 */

function cardReporting({ active = true, hovered = false, owner = 'iris' }) {
  const mod = hovered ? ' card-reporting--hovered' : (!active ? ' card-reporting--inactive' : '');
  const toggleClass = active ? 'iris-toggle--on' : 'iris-toggle--off';
  const toggleAriaLabel = active ? 'Report enabled' : 'Report disabled';

  return `<div class="card-reporting${mod}" style="min-width:362px;">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:var(--color-text-heading);margin:0;">${hovered ? '→ Daily Report' : 'Daily Report'}</p>
        <span class="iris-toggle ${toggleClass}" role="switch" aria-checked="${active}" aria-label="${toggleAriaLabel}">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--email" style="background:${active ? '#e60076' : 'var(--color-border-light)'};color:white;padding:4px 8px;border-radius:4px;font-size:12px;">✉ Email</span>
        <span class="rpt-chip rpt-chip--slack" style="background:${active ? '#9810fa' : 'var(--color-border-light)'};color:white;padding:4px 8px;border-radius:4px;font-size:12px;">⚡ Slack</span>
      </div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:12px;margin-top:12px;">
    <p style="font-size:var(--text-sm);color:var(--color-text-heading);margin:0;">Every day at 7am (PST)</p>
    <div style="display:flex;flex-wrap:wrap;gap:4px;">
      <span class="rpt-chip" style="background:var(--color-bg-tertiary);color:var(--color-text-secondary);padding:4px 8px;border-radius:4px;font-size:12px;">example@gmail.com</span>
      <span class="rpt-chip" style="background:var(--color-bg-tertiary);color:var(--color-text-secondary);padding:4px 8px;border-radius:4px;font-size:12px;">+2</span>
    </div>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;padding-top:12px;border-top:1px solid var(--color-border-light);">
    <div style="display:flex;gap:8px;">
      <div style="width:24px;height:24px;background:${active ? '#fef9c2' : 'var(--color-border-default)'};border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:12px;">🟨</div>
      <div style="width:24px;height:24px;background:var(--color-bg-tertiary);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:12px;">☑</div>
    </div>
    <div style="font-size:11px;color:var(--color-text-secondary);">By ${owner === 'iris' ? 'Iris Finance' : 'You'}</div>
  </div>
</div>`;
}

export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const h='<div style="padding:20px;border:1px solid var(--color-border-default);border-radius:12px;background:#fff;"><div>Report Card</div></div>';
    const r='<div style={{padding:"20px",border:"1px solid var(--color-border-default)",borderRadius:"12px"}}>{children}</div>';
    const c='export function ReportingCard({title,data}){return(<div style={{border:"1px solid var(--color-border-default)",padding:"20px"}}>{title}</div>);}';
    return `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;align-items:start;">
        <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${cardReporting(args)}
        </div>
        <div style="display:flex;flex-direction:column;gap:24px;">
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${h.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
            </div>
            <button data-copy="${h.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${r.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
            </div>
            <button data-copy="${r.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:20px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${c.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
            </div>
            <button data-copy="${c.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
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
        story: 'Use **active**, **hovered**, and **owner** Controls to preview all state combinations. Toggle `active` to see the paused state; toggle `hovered` to preview the hover treatment. You can also **click the toggle** inside the card to switch it on/off directly.',
      },
      source: {
        transform: (_src, storyCtx) => {
          const { active, hovered } = storyCtx.args;
          const mod = hovered ? ' card-reporting--hovered' : (!active ? ' card-reporting--inactive' : '');
          return `<div class="card-reporting${mod}">
  <!-- title row, delivery chips, schedule, recipients, channels, owner + toggle -->
  <!-- See individual state stories for full markup -->
</div>`;
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Clean up previous listener to prevent duplicates on args re-render
    if (canvasElement._reportingToggleHandler) {
      canvasElement.removeEventListener('click', canvasElement._reportingToggleHandler);
    }
    canvasElement._reportingToggleHandler = (e) => {
      const tog = e.target.closest('.iris-toggle');
      if (!tog) return;
      const isOn = tog.classList.contains('iris-toggle--on');
      const nowOn = !isOn;
      tog.classList.toggle('iris-toggle--on', nowOn);
      tog.classList.toggle('iris-toggle--off', !nowOn);
      tog.setAttribute('aria-checked', String(nowOn));
      tog.setAttribute('aria-label', `Report ${nowOn ? 'enabled' : 'disabled'}`);
      // Reflect inactive state on the card container
      const card = tog.closest('.card-reporting');
      if (card) card.classList.toggle('card-reporting--inactive', !nowOn);
    };
    canvasElement.addEventListener('click', canvasElement._reportingToggleHandler);
  },
};

/**
 * Default state — active=yes, owner=Iris.
 * QA: white bg, shadow-sm, no visible border, toggle ON, E-mail + Slack chips colored.
 */
export const Default = {
    name: 'Default — active, Iris owner',
  parameters: {
    docs: {
      description: {
        story: `
Default state: **active=yes, owner=Iris**. White bg, shadow-sm, no border, toggle ON.

| Property       | Value                    |
|---------------|--------------------------|
| Background     | var(--color-bg-white)                  |
| Border         | transparent (none)       |
| Shadow         | shadow-sm                |
| Toggle         | ON — #42389d (brand/800) |
| E-mail chip    | #e60076 (pink/600)       |
| Slack chip     | #9810fa (purple/600)     |
| Amazon icon bg | #fef9c2 (yellow/100)     |
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Card Reporting — Default (active, Iris owner) -->
<div class="card-reporting">
  <!-- ① Heading row: title + toggle -->
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:#111928;margin:0;">Daily Report</p>
        <!-- Toggle ON: class iris-toggle iris-toggle--on -->
        <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true" aria-label="Report enabled">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <!-- Channel chips (active: colored) -->
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--email"><!-- mail icon -->E-mail</span>
        <span class="rpt-chip rpt-chip--slack"><!-- slack icon -->Slack</span>
      </div>
    </div>
  </div>
  <!-- ② Schedule + recipients -->
  <div style="display:flex;flex-direction:column;gap:12px;">
    <p style="font-size:var(--text-sm);color:#111928;margin:0;">Every day at 7am (PST)</p>
    <div style="display:flex;flex-wrap:wrap;gap:4px;">
      <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">namesur@gmail.com</span>
      <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">name@gmail.com</span>
      <span class="rpt-chip" style="background:var(--color-bg-muted);color:#4a5565;">+5</span>
    </div>
  </div>
  <!-- ③ Footer: sales channels + owner -->
  <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px;">
    <!-- Shopify + Amazon icons -->
    <div style="display:flex;gap:8px;"><!-- shopify badge --><!-- amazon badge (active: yellow) --></div>
    <!-- Owner: Iris Finance -->
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
      <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);">Owned by</span>
      <div style="display:flex;align-items:center;gap:4px;">
        <!-- Iris Finance logo mark (xs) -->
        <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;">Iris Finance</span>
      </div>
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () => reportingCard({ active: true, owner: 'iris', hovered: false }),
};

/**
 * Hover state — brand/500 border, shadow-md, title purple + arrow.
 * QA: border 1px solid #6875f5, title color #42389d, arrow-right icon visible next to title.
 */
export const Hovered = {
    name: 'Hovered — active, Iris owner',
  parameters: {
    docs: {
      description: {
        story: `
Hover state: **border 1px solid #6875f5** (brand/500), **shadow-md**, title → **#42389d** with arrow-right.

| Property     | Default       | Hovered        |
|-------------|---------------|----------------|
| Border       | transparent   | #6875f5        |
| Shadow       | shadow-sm     | shadow-md      |
| Title color  | #111928       | #42389d        |
| Arrow icon   | hidden        | visible        |
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Card Reporting — Hovered: add modifier class card-reporting--hovered -->
<div class="card-reporting card-reporting--hovered">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <!-- Title: color #42389d on hover (brand/800) -->
          <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:#42389d;margin:0;">Daily Report</p>
          <!-- Arrow-right icon: only visible on hover -->
          <span style="color:#42389d;display:inline-flex;"><!-- arrow-right SVG --></span>
        </div>
        <span class="iris-toggle iris-toggle--on" role="switch" aria-checked="true" aria-label="Report enabled">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--email"><!-- mail -->E-mail</span>
        <span class="rpt-chip rpt-chip--slack"><!-- slack -->Slack</span>
      </div>
    </div>
  </div>
  <!-- ② + ③ same as Default state -->
</div>
<!-- CSS for hovered modifier:
.card-reporting--hovered {
  border: 1px solid #6875f5;
  box-shadow: var(--shadow-md);
} -->`,
      },
    },
  },
  render: () => reportingCard({ active: true, owner: 'iris', hovered: true }),
};

/**
 * Inactive (paused) — toggle OFF, gray/50 bg, muted chips.
 * QA: bg var(--color-bg-tertiary), toggle off (gray/300 bg), both chips gray/100 + gray text,
 *     Amazon bg → var(--color-border-default) (not yellow), schedule text changes to paused message.
 */
export const Inactive = {
    name: 'Inactive — paused',
  parameters: {
    docs: {
      description: {
        story: `
Inactive state (active=no): report is paused.

| Property          | Active                 | Inactive                    |
|------------------|------------------------|-----------------------------|
| Background        | var(--color-bg-white)                | **var(--color-bg-tertiary)** (gray/50)       |
| Toggle            | ON — brand/800 purple  | **OFF** — gray/300 (var(--color-border-default))|
| E-mail chip bg    | #e60076 (pink/600)     | **var(--color-bg-secondary)** (gray/100)      |
| Slack chip bg     | #9810fa (purple/600)   | **var(--color-bg-secondary)** (gray/100)      |
| Amazon icon bg    | #fef9c2 (yellow/100)   | **var(--color-border-default)** (gray/200)      |
| Schedule text     | Time + frequency       | Paused message              |
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Card Reporting — Inactive (paused): add modifier class card-reporting--inactive -->
<div class="card-reporting card-reporting--inactive">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <p style="font-size:var(--text-lg);font-weight:var(--font-semibold);color:#111928;margin:0;">Daily Report</p>
        <!-- Toggle OFF: iris-toggle--off; thumb color white, track gray/300 -->
        <span class="iris-toggle iris-toggle--off" role="switch" aria-checked="false" aria-label="Report disabled">
          <span class="iris-toggle__thumb"></span>
        </span>
      </div>
      <!-- Chips: muted (gray/100 bg + gray text when inactive) -->
      <div style="display:flex;gap:4px;">
        <span class="rpt-chip rpt-chip--muted"><!-- mail -->E-mail</span>
        <span class="rpt-chip rpt-chip--muted"><!-- slack -->Slack</span>
      </div>
    </div>
  </div>
  <!-- Schedule text changes to paused message; text color #4b5563 (gray/600) -->
  <p style="font-size:var(--text-sm);color:#4b5563;margin:0;">
    Right now the report is paused. We'll send it to you at 7am tomorrow morning when you turn it on
  </p>
  <!-- ③ Footer: Amazon bg changes to var(--color-border-default) (gray/200) when inactive -->
</div>
<!-- CSS for inactive modifier:
.card-reporting--inactive {
  background: var(--color-bg-tertiary);
} -->`,
      },
    },
  },
  render: () => reportingCard({ active: false, owner: 'iris', hovered: false }),
};

/**
 * User-owned variant — avatar + name instead of Iris Finance logo.
 * QA: "Owned by" section shows initials circle + "Jese Leos", NOT the Iris Finance logo.
 */
export const UserOwner = {
    name: 'User owner',
  parameters: {
    docs: {
      description: {
        story: `
Owner=User variant. The owner section at the bottom-right shows a **round avatar + user name**
instead of the Iris Finance logo mark.

| Property | Owner=Iris            | Owner=User             |
|---------|-----------------------|------------------------|
| Badge   | Iris monogram logo    | Round avatar circle    |
| Name    | "Iris Finance"        | "Jese Leos"            |
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Card Reporting — User owner: only the owner section changes -->
<!-- Replace the Iris Finance logo section with: -->
<div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
  <span style="font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);">Owned by</span>
  <div style="display:flex;align-items:center;gap:4px;">
    <!-- Round avatar: initials circle, 20×20px, border 1px var(--color-border-default) -->
    <span aria-label="Jese Leos avatar"
          style="display:inline-flex;align-items:center;justify-content:center;
                 width:20px;height:20px;border-radius:100px;border:1px solid var(--color-border-default);
                 background:var(--color-bg-muted);font-size:8px;font-weight:600;color:var(--color-text-primary);
                 flex-shrink:0;">JL</span>
    <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);color:#111928;white-space:nowrap;">Jese Leos</span>
  </div>
</div>`,
      },
    },
  },
  render: () => reportingCard({ active: true, owner: 'user', hovered: false }),
};

/**
 * All 4 Figma light-mode variants in a 2×2 grid.
 * QA: compare containers — default (no border) vs hover (brand border) vs
 *     inactive (gray bg) vs user owner (different owner section).
 */
export const AllVariants = {
    name: 'All variants — overview',
  parameters: {
    docs: {
      description: {
        story: `
All 4 Figma light-mode variants in a 2×2 grid.
Use this story for design review — verify each container's bg, border, toggle, and owner section.
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Card Reporting — All 4 variants in a 2×2 grid -->
<div style="display:grid;grid-template-columns:repeat(2,362px);gap:24px;">
  <div class="card-reporting"><!-- Default: active, Iris owner --></div>
  <div class="card-reporting card-reporting--hovered"><!-- Hovered: brand border #6875f5 --></div>
  <div class="card-reporting card-reporting--inactive"><!-- Inactive: gray/50 bg, toggle off --></div>
  <div class="card-reporting"><!-- User owner: avatar circle + "Jese Leos" --></div>
</div>
<!-- See individual state stories for full markup of each variant -->`,
      },
    },
  },
  render: () => `
    <div style="display:grid;grid-template-columns:repeat(2,362px);gap:24px;">

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Default — active · Iris</p>
        ${reportingCard({ active: true, owner: 'iris', hovered: false })}
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Hovered — active · Iris</p>
        ${reportingCard({ active: true, owner: 'iris', hovered: true })}
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">Inactive — paused · Iris</p>
        ${reportingCard({ active: false, owner: 'iris', hovered: false })}
      </div>

      <div>
        <p style="font:10px/1 600 sans-serif;text-transform:uppercase;letter-spacing:.1em;
                  color:#9CA3AF;margin:0 0 10px;">User owner — active · User</p>
        ${reportingCard({ active: true, owner: 'user', hovered: false })}
      </div>

    </div>`,
};
