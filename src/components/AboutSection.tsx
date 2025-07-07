"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Award, Leaf } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Users,
    title: "2000+ Farmers",
    description:
      "Partnering with small and marginal farmers on long-term contracts",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description:
      "50 KMS from Bengaluru International Airport in Karnataka's vegetable belt",
  },
  {
    icon: Award,
    title: "25+ Years Experience",
    description:
      "Decades of expertise in agro-processing and export industries",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Following sustainable agriculture with dedicated extension team",
  },
];

export default function AboutSection() {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background inherited from layout */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-green-700 font-medium text-sm"
              >
                <Leaf size={16} />
                <span>About Us</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-gray-900"
              >
                Welcome to{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  Satvic Foods
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Satvic Foods Private Limited is one of the leading exporters of
                preserved gherkins and allied vegetables from India. Promoted
                and managed by experienced professionals with considerable
                expertise in the agro-processing industries.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                Located in the rural area of South India, an exclusive and
                extensive fruits and vegetable growing belt. We take pride in
                connecting fields of Rural India to International Consumers
                through quality and food safety standards.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/about-us">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-green-lg font-semibold px-8 py-6 group"
                >
                  Learn More About Us
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl shadow-organic cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                    <feature.icon size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
