"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Leaf,
  Award,
  Globe,
  CheckCircle,
  Factory,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Background images for hero carousel with different content
const heroSlides = [
  {
    src: "/image-1.jpg",
    alt: "Fresh Vegetables Background",
    badge: "100% Sustainable Farming",
    title: "Sourcing Straight from Farmers",
    subtitle: "Premium quality Gherkins and Allied Vegetables",
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
    title: "Farm to Fork Journey",
    subtitle: "From Field to Your Table",
    description:
      "Our preserved vegetables are processed from top-quality produce, ensuring 100% contamination-free products.",
    icon: Award,
    features: [
      "Farm Fresh",
      "Quality Preserved",
      "Safe Processing",
      "Traceable Journey",
    ],
  },
  {
    src: "/image-4.jpg",
    alt: "Quality Vegetables",
    badge: "Global Distribution",
    title: "Exporting to 24+ Countries",
    subtitle: "International Standards",
    description:
      "Our products are trusted in America, Europe, Russia, Asia, Australia, and Africa, adhering to global quality standards.",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const AUTOPLAY_DELAY =15000;

  // Slide change handler
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);
    emblaApi.on('select', onSelect);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Navigation
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((idx: number) => emblaApi && emblaApi.scrollTo(idx), [emblaApi]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen overflow-hidden ">
      {/* Embla Carousel */}
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] relative h-full"
              style={{ minWidth: '100%' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
              </div>

              {/* Content with Text Transitions */}
              <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
                <div className="max-w-7xl mx-auto w-full">
                  <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                      {selectedIndex === index && (
                        <motion.div
                          key={index}
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
                            <slide.icon size={18} className="text-green-300" />
                            <span>{slide.badge}</span>
                          </motion.div>

                          {/* Main Heading with staggered animation */}
                          <div className="space-y-3">
                            <motion.h1
                              variants={textVariants}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wide"
                            >
                              {slide.title}
                            </motion.h1>

                            <motion.h2
                              variants={textVariants}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-200"
                            >
                              {slide.subtitle}
                            </motion.h2>
                          </div>

                          {/* Description with transition */}
                          <motion.p
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl"
                          >
                            {slide.description}
                          </motion.p>

                          {/* Features List with staggered animation */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                          >
                            {slide.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + featureIndex * 0.1 }}
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
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4 pt-6"
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                asChild
                                size="lg"
                                className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 text-lg"
                              >
                                <Link href="/products">
                                  Explore Products
                                  <ArrowRight size={20} className="ml-2" />
                                </Link>
                              </Button>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-2 border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 text-lg"
                              >
                                <a href="tel:+919448133201" className="flex items-center gap-2">
                                  <Phone size={20} />
                                  Contact Us
                                </a>
                              </Button>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Navigation Arrows */}
      <div className="hidden md:flex absolute inset-y-0 left-4 z-40 items-center custom-swiper-nav">
        <button
          onClick={scrollPrev}
          className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        </button>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-4 z-40 items-center custom-swiper-nav">
        <button
          onClick={scrollNext}
          className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Custom Pagination */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent ${selectedIndex === index ? 'bg-green-500' : 'bg-white/30 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}