# Tabs

**Tabs** allow users to navigate between related views within the same context without leaving the page.

**When to use**
- Switch between different sections of related content (e.g. Overview / Details / History)
- Filter or segment a data set shown in the same area (e.g. Active / Archived / Draft)
- Organise form steps or configuration groups that don't require a separate page

**When NOT to use**
- Do not use tabs for navigation between unrelated pages — use the Sidebar or a nav menu instead
- Do not nest tabs inside other tabs — it creates orientation issues
- Do not use tabs when there are more than 7–8 items — consider a dropdown or sidebar nav

**Anatomy**
- **Label** — required; text identifying the tab's content section
- **Counter badge** — optional; numeric badge showing count (e.g. unread items, results)
- **Dropdown chevron** — optional; indicates the tab opens a sub-menu (chevron toggles down ↔ up)
- **Active indicator** — 2 px bottom border in brand purple (\

## Variants

- All states
- With counter badge
- With dropdown chevron
- Full tab bar (realistic)

## HTML examples

```html
<div role="tablist" style="display:flex;align-items:flex-end;border-bottom:1px solid var(--color-border-default);">
  <!-- Default -->
  <button role="tab" aria-selected="false"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#4b5563;border:none;border-bottom:2px solid transparent;
           margin-bottom:-1px;background:transparent;">
    Overview
  </button>

  <!-- Hover (applied via :hover in CSS) -->
  <button role="tab" aria-selected="false"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#374151;border:none;border-bottom:2px solid #d1d5db;
           margin-bottom:-1px;background:transparent;">
    Transactions
  </button>

  <!-- Active -->
  <button role="tab" aria-selected="true"
    style="padding:12px 16px;height:45px;font-size:var(--text-sm);font-weight:var(--font-medium);
           color:#42389d;border:none;border-bottom:2px solid #42389d;
           margin-bottom:-1px;background:transparent;">
    Reports
  </button>
</div>
```
