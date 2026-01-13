"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Image from "next/image";

const services = [
  "FULL-STACK DEVELOPER",
  "UI & UX DESIGNER",
  "WEB3 DEVELOPER",
  "SAAS PLATFORMS",
  "FRONTEND DEVELOPMENT",
  "BACKEND DEVELOPMENT",
];

export default function MobileImage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Scroll progress for image effects
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const imageBlur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, 10]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  // Marquee scroll progress
  const { scrollYProgress: marqueeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const marqueeOpacity = useTransform(marqueeProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  // Combined ref callback
  const combinedRef = (node: HTMLElement | null) => {
    if (node) {
      (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
      viewRef(node);
    }
  };

  return (
    <motion.section 
      ref={combinedRef}
      id="services" 
      className="relative flex items-center justify-center overflow-hidden bg-gray-900 py-6"
    >
      <div className="w-full px-4">
        {/* Marquee Text */}
        <motion.div 
          className="relative w-full py-4 overflow-hidden mb-4"
          style={{ opacity: marqueeOpacity }}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...services, ...services, ...services].map((service, index) => (
              <span
                key={`${service}-${index}`}
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                {service}<span className="px-4">•</span> 
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Container */}
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square max-w-md mx-auto"
          style={{ 
            scale: imageScale,
            y: imageY,
            opacity: imageOpacity,
            filter: `blur(${imageBlur}px)`
          }}
        >
          <Image
            src="/myimage.png"
            alt="Muhammad Osama Qaseem"
            width={600}
            height={600}
            className="object-contain grayscale rounded-lg"
            quality={90}
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

