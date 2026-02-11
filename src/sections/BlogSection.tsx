import { SectionHeader } from '@/components/SectionHeader';
import { BlogCard } from '@/components/BlogCard';
import { articles } from '@/data/content';

export function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Latest Articles"
          subtitle="Discover tips, trends, and insights from our blog."
          linkText="View All"
          linkHref="#blog"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
