"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full glass-navbar fixed top-0 left-0 z-50 border-b border-green-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-green-800 hover:text-green-900 transition-colors"
          >
            <span className="tracking-tight bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
              Satvic Foods
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {["Home", "About Us", "Products"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
            >
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="relative font-medium text-gray-700 hover:text-green-700 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-green font-semibold"
            >
              <a href="tel:+919448133201">Contact Us</a>
            </Button>
          </motion.div>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} className="text-green-700" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} className="text-green-700" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-navbar border-t border-green-100/50 px-4 py-4 flex flex-col gap-4"
          >
            {["Home", "About Us", "Products"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="font-medium text-gray-700 hover:text-green-700 transition-colors block py-2"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-green font-semibold w-full"
              >
                <a href="tel:+919448133201">Contact Us</a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
