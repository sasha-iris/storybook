import React from 'react';
import { DataCell, LabelCell, HHeader, VHeader } from './Table';

// ── Types ────────────────────────────────────────────────────────────────────

type CellOption = 'default' | 'grey' | 'editable' | 'blue' | 'calculated' | 'waste' | 'indigo';
type RowType = 'default' | 'derival' | 'total' | 'non-collapsible';
type HHeaderType = 'default' | 'derival' | 'total' | 'union' | 'non-collapsible' | 'expand' | 'income' | 'disbursements';
type VHeaderType = 'default' | 'actuals' | 'forecast';

export interface TableCellDef {
  amount?: string;
  option?: CellOption;
  currency?: boolean;
  width?: number;
}

export interface TableRowDef {
  label: string;
  rowType?: RowType;
  bold?: boolean;
  indent?: number;
  labelWidth?: number;
  cells: TableCellDef[];
}

export interface PeriodHeaderDef {
  label: string;
  type?: VHeaderType;
  width?: number;
}

export interface ColHeaderDef {
  label: string;
  type?: HHeaderType;
  bold?: boolean;
  width?: number;
}

// ── TableRow ─────────────────────────────────────────────────────────────────

interface TableRowProps {
  row: TableRowDef;
}

const DIVIDER = <div style={{ height: 1, background: 'var(--color-border-default)', flexShrink: 0, width: '100%' }} />;

/**
 * Single flex row: label cell on the left + data cells to the right.
 *
 * USE FOR: individual rows inside a TableComposed / financial table
 */
export function TableRow({ row }: TableRowProps) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <LabelCell
          rowType={row.rowType}
          bold={row.bold}
          indent={row.indent}
          width={row.labelWidth ?? 200}
        >
          {row.label}
        </LabelCell>
        {row.cells.map((cell, i) => (
          <DataCell
            key={i}
            amount={cell.amount ?? '—'}
            option={cell.amount === '—' || cell.amount == null ? 'grey' : (cell.option ?? 'default')}
            rowType={row.rowType ?? 'default'}
            currency={cell.currency ?? true}
            width={cell.width}
          />
        ))}
      </div>
      {DIVIDER}
    </>
  );
}

// ── TableComposed ─────────────────────────────────────────────────────────────

interface TableComposedProps {
  periodHeaders?: PeriodHeaderDef[];
  colHeaders?: ColHeaderDef[];
  rows: TableRowDef[];
  labelWidth?: number;
  className?: string;
}

/**
 * Full composed financial table: period headers + column category headers + data rows.
 *
 * USE FOR: P&L tables, budget tables, financial reporting with multiple column groups
 * REPLACES MUI: complex DataGrid composition
 * DO NOT USE FOR: simple lists → ListGroup; cohort analysis → TableCohort
 *
 * @example
 * <TableComposed
 *   periodHeaders={[{ label: 'ACTUALS', type: 'actuals', width: 120 }]}
 *   colHeaders={[{ label: 'Revenue', type: 'income', width: 120 }]}
 *   rows={[
 *     { label: 'Online Sales', cells: [{ amount: '142,500' }] },
 *     { label: 'Total', rowType: 'total', bold: true, cells: [{ amount: '142,500', option: 'calculated' }] },
 *   ]}
 * />
 *
 * Requires iris-components.css.
 */
export function TableComposed({
  periodHeaders,
  colHeaders,
  rows,
  labelWidth = 200,
  className,
}: TableComposedProps) {
  return (
    <div style={{ overflowX: 'auto' }} className={className}>
      <div style={{
        display: 'inline-flex',
        flexDirection: 'column',
        border: '1px solid var(--color-border-default)',
        borderRadius: 8,
        overflow: 'hidden',
        minWidth: 'max-content',
      }}>
        {periodHeaders && periodHeaders.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <div style={{ width: labelWidth, flexShrink: 0 }} />
            {periodHeaders.map((ph, i) => (
              <VHeader key={i} type={ph.type} width={ph.width}>{ph.label}</VHeader>
            ))}
          </div>
        )}

        {colHeaders && colHeaders.length > 0 && (
          <>
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              <div style={{ width: labelWidth, flexShrink: 0 }} />
              {colHeaders.map((ch, i) => (
                <HHeader key={i} type={ch.type} bold={ch.bold ?? true} width={ch.width}>{ch.label}</HHeader>
              ))}
            </div>
            {DIVIDER}
          </>
        )}

        {rows.map((row, i) => (
          <TableRow key={i} row={{ ...row, labelWidth: row.labelWidth ?? labelWidth }} />
        ))}
      </div>
    </div>
  );
}
