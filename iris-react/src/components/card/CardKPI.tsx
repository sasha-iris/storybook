import React from 'react';

export type KPIChartType = 'linechart' | 'linechart-vert' | 'barchart' | 'barchart-vert' | 'barchart-big' | 'barchart-segm-hor';
export type KPIDirection = 'up' | 'down';

const C_UP = '#5850EC';
const C_DN = '#E74694';

const MOD: Record<KPIChartType, string> = {
  linechart:           'iris-kpi--line',
  'linechart-vert':    'iris-kpi--line-tight',
  barchart:            'iris-kpi--bar',
  'barchart-vert':     'iris-kpi--bar',
  'barchart-big':      'iris-kpi--bar',
  'barchart-segm-hor': 'iris-kpi--wide',
};

// Exact Figma SVG paths — node 602:20777 (up) / 602:20749 (down)
const FILL_UP   = 'M12.7111 29.6097C6.35555 29.6097 6.35556 19.5123 0 19.5122V62C0 66.4183 3.58173 70 8 70H278C282.418 70 286 66.4279 286 62.0096V1.42073C278.056 1.42073 279.644 12.7805 273.289 12.7805C266.933 12.7805 266.933 19.5122 260.578 19.5122C254.222 19.5122 254.222 12.7805 247.867 12.7805C241.511 12.7805 240.717 24.561 235.156 24.561C229.594 24.561 228.8 6.04878 222.444 6.04878C216.089 6.04878 216.089 0.99999 209.733 1C203.378 1.00001 197.022 9.41466 190.667 9.41466C184.311 9.41466 184.311 4.36591 177.956 4.36588C171.6 4.36586 169.716 8.77907 165.244 12.7805C159.175 18.2123 158.889 29.6098 152.533 29.6098C146.178 29.6097 146.178 19.5122 139.822 19.5122C133.467 19.5122 133.467 11.0976 127.111 11.0976C120.756 11.0976 120.756 9.41463 114.4 9.41463C108.044 9.41463 108.044 24.1402 101.689 24.1402C95.3334 24.1402 95.3333 14.4634 88.9778 14.4634C82.6222 14.4634 82.6222 29.6097 76.2667 29.6098C69.9111 29.6098 69.9111 26.6646 63.5555 26.6646C57.2 26.6646 57.2 24.561 50.8444 24.561C44.4889 24.561 44.4889 32.9756 38.1333 32.9756C31.7778 32.9756 31.7778 41.3902 25.4222 41.3902C19.0667 41.3902 19.0667 29.6097 12.7111 29.6097Z';
const STROKE_UP = 'M0 19.7917C6.35556 19.7917 6.35555 30.0417 12.7111 30.0417C19.0667 30.0417 19.0667 42 25.4222 42C31.7778 42 31.7778 33.4584 38.1333 33.4584C44.4889 33.4584 44.4889 24.9167 50.8444 24.9167C57.2 24.9167 57.2 27.0521 63.5555 27.0521C69.9111 27.0521 69.9111 30.0417 76.2667 30.0417C82.6222 30.0417 82.6222 14.6667 88.9778 14.6667C95.3333 14.6667 95.3334 24.4896 101.689 24.4896C108.044 24.4896 108.044 9.54167 114.4 9.54167C120.756 9.54167 120.756 11.25 127.111 11.25C133.467 11.25 133.467 19.7917 139.822 19.7917C146.178 19.7917 146.178 30.0417 152.533 30.0417C158.889 30.0417 159.175 18.4721 165.244 12.9583C169.716 8.89652 171.6 4.41667 177.956 4.4167C184.311 4.41673 184.311 9.5417 190.667 9.5417C197.022 9.5417 203.378 1.00001 209.733 1C216.089 0.99999 216.089 6.125 222.444 6.125C228.8 6.125 229.594 24.9167 235.156 24.9167C240.717 24.9167 241.511 12.9583 247.867 12.9583C254.222 12.9583 254.222 19.7917 260.578 19.7917C266.933 19.7917 266.933 12.9583 273.289 12.9583C279.644 12.9583 278.056 1.42708 286 1.42708';
const FILL_DN   = 'M12.7111 29.6097C6.35555 29.6097 6.35556 19.5123 0 19.5122V62C0 66.4183 3.58173 70 8 70H278C282.418 70 286 66.4279 286 62.0096V24.561C278.056 24.561 279.644 12.7805 273.289 12.7805C266.933 12.7805 266.933 19.5122 260.578 19.5122C254.222 19.5122 254.222 12.7805 247.867 12.7805C241.511 12.7805 240.717 24.561 235.156 24.561C229.594 24.561 228.8 6.04878 222.444 6.04878C216.089 6.04878 216.089 0.99999 209.733 1C203.378 1.00001 197.022 9.41466 190.667 9.41466C184.311 9.41466 184.311 4.36591 177.956 4.36588C171.6 4.36586 169.716 8.77907 165.244 12.7805C159.175 18.2123 158.889 29.6098 152.533 29.6098C146.178 29.6097 146.178 19.5122 139.822 19.5122C133.467 19.5122 133.467 11.0976 127.111 11.0976C120.756 11.0976 120.756 9.41463 114.4 9.41463C108.044 9.41463 108.044 24.1402 101.689 24.1402C95.3334 24.1402 95.3333 14.4634 88.9778 14.4634C82.6222 14.4634 82.6222 29.6097 76.2667 29.6098C69.9111 29.6098 69.9111 26.6646 63.5555 26.6646C57.2 26.6646 57.2 24.561 50.8444 24.561C44.4889 24.561 44.4889 32.9756 38.1333 32.9756C31.7778 32.9756 31.7778 41.3902 25.4222 41.3902C19.0667 41.3902 19.0667 29.6097 12.7111 29.6097Z';
const STROKE_DN = 'M0 19.7917C6.35556 19.7917 6.35555 30.0417 12.7111 30.0417C19.0667 30.0417 19.0667 42 25.4222 42C31.7778 42 31.7778 33.4584 38.1333 33.4584C44.4889 33.4584 44.4889 24.9167 50.8444 24.9167C57.2 24.9167 57.2 27.0521 63.5555 27.0521C69.9111 27.0521 69.9111 30.0417 76.2667 30.0417C82.6222 30.0417 82.6222 14.6667 88.9778 14.6667C95.3333 14.6667 95.3334 24.4896 101.689 24.4896C108.044 24.4896 108.044 9.54167 114.4 9.54167C120.756 9.54167 120.756 11.25 127.111 11.25C133.467 11.25 133.467 19.7917 139.822 19.7917C146.178 19.7917 146.178 30.0417 152.533 30.0417C158.889 30.0417 159.175 18.4721 165.244 12.9583C169.716 8.89652 171.6 4.41667 177.956 4.4167C184.311 4.41673 184.311 9.5417 190.667 9.5417C197.022 9.5417 203.378 1.00001 209.733 1C216.089 0.99999 216.089 6.125 222.444 6.125C228.8 6.125 229.594 24.9167 235.156 24.9167C240.717 24.9167 241.511 12.9583 247.867 12.9583C254.222 12.9583 254.222 19.7917 260.578 19.7917C266.933 19.7917 266.933 12.9583 273.289 12.9583C279.644 12.9583 278.056 24.9167 286 24.9167';

