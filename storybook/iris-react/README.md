# @iris/react

Iris Design System — React component library. Thin className wrappers over `iris-components.css`. No runtime CSS-in-JS.

## Setup

1. Install peer dependencies: `react >=17`
2. Import the Iris CSS once at your app entry point:

```tsx
// app entry — e.g. main.tsx / App.tsx
import 'path/to/iris-components.css';
```

3. Import components:

```tsx
import { Button, Badge, FormInput, Modal, Tabs } from '@iris/react';
```

---

## Component catalog

| Component | Iris class | Replaces MUI |
|-----------|-----------|--------------|
| `Button` | `.btn .btn-{color} .btn-{size}` | `<Button variant="contained/outlined">` |
| `ButtonGroup` | `.btn-group` | `<ToggleButtonGroup>` |
| `ButtonLink` | `.btn-link .btn-link-medium` | `<Link component="button">`, `<Button variant="text">` |
| `ButtonSocial` | `.btn-social .btn-social-{color}` | Custom OAuth button |
| `ButtonSpecial` | `.btn-special .btn-special--{variant}` | `<IconButton>`, table row actions |
| `Badge` | `.badge .badge-{color}` | `<Chip size="small">` |
| `Chip` | `.iris-chip .iris-chip--{color}` | `<Chip clickable>`, `<Chip onDelete>` |
| `Tag` | `.tag .tag-{color}` | `<Chip variant="outlined" size="small">` |
| `FormInput` | `.form-group .form-label .form-input` | `<TextField variant="outlined">` |
| `FormTextarea` | `.form-textarea` | `<TextField multiline>` |
| `FormSearch` | `.form-search-wrap .form-search-icon` | `<TextField InputProps={{ startAdornment: SearchIcon }}>` |
| `Select` | `.form-select` + combobox pattern | `<Select>`, `<TextField select>` |
| `Autocomplete` | `.iris-autocomplete .iris-autocomplete__menu` | `<Autocomplete>` |
| `Checkbox` | `.iris-checkbox .iris-control` | `<Checkbox>`, `<FormControlLabel control={<Checkbox>}>` |
| `RadioGroup` | `.iris-radio .iris-control` | `<RadioGroup>`, `<Radio>` |
| `Toggle` | `.iris-toggle .iris-control` | `<Switch>`, `<FormControlLabel control={<Switch>}>` |
| `RadioCardGroup` | `.iris-radio-card` | Custom card+radio composition |
| `RangeSlider` | `.form-range` | `<Slider>` |
| `Card` | `.card .card-header .card-body-padded` | `<Card>`, `<CardContent>`, `<CardHeader>` |
| `CardKPI` | `.card-stat-label .card-stat-value .card-trend` | Custom metric card |
| `CardReporting` | `.card-reporting` | Custom report config card |
| `Alert` | `.alert .alert-{color}` | `<Alert severity="...">` |
| `Banner` | `.banner .banner--{variant}` | Custom Alert + AppBar |
| `Toast` | `.toast .toast-body` | `<Snackbar>`, `<Snackbar><Alert>` |
| `Modal` | `.modal-dialog .modal-header .modal-body .modal-footer` | `<Dialog>`, `<DialogTitle>`, `<DialogContent>` |
| `Drawer` | inline styles (no Iris class) | `<Drawer permanent/temporary>` |
| `Sidebar` | `.sidebar .sidebar-item` | `<Drawer permanent>` + nav list |
| `Tabs` | `.iris-tab-bar .iris-tab .iris-tab--active` | `<Tabs>`, `<Tab>` |
| `Breadcrumbs` | `.breadcrumb .breadcrumb-item` | `<Breadcrumbs>` |
| `Pagination` | `.pagination .page-item .page-link` | `<Pagination>`, `<TablePagination>` |
| `Accordion` | `.accordion .accordion-item .accordion-header` | `<Accordion>`, `<AccordionSummary>` |
| `ListGroup` | `.list-group .list-group-item` | `<List>`, `<ListItem>` |
| `Stepper` | `.stepper--dots .stepper-item .stepper-dot` | `<Stepper>`, `<Step>` |
| `Dropdown` | `.dropdown-menu .dropdown-item` | `<Menu>`, `<MenuItem>` |
| `Tooltip` | `.tooltip-wrap .tooltip-bubble` | `<Tooltip>` |
| `ProgressBar` | `.progress .progress-bar .progress-bar-{color}` | `<LinearProgress>` |
| `Skeleton` | `.skeleton .skeleton-avatar .skeleton-image` | `<Skeleton>` |
| `IndicatorDot` | `.iris-indicator .iris-indicator__dot` | Custom legend chip |
| `IndicatorCount` | `.iris-indicator__count` | `<Badge badgeContent={n}>` |
| `IndicatorBadge` | `.iris-indicator-badge` | Custom presence dot |
| `CohortCell` | `.iris-cohort-cell .iris-cohort-badge` | Custom heatmap cell |
| `IrisCell` | `.iris-cell .iris-cell--default` | `<TableCell>` |
| `IrisTH` | `.iris-th` | `<TableCell component="th">` |
| `KBD` | `.kbd .kbd-combo` | Custom `<kbd>` |
| `QRFrame` | `.qr-frame` | Custom QR wrapper |

---

## Usage with Devin

See `AGENTS.md` in the consuming repo for component priority rules.
