import React, { useState, useRef, useEffect } from 'react';

// ── Constants ─────────────────────────────────────────────────────────────────

const DAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

// ── Helpers ───────────────────────────────────────────────────────────────────

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function firstDayOfWeek(year: number, month: number) {
  // Monday = 0 … Sunday = 6
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

function dateKey(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

function formatDisplay(y: number, m: number, d: number) {
  return `${String(m + 1).padStart(2, '0')}/${String(d).padStart(2, '0')}/${y}`;
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

// ── CalendarPanel ─────────────────────────────────────────────────────────────

interface CalendarPanelProps {
  year: number;
  month: number;
  selectedKey?: string;
  rangeStart?: string;
  rangeEnd?: string;
  hoveredKey?: string;
  dark?: boolean;
  onDayClick: (key: string) => void;
  onDayHover?: (key: string) => void;
  onPrev?: () => void;
  onNext?: () => void;
  showNav?: boolean;
}

function CalendarPanel({
  year, month, selectedKey, rangeStart, rangeEnd, hoveredKey,
  dark = false, onDayClick, onDayHover, onPrev, onNext, showNav = true,
}: CalendarPanelProps) {
  const totalDays = daysInMonth(year, month);
  const leadBlanks = firstDayOfWeek(year, month);
  const cells: Array<{ day: number | null }> = [];
  for (let i = 0; i < leadBlanks; i++) cells.push({ day: null });
  for (let d = 1; d <= totalDays; d++) cells.push({ day: d });

  const rangeActive = rangeStart && rangeEnd;
  const hoverRange = rangeStart && !rangeEnd && hoveredKey;

  return (
    <>
      {showNav && (
        <div className="iris-cal__header">
          <button type="button" className="iris-cal__nav" onClick={onPrev} aria-label="Previous month">
            <ChevronLeft />
          </button>
          <span className="iris-cal__title">{MONTH_NAMES[month]} {year}</span>
          <button type="button" className="iris-cal__nav" onClick={onNext} aria-label="Next month">
            <ChevronRight />
          </button>
        </div>
      )}
      <div className="iris-cal__grid">
        {DAY_LABELS.map(d => (
          <div key={d} className="iris-cal__day-header">{d}</div>
        ))}
        {cells.map((cell, i) => {
          if (!cell.day) {
            return <div key={`b-${i}`} className="iris-cal__day iris-cal__day--muted" />;
          }
          const key = dateKey(year, month, cell.day);
          let cls = 'iris-cal__day';
          if (key === selectedKey) cls += ' iris-cal__day--selected';
          if (key === rangeStart || key === rangeEnd) cls += ' iris-cal__day--range-selected';
          if (rangeActive && key > rangeStart! && key < rangeEnd!) cls += ' iris-cal__day--in-range';
          if (hoverRange && key > rangeStart! && key < hoveredKey!) cls += ' iris-cal__day--in-range';
          const today = dateKey(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
          if (key === today && !selectedKey && key !== rangeStart && key !== rangeEnd) cls += ' iris-cal__day--today';

          return (
            <div
              key={key}
              className={cls}
              onClick={() => onDayClick(key)}
              onMouseEnter={() => onDayHover?.(key)}
              role="button"
              tabIndex={0}
              aria-label={`${cell.day} ${MONTH_NAMES[month]} ${year}`}
              onKeyDown={e => e.key === 'Enter' && onDayClick(key)}
            >
              {cell.day}
            </div>
          );
        })}
      </div>
    </>
  );
}

// ── Datepicker ────────────────────────────────────────────────────────────────

interface DatepickerProps {
  placeholder?: string;
  value?: string;
  onChange?: (date: string) => void;
  size?: 'default' | 'large';
  dark?: boolean;
  error?: boolean;
  disabled?: boolean;
  id?: string;
}

/**
 * Single-date picker with calendar dropdown.
 *
 * USE FOR: date input fields in forms, filters, scheduling
 * REPLACES MUI: <DatePicker> from @mui/x-date-pickers
 * DO NOT USE FOR: date ranges → use DateRangePicker; time selection → add a time input alongside
 *
 * @example
 * <Datepicker placeholder="Select date" onChange={setDate} />
 *
 * Requires iris-components.css.
 */
export function Datepicker({
  placeholder = 'Select date',
  value,
  onChange,
  size = 'default',
  dark = false,
  error = false,
  disabled = false,
  id,
}: DatepickerProps) {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState(value ?? '');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function handleDayClick(key: string) {
    setSelected(key);
    onChange?.(key);
    setOpen(false);
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  }

  const displayValue = selected
    ? (() => { const [y, m, d] = selected.split('-').map(Number); return formatDisplay(y, m - 1, d); })()
    : '';

  const lgCls = size === 'large' ? ' iris-datepicker-input--lg' : '';
  const errCls = error ? ' iris-datepicker-input--error' : '';
  const filledCls = selected ? ' iris-datepicker-input--filled' : '';

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }} id={id}>
      <div
        className={`iris-datepicker-input${lgCls}${errCls}${filledCls}`}
        style={{ width: 325, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}
        onClick={() => !disabled && setOpen(o => !o)}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={open}
        aria-haspopup="dialog"
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); !disabled && setOpen(o => !o); } }}
      >
        <span className="iris-datepicker-input__icon"><CalendarIcon /></span>
        <span className="iris-datepicker-input__value" style={{ color: selected ? undefined : 'var(--color-text-secondary)' }}>
          {displayValue || placeholder}
        </span>
      </div>

      {open && (
        <div
          className={`iris-cal${dark ? ' iris-cal--dark' : ''}`}
          style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 50 }}
          role="dialog"
          aria-label="Date picker"
        >
          <CalendarPanel
            year={viewYear}
            month={viewMonth}
            selectedKey={selected}
            dark={dark}
            onDayClick={handleDayClick}
            onPrev={prevMonth}
            onNext={nextMonth}
          />
          <div className="iris-cal__footer">
            <button type="button" className="btn btn-outline-gray btn-sm" onClick={() => { setSelected(''); onChange?.(''); setOpen(false); }}>Cancel</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── DateRangePicker ───────────────────────────────────────────────────────────

