"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
}

export function SectionHeader({
  title,
  subtitle,
  linkText,
  linkHref = '#',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-gray-500">{subtitle}</p>
        )}
      </div>
      {linkText && (
        <Link
          href={linkHref}
          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-purple-700 transition-colors"
        >
          {linkText}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </motion.div>
  );
}
