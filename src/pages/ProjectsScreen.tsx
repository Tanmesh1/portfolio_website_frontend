import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageSquare, FileText, Rocket, Code } from 'lucide-react';

const projects = [
  {
    title: "Agentic Sales Driver",
    description: "Full-stack WhatsApp commerce system that understands buying intent, checks inventory in real time, and replies like a human sales assistant. Built as an agentic workflow for faster conversions and lower support load.",
    tech: ["Python", "OpenAI", "FastAPI", "MongoDB"],
    status: "Production",
    icon: <MessageSquare className="text-secondary" />,
    image: "/agentic_sales_photo.webp",
    caseStudyPath: '/projects/agentic-sales-driver'
  },
  {
    title: "ReqScan AI Analyzer",
    description: "Advanced Requirement Analyzer that transforms unstructured technical specifications into validated BRDs and system architecture maps. Utilizes RAG (Retrieval-Augmented Generation) for precision accuracy.",
    tech: ["OpenAI API", "Pinecone", "JavaScript", "React"],
    status: "Active R&D",
    icon: <FileText className="text-tertiary" />,
    image: "/Reqscan_image.webp",
    caseStudyPath: '/projects/reqscan-ai-analyzer'
  }
];

export const ProjectsScreen = () => {
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
                  <Link
                    to={project.caseStudyPath}
                    className="col-span-2 md:col-span-1 px-4 py-3 rounded-full border border-outline-variant/30 text-center text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all"
                  >
                    Case Study
                  </Link>
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
