'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Download, ChevronRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { AnimatedButton } from '@/components/ui/animated-button';
import { NumberInput } from '@/components/ui/number-input';

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const { isAuthenticated, setIsAuthOpen } = useAuth();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setIsAuthOpen(true);
      setIsCartOpen(false);
      return;
    }
    alert('Checkout functionality coming soon!');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white/60 backdrop-blur-xl z-[60]" // Apple style blurred overlay
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-[#fbfbfd] shadow-[0_0_100px_rgba(0,0,0,0.1)] z-[70] flex flex-col border-l border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100/50">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
                  Bag
                </h2>
                <p className="text-[12px] text-[#86868b] font-medium uppercase tracking-wider">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="group p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5 text-[#1d1d1f]" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar py-2">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center pb-20">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-[#d2d2d7]" />
                  </div>
                  <p className="text-lg font-medium text-[#1d1d1f]">Your bag is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-3 text-purple-600 hover:text-purple-700 text-sm font-semibold flex items-center gap-1 group"
                  >
                    Continue shopping
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-5 flex gap-5 items-center"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 flex-shrink-0 bg-white rounded-xl flex items-center justify-center p-2 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-bold text-[#1d1d1f] leading-snug line-clamp-2">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-[#86868b] hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#86868b] font-medium mt-0.5 uppercase tracking-wide">
                          {item.category}
                        </p>

                        <div className="flex items-center justify-between mt-3.5">
                          <NumberInput
                            value={item.quantity}
                            min={1}
                            max={99}
                            onChange={(val) => updateQuantity(item.id, val)}
                            className="h-7 !ring-0 !border-gray-100 scale-90 -translate-x-1.5"
                          />
                          <p className="text-sm font-bold text-[#1d1d1f]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Summary */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-gray-100 bg-[#fbfbfd]/80 backdrop-blur-md">
                <div className="space-y-2.5">
                  <div className="flex justify-between text-[#86868b] text-[13px] font-medium">
                    <span>Subtotal</span>
                    <span className="text-[#1d1d1f]">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#86868b] text-[13px] font-medium">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold uppercase text-[11px] tracking-wider">Free</span>
                  </div>
                  <div className="pt-2.5 mt-1 border-t border-gray-100 flex justify-between items-baseline">
                    <span className="text-[17px] font-bold text-[#1d1d1f]">Total</span>
                    <span className="text-[20px] font-bold text-[#1d1d1f] tracking-tight">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <AnimatedButton
                    onClick={handleCheckout}
                    className="w-full h-12 text-[15px] font-bold tracking-tight rounded-xl shadow-purple-200/50"
                  >
                    {isAuthenticated ? 'Check Out' : 'Sign in to Check Out'}
                  </AnimatedButton>

                  <p className="text-center text-[9px] text-[#86868b] font-medium uppercase tracking-[0.1em] px-4 opacity-60 leading-relaxed">
                    SECURE CHECKOUT · TAXES INCLUDED
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
