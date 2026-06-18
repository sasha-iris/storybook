import React from 'react';

type CohortBand = '100' | '80' | '60' | '40' | '20' | '0' | 'empty';

interface CohortCellProps {
  value?: number;
  /** Override band manually (derived from value if not set). */
  band?: CohortBand;
  muted?: boolean;
  className?: string;
}

function getBand(pct: number): CohortBand {
  if (pct >= 90) return '100';
  if (pct >= 70) return '80';
  if (pct >= 50) return '60';
  if (pct >= 30) return '40';
  if (pct > 0)   return '20';
  return '0';
}

/**
 * Single cohort cell — colored percentage badge for cohort/retention tables.
 *
 * USE FOR: retention grids, cohort analysis, conversion funnel heatmaps
 * REPLACES MUI: custom <TableCell> with colored chip
 * DO NOT USE FOR: general table cells → IrisCell
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <CohortCell value={60} />
 * <CohortCell muted />
 */
export function CohortCell({ value, band, muted = false, className }: CohortCellProps) {
  const resolvedBand = band ?? (value != null ? getBand(value) : 'empty');
  return (
    <div
      className={['iris-cohort-cell', className].filter(Boolean).join(' ')}
      style={muted ? { background: 'var(--color-bg-secondary)' } : undefined}
    >
      <div className={`iris-cohort-badge iris-cohort-badge--${resolvedBand}`}>
        {resolvedBand === 'empty' ? '—' : `${value ?? ''}%`}
      </div>
    </div>
  );
}

// ── IrisCell — default table data cell ──────────────────────────────────────

interface IrisCellProps {
  children: React.ReactNode;
  numeric?: boolean;
  currency?: boolean;
  className?: string;
}

/**
 * Standard Iris table data cell.
 *
 * USE FOR: data cells in TableComposed, custom table implementations
 * REPLACES MUI: <TableCell>
 *
 * @example
 * <IrisCell>Feb 2023</IrisCell>
 * <IrisCell numeric currency>$25.00</IrisCell>
 */
export function IrisCell({ children, numeric = false, currency = false, className }: IrisCellProps) {
  return (
    <div className={['iris-cell', 'iris-cell--default', numeric ? 'iris-cell--num' : '', className].filter(Boolean).join(' ')}>
      {currency && <span>$</span>}
      <span>{children}</span>
    </div>
  );
}

// ── IrisTH — column header ────────────────────────────────────────────────────

interface IrisTHProps {
  children: React.ReactNode;
  width?: number;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

/**
 * Iris table column header — renders `.iris-th` label inside a flex container.
 *
 * USE FOR: column headers in iris table grids, modal tables, composed tables
 * REPLACES MUI: <TableCell component="th"> with styled label
 *
 * @example
 * <IrisTH width={120}>Revenue</IrisTH>
 */
export function IrisTH({ children, width, align = 'left', className }: IrisTHProps) {
  return (
    <div
      style={{
        width: width ? `${width}px` : undefined,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start',
        boxSizing: 'border-box',
      }}
      className={className}
    >
      <span className="iris-th">{children}</span>
    </div>
  );
}
