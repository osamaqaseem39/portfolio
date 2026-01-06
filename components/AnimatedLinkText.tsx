"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedLinkTextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Component for animated link text with character roll effect
export default function AnimatedLinkText({ children, className = "", style }: AnimatedLinkTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const text = String(children);
  const characters = text.split('');

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: 'inline-block', perspective: '1000px', ...style }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block', transformStyle: 'preserve-3d', transformOrigin: 'center' }}
          animate={isHovered ? {
            rotateX: [0, 360],
          } : {
            rotateX: 0,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
            ease: "easeInOut"
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

