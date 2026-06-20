"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/layout/section";
import { Container } from "@/components/ui/layout/container";
import { SectionHeading } from "@/components/ui/layout/section-heading";
import { StaggerContainer } from "@/components/ui/animations/stagger-container";
import { StaggerItem } from "@/components/ui/animations/stagger-item";

const testimonials = [
  {
    quote: "Amazing template. Saved us weeks of development time.",
    author: "John Smith",
    role: "Founder"
  },
  {
    quote: "Beautiful UI, clean architecture and easy customization.",
    author: "Sarah Johnson",
    role: "Product Manager"
  },
  {
    quote: "Production ready from day one. Highly recommended.",
    author: "Michael Brown",
    role: "CEO"
  }
];

export default function StartupTestimonials() {
  return (
    <Section id="testimonials" className="scroll-mt-24">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Loved by modern teams"
          description="See what customers say about building with our platform."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <Card className="h-full border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700">
                <CardContent className="p-8">
                  <p className="mb-6 text-neutral-300">
                    "{testimonial.quote}"
                  </p>

                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>

                    <p className="text-sm text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}