import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Satvic Foods | Fresh Gherkins & Vegetables Exporter",
  description:
    "Satvic Foods is a leading producer and exporter of Gherkins, Jalapeños, Baby Corn, Cherry Tomatoes, Red Paprika, and more. Sustainable farming, quality assurance, and global reach.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-gradient-organic texture-organic text-gray-900 min-h-screen relative overflow-x-hidden`}
      >
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
