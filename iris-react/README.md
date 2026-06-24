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

Every component's JSDoc includes a **USE FOR** / **DO NOT USE FOR** / **REPLACES MUI** block — check it in your editor before reaching for MUI.

---

## Component catalog

### Button family

| Component | Replaces MUI |
|-----------|--------------|
| `Button` | `<Button variant="contained/outlined">`, `<IconButton>` |
| `ButtonGroup` | `<ToggleButtonGroup>` |
| `ButtonLink` | `<Link component="button">`, `<Button variant="text">` |
| `ButtonSocial` | Custom OAuth button |
| `ButtonSpecial` | `<IconButton>` in chart/table toolbars |

```tsx
<Button color="primary" size="md" label="Save Changes" onClick={handleSave} />
<Button color="red" outline size="sm" label="Delete" onClick={handleDelete} />
<Button color="primary" iconOnly label="Star" iconLeft={<StarIcon />} ariaLabel="Star" />

<ButtonGroup
  segments={[{ label: 'Daily' }, { label: 'Cumulative' }]}
  activeIndex={0}
  primary
  size="sm"
  onChange={setMode}
/>

<ButtonLink label="View report" type="semibold" onClick={handleView} />
<ButtonLink label="Learn more" href="/docs" size="sm" />

<ButtonSocial label="Continue with Google" color="white-outline" icon={<GoogleIcon />} onClick={signInGoogle} />

<ButtonSpecial variant="chart" icon={<DownloadIcon />} ariaLabel="Download chart" onClick={downloadChart} />
<ButtonSpecial variant="table" icon={<EditIcon />} ariaLabel="Edit row" onClick={editRow} />
```

### Badge / Chip / Tag

| Component | Replaces MUI |
|-----------|--------------|
| `Badge` | `<Chip size="small">` |
| `Chip` | `<Chip clickable>`, `<Chip onDelete>` |
| `Tag` | `<Chip variant="outlined" size="small">` |

```tsx
<Badge label="Active" color="green" />
<Badge label="Beta" color="purple" onDismiss={handleDismiss} />
<Badge label="Critical" color="red" sub="11.0% rev" />{/* two-line metric chip */}

<Chip label="Finance" color="indigo" onDismiss={() => removeFilter('finance')} />
<Chip label="Active" color="green" onClick={handleToggle} />

<Tag label="Finance" color="indigo" />
<Tag label="Q4 2024" dot color="green" />
<Tag label="Draft" color="orange" onDismiss={handleRemove} />
```

### Forms

| Component | Replaces MUI |
|-----------|--------------|
| `FormInput` | `<TextField variant="outlined">` |
| `FormTextarea` | `<TextField multiline>` |
| `FormSearch` | `<TextField InputProps={{ startAdornment: SearchIcon }}>` |
| `TagInput` | `<Autocomplete multiple>` |
| `FileUpload` | custom `<input type="file">` styling |
| `ReadOnlyField` | `<TextField disabled>` |
| `CodeInput` | custom 6-box OTP composition |

```tsx
<FormInput label="Email" value={email} onChange={setEmail} placeholder="name@company.com" />
<FormInput label="Email" value={email} onChange={setEmail} fieldState="error" helpText="Required." />

<FormTextarea label="Message" value={msg} onChange={setMsg} rows={3} />

<FormSearch value={q} onChange={setQ} placeholder="Search transactions..." />

<TagInput label="Tags" tags={tags} onChange={setTags} placeholder="Add tag..." />
<TagInput variant="indigo" tags={selected} onChange={setSelected} placeholder="Placeholder" />{/* Multiselect pattern */}

<FileUpload type="default" label="Upload file" onFileSelect={setFile} />
<FileUpload type="drag" label="Upload image" onFileSelect={setFile} />
<FileUpload type="drag-btn" label="Upload CSV" onFileSelect={setFile} />

<ReadOnlyField label="Email:" value="namesurname@company.com" />

<CodeInput value={code} onChange={setCode} helpText="Enter the 6-digit code from your authenticator app." />
```

### Select / Autocomplete / Datepicker

