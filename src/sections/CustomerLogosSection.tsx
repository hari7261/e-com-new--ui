import { motion } from 'framer-motion';

const logos = [
  { name: 'Stripe', initial: 'S' },
  { name: 'Notion', initial: 'N' },
  { name: 'Figma', initial: 'F' },
  { name: 'Slack', initial: 'Sl' },
  { name: 'Vercel', initial: 'V' },
];

export function CustomerLogosSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <p className="text-gray-500 mb-8">
            Showcase customer testimonials that build trust and inspire confidence in your products.
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Your <span className="text-purple-600">Customer</span>
          </h2>

          <p className="mt-6 text-gray-500">
            Feature client logos to build trust and credibility for your brand:
          </p>

          {/* Logo Grid */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-lg font-bold">
                  {logo.initial}
                </div>
                <span className="text-lg font-semibold">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
