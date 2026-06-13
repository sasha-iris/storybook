# Accordion

**Accordion** progressively discloses content — items can be expanded to reveal more detail, keeping the page compact.

Figma source: component set \

## Variants

- Card — shared container
- Card — with icon
- Separate cards
- Only links — minimal
- All styles

## CSS classes

```
.accordion
.accordion-body
.accordion-chevron
.accordion-flush
.accordion-header
.accordion-item
.open
```

## HTML examples

```html
<div class="accordion">

  <!-- Item 1 — expanded: add class "open" to .accordion-item -->
  <div class="accordion-item open">
    <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
      <span style="flex:1;">Can I use the Iris Library in open-source projects?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">
      Generally, it is accepted to use the Iris Library in open-source projects…
    </div>
  </div>

  <!-- Item 2 — collapsed: no "open" class -->
  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
      <span style="flex:1;">How do you achieve the blurry effect?</span>
      <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">
      The blurry effect can be achieved using the CSS backdrop-filter property…
    </div>
  </div>

</div>
```

```html
<!-- Active item with icon inside .accordion-header -->
<div class="accordion-item open">
  <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
    <span style="flex-shrink:0;display:flex;align-items:center;margin-right:8px;">
      <!-- question-mark-circle 18×18 -->
    </span>
    <span style="flex:1;">What is this library?</span>
    <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">Body text…</div>
</div>
```

```html
<div style="display:flex;flex-direction:column;gap:16px;">

  <!-- Each item gets its own .accordion wrapper -->
  <div class="accordion">
    <div class="accordion-item open">
      <button class="accordion-header" aria-expanded="true" aria-controls="body-0" id="header-0">
        <span style="flex:1;">What is this library?</span>
        <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="accordion-body" id="body-0" role="region" aria-labelledby="header-0">Body text…</div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <button class="accordion-header" aria-expanded="false" aria-controls="body-1" id="header-1">
        <span style="flex:1;">How do you achieve the blurry effect?</span>
        <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="accordion-body" id="body-1" role="region" aria-labelledby="header-1">Body text…</div>
    </div>
  </div>

</div>
```
