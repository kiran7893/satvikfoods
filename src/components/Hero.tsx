"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Award,
  Globe,
  CheckCircle,
  Factory,
} from "lucide-react";

// Background images for hero carousel with different content
const heroSlides = [
  {
    src: "/image-1.jpg",
    alt: "Fresh Vegetables Background",
    badge: "100% Sustainable Farming",
    title: "Sourcing Straight from Farmers",
    subtitle: "Premium Quality Vegetables",
    description:
      "Our wide range of premium vegetables is sourced directly from farmers, helping alleviate poverty and improve rural economies.",
    icon: Leaf,
    features: [
      "Direct from Farm",
      "Premium Quality",
      "Global Export",
      "Sustainable Practices",
    ],
  },
  {
    src: "/image-2.jpg",
    alt: "Vegetable Processing",
    badge: "Advanced Processing",
    title: "Leading Processor of South India",
    subtitle: "State-of-the-Art Facilities",
    description:
      "We process premium vegetables like Gherkins, Jalapeños, Baby Corn, Cherry Tomatoes, and Paprika with cutting-edge technology.",
    icon: Factory,
    features: [
      "Fully Automated",
      "Quality Assured",
      "FSSAI Certified",
      "Export Ready",
    ],
  },
  {
    src: "/image-3.jpg",
    alt: "Farm Fresh Products",
    badge: "Farm to Table",
    title: "Fully Automatic Processing",
    subtitle: "Technology & Innovation",
    description:
      "Our preserved vegetables are processed from top-quality produce, ensuring 100% contamination-free products.",
    icon: Award,
    features: [
      "Cutting-Edge Tech",
      "Zero Contamination",
      "Premium Grade",
      "Quality Control",
    ],
  },
  {
    src: "/image-4.jpg",
    alt: "Quality Vegetables",
    badge: "Global Distribution",
    title: "Exporting to 50+ Countries",
    subtitle: "International Standards",
    description:
      "Our products are trusted in Europe, Asia, the Middle East, and Africa, adhering to global quality standards.",
    icon: Globe,
    features: [
      "Global Reach",
      "Export Quality",
      "International Standards",
      "Trusted Partner",
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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

  const currentSlideData = heroSlides[currentSlide];

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

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Slideshow with Left-to-Right Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlideData.src}
              alt={currentSlideData.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
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
                  className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full text-white font-medium text-sm shadow-md"
                >
                  <currentSlideData.icon size={18} className="text-green-300" />
                  <span>{currentSlideData.badge}</span>
                </motion.div>

                {/* Main Heading with staggered animation */}
                <div className="space-y-3">
                  <motion.h1
                    variants={textVariants}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wide"
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

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6rem" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-0.5 bg-green-400 rounded-full"
                  />
                </div>

                {/* Description with transition */}
                <motion.p
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Features List with staggered animation */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  {currentSlideData.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-2 text-white"
                    >
                      <CheckCircle size={16} className="text-green-400" />
                      <span className="text-base font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons with transition */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 text-lg"
                    >
                      Explore Products
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 text-lg"
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
