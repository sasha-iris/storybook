// Figma nodes: 9667:2900 (date cells), 9667:2931 (month/year tab picker),
//              13293:84585 (complete widget + input), 3283:20287 (dropdown types × themes)
// File key: ZKtEULdYKaXe5uQl1J6ijI

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  // Light
  bgCard:       'var(--color-bg-white)',
  bgInput:      'var(--color-bg-tertiary)',
  borderInput:  'var(--color-border-default)',
  titleColor:   '#111928',
  dayHeader:    '#6b7280',
  dayText:      '#111928',
  selectedSimple: '#1447e6',
  selectedRange:  '#42389d',
  inRange:        'var(--color-bg-secondary)',
  btnOk:        '#42389d',
  btnCancel:    'var(--color-bg-white)',
  btnCancelText:'var(--color-text-heading)',
  calIcon:      '#6b7280',
  placeholder:  '#6b7280',
  // Dark
  dark_bgCard:  'var(--color-text-primary)',
  dark_dayText: 'var(--color-bg-white)',
  dark_dayHdr:  'var(--color-border-light)',
  dark_title:   'var(--color-bg-white)',
  dark_btnCancel: '#4b5563',
  dark_calIcon: 'var(--color-border-light)',
};

// ─── SVG helpers ───────────────────────────────────────────────────────────────
function chevronLeft(color) {
  return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
function chevronRight(color) {
  return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 5L12.5 10L7.5 15" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
function calendarIcon(color) {
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="14" height="12" rx="2" stroke="${color}" stroke-width="1.5"/>
    <path d="M1 7H15" stroke="${color}" stroke-width="1.5"/>
    <path d="M5 1V5" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M11 1V5" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;
}

// ─── Calendar month grid ───────────────────────────────────────────────────────
// days: array of {label, state:'normal'|'selected'|'range'|'range-end'|'empty'|'today'}
function monthGrid(days, dark) {
  const DAY_HEADERS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  const headerRow = DAY_HEADERS.map(d =>
    `<div class="iris-cal__day-header">${d}</div>`
  ).join('');

  const cells = days.map(({ label, state }) => {
    let cls = 'iris-cal__day';
    if (state === 'selected')  cls += ' iris-cal__day--selected';
    if (state === 'range-end') cls += ' iris-cal__day--range-selected';
    if (state === 'range')     cls += ' iris-cal__day--in-range';
    if (state === 'today')     cls += ' iris-cal__day--today';
    if (!label)                cls += ' iris-cal__day--muted';
    return `<button class="${cls}">${label || ''}</button>`;
  }).join('');

  return `<div class="iris-cal__grid">${headerRow}${cells}</div>`;
}

// Default month: May 2024, selected = 14
function defaultMonthDays(selectedDay = 14) {
  // May 2024 starts on Wednesday (index 3)
  const blanks = Array(3).fill({ label: '', state: 'empty' });
  const days = Array.from({ length: 31 }, (_, i) => {
    const d = i + 1;
    return { label: String(d), state: d === selectedDay ? 'selected' : 'normal' };
  });
  return [...blanks, ...days];
}

// Range month: start=10, end=20
function rangeMonthDays(start, end) {
  const blanks = Array(3).fill({ label: '', state: 'empty' });
  return [...blanks, ...Array.from({ length: 31 }, (_, i) => {
    const d = i + 1;
    let state = 'normal';
    if (d === start || d === end) state = 'range-end';
    else if (d > start && d < end) state = 'range';
    return { label: String(d), state };
  })];
}

// ─── Calendar card shell ───────────────────────────────────────────────────────
function calCard(inner, dark) {
  const darkCls = dark ? ' iris-cal--dark' : '';
  return `<div class="iris-cal${darkCls}">${inner}</div>`;
}

function calHeader(monthYear, dark) {
  return `<div class="iris-cal__header">
    <button class="iris-cal__nav">${chevronLeft(dark ? T.dark_title : T.titleColor)}</button>
    <span class="iris-cal__title">${monthYear}</span>
    <button class="iris-cal__nav">${chevronRight(dark ? T.dark_title : T.titleColor)}</button>
  </div>`;
}

function calFooter(dark) {
  return `<div class="iris-cal__footer">
    <button class="btn btn-outline-gray btn-sm">Cancel</button>
    <button class="btn btn-primary btn-sm">Ok</button>
  </div>`;
}


// ─── Input trigger ─────────────────────────────────────────────────────────────
function datepickerInput({ placeholder = 'Select date', size = 'default', dark = false, value = '', error = false }) {
  const lgCls    = size === 'large' ? ' iris-datepicker-input--lg' : '';
  const errCls   = error ? ' iris-datepicker-input--error' : '';
  const filledCls = value ? ' iris-datepicker-input--filled' : '';
  const iconColor = dark ? T.dark_calIcon : T.calIcon;
  const displayed = value || placeholder;
  return `<div class="iris-datepicker-input${lgCls}${errCls}${filledCls}" style="width:325px;">
    <span class="iris-datepicker-input__icon">${calendarIcon(iconColor)}</span>
    <span class="iris-datepicker-input__value">${displayed}</span>
  </div>`;
}

// ─── Simple datepicker ─────────────────────────────────────────────────────────
function simpleCalendar({ dark, size }) {
  const header = calHeader('May 2024', dark);
  const grid   = monthGrid(defaultMonthDays(14), dark);
  const footer = calFooter(dark);
  return calCard(`${header}${grid}${footer}`, dark);
}

// ─── Range datepicker ─────────────────────────────────────────────────────────
function rangeCalendar({ dark }) {
  const h1 = calHeader('April 2024', dark);
  const h2 = calHeader('May 2024', dark);

  // April: range-end on 26, continuing
  const blanksApril = Array(1).fill({ label: '', state: 'empty' }); // April starts Mon
  const aprilDays = [...blanksApril, ...Array.from({ length: 30 }, (_, i) => {
    const d = i + 1;
    return { label: String(d), state: d >= 26 ? (d === 26 ? 'range-end' : 'range') : 'normal' };
  })];

  // May: in-range until 10, range-end on 10
  const mayDays = rangeMonthDays(1, 10).map(c => {
    if (c.label && parseInt(c.label) <= 10) {
      const d = parseInt(c.label);
      if (d === 10) return { ...c, state: 'range-end' };
      return { ...c, state: 'range' };
    }
    return { ...c, state: 'normal' };
  });

  const aprilGrid = monthGrid(aprilDays, dark);
  const mayGrid   = monthGrid(mayDays, dark);

  const bg = dark ? T.dark_bgCard : T.bgCard;
  const left  = `<div>${h1}${aprilGrid}</div>`;
  const right = `<div>${h2}${mayGrid}</div>`;

  return `<div style="background:${bg};border-radius:8px;padding:12px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);display:inline-flex;gap:16px;font-family:inherit;">
    ${left}${right}
    <div style="position:absolute;bottom:12px;right:12px;">${calFooter(dark)}</div>
  </div>`.replace('<div style="position:absolute', `</div><div style="position:relative"><div style="position:absolute`);
}

// Simpler range implementation using iris-cal classes
function rangeCalendarSimple({ dark }) {
  const darkCls = dark ? ' iris-cal--dark' : '';

  const aprilBlanks = Array(1).fill({ label: '', state: 'empty' });
  const aprilDays = [...aprilBlanks, ...Array.from({ length: 30 }, (_, i) => {
    const d = i + 1;
    if (d === 26) return { label: String(d), state: 'range-end' };
    if (d > 26)   return { label: String(d), state: 'range' };
    return { label: String(d), state: 'normal' };
  })];

  const mayBlanks = Array(3).fill({ label: '', state: 'empty' });
  const mayDays = [...mayBlanks, ...Array.from({ length: 31 }, (_, i) => {
    const d = i + 1;
    if (d === 10) return { label: String(d), state: 'range-end' };
    if (d < 10)   return { label: String(d), state: 'range' };
    return { label: String(d), state: 'normal' };
  })];

  return `<div class="iris-cal iris-cal--range${darkCls}">
    <div class="iris-cal__months">
      <div>
        ${calHeader('April 2024', dark)}
        ${monthGrid(aprilDays, dark)}
      </div>
      <div>
        ${calHeader('May 2024', dark)}
        ${monthGrid(mayDays, dark)}
      </div>
    </div>
    ${calFooter(dark)}
  </div>`;
}

// ─── Month picker ─────────────────────────────────────────────────────────────
function monthPicker({ dark, selectedMonth = 'FEB' }) {
  const bg      = dark ? T.dark_bgCard : T.bgCard;
  const text    = dark ? T.dark_dayText : T.dayText;
  const arrow   = dark ? T.dark_title  : T.titleColor;
  const titleCl = dark ? T.dark_title  : T.titleColor;
  const months  = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  const cells = months.map(m => {
    const isSelected = m === selectedMonth;
    return `<div style="height:40px;display:flex;align-items:center;justify-content:center;
      font-size:12px;font-weight:${isSelected ? 700 : 400};
      color:${isSelected ? 'var(--color-bg-white)' : text};
      background:${isSelected ? T.selectedRange : 'transparent'};
      border-radius:8px;cursor:pointer;">${m}</div>`;
  }).join('');

  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? 'var(--color-bg-white)'         : T.btnCancelText;
  const cancelBorder = dark ? 'none' : `1px solid ${T.borderInput}`;

  return `<div style="background:${bg};border-radius:8px;padding:12px;width:255px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronLeft(arrow)}</button>
      <span style="font-size:12px;font-weight:700;color:${titleCl};">2024</span>
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronRight(arrow)}</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;">${cells}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${cancelBg};border:${cancelBorder};
        border-radius:12px;font-size:12px;font-weight:500;color:${cancelText};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${T.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:var(--color-bg-white);cursor:pointer;font-family:inherit;">Ok</button>
    </div>
  </div>`;
}

// ─── Year picker ──────────────────────────────────────────────────────────────
function yearPicker({ dark, selectedYear = 2019 }) {
  const bg      = dark ? T.dark_bgCard : T.bgCard;
  const text    = dark ? T.dark_dayText : T.dayText;
  const arrow   = dark ? T.dark_title  : T.titleColor;
  const titleCl = dark ? T.dark_title  : T.titleColor;
  const years   = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];

  const cells = years.map(y => {
    const isSelected = y === selectedYear;
    return `<div style="height:40px;display:flex;align-items:center;justify-content:center;
      font-size:12px;font-weight:${isSelected ? 700 : 400};
      color:${isSelected ? 'var(--color-bg-white)' : text};
      background:${isSelected ? T.selectedSimple : 'transparent'};
      border-radius:8px;cursor:pointer;">${y}</div>`;
  }).join('');

  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? 'var(--color-bg-white)'         : T.btnCancelText;
  const cancelBorder = dark ? 'none' : `1px solid ${T.borderInput}`;

  return `<div style="background:${bg};border-radius:8px;padding:12px;width:198px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronLeft(arrow)}</button>
      <span style="font-size:12px;font-weight:700;color:${titleCl};">2010-2021</span>
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronRight(arrow)}</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;">${cells}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${cancelBg};border:${cancelBorder};
        border-radius:12px;font-size:12px;font-weight:500;color:${cancelText};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${T.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:var(--color-bg-white);cursor:pointer;font-family:inherit;">Ok</button>
    </div>
  </div>`;
}

// ─── Date of Birth scroll picker ──────────────────────────────────────────────
function dobPicker({ dark }) {
  const bg      = dark ? T.dark_bgCard : T.bgCard;
  const text    = dark ? T.dark_dayText : T.dayText;
  const dimmed  = dark ? '#6b7280' : 'var(--color-border-light)';
  const titleCl = dark ? T.dark_title  : T.titleColor;
  const arrow   = dark ? T.dark_title  : T.titleColor;
  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? 'var(--color-bg-white)'         : T.btnCancelText;
  const cancelBorder = dark ? 'none' : `1px solid ${T.borderInput}`;

  function scrollCol(label, items, selected) {
    const cells = items.map((item, i) => {
      const isSel = item === selected;
      return `<div style="height:40px;display:flex;align-items:center;justify-content:center;
        font-size:12px;font-weight:${isSel ? 700 : 400};
        color:${isSel ? (dark ? 'var(--color-bg-white)' : T.titleColor) : dimmed};
        background:${isSel ? (dark ? '#4b5563' : T.inRange) : 'transparent'};
        border-radius:4px;">${item}</div>`;
    }).join('');
    return `<div style="flex:1;">
      <div style="font-size:10px;font-weight:600;color:${dimmed};text-align:center;margin-bottom:4px;">${label}</div>
      <div style="overflow:hidden;">${cells}</div>
    </div>`;
  }

  const years  = [1993, 1994, 1995, 1996, 1997];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  const days   = [12, 13, 14, 15, 16];

  return `<div style="background:${bg};border-radius:8px;padding:12px;width:198px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <span style="font-size:12px;font-weight:700;color:${titleCl};">Date of Birth</span>
    </div>
    <div style="display:flex;gap:8px;">
      ${scrollCol('Year', years, 1995)}
      ${scrollCol('Month', months, 'Mar')}
      ${scrollCol('Day', days, 14)}
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${cancelBg};border:${cancelBorder};
        border-radius:12px;font-size:12px;font-weight:500;color:${cancelText};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${T.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:var(--color-bg-white);cursor:pointer;font-family:inherit;">Ok</button>
    </div>
  </div>`;
}

// ─── Month/Year tab picker (9667:2931) ────────────────────────────────────────
function tabPicker({ dark, activeTab = 'month' }) {
  const bg      = dark ? T.dark_bgCard : T.bgCard;
  const text    = dark ? T.dark_dayText : T.dayText;
  const dimmed  = dark ? '#6b7280' : 'var(--color-border-light)';
  const titleCl = dark ? T.dark_title  : T.titleColor;
  const tabSelBg = 'var(--color-bg-secondary)';
  const tabSelText = T.selectedRange;
  const arrow   = dark ? T.dark_title  : T.titleColor;
  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? 'var(--color-bg-white)'         : T.btnCancelText;
  const cancelBorder = dark ? 'none' : `1px solid ${T.borderInput}`;

  const monthTab = `<button style="flex:1;height:32px;background:${activeTab === 'month' ? tabSelBg : 'transparent'};
    border:none;border-radius:6px;font-size:12px;font-weight:500;
    color:${activeTab === 'month' ? tabSelText : (dark ? T.dark_dayText : T.dayText)};cursor:pointer;font-family:inherit;">Month</button>`;
  const yearTab  = `<button style="flex:1;height:32px;background:${activeTab === 'year' ? tabSelBg : 'transparent'};
    border:none;border-radius:6px;font-size:12px;font-weight:500;
    color:${activeTab === 'year' ? tabSelText : (dark ? T.dark_dayText : T.dayText)};cursor:pointer;font-family:inherit;">Year</button>`;

  const MONTHS_LIST = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const YEARS_LIST  = Array.from({length: 12}, (_, i) => 2010 + i);

  const items = activeTab === 'month' ? MONTHS_LIST : YEARS_LIST.map(String);
  const selected = activeTab === 'month' ? 'February' : '2019';

  const listItems = items.map(item => {
    const isSel = item === selected;
    return `<div style="padding:8px 12px;font-size:12px;font-weight:${isSel ? 500 : 400};
      color:${isSel ? T.selectedRange : (dark ? T.dark_dayText : 'var(--color-text-primary)')};cursor:pointer;">${item}</div>`;
  }).join('');

  return `<div style="background:${bg};border-radius:8px;padding:12px;width:328px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronLeft(arrow)}</button>
      <span style="font-size:12px;font-weight:700;color:${titleCl};">FEB 2024</span>
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronRight(arrow)}</button>
    </div>
    <div style="display:flex;gap:4px;background:${dark ? '#4b5563' : 'var(--color-bg-tertiary)'};border-radius:8px;padding:4px;margin-bottom:8px;">
      ${monthTab}${yearTab}
    </div>
    <div style="max-height:240px;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;">
      ${listItems}
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${cancelBg};border:${cancelBorder};
        border-radius:12px;font-size:12px;font-weight:500;color:${cancelText};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${T.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:var(--color-bg-white);cursor:pointer;font-family:inherit;">Apply</button>
    </div>
  </div>`;
}

// ─── Full widget: input + dropdown ────────────────────────────────────────────
function fullWidget(args) {
  const { type, dark, size } = args;
  const placeholder = type === 'range' ? 'Select period' : 'Select date';
  const input = datepickerInput({ placeholder, size, dark });

  let dropdown = '';
  if (type === 'simple')       dropdown = simpleCalendar({ dark, size });
  else if (type === 'range')   dropdown = rangeCalendarSimple({ dark });
  else if (type === 'month')   dropdown = monthPicker({ dark });
  else if (type === 'year')    dropdown = yearPicker({ dark });
  else if (type === 'dob')     dropdown = dobPicker({ dark });
  else if (type === 'tab')     dropdown = tabPicker({ dark });

  return `<div style="display:inline-flex;flex-direction:column;gap:8px;font-family:inherit;">
    ${input}
    ${dropdown}
  </div>`;
}

// ─── Story default export ──────────────────────────────────────────────────────
export default {
  title: 'Iris Library/Datepicker',
  tags: ['autodocs', 'stable'],
  parameters: {
    docs: {
      description: {
        component: `
**Datepicker** lets users select a single date, a date range, or a partial date (month/year/date-of-birth). It renders as an input trigger that opens a dropdown calendar panel.

**When to use**
- Filtering data by date or date range
- Collecting birth dates or appointment dates in forms
- Year/month navigation in reporting dashboards

**When NOT to use**
- Relative time ("last 7 days") — use a Dropdown or preset chip group instead
- Inline date display only — use a plain text or Badge

**Anatomy**
- Input trigger (calendar icon + placeholder/value, Default 42px / Large 52px)
- Calendar panel (header with prev/next arrows + month-year title)
- Day grid (7 columns, day names row + day number cells)
- Selected state: single day (\`#1447e6\`) or range endpoints (\`#42389d\`) with in-range fill (\`var(--color-bg-secondary)\`)
- Footer: Cancel + Ok/Apply buttons

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
  },
  argTypes: {
    // ── Appearance ───────────────────────────────────────────
    type: {
      control: 'select',
      options: ['simple', 'range', 'month', 'year', 'dob', 'tab'],
      description: 'Calendar panel type. `simple` = single date; `range` = start–end; `month`/`year` = picker grids; `dob` = date-of-birth scroll; `tab` = month/year tabbed picker.',
      table: { category: 'Appearance', defaultValue: { summary: 'simple' } },
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Input trigger height. `default` = 42px, `large` = 52px.',
      table: { category: 'Appearance', defaultValue: { summary: 'default' } },
    },
    // ── State ─────────────────────────────────────────────────
    dark: {
      control: 'boolean',
      description: 'Dark theme. Card bg `var(--color-text-primary)`, text `var(--color-bg-white)`, cancel button `#4b5563`.',
      table: { category: 'State', defaultValue: { summary: false } },
    },
  },
  args: {
    type: 'simple',
    size: 'default',
    dark: false,
  },
};

// ─── Interactive (Controls) ────────────────────────────────────────────────────
export const Interactive = {
    name: 'Interactive (Controls)',
  render: (args) => {
    const a = args;
    const placeholder = a.type === 'range' ? 'Select period' : 'Select date';
    const lgCls = a.size === 'large' ? ' iris-datepicker-input--lg' : '';
    const darkCal = a.dark ? ' iris-cal--dark' : '';

    const htmlCode = `<div class="iris-datepicker-input${lgCls}">\n  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"><rect x="2" y="2" width="12" height="12" rx="1"/><path d="M2 6h12"/></svg>\n  <span>${placeholder}</span>\n</div>\n\n<div class="iris-cal${a.type === 'range' ? ' iris-cal--range' : ''}${darkCal}">\n  <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;">\n    <button>&lt;</button>\n    <span>May 2024</span>\n    <button>&gt;</button>\n  </div>\n  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;padding:12px;">\n    <!-- Calendar days -->\n  </div>\n</div>`;

    const reactCode = `<div style={{ position: 'relative' }}>\n  <div\n    className="iris-datepicker-input${a.size === 'large' ? ' iris-datepicker-input--lg' : ''}"\n    onClick={() => setOpen(!open)}\n  >\n    <span>{selectedDate || '${placeholder}'}</span>\n  </div>\n  {open && (\n    <div className="iris-cal${a.type === 'range' ? ' iris-cal--range' : ''}${a.dark ? ' iris-cal--dark' : ''}">\n      <div style={{ display: 'flex', justifyContent: 'space-between' }}>\n        <button onClick={() => goToPrevMonth()}>prev</button>\n        <span>{monthYear}</span>\n        <button onClick={() => goToNextMonth()}>next</button>\n      </div>\n      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>\n        {days.map((day) => (\n          <div\n            key={day}\n            onClick={() => onDateSelect(day)}\n            className={day === selected ? 'selected' : ''}\n          >\n            {day}\n          </div>\n        ))}\n      </div>\n    </div>\n  )}\n</div>`;

    const componentCode = `export function Datepicker({ type = 'single', size = 'default', dark = false, onDateSelect }) {\n  const [open, setOpen] = useState(false);\n  const [selectedDate, setSelectedDate] = useState(null);\n  const [currentMonth, setCurrentMonth] = useState(new Date());\n\n  const handleDateClick = (day) => {\n    setSelectedDate(day);\n    onDateSelect?.(day);\n    if (type === 'single') setOpen(false);\n  };\n\n  const goToPrevMonth = () => {\n    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));\n  };\n\n  const goToNextMonth = () => {\n    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));\n  };\n\n  const placeholder = type === 'range' ? 'Select period' : 'Select date';\n  const sizeClass = size === 'large' ? ' iris-datepicker-input--lg' : '';\n  const darkClass = dark ? ' iris-cal--dark' : '';\n\n  return (\n    <div style={{ position: 'relative' }}>\n      <div\n        className={\`iris-datepicker-input\${sizeClass}\`}\n        onClick={() => setOpen(!open)}\n        style={{ cursor: 'pointer', padding: '8px 12px' }}\n      >\n        <span>{selectedDate || placeholder}</span>\n      </div>\n      {open && (\n        <div className={\`iris-cal\${type === 'range' ? ' iris-cal--range' : ''}\${darkClass}\`}>\n          {/* Calendar implementation */}\n        </div>\n      )}\n    </div>\n  );\n}`;

    const htmlEscaped = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const reactEscaped = reactCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const componentEscaped = componentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
          ${fullWidget(args)}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;align-items:start;">
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">HTML</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${htmlEscaped}</code></pre>
            </div>
            <button data-copy="${htmlCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">React</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${reactEscaped}</code></pre>
            </div>
            <button data-copy="${reactCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
          <div style="padding:16px;border:1px solid var(--color-border-default);border-radius:8px;">
            <div style="font-weight:600;font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">Component (With Events)</div>
            <div style="background:var(--color-bg-tertiary);padding:12px;border-radius:6px;margin-bottom:12px;overflow:auto;">
              <pre style="margin:0;font-family:monospace;font-size:13px;white-space:pre-wrap;word-break:break-word;"><code>${componentEscaped}</code></pre>
            </div>
            <button data-copy="${componentCode.split('"').join('&quot;')}" class="storybook-copy-btn" style="padding:8px 12px;background:var(--color-bg-secondary);color:var(--color-text-primary);border:1px solid var(--color-border-default);border-radius:4px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><path d="M6 14H12C13.1046 14 14 13.1046 14 12V6"/></svg>Copy
            </button>
          </div>
        </div>
      </div>
      <script>
        document.querySelectorAll('.storybook-copy-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            navigator.clipboard.writeText(this.dataset.copy);
            const originalText = this.innerHTML;
            this.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="13 2 3 13 1 11"></polyline></svg>Copied!';
            this.style.background = 'var(--color-success-light)';
            this.style.color = 'var(--color-success-dark)';
            this.style.borderColor = 'var(--color-success-lighter)';
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.background = 'var(--color-bg-secondary)';
              this.style.color = 'var(--color-text-primary)';
              this.style.borderColor = 'var(--color-border-default)';
            }, 2000);
          });
        });
      </script>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use **Controls** to switch between single date and date range modes, and test dark theme.',
      },
    },
  },
};

