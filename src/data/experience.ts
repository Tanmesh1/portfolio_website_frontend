import type { Experience } from '../types';

// Add new entries to the top of this array — most recent role first.
export const experiences: Experience[] = [
  {
    role: "AI Engineer",
    company: "Poddar Diamonds",
    period: "JULY'26 — PRESENT",
    description: "Designed and developed LLM-powered agentic workflows to automate complex business processes and decision-making. Built production-ready AI agents, RAG pipelines, and tool-calling workflows integrating LLMs with APIs, databases, and internal systems. Evaluated and optimized LLM models, prompts, retrieval pipelines, and inference workflows to improve accuracy, performance, and cost efficiency.",
    tags: ["LLM", "Agentic Engineer", "Agent Design"]
  },
  {
    role: "Software Engineer",
    company: "Cyber Managers Software Services Pvt. Ltd.",
    period: "JULY'23 — NOV'25",
    description: "Architected and scaled a mission-critical attendance system serving 200k+ active users. Optimized backend latency by 40% and implemented robust real-time synchronization protocols.",
    tags: ["High Concurrency", "Distributed Systems", "System Design"]
  }
];
