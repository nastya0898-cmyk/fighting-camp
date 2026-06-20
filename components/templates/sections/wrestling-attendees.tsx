"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";

const attendeeTypes = [
  { label: "Beginner Wrestlers", desc: "Starting your wrestling journey", emoji: "🥋" },
  { label: "Intermediate Athletes", desc: "Looking to level up your game", emoji: "📈" },
  { label: "Advanced Competitors", desc: "Preparing for high-level competition", emoji: "🏆" },
  { label: "BJJ Practitioners", desc: "Adding wrestling to your game", emoji: "🥊" },
  { label: "MMA Fighters", desc: "Strengthening your grappling foundation", emoji: "⚡" },
  { label: "Grapplers", desc: "No-gi submission wrestling focus", emoji: "💪" },
  { label: "Judo Athletes", desc: "Expanding beyond the gi", emoji: "🎌" },
  { label: "Combat Sports Fans", desc: "Starting your martial arts journey", emoji: "🔥" },
];

export default function WrestlingAttendees() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#000737" }}
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
              Is This Camp For You?
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <Reveal delay={0.1}>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Who Can{" "}
              <span style={{ color: "#FF8718" }}>Attend</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="text-white/50 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Whether you're stepping on the mat for the first time or preparing for
              international competition — this camp is built to push every athlete
              to the next level.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {attendeeTypes.map((type, index) => (
            <Reveal key={type.label} delay={index * 0.06}>
              <motion.div
                whileHover={{
                  y: -6,
                  borderColor: "rgba(255,135,24,0.5)",
                  backgroundColor: "rgba(255,135,24,0.05)",
                }}
                transition={{ duration: 0.25 }}
                className="p-6 border group cursor-default"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <div className="text-2xl mb-4">{type.emoji}</div>
                <h3
                  className="text-white font-bold uppercase text-sm tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {type.label}
                </h3>
                <p
                  className="text-white/40 text-xs"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {type.desc}
                </p>
                <div
                  className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: "#FF8718" }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA row */}
        <Reveal delay={0.6}>
          <div
            className="mt-16 p-8 lg:p-10 border flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              borderColor: "rgba(255,135,24,0.2)",
              backgroundColor: "rgba(255,135,24,0.04)",
            }}
          >
            <div>
              <h3
                className="text-2xl font-bold uppercase text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to Join?
              </h3>
              <p
                className="text-white/50"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Only 30 spots available. Don't miss your chance to train in Switzerland.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-shrink-0 px-8 py-4 font-bold uppercase tracking-widest text-sm"
              style={{
                backgroundColor: "#FF8718",
                color: "#000737",
                fontFamily: "var(--font-heading)",
              }}
            >
              Apply Now →
            </motion.button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
