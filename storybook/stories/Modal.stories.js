/**
 * Iris Library — Modal Dialog
 *
 * Source: Figma › Iris Library › Notification system (node 9929:153267)
 * Modal instances: three confirmed variants
 *   - Destructive: "Uninvite user"       — Cancel + red #c10007 confirm
 *   - Confirmation: "Activate user"      — Cancel + purple #42389d confirm
 *   - Warning: "Unsaved changes"         — No + red Yes + purple Save
 *
 * ## Tokens
 * - Container: w=360px, bg=#ffffff, r=6px, p=16px
 * - Heading: 16px/600, color #6b7280
 * - Close icon: 18×18px, color #6b7280
 * - Body text: 14px/400, color #111928
 * - Button row: padding-top 12px, gap 8px
 * - Cancel btn: 156×40px, r=12px, border 1px #e5e7eb, text #1e2939
 * - Confirm btn: 156×40px, r=12px, filled (red #c10007 / purple #42389d), text #ffffff
 * - Overlay: bg #111928 at 70% opacity
 */

// ─── Close icon ──────────────────────────────────────────────────────────────
const closeIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

// ─── Builder ─────────────────────────────────────────────────────────────────

/**
 * @param {{
 *   title: string,
 *   body: string,
 *   cancelLabel: string,
 *   confirmLabel: string,
 *   confirmColor: 'red'|'purple',
 *   thirdLabel?: string,
 *   showOverlay?: boolean
 * }} opts
 */
function modal({
  title = 'Dialog title',
  body = 'Are you sure you want to continue?',
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  confirmColor = 'red',
  thirdLabel = '',
  showOverlay = true,
} = {}) {
  const confirmBg = confirmColor === 'red' ? '#c10007' : '#42389d';

  const cancelBtn = `
    <button style="
      width:156px;height:40px;
      background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;
      padding:0 10px;cursor:pointer;
      font:500 14px/1.5 inherit;color:#1e2939;
      flex-shrink:0;
    ">${cancelLabel}</button>`;

  const confirmBtn = `
    <button style="
      width:156px;height:40px;
      background:${confirmBg};border:none;border-radius:12px;
      padding:0 10px;cursor:pointer;
      font:500 14px/1.5 inherit;color:#ffffff;
      flex-shrink:0;
    ">${confirmLabel}</button>`;

  const thirdBtn = thirdLabel ? `
    <button style="
      height:40px;padding:0 12px;
      background:#42389d;border:none;border-radius:12px;
      cursor:pointer;
      font:500 14px/1.5 inherit;color:#ffffff;
      flex-shrink:0;
    ">${thirdLabel}</button>` : '';

  const dialog = `
    <div role="dialog" aria-modal="true" aria-labelledby="modal-title" style="
      width:360px;background:#ffffff;border-radius:6px;
      padding:16px;box-sizing:border-box;
      display:flex;flex-direction:column;gap:0;
    ">
      <!-- Heading -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <span id="modal-title" style="font:600 16px/1.5 inherit;color:#6b7280;">${title}</span>
        <button aria-label="Close dialog" style="
          width:18px;height:18px;padding:0;background:none;border:none;cursor:pointer;
          display:flex;align-items:center;justify-content:center;flex-shrink:0;
        ">${closeIcon}</button>
      </div>

      <!-- Body -->
      <p style="font:400 14px/1.5 inherit;color:#111928;margin:0 0 0 0;">${body}</p>

      <!-- Buttons -->
      <div style="
        display:flex;gap:8px;flex-wrap:wrap;
        padding-top:12px;
      ">
        ${cancelBtn}
        ${confirmBtn}
        ${thirdBtn}
      </div>
    </div>`;

  if (!showOverlay) return dialog;

  return `
    <div style="
      position:relative;width:100%;min-height:340px;
      background:#111928;
      display:flex;align-items:center;justify-content:center;
      padding:40px;box-sizing:border-box;
    ">
      ${dialog}
    </div>`;
}

