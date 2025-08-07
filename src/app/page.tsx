import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Satvic Foods - Leading exporter of premium gherkins, jalapenos, baby corn, tomatoes, red paprika, and assortments. Sustainable farming, international quality standards, and global reach.",
  openGraph: {
    title: "Satvic Foods - Premium Gherkins & Vegetables Exporter",
    description: "Leading exporter of premium gherkins, jalapenos, baby corn, tomatoes, red paprika, and assortments. Sustainable farming, international quality standards, and global reach.",
    url: "https://satvicfoods.in",
    images: [
      {
        url: "/satviklogo.png",
        width: 1200,
        height: 630,
        alt: "Satvic Foods - Premium Gherkins & Vegetables Exporter",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 ">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <CertificationsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
