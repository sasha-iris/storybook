// Figma: Iris Library / Alerts — node 84:16834
// Notification system guidelines: node 9929:153267
// File: ZKtEULdYKaXe5uQl1J6ijI
// 3 types (Medium, Dark, Light) × 5 colors (Success, Danger, Info, Warning, Default).
// Light mode only.

// ─── Icons (Heroicons v1 solid, 20×20 viewBox) ───────────────────────────────

const CHECK_CIRCLE_PATH = 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z';
const X_PATH            = 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';

function iconSvg(path, size, color) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="${color}" aria-hidden="true"><path fill-rule="evenodd" d="${path}" clip-rule="evenodd"/></svg>`;
}

// ─── Color tokens (used only for dark/light type overrides) ──────────────────

const COLOR_MAP = {
  success: { darkBg: '#046c4e', accent: '#046c4e' },
  danger:  { darkBg: '#c81e1e', accent: '#c81e1e' },
  info:    { darkBg: '#1447e6', accent: '#1447e6' },
  warning: { darkBg: '#d03801', accent: '#d03801' },
  default: { darkBg: '#1f2a37', accent: '#1f2a37' },
};

// CSS color class map: story color name → .alert-{cssColor}
const CSS_COLOR = {
  success: 'success',
  danger:  'danger',
  info:    'info',
  warning: 'warning',
  default: 'dark',
};

// ─── Alert renderer ───────────────────────────────────────────────────────────

function renderAlert({ color = 'success', type = 'medium', heading, body, cta }) {
  const tok = COLOR_MAP[color];
  const cssColor = CSS_COLOR[color] || 'dark';

  // Build class + inline style per type
  let alertClass, alertStyle;
  if (type === 'dark') {
    // No CSS class covers the dark (solid-bg) variant — full inline override
    alertClass = 'alert';
    alertStyle = ` style="background:${tok.darkBg};color:#ffffff;border-color:${tok.darkBg};max-width:640px;"`;
  } else if (type === 'light') {
    // CSS color class sets text/border; override background to white
    alertClass = `alert alert-${cssColor}`;
    alertStyle = ` style="background:#ffffff;max-width:640px;"`;
  } else {
    // medium — CSS class handles bg, color, border entirely
    alertClass = `alert alert-${cssColor}`;
    alertStyle = ` style="max-width:640px;"`;
  }

  // CTA button: dark type needs inverted colors
  const btnStyle = type === 'dark'
    ? ` style="background:#ffffff;color:${tok.accent};border-color:#ffffff;"`
    : '';
  const ctaHtml = cta ? `
  <div style="margin-top:8px;">
    <button type="button" class="btn btn-xs"${btnStyle}>View more</button>
  </div>` : '';

  return `
<div role="alert" class="${alertClass}"${alertStyle}>
  <svg class="alert-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="${CHECK_CIRCLE_PATH}" clip-rule="evenodd"/></svg>
  <div class="alert-body">
    <div class="alert-title">${heading}</div>
    <p style="margin:0;">${body}</p>
    ${ctaHtml}
  </div>
  <button type="button" class="alert-dismiss" aria-label="Dismiss">×</button>
