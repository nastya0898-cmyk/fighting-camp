"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/layout/section";
import { Container } from "@/components/ui/layout/container";
import { SectionHeading } from "@/components/ui/layout/section-heading";
import { Reveal } from "@/components/ui/animations/reveal";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for individuals and small projects."
  },
  {
    name: "Pro",
    price: "$49",
    description: "Ideal for growing businesses and startups.",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "Advanced features for large organizations."
  }
];

export default function StartupPricing() {
  return (
    <Section id="pricing" className="scroll-mt-24">
      <Container>
        <SectionHeading
          badge="Pricing"
          title="Simple pricing for every business"
          description="Choose the plan that fits your needs."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.15}>
              <Card className="relative h-full border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700">
                <CardContent className="p-8 text-center">
                  {plan.popular && (
                    <Badge className="mb-4">
                      Most Popular
                    </Badge>
                  )}

                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {plan.name}
                  </h3>

                  <p className="mb-6 text-5xl font-bold text-white">
                    {plan.price}
                  </p>

                  <p className="text-neutral-400">
                    {plan.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}