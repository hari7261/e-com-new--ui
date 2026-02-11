"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, Check } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';
import { NumberInput } from '@/components/ui/number-input';
import type { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, items, updateQuantity } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      type: 'product',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
      }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image Container */}
      <Link href="#" className="block relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-8 transition-transform duration-400 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link href="#">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-base font-medium text-gray-900">
            USD ${product.price.toFixed(2)}
          </p>
          {items.find((i) => i.id === product.id) ? (
            <div className="flex items-center gap-2">
              <NumberInput
                value={items.find((i) => i.id === product.id)?.quantity || 0}
                min={0}
                max={99}
                onChange={(val: number) => updateQuantity(product.id, val)}
                className="h-8"
              />
            </div>
          ) : (
            <AnimatedButton
              onClick={handleAddToCart}
              className="h-8 px-4 text-xs"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add
            </AnimatedButton>
          )}
        </div>
      </div>
    </motion.div>
  );
}