</div>`;
}

// ─────────────────────────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Alerts',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Alert** surfaces a brief, potentially time-sensitive message without interrupting the user's workflow.

**Urgency levels** (from Notification system guidelines, node 9929:153267)
- **High** — requires immediate action to restore full product access (e.g. payment failed, session expired)
- **Medium** — notifies about features or opportunities that benefit the user
- **Low** — status-change messages ("Email verified", "Link copied") and general product info

**When to use**
- Surfacing the outcome of a user action (success, error, warning)
- Showing a persistent state the user should be aware of but can dismiss
- Inline validation feedback on a section (not a single field)

**When NOT to use**
- Requiring an explicit decision → use a **Modal Dialog**
- Communicating a site-wide critical outage → use a **Banner**
- Brief ephemeral feedback after an action → use a **Toast**

**Anatomy**
\`[check-circle icon] [heading] [dismiss ×] / [body text] / [optional CTA button]\`

**Types**
- \`medium\` — tinted background, accent-colored text; default for most use cases
- \`dark\` — solid dark background, white text; high-emphasis variant
- \`light\` — white background with subtle shadow, accent-colored text; use on colored page backgrounds

**Accessibility** — the alert container uses \`role="alert"\` so screen readers announce it immediately. The dismiss button has \`aria-label="Dismiss"\`. Avoid triggering \`role="alert"\` on page load — reserve it for dynamic updates.
        `,
      },
    },
  },
  argTypes: {
    // ── Content ─────────────────────────────────────────────────────────────
    heading: {
      control: 'text',
      description: 'Short title at 600/14px. Keep to one line.',
      table: { category: 'Content', defaultValue: { summary: 'Account created successfully' } },
    },
    body: {
      control: 'text',
      description: 'Supporting description at 400/14px. 1–3 sentences maximum.',
      table: { category: 'Content', defaultValue: { summary: 'Your account is ready. You can now invite team members and configure your workspace.' } },
    },
    // ── Appearance ──────────────────────────────────────────────────────────
    color: {
      control: 'select',
      options: ['success', 'danger', 'info', 'warning', 'default'],
      description: `Semantic color theme.\n\n- \`success\` — #046c4e\n- \`danger\` — #c81e1e\n- \`info\` — #1447e6\n- \`warning\` — #d03801\n- \`default\` — #1f2a37`,
      table: { category: 'Appearance', defaultValue: { summary: 'success' } },
    },
    type: {
      control: 'select',
      options: ['medium', 'dark', 'light'],
      description: `Visual weight.\n\n- \`medium\` — tinted background + accent text (default)\n- \`dark\` — solid accent background + white text (high-emphasis)\n- \`light\` — white background + accent text + drop shadow (use on colored surfaces)`,
      table: { category: 'Appearance', defaultValue: { summary: 'medium' } },
    },
    // ── State ────────────────────────────────────────────────────────────────
    cta: {
      control: 'boolean',
      description: 'Show an optional "View more" CTA button below the body text.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
  },
  args: {
    color:   'success',
    type:    'medium',
    heading: 'Account created successfully',
    body:    'Your account is ready. You can now invite team members and configure your workspace.',
    cta:     false,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. Interactive

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => renderAlert(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch color, type, and content, and to toggle the CTA button.',
      },
      source: {
        transform: (_src, ctx) => {
          const { color, type, heading, body, cta } = ctx.args;
          return `<!-- Alert: ${color} / ${type}${cta ? ' / with CTA' : ''} -->
<div role="alert" class="alert alert--${color} alert--${type}">
  <div class="alert__content">
    <div class="alert__header">
      <svg class="alert__icon" aria-hidden="true"><!-- check-circle --></svg>
      <span class="alert__heading">${heading}</span>
      <button class="alert__dismiss" aria-label="Dismiss"><!-- × --></button>
    </div>
    <p class="alert__body">${body}</p>${cta ? '\n    <button class="alert__cta">View more</button>' : ''}
  </div>
</div>`;
        },
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. All Colors

export const AllColors = {
  name: 'All colors',
  args: { type: 'medium', cta: false },
  parameters: {
    controls: { include: ['type', 'cta'] },
    docs: {
      description: {
        story: `All five semantic colors. Switch **type** to preview medium / dark / light across all colors.

**✅ Do** — choose the color that matches the message semantics (success for confirmations, danger for errors).
**❌ Don't** — use \`default\` for errors or warnings — it provides no semantic signal to colour-blind users.
**❌ Don't** — use high-urgency colors (danger) for low-urgency messages — it creates alert fatigue.`,
      },
      source: {
        code: `<!-- Success -->
<div role="alert" class="alert alert--success alert--medium"> … </div>

<!-- Danger -->
<div role="alert" class="alert alert--danger alert--medium"> … </div>

<!-- Info -->
<div role="alert" class="alert alert--info alert--medium"> … </div>

<!-- Warning -->
<div role="alert" class="alert alert--warning alert--medium"> … </div>

<!-- Default -->
<div role="alert" class="alert alert--default alert--medium"> … </div>`,
        language: 'html',
      },
    },
  },
  render: ({ type, cta }) => {
    const colors = ['success', 'danger', 'info', 'warning', 'default'];
    const labels = {
      success: 'Success',
      danger:  'Danger',
      info:    'Info',
      warning: 'Warning',
      default: 'Default',
    };
    const bodies = {
      success: 'Your changes have been saved and are now live.',
      danger:  'We could not process your payment. Please check your card details.',
      info:    'A new version of the app is available. Refresh to update.',
      warning: 'Your free trial ends in 3 days. Upgrade to keep access.',
      default: 'Scheduled maintenance is planned for Sunday 02:00–04:00 UTC.',
    };
    return `
<div style="display:flex;flex-direction:column;gap:16px;padding:24px;background:var(--color-bg-default);">
  ${colors.map(c => `
  <div>
    <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${labels[c]}</div>
    ${renderAlert({ color: c, type, heading: labels[c], body: bodies[c], cta })}
  </div>`).join('')}
</div>`;
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. All Types

export const AllTypes = {
  name: 'All types',
  args: { color: 'info', cta: false },
  parameters: {
    controls: { include: ['color', 'cta'] },
    docs: {
      description: {
        story: `Three visual weight variants. Switch **color** to compare type contrast across all themes.

**✅ Do** — use \`medium\` (default) for most in-page alerts.
**✅ Do** — use \`dark\` when the alert must stand out prominently (e.g. a critical action required banner within a form).
**✅ Do** — use \`light\` when the alert sits on a tinted or colored page background.
**❌ Don't** — mix types within the same page section — pick one type and use it consistently.`,
      },
      source: {
        code: `<!-- Medium — tinted background -->
<div role="alert" class="alert alert--info alert--medium"> … </div>

<!-- Dark — solid accent background -->
<div role="alert" class="alert alert--info alert--dark"> … </div>

<!-- Light — white background with shadow -->
<div role="alert" class="alert alert--info alert--light"> … </div>`,
        language: 'html',
      },
    },
  },
  render: ({ color, cta }) => {
    const types = ['medium', 'dark', 'light'];
    const labels = { medium: 'Medium', dark: 'Dark', light: 'Light' };
    const heading = 'Two-factor authentication is now active';
    const body = 'Your account is protected. Sign-in attempts will require a verification code.';
    return `
<div style="display:flex;flex-direction:column;gap:16px;padding:24px;background:var(--color-bg-muted);">
  ${types.map(t => `
  <div>
    <div style="font:var(--font-medium) 11px/1 inherit;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">${labels[t]}</div>
    ${renderAlert({ color, type: t, heading, body, cta })}
  </div>`).join('')}
</div>`;
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. With CTA

export const WithCTA = {
  name: 'With CTA',
  args: { color: 'warning', type: 'medium', cta: true },
  parameters: {
    controls: { include: ['color', 'type'] },
    docs: {
      description: {
        story: `Alert with an optional **View more** CTA button. Use when users need a direct action path from the alert.

**✅ Do** — pair high-urgency alerts (danger, warning) with a CTA that resolves the issue directly.
**❌ Don't** — add a CTA to low-urgency info alerts — it increases cognitive load without clear benefit.
**❌ Don't** — use generic labels like "Click here" — the button label should describe the destination or action.`,
      },
      source: {
        code: `<div role="alert" class="alert alert--warning alert--medium">
  <div class="alert__content">
    <div class="alert__header">
      <svg class="alert__icon" aria-hidden="true"><!-- check-circle --></svg>
      <span class="alert__heading">Your free trial ends in 3 days</span>
      <button class="alert__dismiss" aria-label="Dismiss"><!-- × --></button>
    </div>
    <p class="alert__body">Upgrade to a paid plan to keep all features and avoid data loss.</p>
    <button class="alert__cta">View more</button>
  </div>
</div>`,
        language: 'html',
      },
    },
  },
  render: ({ color, type }) => {
    return renderAlert({
      color,
      type,
      heading: 'Your free trial ends in 3 days',
      body:    'Upgrade to a paid plan to keep all features and avoid data loss when the trial expires.',
      cta:     true,
    });
  },
};
