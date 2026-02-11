import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="relative rounded-2xl overflow-hidden aspect-video"
        >
          {/* Video/Image Background */}
          <img
            src="/images/video-poster.jpg"
            alt="Product showcase"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-3xl leading-tight">
              Showcase your products in action and outline their benefits.
            </h2>
          </div>

          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlay}
            className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-gray-900" />
            ) : (
              <Play className="w-5 h-5 text-gray-900 ml-0.5" />
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
