// Figma: Iris Library / Toast — node 3338:16753
// File: ZKtEULdYKaXe5uQl1J6ijI
// Light mode only (Dark mode variants not implemented per project rules).
// 6 types: success, danger, default, simple, push, interactive.

// ─── Icons (Heroicons v1 solid, 20×20) ───────────────────────────────────────

const CHECK_PATH       = 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z';
const CHECK_CIRCLE_PATH = 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z';
const X_CIRCLE_PATH    = 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z';
const X_PATH           = 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';
const PAPER_PLANE_PATH = 'M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z';
const REFRESH_PATH     = 'M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z';

// Bell outline — 24×24 viewBox (Heroicons v1 outline), displayed at 20px
const BELL_SVG = (color) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`;

function iconSvg(path, size, color) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="${color}" aria-hidden="true"><path fill-rule="evenodd" d="${path}" clip-rule="evenodd"/></svg>`;
}
function iconBox(bg, inner) {
  return `<div style="width:32px;height:32px;background:${bg};border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">${inner}</div>`;
}
function dismissBtn(color, size = 18) {
  return `<button type="button" aria-label="Dismiss" style="background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;flex-shrink:0;">${iconSvg(X_PATH, size, color)}</button>`;
}
function ctaBtn(bg, label) {
  return `<button type="button" style="background:${bg};color:#fff;border:none;border-radius:12px;padding:8px 12px;font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;white-space:nowrap;">${label}</button>`;
}

// ─── Type renderers ───────────────────────────────────────────────────────────

function toastSuccess({ cta, title, description, ctaLabel }) {
  const border = '1px solid #84e1bc';
  if (!cta) {
    return `
<div style="display:flex;align-items:center;gap:12px;padding:16px;background:#fff;border:${border};border-radius:6px;max-width:640px;font-family:inherit;">
  ${iconBox('#ecfdf5', iconSvg(CHECK_PATH, 20, '#007a55'))}
  <p style="flex:1;margin:0;color:#0e9f6e;font-size:14px;font-weight:400;line-height:1.5;">${title}</p>
  ${dismissBtn('#0e9f6e')}
</div>`;
  }
  return `
<div style="padding:16px;background:#fff;border:${border};border-radius:6px;max-width:640px;font-family:inherit;">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
    ${iconSvg(CHECK_CIRCLE_PATH, 18, '#0e9f6e')}
    <span style="flex:1;font-size:14px;font-weight:600;color:#0e9f6e;">Success</span>
    ${dismissBtn('#0e9f6e', 20)}
  </div>
  <p style="margin:0 0 12px;color:#0e9f6e;font-size:14px;font-weight:400;line-height:1.5;">${description}</p>
  ${ctaBtn('#007a55', ctaLabel)}
</div>`;
}

function toastDanger({ cta, title, description, ctaLabel }) {
  const border = '1px solid #f8b4b4';
  if (!cta) {
    return `
<div style="display:flex;align-items:center;gap:12px;padding:16px;background:#fff;border:${border};border-radius:6px;max-width:640px;font-family:inherit;">
  ${iconBox('#fde8e8', BELL_SVG('#f05252'))}
  <p style="flex:1;margin:0;color:#f05252;font-size:14px;font-weight:400;line-height:1.5;">${title}</p>
  ${dismissBtn('#f05252')}
</div>`;
  }
  return `
<div style="padding:16px;background:#fff;border:${border};border-radius:6px;max-width:640px;font-family:inherit;">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
    ${iconSvg(X_CIRCLE_PATH, 18, '#e02424')}
    <span style="flex:1;font-size:14px;font-weight:600;color:#e02424;">Attention</span>
    ${dismissBtn('#e02424', 20)}
  </div>
  <p style="margin:0 0 12px;color:#e02424;font-size:14px;font-weight:400;line-height:1.5;">${description}</p>
  ${ctaBtn('#c10007', ctaLabel)}
</div>`;
}

