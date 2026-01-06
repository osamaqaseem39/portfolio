"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section 
      ref={viewRef}
      id="services" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 py-12"
    >
      <div className="w-full px-4">
        {/* Marquee Text */}
        <div className="relative w-full py-8 overflow-hidden mb-6">
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
        </div>

        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square max-w-md mx-auto"
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

