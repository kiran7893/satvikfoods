"use client";

import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const galleryImages = [
  {
    src: "/awards-1.jpg",
    alt: "Food Safety Excellence Award",
  },
  {
    src: "/awards-2.jpg",
    alt: "International Quality Certification",
  },
  {
    src: "/awards-3.jpg",
    alt: "Industry Leadership Award",
  },
  {
    src: "/awards-4.jpg",
    alt: "Export Excellence Award",
  },
  {
    src: "/awards-5.jpg",
    alt: "Quality Management Certification",
  },
  {
    src: "/awards-6.jpg",
    alt: "Agricultural Innovation Award",
  },
  {
    src: "/awards-7.jpg",
    alt: "Business Excellence Award",
  },
];

export default function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const AUTOPLAY_DELAY = 10000;

  // Slide change handler
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi || !isAutoPlaying) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);
    emblaApi.on('select', onSelect);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect, isAutoPlaying]);

  // Navigation
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((idx: number) => emblaApi && emblaApi.scrollTo(idx), [emblaApi]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="bg-green-50 pb-10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4" />
            <span>Awards & Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Awards &{" "}
            <span className="text-gradient">Excellence Recognition</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Celebrating our commitment to excellence through industry recognition, 
            certifications, and awards that validate our dedication to quality and innovation.
          </motion.p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-8"
        >
          {/* Embla Carousel */}
          <div className="relative w-full h-80 md:h-[600px] rounded-3xl overflow-hidden glass-card shadow-premium-lg" ref={emblaRef}>
            <div className="flex h-full">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] relative h-full"
                  style={{ minWidth: '100%' }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-6 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollPrev}
              className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
            </motion.button>
          </div>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollNext}
              className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Auto-play Toggle */}
          <div className="absolute top-6 right-6 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleAutoPlay}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 flex-wrap"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo(index)}
              className={`relative w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === selectedIndex
                  ? "ring-4 ring-green-500 scale-110"
                  : "ring-2 ring-white/30 hover:ring-green-300"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              {index === selectedIndex && (
                <div className="absolute inset-0 bg-green-500/20" />
              )}
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
