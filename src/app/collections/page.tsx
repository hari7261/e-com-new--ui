"use client";

import { motion } from 'framer-motion';
import { collections } from '@/data/content';
import { CollectionCard } from '@/components/CollectionCard';
import { SectionHeader } from '@/components/SectionHeader';

export default function CollectionsPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="py-20 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <SectionHeader
                            title="Curated Collections"
                            subtitle="The Anthology"
                        />
                        <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                            Explore our hand-picked selections of assets curated for specific industries, themes, and creative directions.
                        </p>
                    </motion.div>
                </div>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {collections.map((collection, i) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <CollectionCard collection={collection} index={i} />
                        </motion.div>
                    ))}

                    {/* Mock extra collections for a fuller page */}
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={`mock-${item}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (item + collections.length) * 0.1 }}
                        >
                            <div className="group relative h-[450px] overflow-hidden rounded-4xl bg-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                <div className="absolute inset-0 grayscale opacity-40 group-hover:scale-110 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')]" />
                                <div className="absolute bottom-10 left-10 z-20">
                                    <span className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2 block">Coming Soon</span>
                                    <h3 className="text-2xl font-bold text-white">Cyberpunk Essentials</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <section className="mt-20 py-24 rounded-5xl bg-black text-white overflow-hidden relative">
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600 rounded-full blur-[120px]" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px]" />
                    </div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Want a custom collection?</h2>
                        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                            Our team can curate specific assets based on your brand guidelines or project requirements.
                        </p>
                        <button className="h-14 px-10 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                            Talk to a Curator
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
