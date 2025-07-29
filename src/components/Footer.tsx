"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, Award, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
];

const products = [
  { name: "Premium Gherkins", href: "/products/gherkins" },
  { name: "Spicy Jalapenos", href: "/products/spicy-jalapenos" },
  { name: "Tender Baby Corn", href: "/products/tender-baby-corn" },
  { name: "Tomatoes", href: "/products/tomatoes" },
  { name: "Red Paprika", href: "/products/red-paprika" },
  { name: "Banderilla", href: "/products/banderilla" },
  { name: "Premium Assorty", href: "/products/assorty" },
  { name: "Onions", href: "/products/onions" },
];


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Satvic Foods Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">SATVIC FOODS</h3>
                <p className="text-green-100 text-sm">Premium Quality Exports</p>
              </div>
            </div>
            
            <p className="text-green-100 leading-relaxed mb-4">
              Leading exporters of preserved gherkins and allied vegetables from India. 
              Connecting 4000+ farmers with global consumers through sustainable agriculture 
              and premium quality standards.
            </p>

          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Our Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-green-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-green-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-100 font-medium">+91 9448133201</p>
                  <p className="text-green-100 font-medium">+91 9611337908</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-green-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-100">bhat@satvicfoods.in</p>
                  <p className="text-green-100">sales@satvicfoods.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-green-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-100 text-sm leading-relaxed">
                    SATVIC FOODS PVT. LTD.<br />
                    16/1 Konganahalli Village,<br />
                    Talagavara, Kaiwara,<br />
                    Chintamani, Chikkaballapur<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-green-500/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-200 text-sm">
              © 2025 Satvic Foods Private Limited. All rights reserved.
            </p>
            <p className="text-green-200 text-sm">
                Created by{" "}
                <a 
                  href="https://indhic.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors font-medium"
                >
                  Indhic AI
                </a>
              </p>
          </div>
          
          
        </motion.div>
      </div>
    </footer>
  );
}
