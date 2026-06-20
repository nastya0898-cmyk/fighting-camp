"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/layout/container";
import { Reveal } from "@/components/ui/animations/reveal";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const sports = ["Wrestling", "BJJ", "MMA", "Grappling", "Judo", "Submission Wrestling", "Other"];

export default function WrestlingContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    sport: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "white",
    fontFamily: "var(--font-body)",
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 scroll-mt-20 relative overflow-hidden"
      style={{ backgroundColor: "#000e3d" }}
    >
      {/* Background decoration */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right center, rgba(255,135,24,0.3) 0%, transparent 70%)",
        }}
      />

      <Container>
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12" style={{ backgroundColor: "#FF8718" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
            >
              Limited Spots
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <Reveal delay={0.1}>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Reserve
                <br />
                Your{" "}
                <span style={{ color: "#FF8718" }}>Spot</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-white/50 text-lg leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Places are strictly limited to{" "}
                <span className="text-white font-bold">30 athletes</span>. Fill in the form and
                our team will contact you within 24 hours with payment details and all camp
                information.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+41 77 979 35 35",
                    href: "tel:+41779793535",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "onemoreroundathletics@gmail.com",
                    href: "mailto:onemoreroundathletics@gmail.com",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Switzerland, Europe",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,135,24,0.12)" }}
                    >
                      <item.icon size={18} style={{ color: "#FF8718" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest text-white/30 mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white/70 hover:text-white transition-colors"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span
                          className="text-white/70"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Urgency notice */}
            <Reveal delay={0.4}>
              <div
                className="p-5 border"
                style={{
                  borderColor: "rgba(255,135,24,0.25)",
                  backgroundColor: "rgba(255,135,24,0.06)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#FF8718" }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#FF8718", fontFamily: "var(--font-heading)" }}
                  >
                    Early Registration
                  </span>
                </div>
                <p
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Submit your application early to secure your spot. Spots are confirmed
                  on a first-come, first-served basis and are expected to fill quickly.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.3} direction="left">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-20 text-center"
              >
                <CheckCircle size={64} style={{ color: "#FF8718" }} className="mb-6" />
                <h3
                  className="text-2xl font-bold uppercase text-white mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Application Received!
                </h3>
                <p
                  className="text-white/50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  We'll contact you within 24 hours with next steps and payment details.
                  Welcome to the journey.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-widest text-white/40 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors placeholder-white/20"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-widest text-white/40 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors placeholder-white/20"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs uppercase tracking-widest text-white/40 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors placeholder-white/20"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-country"
                      className="block text-xs uppercase tracking-widest text-white/40 mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Country *
                    </label>
                    <input
                      id="contact-country"
                      type="text"
                      name="country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Your country"
                      className="w-full px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors placeholder-white/20"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="sport-select"
                    className="block text-xs uppercase tracking-widest text-white/40 mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Primary Sport *
                  </label>
                  <select
                    id="sport-select"
                    name="sport"
                    required
                    value={form.sport}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors appearance-none"
                    style={{ ...inputStyle, color: form.sport ? "white" : "rgba(255,255,255,0.2)" }}
                  >
                    <option value="" disabled>Select your sport</option>
                    {sports.map((s) => (
                      <option key={s} value={s} style={{ backgroundColor: "#000e3d", color: "white" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-widest text-white/40 mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Message / Questions
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your experience level, goals, or any questions..."
                    className="w-full px-4 py-3 text-sm outline-none focus:border-orange-400 transition-colors resize-none placeholder-white/20"
                    style={inputStyle}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-300"
                  style={{
                    backgroundColor: loading ? "rgba(255,135,24,0.5)" : "#FF8718",
                    color: "#000737",
                    fontFamily: "var(--font-heading)",
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-[#000737]/30 border-t-[#000737] rounded-full"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Apply Now
                      <Send size={14} />
                    </>
                  )}
                </motion.button>

                <p
                  className="text-xs text-white/25 text-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  We respect your privacy. Your data will never be shared with third parties.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
