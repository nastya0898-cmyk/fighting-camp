import WrestlingNavbar from "@/components/templates/sections/wrestling-navbar";
import WrestlingHero from "@/components/templates/sections/wrestling-hero";
import WrestlingAbout from "@/components/templates/sections/wrestling-about";
import WrestlingCoaches from "@/components/templates/sections/wrestling-coaches";
import WrestlingDates from "@/components/templates/sections/wrestling-dates";
import WrestlingSpecialties from "@/components/templates/sections/wrestling-specialties";
import WrestlingSports from "@/components/templates/sections/wrestling-sports";
import WrestlingCurriculum from "@/components/templates/sections/wrestling-curriculum";
import WrestlingTrainingPlan from "@/components/templates/sections/wrestling-training-plan";
import WrestlingPricing from "@/components/templates/sections/wrestling-pricing";
import WrestlingAttendees from "@/components/templates/sections/wrestling-attendees";
import WrestlingTestimonials from "@/components/templates/sections/wrestling-testimonials";
import WrestlingFaq from "@/components/templates/sections/wrestling-faq";
import WrestlingContact from "@/components/templates/sections/wrestling-contact";
import WrestlingFooter from "@/components/templates/sections/wrestling-footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#000737" }}>
      <WrestlingNavbar />
      <WrestlingHero />
      <WrestlingAbout />
      <WrestlingCoaches />
      <WrestlingDates />
      <WrestlingSpecialties />
      <WrestlingSports />
      <WrestlingCurriculum />
      <WrestlingTrainingPlan />
      <WrestlingPricing />
      <WrestlingAttendees />
      <WrestlingTestimonials />
      <WrestlingFaq />
      <WrestlingContact />
      <WrestlingFooter />
    </main>
  );
}
