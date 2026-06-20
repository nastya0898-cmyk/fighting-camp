import type { Metadata } from "next";
import WrestlingSchema from "@/components/templates/sections/wrestling-schema";
import WrestlingNavbar from "@/components/templates/sections/wrestling-navbar";
import WrestlingCurriculum from "@/components/templates/sections/wrestling-curriculum";
import WrestlingTrainingPlan from "@/components/templates/sections/wrestling-training-plan";
import WrestlingSpecialties from "@/components/templates/sections/wrestling-specialties";
import WrestlingFooter from "@/components/templates/sections/wrestling-footer";

export const metadata: Metadata = {
  title: "Training Program — Schedule & Curriculum | Elite Wrestling Camp Switzerland 2026",
  description:
    "Full 6-day wrestling camp program: morning drilling, strength & conditioning, live sparring, technique clinics. Wrestling, BJJ, MMA and Grappling sessions in the Swiss Alps. August 2–7, 2026.",
  keywords: [
    "wrestling camp program Switzerland",
    "wrestling training schedule 2026",
    "wrestling camp curriculum",
    "BJJ wrestling training plan",
    "combat sports camp schedule Switzerland",
    "wrestling conditioning program Swiss Alps",
  ],
  openGraph: {
    title: "Training Program — Elite Wrestling Camp Switzerland 2026",
    description:
      "6-day intensive wrestling program: drilling, sparring, conditioning and technique clinics in the Swiss Alps. August 2–7, 2026.",
    type: "website",
    images: [{ url: "/wrestling-2.jpg", width: 1200, height: 630, alt: "Wrestling Training Program" }],
  },
  alternates: { canonical: "/program" },
};

export default function ProgramPage() {
  return (
    <main style={{ backgroundColor: "#000737" }}>
      <WrestlingSchema />
      <WrestlingNavbar />
      <div className="pt-20">
        <WrestlingSpecialties />
        <WrestlingCurriculum />
        <WrestlingTrainingPlan />
      </div>
      <WrestlingFooter />
    </main>
  );
}