// Bar heights (px) from Figma — 14 bars, max 40px container
const BARS_UP = [15.54, 16.36, 27.86, 17.18, 40, 25.39, 19.64, 8.96, 29.5, 40, 19.64, 13.89, 25, 36.07];
const BARS_DN = [15.54, 16.36, 27.86, 17.18, 40, 25.39, 19.64, 8.96, 29.5, 40, 19.64, 13.89, 36.07, 20];

// ── Icons ─────────────────────────────────────────────────────────────────────

const TrendUpIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill={color} aria-hidden="true">
    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
  </svg>
);

const TrendDownIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill={color} aria-hidden="true">
    <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
  </svg>
);

const DollarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="#6B7280" aria-hidden="true">
    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
  </svg>
);

// ── Internal sparklines ───────────────────────────────────────────────────────

let _uid = 0;
function uid() { return `kpi-${++_uid}`; }

function LineSparkline({ direction }: { direction: KPIDirection }) {
  const id = uid();
  const color = direction === 'up' ? C_UP : C_DN;
  return (
    <svg style={{ width: '100%', height: 70, display: 'block' }} viewBox="0 0 286 70" fill="none" aria-hidden="true">
      <defs>
        {direction === 'up' ? (
          <linearGradient id={id} x1="143" y1="1" x2="143" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E5E7EB" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        ) : (
          <linearGradient id={id} x1="143" y1="1" x2="143" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity={0.6} />
            <stop offset="1" stopColor="#B0B0B0" stopOpacity={0} />
          </linearGradient>
        )}
      </defs>
      <path d={direction === 'up' ? FILL_UP : FILL_DN} fill={`url(#${id})`} />
      <path d={direction === 'up' ? STROKE_UP : STROKE_DN} stroke={color} strokeWidth={2} />
    </svg>
  );
}

