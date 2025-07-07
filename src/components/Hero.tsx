"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Award, Globe } from "lucide-react";

// Product images for slideshow
const images = [
  { src: "/gherkin.jpg", alt: "Fresh Gherkins", title: "Premium Gherkins" },
  { src: "/jalapeno.jpg", alt: "Jalapenos", title: "Spicy Jalapenos" },
  { src: "/baby-corn.jpg", alt: "Baby Corn", title: "Tender Baby Corn" },
  {
    src: "/cherry-tomato.jpg",
    alt: "Cherry Tomatoes",
    title: "Sweet Cherry Tomatoes",
  },
  { src: "/red-paprika.jpg", alt: "Red Paprika", title: "Vibrant Red Paprika" },
];

const floatingIcons = [
  { Icon: Leaf, delay: 0, x: "10%", y: "20%" },
  { Icon: Award, delay: 0.5, x: "85%", y: "15%" },
  { Icon: Globe, delay: 1, x: "90%", y: "70%" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background now inherited from layout */}

      {/* Main Content Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto z-10">
        {/* Floating Background Elements - Enhanced visibility */}
        {floatingIcons.map(({ Icon, delay, x, y }, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/60 pointer-events-none hidden lg:block"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.6, 0.8, 0.6],
              scale: [1, 1.2, 1],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              delay,
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}

        {/* Content Section */}
        <div className="flex-1 flex flex-col gap-8 items-start z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-green-700 font-medium text-sm shadow-organic"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Leaf size={16} />
              </motion.div>
              <span>100% Sustainable Farming</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Fresh, Sustainable{" "}
              <motion.span
                className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent inline-block"
                style={{
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Gherkins & Vegetables
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 max-w-xl leading-relaxed"
            >
              Satvic Foods is a leading producer and exporter of premium
              Gherkins, Jalapenos, Baby Corn, Cherry Tomatoes, and Red Paprika.
              Sourced from{" "}
              <span className="font-semibold text-green-700">
                2000+ sustainable farms
              </span>{" "}
              in Karnataka, India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-green-lg font-semibold px-8 py-6 text-lg group"
                >
                  Contact Us
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-card border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold px-8 py-6 text-lg shadow-organic"
                >
                  View Products
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-8 pt-8 border-t border-green-100"
          >
            {[
              { number: "2000+", label: "Partner Farms" },
              { number: "50+", label: "Countries Served" },
              { number: "25+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center glass-card p-4 rounded-lg shadow-organic cursor-pointer"
              >
                <motion.div
                  className="text-2xl font-bold text-green-700"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center relative w-full max-w-lg z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-square max-w-md"
          >
            {/* Enhanced Background Decorations */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-lime-300/50 to-green-400/50 rounded-3xl rotate-3 scale-110 opacity-70 shadow-green"
              animate={{
                rotate: [3, 8, -2, 3],
                scale: [1.1, 1.15, 1.1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <div className="relative z-10 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[index].src}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotateY: -90 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-green-xl glass-card border-4 border-white/50">
                    <Image
                      src={images[index].src}
                      alt={images[index].alt}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg glass-card px-3 py-1 rounded-lg"
                    >
                      {images[index].title}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Enhanced Dot indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20 glass-card p-2 rounded-full shadow-organic">
              {images.map((_, i) => (
                <motion.button
                  key={i}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    i === index
                      ? "bg-green-600 border-green-600 scale-125 shadow-green"
                      : "bg-white border-green-300 hover:border-green-500 hover:shadow-organic"
                  }`}
                  onClick={() => setIndex(i)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  animate={i === index ? { scale: [1.25, 1.4, 1.25] } : {}}
                  transition={
                    i === index ? { duration: 2, repeat: Infinity } : {}
                  }
                  aria-label={`Show ${images[i].alt}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
