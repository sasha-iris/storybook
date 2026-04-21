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
 * ⚠️ Figma asset URLs expire after 7 days from extraction.
 *    Host images locally before production use.
 */

/* ── Figma raster asset URLs (7-day TTL) ─────────────────── */
const IMG = {
  /* User profile */
  bonnieGreen:      'https://www.figma.com/api/mcp/asset/3f53a6ae-3269-4f52-9830-92aff3133593',
  /* E-commerce product */
  appleWatch:       'https://www.figma.com/api/mcp/asset/816fef1c-0bea-4170-b394-cb03f256e811',
  /* Card-with-list avatars */
  neilSims:         'https://www.figma.com/api/mcp/asset/afa89892-0305-4bd5-8a1e-be20d89de311',
  bonnieGreenList:  'https://www.figma.com/api/mcp/asset/0a0e18c8-de3b-4a88-a0ad-772d180bdcbc',
  michealGough:     'https://www.figma.com/api/mcp/asset/61f0d8f4-111f-4ef2-9dec-66fa472bc78e',
  thomasLean:       'https://www.figma.com/api/mcp/asset/87bb6760-f758-4d17-93f3-212a04c210e7',
  lanaByrd:         'https://www.figma.com/api/mcp/asset/0e18715c-a9ed-4564-acb4-b6db158a3949',
  karenNelson:      'https://www.figma.com/api/mcp/asset/ac2cc84a-0e5d-49b2-b15d-1c6415488f11',
  /* CTA card — app-store buttons */
  googlePlay:       'https://www.figma.com/api/mcp/asset/c130a69a-cb30-4286-8724-bf89a74460e8',
  appleLogo:        'https://www.figma.com/api/mcp/asset/674ef329-9ad6-41e3-9946-7f29dd8bc65a',
  /* Testimonial avatars */
  neilSimsTest:     'https://www.figma.com/api/mcp/asset/6399a649-f5dd-49ce-ba6e-58d28ceba194',
  michealGoughTest: 'https://www.figma.com/api/mcp/asset/189aee5a-6203-4dba-8649-4839ff4c2a9f',
  heleneEngels:     'https://www.figma.com/api/mcp/asset/caf2a4bd-e071-4587-9e7c-14be1b01d02f',
  karenNelsonTest:  'https://www.figma.com/api/mcp/asset/cf0a5918-36ac-4240-abe4-323d9eb4c1c2',
  /* Crypto wallet icons */
  metamask:         'https://www.figma.com/api/mcp/asset/5d56d3fe-9690-4166-a9b5-ce0004c483d0',
  coinbase:         'https://www.figma.com/api/mcp/asset/8c9c4e3b-111e-4769-9bb0-999a97064ab2',
  opera:            'https://www.figma.com/api/mcp/asset/cd92a013-77a1-4213-bba0-2f6816b227ba',
  walletconnect:    'https://www.figma.com/api/mcp/asset/9af9250e-c8b3-460f-a34e-a0e56db85ab9',
  fortmatic:        'https://www.figma.com/api/mcp/asset/1901f0b8-1d50-4fca-82fe-5bd3e7a7829a',
};

/* ── Shared shell helpers ─────────────────────────────────── */
const SHADOW_MD = '0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05)';
const SHADOW_SM = '0 1px 2px 0 rgba(0,0,0,.08)';
const CARD_SHELL_MD = `background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:${SHADOW_MD}`;
const CARD_SHELL_SM = `background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:${SHADOW_SM}`;

/* ── Inline SVG helpers ───────────────────────────────────── */
/* Heroicons check-circle — filled blue (enabled) or gray (disabled) */
const CHECK = (on = true) =>
  `<svg width="20" height="20" viewBox="0 0 20 20" fill="${on ? '#155dfc' : '#9ca3af'}" aria-hidden="true" style="flex-shrink:0;">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>`;

/* Yellow star — Heroicons solid star */
const STAR = `<svg width="20" height="20" viewBox="0 0 20 20" fill="#FFDF20" aria-hidden="true">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
</svg>`;

