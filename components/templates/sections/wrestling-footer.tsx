"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Container } from "@/components/ui/layout/container";
import { Share2, PlayCircle, Users, MessageSquare, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "About the Camp", href: "#about" },
  { name: "Coaches", href: "#coaches" },
  { name: "Program", href: "#curriculum" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const sports = [
  "Wrestling",
  "Brazilian Jiu-Jitsu",
  "MMA",
  "Grappling",
  "Judo",
  "Submission Wrestling",
];

const social = [
  { icon: Share2, label: "Instagram", href: "#" },
  { icon: PlayCircle, label: "YouTube", href: "#" },
  { icon: Users, label: "Facebook", href: "#" },
  { icon: MessageSquare, label: "Twitter / X", href: "#" },
];

export default function WrestlingFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ backgroundColor: "#000520" }}
      className="border-t"
      // border override
    >
      <div style={{ borderColor: "rgba(255,135,24,0.2)" }} className="border-t">
        {/* Top CTA strip */}
        <div
          className="py-12"
          style={{
            background: "linear-gradient(135deg, rgba(255,135,24,0.08) 0%, transparent 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-bold uppercase text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Ready to Train in Switzerland?
                </h2>
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  30 spots available · Summer 2026 · Apex Wrestling Camp
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick("#contact")}
                className="flex-shrink-0 px-8 py-3 font-bold uppercase tracking-widest text-sm"
                style={{
                  backgroundColor: "#FF8718",
                  color: "#000737",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Reserve Your Spot →
              </motion.button>
            </div>
          </Container>
        </div>

        {/* Main footer content */}
        <Container>
          <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Apex Wrestling Camp"
                  width={140}
                  height={56}
                  className="object-contain"
                />
              </div>
              <p
                className="text-white/60 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Train with world-class champions in Switzerland. The premier combat sports
                training camp in Europe.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {social.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ y: -2, color: "#FF8718" }}
                    aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center border transition-all duration-200"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-6"
                style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
              >
                Quick Links
              </p>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-white/40 hover:text-white transition-colors text-left"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sports */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-6"
                style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
              >
                Sports
              </p>
              <ul className="space-y-3">
                {sports.map((sport) => (
                  <li key={sport}>
                    <span
                      className="text-sm text-white/40"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {sport}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-6"
                style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
              >
                Contact
              </p>
              <div className="space-y-4">
                <div>
                  <div
                    className="text-xs uppercase tracking-wider text-white/50 mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:infowrestlingcamps@gmail.com"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    infowrestlingcamps@gmail.com
                  </a>
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider text-white/50 mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Phone
                  </div>
                  <a
                    href="tel:+41779793535"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    +41 77 979 35 35
                  </a>
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider text-white/50 mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Location
                  </div>
                  <span
                    className="text-sm text-white/50"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Switzerland, Europe
                  </span>
                </div>
              </div>

              {/* Camp dates note */}
              <div
                className="mt-6 p-4 border"
                style={{
                  borderColor: "rgba(255,135,24,0.2)",
                  backgroundColor: "rgba(255,135,24,0.04)",
                }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
                >
                  Summer 2026
                </div>
                <div
                  className="text-xs text-white/40"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  6–11 September 2026
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Bottom bar */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <Container>
            <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                <p
                  className="text-xs text-white/50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  © 2026 Apex Wrestling Camp Switzerland. All rights reserved.
                </p>
                <span className="hidden sm:inline text-white/20 text-xs">·</span>
                <p className="text-xs" style={{ fontFamily: "var(--font-body)" }}>
                  <span className="text-white/30">Website created by </span>
                  <a
                    href="https://boldlinesmm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors duration-200"
                  >
                    boldlinesmm.com
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-6">
                <button
                  className="text-xs text-white/50 hover:text-white/50 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Privacy Policy
                </button>
                <button
                  className="text-xs text-white/50 hover:text-white/50 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Terms
                </button>

                {/* Scroll to top */}
                <motion.button
                  whileHover={{ y: -2, color: "#FF8718" }}
                  onClick={scrollToTop}
                  className="w-8 h-8 border flex items-center justify-center transition-all duration-200"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.3)",
                  }}
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={14} />
                </motion.button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
