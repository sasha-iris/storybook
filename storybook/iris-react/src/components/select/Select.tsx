import React, { useState, useRef, useEffect, useId } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  helpText?: string;
  disabled?: boolean;
  /** 'native' renders a real <select> (fast, accessible); 'custom' renders a styled combobox.
   *  Default: 'custom' — avoids OS gray popup on macOS. */
  variant?: 'native' | 'custom';
  id?: string;
  className?: string;
}

/**
 * Single-value dropdown select.
 *
 * USE FOR: form field selection (language, country, timezone, category), filter dropdowns,
 *   settings panels with a fixed list of options
 * REPLACES MUI: <Select>, <FormControl><Select>, <TextField select>
 * DO NOT USE FOR:
 *   - Multi-select → combine with TagInput pattern
 *   - Autocomplete with search → Autocomplete component
 *
 * Variant 'custom' (default) avoids the macOS native gray popup — always prefer it
 * when the dropdown is visible in main UI. Use 'native' only inside <form> with
 * server-side submit where CSS styling is not a concern.
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Select label="Language" options={langs} value={lang} onChange={setLang} />
 * <Select options={orgs} value={org} onChange={setOrg} variant="native" />
 */
export function Select({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select…',
  error,
  helpText,
  disabled = false,
  variant = 'custom',
  id,
  className,
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const listboxId = `${selectId}-listbox`;

  const selectedOption = options.find((o) => o.value === value);

  // Native variant
  if (variant === 'native') {
    return (
      <div className={`form-group${className ? ' ' + className : ''}`}>
        {label && <label className="form-label" htmlFor={selectId}>{label}</label>}
        <select
          id={selectId}
          className={`form-select${error ? ' is-error' : ''}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          aria-describedby={error ? `${selectId}-err` : helpText ? `${selectId}-help` : undefined}
          aria-invalid={!!error}
        >
          {!value && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        {error && <p id={`${selectId}-err`} className="form-feedback-error">{error}</p>}
        {!error && helpText && <p id={`${selectId}-help`} className="form-helper">{helpText}</p>}
      </div>
    );
  }

  // Custom combobox variant
  return (
    <CustomSelect
      label={label}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      helpText={helpText}
      disabled={disabled}
      selectId={selectId}
      listboxId={listboxId}
      className={className}
    />
  );
}

// ── Custom combobox (no OS popup) ─────────────────────────────────────────────

interface CustomSelectInternalProps extends Omit<SelectProps, 'variant' | 'id'> {
  selectId: string;
  listboxId: string;
}

function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select…',
  error,
  helpText,
  disabled = false,
  selectId,
  listboxId,
  className,
}: CustomSelectInternalProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen((o) => !o); }
    if (e.key === 'Escape') setOpen(false);
  }

  function selectOption(v: string) {
    onChange(v);
    setOpen(false);
  }

  return (
    <div className={`form-group${className ? ' ' + className : ''}`} ref={wrapRef}>
      {label && <label className="form-label" htmlFor={selectId}>{label}</label>}
      <button
        type="button"
        id={selectId}
        className={`form-select${error ? ' is-error' : ''}`}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-describedby={error ? `${selectId}-err` : helpText ? `${selectId}-help` : undefined}
        aria-invalid={!!error}
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleKey}
      >
        {selected ? selected.label : <span style={{ opacity: 0.5 }}>{placeholder}</span>}
      </button>
      {open && (
        <ul
          id={listboxId}
          className="dropdown-menu dropdown-menu--absolute"
          role="listbox"
          aria-labelledby={label ? selectId : undefined}
        >
          {options.map((o) => (
            <li key={o.value} role="option" aria-selected={o.value === value}>
              <button
                type="button"
                className={`dropdown-item${o.value === value ? ' active' : ''}`}
                onClick={() => selectOption(o.value)}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && <p id={`${selectId}-err`} className="form-feedback-error">{error}</p>}
      {!error && helpText && <p id={`${selectId}-help`} className="form-helper">{helpText}</p>}
    </div>
  );
}
