/* Accounting & Close prototype: the shell every page shares. Load after accounting-data.js and panorama-match.js.

   AC.start({ current, render })   one call per page. render() returns the page's inner HTML, without the head and nav.
   AC.rerender()                   draws the page again and keeps focus on the control with the same data-key.
   AC.pageHead({ current, actions, noMonth })  head and section nav. AC.start adds it for you, the page passes these through `head`.
   AC.month()                      the month picked anywhere in the section. AC.setMonth(m) sets it.
   AC.monthSelect()                the Month select. Its change event is handled here.
   AC.toast(msg, { undo, view })   top right toast. undo and view are functions.
   AC.openPanel({ title, count, amount, meta, body, onExport, onOpen }) side panel. AC.closePanel().
   AC.openDialog({ title, body, actions:[{ label, kind:'primary'|'alternative'|'danger', autofocus, onClick }] }) dialog. AC.closeDialog().
   AC.sourceRow(pairs)             the Source row card, with Copy.
   AC.downloadCsv(name, rows)      a real CSV file.
   AC.rowClick(selector, fn)       whole row as a click target. It waits 220 ms, so a double click selects a word.

   The page behind an overlay is inert. The second click of a double click never lands on what an overlay uncovered. A mouse user sees no keyboard ring. */
(function () {
  const AC = window.AC;
  const esc = AC.esc;
  /* A page opened by link shows no keyboard ring until a key is pressed. */
  document.documentElement.classList.add('pm-pointer');

  /* With classic scrollbars a stable gutter is not in clientWidth, only in the root's own box. */
  AC.measureGutter = () => document.documentElement.style.setProperty('--ac-gutter', Math.max(0, window.innerWidth - document.documentElement.offsetWidth) + 'px');
  /* Tab icon, from wherever this page's assets live. */
  (function () {
    const css = document.querySelector('link[href*="panorama-match.css"]');
    if (!css || document.querySelector('link[rel="icon"]')) return;
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = css.getAttribute('href').replace('panorama-match.css', 'iris-mark-sm.svg');
    document.head.appendChild(icon);
  })();

  AC.PAGES = [
    { id:'overview', label:'Overview', href:'accounting-overview.html' },
    { id:'journal', label:'Journal entries', href:'journal-entries.html' },
    { id:'exceptions', label:'Exceptions', href:'accounting-exceptions.html' },
    { id:'reconciliation', label:'Reconciliation', href:'accounting-reconciliation.html' },
    { id:'balance', label:'Balance', href:'balance.html' },
    { id:'settlements', label:'Settlements', href:'accounting-settlements.html' },
    { id:'events', label:'Events', href:'accounting-events.html', hidden:true, parent:'balance' },
    { id:'close', label:'Close', href:'accounting-close.html', hidden:true },
    { id:'settings', label:'Account mapping', href:'accounting-settings.html', hidden:true },
  ];
  const hrefOf = page => {
    const p = AC.PAGES.find(x => x.id === page);
    return p ? p.href + location.search.replace(/[?&]v=\d+/, '') : '#';
  };
  AC.hrefOf = hrefOf;

  AC.navHtml = current => {
    const page = AC.PAGES.find(p => p.id === current);
    if (page && page.parent) return AC.navHtml(page.parent).replace(' aria-current="page"', '');
    const sep = AC.month() === AC.MONTH;
    const counts = { exceptions:sep ? AC.openExceptions().length : 0, journal:sep ? AC.state.journal.open : 0 };
    const words = { exceptions:'open', journal:'to decide' };
    return `<nav class="iris-tab-bar pm-section-nav ac-nav" aria-label="Accounting">${AC.PAGES.filter(p => !p.hidden).map(p => `<a class="iris-tab ac-nav__item${p.id === current ? ' iris-tab--active' : ''}" href="${hrefOf(p.id)}"${p.id === current ? ' aria-current="page"' : ''}>${esc(p.label)}${counts[p.id] ? `<span class="iris-tab__counter"><span class="ac-sr">, </span>${counts[p.id]}<span class="ac-sr"> ${words[p.id]}</span></span>` : ''}</a>`).join('')}</nav>`;
  };

  /* ---------- Month: one value across the section ---------- */
  AC.month = () => { try { const m = sessionStorage.getItem('ac-month') || AC.MONTH; return document.body.classList.contains('ds') || AC.MONTHS.includes(m) ? m : AC.MONTH; } catch (err) { return AC.MONTH; } };
  AC.setMonth = m => { try { sessionStorage.setItem('ac-month', m); } catch (err) { /* this page only */ } };
  AC.monthSelect = () => `<select class="form-input form-select ac-select ac-w120" aria-label="Month" id="monthSelect" data-key="monthSelect" autocomplete="off">${AC.MONTHS.map(m => `<option${AC.month() === m ? ' selected' : ''}>${esc(m)}</option>`).join('')}</select>`;

  const CALENDAR = '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clip-rule="evenodd"/></svg>';
  const CHEVRON_DOWN = '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clip-rule="evenodd"/></svg>';
  const SHORT = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  AC.MONTH_OPTIONS = ['Jul 2026', 'Aug 2026', 'Sep 2026', 'Oct 2026'];
  AC.monthControl = () => { const now = AC.month(); const cells = SHORT.map(m => { const name = m.charAt(0) + m.slice(1).toLowerCase() + ' 2026'; const ok = AC.MONTH_OPTIONS.includes(name); return `<button type="button"${ok ? ` data-month="${name}"` : ' disabled'}${name === now ? ' aria-current="date"' : ''}>${m}</button>`; }).join(''); return `<div class="ac-menu-wrap" data-menu="month"><button type="button" class="dropdown-trigger dropdown-trigger--outline dropdown-trigger--sm" data-menu-btn aria-haspopup="true" aria-expanded="false" aria-label="Month, ${esc(now)}" data-key="monthBtn"${AC.RAILS.length ? '' : ' disabled'}>${CALENDAR}<span>${esc(now)}</span>${CHEVRON_DOWN}</button><div class="dropdown-menu ac-month-panel" hidden><div class="ac-month-panel__head">2026</div><div class="ac-month-panel__grid">${cells}</div></div></div>`; };
  /* One filter dropdown. Pages get the pick through AC.onMenuPick(name, value). */
  AC.filterMenu = o => `<div class="ac-menu-wrap${o.end ? ' ac-menu-wrap--end' : ''}${o.quiet ? ' ac-cell-menu' : ''}" data-menu="${esc(o.name)}"><button type="button" class="dropdown-trigger dropdown-trigger--outline dropdown-trigger--sm${o.quiet && !o.value ? ' ac-cell-menu--empty' : ''}" data-menu-btn aria-haspopup="true" aria-expanded="false" aria-label="${esc(o.label)}" data-key="menu:${esc(o.name)}"${o.options.length < 2 && !o.always ? ' disabled' : ''}><span>${esc((o.options.find(x => x[0] === o.value) || o.options[0])[1])}</span>${o.options.length < 2 && !o.always ? '' : CHEVRON_DOWN}</button><div class="dropdown-menu" hidden>${o.options.map(x => `<button type="button" class="dropdown-item${x[0] === o.value ? ' active' : ''}" data-menu-pick="${esc(x[0])}"><span class="dropdown-item__text">${esc(x[1])}</span></button>`).join('')}</div></div>`;
  const closeMenus = () => document.querySelectorAll('[data-menu] > .dropdown-menu:not([hidden])').forEach(m => { m.hidden = true; m.parentNode.querySelector('[data-menu-btn]').setAttribute('aria-expanded', 'false'); });
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-menu-btn]');
    if (btn) { const m = btn.parentNode.querySelector('.dropdown-menu'), open = m.hidden; closeMenus(); m.hidden = !open; btn.setAttribute('aria-expanded', open); return; }
    const month = e.target.closest('[data-month]');
    if (month) { closeMenus(); if (AC.beforeMonth) AC.beforeMonth(month.dataset.month); AC.setMonth(month.dataset.month); AC.rerender(); AC.announce(month.dataset.month); const b = document.querySelector('[data-key="monthBtn"]'); if (b) b.focus(); return; }
    const pick = e.target.closest('[data-menu-pick]');
    if (pick) { const name = pick.closest('[data-menu]').dataset.menu; closeMenus(); if (AC.onMenuPick) AC.onMenuPick(name, pick.dataset.menuPick); return; }
    if (!e.target.closest('[data-menu]')) closeMenus();
  });
  document.addEventListener('keydown', e => { if (e.key !== 'Escape') return; const open = document.querySelector('[data-menu] > .dropdown-menu:not([hidden])'); if (open) { const b = open.parentNode.querySelector('[data-menu-btn]'); closeMenus(); b.focus(); } });
  /* A menu of actions: the trigger always reads its label. Picks reach AC.onMenuPick(name, value). */
  AC.actionMenu = o => `<div class="ac-menu-wrap${o.end ? ' ac-menu-wrap--end' : ''}" data-menu="${esc(o.name)}"><button type="button" class="dropdown-trigger dropdown-trigger--outline dropdown-trigger--sm" data-menu-btn aria-haspopup="true" aria-expanded="false" data-key="menu:${esc(o.name)}"><span>${esc(o.label)}</span>${CHEVRON_DOWN}</button><div class="dropdown-menu" hidden>${o.options.map(x => `<button type="button" class="dropdown-item" data-menu-pick="${esc(x[0])}"><span class="dropdown-item__text">${esc(x[1])}</span></button>`).join('')}</div></div>`;
  AC.EXPORTS = [['csv', 'CSV'], ['xls', 'Excel'], ['pdf', 'PDF']];
  /* Excel opens SpreadsheetML as a workbook. */
  AC.downloadXls = (name, rows) => {
    const cell = v => { const t = String(v === undefined || v === null ? '' : v); const n = /^-?\d+(\.\d+)?$/.test(t); return `<Cell><Data ss:Type="${n ? 'Number' : 'String'}">${esc(t)}</Data></Cell>`; };
    const xml = `<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="Orders"><Table>${rows.map(r => `<Row>${r.map(cell).join('')}</Row>`).join('')}</Table></Worksheet></Workbook>`;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([xml], { type:'application/vnd.ms-excel' }));
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
  };
  /* PDF: a print-ready page; the browser's print dialog saves it as PDF. */
  AC.printPdf = (title, sub, rows) => {
    const w = window.open('', '_blank');
    if (!w) { AC.toast('Pop-up blocked. Allow pop-ups to save the PDF.'); return; }
    w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(title)}</title><style>body{font:12px/1.5 Inter,Arial,sans-serif;margin:32px;color:#111928}h1{font-size:18px;margin:0 0 2px}p{margin:0 0 16px;color:#6B7280}table{border-collapse:collapse;width:100%}th,td{border-bottom:1px solid #E5E7EB;padding:6px 8px;text-align:left}th{background:#F9FAFB;font-weight:600}</style></head><body><h1>${esc(title)}</h1><p>${esc(sub)}</p><table>${rows.map((r, i) => `<tr>${r.map(v => (i ? `<td>${esc(v)}</td>` : `<th>${esc(v)}</th>`)).join('')}</tr>`).join('')}</table></body></html>`);
    w.document.close();
    w.focus();
    w.print();
  };
  AC.exportAs = (fmt, base, title, sub, rows) => {
    if (fmt === 'xls') { AC.downloadXls(base + '.xls', rows); AC.toast('Excel exported.'); return; }
    if (fmt === 'pdf') { AC.printPdf(title, sub, rows); return; }
    AC.downloadCsv(base + '.csv', rows);
    AC.toast('CSV exported.');
  };
  /* A trend line in a table cell, drawn like the library's KPI line. */
  AC.sparkLine = (series, label) => {
    if (!series || series.length < 2) return '';
    const pts = Array.from({ length:12 }, (_, i) => series[Math.round(i * (series.length - 1) / 11)]);
    const lo = Math.min(...pts), hi = Math.max(...pts), W = 96, H = 28;
    const xy = pts.map((v, i) => [i * W / 11, hi === lo ? H / 2 : 3 + (hi - v) / (hi - lo) * (H - 6)]);
    const d = xy.map((p, i) => { if (!i) return `M${p[0].toFixed(1)} ${p[1].toFixed(1)}`; const a = xy[i - 1], m = (a[0] + p[0]) / 2; return `C${m.toFixed(1)} ${a[1].toFixed(1)} ${m.toFixed(1)} ${p[1].toFixed(1)} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`; }).join('');
    return `<svg class="ac-spark2" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label || 'Trend')}"><path d="${d}" fill="none" stroke="#5850EC" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  };
  /* Library cells inside a native table. */
  const ROW = { total:' ac-row-total', group:' ac-row-group', noncoll:' ac-row-sub', derived:' ac-row-derived', open:' ac-row-open', default:'' };
  AC.th = (text, o = {}) => `<th scope="col" class="iris-th ac-h${o.right ? ' ac-num' : ''}${o.cls ? ' ' + o.cls : ''}"${o.span ? ` colspan="${o.span}"` : ''}>${text}</th>`;
  AC.td = (inner, o = {}) => { const cls = `ac-c${o.num || o.right ? ' ac-num' : ''}${ROW[o.row || 'default'] || ''}${o.cls ? ' ' + o.cls : ''}`; const span = o.span ? ` colspan="${o.span}"` : ''; return o.head ? `<th scope="row" class="${cls}"${span}>${inner}</th>` : `<td class="${cls}"${span}>${inner}</td>`; };
  AC.link = (inner, attrs) => `<button type="button" class="btn-link btn-link-semibold btn-sm" ${attrs}>${inner}</button>`;
  /* The library's KPI line: a smooth 2 px path over a soft fill. */
  let chartN = 0;
  AC.kpiChart = series => { const pts = Array.from({ length:12 }, (_, i) => series[Math.round(i * (series.length - 1) / 11)]); const lo = Math.min(...pts), hi = Math.max(...pts); const xy = pts.map((v, i) => [i * 286 / 11, hi === lo ? 24 : 6 + (hi - v) / (hi - lo) * 34]); const line = xy.map((p, i) => { if (!i) return `M${p[0]} ${p[1].toFixed(2)}`; const a = xy[i - 1], mid = (a[0] + p[0]) / 2; return `C${mid} ${a[1].toFixed(2)} ${mid} ${p[1].toFixed(2)} ${p[0]} ${p[1].toFixed(2)}`; }).join(''); chartN += 1; return `<div class="iris-kpi__chart" aria-hidden="true"><svg style="width:100%;height:70px;display:block;" viewBox="0 0 286 70" preserveAspectRatio="none" fill="none"><defs><linearGradient id="acChart${chartN}" x1="143" y1="1" x2="143" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="#E5E7EB"/><stop offset="1" stop-color="white"/></linearGradient></defs><path d="${line}V70H0Z" fill="url(#acChart${chartN})"/><path d="${line}" stroke="#5850EC" stroke-width="2" vector-effect="non-scaling-stroke"/></svg></div>`; };

  /* A money cell: zero reads quiet, everything else signed. */
  AC.amt = (n, cur) => (AC.round2(n) ? esc(AC.signed(n, cur)) : `<span class="ac-zero">${esc(AC.money(0, cur))}</span>`);
  AC.none = '<span class="ac-muted"><span aria-hidden="true">–</span><span class="ac-sr">not available</span></span>';
  /* Top bar of a card: filters on the left, actions on the right. */
  AC.cardBar = (left, right) => `<div class="card-header"><div class="ac-toolbar">${left}</div><div class="card-header-controls">${right || ''}</div></div>`;
  AC.cardTitle = (id, title, sub, right) => `<div class="card-header"><div class="ac-name"><h2 class="card-header-title" id="${id}" style="margin:0;">${title}</h2>${sub ? `<span class="ac-muted">${sub}</span>` : ''}</div><div class="card-header-controls">${right || ''}</div></div>`;
  /* Label and value rows. Rows: [label, valueHtml, { row, num }]. */
  AC.kv = (rows, o = {}) => `<table class="ac-dst ac-dst--kv${o.only ? ' ac-kv-only' : ''}"><caption class="ac-sr">${esc(o.caption || 'Details')}</caption><colgroup><col style="width:160px"><col></colgroup><tbody>${rows.filter(Boolean).map(r => `<tr>${AC.td(r[3] ? r[0] : `<span class="ac-muted">${esc(r[0])}</span>`, { head:true, row:(r[2] || {}).row })}${AC.td(r[1], { num:(r[2] || {}).num !== false, row:(r[2] || {}).row })}</tr>`).join('')}</tbody></table>`;
  /* The library's pagination, with its Showing line. Buttons carry data-page. */
  const PAGE_ARROW = dir => `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"${dir < 0 ? ' style="transform:rotate(180deg)"' : ''}><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.17 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clip-rule="evenodd"/></svg>`;
  AC.pager = o => {
    const btn = (n, dir, label, off) => `<button type="button" class="btn btn-neutral btn-sm pm-ptools__page" data-page="${n}" data-key="page:${dir < 0 ? 'prev' : 'next'}" aria-label="${label}"${off ? ' disabled' : ''}>${PAGE_ARROW(dir)}</button>`;
    return `<div class="pm-ptools__pager"><span class="pm-ptools__count" role="status" data-showing>${AC.count(o.start)} to ${AC.count(o.end)} of ${AC.count(o.total)}</span>${o.pages > 1 ? btn(Math.max(1, o.page - 1), -1, 'Previous page', o.page === 1) + btn(Math.min(o.pages, o.page + 1), 1, 'Next page', o.page === o.pages) : ''}</div>`;
  };
  AC.foot = (left, right) => `<div class="pm-ptable__foot"><span class="pm-ptools__count ac-foot-left">${left || ''}</span>${right || ''}</div>`;
  AC.crumb = (href, route, parent, here, idAttr) => `<nav aria-label="Breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="${esc(href)}"${route !== undefined ? ` data-route="${esc(route)}"` : ''}>${esc(parent)}</a><span class="breadcrumb-sep" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.17 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clip-rule="evenodd"/></svg></span></li><li class="breadcrumb-item active" aria-current="page"><span${idAttr ? ` id="${idAttr}" tabindex="-1"` : ''}>${esc(here)}</span></li></ol></nav>`;

  AC.pageHead = o => { const here = AC.PAGES.find(p => p.id === o.current); if (here) document.title = here.label + ' · Accounting'; if (o.standalone) return `<div class="ac-head"><h1 tabindex="-1" data-key="pageTitle">${esc(here.label)}</h1></div>`; if (document.body.classList.contains('ds')) return `<div class="ac-head"><h1 tabindex="-1" data-key="pageTitle">Accounting${here ? `<span class="ac-sr">: ${esc(here.label)}</span>` : ''}</h1>${o.noMonth ? '' : AC.monthControl()}${o.extra ? `<div class="ac-actions">${o.extra}</div>` : ''}</div>${AC.navHtml(o.current)}`; return `<div class="ac-top"><div class="ac-head"><h1 class="ac-head__title" tabindex="-1" data-key="pageTitle">Accounting${here ? `<span class="ac-sr">: ${esc(here.label)}</span>` : ''}</h1>${o.noMonth ? '' : AC.monthSelect()}<span class="ac-note">${esc(AC.TIMEZONE)}</span><div class="ac-actions">${o.actions || ''}</div></div>${AC.navHtml(o.current)}</div>`; };

  /* ---------- Toast ---------- */
  let toastTimer = null, toastReturn = null;
  function placeToast() { /* Position lives in accounting.css: under the head, or left of an open panel. */ }
  AC.placeToast = placeToast;
  AC.announce = text => { let live = document.getElementById('acLive'); if (!live) { live = document.createElement('div'); live.id = 'acLive'; live.className = 'ac-sr'; live.setAttribute('role', 'status'); document.body.appendChild(live); } live.textContent = text; };
  function clearToast() {
    const host = document.getElementById('toastHost');
    const inside = host.contains(document.activeElement);
    clearTimeout(toastTimer);
    host.innerHTML = '';
    if (inside && toastReturn && document.contains(toastReturn)) toastReturn.focus({ preventScroll:true });
  }
  AC.toast = (msg, o = {}) => {
    const host = document.getElementById('toastHost');
    host.innerHTML = `<div class="toast" id="toastBox"><p class="toast-body" style="margin:0;flex:1;">${esc(msg)}</p>${o.view ? '<button type="button" class="btn-link btn-sm pm-link-quiet" style="padding:0;white-space:nowrap;" id="toastView">View</button>' : ''}${o.undo ? '<button type="button" class="btn-link btn-link-semibold btn-sm" style="padding:0;" id="toastUndo">Undo</button>' : ''}<button type="button" class="toast-close" id="toastClose" aria-label="Dismiss">×</button></div>`;
    document.getElementById('toastClose').onclick = () => { closedAt = Date.now(); clearToast(); };
    document.getElementById('toastClose').addEventListener('keydown', ev => { if (document.getElementById('modalBackdrop')) return; if (ev.key === 'Tab' && !ev.shiftKey && toastReturn && document.contains(toastReturn)) { ev.preventDefault(); toastReturn.focus(); } });
    if (o.undo) document.getElementById('toastUndo').onclick = () => { closedAt = Date.now(); host.innerHTML = ''; closeOverlay(); o.undo(); AC.announce('Change undone.'); };
    if (o.view) document.getElementById('toastView').onclick = () => { closedAt = Date.now(); closeOverlay(); o.view(); };
    const ms = o.undo ? 9000 : 5000;
    const arm = () => { clearTimeout(toastTimer); toastTimer = setTimeout(clearToast, ms); };
    const box = document.getElementById('toastBox');
    box.addEventListener('mouseenter', () => clearTimeout(toastTimer));
    box.addEventListener('mouseleave', arm);
    box.addEventListener('focusin', ev => { clearTimeout(toastTimer); if (ev.relatedTarget && !box.contains(ev.relatedTarget)) toastReturn = ev.relatedTarget; });
    box.addEventListener('focusout', arm);
    arm();
    placeToast();
  };

  /* A held or double Enter must not press what focus just moved to. Use this when moving focus to Undo or the next action. */
  let movedAt = 0, movedTo = null;
  AC.focusAfterAction = el => { if (el) { movedAt = Date.now(); el.focus(); movedTo = document.activeElement; } };
  document.addEventListener('click', e => { if (e.detail === 0 && e.isTrusted && e.target === movedTo && Date.now() - movedAt < 500) { e.preventDefault(); e.stopPropagation(); } }, true);
  document.addEventListener('keydown', e => { if (e.key !== 'Enter' && e.key !== ' ') return; const field = e.target.matches('textarea, input:not([type="checkbox"]):not([type="radio"])'); if (e.repeat ? !field : field && e.target === movedTo && Date.now() - movedAt < 500) e.preventDefault(); }, true);
  /* A table that scrolls inside itself brings the focused control into view. */
  document.addEventListener('focusin', e => { const w = e.target.closest && e.target.closest('.ac-wrap-scroll'); if (!w) return; const r = e.target.getBoundingClientRect(), b = w.getBoundingClientRect(); if (r.left < b.left + 4) w.scrollLeft -= b.left + 4 - r.left; else if (r.right > b.right - 4) w.scrollLeft += r.right - b.right + 4; });

  /* ---------- Overlays ---------- */
  let closedAt = 0, openedAt = 0, returnFocus = null, lastClick = null, locked = false, rowTimer = null;
  function lockPage() {
    if (locked) return;
    locked = true;
    AC.measureGutter();
    document.documentElement.style.scrollbarGutter = 'auto';
    document.body.style.overflow = 'hidden';
    document.querySelector('body > div').inert = true;
  }
  function unlockPage() {
    locked = false;
    document.documentElement.style.scrollbarGutter = '';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    document.querySelector('body > div').inert = false;
  }
  function overlayKeys(e) {
    if (AC.busy) { if (e.key === 'Escape' || e.key === 'Tab') e.preventDefault(); return; }
    if (e.key === 'Escape') { closeOverlay(); return; }
    if (e.key !== 'Tab') return;
    const f = [...document.querySelectorAll('#modalHost button:not([disabled]), #modalHost input:not([disabled]), #modalHost select:not([disabled]), #modalHost textarea:not([disabled]), #modalHost a[href], #toastHost button')];
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { f[f.length - 1].focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { f[0].focus(); e.preventDefault(); }
  }
  function closeOverlay() {
    if (!document.getElementById('modalBackdrop')) return;
    closedAt = Date.now();
    unlockPage();
    document.querySelectorAll('.ac-row--sel[data-drill], .ac-kv__row--sel[data-drill]').forEach(x => x.classList.remove('ac-row--sel', 'ac-kv__row--sel'));
    document.body.classList.remove('ac-panel-open');
    document.getElementById('modalHost').innerHTML = '';
    document.removeEventListener('keydown', overlayKeys);
    placeToast();
    const f = returnFocus;
    returnFocus = null;
    if (f && document.contains(f)) f.focus();
  }
  AC.closePanel = closeOverlay;
  AC.closeDialog = closeOverlay;
  AC.keepReturnFocus = el => { returnFocus = el; };
  function beginOverlay() {
    openedAt = Date.now();
    if (!document.getElementById('modalBackdrop')) {
      returnFocus = document.activeElement && document.activeElement !== document.body ? document.activeElement : null;
      lockPage();
      document.addEventListener('keydown', overlayKeys);
    }
  }
  function backdropClose(host) {
    host.querySelector('#modalBackdrop').addEventListener('mousedown', ev => { if (ev.target.id === 'modalBackdrop') { ev.preventDefault(); if (ev.detail < 2 && !AC.busy) closeOverlay(); } });
  }
  const CLOSE_ICON = '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/></svg>';
  AC.ICON_CHEVRON = '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.17 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clip-rule="evenodd"/></svg>';

  AC.openPanel = o => {
    const first = !document.getElementById('modalBackdrop');
    beginOverlay();
    if (first) { const origin = lastClick && lastClick.closest ? lastClick.closest('[data-drill]') : null; if (origin) origin.classList.add('ac-row--sel'); }
    document.body.classList.add('ac-panel-open');
    const count = o.count !== undefined && o.count !== null ? ` <span class="ac-muted">(${AC.count(o.count)})</span>` : '';
    const host = document.getElementById('modalHost');
    host.innerHTML = `<div class="pm-drawer-backdrop" id="modalBackdrop"><aside role="dialog" aria-modal="true" aria-labelledby="modalTitle" class="pm-drawer">
      <div class="pm-drawer__head"><div class="pm-drawer__title"><h2 class="modal-title" id="modalTitle" style="margin:0;">${esc(o.title)}${count}${o.amount ? ' ' + esc(o.amount) : ''}</h2>${o.meta ? `<span class="pm-drawer__meta">${esc(o.meta)}</span>` : ''}</div><div class="ac-actions">${o.actions || ''}${o.onExport ? '<button type="button" class="btn btn-neutral btn-sm" id="panelExport">Export CSV</button>' : ''}<button type="button" class="modal-close" id="modalClose" aria-label="Close panel">${CLOSE_ICON}</button></div></div>
      <div class="pm-drawer__body" id="panelBody">${o.body}</div></aside></div>`;
    document.getElementById('modalClose').onclick = closeOverlay;
    if (o.onExport) document.getElementById('panelExport').onclick = ev => { if (ev.detail > 1) return; o.onExport(); };
    backdropClose(host);
    if (o.onOpen) o.onOpen(document.getElementById('panelBody'));
    AC.focusAfterAction(document.getElementById('modalClose'));
    placeToast();
  };
  AC.openDialog = o => {
    beginOverlay();
    const host = document.getElementById('modalHost');
    const buttons = o.actions.map((a, i) => `<button type="button" class="btn btn-md ${a.kind === 'primary' ? 'btn-primary' : a.kind === 'danger' ? 'pm-danger-solid' : 'btn-neutral'}" data-action="${i}"${a.autofocus ? ' data-autofocus' : ''}>${esc(a.label)}</button>`).join('');
    host.innerHTML = `<div class="modal-backdrop" id="modalBackdrop" style="align-items:flex-start;padding-top:8vh;"><div role="dialog" aria-modal="true" aria-labelledby="modalTitle" class="modal-dialog ${o.size || ''}" style="max-height:calc(100vh - 48px);display:flex;flex-direction:column;">
      <div class="modal-header"><h2 class="modal-title" id="modalTitle">${esc(o.title)}</h2><button type="button" class="modal-close" id="modalClose" aria-label="Close dialog">${CLOSE_ICON}</button></div>
      <div class="modal-body" style="overflow:auto;">${o.body}</div><div class="modal-footer" style="flex-wrap:wrap;">${buttons}</div></div></div>`;
    document.getElementById('modalClose').onclick = closeOverlay;
    host.querySelectorAll('[data-action]').forEach(b => { b.onclick = ev => { if (ev.detail > 1) return; o.actions[+b.dataset.action].onClick(ev); }; });
    backdropClose(host);
    const first = host.querySelector('[data-autofocus]') || host.querySelector('#modalClose');
    if (first) AC.focusAfterAction(first);
    placeToast();
  };
  AC.sourceRow = pairs => `<div class="pm-source"><div class="pm-source__head"><span>Source row</span><span class="ac-actions"><button type="button" class="btn btn-neutral btn-xs" data-copy-source>Copy</button></span></div><dl>${pairs.map(p => `<dt>${esc(p[0])}</dt><dd>${esc(p[1])}</dd>`).join('')}</dl></div>`;

  AC.downloadCsv = (name, rows) => {
    const csv = rows.map(r => r.map(v => '"' + String(v === null || v === undefined ? '' : v).replace(/"/g, '""') + '"').join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type:'text/csv' }));
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
  };

  /* ---------- Whole rows as click targets ---------- */
  const rowHandlers = [];
  AC.rowClick = (selector, fn) => rowHandlers.push([selector, fn]);

  /* ---------- Page start ---------- */
  let page = null;
  /* States of the whole section, query only: ?org=noduck ?org=norails ?load=slow ?load=error */
  const LOAD = new URLSearchParams(location.search).get('load');
  let loading = LOAD === 'slow' ? 'slow' : LOAD === 'error' ? 'error' : '';
  AC.blockedCard = current => {
    if (AC.ORG === 'noduck') return `<section class="card"><div class="ac-empty"><h2 class="ac-empty__title">DuckDB not enabled for this org</h2></div></section>`;
    if (AC.ORG === 'norails' && current !== 'settings') return `<section class="card"><div class="ac-empty"><h2 class="ac-empty__title">No rails connected</h2><a class="btn btn-neutral btn-sm" href="custom-groups.html#connections">Go to Connections</a></div></section>`;
    return '';
  };
  AC.skeletonHtml = () => `<section class="card" role="status"><span class="ac-sr">Loading</span><div class="ac-skeleton-list">${Array.from({ length:8 }, () => '<div class="skeleton" style="height:20px;"></div>').join('')}</div></section>`;
  AC.errorCard = () => `<section class="card" role="alert"><div class="ac-empty"><h2 class="ac-empty__title">Could not load ${esc(AC.month())}</h2><button type="button" class="btn btn-neutral btn-sm" id="acRetry" data-key="acRetry">Try again</button></div></section>`;
  AC.rerender = () => {
    const app = document.getElementById('app');
    const key = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.key : null;
    const blocked = AC.blockedCard(page.current);
    const body = blocked || (loading === 'slow' ? AC.skeletonHtml() : loading === 'error' ? AC.errorCard() : page.render());
    app.innerHTML = `<div class="ac-page">${AC.pageHead(Object.assign({ current:page.current, noMonth:page.noMonth }, page.head && !blocked && !loading ? page.head() : {}))}${body}</div>`;
    if (key) { const el = document.querySelector(`[data-key="${CSS.escape(key)}"]`); if (el) el.focus(); }
    const here = document.querySelector('.ac-nav [aria-current="page"]');
    if (here && window.innerWidth < 982) here.parentNode.scrollLeft = here.offsetLeft - 16;
    if (page.after && !blocked && !loading) page.after();
  };
  AC.start = o => {
    page = o;
    /* Other rail items stay inert: this prototype is the Accounting section. */
    document.querySelectorAll('.pm-rail__item[title="Connections"]').forEach(b => { b.onclick = null; b.setAttribute('tabindex', '-1'); b.setAttribute('aria-disabled', 'true'); });
    document.querySelectorAll('.pm-rail__item[title="Settings"]').forEach(b => { b.onclick = () => { location.href = hrefOf('settings'); }; });
    document.querySelectorAll('.pm-rail__item[title="Accounting"]').forEach(b => { b.onclick = () => { location.href = hrefOf('overview'); }; });
    window.addEventListener('scroll', placeToast, true);
    window.addEventListener('resize', placeToast);
    document.addEventListener('mousedown', () => document.documentElement.classList.add('pm-pointer'), true);
    document.addEventListener('keydown', () => document.documentElement.classList.remove('pm-pointer'), true);
    const second = e => e.detail > 1 && Date.now() - Math.max(closedAt, openedAt) < 500;
    document.addEventListener('mousedown', e => { if (second(e)) e.preventDefault(); }, true);
    document.addEventListener('click', e => { lastClick = e.target; if (second(e)) { e.preventDefault(); e.stopPropagation(); } }, true);
    document.addEventListener('click', e => {
      if (e.target.closest('.ac-nav [aria-current="page"]')) { e.preventDefault(); return; }
      const copy = e.target.closest('[data-copy-source]');
      if (copy) {
        const text = [...document.querySelectorAll('.pm-source dt')].map(d => d.textContent + ': ' + d.nextElementSibling.textContent).join('\n');
        if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => AC.toast('Source row copied.'), () => AC.toast('Could not copy.')); else AC.toast('Could not copy.');
        return;
      }
      if (e.target.closest('button, a, select, input, textarea, label')) { clearTimeout(rowTimer); return; }
      if (String(window.getSelection())) return;
      if (e.detail > 1) { clearTimeout(rowTimer); return; }
      for (const [selector, fn] of rowHandlers) {
        const row = e.target.closest(selector);
        if (row) { clearTimeout(rowTimer); rowTimer = setTimeout(() => { if (!String(window.getSelection())) fn(row); }, 220); return; }
      }
    });
    document.addEventListener('change', e => {
      if (e.target.id === 'monthSelect') { AC.setMonth(e.target.value); AC.rerender(); AC.announce(e.target.value); }
    });
    /* Back from the browser's page cache: no old toast, the state as it is now, and a reload elsewhere stays a reset. */
    window.addEventListener('pageshow', ev => {
      if (!ev.persisted) return;
      document.getElementById('toastHost').innerHTML = '';
      if (document.querySelector('#modalHost .modal-dialog')) closeOverlay();
      const raw = AC.stateRaw();
      if (!raw) { location.reload(); return; }
      try { Object.assign(AC.state, JSON.parse(raw)); } catch (err) { /* keep what is on screen */ }
      AC.rerender();
    });
    document.addEventListener('click', e => { if (e.target.closest('#acRetry')) { loading = 'slow'; AC.rerender(); setTimeout(() => { loading = ''; AC.rerender(); if (o.ready) o.ready(); const h = document.querySelector('#app h1'); if (h) h.focus({ preventScroll:true }); }, 900); } });
    AC.rerender();
    if (loading === 'slow') setTimeout(() => { loading = ''; AC.rerender(); if (o.ready) o.ready(); }, 1400);
    else if (!loading && o.ready) o.ready();
  };
})();
