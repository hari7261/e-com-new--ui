"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Home, ChevronLeft } from "lucide-react";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center font-sans overflow-hidden">
            {/* Container with healthy spacing to prevent any overlap */}
            <div className="w-full max-w-4xl px-6 py-20 flex flex-col items-center">

                {/* 1. Visual Area (Image Only) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-lg aspect-video relative flex items-center justify-center"
                >
                    <img
                        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                        alt="404 Illustration"
                        className="w-full h-full object-contain"
                    />
                    {/* Subtle 404 text integrated into the same block bg */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                        <span className="text-[15rem] font-black tracking-tighter">404</span>
                    </div>
                </motion.div>

                {/* 2. Content Area (Text) */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-12 text-center"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        Lost in <span className="text-purple-600">Space.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-500 max-w-md mx-auto leading-relaxed mb-10">
                        The page you're reaching for doesn't exist. It's likely moved elsewhere or never was.
                    </p>
                </motion.div>

                {/* 3. Global Buttons Area */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                >
                    {/* Primary Global Animated Button */}
                    <AnimatedButton
                        onClick={() => router.push("/")}
                        className="w-full sm:w-56 h-14 text-lg font-bold"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Back to Home
                    </AnimatedButton>

                    {/* Secondary Styled Button */}
                    <button
                        onClick={() => router.back()}
                        className="w-full sm:w-56 h-14 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-full transition-all border border-gray-100 flex items-center justify-center gap-2 active:scale-95"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </motion.div>

            </div>

            {/* Footer Branding */}
            <div className="absolute bottom-10 left-0 right-0 text-center">
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
                    demo Creative Protocol v2.5
                </p>
            </div>
        </div>
    );
}
