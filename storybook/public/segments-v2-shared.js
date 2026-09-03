/* ══════════════════════════════════════════════════════════════════════════
   Shared runtime for Customer Segments variant 2.

   The v1 audit found three pages using three different greens for one status,
   which is why v1 got a shared stylesheet. The same lesson applies to behaviour:
   the icon set, the number formats, the type-to-colour map, the toast, the modal
   and the overflow menu live here so the two v2 pages cannot drift apart.

   Loads AFTER segments-data.js. Nothing here redefines anything that module
   exports — `money` and `ltvFmt` live there and are deliberately not touched.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── numbers ──────────────────────────────────────────────────────────────
   One money format for the whole variant, reusing `money()` from
   segments-data.js: cents below $1,000, whole dollars above. Two formats were
   in use and they disagreed in public — an average LTV of $6.57 printed as "$7"
   in one cell while the AOV beside it printed "$134.00". Below a thousand the
   cents are the number. */
const fmt$  = v => money(v);
const fmt$2 = v => money(v);
const fmtN  = v => Math.round(v).toLocaleString('en-US');
/* Below a tenth of a percent, one decimal prints 0.0% for a segment that does
   have customers — 3 of 35,590 read as nothing at all. */
const pct   = v => (v > 0 && v * 100 < 0.1) ? '<0.1%' : (v * 100).toFixed(1) + '%';

/* Data Rooms shows "a month ago" and nothing else, and in a finance product the
   question is usually "before or after the month close", which a relative date
   cannot answer. The absolute date leads; the relative one stays underneath
   because it is the faster read when the answer is "recently". */
const fmtDate = d => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

/* An em dash is not "zero" and must not be read as one. The screen reader gets
   the words, the eye gets the dash, and the colour clears AA. */
const DASH = '<span style="color:var(--dr-muted)"><span class="seg-sr">no value</span><span aria-hidden="true">—</span></span>';

/* ── icons (Heroicons, 24px grid) ─────────────────────────────────────────
   Kept as path data rather than inline SVG so a size can be chosen at the call
   site; every call passes aria-hidden, because each one sits beside its label. */
const IC = {
  users:  'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
  funnel: 'M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z',
  cal:    'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5',
  clock:  'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  bolt:   'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z',
  globe:  'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.95 8.95 0 0 0 4.5-1.207M12 21a8.95 8.95 0 0 1-4.5-1.207M3.6 9h16.8M3.6 15h16.8M12 3a13.5 13.5 0 0 0 0 18 13.5 13.5 0 0 0 0-18Z',
  cube:   'm21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
  spark:  'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z',
  cash:   'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  tag:    'M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z',
  layers: 'M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3',
  warn:   'M12 9v3.75m0 3.75h.008M10.34 3.94 2.7 17.1A1.5 1.5 0 0 0 4 19.35h16A1.5 1.5 0 0 0 21.3 17.1L13.66 3.94a1.5 1.5 0 0 0-2.6 0Z',
  check:  'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  slash:  'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636',
  quest:  'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z',
  box:    'M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z',
  copy:   'M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25',
  trash:  'm14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166M18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.2v.916m7.5 0a48.667 48.667 0 0 0-7.5 0',
  down:   'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3',
  pencil: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z',
  arrUp:  'M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75',
  arrDn:  'M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75',
  chart:  'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  folder: 'M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z',
  folderOpen: 'M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776',
  user:   'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
  link:   'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244',
  dash:   'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z',
  receipt:'M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
};
const svg = (d, s) => '<svg width="' + (s || 15) + '" height="' + (s || 15) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="' + d + '"/></svg>';

/* ── Colour that carries meaning ──────────────────────────────────────────
   Data Rooms colours a row by file type. This colours a row by what the segment
   is about, read off its own conditions. `c` is the library .card-icon variant,
   so the palette is the design system's and not a second one invented here.
   `c` is the whole class, not a suffix: it used to be a colour word pasted onto
   "card-icon-", and renaming the neutral variant left every "other" tile
   emitting a class that no longer existed. The library has no neutral variant;
   .dr-icon-neutral is ours and lives in segments-v2.css. */
/* Type hues deliberately avoid the status scale. Green means "active" and yellow
   means "matched nobody" everywhere else on this page, so a green or yellow tile
   made one hue carry two unrelated meanings. These four — blue, indigo, teal,
   sky — plus the neutral are the .card-icon variants added to the library for
   exactly this, and none of them is a status colour. */
