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
  /* Fin's brand mark, read off the product's own sidebar ("Fin AI") and its
     "Generate with Fin" menu row on 2026-09-07: MUI AutoFixHigh. A brand mark,
     so it is not swapped for a Heroicons lookalike. Filled, not stroked. */
  wand:   'M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.9959.9959 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z',
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
/* Heroicons are drawn as strokes; Fin's own mark is a filled MUI glyph, so the
   renderer has to be able to do both rather than force a stroke onto a path
   that was designed solid. */
const svg = (d, s) => d === IC.wand ? svgFill(d, s)
  : '<svg width="' + (s || 15) + '" height="' + (s || 15) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="' + d + '"/></svg>';
const svgFill = (d, s) => '<svg width="' + (s || 15) + '" height="' + (s || 15) + '" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + d + '"/></svg>';

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

/* ── List-based segments ──────────────────────────────────────────────────
   A segment is normally a rule: it computes who belongs. A segment built from an
   uploaded file is the other kind — a fixed membership that does not change when
   a definition changes. The distinction matters for the interface, because only
   the second kind has something you can upload INTO. That is why the segment
   page shows "Update the list" on these and on nothing else.

   Only the file's own numbers are used: how many rows it had and which column
   identified the customer. Nothing about revenue is claimed, because matching a
   list against orders is work Iris does and this prototype does not. */
function loadLists() {
  try { return JSON.parse(sessionStorage.getItem('segLists') || '[]'); } catch (e) { return []; }
}
function saveLists(v) { try { sessionStorage.setItem('segLists', JSON.stringify(v)); } catch (e) {} }

function listSegment(rec) {
  const conds = [{ raw: rec.file, label: 'imported from ' + rec.file, noop: false }];
  return {
    id: rec.id, n: rec.n, d: 'Built from an uploaded list', r: null,
    f: [rec.file], conds, live: conds, broken: [],
    c: rec.rows, o: null, aov: null, net: null, ltv: null,
    share: rec.rows / BASE, cr: rec.cr, up: rec.up, never: false,
    state: 'ready', stale: false, age: 0, flags: [], kind: 'other',
    listBased: true, source: rec,
    sentence: rec.rows.toLocaleString('en-US') + ' customers from ' + rec.file
  };
}
loadLists().forEach(rec => { if (!SEGMENTS.some(s => s.id === rec.id)) SEGMENTS.push(listSegment(rec)); });

/* ── Renames ──────────────────────────────────────────────────────────────
   A name changed on the segment page has to be the name the list shows, or the
   rename reads as having failed the moment you navigate back. Held beside the
   segment data rather than written into it, so v1 keeps reading the original
   names. */
function loadNames() {
  /* try/catch covers a parse failure, not a wrong shape. sessionStorage is
     shared with every other page on this origin, and a stored "null" or an
     array here used to take both pages down to a blank screen. */
  try {
    const v = JSON.parse(sessionStorage.getItem('segNames') || '{}');
    return (v && typeof v === 'object' && !Array.isArray(v)) ? v : {};
  } catch (e) { return {}; }
}
function saveName(id, n) {
  const m = loadNames(); m[id] = n;
  try { sessionStorage.setItem('segNames', JSON.stringify(m)); } catch (e) {}
}
(() => { const m = loadNames(); SEGMENTS.forEach(s => { if (m[s.id]) s.n = m[s.id]; }); })();

/* ── Segments made in the builder ─────────────────────────────────────────
   Held the same way as renames, beside the seeded data rather than inside it,
   so v1 keeps reading the original forty. Without this the builder's Save
   toasted "Segment created" and returned to a list that had never heard of it:
   the one round trip the whole flow exists for did not close. Session-scoped,
   which is right for a prototype — a reload of the demo starts clean. */
/* humanize() lowercases a condition for the row summary, which is right for a
   phrase and wrong for a name. A segment built in this prototype carries the
   country and the channel as written, so the row reads "In US" and "Amazon
   Seller Partner" beside the seeded forty rather than "in us" and "amazon
   seller partner". */
function normaliseBuilt(seg) {
  (seg.live || []).forEach(c => {
    const g = /^Geography:\s*(In .+)$/i.exec(c.raw);
    if (g) { c.label = g[1]; return; }
    const ch = /^(\d+ sales channel\(s\)):\s*(.+)$/i.exec(c.raw);
    if (ch) c.label = ch[1] + ': ' + ch[2];
  });
  seg.sentence = seg.live.length ? seg.live.map(c => c.label).join(' · ') : seg.sentence;
}

