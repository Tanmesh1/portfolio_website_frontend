import { Terminal, Rocket, Box, Database, Cloud, Brain } from 'lucide-react';

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

export const ExperienceScreen = () => {
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