const KIND = {
  geo:       { ic: IC.globe, l: 'Geography',   c: 'card-icon-blue'   },
  product:   { ic: IC.cube,  l: 'Product',     c: 'card-icon-indigo' },
  behaviour: { ic: IC.spark, l: 'Behaviour',   c: 'card-icon-teal'   },
  value:     { ic: IC.cash,  l: 'Order value', c: 'card-icon-sky'    },
  other:     { ic: IC.tag,   l: 'Other',       c: 'card-icon-gray'   }
};

/* Rail labels are short enough to hold one line in a 208px column. "No customers
   match" wrapped to two lines and broke the rhythm of the list; the KPI cell
   above it already says "No matches", so one wording now serves both. The long
   form survives where there is room for it — the status badge on the segment
   page still reads "No customers match". */
const STATE = {
  ready:   { ic: IC.check, l: 'Has customers', badge: 'green',  short: 'Active' },
  nomatch: { ic: IC.slash, l: 'No matches',    badge: 'yellow', short: 'No customers match' },
  unknown: { ic: IC.quest, l: 'No data',       badge: 'gray',   short: 'No data' }
};

/* ── Undo v1's demo persistence ───────────────────────────────────────────
   segments-data.js replays a `segCalculated` list out of sessionStorage so that
   pressing Calculate on the v1 list leaves a visible result. It does that by
   mutating SEGMENTS in place, which both variants share: press Calculate in v1,
   open v2 in the same browser session, and a segment that reads "No data" here
   has silently become "No customers match" with a row of zeros.

   v2 has no run step at all, so it must not inherit the outcome of one. The
   numbers are restored from RAW, which is the untouched snapshot. */
if (typeof RAW !== 'undefined') {
  SEGMENTS.forEach((s, i) => {
    const r = RAW[i];
    if (!r || !r.never) return;
    s.c = r.c; s.o = r.o; s.aov = r.aov; s.net = r.net; s.ltv = r.ltv;
    s.up = r.up; s.never = true; s.share = r.c == null ? null : r.c / BASE;
  });
}

/* ── Company baseline ─────────────────────────────────────────────────────
   Read off the segments that match every customer: 35,590 customers, 75,437
   orders, $3,745,567 net, $49.65 AOV, $140 LTV. Those rows are the bug, but the
   totals they report are the real company totals, which makes them the only
   honest denominator available for "is this segment better than average".
   Every use is labelled "company average" so the comparison is never implicit. */
const COMPANY = { c: 35590, o: 75437, net: 3745567, aov: 49.65, ltv: 140 };

/* ── Fragments ────────────────────────────────────────────────────────────
   The library .progress, used to turn a count into something the eye reads
   before the digits. */
function bar(frac, cls, label) {
  const w = Math.max(0, Math.min(1, frac || 0)) * 100;
  /* LIBRARY GAP: .progress declares height and width but no `display`, so it only
     works on a block-level element. On a <span> the height is ignored and the
     block-level .progress-bar inside it renders as a tall box. Emitted as a div,
     and segments-v2.css sets display:block so the class is safe either way. */
  return '<div class="progress progress-sm" role="img" aria-label="' +
         esc(label || (w.toFixed(1) + '% of the customer base')) + '">' +
         '<div class="progress-bar ' + (cls || 'progress-bar-primary') + '" style="width:' + w.toFixed(1) + '%"></div></div>';
}

/* Negative LTV in accounting parentheses AND in the danger colour AND with the
   word in the accessible name: colour never carries it alone (WCAG 1.4.1). */
function ltvCell(v) {
  if (v == null) return DASH;
  if (v >= 0) return fmt$(v);
  return '<span style="color:var(--color-text-fg-danger);font-weight:500;">' +
         '<span class="seg-sr">negative </span>(' + fmt$(Math.abs(v)).slice(1) + ')</span>';
}

/* A delta against the company average. Arrow + sign + colour, so it survives
   greyscale and colour blindness. `good` says which direction is good — for a
   return rate, down is good. */
function delta(value, baseline, opts) {
  const o = opts || {};
  if (value == null || !baseline) return '';
  /* `self` means this row is where the baseline came from. Comparing it to
     itself and printing "in line with company average" is a tautology. */
  if (o.self) return '';
  const d = (value - baseline) / Math.abs(baseline);
  if (Math.abs(d) < 0.005) return '<span class="card-trend card-trend-neutral">in line with company</span>';
  const up = d > 0;
  const good = o.goodDown ? !up : up;
  return '<span class="card-trend card-trend-' + (good ? 'up' : 'down') + '">' +
         svg(up ? IC.arrUp : IC.arrDn, 12) +
         (up ? '+' : '−') + Math.abs(d * 100).toFixed(0) + '% vs company' + '</span>';
}

