/* ══════════════════════════════════════════════════════════════════════════
   Shared segment dataset for the Customer Segments redesign prototype.
   All 40 segments pulled verbatim from dashboard.irisfinance.co/customer-segments
   on 2026-09-01. Numbers untouched; the derived state model is ours.
   Loaded by pages/segments.html, segment-detail.html, segment-builder.html
   and segments-compare.html so the pages cannot drift apart.
   ══════════════════════════════════════════════════════════════════════════ */
const TODAY = new Date('2026-09-01');
const RAW = [
{n:"Shampoo",d:null,r:"Jul 31, 2026 to Aug 31, 2026",f:["First-time customers","Has 3 SKU(s)","Discount greater than 5%"],c:null,o:null,aov:null,net:null,ltv:null,cr:"Aug 31, 2026",up:"Aug 31, 2026",never:true},
{n:"Over $65",d:null,r:"Jul 26, 2026 to Aug 26, 2026",f:["All customers","No SKUs selected","Order value greater than $65"],c:null,o:null,aov:null,net:null,ltv:null,cr:"Aug 26, 2026",up:"Aug 26, 2026",never:true},
{n:"Test Segment",d:null,r:"Jul 25, 2026 to Aug 25, 2026",f:["Has 1 SKU(s)","First-time customers","Top 10% by Revenue","Discount greater than 0%","No refunds","No sales channels selected","Has 1 tag(s)"],c:null,o:null,aov:null,net:null,ltv:null,cr:"Aug 25, 2026",up:"Aug 25, 2026",never:true},
{n:"US Customers",d:null,r:"Jul 14, 2026 to Aug 14, 2026",f:["Geography: 1 country(s)"],c:null,o:null,aov:null,net:null,ltv:null,cr:"Aug 14, 2026",up:"Aug 14, 2026",never:true},
{n:"Big Dog",d:null,r:"Jun 9, 2026 to Jul 9, 2026",f:["First-time customers","Has 4 SKU(s)","Order value greater than $0"],c:0,o:0,aov:0,net:0,ltv:0,cr:"Jul 9, 2026",up:"Jul 20, 2026",never:false},
{n:"test",d:null,r:"Jul 1, 2025 to Jul 7, 2026",f:["Has 1 product family(s)"],c:null,o:null,aov:null,net:null,ltv:null,cr:"Jul 7, 2026",up:"Jul 7, 2026",never:true},
{n:"US or CA",d:null,r:"Jun 3, 2026 to Jul 3, 2026",f:["Geography: 2 country(s)"],c:3266,o:3314,aov:59.82,net:198256,ltv:-539,cr:"Jul 3, 2026",up:"Jul 3, 2026",never:false},
{n:"DTC Subscribers",d:null,r:"May 23, 2026 to Jun 23, 2026",f:["Subscribers only","Has 3 SKU(s)","12 sales channel(s)"],c:0,o:0,aov:0,net:0,ltv:0,cr:"Jun 24, 2026",up:"Jun 24, 2026",never:false},
{n:"US v CA",d:null,r:"May 18, 2026 to Jun 18, 2026",f:["All customers","Geography: 2 country(s)","Order value greater than $40"],c:2968,o:2980,aov:63.77,net:190026,ltv:-573,cr:"Jun 18, 2026",up:"Jun 23, 2026",never:false},
{n:"Texture Powder",d:null,r:"May 16, 2026 to Jun 16, 2026",f:["All customers","No SKUs selected","No product families selected"],c:3360,o:3398,aov:59.74,net:203002,ltv:-539,cr:"Jun 16, 2026",up:"Jun 17, 2026",never:false},
{n:"US Customers -",d:null,r:"Apr 28, 2026 to May 28, 2026",f:["Geography: 1 country(s)","Has 1 product family(s)","Discount greater than 10%"],c:0,o:0,aov:0,net:0,ltv:0,cr:"May 28, 2026",up:"May 28, 2026",never:false},
{n:"SKU B004",d:null,r:"Apr 1, 2026 to Apr 30, 2026",f:["Has 1 SKU(s)"],c:242,o:250,aov:64.70,net:16174,ltv:-2.85,cr:"May 5, 2026",up:"Aug 24, 2026",never:false},
{n:"B Family",d:null,r:"May 1, 2025 to May 5, 2026",f:["Has 1 product family(s)"],c:null,o:null,aov:null,net:null,ltv:null,cr:"May 5, 2026",up:"May 5, 2026",never:true},
{n:"Tag Faire",d:null,r:"May 1, 2025 to May 5, 2026",f:["Has 1 tag(s)"],c:null,o:null,aov:null,net:null,ltv:null,cr:"May 5, 2026",up:"May 5, 2026",never:true},
{n:"Tag Alia",d:null,r:"May 1, 2025 to May 5, 2026",f:["Has 1 tag(s)"],c:null,o:null,aov:null,net:null,ltv:null,cr:"May 5, 2026",up:"May 5, 2026",never:true},
{n:"SKU B005",d:null,r:"May 1, 2025 to May 5, 2026",f:["Has 1 SKU(s)"],c:585,o:1900,aov:89.44,net:169933,ltv:-554,cr:"May 5, 2026",up:"May 5, 2026",never:false},
{n:"Top 25% of customers by Order Count",d:null,r:"May 1, 2025 to May 4, 2026",f:["Top 25% by Order Count"],c:3934,o:23064,aov:54.52,net:1257487,ltv:-478,cr:"May 4, 2026",up:"May 4, 2026",never:false},
{n:"New Filter Segement Test",d:null,r:"May 1, 2025 to May 4, 2026",f:["Has 1 SKU(s)"],c:0,o:0,aov:0,net:0,ltv:0,cr:"May 4, 2026",up:"May 4, 2026",never:false},
{n:"April Segment",d:"Only first-time customers",r:"Apr 1, 2026 to Apr 30, 2026",f:["First-time customers","9 sales channel(s)"],c:2169,o:2216,aov:59.04,net:130841,ltv:-8.32,cr:"May 4, 2026",up:"Jul 15, 2026",never:false},
{n:"Geo + offer 2",d:null,r:"Apr 14, 2025 to Apr 14, 2026",f:["Geography: 1 country(s)","Discount greater than 25%"],c:3,o:9,aov:131,net:1177,ltv:138,cr:"Apr 14, 2026",up:"Apr 14, 2026",never:false},
{n:"Geo + Offer",d:null,r:"Apr 14, 2025 to Apr 14, 2026",f:["Geography: 1 country(s)","Discount greater than 25%"],c:992,o:1329,aov:116,net:154168,ltv:140,cr:"Apr 14, 2026",up:"Apr 14, 2026",never:false},
{n:"refunds",d:null,r:"Jan 1, 2025 to Dec 31, 2025",f:["Refunds greater than $1","2 sales channel(s)"],c:224,o:384,aov:30.22,net:11603,ltv:43.58,cr:"Dec 11, 2025",up:"Mar 31, 2026",never:false},
{n:"1m retention cohort",d:"asdfasdf",r:"Dec 8, 2024 to Dec 8, 2025",f:["Has 2 SKU(s)"],c:6428,o:15459,aov:45.33,net:700803,ltv:133,cr:"Dec 8, 2025",up:"Feb 16, 2026",never:false},
{n:"Vanilla bean cold brew california subscribers",d:null,r:"Dec 3, 2024 to Dec 3, 2025",f:[],c:11921,o:27841,aov:56.78,net:1580904,ltv:152,cr:"Dec 3, 2025",up:"Dec 18, 2025",never:false},
{n:"California Buyers",d:null,r:"Dec 2, 2024 to Dec 2, 2025",f:["Geography: 1 country(s)"],c:11862,o:27815,aov:56.68,net:1576498,ltv:152,cr:"Dec 2, 2025",up:"Jul 20, 2026",never:false},
{n:"UK",d:null,r:null,f:["Geography (no criteria set)"],c:35518,o:75319,aov:49.64,net:3739109,ltv:140,cr:"Dec 2, 2025",up:"Dec 2, 2025",never:false},
{n:"UK Customers",d:"A segment of customers from the UK.",r:null,f:["Geography (no criteria set)"],c:35590,o:75437,aov:49.65,net:3745567,ltv:140,cr:"Dec 2, 2025",up:"Dec 3, 2025",never:false},
{n:"California",d:null,r:null,f:["Geography (no criteria set)"],c:34331,o:73085,aov:49.21,net:3596211,ltv:140,cr:"Oct 15, 2025",up:"Nov 20, 2025",never:false},
{n:"California Customers",d:"A segment of customers located in California.",r:null,f:["Geography (no criteria set)"],c:35590,o:75437,aov:49.65,net:3745567,ltv:140,cr:"Oct 15, 2025",up:"Dec 3, 2025",never:false},
{n:"Subscription Orders Last Week",d:"Segment of all subscription orders placed in the last week",r:"Sep 1, 2026 to Sep 1, 2026",f:[],c:35590,o:75437,aov:49.65,net:3745567,ltv:140,cr:"Oct 14, 2025",up:"Dec 3, 2025",never:false},
{n:"California",d:"Customers from 6mo in cali",r:"Sep 1, 2026 to Sep 1, 2026",f:["Geography (no criteria set)"],c:31288,o:68262,aov:48.73,net:3326741,ltv:138,cr:"Oct 7, 2025",up:"Oct 7, 2025",never:false},
{n:"Recent California Customers",d:"Customers who purchased in the last 180 days and are located in California.",r:"Sep 1, 2026 to Sep 1, 2026",f:["Geography (no criteria set)"],c:31288,o:68262,aov:48.73,net:3326741,ltv:138,cr:"Oct 7, 2025",up:"Oct 7, 2025",never:false},
{n:"UK Recent Purchasers",d:"Segment of customers from the UK who purchased in the UK in the last 90 days",r:"Jul 3, 2025 to Oct 1, 2025",f:["Geography: 1 country(s)"],c:0,o:0,aov:0,net:0,ltv:0,cr:"Oct 2, 2025",up:"Oct 6, 2025",never:false},
{n:"Illinois Customers - Last Year Purchases",d:"Segment of customers who live in Illinois and have made purchases in the last year",r:"Oct 1, 2024 to Oct 1, 2025",f:["Geography: 1 country(s), postal code: IL"],c:0,o:null,aov:0,net:0,ltv:0,cr:"Oct 1, 2025",up:"Oct 1, 2025",never:false},
{n:"Calfirnoia",d:null,r:null,f:["Geography (no criteria set)","Order value greater than $100"],c:994,o:null,aov:134,net:297602,ltv:6.57,cr:"Oct 1, 2025",up:"Oct 1, 2025",never:false},
{n:"California High Spenders",d:"Segment of customers from California who have spent over $100",r:null,f:["Geography: 1 country(s), postal code: CA","Order value greater than $100"],c:0,o:null,aov:0,net:0,ltv:0,cr:"Oct 1, 2025",up:"Oct 1, 2025",never:false},
{n:"test 2",d:"asdf",r:"Aug 1, 2025 to Sep 25, 2025",f:["Order value greater than $20"],c:1238,o:null,aov:55.18,net:195763,ltv:46.47,cr:"Sep 25, 2025",up:"Oct 1, 2025",never:false},
{n:"test",d:"asdf",r:"Aug 26, 2025 to Sep 25, 2025",f:[],c:824,o:null,aov:52.13,net:110889,ltv:30.19,cr:"Sep 25, 2025",up:"Oct 1, 2025",never:false},
{n:"SKUS",d:null,r:"Jan 1, 2025 to Sep 24, 2025",f:["Has 1 SKU(s)"],c:0,o:null,aov:0,net:0,ltv:0,cr:"Sep 25, 2025",up:"Oct 1, 2025",never:false},
{n:"Amazon Subs",d:null,r:"Aug 24, 2025 to Sep 23, 2025",f:["Returning customers","Has 1 tag(s)"],c:0,o:null,aov:0,net:0,ltv:0,cr:"Sep 24, 2025",up:"Sep 30, 2025",never:false}
];

