"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";

export default function StartupHero() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-950">
      
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white md:text-7xl">
          Own It On
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
          Build beautiful websites faster with Aceternity UI, Magic UI and
          Claude Code.
        </p>
      </div>

      <BackgroundBeams />
    </div>
  );
}