// ─── Default export ───────────────────────────────────────────────────────────

export default {
  title: 'Iris Library/Modal',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Modal Dialog** — a layer above the page that requires user interaction before continuing.

Figma source: \`9929:153267\` (Notification system frame, Modal instances).

**When to use**
- Confirming a destructive action (delete, remove, uninvite)
- Confirming a permission change (activate, grant access)
- Warning about unsaved work before navigation
- Any action that is hard or impossible to undo

**When NOT to use**
- Simple success/error feedback → use an Alert or Toast instead
- Complex multi-step forms → use a dedicated page or side panel
- Non-blocking information → use an inline Banner

**Anatomy**
\`[Heading + Close X] / [Body text] / [Button row: Cancel + Confirm (+ optional 3rd)]\`

**QA checklist**
- Container: 360px wide, bg \`#ffffff\`, radius 6px, padding 16px
- Heading: 16px/600, color \`#6b7280\`
- Body: 14px/400, color \`#111928\`
- Cancel: 156×40px, r=12px, border \`1px #e5e7eb\`, text \`#1e2939\`
- Destructive confirm: bg \`#c10007\`; Confirmation confirm: bg \`#42389d\`
- Overlay: \`#111928\` at 70% opacity behind dialog
- Dialog must have \`role="dialog"\`, \`aria-modal="true"\`, \`aria-labelledby\`
        `.trim(),
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────
    title: {
      control: 'text',
      description: 'Dialog heading text. Maps to `aria-labelledby` on the heading element.',
      table: { category: 'Content', defaultValue: { summary: 'Uninvite user' } },
    },
    body: {
      control: 'text',
      description: 'Body copy — explains the action and its consequences.',
      table: { category: 'Content', defaultValue: { summary: 'Are you sure?' } },
    },
    cancelLabel: {
      control: 'text',
      description: 'Label for the cancel / secondary button.',
      table: { category: 'Content', defaultValue: { summary: 'Cancel' } },
    },
    confirmLabel: {
      control: 'text',
      description: 'Label for the primary confirm button.',
      table: { category: 'Content', defaultValue: { summary: 'Uninvite' } },
    },
    // ── Appearance ───────────────────────────────────────────
    confirmColor: {
      control: 'select',
      options: ['red', 'purple'],
      description: 'Color of the confirm button. `red` (#c10007) for destructive actions; `purple` (#42389d) for confirmations.',
      table: { category: 'Appearance', defaultValue: { summary: 'red' } },
    },
    // ── State ────────────────────────────────────────────────
    showOverlay: {
      control: 'boolean',
      description: 'Show the dark overlay background behind the dialog. Disable for isolated component preview.',
      table: { category: 'State', defaultValue: { summary: true } },
    },
  },
  args: {
    title: 'Uninvite user',
    body: 'User will be removed from the list and invitation link will be invalidated. Are you sure you want to uninvite user@company.com?',
    cancelLabel: 'Cancel',
    confirmLabel: 'Uninvite',
    confirmColor: 'red',
    showOverlay: true,
  },
};

// ─── Interactive ──────────────────────────────────────────────────────────────

