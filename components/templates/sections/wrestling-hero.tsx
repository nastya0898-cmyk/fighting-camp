"use client";

import { preload } from "react-dom";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function WrestlingHero() {
  preload("/head-photo.jpg", { as: "image" });

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLearnMore = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000737" }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/head-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Multi-layer dark overlay for cinematic effect */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,7,55,0.92) 0%, rgba(0,7,55,0.75) 50%, rgba(0,7,55,0.88) 100%)",
        }}
      />

      {/* Orange accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 z-20"
        style={{ background: "linear-gradient(90deg, transparent, #FF8718, transparent)" }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${[400, 300, 500, 250, 350, 200][i]}px`,
              height: `${[400, 300, 500, 250, 350, 200][i]}px`,
              background: `radial-gradient(circle, rgba(255,135,24,0.04) 0%, transparent 70%)`,
              left: `${[10, 70, 30, 80, 20, 60][i]}%`,
              top: `${[20, 60, 80, 10, 50, 30][i]}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto pt-20">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span
            className="h-px w-12"
            style={{ backgroundColor: "#FF8718" }}
          />
          <span
            className="text-xs font-bold uppercase tracking-[0.3em] px-4 py-1.5 border"
            style={{
              color: "#FF8718",
              borderColor: "rgba(255,135,24,0.4)",
              fontFamily: "var(--font-heading)",
              backgroundColor: "rgba(255,135,24,0.08)",
            }}
          >
            Switzerland 2026
          </span>
          <span
            className="h-px w-12"
            style={{ backgroundColor: "#FF8718" }}
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tight text-white mb-6 break-words"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Train With
          <br />
          <span style={{ color: "#FF8718" }}>World-Class</span>
          <br />
          Champions
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/80">
            In Switzerland
          </span>
          <br />
          <span
            className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 inline-block break-words"
            style={{ color: "#FF8718" }}
          >
            Next wrestling camp in the Swiss mountains — August 2–7!{" "}
            <span className="text-white">30 spots only!</span>
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg sm:text-xl text-white/60 mb-4 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          High Performance Wrestling Camp Switzerland 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-sm sm:text-base text-white/50 mb-10 uppercase tracking-widest"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Wrestling · BJJ · MMA · Grappling · Combat Sports
        </motion.p>

        {/* Spots warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-10 border"
          style={{
            borderColor: "rgba(255,135,24,0.5)",
            backgroundColor: "rgba(255,135,24,0.1)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#FF8718" }}
          />
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
          >
            Only 30 Spots Available
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg"
            style={{
              backgroundColor: "#FF8718",
              color: "#000737",
              fontFamily: "var(--font-heading)",
              boxShadow: "0 0 30px rgba(255,135,24,0.4)",
            }}
          >
            Reserve Your Spot →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToLearnMore}
            className="px-10 py-4 text-sm font-bold uppercase tracking-widest border-2 transition-all duration-300"
            style={{
              borderColor: "rgba(255,255,255,0.4)",
              color: "white",
              fontFamily: "var(--font-heading)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Coach names teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 flex items-center justify-center gap-4 text-white/30"
        >
          <span className="h-px w-8 bg-white/20" />
          <span
            className="text-xs uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Leading Coaches: Ismail Musukaev · Idris Ibaev · Isa Usupov
          </span>
          <span className="h-px w-8 bg-white/20" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors"
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
