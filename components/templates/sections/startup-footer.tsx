"use client";

import { Container } from "@/components/ui/layout/container";

const footerLinks = {
  product: ["Features", "Pricing", "FAQ"],
  company: ["About", "Blog", "Careers"],
  legal: ["Privacy", "Terms", "Contact"],
};

export default function StartupFooter() {
  return (
    <footer className="border-t border-neutral-800 py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              StartupTemplate
            </h3>

            <p className="text-sm text-neutral-400">
              A modern starter template for SaaS, AI startups,
              agencies, consulting firms and business websites.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Product
            </h4>

            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Company
            </h4>

            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Legal
            </h4>

            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          © 2025 StartupTemplate. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}