interface DateRangePickerProps {
  placeholderStart?: string;
  placeholderEnd?: string;
  startDate?: string;
  endDate?: string;
  onChange?: (start: string, end: string) => void;
  dark?: boolean;
}

/**
 * Two-month range date picker.
 *
 * USE FOR: date range filters, booking flows, period selection
 * REPLACES MUI: <DateRangePicker> from @mui/x-date-pickers-pro
 *
 * Requires iris-components.css.
 */
export function DateRangePicker({
  placeholderStart = 'Start date',
  placeholderEnd = 'End date',
  startDate = '',
  endDate = '',
  onChange,
  dark = false,
}: DateRangePickerProps) {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [rangeStart, setRangeStart] = useState(startDate);
  const [rangeEnd, setRangeEnd] = useState(endDate);
  const [hovered, setHovered] = useState('');
  const [leftYear, setLeftYear] = useState(today.getFullYear());
  const [leftMonth, setLeftMonth] = useState(today.getMonth());
  const ref = useRef<HTMLDivElement>(null);

  const rightMonth = leftMonth === 11 ? 0 : leftMonth + 1;
  const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function handleDayClick(key: string) {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(key);
      setRangeEnd('');
    } else {
      const end = key > rangeStart ? key : rangeStart;
      const start = key > rangeStart ? rangeStart : key;
      setRangeStart(start);
      setRangeEnd(end);
      onChange?.(start, end);
    }
  }

  function fmt(key: string) {
    if (!key) return '';
    const [y, m, d] = key.split('-').map(Number);
    return formatDisplay(y, m - 1, d);
  }

  function prevLeft() {
    if (leftMonth === 0) { setLeftYear(y => y - 1); setLeftMonth(11); }
    else setLeftMonth(m => m - 1);
  }

  function nextLeft() {
    if (leftMonth === 11) { setLeftYear(y => y + 1); setLeftMonth(0); }
    else setLeftMonth(m => m + 1);
  }

  const displayText = rangeStart && rangeEnd
    ? `${fmt(rangeStart)} – ${fmt(rangeEnd)}`
    : rangeStart ? `${fmt(rangeStart)} – ${placeholderEnd}` : '';

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <div
        className={`iris-datepicker-input${rangeStart ? ' iris-datepicker-input--filled' : ''}`}
        style={{ width: 325, cursor: 'pointer' }}
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-haspopup="dialog"
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o); } }}
      >
        <span className="iris-datepicker-input__icon"><CalendarIcon /></span>
        <span className="iris-datepicker-input__value" style={{ color: displayText ? undefined : 'var(--color-text-secondary)' }}>
          {displayText || `${placeholderStart} – ${placeholderEnd}`}
        </span>
      </div>

      {open && (
        <div
          className={`iris-cal iris-cal--range${dark ? ' iris-cal--dark' : ''}`}
          style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 50 }}
          role="dialog"
          aria-label="Date range picker"
        >
          <div className="iris-cal__months">
            <div>
              <div className="iris-cal__header">
                <button type="button" className="iris-cal__nav" onClick={prevLeft} aria-label="Previous month"><ChevronLeft /></button>
                <span className="iris-cal__title">{MONTH_NAMES[leftMonth]} {leftYear}</span>
                <span style={{ width: 32 }} />
              </div>
              <CalendarPanel
                year={leftYear} month={leftMonth}
                rangeStart={rangeStart} rangeEnd={rangeEnd} hoveredKey={hovered}
                dark={dark} onDayClick={handleDayClick} onDayHover={setHovered} showNav={false}
              />
            </div>
            <div>
              <div className="iris-cal__header">
                <span style={{ width: 32 }} />
                <span className="iris-cal__title">{MONTH_NAMES[rightMonth]} {rightYear}</span>
                <button type="button" className="iris-cal__nav" onClick={nextLeft} aria-label="Next month"><ChevronRight /></button>
              </div>
              <CalendarPanel
                year={rightYear} month={rightMonth}
                rangeStart={rangeStart} rangeEnd={rangeEnd} hoveredKey={hovered}
                dark={dark} onDayClick={handleDayClick} onDayHover={setHovered} showNav={false}
              />
            </div>
          </div>
          <div className="iris-cal__footer">
            <button type="button" className="btn btn-outline-gray btn-sm" onClick={() => { setRangeStart(''); setRangeEnd(''); setOpen(false); }}>Cancel</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Shared chevron icons (outline style, matches Figma 9667:2931) ─────────────

