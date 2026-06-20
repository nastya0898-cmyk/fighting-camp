"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";
import { Calendar, Clock, MapPin, Bell } from "lucide-react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

const TARGET_DATE = new Date("2026-07-25T08:00:00");

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <div
          className="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center border text-4xl sm:text-5xl font-bold"
          style={{
            borderColor: "rgba(255,135,24,0.3)",
            backgroundColor: "rgba(255,135,24,0.06)",
            fontFamily: "var(--font-heading)",
            color: "white",
          }}
        >
          {String(value).padStart(2, "0")}
        </div>
      </motion.div>
      <span
        className="mt-3 text-xs uppercase tracking-widest text-white/40"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function WrestlingDates() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#000737" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/wrestling-3.jpg')",
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
            "linear-gradient(135deg, rgba(0,7,55,0.88) 0%, rgba(0,7,55,0.78) 50%, rgba(0,7,55,0.88) 100%)",
        }}
      />

      <Container>
        <div className="relative z-20">
          {/* Header */}
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12" style={{ backgroundColor: "#FF8718" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
              >
                Camp Dates
              </span>
            </div>
          </Reveal>

          <div className="text-center max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <h2
                className="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white leading-none mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Summer{" "}
                <span style={{ color: "#FF8718" }}>2026</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-xl text-white/60 mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Last Week of July or First Week of August 2026
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-16 border"
                style={{
                  borderColor: "rgba(255,135,24,0.3)",
                  backgroundColor: "rgba(255,135,24,0.06)",
                }}>
                <Bell size={14} style={{ color: "#FF8718" }} />
                <span
                  className="text-sm text-white/60"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Final dates will be announced soon — secure your spot now
                </span>
              </div>
            </Reveal>

            {/* Countdown */}
            <Reveal delay={0.4}>
              <div className="mb-6">
                <p
                  className="text-xs uppercase tracking-widest text-white/30 mb-8"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Estimated Countdown to Camp Start
                </p>
                <div className="flex items-center justify-center gap-4 sm:gap-8">
                  <CountdownUnit value={days} label="Days" />
                  <span
                    className="text-4xl font-bold text-white/30 mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    :
                  </span>
                  <CountdownUnit value={hours} label="Hours" />
                  <span
                    className="text-4xl font-bold text-white/30 mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    :
                  </span>
                  <CountdownUnit value={minutes} label="Minutes" />
                  <span
                    className="text-4xl font-bold text-white/30 mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    :
                  </span>
                  <CountdownUnit value={seconds} label="Seconds" />
                </div>
              </div>
            </Reveal>

            {/* Details row */}
            <Reveal delay={0.5}>
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-16 border"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                {[
                  {
                    icon: Calendar,
                    label: "When",
                    value: "Last Week of July / First Week of August 2026",
                  },
                  {
                    icon: Clock,
                    label: "Duration",
                    value: "Intensive 5–7 Day Camp",
                  },
                  {
                    icon: MapPin,
                    label: "Where",
                    value: "Switzerland, Europe",
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="py-8 px-6 text-center"
                    style={{
                      borderRight:
                        i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    }}
                  >
                    <item.icon
                      size={24}
                      className="mx-auto mb-3"
                      style={{ color: "#FF8718" }}
                    />
                    <div
                      className="text-xs uppercase tracking-widest text-white/30 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
