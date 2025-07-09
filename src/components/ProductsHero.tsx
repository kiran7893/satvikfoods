"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden min-h-[420px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/products-hero.png"
          alt="Satvic Foods Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our range of premium preserved vegetables and gherkins, crafted with care and delivered to global markets with uncompromising quality.
          </motion.p>
        </div>
      </div>
    </section>
  );
} 