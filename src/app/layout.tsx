import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  // 🔍 Basic SEO — What Google reads
  title: "Corallo Analytics — Business Intelligence Systems",
  description: "Transform your business with a complete intelligence system. Real-time analytics, predictive modeling, and automated workflows.",
  keywords: ["analytics", "business intelligence", "dashboard", "predictive modeling", "data systems"],
  
  // 🤖 Robots — Tell Google to index this site
  robots: {
    index: true,
    follow: true,
  },

  // 📱 Open Graph — How it looks when shared on WhatsApp, LinkedIn etc
  openGraph: {
    title: "Corallo Analytics — Business Intelligence Systems",
    description: "Transform your business with real-time analytics and predictive modeling.",
    url: "https://corallo-analytics.vercel.app",
    siteName: "Corallo Analytics",
    type: "website",
    locale: "en_US",
  },

  // 🐦 Twitter/X — How it looks when shared on Twitter
  twitter: {
    card: "summary_large_image",
    title: "Corallo Analytics — Business Intelligence Systems",
    description: "Transform your business with real-time analytics and predictive modeling.",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
