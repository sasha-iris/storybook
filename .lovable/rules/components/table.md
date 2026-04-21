# Table component rules

## Source

- `storybook/stories/TableCells.stories.js` — cell-level primitives
- `storybook/stories/CohortTable.stories.js` — cohort analysis table
- `storybook/stories/ComposedTable.stories.js` — composed financial / mixed tables

## Table families

### 1. Table cells (`TableCells.stories.js`)

Building blocks for all table types.

| Story name | What it covers |
|------------|---------------|
| `CellOptions` | All cell content types (text, badge, avatar, icon, link) |
| `CellRowTypes` | Row-level types: default, hover, selected, subtotal, total |
| `CellEditing` | Inline editable cell states |
| `CellWithCaption` | Cell with secondary caption/subtext below value |
| `HeaderHorizontal` | Standard horizontal column headers |
| `HeaderVertical` | Rotated vertical column headers (for wide tables) |
| `CellPercent` | Percentage value cell with optional bar fill |

### 2. Cohort analysis table (`CohortTable.stories.js`)

Purpose-built for retention/cohort analysis.

| Story name | What it covers |
|------------|---------------|
| `PercentBadgeRamp` | Color-ramped percentage badges across cohort cells |
| `CohortRowExample` | Single cohort row with time-decay shading |
| `CohortAnalysisTable` | Full cohort table with header + data rows |

### 3. Composed tables (`ComposedTable.stories.js`)

Production-ready composed table patterns.

| Story name | What it covers |
|------------|---------------|
| `FinancialTableBasic` | P&L / financial statement layout, row hierarchy |
| `FinancialTableRowTypes` | All financial row types: account, subtotal, total, divider |
| `FinancialTablePeriods` | Multi-period columns (monthly, quarterly, annual) |
| `MixedOptionTable` | Table mixing text, badge, avatar, percent, action cells |

## Cell type reference

| Type | When to use |
|------|------------|
| Text | Default — plain string value |
| Badge | Status values (Active, Pending, Error, etc.) |
| Avatar | Person/entity identity column |
| Link | Navigable row anchor or external reference |
| Icon | Binary state or category indicator |
| Percent + bar | Rate/share columns in analytics tables |
| Editable | Cells the user can modify inline |
| Caption | Value that needs a secondary label/unit |

## Row type reference

| Type | Visual treatment |
|------|-----------------|
| `default` | Standard row |
| `hover` | Highlighted background on pointer over |
| `selected` | Checked/selected state (checkbox column) |
| `subtotal` | Light background, medium-weight text |
| `total` | Strong background, bold text, top border |
| `divider` | Full-width separator row, no data |

## Usage rules

- Use `FinancialTableBasic` for any hierarchical ledger-style data (P&L, balance sheet, budget vs actual).
- Use `CohortAnalysisTable` for user/customer retention grids — do not build cohort tables from scratch.
- Use `MixedOptionTable` when a single table needs multiple cell types in the same row.
- Header row cells use `HeaderHorizontal` — only use `HeaderVertical` when column count > 8 and labels are long.
- Always include a total row (`total` row type) in financial tables.
- `CellPercent` bar fill color should use `var(--color-bg-brand)` for positive values and `var(--color-bg-danger)` for negative.

## What NOT to do

- Do not build raw `<table>` HTML without using the Iris cell and row type system.
- Do not use `colspan`/`rowspan` in cohort tables — the cohort component handles cell spanning internally.
- Do not mix `FinancialTableBasic` and `CohortAnalysisTable` patterns in the same table.
- Do not hard-code row background colors — use the row type tokens.
