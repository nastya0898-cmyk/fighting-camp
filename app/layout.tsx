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
  title: "Elite Wrestling Camp Switzerland 2026",
  description:
    "Train with world-class champions in Switzerland. Elite Wrestling Camp 2026 — for Wrestling, BJJ, MMA, Grappling & Combat Athletes. Only 30 spots available.",
  keywords: [
    "wrestling camp",
    "Switzerland",
    "BJJ",
    "MMA",
    "grappling",
    "combat sports",
    "elite training",
    "summer camp 2026",
  ],
  openGraph: {
    title: "Elite Wrestling Camp Switzerland 2026",
    description:
      "Train with world-class champions in Switzerland. Only 30 spots available.",
    type: "website",
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
