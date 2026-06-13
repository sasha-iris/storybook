/**
 * Iris Library — QR Frame
 * Demo QR is REAL and scannable (version 6, 41x41 modules — generated with
 * segno from otpauth://totp/... with the demo secret JBSWY3DPKX3P4Z3D).
 *
 * Container for QR codes. No Figma node yet (engineering component,
 * derived from canon 2026-06-13; design confirmation pending) — the need
 * came from the Authenticator App setup flow (account settings, MFA).
 *
 * Why a component and not a plain <svg>: QR codes require a "quiet zone" —
 * a light margin around the pattern — or scanners fail. The frame
 * guarantees it (white bg + 16px padding) on any surface, including
 * tinted cards and dark mode.
 *
 * CSS classes: .qr-frame (+ .qr-frame svg/img { display:block })
 */

const DEMO_QR = `<svg width="160" height="160" viewBox="0 0 41 41" shape-rendering="crispEdges" role="img" aria-label="Example QR code (demo TOTP secret)">
  <rect width="41" height="41" fill="#fff"/>
  <path stroke="#111928" d="M0 0.5h7m1 0h2m1 0h2m5 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h2m2 0h7m-41 1h1m5 0h1m3 0h2m1 0h1m1 0h2m1 0h3m1 0h1m2 0h2m1 0h5m1 0h1m5 0h1m-41 1h1m1 0h3m1 0h1m2 0h1m4 0h1m1 0h3m1 0h2m4 0h1m1 0h4m2 0h1m1 0h3m1 0h1m-41 1h1m1 0h3m1 0h1m1 0h3m2 0h2m2 0h1m3 0h3m1 0h3m3 0h2m1 0h1m1 0h3m1 0h1m-41 1h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h1m3 0h1m2 0h1m2 0h1m1 0h6m3 0h1m1 0h3m1 0h1m-41 1h1m5 0h1m1 0h4m1 0h1m1 0h2m1 0h2m1 0h1m3 0h2m1 0h2m1 0h1m2 0h1m5 0h1m-41 1h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7m-33 1h5m1 0h2m1 0h2m1 0h2m1 0h1m3 0h6m-33 1h1m3 0h1m1 0h3m1 0h1m2 0h3m1 0h1m1 0h3m1 0h1m2 0h5m1 0h6m2 0h1m-40 1h2m2 0h1m2 0h2m2 0h1m4 0h2m2 0h1m1 0h1m1 0h4m1 0h1m1 0h1m1 0h3m2 0h2m-41 1h1m1 0h1m1 0h4m1 0h2m5 0h1m1 0h1m4 0h3m1 0h2m6 0h4m1 0h1m-41 1h1m10 0h2m1 0h1m1 0h2m1 0h5m3 0h1m1 0h1m1 0h1m2 0h2m1 0h1m-34 1h11m2 0h1m1 0h6m4 0h2m2 0h1m-33 1h2m1 0h1m9 0h1m3 0h2m3 0h1m1 0h4m1 0h1m4 0h6m-41 1h7m3 0h3m5 0h2m1 0h4m1 0h3m3 0h1m1 0h2m1 0h2m1 0h1m-40 1h5m1 0h2m2 0h2m1 0h4m1 0h4m6 0h1m4 0h1m2 0h1m-38 1h3m1 0h4m2 0h3m1 0h1m2 0h1m2 0h2m3 0h1m2 0h1m3 0h2m1 0h1m1 0h1m1 0h2m-40 1h1m2 0h1m3 0h3m1 0h2m1 0h5m2 0h3m2 0h1m3 0h1m1 0h6m1 0h1m-40 1h1m1 0h1m1 0h2m2 0h1m1 0h2m1 0h3m1 0h1m1 0h4m1 0h3m1 0h2m1 0h3m2 0h2m1 0h1m-38 1h2m2 0h3m1 0h4m4 0h1m1 0h3m3 0h4m1 0h1m1 0h2m1 0h1m1 0h1m-40 1h1m1 0h1m2 0h5m1 0h5m3 0h2m2 0h2m2 0h1m1 0h2m1 0h2m1 0h1m1 0h1m1 0h2m-40 1h2m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3m4 0h1m2 0h4m3 0h2m1 0h1m1 0h1m1 0h1m-41 1h2m2 0h1m1 0h2m1 0h1m1 0h1m3 0h1m2 0h1m1 0h2m1 0h1m1 0h4m1 0h1m3 0h4m2 0h1m-41 1h6m4 0h2m2 0h2m1 0h1m1 0h1m1 0h1m2 0h1m1 0h5m1 0h1m1 0h2m1 0h1m-36 1h5m1 0h1m2 0h2m2 0h1m1 0h1m1 0h3m2 0h2m2 0h2m3 0h1m1 0h1m1 0h1m-38 1h1m1 0h1m2 0h1m3 0h2m1 0h1m2 0h2m1 0h2m2 0h2m2 0h3m3 0h5m1 0h3m-40 1h1m1 0h1m1 0h4m1 0h1m2 0h4m4 0h3m3 0h1m1 0h2m2 0h1m2 0h1m3 0h1m-40 1h5m1 0h2m1 0h2m2 0h1m1 0h3m2 0h1m4 0h1m2 0h2m3 0h2m1 0h1m-38 1h2m2 0h3m2 0h1m1 0h2m2 0h3m1 0h1m1 0h2m1 0h1m2 0h1m1 0h2m1 0h2m1 0h1m-36 1h2m1 0h1m1 0h1m1 0h2m2 0h1m2 0h2m1 0h4m2 0h1m1 0h1m2 0h1m4 0h4m1 0h3m-35 1h1m2 0h2m1 0h1m1 0h4m2 0h2m1 0h1m3 0h2m5 0h4m1 0h2m-39 1h1m2 0h1m2 0h1m2 0h3m2 0h3m2 0h2m1 0h1m2 0h5m1 0h4m-37 1h2m2 0h9m2 0h3m1 0h1m2 0h2m1 0h1m2 0h1m2 0h6m2 0h2m-33 1h2m2 0h2m2 0h1m3 0h3m2 0h2m1 0h1m3 0h1m3 0h1m1 0h1m1 0h1m-41 1h7m1 0h1m1 0h3m4 0h1m5 0h2m2 0h1m3 0h2m1 0h1m1 0h2m2 0h1m-41 1h1m5 0h1m2 0h1m1 0h5m1 0h3m2 0h1m3 0h1m2 0h1m2 0h1m3 0h2m2 0h1m-41 1h1m1 0h3m1 0h1m1 0h1m2 0h1m1 0h1m4 0h1m1 0h1m1 0h3m3 0h10m-38 1h1m1 0h3m1 0h1m2 0h1m1 0h1m1 0h3m7 0h1m2 0h2m3 0h3m4 0h1m1 0h1m-41 1h1m1 0h3m1 0h1m3 0h1m2 0h3m1 0h1m4 0h3m2 0h5m1 0h1m3 0h1m2 0h1m-41 1h1m5 0h1m8 0h8m3 0h2m1 0h1m2 0h2m1 0h1m1 0h1m1 0h2m-41 1h7m1 0h2m1 0h2m1 0h1m1 0h2m3 0h1m7 0h1m2 0h2m2 0h1m2 0h1"/>
</svg>`;

