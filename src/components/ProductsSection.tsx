"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Award, Globe, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Premium Gherkins",
    image: "/gherkin.jpg",
    description: "Fresh, crisp gherkins preserved to international standards",
  },
  {
    name: "Spicy Jalapenos",
    image: "/jalapeno.jpg",
    description: "Authentic jalapenos with perfect heat and flavor",
  },
  {
    name: "Tender Baby Corn",
    image: "/baby-corn.jpg",
    description: "Sweet, tender baby corn harvested at optimal freshness",
  },
  {
    name: "Cherry Tomatoes",
    image: "/cherry-tomato.jpg",
    description: "Juicy cherry tomatoes bursting with natural sweetness",
  },
  {
    name: "Red Paprika",
    image: "/red-paprika.jpg",
    description: "Vibrant red paprika with rich color and flavor",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background inherited from layout */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-green-600 font-medium text-sm mb-4"
          >
            <Leaf size={16} />
            <span>Our Products</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Premium Quality{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Vegetables & Gherkins
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From farm to global markets, we deliver exceptional quality
            preserved vegetables that meet international standards and customer
            expectations.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-4 rounded-xl shadow-organic cursor-pointer group"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </motion.div>
          ))}
        </div>
  
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/products">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-600 text-white shadow-green-lg font-semibold px-8 py-6 group"
            >
              View All Products
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