function toastDefault({ title }) {
  return `
<div style="display:flex;align-items:center;gap:12px;padding:16px;background:#fff;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.06);max-width:320px;font-family:inherit;">
  ${iconBox('#dbeafe', iconSvg(CHECK_PATH, 20, '#155dfc'))}
  <p style="flex:1;margin:0;color:#6b7280;font-size:14px;font-weight:400;line-height:1.5;">${title}</p>
  ${dismissBtn('#9ca3af')}
</div>`;
}

function toastSimple({ title }) {
  return `
<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#fff;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.06);max-width:320px;font-family:inherit;">
  ${iconSvg(PAPER_PLANE_PATH, 24, '#155dfc')}
  <div style="flex:1;border-left:1px solid #e5e7eb;padding-left:12px;">
    <p style="margin:0;color:#6b7280;font-size:14px;font-weight:400;line-height:1.5;">${title}</p>
  </div>
</div>`;
}

function toastPush({ title, description }) {
  const avatar = `<div style="width:48px;height:48px;border-radius:50%;background:#e5e7eb;border:1px solid #e5e7eb;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;color:#6b7280;">BG</div>`;
  return `
<div style="padding:16px;background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.06);max-width:320px;font-family:inherit;">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
    <span style="font-size:14px;font-weight:600;color:#111928;">New notification</span>
    ${dismissBtn('#9ca3af')}
  </div>
  <div style="display:flex;gap:12px;align-items:flex-start;">
    ${avatar}
    <div style="flex:1;min-width:0;">
      <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#111928;">${title}</p>
      <p style="margin:0 0 4px;font-size:14px;font-weight:400;color:#6b7280;line-height:1.4;">${description}</p>
      <p style="margin:0;font-size:12px;font-weight:500;color:#155dfc;">a few seconds ago</p>
    </div>
  </div>
</div>`;
}

function toastInteractive({ title, description, ctaLabel }) {
  const primaryBtn = `<button type="button" style="flex:1;background:#42389d;color:#fff;border:none;border-radius:12px;padding:8px 0;font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;">${ctaLabel}</button>`;
  const secondaryBtn = `<button type="button" style="flex:1;background:#fff;color:#374151;border:1px solid #e5e7eb;border-radius:12px;padding:8px 0;font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;">Later</button>`;
  return `
<div style="padding:16px;background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.06);max-width:320px;font-family:inherit;">
  <div style="display:flex;gap:12px;align-items:flex-start;">
    ${iconBox('#dbeafe', iconSvg(REFRESH_PATH, 20, '#155dfc'))}
    <div style="flex:1;min-width:0;">
      <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#111928;">${title}</p>
      <p style="margin:0 0 12px;font-size:14px;font-weight:400;color:#6b7280;line-height:1.4;">${description}</p>
      <div style="display:flex;gap:8px;">${primaryBtn}${secondaryBtn}</div>
    </div>
    ${dismissBtn('#9ca3af')}
  </div>
</div>`;
}

function toast(args) {
  const { type = 'success', cta = false, title, description, ctaLabel } = args;
  switch (type) {
    case 'danger':      return toastDanger({ cta, title, description, ctaLabel });
    case 'default':     return toastDefault({ title });
    case 'simple':      return toastSimple({ title });
    case 'push':        return toastPush({ title, description });
    case 'interactive': return toastInteractive({ title, description, ctaLabel });
    default:            return toastSuccess({ cta, title, description, ctaLabel });
  }
}

// ─── Default export ───────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Toast',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Toast** is a brief, auto-dismissing notification that appears in response to a user action or system event.

**When to use**
- Confirming an action just completed (file saved, form submitted)
- Reporting a non-blocking error or warning (upload failed, quota exceeded)
- Delivering a push notification or incoming message alert
- Prompting the user to undo a destructive action within a short time window

**When NOT to use**
- Critical errors that block the workflow → use a modal or inline error state
- Persistent information the user must act on → use an Alert or Banner
- Long messages (> 2 sentences) → toasts are too small; use a notification drawer

