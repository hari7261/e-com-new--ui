import { SectionHeader } from '@/components/SectionHeader';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/content';

export function ProductsSection() {
  return (
    <section id="products" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Most Popular"
          subtitle="Showcase your most popular products, front and center."
          linkText="View All"
          linkHref="#shop"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
