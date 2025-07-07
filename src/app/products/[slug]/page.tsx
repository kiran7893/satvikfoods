"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Star,
  Mail,
  Phone,
  CheckCircle,
  Package,
  Eye,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { products, getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-8 lg:py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Back to Products - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-4 left-4 sm:left-8 z-10"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            >
              <ArrowLeft size={20} />
              <span>Back to Products</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="text-yellow-500 fill-current" size={16} />
                    <span className="text-sm font-medium text-gray-900">
                      Premium Quality
                    </span>
                  </div>
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
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.features.slice(0, 5).map((feature, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  asChild
                >
                  <a
                    href={`mailto:bhat@satvicfoods.in?subject=Inquiry for ${product.name}`}
                  >
                    <Mail size={20} className="mr-2" />
                    Get Quote
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                  asChild
                >
                  <a href="tel:+919448133201">
                    <Phone size={20} className="mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-16 bg-gradient-to-br from-green-50/50 to-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Product Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Key Features:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Uses & Applications
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {product.uses.map((use, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <Package
                      size={20}
                      className="text-green-600 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700">{use}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Health Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Discover the nutritional advantages of our premium{" "}
              {product.name.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.healthBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-card rounded-xl"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gradient-to-br from-green-50/50 to-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Other Products
            </h2>
            <p className="text-lg text-gray-600">
              Explore our complete range of premium products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct, i) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {relatedProduct.shortDescription}
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      asChild
                    >
                      <Link href={`/products/${relatedProduct.slug}`}>
                        <Eye size={14} className="mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ready to Order {product.name}?
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and get a
              personalized quote for our premium {product.name.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3"
                asChild
              >
                <a
                  href={`mailto:bhat@satvicfoods.in?subject=Order Inquiry for ${product.name}`}
                >
                  Request Quote
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-3"
                asChild
              >
                <a href="tel:+919448133201">Call Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// This is handled by Next.js dynamic routing
