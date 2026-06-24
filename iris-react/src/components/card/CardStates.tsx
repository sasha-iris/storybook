import React from 'react';
import { Skeleton } from '../skeleton/Skeleton';

type CardState = 'loaded' | 'loading' | 'empty' | 'error';

// ── Icons ─────────────────────────────────────────────────────────────────────

const InboxIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
  </svg>
);

const WarningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// ── CardEmptyBody ─────────────────────────────────────────────────────────────

interface CardEmptyBodyProps {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  onCta?: () => void;
}

/**
 * Empty state body for a card — centered icon + heading + description + optional CTA.
 *
 * USE FOR: card body when a data query returns 0 results
 * DO NOT USE FOR: fetch errors → CardErrorBody; data in flight → CardLoadingBody
 */
export function CardEmptyBody({
  heading = 'No data yet',
  description = 'Data will appear here once available.',
  ctaLabel,
  onCta,
}: CardEmptyBodyProps) {
  return (
    <div className="card-body-padded" style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div aria-hidden="true" style={{ marginBottom: 12, display: 'flex', justifyContent: 'center', color: 'var(--color-text-fg-disabled)' }}>
        <InboxIcon />
      </div>
      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-heading)', marginBottom: 6 }}>
        {heading}
      </div>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-body-subtle)', lineHeight: 1.6, marginBottom: ctaLabel ? 16 : 0 }}>
        {description}
      </div>
      {ctaLabel && onCta && (
        <button type="button" className="btn btn-primary btn-sm" onClick={onCta}>{ctaLabel}</button>
      )}
    </div>
  );
}

// ── CardErrorBody ─────────────────────────────────────────────────────────────

interface CardErrorBodyProps {
  message?: string;
  onRetry?: () => void;
}

/**
 * Error state body for a card — warning icon + message + Retry button.
 *
 * USE FOR: card body when a data fetch fails
 * DO NOT USE FOR: empty results → CardEmptyBody
 */
export function CardErrorBody({
  message = 'Something went wrong. Please try again.',
  onRetry,
}: CardErrorBodyProps) {
  return (
    <div className="card-body-padded" style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div aria-hidden="true" style={{
        width: 44, height: 44, borderRadius: '50%', background: '#FEE2E2',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#991B1B', margin: '0 auto 12px',
      }}>
        <WarningIcon />
      </div>
      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-heading)', marginBottom: 6 }}>
        Failed to load
      </div>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-body-subtle)', lineHeight: 1.6, marginBottom: 16 }}>
        {message}
      </div>
      {onRetry && (
        <button type="button" className="btn btn-alternative btn-sm" onClick={onRetry}>↻ Retry</button>
      )}
    </div>
  );
}

// ── CardLoadingBody ───────────────────────────────────────────────────────────

/**
 * Loading state body — skeleton placeholders.
 *
 * USE FOR: card body while data is fetching
 * DO NOT USE FOR: spinner inside card (causes layout shift) — always use skeleton
 */
export function CardLoadingBody() {
  return (
    <div className="card-body-padded" aria-hidden="true">
      <Skeleton height={16} width="60%" className="mb-3" />
      <Skeleton height={12} className="mb-2" />
      <Skeleton height={12} width="80%" className="mb-2" />
      <Skeleton height={12} width="40%" />
    </div>
  );
}

// ── CardStateWrapper ──────────────────────────────────────────────────────────

interface CardStateWrapperProps {
  state: CardState;
  children: React.ReactNode;
  emptyHeading?: string;
  emptyDescription?: string;
  emptyCtaLabel?: string;
  onEmptyCta?: () => void;
  errorMessage?: string;
  onRetry?: () => void;
  className?: string;
}

/**
 * Wraps any card body — shows loading/empty/error states automatically.
 * Pass `state="loaded"` to render children normally.
 *
 * USE FOR: any async-data card that needs all four states
 * REPLACES MUI: custom loading/empty/error guards in every card
 *
 * @example
 * <div className="card">
 *   <div className="card-header">
 *     <div className="card-header-title">Revenue</div>
 *   </div>
 *   <CardStateWrapper state={loading ? 'loading' : error ? 'error' : data?.length ? 'loaded' : 'empty'} onRetry={refetch}>
 *     <div className="card-body-padded">…real content…</div>
 *   </CardStateWrapper>
 * </div>
 *
 * Requires iris-components.css.
 */
export function CardStateWrapper({
  state,
  children,
  emptyHeading,
  emptyDescription,
  emptyCtaLabel,
  onEmptyCta,
  errorMessage,
  onRetry,
  className,
}: CardStateWrapperProps) {
  if (state === 'loading') return <CardLoadingBody />;
  if (state === 'error') return <CardErrorBody message={errorMessage} onRetry={onRetry} />;
  if (state === 'empty') return (
    <CardEmptyBody
      heading={emptyHeading}
      description={emptyDescription}
      ctaLabel={emptyCtaLabel}
      onCta={onEmptyCta}
    />
  );
  return <>{children}</>;
}