function loadMade() {
  try {
    const v = JSON.parse(sessionStorage.getItem('segMade') || '[]');
    return Array.isArray(v) ? v.filter(x => x && typeof x === 'object' && typeof x.n === 'string') : [];
  } catch (e) { return []; }
}
function saveMade(seg) {
  const all = loadMade().filter(x => x.id !== seg.id);
  all.push(seg);
  try { sessionStorage.setItem('segMade', JSON.stringify(all)); } catch (e) {}
}
/* Edits made to a seeded segment in the builder. Held beside the data like the
   renames, so v1 keeps reading the shipped definitions. */
(() => {
  let m = {};
  try {
    const v = JSON.parse(sessionStorage.getItem('segEdits') || '{}');
    if (v && typeof v === 'object' && !Array.isArray(v)) m = v;
  } catch (e) {}
  Object.keys(m).forEach(id => {
    const i = SEGMENTS.findIndex(x => x.id === id);
    if (i === -1 || !m[id] || typeof m[id].n !== 'string') return;
    const seg = makeSegment(m[id], 0);
    seg.id = id;
    normaliseBuilt(seg);
    SEGMENTS[i] = seg;
  });
})();

/* Put through makeSegment(), the same derivation the seeded forty go through,
   so a new row carries the same conds / flags / kind / sentence as every other
   row and cannot drift into a second shape. */
