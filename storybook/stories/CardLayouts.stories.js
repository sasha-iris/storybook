/**
 * Iris Library — Card / Layouts
 *
 * Source: Figma › ---- Cards (node 13559:76419) — light mode, desktop only.
 * Dark-mode and mobile variants are intentionally excluded from this file.
 *
 * Variants implemented here (complex / specialised layout cards):
 *   User Profile    node 13559:76692  (384px, centered avatar + CTA buttons)
 *   With Form       node 13561:76495  (384px, sign-in form)
 *   E-commerce      node 13561:76497  (384px, product + stars + price)
 *   Card with List  node 13561:77786  (384px, customer list)
 *   Pricing         node 13561:77822  (384px, plan + feature list)
 *   CTA             node 13561:76545  (790px, app download CTAs)
 *   Nav Tabs        node 13561:77617  (790px, tab nav + body copy)
 *   Stats           node 13561:77668  (790px, tab nav + stats grid)
 *   Testimonial     node 13567:76479  (790px, 2×2 testimonial grid)
 *   Crypto          node 13567:76480  (384px, wallet connect list)
 *
 * Simpler content-card variants (Card+Button, Card+Link, Horizontal) live in
 * Card.stories.js (Card/Basics).
 *
 * Images use stable CDN URLs (ui-avatars.com, picsum.photos, simpleicons.org) — no TTL.
 */

/* ── Stable asset URLs ────────────────────────────────────
   Avatars:      ui-avatars.com — initials-based, no expiry, no face photos.
   Product img:  picsum.photos  — seed-stable, no expiry.
   App icons:    cdn.simpleicons.org — stable SVG CDN, no expiry.
   Crypto logos: cdn.simpleicons.org — stable SVG CDN, no expiry.
   Fortmatic:    placehold.co badge  — not in SimpleIcons.
─────────────────────────────────────────────────────────── */
const IMG = {
  /* User profile */
  bonnieGreen:      'https://ui-avatars.com/api/?name=Bonnie+Green&size=96&background=e0e7ff&color=42389d&bold=true',
  /* E-commerce product */
  appleWatch:       'https://picsum.photos/seed/applewatch/275/174',
  /* Card-with-list avatars */
  neilSims:         'https://ui-avatars.com/api/?name=Neil+Sims&size=32&background=dbeafe&color=1447e6&bold=true',
  bonnieGreenList:  'https://ui-avatars.com/api/?name=Bonnie+Green&size=32&background=e0e7ff&color=42389d&bold=true',
  michealGough:     'https://ui-avatars.com/api/?name=Micheal+Gough&size=32&background=d1fae5&color=065f46&bold=true',
  thomasLean:       'https://ui-avatars.com/api/?name=Thomas+Lean&size=32&background=fef3c7&color=92400e&bold=true',
  lanaByrd:         'https://ui-avatars.com/api/?name=Lana+Byrd&size=32&background=fce7f3&color=9d174d&bold=true',
  karenNelson:      'https://ui-avatars.com/api/?name=Karen+Nelson&size=32&background=ede9fe&color=3730a3&bold=true',
  /* CTA card — app-store button icons */
  googlePlay:       'https://cdn.simpleicons.org/googleplay/ffffff',
  appleLogo:        'https://cdn.simpleicons.org/apple/ffffff',
  /* Testimonial avatars */
  neilSimsTest:     'https://ui-avatars.com/api/?name=Neil+Sims&size=32&background=dbeafe&color=1447e6&bold=true',
  michealGoughTest: 'https://ui-avatars.com/api/?name=Micheal+Gough&size=32&background=d1fae5&color=065f46&bold=true',
  heleneEngels:     'https://ui-avatars.com/api/?name=Helene+Engels&size=32&background=ede9fe&color=5b21b6&bold=true',
  karenNelsonTest:  'https://ui-avatars.com/api/?name=Karen+Nelson&size=32&background=ede9fe&color=3730a3&bold=true',
  /* Crypto wallet icons — cdn.simpleicons.org (stable, no expiry) */
  metamask:         'https://placehold.co/18x17/E2761B/ffffff?text=M', /* APPROX — MetaMask not in SimpleIcons CDN */
  coinbase:         'https://cdn.simpleicons.org/coinbase/0052FF',
  opera:            'https://cdn.simpleicons.org/opera/FF1B2D',
  walletconnect:    'https://cdn.simpleicons.org/walletconnect/3B99FC',
  fortmatic:        'https://placehold.co/16x16/7c3aed/ffffff?text=F', /* APPROX — not in SimpleIcons */
};

/* ── Shared shell helpers ─────────────────────────────────── */
const SHADOW_MD = '0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05)';
const SHADOW_SM = '0 1px 2px 0 rgba(0,0,0,.08)';
const CARD_SHELL_MD = `background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;box-shadow:${SHADOW_MD}`;
const CARD_SHELL_SM = `background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;box-shadow:${SHADOW_SM}`;

/* ── Inline SVG helpers ───────────────────────────────────── */
/* Heroicons check-circle — filled blue (enabled) or gray (disabled) */
const CHECK = (on = true) =>
  `<svg width="20" height="20" viewBox="0 0 20 20" fill="${on ? 'var(--color-primary)' : 'var(--color-border-light)'}" aria-hidden="true" style="flex-shrink:0;">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>`;

/* Yellow star — Heroicons solid star */
const STAR = `<svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-warning-primary)" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
</svg>`;

/* Heroicons chevron-right (outline) */
const CHEVRON_RIGHT = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.5 5l5 5-5 5"/></svg>`;

/* Heroicons dots-horizontal (menu) */
const DOTS_H = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;

/* Heroicons question-mark-circle */
const QUESTION = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;

/* Heroicons envelope (2 paths) — used in form inputs card */
const MAIL_ICON = `<svg width="16" height="16" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true" style="flex-shrink:0;">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
</svg>`;

