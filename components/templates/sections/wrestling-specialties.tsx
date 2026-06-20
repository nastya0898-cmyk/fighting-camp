"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";
import { Trophy, Medal, Zap, Star, Target, User } from "lucide-react";

const specialties = [
  {
    icon: Trophy,
    title: "World Champion\nFreestyle Wrestlers",
    description: "Train with athletes who have stood on the podium at World Championship events.",
  },
  {
    icon: Medal,
    title: "World Champion\nGreco-Roman Wrestlers",
    description: "Experience elite Greco-Roman techniques from international champions.",
  },
  {
    icon: Star,
    title: "Judo\nBlack Belts",
    description: "Master throwing and takedown mechanics from certified black belt instructors.",
  },
  {
    icon: Zap,
    title: "Brazilian Jiu-Jitsu\nBlack Belts",
    description: "Learn world-class ground control, submissions and positional mastery.",
  },
  {
    icon: Trophy,
    title: "Elite Competition\nExperience",
    description: "Coaches with international medals across multiple combat sports disciplines.",
  },
  {
    icon: User,
    title: "Personal Athlete\nDevelopment",
    description: "Every athlete receives individualized attention and a personal training plan.",
  },
];

export default function WrestlingSpecialties() {
  return (
    <section
      className="py-24 lg:py-32"
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
              Why Choose Us
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <Reveal delay={0.1}>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What Makes This
              <br />
              Camp{" "}
              <span style={{ color: "#FF8718" }}>Special</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="text-white/50 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              You won't find this coaching lineup anywhere else in Europe. Our staff combines
              experience at the highest levels of international wrestling, grappling, and combat
              sports — all in one intensive summer camp.
            </p>
          </Reveal>
        </div>

        {/* Specialty cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialties.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.div
                whileHover={{
                  y: -6,
                  borderColor: "rgba(255,135,24,0.5)",
                  backgroundColor: "rgba(255,135,24,0.05)",
                }}
                transition={{ duration: 0.25 }}
                className="p-8 border cursor-default group"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(0,7,55,0.5)",
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(255,135,24,0.12)" }}
                >
                  <item.icon size={22} style={{ color: "#FF8718" }} />
                </motion.div>

                <h3
                  className="font-bold uppercase text-white mb-3 text-base leading-tight whitespace-pre-line"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>

                {/* Bottom accent on hover */}
                <div
                  className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: "#FF8718" }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
