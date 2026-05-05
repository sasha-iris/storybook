// Figma nodes: 9667:2900 (date cells), 9667:2931 (month/year tab picker),
//              13293:84585 (complete widget + input), 3283:20287 (dropdown types × themes)
// File key: ZKtEULdYKaXe5uQl1J6ijI

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  // Light
  bgCard:       '#ffffff',
  bgInput:      '#f9fafb',
  borderInput:  '#d1d5db',
  titleColor:   '#111928',
  dayHeader:    '#6b7280',
  dayText:      '#111928',
  selectedSimple: '#1447e6',
  selectedRange:  '#42389d',
  inRange:        '#f3f4f6',
  btnOk:        '#42389d',
  btnCancel:    '#ffffff',
  btnCancelText:'#1e2939',
  calIcon:      '#6b7280',
  placeholder:  '#6b7280',
  // Dark
  dark_bgCard:  '#374151',
  dark_dayText: '#ffffff',
  dark_dayHdr:  '#9ca3af',
  dark_title:   '#ffffff',
  dark_btnCancel: '#4b5563',
  dark_calIcon: '#9ca3af',
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
  const textDef   = dark ? T.dark_dayText  : T.dayText;
  const hdrColor  = dark ? T.dark_dayHdr   : T.dayHeader;
  const bgCard    = dark ? T.dark_bgCard   : T.bgCard;
  const DAY_HEADERS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  const headerRow = DAY_HEADERS.map(d =>
    `<div style="width:36px;height:20px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:${hdrColor};">${d}</div>`
  ).join('');

  const cells = days.map(({ label, state }) => {
    let bg = 'transparent', color = textDef, radius = '8px', fw = '700';
    if (state === 'selected') { bg = T.selectedSimple; color = '#ffffff'; }
    if (state === 'range-end') { bg = T.selectedRange; color = '#ffffff'; }
    if (state === 'range')     { bg = T.inRange; color = textDef; }
    if (state === 'empty')     { color = 'transparent'; }
    if (state === 'range')     { radius = '0px'; }
    return `<div style="width:36px;height:34px;display:flex;align-items:center;justify-content:center;
      background:${bg};border-radius:${radius};font-size:12px;font-weight:${fw};color:${color};cursor:${label ? 'pointer' : 'default'};">
      ${label || ''}
    </div>`;
  }).join('');

  return `<div style="display:grid;grid-template-columns:repeat(7,36px);gap:0;">
    ${headerRow}${cells}
  </div>`;
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
function calCard(inner, dark, width = 284) {
  const bg     = dark ? T.dark_bgCard : T.bgCard;
  const arrow  = dark ? T.dark_title  : T.titleColor;
  return `<div style="background:${bg};border-radius:8px;padding:12px;width:${width}px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">${inner}</div>`;
}

function calHeader(monthYear, dark, withTabs = false) {
  const color = dark ? T.dark_title : T.titleColor;
  const arrow = dark ? T.dark_title : T.titleColor;
  const title = withTabs
    ? `<div style="display:flex;gap:4px;">
        <span style="font-size:12px;font-weight:700;color:${color};padding:4px 8px;background:#f3f4f6;border-radius:4px;">${monthYear.split(' ')[0]}</span>
        <span style="font-size:12px;font-weight:700;color:${color};padding:4px 8px;background:#f3f4f6;border-radius:4px;">${monthYear.split(' ')[1]}</span>
      </div>`
    : `<span style="font-size:12px;font-weight:700;color:${color};">${monthYear}</span>`;
  return `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
    <button style="background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;">${chevronLeft(arrow)}</button>
    ${title}
    <button style="background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;">${chevronRight(arrow)}</button>
  </div>`;
}

function calFooter(dark) {
  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? '#ffffff'         : T.btnCancelText;
  const cancelBorder = dark ? 'none' : `1px solid ${T.borderInput}`;
  return `<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
    <button style="height:37px;padding:0 16px;background:${cancelBg};border:${cancelBorder};
      border-radius:12px;font-size:12px;font-weight:500;color:${cancelText};cursor:pointer;font-family:inherit;">Cancel</button>
    <button style="height:37px;padding:0 16px;background:${T.btnOk};border:none;
      border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Ok</button>
  </div>`;
}

