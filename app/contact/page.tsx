import type { Metadata } from "next";
import WrestlingSchema from "@/components/templates/sections/wrestling-schema";
import WrestlingNavbar from "@/components/templates/sections/wrestling-navbar";
import WrestlingContact from "@/components/templates/sections/wrestling-contact";
import WrestlingFooter from "@/components/templates/sections/wrestling-footer";

export const metadata: Metadata = {
  title: "Register Now — Reserve Your Spot | High Performance Wrestling Camp Switzerland 2026",
  description:
    "Reserve your spot at High Performance Wrestling Camp Switzerland 2026. Only 30 places available. Fill in the form and our team will contact you within 24 hours. Phone: +41 77 979 35 35.",
  keywords: [
    "wrestling camp registration Switzerland 2026",
    "reserve wrestling camp spot",
    "wrestling camp apply Switzerland",
    "combat sports camp sign up 2026",
    "wrestling camp contact Switzerland",
    "wrestling camp August 2026 register",
  ],
  openGraph: {
    title: "Register — High Performance Wrestling Camp Switzerland 2026",
    description:
      "Only 30 spots available. Reserve yours now — we respond within 24 hours. Phone: +41 77 979 35 35.",
    type: "website",
    images: [{ url: "/head-photo.jpg", width: 1200, height: 630, alt: "Register for Wrestling Camp Switzerland" }],
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "#000737" }}>
      <WrestlingSchema />
      <WrestlingNavbar />
      <div className="pt-20">
        <WrestlingContact />
      </div>
      <WrestlingFooter />
    </main>
  );
}