const OutlineChevronLeft = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M12.5 15 7.5 10l5-5" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OutlineChevronRight = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7.5 5l5 5-5 5" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function PickerFooter({ dark, okLabel = 'Ok', onCancel, onOk }: { dark: boolean; okLabel?: string; onCancel: () => void; onOk: () => void }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
      <button
        type="button"
        onClick={onCancel}
        style={{
          height: 37, padding: '0 16px', borderRadius: 12, fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
          background: dark ? '#4b5563' : 'var(--color-bg-white)',
          border: dark ? 'none' : '1px solid var(--color-border-default)',
          color: dark ? 'var(--color-bg-white)' : 'var(--color-text-heading)',
        }}
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={onOk}
        style={{ height: 37, padding: '0 16px', background: '#42389d', border: 'none', borderRadius: 12, fontSize: 12, fontWeight: 500, color: 'var(--color-bg-white)', cursor: 'pointer', fontFamily: 'inherit' }}
      >
        {okLabel}
      </button>
    </div>
  );
}

function PickerTrigger({
  open, setOpen, displayValue, placeholder, size, dark, ref,
}: {
  open: boolean; setOpen: (v: boolean) => void; displayValue: string; placeholder: string;
  size?: 'default' | 'large'; dark?: boolean; ref: React.Ref<HTMLDivElement>;
}) {
  const lgCls = size === 'large' ? ' iris-datepicker-input--lg' : '';
  const filledCls = displayValue ? ' iris-datepicker-input--filled' : '';
  return (
    <div
      ref={ref}
      className={`iris-datepicker-input${lgCls}${filledCls}${dark ? ' iris-cal--dark' : ''}`}
      style={{ width: 325, cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-haspopup="dialog"
      onClick={() => setOpen(!open)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open); } }}
    >
      <span className="iris-datepicker-input__icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="1" y="3" width="14" height="12" rx="2" stroke={dark ? 'var(--color-border-light)' : '#6b7280'} strokeWidth={1.5} />
          <path d="M1 7H15" stroke={dark ? 'var(--color-border-light)' : '#6b7280'} strokeWidth={1.5} />
          <path d="M5 1V5" stroke={dark ? 'var(--color-border-light)' : '#6b7280'} strokeWidth={1.5} strokeLinecap="round" />
          <path d="M11 1V5" stroke={dark ? 'var(--color-border-light)' : '#6b7280'} strokeWidth={1.5} strokeLinecap="round" />
        </svg>
      </span>
      <span className="iris-datepicker-input__value" style={{ color: displayValue ? undefined : 'var(--color-text-secondary)' }}>
        {displayValue || placeholder}
      </span>
    </div>
  );
}

