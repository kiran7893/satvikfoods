"use client";

import { motion } from "framer-motion";
import { Target, Leaf, Heart, Shield, CheckCircle, Users, Award, Globe } from "lucide-react";
import Image from "next/image";

const coreValues = [
  {
    icon: Target,
    title: "Quality Excellence",
    description:
      "Highest quality standards with rigorous quality control measures.",
    image: "/aboutus-8.jpg",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Environmental sustainability through natural farming methods.",
    image: "/aboutus-9.jpg",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Dedicated to exceptional customer satisfaction globally.",
    image: "/aboutus-10.jpg",
  },
  {
    icon: Shield,
    title: "Food Safety",
    description:
      "International certifications and comprehensive safety protocols.",
    image: "/aboutus-11.jpg",
  },
];

const certifications = [
  { name: "FSSAI", description: "Food Safety Standards Authority" },
  { name: "FDA", description: "US Food and Drug Administration" },
  { name: "Star-K Kosher", description: "Kosher Certification" },
  { name: "BRCGS", description: "Global Food Safety Initiative" },
];

const achievements = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Multiple awards for excellence in food processing",
    image: "/aboutus-12.jpg",
  },
  {
    icon: Globe,
    title: "Global Presence",
    description: "Serving customers across 24+ countries worldwide",
    image: "/aboutus-13.jpg",
  },
  {
    icon: Users,
    title: "Farmer Partnerships",
    description: "Supporting 4000+ farmers with sustainable practices",
    image: "/aboutus-14.jpg",
  },
];

export default function AboutValues() {
  return (
    <section className="py-8 lg:py-10 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Core Values */}
        <div className="text-center mb-12">
                                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our commitment to excellence and
            sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-card rounded-xl group hover:scale-105 transition-transform"
            >
              <div className="relative mb-4">
                <Image
                  src={value.image}
                  alt={value.title}
                  width={250}
                  height={150}
                  className="rounded-lg shadow-organic"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <value.icon size={20} className="text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Our Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    width={350}
                    height={200}
                    className="rounded-xl shadow-organic"
                  />
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <achievement.icon size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Assurance & CSR Combined */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quality Assurance */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-6 glass-card rounded-xl">
              <div className="relative mb-6">
                <Image
                  src="/aboutus-15.jpg"
                  alt="Quality Assurance"
                  width={500}
                  height={250}
                  className="rounded-lg shadow-organic"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-700 mb-6">
                Every product represents farm-to-table excellence with rigorous
                quality control and international certifications.
              </p>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={16} />
                    <div>
                      <span className="font-semibold text-gray-900">
                        {cert.name}
                      </span>
                      <span className="text-sm text-gray-600 ml-2">
                        - {cert.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Corporate Social Responsibility */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 glass-card rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Social Responsibility
              </h3>
              <p className="text-gray-700 mb-6">
                We believe in being partners with our customers, employees,
                community, farmers, and environment.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="text-blue-600 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Education Support
                    </h4>
                    <p className="text-sm text-gray-600">
                      Contributing to mid-day meals and special education
                      programs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="text-green-500 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Community Development
                    </h4>
                    <p className="text-sm text-gray-600">
                      Village development and employment opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Leaf className="text-purple-600 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Environmental Care
                    </h4>
                    <p className="text-sm text-gray-600">
                      Sustainable farming and environmental protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