// ─── Gallery: All types (light) ───────────────────────────────────────────────
export const AllTypesLight = {
    name: 'All types — light',
  args: { dark: false },
  parameters: {
    controls: { include: ['dark'] },
    docs: {
      description: {
        story: `All 6 Datepicker panel types in light theme. Left-to-right: Simple, Range, Choose Month, Choose Year, Date of Birth, Month/Year Tab picker.

✅ Use **Simple** for single-date fields (appointments, deadlines)
✅ Use **Range** for period filters — always show both months
✅ Use **Month / Year** pickers when day-level precision is not needed
✅ Use **Date of Birth** for user profile forms — scroll columns feel natural on mobile
❌ Don't use **Range** when only a single boundary date is needed`,
      },
      source: {
        code: `<!-- Input trigger -->
<div class="iris-datepicker-input">
  <span class="iris-datepicker-input__icon"><!-- calendar icon --></span>
  <span class="iris-datepicker-input__value">Select date</span>
</div>

<!-- Calendar popup -->
<div class="iris-cal">
  <div class="iris-cal__header">
    <button class="iris-cal__nav"><!-- chevron-left --></button>
    <span class="iris-cal__title">May 2024</span>
    <button class="iris-cal__nav"><!-- chevron-right --></button>
  </div>
  <div class="iris-cal__grid">
    <div class="iris-cal__day-header">Su</div><!-- Mo Tu We Th Fr Sa -->
    <button class="iris-cal__day">1</button>
    <button class="iris-cal__day iris-cal__day--selected">14</button>
    <button class="iris-cal__day iris-cal__day--in-range">15</button>
    <button class="iris-cal__day iris-cal__day--muted">1</button><!-- outside month -->
  </div>
  <div class="iris-cal__footer">
    <button class="btn btn-outline-gray btn-sm">Cancel</button>
    <button class="btn btn-primary btn-sm">Ok</button>
  </div>
</div>

<!-- Range picker: two months side by side -->
<div class="iris-cal iris-cal--range">
  <div class="iris-cal__months">
    <div>
      <div class="iris-cal__header">...</div>
      <div class="iris-cal__grid">...</div>
    </div>
    <div>
      <div class="iris-cal__header">...</div>
      <div class="iris-cal__grid">...</div>
    </div>
  </div>
  <div class="iris-cal__footer">
    <button class="btn btn-outline-gray btn-sm">Cancel</button>
    <button class="btn btn-primary btn-sm">Ok</button>
  </div>
</div>`,
      },
    },
  },
  render: ({ dark }) => {
    const gap = 24;
    const types = [
      simpleCalendar({ dark, size: 'default' }),
      rangeCalendarSimple({ dark }),
      monthPicker({ dark }),
      yearPicker({ dark }),
      dobPicker({ dark }),
      tabPicker({ dark }),
    ];
    return `<div style="display:flex;flex-wrap:wrap;gap:${gap}px;align-items:flex-start;font-family:inherit;">
      ${types.map(t => `<div>${t}</div>`).join('')}
    </div>`;
  },
};

