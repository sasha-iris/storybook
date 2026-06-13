/**
 * Iris Library — Stepper
 *
 * Source: Figma › Iris Library
 *   • Stepper           — node 110:22561 (Type=Stepper, Dark mode=False)
 *   • Stepper indicator — node 110:20640 (24×24 halo #bedbff + 12×12 dot #155dfc)
 *
 * Built on the real classes (synced in styles.css + iris-components.css):
 *   `.stepper--dots` · `.stepper-item` · `.stepper-dot` · `.stepper-line` · `.stepper-label`
 *
 * Figma light mode defines ONE indicator state (active dot with halo) and a
 * 1px #e5e7eb connector line. No completed/inactive variants exist in Figma —
 * none are invented here.
 */

const STEPS = ['Step 1', 'Step 2', 'Step 3'];

function stepper({ steps = STEPS } = {}) {
  return `<div class="stepper stepper--dots" style="max-width:480px;">
    ${steps.map((label, i) => `
      <div class="stepper-item">
        <span class="stepper-dot"></span>
        <span class="stepper-label">${label}</span>
      </div>
      ${i < steps.length - 1 ? '<div class="stepper-line"></div>' : ''}`).join('')}
  </div>`;
}

export default {
  title: 'Iris Library/Stepper',
  tags: ['autodocs', 'beta'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `**Stepper** — progress navigation showing the user's position in a multi-step flow.

Figma nodes: Stepper \`110:22561\` · Stepper indicator \`110:20640\`

**When to use**
- Multi-step forms (signup wizard, checkout, onboarding)
- Any linear flow where users benefit from seeing total steps and position

**When NOT to use**
- Page-level navigation → use Tabs
- Showing percentage completion of a single task → use Progress Bar

**Anatomy**
\`[dot indicator] — [connector line] — [dot indicator] …\` with a label under each dot.
Indicator: 24px halo (\`#bedbff\`) + 12px dot (\`#155dfc\`). Connector: 1px \`#e5e7eb\`.

**Status: beta** — Figma light mode currently defines a single indicator state.
Completed / inactive states are not yet designed; do not improvise them.

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
`,
      },
    },
  },
  argTypes: {
    stepCount: {
      control: { type: 'range', min: 2, max: 5, step: 1 },
      description: 'Number of steps. Each step is a `.stepper-item` with a `.stepper-dot` + `.stepper-label`, joined by `.stepper-line` connectors.',
      table: { category: 'Content', defaultValue: { summary: 3 } },
    },
  },
  args: {
    stepCount: 3,
  },
};

/* ─────────────────────────────────────────────
   INTERACTIVE
───────────────────────────────────────────── */
export const Interactive = {
  name: 'Interactive (Controls)',
  render: ({ stepCount }) => {
    const steps = Array.from({ length: stepCount }, (_, i) => `Step ${i + 1}`);
    return stepper({ steps });
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the **stepCount** control to change the number of steps. Built on the real `.stepper--dots` classes.',
      },
      source: {
        transform: (_src, ctx) => {
          const n = ctx.args.stepCount || 3;
          const steps = Array.from({ length: n }, (_, i) => `Step ${i + 1}`);
          return `<div class="stepper stepper--dots">${steps.map((label, i) => `
  <div class="stepper-item">
    <span class="stepper-dot"></span>
    <span class="stepper-label">${label}</span>
  </div>${i < steps.length - 1 ? '\n  <div class="stepper-line"></div>' : ''}`).join('')}
</div>`;
        },
      },
    },
  },
};

/* ─────────────────────────────────────────────
   DEFAULT BAR
───────────────────────────────────────────── */
export const DefaultBar = {
  name: 'Stepper — 3 steps (Figma default)',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `The Figma-default 3-step bar. Indicator = 24px \`#bedbff\` halo with 12px \`#155dfc\` dot; connector = 1px \`#e5e7eb\`; labels 16px/500 \`#111928\`.

**✅ Do** — keep step labels to 1–2 words so the bar scans at a glance.
**❌ Don't** — invent completed/disabled indicator styles — they are not in Figma yet (component is **beta**).`,
      },
      source: {
        language: 'html',
        code: `<div class="stepper stepper--dots">
  <div class="stepper-item">
    <span class="stepper-dot"></span>
    <span class="stepper-label">Step 1</span>
  </div>
  <div class="stepper-line"></div>
  <div class="stepper-item">
    <span class="stepper-dot"></span>
    <span class="stepper-label">Step 2</span>
  </div>
  <div class="stepper-line"></div>
  <div class="stepper-item">
    <span class="stepper-dot"></span>
    <span class="stepper-label">Step 3</span>
  </div>
</div>`,
      },
    },
  },
  render: () => stepper(),
};

