"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/data/products";

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
}

export default function RelatedProducts({ currentProduct, allProducts }: RelatedProductsProps) {
  const relatedProducts = allProducts
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, 4);

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
            <span>Explore More</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Other <span className="text-gradient">Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our complete range of premium products
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct, i) => (
            <motion.div
              key={relatedProduct.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden hover:shadow-premium-lg transition-shadow hover:scale-105"
            >
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">
                  {relatedProduct.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {relatedProduct.shortDescription}
                </p>
                <Button
                  size="sm"
                  className="w-full btn-premium group"
                  asChild
                >
                  <Link href={`/products/${relatedProduct.slug}`} className="flex items-center gap-2">
                    <Eye size={14} />
                    View Details
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 