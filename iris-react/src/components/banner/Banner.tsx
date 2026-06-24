import React from 'react';

type BannerVariant = 'default' | 'container-cta' | 'bottom' | 'cta' | 'newsletter';

interface BannerProps {
  variant?: BannerVariant;
  /** Notification copy (default) / marketing tagline (container-cta) / feature label (bottom) / description (cta) / label (newsletter). */
  text: string;
  /** Bold heading shown above the description. Only used by the `cta` type. */
  heading?: string;
  /** Link label for the `bottom` type partner link. */
  link?: string;
  onLinkClick?: () => void;
  onDismiss?: () => void;
  ctaLabel?: string;
  onCta?: () => void;
  /** `cta` type secondary "Learn more" button label. */
  secondaryCtaLabel?: string;
  onSecondaryCta?: () => void;
  /** `newsletter` type subscribe handler — receives the typed first name. */
  onSubscribe?: (firstName: string) => void;
  className?: string;
}

const LightBulbIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.997.138-2.004.4-2.947a4.978 4.978 0 00.6-2.053C13 7.343 11.657 6 10 6c-1.657 0-3 1.343-3 3a4.978 4.978 0 00.6 2.053c.262.943.385 1.95.4 2.947h4z" clipRule="evenodd" />
  </svg>
);

const ReceiptTaxIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="var(--color-text-secondary)" aria-hidden="true">
    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7H17a1 1 0 010 2h-3.434l.498 2.233A1 1 0 0113 12.97V17a1 1 0 11-2 0v-4h-.5a1 1 0 010-2H11V9H9a1 1 0 010-2h2.354L12.033 2.744A1 1 0 0112 2z" clipRule="evenodd" />
  </svg>
);

const ArrowNarrowRightIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={color} aria-hidden="true">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const BookOpenIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
  </svg>
);

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

function DismissButton({ size, onDismiss }: { size: number; onDismiss: () => void }) {
  return (
    <button type="button" className="banner__dismiss" aria-label="Dismiss" onClick={onDismiss}>
      <XIcon size={size} />
    </button>
  );
}

/**
 * Full-width notification banner — typically at the top of the page.
 *
 * USE FOR: site-wide announcements, promotional messages, maintenance notices,
 *   upgrade prompts, consent banners
 * REPLACES MUI: custom Alert + AppBar composition
 * DO NOT USE FOR:
 *   - Inline component-level feedback → Alert
 *   - Short pop-up toasts → Toast
 *
 * Variants:
 * - `default` — lightbulb icon + message text
 * - `container-cta` — brand logo + tagline + primary CTA button (centered card)
 * - `bottom` — feature label + partner link
 * - `cta` — heading + description + two action buttons
 * - `newsletter` — label + name input + subscribe button
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Banner variant="cta" heading="Integration is the key" text="..." ctaLabel="Get started" onCta={...} secondaryCtaLabel="Learn more" onSecondaryCta={...} onDismiss={...} />
 */
export function Banner({
  variant = 'default',
  text,
  heading,
  link,
  onLinkClick,
  onDismiss,
  ctaLabel,
  onCta,
  secondaryCtaLabel,
  onSecondaryCta,
  onSubscribe,
  className,
}: BannerProps) {
  const [firstName, setFirstName] = React.useState('');
  const wrapClass = (extra: string) => ['banner', extra, className].filter(Boolean).join(' ');

  if (variant === 'container-cta') {
    return (
      <div role="banner" className={wrapClass('banner--container-cta')}>
        <div className="banner__container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
              <div style={{ width: 24, height: 24, background: '#4208e5', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <rect x="1" y="1" width="5" height="5" rx="1" fill="#fff" />
                  <rect x="8" y="1" width="5" height="5" rx="1" fill="#fff" />
                  <rect x="1" y="8" width="5" height="5" rx="1" fill="#fff" />
                  <rect x="8" y="8" width="5" height="5" rx="1" fill="#fff" />
                </svg>
              </div>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-heading)' }}>Smart</span>
            </div>
            <div className="banner__divider-text">
              <span className="banner__tagline">{text}</span>
            </div>
          </div>
          <div className="banner__actions" style={{ gap: 12 }}>
            {ctaLabel && <button type="button" className="btn btn-primary btn-xs" onClick={onCta}>{ctaLabel}</button>}
            {onDismiss && <DismissButton size={16} onDismiss={onDismiss} />}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'bottom') {
    return (
      <div role="banner" className={wrapClass('banner--bottom')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <ReceiptTaxIcon size={16} />
            <span className="banner__label">{text}</span>
          </div>
          {link && (
            <a href="#" className="banner__link" onClick={(e) => { e.preventDefault(); onLinkClick?.(); }}>
              {link}
              <ArrowNarrowRightIcon size={16} />
            </a>
          )}
        </div>
        {onDismiss && <DismissButton size={16} onDismiss={onDismiss} />}
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <div role="banner" className={wrapClass('banner--cta')}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
            <span className="banner__heading">{heading}</span>
            <span className="banner__desc">{text}</span>
          </div>
          <div className="banner__actions">
            {secondaryCtaLabel && (
              <button type="button" className="btn btn-light btn-xs" style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }} onClick={onSecondaryCta}>
                <BookOpenIcon size={16} />{secondaryCtaLabel}
              </button>
            )}
            {ctaLabel && (
              <button type="button" className="btn btn-primary btn-xs" style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }} onClick={onCta}>
                <ArrowNarrowRightIcon size={16} color="var(--color-bg-white)" />{ctaLabel}
              </button>
            )}
          </div>
        </div>
        {onDismiss && <DismissButton size={16} onDismiss={onDismiss} />}
      </div>
    );
  }

  if (variant === 'newsletter') {
    return (
      <div role="banner" className={wrapClass('banner--newsletter')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, flex: 1, minWidth: 0 }}>
          <span className="banner__label banner__label--secondary" style={{ flexShrink: 0 }}>{text}</span>
          <div className="banner__form">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
              <label className="form-label" style={{ marginBottom: 0 }}>First name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. John"
                style={{ minWidth: 200 }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary btn-md" style={{ whiteSpace: 'nowrap', flexShrink: 0 }} onClick={() => onSubscribe?.(firstName)}>
              Subscribe
            </button>
          </div>
        </div>
        {onDismiss && <DismissButton size={20} onDismiss={onDismiss} />}
      </div>
    );
  }

  // default
  return (
    <div role="banner" className={wrapClass('banner--default')}>
      <div className="banner__icon-text">
        <div className="banner__icon-circle">
          <LightBulbIcon size={14} />
        </div>
        <span className="banner__text">{text}</span>
      </div>
      {onDismiss && <DismissButton size={16} onDismiss={onDismiss} />}
    </div>
  );
}
