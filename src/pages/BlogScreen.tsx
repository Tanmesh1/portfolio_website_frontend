import { Link } from 'react-router-dom';
import { Search, History, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { slugify } from '../lib/slugify';

export const BlogScreen = () => {
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

          {blogPosts.map((post, idx) => (
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
                    <Link
                      to={`/blog/${slugify(post.title)}`}
                      className="text-secondary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                    >
                      Read Dispatch <ArrowRight className="w-4 h-4" />
                    </Link>
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