/* Heroicons chevron-right (outline) */
const CHEVRON_RIGHT = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#155dfc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.5 5l5 5-5 5"/></svg>`;

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
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: `
Specialised layout variants for the Iris Library card component.

**Source:** Figma node [\`13559:76419\`](https://www.figma.com/design/ZKtEULdYKaXe5uQl1J6ijI/Iris-Library?node-id=13559-76419) — **light mode, desktop only**.

All 10 variants here are distinct enough from the basic text/image card (see **Card/Basics**) to warrant their own layout category.

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

> ⚠️ **TTL warning:** Figma raster URLs expire after **7 days**. Replace with locally-hosted assets in production.

### Border-radius note
These Figma variants use \`border-radius: 8px\`, which differs from the \`var(--radius-xl, 16px)\` used by the \`.card\` CSS class in Card/Basics. Inline styles are used here for Figma parity.
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
 * - Avatar: 96px circle, 1px border #e5e7eb, shadow-md
 * - "Add friend": bg #42389d (brand/800), rounded-12px, 12px medium, white
 * - "Message": no bg-fill, border 1px #f9fafb, text #1e2939, 12px medium
 * - Card pt-16px px-16px pb-40px (asymmetric padding — more space at bottom)
 */
export const UserProfileCard = {
  name: 'User profile card',
  parameters: {
    docs: {
      description: {
        story: `
Social profile card. Centred avatar, name, role, and two action buttons.
**Node:** 13559:76692 | Width: 384px | Shadow: shadow-md

**Approximations:** Three-dots icon is an inline SVG (Figma uses a raster vector).
        `,
      },
      source: {
        language: 'html',
        code: `<div style="width:384px;padding:16px 16px 40px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05);">
  <!-- Three-dots menu -->
  <div style="display:flex;justify-content:flex-end;padding:10px;">⋯</div>
  <!-- Avatar + Name -->
  <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
    <img src="…" alt="Bonnie Green"
         style="width:96px;height:96px;border-radius:50%;border:1px solid #e5e7eb;object-fit:cover;
                box-shadow:0 4px 6px 0 rgba(0,0,0,.1),0 2px 4px 0 rgba(0,0,0,.05);">
    <div style="text-align:center;">
      <p style="font-size:20px;font-weight:500;color:#111928;margin:0;">Bonnie Green</p>
      <p style="font-size:14px;color:#6b7280;margin:0;">Visual Designer</p>
    </div>
  </div>
  <!-- Buttons -->
  <div style="display:flex;gap:12px;justify-content:center;padding-top:24px;">
    <button style="background:#42389d;color:#fff;font-size:12px;font-weight:500;
                   padding:8px 12px;border-radius:12px;border:none;cursor:pointer;">Add friend</button>
    <button style="background:transparent;border:1px solid #f9fafb;color:#1e2939;
                   font-size:12px;font-weight:500;padding:8px 12px;border-radius:12px;cursor:pointer;">Message</button>
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
             style="width:96px;height:96px;border-radius:100px;border:1px solid #e5e7eb;
                    object-fit:cover;
                    box-shadow:0 4px 6px 0 rgba(0,0,0,.1),0 2px 4px 0 rgba(0,0,0,.05);">
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;">
          <p style="font-size:20px;font-weight:500;color:#111928;line-height:1.25;margin:0;">Bonnie Green</p>
          <p style="font-size:14px;font-weight:400;color:#6b7280;line-height:1.5;margin:0;">Visual Designer</p>
        </div>
      </div>
      <!-- Action buttons -->
      <div style="display:flex;gap:12px;justify-content:center;padding-top:24px;">
        <button style="background:#42389d;color:#fff;font-size:12px;font-weight:500;line-height:1.5;
                       padding:8px 12px;border-radius:12px;border:none;cursor:pointer;white-space:nowrap;">
          Add friend
        </button>
        <button style="background:transparent;border:1px solid #f9fafb;color:#1e2939;
                       font-size:12px;font-weight:500;line-height:1.5;
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
 * - Input bg: #f9fafb, border: 1px solid #d1d5db, border-radius: 8px, px-16px py-12px
 * - Email input has a mail icon (16px) left of the placeholder
 * - Checkbox: 16px square, bg #f9fafb, border 0.5px solid #d1d5db, border-radius 4px
 * - "Create account" button: bg #1447e6 (blue/700, NOT brand/800 purple), full width
 * - Shadow: 0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.1) — slightly different from other cards
 * - "Lost Password?" color: #155dfc (blue/600), not brand purple
 */
