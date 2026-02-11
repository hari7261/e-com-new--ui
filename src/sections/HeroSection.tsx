"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};


import { BlurVignette, BlurVignetteArticle } from '@/components/ui/blur-vignette';

export function HeroSection() {
  return (
    <section className="pt-[72px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-50 to-purple-100 min-h-[600px] lg:h-[700px] flex items-center border border-purple-100 shadow-2xl">
          {/* Shader Gradient Background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <ShaderGradientCanvas
              style={{
                width: '100%',
                height: '100%',
              }}
              lazyLoad={false}

              fov={undefined}
              pixelDensity={1}
              pointerEvents="auto"
            >
              <ShaderGradient
                animate="on"
                type="sphere"
                wireframe={false}
                shader="defaults"
                uTime={0}
                uSpeed={0.3}
                uStrength={0.4}
                uDensity={0.8}
                uFrequency={5.5}
                uAmplitude={7}
                positionX={0}
                positionY={0}
                positionZ={0}
                rotationX={0}
                rotationY={0}
                rotationZ={45}
                color1="#ca8cff"
                color2="#7e00e5"
                color3="#c46ffd"
                reflection={0.5}

                // View (camera) props
                cAzimuthAngle={263}
                cPolarAngle={46}
                cDistance={3.3}
                cameraZoom={12.5}

                // Effect props
                lightType="3d"
                brightness={1.5}
                envPreset="city"
                grain="off"
                toggleAxis={false}
                zoomOut={false}
                hoverState=""
                enableTransition={false}
              />
            </ShaderGradientCanvas>
          </div>

          {/* Center Content Layout */}
          <div className="relative z-10 w-full flex flex-col items-center text-center px-8 sm:px-12 lg:px-20 py-24 sm:py-32">
            <motion.div
              className="max-w-4xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="flex justify-center">
                <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm border border-purple-100">
                  <ShoppingBag className="w-4 h-4" />
                  Marketplace for Creators
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="mt-8 text-5xl sm:text-7xl lg:text-[92px] font-black text-gray-900 leading-[1] tracking-tight"
              >
                Buy & Sell <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">3D Assets</span> <br />
                Globally.
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mt-8 text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
              >
                Access world-class 3D models and creative components.
                Everything you need to build immersive digital experiences.
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-12 flex justify-center gap-4">
                <AnimatedButton href="#products" className="h-[72px] text-xl px-12 shadow-purple-200/50">
                  Browse Store
                  <ArrowUpRight className="ml-2 w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

