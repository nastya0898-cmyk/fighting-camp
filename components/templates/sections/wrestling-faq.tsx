"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";

const faqs = [
  {
    question: "Who can join the High Performance Wrestling Camp?",
    answer:
      "The camp is open to athletes of all levels — from complete beginners to advanced international competitors. Whether you wrestle, practice BJJ, MMA, Judo, Grappling or just want to start your combat sports journey, you are welcome. Age: 14+ (under 18 requires parental consent).",
  },
  {
    question: "Where exactly is the camp located?",
    answer:
      "The camp is held in Switzerland, Europe. The exact venue will be announced to registered participants. Switzerland offers world-class training facilities, clean environment and an inspiring Alpine setting.",
  },
  {
    question: "What should I bring to the camp?",
    answer:
      "You should bring: wrestling shoes, wrestling singlet or shorts/rash guard, gi (optional for BJJ sessions), training gear, personal hygiene items, and a water bottle. A full packing list will be sent to all registered athletes closer to camp dates.",
  },
  {
    question: "Do I need prior wrestling experience to attend?",
    answer:
      "No. The camp is designed to accommodate all skill levels. Beginners will receive foundational instruction while advanced athletes will be challenged with high-level techniques and live training. Our coaches are experienced at teaching both ends of the spectrum.",
  },
  {
    question: "Is accommodation included in the price?",
    answer:
      "Accommodation depends on your chosen package. The Camp Only package (€800) covers training sessions and coaching only — you arrange your own accommodation. The Full Package (€1200) includes accommodation and full board meals. Contact us to discuss your specific needs.",
  },
  {
    question: "How many athletes will be at the camp?",
    answer:
      "We strictly limit attendance to 30 athletes maximum. This small group size ensures every participant receives personal attention from the coaching staff and that the quality of instruction remains at the highest possible level.",
  },
  {
    question: "What is the daily training schedule like?",
    answer:
      "A typical day includes morning technical drilling sessions, midday strength and conditioning, afternoon live training and sparring, and evening recovery and coaching analysis. The full schedule will be shared with registered athletes.",
  },
  {
    question: "How do I secure my spot?",
    answer:
      "Fill in the contact form on this page or reach out via email or phone. Our team will respond within 24 hours with registration details and payment information. Spots are confirmed on a first-come, first-served basis.",
  },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.05}>
      <div
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        >
          <span
            className="text-white/80 group-hover:text-white transition-colors font-bold text-base uppercase tracking-wide flex-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {question}
          </span>
          <span
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300"
            style={{
              borderColor: open ? "#FF8718" : "rgba(255,255,255,0.15)",
              backgroundColor: open ? "rgba(255,135,24,0.1)" : "transparent",
            }}
          >
            {open ? (
              <Minus size={14} style={{ color: "#FF8718" }} />
            ) : (
              <Plus size={14} className="text-white/40" />
            )}
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p
                className="pb-6 text-white/50 leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function WrestlingFaq() {
  return (
    <section
      id="faq"
      className="py-24 lg:py-32 scroll-mt-20"
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
              FAQ
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: heading */}
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <h2
                className="text-4xl sm:text-5xl font-bold uppercase text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Frequently
                <br />
                Asked{" "}
                <span style={{ color: "#FF8718" }}>Questions</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="text-white/40 mb-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Everything you need to know before registering.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 text-sm font-bold uppercase tracking-widest border-2 transition-all duration-300"
                style={{
                  borderColor: "rgba(255,135,24,0.4)",
                  color: "#FF8718",
                  fontFamily: "var(--font-heading)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,135,24,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Ask a Question →
              </motion.button>
            </Reveal>
          </div>

          {/* Right: FAQ list */}
          <div className="lg:col-span-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
