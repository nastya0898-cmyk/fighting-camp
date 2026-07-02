"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/layout/container";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Coaches", href: "#coaches" },
  { name: "Program", href: "#curriculum" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function WrestlingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(0,7,55,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,135,24,0.2)" : "none",
      }}
    >
      <Container>
        <div className="flex h-18 items-center justify-between py-4">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-none font-bold text-sm"
              style={{ backgroundColor: "#FF8718", color: "#000737" }}
            >
              EWC
            </div>
            <div className="hidden sm:block">
              <div
                className="text-white font-bold text-sm uppercase tracking-widest leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Apex Wrestling
              </div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "#FF8718" }}>
                Camp Switzerland 2026
              </div>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center gap-8"
          >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-200 relative group"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#FF8718" }}
                />
              </button>
            ))}
          </motion.nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#FF8718",
                color: "#000737",
                fontFamily: "var(--font-heading)",
              }}
            >
              Reserve Spot
            </button>
          </motion.div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: "rgba(0,7,55,0.98)", backdropFilter: "blur(20px)" }}
            className="lg:hidden border-t border-white/10"
          >
            <Container>
              <div className="py-6 flex flex-col gap-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-white/70 hover:text-white text-lg uppercase tracking-widest py-2 transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="mt-4 py-3 text-sm font-bold uppercase tracking-widest text-center"
                  style={{ backgroundColor: "#FF8718", color: "#000737", fontFamily: "var(--font-heading)" }}
                >
                  Reserve Your Spot
                </button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
