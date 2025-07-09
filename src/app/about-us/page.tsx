"use client";

import AboutHero from "@/components/AboutHero";
import AboutJourney from "@/components/AboutJourney";
import AboutFacility from "@/components/AboutFacility";
import AboutValues from "@/components/AboutValues";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-20">
      <AboutHero />
      <AboutJourney />
      <AboutFacility />
      <AboutValues />
      <AboutCTA />
      <Footer />
    </main>
  );
}
