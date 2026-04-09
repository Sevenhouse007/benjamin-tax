import type { Metadata } from "next";
import { Crimson_Pro, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-crimson",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Benjamin Tax Service | Tax Preparation Near Me | Los Angeles, CA",
  description:
    "Certified tax experts serving Greater Los Angeles. CTEC & PTIN certified, bilingual, 15+ years experience. Maximum refund guaranteed. Fast cash advance available.",
  keywords: [
    "tax preparation Los Angeles",
    "tax service near me",
    "CTEC certified",
    "ITIN application LA",
    "tax preparer Watts",
    "hablamos español taxes",
  ],
  openGraph: {
    title: "Benjamin Tax Service | Los Angeles",
    description: "Get your maximum refund guaranteed. Serving LA for 15+ years.",
    url: "https://benjamintaxes.com",
    siteName: "Benjamin Tax Service",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  verification: { google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxPreparationService",
  name: "Benjamin Tax Service",
  telephone: "+13238922520",
  email: "info@benjamintaxes.com",
  url: "https://benjamintaxes.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1601 East Imperial Hwy",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90059",
  },
  geo: { "@type": "GeoCoordinates", latitude: 33.928, longitude: -118.248 },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  priceRange: "$$",
  areaServed: "Greater Los Angeles",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
