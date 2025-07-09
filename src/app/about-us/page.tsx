"use client";

import AboutHero from "@/components/AboutHero";
import AboutJourney from "@/components/AboutJourney";
import AboutFacility from "@/components/AboutFacility";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20 ">
      <AboutHero />
      <AboutJourney />
      <AboutFacility />
      {/* Preparation Section with YouTube Video */}
      <section className="py-20 bg-gradient-to-br from-green-50/50 to-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-700">Preparation</h2>
          <p className="text-lg text-gray-700 mb-8">Watch the complete journey of gherkin pickle processing, from farm-fresh harvesting to hygienic sorting, brining, and final packaging for global export.</p>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/hLxb9Q7ZpRo?si=cNNilVcWHDj_minz"
              title="Gherkin Processing Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </section>
      <AboutCTA />
      <Footer />
    </main>
  );
}
