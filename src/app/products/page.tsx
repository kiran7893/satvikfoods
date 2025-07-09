"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Eye, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import ProductsHero from "@/components/ProductsHero";

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <ProductsHero />

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-green-50/50 to-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                    >
                      <Link href={`/products/${product.slug}`}>
                        <Eye size={16} className="mr-2" />
                        Read More
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-green-500 text-green-500 hover:bg-green-50"
                    >
                      <a
                        href={`mailto:bhat@satvicfoods.in?subject=Inquiry for ${product.name}`}
                      >
                        <Mail size={16} className="mr-2" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Get in touch to discuss your requirements and discover how our
              premium products can meet your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3"
                asChild
              >
                <a href="mailto:bhat@satvicfoods.in">Get Quote</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3"
                asChild
              >
                <a href="tel:+919448133201">Call Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