| Component | Replaces MUI |
|-----------|--------------|
| `Select` | `<Select>`, `<TextField select>` |
| `Autocomplete` | `<Autocomplete>` |
| `Datepicker` / `DateRangePicker` | `<DatePicker>`, `<DateRangePicker>` |
| `MonthPicker` / `YearPicker` | `<DatePicker views={['month']}>` / `views={['year']}` |
| `DobPicker` | custom 3-column birthdate picker |
| `MonthYearTabPicker` | custom month/year toggle picker |

```tsx
<Select label="Language" options={langs} value={lang} onChange={setLang} />
<Select options={orgs} value={org} onChange={setOrg} variant="native" />{/* real <select>, server-submitted forms only */}

<Autocomplete options={metrics} value={query} onChange={setQuery} label="Search metric" placeholder="Type to search…" />

<Datepicker placeholder="Select date" onChange={setDate} />
<DateRangePicker onChange={(start, end) => setRange({ start, end })} />
<MonthPicker onChange={(month, year) => setPeriod({ month, year })} />
<YearPicker value={year} onChange={setYear} />
<DobPicker value={dob} onChange={setDob} />
<MonthYearTabPicker value={period} onChange={setPeriod} />
```

### Controls

| Component | Replaces MUI |
|-----------|--------------|
| `Checkbox` | `<Checkbox>`, `<FormControlLabel control={<Checkbox>}>` |
| `RadioGroup` | `<RadioGroup>`, `<Radio>` |
| `Toggle` | `<Switch>`, `<FormControlLabel control={<Switch>}>` |
| `RadioCardGroup` | custom card+radio composition |
| `RangeSlider` | `<Slider>` |

```tsx
<Checkbox label="Accept terms" checked={checked} onChange={setChecked} />
<Checkbox label="Destructive" checked={checked} onChange={setChecked} destructive />

<RadioGroup name="plan" options={[{ value: 'a', label: 'Free' }, { value: 'b', label: 'Pro' }]} value={plan} onChange={setPlan} />

<Toggle label="Email notifications" on={enabled} onChange={setEnabled} />

<RadioCardGroup
  name="auth"
  value={method}
  onChange={setMethod}
  options={[
    { value: 'sms', label: 'SMS', helper: 'Receive a code via text message' },
    { value: 'app', label: 'Authenticator App', helper: 'Use an authenticator app' },
  ]}
/>

<RangeSlider value={volume} onChange={setVolume} label="Volume" showValue />
```

### Cards

| Component | Replaces MUI |
|-----------|--------------|
| `Card` | `<Card>`, `<CardContent>`, `<CardHeader>` |
| `CardKPI` | custom metric card with sparkline |
| `CardReporting` | custom report config card |
| `CardWithButton` / `CardWithLink` / `HorizontalCard` | Card/Basics layout recipes |
| `UserProfileCard`, `PricingCard`, `StatsCard`, `SignInCard`, `EcommerceCard`, `CustomerListCard`, `CTACard`, `NavTabsCard`, `TestimonialCard`, `CryptoWalletCard` | marketing/dashboard card recipes |
| `CardStateWrapper`, `CardEmptyBody`, `CardErrorBody`, `CardLoadingBody` | loading/empty/error guards for any card |

```tsx
<Card title="Recent Activity" subtitle="Last 30 days" body="Your account has 12 new transactions this week." />

<CardKPI label="Total Sales" value="$16,416" trendPct="+12.5%" direction="up" chartType="linechart" />
<CardKPI label="Spend" value="$3,200" trendPct="+8.4%" direction="up" chartType="barchart" />

<CardReporting
  title="Daily Report"
  enabled={reportOn}
  onToggle={setReportOn}
  scheduleText="Every day at 7am (PST)"
  channels={['email', 'slack']}
  recipients={['alice@company.com']}
  salesChannels={['shopify', 'amazon']}
  owner="iris"
/>

<CardWithButton title="Noteworthy acquisitions" body="..." ctaLabel="Read more" onCta={handleRead} />

{/* Loading / empty / error states for any card body */}
<div className="card">
  <div className="card-header"><div className="card-header-title">Revenue</div></div>
  <CardStateWrapper state={loading ? 'loading' : error ? 'error' : data?.length ? 'loaded' : 'empty'} onRetry={refetch}>
    <div className="card-body-padded">{/* real content */}</div>
  </CardStateWrapper>
</div>
```