export default {
  title: 'Iris Library/Card/Layouts',
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
**Card / Layouts** — Figma node \`13559:76419\`. Specialised layout variants for the Iris Library card component.

**When to use**
- User Profile card: account/team member pages
- With Form card: authentication, onboarding flows
- E-commerce card: product listings, marketplace items
- Card with List: compact data rows inside a card (customers, transactions)
- Pricing card: plan comparison, feature matrices
- CTA card: full-width promotional banners
- Nav Tabs card: in-card tabbed content
- Stats card: dashboard summary sections with segmented metrics
- Testimonial card: social proof sections
- Crypto card: wallet/asset connection flows

**When NOT to use**
- Single numeric KPI → use Card/KPI
- Async data with loading/empty/error → use Card/States
- Standard text + image → use Card/Basics

**Light mode, desktop only.** All 10 variants here are distinct enough from the basic text/image card (see **Card/Basics**) to warrant their own layout category.

| Variant        | Width | Node          | Notes                                   |
|---------------|-------|---------------|-----------------------------------------|
| User Profile   | 384px | 13559:76692   | Centred avatar, Add friend / Message    |
| With Form      | 384px | 13561:76495   | Sign-in card with inputs + checkbox     |
| E-commerce     | 384px | 13561:76497   | Product image, stars, price, cart CTA   |
| Card with List | 384px | 13561:77786   | Customer list, avatar + amount rows     |
| Pricing        | 384px | 13561:77822   | Plan name, price, feature checklist     |
| CTA            | 790px | 13561:76545   | Centred heading + app-store buttons     |
| Nav Tabs       | 790px | 13561:77617   | Simple top-tab navigation + body copy   |
| Stats          | 790px | 13561:77668   | Segmented tab nav + 2×3 statistics grid |
| Testimonial    | 790px | 13567:76479   | 2×2 testimonial grid                    |
| Crypto         | 384px | 13567:76480   | Wallet-connect list card                |

> All images use stable CDN URLs (ui-avatars.com, picsum.photos, simpleicons.org) — no TTL, no local hosting required.

### Border-radius note
These Figma variants use \`border-radius: 8px\`, which differs from the \`var(--radius-xl, 16px)\` used by the \`.card\` CSS class in Card/Basics. Inline styles are used here for Figma parity.

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
};

/* ═══════════════════════════════════════════════════════════
   USER PROFILE CARD  — node 13559:76692
═══════════════════════════════════════════════════════════ */
/**
 * Centered avatar, name/role, "Add friend" + "Message" buttons.
 * Three-dots menu in the top-right corner.
 *
 * **QA checklist**
 * - Avatar: 96px circle, 1px border var(--color-border-default), shadow-md
 * - "Add friend": bg #42389d (brand/800), rounded-12px, 12px medium, white
 * - "Message": no bg-fill, border 1px var(--color-bg-tertiary), text var(--color-text-heading), 12px medium
 * - Card pt-16px px-16px pb-40px (asymmetric padding — more space at bottom)
 */
export const UserProfileCard = {
    name: 'User profile card',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Social profile card. Centred avatar, name, role, and two action buttons.
**Node:** 13559:76692 | Width: 384px | Shadow: shadow-md

**✅ Do** — use for team member profiles, account pages, and "people" directory cards.
**✅ Do** — keep the avatar 96 px circle with \`border: 1px solid var(--color-border-default)\` and shadow-md.
**❌ Don't** — use this layout for showing metrics or data — use Card/KPI instead.

**QA** — Avatar: 96 px circle, \`var(--color-border-default)\` border, shadow-md · "Add friend": bg \`#42389d\` (brand/800), rounded-12 px, 12 px medium · "Message": no fill, \`var(--color-bg-tertiary)\` border, \`var(--color-text-heading)\` text · Card padding: \`16px 16px 40px\` (asymmetric — more space at bottom).

**Approximations:** Three-dots icon is an inline SVG (Figma uses a raster vector).
        `,
      },
      source: {
        language: 'html',
        code: `<div style="width:384px;padding:16px 16px 40px;background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);">
  <!-- Three-dots menu -->
  <div style="display:flex;justify-content:flex-end;padding:10px;">⋯</div>
  <!-- Avatar + Name -->
  <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
    <img src="…" alt="Bonnie Green"
         style="width:96px;height:96px;border-radius:50%;border:1px solid var(--color-border-default);object-fit:cover;
                box-shadow:0 4px 6px 0 rgba(0,0,0,.1),0 2px 4px 0 rgba(0,0,0,.05);">
    <div style="text-align:center;">
      <p style="font-size:var(--text-xl);font-weight:var(--font-medium);color:#111928;margin:0;">Bonnie Green</p>
      <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin:0;">Visual Designer</p>
    </div>
  </div>
  <!-- Buttons -->
  <div style="display:flex;gap:12px;justify-content:center;padding-top:24px;">
    <button style="background:#42389d;color:#fff;font-size:var(--text-xs);font-weight:var(--font-medium);
                   padding:8px 12px;border-radius:12px;border:none;cursor:pointer;">Add friend</button>
    <button style="background:transparent;border:1px solid var(--color-bg-tertiary);color:var(--color-text-heading);
                   font-size:var(--text-xs);font-weight:var(--font-medium);padding:8px 12px;border-radius:12px;cursor:pointer;">Message</button>
  </div>
</div>`,
      },
    },
  },
  render: () => `
    <div style="${CARD_SHELL_MD};width:384px;padding:16px 16px 40px;">
      <!-- Three-dots menu -->
      <div style="display:flex;justify-content:flex-end;padding:10px;">
        ${DOTS_H}
      </div>
      <!-- Avatar + Name + Role -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="${IMG.bonnieGreen}" alt="Bonnie Green"
             style="width:96px;height:96px;border-radius:100px;border:1px solid var(--color-border-default);
                    object-fit:cover;
                    box-shadow:0 4px 6px 0 rgba(0,0,0,.1),0 2px 4px 0 rgba(0,0,0,.05);">
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;">
          <p style="font-size:var(--text-xl);font-weight:var(--font-medium);color:#111928;line-height:1.25;margin:0;">Bonnie Green</p>
          <p style="font-size:var(--text-sm);font-weight:var(--font-normal);color:var(--color-text-secondary);line-height:1.5;margin:0;">Visual Designer</p>
        </div>
      </div>
      <!-- Action buttons -->
      <div style="display:flex;gap:12px;justify-content:center;padding-top:24px;">
        <button style="background:#42389d;color:#fff;font-size:var(--text-xs);font-weight:var(--font-medium);line-height:1.5;
                       padding:8px 12px;border-radius:12px;border:none;cursor:pointer;white-space:nowrap;">
          Add friend
        </button>
        <button style="background:transparent;border:1px solid var(--color-bg-tertiary);color:var(--color-text-heading);
                       font-size:var(--text-xs);font-weight:var(--font-medium);line-height:1.5;
                       padding:8px 12px;border-radius:12px;cursor:pointer;white-space:nowrap;">
          Message
        </button>
      </div>
    </div>`,
};

/* ═══════════════════════════════════════════════════════════
   WITH FORM INPUTS  — node 13561:76495
═══════════════════════════════════════════════════════════ */
/**
 * Sign-in form card: email input, password input, remember-me checkbox,
 * lost-password link, primary CTA button, and "not registered" helper text.
 *
 * **QA checklist**
 * - Input bg: var(--color-bg-tertiary), border: 1px solid var(--color-border-default), border-radius: 8px, px-16px py-12px
 * - Email input has a mail icon (16px) left of the placeholder
 * - Checkbox: 16px square, bg var(--color-bg-tertiary), border 0.5px solid var(--color-border-default), border-radius 4px
 * - "Create account" button: bg #1447e6 (blue/700, NOT brand/800 purple), full width
 * - Shadow: 0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.1) — slightly different from other cards
 * - "Lost Password?" color: var(--color-primary) (blue/600), not brand purple
 */