export const Interactive = {
  name: 'Interactive (Controls)',
  render: (args) => modal(args),
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to configure any modal combination: title, body, button labels, and confirm color.',
      },
      source: {
        transform: (_src, storyCtx) => {
          const { title, body, cancelLabel, confirmLabel, confirmColor } = storyCtx.args;
          const confirmBg = confirmColor === 'red' ? '#c10007' : '#42389d';
          return `<!-- Overlay -->
<div style="position:fixed;inset:0;background:rgba(17,25,40,0.7);display:flex;align-items:center;justify-content:center;">

  <!-- Dialog -->
  <div role="dialog" aria-modal="true" aria-labelledby="modal-title"
       style="width:360px;background:#ffffff;border-radius:6px;padding:16px;box-sizing:border-box;">

    <!-- Heading -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <span id="modal-title" style="font:600 16px/1.5 inherit;color:#6b7280;">${title}</span>
      <button aria-label="Close dialog"><!-- × icon --></button>
    </div>

    <!-- Body -->
    <p style="font:400 14px/1.5 inherit;color:#111928;margin:0;">${body}</p>

    <!-- Buttons -->
    <div style="display:flex;gap:8px;padding-top:12px;">
      <button style="width:156px;height:40px;border:1px solid #e5e7eb;border-radius:12px;
                     background:#ffffff;color:#1e2939;font:500 14px/1.5 inherit;cursor:pointer;">
        ${cancelLabel}
      </button>
      <button style="width:156px;height:40px;background:${confirmBg};border:none;border-radius:12px;
                     color:#ffffff;font:500 14px/1.5 inherit;cursor:pointer;">
        ${confirmLabel}
      </button>
    </div>

  </div>
</div>`;
        },
      },
    },
  },
};

// ─── Destructive ─────────────────────────────────────────────────────────────

export const Destructive = {
  name: 'Destructive — uninvite user',
  parameters: {
    docs: {
      description: {
        story: `
Destructive confirmation — Figma: Modal \`9929:153267\` variant 1.

**✅ Do** — use the red confirm button for irreversible destructive actions (delete, remove, uninvite).
**✅ Do** — clearly state the consequence in the body text.
**❌ Don't** — use a destructive modal for reversible actions. Prefer an inline confirm instead.
**❌ Don't** — label the confirm button just "Yes" — use the specific action verb ("Uninvite", "Delete").
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title"
     style="width:360px;background:#ffffff;border-radius:6px;padding:16px;">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
    <span id="modal-title" style="font:600 16px/1.5 inherit;color:#6b7280;">Uninvite user</span>
    <button aria-label="Close dialog"><!-- × --></button>
  </div>
  <p style="font:400 14px/1.5 inherit;color:#111928;margin:0;">
    User will be removed from the list and invitation link will be invalidated.
    Are you sure you want to uninvite user@company.com?
  </p>
  <div style="display:flex;gap:8px;padding-top:12px;">
    <button style="width:156px;height:40px;border:1px solid #e5e7eb;border-radius:12px;
                   background:#ffffff;color:#1e2939;">Cancel</button>
    <button style="width:156px;height:40px;background:#c10007;border:none;border-radius:12px;
                   color:#ffffff;">Uninvite</button>
  </div>
</div>`,
      },
    },
  },
  render: () => modal({
    title: 'Uninvite user',
    body: 'User will be removed from the list and invitation link will be invalidated. Are you sure you want to uninvite user@company.com?',
    cancelLabel: 'Cancel',
    confirmLabel: 'Uninvite',
    confirmColor: 'red',
  }),
};

// ─── Confirmation ─────────────────────────────────────────────────────────────

export const Confirmation = {
  name: 'Confirmation — activate user',
  parameters: {
    docs: {
      description: {
        story: `
Confirmation modal — Figma: Modal \`9929:153267\` variant 2.

**✅ Do** — use the purple confirm button for permission grants and positive confirmations.
**❌ Don't** — use red for positive/additive actions — red signals danger.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title"
     style="width:360px;background:#ffffff;border-radius:6px;padding:16px;">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
    <span id="modal-title" style="font:600 16px/1.5 inherit;color:#6b7280;">Activate user</span>
    <button aria-label="Close dialog"><!-- × --></button>
  </div>
  <p style="font:400 14px/1.5 inherit;color:#111928;margin:0;">
    User will receive access to all granted permissions.
    Are you sure you want to activate user@company.com?
  </p>
  <div style="display:flex;gap:8px;padding-top:12px;">
    <button style="width:156px;height:40px;border:1px solid #e5e7eb;border-radius:12px;
                   background:#ffffff;color:#1e2939;">Cancel</button>
    <button style="width:156px;height:40px;background:#42389d;border:none;border-radius:12px;
                   color:#ffffff;">Activate</button>
  </div>
</div>`,
      },
    },
  },
  render: () => modal({
    title: 'Activate user',
    body: 'User will receive access to all granted permissions. Are you sure you want to activate user@company.com?',
    cancelLabel: 'Cancel',
    confirmLabel: 'Activate',
    confirmColor: 'purple',
  }),
};

