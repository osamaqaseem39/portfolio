"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo, ReactNode } from "react";

interface ReadingProgressTextProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  highlightColor?: string;
  defaultColor?: string;
}

// Helper function to extract text content from ReactNode
function extractText(node: ReactNode): string {
  if (typeof node === "string") {
    return node;
  }
  if (typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  if (node && typeof node === "object" && "props" in node) {
    return extractText((node as any).props?.children || "");
  }
  return "";
}

function Word({ 
  word, 
  index, 
  totalWords, 
  scrollYProgress,
  highlightColor,
  defaultColor 
}: { 
  word: string; 
  index: number; 
  totalWords: number;
  scrollYProgress: any;
  highlightColor: string;
  defaultColor: string;
}) {
  // Calculate progress for each word (0 to 1)
  // Each word gets a portion of the scroll range
  const wordStart = index / totalWords;
  const wordEnd = (index + 1) / totalWords;
  
  // Map scroll progress to word highlight
  // Words highlight progressively as you scroll through the text
  const wordProgress = useTransform(
    scrollYProgress,
    [Math.max(0, wordStart - 0.1), wordStart, wordEnd, Math.min(1, wordEnd + 0.1)],
    [0, 0, 1, 1],
    { clamp: true }
  );

  // Interpolate color based on progress with smooth transition
  const color = useTransform(
    wordProgress,
    [0, 1],
    [defaultColor, highlightColor]
  );

  return (
    <motion.span
      style={{ color }}
      className="inline-block"
    >
      {word}
      {index < totalWords - 1 && "\u00A0"}
    </motion.span>
  );
}

export default function ReadingProgressText({
  children,
  className = "",
  style,
  highlightColor = "#C9FF00",
  defaultColor = "#374151",
}: ReadingProgressTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContent = useMemo(() => extractText(children), [children]);
  const words = useMemo(() => textContent.split(/\s+/).filter(word => word.length > 0), [textContent]);

  // Track scroll progress through this element
  // Adjust offset to trigger animation as text enters viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  return (
    <div ref={containerRef} className={className} style={style}>
      {words.map((word, index) => (
        <Word
          key={index}
          word={word}
          index={index}
          totalWords={words.length}
          scrollYProgress={scrollYProgress}
          highlightColor={highlightColor}
          defaultColor={defaultColor}
        />
      ))}
    </div>
  );
}