export const WithFormInputs = {
    name: 'With form inputs',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Sign-in form card. Email + password inputs, checkbox row, CTA button, helper link.
**Node:** 13561:76495 | Width: 384px | Shadow: shadow-sm (0 1px 3px + 0 1px 2px)

**✅ Do** — use for authentication, onboarding, and sign-in flows embedded in a page layout.
**❌ Don't** — place this inside a modal — the card itself acts as the visual container.

**Key token differences vs other cards:** CTA button is \`#1447e6\` (blue/700) — **not** brand/800 purple · shadow-sm variant (lighter) · checkbox border: \`0.5 px solid var(--color-border-default)\`.

**QA** — Input: bg \`var(--color-bg-tertiary)\`, border \`1px solid var(--color-border-default)\`, rounded-8 px, \`px-16 py-12\` · Email input has a 16 px mail icon · "Create account" button: bg \`#1447e6\`, full width · "Lost Password?" link: \`var(--color-primary)\` (blue/600).

**Approximations:** Mail icon is Heroicons envelope inline SVG (Figma uses a 2-vector raster assembly).
        `,
      },
      source: {
        language: 'html',
        code: `<div style="width:384px;padding:32px;background:#fff;border-radius:8px;
             box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1);">
  <p style="font-size:var(--text-xl);font-weight:var(--font-medium);color:#111928;margin:0 0 24px;">Sign in to our platform</p>
  <!-- Email -->
  <div class="form-group">
    <label class="form-label">Your email</label>
    <div style="position:relative;">
      <!-- mail icon -->
      <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--color-text-secondary);">✉</span>
      <input class="form-input" type="email" placeholder="name@flowbite.com" style="padding-left:36px;">
    </div>
  </div>
  <!-- Password -->
  <div class="form-group">
    <label class="form-label">Password</label>
    <input class="form-input" type="password" placeholder="••••••••••">
  </div>
  <!-- Checkbox row -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;">
    <label style="display:flex;align-items:center;gap:8px;font-size:var(--text-sm);cursor:pointer;">
      <span class="iris-checkbox iris-checkbox--checked" role="checkbox" aria-checked="true"></span>
      Remember me
    </label>
    <a href="#" style="font-size:var(--text-sm);color:var(--color-primary);text-decoration:none;">Lost Password?</a>
  </div>
  <!-- CTA -->
  <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;margin-bottom:16px;">
    Create account
  </button>
  <p style="font-size:var(--text-sm);font-weight:var(--font-medium);margin:0;">
    <span style="color:var(--color-text-secondary);">Not registered? </span>
    <a href="#" style="color:var(--color-primary);text-decoration:none;">Create account</a>
  </p>
</div>`,
      },
    },
  },
  render: () => `
    <div style="width:384px;padding:32px;background:#fff;border-radius:8px;
                box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1);
                display:flex;flex-direction:column;gap:24px;">

      <p style="font-size:var(--text-xl);font-weight:var(--font-medium);color:#111928;line-height:1.5;margin:0;">
        Sign in to our platform
      </p>

      <!-- Inputs -->
      <div style="display:flex;flex-direction:column;gap:20px;">

        <!-- Email field -->
        <div class="form-group" style="margin-bottom:0;">
          <label class="form-label">Your email</label>
          <div style="position:relative;">
            <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--color-text-secondary);">${MAIL_ICON}</span>
            <input class="form-input" type="email" placeholder="name@flowbite.com" style="padding-left:36px;">
          </div>
        </div>

        <!-- Password field -->
        <div class="form-group" style="margin-bottom:0;">
          <label class="form-label">Password</label>
          <input class="form-input" type="password" placeholder="••••••••••">
        </div>
      </div>

      <!-- Checkbox row -->
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
          <span class="iris-checkbox" role="checkbox" aria-checked="false"></span>
          <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:#101828;">Remember me</span>
        </label>
        <a href="#" style="font-size:var(--text-sm);color:var(--color-primary);text-decoration:none;white-space:nowrap;">
          Lost Password?
        </a>
      </div>

      <!-- Button + helper -->
      <div style="display:flex;flex-direction:column;gap:16px;">
        <button class="btn btn-primary btn-md" style="width:100%;justify-content:center;">
          Create account
        </button>
        <p style="font-size:var(--text-sm);font-weight:var(--font-medium);margin:0;line-height:1.5;">
          <span style="color:var(--color-text-secondary);">Not registered?</span>
          <a href="#" style="color:var(--color-primary);text-decoration:none;"> Create account</a>
        </p>
      </div>

    </div>`,
};

/* ═══════════════════════════════════════════════════════════
   E-COMMERCE  — node 13561:76497
═══════════════════════════════════════════════════════════ */
/**
 * Product card: centered product image, title, 5 stars + rating badge, price + cart CTA.
 *
 * **QA checklist**
 * - Image: 275×174px, centered in a padded header area (px-16px py-24px)
 * - Stars: 5× yellow (var(--color-warning-primary))
 * - Badge: "5.0" — bg var(--color-primary) (blue/600), rounded-4px, 12px semibold white
 * - Price: 30px extrabold #111928
 * - "Add to cart": bg #42389d (brand/800), rounded-12px, 14px medium white, h-36px
 */
