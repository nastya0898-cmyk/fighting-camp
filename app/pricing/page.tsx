import type { Metadata } from "next";
import WrestlingSchema from "@/components/templates/sections/wrestling-schema";
import WrestlingNavbar from "@/components/templates/sections/wrestling-navbar";
import WrestlingPricing from "@/components/templates/sections/wrestling-pricing";
import WrestlingContact from "@/components/templates/sections/wrestling-contact";
import WrestlingFooter from "@/components/templates/sections/wrestling-footer";

export const metadata: Metadata = {
  title: "Pricing & Registration — €800 / €1200 | High Performance Wrestling Camp Switzerland 2026",
  description:
    "High Performance Wrestling Camp Switzerland 2026 pricing: Camp Only €800 (training & coaching) or Full Package €1200 (accommodation + meals included). Only 30 spots. Reserve yours today.",
  keywords: [
    "wrestling camp price Switzerland 2026",
    "wrestling camp registration fee",
    "wrestling camp cost Europe",
    "combat sports camp pricing Switzerland",
    "wrestling camp package 2026",
    "wrestling training camp affordable Europe",
  ],
  openGraph: {
    title: "Pricing — High Performance Wrestling Camp Switzerland 2026",
    description:
      "Camp Only €800 or Full Package €1200 with accommodation & meals. Only 30 spots available. Register now.",
    type: "website",
    images: [{ url: "/head-photo.jpg", width: 1200, height: 630, alt: "High Performance Wrestling Camp Pricing" }],
  },
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main style={{ backgroundColor: "#000737" }}>
      <WrestlingSchema />
      <WrestlingNavbar />
      <div className="pt-20">
        <WrestlingPricing />
        <WrestlingContact />
      </div>
      <WrestlingFooter />
    </main>
  );
}
