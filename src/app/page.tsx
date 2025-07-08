import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