**Anatomy**
\`[icon box?] [title / message] [description?] [CTA button?] [dismiss ×]\`

The \`cta\` flag switches from the compact single-line layout to the expanded layout with a heading row, body text, and action button.

**Colors / types**
| Type | Use for |
|------|---------|
| \`success\` | Positive confirmation (saved, uploaded, sent) |
| \`danger\` | Destructive action or error (deleted, failed, denied) |
| \`default\` | Neutral status update with blue icon |
| \`simple\` | Minimal send-confirmation (paper-airplane style) |
| \`push\` | Incoming message / social notification |
| \`interactive\` | Prompt requiring an immediate decision (update, confirm) |
        `,
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────────────────────
    title: {
      control: 'text',
      description: 'Primary message. For `push` and `interactive` types this is the sender name or notification headline.',
      table: { category: 'Content', defaultValue: { summary: 'File saved successfully.' } },
    },
    description: {
      control: 'text',
      description: 'Secondary body text shown when `cta` is true, or as the message body in `push`/`interactive` types.',
      table: { category: 'Content', defaultValue: { summary: '' } },
    },
    ctaLabel: {
      control: 'text',
      description: 'Action button label. Shown only when `cta` is true (or always for `interactive` type).',
      table: { category: 'Content', defaultValue: { summary: 'Take action' } },
    },
    // ── Appearance ───────────────────────────────────────────────────────────
    type: {
      control: 'select',
      options: ['success', 'danger', 'default', 'simple', 'push', 'interactive'],
      description: 'Visual theme and layout. Determines color, icon, border, and structure.',
      table: { category: 'Appearance', defaultValue: { summary: 'success' } },
    },
    // ── State ────────────────────────────────────────────────────────────────
    cta: {
      control: 'boolean',
      description: 'Expands `success` and `danger` toasts to show a title row, body text, and action button. Has no effect on `default`, `simple`, `push`, or `interactive` types.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
  },
  args: {
    type: 'success',
    cta: false,
    title: 'File saved successfully.',
    description: 'Your changes have been saved and are now visible to all collaborators.',
    ctaLabel: 'View file',
  },
};

// ─── 1. Interactive ───────────────────────────────────────────────────────────

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => `<div style="padding:40px;display:inline-flex;">${toast(args)}</div>`,
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch type, toggle `cta`, and edit message content. `cta` only affects `success` and `danger` types.',
      },
      source: {
        transform: (_src, ctx) => {
          const { type, cta, title, description, ctaLabel } = ctx.args;
          const ctaAttr = cta ? ` data-cta="true"` : '';
          const descLine = cta || ['push','interactive'].includes(type)
            ? `\n  <p class="toast__body">${description}</p>` : '';
          const btnLine = (cta || type === 'interactive')
            ? `\n  <button class="toast__cta">${ctaLabel}</button>` : '';
          return `<div class="toast toast--${type}"${ctaAttr} role="status" aria-live="polite">
  <p class="toast__title">${title}</p>${descLine}${btnLine}
  <button class="toast__dismiss" aria-label="Dismiss notification">×</button>
</div>`;
        },
      },
    },
  },
};

// ─── 2. All Types ─────────────────────────────────────────────────────────────

