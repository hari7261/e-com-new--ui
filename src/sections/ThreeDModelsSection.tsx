"use client";

import { motion } from 'framer-motion';
import { Download, Calendar, Box, Layers, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedButton } from '@/components/ui/animated-button';
import { SectionHeader } from '@/components/SectionHeader';
import { threeDModels } from '@/data/content';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { NumberInput } from '@/components/ui/number-input';

export function ThreeDModelsSection() {
  const { addToCart, items, updateQuantity } = useCart();
  const { isAuthenticated, setIsAuthOpen } = useAuth();

  const handleDownload = (model: typeof threeDModels[0]) => {
    if (!isAuthenticated) {
      setIsAuthOpen(true);
      return;
    }
    alert(`Downloading ${model.name}...`);
  };

  const handleBook = (model: typeof threeDModels[0]) => {
    if (!isAuthenticated) {
      setIsAuthOpen(true);
      return;
    }
    addToCart({
      id: model.id,
      name: model.name,
      price: model.price,
      image: model.image,
      category: model.category,
      type: '3d-model',
    });
  };

  return (
    <section id="3d-models" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="3D Models"
          subtitle="Download premium 3D models or book custom designs for your projects."
          linkText="View All Models"
          linkHref="#3d-models"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {threeDModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1] as const,
              }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {model.isFree && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                    FREE
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {model.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                  {model.description}
                </p>

                {/* Specs */}
                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Box className="w-3 h-3" />
                    {model.format}
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    {model.polygons}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-semibold text-gray-900">
                    {model.isFree ? 'Free' : `$${model.price.toFixed(2)}`}
                  </p>
                  <div className="flex gap-2 items-center">
                    {model.isFree ? (
                      <AnimatedButton
                        onClick={() => handleDownload(model)}
                        className="h-9 px-4 text-sm"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </AnimatedButton>
                    ) : (
                      <>
                        <Button
                          onClick={() => handleBook(model)}
                          size="sm"
                          variant="outline"
                          className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full px-3 h-9"
                        >
                          <Calendar className="w-4 h-4" />
                        </Button>
                        {items.find((i) => i.id === model.id) ? (
                          <NumberInput
                            value={items.find((i) => i.id === model.id)?.quantity || 0}
                            min={0}
                            max={99}
                            onChange={(val: number) => updateQuantity(model.id, val)}
                            className="h-9"
                          />
                        ) : (
                          <AnimatedButton
                            onClick={() => handleBook(model)}
                            className="h-9 px-4 text-sm"
                          >
                            <Check className="w-4 h-4 mr-1" />
                            Book
                          </AnimatedButton>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
