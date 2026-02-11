"use client";

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { Users, Target, Zap, Globe } from 'lucide-react';

export default function AboutPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const stats = [
        { label: 'Founded', value: '2024', icon: Globe },
        { label: 'Models', value: '10K+', icon: Target },
        { label: 'Creators', value: '500+', icon: Users },
        { label: 'Downloads', value: '1M+', icon: Zap },
    ];

    return (
        <div className="pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full bg-[url('https://images.unsplash.com/photo-1614850523296-e8c041de4398?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10"
                    />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
                    >
                        We curate the <span className="text-purple-600">Future</span> of 3D.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        demo is a boutique marketplace for the world's most talented creators and forward-thinking brands.
                    </motion.p>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <motion.div {...fadeInUp}>
                            <SectionHeader
                                title="Our Philosophy"
                                subtitle="Crafted with Precision"
                            />
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We believe that every pixel matters. In an era where digital experiences are becoming indistinguishable from reality, the quality of your assets defines your identity.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                That's why we don't just host models; we curate them. Every asset on our platform undergoes a rigorous quality check to ensure it meets the highest standards of geometry, textures, and performance.
                            </p>
                        </motion.div>
                        <motion.div
                            {...fadeInUp}
                            className="relative rounded-3xl overflow-hidden aspect-square md:aspect-video bg-gray-100"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
                                alt="Design Process"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-stats gap-8 md:flex md:justify-between items-center text-center">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                {...fadeInUp}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <SectionHeader title="Why demo?" subtitle="The Standard" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Quality First', desc: 'Hand-picked assets from verified creators. No clutter, just excellence.' },
                            { title: 'Optimized Workflow', desc: 'Models arrive ready to use with universal formats and clean topologies.' },
                            { title: 'Creative Freedom', desc: 'Flexible Licensing that grows with your project, from indie to enterprise.' }
                        ].map((value, i) => (
                            <motion.div
                                key={value.title}
                                {...fadeInUp}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-4xl bg-white border border-gray-100 hover:border-purple-200 transition-colors"
                            >
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
