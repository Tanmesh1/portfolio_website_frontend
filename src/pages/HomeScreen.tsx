import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { consultingProblems } from '../data/consulting';
import { iconMap } from '../lib/icons';

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
              Open for Enterprise Engagements
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
              I'm <span className="text-gradient">Tanmesh</span> — I help enterprises solve real problems with AI.
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">
              As an AI Engineer, I turn <span className="text-secondary font-medium italic">stalled pilots and manual workflows</span> into production systems — agentic automation, production-grade RAG, and backend architecture that holds up at scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={() => navigate('/consulting')}
                className="cta-gradient text-surface font-bold px-10 py-4 rounded-full neon-glow hover:scale-105 transition-transform w-full sm:w-auto tracking-wide"
              >
                View Problems I Solve
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
              {/* Explicit radii: the theme's rounded-lg is 2rem. Inner radius = outer − padding. */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-secondary/40 to-tertiary/40 rounded-[20px] blur-md opacity-75"></div>
              <div className="relative p-1.5 rounded-[18px] bg-white/10 backdrop-blur-md border border-white/20">
                <img
                  src="/profile.jpeg"
                  alt="Tanmesh Joshi"
                  className="rounded-[12px] w-full max-w-[340px] aspect-[3/4] object-cover object-top shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-5 left-5 bg-surface/80 backdrop-blur-md border border-secondary/30 rounded-[10px] px-3 py-2">
                  <div className="flex items-center gap-2 mb-1">
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

      {/* Problems I Solve Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">Problems I Solve for Enterprises</h2>
            <p className="text-on-primary-container text-lg leading-relaxed">
              The recurring gaps I get brought in to close.
            </p>
          </div>
          <button
            onClick={() => navigate('/consulting')}
            className="text-sm uppercase tracking-[0.2em] text-secondary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            See All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultingProblems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="glass-panel rounded-lg p-10 border border-outline-variant/10">
                {Icon && <Icon className="text-tertiary w-8 h-8 mb-6" />}
                <h3 className="text-2xl font-headline font-bold mb-4">{item.title}</h3>
                <p className="text-on-primary-container leading-relaxed mb-6">
                  {item.problem}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-surface-container-highest/50 px-4 py-2 rounded-full text-xs text-primary">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl"></div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Got an AI problem that isn't solved yet?</h2>
          <p className="text-on-primary-container text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Currently taking on select enterprise consulting engagements for Q1-Q2 2026 — agentic automation, production RAG, and backend architecture for AI systems.
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