// ─── Standalone instructional steps ─────────────────────────────────────────
const STEP_ICONS = {
  install: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V16.5M16.5 12L12 16.5M12 16.5L7.5 12M12 16.5V3"/></svg>',
  scan: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.75 4.875C3.75 4.25368 4.25368 3.75 4.875 3.75H9.375C9.99632 3.75 10.5 4.25368 10.5 4.875V9.375C10.5 9.99632 9.99632 10.5 9.375 10.5H4.875C4.25368 10.5 3.75 9.99632 3.75 9.375V4.875Z"/><path d="M3.75 14.625C3.75 14.0037 4.25368 13.5 4.875 13.5H9.375C9.99632 13.5 10.5 14.0037 10.5 14.625V19.125C10.5 19.7463 9.99632 20.25 9.375 20.25H4.875C4.25368 20.25 3.75 19.7463 3.75 19.125V14.625Z"/><path d="M13.5 4.875C13.5 4.25368 14.0037 3.75 14.625 3.75H19.125C19.7463 3.75 20.25 4.25368 20.25 4.875V9.375C20.25 9.99632 19.7463 10.5 19.125 10.5H14.625C14.0037 10.5 13.5 9.99632 13.5 9.375V4.875Z"/><path d="M6.75 6.75H7.5V7.5H6.75V6.75Z"/><path d="M6.75 16.5H7.5V17.25H6.75V16.5Z"/><path d="M16.5 6.75H17.25V7.5H16.5V6.75Z"/><path d="M13.5 13.5H14.25V14.25H13.5V13.5Z"/><path d="M16.5 16.5H17.25V17.25H16.5V16.5Z"/></svg>',
  verify: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12.7498L11.25 14.9998L15 9.74985M12 2.71411C9.8495 4.75073 6.94563 5.99986 3.75 5.99986C3.69922 5.99986 3.64852 5.99955 3.59789 5.99892C3.2099 7.17903 3 8.43995 3 9.74991C3 15.3414 6.82432 20.0397 12 21.3719C17.1757 20.0397 21 15.3414 21 9.74991C21 8.43995 20.7901 7.17903 20.4021 5.99892C20.3515 5.99955 20.3008 5.99986 20.25 5.99986C17.0544 5.99986 14.1505 4.75073 12 2.71411Z"/></svg>',
};

export const StandaloneSteps = {
  name: 'Standalone steps (instructional)',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Self-contained steps without connectors — `.stepper-item--standalone` inside `.stepper`. Anatomy: `.stepper-step-icon` (56px circle, card-icon-purple tint) → `.stepper-step-heading` (number = the existing `.stepper-icon`, rendered filled) + `.stepper-step-title` → `.stepper-step-desc`. NOT interactive — no active/completed semantics, nothing clickable. ✅ "How it works" explanations, onboarding overviews · ❌ progress tracking — use the dots stepper · ❌ step navigation.',
      },
      source: {
        code: `<div class="stepper">
  <div class="stepper-item stepper-item--standalone">
    <span class="stepper-step-icon"><!-- 24px outline icon --></span>
    <span class="stepper-step-heading">
      <span class="stepper-icon" aria-hidden="true">1</span>
      <span class="stepper-step-title">Install an authenticator app</span>
    </span>
    <p class="stepper-step-desc">Download and install an authenticator app on your mobile device.</p>
  </div>
  <!-- more .stepper-item--standalone … -->
</div>`,
      },
    },
  },
  render: () => `
    <div class="stepper" style="max-width:860px;">
      <div class="stepper-item stepper-item--standalone">
        <span class="stepper-step-icon">${STEP_ICONS.install}</span>
        <span class="stepper-step-heading">
          <span class="stepper-icon" aria-hidden="true">1</span>
          <span class="stepper-step-title">Install an authenticator app</span>
        </span>
        <p class="stepper-step-desc">Download and install an authenticator app on your mobile device.</p>
        <p class="stepper-step-desc">Examples: Google Authenticator, Authy, Microsoft Authenticator</p>
      </div>
      <div class="stepper-item stepper-item--standalone">
        <span class="stepper-step-icon">${STEP_ICONS.scan}</span>
        <span class="stepper-step-heading">
          <span class="stepper-icon" aria-hidden="true">2</span>
          <span class="stepper-step-title">Scan the QR code</span>
        </span>
        <p class="stepper-step-desc">Open the app and scan the QR code or enter the setup key manually.</p>
      </div>
      <div class="stepper-item stepper-item--standalone">
        <span class="stepper-step-icon">${STEP_ICONS.verify}</span>
        <span class="stepper-step-heading">
          <span class="stepper-icon" aria-hidden="true">3</span>
          <span class="stepper-step-title">Enter the code</span>
        </span>
        <p class="stepper-step-desc">Enter the 6-digit code from the app to verify and complete setup.</p>
      </div>
    </div>`,
};
