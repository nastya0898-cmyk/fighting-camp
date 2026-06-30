import type { Metadata } from "next";
import WrestlingSchema from "@/components/templates/sections/wrestling-schema";
import WrestlingNavbar from "@/components/templates/sections/wrestling-navbar";
import WrestlingFaq from "@/components/templates/sections/wrestling-faq";
import WrestlingFooter from "@/components/templates/sections/wrestling-footer";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | High Performance Wrestling Camp Switzerland 2026",
  description:
    "Answers to all your questions about High Performance Wrestling Camp Switzerland 2026: who can join, what to bring, daily schedule, accommodation, pricing and how to register. All skill levels welcome, age 14+.",
  keywords: [
    "wrestling camp FAQ Switzerland",
    "wrestling camp questions 2026",
    "wrestling camp beginner Switzerland",
    "can beginners join wrestling camp",
    "wrestling camp accommodation Switzerland",
    "wrestling camp registration how to",
  ],
  openGraph: {
    title: "FAQ — High Performance Wrestling Camp Switzerland 2026",
    description:
      "Everything you need to know before registering. All skill levels welcome, age 14+. Only 30 spots available.",
    type: "website",
    images: [{ url: "/head-photo.jpg", width: 1200, height: 630, alt: "Wrestling Camp FAQ" }],
  },
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main style={{ backgroundColor: "#000737" }}>
      <WrestlingSchema />
      <WrestlingNavbar />
      <div className="pt-20">
        <WrestlingFaq />
      </div>
      <WrestlingFooter />
    </main>
  );
}
