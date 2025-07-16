"use client";

import { motion } from "framer-motion";
import { CheckCircle, Package } from "lucide-react";
import { type Product } from "@/data/products";

interface ProductDescriptionProps {
  product: Product;
}

export default function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <section className="py-8 lg:py-10 bg-green-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:p-8 rounded-2xl shadow-premium"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Product Overview
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5">
              {product.fullDescription}
            </p>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Key Features:
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700 text-base"
                  >
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Uses & Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:p-8 rounded-2xl shadow-premium"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Uses & Applications
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {product.uses.map((use, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white/80 rounded-lg shadow-sm"
                >
                  <Package
                    size={18}
                    className="text-green-500 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700 text-base">{use}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 