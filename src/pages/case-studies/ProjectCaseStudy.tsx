import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { GITHUB_PROFILE_URL, projects } from '../../data/projects';
import { iconMap } from '../../lib/icons';

export const ProjectCaseStudy = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project?.caseStudy) {
    return <Navigate to="/projects" replace />;
  }

  const cs = project.caseStudy;
  const [headlineBefore, headlineAfter = ''] = cs.headline.split(cs.headlineHighlight);

  return (
    <div className="pt-28 pb-24">
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <button
          onClick={() => navigate('/projects')}
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
          <span className="text-secondary font-label tracking-[0.2em] uppercase text-xs mb-6 block">{cs.eyebrow} // Case Study</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.1] mb-8">
            {headlineBefore}<span className="text-gradient-cyan-purple">{cs.headlineHighlight}</span>{headlineAfter}
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-3xl">
            {cs.summary}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-gradient text-surface px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                View Live Demo <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <a
              href={project.repoUrl ?? GITHUB_PROFILE_URL}
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
                {cs.problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3"><span className="text-error font-bold">•</span> {problem}</li>
                ))}
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
            <h2 className="text-3xl font-headline font-bold mb-6 tracking-tight">{cs.architectureTitle}</h2>
            <p className="text-lg text-on-surface leading-relaxed mb-8">
              {cs.architecture}
            </p>
            <div className="flex flex-wrap gap-3">
              {cs.architectureTags.map((tag) => (
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
          {cs.workflow.map((step, idx) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-8 group"
              >
                <div className="w-16 h-16 rounded-full bg-surface-container-high border border-secondary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {Icon && <Icon className="text-secondary w-6 h-6" />}
                </div>
                <div className={`flex-grow pb-8 ${idx !== cs.workflow.length - 1 ? 'border-b border-outline-variant/10' : ''}`}>
                  <h3 className="text-xl font-bold font-headline mb-2">{String(idx + 1).padStart(2, '0')}. {step.title}</h3>
                  <p className="text-on-surface-variant">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 md:px-10 mb-24 bg-surface-container-lowest py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl font-headline font-bold">Technological Core</h2>
            <p className="text-secondary font-label text-sm uppercase tracking-widest">{cs.techTagline}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cs.techs.map((tech) => (
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
          <h2 className="text-5xl font-headline font-bold mb-12 leading-tight">Engineered for<br /><span className="text-tertiary">{cs.featuresHighlight}</span></h2>
          <div className="space-y-8">
            {cs.features.map((feature) => (
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
              alt={cs.showcaseImage.alt}
              src={cs.showcaseImage.src}
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {cs.metric && (
            <div className="absolute -bottom-8 -left-8 bg-primary-container p-6 rounded-xl border border-secondary/20 z-20 hidden md:block">
              <p className="text-4xl font-bold text-secondary font-headline">{cs.metric.value}</p>
              <p className="text-xs uppercase tracking-widest font-label text-on-surface-variant">{cs.metric.label}</p>
            </div>
          )}
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
            {cs.hurdles.map((challenge, idx) => (
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
            {cs.roadmap.map((item) => (
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
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">{cs.ctaTitle}</h2>
            <p className="text-xl text-on-surface-variant mb-12">{cs.ctaText}</p>
            <button
              onClick={() => navigate('/assistant')}
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
