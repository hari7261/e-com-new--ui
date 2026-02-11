import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Collection } from '@/types';

interface CollectionCardProps {
  collection: Collection;
  index: number;
}

export function CollectionCard({ collection, index }: CollectionCardProps) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group relative block rounded-2xl overflow-hidden aspect-[3/4]"
    >
      {/* Background Image */}
      <img
        src={collection.image}
        alt={collection.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {collection.name}
        </h3>

        {/* Arrow Button */}
        <div className="flex justify-end">
          <motion.div
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-gray-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpRight className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