/* ── Toast ────────────────────────────────────────────────────────────────
   No window.alert anywhere in these prototypes. */
function toast(title, msg) {
  const host = document.getElementById('toasts');
  if (!host) return;
  const el = document.createElement('div');
  el.className = 'toast'; el.setAttribute('role', 'status');
  el.innerHTML = '<span class="toast-icon toast-icon-success"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg></span>' +
    '<div class="toast-body"><div class="toast-title">' + esc(title) + '</div><div class="toast-message">' + esc(msg) + '</div></div>' +
    '<button class="toast-close" aria-label="Dismiss">✕</button>';
  el.querySelector('.toast-close').onclick = () => el.remove();
  host.appendChild(el);
  setTimeout(() => el.remove(), 6000);
}

/* ── Modal ────────────────────────────────────────────────────────────────
   Focus is trapped, Escape closes, and focus returns to whatever opened it. */
function modal(o) {
  const host = document.getElementById('modalHost'), opener = document.activeElement;
  /* .modal-backdrop is the library's: position:fixed, inset:0, a 50% scrim and
     centring. The prototype had been using .seg-modal-backdrop, which has no
     rule anywhere — the dialog rendered in normal page flow, with no scrim, while
     claiming aria-modal="true". */
  host.innerHTML = '<div class="modal-backdrop"><div class="modal-dialog modal-dialog-sm" role="dialog" aria-modal="true" aria-labelledby="mdT">' +
    '<div class="modal-header"><h2 class="modal-title" id="mdT">' + esc(o.title) + '</h2><button class="modal-close" data-md="x" aria-label="Close">✕</button></div>' +
    '<div class="modal-body">' + o.body + '</div>' +
    '<div class="modal-footer"><button class="btn btn-sm btn-alternative" data-md="x">Cancel</button>' +
    '<button class="btn btn-sm ' + (o.danger ? 'btn-red' : 'btn-primary') + '" data-md="ok">' + esc(o.confirmLabel) + '</button></div></div></div>';
  const close = () => { host.innerHTML = ''; document.removeEventListener('keydown', onKey); opener && opener.focus && opener.focus(); };
  const onKey = ev => {
    if (ev.key === 'Escape') return close();
    if (ev.key !== 'Tab') return;
    const els = [...host.querySelectorAll('button')], first = els[0], last = els[els.length - 1];
    if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
    else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
  };
  document.addEventListener('keydown', onKey);
  host.querySelector('[data-md="x"].btn').focus();
  host.onclick = ev => {
    if (ev.target.closest('[data-md="ok"]')) { const fn = o.onConfirm; close(); fn(); }
    else if (ev.target.closest('[data-md="x"]') || ev.target.classList.contains('modal-backdrop')) close();
  };
}

/* ── Text-entry dialog ────────────────────────────────────────────────────
   window.prompt is not a component. This is the library modal with a single
   .form-input, the same focus trap and the same return-focus behaviour. */
function promptModal(o) {
  const host = document.getElementById('modalHost'), opener = document.activeElement;
  host.innerHTML = '<div class="modal-backdrop"><div class="modal-dialog modal-dialog-sm" role="dialog" aria-modal="true" aria-labelledby="pmT">' +
    '<div class="modal-header"><h2 class="modal-title" id="pmT">' + esc(o.title) + '</h2>' +
    '<button class="modal-close" data-pm="x" aria-label="Close">✕</button></div>' +
    '<div class="modal-body"><label class="form-label" for="pmI">' + esc(o.label) + '</label>' +
    '<input class="form-input" id="pmI" type="text" placeholder="' + esc(o.placeholder || '') + '" maxlength="40"></div>' +
    '<div class="modal-footer"><button class="btn btn-sm btn-alternative" data-pm="x">Cancel</button>' +
    '<button class="btn btn-sm btn-primary" data-pm="ok">' + esc(o.confirmLabel) + '</button></div></div></div>';
  const input = host.querySelector('#pmI');
  const close = () => { host.innerHTML = ''; document.removeEventListener('keydown', onKey); opener && opener.focus && opener.focus(); };
  const ok = () => { const v = input.value.trim(); if (!v) return input.focus(); const fn = o.onConfirm; close(); fn(v); };
  const onKey = ev => {
    if (ev.key === 'Escape') return close();
    if (ev.key === 'Enter' && document.activeElement === input) { ev.preventDefault(); return ok(); }
    if (ev.key !== 'Tab') return;
    const els = [...host.querySelectorAll('button, input')], first = els[0], last = els[els.length - 1];
    if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
    else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
  };
  document.addEventListener('keydown', onKey);
  input.focus();
  host.onclick = ev => {
    if (ev.target.closest('[data-pm="ok"]')) return ok();
    if (ev.target.closest('[data-pm="x"]') || ev.target.classList.contains('modal-backdrop')) close();
  };
}

