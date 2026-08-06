import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { slugify } from '../lib/slugify';

export const BlogPostScreen = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => slugify(p.title) === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-32 pb-24 px-8 max-w-5xl mx-auto">
      <Link
        to="/blog"
        className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-on-primary-container hover:text-secondary transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dispatches
      </Link>

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
              {post.postNotes.title}
            </p>
            <ul className="space-y-4">
              {post.postNotes.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-7 text-on-primary-container">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-surface-container rounded-[2rem] p-8 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold mb-6">Related Blogs</h3>
            <div className="space-y-5">
              {post.relatedPosts.map((relatedPost) => (
                <article key={relatedPost.title} className="rounded-2xl border border-outline-variant/10 bg-surface-container-low/50 p-5 hover:border-secondary/30 transition-colors">
                  <h4 className="font-headline text-lg font-bold mb-2 leading-tight text-on-surface">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-on-primary-container leading-6 mb-4">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedPost.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};
