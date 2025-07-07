"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Partner with India&apos;s Leading Gherkin Exporter
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Experience the quality, reliability, and sustainability that has
            made us the preferred choice for customers across 50+ countries
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3"
              >
                Explore Our Products
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-3"
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
