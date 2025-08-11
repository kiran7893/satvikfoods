"use client";

import { motion } from "framer-motion";
import { Package, Globe, Award } from "lucide-react";
import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative py-8 lg:py-10 overflow-hidden min-h-[420px] flex items-center">
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

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 right-20 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-float"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-green-400/15 rounded-full blur-xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Package className="w-4 h-4" />
            <span>Premium Products</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-green-400">Premium</span> Products
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Discover our range of premium preserved vegetables and gherkins, crafted with care and delivered to global markets with uncompromising quality.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-2 mx-auto">
                <Globe className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-2xl font-bold text-white">24+</div>
              <div className="text-green-200 text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-2 mx-auto">
                <Award className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-green-200 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-2 mx-auto">
                <Package className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-2xl font-bold text-white">7+</div>
              <div className="text-green-200 text-sm">Premium Products</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 