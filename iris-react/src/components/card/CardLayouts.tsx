import React, { useState } from 'react';

const CARD_SHADOW    = '0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.05)';
const CARD_SHADOW_SM = '0 1px 2px 0 rgba(0,0,0,.08)';

const CheckCircleIcon = ({ enabled }: { enabled: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
    style={{ color: enabled ? 'var(--color-primary)' : 'var(--color-border-default)', flexShrink: 0 }}
    aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

// ── UserProfileCard ───────────────────────────────────────────────────────────

interface UserProfileCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  onPrimaryCta?: () => void;
  onSecondaryCta?: () => void;
}

/**
 * Centered social profile card — avatar, name, role, two CTA buttons.
 *
 * USE FOR: team member profiles, account pages, "people" directory cards
 * REPLACES MUI: custom Card with centered avatar
 * DO NOT USE FOR: metric/data cards → use CardKPI instead
 *
 * Requires iris-components.css.
 */
export function UserProfileCard({
  name,
  role,
  avatarUrl,
  primaryCtaLabel = 'Add friend',
  secondaryCtaLabel = 'Message',
  onPrimaryCta,
  onSecondaryCta,
}: UserProfileCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div style={{
      width: 384, padding: '16px 16px 40px',
      background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 8, boxShadow: CARD_SHADOW,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} style={{
            width: 96, height: 96, borderRadius: '50%',
            border: '1px solid var(--color-border-default)',
            objectFit: 'cover', boxShadow: CARD_SHADOW,
          }} />
        ) : (
          <div style={{
            width: 96, height: 96, borderRadius: '50%',
            background: '#e0e7ff', color: '#42389d',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, fontWeight: 600,
            border: '1px solid var(--color-border-default)',
          }}>
            {initials}
          </div>
        )}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-medium)', color: '#111928', margin: '0 0 2px' }}>{name}</p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>{role}</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', paddingTop: 24 }}>
        <button type="button" onClick={onPrimaryCta} style={{
          background: '#42389d', color: '#fff',
          fontSize: 'var(--text-xs)', fontWeight: 'var(--font-medium)',
          padding: '8px 12px', borderRadius: 12, border: 'none', cursor: 'pointer',
        }}>
          {primaryCtaLabel}
        </button>
        <button type="button" onClick={onSecondaryCta} style={{
          background: 'transparent',
          border: '1px solid var(--color-bg-tertiary)',
          color: 'var(--color-text-heading)',
          fontSize: 'var(--text-xs)', fontWeight: 'var(--font-medium)',
          padding: '8px 12px', borderRadius: 12, cursor: 'pointer',
        }}>
          {secondaryCtaLabel}
        </button>
      </div>
    </div>
  );
}

// ── PricingCard ───────────────────────────────────────────────────────────────

interface PricingCardProps {
  planName: string;
  price: string;
  period?: string;
  enabledFeatures: string[];
  disabledFeatures?: string[];
  ctaLabel?: string;
  onCta?: () => void;
}

/**
 * Pricing plan card — plan name, price, feature checklist, CTA button.
 *
 * USE FOR: plan comparison pages, feature matrices, upgrade prompts
 * REPLACES MUI: custom Card with feature list
 * DO NOT USE FOR: more than ~7 features (excessive scroll)
 *
 * Requires iris-components.css.
 */
export function PricingCard({
  planName,
  price,
  period = '/month',
  enabledFeatures,
  disabledFeatures = [],
  ctaLabel = 'Choose plan',
  onCta,
}: PricingCardProps) {
  return (
    <div style={{
      width: 384, padding: 32,
      background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 8, boxShadow: CARD_SHADOW, overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-medium)', color: 'var(--color-text-secondary)', margin: 0 }}>
            {planName}
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
            <span style={{ fontSize: 48, fontWeight: 800, color: '#111928', lineHeight: '48px' }}>{price}</span>
            <span style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-medium)', color: 'var(--color-text-secondary)', marginBottom: 2 }}>{period}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
          {enabledFeatures.map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <CheckCircleIcon enabled={true} />
              <span style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)' }}>{f}</span>
            </div>
          ))}
          {disabledFeatures.map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <CheckCircleIcon enabled={false} />
              <span style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>{f}</span>
            </div>
          ))}
        </div>

        <button type="button" onClick={onCta} style={{
          width: '100%', background: '#42389d', color: '#fff',
          fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)',
          padding: '10px 20px', borderRadius: 12, border: 'none', cursor: 'pointer',
        }}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

// ── StatsCard ─────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
}

interface StatsCardProps {
  tabs: string[];
  stats: StatItem[];
  className?: string;
}

