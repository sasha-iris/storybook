import React, { useState, useRef, useEffect, useId } from 'react';

interface AutocompleteOption {
  value: string;
  label: string;
  group?: string;
}

interface AutocompleteProps {
  options: AutocompleteOption[];
  value: string;
  onChange: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  label?: string;
  ctaLabel?: string;
  onCta?: () => void;
  size?: 'default' | 'sm' | 'lg';
  id?: string;
  className?: string;
}

/**
 * Autocomplete search input with a filterable suggestion menu.
 *
 * USE FOR: global search, item picker with many options, command palette,
 *   organization/user/product search
 * REPLACES MUI: <Autocomplete>, <TextField> + controlled Popper
 * DO NOT USE FOR:
 *   - Short known lists → Select
 *   - Multi-select tags → combine with TagInput pattern
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Autocomplete options={products} value={selected} onChange={setSelected} placeholder="Search products..." />
 */
export function Autocomplete({
  options,
  value,
  onChange,
  onSearch,
  placeholder = 'Search…',
  label,
  ctaLabel,
  onCta,
  size = 'default',
  id,
  className,
}: AutocompleteProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const sizeClass = size === 'sm' ? ' form-input-sm' : size === 'lg' ? ' form-input-lg' : '';

  const filtered = query
    ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
    : options;

  const groups = Array.from(new Set(filtered.map((o) => o.group ?? '')));

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

  function handleInput(q: string) {
    setQuery(q);
    onSearch?.(q);
    setOpen(true);
  }

  function selectOption(v: string, l: string) {
    onChange(v);
    setQuery(l);
    setOpen(false);
  }

  return (
    <div
      ref={wrapRef}
      className={['iris-autocomplete', className].filter(Boolean).join(' ')}
      role="combobox"
      aria-expanded={open}
      aria-haspopup="listbox"
      style={{ position: 'relative', width: '100%' }}
    >
      {label && <label className="form-label" htmlFor={inputId}>{label}</label>}
      <div className="form-search-wrap">
        <span className="form-search-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 14L10.0001 10M11.3333 6.66667C11.3333 9.24399 9.24399 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.24399 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.24399 2 11.3333 4.08934 11.3333 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <input
          id={inputId}
          type="text"
          className={`form-input${sizeClass}`}
          value={query}
          onChange={(e) => handleInput(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          aria-autocomplete="list"
          aria-controls={`${inputId}-listbox`}
        />
      </div>
      {open && filtered.length > 0 && (
        <div className="iris-autocomplete__menu" role="listbox" id={`${inputId}-listbox`}>
          {groups.map((group) => (
            <React.Fragment key={group}>
              {group && <div className="iris-autocomplete__heading">{group}</div>}
              {filtered.filter((o) => (o.group ?? '') === group).map((opt) => (
                <div
                  key={opt.value}
                  className="iris-autocomplete__item"
                  role="option"
                  aria-selected={opt.value === value}
                  onClick={() => selectOption(opt.value, opt.label)}
                >
                  {opt.label}
                </div>
              ))}
            </React.Fragment>
          ))}
          {ctaLabel && onCta && (
            <div className="iris-autocomplete__cta" onClick={() => { onCta(); setOpen(false); }}>
              {ctaLabel}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
