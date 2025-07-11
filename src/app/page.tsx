import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 ">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <CertificationsSection />
      <Footer />
    </main>
  );
}