/* Total addressable base. The largest segment matches every customer, which is
   exactly the bug the "% of base" column is designed to surface. */
const BASE = 35590;

/* ── Filters that were never configured: they match everyone and are the root
      cause of the geography segments returning the whole customer base. ── */
const NOOP = [/^All customers$/i, /^No .+ selected$/i, /\(no criteria set\)/i];
const isNoop = s => NOOP.some(re => re.test(s));

/* Machine chip → plain English. Replaces the wall of AND pills. */
function humanize(chip) {
  const m = [
    [/^Has (\d+) SKU\(s\)$/i,               (x) => `${x[1]} SKU${x[1]=='1'?'':'s'}`],
    [/^Has (\d+) product family\(s\)$/i,    (x) => `${x[1]} product famil${x[1]=='1'?'y':'ies'}`],
    [/^Has (\d+) tag\(s\)$/i,               (x) => `${x[1]} tag${x[1]=='1'?'':'s'}`],
    [/^(\d+) sales channel\(s\)$/i,         (x) => `${x[1]} sales channels`],
    [/^Geography: (\d+) country\(s\)(.*)$/i,(x) => `${x[1]} countr${x[1]=='1'?'y':'ies'}${x[2]||''}`],
    [/^Order value greater than \$(.+)$/i,  (x) => `orders over $${x[1]}`],
    [/^Discount greater than (.+)$/i,       (x) => `discount over ${x[1]}`],
    [/^Refunds greater than \$(.+)$/i,      (x) => `refunds over $${x[1]}`],
    [/^Top (\d+)% by (.+)$/i,               (x) => `top ${x[1]}% by ${x[2].toLowerCase()}`],
    [/^First-time customers$/i,             () => 'first-time buyers'],
    [/^Returning customers$/i,              () => 'returning buyers'],
    [/^Subscribers only$/i,                 () => 'subscribers'],
    [/^No refunds$/i,                       () => 'no refunds'],
  ];
  for (const [re, fn] of m) { const x = chip.match(re); if (x) return fn(x); }
  return chip.toLowerCase();
}

