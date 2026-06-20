"use client";

import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/layout/section";
import { Container } from "@/components/ui/layout/container";
import { SectionHeading } from "@/components/ui/layout/section-heading";

const companies = [
  "GOOGLE",
  "MICROSOFT",
  "OPENAI",
  "VERCEL",
  "STRIPE",
  "NOTION",
  "SHOPIFY",
  "AIRBNB",
];

export default function StartupLogos() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Trusted By"
          title="Built for modern businesses"
          description="A starter template designed for startups, SaaS products and agencies."
        />

        <div className="mt-12">
          <Marquee pauseOnHover>
            {companies.map((company) => (
              <div
                key={company}
                className="mx-4 flex h-20 w-48 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/50 text-sm font-semibold tracking-widest text-neutral-300 backdrop-blur-sm"
              >
                {company}
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </Section>
  );
}