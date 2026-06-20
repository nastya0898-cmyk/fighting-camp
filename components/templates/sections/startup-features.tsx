"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/layout/section";
import { Container } from "@/components/ui/layout/container";
import { SectionHeading } from "@/components/ui/layout/section-heading";
import { StaggerContainer } from "@/components/ui/animations/stagger-container";
import { StaggerItem } from "@/components/ui/animations/stagger-item";

const features = [
  {
    title: "Fast Development",
    description:
      "Build production-ready websites in record time with a scalable foundation.",
  },
  {
    title: "Reusable Components",
    description:
      "Create once and reuse across SaaS, AI, agency and corporate projects.",
  },
  {
    title: "Modern UI",
    description:
      "Powered by shadcn/ui, Aceternity UI, Magic UI and Motion.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Clean structure designed for long-term growth and maintenance.",
  },
];

export default function StartupFeatures() {
  return (
    <Section id="features" className="scroll-mt-24">
      <Container>
        <SectionHeading
          badge="Features"
          title="Everything you need"
          description="A complete foundation for building modern websites and products."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className="h-full border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-neutral-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}