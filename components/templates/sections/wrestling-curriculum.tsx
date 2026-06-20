"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";
import { CheckCircle } from "lucide-react";

const blocks = [
  {
    number: "01",
    title: "Wrestling Fundamentals\n& Advanced Techniques",
    color: "#FF8718",
    items: [
      "Takedowns — single leg, double leg, high crotch",
      "Defensive Wrestling — sprawls, hip movement, scrambles",
      "Chain Wrestling — linking attacks in sequence",
      "Mat Wrestling — top/bottom control and escapes",
      "Competition Strategies — timing and setups",
      "Live drilling and sparring rounds",
    ],
    description:
      "From the first grip fight to the finish — master the complete technical arsenal of elite wrestling with international-level instruction.",
  },
  {
    number: "02",
    title: "Physical\nConditioning",
    color: "#FFFFFF",
    items: [
      "Wrestling-specific endurance training",
      "Explosive strength development",
      "Reactive power and speed work",
      "Mobility and injury prevention",
      "Recovery protocols and nutrition basics",
      "Mental and physical fatigue management",
    ],
    description:
      "Elite technique means nothing without elite conditioning. Build the athletic engine required to compete at the highest levels of combat sports.",
  },
  {
    number: "03",
    title: "Champion\nMindset",
    color: "#FF8718",
    items: [
      "How elite athletes train and recover",
      "Pre-competition mental preparation",
      "Developing an unbreakable competitive mindset",
      "Goal setting and performance tracking",
      "Resilience and pressure response",
      "Champion habits and daily routines",
    ],
    description:
      "The physical is only half the battle. Learn the mental frameworks that separate good athletes from champions on the international stage.",
  },
];

export default function WrestlingCurriculum() {
  return (
    <section
      id="curriculum"
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
              The Curriculum
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What You Will{" "}
            <span style={{ color: "#FF8718" }}>Learn</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-white/50 max-w-2xl mb-16 text-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Three pillars of elite athlete development — technical mastery, physical excellence,
            and champion psychology.
          </p>
        </Reveal>

        {/* Curriculum blocks */}
        <div className="space-y-0 border border-white/10">
          {blocks.map((block, index) => (
            <Reveal key={block.number} delay={index * 0.15}>
              <motion.div
                initial={false}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="grid md:grid-cols-5 border-b border-white/10 last:border-b-0 group"
              >
                {/* Number column */}
                <div
                  className="md:col-span-1 p-6 md:p-10 flex md:flex-col items-center md:items-start gap-4 md:gap-0 border-b md:border-b-0 md:border-r border-white/10"
                  style={{ backgroundColor: "rgba(0,7,55,0.3)" }}
                >
                  <div
                    className="text-4xl md:text-6xl font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: block.color === "#FF8718" ? "rgba(255,135,24,0.3)" : "rgba(255,255,255,0.1)",
                    }}
                  >
                    {block.number}
                  </div>
                  <div
                    className="lg:mt-4 w-8 h-0.5"
                    style={{ backgroundColor: block.color }}
                  />
                </div>

                {/* Main content */}
                <div className="md:col-span-2 p-6 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
                  <h3
                    className="text-xl md:text-3xl font-bold uppercase text-white leading-tight mb-4 md:mb-6 break-words"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {block.title}
                  </h3>
                  <p
                    className="text-white/50 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {block.description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="md:col-span-2 p-6 md:p-10">
                  <ul className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "#FF8718" }}
                        />
                        <span
                          className="text-white/60 text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
