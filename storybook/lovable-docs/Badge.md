# Badge

Status badges for labeling content, categorizing items, and indicating state.

**When to use**
- Label a record's status (Active, Pending, Archived)
- Categorize items by topic, priority, or type
- Show a removable filter chip in a search or filter bar

**When NOT to use**
- Interactive filter toggles → use Toggle buttons or Chips
- Long explanatory text → use an Alert or inline notice
- Navigation indicators → use a Tab with a counter instead

**Anatomy**
\

## Variants

- Colors — all 8 themes
- Sizes — lg and sm
- With icon — all themes
- Dismissible — with × button

## HTML examples

```html
<!-- Gray — neutral status -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#f3f4f6;color:#101828;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Neutral</span>

<!-- Green — success / active -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#d0fae5;color:#006045;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Active</span>

<!-- Red — error / failed -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#ffe2e2;color:#9f0712;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Failed</span>

<!-- Yellow — warning / pending -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#fef9c2;color:#894b00;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">Pending</span>
```

```html
<!-- lg (default) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">In review</span>

<!-- sm (compact) -->
<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-xs);font-weight:var(--font-medium);border-radius:6px;padding:2px 10px;white-space:nowrap;line-height:1.5;">In review</span>
```

```html
<span style="display:inline-flex;align-items:center;gap:4px;background:#e5edff;color:#42389d;font-size:var(--text-sm);font-weight:400;border-radius:6px;padding:2px 12px;white-space:nowrap;line-height:1.5;">
  <svg width="16" height="16" viewBox="0 0 20 20" fill="#42389d" aria-hidden="true" style="flex-shrink:0;">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5H10.75V5z" clip-rule="evenodd"/>
  </svg>
  <span>Scheduled</span>
</span>
```