/* ── Overflow menu ────────────────────────────────────────────────────────
   Rendered into <body> with position:fixed. An earlier version lived inside the
   cell, where overflow:hidden on the <td> clipped it and nothing appeared.

   Items are grouped: everyday actions above the rule, the ones that end the
   segment's life below it. On the current product they sit in one flat list. */
function closeMenu() {
  document.querySelectorAll('.dr-menu').forEach(m => m.remove());
  document.querySelectorAll('[aria-haspopup="menu"][aria-expanded="true"]')
          .forEach(b => b.setAttribute('aria-expanded', 'false'));
}
function menu(btn, items, onAct) {
  const wasOpen = btn.getAttribute('aria-expanded') === 'true';
  closeMenu();
  if (wasOpen) return;
  const m = document.createElement('div');
  m.className = 'dropdown-menu dr-menu'; m.setAttribute('role', 'menu');
  m.setAttribute('aria-label', btn.getAttribute('aria-label') || 'Actions');
  m.innerHTML = items.map(i =>
    i.sep ? '<div class="dropdown-divider"></div>'
    : i.lab ? '<div class="dropdown-label">' + esc(i.lab) + '</div>'
    : i.href ? '<a class="dropdown-item" role="menuitem" href="' + i.href + '">' +
               '<span class="dropdown-item__icon">' + svg(i.ic, 16) + '</span>' + esc(i.t) + '</a>'
    : '<button class="dropdown-item' + (i.danger ? ' danger' : '') + '" role="menuitem" data-act="' + i.act + '">' +
      '<span class="dropdown-item__icon">' + svg(i.ic, 16) + '</span>' + esc(i.t) + '</button>').join('');
  document.body.appendChild(m);

  const r = btn.getBoundingClientRect();
  m.style.top  = Math.max(8, Math.min(r.bottom + 6, innerHeight - m.offsetHeight - 8)) + 'px';
  m.style.left = Math.max(8, Math.min(r.right - m.offsetWidth, innerWidth - m.offsetWidth - 8)) + 'px';
  btn.setAttribute('aria-expanded', 'true');

  const its = [...m.querySelectorAll('.dropdown-item')];
  its.forEach((it, i) => it.tabIndex = i ? -1 : 0);
  its[0].focus();
  m.addEventListener('keydown', ev => {
    const i = its.indexOf(document.activeElement);
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
      ev.preventDefault();
      its[(i + (ev.key === 'ArrowDown' ? 1 : -1) + its.length) % its.length].focus();
    }
    if (ev.key === 'Escape') { ev.preventDefault(); closeMenu(); btn.focus(); }
    /* Tab leaves the menu and continues through the page; closing it and then
       putting focus back on the trigger sent Tab to the element after it. */
    if (ev.key === 'Tab') closeMenu();
  });
  m.addEventListener('click', ev => {
    const a = ev.target.closest('[data-act]');
    if (!a) return;
    closeMenu();
    /* Focus returns to the trigger BEFORE the action runs. A dialog opened from
       here reads document.activeElement to know where to hand focus back, and
       closeMenu() had already removed the item that had it. */
    btn.focus();
    onAct(a.dataset.act);
  });
}
/* ── Focus across a re-render ─────────────────────────────────────────────
   render() replaces innerHTML, which destroys the button that was just pressed.
   For a mouse that is invisible; on a keyboard focus falls back to the top of
   the document and the list becomes unusable. */
function keepFocus(el, redraw) {
  const sel = el && (el.dataset.kind  ? '[data-kind="'  + el.dataset.kind  + '"]'
                   : el.dataset.state ? '[data-state="' + el.dataset.state + '"]'
                   : el.dataset.sort  ? '[data-sort="'  + el.dataset.sort  + '"]'
                   : el.dataset.psort ? '[data-psort="' + el.dataset.psort + '"]'
                   : el.dataset.pf    ? '[data-pf="'    + el.dataset.pf    + '"]'
                   : el.dataset.grp   ? '[data-grp="'   + el.dataset.grp   + '"]' : null);
  redraw();
  if (!sel) return;
  const next = document.querySelector(sel);
  if (next) next.focus();
}

addEventListener('resize', closeMenu);
addEventListener('scroll', closeMenu, true);
