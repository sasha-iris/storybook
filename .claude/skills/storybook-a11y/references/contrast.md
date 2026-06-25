# Contrast measurement via preview_eval

Paste this into `preview_eval` on an open story iframe (port 8021). It computes
WCAG contrast ratios for given element pairs using actual computed styles —
including resolving the effective background by walking up the DOM (elements
are usually `background: transparent`).

```js
(() => {
  // WCAG relative luminance
  const lum = (r, g, b) => {
    const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const parse = (s) => (s.match(/[\d.]+/g) || [255, 255, 255]).slice(0, 4).map(Number);
  const ratio = (c1, c2) => {
    const [r1, g1, b1] = parse(c1), [r2, g2, b2] = parse(c2);
    const l1 = lum(r1, g1, b1), l2 = lum(r2, g2, b2);
    return ((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)).toFixed(2);
  };
  // Effective background: walk up until a non-transparent bg is found
  const bgOf = (el) => {
    for (let n = el; n; n = n.parentElement) {
      const bg = getComputedStyle(n).backgroundColor;
      if (bg && !bg.startsWith('rgba(0, 0, 0, 0')) return bg;
    }
    return 'rgb(255,255,255)';
  };
  // EDIT THIS LIST per family: [label, selector, what to compare]
  const checks = [
    ['button text', '.btn-primary', 'text-vs-bg'],
    ['input placeholder', '.form-input', 'placeholder-vs-bg'],
    ['input border', '.form-input', 'border-vs-page'],
  ];
  return checks.map(([label, sel, mode]) => {
    const el = document.querySelector(sel);
    if (!el) return `${label}: NOT FOUND (${sel})`;
    const cs = getComputedStyle(el);
    let fg, bg;
    if (mode === 'text-vs-bg') { fg = cs.color; bg = bgOf(el); }
    else if (mode === 'placeholder-vs-bg') {
      fg = getComputedStyle(el, '::placeholder').color || cs.color; bg = bgOf(el);
    } else if (mode === 'border-vs-page') {
      fg = cs.borderColor; bg = bgOf(el.parentElement || el);
    }
    return `${label}: ${ratio(fg, bg)}:1 (fg ${fg} on ${bg})`;
  });
})()
```

Thresholds: normal text ≥ 4.5, large text (≥24px or ≥18.7px bold) ≥ 3,
UI component boundaries / states ≥ 3.

Font-size matters for the threshold — read `fontSize`/`fontWeight` from the
same computed style to classify text as normal vs large before judging.
