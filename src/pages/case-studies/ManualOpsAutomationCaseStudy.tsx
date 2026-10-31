import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Webhook,
  Brain,
  Database,
  Bot,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const workflowSteps = [
  {
    id: '01',
    title: 'Intake',
    desc: 'Incoming requests (messages, tickets, orders) are captured as they arrive, with no manual sorting step.',
    icon: <Webhook className="text-secondary w-6 h-6" />
  },
  {
    id: '02',
    title: 'Intent Understanding',
    desc: 'An LLM parses the request into structured intent — what the user wants, and what data is needed to act on it.',
    icon: <Brain className="text-secondary w-6 h-6" />
  },
  {
    id: '03',
    title: 'Live Data Check',
    desc: 'The agent queries live systems (inventory, CRM, internal APIs) rather than acting on stale or assumed state.',
    icon: <Database className="text-secondary w-6 h-6" />
  },
  {
    id: '04',
    title: 'Action + Response',
    desc: 'The workflow executes the action and replies in natural language, escalating to a human only for genuine exceptions.',
    icon: <Bot className="text-secondary w-6 h-6" />
  }
];

const techs = [
  { name: 'Python', role: 'Core Logic' },
  { name: 'FastAPI', role: 'Orchestration' },
  { name: 'OpenAI', role: 'Reasoning Engine' },
  { name: 'MongoDB', role: 'State & Memory' },
];

const features = [
  {
    title: 'End-to-End Handling',
    desc: 'The workflow owns the full loop — intent to action to response — instead of just flagging work for a human.'
  },
  {
    title: 'Exception-Only Escalation',
    desc: 'Humans step in only when the agent is genuinely uncertain, not for every routine request.'
  },
  {
    title: 'Grounded in Live State',
    desc: 'Decisions are checked against real, current data rather than cached snapshots or assumptions.'
  }
];

const hurdles = [
  'Keeping the agent from acting confidently on incomplete or ambiguous requests.',
  'Integrating cleanly with existing internal systems without a rip-and-replace.',
  'Making escalation-to-human feel seamless rather than like a dead end.'
];

const roadmap = [
  'Multi-channel intake beyond the initial integration',
  'Confidence-scored auto-escalation thresholds',
  'Self-service dashboards for ops teams to review agent decisions',
];

export const ManualOpsAutomationCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-24">
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <button
          onClick={() => navigate('/consulting')}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary hover:text-on-surface transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Consulting
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
          <span className="text-secondary font-label tracking-[0.2em] uppercase text-xs mb-6 block">Enterprise AI Consulting // Case Study</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.1] mb-8">
            Turning Manual Ops Into <span className="text-gradient-cyan-purple">Agentic Workflows</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-3xl">
            How to take a team off repetitive, judgment-light request handling by giving an AI agent
            the full loop: understand, check live data, act, and respond.
          </p>
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
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Support/ops load scales linearly with request volume, not with efficiency gains.</li>
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Most incoming requests follow the same shape, but still route through a human every time.</li>
                <li className="flex items-start gap-3"><span className="text-error font-bold">•</span> Existing automation (rules, scripts) breaks the moment a request doesn't match a fixed pattern.</li>
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
            <h2 className="text-3xl font-headline font-bold mb-6 tracking-tight">The Agentic Approach</h2>
            <p className="text-lg text-on-surface leading-relaxed mb-8">
              Replace fixed rules with an LLM-driven agent that reasons about each request, checks live
              system state before acting, and only escalates what it's genuinely unsure about.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Agentic', 'Live Data Grounded', 'Exception-Only Escalation'].map((tag) => (
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
            <p className="text-secondary font-label text-sm uppercase tracking-widest">Built for reliability under real-world load</p>
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

      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24">
        <h2 className="text-5xl font-headline font-bold mb-12 leading-tight text-center">Engineered for <span className="text-tertiary">Reliable Autonomy</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <CheckCircle2 className="text-secondary w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-on-surface-variant">{feature.desc}</p>
              </div>
            </div>
          ))}
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
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Get your ops team off the treadmill.</h2>
            <p className="text-xl text-on-surface-variant mb-12">Available for agentic workflow design and automation consulting engagements.</p>
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