// ─── Gallery: Input sizes ─────────────────────────────────────────────────────
export const InputSizes = {
    name: 'Input sizes',
  args: { dark: false },
  parameters: {
    controls: { include: ['dark'] },
    docs: {
      description: {
        story: `Two input trigger heights from Figma. **Default** (42px) suits most form layouts. **Large** (52px) matches xl button rows or prominent date selectors on landing pages.`,
      },
      source: {
        code: `<!-- Default 42px -->
<div class="iris-datepicker-input">...</div>

<!-- Large 52px -->
<div class="iris-datepicker-input iris-datepicker-input--lg">...</div>

<!-- Error state -->
<div class="iris-datepicker-input iris-datepicker-input--error">...</div>

<!-- Filled (has value) -->
<div class="iris-datepicker-input iris-datepicker-input--filled">...</div>`,
      },
    },
  },
  render: ({ dark }) => {
    return `<div style="display:flex;flex-direction:column;gap:12px;font-family:inherit;">
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Default (42px)</div>
        ${datepickerInput({ placeholder: 'Select date', size: 'default', dark })}
      </div>
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Large (52px)</div>
        ${datepickerInput({ placeholder: 'Select date', size: 'large', dark })}
      </div>
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Filled (Default)</div>
        ${datepickerInput({ placeholder: 'Select date', size: 'default', dark, value: 'May 14, 2024' })}
      </div>
      <div>
        <div style="font-size:11px;color:#6b7280;margin-bottom:4px;font-family:inherit;">Range filled</div>
        ${datepickerInput({ placeholder: 'Select period', size: 'default', dark, value: 'Apr 26 – May 10, 2024' })}
      </div>
    </div>`;
  },
};