function useClickOutside(ref: React.RefObject<HTMLElement | null>, onOutside: () => void, active: boolean) {
  useEffect(() => {
    if (!active) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onOutside();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [active, ref, onOutside]);
}

// ── MonthPicker ───────────────────────────────────────────────────────────────

const MONTH_ABBR = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

interface MonthPickerProps {
  /** Selected month index (0-11), or undefined for none selected. */
  value?: number;
  onChange?: (month: number, year: number) => void;
  year?: number;
  placeholder?: string;
  size?: 'default' | 'large';
  dark?: boolean;
  id?: string;
}

/**
 * Month picker dropdown — 12-month grid with year navigation.
 *
 * USE FOR: selecting a specific month (e.g. "report period: February 2024")
 * DO NOT USE FOR: full date selection → Datepicker; date range → DateRangePicker
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <MonthPicker value={month} onChange={(m, y) => { setMonth(m); setYear(y); }} />
 */
export function MonthPicker({ value, onChange, year: initialYear, placeholder = 'Select month', size, dark = false, id }: MonthPickerProps) {
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(initialYear ?? new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  const displayValue = selectedMonth != null ? `${MONTH_ABBR[selectedMonth]} ${viewYear}` : '';

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }} id={id}>
      <PickerTrigger open={open} setOpen={setOpen} displayValue={displayValue} placeholder={placeholder} size={size} dark={dark} ref={() => {}} />
      {open && (
        <div
          className={dark ? 'iris-cal--dark' : undefined}
          style={{
            position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 50, width: 255, boxSizing: 'border-box',
            background: dark ? 'var(--color-text-primary)' : 'var(--color-bg-white)', borderRadius: 8, padding: 12,
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)', fontFamily: 'inherit',
          }}
          role="dialog"
          aria-label="Month picker"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => setViewYear((y) => y - 1)} aria-label="Previous year">
              <OutlineChevronLeft color={dark ? 'var(--color-bg-white)' : '#111928'} />
            </button>
            <span style={{ fontSize: 12, fontWeight: 700, color: dark ? 'var(--color-bg-white)' : '#111928' }}>{viewYear}</span>
            <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => setViewYear((y) => y + 1)} aria-label="Next year">
              <OutlineChevronRight color={dark ? 'var(--color-bg-white)' : '#111928'} />
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            {MONTH_ABBR.map((m, i) => {
              const isSelected = i === selectedMonth;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSelectedMonth(i)}
                  style={{
                    height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer',
                    fontSize: 12, fontWeight: isSelected ? 700 : 400, borderRadius: 8, fontFamily: 'inherit',
                    color: isSelected ? 'var(--color-bg-white)' : dark ? 'var(--color-bg-white)' : '#111928',
                    background: isSelected ? '#42389d' : 'transparent',
                  }}
                >
                  {m}
                </button>
              );
            })}
          </div>
          <PickerFooter
            dark={dark}
            onCancel={() => { setSelectedMonth(undefined); setOpen(false); }}
            onOk={() => { if (selectedMonth != null) onChange?.(selectedMonth, viewYear); setOpen(false); }}
          />
        </div>
      )}
    </div>
  );
}

