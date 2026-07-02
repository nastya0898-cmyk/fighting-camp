"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";
import Image from "next/image";
import { Shield, Star, ExternalLink } from "lucide-react";

const coaches = [
  {
    id: "ismail",
    name: "Ismail Musukaev",
    title: "Leading Coach",
    initials: "IM",
    photo: "/ismail-musukaev.jpg",
    instagram: "https://www.instagram.com/ismail_musukaev__/",
    credentials: [
      "2023 World Champion — 65 kg Freestyle Wrestling",
      "2x Olympian — Tokyo 2020 & Paris 2024",
      "European Champion — Freestyle Wrestling",
      "2019 World Championship Bronze Medalist",
      "Dagestani Wrestling Tradition",
    ],
    bio: "Ismail Musukaev is a 2023 World Champion and two-time Olympian (Tokyo 2020, Paris 2024) competing at 65 kg freestyle wrestling. Born in Kabardino-Balkaria, Russia, he represents Hungary and broke a 44-year drought in Hungarian wrestling by winning the World title in 2023. His explosive Dagestani style and relentless offensive wrestling make him one of the most exciting coaches on the international circuit.",
    color: "#FF8718",
  },
  {
    id: "idris",
    name: "Idris Ibaev",
    title: "Leading Coach",
    initials: "II",
    photo: "/idris-ibaev.jpg",
    instagram: "https://www.instagram.com/ibaev160?igsh=ZHIyb2sxd3g4b3g2",
    credentials: [
      "2021 World Champion — Greco-Roman Wrestling 72 kg",
      "German National Champion",
      "Elite Grappling Competitor",
      "Strength & Conditioning Specialist",
      "Technical Wrestling Coach",
    ],
    bio: "Idris Ibaev is a 2021 World Champion in Greco-Roman wrestling at 72 kg and German National Champion. His elite international pedigree and hands-on technical coaching style make him one of the most accomplished coaches at the Apex Wrestling Camp Switzerland 2026.",
    color: "#FF8718",
  },
  {
    id: "isa",
    name: "Isa Usupov",
    title: "Leading Coach",
    initials: "IU",
    photo: "/isa-usupov.jpg",
    instagram: "https://www.instagram.com/spartansoldier_1/",
    credentials: [
      "Multiple-time Swiss Wrestling Champion",
      "European Grappling Champion",
      "Vice President — Swiss MMA National Team",
      "Black Belt in Judo",
      "Black Belt in Brazilian Jiu-Jitsu",
    ],
    bio: "Isa Usupov is one of Switzerland's most decorated combat sports athletes and coaches. With an international career spanning wrestling, BJJ, Judo and MMA, he brings a unique multi-disciplinary approach that has shaped some of Europe's top competitors.",
    color: "#FF8718",
  },
];

export default function WrestlingCoaches() {
  return (
    <section
      id="coaches"
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
              The Coaching Staff
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meet Your{" "}
            <span style={{ color: "#FF8718" }}>Coaches</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-white/50 max-w-2xl mb-16 text-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Train directly with coaches who have competed and won at the highest levels
            of international combat sports.
          </p>
        </Reveal>

        {/* Coach cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <Reveal key={coach.id} delay={index * 0.2} direction="up">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden border"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(0,7,55,0.6)",
                }}
              >
                {/* Orange glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,135,24,0.08) 0%, transparent 60%)",
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, ${coach.color}, transparent)`,
                  }}
                />

                {/* Photo banner (if photo exists) */}
                {coach.photo && (
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ backgroundColor: "rgba(0,7,55,0.8)", aspectRatio: "1 / 1", maxHeight: "420px" }}
                  >
                    <Image
                      src={coach.photo}
                      alt={`${coach.name} — Leading Coach at Apex Wrestling Camp Switzerland`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />
                    {/* Gradient fade to card */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-24"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent, rgba(0,7,55,0.95))",
                      }}
                    />
                    {/* Instagram badge over photo */}
                    {coach.instagram && (
                      <a
                        href={coach.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105"
                        style={{
                          backgroundColor: "rgba(0,7,55,0.85)",
                          border: "1px solid rgba(255,135,24,0.5)",
                          color: "#FF8718",
                          fontFamily: "var(--font-heading)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <circle cx="12" cy="12" r="4"/>
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                        </svg>
                        {coach.id === "isa" ? "@spartansoldier_1" : coach.id === "idris" ? "@ibaev160" : "@ismail_musukaev__"}
                      </a>
                    )}
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-6 mb-8">
                    {/* Avatar (shown only if no photo) */}
                    {!coach.photo && (
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-24 h-24 flex items-center justify-center text-3xl font-bold"
                          style={{
                            backgroundColor: "rgba(255,135,24,0.15)",
                            border: "2px solid rgba(255,135,24,0.4)",
                            fontFamily: "var(--font-heading)",
                            color: coach.color,
                          }}
                        >
                          {coach.initials}
                        </div>
                        {coach.id === "isa" && (
                          <div
                            className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center"
                            style={{ backgroundColor: "#FF8718" }}
                          >
                            <Star size={12} style={{ color: "#000737" }} />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Name / title */}
                    <div className={coach.photo ? "w-full" : ""}>
                      <div
                        className="text-xs uppercase tracking-widest mb-1 font-bold"
                        style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
                      >
                        {coach.title}
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className="text-2xl lg:text-3xl font-bold uppercase text-white"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {coach.name}
                        </h3>
                        {/* Instagram link (text row, shown for all with instagram) */}
                        {coach.instagram && (
                          <a
                            href={coach.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs transition-colors duration-200 hover:text-white flex-shrink-0"
                            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                          >
                            <ExternalLink size={12} />
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p
                    className="text-white/50 leading-relaxed mb-8 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {coach.bio}
                  </p>

                  {/* Credentials */}
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-4"
                      style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
                    >
                      Credentials
                    </div>
                    <ul className="space-y-2.5">
                      {coach.credentials.map((cred) => (
                        <li key={cred} className="flex items-start gap-3">
                          <Shield
                            size={14}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: "#FF8718" }}
                          />
                          <span
                            className="text-white/70 text-sm"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {cred}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instagram CTA button (bottom of card) */}
                  {coach.instagram && (
                    <a
                      href={coach.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 border"
                      style={{
                        borderColor: "rgba(255,135,24,0.3)",
                        color: "#FF8718",
                        fontFamily: "var(--font-heading)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,135,24,0.08)";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FF8718";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,135,24,0.3)";
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                      </svg>
                      Follow on Instagram → {coach.id === "isa" ? "@spartansoldier_1" : coach.id === "idris" ? "@ibaev160" : "@ismail_musukaev__"}
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.5}>
          <div className="mt-16 text-center">
            <p
              className="text-white/40 mb-6 text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Train directly with world-class leading coaches
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all duration-300"
              style={{
                borderColor: "rgba(255,135,24,0.5)",
                color: "#FF8718",
                fontFamily: "var(--font-heading)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,135,24,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Train With These Coaches →
            </motion.button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