// ─── Gallery: Day cell states ─────────────────────────────────────────────────
export const DayCellStates = {
    name: 'Day cell states',
  args: { dark: false },
  parameters: {
    controls: { include: ['dark'] },
    docs: {
      description: {
        story: `All individual day cell states from Figma node 9667:2900. Shows how selected, range-endpoint, in-range, and default cells appear side-by-side.`,
      },
      source: {
        code: `<button class="iris-cal__day">14</button>
<button class="iris-cal__day iris-cal__day--today">14</button>
<button class="iris-cal__day iris-cal__day--selected">14</button>
<button class="iris-cal__day iris-cal__day--range-selected">14</button>
<button class="iris-cal__day iris-cal__day--in-range">14</button>
<button class="iris-cal__day iris-cal__day--muted">14</button>
<button class="iris-cal__day iris-cal__day--disabled">14</button>`,
      },
    },
  },
  render: ({ dark }) => {
    const darkCls = dark ? ' iris-cal--dark' : '';
    const stateData = [
      { label: 'Normal',      cls: '' },
      { label: 'Today',       cls: ' iris-cal__day--today' },
      { label: 'Selected',    cls: ' iris-cal__day--selected' },
      { label: 'Range end',   cls: ' iris-cal__day--range-selected' },
      { label: 'In range',    cls: ' iris-cal__day--in-range' },
      { label: 'Muted',       cls: ' iris-cal__day--muted' },
      { label: 'Disabled',    cls: ' iris-cal__day--disabled' },
    ];

    const cells = stateData.map(s =>
      `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <button class="iris-cal__day${s.cls}">14</button>
        <span style="font-size:10px;color:#6b7280;font-family:inherit;">${s.label}</span>
      </div>`
    ).join('');

    return `<div class="iris-cal${darkCls}" style="display:inline-flex;gap:16px;width:auto;padding:20px;">${cells}</div>`;
  },
};

