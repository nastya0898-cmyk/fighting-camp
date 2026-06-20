"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/layout/section";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";

export default function StartupCta() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 px-8 py-16 text-center backdrop-blur-sm">
          <Reveal direction="up">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Ready to Build Something Great?
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
              Launch your next SaaS, AI startup, agency or business website with
              a modern production-ready starter template.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div className="mt-10">
              <Button size="lg">
                Get Started
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
