"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Training with Isa was a game-changer. His technique is unmatched and the intensity of the camp pushed me to a level I didn't know was possible. I came back from Switzerland a different athlete.",
    author: "Markus H.",
    country: "Germany",
    discipline: "Wrestler",
    initials: "MH",
  },
  {
    id: 2,
    quote:
      "As a BJJ practitioner wanting to improve my wrestling, this camp was exactly what I needed. The takedown system they teach is completely different from what I was doing — and it works. Immediately started winning more in competition.",
    author: "Lucas A.",
    country: "Brazil",
    discipline: "BJJ Black Belt",
    initials: "LA",
  },
  {
    id: 3,
    quote:
      "The combination of technical instruction and physical conditioning was unlike anything I've experienced. Small group size meant I actually got personal attention from the coaches. 100% worth it.",
    author: "Nathalie V.",
    country: "France",
    discipline: "MMA Fighter",
    initials: "NV",
  },
  {
    id: 4,
    quote:
      "Switzerland is already beautiful — training there while learning from world-class coaches made it even more special. The individual training plan they made for me was spot on. Highly recommend to any serious athlete.",
    author: "Tomasz K.",
    country: "Poland",
    discipline: "Grappler",
    initials: "TK",
  },
  {
    id: 5,
    quote:
      "I was nervous as a beginner but the coaches were patient and incredibly skilled at breaking down techniques. By day three I was drilling takedowns I never thought I'd learn. This camp is for everyone who is serious about improving.",
    author: "Ahmad R.",
    country: "Switzerland",
    discipline: "Beginner Wrestler",
    initials: "AR",
  },
];

export default function WrestlingTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 scroll-mt-20 relative overflow-hidden"
      style={{ backgroundColor: "#000e3d" }}
    >
      {/* Large quote background */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none"
        style={{ fontFamily: "var(--font-heading)", fontSize: "400px", color: "#FF8718" }}
      >
        "
      </div>

      <Container>
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12" style={{ backgroundColor: "#FF8718" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
            >
              Athlete Reviews
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase text-white leading-tight mb-16"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Athletes{" "}
            <span style={{ color: "#FF8718" }}>Say</span>
          </h2>
        </Reveal>

        {/* Testimonial */}
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="mb-8"
                style={{ color: "rgba(255,135,24,0.4)" }}
              />

              {/* Quote text */}
              <blockquote
                className="text-xl sm:text-2xl lg:text-3xl text-white/80 leading-relaxed mb-10 font-light"
                style={{ fontFamily: "var(--font-body)" }}
              >
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center font-bold text-sm"
                  style={{
                    backgroundColor: "rgba(255,135,24,0.15)",
                    border: "1px solid rgba(255,135,24,0.3)",
                    color: "#FF8718",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-white font-bold uppercase tracking-wide text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t.author}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span
                      className="text-xs text-white/40"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.discipline}
                    </span>
                    <span className="text-white/20">·</span>
                    <span
                      className="text-xs text-white/40"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.country}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-12">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 border flex items-center justify-center transition-all duration-200 hover:border-orange-400"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <ChevronLeft size={18} className="text-white/60" aria-hidden="true" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 border flex items-center justify-center transition-all duration-200 hover:border-orange-400"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <ChevronRight size={18} className="text-white/60" aria-hidden="true" />
            </button>

            {/* Dots — min 44x44 touch area via padding */}
            <div className="flex items-center gap-1" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className="flex items-center justify-center transition-all duration-300"
                  style={{ width: "44px", height: "44px", background: "transparent", border: "none", padding: 0 }}
                >
                  <span
                    style={{
                      display: "block",
                      width: i === current ? "24px" : "8px",
                      height: "3px",
                      backgroundColor: i === current ? "#FF8718" : "rgba(255,255,255,0.2)",
                      transition: "all 0.3s",
                    }}
                  />
                </button>
              ))}
            </div>

            <span
              className="ml-auto text-sm"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-heading)" }}
            >
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
