import type { Metadata } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/lib/format';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Insights',
  description: `${siteConfig.name} insights on shipping elite digital platforms, headless content, and growth systems.`,
};

type BlogPageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const allPostsData = getSortedPostsData();
  const allCategories = Array.from(
    new Set(allPostsData.map((post) => post.category).filter((category): category is string => Boolean(category)))
  );

  const activeCategory = searchParams?.category;
  const filteredPosts = activeCategory
    ? allPostsData.filter((post) => post.category === activeCategory)
    : allPostsData;

  return (
    <main className="py-5">
      <div className="hypernova-container">
        <header className="mb-5">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Insights</span>
          <h1 className="display-5 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
            The Hypernova field notes
          </h1>
          <p className="text-muted lead mt-3" style={{ maxWidth: '720px' }}>
            Deep dives on composable platforms, product strategy, and the systems thinking that powers our launches.
          </p>
        </header>

        {allCategories.length > 0 && (
          <div className="d-flex flex-wrap gap-2 mb-4">
            <Link
              href="/blog"
              className={`badge text-decoration-none ${!activeCategory ? 'bg-primary text-white' : 'bg-light text-muted'}`}
            >
              All
            </Link>
            {allCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <Link
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  key={category}
                  className={`badge text-decoration-none ${isActive ? 'bg-primary text-white' : 'bg-light text-muted'}`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        )}

        <div className="d-grid gap-4">
          {filteredPosts.map(({ id, title, date, excerpt, tags, readingTimeMinutes, category }) => (
            <article key={id} className="glass-card p-4 p-lg-5 d-flex flex-column gap-3">
              <div className="d-flex flex-wrap justify-content-between text-muted small text-uppercase letter-spacing-1 gap-2">
                <span>{category ?? 'Insight'}</span>
                <span>{formatDate(date)}</span>
              </div>
              <h2 className="h3 text-white">{title}</h2>
              <p className="text-muted mb-0">{excerpt}</p>
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div className="d-flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="badge bg-opacity-10 bg-primary text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted small">{readingTimeMinutes} min read</span>
                  <Link href={`/blog/${id}`} className="text-decoration-none text-primary fw-semibold">
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