(() => {
  const made = loadMade();
  made.forEach((raw, j) => {
    if (SEGMENTS.some(x => x.id === 'made' + j)) return;
    const seg = makeSegment(raw, 0);
    seg.id = 'made' + j;
    /* The geography label is normalised to the same "In US" the seeded forty
       carry via GEO_READ. humanize() lowercases everything for the row summary,
       so without this a segment built here read "geography: in us" beside forty
       rows reading "In US" — and the country still has to be legible to the
       Geography facet underneath. */
    normaliseBuilt(seg);
    SEGMENTS.push(seg);
  });
})();

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
  /* An item may carry a second line. The product's own Create automation menu
     is built that way — "Generate with Fin / Tell Fin what you want" beside
     "Manual / Configure the automation yourself" — so the reader chooses a way
     in by what it does, not by a verb they have to interpret. */
  const label = i => i.sub
    ? '<span class="dropdown-item__two"><b>' + esc(i.t) + '</b><span>' + esc(i.sub) + '</span></span>'
    : esc(i.t);
  m.innerHTML = items.map(i =>
    i.sep ? '<div class="dropdown-divider"></div>'
    : i.lab ? '<div class="dropdown-label">' + esc(i.lab) + '</div>'
    : i.href ? '<a class="dropdown-item' + (i.sub ? ' dropdown-item--two' : '') + '" role="menuitem" href="' + i.href + '">' +
               '<span class="dropdown-item__icon">' + svg(i.ic, 16) + '</span>' + label(i) + '</a>'
    : '<button class="dropdown-item' + (i.danger ? ' danger' : '') + (i.sub ? ' dropdown-item--two' : '') +
      '" role="menuitem" data-act="' + i.act + '">' +
      '<span class="dropdown-item__icon">' + svg(i.ic, 16) + '</span>' + label(i) + '</button>').join('');
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
  const sel = el && (el.dataset.dim    ? '[data-dim="'    + el.dataset.dim    + '"]'
                   : el.dataset.folder ? '[data-folder="' + el.dataset.folder + '"]'
                   : el.dataset.by     ? '[data-by="'     + el.dataset.by     + '"]'
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

/* ── What a segment filters on ────────────────────────────────────────────
   This replaces the TYPE rail. TYPE gave every segment exactly one label
   guessed from its conditions, so "Geography: 1 country + Has 1 product
   family + Discount greater than 10%" was filed under Geography alone and was
   unfindable by anyone looking for the product it names. Marko, on the call of
   2026-09-03, first said TYPE did not behave as he expected — "it's not
   clearing, well, it's just filtering" — and then, clicking down the list:
   "you can probably kill it and just have folders ... you can provide some
   geography for instance and product sub items".

   So: folders organise, dimensions describe, and a segment belongs to EVERY
   dimension it actually filters on. The dimensions are read from the condition
   strings themselves, not assigned. Counts therefore overlap and do not sum to
   40, which is correct for a facet and is why the group is labelled with what
   it does rather than with a total.

   Only live conditions count. "No SKUs selected" names products without
   filtering by them, and a segment that mentions a dimension it does not
   actually narrow must not be findable under it. */
const DIMS = [
  { k: 'geo',      l: 'Geography',      ic: IC.globe,   c: 'card-icon-blue',   re: /geograph|postal/i },
  { k: 'product',  l: 'Products',       ic: IC.cube,    c: 'card-icon-indigo', re: /sku|product famil/i },
  { k: 'channel',  l: 'Sales channels', ic: IC.receipt, c: 'card-icon-teal',   re: /sales channel/i },
  { k: 'ctype',    l: 'Customer type',  ic: IC.users,   c: 'card-icon-sky',    re: /first-time|returning|subscriber/i },
  { k: 'value',    l: 'Order value',    ic: IC.cash,    c: 'card-icon-green',  re: /order value/i },
  { k: 'discount', l: 'Discount',       ic: IC.tag,     c: 'card-icon-purple', re: /discount/i },
  { k: 'refund',   l: 'Refunds',        ic: IC.arrDn,   c: 'card-icon-yellow', re: /refund/i },
  { k: 'rank',     l: 'Percentile rank',ic: IC.chart,   c: 'card-icon-sky',    re: /top \d+%/i },
  { k: 'tag',      l: 'Tags',           ic: IC.spark,   c: 'card-icon-gray',   re: /tag\(s\)/i }
];
/* The tile on a row used to be coloured by the removed Type, which assigned one
   label per segment from its first matching condition. Ten of forty rows then
   carried a tile naming a dimension the segment does not filter on — "refunds"
   wore the order-value tile, and the five whose only condition was never given
   a value wore the geography globe while the rail said they filter on nothing.
   The tile now says what the FIRST real dimension is, and segments that narrow
   by nothing get a neutral one, so the icon and the rail cannot disagree. */
const NODIM = { l: 'No conditions', ic: IC.slash, c: 'card-icon-gray' };
const tileOf = s => (s.dims && s.dims.length) ? DIM[s.dims[0]] : NODIM;
const DIM = Object.fromEntries(DIMS.map(d => [d.k, d]));
function dimsOf(s) {
  const raw = (s.live || []).map(c => c.raw).join(' ; ');
  return DIMS.filter(d => d.re.test(raw)).map(d => d.k);
}
SEGMENTS.forEach(s => { s.dims = dimsOf(s); });

/* ── The countries the list summary throws away ───────────────────────────
   Read one by one out of the live product's own edit screen on 2026-09-07, not
   inferred from anything. The product resolves geography to a country code —
   "In US", "In CA or US", "In GB" — and the list summary replaces that with
   "Geography: 1 country(s)".

   What that costs is exact and demonstrable: "Geo + Offer" is In US and
   "Geo + offer 2" is In CA, and both print the identical line
   "Geography: 1 country(s) AND Discount greater than 25%". Two different
   segments, one sentence. Roland opened the call with precisely this — "there
   were absolutely similar segments, just different at some very small little
   point, so it's difficult to distinguish it."

   Worse, three of them are named after a place they do not filter on:
   "California Buyers", "California High Spenders" and "Illinois Customers"
   all resolve to In US. The name is not the definition, which is why the
   definition has to be readable.

   Channels, SKUs and product families are NOT here: the product's own summary
   leaves those as counts too ("Through 2 channels", "Bought any of 3 SKUs"),
   so there is nothing to carry through yet. */
/* The five SKU codes this account actually uses — F001 and B009 read off the
   product's own Products tab, the rest present in the segment names. The family
   names below them are INVENTED: nothing anywhere names a product family. */
const SKU_CODES = ['F001', 'B009', 'B018', 'B004', 'B005'];
const FAMILIES  = ['Cold brew', 'Powders', 'Accessories'];

const GEO_READ = {
  'US Customers':                             'In US',
  'US or CA':                                 'In US or CA',
  'US v CA':                                  'In CA or US',
  'US Customers -':                           'In US',
  'Geo + Offer':                              'In US',
  'Geo + offer 2':                            'In CA',
  'California Buyers':                        'In US',
  'UK Recent Purchasers':                     'In GB',
  'Illinois Customers - Last Year Purchases': 'In US, postal code IL',
  'California High Spenders':                 'In US, postal code CA'
};
SEGMENTS.forEach(s => {
  const v = GEO_READ[s.n];
  if (!v) return;
  (s.live || []).forEach(c => { if (/geograph/i.test(c.raw)) c.label = v; });
  /* The one-line summary under the name is built from the same labels. */
  s.sentence = s.live.length ? s.live.map(c => c.label).join(' · ') : s.sentence;
});

/* ── Which channels, not how many ─────────────────────────────────────────
   Marko, 12:20, with his cursor by the rail on our own page: "we wanna see HERE
   the channel — remember, we agreed that some segments will become Shopify,
   Amazon oriented." A row that says "2 sales channel(s)" does not let anyone see
   the channel; it is the same omission as "Geography: 1 country(s)".

   The vocabulary below is real, read out of the live product's channel picker on
   2026-09-07: two groups, DTC and Wholesale, six named channels, and a badge of
   32 because every channel opens again into sub-channels.

   WHICH channels a given segment uses is the one thing the product does not
   show — its own summary says "Through 2 channels" and the picker shows the
   whole DTC group ticked, indistinguishable from the default. So unlike the
   countries in GEO_READ, which were read off the screen one segment at a time,
   the assignments here are PLACEHOLDERS: the right shape, the right names,
   the counts the product reports, and no claim about which is true. They exist
   so the design can be judged, and they are the first thing to replace when the
   API answers. */
const CHANNELS = {
  DTC:       ['Amazon Seller Partner', 'Manual Order DTC', 'Shopify DTC'],
  Wholesale: ['Manual Order Wholesale', 'Shopify Wholesale', 'SPS Commerce']
};
/* The product shows a channel as its logo and nothing else — a 44px round chip,
   three of them in a row, name in the title only. Same files, taken from the
   product's own /applications-logos/. */
const CHANNEL_LOGO = {
  'Amazon Seller Partner':  './channel-logos/amazon-logo.svg',
  'Shopify DTC':            './channel-logos/shopify-logo.svg',
  'Manual Order DTC':       './channel-logos/manual-order-dtc-blue-logo.svg',
  'Shopify Wholesale':      './channel-logos/shopify-logo.svg',
  'Manual Order Wholesale': './channel-logos/manual-order-dtc-blue-logo.svg'
};
const CHAN_PLACEHOLDER = {
  /* "2 sales channel(s)" in the list; the editor agrees. */
  'DTC Subscribers': ['Shopify DTC', 'Manual Order DTC'],
  /* "2 sales channel(s)" in the list. */
  'refunds':         ['Amazon Seller Partner', 'Shopify DTC'],
  /* "9 sales channel(s)" — more than the six parents, so it reaches into the
     sub-channels and is described by group rather than named. */
  'April Segment':   ['DTC', 'Wholesale']
};
SEGMENTS.forEach(s => {
  const v = CHAN_PLACEHOLDER[s.n];
  if (!v) return;
  (s.live || []).forEach(c => {
    if (!/sales channel/i.test(c.raw)) return;
    const named = v.every(x => !CHANNELS[x]);
    c.label = named
      ? 'Through ' + v.join(', ')
      : 'Through 9 channels across ' + v.join(' and ');
  });
  s.sentence = s.live.length ? s.live.map(c => c.label).join(' · ') : s.sentence;
});

/* ── Values inside a dimension ────────────────────────────────────────────
   "Narrows by geography" is a category; the reader wants the value. What the
   product actually publishes for a segment is the SHAPE of the condition, never
   the value: "Geography: 1 country(s)", never which country. Checked against
   all forty — no country name appears anywhere in the data, and the only values
   that survive into the summary are two postal codes, IL and CA.

   That omission is itself the finding. Roland opened the call with "there were
   absolutely similar segments, just different at some very small little point,
   so it's difficult to distinguish it" — US Customers and UK Customers both
   read "Geography: 1 country(s)", and no amount of layout fixes that.

   So this shows every value the data really carries, verbatim, and no more.
   When the API supplies the country, it lands here without a redesign. */
/* Marko, 11:40: "I can provide some geography for instance and product SUB
   ITEMS". Sub items, not items — the values have levels of their own. The live
   product works the same way: its three DTC sales channels are parents, and a
   segment reporting "12 sales channel(s)" is counting the sub-channels beneath
   them. Geography is country then postal code; products would be family then
   SKU; channels, channel then sub-channel.

   Only geography has a second level in the data we hold, so only geography
   grows one. The shape is the same for all of them, so the day a family or a
   sub-channel arrives it lands here without a redesign. */
/* Which group a channel belongs to, and which channels a condition names. */
const CHAN_GROUP = {};
Object.keys(CHANNELS).forEach(g => CHANNELS[g].forEach(c => { CHAN_GROUP[c] = g; }));
function chanParts(label) {
  const t = String(label || '');
  const chans = Object.keys(CHAN_GROUP).filter(c => t.indexOf(c) !== -1);
  /* A condition that reaches into the sub-channels names its groups instead. */
  const groups = chans.length ? [...new Set(chans.map(c => CHAN_GROUP[c]))]
                             : Object.keys(CHANNELS).filter(g => new RegExp('\\b' + g + '\\b').test(t));
  return { chans: chans, groups: groups };
}

function geoParts(label) {
  /* "Geography: In US" as well as "In US": a segment built in this prototype
     writes the dimension name in front so the Geography facet matches it, and
     the country still has to be readable out of the tail. */
  /* Case-insensitive, and the code is upper-cased on the way out: humanize()
     lowercases a condition label for the row summary, so a segment built in
     this prototype arrived as "geography: in us" and the country resolved to
     nothing — the row was then filterable under Geography but under no country
     inside it. */
  const m = /(?:^|:\s*)In ([A-Za-z]{2}(?: or [A-Za-z]{2})*)/i.exec(label || '');
  return {
    cc: m ? m[1].split(' or ').map(x => x.toUpperCase()) : [],
    pc: [...String(label || '').matchAll(/postal code ([A-Za-z]{2})/gi)].map(x => x[1].toUpperCase())
  };
}

/* A token addresses a node: "geo|US" is a country, "geo|US|IL" a postal code
   inside it, "product|Has 3 SKUs" a flat value in a dimension with no second
   level yet. */
function dimTree(k, pool) {
  const d = DIM[k];
  if (!d) return [];
  if (k === 'channel') {
    /* Group, then channel inside it — the shape the product's own picker uses:
       Select All over DTC and Wholesale, each holding named channels. */
    const g = new Map(), c = new Map();
    pool.forEach(s => (s.live || []).forEach(cond => {
      if (!d.re.test(cond.raw)) return;
      const p = chanParts(cond.label);
      p.groups.forEach(x => g.set(x, (g.get(x) || 0) + 1));
      p.chans.forEach(x => c.set(x, (c.get(x) || 0) + 1));
    }));
    return [...g.entries()].map(([x, n]) => ({
      tok: 'channel|' + x, l: x, n: n,
      kids: (CHANNELS[x] || []).filter(ch => c.has(ch))
        .map(ch => ({ tok: 'channel|' + x + '|' + ch, l: ch, n: c.get(ch), kids: [] }))
    })).sort((a, b) => b.n - a.n || a.l.localeCompare(b.l));
  }
  if (k === 'product') {
    /* ── Second level for Products ─────────────────────────────────────────
       ASSIGNED, NOT READ. The data counts a segment's products and never names
       them — "Has 3 SKU(s)", "Has 1 product family(s)" — and the product's own
       editor says the same ("Bought any of 3 SKUs"). Asked for the second level
       anyway, so the count is expanded deterministically: a segment with N SKUs
       takes the first N codes, one with N families the first N families.

       The SKU CODES are real — F001, B009, B018, B004 and B005 all appear in
       this account, the first two with real figures on the Products tab. What is
       invented is which segment holds which, and the family names entirely. The
       group says so on screen, so nobody reads it as a specification. */
    const bySku = new Map(), byFam = new Map();
    pool.forEach(s => (s.live || []).forEach(c => {
      const sk = /Has (\d+) SKU/i.exec(c.raw);
      if (sk) SKU_CODES.slice(0, +sk[1]).forEach(x => bySku.set(x, (bySku.get(x) || 0) + 1));
      const fm = /Has (\d+) product famil/i.exec(c.raw);
      if (fm) FAMILIES.slice(0, +fm[1]).forEach(x => byFam.set(x, (byFam.get(x) || 0) + 1));
    }));
    const node = (label, map, tag) => {
      const kids = [...map.entries()].map(([v, n]) => ({ tok: 'product|' + label + '|' + v, l: v, n: n, kids: [] }))
        .sort((a, b) => b.n - a.n || a.l.localeCompare(b.l));
      const total = pool.filter(s => (s.live || []).some(c => tag.test(c.raw))).length;
      return kids.length ? [{ tok: 'product|' + label, l: label, n: total, kids: kids }] : [];
    };
    return node('SKUs', bySku, /Has \d+ SKU/i).concat(node('Product families', byFam, /Has \d+ product famil/i));
  }
  if (k !== 'geo') {
    const seen = new Map();
    pool.forEach(s => (s.live || []).forEach(c => {
      if (d.re.test(c.raw)) seen.set(c.label, (seen.get(c.label) || 0) + 1);
    }));
    return [...seen.entries()].map(([v, n]) => ({ tok: k + '|' + v, l: v, n: n, kids: [] }))
      .sort((a, b) => b.n - a.n || a.l.localeCompare(b.l));
  }
  const cc = new Map(), pc = new Map();
  pool.forEach(s => (s.live || []).forEach(c => {
    if (!d.re.test(c.raw)) return;
    const g = geoParts(c.label);
    g.cc.forEach(x => cc.set(x, (cc.get(x) || 0) + 1));
    g.pc.forEach(x => g.cc.forEach(y => {
      const key = y + '|' + x; pc.set(key, (pc.get(key) || 0) + 1);
    }));
  }));
  return [...cc.entries()].map(([x, n]) => ({
    tok: 'geo|' + x, l: x, n: n,
    kids: [...pc.entries()].filter(([key]) => key.split('|')[0] === x)
      .map(([key, m]) => ({ tok: 'geo|' + key, l: 'postal code ' + key.split('|')[1], n: m, kids: [] }))
  })).sort((a, b) => b.n - a.n || a.l.localeCompare(b.l));
}

function hasValue(s, tok) {
  const [k, a, b] = String(tok).split('|');
  const d = DIM[k];
  if (!d) return false;
  return (s.live || []).some(c => {
    if (!d.re.test(c.raw)) return false;
    if (k === 'channel') {
      const p = chanParts(c.label);
      return p.groups.indexOf(a) !== -1 && (b == null || p.chans.indexOf(b) !== -1);
    }
    if (k === 'product') {
      /* "product|SKUs" is every segment with any SKU condition;
         "product|SKUs|F001" is the ones whose count reaches that code. */
      const sk = /Has (\d+) SKU/i.exec(c.raw), fm = /Has (\d+) product famil/i.exec(c.raw);
      if (a === 'SKUs')  return !!sk && (b == null || SKU_CODES.slice(0, +sk[1]).indexOf(b) !== -1);
      if (a === 'Product families') return !!fm && (b == null || FAMILIES.slice(0, +fm[1]).indexOf(b) !== -1);
      return false;
    }
    if (k !== 'geo') return c.label === a;
    const g = geoParts(c.label);
    return g.cc.indexOf(a) !== -1 && (b == null || g.pc.indexOf(b) !== -1);
  });
}

/* ── Who touched it ───────────────────────────────────────────────────────
   Marko, 2026-09-03 at 16:40: "the metrics here should be like a user based —
   you created, edited, you know, like user created, user edited."

   The live product does not record it for a segment: the list has Created and
   Updated as dates and no author, though the same product does stamp
   "Created by Richie Mashiko" on an automation. So there is no history to show
   and none is invented — the forty seeded segments say so plainly.

   What IS real is what happens in front of you: rename a segment or file it in
   a folder here and it is stamped with who did it, because that is a fact this
   page witnessed. It makes the field work, and it makes the gap visible to the
   person who has to close it. */
const ME = 'You';
function loadEdits() {
  try {
    const v = JSON.parse(sessionStorage.getItem('segEdits') || '{}');
    return (v && typeof v === 'object' && !Array.isArray(v)) ? v : {};
  } catch (e) { return {}; }
}
function markEdit(id, what) {
  const m = loadEdits();
  m[id] = { by: ME, what: what, at: Date.now() };
  try { sessionStorage.setItem('segEdits', JSON.stringify(m)); } catch (e) {}
  const s = SEGMENTS.find(x => x.id === id);
  if (s) s.edit = m[id];
}
(() => { const m = loadEdits(); SEGMENTS.forEach(s => { s.edit = m[s.id] || null; }); })();

/* ── Where a segment stands among the others ──────────────────────────────
   Marko, 2026-09-03, right after saying he likes the share-of-base figure: "it
   might be interesting to see how they rank as well, like other segments, you
   know, relatively." A number on its own answers "how big"; it does not answer
   "is this one of my important ones", which is the question someone scanning
   forty of them is actually asking.

   Ranked among the segments that returned something. A segment with no result
   has no place in an order of size and is left without a rank rather than being
   given last place, which would read as a verdict. */
(function rank() {
  const ranked = SEGMENTS.filter(s => s.c > 0).sort((a, b) => b.c - a.c);
  ranked.forEach((s, i) => { s.rank = i + 1; });
  SEGMENTS.forEach(s => { s.rankOf = ranked.length; });
})();

/* ── The order window ─────────────────────────────────────────────────────
   Marko, 2026-09-03: "you should have a range on this page." Every segment in
   the live product carries its own window frozen into the definition — "Jul 31,
   2026 to Aug 31, 2026", "Dec 3, 2024 to Dec 3, 2025" — so two segments with
   identical conditions and different windows are two different segments. That
   is a large part of why there are forty of them and why so many read as
   near-duplicates.

   The page cannot recompute anyone's metrics for a different window; the data
   we were given is one figure per segment. What it CAN do is let the reader ask
   which segments look at the period they care about, which is the question the
   window is actually asked. Parsed from the same string the product prints, and
   nothing is modelled. */
function winOf(s) {
  if (!s.r) return null;
  const m = String(s.r).split(' to ');
  if (m.length !== 2) return null;
  const a = new Date(m[0]), b = new Date(m[1]);
  return (isNaN(a) || isNaN(b)) ? null : { from: a, to: b, label: s.r };
}
SEGMENTS.forEach(s => { s.win = winOf(s); });

/* Presets, not a date picker. Two dates to pick before the list responds is a
   lot of work for a question usually shaped "recent" or "last year"; the custom
   range stays available for the rest. A segment matches when its window
   OVERLAPS the period — a segment covering all of 2025 is relevant to a
   question about March 2025. */
const WINDOWS = [
  { k: 'all',   l: 'Any window',      test: () => true },
  { k: 'd90',   l: 'Last 90 days',    test: w => w && w.to  >= addDays(TODAY, -90) },
  { k: 'y1',    l: 'Last 12 months',  test: w => w && w.to  >= addDays(TODAY, -365) },
  { k: 'older', l: 'Older than a year', test: w => w && w.to < addDays(TODAY, -365) },
  { k: 'none',  l: 'No window set',   test: w => !w }
];
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
const WIN = Object.fromEntries(WINDOWS.map(w => [w.k, w]));

/* ── Folders ──────────────────────────────────────────────────────────────
   Data Rooms files its records into folders. Both v2 pages need them: the list
   filters and moves by folder, the segment page shows and changes the one it
   sits in. They lived on the list page and the segment page could not read
   them, so a segment could be filed from the list but not from itself.

   Starts empty, exactly as his screen does: zero folders, everything ungrouped.
   Nothing about which segment belongs where is invented — the mechanism is
   shown, the assignments are the user's. */
const FOLDERS = (() => {
  try {
    const v = JSON.parse(sessionStorage.getItem('segFolders') || '[]');
    /* Not just parseable — the right shape, and every entry usable. A stored
       object here threw "FOLDERS.find is not a function" and left both pages
       blank with nothing on screen to say why. */
    return Array.isArray(v)
      ? v.filter(f => f && typeof f.id === 'string' && typeof f.name === 'string')
         .map(f => ({ id: f.id, name: f.name, ids: Array.isArray(f.ids) ? f.ids : [] }))
      : [];
  } catch (e) { return []; }
})();
const saveFolders = () => { try { sessionStorage.setItem('segFolders', JSON.stringify(FOLDERS)); } catch (e) {} };
const folderOf = s => (FOLDERS.find(f => f.ids.includes(s.id)) || null);
/* One segment lives in one folder, so filing it anywhere removes it everywhere
   else first. `fid` empty means ungrouped. */
function fileInto(seg, fid) {
  FOLDERS.forEach(f => { f.ids = f.ids.filter(x => x !== seg.id); });
  const f = FOLDERS.find(x => x.id === fid);
  if (f) f.ids.push(seg.id);
  saveFolders();
  markEdit(seg.id, f ? 'filed in ' + f.name : 'removed from a folder');
  return f || null;
}

addEventListener('resize', closeMenu);
addEventListener('scroll', closeMenu, true);
