# Component Selection Rules for AI Agents (Devin, Copilot, etc.)

## Priority order

1. **Iris first** — `@iris/react` is the default for all new UI.
2. **MUI as fallback** — only if a specific component is missing from Iris.
3. **Log the gap** — if you use MUI, add a comment: `// Iris gap: <ComponentName> not yet available`

## When to use Iris

- Any component listed in `iris-react/README.md` → use Iris
- "custom already existed" in this codebase = Iris component → use Iris, not MUI

## When to use MUI (fallback)

- Charts, complex data grids, date pickers, virtual lists — these are not yet in Iris
- If unsure, check `iris-react/README.md` catalog first

## Quick cheat-sheet

| You need | Use |
|----------|-----|
| Button | `<Button color="primary">` from `@iris/react` |
| Text input | `<FormInput>` from `@iris/react` |
| Dropdown select | `<Select>` from `@iris/react` |
| Modal dialog | `<Modal>` from `@iris/react` |
| Checkbox / Radio / Switch | `<Checkbox>` / `<RadioGroup>` / `<Toggle>` from `@iris/react` |
| Navigation sidebar | `<Sidebar>` from `@iris/react` |
| Page tabs | `<Tabs>` from `@iris/react` |
| Status chip | `<Badge>` from `@iris/react` |
| Table pagination | `<Pagination>` from `@iris/react` |
| Loading skeleton | `<Skeleton>` from `@iris/react` |
| View toggle (List/Kanban) | `<ButtonGroup>` from `@iris/react` — NOT `<Tabs>` |
| Chart | MUI / Recharts / Victory (Iris gap) |

## CSS import

Add to your app entry point (once):
```tsx
import 'path/to/iris-components.css';
```
