"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full fixed top-0 left-0 z-50 bg-green-50 backdrop-blur-md border-b border-gray-200 shadow-lg h-16 lg:h-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center flex-shrink-0"
        >
          <Link href="/" className="flex items-center gap-3 lg:gap-4 group">
            <motion.div
              className="w-10 h-10 lg:w-12 lg:h-12 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/logo.jpg"
                alt="Satvic Foods Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-5xl text-green-600 whitespace-nowrap drop-shadow-sm">
                Satvic Foods
              </span>
             
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Link
                href={item.href}
                className={`relative font-semibold px-4 py-2 transition-all duration-300 group text-base
                  ${pathname === item.href ? "text-green-700 font-bold" : "text-gray-700 hover:text-green-600"}`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300
                    ${pathname === item.href ? "w-full bg-green-600" : "w-0 group-hover:w-full bg-green-600"}`}
                  style={{ height: 3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg font-semibold px-5 lg:px-6 py-2 lg:py-3 group border-0 text-sm lg:text-base"
            >
              <a href="tel:+919448133201" className="flex items-center gap-2">
                <Phone size={16} className="lg:hidden" />
                <Phone size={18} className="hidden lg:block" />
                <span className="hidden sm:inline">Contact Us</span>
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden p-2 rounded-xl hover:bg-green-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X size={24} className="text-green-600" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={24} className="text-green-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200 shadow-xl"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center font-semibold py-3 px-4 rounded-lg transition-colors text-base
                      ${pathname === item.href ? "text-green-700 font-bold bg-green-50" : "text-gray-700 hover:text-green-600 hover:bg-green-50"}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="pt-4 border-t border-gray-200"
              >
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white shadow-lg font-semibold w-full py-3 text-base"
                >
                  <a
                    href="tel:+919448133201"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    <span>Contact Us</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}