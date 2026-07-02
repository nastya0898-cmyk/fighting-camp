import type { Metadata } from "next";
import WrestlingSchema from "@/components/templates/sections/wrestling-schema";
import WrestlingNavbar from "@/components/templates/sections/wrestling-navbar";
import WrestlingCoaches from "@/components/templates/sections/wrestling-coaches";
import WrestlingFooter from "@/components/templates/sections/wrestling-footer";

export const metadata: Metadata = {
  title: "Coaches — Isa Usupov & Idris Ibaev | Apex Wrestling Camp Switzerland 2026",
  description:
    "Meet your coaches: Isa Usupov (Swiss Wrestling Champion, Swiss MMA National Team Coach) and Idris Ibaev. Train directly with world-class champions at Apex Wrestling Camp Switzerland 2026.",
  keywords: [
    "Isa Usupov wrestling coach",
    "Idris Ibaev wrestling",
    "Swiss wrestling coach",
    "Swiss MMA national team coach",
    "wrestling camp coaches Switzerland",
    "elite wrestling coach Europe",
  ],
  openGraph: {
    title: "Meet the Coaches — Isa Usupov & Idris Ibaev",
    description:
      "Train with Swiss Wrestling Champion Isa Usupov and elite wrestler Idris Ibaev at Apex Wrestling Camp Switzerland 2026.",
    type: "website",
    images: [{ url: "/isa-usupov.jpg", width: 1200, height: 630, alt: "Isa Usupov — Leading Coach" }],
  },
  alternates: { canonical: "/coaches" },
};

export default function CoachesPage() {
  return (
    <main style={{ backgroundColor: "#000737" }}>
      <WrestlingSchema />
      <WrestlingNavbar />
      <div className="pt-20">
        <WrestlingCoaches />
      </div>
      <WrestlingFooter />
    </main>
  );
}
