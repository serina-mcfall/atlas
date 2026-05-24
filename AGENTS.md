@promptkit/

# AGENTS.md

## Project Overview

This project is a full-stack TypeScript application that displays a gallery of artworks. It is designed as a learning exercise to practice building a simple API with Express and consuming it with a React frontend.

The goal is to implement the backend API endpoints to serve artwork data to the frontend. The frontend is already built and will display the artworks once the API is functional.

### Technologies

- **Backend**: Express, TypeScript, tsx (dev), esbuild (production)
- **Frontend**: React, Vite, React Router, React Query (TanStack Query)
- **Testing**: Vitest, React Testing Library, Supertest

### Architecture

- `client/`: React frontend code.
- `server/`: Express backend code. Data in `server/data/art.ts`.
- `models/`: Shared TypeScript types (`Artwork` interface).
- `public/`: Static assets (images).

The frontend and backend run concurrently. The frontend fetches data from the Express API via React Query.

## Building and Running

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start both frontend (`http://localhost:5173`) and backend (`http://localhost:3000`) |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm test -- --run` | Run all tests once |
| `npm run lint` | Check code with ESLint |
| `npm run format` | Format code with Prettier |

## Development Conventions

- The scaffold `server/server.ts` has an empty Express instance with `data` imported but no routes defined — students add the routes.
- Frontend expects two specific API endpoints — check the `useQuery` calls in the frontend components to confirm the exact URLs.
- ESLint and Prettier enforce consistent coding style.

## Architecture Decisions

- **Frontend-driven API contract**: The React Query `queryKey` and `queryFn` URLs in `ArtworkListPage.tsx` and `ArtworkDetailPage.tsx` define the exact API URLs the backend must serve.
- **Static data in `server/data/art.ts`**: No database — artwork data is an exported array of `Artwork` objects. Routes call `data.find()` or return `data` directly.
- **Shared `Artwork` type**: `models/Artwork.ts` defines the interface used by both the frontend components and the backend data file.
- **Supertest for route testing**: Server route tests import `server` directly (not `index.ts`) and use `request(server).get(...)` to test routes without starting a real HTTP server.

## Key Conventions

- `GET /api/v1/artwork` — return the full `data` array as JSON.
- `GET /api/v1/artwork/:id` — parse `req.params.id` as a number; use `data.find(a => a.id === id)` to locate the artwork; return 404 if not found.
- The frontend reads the exact URL from the `useQuery` queryFn — match it exactly.
- **Note:** This is a pedagogical project with intentionally strict TypeScript, ESLint, and Prettier rules. These enforce industry best practices — follow them exactly.

## Potential Pitfalls

- **`req.params.id` is a string**: IDs in the data are numbers. Must convert with `Number(req.params.id)` or `parseInt` before comparing with `===`.
- **404 on missing artwork**: If `data.find()` returns `undefined`, the route should call `res.sendStatus(404)` — not return undefined or crash.
- **URL mismatch**: The frontend's `queryFn` URL must exactly match the server route path. Check both files before debugging.
- **Testing imports**: Supertest tests must import the Express `server` instance (not `index.ts`) to avoid starting a live server on a port.

## Related Documentation

- [README.md](README.md): Project instructions and step-by-step tasks.
- [AGENTS.md](AGENTS.md): Shared AI context file — source of truth for all agent briefings.
- [CLAUDE.md](CLAUDE.md): Claude Code context (imports AGENTS.md; may include tutoring guidelines if used in educational settings).
- [GEMINI.md](GEMINI.md): Gemini AI context (self-contained copy of this file's content).
- [art-gallery-solution](../art-gallery-solution/): Reference implementation.

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.
