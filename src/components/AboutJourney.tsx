"use client";

import { motion } from "framer-motion";
import { Building, Target, Heart, Factory, Globe } from "lucide-react";
import Image from "next/image";

const journeySteps = [
  {
    year: "1998",
    title: "Foundation",
    description: "Started with a vision to export premium Indian vegetables globally",
    image: "/aboutus-2.jpg",
    icon: Building,
  },
  {
    year: "2005",
    title: "Expansion",
    description: "Expanded processing facilities and farmer partnerships",
    image: "/aboutus-3.jpg",
    icon: Factory,
  },
  {
    year: "2015",
    title: "Global Reach",
    description: "Reached 50+ countries with premium quality products",
    image: "/aboutus-4.jpg",
    icon: Globe,
  },
  {
    year: "2023",
    title: "Innovation",
    description: "Leading the industry with sustainable practices and technology",
    image: "/aboutus-5.jpg",
    icon: Target,
  },
];

export default function AboutJourney() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Our Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Satvic Foods Private Limited stands as one of India&apos;s
                premier exporters of preserved gherkins and allied vegetables,
                with over 25 years of expertise in the agro-processing industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in the heart of South India&apos;s agricultural belt,
                our state-of-the-art processing facility is strategically
                positioned 50 kilometers from Bengaluru International Airport,
                ensuring efficient global distribution.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We&apos;ve built strong partnerships with over 4000 farmers
                through our exclusive contract farming program, supported by a
                dedicated agricultural extension team.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <Image
                src="/aboutus-6.jpg"
                alt="Processing Excellence"
                width={500}
                height={300}
                className="rounded-xl shadow-organic"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Processing Excellence</h3>
                <p className="text-sm">State-of-the-art facilities</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/aboutus-7.jpg"
                alt="Global Distribution"
                width={500}
                height={300}
                className="rounded-xl shadow-organic"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Global Distribution</h3>
                <p className="text-sm">Reaching 50+ countries worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Journey */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Our Growth Timeline
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={300}
                    height={200}
                    className="rounded-xl shadow-organic"
                  />
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <step.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                  {step.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-gradient-to-br from-green-50/50 to-white/50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving sustainable growth while maintaining the highest standards
              of quality and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 glass-card rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-green-500" size={28} />
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the preferred global supplier of preserved vegetables and
                fruits, recognized for our uncompromising commitment to quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 glass-card rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-green-500" size={28} />
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To deliver premium pickled gherkins through sustainable farming
                practices, exceptional quality standards, and ethical business
                operations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
