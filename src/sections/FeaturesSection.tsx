import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Truck } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Only the best products curated for our customers.',
  },
  {
    icon: Zap,
    title: 'Fast Shipping',
    description: 'Get your orders delivered within 2-3 business days.',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Your transactions are protected with encryption.',
  },
  {
    icon: Truck,
    title: 'Free Returns',
    description: '30-day hassle-free return policy on all items.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
              Highlight what makes you stand out
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Use this section to show off the key features like these.
            </p>
          </motion.div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
