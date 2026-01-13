"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { useClickSound } from "@/hooks/useAudio";
import { HiArrowUpRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export default function MobileAboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  const router = useRouter();

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Combined ref callback
  const combinedRef = (node: HTMLElement | null) => {
    if (node) {
      (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
      viewRef(node);
    }
  };

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

  return (
    <motion.section 
      ref={combinedRef}
      id="about" 
      className="relative min-h-screen flex items-center justify-center bg-gray-900 py-20"
    >
      <motion.div 
        className="w-full relative z-10 px-4 py-12"
        style={{ y, opacity, scale }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              I am a professional <strong>Full Stack Software Developer</strong> with hands-on experience in building modern, secure, and scalable web and mobile applications.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base text-gray-300 leading-relaxed mb-8"
            >
              I help startups, businesses, and entrepreneurs turn ideas into fully functional digital products. With expertise in <strong>MERN stack, React.js, Node.js, Flutter, and blockchain development</strong>, I deliver high-performance solutions tailored to business needs. Whether you need a custom web application, SaaS platform, or mobile app, I provide end-to-end development services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.button
                onClick={handleNavigateToAbout}
                className="px-6 py-3 bg-lime-400 text-black font-medium rounded-lg flex items-center gap-2 hover:bg-lime-300 transition-colors"
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
      </motion.div>
    </motion.section>
  );
}

