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
  /** Connected sales channel badges shown bottom-left. */
  salesChannels?: Array<'shopify' | 'amazon'>;
  /** `iris` = Iris Finance logo + "Iris Finance" label. `user` = avatar circle + name. */
  owner?: 'iris' | 'user';
  /** Owner display name when `owner="user"`. */
  ownerName?: string;
  className?: string;
}

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4.167 10h11.666M10.833 5l5 5-5 5" stroke="#42389d" strokeWidth={1.67} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ShopifyBadge() {
  return (
    <span aria-label="Shopify" title="Shopify" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: 4, flexShrink: 0, overflow: 'hidden' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.7496 4.21654L6.30071 6.92628C6.30071 6.92628 5.94235 7.02974 5.8526 7.1435C5.76284 7.25725 5.74311 7.57786 5.74311 7.57786L4.4375 18.024L14.2416 19.927L14.9991 4.20619C14.8897 4.18548 14.7795 4.20619 14.7496 4.21654Z" fill="#95BF46" />
        <path fillRule="evenodd" clipRule="evenodd" d="M17.6695 5.56111C17.6695 5.56111 17.6593 5.47835 17.6097 5.44735C17.5696 5.41629 17.5199 5.4163 17.5199 5.4163L16.1348 5.3129L15.1189 4.26829C15.0787 4.23723 15.0386 4.21659 14.989 4.20624L14.2322 19.9271L19.5422 18.7377L17.6695 5.56111Z" fill="#5E8E3E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M10.0673 8.00203C10.0571 8.00203 10.0374 8.00203 10.0272 8.00203C9.85784 7.98139 9.71846 7.82623 9.71846 7.65042C9.70826 7.4849 9.61847 3.61674 11.8006 2.73766C12.3486 2.52044 12.8573 2.56178 13.2857 2.88247C13.8133 3.26514 14.1921 4.03047 14.4212 5.14748C14.5804 5.93353 14.6103 6.6161 14.6103 6.64716C14.6205 6.81261 14.4913 6.93679 14.3213 6.90573C14.152 6.88502 14.0126 6.72992 14.0126 6.56441C13.9827 5.86112 13.7535 3.92707 12.9967 3.36853C12.7573 3.19273 12.4581 3.17202 12.0998 3.31683C10.2264 4.07182 10.3161 7.70212 10.3161 7.74347C10.3161 7.88828 10.2169 8.00203 10.0673 8.00203Z" fill="#595961" />
      </svg>
    </span>
  );
}

