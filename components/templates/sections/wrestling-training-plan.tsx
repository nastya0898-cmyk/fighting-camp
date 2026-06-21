"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";
import { ClipboardList, ArrowRight } from "lucide-react";

const planSteps = [
  { step: "01", label: "Athlete Assessment", desc: "Skills evaluation on day one" },
  { step: "02", label: "Custom Plan Created", desc: "Personalized by coaching staff" },
  { step: "03", label: "Daily Execution", desc: "Focused drilling and live training" },
  { step: "04", label: "Progress Review", desc: "Regular feedback sessions" },
  { step: "05", label: "Final Report", desc: "Take-home development roadmap" },
];

export default function WrestlingTrainingPlan() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const center = window.innerHeight / 2;
      let closest = 0;
      let closestDist = Infinity;
      stepRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const dist = Math.abs(stepCenter - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveStep(closest);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#000737" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/wrestling-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,7,55,0.92) 0%, rgba(0,7,55,0.82) 50%, rgba(0,7,55,0.92) 100%)",
        }}
      />

      {/* Orange left accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 z-10"
        style={{ background: "linear-gradient(to bottom, transparent, #FF8718, transparent)" }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12" style={{ backgroundColor: "#FF8718" }} />
                <span
                  className="text-xs font-bold uppercase tracking-[0.3em]"
                  style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
                >
                  Personalized
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-4xl sm:text-5xl font-bold uppercase text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Your Personal{" "}
                <span style={{ color: "#FF8718" }}>Training Plan</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-white/50 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Every athlete at Elite Wrestling Camp Switzerland receives an individual training
                plan — created personally by the coaching staff based on your current level,
                goals and experience.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div
                className="p-6 border mb-8"
                style={{
                  borderColor: "rgba(255,135,24,0.3)",
                  backgroundColor: "rgba(255,135,24,0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <ClipboardList size={24} style={{ color: "#FF8718" }} className="flex-shrink-0 mt-1" />
                  <div>
                    <h3
                      className="text-white font-bold uppercase tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Individual Training Plan
                    </h3>
                    <p
                      className="text-white/50 text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Not a generic program — a plan designed specifically for YOU by
                      international champions who know what it takes to win.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 text-sm font-bold uppercase tracking-widest flex items-center gap-3"
                style={{
                  backgroundColor: "#FF8718",
                  color: "#000737",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Get Your Personal Plan
                <ArrowRight size={16} />
              </motion.button>
            </Reveal>
          </div>

          {/* Right: roadmap */}
          <Reveal delay={0.3} direction="left">
            <div className="relative">
              {/* Vertical connecting line */}
              <div
                className="absolute left-6 top-8 bottom-8 w-px"
                style={{ backgroundColor: "rgba(255,135,24,0.2)" }}
              />

              <div className="space-y-2">
                {planSteps.map((step, i) => {
                  const isActive = i === activeStep;
                  return (
                  <motion.div
                    key={step.step}
                    ref={(el) => { stepRefs.current[i] = el; }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    animate={{
                      backgroundColor: isActive
                        ? "rgba(255,135,24,0.08)"
                        : "rgba(255,255,255,0.02)",
                    }}
                    className="flex items-center gap-6 p-5 relative"
                    style={{
                      borderLeft: `2px solid ${isActive ? "#FF8718" : "rgba(255,255,255,0.05)"}`,
                      transition: "border-color 0.4s ease, background-color 0.4s ease",
                    }}
                  >
                    {/* Step box */}
                    <motion.div
                      animate={{
                        backgroundColor: isActive ? "#FF8718" : "rgba(255,135,24,0.1)",
                        scale: isActive ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.35 }}
                      className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-sm font-bold z-10"
                      style={{
                        border: `1px solid ${isActive ? "#FF8718" : "rgba(255,135,24,0.3)"}`,
                        color: isActive ? "#000737" : "#FF8718",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {step.step}
                    </motion.div>

                    {/* Content */}
                    <div>
                      <motion.div
                        animate={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.7)" }}
                        transition={{ duration: 0.35 }}
                        className="font-bold uppercase tracking-wide text-sm"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {step.label}
                      </motion.div>
                      <div
                        className="text-white/40 text-xs mt-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {step.desc}
                      </div>
                    </div>
                  </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