export const EcommerceCard = {
    name: 'E-commerce card',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Product card for e-commerce. Centered product photo, star rating with badge, price and cart CTA.
**Node:** 13561:76497 | Width: 384px | Shadow: shadow-md

**✅ Do** — use for product listings, marketplace items, or catalog grids.
**✅ Do** — keep the product image at 275 × 174 px with \`px-16 py-24\` header padding.
**❌ Don't** — use this card when the primary action is navigation rather than a purchase — use Card/Basics with a link instead.

**QA** — Image area: 275 × 174 px, centered, \`px-16 py-24\` · Stars: 5 × yellow \`var(--color-warning-primary)\` · Rating badge: bg \`var(--color-primary)\` (blue/600), rounded-4 px, 12 px semibold white · Price: 30 px extrabold \`#111928\` · "Add to cart": bg \`#42389d\` (brand/800), rounded-12 px, 14 px medium, h-36 px.

**Approximations:** Stars are inline SVG (Figma uses a raster star asset). Star color: \`var(--color-warning-primary)\` (old-colors/yellow/300).
        `,
      },
      source: {
        language: 'html',
        code: `<!-- E-commerce card (384px, shadow-md) -->
<div style="width:384px;background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
            box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);overflow:hidden;">
  <!-- Product image -->
  <div style="display:flex;justify-content:center;align-items:center;padding:24px 16px;">
    <img src="…" alt="Product name" style="width:275px;height:174px;object-fit:cover;">
  </div>
  <!-- Content -->
  <div style="display:flex;flex-direction:column;gap:20px;padding:0 20px 20px;">
    <!-- Title + stars -->
    <div style="display:flex;flex-direction:column;gap:8px;">
      <p style="font-size:var(--text-xl);font-weight:var(--font-semibold);color:#111928;margin:0;">Apple Watch Series 7 GPS</p>
      <div style="display:flex;align-items:center;gap:12px;">
        <!-- 5× yellow star SVGs (var(--color-warning-primary)) -->
        <span style="background:var(--color-primary);color:#fff;font-size:var(--text-xs);font-weight:var(--font-semibold);
                     padding:2px 4px;border-radius:4px;">5.0</span>
      </div>
    </div>
    <!-- Price + CTA -->
    <div style="display:flex;align-items:center;gap:10px;">
      <p style="flex:1;font-size:30px;font-weight:800;color:#111928;margin:0;">$599</p>
      <button style="background:#42389d;color:#fff;font-size:var(--text-sm);font-weight:var(--font-medium);
                     padding:8px 12px;height:36px;border-radius:12px;border:none;cursor:pointer;">
        Add to cart
      </button>
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () => `
    <div style="${CARD_SHELL_MD};width:384px;overflow:hidden;">

      <!-- Product image area -->
      <div style="display:flex;justify-content:center;align-items:center;padding:24px 16px;">
        <img src="${IMG.appleWatch}" alt="Apple Watch Series 7"
             style="width:275px;height:174px;object-fit:cover;display:block;">
      </div>

      <!-- Content -->
      <div style="display:flex;flex-direction:column;gap:20px;padding:0 20px 20px;">

        <!-- Title + stars -->
        <div style="display:flex;flex-direction:column;gap:8px;">
          <p style="font-size:var(--text-xl);font-weight:var(--font-semibold);color:#111928;line-height:1.25;margin:0;">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </p>
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="display:flex;gap:4px;">${STAR.repeat(5)}</div>
            <span style="background:var(--color-primary);color:#fff;font-size:var(--text-xs);font-weight:var(--font-semibold);
                         padding:2px 4px;border-radius:4px;line-height:12px;white-space:nowrap;">5.0</span>
          </div>
        </div>

        <!-- Price + CTA -->
        <div style="display:flex;align-items:center;gap:10px;">
          <p style="flex:1;font-size:30px;font-weight:800;color:#111928;line-height:1.25;margin:0;">$599</p>
          <button style="background:#42389d;color:#fff;font-size:var(--text-sm);font-weight:var(--font-medium);
                         padding:8px 12px;height:36px;border-radius:12px;border:none;cursor:pointer;
                         white-space:nowrap;line-height:1.5;">
            Add to cart
          </button>
        </div>

      </div>
    </div>`,
};

/* ═══════════════════════════════════════════════════════════
   CARD WITH LIST  — node 13561:77786
═══════════════════════════════════════════════════════════ */
/**
 * "Latest Customers" list card: header with View-all link + 6 avatar rows.
 *
 * **QA checklist**
 * - Shadow: shadow-sm (lighter than most cards — no border in Figma)
 * - Avatar: 32px circle, object-fit cover
 * - Divider between rows: 1px solid var(--color-border-default)
 * - Amount: 16px semibold right-aligned
 * - "View all" link: var(--color-primary), 16px medium
 * - Title "Latest Customers": 18px extrabold #111928
 */
export const CardWithList = {
    name: 'Card with list',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Customer list card. Header with "View all" link, then 6 rows: avatar + name/email + amount.
**Node:** 13561:77786 | Width: 384px | Shadow: shadow-sm (no border in Figma)

**✅ Do** — use for compact data rows inside a card (customers, transactions, recent activity).
**✅ Do** — keep row dividers at \`1px solid var(--color-border-default)\` to maintain visual separation without weight.
**❌ Don't** — use more than ~8 rows without pagination — the card should not become a scrollable list.

**QA** — No border (shadow-sm only) · Avatar: 32 px circle, \`object-fit: cover\` · Row divider: \`1px solid var(--color-border-default)\` · Amount: 16 px semibold, right-aligned · "View all" link: \`var(--color-primary)\`, 16 px medium · Title "Latest Customers": 18 px extrabold \`#111928\`.
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Card with List (384px, shadow-sm, no border) -->
<div style="background:#fff;border-radius:8px;box-shadow:0 1px 2px 0 rgba(0,0,0,.08);
            width:384px;padding:32px;display:flex;flex-direction:column;gap:16px;">
  <!-- Header -->
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <p style="font-size:18px;font-weight:800;color:#111928;margin:0;">Latest Customers</p>
    <a href="#" style="font-size:var(--text-base);font-weight:var(--font-medium);color:var(--color-primary);text-decoration:none;">View all</a>
  </div>
  <!-- Customer rows -->
  <div style="display:flex;flex-direction:column;">
    <!-- Row: repeat for each customer, add 1px var(--color-border-default) divider between rows -->
    <div style="display:flex;align-items:center;padding:16px 0;">
      <div style="display:flex;flex:1;align-items:center;gap:8px;min-width:0;">
        <img src="…" alt="Neil Sims"
             style="width:32px;height:32px;border-radius:100px;object-fit:cover;flex-shrink:0;">
        <div style="display:flex;flex-direction:column;min-width:0;">
          <span style="font-size:var(--text-base);font-weight:var(--font-semibold);color:#111928;">Neil Sims</span>
          <span style="font-size:var(--text-xs);color:var(--color-text-secondary);">email@example.com</span>
        </div>
      </div>
      <span style="font-size:var(--text-base);font-weight:var(--font-semibold);color:#111928;white-space:nowrap;">$367</span>
    </div>
    <!-- … repeat for 5 more customers … -->
  </div>
</div>`,
      },
    },
  },
  render: () => {
    const customers = [
      { img: IMG.neilSims,        name: 'Neil Sims',     email: 'email@example.com', amount: '$367'   },
      { img: IMG.bonnieGreenList, name: 'Bonnie Green',  email: 'email@example.com', amount: '$67'    },
      { img: IMG.michealGough,    name: 'Micheal Gough', email: 'email@example.com', amount: '$3467'  },
      { img: IMG.thomasLean,      name: 'Thomas Lean',   email: 'email@example.com', amount: '$2367'  },
      { img: IMG.lanaByrd,        name: 'Lana Byrd',     email: 'email@example.com', amount: '$367'   },
      { img: IMG.karenNelson,     name: 'Karen Nelson',  email: 'email@example.com', amount: '$1367'  },
    ];
    return `
    <div style="background:#fff;border-radius:8px;box-shadow:${SHADOW_SM};
                width:384px;padding:32px;display:flex;flex-direction:column;gap:16px;">

      <!-- Header -->
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <p style="font-size:18px;font-weight:800;color:#111928;line-height:1.5;margin:0;">
          Latest Customers
        </p>
        <a href="#" style="font-size:var(--text-base);font-weight:var(--font-medium);color:var(--color-primary);text-decoration:none;
                           white-space:nowrap;">View all</a>
      </div>

      <!-- Customer rows -->
      <div style="display:flex;flex-direction:column;">
        ${customers.map((c, i) => `
          ${i > 0 ? '<div style="height:1px;background:var(--color-border-default);"></div>' : ''}
          <div style="display:flex;align-items:center;padding:${i === customers.length - 1 ? '16px 0 0' : '16px 0'};">
            <div style="display:flex;flex:1;align-items:center;gap:8px;min-width:0;">
              <img src="${c.img}" alt="${c.name}"
                   style="width:32px;height:32px;border-radius:100px;object-fit:cover;flex-shrink:0;">
              <div style="display:flex;flex-direction:column;min-width:0;">
                <span style="font-size:var(--text-base);font-weight:var(--font-semibold);color:#111928;line-height:1.5;">${c.name}</span>
                <span style="font-size:var(--text-xs);color:var(--color-text-secondary);line-height:1.5;">${c.email}</span>
              </div>
            </div>
            <span style="font-size:var(--text-base);font-weight:var(--font-semibold);color:#111928;line-height:1.5;
                         white-space:nowrap;">${c.amount}</span>
          </div>`).join('')}
      </div>

    </div>`;
  },
};

/* ═══════════════════════════════════════════════════════════
   PRICING CARD  — node 13561:77822
═══════════════════════════════════════════════════════════ */
/**
 * Pricing plan card: plan name, price, feature checklist (enabled + disabled), CTA button.
 *
 * **QA checklist**
 * - Plan label: 20px medium #6b7280
 * - Price: 48px extrabold #111928 + "/month" 18px medium #6b7280
 * - Enabled items (3): blue check-circle, normal text
 * - Disabled items (4): gray check-circle + line-through text
 * - "Choose plan" button: full width, bg #42389d, rounded-12px
 *
 * **Approximations:** Check-circle icons are inline SVG (Figma uses raster vectors).
 */