function AmazonBadge({ active = true }: { active?: boolean }) {
  return (
    <span aria-label="Amazon" title="Amazon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: 100, overflow: 'hidden', background: active ? '#fef9c2' : 'var(--color-border-default)', flexShrink: 0 }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.4676 12.6532C12.2202 13.1473 11.7959 13.4654 11.3368 13.5727C11.2672 13.5727 11.1609 13.6075 11.0546 13.6075C10.2785 13.6075 9.8194 13.0071 9.8194 12.1242C9.8194 10.9929 10.4901 10.464 11.3368 10.2155C11.7959 10.1101 12.3265 10.0744 12.8561 10.0744V10.4988C12.8561 11.3111 12.8909 11.9464 12.4676 12.6532ZM12.8561 8.45082C12.397 8.48565 11.8664 8.52047 11.3368 8.59012C10.525 8.69741 9.7131 8.83859 9.0433 9.15671C7.73662 9.68659 6.85327 10.8169 6.85327 12.4762C6.85327 14.5619 8.19476 15.6207 9.8909 15.6207C10.4553 15.6207 10.9144 15.5492 11.3368 15.4447C12.0094 15.232 12.5729 14.8433 13.2437 14.1365C13.6322 14.6664 13.7394 14.9148 14.4092 15.4795C14.5861 15.5492 14.763 15.5492 14.9031 15.4447C15.3274 15.0908 16.0696 14.4546 16.4572 14.1016C16.6341 13.9605 16.5993 13.7478 16.492 13.5727C16.1044 13.0776 15.715 12.6532 15.715 11.6998V8.52047C15.715 7.17835 15.8222 5.94165 14.8335 5.024C14.0217 4.28329 12.7498 4 11.7611 4H11.3368C9.53718 4.10447 7.63126 4.88188 7.20605 7.10776C7.13549 7.39106 7.3481 7.49647 7.48921 7.53129L9.46663 7.77882C9.67829 7.74306 9.7846 7.56612 9.8194 7.39106C9.99532 6.61365 10.6313 6.22494 11.3368 6.15341H11.4789C11.9031 6.15341 12.3622 6.33035 12.6087 6.68424C12.8909 7.10776 12.8561 7.67341 12.8561 8.16847V8.45082Z" fill="#343B45" />
        <path fillRule="evenodd" clipRule="evenodd" d="M19.9981 15.9821V15.9812C19.9906 15.8146 19.9558 15.6875 19.8862 15.5821L19.8786 15.5718L19.8702 15.5614C19.7996 15.4842 19.7319 15.4551 19.6585 15.4231C19.4393 15.3384 19.1204 15.2932 18.7366 15.2922C18.461 15.2922 18.1571 15.3186 17.8514 15.3854L17.8504 15.3647L17.5428 15.4673L17.5372 15.4701L17.3631 15.5266V15.5341C17.159 15.6188 16.9737 15.7242 16.8015 15.8494C16.6943 15.9294 16.6058 16.0358 16.6011 16.1986C16.5983 16.2871 16.6435 16.3887 16.7178 16.4489C16.7921 16.5092 16.8786 16.5299 16.9548 16.5299C16.9727 16.5299 16.9897 16.5289 17.0047 16.5261L17.0198 16.5252L17.031 16.5233C17.1816 16.4913 17.4008 16.4696 17.6576 16.4339C17.8777 16.4094 18.111 16.3915 18.3133 16.3915C18.4563 16.3906 18.5851 16.4009 18.6736 16.4198C18.7178 16.4292 18.7507 16.4405 18.7686 16.4499C18.7752 16.4518 18.7799 16.4546 18.7827 16.4565C18.7865 16.4687 18.7921 16.5007 18.7912 16.5449C18.793 16.7144 18.7215 17.0287 18.6228 17.3355C18.5268 17.6424 18.4102 17.9501 18.333 18.1544C18.3142 18.2014 18.302 18.2532 18.302 18.3096C18.3001 18.3915 18.334 18.4913 18.4055 18.5572C18.4751 18.6231 18.5654 18.6494 18.6406 18.6494H18.6444C18.7573 18.6485 18.8532 18.6033 18.936 18.5384C19.7168 17.8362 19.9887 16.7144 20 16.0828L19.9981 15.9821ZM17.683 16.9553C17.603 16.9544 17.5212 16.9732 17.445 17.0089C17.3594 17.0428 17.2719 17.0824 17.1891 17.1172L17.0677 17.168L16.9097 17.2311V17.2329C15.1929 17.9294 13.3895 18.3379 11.7206 18.3736C11.6595 18.3755 11.5974 18.3755 11.5381 18.3755C8.91346 18.3774 6.77236 17.1595 4.61243 15.9595C4.53717 15.92 4.45909 15.8993 4.38383 15.8993C4.28694 15.8993 4.18722 15.936 4.11478 16.0038C4.04235 16.0725 3.99907 16.1713 4.00002 16.272C3.99907 16.4028 4.06963 16.5233 4.16841 16.6014C6.19569 18.3624 8.4177 19.9981 11.4064 20C11.4647 20 11.524 19.9981 11.5833 19.9972C13.4845 19.9548 15.6341 19.312 17.3029 18.2635L17.3133 18.2569C17.5315 18.1261 17.7498 17.9774 17.9558 17.8127C18.0837 17.7176 18.1722 17.5689 18.1722 17.4146C18.1665 17.1407 17.9342 16.9553 17.683 16.9553Z" fill="#FF9A00" />
      </svg>
    </span>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span
      aria-label={`${initials} avatar`}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 100, border: '1px solid var(--color-border-default)', background: 'var(--color-bg-muted)', fontSize: 8, fontWeight: 600, color: 'var(--color-text-primary)', flexShrink: 0 }}
    >
      {initials}
    </span>
  );
}

const SALES_CHANNEL_BADGE: Record<'shopify' | 'amazon', (active: boolean) => React.ReactNode> = {
  shopify: () => <ShopifyBadge />,
  amazon: (active) => <AmazonBadge active={active} />,
};

/**
 * Scheduled report configuration card — title, delivery toggle, channels, recipients,
 * connected sales channel badges, and owner attribution footer.
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
 *   salesChannels={['shopify', 'amazon']}
 *   owner="iris"
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
  salesChannels = [],
  owner,
  ownerName = 'Jese Leos',
  className,
}: CardReportingProps) {
  const cardClass = [
    'card-reporting',
    hovered ? 'card-reporting--hovered' : '',
    !enabled ? 'card-reporting--inactive' : '',
    className,
  ].filter(Boolean).join(' ');

  const titleColor = hovered ? '#42389d' : enabled ? 'var(--color-text-primary)' : 'var(--color-text-secondary)';

  return (
    <div className={cardClass}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <p style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', color: titleColor, margin: 0 }}>
              {title}
            </p>
            {hovered && <ArrowRightIcon />}
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
      {(salesChannels.length > 0 || owner) && (
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, marginTop: 12 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {salesChannels.map((ch) => (
              <React.Fragment key={ch}>{SALES_CHANNEL_BADGE[ch](enabled)}</React.Fragment>
            ))}
          </div>
          {owner && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-medium)', color: 'var(--color-text-secondary)' }}>Owned by</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {owner === 'iris' ? (
                  <>
                    <img src="/assets/iris-mark-xs.svg" height={24} alt="" aria-hidden="true" style={{ display: 'block', width: 'auto' }} />
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: '#111928', whiteSpace: 'nowrap' }}>Iris Finance</span>
                  </>
                ) : (
                  <>
                    <Avatar initials={ownerName.split(' ').map((n) => n[0]).join('').slice(0, 2)} />
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: '#111928', whiteSpace: 'nowrap' }}>{ownerName}</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