// ── YearPicker ────────────────────────────────────────────────────────────────

interface YearPickerProps {
  value?: number;
  onChange?: (year: number) => void;
  placeholder?: string;
  size?: 'default' | 'large';
  dark?: boolean;
  id?: string;
}

/**
 * Year picker dropdown — 12-year grid (decade view) with decade navigation.
 *
 * USE FOR: selecting a specific year (e.g. "fiscal year: 2019")
 * DO NOT USE FOR: full date selection → Datepicker; month selection → MonthPicker
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <YearPicker value={year} onChange={setYear} />
 */
export function YearPicker({ value, onChange, placeholder = 'Select year', size, dark = false, id }: YearPickerProps) {
  const [open, setOpen] = useState(false);
  const [decadeStart, setDecadeStart] = useState(() => (value ?? new Date().getFullYear()) - ((value ?? new Date().getFullYear()) % 10));
  const [selectedYear, setSelectedYear] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  const years = Array.from({ length: 12 }, (_, i) => decadeStart + i);
  const displayValue = selectedYear != null ? String(selectedYear) : '';

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }} id={id}>
      <PickerTrigger open={open} setOpen={setOpen} displayValue={displayValue} placeholder={placeholder} size={size} dark={dark} ref={() => {}} />
      {open && (
        <div
          style={{
            position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 50, width: 198, boxSizing: 'border-box',
            background: dark ? 'var(--color-text-primary)' : 'var(--color-bg-white)', borderRadius: 8, padding: 12,
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)', fontFamily: 'inherit',
          }}
          role="dialog"
          aria-label="Year picker"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => setDecadeStart((y) => y - 12)} aria-label="Previous decade">
              <OutlineChevronLeft color={dark ? 'var(--color-bg-white)' : '#111928'} />
            </button>
            <span style={{ fontSize: 12, fontWeight: 700, color: dark ? 'var(--color-bg-white)' : '#111928' }}>{years[0]}-{years[years.length - 1]}</span>
            <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => setDecadeStart((y) => y + 12)} aria-label="Next decade">
              <OutlineChevronRight color={dark ? 'var(--color-bg-white)' : '#111928'} />
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            {years.map((y) => {
              const isSelected = y === selectedYear;
              return (
                <button
                  key={y}
                  type="button"
                  onClick={() => setSelectedYear(y)}
                  style={{
                    height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer',
                    fontSize: 12, fontWeight: isSelected ? 700 : 400, borderRadius: 8, fontFamily: 'inherit',
                    color: isSelected ? 'var(--color-bg-white)' : dark ? 'var(--color-bg-white)' : '#111928',
                    background: isSelected ? '#1447e6' : 'transparent',
                  }}
                >
                  {y}
                </button>
              );
            })}
          </div>
          <PickerFooter
            dark={dark}
            onCancel={() => { setSelectedYear(undefined); setOpen(false); }}
            onOk={() => { if (selectedYear != null) onChange?.(selectedYear); setOpen(false); }}
          />
        </div>
      )}
    </div>
  );
}

// ── DobPicker (Date of Birth scroll picker) ────────────────────────────────────

interface DobPickerProps {
  value?: { year: number; month: number; day: number };
  onChange?: (value: { year: number; month: number; day: number }) => void;
  placeholder?: string;
  size?: 'default' | 'large';
  dark?: boolean;
  id?: string;
}

