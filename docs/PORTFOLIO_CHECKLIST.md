# GitHub portfolio — build checklist

Goal: a stranger lands on the GitHub profile and, within 30 seconds, understands what
this designer does, sees the work running live, and can read three case studies that
show decisions rather than screenshots.

Owner: Claude runs everything marked **[C]**. Items marked **[O]** need the repo owner's
own GitHub account and cannot be done from here.

Public surface today: `github.com/sasha-iris/storybook` (only public repo) and its Pages
site `https://sasha-iris.github.io/storybook/`. Anything placed in `storybook/public/`
is served at the Pages root — that is where the portfolio pages go.

---

## Phase 0 — Safety, before anything is published

- [ ] **[O]** Revoke the personal access token stored in plain text in `.git/config`
      (remote `sasha-iris`), at github.com/settings/tokens.
- [x] **[C]** Drop that remote; keep `origin` on SSH.
- [x] **[C]** Audit tracked files for secrets, third-party names, and internal notes.
- [x] **[C]** Remove `.DS_Store` from tracking; extend `.gitignore`.

## Phase 0 addendum — done in the same pass

- [x] **[C]** Client stakeholder anonymised: 239 name occurrences across 33 published and
      source files replaced with a role ("the product owner"). All were inside code comments,
      so no rendered page changed; the reasoning they carry is kept.
- [x] **[C]** Six Ukrainian client quotes in comments rendered into English, per the
      English-only rule.
- [x] **[C]** Built output `storybook/storybook-static/` untracked — CI rebuilds it every push,
      and the committed copy carried a 1.4 MB minified bundle.
- [x] **[C]** Session logs moved to `docs/`, so the repo root reads as a project.
- [x] **[C]** Dead development comments removed from published pages (localhost base-tag
      notes, references to a file that is not in the repo).
- [ ] **[O]** Still open: two published prototype URLs at the site root serve a July build,
      while `pages/` serves September. Left alone because those root URLs were shared with the
      client — see the handoff note for the redirect option.

## Phase 1 — The front door

- [x] **[C]** Root `README.md`: what this is, the live links, the three case studies,
      how it is built. This is the page a recruiter actually reads.
- [x] **[C]** `storybook/public/portfolio/index.html` — portfolio landing: short intro,
      three case studies, link to the live design system and to the prototypes.
- [x] **[C]** `storybook/public/pages/index.html` — prototype index, one line of context
      per prototype, so the loose URLs stop being loose.
- [ ] **[O]** Profile: real name, one-line bio, link to the portfolio page.
- [ ] **[O]** Repo: description + homepage set to the portfolio URL.

## Phase 2 — Three case studies

Each page follows one structure: problem → constraints → decisions (with the reasoning,
including what was rejected) → evidence → how it was handed to engineering.

- [x] **[C]** Case 1 — Iris Design System (296 stories, 47 component families, tokens,
      accessibility fixes made at library level, docs for developers).
- [x] **[C]** Case 2 — Customer Segments redesign (research into product conventions,
      two variants, stakeholder review closed point by point).
- [x] **[C]** Case 3 — P&L UX refinement (dense financial UI, comparison treatments,
      edit mode, assumptions panel).
- [x] **[C]** Every number on those pages traced to a source file. Nothing invented.
- [ ] **[C]** Prose through the humanizer pass.

## Phase 3 — Quality gate (non-negotiable, this is a design portfolio)

- [ ] **[C]** `review-ux` on the portfolio pages.
- [ ] **[C]** `a11y-review` — measured contrast, keyboard reachability, semantics.
      A portfolio that fails its own accessibility claims is worse than no portfolio.
- [ ] **[C]** Responsive check at 375 / 768 / desktop.
- [ ] **[C]** Dark and light rendering.
- [ ] **[C]** Every link on every new page resolves (no 404s into the Storybook build).

## Phase 4 — Publish

- [ ] **[C]** Commit locally, grouped into readable commits.
- [ ] **[O]** Explicit go-ahead to push — push deploys the live site.
- [ ] **[C]** After push: confirm the Pages workflow ran and the new URLs return 200.

## Deliberately out of scope

- The `vwd/`, `brochure/`, and `iris-examples/` directories stay local. Their content
  feeds the case studies; the raw working repos are not published.
- No new prototypes are built. This job is packaging what already exists.

---

## Paste-ready copy for the manual steps

These need the owner's GitHub account and cannot be done from a shell.

**Repository → About (top right of github.com/sasha-iris/storybook)**

- Description: `Design system for a financial analytics product — 47 components, 249 stories — with the prototypes built on it and the case studies behind them.`
- Website: `https://sasha-iris.github.io/storybook/portfolio/`
- Topics: `design-system` `storybook` `accessibility` `design-tokens` `product-design` `prototypes`
- Tick "Use your GitHub Pages website" if offered, and pin the repository on the profile.

**Profile → Edit profile**

- Name: `Oleksandra Melnyk`
- Bio: `Product designer. Dense financial software, design systems, and prototypes I build myself.`
- Website: `https://sasha-iris.github.io/storybook/portfolio/`

**Do not rename the repository.** The Pages URL is derived from its name, and the prototype
links already sent to the client would all break.

## Still open

- Revoke the personal access token that was stored in `.git/config` (github.com/settings/tokens).
- Add a contact route to the portfolio footer — the site currently has no email or LinkedIn,
  so a reader who wants to reach out has nowhere to go.
- Decide whether the case studies should name the employer. They currently describe it as
  "a financial analytics platform for ecommerce brands".
- The published prototypes carry real product numbers. They have been live for months, but the
  case studies now point at them deliberately — worth one conversation with the employer.

---

## Final state (2026-09-09)

Built and committed locally; **not pushed**. Live after a push at
`https://sasha-iris.github.io/storybook/portfolio/`.

**What the site is now**

- Landing, three case studies, an index of nine prototypes.
- Nine screenshots captured from the running prototypes with Playwright at
  1440×900, 2× (`portfolio/img/`), plus two tight thumbnail crops.
- Two live component frames on the landing, scaled to their column, so the
  claim "live, not screenshotted" is demonstrable.
- 12-column grid: prose in 1-7, evidence tables in 1-10, figure captions held
  in the margin at 8-10 via subgrid.
- Palette: Radix Colors (slate, violet, red), vendored in `portfolio/tokens.css`
  and mapped onto the semantic names the CSS already used. The Iris type scale,
  radii and weights are still in use.
- Icons: Heroicons 2.2, inlined as a sprite, normalised to one optical height
  (each glyph's ink box was measured and scaled, with stroke width compensated).
- Word counts: landing 428, design system 720, segments 687, P&L 514.

**Regression traps found the hard way, worth knowing**

- Non-greedy regex with `re.S` over HTML crosses element boundaries and silently
  eats neighbouring items. It cost a decision list once. Use a tempered pattern:
  `<li>(?:(?!</li>)[\s\S])*?</li>`.
- Grid rows take their height from the tallest item; flex children in those rows
  stretch by default. That turned 23px tag chips into 90px slabs.
- A media block written before the base rule it overrides never applies.

**Still open, and needing the owner**

- Revoke the personal access token that was in `.git/config`.
- Decide whether to name the employer in the case-study prose.
- Push, which deploys.
