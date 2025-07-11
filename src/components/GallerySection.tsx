"use client";

import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, Play, Pause, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const galleryImages = [
  {
    src: "/awards-1.jpg",
    alt: "Food Safety Excellence Award",
    title: "Food Safety Excellence",
    description:
      "Recognized for maintaining highest food safety standards and quality management systems",
    year: "2024"
  },
  {
    src: "/awards-2.jpg",
    alt: "International Quality Certification",
    title: "International Quality Certification",
    description:
      "Certified for excellence in international food processing and export quality standards",
    year: "2023"
  },
  {
    src: "/awards-3.jpg",
    alt: "Industry Leadership Award",
    title: "Industry Leadership Recognition",
    description:
      "Honored for outstanding contribution to the food processing industry and innovation",
    year: "2023"
  },
  {
    src: "/awards-4.jpg",
    alt: "Export Excellence Award",
    title: "Export Excellence Achievement",
    description:
      "Acknowledged for exceptional performance in international food exports and trade",
    year: "2022"
  },
  {
    src: "/awards-5.jpg",
    alt: "Quality Management Certification",
    title: "Quality Management Excellence",
    description:
      "Certified for implementing world-class quality management systems and processes",
    year: "2022"
  },
  {
    src: "/awards-6.jpg",
    alt: "Agricultural Innovation Award",
    title: "Agricultural Innovation Recognition",
    description:
      "Recognized for innovative approaches in agricultural processing and sustainability",
    year: "2021"
  },
  {
    src: "/awards-7.jpg",
    alt: "Business Excellence Award",
    title: "Business Excellence Achievement",
    description:
      "Honored for outstanding business practices and contribution to the food industry",
    year: "2021"
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
    }, 5000);

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
    <section className=" bg-green-50 relative overflow-hidden">
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
          {/* Main Image Container */}
          <div className="relative w-full h-80 md:h-[600px] rounded-3xl overflow-hidden glass-card shadow-premium-lg">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-green-300 font-medium">{galleryImages[currentIndex].year}</span>
                </div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                >
                  {galleryImages[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-green-100 text-lg lg:text-xl leading-relaxed max-w-3xl"
                >
                  {galleryImages[currentIndex].description}
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-6 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg"
            >
              <ChevronLeft size={28} />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-6 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-lg"
            >
              <ChevronRight size={28} />
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
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
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
              {index === currentIndex && (
                <div className="absolute inset-0 bg-green-500/20" />
              )}
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
