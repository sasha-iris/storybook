import React from 'react';

type ToastColor = 'success' | 'danger' | 'warning' | 'info' | 'default';

interface ToastProps {
  title: string;
  description?: string;
  color?: ToastColor;
  onDismiss?: () => void;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
}

const COLOR_MAP: Record<ToastColor, { border: string; text: string; btnColor: string }> = {
  success: { border: '#84e1bc', text: '#0e9f6e', btnColor: 'btn-green' },
  danger:  { border: '#f8b4b4', text: '#f05252', btnColor: 'btn-red' },
  warning: { border: '#fcd9bd', text: '#ff5a1f', btnColor: 'btn-yellow' },
  info:    { border: '#a4cafe', text: '#3f83f8', btnColor: 'btn-blue' },
  default: { border: 'var(--color-border-default)', text: 'var(--color-text-primary)', btnColor: 'btn-primary' },
};

/**
 * Ephemeral toast notification — auto-dismiss or user-dismiss.
 *
 * USE FOR: action confirmations ("Saved", "Deleted"), async result feedback,
 *   brief system status messages that don't require user action
 * REPLACES MUI: <Snackbar>, <Snackbar><Alert>
 * DO NOT USE FOR:
 *   - Persistent feedback that must be read → Alert
 *   - Full-width notices → Banner
 *
 * Note: Toast renders in place — wrap in a portal / toast queue manager for
 * typical use. Iris does not ship a toast manager; manage visibility with state.
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Toast title="Changes saved" color="success" onDismiss={() => setVisible(false)} />
 * <Toast title="Upload failed" description="File too large." color="danger" ctaLabel="Retry" onCta={retry} onDismiss={dismiss} />
 */
export function Toast({
  title,
  description,
  color = 'default',
  onDismiss,
  ctaLabel,
  onCta,
  className,
}: ToastProps) {
  const { border, text, btnColor } = COLOR_MAP[color];

  if (description || ctaLabel) {
    return (
      <div
        className={['toast', className].filter(Boolean).join(' ')}
        role="status"
        aria-live="polite"
        style={{ borderColor: border, flexDirection: 'column', alignItems: 'stretch' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="toast-title" style={{ flex: 1, color }}>{title}</span>
          {onDismiss && (
            <button type="button" className="toast-close" style={{ color: text }} aria-label="Dismiss" onClick={onDismiss}>×</button>
          )}
        </div>
        {description && <p className="toast-message" style={{ margin: '0 0 12px', color: text }}>{description}</p>}
        {ctaLabel && onCta && (
          <button type="button" className={`btn ${btnColor} btn-xs`} onClick={onCta}>{ctaLabel}</button>
        )}
      </div>
    );
  }

  return (
    <div
      className={['toast', className].filter(Boolean).join(' ')}
      role="status"
      aria-live="polite"
      style={{ borderColor: border }}
    >
      <p className="toast-body" style={{ margin: 0, color: text }}>{title}</p>
      {onDismiss && (
        <button type="button" className="toast-close" style={{ color: text }} aria-label="Dismiss" onClick={onDismiss}>×</button>
      )}
    </div>
  );
}
