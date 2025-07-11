"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Factory, Award, Globe } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// Background images for hero carousel with different content
const heroSlides = [
  {
    src: "/image-1.jpg",
    alt: "Fresh Vegetables Background",
    badge: "100% Sustainable Farming",
    title: "Sourcing Straight from Farmers",
    subtitle: "Premium Quality Vegetables",
    description: "Our wide range of premium vegetables is sourced directly from farmers, helping alleviate poverty and improve rural economies.",
    icon: Leaf,
    stats: [
      { number: "4000+", label: "Partner Farmers" },
      { number: "25+", label: "Years Experience" },
      { number: "100%", label: "Natural Process" },
    ],
  },
  {
    src: "/image-2.jpg",
    alt: "Vegetable Processing",
    badge: "Advanced Processing",
    title: "Leading Processor of South India",
    subtitle: "State-of-the-Art Facilities",
    description: "We process premium vegetables like Gherkins, Jalapeños, Baby Corn, Cherry Tomatoes, and Paprika with cutting-edge technology.",
    icon: Factory,
    stats: [
      { number: "50+", label: "Countries Served" },
      { number: "25+", label: "Years Experience" },
      { number: "100%", label: "Quality Assured" },
    ],
  },
  {
    src: "/image-3.jpg",
    alt: "Farm Fresh Products",
    badge: "Farm to Table",
    title: "Farm to Fork Journey",
    subtitle: "From Field to Your Table",
    description: "Farm to fork - Our preserved vegetables are processed from top-quality produce, ensuring 100% contamination-free products.",
    icon: Award,
    stats: [
      { number: "25+", label: "Years Experience" },
      { number: "50+", label: "Countries Served" },
      { number: "100%", label: "Zero Contamination" },
    ],
  },
  {
    src: "/image-4.jpg",
    alt: "Quality Vegetables",
    badge: "Global Distribution",
    title: "Exporting to 50+ Countries",
    subtitle: "International Standards",
    description: "Our products are trusted in Europe, Asia, the Middle East, and Africa, adhering to global quality standards.",
    icon: Globe,
    stats: [
      { number: "50+", label: "Countries Served" },
      { number: "4000+", label: "Partner Farmers" },
      { number: "100%", label: "Export Quality" },
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlideData.src}
              alt={currentSlideData.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 z-30 flex items-center">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 z-30 flex items-center">
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-16 lg:bottom-36 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-green-500"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Content with Text Transitions */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 pt-36 pb-28 sm:pt-40 sm:pb-32 lg:pt-24 lg:pb-48 min-h-[80vh]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-6"
              >
                {/* Badge with transition */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg mx-auto"
                >
                  <currentSlideData.icon size={18} className="text-green-600" />
                  <span>{currentSlideData.badge}</span>
                </motion.div>

                {/* Main Heading with staggered animation */}
                <div className="space-y-3">
                  <motion.h1
                    variants={textVariants}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  >
                    {currentSlideData.title}
                  </motion.h1>

                  <motion.h2
                    variants={textVariants}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-200"
                  >
                    {currentSlideData.subtitle}
                  </motion.h2>

                  {/* Animated green line for each slide */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "6rem", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      className="h-0.5 bg-green-400 rounded-full mx-auto my-2 w-24 sm:w-32 md:w-40"
                    />
                  </AnimatePresence>
                </div>

                {/* Description with transition */}
                <motion.p
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Stats with staggered animation */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
                >
                  {currentSlideData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-green-200 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons with transition */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6 justify-center"
                >
                  <Button
                    size="lg"
                    className="btn-premium text-lg px-8 py-4 group"
                  >
                    Explore Products
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg transition-colors"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
