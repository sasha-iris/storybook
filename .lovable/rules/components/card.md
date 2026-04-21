# Card component rules

## Source

- `storybook/stories/Card.stories.js` — core card variants
- `storybook/stories/CardLayouts.stories.js` — composed layout cards
- `storybook/stories/KpiCard.stories.js` — KPI / metric / chart cards
- `storybook/stories/ChartCard.stories.js` — chart container cards
- `storybook/stories/ReportingCard.stories.js` — reporting / analytics cards

## Supported card families

### 1. Content cards (`Card.stories.js`)

| Story name | Use case |
|------------|----------|
| `Default` | Basic content card — title, body, optional footer |
| `WithImage` | Card with top media area |
| `WithHeaderControls` | Card with action controls in header (menu, button) |
| `CardWithButton` | Card with primary CTA button in footer |
| `WithLink` | Entire card is a clickable link target |
| `HorizontalCard` | Side-by-side media + content layout |

### 2. Composed layout cards (`CardLayouts.stories.js`)

| Story name | Use case |
|------------|----------|
| `UserProfileCard` | Avatar, name, role, social links |
| `WithFormInputs` | Card containing form fields |
| `EcommerceCard` | Product image, price, add-to-cart |
| `CardWithList` | Card with an internal list/table |
| `PricingCard` | Tier name, price, feature list, CTA |
| `CTACard` | Promotional / conversion card |
| `NavTabsCard` | Card with internal tab navigation |
| `StatsCard` | Numerical stat with label and trend |
| `TestimonialCard` | Quote, author avatar, attribution |
| `CryptoCard` | Token symbol, price, mini-chart |

### 3. KPI / metric / chart cards (`KpiCard.stories.js`)

| Story name | Use case |
|------------|----------|
| `BarchartUp` | KPI with upward bar spark chart |
| `BarchartDown` | KPI with downward bar spark chart |
| `BarchartBig` | KPI with full-width bar chart |
| `LinechartUp` | KPI with upward line spark |
| `LinechartDown` | KPI with downward line spark |
| `LinechartVertUp` | KPI with vertical upward line |
| `LinechartVertDown` | KPI with vertical downward line |
| `CreditUp` | Credit/score KPI card |
| `SegmentedBarChart` | KPI with segmented progress bar |

### 4. Chart container cards (`ChartCard.stories.js`)

| Story name | Use case |
|------------|----------|
| `Default` | Basic chart wrapper card |
| `LineVariants` | Line chart in card, multiple variants |
| `BarVariants` | Bar chart in card, multiple variants |
| `FourUpGrid` | 2×2 grid of small chart cards |

### 5. Reporting / analytics cards (`ReportingCard.stories.js`)

| Story name | Use case |
|------------|----------|
| `Default` | Standard reporting card |
| `Interactive` | Reporting card with interactive controls |
| `Hovered` | Hover state rendering |
| `Inactive` | Deselected/inactive state |
| `UserOwner` | Card with user ownership badge (Iris mark xs) |
| `AllVariants` | Full variant matrix |

## Card states

| State | Story |
|-------|-------|
| Loading | Skeleton placeholder (`States.stories.js` → `Loading`) |
| Empty | No-data empty state (`States.stories.js` → `Empty`) |
| Error | Error state with message (`States.stories.js` → `Error`) |
| Default | Normal rendered state |

## Card anatomy

```
┌─────────────────────────────┐
│  [Header]  title  [controls]│  ← optional controls (menu, button)
├─────────────────────────────┤
│  [Media]  image / chart     │  ← optional
├─────────────────────────────┤
│  [Body]   text content      │
│  [Value]  KPI number/trend  │  ← KPI cards only
│  [Chart]  spark / bar / line│  ← KPI/chart cards only
├─────────────────────────────┤
│  [Footer] actions / badges  │  ← optional
└─────────────────────────────┘
```

Required: Body (or Value for KPI).  
All other zones are optional.

## Usage rules

- Use `UserOwner` variant when a card belongs to a specific user — show the Iris xs mark + avatar.
- KPI cards must show a trend indicator (up/down arrow + percentage).
- Do not add `border-radius` to the Iris mark image — the SVG already includes the shape.
- `HorizontalCard` is for fixed-height contexts; do not use in variable-height grid rows.
- `FourUpGrid` expects 4 chart cards of equal size — do not mix card types in the grid.
- `PricingCard` CTA button should always be `primary` color, `lg` size.

## What NOT to do

- Do not invent card variants not listed above (e.g. `CardMetric` has been removed — no Figma basis).
- Do not nest cards inside cards.
- Do not add drop shadows beyond what the existing card CSS provides.
- Do not use raw `background-color` hex inside card markup — use `var(--color-bg-*)` tokens.
