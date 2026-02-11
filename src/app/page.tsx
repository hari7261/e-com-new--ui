"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PromoModal } from '@/components/PromoModal';
import { CartDrawer } from '@/components/CartDrawer';
import { AuthModal } from '@/components/AuthModal';
import { HeroSection } from '@/sections/HeroSection';
import { ProductsSection } from '@/sections/ProductsSection';
import { ThreeDModelsSection } from '@/sections/ThreeDModelsSection';
import { CustomerLogosSection } from '@/sections/CustomerLogosSection';
import { CollectionsSection } from '@/sections/CollectionsSection';
import { VideoSection } from '@/sections/VideoSection';
import { FeaturesSection } from '@/sections/FeaturesSection';
import { BlogSection } from '@/sections/BlogSection';
import { NewsletterSection } from '@/sections/NewsletterSection';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

// Scroll Progress Bar Component
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-purple-600 z-[60] origin-left"
      style={{ scaleX: progress / 100 }}
    />
  );
}

// Back to Top Button
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

import { WideVideoShowcase } from '@/sections/WideVideoShowcase';

export default function Home() {
  const [isPromoOpen, setIsPromoOpen] = useState(false);

  // Show promo modal after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromoOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgressBar />

      <HeroSection />
      <WideVideoShowcase />
      <ProductsSection />
      <ThreeDModelsSection />
      <CustomerLogosSection />
      <CollectionsSection />
      <FeaturesSection />
      <BlogSection />
      <NewsletterSection />

      <PromoModal isOpen={isPromoOpen} onClose={() => setIsPromoOpen(false)} />
      <BackToTop />
    </div>
  );
}
