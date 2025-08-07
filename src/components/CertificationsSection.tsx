"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    src: "/certificate-1.png",
    alt: "FDA Certification",
    title: "FDA",
    description: "Food and Drug Administration approved"
  },
  {
    src: "/certificate-2.jpg",
    alt: "FSSAI Certification",
    title: "FSSAI",
    description: "Food Safety and Standards Authority of India"
  },
  {
    src: "/certificate-3.jpg",
    alt: "FSSC 22000 SGS Certification",
    title: "FSSC 22000 SGS",
    description: "Food Safety System Certification"
  },
  {
    src: "/certificate-4.webp",
    alt: "FSSC 22000 Certification",
    title: "FSSC 22000",
    description: "Food Safety System Certification"
  },
  {
    src: "/certificate-5.jpg",
    alt: "K-STAR Certification",
    title: "K-STAR",
    description: "Quality management and standards certification"
  },
  {
    src: "/certificate-6.jpg",
    alt: "TQM Certification",
    title: "TQM",
    description: "Total Quality Management system"
  },
  {
    src: "/certificate-7.jpg",
    alt: "Unilever Certification",
    title: "Unilever",
    description: "Unilever approved supplier standards"
  },
  {
    src: "/certificate-8.jpg",
    alt: "Farm Sustainability Assessment Certification",
    title: "Farm Sustainability Assessment",
    description: "SAI Platform sustainability standards"
  },
];


export default function CertificationsSection() {
  return (
    <section className="py-8 lg:py-10 bg-green-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Award className="w-4 h-4" />
            <span>Awards & Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-gradient">Certifications</span> & Awards
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Recognized for excellence in food safety, quality management, and sustainable practices. 
            Our certifications demonstrate our commitment to international standards.
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="space-y-8">
          {/* First Row - 4 Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {certificates.slice(0, 4).map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl hover-lift group"
              >
                {/* Certificate Image */}
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-white shadow-md">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Certificate Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - 4 Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {certificates.slice(4, 8).map((cert, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl hover-lift group"
              >
                {/* Certificate Image */}
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-white shadow-md">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Certificate Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}
