"use client";

import { motion } from "framer-motion";
import { Users, Award, Leaf, Globe } from "lucide-react";
import Image from "next/image";

const companyStats = [
  {
    number: "4000+",
    label: "Partner Farmers",
    icon: Users,
    description: "Trusted empanelled farmers following sustainable practices",
  },
  {
    number: "24+",
    label: "Countries Served",
    icon: Globe,
    description: "Exporting premium products to global markets",
  },
  {
    number: "15+",
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
    <section className="relative py-8 lg:py-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aboutus-1.jpg"
          alt="Satvic Foods Processing Facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-16 mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="text-green-500">
              Satvic Foods
            </span>
          </h1>

          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            India&apos;s leading exporter of premium pickled gherkins and
            vegetables, bringing authentic flavors to over 24 countries
            worldwide through sustainable farming practices.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 glass-card rounded-xl backdrop-blur-md bg-white/90"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <stat.icon size={28} className="text-green-500" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
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
