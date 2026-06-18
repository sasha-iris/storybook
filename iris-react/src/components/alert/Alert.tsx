import React from 'react';

type AlertColor = 'success' | 'danger' | 'info' | 'warning' | 'dark';

interface AlertProps {
  heading: string;
  body?: string;
  color?: AlertColor;
  /** Action button label — renders a small btn next to dismiss. */
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const COLOR_CLASS: Record<AlertColor, string> = {
  success: 'alert-success',
  danger: 'alert-danger',
  info: 'alert-info',
  warning: 'alert-warning',
  dark: '',
};

/**
 * Inline status alert — success, danger, info, warning, or dark.
 *
 * USE FOR: form submission feedback, async operation result, inline validation summary,
 *   session-level notifications that should stay visible
 * REPLACES MUI: <Alert severity="...">, <Alert action={...}>
 * DO NOT USE FOR:
 *   - Ephemeral toasts that auto-dismiss → Toast component
 *   - Full-page banners → Banner component
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Alert heading="Changes saved" color="success" onDismiss={clearAlert} />
 * <Alert heading="Payment failed" body="Card was declined." color="danger" actionLabel="Retry" onAction={retry} />
 */
export function Alert({
  heading,
  body,
  color = 'dark',
  actionLabel,
  onAction,
  onDismiss,
  icon,
  className,
}: AlertProps) {
  const alertClass = [
    'alert',
    COLOR_CLASS[color],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div role="alert" className={alertClass}>
      {icon && <span className="alert-icon" aria-hidden="true">{icon}</span>}
      <div className="alert-body">
        <div className="alert-title">{heading}</div>
        {body && <p style={{ margin: 0 }}>{body}</p>}
        {actionLabel && onAction && (
          <button type="button" className="btn btn-xs" onClick={onAction}>{actionLabel}</button>
        )}
      </div>
      {onDismiss && (
        <button type="button" className="alert-dismiss" aria-label="Dismiss" onClick={onDismiss}>×</button>
      )}
    </div>
  );
}
