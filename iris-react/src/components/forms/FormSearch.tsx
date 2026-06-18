import React from 'react';

interface FormSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

/**
 * Search input with leading search icon.
 *
 * USE FOR: table search bars, filter inputs, global search fields
 * REPLACES MUI: <TextField InputProps={{ startAdornment: <SearchIcon> }}>
 * DO NOT USE FOR: autocomplete with dropdown → Autocomplete component
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <FormSearch value={q} onChange={setQ} placeholder="Search transactions..." />
 */
export function FormSearch({
  value,
  onChange,
  placeholder = 'Search',
  label,
  disabled = false,
  id,
  className,
}: FormSearchProps) {
  const inputId = id ?? 'form-search';

  return (
    <div className={`form-group${className ? ' ' + className : ''}`}>
      {label && <label className="form-label" htmlFor={inputId}>{label}</label>}
      <div className="form-search-wrap">
        <span className="form-search-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 14L10.0001 10M11.3333 6.66667C11.3333 9.24399 9.24399 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.24399 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.24399 2 11.3333 4.08934 11.3333 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <input
          id={inputId}
          type="search"
          className="form-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={label ?? placeholder}
        />
      </div>
    </div>
  );
}
