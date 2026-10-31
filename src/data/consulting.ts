import type { ConsultingProblem } from '../types';

// Add new entries to the top of this array — most recent/highest-priority first.
// `icon` must be a key in src/lib/icons.ts. `caseStudyPath` is optional —
// omit it until you've written a case-study page for the problem.
export const consultingProblems: ConsultingProblem[] = [
  {
    title: "Manual ops eating engineering time",
    problem:
      "Teams burn engineering hours on repetitive, judgment-light workflows — triaging messages, checking inventory, drafting responses — that scale linearly with headcount.",
    approach:
      "Design and ship agentic workflows that handle the full loop end-to-end: understand intent, pull live data, act, and respond, with humans only in the loop for exceptions.",
    outcome:
      "Lower support load and faster response times without adding headcount.",
    tags: ["Agentic Workflows", "Automation", "FastAPI"],
    icon: "MessageSquare",
    caseStudyPath: "/consulting/manual-ops-automation",
  },
  {
    title: "LLM pilots that never reach production",
    problem:
      "Proof-of-concept chatbots and RAG demos look great in a sandbox, then stall before launch — hallucinations, no retrieval precision, no path to monitoring or scale.",
    approach:
      "Build production-grade RAG and retrieval pipelines with grounded context, evaluation loops, and the infrastructure (rate limiting, observability, fallbacks) needed to ship and keep shipping.",
    outcome:
      "A system that survives contact with real users and real data, not just a demo.",
    tags: ["RAG", "LLM Ops", "Production AI"],
    icon: "Brain",
  },
];
