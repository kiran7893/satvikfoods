"use client";

import { motion } from "framer-motion";
import { Leaf, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const galleryImages = [
  {
    src: "/awards-1.jpg",
    alt: "Food Safety Excellence Award",
    title: "Food Safety Excellence",
    description:
      "Recognized for maintaining highest food safety standards and quality management systems",
  },
  {
    src: "/awards-2.jpg",
    alt: "International Quality Certification",
    title: "International Quality Certification",
    description:
      "Certified for excellence in international food processing and export quality standards",
  },
  {
    src: "/awards-3.jpg",
    alt: "Industry Leadership Award",
    title: "Industry Leadership Recognition",
    description:
      "Honored for outstanding contribution to the food processing industry and innovation",
  },
  {
    src: "/awards-4.jpg",
    alt: "Export Excellence Award",
    title: "Export Excellence Achievement",
    description:
      "Acknowledged for exceptional performance in international food exports and trade",
  },
  {
    src: "/awards-5.jpg",
    alt: "Quality Management Certification",
    title: "Quality Management Excellence",
    description:
      "Certified for implementing world-class quality management systems and processes",
  },
  {
    src: "/awards-6.jpg",
    alt: "Agricultural Innovation Award",
    title: "Agricultural Innovation Recognition",
    description:
      "Recognized for innovative approaches in agricultural processing and sustainability",
  },
  {
    src: "/awards-7.jpg",
    alt: "Business Excellence Award",
    title: "Business Excellence Achievement",
    description:
      "Honored for outstanding business practices and contribution to the food industry",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background inherited from layout */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-green-600 font-medium text-sm mb-4"
          >
            <Leaf size={16} />
            <span>Awards & Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Awards &{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Excellence Recognition
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Celebrating our commitment to excellence through industry
            recognition, certifications, and awards that validate our dedication
            to quality and innovation.
          </motion.p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden glass-card shadow-organic">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-bold mb-3"
                >
                  {galleryImages[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-green-100 text-lg leading-relaxed max-w-2xl"
                >
                  {galleryImages[currentIndex].description}
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={toggleAutoPlay}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-8 gap-4 overflow-x-auto pb-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-green-500 scale-110"
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-green-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
