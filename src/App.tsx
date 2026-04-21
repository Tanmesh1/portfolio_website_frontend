/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Moon, 
  Rocket, 
  Brain, 
  Network, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MessageSquare, 
  FileText, 
  Box, 
  Database, 
  Cloud, 
  Search, 
  History, 
  Home as HomeIcon, 
  User,
  Send,
  Bot,
  ChevronRight,
  ExternalLink,
  Code,
  AlertTriangle,
  Sparkles,
  Webhook,
  Package,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'projects' | 'experience' | 'assistant' | 'blog' | 'agenticSalesDriver' | 'reqscanAiAnalyzer';
type ChatMessage = { role: 'user' | 'bot'; text: string };
type BlogPost = {
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  image: string;
  body: Array<string | { title: string; text: string }>;
};

const createSessionId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `session-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? '').trim().replace(/\/+$/, '');

const buildApiUrl = (path: string) => {
  if (!apiBaseUrl) {
    return path;
  }

  return `${apiBaseUrl}${path}`;
};

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-3xl border-b border-outline-variant/10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <Terminal className="text-secondary w-6 h-6" />
          <span className="text-xl font-bold tracking-tighter font-headline">Tanmesh Joshi</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline text-sm tracking-tight">
          {(['home', 'projects', 'experience', 'assistant', 'blog'] as Page[]).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`capitalize transition-colors ${
                currentPage === page ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-primary-container hover:text-secondary'
              }`}
            >
              {page === 'assistant' ? 'AI Assistant' : page}
            </button>
          ))}
        </div>
        <button className="p-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all">
          <Moon className="w-5 h-5" />
        </button>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <p className="text-on-primary-container text-sm tracking-wide">
          © 2026 Tanmesh Joshi. Engineered for the deep void.
        </p>
        <div className="flex items-center gap-8">
          <a href="https://github.com/Tanmesh1" className="text-on-primary-container hover:text-secondary transition-colors text-sm">GitHub</a>
          <a href="https://www.linkedin.com/in/tanmeshjoshi" className="text-on-primary-container hover:text-secondary transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-on-primary-container hover:text-secondary transition-colors text-sm">Twitter</a>
          <a href="mailto:joshi.tanmesh@gmail.com" className="text-on-primary-container hover:text-secondary transition-colors text-sm">Email</a>
        </div>
      </div>
    </footer>
  );
};

// --- Screens ---

const HomeScreen = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#5de6ff 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container text-secondary text-xs font-bold tracking-widest uppercase mb-6 border border-outline-variant/15">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Available for Scale
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
              Hi, I’m <span className="text-gradient">Tanmesh</span> — I build AI-powered systems.
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">
              Turning <span className="text-secondary font-medium italic">messy problems</span> into scalable products. Architecting backend systems that breathe through 200k+ users and agentic AI workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => setCurrentPage('projects')}
                className="cta-gradient text-surface font-bold px-10 py-4 rounded-full neon-glow hover:scale-105 transition-transform w-full sm:w-auto tracking-wide"
              >
                View Projects
              </button>
              <button 
                onClick={() => setCurrentPage('assistant')}
                className="glass-panel border border-outline-variant/20 text-on-surface font-semibold px-10 py-4 rounded-full hover:bg-surface-container-highest/40 transition-all w-full sm:w-auto tracking-wide"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-secondary/40 to-tertiary/40 rounded-lg blur-md opacity-75"></div>
              <div className="relative p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                <img 
                  src="/profile.jpeg" 
                  alt="Tanmesh Joshi" 
                  className="rounded-md w-full max-w-[340px] aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-17 -right-6 hidden md:block glass-panel border border-outline-variant/30 rounded-lg p-4 animate-bounce hover:animate-none">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-tighter">Status: Active</span>
                  </div>
                  <p className="font-mono text-[11px] text-primary">sys.exec("build_future")</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Capabilities Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">System Capabilities</h2>
            <p className="text-on-primary-container text-lg leading-relaxed">
              Engineering at the intersection of deep logic and high-performance execution.
            </p>
          </div>
          <div className="text-sm uppercase tracking-[0.2em] text-secondary font-bold">
            01 // Core Domains
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 glass-panel rounded-lg p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <Rocket className="text-secondary w-12 h-12 opacity-20" />
            </div>
            <div className="relative z-10 max-w-md">
              <span className="text-tertiary font-mono text-sm mb-4 block">Scalability First</span>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Backend infrastructure for 200,000+ users.</h3>
              <p className="text-on-primary-container leading-relaxed mb-8">
                Specialized in distributed systems and FastAPI microservices. I build robust architectures that handle heavy traffic without breaking a sweat, ensuring 99.9% uptime for mission-critical apps.
              </p>
              <div className="flex flex-wrap gap-3">
                {['FastAPI', 'PostgreSQL', 'Redis', 'Docker'].map(tech => (
                  <span key={tech} className="bg-surface-container-highest/50 px-4 py-2 rounded-full text-xs text-primary">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-primary-container rounded-lg p-10 flex flex-col justify-between border border-outline-variant/5">
            <div>
              <Brain className="text-tertiary w-8 h-8 mb-6" />
              <h3 className="text-2xl font-headline font-bold mb-4">Agentic Workflows</h3>
              <p className="text-on-primary-container leading-relaxed text-sm">
                Designing autonomous AI agents that communicate across services to solve multi-step complex tasks.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10">
              <div className="text-4xl font-headline font-bold text-gradient">92%</div>
              <p className="text-xs text-on-primary-container uppercase tracking-widest mt-2">Efficiency Increase</p>
            </div>
          </div>

          <div className="md:col-span-4 glass-panel rounded-lg p-8 border border-outline-variant/10">
            <h4 className="font-headline text-lg font-bold mb-3 flex items-center gap-2">
              <Network className="text-secondary w-5 h-5" />
              System Integrations
            </h4>
            <p className="text-on-primary-container text-sm leading-relaxed">
              Seamlessly connecting legacy systems with modern AI stacks via secure, type-safe API layers.
            </p>
          </div>
          <div className="md:col-span-4 glass-panel rounded-lg p-8 border border-outline-variant/10">
            <h4 className="font-headline text-lg font-bold mb-3 flex items-center gap-2">
              <Cpu className="text-secondary w-5 h-5" />
              Real-time Processing
            </h4>
            <p className="text-on-primary-container text-sm leading-relaxed">
              Low-latency data pipelines designed for high-frequency AI inference and WebSocket streaming.
            </p>
          </div>
          <div className="md:col-span-4 glass-panel rounded-lg p-8 border border-outline-variant/10">
            <h4 className="font-headline text-lg font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="text-secondary w-5 h-5" />
              Secure by Design
            </h4>
            <p className="text-on-primary-container text-sm leading-relaxed">
              Hardened backend security with OAuth2/OIDC protocols and advanced rate-limiting logic.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl"></div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Let's build the <span className="italic">unseen</span> future.</h2>
          <p className="text-on-primary-container text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Currently accepting select projects for Q1-Q2 2026. Reach out for consultations on backend architecture and AI strategy.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setCurrentPage('assistant')}
              className="cta-gradient text-surface font-bold px-12 py-5 rounded-full neon-glow hover:scale-105 transition-all inline-flex items-center gap-3 group"
            >
              Start a Conversation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectsScreen = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  const projects = [
    {
      title: "Agentic Sales Driver",
      description: "Full-stack WhatsApp commerce system that understands buying intent, checks inventory in real time, and replies like a human sales assistant. Built as an agentic workflow for faster conversions and lower support load.",
      tech: ["Python", "OpenAI", "FastAPI", "MongoDB"],
      status: "Production",
      icon: <MessageSquare className="text-secondary" />,
      image: "/agentic_sales_photo.webp",
      caseStudyPage: 'agenticSalesDriver' as Page
    },
    {
      title: "ReqScan AI Analyzer",
      description: "Advanced Requirement Analyzer that transforms unstructured technical specifications into validated BRDs and system architecture maps. Utilizes RAG (Retrieval-Augmented Generation) for precision accuracy.",
      tech: ["OpenAI API", "Pinecone", "JavaScript", "React"],
      status: "Active R&D",
      icon: <FileText className="text-tertiary" />,
      image: "/Reqscan_image.webp",
      caseStudyPage: 'reqscanAiAnalyzer' as Page
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <section className="mb-24">
        <div className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            Projects <span className="text-gradient">Gateway</span>
          </h1>
          <p className="text-on-primary-container text-lg md:text-xl leading-relaxed max-w-2xl">
            A curated exploration of high-performance backend systems, LLM architectures, and autonomous data pipelines designed for the deep void of modern engineering.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-tertiary rounded-xl opacity-10 blur group-hover:opacity-25 transition duration-500"></div>
            <div className="relative glass-panel border border-outline-variant/15 rounded-xl overflow-hidden flex flex-col h-full hover:border-secondary/30 transition-all duration-500">
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                    project.status === 'Production' ? 'text-secondary border-secondary/20 bg-secondary/10' : 'text-tertiary border-tertiary/20 bg-tertiary/10'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                    {project.icon}
                  </div>
                  <h2 className="font-headline text-2xl font-bold tracking-tight">{project.title}</h2>
                </div>
                <p className="text-on-primary-container leading-relaxed mb-8 font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-surface-container-highest rounded-sm text-xs font-medium text-on-surface-variant">{t}</span>
                  ))}
                </div>
                <div className="mt-auto grid grid-cols-2 md:grid-cols-3 gap-3">
                  <button className="cta-gradient px-4 py-3 rounded-full text-center text-xs font-bold uppercase tracking-widest text-surface flex items-center justify-center gap-2 hover:shadow-[0px_8px_20px_rgba(93,230,255,0.3)] transition-all">
                    <Rocket className="w-4 h-4" />
                    Live Demo
                  </button>
                  <a 
                    href="https://github.com/Tanmesh1?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-full border border-secondary/30 bg-surface-container-highest/20 text-center text-xs font-bold uppercase tracking-widest text-secondary flex items-center justify-center gap-2 hover:bg-secondary/10 transition-all"
                  >
                      <Code className="w-4 h-4" />
                        GitHub
                  </a>
                  {/* <button className="px-4 py-3 rounded-full border border-secondary/30 bg-surface-container-highest/20 text-center text-xs font-bold uppercase tracking-widest text-secondary flex items-center justify-center gap-2 hover:bg-secondary/10 transition-all">
                    <Code className="w-4 h-4" />
                    GitHub
                  </button> */}
                  <button
                    onClick={() => project.caseStudyPage && setCurrentPage(project.caseStudyPage)}
                    className="col-span-2 md:col-span-1 px-4 py-3 rounded-full border border-outline-variant/30 text-center text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!project.caseStudyPage}
                  >
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-32 p-12 glass-panel rounded-xl border border-outline-variant/10 text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/10 rounded-full blur-[100px]"></div>
        <h3 className="font-headline text-3xl font-bold mb-4">Want to see the underlying architecture?</h3>
        <p className="text-on-primary-container max-w-xl mx-auto mb-8">
          I maintain a collection of experimental repos, system design benchmarks, and infrastructure-as-code templates for public review.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a 
              href="https://github.com/Tanmesh1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-on-surface text-surface font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-all inline-flex items-center justify-center"
          >
              View GitHub Archive
          </a>
          {/* <button className="px-8 py-4 rounded-full border border-outline-variant text-on-surface font-bold text-sm uppercase tracking-widest hover:border-secondary transition-all">Download Resume</button> */}
          <a 
               href="/Resume.pdf"
               download="Resume.pdf"
               className="px-8 py-4 rounded-full border border-outline-variant text-on-surface font-bold text-sm uppercase tracking-widest hover:border-secondary transition-all inline-flex items-center justify-center"
          >
                  Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

const AgenticSalesDriverCaseStudy = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  const workflowSteps = [
    {
      id: '01',
      title: 'Webhook/API Intake',
      desc: 'Real-time customer messages are captured from the WhatsApp layer and routed into the FastAPI backend for processing.',
      icon: <Webhook className="text-secondary w-6 h-6" />
    },
    {
      id: '02',
      title: 'LLM Intent Parsing',
      desc: 'Unstructured chats are transformed into structured intent data like product, quantity, variation, and buying signals.',
      icon: <Brain className="text-secondary w-6 h-6" />
    },
    {
      id: '03',
      title: 'Inventory Check',
      desc: 'The system verifies real-time availability and pricing before the assistant makes any commitment to the customer.',
      icon: <Package className="text-secondary w-6 h-6" />
    },
    {
      id: '04',
      title: 'AI Response Generation',
      desc: 'A context-aware response is created in brand voice and sent back as a guided sales reply.',
      icon: <Bot className="text-secondary w-6 h-6" />
    }
  ];

  const techs = [
    { name: 'FastAPI', role: 'Backend API' },
    { name: 'MongoDB', role: 'Inventory State' },
    { name: 'OpenAI', role: 'Reasoning Layer' },
    { name: 'Streamlit', role: 'Control Panel' },
    { name: 'AWS', role: 'Deployment' },
    { name: 'Meta API', role: 'WhatsApp Channel' }
  ];

  const features = [
    {
      title: 'Autonomous Chat Handling',
      desc: 'Handles end-to-end sales conversations without human intervention unless escalation is needed.'
    },
    {
      title: 'Natural Language Product Extraction',
      desc: 'Understands messy customer messages, vague product references, and shorthand buying requests.'
    },
    {
      title: 'Real-time Inventory Awareness',
      desc: 'Prevents bad promises by grounding every answer in live product availability and pricing.'
    }
  ];

  const hurdles = [
    'Managing highly ambiguous slang and unstructured retail chat patterns.',
    'Maintaining conversation context across multiple sessions and follow-ups.',
    'Guarding the model against inventory hallucinations and unsupported promises.'
  ];

  const roadmap = [
    'Direct payment link generation inside the chat flow',
    'Personalized recommendations from conversation history',
    'Multi-language support for regional dialects',
    'Lower-cost specialized models for high-volume inference'
  ];

  return (
    <div className="pt-28 pb-24">
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <button
          onClick={() => setCurrentPage('projects')}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary hover:text-on-surface transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>
      </section>

      <section className="min-h-[72vh] flex flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto mb-24 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl z-10"
        >
          <span className="text-secondary font-label tracking-[0.2em] uppercase text-xs mb-6 block">Agentic Systems Division // Case Study</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.1] mb-8">
            Agentic Sales Driver: Autonomous AI for <span className="text-gradient-cyan-purple">WhatsApp-Based</span> Retail Selling
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-3xl">
            An AI-powered system that turns customer messages into sales by understanding intent, checking inventory, and responding like a human sales assistant.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="cta-gradient text-surface px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center gap-2">
              View Live Demo <ExternalLink className="w-5 h-5" />
            </button>
            <a
              href="https://github.com/Tanmesh1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel border border-secondary/20 text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/10 transition-all cursor-pointer flex items-center gap-2"
            >
              GitHub Repository <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between border border-outline-variant/10"
          >
            <div>
              <AlertTriangle className="text-error mb-6 w-10 h-10" />
              <h2 className="text-3xl font-headline font-bold mb-6 tracking-tight">The Bottleneck</h2>
              <ul className="space-y-4 text-on-surface-variant leading-relaxed">
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Manual and delayed replies lead to lead drop-off before purchase intent can convert.</li>
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Chat-based selling often lacks structured attribution and intent visibility.</li>
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Growth usually means hiring more support staff instead of improving the system.</li>
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Most stores have data, but no intelligence layer between inventory and the customer.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-primary-container rounded-xl p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Sparkles className="text-secondary mb-6 w-10 h-10" />
            <h2 className="text-3xl font-headline font-bold mb-6 tracking-tight">The Agentic Architecture</h2>
            <p className="text-lg text-on-surface leading-relaxed mb-8">
              I built an agentic sales system that parses customer messages, extracts structured buying intent, matches live inventory, and responds contextually through an automated backend workflow.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Autonomous', 'Context-Aware', 'Inventory-Synced'].map((tag) => (
                <span key={tag} className="bg-surface-container-highest px-4 py-2 rounded-lg text-xs font-label uppercase tracking-widest text-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl font-headline font-bold mb-16 text-center">Operational Logic Flow</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-8 group"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container-high border border-secondary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className={`flex-grow pb-8 ${idx !== workflowSteps.length - 1 ? 'border-b border-outline-variant/10' : ''}`}>
                <h3 className="text-xl font-bold font-headline mb-2">{step.id}. {step.title}</h3>
                <p className="text-on-surface-variant">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 mb-24 bg-surface-container-lowest py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl font-headline font-bold">Technological Core</h2>
            <p className="text-secondary font-label text-sm uppercase tracking-widest">Built for production-grade reliability</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techs.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="bg-surface-container-low p-6 rounded-xl border border-secondary/10 hover:border-secondary/40 transition-all text-center group"
              >
                <span className="block text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">{tech.name}</span>
                <span className="text-xs text-on-surface-variant/60 font-label">{tech.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-headline font-bold mb-12 leading-tight">Engineered for<br /><span className="text-tertiary">Precision Selling</span></h2>
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6">
                <CheckCircle2 className="text-secondary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-on-surface-variant">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="aspect-square bg-surface-container-high rounded-xl overflow-hidden glass-panel border border-outline-variant/10 p-8 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-secondary/10 to-tertiary/10"></div>
            <img
              className="rounded-lg shadow-2xl relative z-10 w-4/5 transform rotate-2"
              alt="Modern smartphone interface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0DpQ_-3gM8Jhri9t4En0Vo_PaQgjtw7ULtPYKWs8bwCQwCMoWvWRKgwaDVQ-olC3Eq5jw2BbDM1fB5khdy7CHQo_EuKbU8AGub29F5ctVHsjNPRxlraaJRcX-l8BXkFx3X83ttAA_vedHKBT72EvINnOgm2arSXWkdVxuZ_wccl5FRcck4VV2rqbGqAvJnaT5rhcBJPlp4CQPdbRZUchhi_eBS10hu1qG7WOKTOEKkKW4VegXcR-vlLwJN-bIFwW5GCb6zGanvEmy"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-8 -left-8 bg-primary-container p-6 rounded-xl border border-secondary/20 z-20 hidden md:block">
            <p className="text-4xl font-bold text-secondary font-headline">94%</p>
            <p className="text-xs uppercase tracking-widest font-label text-on-surface-variant">Intent Match Accuracy</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-xl border border-outline-variant/10"
        >
          <h3 className="text-2xl font-headline font-bold mb-8 text-secondary tracking-tight">Technical Hurdles Overcome</h3>
          <div className="space-y-6">
            {hurdles.map((challenge, idx) => (
              <div key={challenge}>
                <p className="font-bold text-sm uppercase tracking-tighter text-on-surface/40 mb-2">Challenge {String(idx + 1).padStart(2, '0')}</p>
                <p className="text-lg">{challenge}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-headline font-bold mb-8 tracking-tight">Future Roadmap</h3>
          <ul className="space-y-4">
            {roadmap.map((item) => (
              <li key={item} className="flex items-center gap-4 text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-8">
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.95, opacity: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-primary-container to-surface-container-low rounded-xl p-12 md:p-16 text-center border border-secondary/10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 blur-[80px] rounded-full"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Let&apos;s build the unseen future.</h2>
            <p className="text-xl text-on-surface-variant mb-12">Currently accepting select projects for agentic system design and AI infrastructure.</p>
            <button
              onClick={() => setCurrentPage('assistant')}
              className="bg-on-surface text-surface px-12 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all cursor-pointer flex items-center gap-3 mx-auto"
            >
              Start a Conversation <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const ReqscanAiAnalyzerCaseStudy = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  const workflowSteps = [
    {
      id: '01',
      title: 'Document Intake',
      desc: 'Requirement documents, client notes, and raw technical descriptions are uploaded into the analysis pipeline.',
      icon: <Webhook className="text-secondary w-6 h-6" />
    },
    {
      id: '02',
      title: 'LLM Requirement Parsing',
      desc: 'The system breaks down vague or unstructured input into actors, modules, constraints, dependencies, and system expectations.',
      icon: <Brain className="text-secondary w-6 h-6" />
    },
    {
      id: '03',
      title: 'Knowledge Retrieval',
      desc: 'Relevant context is pulled from indexed reference material and domain memory to improve precision and reduce ambiguity.',
      icon: <Database className="text-secondary w-6 h-6" />
    },
    {
      id: '04',
      title: 'Structured Output Generation',
      desc: 'ReqScan generates refined BRDs, architecture-aligned insights, and implementation-ready summaries for product teams.',
      icon: <Bot className="text-secondary w-6 h-6" />
    }
  ];

  const techs = [
    { name: 'React.js', role: 'Frontend Layer' },
    { name: 'Python', role: 'Typed Logic' },
    { name: 'OpenAI', role: 'Reasoning Engine' },
    { name: 'Pinecone', role: 'Vector Retrieval' },
    { name: 'FastAPI', role: 'Orchestration' },
    { name: 'RAG', role: 'Context Precision' }
  ];

  const features = [
    {
      title: 'Requirement Intelligence',
      desc: 'Turns scattered project notes and client language into structured requirement artifacts teams can actually build from.'
    },
    {
      title: 'Context-Aware Analysis',
      desc: 'Uses retrieval to ground outputs in supporting material rather than relying on generic model assumptions.'
    },
    {
      title: 'Architecture-Ready Outputs',
      desc: 'Surfaces modules, workflows, risks, and system-level concerns early so product and engineering stay aligned.'
    }
  ];

  const hurdles = [
    'Handling incomplete, contradictory, or business-heavy requirement language.',
    'Reducing hallucinations when the source document lacks technical precision.',
    'Producing outputs that are useful for both stakeholders and engineering teams.'
  ];

  const roadmap = [
    'Automatic user story and acceptance criteria generation',
    'Visual architecture diagram suggestions from parsed requirements',
    'Multi-document comparison for change tracking and scope drift',
    'Domain-specific analysis templates for SaaS, ERP, and AI products'
  ];

  return (
    <div className="pt-28 pb-24">
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <button
          onClick={() => setCurrentPage('projects')}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary hover:text-on-surface transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>
      </section>

      <section className="min-h-[72vh] flex flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto mb-24 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl z-10"
        >
          <span className="text-secondary font-label tracking-[0.2em] uppercase text-xs mb-6 block">Product Intelligence Division // Case Study</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.1] mb-8">
            ReqScan AI Analyzer: From Raw Requirements to <span className="text-gradient-cyan-purple">Build-Ready Clarity</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-3xl">
            An AI-assisted requirement analysis system that transforms ambiguous documents into structured BRDs, architectural signals, and implementation-focused insights.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="cta-gradient text-surface px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center gap-2">
              View Live Demo <ExternalLink className="w-5 h-5" />
            </button>
            <a
              href="https://github.com/Tanmesh1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel border border-secondary/20 text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/10 transition-all cursor-pointer flex items-center gap-2"
            >
              GitHub Repository <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between border border-outline-variant/10"
          >
            <div>
              <AlertTriangle className="text-error mb-6 w-10 h-10" />
              <h2 className="text-3xl font-headline font-bold mb-6 tracking-tight">The Bottleneck</h2>
              <ul className="space-y-4 text-on-surface-variant leading-relaxed">
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Requirement docs often arrive vague, inconsistent, and overloaded with business language.</li>
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Product and engineering teams lose time converting raw notes into structured deliverables.</li>
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Missing edge cases and unclear dependencies create downstream architectural mistakes.</li>
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Traditional documentation workflows are slow, manual, and hard to scale across projects.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-primary-container rounded-xl p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Sparkles className="text-secondary mb-6 w-10 h-10" />
            <h2 className="text-3xl font-headline font-bold mb-6 tracking-tight">The Analysis Architecture</h2>
            <p className="text-lg text-on-surface leading-relaxed mb-8">
              ReqScan combines LLM reasoning with retrieval-backed context to extract requirements, identify missing logic, and produce structured outputs that accelerate planning, validation, and system design.
            </p>
            <div className="flex flex-wrap gap-3">
              {['RAG-Powered', 'Structured Output', 'Engineering-Aligned'].map((tag) => (
                <span key={tag} className="bg-surface-container-highest px-4 py-2 rounded-lg text-xs font-label uppercase tracking-widest text-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl font-headline font-bold mb-16 text-center">Operational Logic Flow</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-8 group"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container-high border border-secondary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className={`flex-grow pb-8 ${idx !== workflowSteps.length - 1 ? 'border-b border-outline-variant/10' : ''}`}>
                <h3 className="text-xl font-bold font-headline mb-2">{step.id}. {step.title}</h3>
                <p className="text-on-surface-variant">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 mb-24 bg-surface-container-lowest py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl font-headline font-bold">Technological Core</h2>
            <p className="text-secondary font-label text-sm uppercase tracking-widest">Built for analysis precision and scalable workflows</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techs.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="bg-surface-container-low p-6 rounded-xl border border-secondary/10 hover:border-secondary/40 transition-all text-center group"
              >
                <span className="block text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">{tech.name}</span>
                <span className="text-xs text-on-surface-variant/60 font-label">{tech.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-headline font-bold mb-12 leading-tight">Engineered for<br /><span className="text-tertiary">Requirement Precision</span></h2>
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6">
                <CheckCircle2 className="text-secondary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-on-surface-variant">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="aspect-square bg-surface-container-high rounded-xl overflow-hidden glass-panel border border-outline-variant/10 p-8 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-secondary/10 to-tertiary/10"></div>
            <img
              className="rounded-lg shadow-2xl relative z-10 w-4/5 transform rotate-2"
              alt="Requirement analysis dashboard"
              src="https://picsum.photos/seed/reqscan-dashboard/900/900"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-8 -left-8 bg-primary-container p-6 rounded-xl border border-secondary/20 z-20 hidden md:block">
            <p className="text-4xl font-bold text-secondary font-headline">91%</p>
            <p className="text-xs uppercase tracking-widest font-label text-on-surface-variant">Structured Output Confidence</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-xl border border-outline-variant/10"
        >
          <h3 className="text-2xl font-headline font-bold mb-8 text-secondary tracking-tight">Technical Hurdles Overcome</h3>
          <div className="space-y-6">
            {hurdles.map((challenge, idx) => (
              <div key={challenge}>
                <p className="font-bold text-sm uppercase tracking-tighter text-on-surface/40 mb-2">Challenge {String(idx + 1).padStart(2, '0')}</p>
                <p className="text-lg">{challenge}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-headline font-bold mb-8 tracking-tight">Future Roadmap</h3>
          <ul className="space-y-4">
            {roadmap.map((item) => (
              <li key={item} className="flex items-center gap-4 text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-8">
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.95, opacity: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-primary-container to-surface-container-low rounded-xl p-12 md:p-16 text-center border border-secondary/10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 blur-[80px] rounded-full"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Turn complexity into clarity.</h2>
            <p className="text-xl text-on-surface-variant mb-12">Available for AI product design, requirement intelligence, and developer workflow automation projects.</p>
            <button
              onClick={() => setCurrentPage('assistant')}
              className="bg-on-surface text-surface px-12 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all cursor-pointer flex items-center gap-3 mx-auto"
            >
              Start a Conversation <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const ExperienceScreen = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Cyber Managers Software Services Pvt. Ltd.",
      period: "JULY'23 — NOV'25",
      description: "Architected and scaled a mission-critical attendance system serving 200k+ active users. Optimized backend latency by 40% and implemented robust real-time synchronization protocols.",
      tags: ["High Concurrency", "Distributed Systems", "System Design"]
    }
  ];

  const techStack = [
    { name: "Python", icon: <Terminal className="w-8 h-8" /> },
    { name: "FastAPI", icon: <Rocket className="w-8 h-8" /> },
    { name: "React", icon: <Box className="w-8 h-8" /> },
    { name: "MongoDB", icon: <Database className="w-8 h-8" /> },
    { name: "AWS", icon: <Cloud className="w-8 h-8" /> },
    { name: "LangChain", icon: <Brain className="w-8 h-8" /> }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <span className="uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">Archive 01</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6">Experience & <br/><span className="text-secondary text-glow">Architecture</span></h1>
          <p className="text-lg md:text-xl text-on-primary-container leading-relaxed max-w-xl">
            Engineering scalable backends and intelligent systems. Specializing in high-concurrency environments and neural integration.
          </p>
        </div>
        <div className="flex gap-4 mb-2">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-gradient px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-surface shadow-lg hover:scale-105 transition-transform inline-flex items-center justify-center"
          >
            View Resume
          </a>
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="bg-surface-container-highest/30 border border-secondary/20 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-secondary hover:bg-secondary/10 transition-colors inline-flex items-center justify-center"
          >
            Download PDF
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <section className="lg:col-span-7">
          <h2 className="font-headline text-2xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-outline-variant/30"></span>
            Journey Log
          </h2>
          <div className="relative border-l border-outline-variant/20 ml-4 pl-12 space-y-20">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative ${idx > 0 ? 'opacity-60' : ''}`}>
                <div className={`absolute -left-[57px] top-0 w-2.5 h-2.5 rounded-full ${idx === 0 ? 'bg-secondary shadow-[0_0_15px_#5de6ff]' : 'bg-outline-variant'}`}></div>
                <div className="flex flex-col gap-2 mb-6">
                  <span className="text-xs tracking-widest text-tertiary uppercase">{exp.period}</span>
                  <h3 className="font-headline text-3xl font-bold">{exp.role}</h3>
                  <p className="text-secondary font-medium text-lg">{exp.company}</p>
                </div>
                <div className="glass-panel p-8 rounded-lg">
                  <p className="text-on-primary-container leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags?.map(tag => (
                      <span key={tag} className="bg-surface-container-highest px-3 py-1 rounded-sm text-[10px] font-bold tracking-tighter uppercase text-primary border border-outline-variant/10">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="font-headline text-2xl font-bold mb-8">Core Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-lg flex flex-col items-center justify-center gap-3 group hover:border-secondary/40 transition-all cursor-default">
                  <div className="text-secondary group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-8 rounded-xl bg-slate-950 border border-outline-variant/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full"></div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
            </div>
            <div className="space-y-3 font-mono text-xs text-on-primary-container">
              <p className="text-secondary">$ systemctl status infrastructure</p>
              <p className="opacity-80">● nodes.tanmesh.io - Main Grid Cluster</p>
              <p className="opacity-80">   Loaded: loaded (/etc/systemd/system/cloud.service)</p>
              <p className="text-tertiary">   Active: active (running) since Thu 2024-03-21</p>
              <p className="opacity-40">   Main PID: 1024 (fastapi-worker)</p>
              <p className="text-secondary mt-4">$ _</p>
            </div>
          </div>

          <div className="h-64 rounded-xl overflow-hidden grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <img 
              src="https://picsum.photos/seed/tech/800/600" 
              alt="Tech circuit" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const AssistantScreen = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: "Hello. I am Tanmesh's digital twin. I can answer questions about his technical stack, professional journey, or open-source contributions. How can I assist your inquiry today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactFeedback, setContactFeedback] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  useEffect(() => {
    const existingSessionId = window.localStorage.getItem('portfolio-chat-session-id');
    if (existingSessionId) {
      setSessionId(existingSessionId);
      return;
    }

    const nextSessionId = createSessionId();
    window.localStorage.setItem('portfolio-chat-session-id', nextSessionId);
    setSessionId(nextSessionId);
  }, []);

  const handleSend = async (presetMessage?: string) => {
    const messageToSend = (presetMessage ?? input).trim();
    if (!messageToSend || !sessionId || isLoading) return;

    setMessages((prev) => [...prev, { role: 'user', text: messageToSend }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(buildApiUrl('/api/chat'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageToSend,
          session_id: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Chat request failed with status ${response.status}`);
      }

      const data = await response.json() as { reply?: string };
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: data.reply ?? "I couldn't generate a reply right now. Please try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: "The FastAPI assistant backend is not reachable right now. Start the backend server and configure GEMINI_API_KEY if you want full AI responses with memory.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactFieldChange = (
    field: 'name' | 'email' | 'message',
    value: string,
  ) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
    setContactFeedback(null);
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: contactForm.name.trim(),
      email: contactForm.email.trim(),
      message: contactForm.message.trim(),
      source: 'assistant-direct-signal',
    };

    if (!payload.name || !payload.email || !payload.message || isSubmittingContact) {
      setContactFeedback({
        type: 'error',
        text: 'Please fill in your name, email, and message before sending.',
      });
      return;
    }

    setIsSubmittingContact(true);
    setContactFeedback(null);

    try {
      const response = await fetch(buildApiUrl('/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json() as { detail?: string };

      if (!response.ok) {
        throw new Error(data.detail ?? `Contact request failed with status ${response.status}`);
      }

      setContactForm({
        name: '',
        email: '',
        message: '',
      });
      setContactFeedback({
        type: 'success',
        text: 'Message transmitted successfully. It has been stored in MongoDB.',
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now. Please try again.';

      setContactFeedback({
        type: 'error',
        text: errorMessage,
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      <section className="lg:col-span-7 flex flex-col gap-8">
        <header>
          <h1 className="font-headline font-bold text-5xl md:text-6xl tracking-tight mb-4">
            Architecting <br/><span className="text-secondary">Intelligence.</span>
          </h1>
          <p className="text-lg text-on-primary-container max-w-xl leading-relaxed">
            Explore my engineering depth through this neural interface. Ask about my work with LLMs, backend infrastructure, or specific projects like ReqScan AI.
          </p>
        </header>

        <div className="glass-panel rounded-xl border border-outline-variant/15 flex flex-col h-[600px] shadow-xl relative overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 bg-surface-container-high/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full cta-gradient flex items-center justify-center">
                <Brain className="text-surface w-6 h-6" />
              </div>
              <div>
                <p className="font-headline font-bold text-sm tracking-wide">PORTFOLIO AGENT v1.0</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Operational</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'cta-gradient' : 'bg-surface-container-highest'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-surface" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-4 rounded-2xl border ${
                  msg.role === 'user' ? 'bg-secondary/10 border-secondary/20 rounded-tr-none' : 'bg-surface-container-low border-outline-variant/5 rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 max-w-[85%]">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-surface-container-highest">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-2xl border bg-surface-container-low border-outline-variant/5 rounded-tl-none">
                  <p className="text-sm leading-relaxed text-on-primary-container">Thinking through Tanmesh&apos;s portfolio context...</p>
                </div>
              </div>
            )}
          </div>

          <div className="px-6 pb-4 flex flex-wrap gap-2">
            {["What's your LLM experience?", "View Github activity", "Tech Stack"].map(q => (
              <button 
                key={q}
                onClick={() => void handleSend(q)}
                disabled={isLoading || !sessionId}
                className="px-4 py-2 rounded-full bg-surface-container-highest border border-outline-variant/20 text-xs text-on-surface-variant hover:bg-secondary/10 hover:text-secondary transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="p-6 pt-0">
            <div className="relative group">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && void handleSend()}
                className="w-full bg-surface-container-highest border-b border-outline-variant/30 px-6 py-4 rounded-t-xl focus:outline-none focus:border-secondary transition-colors text-sm placeholder:text-on-surface-variant/50" 
                placeholder="Inquire about infrastructure, AI, or experience..." 
                type="text"
                disabled={isLoading || !sessionId}
              />
              <button 
                onClick={() => void handleSend()}
                disabled={isLoading || !sessionId}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-secondary hover:scale-110 transition-transform"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-center mt-3 text-on-surface-variant/40 tracking-widest uppercase">Inference provided by FastAPI + Gemini + portfolio RAG memory</p>
          </div>
        </div>
      </section>

      <section className="lg:col-span-5 flex flex-col gap-8">
        <div className="glass-panel rounded-lg p-8 border border-outline-variant/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-tertiary/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-headline font-bold mb-2">Direct Signal</h2>
            <p className="text-on-primary-container text-sm mb-8">Initiate a direct communication channel for collaborations or professional opportunities.</p>
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Identification</label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-secondary transition-colors placeholder:text-outline-variant"
                  placeholder="Your Name"
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => handleContactFieldChange('name', e.target.value)}
                  disabled={isSubmittingContact}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Digital Address</label>
                <input
                  className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-secondary transition-colors placeholder:text-outline-variant"
                  placeholder="Email@domain.com"
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => handleContactFieldChange('email', e.target.value)}
                  disabled={isSubmittingContact}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Payload</label>
                <textarea
                  className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-secondary transition-colors resize-none placeholder:text-outline-variant"
                  placeholder="Your message or project scope..."
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => handleContactFieldChange('message', e.target.value)}
                  disabled={isSubmittingContact}
                ></textarea>
              </div>
              {contactFeedback && (
                <p
                  className={`text-sm ${
                    contactFeedback.type === 'success' ? 'text-secondary' : 'text-red-400'
                  }`}
                >
                  {contactFeedback.text}
                </p>
              )}
              <button
                className="w-full py-4 cta-gradient rounded-full font-bold text-surface text-sm tracking-widest uppercase hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                type="submit"
                disabled={isSubmittingContact}
              >
                {isSubmittingContact ? 'Transmitting...' : 'Transmit Message'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a href="mailto:joshi.tanmesh@gmail.com" className="glass-panel p-6 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-high transition-colors group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Mail className="text-secondary w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/tanmeshjoshi" target="_blank"
              rel="noopener noreferrer"  className="glass-panel p-6 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-high transition-colors group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Linkedin className="text-secondary w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">LinkedIn</span>
          </a>
          <a href="https://github.com/Tanmesh1" target="_blank"
              rel="noopener noreferrer" className="glass-panel p-6 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-high transition-colors group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <Github className="text-secondary w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">GitHub</span>
          </a>
          <div className="glass-panel p-6 rounded-lg border border-outline-variant/10 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-tertiary/5 to-transparent">
            <span className="text-2xl font-headline font-bold text-tertiary">12ms</span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant text-center font-bold">Avg Response Latency</span>
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogScreen = ({ onOpenPost }: { onOpenPost: (post: BlogPost) => void }) => {
  const posts: BlogPost[] = [
    {
      date: "May 24, 2024",
      readTime: "8 MIN READ",
      title: "Building RAG Pipelines: Beyond Simple Vector Search",
      excerpt: "Moving past basic similarity search to implement context-aware retrieval mechanisms using hybrid ranking and semantic re-ranking strategies.",
      tags: ["RAG", "AI", "LLM"],
      image: "/RAG_PIPELINE.webp",
      body: [
        "Simple vector search gets a demo working, but it usually breaks down once the knowledge base gets larger, noisier, or more repetitive. The retrieval layer starts returning fragments that are semantically adjacent without actually being useful for the answer the user needs.",
        "The first upgrade is hybrid retrieval. Dense similarity is still valuable, but lexical matching helps recover exact product names, error strings, and niche terminology that embeddings sometimes flatten away. Combining both signals creates a much stronger candidate set before the model ever sees the context.",
        "After retrieval, re-ranking matters more than most teams expect. A smaller semantic re-ranker or lightweight scoring layer can drastically improve which chunks make the final prompt. That means fewer irrelevant tokens, lower cost, and more grounded completions.",
        "The goal is not to retrieve more text. The goal is to retrieve the right evidence with enough structure that generation becomes the easy part."
      ]
    },
    {
      date: "April 21, 2026",
      readTime: "10 MIN READ",
      title: "System Design Demystified: A Practical Guide to Building Scalable Systems",
      excerpt: "A practical walkthrough of the core system design building blocks that help modern applications scale, stay reliable, and perform under pressure.",
      tags: ["System Design", "Scalability", "Architecture"],
      image: "/system_design.webp",
      body: [
        "When you hear system design, it can feel overwhelming, like you need to memorize dozens of tools, databases, and patterns. But the truth is simpler: system design is about understanding how different components work together to build systems that are scalable, reliable, and efficient.",
        { title: "1. Client Layer – Where It All Begins", text: "Every system starts with the client layer, whether that is a web application, mobile app, or even an IoT device. The client is responsible for sending requests to the backend and displaying responses to users. Think of it as the face of your system." },
        { title: "2. API Layer – The Entry Point", text: "The API layer acts as the gateway between clients and backend services. It ensures that requests are properly routed and secured through mechanisms such as authentication, authorization, rate limiting, and request routing. This is where tools like API gateways and load balancers come into play." },
        { title: "3. Application Layer – The Brain", text: "This is where the business logic lives. Whether you are using a monolith or microservices architecture, this layer processes requests and applies the rules that shape how the application behaves. Services like user management, payments, and notifications usually live here." },
        { title: "4. Database Layer – The Memory", text: "Databases store and manage your data. Relational systems like MySQL and PostgreSQL are ideal for structured data and strong consistency, while NoSQL systems like MongoDB and Cassandra provide flexible schemas and high scalability. Indexing, replication, and sharding are essential techniques for performance, reliability, and growth." },
        { title: "5. Caching Layer – The Speed Booster", text: "Caching helps reduce database load and improves response time. Tools like Redis and Memcached store frequently accessed data so the system does not need to fetch it from the database every time, making the entire application feel faster and more efficient." },
        { title: "6. Load Balancer – Traffic Controller", text: "A load balancer distributes incoming requests across multiple servers. This prevents any single server from being overloaded, improves overall performance, and ensures high availability during traffic spikes." },
        { title: "7. Message Queue – Asynchronous Backbone", text: "Message queues enable asynchronous communication between services. With tools like Kafka, RabbitMQ, or AWS SQS, work such as sending confirmation emails or processing background events can be queued and handled later instead of blocking the main request." },
        { title: "8. Storage Systems – Beyond Databases", text: "Not all data belongs in a database. Storage systems are better suited for images, videos, logs, and backups. Object storage platforms like AWS S3 are commonly used because they are durable, scalable, and cost effective for large unstructured files." },
        { title: "9. CDN – Global Speed Optimization", text: "A content delivery network distributes static content across servers around the world. This reduces latency, speeds up content delivery, and creates a better experience for users regardless of where they are located." },
        { title: "10. Security Layer – Protecting the System", text: "Security is non-negotiable. Authentication verifies identity, authorization determines permissions, and encryption through HTTPS and TLS protects data as it moves through the system. Strong security design has to be present across every layer, not added later." },
        { title: "11. Monitoring & Logging – Observability", text: "You cannot fix what you cannot see. Monitoring and logging tools such as Prometheus, Grafana, and the ELK stack help teams track system health, debug problems, and create alerts before incidents escalate into outages." },
        { title: "12. Scalability – Handling Growth", text: "Scalability is how systems survive growth. Vertical scaling increases the power of a single machine, while horizontal scaling adds more machines. Modern systems typically rely on horizontal scaling and autoscaling to handle traffic changes efficiently." },
        { title: "13. Networking & Infrastructure – The Foundation", text: "DNS, VPCs, and firewalls form the infrastructure foundation of the system. They control how components communicate, stay isolated, and remain secure while serving traffic reliably." },
        { title: "14. Deployment & DevOps – Shipping Faster", text: "DevOps practices help automate and streamline deployments. Docker makes packaging consistent, Kubernetes helps orchestrate containers, and CI CD pipelines make it easier to ship changes safely and predictably." },
        { title: "15. Data Processing Systems – Handling Big Data", text: "When systems deal with large-scale data, processing becomes its own layer. Batch systems like Hadoop and stream processing tools such as Kafka Streams and Spark are used to process and transform data efficiently at scale." },
        { title: "16. Reliability & Consistency", text: "Reliable systems are built with failure in mind. Concepts like the CAP theorem, eventual consistency, fault tolerance, and circuit breakers help teams design services that stay stable even when parts of the system fail." },
        { title: "17. Design Patterns – The Blueprint", text: "Patterns such as microservices, event-driven architecture, CQRS, and saga workflows provide proven ways to organize complex systems. The right choice depends on the trade-offs the system needs to make rather than following trends blindly." },
        "The most important lesson in system design is that it is not about memorizing tools. It is about understanding trade-offs. Ask what happens under high traffic, where the bottlenecks are, what can fail, and how the system should respond. That mindset is what turns scattered components into a well-designed system."
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <section className="mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-headline text-[3.5rem] font-bold leading-[1.1] tracking-tight text-glow mb-6">
              The Architect's <br/>
              <span className="text-secondary">Log.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              Explorations in the abstract, logical, and invisible layers of modern software engineering. High-performance patterns for the elite.
            </p>
            <div className="relative max-w-xl group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="text-on-primary-container w-5 h-5" />
              </div>
              <input 
                className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:border-secondary focus:ring-0 py-4 pl-14 pr-6 text-on-surface placeholder:text-on-primary-container transition-all rounded-t-lg" 
                placeholder="Search the knowledge base..." 
                type="text"
              />
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="text-xs uppercase tracking-widest text-on-primary-container py-2 font-bold">Featured:</span>
              {['Scalability', 'Databases', 'Microservices'].map(cat => (
                <button key={cat} className="bg-surface-container-highest px-4 py-1.5 rounded-full text-sm font-medium hover:text-secondary transition-colors">{cat}</button>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-secondary/5 blur-[80px] rounded-full"></div>
            <div className="relative glass-panel rounded-xl overflow-hidden aspect-video border border-outline-variant/10">
              <img 
                src="/distributed_system_images.webp" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
                alt="Architecture"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="text-xs uppercase tracking-widest text-secondary font-bold">Featured Architecture</span>
                </div>
                <h3 className="font-headline text-2xl font-bold">Global State Synchronization at Edge</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Recent Dispatches</h2>
            <div className="h-px flex-grow mx-8 bg-outline-variant/15"></div>
          </div>

          {posts.map((post, idx) => (
            <article key={idx} className="group relative">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden bg-surface-container-low">
                  <img 
                    src={post.image} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" 
                    alt={post.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-on-primary-container mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-secondary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-on-primary-container line-clamp-2 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-surface-container-high text-on-surface">#{tag}</span>
                      ))}
                    </div>
                    <button
                      onClick={() => onOpenPost(post)}
                      className="text-secondary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                    >
                      Read Dispatch <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="lg:col-span-4 space-y-12">
          <section className="glass-panel rounded-lg p-8 border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-8">
              <History className="text-tertiary w-6 h-6" />
              <h2 className="font-headline text-xl font-bold uppercase tracking-tight">Daily Learnings</h2>
            </div>
            <div className="space-y-8">
              {[
                { text: "Prefer consistent hashing over simple modulo when scaling cache nodes to minimize re-mapping.", meta: "May 24 • Tip #412" },
                { text: "Bloom filters are your best friend for avoiding expensive disk lookups for non-existent keys.", meta: "May 23 • Tip #411" },
                { text: "When implementing retries, always use exponential backoff with jitter to prevent thundering herds.", meta: "May 22 • Tip #410" }
              ].map((tip, idx) => (
                <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-tertiary before:to-transparent">
                  <p className="text-sm italic text-on-surface mb-2">"{tip.text}"</p>
                  <span className="text-[10px] font-bold text-on-primary-container uppercase tracking-widest">{tip.meta}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 text-xs font-bold uppercase tracking-widest text-tertiary border border-tertiary/30 rounded-full hover:bg-tertiary/5 transition-all">
              View All Insights
            </button>
          </section>

          <section className="bg-surface-container rounded-lg p-8">
            <h3 className="font-headline text-xl font-bold mb-4">Stay Synced.</h3>
            <p className="text-sm text-on-primary-container mb-6 leading-relaxed">Weekly architectural breakdowns and technical deep-dives delivered to your terminal.</p>
            <div className="space-y-4">
              <input className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 focus:border-secondary focus:ring-0 py-3 px-4 text-sm rounded-t-md" placeholder="engineer@domain.com" type="email"/>
              <button className="w-full py-4 rounded-full cta-gradient text-surface font-bold text-sm uppercase tracking-widest">
                Join the Observatory
              </button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

const BlogPostScreen = ({
  post,
  onBack,
}: {
  post: BlogPost;
  onBack: () => void;
}) => {
  return (
    <div className="pt-32 pb-24 px-8 max-w-5xl mx-auto">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-on-primary-container hover:text-secondary transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dispatches
      </button>

      <section className="relative overflow-hidden rounded-[2rem] glass-panel border border-outline-variant/10 mb-14">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/55 to-transparent z-10"></div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[300px] md:h-[420px] object-cover opacity-55"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 bottom-0 z-20 p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-on-primary-container mb-5">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] max-w-4xl mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      <div className="grid lg:grid-cols-12 gap-10">
        <article className="lg:col-span-8 glass-panel rounded-[2rem] border border-outline-variant/10 p-8 md:p-10">
          <div className="flex flex-wrap gap-3 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-surface-container-highest text-xs font-bold uppercase tracking-wider text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="space-y-7">
            {post.body.map((section, index) => (
              <p key={`${post.title}-${index}`} className="text-base md:text-lg leading-8 text-on-surface-variant">
                {typeof section === 'string' ? (
                  section
                ) : (
                  <>
                    <span className="font-semibold text-on-surface">{section.title}</span>{' '}
                    {section.text}
                  </>
                )}
              </p>
            ))}
          </div>
        </article>

        <aside className="lg:col-span-4 space-y-8">
          <section className="glass-panel rounded-[2rem] border border-outline-variant/10 p-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-secondary font-bold mb-4">
              Post Notes
            </p>
            <p className="text-sm leading-7 text-on-primary-container">
              This layout is ready for full blog content. Add or edit paragraphs in the post&apos;s
              <span className="text-on-surface"> body </span>
              array to expand the article without changing the design.
            </p>
          </section>

          <section className="bg-surface-container rounded-[2rem] p-8 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold mb-4">Next Signal</h3>
            <p className="text-sm text-on-primary-container leading-7">
              Use this space for a related post, newsletter prompt, or author note while keeping the same visual rhythm as the rest of the site.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    if (page === 'blog') {
      setSelectedBlogPost(null);
    }
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedBlogPost]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={navigateTo} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && <HomeScreen setCurrentPage={navigateTo} />}
            {currentPage === 'projects' && <ProjectsScreen setCurrentPage={navigateTo} />}
            {currentPage === 'experience' && <ExperienceScreen />}
            {currentPage === 'assistant' && <AssistantScreen />}
            {currentPage === 'blog' && !selectedBlogPost && (
              <BlogScreen
                onOpenPost={(post) => {
                  setSelectedBlogPost(post);
                  setCurrentPage('blog');
                }}
              />
            )}
            {currentPage === 'blog' && selectedBlogPost && (
              <BlogPostScreen post={selectedBlogPost} onBack={() => setSelectedBlogPost(null)} />
            )}
            {currentPage === 'agenticSalesDriver' && <AgenticSalesDriverCaseStudy setCurrentPage={navigateTo} />}
            {currentPage === 'reqscanAiAnalyzer' && <ReqscanAiAnalyzerCaseStudy setCurrentPage={navigateTo} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Mobile Bottom NavBar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-xl border-t border-outline-variant/10 px-8 py-3 z-50">
        <div className="flex justify-between items-center">
          {(['home', 'experience', 'projects', 'assistant'] as Page[]).map((page) => (
            <button 
              key={page}
              onClick={() => navigateTo(page)}
              className={`flex flex-col items-center gap-1 ${currentPage === page ? 'text-secondary' : 'text-on-primary-container'}`}
            >
              {page === 'home' && <HomeIcon className="w-5 h-5" />}
              {page === 'experience' && <History className="w-5 h-5" />}
              {page === 'projects' && <Box className="w-5 h-5" />}
              {page === 'assistant' && <Brain className="w-5 h-5" />}
              <span className="text-[10px] uppercase font-bold tracking-tighter">
                {page === 'assistant' ? 'AI' : page === 'experience' ? 'Exp' : page}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
