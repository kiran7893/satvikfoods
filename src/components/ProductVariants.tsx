"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import { type Product, type SubProduct } from "@/data/products";

interface ProductVariantsProps {
  product: Product;
  onSubProductClick: (subProduct: SubProduct) => void;
}

export default function ProductVariants({ product, onSubProductClick }: ProductVariantsProps) {
  if (!product.subProducts || product.subProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-8 lg:py-10 bg-green-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Package className="w-4 h-4" />
            <span>Product Variants</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Available <span className="text-gradient">Variants</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our range of {product.name.toLowerCase()} variants, each crafted to meet specific culinary needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.subProducts.map((subProduct: SubProduct, i: number) => (
            <motion.div
              key={subProduct.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden hover:shadow-premium-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
              onClick={() => onSubProductClick(subProduct)}
            >
              {/* Sub-Product Image */}
              <div className="relative h-100 w-full overflow-hidden">
                <Image
                  src={subProduct.image}
                  alt={subProduct.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Sub-Product Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {subProduct.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                  {subProduct.shortDescription}
                </p>

                {/* Read More Button */}
                <Button
                  size="sm"
                  className="w-full btn-premium group"
                >
                  <span className="flex items-center gap-2">
                    <Eye size={14} />
                    Read More
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 