export const PricingCard = {
    name: 'Pricing card',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Standard pricing plan card. Plan name, price, feature checklist with enabled/disabled items, CTA.
**Node:** 13561:77822 | Width: 384px | Shadow: shadow-md

**✅ Do** — use for plan comparison pages, feature matrices, and upgrade prompts.
**✅ Do** — keep disabled feature items visually muted (gray check + line-through text) to signal unavailability without removing them from the list.
**❌ Don't** — list more than ~7 features — it creates excessive vertical scroll within the card.

**QA** — Plan label: 20 px medium \`#6b7280\` · Price: 48 px extrabold \`#111928\` + "/month" 18 px medium \`#6b7280\` · Enabled (3): blue check-circle, normal text · Disabled (4): gray check-circle, line-through text · "Choose plan" button: full width, bg \`#42389d\`, rounded-12 px.

**Approximations:** Check-circle icons are inline SVG (Figma uses raster vectors at \`inset:10%\`).
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Pricing card (384px, shadow-md) -->
<div style="width:384px;background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
            box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
            padding:32px;overflow:hidden;">
  <div style="display:flex;flex-direction:column;gap:28px;align-items:center;">
    <!-- Plan + price -->
    <div style="display:flex;flex-direction:column;gap:16px;">
      <p style="font-size:var(--text-xl);font-weight:var(--font-medium);color:var(--color-text-secondary);margin:0;">Standard plan</p>
      <div style="display:flex;align-items:flex-end;gap:10px;">
        <span style="font-size:48px;font-weight:800;color:#111928;line-height:48px;">$49</span>
        <span style="font-size:var(--text-lg);font-weight:var(--font-medium);color:var(--color-text-secondary);margin-bottom:2px;">/month</span>
      </div>
    </div>
    <!-- Feature list: enabled (blue check) + disabled (gray check + line-through) -->
    <div style="display:flex;flex-direction:column;gap:16px;width:100%;">
      <!-- Enabled item -->
      <div style="display:flex;align-items:center;gap:12px;">
        <!-- check-circle SVG fill:var(--color-primary) -->
        <span style="font-size:var(--text-base);color:var(--color-text-secondary);">2 team members</span>
      </div>
      <!-- Disabled item -->
      <div style="display:flex;align-items:center;gap:12px;">
        <!-- check-circle SVG fill:var(--color-border-light) -->
        <span style="font-size:var(--text-base);color:var(--color-text-secondary);text-decoration:line-through;">Sketch Files</span>
      </div>
    </div>
    <!-- CTA -->
    <button style="width:100%;background:#42389d;color:#fff;font-size:var(--text-sm);font-weight:var(--font-medium);
                   padding:10px 20px;border-radius:12px;border:none;cursor:pointer;">
      Choose plan
    </button>
  </div>
</div>`,
      },
    },
  },
  render: () => {
    const enabledItems  = ['2 team members', '20GB Cloud storage', 'Integration help'];
    const disabledItems = ['Sketch Files', 'API Access', 'Complete documentation', '24×7 phone & email support'];
    const listItem = (text, enabled) => `
      <div style="display:flex;align-items:center;gap:12px;padding:2px 0;">
        ${CHECK(enabled)}
        <span style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.5;
                     ${enabled ? '' : 'text-decoration:line-through;'}">${text}</span>
      </div>`;
    return `
    <div style="${CARD_SHELL_MD};width:384px;padding:32px;overflow:hidden;">
      <div style="display:flex;flex-direction:column;gap:28px;align-items:center;">

        <!-- Plan + price -->
        <div style="display:flex;flex-direction:column;gap:16px;">
          <p style="font-size:var(--text-xl);font-weight:var(--font-medium);color:var(--color-text-secondary);line-height:1.5;margin:0;width:320px;">
            Standard plan
          </p>
          <div style="display:flex;align-items:flex-end;gap:10px;width:320px;">
            <span style="font-size:48px;font-weight:800;color:#111928;line-height:48px;white-space:nowrap;">$49</span>
            <span style="font-size:var(--text-lg);font-weight:var(--font-medium);color:var(--color-text-secondary);line-height:1.5;margin-bottom:2px;">/month</span>
          </div>
        </div>

        <!-- Feature list -->
        <div style="display:flex;flex-direction:column;gap:16px;width:100%;">
          ${enabledItems.map(t  => listItem(t, true)).join('')}
          ${disabledItems.map(t => listItem(t, false)).join('')}
        </div>

        <!-- CTA -->
        <button style="width:100%;background:#42389d;color:#fff;font-size:var(--text-sm);font-weight:var(--font-medium);
                       padding:10px 20px;border-radius:12px;border:none;cursor:pointer;
                       min-height:41px;line-height:1.5;">
          Choose plan
        </button>

      </div>
    </div>`;
  },
};

/* ═══════════════════════════════════════════════════════════
   CTA CARD  — node 13561:76545
═══════════════════════════════════════════════════════════ */
/**
 * Wide CTA card: centered heading + body, two app-download buttons (Google Play, App Store).
 *
 * **QA checklist**
 * - Width: 790px, centered content, padding 32px
 * - Title: 30px bold #111928
 * - Body: 18px regular #6b7280, centered
 * - Buttons: bg #111928, rounded-8px, px-16px py-12px, gap-10px
 * - Button icons: 38px raster assets (Google Play, Apple logo)
 * - Button text: two lines — "Download on the" (12px reg) + brand name (18px bold)
 */
