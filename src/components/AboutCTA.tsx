"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aboutus-7.jpg"
          alt="Global Distribution Network"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-green-600/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Partner with India&apos;s Leading Gherkin Exporter
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Experience the quality, reliability, and sustainability that has
            made us the preferred choice for customers across 24+ countries
            worldwide.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-green-200 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24+</div>
              <div className="text-green-200 text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4000+</div>
              <div className="text-green-200 text-sm">Partner Farmers</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3 shadow-lg"
              >
                Explore Our Products
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3"
              asChild
            >
              <a href="mailto:bhat@satvicfoods.in">Get In Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}