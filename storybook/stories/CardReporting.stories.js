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
 * | Default  | #ffffff  | transparent    | shadow-sm |
 * | Hovered  | #ffffff  | 1px #6875f5   | shadow-md |
 * | Inactive | #f9fafb  | transparent    | shadow-sm |
 *
 * ## QA notes
 * - **Hovered**: title color → #42389d (brand/800) + arrow-right icon appears next to title
 * - **Inactive**: toggle off (gray/300 bg), E-mail+Slack chips → gray/100,
 *   Amazon icon bg → gray/200 (#e5e7eb not yellow), schedule text = paused message
 * - **Owner=Iris**: Iris Smart mark (xs, 24px, real Figma asset) + "Iris Finance" label
 * - **Owner=User**: round avatar circle + user name ("Jese Leos")
 * - Channel chip icons (mail, slack) use fill="currentColor" → color follows chip bg
 *
 * ## Approximations
 * - Shopify channel icon: green 'S' badge — 50+ vector paths in Figma, no single composite raster.
 *   See `shopifyBadge24` in brand-assets.js.
 * - Amazon channel icon: real Figma asset (Group13 composite) via `amazonBadge24()` from brand-assets.js.
 * - Iris Finance owner mark: real Figma asset (xs Smart mark) via `irisMarkImg({ size:'xs' })` from brand-assets.js.
 * - User avatar: initials circle (photo asset not embedded).
 * - All Figma asset URLs expire after 7 days — host locally before production.
 */

import { irisMarkImg, shopifyBadge24, amazonBadge24 } from './brand-assets.js';

export default {
  title: 'Iris Library/Card/Reporting',
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
Scheduled-report card for the Iris Finance reporting dashboard.

Shows report configuration: delivery channels (E-mail / Slack), schedule, recipients,
connected sales channels (Shopify, Amazon), and owner attribution.

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
    active: {
      control: 'boolean',
      description: 'Report is enabled — toggle ON. When false, shows paused state.',
      table: { category: 'State' },
    },
    hovered: {
      control: 'boolean',
      description: 'Simulate hover (brand/500 border, shadow-md, title → brand purple).',
      table: { category: 'State' },
    },
    owner: {
      control: 'select',
      options: ['iris', 'user'],
      description: '`iris` = Iris Finance logo + name; `user` = avatar circle + name.',
      table: { category: 'Content' },
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
  `<span class="rpt-toggle rpt-toggle--${on ? 'on' : 'off'}" aria-label="Report ${on ? 'enabled' : 'disabled'}">
    <span class="rpt-toggle__pill"></span>
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
    <span class="rpt-chip" style="background:#f3f4f6;color:#4a5565;">namesur@gmail.com</span>
    <span class="rpt-chip" style="background:#f3f4f6;color:#4a5565;">name@gmail.com</span>
    <span class="rpt-chip" style="background:#f3f4f6;color:#4a5565;">+5</span>
  </div>`;

/**
 * Sales channel icon badges.
 * Shopify: `shopifyBadge24` — APPROXIMATED green 'S' badge (50+ Figma vectors, no composite).
 * Amazon: `amazonBadge24(active)` — real Figma asset (Group13); yellow bg when active, gray when not.
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
       <span style="font-size:14px;font-weight:600;color:#111928;line-height:1.5;
                    white-space:nowrap;">Iris Finance</span>`
    : `<span aria-label="Jese Leos avatar"
             style="display:inline-flex;align-items:center;justify-content:center;
                    width:20px;height:20px;border-radius:100px;border:1px solid #e5e7eb;
                    background:#f3f4f6;font-size:8px;font-weight:600;color:#374151;
                    flex-shrink:0;">JL</span>
       <span style="font-size:14px;font-weight:600;color:#111928;line-height:1.5;
                    white-space:nowrap;">Jese Leos</span>`;

  return `
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
      <span style="font-size:12px;font-weight:500;color:#6b7280;line-height:1.5;">Owned by</span>
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
              <p style="font-size:18px;font-weight:600;line-height:1.5;color:${titleColor};
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
        <p style="font-size:14px;font-weight:400;line-height:1.5;
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
export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => reportingCard(args),
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
| Background     | #ffffff                  |
| Border         | transparent (none)       |
| Shadow         | shadow-sm                |
| Toggle         | ON — #42389d (brand/800) |
| E-mail chip    | #e60076 (pink/600)       |
| Slack chip     | #9810fa (purple/600)     |
| Amazon icon bg | #fef9c2 (yellow/100)     |
        `,
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
    },
  },
  render: () => reportingCard({ active: true, owner: 'iris', hovered: true }),
};

/**
 * Inactive (paused) — toggle OFF, gray/50 bg, muted chips.
 * QA: bg #f9fafb, toggle off (gray/300 bg), both chips gray/100 + gray text,
 *     Amazon bg → #e5e7eb (not yellow), schedule text changes to paused message.
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
| Background        | #ffffff                | **#f9fafb** (gray/50)       |
| Toggle            | ON — brand/800 purple  | **OFF** — gray/300 (#d1d5db)|
| E-mail chip bg    | #e60076 (pink/600)     | **#f3f4f6** (gray/100)      |
| Slack chip bg     | #9810fa (purple/600)   | **#f3f4f6** (gray/100)      |
| Amazon icon bg    | #fef9c2 (yellow/100)   | **#e5e7eb** (gray/200)      |
| Schedule text     | Time + frequency       | Paused message              |
        `,
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