const money = v => v == null ? null : (Math.abs(v) >= 1000 ? '$' + Math.round(v).toLocaleString('en-US') : '$' + v.toFixed(2));
const ltvFmt = v => v == null ? null : (v < 0 ? '(' + money(Math.abs(v)).slice(1) + ')' : money(v));
const daysAgo = d => Math.round((TODAY - new Date(d)) / 864e5);
function relTime(d) {
  const n = daysAgo(d);
  if (n <= 0) return 'today';
  if (n === 1) return 'yesterday';
  if (n < 30) return n + ' days ago';
  if (n < 60) return 'a month ago';
  if (n < 365) return Math.round(n / 30) + ' months ago';
  return Math.floor(n / 365) + (n < 730 ? ' year ago' : ' years ago');
}

/* ── Derive the state model the current product leaves implicit ── */
const SEGMENTS = RAW.map((s, i) => {
  const conds  = s.f.map(c => ({ raw: c, label: humanize(c), noop: isNoop(c) }));
  const live   = conds.filter(c => !c.noop);
  const broken = conds.filter(c => c.noop);
  const share  = s.c == null ? null : s.c / BASE;

  let state;
  if (s.never)         state = 'never';
  else if (s.c === 0)  state = 'nomatch';
  else                 state = 'ready';

  const age   = daysAgo(s.up);
  const stale = state === 'ready' && age > 30;

  /* Severity, not a single danger flag. Red is reserved for "the numbers this row
     reports are wrong"; amber is "the definition is incomplete, the numbers may
     still hold"; grey is informational. Cause and consequence are one finding, not
     two: an unconfigured filter is WHY a segment matches everyone, so they are
     merged rather than stacked as two equal red lines. */
  const flags = [];
  const cause = broken.length ? `${broken.length} filter${broken.length > 1 ? 's have' : ' has'} no value`
              : !live.length && !s.never ? 'no condition filters anything' : null;

  if (share != null && share >= 0.95)
    flags.push({ k:'wholebase', sev:'error', t:'Reports your whole customer base', why: cause });
  else if (broken.length)
    flags.push({ k:'unconfigured', sev:'warn', t:`${broken.length} filter${broken.length > 1 ? 's' : ''} not configured` });
  else if (!live.length && !s.never)
    flags.push({ k:'nofilter', sev:'warn', t:'No condition filters anything' });

  if (s.c > 0 && s.o == null)         flags.push({ k:'partial', sev:'info', t:'Order data missing' });
  if (state === 'ready' && s.ltv < 0) flags.push({ k:'negltv',  sev:'info', t:'Negative LTV' });

  return {
    id: 's' + i, ...s, conds, live, broken, share, state, stale, age, flags,
    sentence: live.length ? live.map(c => c.label).join(' · ')
                          : (broken.length ? 'No effective filter — every customer matches' : 'All customers')
  };
});

