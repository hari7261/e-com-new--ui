import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Input } from '@/components/ui/input';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PromoModal({ isOpen, onClose }: PromoModalProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Your 20% discount code has been sent to: ${email}`);
    setEmail('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Content */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-flex items-center justify-center px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium w-fit">
                    Limited Time Offer
                  </span>

                  <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
                    Get 20% off your first order!
                  </h2>

                  <p className="mt-3 text-gray-600">
                    Enter your email below to get your code.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 px-4 bg-gray-100 border-0 rounded-xl text-base focus:ring-2 focus:ring-purple-500"
                    />
                    <AnimatedButton
                      type="submit"
                      className="w-full h-12 rounded-xl"
                    >
                      Get Code
                    </AnimatedButton>
                  </form>

                  <button
                    onClick={onClose}
                    className="mt-4 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>

                {/* Right Image */}
                <div className="hidden md:block relative">
                  <img
                    src="/images/modal-person.jpg"
                    alt="Promotional"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