export const WithFormInputs = {
  name: 'With form inputs',
  parameters: {
    docs: {
      description: {
        story: `
Sign-in form card. Email + password inputs, checkbox row, CTA button, helper link.
**Node:** 13561:76495 | Width: 384px | Shadow: shadow-sm (0 1px 3px + 0 1px 2px)

**Key design token differences vs other cards:**
- Button uses \`#1447e6\` (blue/700) — **not** the brand/800 purple used elsewhere
- Shadow uses a distinct shadow-sm variant
- Checkbox border: \`0.5px solid #d1d5db\`

**Approximations:**
- Mail icon: Heroicons envelope inline SVG (Figma uses a 2-vector raster assembly)
        `,
      },
      source: {
        language: 'html',
        code: `<div style="width:384px;padding:32px;background:#fff;border-radius:8px;
             box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1);">
  <p style="font-size:20px;font-weight:500;color:#111928;margin:0 0 24px;">Sign in to our platform</p>
  <!-- Email -->
  <div style="margin-bottom:20px;">
    <label style="display:block;font-size:14px;font-weight:500;color:#6b7280;margin-bottom:8px;">Your email</label>
    <div style="display:flex;align-items:center;gap:10px;background:#f9fafb;border:1px solid #d1d5db;
                border-radius:8px;padding:12px 16px;">
      <!-- mail icon -->
      <span style="color:#6b7280;font-size:14px;">✉</span>
      <span style="font-size:14px;color:#6b7280;">name@flowbite.com</span>
    </div>
  </div>
  <!-- Password -->
  <div style="margin-bottom:20px;">
    <label style="display:block;font-size:14px;font-weight:500;color:#111928;margin-bottom:8px;">Password</label>
    <div style="background:#f9fafb;border:1px solid #d1d5db;border-radius:8px;padding:12px 16px;">
      <span style="font-size:14px;color:#6b7280;">••••••••••</span>
    </div>
  </div>
  <!-- Checkbox row -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;">
    <label style="display:flex;align-items:center;gap:8px;font-size:14px;cursor:pointer;">
      <input type="checkbox" style="width:16px;height:16px;accent-color:#1447e6;">
      Remember me
    </label>
    <a href="#" style="font-size:14px;color:#155dfc;text-decoration:none;">Lost Password?</a>
  </div>
  <!-- CTA -->
  <button style="width:100%;background:#1447e6;color:#fff;font-size:14px;font-weight:500;
                 padding:10px 20px;border-radius:12px;border:none;cursor:pointer;margin-bottom:16px;">
    Create account
  </button>
  <p style="font-size:14px;font-weight:500;margin:0;">
    <span style="color:#6b7280;">Not registered? </span>
    <a href="#" style="color:#155dfc;text-decoration:none;">Create account</a>
  </p>
</div>`,
      },
    },
  },
  render: () => `
    <div style="width:384px;padding:32px;background:#fff;border-radius:8px;
                box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1);
                display:flex;flex-direction:column;gap:24px;">

      <p style="font-size:20px;font-weight:500;color:#111928;line-height:1.5;margin:0;">
        Sign in to our platform
      </p>

      <!-- Inputs -->
      <div style="display:flex;flex-direction:column;gap:20px;">

        <!-- Email field -->
        <div style="display:flex;flex-direction:column;gap:8px;">
          <label style="font-size:14px;font-weight:500;color:#6b7280;line-height:1.5;">
            Your email
          </label>
          <div style="display:flex;align-items:center;gap:10px;background:#f9fafb;
                      border:1px solid #d1d5db;border-radius:8px;padding:12px 16px;">
            ${MAIL_ICON}
            <span style="font-size:14px;color:#6b7280;line-height:1.25;">name@flowbite.com</span>
          </div>
        </div>

        <!-- Password field -->
        <div style="display:flex;flex-direction:column;gap:8px;">
          <label style="font-size:14px;font-weight:500;color:#111928;line-height:1.5;">
            Password
          </label>
          <div style="background:#f9fafb;border:1px solid #d1d5db;border-radius:8px;
                      padding:12px 16px;">
            <span style="font-size:14px;color:#6b7280;line-height:1.25;letter-spacing:2px;">••••••••••</span>
          </div>
        </div>
      </div>

      <!-- Checkbox row -->
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
          <div style="width:16px;height:16px;flex-shrink:0;background:#f9fafb;
                      border:0.5px solid #d1d5db;border-radius:4px;"></div>
          <div style="display:flex;flex-direction:column;gap:2px;">
            <span style="font-size:14px;font-weight:500;color:#101828;line-height:1.5;">
              Write label text here
            </span>
            <span style="font-size:14px;color:#101828;line-height:1.5;">Some text here</span>
          </div>
        </label>
        <a href="#" style="font-size:14px;color:#155dfc;text-decoration:none;white-space:nowrap;">
          Lost Password?
        </a>
      </div>

      <!-- Button + helper -->
      <div style="display:flex;flex-direction:column;gap:16px;">
        <button style="width:100%;background:#1447e6;color:#fff;font-size:14px;font-weight:500;
                       line-height:1.5;padding:10px 20px;border-radius:12px;border:none;cursor:pointer;
                       min-height:41px;">
          Create account
        </button>
        <p style="font-size:14px;font-weight:500;margin:0;line-height:1.5;">
          <span style="color:#6b7280;">Not registered?</span>
          <a href="#" style="color:#155dfc;text-decoration:none;"> Create account</a>
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
 * - Stars: 5× yellow (#FFDF20)
 * - Badge: "5.0" — bg #155dfc (blue/600), rounded-4px, 12px semibold white
 * - Price: 30px extrabold #111928
 * - "Add to cart": bg #42389d (brand/800), rounded-12px, 14px medium white, h-36px
 */
export const EcommerceCard = {
  name: 'E-commerce card',
  parameters: {
    docs: {
      description: {
        story: `
Product card for e-commerce. Centered product photo, star rating with badge, price and cart CTA.
**Node:** 13561:76497 | Width: 384px | Shadow: shadow-md

**Approximations:** Stars use inline SVG (Figma uses a raster star asset). Star color: \`#FFDF20\` (old-colors/yellow/300).
        `,
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
          <p style="font-size:20px;font-weight:600;color:#111928;line-height:1.25;margin:0;">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </p>
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="display:flex;gap:4px;">${STAR.repeat(5)}</div>
            <span style="background:#155dfc;color:#fff;font-size:12px;font-weight:600;
                         padding:2px 4px;border-radius:4px;line-height:12px;white-space:nowrap;">5.0</span>
          </div>
        </div>

        <!-- Price + CTA -->
        <div style="display:flex;align-items:center;gap:10px;">
          <p style="flex:1;font-size:30px;font-weight:800;color:#111928;line-height:1.25;margin:0;">$599</p>
          <button style="background:#42389d;color:#fff;font-size:14px;font-weight:500;
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
 * - Divider between rows: 1px solid #e5e7eb
 * - Amount: 16px semibold right-aligned
 * - "View all" link: #155dfc, 16px medium
 * - Title "Latest Customers": 18px extrabold #111928
 */
export const CardWithList = {
  name: 'Card with list',
  parameters: {
    docs: {
      description: {
        story: `
Customer list card. Header with "View all" link, then 6 rows: avatar + name/email + amount.
**Node:** 13561:77786 | Width: 384px | Shadow: shadow-sm (no border in Figma)
        `,
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
        <a href="#" style="font-size:16px;font-weight:500;color:#155dfc;text-decoration:none;
                           white-space:nowrap;">View all</a>
      </div>

      <!-- Customer rows -->
      <div style="display:flex;flex-direction:column;">
        ${customers.map((c, i) => `
          ${i > 0 ? '<div style="height:1px;background:#e5e7eb;"></div>' : ''}
          <div style="display:flex;align-items:center;padding:${i === customers.length - 1 ? '16px 0 0' : '16px 0'};">
            <div style="display:flex;flex:1;align-items:center;gap:8px;min-width:0;">
              <img src="${c.img}" alt="${c.name}"
                   style="width:32px;height:32px;border-radius:100px;object-fit:cover;flex-shrink:0;">
              <div style="display:flex;flex-direction:column;min-width:0;">
                <span style="font-size:16px;font-weight:600;color:#111928;line-height:1.5;">${c.name}</span>
                <span style="font-size:12px;color:#6b7280;line-height:1.5;">${c.email}</span>
              </div>
            </div>
            <span style="font-size:16px;font-weight:600;color:#111928;line-height:1.5;
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
    docs: {
      description: {
        story: `
Standard pricing plan card. Plan name, price, feature checklist with enabled/disabled items, CTA.
**Node:** 13561:77822 | Width: 384px | Shadow: shadow-md

**Approximations:** Check-circle icons are inline SVG (Figma uses raster vectors at \`inset:10%\`).
        `,
      },
    },
  },
  render: () => {
    const enabledItems  = ['2 team members', '20GB Cloud storage', 'Integration help'];
    const disabledItems = ['Sketch Files', 'API Access', 'Complete documentation', '24×7 phone & email support'];
    const listItem = (text, enabled) => `
      <div style="display:flex;align-items:center;gap:12px;padding:2px 0;">
        ${CHECK(enabled)}
        <span style="font-size:16px;color:#6b7280;line-height:1.5;
                     ${enabled ? '' : 'text-decoration:line-through;'}">${text}</span>
      </div>`;
    return `
    <div style="${CARD_SHELL_MD};width:384px;padding:32px;overflow:hidden;">
      <div style="display:flex;flex-direction:column;gap:28px;align-items:center;">

        <!-- Plan + price -->
        <div style="display:flex;flex-direction:column;gap:16px;">
          <p style="font-size:20px;font-weight:500;color:#6b7280;line-height:1.5;margin:0;width:320px;">
            Standard plan
          </p>
          <div style="display:flex;align-items:flex-end;gap:10px;width:320px;">
            <span style="font-size:48px;font-weight:800;color:#111928;line-height:48px;white-space:nowrap;">$49</span>
            <span style="font-size:18px;font-weight:500;color:#6b7280;line-height:1.5;margin-bottom:2px;">/month</span>
          </div>
        </div>

        <!-- Feature list -->
        <div style="display:flex;flex-direction:column;gap:16px;width:100%;">
          ${enabledItems.map(t  => listItem(t, true)).join('')}
          ${disabledItems.map(t => listItem(t, false)).join('')}
        </div>

        <!-- CTA -->
        <button style="width:100%;background:#42389d;color:#fff;font-size:14px;font-weight:500;
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
    docs: {
      description: {
        story: `
Wide call-to-action card. Centered heading and body copy with two app-store download buttons.
**Node:** 13561:76545 | Width: 790px | Shadow: shadow-md

**Approximations:** App-store button icons use Figma raster assets (⚠️ 7-day TTL).
        `,
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
          <p style="font-size:18px;font-weight:400;color:#6b7280;line-height:1.5;margin:0;">
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
              <span style="font-size:12px;font-weight:400;line-height:12px;">Download on the</span>
              <span style="font-size:18px;font-weight:700;line-height:1.25;">Google Play</span>
            </div>
          </div>

          <!-- App Store -->
          <div style="display:flex;align-items:center;gap:10px;background:#111928;
                      padding:12px 16px;border-radius:8px;cursor:pointer;">
            <img src="${IMG.appleLogo}" alt="App Store"
                 style="width:38px;height:38px;object-fit:contain;flex-shrink:0;">
            <div style="display:flex;flex-direction:column;text-align:left;color:#fff;white-space:nowrap;">
              <span style="font-size:12px;font-weight:400;line-height:12px;">Download on the</span>
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
 * - Tab row: bg #f9fafb, border-bottom 1px #e5e7eb, p-16px
 * - Active tab "Services": color #155dfc (blue/600), medium 14px
 * - Inactive tabs "About", "Facts": color #6b7280, medium 14px
 * - Tab gap: 32px
 * - Body: p-32px, heading 30px extrabold, body 18px regular
 * - "Learn more" link + chevron-right: color #155dfc
 *
 * **Approximations:** Chevron-right is inline SVG.
 */
export const NavTabsCard = {
  name: 'Nav tabs card',
  parameters: {
    docs: {
      description: {
        story: `
Card with simple tab navigation above the content body.
**Node:** 13561:77617 | Width: 790px | Shadow: shadow-md

Active tab color: \`#155dfc\` (blue/600). Tab strip bg: \`#f9fafb\`.
        `,
      },
    },
  },
  render: () => `
    <div style="${CARD_SHELL_MD};width:790px;overflow:hidden;">

      <!-- Tab row -->
      <div style="background:#f9fafb;border-bottom:1px solid #e5e7eb;padding:16px;">
        <div style="display:flex;gap:32px;">
          <span style="font-size:14px;font-weight:500;color:#6b7280;line-height:1.5;cursor:pointer;">About</span>
          <span style="font-size:14px;font-weight:500;color:#155dfc;line-height:1.5;cursor:pointer;">Services</span>
          <span style="font-size:14px;font-weight:500;color:#6b7280;line-height:1.5;cursor:pointer;">Facts</span>
        </div>
      </div>

      <!-- Body -->
      <div style="padding:32px;">
        <div style="display:flex;flex-direction:column;gap:8px;">
          <p style="font-size:30px;font-weight:800;color:#111928;line-height:1.25;margin:0;">
            Powering innovation &amp; trust at 200,000+ companies worldwide
          </p>
          <p style="font-size:18px;font-weight:400;color:#6b7280;line-height:1.5;margin:0;">
            Empower Developers, IT Ops, and business teams to collaborate at high velocity.
            Respond to changes and deliver great customer and employee service experiences fast.
          </p>
          <div style="display:flex;align-items:center;gap:4px;margin-top:4px;">
            <a href="#" style="font-size:16px;font-weight:500;color:#155dfc;text-decoration:none;
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
 * - Tab row: 3 equal columns separated by 1px #e5e7eb vertical dividers
 * - Active tab "Statistics": bg #f9fafb, color #155dfc, medium 14px
 * - Inactive tabs: bg #f9fafb, color #6b7280, medium 14px
 * - Stats: 30px extrabold #111928 + 16px regular #6b7280 label, centered
 * - Stats grid: 2 rows × 3 columns, gap 32px
 */
export const StatsCard = {
  name: 'Stats card (segmented tabs)',
  parameters: {
    docs: {
      description: {
        story: `
Card with a segmented tab navigation (Statistics / Services / FAQ) and a 2×3 statistics grid.
Named "Type11" in Figma.
**Node:** 13561:77668 | Width: 790px | Shadow: shadow-md
        `,
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
        <span style="font-size:16px;font-weight:400;color:#6b7280;line-height:1.5;">${label}</span>
      </div>`;
    return `
    <div style="${CARD_SHELL_MD};width:790px;overflow:hidden;">

      <!-- Segmented tab row -->
      <div style="display:flex;background:#f9fafb;box-shadow:0 1px 2px 0 rgba(0,0,0,.08);overflow:hidden;border-radius:8px 8px 0 0;">
        <div style="flex:1;display:flex;justify-content:center;align-items:center;padding:16px;border-right:1px solid #e5e7eb;">
          <span style="font-size:14px;font-weight:500;color:#155dfc;white-space:nowrap;">Statistics</span>
        </div>
        <div style="flex:1;display:flex;justify-content:center;align-items:center;padding:16px;border-right:1px solid #e5e7eb;">
          <span style="font-size:14px;font-weight:500;color:#6b7280;white-space:nowrap;">Services</span>
        </div>
        <div style="flex:1;display:flex;justify-content:center;align-items:center;padding:16px;">
          <span style="font-size:14px;font-weight:500;color:#6b7280;white-space:nowrap;">FAQ</span>
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
 * Cells divided by 1px #e5e7eb borders (vertical between columns, horizontal between rows).
 *
 * **QA checklist**
 * - Cell padding: 32px
 * - Title: 18px semibold #111928
 * - Quote: 16px regular #6b7280, text-center
 * - Author: 32px avatar (circle, border 1px #e5e7eb) + 18px semibold name + 14px medium role
 * - Overall shadow: shadow-sm (lighter)
 */
export const TestimonialCard = {
  name: 'Testimonial card',
  parameters: {
    docs: {
      description: {
        story: `
2×2 grid of testimonial cells, each with a heading, quote, and attributed author.
**Node:** 13567:76479 | Width: 790px | Shadow: shadow-sm
        `,
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
            <p style="font-size:16px;font-weight:400;color:#6b7280;line-height:1.5;
                      margin:0;text-align:center;">${t.quote}</p>
          </div>
          <div style="display:flex;align-items:center;gap:16px;justify-content:center;">
            <img src="${t.img}" alt="${t.name}"
                 style="width:32px;height:32px;border-radius:100px;border:1px solid #e5e7eb;
                        object-fit:cover;flex-shrink:0;">
            <div style="display:flex;flex-direction:column;gap:4px;white-space:nowrap;">
              <span style="font-size:18px;font-weight:600;color:#111928;line-height:1.25;">${t.name}</span>
              <span style="font-size:14px;font-weight:500;color:#6b7280;line-height:1.25;">${t.role}</span>
            </div>
          </div>
        </div>
      </div>`;
    return `
    <div style="${CARD_SHELL_SM};width:790px;overflow:hidden;border-radius:8px;">
      <!-- Row 1 -->
      <div style="display:flex;border-radius:8px 8px 0 0;overflow:hidden;">
        ${cell(testimonials[0], '')}
        <div style="width:1px;background:#e5e7eb;flex-shrink:0;"></div>
        ${cell(testimonials[1], '')}
      </div>
      <!-- Row 2 -->
      <div style="display:flex;border-radius:0 0 8px 8px;overflow:hidden;">
        ${cell(testimonials[2], 'border-top:1px solid #e5e7eb;')}
        <div style="width:1px;background:#e5e7eb;flex-shrink:0;"></div>
        ${cell(testimonials[3], 'border-top:1px solid #e5e7eb;')}
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
 * - Wallet row: bg #f9fafb, p-12px, rounded-8px, icon (16–18px) + name bold
 * - MetaMask row has a "Popular" badge: bg #e5e7eb, rounded-6px, 12px medium #6b7280
 * - Helper text: question icon + 12px regular #6b7280
 *
 * **Approximations:**
 * - Wallet icons use Figma raster assets (⚠️ 7-day TTL)
 * - Question-circle is inline SVG
 */
export const CryptoCard = {
  name: 'Crypto card — connect wallet',
  parameters: {
    docs: {
      description: {
        story: `
Wallet-connect modal card. Lists 5 provider options; MetaMask has a "Popular" badge.
**Node:** 13567:76480 | Width: 384px | Shadow: shadow-sm (no border)

**Approximations:** Question-circle icon is inline SVG. Wallet icons use Figma raster assets (7-day TTL).
        `,
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
        <p style="font-size:14px;font-weight:400;color:#6b7280;line-height:1.5;margin:0;">
          Connect with one of our available wallet providers or create a new one.
        </p>
      </div>

      <!-- Card body -->
      <div style="display:flex;flex-direction:column;gap:16px;overflow:hidden;">

        <!-- Wallet list -->
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${wallets.map(w => `
            <div style="display:flex;align-items:center;gap:12px;background:#f9fafb;
                        padding:12px;border-radius:8px;cursor:pointer;">
              <div style="display:flex;flex:1;align-items:center;gap:12px;min-width:0;">
                <img src="${w.img}" alt="${w.name}"
                     style="width:${w.w}px;height:${w.h}px;object-fit:contain;flex-shrink:0;">
                <span style="font-size:16px;font-weight:700;color:#111928;line-height:1.5;">
                  ${w.name}
                </span>
              </div>
              ${w.popular ? `<span style="background:#e5e7eb;font-size:12px;font-weight:500;
                                         color:#6b7280;padding:2px 10px;border-radius:6px;
                                         white-space:nowrap;line-height:1.5;">Popular</span>` : ''}
            </div>`).join('')}
        </div>

        <!-- Helper text -->
        <div style="display:flex;align-items:center;gap:6px;">
          ${QUESTION}
          <span style="font-size:12px;font-weight:400;color:#6b7280;line-height:1.5;">
            Why do I need to connect with my wallet?
          </span>
        </div>

      </div>
    </div>`;
  },
};
