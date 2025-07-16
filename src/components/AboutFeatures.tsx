"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Cutting Edge Technology",
    description:
      "We use advanced processing technology for the highest quality and efficiency in every product.",
   
  },
  {
    title: "100% Natural",
    description:
      "All our products are naturally processed, free from pesticides, artificial colors, and flavors.",
 
  },
  {
    title: "Finest Quality",
    description:
      "We offer the finest, export-quality agricultural products to our customers.",
   
  },
  {
    title: "Direct from Farm",
    description:
      "We partner with contract farmers to source fresh products directly from the farm.",
    
  },
];

export default function AboutFeatures() {
  return (
    <section className="relative py-12 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
          {/* Left Features */}
          <div className="flex flex-col gap-16">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 hover:scale-105 transition-transform"
              >
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-8 border-white bg-white"
            >
              <Image
                src="/image-5.jpg"
                alt="Farm to Fork Center"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col gap-16">
            {features.slice(2).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 hover:scale-105 transition-transform"
              >
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 