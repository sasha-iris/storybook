/* ═══════════════════ P&L v2 — Calendar and Sankey views ═══════════════════
   Loaded after the page script; reads its globals (state, ROWS, rowById,
   rowVal, periodVal, periodVarianceInfo, COMPARE_LABEL, selectRow…) and never
   writes to the value engine. Every number on these views is a number the
   table already shows, regrouped; the one exception is the day grid, which
   splits monthly totals into days and says so on screen.

   One anchor across the three views: the selected line + month (state.selRow,
   state.selMonth). The table highlights it, the Sankey opens on that month and
   lights the line's path, the calendar shows that line with its month marked. */
(function(){

var MONTHS_LONG = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var DOW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var YEAR = 2024;
var MINUS = '−';
var CAL_METRICS = { ebitda:'EBITDA', grossProfit:'Gross Profit', netSales:'Net Sales' };

var qs = new URLSearchParams(location.search);
var urlMetric = qs.get('metric');
var views = {
  display: ['table','calendar','sankey'].indexOf(qs.get('display')) > -1 ? qs.get('display') : 'table',
  calLayout: qs.get('variant') === 'days' ? 'days' : 'months',
  calMetric: urlMetric && rowById(urlMetric) && rowById(urlMetric).type !== 'section' ? urlMetric : 'ebitda',
  calMonth: Math.min(11, Math.max(0, (parseInt(qs.get('month'), 10) || 1) - 1)),
  skPeriod: qs.get('period') || 'fy',
  /* Prototype aid: costs in the Sankey drawn grey (recommended: red is kept for
     the loss) or red (the product owner's reference). */
  skCosts: qs.get('costs') === 'red' ? 'red' : 'grey',
  tableScrollX: 0
};

/* ── Formatting ───────────────────────────────────────────────────────── */
/* Values are $K. Signs are explicit (+ / −) so profit and loss never depend
   on the green/red tint alone. */
function money(k, opts){
  opts = opts || {};
  var dec = opts.dec || 0, a = Math.abs(k);
  if (Math.round(a * Math.pow(10, dec)) === 0) return '$0K';
  var s = '$' + a.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + 'K';
  return (k < 0 ? MINUS : (opts.plus ? '+' : '')) + s;
}
function spoken(s){ return s.replace(MINUS, 'minus '); }
function pct(x){ return (x < 0 ? MINUS : '') + Math.abs(x).toFixed(0) + '%'; }
/* Variance reads exactly as the table reads it (varHTML): a signed DOLLAR delta
   whose sign follows the line's own magnitude (spend that grew is +$, a loss
   that shrank is −$), coloured favorable / unfavorable. The product owner
   asked for dollars over percentages; % stays in the tooltip only. */
function delta(vi){
  if (!vi || vi.na || state.compare === 'none') return null;
  var mag = (vi.isExpense ? -1 : 1) * vi.abs, r = Math.round(Math.abs(mag));
  return { txt: (r === 0 ? '' : (mag >= 0 ? '+' : MINUS)) + '$' + r.toLocaleString('en-US') + 'K',
    pct: (mag >= 0 ? '+' : MINUS) + Math.abs(mag / Math.abs(vi.base) * 100).toFixed(1) + '%',
    cls: vi.favourable ? 'fav' : 'unfav', word: vi.favourable ? 'favorable' : 'unfavorable' };
}
function varText(vi){
  var d = delta(vi);
  return d ? '<span class="' + d.cls + '">' + d.txt + '</span> vs ' + esc(COMPARE_LABEL[state.compare]) : '';
}
function varSpoken(vi){
  var d = delta(vi);
  return d ? ', ' + spoken(d.txt) + ' vs ' + COMPARE_LABEL[state.compare] + ', ' + d.word : '';
}
/* signedBase: profit lines (EBITDA can be a loss) show the baseline with its
   sign; spend lines show it as an amount, the way their actual is shown. */
function varRows(vi, signedBase){
  var d = delta(vi);
  if (!d) return '';
  return kv(esc(COMPARE_LABEL[state.compare]), signedBase ? money(vi.base, { plus:true }) : money(Math.abs(vi.base))) +
    kv('Variance', '<span class="pnl-pop-' + d.cls + '">' + d.txt + ' · ' + d.pct + ', ' + d.word + '</span>');
}
/* "Previous period" for a quarter or the year means the window of the same
   length just before it, not each month against its own previous month
   (which is what summing the page's per-month baseline gives). */
function pvi(row, p){
  var k = p.ms.length;
  if (state.compare !== 'prevPeriod' || k === 1) return periodVarianceInfo(row, p);
  if (p.ms[0] < k) return { na:true };
  var a = periodVal(row, p), b = periodVal(row, { ms: p.ms.map(function(m){ return m - k; }) });
  if (Math.abs(b) < 0.5) return { na:true };
  var isExpense = a < 0 || row.sign === -1;
  return { pct:(a-b)/Math.abs(b)*100, abs:a-b, base:b, cur:a, favourable: isExpense ? Math.abs(a) <= Math.abs(b) : a >= b, isExpense:isExpense };
}
function anyChannel(){ return Object.keys(state.channels).some(function(c){ return state.channels[c]; }); }
function viewName(){ return ({ operating:'Operating P&L', accrual:'Accrual', cash:'Cash' })[state.view]; }
function channelsNote(){
  var on = Object.keys(state.channels).filter(function(c){ return state.channels[c]; });
  return on.length === 4 ? 'all channels' : on.map(function(c){ return CHANNEL_LABEL[c]; }).join(', ');
}
function emptyHTML(){
  return '<div class="pnl-empty">' +
    '<div class="card-header-title">No channels selected</div>' +
    '<div class="card-header-sub">No channels are selected, so there is nothing to show.</div>' +
    '<button type="button" class="btn btn-primary btn-sm" onclick="resetChannels()">Reset channel filter</button></div>';
}
/* The card header every view uses: the library's card-header anatomy, with the
   view's headline figure under the title (the eye lands on the result first). */
function headHTML(title, sub, hero, controls){
  return '<div class="card-header pnl-view-head"><div class="pnl-view-titles">' +
      '<h2 class="card-header-title">' + title + '</h2>' +
      '<p class="card-header-sub">' + sub + '</p>' +
      (hero ? '<div class="pnl-hero">' + hero + '</div>' : '') +
    '</div><div class="card-header-controls">' + controls + '</div></div>';
}
function heroHTML(value, ink, meta){
  return '<b class="pnl-hero__v ' + ink + '">' + value + '</b>' + meta.filter(Boolean).map(function(t){ return '<span class="pnl-hero__m">' + t + '</span>'; }).join('');
}

var pop = document.getElementById('pnlPop');
document.addEventListener('keydown', function(e){
  if (e.key !== 'Escape') return;
  if (pop.classList.contains('show')) { hideTip(); e.stopImmediatePropagation(); e.preventDefault(); return; }
  var wrapEl = document.activeElement && document.activeElement.closest('.tooltip-wrap, #viewGroup .btn');
  if (wrapEl && !wrapEl.classList.contains('tip-dismissed')) {
    wrapEl.classList.add('tip-dismissed'); e.stopImmediatePropagation(); e.preventDefault();
    wrapEl.addEventListener('blur', function(){ wrapEl.classList.remove('tip-dismissed'); }, { once:true });
  }
}, true);
function showTip(html, x, y){
  pop.innerHTML = html;
  pop.classList.add('show');
  var w = pop.offsetWidth, h = pop.offsetHeight;
  var left = Math.min(window.innerWidth - w - 12, x + 14);
  var top = y + 16 + h > window.innerHeight ? y - h - 12 : y + 16;
  pop.style.left = Math.max(8, left) + 'px'; pop.style.top = Math.max(8, top) + 'px';
}
function hideTip(){ pop.classList.remove('show'); }
function kv(k, v){ return '<div class="pnl-kv"><dt>' + k + '</dt><dd>' + v + '</dd></div>'; }
function tipHead(t){ return '<div class="pnl-pop-head">' + t + '</div>'; }
function tipNote(t){ return '<div class="pnl-pop-note">' + t + '</div>'; }
/* Tooltip on keyboard focus only. A mouse click re-renders the view and puts
   focus back on the clicked element; showing the tip then left it stuck over
   the legend and the panel. */
function focusTip(el, html){
  if (!el.matches(':focus-visible')) return;
  var r = el.getBoundingClientRect(); showTip(html, r.right - 6, r.top - 16);
}

/* Opening a line re-renders the view (selectRow -> renderTable); without this
   the focused element is destroyed and keyboard focus falls to <body>. */
function keepFocus(host, attr, draw){
  var a = document.activeElement, key = a && host.contains(a) ? a.getAttribute(attr) : null;
  draw();
  if (key) { var el = host.querySelector('[' + attr + '="' + key + '"]'); if (el) { el.focus({ preventScroll:true }); hideTip(); } }
}

/* ═══════════════════ Sankey ═══════════════════
   Six columns, left to right, in the order the statement is read:
   sales lines → gross sales → Net Sales + deductions → Gross Profit + COGS
   → spend groups + COGS lines → spend lines.
   A sankey cannot draw a negative flow, and turning the loss into an absolute
   value would draw it as profit. This business spends more than it makes, so
   the shortfall is drawn the way income-statement sankeys draw a loss: as its
   own hatched INFLOW, "EBITDA loss", that pays for the Marketing and OpEx that
   Gross Profit does not cover. Colour has one job per hue: green = profit,
   red = loss, greys = revenue and costs. Every node is a P&L row except
   "Gross Sales", the sum of the three sales rows, which says so on hover. */
var SK_PERIODS = [{ k:'fy', l:'FY 2024', ms:[0,1,2,3,4,5,6,7,8,9,10,11] }]
  .concat([0,1,2,3].map(function(q){ return { k:'q'+(q+1), l:'Q'+(q+1)+' 2024', ms:[q*3,q*3+1,q*3+2] }; }))
  .concat(MONTHS_LONG.map(function(m,i){ return { k:'m'+i, l:m+' 2024', ms:[i] }; }));
function skPeriod(){ return SK_PERIODS.find(function(p){ return p.k === views.skPeriod; }) || SK_PERIODS[0]; }
/* Group nodes get the larger label: they carry the story; leaves carry detail. */
var SK_TOP = { gross:1, netSales:1, grossProfit:1, grossLoss:1, ebitdaLoss:1, ebitda:1, totalCogs:1, totalMkt:1, totalOpex:1 };

function buildSankey(p){
  var V = function(id){ return periodVal(rowById(id), p); };
  var nodes = [], links = [], byId = {};
  function node(id, col, kind, label, value, rowId, extra){
    if (value <= 0.0001) return null;
    var n = { id:id, col:col, kind:kind, label:label, value:value, rowId:rowId, ins:[], outs:[] };
    for (var k in extra) n[k] = extra[k];
    nodes.push(n); byId[id] = n; return n;
  }
  function link(s, t, v, kind){
    if (!byId[s] || !byId[t] || v <= 0.0001) return;
    var l = { s:byId[s], t:byId[t], v:v, kind:kind };
    links.push(l); l.s.outs.push(l); l.t.ins.push(l);
  }
  var sales = ['amazonSales','shopifySales','shippingRev'];
  var gross = sales.reduce(function(s,id){ return s + V(id); }, 0);
  var net = V('netSales');
  if (net <= 0) return { empty:'No Net Sales to trace for this period and these channels. Switch to Table to see every line.' };

  sales.forEach(function(id){ node(id, 0, 'rev', rowById(id).name, V(id), id, { shareOf: gross }); });
  node('gross', 1, 'rev', 'Gross Sales', gross, null, { note:'Amazon Sales + Shopify Sales + Shipping Revenue, before Discounts and Refunds. Not a separate P&L line.' });
  sales.forEach(function(id){ link(id, 'gross', V(id), 'rev'); });

  node('netSales', 2, 'rev', 'Net Sales', net, 'netSales');
  node('discounts', 2, 'cost', 'Discounts', -V('discounts'), 'discounts', { ofNet: net });
  node('refunds', 2, 'cost', 'Refunds', -V('refunds'), 'refunds', { ofNet: net });
  link('gross', 'netSales', net, 'rev');
  link('gross', 'discounts', -V('discounts'), 'cost');
  link('gross', 'refunds', -V('refunds'), 'cost');

  var cogs = -V('totalCogs'), gp = V('grossProfit');
  var mkt = -V('totalMkt'), opex = -V('totalOpex'), ebitda = V('ebitda');
  /* Column 3, top to bottom: profit, then the loss that tops it up, then COGS —
     the loss sits between them so no band has to cross another. */
  node('grossProfit', 3, 'prof', 'Gross Profit', gp, 'grossProfit', { margin: net });
  if (gp < 0) node('grossLoss', 2, 'loss', 'Gross loss', -gp, 'grossProfit', { margin: net, sub:'funds Total COGS',
    note:'Total COGS above Net Sales.' });
  /* When Gross Profit is itself negative, the gross loss already covers COGS;
     the second loss node carries only Marketing and OpEx, so no dollar is drawn twice. */
  if (ebitda < 0) node('ebitdaLoss', 3, 'loss', gp < 0 ? 'Uncovered spend' : 'EBITDA loss', -ebitda - Math.max(-gp, 0), 'ebitda',
    { margin: gp < 0 ? 0 : net, sub:'funds Marketing and OpEx', note:'Marketing and OpEx that Gross Profit did not cover, split between them by size.' });
  node('totalCogs', 3, 'cost', 'Total COGS', cogs, 'totalCogs', { ofNet: net });
  link('netSales', 'grossProfit', Math.max(gp, 0), 'prof');
  link('netSales', 'totalCogs', Math.min(net, cogs), 'cost');
  link('grossLoss', 'totalCogs', Math.max(-gp, 0), 'loss');

  if (ebitda > 0) node('ebitda', 4, 'prof', 'EBITDA', ebitda, 'ebitda', { margin: net });
  node('totalMkt', 4, 'cost', 'Total Marketing', mkt, 'totalMkt', { ofNet: net });
  node('totalOpex', 4, 'cost', 'Total OpEx', opex, 'totalOpex', { ofNet: net });
  ['productCosts','logistics','merchantFees'].forEach(function(id){ node(id, 4, 'cost', rowById(id).name, -V(id), id); });

  /* Gross Profit pays for spend first; whatever it cannot cover comes from the loss. */
  var spend = mkt + opex, fromGp = Math.max(0, Math.min(gp, spend));
  if (ebitda > 0) link('grossProfit', 'ebitda', ebitda, 'prof');
  link('grossProfit', 'totalMkt', spend ? fromGp * mkt / spend : 0, 'cost');
  link('grossProfit', 'totalOpex', spend ? fromGp * opex / spend : 0, 'cost');
  var gap = spend - fromGp;
  link('ebitdaLoss', 'totalMkt', spend ? gap * mkt / spend : 0, 'loss');
  link('ebitdaLoss', 'totalOpex', spend ? gap * opex / spend : 0, 'loss');
  ['productCosts','logistics','merchantFees'].forEach(function(id){ link('totalCogs', id, -V(id), 'cost'); });

  ['giveaway','amazonAds','facebookMeta'].forEach(function(id){ node(id, 5, 'cost', rowById(id).name, -V(id), id); link('totalMkt', id, -V(id), 'cost'); });
  ['payroll','software','ga'].forEach(function(id){ node(id, 5, 'cost', rowById(id).name, -V(id), id); link('totalOpex', id, -V(id), 'cost'); });

  /* Fixed order (the statement's), never re-sorted by size: the same line sits
     in the same place whatever the period or filter. Column 4 puts the spend
     groups above the COGS lines so each sits beside its source. */
  var order = ['amazonSales','shopifySales','shippingRev','gross','netSales','grossLoss','discounts','refunds',
    'grossProfit','ebitdaLoss','totalCogs','ebitda','totalMkt','totalOpex','productCosts','logistics','merchantFees',
    'giveaway','amazonAds','facebookMeta','payroll','software','ga'];
  nodes.sort(function(a,b){ return order.indexOf(a.id) - order.indexOf(b.id); });
  return { nodes:nodes, links:links, net:net, gross:gross, ebitda:ebitda, gp:gp };
}

function layoutSankey(g, W){
  var narrow = W < 1000;
  var COLS = 6, nodeW = 12, padY = 16, labelL = narrow ? 118 : 150, labelR = narrow ? 140 : 190, top = 8, H = 520;
  var cols = []; for (var c=0;c<COLS;c++) cols.push([]);
  g.nodes.forEach(function(n){ cols[n.col].push(n); });
  var scale = Infinity;
  cols.forEach(function(col){
    if (!col.length) return;
    var sum = col.reduce(function(s,n){ return s + n.value; }, 0);
    scale = Math.min(scale, (H - padY * (col.length - 1)) / sum);
  });
  var span = W - labelL - labelR - nodeW;
  cols.forEach(function(col, c){
    var x = labelL + span * c / (COLS - 1);
    /* A $11K line is under a pixel at this scale; it is drawn 2px tall so it
       exists, and its real value is in the label and the tooltip. */
    var total = col.reduce(function(s,n){ return s + Math.max(2, n.value * scale); }, 0) + padY * (col.length - 1);
    var y = top + (H - total) / 2;
    col.forEach(function(n){ n.x = x; n.y = y; n.h = Math.max(2, n.value * scale); n.w = nodeW; y += n.h + padY; });
  });
  /* Bands leave a node in the order of their targets and enter in the order of
     their sources, so neighbouring bands never cross at the node. A band is as
     thick as its own dollars; only a node too small to see is stretched (to
     2px), and then its bands share that 2px. */
  g.nodes.forEach(function(n){
    n.outs.sort(function(a,b){ return a.t.y - b.t.y; });
    n.ins.sort(function(a,b){ return a.s.y - b.s.y; });
    var so = n.y, ti = n.y;
    var kOut = n.outs.reduce(function(s,l){ return s + l.v; }, 0), kIn = n.ins.reduce(function(s,l){ return s + l.v; }, 0);
    var stretched = n.h > n.value * scale + 0.01;
    var fOut = stretched ? n.h / (kOut * scale || 1) : 1, fIn = stretched ? n.h / (kIn * scale || 1) : 1;
    n.outs.forEach(function(l){ var h = l.v * scale * fOut; l.sy0 = so; l.sy1 = so + h; so += h; });
    n.ins.forEach(function(l){ var h = l.v * scale * fIn; l.ty0 = ti; l.ty1 = ti + h; ti += h; });
  });
  return { H: H + top + 12, nodeW: nodeW, cols: cols, labelL: labelL, labelR: labelR, span: span };
}

function bandPath(l){
  var x0 = l.s.x + l.s.w, x1 = l.t.x, xm = (x0 + x1) / 2;
  return 'M' + x0 + ',' + l.sy0 + 'C' + xm + ',' + l.sy0 + ' ' + xm + ',' + l.ty0 + ' ' + x1 + ',' + l.ty0 +
    'L' + x1 + ',' + l.ty1 + 'C' + xm + ',' + l.ty1 + ' ' + xm + ',' + l.sy1 + ' ' + x0 + ',' + l.sy1 + 'Z';
}
function signedVal(n){ return n.kind === 'loss' ? -n.value : n.value; }
/* One name per ratio, the same in every view: profit ÷ Net Sales is "margin";
   anything else ÷ Net Sales is "% of Net Sales". */
function ratioText(n){
  if (n.margin) return pct(signedVal(n) / n.margin * 100) + ' margin';
  if (n.ofNet) return pct(n.value / n.ofNet * 100) + ' of Net Sales';
  if (n.shareOf) return pct(n.value / n.shareOf * 100) + ' of Gross Sales';
  return '';
}

function wrapName(name, maxCh){
  if (name.length <= maxCh) return [name];
  var words = name.split(' '), out = [''];
  words.forEach(function(w){
    var cur = out[out.length - 1];
    if (cur && (cur + ' ' + w).length > maxCh) out.push(w); else out[out.length - 1] = cur ? cur + ' ' + w : w;
  });
  return out;
}
/* Name, amount (bold), then at most one ratio and one variance — and only on
   bars tall enough to carry them; on a narrow card those live in the tooltip. */
function nodeLines(n, p, maxCh, narrow){
  var big = !!SK_TOP[n.id] && !narrow, sz = big ? 14 : 12;
  var lines = wrapName(n.label, big ? Math.floor(maxCh * 0.86) : maxCh).map(function(t){ return { c:'n', t:esc(t), s:sz }; });
  lines.push({ c:'v', t:(n.kind === 'loss' ? MINUS : '') + money(n.value), s:sz });
  if (narrow) return lines;
  if (n.sub) wrapName(n.sub, maxCh).forEach(function(t){ lines.push({ c:'m', t:esc(t), s:12 }); });
  else if (n.h >= 20 && ratioText(n)) lines.push({ c:'m', t:ratioText(n), s:12 });
  var row = n.rowId && rowById(n.rowId);
  if (row && n.h >= 40 && state.compare !== 'none') {
    var d = delta(pvi(row, p));
    if (d) lines.push({ c: d.cls, t: d.txt + ' vs ' + esc(COMPARE_LABEL[state.compare]), s:12 });
  }
  return lines;
}

function legendSankey(){
  return '<span class="card-legend pnl-legend">' +
    '<span class="card-legend-item"><i class="pnl-swatch pnl-swatch--rev"></i>Revenue</span>' +
    '<span class="card-legend-item"><i class="pnl-swatch pnl-swatch--prof"></i>Profit</span>' +
    '<span class="card-legend-item"><i class="pnl-swatch pnl-swatch--cost"></i>Costs and deductions</span>' +
    '<span class="card-legend-item"><i class="pnl-swatch pnl-swatch--loss"></i>Loss</span></span>';
}

var skRenderedW = 0;
function renderSankey(){ keepFocus(document.getElementById('pnlSankey'), 'data-id', drawSankey); }
function drawSankey(){
  var host = document.getElementById('pnlSankey');
  host.classList.toggle('pnl-sk--red', views.skCosts === 'red');
  if (!anyChannel()) { host.innerHTML = emptyHTML(); return; }
  var p = skPeriod();
  var g = buildSankey(p);
  var sub = esc(viewName()) + ' · ' + esc(channelsNote()) + ' · band width shows dollars';
  var hero = g.empty ? '' : heroHTML(money(g.ebitda, { plus:true }), g.ebitda < 0 ? 'pnl-ink-n' : 'pnl-ink-p',
    ['EBITDA', pct(g.ebitda / g.net * 100) + ' margin']);
  var head = headHTML('Where the money went · ' + esc(p.l), sub, hero, legendSankey());
  if (g.empty) { host.innerHTML = head + '<div class="pnl-empty"><div class="card-header-sub">' + esc(g.empty) + '</div></div>'; return; }

  var W = Math.max(640, host.clientWidth - 32);
  skRenderedW = host.clientWidth;
  var L = layoutSankey(g, W);
  var svg = '<svg width="' + W + '" height="' + L.H + '" viewBox="0 0 ' + W + ' ' + L.H + '" role="group" aria-label="Sankey diagram, where the money went in ' + esc(p.l) + '. Select a bar for line details. The Table view lists the same values.">' +
    '<defs>' +
      '<pattern id="skHatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect class="pnl-hatch-bg" width="5" height="5"/><rect class="pnl-hatch-fg" width="2.4" height="5"/></pattern>' +
      '<pattern id="skHatchSoft" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect class="pnl-hatch-bg pnl-hatch-bg--soft" width="6" height="6"/><rect class="pnl-hatch-fg" width="1.6" height="6"/></pattern>' +
    '</defs>';
  g.links.forEach(function(l, i){
    l.i = i;
    svg += '<path class="pnl-sk-link pnl-sk-link--' + l.kind + '" data-l="' + i + '" d="' + bandPath(l) + '"></path>';
  });

  /* Labels sit right of the bar, except the first column (left, outside the
     diagram). Within a column they are de-collided top-down, then pulled back
     up if the last one runs off the bottom. */
  var room = Math.floor((L.span / 5 - 22) / 6.6), roomL = Math.floor((L.labelL - 14) / 6.6), roomR = Math.floor((L.labelR - 14) / 6.6);
  g.nodes.forEach(function(n){
    n.lines = nodeLines(n, p, n.col === 0 ? roomL : n.col === 5 ? roomR : room, W < 1000);
    n.lh = n.lines.reduce(function(s, ln){ return s + (ln.s === 14 ? 18 : 16); }, 0);
    n.ly = n.y + n.h / 2 - n.lh / 2;
  });
  L.cols.forEach(function(col){
    var prev = -Infinity;
    col.forEach(function(n){ if (n.ly < prev + 6) n.ly = prev + 6; prev = n.ly + n.lh; });
    var over = prev - (L.H - 4);
    if (over > 0) for (var i = col.length - 1; i >= 0; i--) {
      col[i].ly -= over;
      if (i > 0) { var gap = col[i].ly - (col[i-1].ly + col[i-1].lh + 6); if (gap >= 0) break; over = -gap; }
    }
  });

  g.nodes.forEach(function(n, i){
    var clickable = !!n.rowId;
    var aria = n.label + ', ' + spoken((n.kind === 'loss' ? MINUS : '') + money(n.value)) +
      (ratioText(n) ? ', ' + spoken(ratioText(n)) : '') + (n.rowId && n.id !== 'gross' ? varSpoken(pvi(rowById(n.rowId), p)) : '');
    var left = n.col === 0;
    var tx = left ? n.x - 8 : n.x + n.w + 8;
    var hitX = left ? n.x - L.labelL + 4 : n.x, hitW = (left ? L.labelL - 4 : Math.min(150, L.span / 5 - 8)) + n.w;
    var hitY = Math.min(n.y, n.ly - 2), hitH = Math.max(24, Math.max(n.y + n.h, n.ly + n.lh + 2) - hitY);
    svg += '<g data-id="' + n.id + '" class="pnl-sk-node' + (clickable ? '' : ' pnl-sk-node--static') + (clickable && state.selRow === n.rowId ? ' is-sel' : '') + '" data-n="' + i + '"' +
      (clickable ? ' tabindex="0" role="button" aria-controls="pnlPanel"' + (state.selRow === n.rowId ? ' aria-current="true"' : '') + ' aria-label="' + escAttr(aria + '. Open line details') + '"' : ' role="img" aria-label="' + escAttr(aria + '. Sum of the sales lines') + '"') + '>' +
      '<rect class="pnl-sk-hit" x="' + hitX + '" y="' + hitY + '" width="' + hitW + '" height="' + hitH + '" rx="4"></rect>' +
      '<rect class="pnl-sk-bar pnl-sk-bar--' + n.kind + '" x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="2"></rect>' +
      '<text class="pnl-sk-lbl' + (SK_TOP[n.id] && W >= 1000 ? ' pnl-sk-lbl--top' : '') + '" x="' + tx + '" y="' + n.ly + '" text-anchor="' + (left ? 'end' : 'start') + '">';
    n.lines.forEach(function(ln, k){
      var dy = k ? (ln.s === 14 ? 18 : 16) : (ln.s === 14 ? 14 : 12);
      svg += '<tspan class="' + ln.c + '" x="' + tx + '" dy="' + dy + '">' + ln.t + '</tspan>';
    });
    svg += '</text></g>';
  });
  svg += '</svg>';

  host.innerHTML = head + '<div class="card-body pnl-sankey-box" id="skBox">' + svg + '</div>' +
    (g.ebitda < 0 ? '<p class="pnl-view-note">The hatched band is the Marketing and OpEx that Gross Profit did not cover.</p>' : '');
  /* Labels in the middle columns sit over the bands. A white plate under each
     keeps them legible without punching ragged halo holes into the flow. */
  host.querySelectorAll('.pnl-sk-node').forEach(function(gEl){
    var n = g.nodes[+gEl.getAttribute('data-n')];
    if (n.col === 0 || n.col === 5) return;
    var t = gEl.querySelector('.pnl-sk-lbl'), b = t.getBBox();
    var r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    r.setAttribute('class', 'pnl-sk-plate');
    r.setAttribute('x', b.x - 4); r.setAttribute('y', b.y - 2); r.setAttribute('width', b.width + 8); r.setAttribute('height', b.height + 4); r.setAttribute('rx', 4);
    gEl.insertBefore(r, t);
  });
  wireSankey(g, p);
}

function wireSankey(g, p){
  var box = document.getElementById('skBox');
  function related(n){
    /* Everything upstream and downstream of the node: the whole path a dollar takes. */
    var on = { n:{}, l:{} };
    (function up(x){ on.n[x.id] = 1; x.ins.forEach(function(l){ on.l[l.i] = 1; up(l.s); }); })(n);
    (function down(x){ on.n[x.id] = 1; x.outs.forEach(function(l){ on.l[l.i] = 1; down(l.t); }); })(n);
    return on;
  }
  function paint(on){
    box.classList.toggle('is-hover', !!on);
    box.querySelectorAll('.pnl-sk-link').forEach(function(el){ el.classList.toggle('is-on', !!on && !!on.l[el.getAttribute('data-l')]); });
    box.querySelectorAll('.pnl-sk-node').forEach(function(el){ el.classList.toggle('is-on', !!on && !!on.n[g.nodes[+el.getAttribute('data-n')].id]); });
  }
  /* The selected line keeps its path lit, so the anchor shared with the table
     reads here too. */
  var selNode = g.nodes.find(function(n){ return n.rowId && n.rowId === state.selRow; });
  function rest(){ paint(selNode ? related(selNode) : null); }
  rest();
  function nodeTip(n){
    var row = n.rowId && rowById(n.rowId);
    var vi = row && n.id !== 'gross' ? pvi(row, p) : null;
    var isProfit = n.kind === 'prof' || n.kind === 'loss';
    return tipHead(esc(n.label) + ' · ' + esc(p.l)) + '<dl style="margin:0;">' +
      kv(n.kind === 'loss' ? (n.id === 'grossLoss' ? 'Gross Profit' : 'EBITDA') : 'Amount', (n.kind === 'loss' ? MINUS : '') + money(n.value)) +
      (n.margin ? kv('Margin', (signedVal(n) / n.margin * 100).toFixed(1) + '%') : kv('Share of Net Sales', (n.value / g.net * 100).toFixed(1) + '%')) +
      varRows(vi, isProfit) +
      '</dl>' + (n.outs.length > 1 ? tipNote(n.outs.map(function(l){ return '→ ' + esc(l.t.label) + ' ' + money(l.v); }).join('<br>')) : '') +
      (n.note ? tipNote(esc(n.note)) : '');
  }
  box.querySelectorAll('.pnl-sk-node').forEach(function(el){
    var n = g.nodes[+el.getAttribute('data-n')];
    el.addEventListener('mouseenter', function(){ paint(related(n)); });
    el.addEventListener('mousemove', function(e){ showTip(nodeTip(n), e.clientX, e.clientY); });
    el.addEventListener('mouseleave', function(){ rest(); hideTip(); });
    /* Focus listeners only on real buttons: Chrome makes any <g> with focus
       listeners a tab stop, and Gross Sales has nothing to do. */
    if (!n.rowId) return;
    el.addEventListener('focus', function(){ paint(related(n)); focusTip(el, nodeTip(n)); });
    el.addEventListener('blur', function(){ rest(); hideTip(); });
    function open(){
      hideTip();
      /* The panel is month-scoped; it opens on the period's last month. */
      var ms = skPeriod().ms; state.selMonth = ms[ms.length - 1];
      views.opener = { host:'pnlSankey', attr:'data-id', key:n.id };
      selectRow(n.rowId);
      if (ms.length > 1) toast('Showing ' + MONTHS_LONG[state.selMonth] + ' 2024. Details cover one month at a time.', 'info');
    }
    el.addEventListener('click', open);
    el.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  box.querySelectorAll('.pnl-sk-link').forEach(function(el){
    var l = g.links[+el.getAttribute('data-l')];
    el.addEventListener('mouseenter', function(){ var on = { n:{}, l:{} }; on.n[l.s.id] = on.n[l.t.id] = 1; on.l[l.i] = 1; paint(on); });
    el.addEventListener('mousemove', function(e){
      showTip(tipHead(esc(l.s.label) + ' → ' + esc(l.t.label)) + '<dl style="margin:0;">' +
        kv('Amount', money(l.v)) + kv('Share of ' + esc(l.s.label), (l.v / l.s.value * 100).toFixed(1) + '%') + '</dl>' +
        (l.kind === 'loss' ? tipNote(l.s.id === 'grossLoss' ? 'Total COGS above Net Sales.' : 'This line’s share of the EBITDA loss, split by spend.') : ''), e.clientX, e.clientY);
    });
    el.addEventListener('mouseleave', function(){ rest(); hideTip(); });
  });
}

/* ═══════════════════ Calendar ═══════════════════
   Two layouts on one switch (prototype aid, bottom right):
   · Months — twelve months in quarter rows plus a quarter total. Every value
     is a table value.
   · Days — a month grid Sun–Sat plus a week total, like a trading P&L
     calendar. The synced data is monthly, so days are a modeled split of each
     month that adds back to the month exactly, and the screen says so.
   Any P&L line can be shown: the three result lines are in "Line", and the
   line selected in the table or the Sankey joins them. */
function isProfitLine(id){ return id === 'ebitda' || id === 'grossProfit'; }
function lineLabel(id){ return CAL_METRICS[id] || rowById(id).name; }
/* Result lines keep their sign (profit or loss). Every other line is an
   amount: spend is shown as what was spent, not as a negative. */
function cellVal(id, v){ return isProfitLine(id) ? v : Math.abs(v); }
function ratioLine(id, v, net){
  if (id === 'netSales' || !(net > 0.05)) return '';
  return isProfitLine(id) ? pct(v / net * 100) + ' margin' : pct(Math.abs(v) / net * 100) + ' of Net Sales';
}

/* Result lines: a diverging scale, the tint is the cell's quartile among the
   cells on screen, ranked separately for profits and losses, so one heavy month
   doesn't wash the rest out. Amounts take one hue, light to dark. Modeled days
   get one step by sign: their day-to-day spread comes from the model, and
   ranking it would present the model's noise as a finding. The exception is a
   day a fixed cost lands on in full (Accrual / Cash): that is the accounting
   view's real timing, so it is marked a step darker and named on the cell. */
function tinter(vals, id, modeled){
  function cuts(arr){
    arr = arr.slice().sort(function(a,b){ return a - b; });
    return [0.25, 0.5, 0.75].map(function(q){ return arr[Math.min(arr.length - 1, Math.floor(q * arr.length))]; });
  }
  var mag = !isProfitLine(id);
  var pos = cuts(vals.filter(function(v){ return v > 0.05; })), neg = cuts(vals.filter(function(v){ return v < -0.05; }).map(Math.abs));
  return function(v, lump){
    if (Math.abs(v) <= 0.05) return { bg:'', ink:'pnl-ink-0' };
    if (modeled) {
      var st = lump ? 3 : 1;
      return mag ? { bg:'pnl-t-s' + st, ink:'pnl-ink-0' } : v > 0 ? { bg:'pnl-t-p' + st, ink:'pnl-ink-p' } : { bg:'pnl-t-n' + st, ink:'pnl-ink-n' };
    }
    var c = v > 0 ? pos : neg, a = Math.abs(v), step = 1;
    for (var i = 0; i < 3; i++) if (a >= c[i]) step = i + 2;
    if (mag) return { bg:'pnl-t-s' + step, ink:'pnl-ink-0' };
    return v > 0 ? { bg:'pnl-t-p' + step, ink:'pnl-ink-p' } : { bg:'pnl-t-n' + step, ink:'pnl-ink-n' };
  };
}
function inkFor(id, v){ return !isProfitLine(id) ? 'pnl-ink-0' : v > 0.05 ? 'pnl-ink-p' : v < -0.05 ? 'pnl-ink-n' : 'pnl-ink-0'; }
function ramp(prefix, order){ return '<span class="pnl-ramp" aria-hidden="true">' + order.map(function(s){ return '<i class="pnl-t-' + prefix + s + '"></i>'; }).join('') + '</span>'; }
/* Only the arms present in the data, with the end values on the ramp. */
function legendMonths(id, vals){
  var item = function(x){ return '<span class="card-legend-item">' + x + '</span>'; };
  if (!isProfitLine(id)) {
    var a = vals.map(Math.abs);
    return '<span class="card-legend pnl-legend">' + item(money(Math.min.apply(null, a))) + ramp('s', [1,2,3,4]) + item(money(Math.max.apply(null, a))) + '</span>';
  }
  var neg = vals.filter(function(v){ return v < -0.05; }), pos = vals.filter(function(v){ return v > 0.05; }), out = [];
  if (neg.length) out.push(item('Loss ' + money(Math.max.apply(null, neg))) + ramp('n', [1,2,3,4]) + item(money(Math.min.apply(null, neg))));
  if (pos.length) out.push(item('Profit ' + money(Math.min.apply(null, pos), { plus:true })) + ramp('p', [1,2,3,4]) + item(money(Math.max.apply(null, pos), { plus:true })));
  return '<span class="card-legend pnl-legend">' + out.join('<span class="pnl-legend-gap"></span>') + '</span>';
}
function legendDays(id, vals, anyLump){
  var it = function(cls, t){ return '<span class="card-legend-item"><i class="pnl-swatch ' + cls + '"></i>' + t + '</span>'; };
  var out = [];
  if (!isProfitLine(id)) out.push(it('pnl-t-s1 pnl-swatch--outline', 'Day'));
  else {
    if (vals.some(function(v){ return v < -0.05; })) out.push(it('pnl-t-n1 pnl-swatch--outline-n', 'Loss day'));
    if (vals.some(function(v){ return v > 0.05; })) out.push(it('pnl-t-p1 pnl-swatch--outline-p', 'Profit day'));
  }
  if (anyLump) out.push(it(isProfitLine(id) ? 'pnl-t-n3' : 'pnl-t-s3', 'Fixed cost lands'));
  return '<span class="card-legend pnl-legend">' + out.join('') + '</span>';
}

/* ── Day model ───────────────────────────────────────────────────────────
   Variable lines (sales, discounts, refunds, COGS, ad spend) follow a weekday
   shape with a fixed per-date wobble. Fixed costs follow the accounting view's
   timing, which is what makes a daily P&L lumpy in practice:
     Operating — spread evenly (the run-rate picture of the business)
     Accrual   — payroll accrues daily; Software and G&A post on the 1st
     Cash      — payroll is paid on the 15th and the last day; Software and G&A on the 1st
   Each line's days are normalised to its monthly value, so a month in the day
   grid always equals the same month in the table. The weekday shape and the
   posting days are illustrative, and the screen says the days are estimates. */
var WEEKDAY = [0.86, 1.04, 1.0, 1.0, 1.03, 1.1, 0.97];
function wobble(m, d, salt){ var x = Math.sin((m * 31 + d) * 12.9898 + salt * 78.233) * 43758.5453; return 0.8 + (x - Math.floor(x)) * 0.4; }
function daysIn(m){ return new Date(YEAR, m + 1, 0).getDate(); }
function lumpDays(row, m){
  if (row.section !== 'opex' || state.view === 'operating') return null;
  var id = row.parent || row.id;
  if (id === 'payroll') return state.view === 'cash' ? [15, daysIn(m)] : null;
  return [1];
}
function dayWeights(row, m){
  var n = daysIn(m), w = [], salt = row.id.length + row.id.charCodeAt(0), lumps = lumpDays(row, m);
  for (var d = 1; d <= n; d++) {
    if (lumps) w.push(lumps.indexOf(d) > -1 ? 1 : 0);
    else if (row.section === 'opex') w.push(1);
    else w.push(WEEKDAY[new Date(YEAR, m, d).getDay()] * wobble(m, d, salt));
  }
  var s = w.reduce(function(a,b){ return a + b; }, 0);
  return w.map(function(x){ return x / s; });
}
var LEAVES = { netSales:['amazonSales','shopifySales','shippingRev','discounts','refunds'] };
LEAVES.grossProfit = LEAVES.netSales.concat(['productCosts','logistics','merchantFees']);
LEAVES.ebitda = LEAVES.grossProfit.concat(['giveaway','amazonAds','facebookMeta','payroll','software','ga']);
function leavesOf(id){
  if (LEAVES[id]) return LEAVES[id];
  var row = rowById(id);
  return row.type === 'subtotal' ? row.of : [id];
}
function dayValues(id, m){
  var out = []; for (var i = 0; i < daysIn(m); i++) out.push(0);
  leavesOf(id).forEach(function(lid){
    var row = rowById(lid), mv = rowVal(row, m), w = dayWeights(row, m);
    for (var i = 0; i < out.length; i++) out[i] += mv * w[i];
  });
  return out;
}
/* Fixed costs that land on this day in full: named on the cell, so a red 1st
   of the month reads as "G&A posted", not as a bad day. */
var SHORT = { payroll:'Payroll', software:'Software', ga:'G&A' };
function dayLumps(id, m, d){
  var out = [];
  leavesOf(id).forEach(function(lid){
    var row = rowById(lid), lumps = lumpDays(row, m);
    if (lumps && lumps.indexOf(d) > -1) out.push({ name: row.name, short: SHORT[row.parent || lid] || row.name, v: rowVal(row, m) / lumps.length });
  });
  return out;
}

function renderCalendar(){ keepFocus(document.getElementById('pnlCalendar'), 'data-key', drawCalendar); }
function drawCalendar(){
  var host = document.getElementById('pnlCalendar');
  syncLineSelect();
  if (!anyChannel()) { host.innerHTML = emptyHTML(); return; }
  var id = views.calMetric, row = rowById(id), label = lineLabel(id);
  host.innerHTML = views.calLayout === 'days' ? calDays(id, row, label) : calMonths(id, row, label);
  wireCalendar(id, row, label);
}
function lossCount(vals, unit, total){
  var neg = vals.filter(function(v){ return v < -0.05; }).length;
  return neg === 0 ? 'No ' + unit + ' at a loss' : neg === total ? 'Every ' + unit.replace(/s$/,'') + ' at a loss' : neg + ' of ' + total + ' ' + unit + ' at a loss';
}

function calMonths(id, row, label){
  var raw = MONTHS.map(function(_, m){ return rowVal(row, m); });
  var vals = raw.map(function(v){ return cellVal(id, v); });
  var nets = MONTHS.map(function(_, m){ return rowVal(rowById('netSales'), m); });
  var tint = tinter(vals, id, false), sg = isProfitLine(id);
  var fy = vals.reduce(function(a,b){ return a + b; }, 0), fyn = nets.reduce(function(a,b){ return a + b; }, 0);
  var hero = heroHTML(money(fy, { plus:sg }), inkFor(id, fy), ['FY 2024 ' + esc(label), ratioLine(id, fy, fyn), sg ? lossCount(vals, 'months', 12) : '']);
  var h = headHTML(esc(label) + ' by month · FY 2024', esc(viewName()) + ' · ' + esc(channelsNote()), hero, legendMonths(id, vals));
  h += '<div class="card-body"><div class="pnl-cal pnl-cal--months" role="group" aria-label="' + escAttr(label) + ' by month, 2024">';
  for (var q = 0; q < 4; q++) {
    var qv = 0, qn = 0;
    h += '<div style="display:contents;">';
    for (var k = 0; k < 3; k++) {
      var m = q * 3 + k, v = vals[m], t = tint(v);
      qv += v; qn += nets[m];
      var vi = periodVarianceInfo(row, { ms:[m] });
      var sel = state.selRow === id && state.selMonth === m;
      h += '<button type="button" class="pnl-cal-cell ' + t.bg + (sel ? ' is-sel' : '') + '" data-key="m' + m + '" data-m="' + m + '" aria-controls="pnlPanel"' + (sel ? ' aria-current="true"' : '') + ' aria-label="' +
          escAttr(MONTHS_LONG[m] + ': ' + label + ' ' + spoken(money(v)) + (ratioLine(id, raw[m], nets[m]) ? ', ' + spoken(ratioLine(id, raw[m], nets[m])) : '') +
            varSpoken(vi) + '. Open details') + '">' +
        '<span class="pnl-cal-d">' + MONTHS_LONG[m] + '</span>' +
        '<span class="pnl-cal-v ' + t.ink + '">' + money(v, { plus:sg }) + '</span>' +
        (ratioLine(id, raw[m], nets[m]) ? '<span class="pnl-cal-s">' + ratioLine(id, raw[m], nets[m]) + '</span>' : '') +
        (varText(vi) ? '<span class="pnl-cal-s">' + varText(vi) + '</span>' : '') +
      '</button>';
    }
    var qvi = pvi(row, { ms:[q*3, q*3+1, q*3+2] });
    h += '<div class="pnl-cal-cell pnl-cal-cell--tot" role="group" aria-label="Q' + (q + 1) + ' total">' +
      '<span class="pnl-cal-d">Q' + (q + 1) + ' total</span>' +
      '<span class="pnl-cal-v ' + inkFor(id, qv) + '">' + money(qv, { plus:sg }) + '</span>' +
      (ratioLine(id, sg ? qv : -qv, qn) ? '<span class="pnl-cal-s">' + ratioLine(id, sg ? qv : -qv, qn) + '</span>' : '') +
      (varText(qvi) ? '<span class="pnl-cal-s">' + varText(qvi) + '</span>' : '') +
    '</div></div>';
  }
  h += '</div>';
  h += '<p class="pnl-view-note">Darker tint means a larger ' + (sg ? 'profit or loss' : 'amount') + ' than in other months. Click a month for details.</p></div>';
  return h;
}

function calDays(id, row, label){
  var m = views.calMonth, n = daysIn(m);
  var vals = dayValues(id, m).map(function(v){ return cellVal(id, v); }), nets = dayValues('netSales', m);
  var signed = dayValues(id, m);
  var tint = tinter(vals, id, true), sg = isProfitLine(id);
  var first = new Date(YEAR, m, 1).getDay();
  var anyLump = false;
  for (var dd = 1; dd <= n; dd++) if (dayLumps(id, m, dd).length) anyLump = true;
  var mt = cellVal(id, rowVal(row, m));
  var hero = heroHTML(money(mt, { plus:sg }), inkFor(id, mt), [MONTHS_LONG[m] + ' ' + esc(label), 'Matches the table', sg ? lossCount(vals, 'days', n) : '']);
  var nav = '<div class="pnl-cal-nav" role="group" aria-label="Month">' +
      '<button type="button" class="iris-cal__nav" data-cal-step="-1" aria-label="Previous month"' + (m === 0 ? ' disabled' : '') + '><svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"/></svg></button>' +
      '<span class="iris-cal__title pnl-cal-month" aria-live="polite">' + MONTHS_LONG[m] + ' ' + YEAR + '</span>' +
      '<button type="button" class="iris-cal__nav" data-cal-step="1" aria-label="Next month"' + (m === 11 ? ' disabled' : '') + '><svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"/></svg></button>' +
    '</div>';
  var h = headHTML(esc(label) + ' by day <span class="badge badge-gray badge-sm pnl-badge-inline">Modeled</span>',
    esc(viewName()) + ' · ' + esc(channelsNote()), hero, nav + legendDays(id, signed, anyLump));
  h += '<div class="card-body"><div class="pnl-cal pnl-cal--days" role="group" aria-label="' + escAttr(label + ' by day, ' + MONTHS_LONG[m] + ' ' + YEAR) + '">';
  h += '<div style="display:contents;">' + DOW.map(function(d){ return '<div class="pnl-cal-h" aria-hidden="true">' + d + '</div>'; }).join('') + '<div class="pnl-cal-h pnl-cal-h--tot" aria-hidden="true">Week</div></div>';
  var weeks = Math.ceil((first + n) / 7);
  for (var w = 0; w < weeks; w++) {
    var wv = 0, wn = 0, wd = 0;
    h += '<div style="display:contents;">';
    for (var c = 0; c < 7; c++) {
      var d = w * 7 + c - first + 1;
      if (d < 1 || d > n) { h += '<div class="pnl-cal-cell pnl-cal-cell--out" aria-hidden="true"></div>'; continue; }
      var lumps = dayLumps(id, m, d), v = vals[d - 1], t = tint(sg ? v : v, lumps.length > 0);
      wv += v; wn += nets[d - 1]; wd++;
      var ratio = ratioLine(id, signed[d - 1], nets[d - 1]);
      var sel = state.selRow === id && views.selDay === d && state.selMonth === m;
      h += '<button type="button" class="pnl-cal-cell ' + t.bg + (sel ? ' is-sel' : '') + '" data-key="d' + d + '" data-m="' + m + '" data-d="' + d + '" aria-controls="pnlPanel"' + (sel ? ' aria-current="true"' : '') + ' aria-label="' +
          escAttr(DOW[c] + ', ' + MONTHS_LONG[m] + ' ' + d + ': ' + label + ' ' + spoken(money(v, { dec:1 })) + (ratio ? ', ' + spoken(ratio) : '') + ', estimate' +
            (lumps.length ? '. Includes ' + lumps.map(function(x){ return x.name; }).join(' and ') : '') + '. Open ' + MONTHS_LONG[m] + ' details') + '">' +
        '<span class="pnl-cal-d">' + d + '</span>' +
        '<span class="pnl-cal-v ' + t.ink + '">' + money(v, { plus:sg, dec:1 }) + '</span>' +
        (lumps.length
          ? '<span class="badge badge-red badge-sm pnl-cal-flag">' + lumps.map(function(x){ return esc(x.short); }).join(' · ') + '</span>'
          : (ratio ? '<span class="pnl-cal-s">' + ratio + '</span>' : '')) +
      '</button>';
    }
    h += '<div class="pnl-cal-cell pnl-cal-cell--tot">' +
      '<span class="pnl-cal-d">' + wd + ' day' + (wd === 1 ? '' : 's') + '</span>' +
      '<span class="pnl-cal-v ' + inkFor(id, wv) + '">' + money(wv, { plus:sg, dec:1 }) + '</span>' +
      (ratioLine(id, sg ? wv : -wv, wn) ? '<span class="pnl-cal-s">' + ratioLine(id, sg ? wv : -wv, wn) + '</span>' : '') +
    '</div></div>';
  }
  h += '</div>';
  var timing = { operating:'fixed costs are spread evenly',
    accrual:'fixed costs post on the day they land: payroll accrues daily, Software and G&amp;A on the 1st',
    cash:'fixed costs are paid on the day they land: payroll on the 15th and the last day, Software and G&amp;A on the 1st' }[state.view];
  h += '<p class="pnl-view-note">Daily figures are estimates. The P&amp;L is monthly, so sales and variable costs follow a weekday pattern and ' + timing + '. Days add up to the month. Click a day for the month’s details.</p></div>';
  return h;
}

function wireCalendar(id, row, label){
  var host = document.getElementById('pnlCalendar');
  host.querySelectorAll('[data-cal-step]').forEach(function(b){
    b.addEventListener('click', function(){
      views.calMonth = Math.min(11, Math.max(0, views.calMonth + +b.getAttribute('data-cal-step'))); syncUrl();
      renderCalendar();
      /* Keep focus on the arrow that was pressed (or its twin when it disabled itself). */
      var again = host.querySelector('[data-cal-step="' + b.getAttribute('data-cal-step') + '"]:not(:disabled)') || host.querySelector('[data-cal-step]:not(:disabled)');
      if (again) again.focus();
    });
  });
  var sg = isProfitLine(id);
  host.querySelectorAll('.pnl-cal-cell[data-m]').forEach(function(cell){
    var m = +cell.getAttribute('data-m'), d = +cell.getAttribute('data-d') || 0;
    function tip(){
      if (d) {
        var v = dayValues(id, m)[d - 1], net = dayValues('netSales', m)[d - 1], lumps = dayLumps(id, m, d);
        return tipHead(DOW[new Date(YEAR, m, d).getDay()] + ', ' + MONTHS[m] + ' ' + d + ', ' + YEAR) + '<dl style="margin:0;">' +
          kv(esc(label), money(cellVal(id, v), { plus:sg, dec:1 })) +
          (id !== 'netSales' ? kv('Net Sales', money(net, { dec:1 })) + (ratioLine(id, v, net) ? kv(sg ? 'Margin' : 'Share of Net Sales', ratioLine(id, v, net).split(' ')[0]) : '') : '') +
          lumps.map(function(x){ return kv('Includes ' + esc(x.name), money(Math.abs(x.v), { dec:1 })); }).join('') +
          '</dl>' + tipNote('Estimate from the ' + MONTHS_LONG[m] + ' total');
      }
      var mv = rowVal(row, m), mn = rowVal(rowById('netSales'), m), vi = periodVarianceInfo(row, { ms:[m] });
      return tipHead(esc(label) + ' · ' + MONTHS_LONG[m] + ' ' + YEAR) + '<dl style="margin:0;">' +
        kv('Actual', money(cellVal(id, mv), { plus:sg })) +
        (id !== 'netSales' ? kv('Net Sales', money(mn)) + (ratioLine(id, mv, mn) ? kv(sg ? 'Margin' : 'Share of Net Sales', ratioLine(id, mv, mn).split(' ')[0]) : '') : '') +
        varRows(vi, sg) +
        '</dl>';
    }
    cell.addEventListener('mousemove', function(e){ showTip(tip(), e.clientX, e.clientY); });
    cell.addEventListener('mouseleave', hideTip);
    cell.addEventListener('focus', function(){ focusTip(cell, tip()); });
    cell.addEventListener('blur', hideTip);
    cell.addEventListener('click', function(){ hideTip(); views.selDay = d; state.selMonth = m; views.opener = { host:'pnlCalendar', attr:'data-key', key:cell.getAttribute('data-key') }; selectRow(id); });
  });
}

/* "Line": the three result lines, plus the line selected elsewhere on the page. */
function syncLineSelect(){
  var sel = document.getElementById('calMetric');
  var extra = !CAL_METRICS[views.calMetric] ? views.calMetric : null;
  var want = Object.keys(CAL_METRICS).map(function(k){ return '<option value="' + k + '">' + CAL_METRICS[k] + '</option>'; }).join('') +
    (extra ? '<optgroup label="Selected line"><option value="' + escAttr(extra) + '">' + esc(rowById(extra).name) + '</option></optgroup>' : '');
  if (sel.getAttribute('data-built') !== want) { sel.innerHTML = want; sel.setAttribute('data-built', want); }
  sel.value = views.calMetric;
}

/* ═══════════════════ Display switching ═══════════════════ */
function syncUrl(){
  var u = new URL(location.href);
  if (views.display === 'table') u.searchParams.delete('display'); else u.searchParams.set('display', views.display);
  if (views.display === 'calendar') u.searchParams.set('variant', views.calLayout); else u.searchParams.delete('variant');
  ['metric','month','period','costs'].forEach(function(k){ u.searchParams.delete(k); });
  if (views.display === 'calendar' && views.calMetric !== 'ebitda') u.searchParams.set('metric', views.calMetric);
  if (views.display === 'calendar' && views.calLayout === 'days') u.searchParams.set('month', views.calMonth + 1);
  if (views.display === 'sankey' && views.skPeriod !== 'fy') u.searchParams.set('period', views.skPeriod);
  if (views.display === 'sankey' && views.skCosts === 'red') u.searchParams.set('costs', 'red');
  history.replaceState(null, '', u);
}
function setActive(group, attr, val){
  group.querySelectorAll('[' + attr + ']').forEach(function(b){
    var on = b.getAttribute(attr) === val;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', String(on));
  });
}
/* Arriving at a view with a line selected: the view moves to that line and
   month, so the three views always show the same anchor. */
function followAnchor(d){
  if (!state.selRow || !rowById(state.selRow)) return;
  if (d === 'sankey') views.skPeriod = 'm' + state.selMonth;
  if (d === 'calendar') {
    var r = rowById(state.selRow);
    if (r.type !== 'section') { views.calMetric = state.selRow; views.calMonth = state.selMonth; views.selDay = null; }
  }
}
function applyDisplay(){
  var d = views.display;
  var wrap = document.getElementById('tablewrap');
  document.getElementById('pnlTable').hidden = d !== 'table';
  document.getElementById('pnlCalendar').hidden = d !== 'calendar';
  document.getElementById('pnlSankey').hidden = d !== 'sankey';
  /* Controls that only mean something for one view leave with it. */
  document.getElementById('granGroup').hidden = d !== 'table';
  /* The row under the toolbar keeps its height in every view, so the card
     doesn't jump when the view changes. */
  document.getElementById('toggleAllBtn').style.visibility = d === 'table' ? '' : 'hidden';
  document.querySelectorAll('.pnl-src-legend').forEach(function(el){ el.style.visibility = d === 'table' ? '' : 'hidden'; });
  /* Sankey has its own Period and the calendar always shows FY 2024, so the
     page date range would be a second, contradicting period control there. */
  document.getElementById('dateRangeBtn').closest('[data-menu-wrap]').hidden = d !== 'table';
  document.getElementById('calMetricWrap').hidden = d !== 'calendar';
  document.getElementById('skPeriodWrap').hidden = d !== 'sankey';
  document.getElementById('aidTreatment').hidden = d !== 'table';
  document.getElementById('aidCalendar').hidden = d !== 'calendar';
  document.getElementById('aidSankey').hidden = d !== 'sankey';
  setActive(document.getElementById('displayGroup'), 'data-display', d);
  setActive(document.getElementById('calLayoutGroup'), 'data-cal-layout', views.calLayout);
  setActive(document.getElementById('skCostsGroup'), 'data-sk-costs', views.skCosts);
  document.getElementById('skPeriod').value = views.skPeriod;
  syncUrl();
  renderAlt();
  if (d === 'table') {
    /* Hiding the table resets the card's horizontal scroll; put it back, and
       if a month is selected make sure its column is in view. */
    wrap.scrollLeft = views.tableScrollX;
    var cell = wrap.querySelector('.pnl-cell--selmonth');
    if (cell) {
      var cr = cell.getBoundingClientRect(), wr = wrap.getBoundingClientRect();
      if (cr.right > wr.right || cr.left < wr.left + 470) wrap.scrollLeft += cr.left - wr.left - 470;
    }
  }
}
function renderAlt(){
  if (views.display === 'calendar') renderCalendar();
  else if (views.display === 'sankey') renderSankey();
}

/* Every change on the page already ends in renderTable() — channels, view,
   comparison, overrides, selection — so the active chart re-renders from there. */
var baseRenderTable = window.renderTable;
window.renderTable = function(){ var r = baseRenderTable.apply(this, arguments); renderAlt(); return r; };

document.getElementById('displayGroup').addEventListener('click', function(e){
  var b = e.target.closest('[data-display]'); if (!b) return;
  var next = b.getAttribute('data-display');
  if (state.editMode && next !== 'table') { toast('Save or cancel your edits to switch views.', 'info'); return; }
  if (next === views.display) return;
  if (views.display === 'table') views.tableScrollX = document.getElementById('tablewrap').scrollLeft;
  views.display = next;
  followAnchor(next);
  applyDisplay();
});
document.getElementById('calLayoutGroup').addEventListener('click', function(e){
  var b = e.target.closest('[data-cal-layout]'); if (!b) return;
  views.calLayout = b.getAttribute('data-cal-layout');
  /* Days open on the month you were looking at, if one is selected. */
  if (views.calLayout === 'days' && state.selRow) views.calMonth = state.selMonth;
  applyDisplay();
});
document.getElementById('skCostsGroup').addEventListener('click', function(e){
  var b = e.target.closest('[data-sk-costs]'); if (!b) return;
  views.skCosts = b.getAttribute('data-sk-costs');
  applyDisplay();
});
document.getElementById('calMetric').addEventListener('change', function(){
  views.calMetric = this.value; syncUrl();
  /* An open panel for the previous line would describe a grid no longer on screen. */
  if (state.selRow) selectRow(views.calMetric); else renderCalendar();
});
var skSel = document.getElementById('skPeriod');
skSel.innerHTML = '<option value="fy">FY 2024</option><optgroup label="Quarters">' +
  SK_PERIODS.slice(1, 5).map(function(p){ return '<option value="' + p.k + '">' + p.l + '</option>'; }).join('') + '</optgroup><optgroup label="Months">' +
  SK_PERIODS.slice(5).map(function(p){ return '<option value="' + p.k + '">' + p.l + '</option>'; }).join('') + '</optgroup>';
skSel.addEventListener('change', function(){ views.skPeriod = this.value; syncUrl(); renderSankey(); });
if (!SK_PERIODS.some(function(p){ return p.k === views.skPeriod; })) views.skPeriod = 'fy';
/* Editing happens in the table, so entering Edit Mode brings the table back. */
document.getElementById('editModeBtn').addEventListener('click', function(){ if (views.display !== 'table') { views.display = 'table'; applyDisplay(); } }, true);

/* The chart is drawn to the card's width: the detail panel opening, the window
   resizing, or the page scrollbar appearing after the first paint all change it. */
new ResizeObserver(function(){
  if (views.display !== 'sankey') return;
  var w = document.getElementById('pnlSankey').clientWidth;
  if (Math.abs(w - skRenderedW) > 2) renderSankey();
}).observe(document.getElementById('tablewrap'));

/* A closed panel is 1px wide but its controls stayed in the tab order (15 of
   them, invisible). Inert follows the panel's open state; closing it returns
   focus to the bar or cell that opened it. */
['pnlPanel','pnlDrill'].forEach(function(pid){
  var el = document.getElementById(pid);
  var sync = function(){ el.inert = !el.classList.contains('open'); };
  sync();
  new MutationObserver(sync).observe(el, { attributes:true, attributeFilter:['class'] });
});
var baseClosePanel = window.closePanel;
window.closePanel = function(){
  var panel = document.getElementById('pnlPanel');
  var wasInside = panel.contains(document.activeElement) || document.activeElement === document.body;
  var r = baseClosePanel.apply(this, arguments);
  var o = views.opener; views.opener = null;
  if (wasInside && o && document.getElementById(o.host) && !document.getElementById(o.host).hidden) {
    var back = document.getElementById(o.host).querySelector('[' + o.attr + '="' + o.key + '"]');
    if (back) back.focus({ preventScroll:true });
  }
  return r;
};

applyDisplay();
})();
