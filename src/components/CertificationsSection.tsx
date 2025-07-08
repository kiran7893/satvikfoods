"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    src: "/certificate-1.png",
    alt: "FDA Certification",
  },
  {
    src: "/certificate-2.jpg",
    alt: "ISO Certification",
  },
  {
    src: "/certificate-3.jpg",
    alt: "Quality Certification",
  },
  {
    src: "/certificate-4.webp",
    alt: "Export Certification",
  },
  {
    src: "/certificate-5.jpg",
    alt: "Food Safety Certification",
  },
  {
    src: "/certificate-6.jpg",
    alt: "International Standards",
  },
  {
    src: "/certificate-7.jpg",
    alt: "Industry Certification",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Our Certifications
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-green-600 mx-auto"></div>
        </motion.div>

        <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-24 h-16 sm:w-32 sm:h-20 relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