export default {
  title: 'Iris Library/QR',
  tags: ['autodocs', 'beta'],
  parameters: {
    docs: {
      description: {
        component: `
**QR Frame** — container that makes a QR code reliably scannable on any surface.

**When to use**
- Authenticator app setup (TOTP enrollment), pairing flows
- Payment / deep-link QR codes shown inside cards or modals
- Any QR placed on a non-white or dark surface

**When NOT to use**
- Decorative imagery — use a plain \`<img>\`
- Avatars/logos — use the Avatar or Brand components

**Anatomy**
\`.qr-frame\` (white bg + 16px padding = quiet zone, border, radius 12) → generated QR \`<svg>\`/\`<img>\` inside.

**A11y**: the QR itself must carry \`role="img"\` + \`aria-label\` describing the action ("QR code for setting up an authenticator app"), and the flow must always provide a non-camera fallback (manual setup key) — scanning is not accessible to everyone.

**QA note**: the frame must stay white in dark mode — scanners need a light background; never recolor the QR modules.
        `.trim(),
      },
    },
  },
};

export const QRFrame = {
  name: 'QR frame',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: '✅ Pair with a manual-entry fallback (setup key) · ✅ Keep the demo size ≥128px for reliable scanning · ❌ Never place a QR without the frame on tinted/dark surfaces · ❌ Never recolor modules with brand colors.',
      },
      source: {
        code: `<span class="qr-frame">
  <!-- real, generated QR svg/img goes here -->
  <svg width="160" height="160" role="img" aria-label="QR code for setting up an authenticator app">…</svg>
</span>`,
      },
    },
  },
  render: () => `
    <div style="display:flex;gap:32px;align-items:flex-start;flex-wrap:wrap;">
      <span class="qr-frame">${DEMO_QR}</span>
      <div style="background:var(--color-bg-dark);padding:24px;border-radius:12px;">
        <span class="qr-frame">${DEMO_QR}</span>
      </div>
    </div>`,
};
