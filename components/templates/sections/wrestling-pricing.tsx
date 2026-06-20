"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";
import { Check, X } from "lucide-react";

const plans = [
  {
    id: "camp",
    name: "Camp Only",
    price: "€800",
    featured: false,
    includes: [
      { item: "All Training Sessions", included: true },
      { item: "Expert Coaching", included: true },
      { item: "Camp Access & Facilities", included: true },
      { item: "Individual Training Plan", included: true },
      { item: "Accommodation", included: false },
      { item: "Meals (Full Board)", included: false },
    ],
    cta: "Reserve Spot",
    note: "You arrange your own accommodation and meals.",
  },
  {
    id: "full",
    name: "Full Package",
    price: "€1200",
    featured: true,
    includes: [
      { item: "All Training Sessions", included: true },
      { item: "Expert Coaching", included: true },
      { item: "Camp Access & Facilities", included: true },
      { item: "Individual Training Plan", included: true },
      { item: "Accommodation", included: true },
      { item: "Meals (Full Board)", included: true },
    ],
    cta: "Reserve Spot",
    note: "Everything included — arrive ready to train.",
  },
];

export default function WrestlingPricing() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 scroll-mt-20"
      style={{ backgroundColor: "#000e3d" }}
    >
      <Container>
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12" style={{ backgroundColor: "#FF8718" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
            >
              Investment
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pricing &{" "}
            <span style={{ color: "#FF8718" }}>Packages</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-white/50 max-w-xl mb-16 text-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Two options to join. Both include world-class coaching — choose based on
            your accommodation preference.
          </p>
        </Reveal>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden border flex flex-col"
                style={{
                  borderColor: plan.featured ? "#FF8718" : "rgba(255,255,255,0.1)",
                  backgroundColor: plan.featured ? "rgba(255,135,24,0.05)" : "rgba(0,7,55,0.5)",
                  boxShadow: plan.featured
                    ? "0 0 60px rgba(255,135,24,0.2), 0 0 120px rgba(255,135,24,0.08)"
                    : "none",
                }}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div
                    className="absolute top-0 right-0 px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                    style={{
                      backgroundColor: "#FF8718",
                      color: "#000737",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Top accent */}
                {plan.featured && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "#FF8718" }}
                  />
                )}

                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  {/* Plan name */}
                  <div
                    className="text-xs uppercase tracking-widest font-bold mb-2"
                    style={{
                      color: plan.featured ? "#FF8718" : "rgba(255,255,255,0.4)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <span
                      className="text-6xl font-bold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="text-white/40 ml-2 text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      / per athlete
                    </span>
                  </div>

                  {/* What's included */}
                  <div className="flex-1 mb-8">
                    <div
                      className="text-xs uppercase tracking-widest font-bold mb-4"
                      style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-heading)" }}
                    >
                      What's Included
                    </div>
                    <ul className="space-y-3">
                      {plan.includes.map((item) => (
                        <li key={item.item} className="flex items-center gap-3">
                          {item.included ? (
                            <Check size={16} style={{ color: "#FF8718", flexShrink: 0 }} />
                          ) : (
                            <X size={16} style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
                          )}
                          <span
                            className="text-sm"
                            style={{
                              color: item.included ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {item.item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note */}
                  <p
                    className="text-xs text-white/30 mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {plan.note}
                  </p>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={scrollToContact}
                    className="w-full py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300"
                    style={{
                      backgroundColor: plan.featured ? "#FF8718" : "transparent",
                      color: plan.featured ? "#000737" : "#FF8718",
                      border: plan.featured ? "none" : "2px solid rgba(255,135,24,0.4)",
                      fontFamily: "var(--font-heading)",
                    }}
                    onMouseEnter={(e) => {
                      if (!plan.featured) {
                        e.currentTarget.style.borderColor = "#FF8718";
                        e.currentTarget.style.backgroundColor = "rgba(255,135,24,0.08)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.featured) {
                        e.currentTarget.style.borderColor = "rgba(255,135,24,0.4)";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {plan.cta} →
                  </motion.button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.5}>
          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: "rgba(255,135,24,0.4)" }} />
            <p
              className="text-white/30 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Spots are strictly limited to 30 athletes. Early registration is strongly
              recommended to secure your place.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