export const CTACard = {
    name: 'CTA card',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Wide call-to-action card. Centered heading and body copy with two app-store download buttons.
**Node:** 13561:76545 | Width: 790px | Shadow: shadow-md

**✅ Do** — use for full-width promotional banners in a dashboard or landing section.
**✅ Do** — keep the two app-store buttons side-by-side on desktop; stack them on mobile.
**❌ Don't** — use this width in a narrow sidebar or column — it requires at least 600 px to render correctly.

**QA** — Width: 790 px, centered content, \`padding: 32 px\` · Title: 30 px bold \`#111928\` · Body: 18 px regular \`#6b7280\`, centered · Buttons: bg \`#111928\`, rounded-8 px, \`px-16 py-12\`, gap 10 px · Button text: two lines — "Download on the" (12 px reg) + brand name (18 px bold).

**Approximations:** App-store button icons use SimpleIcons CDN (stable, no TTL).
        `,
      },
      source: {
        language: 'html',
        code: `<!-- CTA card (790px, shadow-md) -->
<div style="width:790px;background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
            box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);
            padding:32px;overflow:hidden;">
  <div style="display:flex;flex-direction:column;gap:20px;align-items:center;text-align:center;">
    <!-- Heading + body -->
    <p style="font-size:30px;font-weight:700;color:#111928;margin:0;">Work fast from anywhere</p>
    <p style="font-size:18px;color:var(--color-text-secondary);line-height:1.5;margin:0;">
      Stay up to date and move work forward with Flowbite on iOS &amp; Android.</p>
    <!-- App-store buttons: bg #111928, rounded-8px -->
    <div style="display:flex;gap:16px;">
      <div style="display:flex;align-items:center;gap:10px;background:#111928;
                  padding:12px 16px;border-radius:8px;cursor:pointer;">
        <img src="…google-play-icon…" alt="Google Play" style="width:38px;height:38px;object-fit:contain;">
        <div style="display:flex;flex-direction:column;text-align:left;color:#fff;">
          <span style="font-size:var(--text-xs);font-weight:400;">Download on the</span>
          <span style="font-size:18px;font-weight:700;">Google Play</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;background:#111928;
                  padding:12px 16px;border-radius:8px;cursor:pointer;">
        <img src="…apple-logo…" alt="App Store" style="width:38px;height:38px;object-fit:contain;">
        <div style="display:flex;flex-direction:column;text-align:left;color:#fff;">
          <span style="font-size:var(--text-xs);font-weight:400;">Download on the</span>
          <span style="font-size:18px;font-weight:700;">AppStore</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () => `
    <div style="${CARD_SHELL_MD};width:790px;padding:32px;overflow:hidden;">
      <div style="display:flex;flex-direction:column;gap:20px;align-items:center;text-align:center;">

        <!-- Heading + body -->
        <div style="display:flex;flex-direction:column;gap:8px;width:100%;">
          <p style="font-size:30px;font-weight:700;color:#111928;line-height:1.25;margin:0;">
            Work fast from anywhere
          </p>
          <p style="font-size:18px;font-weight:400;color:var(--color-text-secondary);line-height:1.5;margin:0;">
            Stay up to date and move work forward with Flowbite on iOS &amp; Android. Download the app today.
          </p>
        </div>

        <!-- App store buttons -->
        <div style="display:flex;gap:16px;">

          <!-- Google Play -->
          <div style="display:flex;align-items:center;gap:10px;background:#111928;
                      padding:12px 16px;border-radius:8px;cursor:pointer;">
            <img src="${IMG.googlePlay}" alt="Google Play"
                 style="width:38px;height:38px;object-fit:contain;flex-shrink:0;">
            <div style="display:flex;flex-direction:column;text-align:left;color:#fff;white-space:nowrap;">
              <span style="font-size:var(--text-xs);font-weight:400;line-height:12px;">Download on the</span>
              <span style="font-size:18px;font-weight:700;line-height:1.25;">Google Play</span>
            </div>
          </div>

          <!-- App Store -->
          <div style="display:flex;align-items:center;gap:10px;background:#111928;
                      padding:12px 16px;border-radius:8px;cursor:pointer;">
            <img src="${IMG.appleLogo}" alt="App Store"
                 style="width:38px;height:38px;object-fit:contain;flex-shrink:0;">
            <div style="display:flex;flex-direction:column;text-align:left;color:#fff;white-space:nowrap;">
              <span style="font-size:var(--text-xs);font-weight:400;line-height:12px;">Download on the</span>
              <span style="font-size:18px;font-weight:700;line-height:1.25;">AppStore</span>
            </div>
          </div>

        </div>
      </div>
    </div>`,
};

/* ═══════════════════════════════════════════════════════════
   NAV TABS CARD  — node 13561:77617
═══════════════════════════════════════════════════════════ */
/**
 * Card with a simple top-tab navigation bar + body copy + "Learn more" link.
 *
 * **QA checklist**
 * - Tab row: bg var(--color-bg-tertiary), border-bottom 1px var(--color-border-default), p-16px
 * - Active tab "Services": color var(--color-primary) (blue/600), medium 14px
 * - Inactive tabs "About", "Facts": color #6b7280, medium 14px
 * - Tab gap: 32px
 * - Body: p-32px, heading 30px extrabold, body 18px regular
 * - "Learn more" link + chevron-right: color var(--color-primary)
 *
 * **Approximations:** Chevron-right is inline SVG.
 */
export const NavTabsCard = {
    name: 'Nav tabs card',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Card with simple tab navigation above the content body.
**Node:** 13561:77617 | Width: 790px | Shadow: shadow-md

**✅ Do** — use when a card needs to switch between 2–4 content sections (About / Services / Facts).
**❌ Don't** — use more than 4–5 tabs in this pattern — use a full Tabs component at page level instead.

**QA** — Tab strip: bg \`var(--color-bg-tertiary)\`, border-bottom \`1px var(--color-border-default)\`, \`p-16 px\` · Active tab: color \`var(--color-primary)\` (blue/600), 14 px medium · Inactive tabs: \`#6b7280\`, 14 px medium · Tab gap: 32 px · Body: \`p-32 px\`, heading 30 px extrabold, body 18 px regular · "Learn more" link + chevron-right: color \`var(--color-primary)\`.

Active tab color: \`var(--color-primary)\` (blue/600). Tab strip bg: \`var(--color-bg-tertiary)\`.
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Nav Tabs card (790px, shadow-md) -->
<div style="width:790px;background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
            box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);overflow:hidden;">
  <!-- Tab row: bg var(--color-bg-tertiary), border-bottom 1px var(--color-border-default) -->
  <div style="background:var(--color-bg-default);border-bottom:1px solid var(--color-border-default);padding:16px;">
    <div style="display:flex;gap:32px;">
      <!-- Inactive tab: color #6b7280, medium 14px -->
      <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);cursor:pointer;">About</span>
      <!-- Active tab: color var(--color-primary) (blue/600) -->
      <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-primary);cursor:pointer;">Services</span>
      <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);cursor:pointer;">Facts</span>
    </div>
  </div>
  <!-- Body: padding 32px -->
  <div style="padding:32px;">
    <p style="font-size:30px;font-weight:800;color:#111928;margin:0 0 8px;">
      Powering innovation at 200,000+ companies</p>
    <p style="font-size:18px;color:var(--color-text-secondary);line-height:1.5;margin:0 0 12px;">Body copy here.</p>
    <!-- "Learn more" + chevron-right: color var(--color-primary) -->
    <div style="display:flex;align-items:center;gap:4px;">
      <a href="#" style="font-size:var(--text-base);font-weight:var(--font-medium);color:var(--color-primary);text-decoration:none;">Learn more</a>
      <!-- chevron-right SVG, stroke var(--color-primary) -->
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () => `
    <div style="${CARD_SHELL_MD};width:790px;overflow:hidden;">

      <!-- Tab row -->
      <div style="background:var(--color-bg-default);border-bottom:1px solid var(--color-border-default);padding:16px;">
        <div style="display:flex;gap:32px;">
          <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);line-height:1.5;cursor:pointer;">About</span>
          <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-primary);line-height:1.5;cursor:pointer;">Services</span>
          <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);line-height:1.5;cursor:pointer;">Facts</span>
        </div>
      </div>

      <!-- Body -->
      <div style="padding:32px;">
        <div style="display:flex;flex-direction:column;gap:8px;">
          <p style="font-size:30px;font-weight:800;color:#111928;line-height:1.25;margin:0;">
            Powering innovation &amp; trust at 200,000+ companies worldwide
          </p>
          <p style="font-size:18px;font-weight:400;color:var(--color-text-secondary);line-height:1.5;margin:0;">
            Empower Developers, IT Ops, and business teams to collaborate at high velocity.
            Respond to changes and deliver great customer and employee service experiences fast.
          </p>
          <div style="display:flex;align-items:center;gap:4px;margin-top:4px;">
            <a href="#" style="font-size:var(--text-base);font-weight:var(--font-medium);color:var(--color-primary);text-decoration:none;
                               white-space:nowrap;">Learn more</a>
            ${CHEVRON_RIGHT}
          </div>
        </div>
      </div>

    </div>`,
};

/* ═══════════════════════════════════════════════════════════
   STATS CARD (Type11)  — node 13561:77668
═══════════════════════════════════════════════════════════ */
/**
 * Segmented tab navigation + 2×3 statistics grid.
 * Named "Type11" in Figma.
 *
 * **QA checklist**
 * - Tab row: 3 equal columns separated by 1px var(--color-border-default) vertical dividers
 * - Active tab "Statistics": bg var(--color-bg-tertiary), color var(--color-primary), medium 14px
 * - Inactive tabs: bg var(--color-bg-tertiary), color #6b7280, medium 14px
 * - Stats: 30px extrabold #111928 + 16px regular #6b7280 label, centered
 * - Stats grid: 2 rows × 3 columns, gap 32px
 */
export const StatsCard = {
    name: 'Stats card (segmented tabs)',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Card with a segmented tab navigation (Statistics / Services / FAQ) and a 2×3 statistics grid.
Named "Type11" in Figma. **Node:** 13561:77668 | Width: 790px | Shadow: shadow-md

**✅ Do** — use for dashboard summary sections that group multiple KPIs under named segments.
**✅ Do** — keep stats to 6 (2 rows × 3 columns) — more than 6 items should use a separate Table.
**❌ Don't** — use this pattern for a single metric — use Card/KPI instead.

**QA** — Tab row: 3 equal columns, separated by \`1px var(--color-border-default)\` vertical dividers · Active tab: bg \`var(--color-bg-tertiary)\`, color \`var(--color-primary)\`, 14 px medium · Inactive tabs: bg \`var(--color-bg-tertiary)\`, \`#6b7280\` · Stats: 30 px extrabold \`#111928\` value + 16 px regular \`#6b7280\` label, centered · Grid: 2 rows × 3 columns, gap 32 px.
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Stats card (790px, shadow-md) -->
<div style="width:790px;background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
            box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);overflow:hidden;">
  <!-- Segmented tab row: 3 equal columns with 1px var(--color-border-default) vertical dividers -->
  <div style="display:flex;background:var(--color-bg-default);border-radius:8px 8px 0 0;overflow:hidden;">
    <!-- Active tab: color var(--color-primary) -->
    <div style="flex:1;display:flex;justify-content:center;padding:16px;border-right:1px solid var(--color-border-default);">
      <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-primary);">Statistics</span>
    </div>
    <div style="flex:1;display:flex;justify-content:center;padding:16px;border-right:1px solid var(--color-border-default);">
      <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);">Services</span>
    </div>
    <div style="flex:1;display:flex;justify-content:center;padding:16px;">
      <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);">FAQ</span>
    </div>
  </div>
  <!-- Stats grid: 2 rows × 3 columns, centered text -->
  <div style="padding:32px;">
    <div style="display:flex;flex-direction:column;gap:32px;text-align:center;">
      <div style="display:flex;justify-content:space-between;">
        <!-- Stat cell: value (30px extrabold #111928) + label (16px regular #6b7280) -->
        <div style="display:flex;flex-direction:column;flex:1;">
          <span style="font-size:30px;font-weight:800;color:#111928;">73M+</span>
          <span style="font-size:var(--text-base);color:var(--color-text-secondary);">Developers</span>
        </div>
        <!-- … repeat for 2 more cells … -->
      </div>
      <!-- Row 2: 3 more stat cells -->
    </div>
  </div>
</div>`,
      },
    },
  },
  render: () => {
    const stats = [
      { value: '73M+',  label: 'Developers'            },
      { value: '100M+', label: 'Public repositories'    },
      { value: '1000s', label: 'Open source projects'   },
      { value: '1B+',   label: 'Contributors'           },
      { value: '90+',   label: 'Fortune 100 companies'  },
      { value: '4M+',   label: 'Organizations'          },
    ];
    const statCell = ({ value, label }) => `
      <div style="display:flex;flex-direction:column;align-items:center;flex:1;">
        <span style="font-size:30px;font-weight:800;color:#111928;line-height:1.25;">${value}</span>
        <span style="font-size:var(--text-base);font-weight:400;color:var(--color-text-secondary);line-height:1.5;">${label}</span>
      </div>`;
    return `
    <div style="${CARD_SHELL_MD};width:790px;overflow:hidden;">

      <!-- Segmented tab row -->
      <div style="display:flex;background:var(--color-bg-default);box-shadow:0 1px 2px 0 rgba(0,0,0,.08);overflow:hidden;border-radius:8px 8px 0 0;">
        <div style="flex:1;display:flex;justify-content:center;align-items:center;padding:16px;border-right:1px solid var(--color-border-default);">
          <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-primary);white-space:nowrap;">Statistics</span>
        </div>
        <div style="flex:1;display:flex;justify-content:center;align-items:center;padding:16px;border-right:1px solid var(--color-border-default);">
          <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);white-space:nowrap;">Services</span>
        </div>
        <div style="flex:1;display:flex;justify-content:center;align-items:center;padding:16px;">
          <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);white-space:nowrap;">FAQ</span>
        </div>
      </div>

      <!-- Stats grid -->
      <div style="padding:32px;">
        <div style="padding:32px;display:flex;flex-direction:column;gap:32px;text-align:center;">
          <div style="display:flex;justify-content:space-between;">
            ${stats.slice(0,3).map(statCell).join('')}
          </div>
          <div style="display:flex;justify-content:space-between;">
            ${stats.slice(3).map(statCell).join('')}
          </div>
        </div>
      </div>

    </div>`;
  },
};

