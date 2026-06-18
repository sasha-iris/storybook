import React from 'react';

interface CardReportingProps {
  title: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  scheduleText?: string;
  /** Email/slack delivery channels list. */
  channels?: Array<'email' | 'slack'>;
  recipients?: string[];
  hovered?: boolean;
  className?: string;
}

/**
 * Scheduled report configuration card — title, delivery toggle, channels, recipients.
 *
 * USE FOR: report management pages, scheduled notification settings
 * REPLACES MUI: custom <Card> with nested MUI components
 * DO NOT USE FOR:
 *   - Summary metric cards → CardKPI
 *   - Generic content cards → Card
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <CardReporting
 *   title="Daily Report"
 *   enabled={reportEnabled}
 *   onToggle={setReportEnabled}
 *   scheduleText="Every day at 9:00 AM"
 *   channels={['email', 'slack']}
 *   recipients={['alice@company.com', 'bob@company.com']}
 * />
 */
export function CardReporting({
  title,
  enabled,
  onToggle,
  scheduleText,
  channels = [],
  recipients = [],
  hovered = false,
  className,
}: CardReportingProps) {
  const cardClass = [
    'card-reporting',
    hovered ? 'card-reporting--hovered' : '',
    !enabled ? 'card-reporting--inactive' : '',
    className,
  ].filter(Boolean).join(' ');

  const titleColor = enabled ? 'var(--color-text-primary)' : 'var(--color-text-secondary)';

  return (
    <div className={cardClass}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', color: titleColor, margin: 0 }}>
              {title}
            </p>
            <span
              className={`iris-toggle iris-toggle--${enabled ? 'on' : 'off'}`}
              role="switch"
              aria-checked={enabled}
              aria-label={`Report ${enabled ? 'enabled' : 'disabled'}`}
              onClick={() => onToggle(!enabled)}
              style={{ cursor: 'pointer' }}
            >
              <span className="iris-toggle__thumb" />
            </span>
          </div>
          {channels.length > 0 && (
            <div style={{ display: 'flex', gap: 4 }}>
              {channels.map((ch) => (
                <span key={ch} className={`rpt-chip${enabled ? ` rpt-chip--${ch}` : ' rpt-chip--muted'}`}>
                  {ch === 'email' ? 'E-mail' : 'Slack'}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      {scheduleText && (
        <p style={{ fontSize: 'var(--text-sm)', color: enabled ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', margin: '12px 0 0' }}>
          {scheduleText}
        </p>
      )}
      {recipients.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
          {recipients.map((r) => (
            <span key={r} className="rpt-chip" style={{ background: 'var(--color-bg-muted)' }}>{r}</span>
          ))}
        </div>
      )}
    </div>
  );
}
