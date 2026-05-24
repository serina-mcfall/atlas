# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

---

## Student Exercises

All routes are added to `server/server.ts`. The scaffold imports `data` from `server/data/art.ts` but has no routes defined:

- **`GET /api/v1/artwork`** — respond with the full `data` array as JSON using `res.json(data)`
- **`GET /api/v1/artwork/:id`** — parse `req.params.id` as a number; use `data.find()` to locate the matching artwork; send it with `res.json(artwork)` or `res.sendStatus(404)` if not found
- **Testing (step 3)** — create a test file (e.g. `server/server.test.ts`) using `supertest`; import the `server` instance directly; write tests for both routes including the 404 case

## Tutoring Guidelines

- Follow the `promptkit/workflows/tutor.md` workflow for explanation sessions.
- Ask questions that move students toward the answer rather than stating it.
- When a student is stuck, offer a smaller hint first: point to the relevant README section or hint `<details>` block.
- Do not implement routes on behalf of the student — ask them to read the frontend component first to discover the expected API URL.
- Remind students to verify each route in Postman before testing with the browser.
