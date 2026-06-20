"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";

const sports = [
  {
    name: "Wrestling",
    discipline: "Freestyle & Greco-Roman",
    emoji: "🤼",
    description: "The foundation of all combat sports. Master takedowns, defense and mat control.",
  },
  {
    name: "BJJ",
    discipline: "Brazilian Jiu-Jitsu",
    emoji: "🥋",
    description: "Ground fighting excellence. Submissions, positional control and guard work.",
  },
  {
    name: "MMA",
    discipline: "Mixed Martial Arts",
    emoji: "🥊",
    description: "Where all disciplines converge. Complete fighter development for the cage.",
  },
  {
    name: "Grappling",
    discipline: "No-Gi Submission",
    emoji: "💪",
    description: "Pure grappling without the gi. Scrambles, leg locks and positional wrestling.",
  },
  {
    name: "Judo",
    discipline: "Olympic Judo",
    emoji: "🎌",
    description: "Throwing mastery. Hip throws, foot sweeps and explosive takedown mechanics.",
  },
  {
    name: "Submission\nWrestling",
    discipline: "Catch & Submission",
    emoji: "⚡",
    description: "Combining wrestling aggression with submission hunting. A complete system.",
  },
];

export default function WrestlingSports() {
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
              Disciplines
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          <Reveal delay={0.1} className="flex-1">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Sports We{" "}
              <span style={{ color: "#FF8718" }}>Cover</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="flex-1">
            <p
              className="text-white/50 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Whether you are a wrestler, BJJ practitioner, MMA fighter or complete
              beginner — this camp covers everything you need to become a complete
              combat sports athlete.
            </p>
          </Reveal>
        </div>

        {/* Sports grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
          {sports.map((sport, index) => (
            <Reveal key={sport.name} delay={index * 0.06}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(255,135,24,0.06)" }}
                transition={{ duration: 0.2 }}
                className="p-8 border-b border-r border-white/10 group cursor-default relative overflow-hidden"
              >
                {/* Background number */}
                <div
                  className="absolute top-4 right-4 text-6xl font-bold opacity-5 pointer-events-none select-none"
                  style={{ fontFamily: "var(--font-heading)", color: "#FF8718" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Emoji */}
                <div className="text-3xl mb-4">{sport.emoji}</div>

                {/* Sport name */}
                <h3
                  className="text-2xl font-bold uppercase text-white mb-1 whitespace-pre-line"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {sport.name}
                </h3>

                {/* Discipline */}
                <div
                  className="text-xs uppercase tracking-widest mb-4 font-bold"
                  style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
                >
                  {sport.discipline}
                </div>

                {/* Description */}
                <p
                  className="text-white/40 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {sport.description}
                </p>

                {/* Hover bottom border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                  style={{ backgroundColor: "#FF8718" }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.5}>
          <div className="mt-12 text-center">
            <p
              className="text-white/30 text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              All disciplines taught by credentialed black belts and international champions
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
