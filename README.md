# Atlas

**An accessibility-first visual concept library.**

Atlas turns hard programming ideas into clear, visual, browsable concept sheets — the
kind of explanation I wished I'd had while learning. Each concept gets a plain-language
write-up, a diagram, its sources, and links to related ideas, so understanding one thing
leads naturally to the next.

## Status

🚧 **Early days — active conversion.**

Atlas began life as a Dev Academy bootcamp exercise (a small art gallery built on
Express + React). I'm repurposing that shell into something with a real purpose, in
documented phases. Right now the codebase still runs the original gallery; the
conversion to the concept-library data model and UI is in progress.

The full story — why I chose this, and the engineering decisions along the way — is
written up as a case study on my portfolio, [vixenz.dev](https://vixenz.dev).

## Accessibility first

Accessibility isn't a later pass on this project — it's the brief. Designed in, not
bolted on. That means: semantic structure, full keyboard operability, visible focus,
respect for `prefers-reduced-motion`, AA-or-better contrast, and type chosen for
readability. A concept library is only useful if everyone can actually read it.

## Tech stack

- **Client:** Vite, React, TypeScript, React Router, TanStack Query
- **Server:** Express, TypeScript
- **Data:** SQLite + Knex _(planned — replacing the original in-memory data)_
- **Testing:** Vitest, Supertest, Testing Library

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the client + server (client at http://localhost:5173)
npm test         # run the test suite
```

To build and run a production bundle:

```bash
npm run build
npm start
```

## Project structure

```
client/    React front end (components, API helpers, styles)
server/    Express API
models/    Shared TypeScript types
```

## Origin & licence

This repository carries its full git history from the original bootcamp exercise — the
conversion is part of the record, not hidden. Built by Serina Mcfall.
