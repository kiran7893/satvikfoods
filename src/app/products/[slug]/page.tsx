"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import ProductDescription from "@/components/ProductDescription";
import ProductHealthBenefits from "@/components/ProductHealthBenefits";
import ProductVariants from "@/components/ProductVariants";
import RelatedProducts from "@/components/RelatedProducts";
import ProductModal from "@/components/ProductModal";
import { products, getProductBySlug, type Product, type SubProduct } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product: Product | undefined = getProductBySlug(resolvedParams.slug);
  const [selectedSubProduct, setSelectedSubProduct] = useState<SubProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const openModal = (subProduct: SubProduct) => {
    setSelectedSubProduct(subProduct);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubProduct(null);
  };

  return (
    <main className="min-h-screen pt-20 bg-green-50">
      <ProductHero product={product} />
      <ProductVariants product={product} onSubProductClick={openModal} />
      <ProductDescription product={product} />
      <ProductHealthBenefits product={product} />
      <RelatedProducts currentProduct={product} allProducts={products} />
      
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        subProduct={selectedSubProduct}
        productName={product.name}
      />

      <Footer />
    </main>
  );
}
