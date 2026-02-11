"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { footerPages, footerInfo } from '@/data/content';
import { AnimatedButton } from '@/components/ui/animated-button';

interface FooterProps {
  onBuyTemplate: () => void;
}



export function Footer({ onBuyTemplate }: FooterProps) {
  return (
    <footer className="bg-background text-foreground relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="py-8 sm:py-12 lg:py-16"
        >
          {/* Top Section */}
          <div className="mb-16 sm:mb-24 lg:mb-32">
            {/* Brand Badge */}
            <div className="mb-6 sm:mb-8">
              <div className="inline-block bg-primary text-primary-foreground px-3 sm:px-4 py-1 sm:py-2 text-xs font-bold uppercase tracking-wider">
                demo.V2
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Left Side - Brand */}
              <div className="order-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic uppercase leading-[0.9] mb-6 sm:mb-8 break-words">
                  ENGINEERING<br />AESTHETICS
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md uppercase tracking-wide">
                  PREMIUM 3D MODELS AND DIGITAL ASSETS FOR HIGH-PERFORMANCE
                  CREATIVE APPLICATIONS AND TERMINAL-FIRST WORKFLOWS.
                </p>
              </div>

              {/* Right Side - Actions */}
              <div className="order-2 lg:order-2 space-y-8 sm:space-y-12">
                {/* Newsletter Section */}
                <div>
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 sm:mb-4">
                    SUBSCRIBE
                  </h3>
                  <div className="mb-4 sm:mb-6">
                    <p className="text-base sm:text-lg italic text-muted-foreground mb-3 sm:mb-4">Newsletter</p>
                    <div className="flex items-center">
                      <div className="flex-1 h-px bg-border mr-3 sm:mr-4"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 border border-border flex items-center justify-center flex-shrink-0">
                        <span className="text-sm sm:text-lg">→</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div>
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 sm:mb-4">
                    CONTACT
                  </h3>
                  <div className="mb-4 sm:mb-6">
                    <p className="text-base sm:text-lg italic text-muted-foreground mb-3 sm:mb-4">Start Build</p>
                  </div>
                  <AnimatedButton onClick={onBuyTemplate} className="w-full">
                    GET TEMPLATE
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-8 sm:space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12">
              {/* Index Section */}
              <div className="lg:col-span-3">
                <h4 className="text-xs font-bold text-foreground mb-4 sm:mb-6 uppercase tracking-widest">
                  (INDEX)
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {footerPages.map((link, index) => (
                    <div key={link.label} className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs text-muted-foreground/70 font-mono w-6 sm:w-8 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide break-words"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Section */}
              <div className="lg:col-span-3">
                <h4 className="text-xs font-bold text-foreground mb-4 sm:mb-6 uppercase tracking-widest">
                  (STATUS)
                </h4>
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-xs font-bold text-foreground uppercase tracking-wide">
                      MAINNET ONLINE
                    </span>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {footerInfo.slice(0, 3).map((link, index) => (
                    <div key={link.label} className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs text-muted-foreground/70 font-mono w-6 sm:w-8 flex-shrink-0">
                        {String(index + 4).padStart(2, '0')}.
                      </span>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide break-words"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Large Brand Text */}
              <div className="lg:col-span-6 hidden sm:block">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-muted/20 uppercase leading-none text-right break-words">
                  demo
                </h2>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-border py-4 sm:py-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    © 2024 demo CREATIVE SYSTEMS INC.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                  <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap">
                    PRIVACY
                  </a>
                  <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap">
                    ENCRYPTION
                  </a>
                  <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide whitespace-nowrap">
                    GOVERNANCE
                  </a>
                  <span className="text-xs text-muted-foreground/70 font-mono whitespace-nowrap">
                    BUILD: #3D2-ES1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
