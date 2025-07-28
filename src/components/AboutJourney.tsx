"use client";

import { motion } from "framer-motion";
import { Building, Target, Heart, Factory, Globe } from "lucide-react";
import Image from "next/image";

const journeySteps = [
  {
    title: "Laying the Foundation",
    description: "Satvic Foods is founded with a vision to bring the best of Indian agriculture to the world.",
    image: "/aboutus-2.jpg",
    icon: Building,
  },
  {
    title: "Growth & Expansion",
    description: "We expand our facilities and partner with more farmers, boosting capacity and quality.",
    image: "/aboutus-3.jpg",
    icon: Factory,
  },
  {
    title: "Global Recognition",
    description: "Our products reach over 50 countries, earning trust for quality and reliability.",
    image: "/aboutus-4.jpg",
    icon: Globe,
  },
  {
    title: "Innovation for Tomorrow",
    description: "We lead with sustainable farming, advanced technology, and a commitment to a greener future.",
    image: "/aboutus-5.jpg",
    icon: Target,
  },
];

export default function AboutJourney() {
  return (
    <section className="py-8 lg:py-10 bg-green-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                From humble beginnings to a global presence, Satvic Foods has grown through innovation, strong farmer partnerships, and a commitment to quality. Our journey reflects our passion for delivering the finest preserved vegetables to the world, while empowering local communities and embracing sustainable practices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the years, we have built a robust network of more than 4,000 dedicated farmers, ensuring a consistent supply of fresh produce and supporting rural livelihoods. Our focus on contract farming and sustainable agriculture has enabled us to maintain the highest standards of food safety and traceability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Satvic Foods is recognized not only for its premium products but also for its ethical business practices and commitment to environmental stewardship. We continue to innovate, adapt, and grow, always striving to exceed the expectations of our global customers.
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
                className="rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white px-4 py-2 rounded-lg bg-gray-800/80">
                <h3 className="text-xl font-semibold">Processing Excellence</h3>
                <p className="text-sm">State-of-the-art facilities</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/jar-line.jpg"
                alt="Global Distribution"
                width={500}
                height={300}
                className="rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white px-4 py-2 rounded-lg bg-gray-800/80">
                <h3 className="text-xl font-semibold">Global Distribution</h3>
                <p className="text-sm">Reaching 24+ countries worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Journey */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Our Growth Timeline
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center flex flex-col items-center"
              >
                <div className="relative mb-4 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={300}
                    height={200}
                    className="rounded-xl w-full object-cover"
                  />
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full px-4 py-3 flex flex-col items-start"
                    style={{background: 'rgba(0,0,0,0.45)', borderBottomLeftRadius: '0.75rem', borderBottomRightRadius: '0.75rem'}}>
                    <span className="text-lg font-semibold text-white drop-shadow mb-1">{step.title}</span>
                    <span className="text-sm text-gray-100 leading-relaxed">{step.description}</span>
                  </div>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="my-4 w-2/3 mx-auto">
                    <hr className="border-t border-green-100" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-premium">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
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