export const AllTypes = {
  name: 'All types',
  args: {},
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: `All six toast types in their compact (no-CTA) form. No scoped controls — each type has its own fixed layout.

**✅ Do** — match the toast type to the semantic meaning of the event (success for confirmations, danger for errors).
**❌ Don't** — use \`success\` for neutral status messages — use \`default\` instead.
**❌ Don't** — stack more than 3 toasts simultaneously — the stack becomes unreadable.`,
      },
      source: {
        code: `<!-- Success -->
<div class="toast toast--success" role="status" aria-live="polite">
  <div class="toast__icon-box"><!-- check icon --></div>
  <p class="toast__title">File saved successfully.</p>
  <button class="toast__dismiss" aria-label="Dismiss">×</button>
</div>

<!-- Danger -->
<div class="toast toast--danger" role="alert" aria-live="assertive">
  <div class="toast__icon-box"><!-- bell icon --></div>
  <p class="toast__title">The file was permanently deleted.</p>
  <button class="toast__dismiss" aria-label="Dismiss">×</button>
</div>

<!-- Default -->
<div class="toast toast--default" role="status" aria-live="polite"> … </div>

<!-- Simple -->
<div class="toast toast--simple" role="status" aria-live="polite"> … </div>

<!-- Push notification -->
<div class="toast toast--push" role="status" aria-live="polite"> … </div>

<!-- Interactive -->
<div class="toast toast--interactive" role="status" aria-live="polite"> … </div>`,
        language: 'html',
      },
    },
  },
  render: () => {
    const items = [
      { label: 'Success', html: toastSuccess({ cta: false, title: 'Report exported to CSV.' }) },
      { label: 'Danger',  html: toastDanger({  cta: false, title: 'The file flowbite-figma-pro.fig was permanently deleted.' }) },
      { label: 'Default', html: toastDefault({ title: 'Set yourself free.' }) },
      { label: 'Simple',  html: toastSimple({  title: 'Message sent successfully.' }) },
      { label: 'Push',    html: toastPush({ title: 'Bonnie Green', description: 'Hi Neil, thanks for sharing your thoughts.' }) },
      { label: 'Interactive', html: toastInteractive({ title: 'Software update available', description: 'Version 3.1 is ready to install. Restart to apply.', ctaLabel: 'Update now' }) },
    ];
    return `
<div style="display:flex;flex-direction:column;gap:16px;padding:32px;background:#f9fafb;">
  ${items.map(({ label, html }) => `
    <div>
      <div style="font:500 11px/1 inherit;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${label}</div>
      ${html}
    </div>`).join('')}
</div>`;
  },
};

// ─── 3. With CTA ─────────────────────────────────────────────────────────────

export const WithCTA = {
  name: 'With CTA button',
  args: { type: 'success' },
  parameters: {
    controls: { include: ['type'] },
    docs: {
      description: {
        story: `Expanded toast with title row, description, and an action button. Switch **type** to compare \`success\` vs \`danger\` CTA variants.

**✅ Do** — use CTA toasts for reversible destructive actions ("Undo delete") or high-value follow-up actions.
**✅ Do** — keep the CTA label short (≤ 2 words) — it must fit inside the toast without wrapping.
**❌ Don't** — use the CTA variant for routine confirmations; the compact form is less intrusive.`,
      },
      source: {
        code: `<!-- Success with CTA -->
<div class="toast toast--success toast--expanded" role="status" aria-live="polite">
  <div class="toast__title-row">
    <!-- check-circle icon -->
    <strong class="toast__heading">Success</strong>
    <button class="toast__dismiss" aria-label="Dismiss">×</button>
  </div>
  <p class="toast__body">Your changes have been saved and are now visible to all collaborators.</p>
  <button class="toast__cta">View file</button>
</div>

<!-- Danger with CTA -->
<div class="toast toast--danger toast--expanded" role="alert" aria-live="assertive">
  <div class="toast__title-row">
    <!-- x-circle icon -->
    <strong class="toast__heading">Attention</strong>
    <button class="toast__dismiss" aria-label="Dismiss">×</button>
  </div>
  <p class="toast__body">Oh snap! Something went wrong. Your changes could not be saved.</p>
  <button class="toast__cta">Undo action</button>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ type }) => {
    const successCTA = toastSuccess({
      cta: true,
      title: 'Success',
      description: 'Your changes have been saved and are now visible to all collaborators. Be sure to review the live version.',
      ctaLabel: 'View file',
    });
    const dangerCTA = toastDanger({
      cta: true,
      title: 'Attention',
      description: 'Oh snap! Something went wrong and your changes could not be saved. Please try again or contact support.',
      ctaLabel: 'Undo action',
    });
    const which = type === 'danger' ? dangerCTA : successCTA;
    return `<div style="padding:40px;display:inline-flex;">${which}</div>`;
  },
};
