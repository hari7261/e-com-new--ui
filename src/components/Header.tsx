"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedButton } from '@/components/ui/animated-button';
import { navLinks } from '@/data/content';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  onBuyTemplate: () => void;
}

export function Header({ onBuyTemplate }: HeaderProps) {
  const { isScrolled } = useScrollPosition();
  const { totalItems, setIsCartOpen } = useCart();
  const { user, isAuthenticated, logout, setIsAuthOpen, setAuthMode } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthOpen(true);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              demo_
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* User Actions */}
            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-full">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-5 h-5 text-purple-600" />
                  )}
                  <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="hidden md:flex border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full px-5"
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}

            {/* CTA Button - Desktop */}
            {/* CTA Button - Desktop */}
            <AnimatedButton
              onClick={onBuyTemplate}
              className="hidden md:flex w-auto"
            >
              Get Started
            </AnimatedButton>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Auth */}
            {isAuthenticated ? (
              <div className="flex items-center justify-between py-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  ) : (
                    <User className="w-6 h-6 text-purple-600" />
                  )}
                  <span className="font-medium">{user?.name}</span>
                </div>
                <button onClick={logout} className="text-red-500 flex items-center gap-1">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  handleLoginClick();
                  setIsMobileMenuOpen(false);
                }}
                variant="outline"
                className="border-gray-200 text-gray-700"
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}

            <AnimatedButton
              onClick={() => {
                onBuyTemplate();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-2"
            >
              Get Started
            </AnimatedButton>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
