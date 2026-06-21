"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";
import { Target, Users, Globe, Award } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "World-Class Coaching",
    description:
      "Train under coaches with international championship credentials across wrestling, BJJ, Judo and MMA.",
  },
  {
    icon: Target,
    title: "Elite Methodology",
    description:
      "A proven athlete development system used at the highest levels of international competition.",
  },
  {
    icon: Users,
    title: "Small Group Size",
    description:
      "Limited to 30 athletes only — ensuring maximum personal attention and rapid skill progression.",
  },
  {
    icon: Globe,
    title: "Swiss Setting",
    description:
      "Train in one of Europe's most inspiring environments. Clean air, elite facilities, championship focus.",
  },
];

export default function WrestlingAbout() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 scroll-mt-20"
      style={{ backgroundColor: "#000737" }}
    >
      <Container>
        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12" style={{ backgroundColor: "#FF8718" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
            >
              About The Camp
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <Reveal delay={0.1}>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Why{" "}
                <span style={{ color: "#FF8718" }}>Elite</span>
                <br />
                Wrestling Camp?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-white/60 leading-relaxed mb-6 text-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Are you ready to take your wrestling, grappling, BJJ, MMA, or combat sports
                performance to the next level?
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                className="text-white/60 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The Elite Wrestling Camp Switzerland is a unique opportunity to train under the
                guidance of world-class coaches in one of the most beautiful environments in
                Europe. Designed for athletes of all levels — from beginners to advanced
                competitors — this intensive training camp combines elite wrestling instruction,
                physical conditioning, and a proven athlete development system.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div
                className="border-l-4 pl-6 py-2"
                style={{ borderColor: "#FF8718" }}
              >
                <p
                  className="text-white/80 italic text-lg"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  "This camp is designed for athletes who are serious about becoming champions."
                </p>
                <p
                  className="text-sm mt-3 uppercase tracking-widest font-bold"
                  style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
                >
                  — Isa Usupov, Head Coach
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3 text-sm font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: "#FF8718",
                    color: "#000737",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Reserve Your Spot →
                </motion.button>
              </div>
            </Reveal>
          </div>

          {/* Right: benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(255,135,24,0.5)" }}
                  className="p-6 border transition-all duration-300"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(255,135,24,0.15)" }}
                  >
                    <benefit.icon size={20} style={{ color: "#FF8718" }} />
                  </div>
                  <h3
                    className="text-white font-bold uppercase tracking-wide mb-3 text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <Reveal delay={0.4}>
          <div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 border"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            {[
              { number: "30", label: "Limited Spots" },
              { number: "3+", label: "World-Class Coaches" },
              { number: "6+", label: "Combat Sports" },
              { number: "1", label: "Epic Location" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-8 px-6 text-center"
                style={{
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-xs uppercase tracking-widest text-white/40"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
