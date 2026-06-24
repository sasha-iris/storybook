# Component Selection Rules for AI Agents (Devin, Copilot, etc.)

## Priority order

1. **Iris first** — `@iris/react` is the default for all new UI.
2. **MUI as fallback** — only if a specific component is missing from Iris.
3. **Log the gap** — if you use MUI, add a comment: `// Iris gap: <ComponentName> not yet available`

## When to use Iris

- Any component listed in `iris-react/README.md` → use Iris
- "custom already existed" in this codebase = Iris component → use Iris, not MUI

## When to use MUI (fallback)

- Charts, complex data grids, virtual lists — these are not yet in Iris
- If unsure, check `iris-react/README.md` catalog first

## Quick cheat-sheet

| You need | Use |
|----------|-----|
| Button | `<Button color="primary">` from `@iris/react` |
| Text input | `<FormInput>` from `@iris/react` |
| Dropdown select | `<Select>` from `@iris/react` |
| Multi-value tag input | `<TagInput>` from `@iris/react` |
| File upload | `<FileUpload>` from `@iris/react` |
| OTP / verification code | `<CodeInput>` from `@iris/react` |
| Date picker | `<Datepicker>` / `<DateRangePicker>` from `@iris/react` |
| Month / Year picker | `<MonthPicker>` / `<YearPicker>` from `@iris/react` |
| Date of birth picker | `<DobPicker>` from `@iris/react` |
| Modal dialog | `<Modal>` from `@iris/react` |
| Slide-in panel | `<Drawer>` from `@iris/react` |
| Checkbox / Radio / Switch | `<Checkbox>` / `<RadioGroup>` / `<Toggle>` from `@iris/react` |
| Card-style radio selection | `<RadioCardGroup>` from `@iris/react` |
| Navigation sidebar (incl. nested nav) | `<Sidebar>` from `@iris/react` |
| Page tabs | `<Tabs>` from `@iris/react` |
| Action menu | `<Dropdown>` from `@iris/react` |
| Notification bell dropdown | `<NotificationMenu>` from `@iris/react` |
| Multi-select filter button | `<FilterSelectButton>` from `@iris/react` |
| Status chip | `<Badge>` from `@iris/react` |
| Two-line metric chip | `<Badge sub="...">` from `@iris/react` |
| Table pagination | `<Pagination>` from `@iris/react` |
| Loading skeleton | `<Skeleton>` from `@iris/react` |
| Composite search bar | `<SearchBar>` from `@iris/react` |
| View toggle (List/Kanban) | `<ButtonGroup>` from `@iris/react` — NOT `<Tabs>` |
| Financial/cohort table | `<TableComposed>` / `<CohortCell>` from `@iris/react` |
| Chart | MUI / Recharts / Victory (Iris gap) |
| Complex data grid / virtual list | MUI (Iris gap) |

## CSS import

Add to your app entry point (once):
```tsx
import 'path/to/iris-components.css';
```
