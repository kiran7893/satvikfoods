"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    name: "FSSAI",
    image: "/fssai.png",
    alt: "FSSAI Certification",
  },
  {
    name: "Unilever",
    image: "/unilever.png",
    alt: "Unilever Partnership",
  },
  {
    name: "FSSC 22000",
    image: "/fssc.png",
    alt: "FSSC 22000 Certification",
  },
  {
    name: "FDA",
    image: "/fda.png",
    alt: "FDA Approval",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-4 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Simple Certifications Grid */}
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col items-center"
              >
                <div
                  className={`relative w-16 h-16 mb-2 p-3 bg-white shadow-sm group-hover:shadow-md transition-all duration-300 ${
                    cert.name === "FSSC 22000" ? "rounded-full" : "rounded-lg"
                  }`}
                >
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
