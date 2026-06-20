"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: RevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 30 };

      case "down":
        return { opacity: 0, y: -30 };

      case "left":
        return { opacity: 0, x: 30 };

      case "right":
        return { opacity: 0, x: -30 };

      default:
        return { opacity: 0, y: 30 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}