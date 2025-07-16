"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Star,
  Mail,
  Phone,
  ArrowRight,
  Leaf,
} from "lucide-react";
import Image from "next/image";
import { type Product } from "@/data/products";

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="py-8 lg:py-10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-premium"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                <Star className="text-yellow-500 fill-current" size={14} />
                <span className="text-xs sm:text-sm font-medium text-gray-900">
                  Premium Quality
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                <Leaf className="w-4 h-4" />
                <span>Premium Product</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 5).map((feature, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs sm:text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-premium text-base group"
                asChild
              >
                <a
                  href={`mailto:bhat@satvicfoods.in?subject=Inquiry for ${product.name}`}
                  className="flex items-center gap-2"
                >
                  <Mail size={18} />
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors text-base"
                asChild
              >
                <a href="tel:+919448133201" className="flex items-center gap-2">
                  <Phone size={18} />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 