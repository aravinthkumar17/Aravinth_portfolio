# Xira CSS

An intent-based CSS framework: intrinsic responsive layouts, reusable UI
components, design tokens, and a native-first accessible reset — without
utility-class proliferation.

This package ships the framework's core styling layer, used to build
Aravinth Kumar V's portfolio site (`../../client`) — design tokens,
layout primitives, and components, all hand-authored CSS.

> **Scope note:** this package is the CSS layer only. The selective
> dependency-aware compiler and CLI (`xira init/build/dev/analyze`)
> described alongside Xira elsewhere are a separate, larger effort and
> are not part of this package yet.

## Install

Not published to npm. Consume it locally via a `file:` dependency:

```json
{
  "dependencies": {
    "xira-css": "file:../packages/xira-css"
  }
}
```

## Usage

```css
/* everything: tokens + reset + layout + components */
@import 'xira-css';

/* or import pieces individually */
@import 'xira-css/tokens.css';
@import 'xira-css/reset.css';
@import 'xira-css/layout.css';
@import 'xira-css/components.css';
```

Every component reads from the token layer, so reskinning an app means
overriding custom properties — never editing the framework's CSS.

```css
:root {
  --color-accent: #2563eb;
  --font-display: 'Space Grotesk', sans-serif;
}
```

## What's inside

### Tokens (`tokens.css`)
Type scale, spacing scale, radii, motion easings/durations, shadows, and a
light/dark color theme switched via `[data-theme]` on `:root`.

### Reset (`reset.css`)
An accessible base: honors `prefers-reduced-motion`, always-visible
focus rings, a working `.skip-link`, and sane element defaults.

### Layout primitives (`layout.css`)
Intent-based, not utility classes:

| Class | Does |
|---|---|
| `.x-container` / `.x-container--wide` | Centered, gutter-aware content column |
| `.x-stack` (+ `--start`) | Vertical rhythm via a single owned `--stack-gap` |
| `.x-cluster` | Wrap-aware horizontal grouping |
| `.x-grid`, `.x-grid--2`, `.x-grid--3` | Intrinsic grid, no manual breakpoints |
| `.x-sidebar` | Content-first two-column that collapses on its own |
| `.x-section` | Consistent vertical section rhythm |

### Components (`components.css`)
`.x-btn` (+ `--primary` / `--ghost` / `--on-accent`), `.x-card` (+
`--interactive`), `.x-badge` (+ `--accent`), `.x-field`, `.x-eyebrow`,
`.x-heading`, `.x-accent-text`, `.x-index-list` — an accessible, native
`<details>`-based disclosure list for project/work indexes — and
`.x-banner`, a full-bleed accent-gradient CTA panel (use `--on-accent`
buttons and light/translucent form controls inside one).
