/**
 * Iris Library — Modal Dialog
 *
 * Source: Figma › Iris Library › Notification system (node 9929:153267)
 * Modal instances: three confirmed variants
 *   - Destructive: "Uninvite user"       — Cancel + btn-red confirm
 *   - Confirmation: "Activate user"      — Cancel + btn-purple confirm
 *   - Warning: "Unsaved changes"         — No + btn-red Yes + btn-purple Save
 *
 * CSS classes used (from styles.css):
 *   .modal-dialog   — dialog container (max-width:512px, bg surface, r=xl)
 *   .modal-header   — header with title + close button
 *   .modal-title    — heading text (lg, semibold)
 *   .modal-close    — close × button
 *   .modal-body     — body content area
 *   .modal-footer   — footer with action buttons
 *   .btn .btn-outline-gray .btn-md  — cancel / secondary button
 *   .btn .btn-red .btn-md           — destructive confirm button
 *   .btn .btn-purple .btn-md        — positive confirm button
 *
 * Note: .modal-backdrop uses position:fixed — not suitable for story layout.
 * Stories use a relative dark wrapper to simulate the overlay instead.
 */

// ─── Close icon ──────────────────────────────────────────────────────────────
const closeIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
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
  const confirmClass = confirmColor === 'red' ? 'btn btn-red btn-md' : 'btn btn-purple btn-md';
  const thirdBtn = thirdLabel
    ? `<button class="btn btn-purple btn-md">${thirdLabel}</button>`
    : '';

  const dialog = `<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">
    <div class="modal-header">
      <h2 class="modal-title" id="modal-title">${title}</h2>
      <button class="modal-close" aria-label="Close dialog">${closeIcon}</button>
    </div>
    <div class="modal-body">
      <p>${body}</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline-gray btn-md">${cancelLabel}</button>
      <button class="${confirmClass}">${confirmLabel}</button>
      ${thirdBtn}
    </div>
  </div>`;

  if (!showOverlay) return dialog;

  return `<div style="
    position:relative;width:100%;min-height:340px;
    background:rgba(17,25,40,0.85);
    display:flex;align-items:center;justify-content:center;
    padding:40px;box-sizing:border-box;">
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

CSS classes: \`.modal-dialog\` → \`.modal-header\` + \`.modal-title\` + \`.modal-close\` + \`.modal-body\` + \`.modal-footer\`

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
\`[.modal-header: .modal-title + .modal-close] / [.modal-body] / [.modal-footer: cancel + confirm]\`

**Accessibility**
- Dialog: \`role="dialog"\`, \`aria-modal="true"\`, \`aria-labelledby\` pointing to \`.modal-title\`
- Close button: \`.modal-close\` with \`aria-label="Close dialog"\`
- Keyboard: Escape closes; Tab cycles within the dialog (trap focus in JS)
        `.trim(),
      },
    },
  },
  argTypes: {
    // ── Content ──────────────────────────────────────────────
    title: {
      control: 'text',
      description: 'Dialog heading text. Referenced via `aria-labelledby` on the dialog element.',
      table: { category: 'Content', defaultValue: { summary: 'Uninvite user' } },
    },
    body: {
      control: 'text',
      description: 'Body copy — explains the action and its consequences.',
      table: { category: 'Content', defaultValue: { summary: 'Are you sure?' } },
    },
    cancelLabel: {
      control: 'text',
      description: 'Label for the cancel / secondary button (`.btn.btn-outline-gray.btn-md`).',
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
      description: '`red` → `.btn-red` for destructive actions; `purple` → `.btn-purple` for confirmations.',
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
          const confirmClass = confirmColor === 'red' ? 'btn btn-red btn-md' : 'btn btn-purple btn-md';
          return `<!-- Dark overlay (position:fixed in production, relative wrapper in stories) -->
<div class="modal-backdrop">

  <div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">

    <div class="modal-header">
      <h2 class="modal-title" id="modal-title">${title}</h2>
      <button class="modal-close" aria-label="Close dialog"><!-- × SVG --></button>
    </div>

    <div class="modal-body">
      <p>${body}</p>
    </div>

    <div class="modal-footer">
      <button class="btn btn-outline-gray btn-md">${cancelLabel}</button>
      <button class="${confirmClass}">${confirmLabel}</button>
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

Uses \`.btn-red\` for the confirm button to signal irreversibility.

**✅ Do** — use \`.btn-red\` for irreversible destructive actions (delete, remove, uninvite).
**✅ Do** — clearly state the consequence in the body text.
**❌ Don't** — use a destructive modal for reversible actions. Prefer an inline confirm instead.
**❌ Don't** — label the confirm button just "Yes" — use the specific action verb ("Uninvite", "Delete").
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">
  <div class="modal-header">
    <h2 class="modal-title" id="modal-title">Uninvite user</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>User will be removed from the list and invitation link will be invalidated.
    Are you sure you want to uninvite user@company.com?</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline-gray btn-md">Cancel</button>
    <button class="btn btn-red btn-md">Uninvite</button>
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

Uses \`.btn-purple\` for positive confirmations (granting permissions, activating users).

**✅ Do** — use \`.btn-purple\` for permission grants and positive confirmations.
**❌ Don't** — use \`.btn-red\` for positive/additive actions — red signals danger.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">
  <div class="modal-header">
    <h2 class="modal-title" id="modal-title">Activate user</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>User will receive access to all granted permissions.
    Are you sure you want to activate user@company.com?</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline-gray btn-md">Cancel</button>
    <button class="btn btn-purple btn-md">Activate</button>
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
"No" (stay), "Yes" (discard — \`.btn-red\`), "Save" (save and proceed — \`.btn-purple\`).

**✅ Do** — offer "Save & proceed" as the safest default action.
**❌ Don't** — use 3-button modals for simple yes/no decisions — it adds cognitive load.
        `.trim(),
      },
      source: {
        language: 'html',
        code: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="modal-dialog">
  <div class="modal-header">
    <h2 class="modal-title" id="modal-title">You have unsaved changes</h2>
    <button class="modal-close" aria-label="Close dialog"><!-- × --></button>
  </div>
  <div class="modal-body">
    <p>If you proceed, the changes will be lost.
    Are you sure you want to proceed without saving?</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-outline-gray btn-md">No</button>
    <button class="btn btn-red btn-md">Yes</button>
    <button class="btn btn-purple btn-md">Save</button>
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
        story: 'All three modal variants side-by-side: destructive (`.btn-red`), confirmation (`.btn-purple`), and warning (3 buttons).',
      },
      source: {
        language: 'html',
        code: `<!-- Destructive: .btn-outline-gray + .btn-red -->
<!-- Confirmation: .btn-outline-gray + .btn-purple -->
<!-- Warning: .btn-outline-gray + .btn-red + .btn-purple -->`,
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