/* ═══════════════════════════════════════════════════════════
   TESTIMONIAL CARD  — node 13567:76479
═══════════════════════════════════════════════════════════ */
/**
 * 2×2 testimonial grid: quote title + body text + author avatar/name/role.
 * Cells divided by 1px var(--color-border-default) borders (vertical between columns, horizontal between rows).
 *
 * **QA checklist**
 * - Cell padding: 32px
 * - Title: 18px semibold #111928
 * - Quote: 16px regular #6b7280, text-center
 * - Author: 32px avatar (circle, border 1px var(--color-border-default)) + 18px semibold name + 14px medium role
 * - Overall shadow: shadow-sm (lighter)
 */
export const TestimonialCard = {
    name: 'Testimonial card',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
2×2 grid of testimonial cells, each with a heading, quote, and attributed author.
**Node:** 13567:76479 | Width: 790px | Shadow: shadow-sm

**✅ Do** — use for social proof sections on marketing or onboarding pages.
**✅ Do** — vary quote length across the 4 cells to test layout stability at different text lengths.
**❌ Don't** — truncate quotes with ellipsis — if a quote is too long, shorten it at the source.

**QA** — Cell padding: 32 px · Title: 18 px semibold \`#111928\` · Quote: 16 px regular \`#6b7280\`, text-center · Author avatar: 32 px circle, \`border: 1px solid var(--color-border-default)\` · Author name: 18 px semibold · Author role: 14 px medium · Shadow: shadow-sm (lighter than shadow-md cards).
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Testimonial card (790px, shadow-sm) -->
<div style="width:790px;background:var(--color-bg-surface);border:1px solid var(--color-border-default);border-radius:8px;
            box-shadow:0 1px 2px 0 rgba(0,0,0,.08);overflow:hidden;">
  <!-- Row 1: 2 cells side by side with 1px vertical divider -->
  <div style="display:flex;border-radius:8px 8px 0 0;overflow:hidden;">
    <!-- Cell: padding 32px, centered content -->
    <div style="flex:1;display:flex;flex-direction:column;justify-content:center;
                padding:32px;align-items:center;gap:24px;">
      <p style="font-size:18px;font-weight:600;color:#111928;text-align:center;margin:0;">
        Solid foundation for any project</p>
      <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.5;text-align:center;margin:0;">
        "If you care for your time, I hands down would go with this."</p>
      <!-- Author: 32px avatar circle + name + role -->
      <div style="display:flex;align-items:center;gap:16px;">
        <img src="…" alt="Neil Sims"
             style="width:32px;height:32px;border-radius:100px;border:1px solid var(--color-border-default);object-fit:cover;">
        <div>
          <span style="font-size:18px;font-weight:600;color:#111928;display:block;">Neil Sims</span>
          <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);">CEO, Flowbite</span>
        </div>
      </div>
    </div>
    <div style="width:1px;background:var(--color-border-default);flex-shrink:0;"></div>
    <!-- Second cell — same structure … -->
  </div>
  <!-- Row 2: border-top 1px var(--color-border-default) + 2 more cells -->
</div>`,
      },
    },
  },
  render: () => {
    const testimonials = [
      { img: IMG.neilSimsTest,     name: 'Neil Sims',     role: 'CEO, Flowbite', title: 'Solid foundation for any project',          quote: 'If you care for your time, I hands down would go with this."'                                                                 },
      { img: IMG.michealGoughTest, name: 'Micheal Gough', role: 'CEO, Flowbite', title: 'Perfect choice for a SaaS application',     quote: 'Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"'  },
      { img: IMG.heleneEngels,     name: 'Helene Engels', role: 'CEO, Flowbite', title: 'Mindblowing workflow',                       quote: 'Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."'             },
      { img: IMG.karenNelsonTest,  name: 'Karen Nelson',  role: 'CEO, Flowbite', title: 'Efficient Collaborating',                    quote: 'You have many examples that can be used to create a fast prototype for your team."'                                         },
    ];
    const cell = (t, border) => `
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;
                  padding:32px;${border}">
        <div style="display:flex;flex-direction:column;gap:24px;align-items:center;">
          <div style="display:flex;flex-direction:column;gap:16px;align-items:center;width:100%;">
            <p style="font-size:18px;font-weight:600;color:#111928;line-height:1.25;
                      margin:0;text-align:center;">${t.title}</p>
            <p style="font-size:var(--text-base);font-weight:400;color:var(--color-text-secondary);line-height:1.5;
                      margin:0;text-align:center;">${t.quote}</p>
          </div>
          <div style="display:flex;align-items:center;gap:16px;justify-content:center;">
            <img src="${t.img}" alt="${t.name}"
                 style="width:32px;height:32px;border-radius:100px;border:1px solid var(--color-border-default);
                        object-fit:cover;flex-shrink:0;">
            <div style="display:flex;flex-direction:column;gap:4px;white-space:nowrap;">
              <span style="font-size:18px;font-weight:600;color:#111928;line-height:1.25;">${t.name}</span>
              <span style="font-size:var(--text-sm);font-weight:var(--font-medium);color:var(--color-text-secondary);line-height:1.25;">${t.role}</span>
            </div>
          </div>
        </div>
      </div>`;
    return `
    <div style="${CARD_SHELL_SM};width:790px;overflow:hidden;border-radius:8px;">
      <!-- Row 1 -->
      <div style="display:flex;border-radius:8px 8px 0 0;overflow:hidden;">
        ${cell(testimonials[0], '')}
        <div style="width:1px;background:var(--color-border-default);flex-shrink:0;"></div>
        ${cell(testimonials[1], '')}
      </div>
      <!-- Row 2 -->
      <div style="display:flex;border-radius:0 0 8px 8px;overflow:hidden;">
        ${cell(testimonials[2], 'border-top:1px solid var(--color-border-default);')}
        <div style="width:1px;background:var(--color-border-default);flex-shrink:0;"></div>
        ${cell(testimonials[3], 'border-top:1px solid var(--color-border-default);')}
      </div>
    </div>`;
  },
};