// ─── Input trigger ─────────────────────────────────────────────────────────────
function datepickerInput({ placeholder = 'Select date', size = 'default', dark = false, value = '' }) {
  const h        = size === 'large' ? 52 : 42;
  const bg       = dark ? '#374151'      : T.bgInput;
  const border   = dark ? '#4b5563'      : T.borderInput;
  const text     = dark ? '#ffffff'      : T.dayText;
  const phColor  = dark ? T.dark_dayHdr  : T.placeholder;
  const iconColor = dark ? T.dark_calIcon : T.calIcon;
  const displayed = value || `<span style="color:${phColor};">${placeholder}</span>`;
  return `<div style="display:flex;align-items:center;width:325px;height:${h}px;
    background:${bg};border:1px solid ${border};border-radius:8px;
    padding:0 12px;gap:8px;box-sizing:border-box;cursor:pointer;font-family:inherit;">
    ${calendarIcon(iconColor)}
    <span style="font-size:14px;color:${text};">${displayed}</span>
  </div>`;
}

// ─── Simple datepicker ─────────────────────────────────────────────────────────
function simpleCalendar({ dark, size }) {
  const header = calHeader('May 2024', dark);
  const grid   = monthGrid(defaultMonthDays(14), dark);
  const footer = calFooter(dark);
  return calCard(`${header}${grid}${footer}`, dark, 284);
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

// Simpler range implementation without positioning hacks
function rangeCalendarSimple({ dark }) {
  const bg = dark ? T.dark_bgCard : T.bgCard;

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

  const arrow = dark ? T.dark_title : T.titleColor;
  const titleColor = dark ? T.dark_title : T.titleColor;

  function miniHeader(label) {
    return `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronLeft(arrow)}</button>
      <span style="font-size:12px;font-weight:700;color:${titleColor};">${label}</span>
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronRight(arrow)}</button>
    </div>`;
  }

  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? '#ffffff'         : T.btnCancelText;
  const cancelBorder = dark ? 'none' : `1px solid ${T.borderInput}`;

  return `<div style="background:${bg};border-radius:8px;padding:12px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);display:inline-block;font-family:inherit;">
    <div style="display:flex;gap:16px;">
      <div>${miniHeader('April 2024')}${monthGrid(aprilDays, dark)}</div>
      <div>${miniHeader('May 2024')}${monthGrid(mayDays, dark)}</div>
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${cancelBg};border:${cancelBorder};
        border-radius:12px;font-size:12px;font-weight:500;color:${cancelText};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${T.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Ok</button>
    </div>
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
      color:${isSelected ? '#ffffff' : text};
      background:${isSelected ? T.selectedRange : 'transparent'};
      border-radius:8px;cursor:pointer;">${m}</div>`;
  }).join('');

  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? '#ffffff'         : T.btnCancelText;
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
        border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Ok</button>
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
      color:${isSelected ? '#ffffff' : text};
      background:${isSelected ? T.selectedSimple : 'transparent'};
      border-radius:8px;cursor:pointer;">${y}</div>`;
  }).join('');

  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? '#ffffff'         : T.btnCancelText;
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
        border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Ok</button>
    </div>
  </div>`;
}

// ─── Date of Birth scroll picker ──────────────────────────────────────────────
function dobPicker({ dark }) {
  const bg      = dark ? T.dark_bgCard : T.bgCard;
  const text    = dark ? T.dark_dayText : T.dayText;
  const dimmed  = dark ? '#6b7280' : '#9ca3af';
  const titleCl = dark ? T.dark_title  : T.titleColor;
  const arrow   = dark ? T.dark_title  : T.titleColor;
  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? '#ffffff'         : T.btnCancelText;
  const cancelBorder = dark ? 'none' : `1px solid ${T.borderInput}`;

  function scrollCol(label, items, selected) {
    const cells = items.map((item, i) => {
      const isSel = item === selected;
      return `<div style="height:40px;display:flex;align-items:center;justify-content:center;
        font-size:12px;font-weight:${isSel ? 700 : 400};
        color:${isSel ? (dark ? '#ffffff' : T.titleColor) : dimmed};
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
        border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Ok</button>
    </div>
  </div>`;
}

// ─── Month/Year tab picker (9667:2931) ────────────────────────────────────────
function tabPicker({ dark, activeTab = 'month' }) {
  const bg      = dark ? T.dark_bgCard : T.bgCard;
  const text    = dark ? T.dark_dayText : T.dayText;
  const dimmed  = dark ? '#6b7280' : '#9ca3af';
  const titleCl = dark ? T.dark_title  : T.titleColor;
  const tabSelBg = '#f3f4f6';
  const tabSelText = T.selectedRange;
  const arrow   = dark ? T.dark_title  : T.titleColor;
  const cancelBg   = dark ? T.dark_btnCancel : T.btnCancel;
  const cancelText = dark ? '#ffffff'         : T.btnCancelText;
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
      color:${isSel ? T.selectedRange : (dark ? T.dark_dayText : '#374151')};cursor:pointer;">${item}</div>`;
  }).join('');

  return `<div style="background:${bg};border-radius:8px;padding:12px;width:328px;
    box-shadow:0 4px 24px rgba(0,0,0,0.12);font-family:inherit;box-sizing:border-box;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronLeft(arrow)}</button>
      <span style="font-size:12px;font-weight:700;color:${titleCl};">FEB 2024</span>
      <button style="background:none;border:none;cursor:pointer;padding:0;">${chevronRight(arrow)}</button>
    </div>
    <div style="display:flex;gap:4px;background:${dark ? '#4b5563' : '#f9fafb'};border-radius:8px;padding:4px;margin-bottom:8px;">
      ${monthTab}${yearTab}
    </div>
    <div style="max-height:240px;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;">
      ${listItems}
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px;">
      <button style="height:37px;padding:0 16px;background:${cancelBg};border:${cancelBorder};
        border-radius:12px;font-size:12px;font-weight:500;color:${cancelText};cursor:pointer;font-family:inherit;">Cancel</button>
      <button style="height:37px;padding:0 16px;background:${T.btnOk};border:none;
        border-radius:12px;font-size:12px;font-weight:500;color:#ffffff;cursor:pointer;font-family:inherit;">Apply</button>
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
- Selected state: single day (\`#1447e6\`) or range endpoints (\`#42389d\`) with in-range fill (\`#f3f4f6\`)
- Footer: Cancel + Ok/Apply buttons
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
      description: 'Dark theme. Card bg `#374151`, text `#ffffff`, cancel button `#4b5563`.',
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
  render: (args) => fullWidget(args),
  parameters: {
    docs: {
      source: {
        transform: (_src, ctx) => {
          const { type, dark, size } = ctx.args;
          const placeholder = type === 'range' ? 'Select period' : 'Select date';
          const h = size === 'large' ? 52 : 42;
          return `<!-- Input trigger (${size}, ${dark ? 'dark' : 'light'}) -->
<div class="datepicker-input" style="height:${h}px;">
  ${calendarIcon(dark ? T.dark_calIcon : T.calIcon)}
  <span>${placeholder}</span>
</div>
<!-- Calendar dropdown: type="${type}" -->`;
        },
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
        code: `<!-- Simple datepicker -->
<div class="datepicker-input" style="height:42px;">
  <!-- calendar icon + placeholder -->
</div>
<div class="datepicker-calendar">
  <!-- header + day grid + footer -->
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
<div class="datepicker-input" style="height:42px;">...</div>

<!-- Large 52px -->
<div class="datepicker-input datepicker-input--lg" style="height:52px;">...</div>`,
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
        code: `<!-- Selected: bg #1447e6, text #ffffff, border-radius 8px -->
<!-- Range endpoint: bg #42389d, text #ffffff -->
<!-- In-range: bg #f3f4f6, text #111928 -->
<!-- Normal: transparent, text #111928 -->`,
      },
    },
  },
  render: ({ dark }) => {
    const bg    = dark ? T.dark_bgCard : T.bgCard;
    const text  = dark ? T.dark_dayText : T.dayText;
    const label = dark ? T.dark_title : T.titleColor;

    const stateData = [
      { label: 'Normal',       bg: 'transparent',     color: text,      fw: 700 },
      { label: 'Today',        bg: 'transparent',     color: T.selectedSimple, fw: 700 },
      { label: 'Selected',     bg: T.selectedSimple,  color: '#ffffff',  fw: 700 },
      { label: 'Range end',    bg: T.selectedRange,   color: '#ffffff',  fw: 700 },
      { label: 'In range',     bg: T.inRange,         color: text,       fw: 400 },
    ];

    const cells = stateData.map(s =>
      `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
        <div style="width:36px;height:34px;display:flex;align-items:center;justify-content:center;
          background:${s.bg};border-radius:8px;font-size:12px;font-weight:${s.fw};color:${s.color};font-family:inherit;">14</div>
        <span style="font-size:10px;color:${dark ? '#9ca3af' : '#6b7280'};font-family:inherit;">${s.label}</span>
      </div>`
    ).join('');

    return `<div style="background:${bg};border-radius:8px;padding:20px;display:inline-flex;gap:16px;
      box-shadow:0 2px 8px rgba(0,0,0,0.08);font-family:inherit;">${cells}</div>`;
  },
};
