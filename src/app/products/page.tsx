"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Eye, Mail, ArrowRight, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import ProductsHero from "@/components/ProductsHero";

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-green-50">
      {/* Hero Section */}
      <ProductsHero />

      {/* Products Grid */}
      <section className="py-8 lg:py-10 bg-green-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Package className="w-4 h-4" />
              <span>Our Products</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Premium <span className="text-gradient">Products</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our range of premium preserved vegetables and gherkins, crafted with care and delivered to global markets with uncompromising quality.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass-card rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star
                        className="text-yellow-500 fill-current"
                        size={16}
                      />
                      <span className="text-sm font-medium text-gray-900">
                        Premium
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {product.shortDescription}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      asChild
                      className="flex-1 btn-premium group"
                    >
                      <Link href={`/products/${product.slug}`} className="flex items-center gap-2">
                        <Eye size={16} />
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
                    >
                      <a
                        href={`mailto:bhat@satvicfoods.in?subject=Inquiry for ${product.name}`}
                        className="flex items-center gap-2"
                      >
                        <Mail size={16} />
                        Enquiry Now
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
