"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users, Award, Leaf, Globe } from "lucide-react";
import Link from "next/link";

const companyStats = [
  {
    number: "4000+",
    label: "Partner Farmers",
    icon: Users,
    description: "Trusted empanelled farmers following sustainable practices",
  },
  {
    number: "50+",
    label: "Countries Served",
    icon: Globe,
    description: "Exporting premium products to global markets",
  },
  {
    number: "25+",
    label: "Years Experience",
    icon: Award,
    description: "Longest experience in preserved vegetables field",
  },
  {
    number: "100%",
    label: "Natural Process",
    icon: Leaf,
    description: "Following sustainable and natural farming practices",
  },
];

export default function AboutHero() {
  return (
    <section className="py-8 lg:py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Back to Home - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-4 left-4 sm:left-8 z-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-8 mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Satvic Foods
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            India&apos;s leading exporter of premium pickled gherkins and
            vegetables, bringing authentic flavors to over 50 countries
            worldwide through sustainable farming practices.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 glass-card rounded-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-4">
                <stat.icon size={28} className="text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-700 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
