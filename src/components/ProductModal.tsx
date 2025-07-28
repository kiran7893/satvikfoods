"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  X,
  Mail,
  Phone,
  Package,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { type SubProduct } from "@/data/products";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  subProduct: SubProduct | null;
  productName: string;
}



export default function ProductModal({
  isOpen,
  onClose,
  subProduct,
  productName,
}: ProductModalProps) {
  if (!isOpen || !subProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-50 to-green-100 p-6 border-b border-gray-200 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {subProduct.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Part of {productName} collection
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/50 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Product Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative h-100 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={subProduct.image}
                alt={subProduct.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-100 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={subProduct.rawImage || subProduct.image}
                alt={`${subProduct.name} - Raw form`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {subProduct.shortDescription}
            </p>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Grades */}
            {subProduct.specifications.grades && subProduct.specifications.grades.length > 0 && (
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Package size={16} className="text-blue-600" />
                  Available Grades
                </h4>
                <div className="flex flex-wrap gap-2">
                  {subProduct.specifications.grades.map((grade, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Recipe */}
            {subProduct.specifications.recipe && (
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Leaf size={16} className="text-green-600" />
                  Recipe
                </h4>
                <p className="text-green-700 font-medium">
                  {subProduct.specifications.recipe}
                </p>
              </div>
            )}
          </div>

          {/* Packaging Options */}
          {subProduct.specifications.packagingOptions && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                Packaging Options
              </h4>
              <div className="divide-y divide-gray-200">
                {([
                  { key: 'jar', label: 'Jar', color: 'text-pink-600' },
                  { key: 'can', label: 'Can', color: 'text-pink-600' },
                  { key: 'pouch', label: 'Pouch', color: 'text-pink-600' },
                  { key: 'barrel', label: 'Barrel', color: 'text-pink-600' },
                ] as const).map(({ key, label, color }) => {
                  const packagingOptions = subProduct.specifications.packagingOptions;
                  if (!packagingOptions) return null;
                  const sizes = (packagingOptions as Record<string, string[] | undefined>)[key];
                  const icon = (packagingOptions.icon as Record<string, string | undefined>)?.[key];
                  if (!sizes) return null;
                  return (
                    <div key={key} className="flex items-center gap-4 py-3">
                      <span className={`w-20 font-bold ${color}`}>{label}</span>
                      {icon && (
                        <Image 
                          src={icon} 
                          alt={label + ' icon'} 
                          width={40}
                          height={40}
                          className="object-contain" 
                        />
                      )}
                      <span className="text-gray-700 text-sm">{sizes.join(', ')}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
            <Button size="lg" className="flex-1 btn-premium group">
              <a
                href={`mailto:bhat@satvicfoods.in?subject=Inquiry for ${productName} - ${subProduct.name}`}
                className="flex items-center gap-2"
              >
                <Mail size={18} />
                Get Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
            >
              <a href="tel:+919448133201" className="flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 