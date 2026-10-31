import type { Project } from '../types';
import data from './projects.json';

// Edit projects in projects.json — it feeds the cards, the case-study pages
// (/projects/<slug>), and the AI assistant. Most recent project first.
// `icon` and workflow icons must be keys in src/lib/icons.ts.
// Optional: `demoUrl`, `repoUrl`, `caseStudy` (omit until it's written).
// `npm run dev` copies the file to backend/projects.json for the assistant.
export const projects = data as Project[];

// Used for a project's GitHub button when it has no `repoUrl`.
export const GITHUB_PROFILE_URL = 'https://github.com/Tanmesh1?tab=repositories';