/* ═══════════════════════════════════════════════════════════
   CRYPTO CARD  — node 13567:76480
═══════════════════════════════════════════════════════════ */
/**
 * Wallet-connect card: heading + description, 5 wallet rows, helper text.
 *
 * **QA checklist**
 * - Card: no border (shadow-sm only), p-24px, gap-16px
 * - Title: 18px semibold #111928
 * - Description: 14px regular #6b7280
 * - Wallet row: bg var(--color-bg-tertiary), p-12px, rounded-8px, icon (16–18px) + name bold
 * - MetaMask row has a "Popular" badge: bg var(--color-border-default), rounded-6px, 12px medium #6b7280
 * - Helper text: question icon + 12px regular #6b7280
 *
 * **Approximations:**
 * - Wallet icons use SimpleIcons CDN (stable, no TTL); Fortmatic approximated
 * - Question-circle is inline SVG
 */
export const CryptoCard = {
    name: 'Crypto card — connect wallet',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Wallet-connect modal card. Lists 5 provider options; MetaMask has a "Popular" badge.
**Node:** 13567:76480 | Width: 384px | Shadow: shadow-sm (no border)

**✅ Do** — use for wallet/account connection flows where the user picks from a list of providers.
**✅ Do** — keep the "Popular" badge on the most-used provider to reduce decision friction.
**❌ Don't** — add more than 6–7 wallet options without a search/filter — the list becomes unwieldy.

**QA** — No border (shadow-sm only): \`box-shadow: 0 1px 2px rgba(0,0,0,.08)\` · Card: \`p-24 gap-16\` · Title: 18 px semibold \`#111928\` · Description: 14 px regular \`#6b7280\` · Wallet row: bg \`var(--color-bg-tertiary)\`, \`p-12\`, rounded-8 px, icon 16–18 px + name bold · MetaMask "Popular" badge: bg \`var(--color-border-default)\`, rounded-6 px, 12 px medium \`#6b7280\` · Helper text: question icon + 12 px regular \`#6b7280\`.

**Approximations:** Question-circle icon is inline SVG. Wallet icons use SimpleIcons CDN (stable). Fortmatic uses a text-badge placeholder.
        `,
      },
      source: {
        language: 'html',
        code: `<!-- Crypto card — Connect wallet (384px, shadow-sm, no border) -->
<div style="background:#fff;border-radius:8px;box-shadow:0 1px 2px 0 rgba(0,0,0,.08);
            width:384px;padding:24px;display:flex;flex-direction:column;gap:16px;">
  <!-- Header -->
  <div>
    <p style="font-size:18px;font-weight:600;color:#111928;margin:0 0 10px;">Connect wallet</p>
    <p style="font-size:var(--text-sm);color:var(--color-text-secondary);line-height:1.5;margin:0;">
      Connect with one of our available wallet providers or create a new one.</p>
  </div>
  <!-- Wallet list -->
  <div style="display:flex;flex-direction:column;gap:12px;">
    <!-- Wallet row: bg var(--color-bg-tertiary), padding 12px, rounded-8px -->
    <div style="display:flex;align-items:center;gap:12px;background:var(--color-bg-default);
                padding:12px;border-radius:8px;cursor:pointer;">
      <img src="…metamask-icon…" alt="MetaMask" style="width:18px;height:17px;object-fit:contain;">
      <span style="flex:1;font-size:var(--text-base);font-weight:700;color:#111928;">MetaMask</span>
      <!-- "Popular" badge: bg var(--color-border-default), rounded-6px, 12px medium #6b7280 -->
      <span style="background:var(--color-border-default);font-size:var(--text-xs);font-weight:var(--font-medium);color:var(--color-text-secondary);
                   padding:2px 10px;border-radius:6px;">Popular</span>
    </div>
    <!-- … repeat for 4 more wallets (no Popular badge) … -->
  </div>
  <!-- Helper text: question-circle icon + 12px text -->
  <div style="display:flex;align-items:center;gap:6px;">
    <!-- question-circle SVG, stroke #6b7280 -->
    <span style="font-size:var(--text-xs);color:var(--color-text-secondary);">Why do I need to connect with my wallet?</span>
  </div>
</div>`,
      },
    },
  },
  render: () => {
    const wallets = [
      { img: IMG.metamask,      name: 'MetaMask',        w: 18,  h: 17, popular: true  },
      { img: IMG.coinbase,      name: 'Coinbase Wallet', w: 16,  h: 16, popular: false },
      { img: IMG.opera,         name: 'Opera Wallet',    w: 16,  h: 16, popular: false },
      { img: IMG.walletconnect, name: 'WalletConnect',   w: 18,  h: 18, popular: false },
      { img: IMG.fortmatic,     name: 'Fortmatic',       w: 16,  h: 16, popular: false },
    ];
    return `
    <div style="background:#fff;border-radius:8px;box-shadow:${SHADOW_SM};
                width:384px;padding:24px;display:flex;flex-direction:column;gap:16px;">

      <!-- Header -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        <p style="font-size:18px;font-weight:600;color:#111928;line-height:1.5;margin:0;">
          Connect wallet
        </p>
        <p style="font-size:var(--text-sm);font-weight:var(--font-normal);color:var(--color-text-secondary);line-height:1.5;margin:0;">
          Connect with one of our available wallet providers or create a new one.
        </p>
      </div>

      <!-- Card body -->
      <div style="display:flex;flex-direction:column;gap:16px;overflow:hidden;">

        <!-- Wallet list -->
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${wallets.map(w => `
            <div style="display:flex;align-items:center;gap:12px;background:var(--color-bg-default);
                        padding:12px;border-radius:8px;cursor:pointer;">
              <div style="display:flex;flex:1;align-items:center;gap:12px;min-width:0;">
                <img src="${w.img}" alt="${w.name}"
                     style="width:${w.w}px;height:${w.h}px;object-fit:contain;flex-shrink:0;">
                <span style="font-size:var(--text-base);font-weight:700;color:#111928;line-height:1.5;">
                  ${w.name}
                </span>
              </div>
              ${w.popular ? `<span style="background:var(--color-border-default);font-size:var(--text-xs);font-weight:var(--font-medium);
                                         color:var(--color-text-secondary);padding:2px 10px;border-radius:6px;
                                         white-space:nowrap;line-height:1.5;">Popular</span>` : ''}
            </div>`).join('')}
        </div>

        <!-- Helper text -->
        <div style="display:flex;align-items:center;gap:6px;">
          ${QUESTION}
          <span style="font-size:var(--text-xs);font-weight:400;color:var(--color-text-secondary);line-height:1.5;">
            Why do I need to connect with my wallet?
          </span>
        </div>

      </div>
    </div>`;
  },
};
