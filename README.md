# Shreyansh Paliwal — Portfolio

A Next.js (App Router) + Tailwind CSS v4 portfolio built to replicate the
"Monograph" reference design language: animated mesh-gradient section
backgrounds, a mixed serif/sans type system (Fraunces + Manrope), hairline
dividers, bordered arrow buttons, and an oversized wordmark treatment.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `src/app/layout.tsx` — fonts (self-hosted Fraunces + Manrope) and page shell
- `src/app/globals.css` — design tokens, gradient-mesh backgrounds, hairline/button utilities
- `src/components/` — Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
- `src/fonts/` — self-hosted variable font files (no external font requests at runtime)

## Editing content

All resume content (experience, projects, skills, achievements, contact info)
lives directly inside the section components in `src/components/` — edit the
arrays at the top of each file to update copy.

## Build

```bash
npm run build
npm run start
```
