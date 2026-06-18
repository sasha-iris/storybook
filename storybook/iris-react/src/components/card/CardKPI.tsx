import React from 'react';

type KPITrend = 'up' | 'down' | 'flat';
type KPIIconColor = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'indigo';

interface CardKPIProps {
  title: string;
  value: string;
  trend?: KPITrend;
  trendLabel?: string;
  trendContext?: string;
  icon?: React.ReactNode;
  iconColor?: KPIIconColor;
  className?: string;
  onClick?: () => void;
}

/**
 * KPI metric card — headline number with optional trend and icon.
 *
 * USE FOR: dashboard summary stats (Total Revenue, Active Users, Orders Today),
 *   metric cards at the top of analytics pages
 * REPLACES MUI: custom <Card> + <Typography variant="h4"> composition
 * DO NOT USE FOR:
 *   - Full data visualizations → use a chart card pattern
 *   - Scheduled report cards → CardReporting
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <CardKPI title="Total Revenue" value="$45,231" trend="up" trendLabel="+12%" trendContext="vs last month" iconColor="blue" />
 */
export function CardKPI({
  title,
  value,
  trend,
  trendLabel,
  trendContext,
  icon,
  iconColor = 'blue',
  className,
  onClick,
}: CardKPIProps) {
  const trendClass = trend ? `card-trend card-trend-${trend}` : '';

  return (
    <div
      className={['card', 'card-body-padded', className].filter(Boolean).join(' ')}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : undefined}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div className="card-stat-label">{title}</div>
          <div className="card-stat-value">{value}</div>
          {trend && trendLabel && (
            <div className={trendClass}>
              <span className="card-trend-arrow">{trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'}</span>
              <span>{trendLabel}</span>
              {trendContext && <span className="card-trend-context">{trendContext}</span>}
            </div>
          )}
        </div>
        {icon && (
          <div className={`card-icon card-icon-${iconColor}`} style={{ flexShrink: 0 }}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
