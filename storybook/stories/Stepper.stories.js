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
