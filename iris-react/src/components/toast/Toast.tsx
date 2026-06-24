import React from 'react';

type ToastColor = 'success' | 'danger' | 'warning' | 'info' | 'default';
type ToastVariant = 'icon' | 'simple' | 'push' | 'interactive';

interface ToastProps {
  title: string;
  description?: string;
  color?: ToastColor;
  /** 'icon' (default) = color icon box ± description/CTA; 'simple' = plain text with divider;
   *  'push' = avatar + timestamp notification; 'interactive' = refresh icon + two action buttons. */
  variant?: ToastVariant;
  onDismiss?: () => void;
  ctaLabel?: string;
  onCta?: () => void;
  /** `interactive` variant secondary button label. Default "Later". */
  secondaryLabel?: string;
  onSecondary?: () => void;
  /** `push` variant avatar initials. Default "BG". */
  avatarInitials?: string;
  /** `push` variant timestamp text. Default "a few seconds ago". */
  timestamp?: string;
  className?: string;
}

const PAPER_PLANE_PATH = 'M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z';
const REFRESH_PATH = 'M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z';

const COLOR_MAP: Record<ToastColor, {
  border: string; text: string; btnColor: string;
  iconBg: string; iconColor: string; iconPath: string;
}> = {
  success: {
    border: '#84e1bc', text: '#0e9f6e', btnColor: 'btn-green',
    iconBg: '#ecfdf5', iconColor: '#007a55',
    iconPath: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z',
  },
  danger: {
    border: '#f8b4b4', text: '#f05252', btnColor: 'btn-red',
    iconBg: '#fef2f2', iconColor: '#c81e1e',
    iconPath: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z',
  },
  warning: {
    border: '#fcd9bd', text: '#ff5a1f', btnColor: 'btn-yellow',
    iconBg: '#fff8f1', iconColor: '#c27803',
    iconPath: 'M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z',
  },
  info: {
    border: '#a4cafe', text: '#3f83f8', btnColor: 'btn-blue',
    iconBg: '#eff6ff', iconColor: '#1c64f2',
    iconPath: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z',
  },
  default: {
    border: 'var(--color-border-default)', text: 'var(--color-text-primary)', btnColor: 'btn-primary',
    iconBg: '', iconColor: '', iconPath: '',
  },
};

function IconBox({ bg, color, path }: { bg: string; color: string; path: string }) {
  return (
    <div style={{
      width: 32, height: 32, background: bg, borderRadius: 8,
      flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill={color} aria-hidden="true">
        <path fillRule="evenodd" d={path} clipRule="evenodd" />
      </svg>
    </div>
  );
}

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
 */
export function Toast({
  title,
  description,
  color = 'default',
  variant = 'icon',
  onDismiss,
  ctaLabel,
  onCta,
  secondaryLabel = 'Later',
  onSecondary,
  avatarInitials = 'BG',
  timestamp = 'a few seconds ago',
  className,
}: ToastProps) {
  const { border, text, btnColor, iconBg, iconColor, iconPath } = COLOR_MAP[color];
  const hasIcon = color !== 'default' && !description && !ctaLabel;

  if (variant === 'simple') {
    return (
      <div className={['toast', className].filter(Boolean).join(' ')} role="status" aria-live="polite">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="var(--color-primary)" aria-hidden="true">
          <path fillRule="evenodd" d={PAPER_PLANE_PATH} clipRule="evenodd" />
        </svg>
        <div className="toast-body" style={{ borderLeft: '1px solid var(--color-border-default)', paddingLeft: 12 }}>
          <p style={{ margin: 0 }}>{title}</p>
        </div>
      </div>
    );
  }

  if (variant === 'push') {
    return (
      <div className={['toast', className].filter(Boolean).join(' ')} role="status" aria-live="polite" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <span className="toast-title">New notification</span>
          {onDismiss && <button type="button" className="toast-close" aria-label="Dismiss" onClick={onDismiss}>×</button>}
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-bg-muted)', border: '1px solid var(--color-border-default)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-base)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-secondary)' }}>
            {avatarInitials}
          </div>
          <div className="toast-body" style={{ minWidth: 0 }}>
            <p className="toast-title" style={{ margin: '0 0 2px' }}>{title}</p>
            {description && <p className="toast-message" style={{ margin: '0 0 4px', lineHeight: 1.4 }}>{description}</p>}
            <p style={{ margin: 0, fontSize: 'var(--text-xs)', fontWeight: 'var(--font-medium)', color: 'var(--color-primary)' }}>{timestamp}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'interactive') {
    return (
      <div className={['toast', className].filter(Boolean).join(' ')} role="status" aria-live="polite" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <IconBox bg="#dbeafe" color="var(--color-primary)" path={REFRESH_PATH} />
          <div className="toast-body" style={{ minWidth: 0 }}>
            <p className="toast-title" style={{ margin: '0 0 2px' }}>{title}</p>
            {description && <p className="toast-message" style={{ margin: '0 0 12px', lineHeight: 1.4 }}>{description}</p>}
            <div style={{ display: 'flex', gap: 8 }}>
              {ctaLabel && <button type="button" className="btn btn-primary btn-xs" style={{ flex: 1 }} onClick={onCta}>{ctaLabel}</button>}
              <button type="button" className="btn btn-light btn-xs" style={{ flex: 1 }} onClick={onSecondary}>{secondaryLabel}</button>
            </div>
          </div>
          {onDismiss && <button type="button" className="toast-close" aria-label="Dismiss" onClick={onDismiss}>×</button>}
        </div>
      </div>
    );
  }

  if (description || ctaLabel) {
    return (
      <div
        className={['toast', className].filter(Boolean).join(' ')}
        role="status"
        aria-live="polite"
        style={{ borderColor: border, flexDirection: 'column', alignItems: 'stretch' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: description ? 4 : 0 }}>
          {color !== 'default' && (
            <svg width="18" height="18" viewBox="0 0 20 20" fill={iconColor} aria-hidden="true">
              <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
            </svg>
          )}
          <span className="toast-title" style={{ flex: 1, color: text }}>{title}</span>
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
      {hasIcon && <IconBox bg={iconBg} color={iconColor} path={iconPath} />}
      <p className="toast-body" style={{ margin: 0, color: text }}>{title}</p>
      {onDismiss && (
        <button type="button" className="toast-close" style={{ color: text }} aria-label="Dismiss" onClick={onDismiss}>×</button>
      )}
    </div>
  );
}
