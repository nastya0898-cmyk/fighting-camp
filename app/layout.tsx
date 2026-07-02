import type { Metadata } from "next";
import { Oswald, Anonymous_Pro } from "next/font/google";
import "./globals.css";

import PostHogProvider from "@/components/providers/posthog-provider";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const anonymousPro = Anonymous_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Apex Wrestling Camp Switzerland 2026 | September 6–11 | 30 Spots Only",
  description:
    "Train with world-class champions Isa Usupov & Idris Ibaev in the Swiss Alps. Apex Wrestling Camp Switzerland 2026 — September 6–11. Wrestling, BJJ, MMA, Grappling. Only 30 spots available. Register now.",
  keywords: [
    "wrestling camp Switzerland 2026",
    "elite wrestling camp",
    "wrestling training Switzerland",
    "BJJ camp Switzerland",
    "MMA camp Switzerland Alps",
    "grappling camp Europe 2026",
    "combat sports camp Switzerland",
    "Isa Usupov wrestling",
    "Idris Ibaev wrestling",
    "summer wrestling camp 2026",
    "wrestling camp Swiss Alps",
    "wrestling camp September 2026",
  ],
  openGraph: {
    title: "Apex Wrestling Camp Switzerland 2026 | September 6–11",
    description:
      "Train with world-class champions in the Swiss Alps. Only 30 spots available. Wrestling, BJJ, MMA, Grappling.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/head-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Apex Wrestling Camp Switzerland 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Wrestling Camp Switzerland 2026",
    description: "Train with world-class champions in the Swiss Alps. Only 30 spots.",
    images: ["/head-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${oswald.variable} ${anonymousPro.variable} h-full antialiased`}
      style={{ backgroundColor: "#000737" }}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#000737", color: "#FFFFFF" }}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
