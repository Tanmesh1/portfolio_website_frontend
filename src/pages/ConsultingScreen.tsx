import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Search } from 'lucide-react';
import { consultingProblems } from '../data/consulting';
import { iconMap } from '../lib/icons';

const PAGE_SIZE = 20;
const TAG_CHIPS = 12;

// Tags ordered by how many problems use them, so chips stay useful at any scale.
const topTags = Object.entries(
  consultingProblems.flatMap((p) => p.tags).reduce<Record<string, number>>((acc, t) => ({ ...acc, [t]: (acc[t] ?? 0) + 1 }), {}),
)
  .sort((a, b) => b[1] - a[1])
  .slice(0, TAG_CHIPS)
  .map(([t]) => t);

export const ConsultingScreen = () => {
  const [query, setQuery] = useState('');
  const [activeTag, setTag] = useState<string | null>(null);
  const [limit, setLimit] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return consultingProblems.filter(
      (p) =>
        (!activeTag || p.tags.includes(activeTag)) &&
        (!q || [p.title, p.problem, p.approach, p.outcome, ...p.tags].join(' ').toLowerCase().includes(q)),
    );
  }, [query, activeTag]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <section className="mb-24">
        <div className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            Problems I Solve <span className="text-gradient">for Enterprises</span>
          </h1>
          <p className="text-on-primary-container text-lg md:text-xl leading-relaxed max-w-2xl">
            I work with enterprises as an AI Engineer to turn messy, manual, or stalled AI
            initiatives into production systems. Here's what I'm solving right now.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input
            type="search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setLimit(PAGE_SIZE); }}
            placeholder={`Search ${consultingProblems.length} problems…`}
            className="w-full pl-11 pr-4 py-3 rounded-full glass-panel border border-outline-variant/15 bg-transparent text-sm focus:outline-none focus:border-secondary/40"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {topTags.map((tag) => (
            <button
              key={tag}
              onClick={() => { setTag(tag === activeTag ? null : tag); setLimit(PAGE_SIZE); }}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                tag === activeTag
                  ? 'bg-secondary/15 border-secondary/40 text-secondary'
                  : 'border-outline-variant/15 text-on-surface-variant hover:border-secondary/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="text-xs text-on-surface-variant mb-3">
          {filtered.length} of {consultingProblems.length} problems
        </p>

        <div className="divide-y divide-outline-variant/10 glass-panel border border-outline-variant/15 rounded-xl overflow-hidden">
          {filtered.slice(0, limit).map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <details key={item.title} className="group">
                <summary className="flex items-center gap-4 px-5 py-4 cursor-pointer list-none hover:bg-secondary/5 transition-colors [&::-webkit-details-marker]:hidden">
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant/10">
                    {Icon && <Icon className="w-4 h-4 text-secondary" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-headline text-base font-bold tracking-tight">{item.title}</h2>
                    <p className="text-sm text-on-surface-variant truncate">{item.problem}</p>
                  </div>
                  <div className="hidden md:flex gap-2 shrink-0">
                    {item.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-surface-container-highest rounded-sm text-xs text-on-surface-variant">{t}</span>
                    ))}
                  </div>
                  <ChevronDown className="w-4 h-4 shrink-0 text-on-surface-variant transition-transform group-open:rotate-180" />
                </summary>

                <div className="px-5 pb-5 pl-[4.75rem] space-y-4">
                  {([['The Problem', item.problem], ['My Approach', item.approach], ['Outcome', item.outcome]] as const).map(([label, text]) => (
                    <div key={label}>
                      <span className="text-tertiary font-mono text-xs uppercase tracking-widest block mb-1">{label}</span>
                      <p className="text-on-primary-container text-sm leading-relaxed font-light">{text}</p>
                    </div>
                  ))}
                  {item.caseStudyPath && (
                    <Link
                      to={item.caseStudyPath}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary hover:underline"
                    >
                      Read Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </details>
            );
          })}
          {filtered.length === 0 && (
            <p className="px-5 py-8 text-center text-sm text-on-surface-variant">No matching problems.</p>
          )}
        </div>

        {filtered.length > limit && (
          <button
            onClick={() => setLimit(limit + PAGE_SIZE)}
            className="mt-6 mx-auto block px-6 py-2 rounded-full border border-secondary/30 text-xs font-bold uppercase tracking-widest text-secondary hover:bg-secondary/10 transition-colors"
          >
            Show more
          </button>
        )}
      </div>

      <section className="mt-32 p-12 glass-panel rounded-xl border border-outline-variant/10 text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/10 rounded-full blur-[100px]"></div>
        <h3 className="font-headline text-3xl font-bold mb-4">Have a problem that looks like this?</h3>
        <p className="text-on-primary-container max-w-xl mx-auto mb-8">
          Tell me where AI is supposed to be helping your business and isn't yet. I'll tell you
          straight whether it's solvable and how.
        </p>
        <div className="flex justify-center">
          <Link
            to="/assistant"
            className="px-8 py-4 rounded-full cta-gradient text-surface font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