function BarSparkline({ direction, big }: { direction: KPIDirection; big?: boolean }) {
  const bars = direction === 'up' ? BARS_UP : BARS_DN;
  const containerH = big ? 58 : 40;
  return (
    <div className="iris-kpi__bars" style={{ height: containerH }}>
      {bars.map((h, i) => {
        const isLight = i === 6;
        const cls = direction === 'down'
          ? `iris-kpi__bar${isLight ? ' iris-kpi__bar--down-light' : ' iris-kpi__bar--down'}`
          : `iris-kpi__bar${isLight ? ' iris-kpi__bar--light' : ''}`;
        const height = h >= containerH ? '100%' : `${h}px`;
        return <div key={i} className={cls} style={{ height }} />;
      })}
    </div>
  );
}

// ── CardKPI ───────────────────────────────────────────────────────────────────

interface CardKPIProps {
  label: string;
  value: string;
  trendPct?: string;
  direction?: KPIDirection;
  chartType?: KPIChartType;
  subtitle?: string;
  pillContent?: React.ReactNode;
  showPill?: boolean;
  className?: string;
}

/**
 * KPI sparkline card — metric number with trend badge and embedded sparkline chart.
 *
 * USE FOR: dashboard KPI cards with line or bar sparklines
 * REPLACES MUI: custom Card + Typography + chart composition
 * DO NOT USE FOR: full-page charts → use a chart library; no-sparkline metrics → use CardKPISimple
 *
 * CSS classes: iris-kpi, iris-kpi--line, iris-kpi--bar, iris-kpi--wide
 *
 * @example
 * <CardKPI label="Total Sales" value="$16,416" trendPct="+12.5%" direction="up" chartType="linechart" />
 *
 * Requires iris-components.css.
 */
export function CardKPI({
  label,
  value,
  trendPct,
  direction = 'up',
  chartType = 'linechart',
  subtitle,
  pillContent,
  showPill = true,
  className,
}: CardKPIProps) {
  const modCls = MOD[chartType] ?? 'iris-kpi--line';
  const color = direction === 'up' ? C_UP : C_DN;
  const isBar = chartType === 'barchart' || chartType === 'barchart-vert' || chartType === 'barchart-big';

  return (
    <div className={['iris-kpi', modCls, className].filter(Boolean).join(' ')}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="iris-kpi__label">{label}</div>
          <div className="iris-kpi__value">{value}</div>
          {subtitle && <div className="iris-kpi__subtitle">{subtitle}</div>}
        </div>
        {trendPct && (
          <div className={`iris-kpi__trend iris-kpi__trend--${direction}`}>
            {direction === 'up' ? <TrendUpIcon color={color} /> : <TrendDownIcon color={color} />}
            <span>{trendPct}</span>
          </div>
        )}
        {showPill && (
          <div className="iris-kpi__pill">
            {pillContent ?? <DollarIcon />}
          </div>
        )}
      </div>
      <div className="iris-kpi__chart">
        {isBar
          ? <BarSparkline direction={direction} big={chartType === 'barchart-big'} />
          : <LineSparkline direction={direction} />
        }
      </div>
    </div>
  );
}
