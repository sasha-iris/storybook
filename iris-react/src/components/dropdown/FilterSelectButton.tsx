import React, { useState, useRef, useEffect } from 'react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectButtonProps {
  label: string;
  icon?: React.ReactNode;
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  onClear?: () => void;
  className?: string;
}

const ChevronDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M14.707 5.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

/**
 * Multi-select filter button — opens a popover with checkboxes, stays open while selecting.
 * Shows a count badge when active, e.g. "Category (2)".
 *
 * USE FOR: filtering tables/lists by multiple values simultaneously (Category, Location, Status)
 * DO NOT USE FOR: single-value selection that closes immediately → Select (`.form-select`)
 *
 * CSS classes: dropdown-trigger--outline, dropdown-menu--checkbox, iris-control, iris-checkbox
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <FilterSelectButton label="Category" icon={<CategoryIcon />} options={categories} selected={selected} onChange={setSelected} />
 */
export function FilterSelectButton({ label, icon, options, selected, onChange, onClear, className }: FilterSelectButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  function toggle(value: string) {
    onChange(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]);
  }

  return (
    <div ref={ref} style={{ position: 'relative', width: 220 }} className={className}>
      <button
        type="button"
        className="dropdown-trigger dropdown-trigger--outline"
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-start', background: open ? 'var(--color-bg-muted)' : undefined }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {icon}
        <span style={{ flex: 1, textAlign: 'left', fontSize: 14 }}>
          {label}{selected.length > 0 && <strong> ({selected.length})</strong>}
        </span>
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {open && (
        <div className="dropdown-menu dropdown-menu--absolute dropdown-menu--checkbox" style={{ width: '100%', top: 'calc(100% + 4px)', left: 0 }}>
          {options.map((opt) => {
            const checked = selected.includes(opt.value);
            return (
              <label key={opt.value} className="iris-control" style={{ display: 'flex', gap: 8, alignItems: 'flex-start', cursor: 'pointer', width: '100%' }}>
                <span className="iris-control__check" style={{ marginTop: 2 }}>
                  <span className={`iris-checkbox${checked ? ' iris-checkbox--checked' : ''}`} role="checkbox" aria-checked={checked} onClick={() => toggle(opt.value)} />
                </span>
                <span className="iris-control__body"><span className="iris-control__label">{opt.label}</span></span>
              </label>
            );
          })}
          {selected.length > 0 && onClear && (
            <>
              <hr className="dropdown-divider" style={{ margin: 0 }} />
              <button type="button" className="btn btn-link btn-sm" style={{ width: '100%', textAlign: 'center', padding: 0 }} onClick={onClear}>Clear</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
