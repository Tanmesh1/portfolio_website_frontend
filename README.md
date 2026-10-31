# Tanmesh Portfolio — Frontend

React + TypeScript + Vite frontend for the portfolio site: Home, Experience,
Projects, Blog, and an AI Assistant chat page backed by the FastAPI service
in `../backend`.

## Prerequisites

- Node.js 18+
- Python 3.11+ (only needed if you're also running the backend)

## Running locally

Most pages work with the frontend alone. The Assistant page (and the
contact form) need the backend running too.

### Frontend

```
cd frontend
npm install
npm run dev
```

Serves at http://localhost:3000.

### Backend

```
cd backend
python -m venv .venv
.venv\Scripts\activate        # Windows
# source .venv/bin/activate   # macOS/Linux
pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
```

Serves at http://127.0.0.1:8000. Requires a `backend/.env` with
`GEMINI_API_KEY`, `GEMINI_MODEL`, `FRONTEND_ORIGIN`, and (optionally)
`MONGODB_URI` / `MONGODB_DB_NAME` / `MONGODB_CONTACT_COLLECTION` for the
contact form.

With the backend's venv active in your shell, `npm run backend:dev` from
this folder runs the same uvicorn command as a shortcut.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run backend:dev` — start the backend (requires its venv active, see above)
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — TypeScript type check
- `npm test` — run the vitest suite

## Adding a new job or project

Content lives in plain data files — no page component needs to change.

- **New job:** add an entry to [`src/data/experience.ts`](src/data/experience.ts)
- **New project:** add an entry to [`src/data/projects.ts`](src/data/projects.ts).
  Pick an `icon` from [`src/lib/icons.ts`](src/lib/icons.ts) (or add a new one
  there), and leave `caseStudyPath` out until you've built a case-study page
  for it — the button only renders when it's set.

To make the AI Assistant aware of the same job/project, add a matching entry
in the backend repo:

- `backend/experience_data.py` for jobs
- `backend/projects_data.py` for projects (optional `details` list for extra
  depth beyond the summary)

The assistant's knowledge base is generated automatically from those files —
no hand-written prose or keyword lists needed.
