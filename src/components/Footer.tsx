"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-800 to-green-900 text-white relative overflow-hidden">
      {/* Footer keeps its own background for contrast */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-green-100 mb-4">
              SATVIC FOODS PVT LTD
            </h3>
            <p className="text-green-100 leading-relaxed">
              Leading exporters of preserved gherkins and allied vegetables from
              India. Connecting 2000+ farmers with global consumers through
              sustainable agriculture.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-green-100 mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-300" />
                <div>
                  <p className="text-green-100">+91 9448133201</p>
                  <p className="text-green-100">+91 9611337908</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-300" />
                <div>
                  <p className="text-green-100">bhat@satvicfoods.in</p>
                  <p className="text-green-100">sales@satvicfoods.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-green-100 mb-4">
              Reach Us
            </h4>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-green-300 mt-1 flex-shrink-0" />
              <div>
                <p className="text-green-100 leading-relaxed">
                  SATVIC FOODS PVT. LTD.
                  <br />
                  16/1 Konganahalli Village,
                  <br />
                  Talagavara, Kaiwara,
                  <br />
                  Chintamani, Chikkaballapur
                  <br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-green-700 text-center"
        >
          <p className="text-green-200 flex items-center justify-center gap-2 flex-wrap">
            Copyright 2018 @ Satvic Foods Private Limited
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
