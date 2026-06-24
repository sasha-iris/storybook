import React from 'react';

// ── Types ────────────────────────────────────────────────────────────────────

type CellOption = 'default' | 'grey' | 'editable' | 'blue' | 'calculated' | 'waste' | 'indigo';
type RowType = 'default' | 'derival' | 'total' | 'non-collapsible';
type HHeaderType = 'default' | 'derival' | 'total' | 'union' | 'non-collapsible' | 'expand' | 'income' | 'disbursements';
type VHeaderType = 'default' | 'actuals' | 'forecast';

const ROW_CLASS: Record<RowType, string> = {
  default: 'iris-cell--row-default',
  derival: 'iris-cell--row-derived',
  total: 'iris-cell--row-total',
  'non-collapsible': 'iris-cell--row-noncoll',
};

// ── DataCell ─────────────────────────────────────────────────────────────────

interface DataCellProps {
  amount?: string;
  currency?: boolean;
  option?: CellOption;
  rowType?: RowType;
  caption?: string;
  width?: number;
  /** `option="editable"` only — shows the focused inline-edit state: blue focus ring, dark text. */
  editing?: boolean;
  onAmountChange?: (value: string) => void;
  className?: string;
}

/**
 * Right-aligned numeric data cell for financial tables.
 *
 * USE FOR: P&L tables, budget tables, reporting dashboards — any right-aligned numeric column
 * REPLACES MUI: custom TableCell with right align
 * DO NOT USE FOR: non-numeric cells → use LabelCell; cohort tables → use CohortCell
 *
 * Requires iris-components.css.
 */
export function DataCell({
  amount = '500,00',
  currency = true,
  option = 'default',
  rowType = 'default',
  caption,
  width,
  editing = false,
  onAmountChange,
  className,
}: DataCellProps) {
  const optClass = `iris-cell--${option}`;
  const rowClass = option === 'blue' ? '' : ` ${ROW_CLASS[rowType]}`;
  const cls = ['iris-cell', 'iris-cell--num', optClass + rowClass, className].filter(Boolean).join(' ');

  if (option === 'editable' && editing) {
    return (
      <div className={cls} style={{ width, padding: 0 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', border: '1px solid #1c64f2', borderRadius: 4, padding: '8px 16px', color: '#111928' }}>
          {currency && <span>$</span>}
          <input
            type="text"
            value={amount}
            onChange={(e) => onAmountChange?.(e.target.value)}
            autoFocus
            style={{ border: 'none', outline: 'none', background: 'transparent', color: 'inherit', font: 'inherit', textAlign: 'right', width: '100%' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cls} style={width ? { width } : undefined}>
      {currency && <span>$</span>}
      <span>{amount}</span>
      {caption && <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: '#6b7280' }}>{caption}</span>}
    </div>
  );
}

// ── LabelCell ────────────────────────────────────────────────────────────────

interface LabelCellProps {
  children: React.ReactNode;
  rowType?: RowType;
  bold?: boolean;
  indent?: number;
  width?: number;
  className?: string;
}

/**
 * Left-aligned row label cell — the first column in a financial table row.
 *
 * USE FOR: row labels in P&L, budget, or any financial table
 * REPLACES MUI: custom TableCell with left align
 */
export function LabelCell({
  children,
  rowType = 'default',
  bold = false,
  indent = 0,
  width = 200,
  className,
}: LabelCellProps) {
  const cls = ['iris-cell', 'iris-cell--default', ROW_CLASS[rowType], className].filter(Boolean).join(' ');
  const style: React.CSSProperties = {
    width,
    ...(indent ? { paddingLeft: 16 + indent } : {}),
    ...(bold ? { fontWeight: 'var(--font-semibold)' as React.CSSProperties['fontWeight'] } : {}),
  };

  return (
    <div className={cls} style={style}>
      <span>{children}</span>
    </div>
  );
}

// ── HHeader ──────────────────────────────────────────────────────────────────

interface HHeaderProps {
  children: React.ReactNode;
  type?: HHeaderType;
  bold?: boolean;
  width?: number;
  className?: string;
}

/**
 * Horizontal column category header (e.g. Income, Total, Forecast period columns).
 *
 * USE FOR: column group headers in financial tables
 * REPLACES MUI: custom TableHead cell
 */
export function HHeader({ children, type = 'default', bold = false, width, className }: HHeaderProps) {
  const cls = ['iris-th-h', `iris-th-h--${type}`, bold ? 'iris-th-h--bold' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} style={width ? { width } : undefined}>
      <span className="iris-th-h__label">{children}</span>
    </div>
  );
}

// ── VHeader ──────────────────────────────────────────────────────────────────

interface VHeaderProps {
  children: React.ReactNode;
  type?: VHeaderType;
  width?: number;
  className?: string;
}

/**
 * Vertical period header (e.g. ACTUALS, FORECAST column labels).
 *
 * USE FOR: period column headers above data cells in financial tables
 * REPLACES MUI: custom TableHead cell
 */
export function VHeader({ children, type = 'default', width, className }: VHeaderProps) {
  const cls = ['iris-th-v', `iris-th-v--${type}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} style={width ? { width } : undefined}>
      {children}
    </div>
  );
}
