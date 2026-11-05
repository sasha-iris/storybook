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
    { id:'balance', label:'Balance', href:'balance.html' },
    { id:'settlements', label:'Settlements', href:'accounting-settlements.html' },
    { id:'events', label:'Events', href:'accounting-events.html' },
    { id:'reconciliation', label:'Reconciliation', href:'accounting-reconciliation.html' },
    { id:'exceptions', label:'Exceptions', href:'accounting-exceptions.html' },
    { id:'journal', label:'Journal entries', href:'journal-entries.html' },
    { id:'close', label:'Close', href:'accounting-close.html' },
    { id:'settings', label:'Settings', href:'accounting-settings.html' },
  ];
  const hrefOf = page => {
    const p = AC.PAGES.find(x => x.id === page);
    return p ? p.href + location.search.replace(/[?&]v=\d+/, '') : '#';
  };
  AC.hrefOf = hrefOf;

  AC.navHtml = current => {
    const sep = AC.month() === AC.MONTH;
    const counts = { exceptions:sep ? AC.openExceptions().length : 0, journal:sep ? AC.state.journal.open : 0 };
    const words = { exceptions:'open', journal:'to decide' };
    return `<nav class="ac-nav" aria-label="Accounting">${AC.PAGES.map(p => `<a class="ac-nav__item" href="${hrefOf(p.id)}"${p.id === current ? ' aria-current="page"' : ''}>${esc(p.label)}${counts[p.id] ? `<span class="ac-nav__count"><span class="ac-sr">, </span>${counts[p.id]}<span class="ac-sr"> ${words[p.id]}</span></span>` : (words[p.id] ? '<span class="ac-nav__count" style="visibility:hidden;" aria-hidden="true">0</span>' : '')}</a>`).join('')}</nav>`;
  };

  /* ---------- Month: one value across the section ---------- */
  AC.month = () => { try { return sessionStorage.getItem('ac-month') || AC.MONTH; } catch (err) { return AC.MONTH; } };
  AC.setMonth = m => { try { sessionStorage.setItem('ac-month', m); } catch (err) { /* this page only */ } };
  AC.monthSelect = () => `<select class="form-input form-select ac-select ac-w120" aria-label="Month" id="monthSelect" data-key="monthSelect" autocomplete="off">${AC.MONTHS.map(m => `<option${AC.month() === m ? ' selected' : ''}>${esc(m)}</option>`).join('')}</select>`;

  AC.pageHead = o => { const here = AC.PAGES.find(p => p.id === o.current); if (here) document.title = here.label + ' · Accounting'; return `<div class="ac-top"><div class="ac-head"><h1 class="ac-head__title" tabindex="-1" data-key="pageTitle">Accounting${here ? `<span class="ac-sr">: ${esc(here.label)}</span>` : ''}</h1>${o.noMonth ? '' : AC.monthSelect()}<span class="ac-note">${esc(AC.TIMEZONE)} · Sample data</span><div class="ac-actions">${o.actions || ''}</div></div>${AC.navHtml(o.current)}</div>`; };

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
  document.addEventListener('focusin', e => { const w = e.target.closest && e.target.closest('.ac-wrap'); if (!w) return; const r = e.target.getBoundingClientRect(), b = w.getBoundingClientRect(); if (r.left < b.left + 4) w.scrollLeft -= b.left + 4 - r.left; else if (r.right > b.right - 4) w.scrollLeft += r.right - b.right + 4; });

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
    if (first) { const origin = lastClick && lastClick.closest ? lastClick.closest('[data-drill]') : null; if (origin) origin.classList.add(origin.matches('.ac-kv__row') ? 'ac-kv__row--sel' : 'ac-row--sel'); }
    document.body.classList.add('ac-panel-open');
    const count = o.count !== undefined && o.count !== null ? ` <span class="ac-muted">(${AC.count(o.count)})</span>` : '';
    const host = document.getElementById('modalHost');
    host.innerHTML = `<div class="ac-backdrop" id="modalBackdrop"><aside role="dialog" aria-modal="true" aria-labelledby="modalTitle" class="ac-panel">
      <div class="ac-panel__head"><div style="min-width:0;"><div class="ac-panel__label" id="modalTitle">${esc(o.title)}${count}</div>${o.amount ? `<div class="ac-panel__value">${esc(o.amount)}</div>` : ''}${o.meta ? `<div class="ac-note">${esc(o.meta)}</div>` : ''}</div><div class="ac-actions">${o.actions || ''}${o.onExport ? '<button type="button" class="btn btn-neutral btn-sm" id="panelExport">Export CSV</button>' : ''}<button type="button" class="modal-close" id="modalClose" aria-label="Close panel">${CLOSE_ICON}</button></div></div>
      <div class="ac-panel__body" id="panelBody">${o.body}</div></aside></div>`;
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
  AC.sourceRow = pairs => `<div class="ac-source"><div class="ac-source__head"><span>Source row</span><span class="ac-actions"><span class="ac-note">Sample data</span><button type="button" class="btn btn-neutral btn-sm ac-btn-row" data-copy-source>Copy</button></span></div><dl>${pairs.map(p => `<dt>${esc(p[0])}</dt><dd>${esc(p[1])}</dd>`).join('')}</dl></div>`;

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
    if (AC.ORG === 'noduck') return `<section class="ac-card"><div class="ac-empty"><h2 class="ac-empty__title">DuckDB not enabled for this org</h2></div></section>`;
    if (AC.ORG === 'norails' && current !== 'settings') return `<section class="ac-card"><div class="ac-empty"><h2 class="ac-empty__title">No rails connected</h2><a class="btn btn-neutral btn-sm" href="custom-groups.html#connections">Go to Connections</a></div></section>`;
    return '';
  };
  AC.skeletonHtml = () => `<section class="ac-card" role="status"><span class="ac-sr">Loading</span><div class="ac-wrap" style="padding-top:12px;"><table class="ac-table"><colgroup><col><col class="ac-col-money"><col class="ac-col-money"><col class="ac-col-money-l"><col class="ac-col-money"><col class="ac-col-status"></colgroup><tbody>${Array.from({ length:8 }, () => `<tr><td><span class="ac-skel" style="--w:120px;"></span></td>${[72, 88, 88, 72].map(w => `<td class="ac-num"><span class="ac-skel" style="--w:${w}px;"></span></td>`).join('')}<td class="ac-right"><span class="ac-skel" style="--w:32px;"></span></td></tr>`).join('')}</tbody></table></div></section>`;
  AC.errorCard = () => `<section class="ac-card" role="alert"><div class="ac-empty"><h2 class="ac-empty__title">Could not load ${esc(AC.month())}</h2><button type="button" class="btn btn-neutral btn-sm" id="acRetry" data-key="acRetry">Try again</button></div></section>`;
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
    document.querySelectorAll('.pm-rail__item[title="Settings"], .pm-rail__item[title="Connections"]').forEach(b => { b.onclick = null; b.setAttribute('tabindex', '-1'); b.setAttribute('aria-disabled', 'true'); });
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
        const text = [...document.querySelectorAll('.ac-source dt')].map(d => d.textContent + ': ' + d.nextElementSibling.textContent).join('\n');
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
    document.addEventListener('click', e => { if (e.target.closest('#acRetry')) { loading = 'slow'; AC.rerender(); setTimeout(() => { loading = ''; AC.rerender(); if (o.ready) o.ready(); const h = document.querySelector('.ac-head__title'); if (h) h.focus({ preventScroll:true }); }, 900); } });
    AC.rerender();
    if (loading === 'slow') setTimeout(() => { loading = ''; AC.rerender(); if (o.ready) o.ready(); }, 1400);
    else if (!loading && o.ready) o.ready();
  };
})();
