import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Rocket, Brain, Network, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

export const HomeScreen = () => {
  const navigate = useNavigate();

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
                onClick={() => navigate('/projects')}
                className="cta-gradient text-surface font-bold px-10 py-4 rounded-full neon-glow hover:scale-105 transition-transform w-full sm:w-auto tracking-wide"
              >
                View Projects
              </button>
              <button
                onClick={() => navigate('/assistant')}
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
              onClick={() => navigate('/assistant')}
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