const DOB_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function DobScrollColumn<T extends string | number>({
  label, items, selected, onSelect, dark,
}: { label: string; items: T[]; selected: T; onSelect: (v: T) => void; dark: boolean }) {
  const dimmed = dark ? '#6b7280' : 'var(--color-border-light)';
  return (
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: dimmed, textAlign: 'center', marginBottom: 4 }}>{label}</div>
      <div style={{ maxHeight: 160, overflowY: 'auto' }}>
        {items.map((item) => {
          const isSel = item === selected;
          return (
            <button
              key={String(item)}
              type="button"
              onClick={() => onSelect(item)}
              style={{
                width: '100%', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer',
                fontSize: 12, fontWeight: isSel ? 700 : 400, borderRadius: 4, fontFamily: 'inherit',
                color: isSel ? (dark ? 'var(--color-bg-white)' : '#111928') : dimmed,
                background: isSel ? (dark ? '#4b5563' : 'var(--color-bg-secondary)') : 'transparent',
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Date-of-birth picker — 3-column scroll selector (Year / Month / Day).
 *
 * USE FOR: birthdate entry in profile/onboarding forms
 * DO NOT USE FOR: general date selection → Datepicker
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <DobPicker value={dob} onChange={setDob} />
 */
export function DobPicker({ value, onChange, placeholder = 'Date of birth', size, dark = false, id }: DobPickerProps) {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(value?.year ?? currentYear - 30);
  const [month, setMonth] = useState(value?.month ?? 0);
  const [day, setDay] = useState(value?.day ?? 1);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const days = Array.from({ length: daysInMonth(year, month) }, (_, i) => i + 1);
  const displayValue = value ? `${DOB_MONTHS[value.month]} ${value.day}, ${value.year}` : '';

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }} id={id}>
      <PickerTrigger open={open} setOpen={setOpen} displayValue={displayValue} placeholder={placeholder} size={size} dark={dark} ref={() => {}} />
      {open && (
        <div
          style={{
            position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 50, width: 198, boxSizing: 'border-box',
            background: dark ? 'var(--color-text-primary)' : 'var(--color-bg-white)', borderRadius: 8, padding: 12,
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)', fontFamily: 'inherit',
          }}
          role="dialog"
          aria-label="Date of birth picker"
        >
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: dark ? 'var(--color-bg-white)' : '#111928' }}>Date of Birth</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <DobScrollColumn label="Year" items={years} selected={year} onSelect={setYear} dark={dark} />
            <DobScrollColumn label="Month" items={DOB_MONTHS} selected={DOB_MONTHS[month]} onSelect={(m) => setMonth(DOB_MONTHS.indexOf(m))} dark={dark} />
            <DobScrollColumn label="Day" items={days} selected={day} onSelect={setDay} dark={dark} />
          </div>
          <PickerFooter
            dark={dark}
            onCancel={() => setOpen(false)}
            onOk={() => { onChange?.({ year, month, day }); setOpen(false); }}
          />
        </div>
      )}
    </div>
  );
}

// ── MonthYearTabPicker ──────────────────────────────────────────────────────────

interface MonthYearTabPickerProps {
  value?: { type: 'month' | 'year'; month?: number; year: number };
  onChange?: (value: { type: 'month' | 'year'; month?: number; year: number }) => void;
  placeholder?: string;
  size?: 'default' | 'large';
  dark?: boolean;
  id?: string;
}

/**
 * Combined month/year picker with a tab toggle to switch between a month list
 * and a year list — single scrollable column, Apply/Cancel footer.
 *
 * USE FOR: report period selection where the user picks either "by month" or "by year"
 * DO NOT USE FOR: selecting a single month only → MonthPicker; single year only → YearPicker
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <MonthYearTabPicker value={period} onChange={setPeriod} />
 */
