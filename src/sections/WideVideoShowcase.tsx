"use client";

import { motion } from 'framer-motion';
import { BlurVignette, BlurVignetteArticle } from '@/components/ui/blur-vignette';

export function WideVideoShowcase() {
    return (
        <section className="relative w-full bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full p-2 sm:p-4 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden"
                >
                    <BlurVignette
                        radius='2.25rem'
                        inset='0px'
                        transitionLength='120px'
                        blur='24px'
                        classname='w-full aspect-video sm:aspect-[21/9] h-auto lg:h-[650px] overflow-hidden rounded-[2.25rem]'
                    >
                        <video
                            autoPlay={true}
                            muted
                            loop
                            playsInline
                            className='w-full h-full object-cover rounded-[2.25rem]'
                        >
                            <source
                                src='/video/video.webm'
                                type='video/webm'
                            />
                        </video>

                        {/* Play Indicator Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 flex items-center justify-center shadow-2xl"
                            >
                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[21px] border-l-white border-b-[12px] border-b-transparent ml-2 opacity-80" />
                            </motion.div>
                        </div>

                        <BlurVignetteArticle />
                    </BlurVignette>
                </motion.div>

                {/* Optional Caption matching the screenshot vibe */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12 text-center text-white text-[10px] font-bold uppercase tracking-[0.4em]"
                >
                    Showreel 2024 • Compilation of our assets
                </motion.div>
            </div>
        </section>
    );
}