/* duplicate detection: identical calculated result sets */
const byResult = {};
SEGMENTS.forEach(s => { if (s.c > 0) { const k = s.c + '|' + s.net; (byResult[k] ||= []).push(s); } });
Object.values(byResult).forEach(g => { if (g.length > 1) g.forEach(s =>
  s.flags.push({ k:'dupe', sev:'error', t:`Same numbers as ${g.length - 1} other segment${g.length > 2 ? 's' : ''}` })); });

/* "danger" is kept as a derived property so the status filters and the page-level
   notice keep counting the rows whose numbers cannot be trusted. */
SEGMENTS.forEach(s => s.flags.forEach(f => { f.danger = f.sev === 'error'; }));

/* ── Demo persistence ──────────────────────────────────────────────────────
   Calculating a segment in the prototype has to leave a visible result, and the
   same result has to be there when you land on another page. The outcome is
   recorded per browser session so the list and the detail page never disagree.
   Nothing here invents a number: a calculated-empty segment reports zero. */
try {
  const done = JSON.parse(sessionStorage.getItem('segCalculated') || '[]');
  done.forEach(id => {
    const s = SEGMENTS.find(x => x.id === id);
    if (!s || !s.never) return;
    s.never = false; s.state = 'nomatch';
    s.c = 0; s.o = 0; s.aov = 0; s.net = 0; s.ltv = 0; s.share = 0;
    s.up = 'Sep 1, 2026'; s.stale = false; s.age = 0;
  });
} catch (e) { /* private mode: the demo simply does not persist */ }