export function MonthYearTabPicker({ value, onChange, placeholder = 'Select period', size, dark = false, id }: MonthYearTabPickerProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'month' | 'year'>(value?.type ?? 'month');
  const [viewYear, setViewYear] = useState(value?.year ?? new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(value?.month);
  const [selectedYear, setSelectedYear] = useState(value?.type === 'year' ? value.year : undefined);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  const years = Array.from({ length: 12 }, (_, i) => 2010 + i);
  const tabBg = dark ? '#4b5563' : 'var(--color-bg-tertiary)';
  const tabSelBg = 'var(--color-bg-secondary)';
  const tabSelText = '#42389d';

  const displayValue = value
    ? value.type === 'month' && value.month != null
      ? `${MONTH_NAMES[value.month]} ${value.year}`
      : String(value.year)
    : '';

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }} id={id}>
      <PickerTrigger open={open} setOpen={setOpen} displayValue={displayValue} placeholder={placeholder} size={size} dark={dark} ref={() => {}} />
      {open && (
        <div
          style={{
            position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 50, width: 328, boxSizing: 'border-box',
            background: dark ? 'var(--color-text-primary)' : 'var(--color-bg-white)', borderRadius: 8, padding: 12,
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)', fontFamily: 'inherit',
          }}
          role="dialog"
          aria-label="Month or year picker"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => setViewYear((y) => y - 1)} aria-label="Previous year">
              <OutlineChevronLeft color={dark ? 'var(--color-bg-white)' : '#111928'} />
            </button>
            <span style={{ fontSize: 12, fontWeight: 700, color: dark ? 'var(--color-bg-white)' : '#111928' }}>
              {selectedMonth != null ? MONTH_ABBR[selectedMonth] : ''} {viewYear}
            </span>
            <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={() => setViewYear((y) => y + 1)} aria-label="Next year">
              <OutlineChevronRight color={dark ? 'var(--color-bg-white)' : '#111928'} />
            </button>
          </div>
          <div style={{ display: 'flex', gap: 4, background: tabBg, borderRadius: 8, padding: 4, marginBottom: 8 }}>
            <button
              type="button"
              onClick={() => setActiveTab('month')}
              style={{
                flex: 1, height: 32, border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
                background: activeTab === 'month' ? tabSelBg : 'transparent',
                color: activeTab === 'month' ? tabSelText : dark ? 'var(--color-bg-white)' : '#111928',
              }}
            >
              Month
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('year')}
              style={{
                flex: 1, height: 32, border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
                background: activeTab === 'year' ? tabSelBg : 'transparent',
                color: activeTab === 'year' ? tabSelText : dark ? 'var(--color-bg-white)' : '#111928',
              }}
            >
              Year
            </button>
          </div>
          <div style={{ maxHeight: 240, overflowY: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {activeTab === 'month'
              ? MONTH_NAMES.map((m, i) => {
                  const isSel = i === selectedMonth;
                  return (
                    <div
                      key={m}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedMonth(i)}
                      style={{
                        padding: '8px 12px', fontSize: 12, fontWeight: isSel ? 500 : 400, cursor: 'pointer',
                        color: isSel ? '#42389d' : dark ? 'var(--color-bg-white)' : 'var(--color-text-primary)',
                      }}
                    >
                      {m}
                    </div>
                  );
                })
              : years.map((y) => {
                  const isSel = y === selectedYear;
                  return (
                    <div
                      key={y}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedYear(y)}
                      style={{
                        padding: '8px 12px', fontSize: 12, fontWeight: isSel ? 500 : 400, cursor: 'pointer',
                        color: isSel ? '#42389d' : dark ? 'var(--color-bg-white)' : 'var(--color-text-primary)',
                      }}
                    >
                      {y}
                    </div>
                  );
                })}
          </div>
          <PickerFooter
            dark={dark}
            okLabel="Apply"
            onCancel={() => setOpen(false)}
            onOk={() => {
              if (activeTab === 'month' && selectedMonth != null) onChange?.({ type: 'month', month: selectedMonth, year: viewYear });
              else if (activeTab === 'year' && selectedYear != null) onChange?.({ type: 'year', year: selectedYear });
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
