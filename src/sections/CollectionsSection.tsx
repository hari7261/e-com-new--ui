import { SectionHeader } from '@/components/SectionHeader';
import { CollectionCard } from '@/components/CollectionCard';
import { collections } from '@/data/content';

export function CollectionsSection() {
  return (
    <section id="collections" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Collections"
          subtitle="Showcase all of the different collections you have to offer."
          linkText="View All"
          linkHref="#collections"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