/* Every page builds markup with innerHTML, and segment names come from user input.
   Anything interpolated into markup goes through this first. */
function esc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* <base href> is set on these pages, so a bare "?x=1" in replaceState resolves
   against the base and points at the directory instead of the document. */
function pageUrl(query, hash) {
  return location.pathname + (query || '') + (hash || '');
}

function markCalculated(id) {
  try {
    const done = JSON.parse(sessionStorage.getItem('segCalculated') || '[]');
    if (!done.includes(id)) { done.push(id); sessionStorage.setItem('segCalculated', JSON.stringify(done)); }
  } catch (e) {}
}

/* ── Navigation ────────────────────────────────────────────────────────────
   The navigation is always shown collapsed. 256px of chrome beside a wide table
   is not worth it here, and there is nothing on these pages that needs the
   expanded labels. The collapsed state is the library's own: .sidebar--collapsed
   for the 60px rail plus .sidebar-contracted-item for the items themselves
   (60x32, icon centred, name carried by aria-label and title, per
   Sidebar.stories.js). The contracted items are generated from the expanded
   markup so the two lists cannot drift apart.

   NB: the contracted sections must NOT carry .sidebar-nav, which is padded
   0 8px 0 28px and leaves a 24px content box inside the rail, clipping every
   icon. Same reason .sidebar-brand loses its 28px left padding. */
function initSidebar() {
  const side = document.getElementById('appSidebar');
  if (!side) return;
  side.querySelectorAll('.sidebar-nav').forEach(nav => {
    const c = document.createElement('nav');
    c.className = 'seg-nav-contracted';
    c.setAttribute('aria-label', nav.getAttribute('aria-label') || 'Navigation');
    nav.querySelectorAll('.sidebar-item').forEach(item => {
      const label = ((item.querySelector('span:not(.sidebar-item-icon)') || {}).textContent || '').trim();
      const icon = item.querySelector('.sidebar-item-icon svg');
      const el = document.createElement('a');
      el.className = 'sidebar-contracted-item' + (item.classList.contains('active') ? ' active' : '');
      el.href = item.getAttribute('href') || '#';
      if (item.getAttribute('onclick')) el.setAttribute('onclick', item.getAttribute('onclick'));
      if (item.hasAttribute('aria-current')) el.setAttribute('aria-current', 'page');
      el.setAttribute('aria-label', label);
      el.title = label;
      if (icon) el.appendChild(icon.cloneNode(true));
      c.appendChild(el);
    });
    nav.after(c);
  });
  side.classList.add('sidebar--collapsed');
}
