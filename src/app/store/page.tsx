"use client";

import { motion } from 'framer-motion';
import { products } from '@/data/content';
import { ProductCard } from '@/components/ProductCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function StorePage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Technology', 'Footwear', 'Home', 'Apparel', 'Accessories'];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between py-12 gap-8">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
                        >
                            The Store.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 text-xl text-gray-500 max-w-xl"
                        >
                            The best way to buy the professional assets you love.
                        </motion.p>
                    </div>

                    {/* Search bar */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none text-sm shadow-sm"
                        />
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
                    <div className="p-2 bg-white rounded-full border border-gray-200 flex items-center gap-2 px-4 text-gray-600 cursor-pointer hover:bg-gray-50 transition-colors">
                        <SlidersHorizontal className="w-4 h-4" />
                        <span className="text-sm font-medium whitespace-nowrap">Filters</span>
                    </div>

                    <div className="h-6 w-px bg-gray-300 mx-2" />

                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                ? 'bg-black text-white'
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-900'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <ProductCard product={product} index={i} />
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="py-40 text-center">
                        <div className="bg-white p-8 rounded-3xl inline-block shadow-sm">
                            <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">No products found</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
