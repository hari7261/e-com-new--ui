"use client";

import { motion } from 'framer-motion';
import { threeDModels } from '@/data/content';
import { ProductCard } from '@/components/ProductCard';
import { SectionHeader } from '@/components/SectionHeader';
import { Search, Cuboid as Cube } from 'lucide-react';

export default function ModelsPage() {
    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4 text-purple-600">
                            <Cube className="w-6 h-6" />
                            <span className="font-bold tracking-widest uppercase text-sm">Asset Library</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-none mb-6">
                            Cinema-Grade <br />3D Models.
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            Hand-picked, high-topology models for AEC, VFX, and creative design.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 w-full md:w-96 text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                        <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Quality Verified</div>
                    </div>
                </div>

                {/* Filter / Search Placeholder */}
                <div className="h-1 bg-gray-100 rounded-full mb-16" />

                {/* Models Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {threeDModels.map((model, i) => (
                        <motion.div
                            key={model.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-square rounded-4xl bg-gray-50 overflow-hidden mb-6 border border-gray-100 group-hover:shadow-2xl group-hover:shadow-purple-100 transition-all duration-500">
                                <img
                                    src={model.image}
                                    alt={model.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-gray-900 shadow-sm uppercase">{model.category}</span>
                                    {model.isFree && <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold shadow-sm uppercase">Free</span>}
                                </div>
                            </div>

                            <div className="px-2">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                                        {model.name}
                                    </h3>
                                    <span className="text-lg font-bold text-gray-900">
                                        {model.price === 0 ? 'Free' : `$${model.price}`}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{model.description}</p>

                                <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                    <span>{model.format}</span>
                                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                    <span>{model.polygons} Polys</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Explore CTA */}
                <div className="mt-32 p-12 md:p-20 rounded-5xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 text-center">
                    <h2 className="text-3xl font-bold mb-4 italic">"The quality is unmatched."</h2>
                    <p className="text-gray-500 max-w-lg mx-auto mb-8 font-medium">
                        Used by international studios for high-end production rendering and real-time visualization.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                        <div className="text-left">
                            <div className="font-bold text-gray-900 leading-none">Alex Rivera</div>
                            <div className="text-xs text-gray-500 mt-1 uppercase tracking-tighter">Lead Technical Artist @ Nebula</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