### Feedback

| Component | Replaces MUI |
|-----------|--------------|
| `Alert` | `<Alert severity="...">` |
| `Banner` | custom Alert + AppBar composition |
| `Toast` | `<Snackbar>`, `<Snackbar><Alert>` |

```tsx
<Alert heading="Changes saved" color="success" icon={<CheckCircleIcon />} onDismiss={clearAlert} />
<Alert heading="Payment failed" body="Card was declined." color="danger" actionLabel="Retry" onAction={retry} />

<Banner variant="default" text="New features available!" ctaLabel="Learn more" onCta={openChangelog} onDismiss={dismiss} />
<Banner variant="cta" heading="Integration is the key" text="..." ctaLabel="Get started" onCta={start} secondaryCtaLabel="Learn more" onSecondaryCta={learnMore} />
<Banner variant="newsletter" text="Sign up to our newsletter" onSubscribe={subscribe} />

<Toast title="Changes saved" color="success" onDismiss={hide} />
<Toast variant="interactive" title="Update available" description="..." ctaLabel="Update now" onCta={update} />
<Toast variant="push" title="Bonnie Green" description="commented on your post" onDismiss={hide} />
```

### Overlays

| Component | Replaces MUI |
|-----------|--------------|
| `Modal` | `<Dialog>`, `<DialogTitle>`, `<DialogContent>`, `<DialogActions>` |
| `Drawer` | `<Drawer permanent/temporary>` |

```tsx
<Modal open={isOpen} onClose={close} title="Confirm deletion"
  footer={<><Button label="Delete" color="red" onClick={handleDelete} /><Button label="Cancel" color="alternative" onClick={close} /></>}
>
  <p>Are you sure you want to delete this item?</p>
</Modal>

{/* Titleless PopUp pattern — omit `title` for a borderless, close-button-only header */}
<Modal open={isOpen} onClose={close} size="sm" footer={<>...</>}>
  <div style={{ textAlign: 'center' }}>Are you sure you want to delete this product?</div>
</Modal>

<Drawer open={drawerOpen} onClose={close} title="Filter panel" footer={<>...</>}>
  <p>Drawer content goes here.</p>
</Drawer>
```

### Navigation

| Component | Replaces MUI |
|-----------|--------------|
| `Sidebar` | `<Drawer permanent>` + nav list |
| `Tabs` | `<Tabs>`, `<Tab>` |
| `Breadcrumbs` | `<Breadcrumbs>` |
| `Pagination` | `<Pagination>`, `<TablePagination>` |
| `Dropdown` | `<Menu>`, `<MenuItem>` |
| `NotificationMenu` | custom notification dropdown |
| `FilterSelectButton` | multi-select filter popover |

```tsx
<Sidebar
  items={[
    { key: 'overview', label: 'Overview', icon: <HomeIcon /> },
    { key: 'financial', label: 'Financial model', icon: <DollarIcon />, children: [
      { key: 'revenue', label: 'Revenue' }, { key: 'expenses', label: 'Expenses' },
    ] },
  ]}
  activeKey={route}
  onItemClick={navigate}
  color="gray"
/>

<Tabs tabs={[{ key: 'overview', label: 'Overview' }, { key: 'txn', label: 'Transactions', count: 42 }]} activeKey={tab} onChange={setTab} />

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Settings' }, { label: '2FA' }]} />

<Pagination currentPage={page} totalPages={10} onPageChange={setPage} totalItems={96} pageSize={10} />

<Dropdown
  trigger={<Button label="Actions" iconRight={<ChevronIcon />} />}
  items={[{ key: 'edit', label: 'Edit', onClick: handleEdit }, { key: 'delete', label: 'Delete', danger: true, onClick: handleDelete }]}
/>

<NotificationMenu notifications={[{ initials: 'JL', message: 'Jese Leos: "Hey!"', time: 'a few moments ago' }]} onViewAll={openAll} />

<FilterSelectButton label="Category" icon={<CategoryIcon />} options={categories} selected={selected} onChange={setSelected} onClear={() => setSelected([])} />
```

### Layout / structure