/**
 * Stats card with segmented tab navigation and 2×3 statistics grid.
 *
 * USE FOR: dashboard summary sections, marketing stats, company metrics
 * REPLACES MUI: custom Card with tabs + grid
 *
 * Requires iris-components.css.
 */
export function StatsCard({ tabs, stats, className }: StatsCardProps) {
  const [activeTab, setActiveTab] = useState(0);
  const rows: StatItem[][] = [];
  for (let i = 0; i < stats.length; i += 3) rows.push(stats.slice(i, i + 3));

  return (
    <div className={className} style={{
      background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 8, boxShadow: CARD_SHADOW, overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', background: 'var(--color-bg-default)',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.08)',
        borderRadius: '8px 8px 0 0', overflow: 'hidden',
      }}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(i)}
            style={{
              flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: 16,
              borderRight: i < tabs.length - 1 ? '1px solid var(--color-border-default)' : 'none',
              background: 'none', border: 'none', cursor: 'pointer',
              borderBottom: 'none',
            }}
          >
            <span style={{
              fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)',
              color: i === activeTab ? 'var(--color-primary)' : 'var(--color-text-secondary)',
            }}>
              {tab}
            </span>
          </button>
        ))}
      </div>

      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, textAlign: 'center' }}>
          {rows.map((row, ri) => (
            <div key={ri} style={{ display: 'flex', justifyContent: 'space-between' }}>
              {row.map(stat => (
                <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <span style={{ fontSize: 30, fontWeight: 800, color: '#111928', lineHeight: 1.25 }}>{stat.value}</span>
                  <span style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{stat.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── SignInCard ─────────────────────────────────────────────────────────────────

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="#6b7280" aria-hidden="true" style={{ flexShrink: 0, display: 'block' }}>
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

interface SignInCardProps {
  onSubmit?: () => void;
  onCreateAccount?: () => void;
  onForgotPassword?: () => void;
}

/**
 * Sign-in form card using .card-auth container.
 *
 * USE FOR: authentication, onboarding, sign-in flows embedded in a page layout
 * DO NOT USE FOR: sign-in inside a modal — the card itself is the visual container
 *
 * CTA uses .btn-blue (#1447e6), NOT .btn-primary (renders brand purple #42389d)
 *
 * Requires iris-components.css.
 */
export function SignInCard({ onSubmit, onCreateAccount, onForgotPassword }: SignInCardProps) {
  return (
    <div className="card-auth" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <p style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-medium)', color: '#111928', lineHeight: 1.5, margin: 0 }}>
        Sign in to our platform
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Your email</label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', color: 'var(--color-text-secondary)' }}>
              <MailIcon />
            </span>
            <input className="form-input" type="email" placeholder="name@company.com" style={{ paddingLeft: 42 }} />
          </div>
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Password</label>
          <input className="form-input" type="password" placeholder="••••••••••" />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <span className="iris-checkbox" role="checkbox" aria-checked="false" />
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: '#101828' }}>Remember me</span>
        </label>
        <a href="#" onClick={e => { e.preventDefault(); onForgotPassword?.(); }}
          style={{ fontSize: 'var(--text-sm)', color: 'var(--btn-primary-bg)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Lost Password?
        </a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <button type="button" className="btn btn-blue btn-md" style={{ width: '100%', justifyContent: 'center' }} onClick={onSubmit}>
          Create account
        </button>
        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', margin: 0, lineHeight: 1.5 }}>
          <span style={{ color: 'var(--color-text-secondary)' }}>Not registered? </span>
          <a href="#" onClick={e => { e.preventDefault(); onCreateAccount?.(); }}
            style={{ color: 'var(--btn-primary-bg)', textDecoration: 'none' }}>Create account</a>
        </p>
      </div>
    </div>
  );
}

// ── EcommerceCard ──────────────────────────────────────────────────────────────

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--color-warning-primary, #FBBF24)" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface EcommerceCardProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  stars?: number;
  rating?: string;
  price: string;
  ctaLabel?: string;
  onCta?: () => void;
}

/**
 * Product card — centered image, title, star rating + badge, price, cart CTA.
 *
 * USE FOR: product listings, marketplace items, catalog grids
 * DO NOT USE FOR: navigation-primary items → Card/Basics with link
 *
 * Requires iris-components.css.
 */
export function EcommerceCard({
  imageUrl,
  imageAlt = 'Product',
  title,
  stars = 5,
  rating = '5.0',
  price,
  ctaLabel = 'Add to cart',
  onCta,
}: EcommerceCardProps) {
  return (
    <div style={{
      width: 384, background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border-default)', borderRadius: 8,
      boxShadow: CARD_SHADOW, overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 16px' }}>
        <img src={imageUrl} alt={imageAlt} style={{ width: 275, height: 174, objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)', color: '#111928', lineHeight: 1.25, margin: 0 }}>
            {title}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: stars }).map((_, i) => <StarIcon key={i} />)}
            </div>
            <span style={{ background: 'var(--color-primary)', color: '#fff', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-semibold)', padding: '2px 4px', borderRadius: 4, lineHeight: '12px' }}>
              {rating}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <p style={{ flex: 1, fontSize: 30, fontWeight: 800, color: '#111928', lineHeight: 1.25, margin: 0 }}>{price}</p>
          <button type="button" onClick={onCta} style={{
            background: '#42389d', color: '#fff',
            fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)',
            padding: '8px 12px', height: 36, borderRadius: 12, border: 'none', cursor: 'pointer',
            whiteSpace: 'nowrap', lineHeight: 1.5,
          }}>
            {ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── CustomerListCard ───────────────────────────────────────────────────────────

interface CustomerRow {
  avatarUrl: string;
  name: string;
  email: string;
  amount: string;
}

interface CustomerListCardProps {
  title?: string;
  customers: CustomerRow[];
  onViewAll?: () => void;
}

/**
 * Customer list card — title with "View all" link, avatar rows with name/email/amount.
 *
 * USE FOR: compact data rows in a card (customers, transactions, recent activity)
 * DO NOT USE FOR: more than ~8 rows without pagination
 *
 * Requires iris-components.css.
 */
export function CustomerListCard({ title = 'Latest Customers', customers, onViewAll }: CustomerListCardProps) {
  return (
    <div style={{
      background: '#fff', borderRadius: 8, boxShadow: CARD_SHADOW_SM,
      width: 384, padding: 32, display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontSize: 18, fontWeight: 800, color: '#111928', lineHeight: 1.5, margin: 0 }}>{title}</p>
        <a href="#" onClick={e => { e.preventDefault(); onViewAll?.(); }}
          style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-medium)', color: 'var(--btn-primary-bg)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          View all
        </a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {customers.map((c, i) => (
          <React.Fragment key={c.name + i}>
            {i > 0 && <div style={{ height: 1, background: 'var(--color-border-default)' }} />}
            <div style={{ display: 'flex', alignItems: 'center', padding: i === customers.length - 1 ? '16px 0 0' : '16px 0' }}>
              <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 8, minWidth: 0 }}>
                <img src={c.avatarUrl} alt={c.name} style={{ width: 32, height: 32, borderRadius: '100px', objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-semibold)', color: '#111928', lineHeight: 1.5 }}>{c.name}</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{c.email}</span>
                </div>
              </div>
              <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-semibold)', color: '#111928', lineHeight: 1.5, whiteSpace: 'nowrap' }}>{c.amount}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── CTACard ────────────────────────────────────────────────────────────────────

interface CTACardProps {
  title?: string;
  body?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
  googlePlayIcon?: string;
  appStoreIcon?: string;
}

/**
 * Wide call-to-action card with app-store download buttons (790px).
 *
 * USE FOR: full-width promotional banners in a dashboard or landing section
 * DO NOT USE FOR: narrow columns (requires at least 600px)
 *
 * Requires iris-components.css.
 */
export function CTACard({
  title = 'Work fast from anywhere',
  body = 'Stay up to date and move work forward with Iris Finance on iOS & Android. Download the app today.',
  googlePlayIcon = 'https://cdn.simpleicons.org/googleplay/white',
  appStoreIcon = 'https://cdn.simpleicons.org/apple/white',
}: CTACardProps) {
  return (
    <div style={{
      width: 790, background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border-default)', borderRadius: 8,
      boxShadow: CARD_SHADOW, padding: 32, overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
          <p style={{ fontSize: 30, fontWeight: 700, color: '#111928', lineHeight: 1.25, margin: 0 }}>{title}</p>
          <p style={{ fontSize: 18, fontWeight: 400, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>{body}</p>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {[
            { icon: googlePlayIcon, label: 'Google Play' },
            { icon: appStoreIcon, label: 'AppStore' },
          ].map(btn => (
            <div key={btn.label} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#111928', padding: '12px 16px', borderRadius: 8, cursor: 'pointer' }}>
              <img src={btn.icon} alt={btn.label} style={{ width: 38, height: 38, objectFit: 'contain', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', color: '#fff', whiteSpace: 'nowrap' }}>
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 400, lineHeight: '12px' }}>Download on the</span>
                <span style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.25 }}>{btn.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── NavTabsCard ────────────────────────────────────────────────────────────────

interface NavTabsCardProps {
  tabs?: string[];
  defaultTab?: number;
  heading?: string;
  body?: string;
  learnMoreHref?: string;
  onLearnMore?: () => void;
}

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
  </svg>
);

/**
 * Card with simple tab navigation and body copy (790px).
 *
 * USE FOR: cards that switch between 2–4 content sections
 * DO NOT USE FOR: more than 4–5 tabs → use full Tabs component at page level
 *
 * Requires iris-components.css.
 */
export function NavTabsCard({
  tabs = ['About', 'Services', 'Facts'],
  defaultTab = 1,
  heading = 'Powering innovation & trust at 200,000+ companies worldwide',
  body = 'Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.',
  onLearnMore,
}: NavTabsCardProps) {
  const [active, setActive] = useState(defaultTab);
  return (
    <div style={{ width: 790, background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-default)', borderRadius: 8, boxShadow: CARD_SHADOW, overflow: 'hidden' }}>
      <div style={{ background: 'var(--color-bg-default)', borderBottom: '1px solid var(--color-border-default)', padding: 16 }}>
        <div style={{ display: 'flex', gap: 32 }}>
          {tabs.map((tab, i) => (
            <span key={tab} onClick={() => setActive(i)} style={{
              fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)',
              color: i === active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
              lineHeight: 1.5, cursor: 'pointer',
            }}>
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p style={{ fontSize: 30, fontWeight: 800, color: '#111928', lineHeight: 1.25, margin: 0 }}>{heading}</p>
          <p style={{ fontSize: 18, fontWeight: 400, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>{body}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
            <a href="#" onClick={e => { e.preventDefault(); onLearnMore?.(); }}
              style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-medium)', color: 'var(--btn-primary-bg)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Learn more
            </a>
            <span style={{ color: 'var(--btn-primary-bg)', display: 'flex' }}><ChevronRightIcon /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── TestimonialCard ────────────────────────────────────────────────────────────

interface Testimonial {
  avatarUrl: string;
  name: string;
  role: string;
  title: string;
  quote: string;
}

interface TestimonialCardProps {
  testimonials: [Testimonial, Testimonial, Testimonial, Testimonial];
}

/**
 * 2×2 testimonial grid card (790px) — quote title, body, attributed author.
 *
 * USE FOR: social proof sections on marketing or onboarding pages
 *
 * Requires iris-components.css.
 */
export function TestimonialCard({ testimonials }: TestimonialCardProps) {
  const Cell = ({ t, borderTop }: { t: Testimonial; borderTop?: boolean }) => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 32, ...(borderTop ? { borderTop: '1px solid var(--color-border-default)' } : {}) }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <p style={{ fontSize: 18, fontWeight: 600, color: '#111928', lineHeight: 1.25, margin: 0, textAlign: 'center' }}>{t.title}</p>
        <p style={{ fontSize: 'var(--text-base)', fontWeight: 400, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0, textAlign: 'center' }}>&ldquo;{t.quote}&rdquo;</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src={t.avatarUrl} alt={t.name} style={{ width: 32, height: 32, borderRadius: '100px', border: '1px solid var(--color-border-default)', objectFit: 'cover', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 18, fontWeight: 600, color: '#111928', lineHeight: 1.25, whiteSpace: 'nowrap' }}>{t.name}</span>
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: 'var(--color-text-secondary)', lineHeight: 1.25, whiteSpace: 'nowrap' }}>{t.role}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ width: 790, background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-default)', borderRadius: 8, boxShadow: CARD_SHADOW_SM, overflow: 'hidden' }}>
      <div style={{ display: 'flex' }}>
        <Cell t={testimonials[0]} />
        <div style={{ width: 1, background: 'var(--color-border-default)', flexShrink: 0 }} />
        <Cell t={testimonials[1]} />
      </div>
      <div style={{ display: 'flex' }}>
        <Cell t={testimonials[2]} borderTop />
        <div style={{ width: 1, background: 'var(--color-border-default)', flexShrink: 0 }} />
        <Cell t={testimonials[3]} borderTop />
      </div>
    </div>
  );
}

// ── CryptoWalletCard ───────────────────────────────────────────────────────────

interface WalletOption {
  iconUrl: string;
  name: string;
  popular?: boolean;
}

interface CryptoWalletCardProps {
  title?: string;
  description?: string;
  wallets: WalletOption[];
  helperText?: string;
}

const QuestionIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

/**
 * Wallet connect card — title, description, list of wallet providers (384px).
 *
 * USE FOR: wallet/account connection flows
 *
 * Requires iris-components.css.
 */
export function CryptoWalletCard({
  title = 'Connect wallet',
  description = 'Connect with one of our available wallet providers or create a new one.',
  wallets,
  helperText = 'Why do I need to connect with my wallet?',
}: CryptoWalletCardProps) {
  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: CARD_SHADOW_SM, width: 384, padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <p style={{ fontSize: 18, fontWeight: 600, color: '#111928', lineHeight: 1.5, margin: 0 }}>{title}</p>
        <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-normal)', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>{description}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {wallets.map(w => (
          <div key={w.name} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--color-bg-default)', padding: 12, borderRadius: 8, cursor: 'pointer' }}>
            <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 12, minWidth: 0 }}>
              <img src={w.iconUrl} alt={w.name} style={{ width: 18, height: 18, objectFit: 'contain', flexShrink: 0 }} />
              <span style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: '#111928', lineHeight: 1.5 }}>{w.name}</span>
            </div>
            {w.popular && (
              <span style={{ background: 'var(--color-border-default)', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-medium)', color: 'var(--color-text-secondary)', padding: '2px 10px', borderRadius: 6, whiteSpace: 'nowrap', lineHeight: 1.5 }}>
                Popular
              </span>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <QuestionIcon />
        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 400, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{helperText}</span>
      </div>
    </div>
  );
}

// ── CardWithButton ───────────────────────────────────────────────────────────

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4.167 10h11.666M10.833 5l5 5-5 5" stroke="currentColor" strokeWidth={1.67} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface CardWithButtonProps {
  title: string;
  body: string;
  ctaLabel?: string;
  onCta?: () => void;
}

/** Content card with heading, body copy, and a brand-purple CTA button with arrow icon. Figma: Card/Basics. */
export function CardWithButton({ title, body, ctaLabel = 'Read more', onCta }: CardWithButtonProps) {
  return (
    <div style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-default)', borderRadius: 8, boxShadow: CARD_SHADOW, padding: 24, maxWidth: 384 }}>
      <h5 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', color: '#111928', lineHeight: 1.3, margin: '0 0 12px' }}>{title}</h5>
      <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px' }}>{body}</p>
      <button
        type="button"
        onClick={onCta}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#42389d', color: '#fff', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', border: 'none', borderRadius: 12, padding: '10px 20px', cursor: 'pointer' }}
      >
        {ctaLabel}
        <ArrowRightIcon />
      </button>
    </div>
  );
}

// ── CardWithLink ──────────────────────────────────────────────────────────────

const GiftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 12v9H4v-9M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="#6b7280" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M11 3h6m0 0v6m0-6L8 12M5 5H3a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1v-2" stroke="currentColor" strokeWidth={1.67} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface CardWithLinkProps {
  title: string;
  body: string;
  linkLabel?: string;
  href?: string;
  onLinkClick?: () => void;
}

/** Content card with a top icon badge, heading, body copy, and an external-link CTA. Figma: Card/Basics. */
export function CardWithLink({ title, body, linkLabel = 'See our guideline', href = '#', onLinkClick }: CardWithLinkProps) {
  return (
    <div style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-default)', borderRadius: 8, boxShadow: CARD_SHADOW, padding: 24, maxWidth: 384 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, background: 'var(--color-bg-default)', borderRadius: 8, marginBottom: 16 }}>
        <GiftIcon />
      </div>
      <h5 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', color: '#111928', lineHeight: 1.3, margin: '0 0 12px' }}>{title}</h5>
      <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px' }}>{body}</p>
      <a
        href={href}
        onClick={onLinkClick ? (e) => { e.preventDefault(); onLinkClick(); } : undefined}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--color-primary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', textDecoration: 'none' }}
      >
        {linkLabel}
        <ExternalLinkIcon />
      </a>
    </div>
  );
}

// ── HorizontalCard ────────────────────────────────────────────────────────────

interface HorizontalCardProps {
  imageUrl: string;
  title: string;
  body: string;
}

/** Side-by-side card: 192px flush image on the left, content panel on the right. Fixed height 258px, width 576px. Figma: Card/Basics. */
export function HorizontalCard({ imageUrl, title, body }: HorizontalCardProps) {
  return (
    <div style={{ display: 'flex', maxWidth: 576, height: 258, background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-default)', borderRadius: 8, boxShadow: CARD_SHADOW, overflow: 'hidden' }}>
      <img src={imageUrl} alt="" style={{ width: 192, flexShrink: 0, objectFit: 'cover' }} />
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h5 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)', color: '#111928', lineHeight: 1.3, margin: '0 0 12px' }}>{title}</h5>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}
