"use client";

import { motion } from "framer-motion";
import { Factory, Settings, Truck, Award } from "lucide-react";
import Image from "next/image";

const facilityFeatures = [
  {
    icon: Factory,
    title: "Processing Units",
    description: "State-of-the-art processing facilities with advanced technology",
  },
  {
    icon: Settings,
    title: "Quality Control",
    description: "In-house laboratory with dedicated testing and quality teams",
  },
  {
    icon: Truck,
    title: "Packaging & Storage",
    description: "Modern packaging systems and temperature-controlled storage",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "International certifications ensuring global quality standards",
  },
];

const facilityImages = [
  "/aboutus-2.jpg", 
  "/aboutus-3.jpg",
  "/aboutus-4.jpg",
  "/aboutus-6.jpg",
  "/aboutus-9.jpg",
 
];

export default function AboutFacility() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our World-Class Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our state-of-the-art processing facilities and infrastructure 
            that ensure the highest quality standards for our products
          </p>
        </motion.div>

        {/* Facility Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-card rounded-xl hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                  <feature.icon size={28} className="text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Facility Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Facility Gallery
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {facilityImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-organic">
                  <Image
                    src={image}
                    alt={`Facility ${index + 1}`}
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50/50 to-white/50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategic Location
              </h3>
                              <p className="text-gray-700 mb-6 leading-relaxed">
                Our processing facility is strategically located in the heart of South India&apos;s 
                agricultural belt, just 50 kilometers from Bengaluru International Airport. 
                This prime location ensures:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Efficient global distribution</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Easy access to major ports</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Proximity to farming communities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Excellent infrastructure connectivity</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden w-full h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62219.96496404944!2d77.992018!3d13.3176155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb20116d8cb2847%3A0x4e5ca47683616d24!2sSatvic%20Foods%20Private%20Limited!5e0!3m2!1sen!2sin!4v1688999999999!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Satvic Foods Location"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 