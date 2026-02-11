import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Join our newsletter and get 20% off your first purchase with us.
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 flex gap-3">
            <Input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-5 bg-white border-gray-200 rounded-full text-base focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <AnimatedButton
              type="submit"
              className="px-8"
            >
              Join
            </AnimatedButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
