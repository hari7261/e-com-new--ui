import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Article } from '@/types';

interface BlogCardProps {
  article: Article;
  index: number;
}

export function BlogCard({ article, index }: BlogCardProps) {
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
      whileHover={{ y: -4 }}
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge */}
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
            article.categoryColor || 'bg-gray-100 text-gray-700'
          }`}
        >
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-700 transition-colors">
          {article.title}
        </h3>

        {/* Author */}
        <div className="mt-4 flex items-center gap-3">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">
              Written by {article.author.name}
            </p>
            <p className="text-xs text-gray-500">{article.author.role}</p>
          </div>
          <ArrowUpRight className="ml-auto w-5 h-5 text-gray-400 group-hover:text-purple-700 transition-colors" />
        </div>
      </div>
    </motion.a>
  );
}
