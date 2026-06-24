import React from 'react';

type SearchType = 'input-select-btn' | 'input-btn' | 'input-flag' | 'btn-inside';

interface SearchBarProps {
  type?: SearchType;
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  /** Category options for the `input-select-btn` type. */
  categories?: string[];
  category?: string;
  onCategoryChange?: (category: string) => void;
  /** Country/flag prefix label for the `input-flag` type. */
  countryLabel?: string;
  className?: string;
}

const SearchIcon = ({ color = 'currentColor', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M17.5 17.5 13.5 13.5M15 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const ChevronDownIcon = ({ color = '#111928', size = 20 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="m5 7.5 5 5 5-5" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FlagIcon = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
    <rect width="14" height="4" y="0" fill="#B22334" />
    <rect width="14" height="4" y="4" fill="#FFFFFF" />
    <rect width="14" height="4" y="8" fill="#B22334" />
    <rect x="0" y="0" width="6" height="8" fill="#3C3B6E" />
  </svg>
);

/**
 * Composite search bar — input combined with a button, category select, or country flag.
 *
 * USE FOR: site-wide search, category-filtered search, geo/location search, embedded card search
 * REPLACES MUI: custom <TextField> + <Button> composite
 * DO NOT USE FOR: open-ended text with no trigger → FormInput; filtering as you type → Autocomplete
 *
 * CSS classes: iris-search, iris-search__input, iris-search__btn, iris-search__select,
 *   iris-search__cell, iris-search__prefix, iris-search__divider, iris-search--inside
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <SearchBar type="input-btn" value={q} onChange={setQ} onSearch={runSearch} />
 */
export function SearchBar({
  type = 'input-btn',
  value,
  onChange,
  onSearch,
  placeholder = 'Search',
  categories,
  category,
  onCategoryChange,
  countryLabel = 'USA',
  className,
}: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') onSearch?.();
  };

  if (type === 'input-select-btn') {
    const opts = categories ?? ['All categories'];
    const active = category ?? opts[0];
    return (
      <div className={['iris-search', className].filter(Boolean).join(' ')}>
        <button
          type="button"
          className="iris-search__select"
          aria-haspopup="listbox"
          onClick={() => {
            const next = opts[(opts.indexOf(active) + 1) % opts.length];
            onCategoryChange?.(next);
          }}
        >
          {active}
          <ChevronDownIcon color="#111928" size={20} />
        </button>
        <input
          type="text"
          className="iris-search__input"
          placeholder={placeholder || 'Search Mockups, Logos, Design Templates...'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="iris-search__btn" aria-label="Search" onClick={onSearch}>
          <SearchIcon color="currentColor" size={20} />
        </button>
      </div>
    );
  }

  if (type === 'input-flag') {
    return (
      <div className={['iris-search', className].filter(Boolean).join(' ')}>
        <div className="iris-search__prefix">
          <FlagIcon />
          <span>{countryLabel}</span>
          <ChevronDownIcon color="#6b7280" size={14} />
        </div>
        <div className="iris-search__divider" />
        <input
          type="text"
          className="iris-search__input"
          placeholder={placeholder || 'Search for city'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }

  if (type === 'btn-inside') {
    return (
      <div className={['iris-search', 'iris-search--inside', className].filter(Boolean).join(' ')}>
        <SearchIcon color="#6b7280" size={18} />
        <input
          type="text"
          className="iris-search__input"
          placeholder={placeholder || 'Search Mockups, Logos ...'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="btn btn-blue btn-sm" onClick={onSearch}>Search</button>
      </div>
    );
  }

  // input-btn (default)
  return (
    <div className={['iris-search', className].filter(Boolean).join(' ')}>
      <div className="iris-search__cell">
        <SearchIcon color="#6b7280" size={18} />
        <input
          type="text"
          className="iris-search__input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button type="button" className="iris-search__btn" aria-label="Search" onClick={onSearch}>
        <SearchIcon color="currentColor" size={20} />
      </button>
    </div>
  );
}
