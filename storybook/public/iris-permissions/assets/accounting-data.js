/* Accounting & Close prototype: one sample data set for every page.
   Rail totals come from the Balance mock (Sep 2026, per currency, never mixed). Everything else is sample data, built deterministically, so every page agrees with every other page.
   Global: window.AC. See assets/accounting-shell.js for navigation, toast, panel and dialog helpers. */
(function () {
  const AC = window.AC = window.AC || {};
  const MINUS = '−';
  const round2 = n => Math.round(n * 100) / 100;
  const sum = (list, f) => round2(list.reduce((n, x) => n + (f ? f(x) : x), 0));

  AC.MINUS = MINUS;
  AC.round2 = round2;
  AC.sum = sum;
  AC.money = (n, cur) => (cur === 'CAD' ? 'CA$' : '$') + Number(Math.abs(n)).toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2 });
  AC.signed = (n, cur) => (round2(n) < 0 ? MINUS : '') + AC.money(n, cur);
  AC.count = n => Number(n).toLocaleString('en-US');
  AC.esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  AC.isoDate = d => '2026-09-' + String(d).replace('Sep ', '').padStart(2, '0');

  /* Small deterministic random, so a reload shows the same numbers. */
  function rng(seed) { let a = seed; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  AC.LEDGER = 'QuickBooks Online';
  AC.MONTH = 'Sep 2026';
  AC.MONTHS = ['Sep 2026', 'Oct 2026'];
  AC.TIMEZONE = 'America/Chicago';

  /* ---------- Rails ---------- */
  AC.RAILS = [
    { id:'shopify', tab:'shopify', name:'Shopify Payments', prefix:'Sh', schema:'shopify_data_v2', acct:'shop_9021…', start:41210.55, end:37493.82, gross:412680.00, refunds:13940.25, fees:10041.68, tax:295.90, net:388402.17, payouts:392118.90, n:{ charge:3214, refund:96, dispute:0, fee:3214, payout:12 }, ordersEnding:37493.82, lagDays:7 },
    { id:'stripe', tab:'stripe', name:'Stripe', prefix:'St', schema:'stripe_data_v2', acct:'acct_1Qx7…', start:12004.10, end:10214.55, gross:101240.00, refunds:2180.30, fees:2651.13, tax:78.12, net:96330.45, payouts:98120.00, n:{ charge:812, refund:14, dispute:0, fee:812, payout:19 }, ordersEnding:null },
    { id:'paypal', tab:'paypal', name:'PayPal', prefix:'Pp', schema:'paypal_data', acct:'pp_4410…', start:3318.72, end:4723.32, gross:30410.00, refunds:620.40, fees:859.67, tax:25.33, net:28904.60, payouts:27500.00, n:{ charge:246, refund:6, dispute:0, fee:246, payout:8 }, ordersEnding:4723.32 },
    { id:'amazon', tab:'amazon', name:'Amazon', reserve:true, prefix:'Am', schema:'amazon_data', acct:'A2EU8Z…', start:9640.00, end:11072.26, gross:66310.00, refunds:1905.62, fees:9900.27, tax:291.73, net:54212.38, payouts:52780.12, n:{ charge:538, refund:22, dispute:0, fee:538, payout:6 }, ordersEnding:11072.26, lagDays:30 },
    { id:'tiktok', tab:'tiktok', name:'TikTok Shop', reserve:true, prefix:'Tk', schema:'tiktok_data', acct:'tts_7731…', start:1250.00, end:1565.20, gross:9180.00, refunds:316.80, fees:920.86, tax:27.14, net:7915.20, payouts:7600.00, n:{ charge:84, refund:4, dispute:0, fee:84, payout:5 }, ordersEnding:1518.00, lagDays:21 },
    { id:'paypal_cad', tab:'paypal', name:'PayPal', cur:'CAD', prefix:'Ca', schema:'paypal_data', acct:'pp_4410…', start:812.40, end:1023.15, gross:5510.00, refunds:120.00, fees:174.25, tax:5.00, net:5210.75, payouts:5000.00, n:{ charge:58, refund:1, dispute:0, fee:58, payout:3 }, ordersEnding:1023.15 },
  ];
  /* Org variants, query only, for showing how the section behaves. ?org=onerail ?org=norails ?org=noduck */
  const params = typeof location === 'undefined' ? new URLSearchParams('') : new URLSearchParams(location.search);
  AC.ORG = params.get('org') || '';
  if (AC.ORG === 'onerail') AC.RAILS = AC.RAILS.filter(r => r.id === 'stripe');
  if (AC.ORG === 'norails' || AC.ORG === 'noduck') AC.RAILS = [];
  /* ?scenario=anchor: Stripe's opening anchor is missing, so its ending is off from the processor by a constant. */
  AC.SCENARIO = params.get('scenario') || '';
  if (AC.SCENARIO === 'anchor') AC.RAILS.filter(r => r.id === 'stripe').forEach(r => { r.native = 14457.36; });
  AC.rail = id => AC.RAILS.find(r => r.id === id);
  AC.railLabel = r => r.name + (r.cur ? ' ' + r.cur : '');
  AC.CURRENCIES = ['USD', 'CAD'].filter(c => AC.RAILS.some(r => (r.cur || 'USD') === c));
  AC.railsIn = c => AC.RAILS.filter(r => (r.cur || 'USD') === c);

  /* Order, date, gross, fee, payout: the same orders as the Journal entries panels. */
  AC.ORDERS = {
    shopify: [['#48102','Sep 1',148.00,4.59,'po_8Kd2'],['#48733','Sep 19',140.00,4.36,'po_9Zm4'],['#48921','Sep 24',148.00,4.59,'po_A1c7'],['#49102','Sep 28',164.00,5.06,null],['#48342','Sep 9',264.00,8.18,null]],
    stripe: [['#48120','Sep 1',148.00,4.00,'po_St11'],['#48260','Sep 6',96.00,2.59,'po_St14'],['#48640','Sep 16',140.00,3.78,'po_St19'],['#48995','Sep 28',148.00,4.00,'po_St90'],['#49131','Sep 29',112.00,3.02,null]],
    paypal: [['#48140','Sep 2',96.00,2.78,'po_Pp03'],['#48450','Sep 11',148.00,4.29,'po_Pp07'],['#48850','Sep 23',140.00,4.06,'po_Pp12'],['#49146','Sep 29',88.00,2.55,null]],
    amazon: [['#48555','Sep 13',148.00,22.79,'po_Am21'],['#49118','Sep 28',89.50,13.78,null],['#49177','Sep 30',54.00,8.32,null]],
    tiktok: [['#47912','Sep 1',96.00,9.89,null],['#48300','Sep 7',96.00,9.89,'po_Tk02'],['#48720','Sep 19',148.00,15.24,'po_Tk05']],
    paypal_cad: [['#48166','Sep 3',128.00,3.71,'po_Ca02'],['#48511','Sep 12',196.00,5.68,'po_Ca05'],['#48877','Sep 24',186.00,5.39,'po_Ca09'],['#49163','Sep 29',96.00,2.78,null]],
  };
  /* Payout id, date, amount, orders: the same payouts as Balance and Journal entries show first. */
  const KNOWN_PAYOUTS = {
    shopify: [['po_8Kd2','Sep 5',48210.44,412],['po_9Zm4','Sep 21',44902.17,388],['po_A1c7','Sep 26',46118.30,401]],
    stripe: [['po_St11','Sep 4',11240.60,96],['po_St14','Sep 11',10318.25,88],['po_St19','Sep 18',12004.90,101]],
    paypal: [['po_Pp03','Sep 8',7800.00,64],['po_Pp07','Sep 15',6900.00,58],['po_Pp12','Sep 24',8400.00,71]],
    amazon: [['po_Am21','Sep 14',17940.12,172],['po_Am24','Sep 28',18320.00,181]],
    tiktok: [['po_Tk02','Sep 8',2600.00,29],['po_Tk05','Sep 22',2800.00,31]],
    paypal_cad: [['po_Ca02','Sep 9',1600.00,18],['po_Ca05','Sep 17',1800.00,21],['po_Ca09','Sep 26',1600.00,19]],
  };

  /* ---------- Settlements: every payout of the month, summing to the rail's total. ---------- */
  function buildSettlements() {
    const out = [];
    AC.RAILS.forEach((r, ri) => {
      const rand = rng(1000 + ri * 77);
      const known = KNOWN_PAYOUTS[r.id].slice();
      const rest = r.n.payout - known.length;
      const usedDays = known.map(p => Number(p[1].replace('Sep ', '')));
      const leftAmount = round2(r.payouts - sum(known, p => p[2]));
      const leftOrders = r.n.charge - known.reduce((n, p) => n + p[3], 0);
      const weights = Array.from({ length:rest }, () => 0.6 + rand());
      const weightSum = weights.reduce((a, b) => a + b, 0);
      const windows = known.map(p => { const linked = AC.ORDERS[r.id].filter(o => o[4] === p[0]).map(o => Number(o[1].replace('Sep ', ''))); const day = Number(p[1].replace('Sep ', '')); return [linked.length ? Math.min(...linked) : day, day]; });
      const free = []; for (let d = 2; d <= 29; d += 1) if (!usedDays.includes(d) && !windows.some(w => d >= w[0] && d <= w[1])) free.push(d);
      let amountLeft = leftAmount, ordersLeft = leftOrders;
      const rows = known.map(p => ({ id:p[0], date:p[1], amount:p[2], orders:p[3] }));
      for (let i = 0; i < rest; i += 1) {
        const day = free[Math.floor((i + 0.5) * free.length / rest)];
        const amount = i === rest - 1 ? amountLeft : round2(leftAmount * weights[i] / weightSum);
        const orders = i === rest - 1 ? ordersLeft : Math.round(leftOrders * weights[i] / weightSum);
        amountLeft = round2(amountLeft - amount);
        ordersLeft -= orders;
        rows.push({ id:'po_' + r.prefix + String(40 + i), date:'Sep ' + day, amount, orders });
      }
      rows.sort((a, b) => Number(a.date.replace('Sep ', '')) - Number(b.date.replace('Sep ', '')));
      const rr = r.refunds / r.gross, rf = r.fees / r.gross, rt = r.tax / r.gross;
      rows.forEach((p, i) => {
        const isBreak = p.id === 'po_Tk05';
        const expected = isBreak ? round2(p.amount + 47.20) : p.amount;
        const cadRefund = r.id === 'paypal_cad' ? (p.id === 'po_Ca02' ? r.refunds : 0) : null;
        const gross = cadRefund === null ? round2(expected / (1 - rr - rf - rt)) : round2((expected + cadRefund) / (1 - rf - rt));
        const refunds = cadRefund === null ? round2(gross * rr) : cadRefund, tax = round2(gross * rt);
        const fees = round2(gross - refunds - tax - expected);
        const prev = i ? Number(rows[i - 1].date.replace('Sep ', '')) : 0;
        const day = Number(p.date.replace('Sep ', ''));
        out.push({
          id:p.id, rail:r.id, channel:AC.railLabel(r), cur:r.cur, date:p.date,
          from:i ? 'Sep ' + prev : 'Aug 30', to:'Sep ' + Math.max(day - 1, 1),
          status:isBreak ? 'break' : 'paid', orders:p.orders,
          gross, refunds, chargebacks:0, fees, tax, reserves:0, adjustments:0,
          reportedNet:p.amount, expectedNet:expected, diff:isBreak ? -47.20 : 0,
        });
      });
      /* What sits in the processor at month end is the next payout. */
      const pendingNet = round2(r.end - (r.id === 'stripe' ? 1238.97 : 0));
      const pendingRr = r.id === 'paypal_cad' ? 0 : rr;
      const pendingGross = round2(pendingNet / (1 - pendingRr - rf - rt));
      const pendingRefunds = round2(pendingGross * pendingRr), pendingTax = round2(pendingGross * rt);
      out.push({ id:'po_' + r.prefix + 'P1', rail:r.id, channel:AC.railLabel(r), cur:r.cur, date:'Oct 2', from:rows[rows.length - 1].date, to:'Sep 30', status:'pending', orders:Math.max(1, Math.round(r.n.charge * r.end / r.net)), gross:pendingGross, refunds:pendingRefunds, chargebacks:0, fees:round2(pendingGross - pendingRefunds - pendingTax - pendingNet), tax:pendingTax, reserves:0, adjustments:0, reportedNet:null, expectedNet:pendingNet, diff:0 });
    });
    /* One failed payout: sample of the third data status. Not counted in the rail's paid total. */
    if (AC.rail('stripe')) out.push({ id:'po_St90', rail:'stripe', channel:'Stripe', date:'Sep 29', from:'Sep 28', to:'Sep 28', status:'failed', failureCode:'account_closed', failureText:'Bank account closed', orders:9, gross:1302.11, refunds:28.04, chargebacks:0, fees:34.10, tax:1.00, reserves:0, adjustments:0, reportedNet:null, expectedNet:1238.97, diff:0 });
    return out;
  }
  AC.SETTLEMENTS = buildSettlements();
  AC.settlement = id => AC.SETTLEMENTS.find(s => s.id === id);
  AC.settlementsOf = railId => AC.SETTLEMENTS.filter(s => s.rail === railId);
  AC.paidSettlements = railId => AC.settlementsOf(railId).filter(s => s.status === 'paid' || s.status === 'break');
  AC.SETTLEMENT_STATUS = { paid:'Paid', pending:'Pending', failed:'Failed', break:'Break' };

  /* ---------- Events: the same rows as the Balance panels, one list for the Events page. ---------- */
  const taxOf = fee => round2(fee * 0.0286);
  const dayOf = d => Number(String(d).replace('Sep ', ''));
  function firstPayoutAfter(r, day) { const list = AC.paidSettlements(r.id); return (list.find(s => s.date.startsWith('Sep') && dayOf(s.date) > day) || list[list.length - 1]).id; }
  const ev = (r, date, txn, desc, amount, fee, tax, net, payout, status, cat, source, order) => ({ rail:r.id, channel:AC.railLabel(r), cur:r.cur, date, txn, desc, amount, fee, tax, net, payout, status, cat, source, order, schema:r.schema });
  AC.eventRows = (r, kind) => {
    const o = AC.ORDERS[r.id];
    const charge = x => { const tax = taxOf(x[3]); const d = x[0].slice(1); return ev(r, x[1], 'txn_' + d, 'Charge', x[2], -x[3], -tax, round2(x[2] - x[3] - tax), x[4], x[4] ? 'Available' : 'Pending', 'charge', 'ch_' + d, x[0]); };
    const refund = () => {
      if (r.id === 'paypal_cad') return [ev(r, 'Sep 6', 'txn_48166r', 'Refund for charge', -120, 0, 0, -120, 'po_Ca02', 'Available', 'refund', 're_48166', '#48166')];
      return o.filter(x => x[4] && !['#48733', '#48921'].includes(x[0])).slice(0, 2).map(x => { const d = x[0].slice(1); const day = Math.min(30, dayOf(x[1]) + 3); const po = firstPayoutAfter(r, day); const amount = Math.min(x[2], (AC.settlement(po) || {}).refunds || x[2]); return ev(r, 'Sep ' + day, 'txn_' + d + 'r', 'Refund for charge', -amount, 0, 0, -amount, po, 'Available', 'refund', 're_' + d, x[0]); });
    };
    if (kind === 'charge') return o.map(charge);
    if (kind === 'refund') return refund();
    if (kind === 'fee') return o.map(x => { const d = x[0].slice(1); return ev(r, x[1], 'txn_' + d + 'f', 'Processing fee', -x[3], 0, 0, -x[3], x[4], x[4] ? 'Available' : 'Pending', 'fee', 'ch_' + d, x[0]); });
    if (kind === 'tax') return o.map(x => { const d = x[0].slice(1); const t = taxOf(x[3]); return ev(r, x[1], 'txn_' + d + 't', 'Tax on fee', -t, 0, 0, -t, x[4], x[4] ? 'Available' : 'Pending', 'tax', 'ch_' + d, x[0]); });
    if (kind === 'payout') return AC.paidSettlements(r.id).map(s => ev(r, s.date, 'txn_' + s.id.replace('po_', '') + 'p', 'Payout', -s.reportedNet, 0, 0, -s.reportedNet, s.id, 'Paid', 'payout', s.id));
    return [charge(o[0]), refund()[0]];
  };
  AC.CATEGORIES = [['charge','Charges'],['refund','Refunds'],['fee','Fees'],['tax','Tax'],['payout','Payouts']];
  AC.kindTotal = (r, kind) => ({ activity:r.net, charge:r.gross, refund:-r.refunds, fee:-r.fees, tax:-r.tax, payout:-r.payouts })[kind];
  AC.kindCount = (r, kind) => ({ activity:r.n.charge + r.n.refund, charge:r.n.charge, refund:r.n.refund, fee:r.n.fee, tax:r.n.fee, payout:r.n.payout })[kind];
  AC.allEvents = () => AC.RAILS.flatMap(r => AC.CATEGORIES.flatMap(c => AC.eventRows(r, c[0]))).sort((a, b) => dayOf(a.date) - dayOf(b.date) || a.txn.localeCompare(b.txn));
  AC.totalEventCount = () => AC.RAILS.reduce((n, r) => n + r.n.charge + r.n.refund + r.n.fee + r.n.fee + r.n.payout, 0);
  /* The raw row behind an event, in the mock's fields. */
  AC.sourcePairs = e => {
    const cents = v => String(Math.round(v * 100));
    const seed = Number(e.txn.replace(/\D/g, '') || 3);
    return [
      ['raw_schema', e.schema], ['raw_table', 'balance_transactions'], ['raw_pk', e.txn], ['reporting_category', e.cat],
      ['amount / net', cents(e.amount) + ' / ' + cents(e.net)], ['source', e.source],
      ['created', '2026-09-' + String(dayOf(e.date)).padStart(2, '0') + 'T' + String(8 + seed % 12).padStart(2, '0') + ':' + String(seed % 60).padStart(2, '0') + ':11Z'],
    ];
  };

  /* ---------- Reconciliation ---------- */
  /* Order to payment, by channel. Counts and amounts add up to the rail's charges. */
  const ORDER_MATCH = { shopify:{ partial:[12, 1712.40], unmatched:[0, 0], pending:[64, 8216.20] }, stripe:{ partial:[3, 402.10], unmatched:[0, 0], pending:[9, 1116.30] }, paypal:{ partial:[1, 96.00], unmatched:[0, 0], pending:[4, 498.60] }, amazon:{ partial:[6, 712.80], unmatched:[0, 0], pending:[41, 4966.10] }, tiktok:{ partial:[2, 188.40], unmatched:[0, 0], pending:[5, 512.70] }, paypal_cad:{ partial:[0, 0], unmatched:[0, 0], pending:[1, 186.00] } };
  AC.checkpointOrders = () => AC.RAILS.map(r => { const m = ORDER_MATCH[r.id]; const p = AC.settlementsOf(r.id).find(s => s.status === 'pending'); const pending = [p.orders, p.gross]; const count = r.n.charge - m.partial[0] - m.unmatched[0] - pending[0]; const amount = round2(r.gross - m.partial[1] - m.unmatched[1] - pending[1]); return { rail:r.id, channel:AC.railLabel(r), cur:r.cur, matched:[count, amount], partial:m.partial, unmatched:m.unmatched, pending }; });
  AC.OTHER_PAYMENTS = { channel:'Other payments', count:12, amount:4318.60, parts:[['Afterpay', 7, 2140.00], ['Shop Cash', 4, 1338.60], ['Authorize.net', 1, 840.00]] };
  /* Payment to settlement, by channel. */
  AC.checkpointSettlements = () => AC.RAILS.map(r => { const list = AC.settlementsOf(r.id); const pick = st => list.filter(s => s.status === st); const paid = pick('paid'), brk = pick('break'), pend = pick('pending'), fail = pick('failed'); return { rail:r.id, channel:AC.railLabel(r), cur:r.cur, matched:[paid.length, sum(paid, s => s.reportedNet)], partial:[brk.length, sum(brk, s => s.reportedNet)], unmatched:[fail.length, sum(fail, s => s.expectedNet)], pending:[pend.length, sum(pend, s => s.expectedNet)] }; });
  /* Clearing roll-forward with a daily balance for the sparkline. */
  AC.rollForward = () => AC.RAILS.map((r, i) => {
    const rand = rng(5000 + i * 13), days = 30, series = [r.start];
    for (let d = 1; d < days; d += 1) { const pull = r.start + (r.end - r.start) * d / days; const swing = Math.max(Math.abs(r.start), Math.abs(r.end)) * 0.22 * (rand() - 0.5); series.push(round2(pull + swing)); }
    series.push(r.end);
    return { rail:r.id, channel:AC.railLabel(r), cur:r.cur, opening:r.start, netNew:r.net, settledOut:-r.payouts, adjustments:0, ending:r.end, unexplained:r.native !== undefined ? round2(r.native - r.end) : r.ordersEnding !== null && r.ordersEnding !== undefined ? round2(r.ordersEnding - r.end) : 0, series };
  });

  /* ---------- Exceptions, types from DP-1675 in plain labels ---------- */
  AC.EXCEPTION_TYPES = { settlement_waterfall_break:'Settlement break', order_unmatched_payment:'Unmatched payment', order_unpaid_beyond_lag:'Unpaid past lag', settlement_pending_overdue:'Pending past lag', balance_rollforward_break:'Roll-forward break', processor_balance_mismatch:'Processor mismatch', payout_unlinked_events:'Unlinked events', reserve_not_released:'Reserve not released', payout_failed:'Failed payout' };
  AC.EXCEPTION_STATUS = { open:'Open', investigating:'Investigating', resolved:'Resolved', accepted:'Accepted' };
  AC.EXCEPTIONS = [
    { id:'ex1', type:'settlement_waterfall_break', severity:'High', amount:47.20, rail:'tiktok', channel:'TikTok Shop', subject:'po_Tk05', link:{ page:'settlements', id:'po_Tk05' }, firstSeen:'Sep 23', status:'open', assignee:'Unassigned' },
    { id:'ex11', type:'payout_failed', severity:'High', amount:1238.97, rail:'stripe', channel:'Stripe', subject:'po_St90', link:{ page:'settlements', id:'po_St90' }, firstSeen:'Sep 29', status:'open', assignee:'Unassigned' },
    { id:'ex2', type:'order_unmatched_payment', severity:'Medium', amount:2140.00, channel:'Afterpay', subject:'7 payments', link:{ page:'journal' }, firstSeen:'Sep 4', status:'open', assignee:'Unassigned' },
    { id:'ex3', type:'order_unmatched_payment', severity:'Medium', amount:1338.60, channel:'Shop Cash', subject:'4 payments', link:{ page:'journal' }, firstSeen:'Sep 9', status:'open', assignee:'Unassigned' },
    { id:'ex4', type:'order_unmatched_payment', severity:'Low', amount:840.00, channel:'Authorize.net', subject:'1 payment', link:{ page:'journal' }, firstSeen:'Sep 12', status:'investigating', assignee:'You' },
    { id:'ex5', type:'order_unpaid_beyond_lag', severity:'Medium', amount:264.00, rail:'shopify', channel:'Shopify Payments', subject:'#48342', firstSeen:'Sep 17', status:'open', assignee:'Unassigned' },
    { id:'ex6', type:'payout_unlinked_events', severity:'Low', amount:18.40, rail:'paypal', channel:'PayPal', subject:'po_Pp07', link:{ page:'settlements', id:'po_Pp07' }, firstSeen:'Sep 16', status:'investigating', assignee:'You' },
    { id:'ex7', type:'reserve_not_released', severity:'Medium', amount:1250.00, rail:'amazon', channel:'Amazon', subject:'Reserve of Aug 2026', firstSeen:'Sep 1', status:'open', assignee:'Unassigned' },
    { id:'ex8', type:'order_unpaid_beyond_lag', severity:'Low', amount:96.00, rail:'tiktok', channel:'TikTok Shop', subject:'#47912', firstSeen:'Sep 22', status:'accepted', assignee:'You', note:'Paid in October.' },
    { id:'ex9', type:'settlement_pending_overdue', severity:'Low', amount:(AC.settlement('po_Am40') || {}).reportedNet || 0, rail:'amazon', channel:'Amazon', subject:'po_Am40', link:{ page:'settlements', id:'po_Am40' }, firstSeen:'Sep 2', status:'resolved', assignee:'You' },
  ];

  if (AC.SCENARIO === 'anchor') AC.EXCEPTIONS.unshift({ id:'ex10', type:'processor_balance_mismatch', severity:'High', amount:4242.81, rail:'stripe', channel:'Stripe', subject:'Ending balance', firstSeen:'Sep 30', status:'open', assignee:'Unassigned' });
  AC.EXCEPTIONS = AC.EXCEPTIONS.filter(ex => (ex.rail ? !!AC.rail(ex.rail) : AC.RAILS.length > 1 && AC.ORG !== 'clean'));

  /* ---------- Close ---------- */
  AC.PERIODS = [
    { month:'Oct 2026', status:'open' },
    { month:'Sep 2026', status:'in_review' },
    { month:'Aug 2026', status:'closed', lockedAt:'Sep 9, 2026', lockedBy:'You' },
    { month:'Jul 2026', status:'closed', lockedAt:'Aug 8, 2026', lockedBy:'You' },
  ];
  AC.PERIOD_STATUS = { open:'Open', in_review:'In review', closed:'Closed' };

  /* ---------- Settings: recommended account per source system and bucket ---------- */
  const clearing = r => (r.cur === 'CAD' ? 'PayPal CAD' : r.name) + ' clearing';
  AC.ACCOUNTS = ['Shopify Payments clearing','Stripe clearing','PayPal clearing','Amazon clearing','TikTok Shop clearing','Other clearing','Afterpay clearing','Shop Cash clearing','Authorize.net clearing','Bank','Sales','Refunds and returns','Fees in COGS','Fees below gross profit','Deferred revenue','Deferred COGS','COGS','COGS: Testers','COGS: Customer service','Discounts','Inventory'];
  AC.MAPPING = AC.RAILS.filter(r => !r.cur).flatMap(r => [
    { source:r.name, bucket:'Charges', debit:clearing(r), credit:'Sales', from:'Jan 1, 2026' },
    { source:r.name, bucket:'Refunds', debit:'Refunds and returns', credit:clearing(r), from:'Jan 1, 2026' },
    { source:r.name, bucket:'Disputes', debit:r.id === 'tiktok' ? '' : 'Refunds and returns', credit:r.id === 'tiktok' ? '' : clearing(r), from:'Jan 1, 2026' },
    { source:r.name, bucket:'Fees', debit:'Fees in COGS', credit:clearing(r), from:'Jan 1, 2026' },
    { source:r.name, bucket:'Tax', debit:'Fees in COGS', credit:clearing(r), from:'Jan 1, 2026' },
    { source:r.name, bucket:'Payouts', debit:'Bank', credit:clearing(r), from:'Jan 1, 2026' },
  ]);

  /* ---------- Totals used on more than one page ---------- */
  AC.totals = c => { const list = AC.railsIn(c); return { gross:sum(list, r => r.gross), refunds:sum(list, r => r.refunds), fees:sum(list, r => r.fees), tax:sum(list, r => r.tax), net:sum(list, r => r.net), payouts:sum(list, r => r.payouts), start:sum(list, r => r.start), end:sum(list, r => r.end) }; };

  /* ---------- State shared across pages. A reload starts the whole demo over. ---------- */
  const KEY = 'ac-state' + AC.ORG + (params.get('closed') === '1' ? '-closed' : '');
  AC.VIEW_ONLY = params.get('role') === 'view';
  const JOURNAL_SEED = { onerail:[0, 1], norails:[0, 0], noduck:[0, 0], nodefer:[2, 8], nocogs:[4, 9], clean:[0, 9] }[AC.ORG] || [5, 9];
  const blank = () => ({ exceptions:{}, closed:{}, journal:{ open:JOURNAL_SEED[0], items:JOURNAL_SEED[0], total:JOURNAL_SEED[1], posted:0, failed:0, reversed:0 }, mapping:{} });
  let reloaded = false;
  try { const nav = performance.getEntriesByType('navigation')[0]; reloaded = !!nav && nav.type === 'reload'; } catch (err) { reloaded = false; }
  function read() { try { const raw = sessionStorage.getItem(KEY); return raw ? Object.assign(blank(), JSON.parse(raw)) : blank(); } catch (err) { return blank(); } }
  AC.reloaded = reloaded;
  if (reloaded) { try { sessionStorage.removeItem(KEY); sessionStorage.removeItem('pm-journal-state'); sessionStorage.removeItem('ac-month'); } catch (err) { /* nothing to clear */ } }
  AC.state = read();
  AC.save = () => { try { sessionStorage.setItem(KEY, JSON.stringify(AC.state)); } catch (err) { /* private window: this page only */ } };
  AC.exceptionStatus = ex => (AC.state.exceptions[ex.id] && AC.state.exceptions[ex.id].status) || ex.status;
  AC.exceptionNote = ex => (AC.state.exceptions[ex.id] && AC.state.exceptions[ex.id].note) || ex.note || '';
  AC.exceptionAssignee = ex => (AC.state.exceptions[ex.id] && AC.state.exceptions[ex.id].assignee) || ex.assignee;
  AC.openExceptions = () => AC.EXCEPTIONS.filter(ex => ['open', 'investigating'].includes(AC.exceptionStatus(ex)));
  /* ?closed=1: a month that closed had nothing open. Seeded once, so Reopen lasts. */
  const hadState = (() => { try { return sessionStorage.getItem(KEY) !== null; } catch (err) { return false; } })();
  if (params.get('closed') === '1' && !hadState) {
    AC.state.closed[AC.MONTH] = AC.state.closed[AC.MONTH] || { at:'Oct 8, 2026', by:'You' };
    AC.openExceptions().forEach(ex => { AC.state.exceptions[ex.id] = { status:'accepted', note:ex.note || '', assignee:'You' }; });
    AC.state.journal = Object.assign({}, AC.state.journal, { open:0, posted:AC.state.journal.total, failed:0 });
    AC.save();
  }
  AC.stateRaw = () => { try { return sessionStorage.getItem(KEY); } catch (err) { return null; } };
  /* Always on disk, so Back from the page cache can tell a reload elsewhere from a first visit. */
  if (AC.stateRaw() === null) AC.save();
  AC.periodClosed = month => !!AC.state.closed[month] || (AC.PERIODS.find(p => p.month === month) || {}).status === 'closed';
  AC.periodStatus = month => (AC.state.closed[month] ? 'closed' : (AC.PERIODS.find(p => p.month === month) || {}).status || 'open');
  AC.lockOf = month => AC.state.closed[month] || AC.PERIODS.find(p => p.month === month && p.status === 'closed') && { at:AC.PERIODS.find(p => p.month === month).lockedAt, by:AC.PERIODS.find(p => p.month === month).lockedBy } || null;

  /* ---------- One month close checklist, read by Overview and Close ---------- */
  const exceptionCleared = id => { const ex = AC.EXCEPTIONS.find(x => x.id === id); return !['open', 'investigating'].includes(AC.exceptionStatus(ex)); };
  AC.openBreaks = () => AC.SETTLEMENTS.filter(s => (s.status === 'break' || s.status === 'failed') && !AC.EXCEPTIONS.some(ex => ex.link && ex.link.id === s.id && exceptionCleared(ex.id)));
  const plural = (n, word) => n + ' ' + word + (n === 1 ? '' : 's');
  AC.exceptionOf = id => AC.EXCEPTIONS.find(ex => ex.link && ex.link.id === id);
  AC.breakCleared = id => { const ex = AC.exceptionOf(id); return !!ex && exceptionCleared(ex.id); };
  const settlementFacts = () => {
    const by = st => AC.SETTLEMENTS.filter(s => s.status === st).length;
    const hard = AC.SETTLEMENTS.filter(s => s.status === 'break' || s.status === 'failed');
    const word = st => hard.filter(s => AC.exceptionOf(s.id) && AC.exceptionStatus(AC.exceptionOf(s.id)) === st).length;
    return [[by('paid'), 'paid'], [by('pending'), 'pending'], [word('accepted'), 'accepted'], [word('resolved'), 'resolved']].filter(x => x[0]).map(x => x[0] + ' ' + x[1]).join(' · ');
  };
  AC.closeChecks = month => {
    const LABELS = [['settlements', 'Settlements reconciled'], ['exceptions', 'Exceptions cleared or accepted'], ['posted', 'Journals posted']];
    if (month !== AC.MONTH) {
      const closed = AC.periodClosed(month);
      return LABELS.map(l => ({ id:l[0], label:l[1], done:closed, status:closed ? 'Done' : 'No data', fact:'', page:null, hash:'' }));
    }
    const breaks = AC.openBreaks(), open = AC.openExceptions(), j = AC.state.journal;
    const posted = j.posted, left = j.total - posted;
    return [
      { id:'settlements', label:LABELS[0][1], done:!breaks.length, status:breaks.length ? [plural(breaks.filter(s => s.status === 'break').length, 'break'), breaks.some(s => s.status === 'failed') ? breaks.filter(s => s.status === 'failed').length + ' failed' : ''].filter(x => !x.startsWith('0')).filter(Boolean).join(' · ') : 'Done', fact:breaks.length ? AC.money(sum(breaks, s => (s.status === 'failed' ? s.expectedNet : Math.abs(s.diff)))) : settlementFacts(), page:'settlements', hash:breaks.length === 1 ? '#status=' + breaks[0].status : '' },
      { id:'exceptions', label:LABELS[1][1], done:!open.length, status:open.length ? [open.length - toDecide(open) ? (open.length - toDecide(open)) + ' open' : '', toDecide(open) ? toDecide(open) + ' to decide' : ''].filter(Boolean).join(' · ') : 'Done', fact:open.length ? AC.money(sum(open, ex => ex.amount)) : [[AC.EXCEPTIONS.filter(ex => AC.exceptionStatus(ex) === 'resolved').length, 'resolved'], [AC.EXCEPTIONS.filter(ex => AC.exceptionStatus(ex) === 'accepted').length, 'accepted']].filter(x => x[0]).map(x => x[0] + ' ' + x[1]).join(' · '), page:'exceptions', hash:'' },
      { id:'posted', label:LABELS[2][1], done:!left, status:left ? posted + ' of ' + j.total : 'Done', fact:left ? (j.failed ? j.failed + ' failed' : '') : j.total + ' of ' + j.total, page:'journal', hash:'' },
    ];
  };
  /* Unmatched payments wait for their decision on Journal entries. */
  const toDecide = list => (AC.state.journal.unmatchedDecision ? 0 : list.filter(ex => ex.type === 'order_unmatched_payment').length);
  AC.closeReady = month => AC.closeChecks(month).every(c => c.done);

  /* ---------- Mapping with this session's changes ---------- */
  AC.mappingKey = m => m.source + ':' + m.bucket;
  AC.mappingOf = m => Object.assign({}, m, AC.state.mapping[AC.mappingKey(m)] || {});
  AC.NET_BUCKETS = ['Refunds', 'Disputes', 'Fees', 'Tax'];
  AC.unmapped = () => AC.MAPPING.map(AC.mappingOf).filter(m => !m.debit || (!m.credit && !AC.NET_BUCKETS.includes(m.bucket)));

  /* ---------- Rows behind one settlement ---------- */
  AC.eventsOf = id => AC.allEvents().filter(e => e.payout === id && e.cat !== 'fee' && e.cat !== 'tax');
  AC.settlementEventTotal = s => s.orders + 1;
})();