// ─── Warning (3 buttons) ─────────────────────────────────────────────────────

export const Warning = {
  name: 'Warning — unsaved changes (3 buttons)',
  parameters: {
    docs: {
      description: {
        story: `
Three-button warning modal — Figma: Modal \`9929:153267\` variant 3.

Used when the user is about to navigate away with unsaved work. Offers three choices:
"No" (stay), "Yes" (discard), "Save" (save and proceed).

**✅ Do** — offer "Save & proceed" as the safest default action.
**❌ Don't** — use 3-button modals for simple yes/no decisions — it adds cognitive load.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title"
     style="width:360px;background:#ffffff;border-radius:6px;padding:16px;">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
    <span id="modal-title" style="font:600 16px/1.5 inherit;color:#6b7280;">You have unsaved changes</span>
    <button aria-label="Close dialog"><!-- × --></button>
  </div>
  <p style="font:400 14px/1.5 inherit;color:#111928;margin:0;">
    If you proceed, the changes will be lost.
    Are you sure you want to proceed without saving?
  </p>
  <div style="display:flex;gap:8px;flex-wrap:wrap;padding-top:12px;">
    <button style="width:156px;height:40px;border:1px solid #e5e7eb;border-radius:12px;
                   background:#ffffff;color:#1e2939;">No</button>
    <button style="width:156px;height:40px;background:#c10007;border:none;border-radius:12px;
                   color:#ffffff;">Yes</button>
    <button style="height:40px;padding:0 12px;background:#42389d;border:none;border-radius:12px;
                   color:#ffffff;">Save</button>
  </div>
</div>`,
      },
    },
  },
  render: () => modal({
    title: 'You have unsaved changes',
    body: 'If you proceed, the changes will be lost. Are you sure you want to proceed without saving?',
    cancelLabel: 'No',
    confirmLabel: 'Yes',
    confirmColor: 'red',
    thirdLabel: 'Save',
  }),
};

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants = {
  name: 'All variants',
  parameters: {
    controls: { include: [] },
    docs: {
      description: {
        story: 'All three modal variants side-by-side: destructive (red), confirmation (purple), and warning (3 buttons).',
      },
      source: {
        language: 'html',
        code: `<!-- Destructive: Cancel + red Confirm -->
<!-- Confirmation: Cancel + purple Confirm -->
<!-- Warning: No + red Yes + purple Save -->`,
      },
    },
  },
  render: () => `
    <div style="display:flex;gap:24px;flex-wrap:wrap;padding:32px;background:#374151;min-height:300px;align-items:flex-start;">
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Destructive</div>
        ${modal({ title: 'Uninvite user', body: 'User will be removed from the list and invitation link will be invalidated.', cancelLabel: 'Cancel', confirmLabel: 'Uninvite', confirmColor: 'red', showOverlay: false })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Confirmation</div>
        ${modal({ title: 'Activate user', body: 'User will receive access to all granted permissions.', cancelLabel: 'Cancel', confirmLabel: 'Activate', confirmColor: 'purple', showOverlay: false })}
      </div>
      <div>
        <div style="font:700 10px/1.5 ui-monospace,monospace;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Warning (3 buttons)</div>
        ${modal({ title: 'You have unsaved changes', body: 'If you proceed, the changes will be lost. Are you sure you want to proceed without saving?', cancelLabel: 'No', confirmLabel: 'Yes', confirmColor: 'red', thirdLabel: 'Save', showOverlay: false })}
      </div>
    </div>
  `,
};
