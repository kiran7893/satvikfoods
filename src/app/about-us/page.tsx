"use client";

import AboutHero from "@/components/AboutHero";
import AboutJourney from "@/components/AboutJourney";
import AboutFacility from "@/components/AboutFacility";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-green-50">
      <AboutHero />
      <AboutJourney />
      <AboutFacility />
      {/* Preparation Section with YouTube Video */}
      <section className="py-8 lg:py-10 bg-green-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-700">Preparation Process</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Watch the complete journey of gherkin pickle processing, from farm-fresh harvesting to hygienic sorting, brining, and final packaging for global export.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden shadow-premium-lg"
          >
            <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/hLxb9Q7ZpRo?si=cNNilVcWHDj_minz"
                title="Gherkin Processing Video"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      <AboutCTA />
      <Footer />
    </main>
  );
}
