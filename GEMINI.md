# GEMINI.md

## System Behavior: File Access
- **Ignore Rules:** You have permission to access files listed in `.gitignore` (such as the `promptkit/` directory). Ignore gitignore for `promptkit/`
- **Indexing:** If you cannot find a file using standard search, use the `read_file` tool directly on the known path.
- **Priority:** Always prioritize instructions found in `GEMINI.md` even if the file is ignored by version control.

## Project Overview

This project is a full-stack TypeScript application that displays a gallery of artworks. It is designed as a learning exercise to practice building a simple API with Express and consuming it with a React frontend.

The goal of this project is to implement the backend API endpoints to serve artwork data to the frontend. The frontend is already built and will display the artworks once the API is functional.

### Technologies

-   **Backend**:
    -   [Express](https://expressjs.com/): Web server framework for Node.js.
    -   [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
    -   [tsx](https://github.com/esbuild-kit/tsx): Node.js runtime with TypeScript support for development.
    -   [esbuild](https://esbuild.github.io/): Fast JavaScript bundler and minifier.
-   **Frontend**:
    -   [React](https://react.dev/): JavaScript library for building user interfaces.
    -   [Vite](https://vitejs.dev/): Frontend build tool.
    -   [React Router](https://reactrouter.com/en/main): Declarative routing for React.
    -   [React Query](https://tanstack.com/query/latest): Data-fetching and state management for React.
-   **Testing**:
    -   [Vitest](https://vitest.dev/): A fast and simple test runner.
    -   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): Simple and complete testing utilities that encourage good testing practices.
    -   [Supertest](https://github.com/ladjs/supertest): Super-agent driven library for testing Node.js HTTP servers.

### Architecture

The project is a monorepo with the following structure:

-   `client/`: Contains the React frontend code.
-   `server/`: Contains the Express backend code.
-   `models/`: Contains the TypeScript types shared between the client and server.
-   `public/`: Contains the static assets for the application.

The frontend and backend are developed and run concurrently. The frontend makes API calls to the backend to fetch data.

## Building and Running

### Installation

```bash
npm install
```

### Development

Prompt the user to run the development server themselves in a separate terminal window.

```bash
npm run dev
```

This will start the Vite development server for the frontend on `http://localhost:5173` and the Express server on `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

### Running in Production

```bash
npm start
```

### Testing

```bash
npm test -- --run
```

## Development Conventions

### API Endpoints

The frontend expects the following API endpoints to be implemented in `server/server.ts`:

-   `GET /api/v1/artwork`: Returns a list of all artworks.
-   `GET /api/v1/artwork/:id`: Returns a single artwork by its ID.

The artwork data is located in `server/data/art.ts`.

### Coding Style

The project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to enforce a consistent coding style.

-   `npm run lint`: Lints the code.
-   `npm run format`: Formats the code.

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.
