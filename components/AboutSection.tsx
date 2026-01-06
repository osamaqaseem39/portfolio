"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { useClickSound } from "@/hooks/useAudio";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  const router = useRouter();

  // Scroll-based border radius animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 1080px", "start start"]
  });

  // Border radius increases from 0 to 40% as user scrolls (top corners only)
  const topBorderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "40%"]
  );

  const handleScrollToExperience = () => {
    playClickSound();
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateToAbout = () => {
    playClickSound();
    router.push("/about");
  };

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
      id="about" 
      className="relative min-h-screen flex items-center justify-center bg-gray-900 mt-0"
      style={{
        borderTopLeftRadius: topBorderRadius,
        borderTopRightRadius: topBorderRadius,
        overflow: "hidden",
      }}
    >
      {/* Main Content */}
      <div className="w-full relative z-10 px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Main headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              I'm Muhammad Osama Qaseem – a Full Stack Developer crafting enterprise-grade, scalable digital solutions.
            </motion.h2>

            {/* Specialization text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto"
            >
              I specialize in developing <strong>enterprise ERP systems</strong> with <strong>ASP.NET Core 8</strong>, <strong>multi-tenant SaaS platforms</strong>, <strong>cross-platform mobile applications</strong> with <strong>Flutter</strong>, and <strong>Web3 solutions</strong>. I've built 15+ production applications and currently work at Voxity as a Full Stack Developer on multiple <strong>Web3 projects</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.button
                onClick={handleNavigateToAbout}
                className="px-8 py-3 bg-lime-400 text-black font-medium rounded-lg flex items-center gap-2 hover:bg-lime-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
              
              <motion.button
                onClick={handleNavigateToAbout}
                className="w-12 h-12 rounded-full bg-lime-400 text-black flex items-center justify-center hover:bg-lime-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiArrowUpRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Left - Scroll Indicator */}
        <motion.p
          className="absolute bottom-8 left-8 text-sm text-gray-400 font-medium hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: [0.5, 1, 0.5], y: 0 } : {}}
          transition={{ 
            opacity: { duration: 2, repeat: Infinity, delay: 1 },
            y: { duration: 0.8, delay: 1 }
          }}
        >
          ↓ Scroll to Explore
        </motion.p>

        {/* Bottom Right - My Short Story */}
        <motion.button
          onClick={handleNavigateToAbout}
          className="absolute bottom-8 right-8 text-sm text-gray-400 font-medium hidden md:block hover:text-white transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          My Short Story
        </motion.button>

        {/* Right Edge - Vertical Text */}
        <motion.button
          onClick={handleScrollToExperience}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium writing-vertical hidden lg:block hover:text-white transition-colors cursor-pointer"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience
        </motion.button>
      </div>
    </motion.section>
  );
}