| Component | Replaces MUI |
|-----------|--------------|
| `Accordion` | `<Accordion>`, `<AccordionSummary>` |
| `ListGroup` | `<List>`, `<ListItem>` |
| `Stepper` / `StandaloneSteps` | `<Stepper>`, `<Step>` |
| `Tooltip` | `<Tooltip>` |
| `SearchBar` | composite search bar (input + select/button/flag) |
| `Logo` | brand mark + wordmark |

```tsx
<Accordion items={faqItems} style="flush" defaultOpenKey="faq-1" />

<ListGroup items={[{ key: 'profile', label: 'Profile' }, { key: 'settings', label: 'Settings', active: true }]} />

<Stepper steps={[{ label: 'Account' }, { label: 'Plan' }, { label: 'Payment' }]} activeStep={1} />
<StandaloneSteps steps={[{ title: 'Install an authenticator app', description: '...' }, { title: 'Scan the QR code', description: '...' }]} />

<Tooltip content="Save changes" position="top"><button className="btn-icon" aria-label="Save"><SaveIcon /></button></Tooltip>

<SearchBar type="input-select-btn" value={q} onChange={setQ} categories={['All', 'Mockups', 'Logos']} category={cat} onCategoryChange={setCat} onSearch={runSearch} />

<Logo size="sm" />
<Logo size="md" dark showText={false} />
```

### Data / tables

| Component | Replaces MUI |
|-----------|--------------|
| `DataCell` / `LabelCell` / `HHeader` / `VHeader` | custom `<TableCell>` |
| `TableComposed` / `TableRow` | full `<Table>` composition |
| `CohortCell` / `IrisCell` / `IrisTH` | custom heatmap/cohort table cells |

```tsx
<TableComposed
  periodHeaders={[{ label: 'ACTUALS', type: 'actuals' }, { label: 'FORECAST', type: 'forecast' }]}
  colHeaders={[{ label: 'Revenue', type: 'income' }, { label: 'Total', type: 'total', bold: true }]}
  rows={[
    { label: 'Online Sales', cells: [{ amount: '142,500' }, { amount: '142,500', option: 'calculated' }] },
    { label: 'Total Revenue', rowType: 'total', bold: true, cells: [{ amount: '180,700', option: 'calculated' }, { amount: '180,700', option: 'calculated' }] },
  ]}
/>

{/* Editable cell */}
<DataCell amount={amount} option="editable" editing={isEditing} onAmountChange={setAmount} />

<CohortCell value={72} />{/* renders the 10-step percent badge ramp, text auto-flips white at 60%+ */}
```

### Status / indicators

| Component | Replaces MUI |
|-----------|--------------|
| `ProgressBar` | `<LinearProgress>` |
| `Skeleton` | `<Skeleton>` |
| `IndicatorDot` | custom legend chip |
| `IndicatorCount` | `<Badge badgeContent={n}>` |
| `IndicatorBadge` | custom presence pill |

```tsx
<ProgressBar value={72} color="primary" label="above" />
<ProgressBar value={45} color="green" label="below" />

<Skeleton variant="text" width="100%" height={12} />
<Skeleton variant="avatar" width={48} height={48} />
<Skeleton variant="image" width={200} height={120} />

<IndicatorDot label="Revenue" color="blue" />

<div style={{ position: 'relative', display: 'inline-flex' }}>
  <Button label="Messages" color="blue" />
  <IndicatorCount count={8} />{/* position with a wrapping relative container */}
</div>

<IndicatorBadge variant="available" />{/* defaults to "Available" / "Unavailable" labels */}
```

### Misc

| Component | Replaces MUI |
|-----------|--------------|
| `KBD` | custom `<kbd>` |
| `QRFrame` | custom QR wrapper |

```tsx
<KBD keys="⌘K" />
<KBD keys={['⌘', 'Shift', 'P']} />{/* renders as adjacent kbd elements, no "+" separator */}

<QRFrame><YourQRCodeSvg /></QRFrame>
```

---

## Known gaps (use MUI as fallback)

- Charts, complex data grids, virtual lists — not in Iris, use MUI/Recharts/Victory.

## Usage with AI coding agents

See `AGENTS.md` for component-selection priority rules (Iris first, MUI fallback).
