import React from 'react';

type BannerVariant = 'default' | 'container-cta' | 'bottom' | 'cta';

interface BannerProps {
  variant?: BannerVariant;
  text: string;
  onDismiss?: () => void;
  /** Primary CTA button label. */
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
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
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Banner text="New features available! See what's new." ctaLabel="Learn more" onCta={openDocs} onDismiss={closeBanner} />
 */
export function Banner({
  variant = 'default',
  text,
  onDismiss,
  ctaLabel,
  onCta,
  className,
}: BannerProps) {
  const variantClass = variant === 'default' ? 'banner--default'
    : variant === 'container-cta' ? 'banner--container-cta'
    : variant === 'bottom' ? 'banner--bottom'
    : 'banner--cta';

  return (
    <div role="banner" className={['banner', variantClass, className].filter(Boolean).join(' ')}>
      <div className="banner__icon-text">
        <span className="banner__text">{text}</span>
        {ctaLabel && onCta && (
          <button type="button" className="btn btn-primary btn-xs" onClick={onCta}>{ctaLabel}</button>
        )}
      </div>
      {onDismiss && (
        <button type="button" className="banner__dismiss" aria-label="Dismiss" onClick={onDismiss}>
          ×
        </button>
      )}
    </div>
  );
}
