# Aravinth Kumar V — Portfolio

A story-driven, accessible portfolio built with React + Three.js on the front end
and Express on the back end, styled with **Xira CSS** — a real local package
(design tokens + intrinsic layout primitives + components, no utility-class bloat).

## Structure

- `client/` — Vite + React 18, React Three Fiber (3D hero), Framer Motion (scroll storytelling)
- `server/` — Express API: contact form (Nodemailer) + resume download
- `packages/xira-css/` — the Xira CSS framework itself, consumed by `client` as a real
  dependency (`file:../packages/xira-css` in `client/package.json`, imported via
  `@import 'xira-css';`). See `packages/xira-css/README.md` for its API.

## Getting started

```bash
npm run install:all   # installs both client and server deps
npm run dev            # runs client (5173) and server (4000) together
```

Copy `server/.env.example` to `server/.env` and fill in SMTP credentials to
actually deliver contact-form emails (without them, messages are logged to
the server console instead — fine for local development).

The résumé PDF served by `/api/resume` lives at `server/assets/resume.pdf`.

## Accessibility & motion

- Skip link, semantic landmarks, visible focus rings, AA-contrast palette in both themes.
- All scroll/3D animation respects `prefers-reduced-motion`: the WebGL hero
  scene doesn't mount, and Framer Motion reveals become instant.
