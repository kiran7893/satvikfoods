"use client";

import AboutHero from "@/components/AboutHero";
import AboutJourney from "@/components/AboutJourney";
import AboutValues from "@/components/AboutValues";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-16">
      <AboutHero />
      <AboutJourney />
      <AboutValues />
      <AboutCTA />
      <Footer />
    </main>
  );
}
