"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Section } from "@/components/ui/layout/section";
import { Container } from "@/components/ui/layout/container";
import { SectionHeading } from "@/components/ui/layout/section-heading";

const faqs = [
  {
    question: "Is this template responsive?",
    answer:
      "Yes. The template is fully responsive and optimized for mobile, tablet and desktop devices."
  },
  {
    question: "Can I customize everything?",
    answer:
      "Absolutely. All sections, colors, content and components can be customized to fit your project."
  },
  {
    question: "Does it support SaaS and business websites?",
    answer:
      "Yes. The starter template is designed for SaaS, AI startups, agencies, consulting firms and corporate websites."
  },
  {
    question: "What technologies are included?",
    answer:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Aceternity UI, Magic UI and Motion."
  }
];

export default function StartupFaq() {
  return (
    <Section id="faq" className="scroll-mt-24">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before getting started."
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}