"use client";

import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, Globe } from "lucide-react";

const certifications = [
  {
    name: "FSSAI",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "from-blue-100 to-blue-200",
  },
  {
    name: "Unilever",
    icon: Award,
    color: "text-green-600",
    bgColor: "from-green-100 to-green-200",
  },
  {
    name: "ISO 22000",
    icon: CheckCircle,
    color: "text-purple-600",
    bgColor: "from-purple-100 to-purple-200",
  },
  {
    name: "HACCP",
    icon: Shield,
    color: "text-orange-600",
    bgColor: "from-orange-100 to-orange-200",
  },
  {
    name: "Export License",
    icon: Globe,
    color: "text-indigo-600",
    bgColor: "from-indigo-100 to-indigo-200",
  },
  {
    name: "Organic",
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "from-emerald-100 to-emerald-200",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
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
                whileHover={{ scale: 1.1 }}
                className="group flex flex-col items-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${cert.bgColor} rounded-full mb-2 group-hover:shadow-lg transition-all duration-300`}
                >
                  <cert.icon size={24} className={cert.color} />
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
