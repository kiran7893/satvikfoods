import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lobster } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lobster = Lobster({
  subsets: ["latin"],
  variable: "--font-lobster",
  weight: ["400"],
});


export const metadata: Metadata = {
  title: {
    default: "Satvic Foods | Premium Gherkins & Vegetables Exporter",
    template: "%s | Satvic Foods"
  },
  description: "Leading exporter of premium gherkins, jalapenos, baby corn, tomatoes, red paprika, and assortments. Sustainable farming, international quality standards, and global reach. FSSAI certified, export quality products.",
  keywords: [
    "gherkins exporter",
    "pickled vegetables",
    "jalapenos",
    "baby corn",
    "cherry tomatoes",
    "red paprika",
    "assorty products",
    "vegetable exporter",
    "FSSAI certified",
    "export quality",
    "sustainable farming",
    "India vegetables",
    "premium gherkins",
    "pickle manufacturer",
    "organic vegetables"
  ],
  authors: [{ name: "Satvic Foods Private Limited" }],
  creator: "Satvic Foods Private Limited",
  publisher: "Satvic Foods Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://satvicfoods.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://satvicfoods.in',
    siteName: 'Satvic Foods',
    title: 'Satvic Foods | Premium Gherkins & Vegetables Exporter',
    description: 'Leading exporter of premium gherkins, jalapenos, baby corn, tomatoes, red paprika, and assortments. Sustainable farming, international quality standards, and global reach.',
    images: [
      {
        url: '/satviklogo.png',
        width: 1200,
        height: 630,
        alt: 'Satvic Foods - Premium Gherkins & Vegetables Exporter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satvic Foods | Premium Gherkins & Vegetables Exporter',
    description: 'Leading exporter of premium gherkins, jalapenos, baby corn, tomatoes, red paprika, and assortments. Sustainable farming, international quality standards.',
    images: ['/satviklogo.png'],
    creator: '@satvicfoods',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Food & Beverage',
  classification: 'Business',
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Chikkaballapur, Karnataka, India',
    'geo.position': '13.4355;77.7275',
    'ICBM': '13.4355, 77.7275',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${lobster.variable} font-sans antialiased bg-gradient-organic texture-organic text-gray-900 min-h-screen relative overflow-x-hidden`}
      >
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
