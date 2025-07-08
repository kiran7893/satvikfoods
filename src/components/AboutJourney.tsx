"use client";

import { motion } from "framer-motion";
import { Building, Truck, Target, Heart } from "lucide-react";

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
            <div className="p-6 glass-card rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Building className="text-green-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Processing Excellence
                </h3>
              </div>
              <p className="text-gray-600">
                State-of-the-art quality control measures, optimum packaging
                systems, and in-house laboratory with dedicated testing teams.
              </p>
            </div>

            <div className="p-6 glass-card rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="text-green-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Global Reach
                </h3>
              </div>
              <p className="text-gray-600">
                Products reach leading retail chains across America, Europe,
                Russia, Australia, Korea, and Japan.
              </p>
            </div>
          </motion.div>
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
