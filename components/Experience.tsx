"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import { useClickSound } from "@/hooks/useAudio";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Voxity",
    period: "08/2024 - Present",
    location: "Dubai, United Arab Emirates (Remote)",
    description: "Contributing to Web3 projects including admin dashboards, token exchange platforms, and blockchain-based game websites. Building scalable, secure interfaces with smart contract integration.",
  },
  {
    title: "Full Stack Developer",
    company: "Quest Enterprises Pakistan",
    period: "09/2021 - 12/2022",
    location: "Lahore, Pakistan",
    description: "Built and enhanced frontend of ERP modules using Vue.js and React.js. Designed scalable, reusable UI components for complex enterprise workflows.",
  },
  {
    title: "Software Developer",
    company: "Tech Qode Private Limited",
    period: "06/2020 - 08/2021",
    location: "Lahore, Pakistan",
    description: "Contributed to full-stack development of Retail Management System. Implemented modern architectural patterns for maintainability and scalability.",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [viewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  const [isLightMode, setIsLightMode] = useState(false);

  // Scroll progress for timeline lighting effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Transform scroll progress to timeline height (0% to 100%)
  const timelineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Scroll progress for background switch - triggers at 200px into the section
  const { scrollYProgress: bgScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "start 200px"],
  });

  // Watch scroll progress and switch background when we reach 200px into the section
  useMotionValueEvent(bgScrollProgress, "change", (latest) => {
    // When progress reaches 1, we've scrolled 200px into the section
    const shouldBeLight = latest >= 1;
    if (shouldBeLight !== isLightMode) {
      setIsLightMode(shouldBeLight);
    }
  });

  // Background and text colors based on scroll state
  const backgroundColor = isLightMode ? "rgb(17, 24, 39)" : "rgb(255, 255, 255)";
  const textColor = isLightMode ? "rgb(255, 255, 255)" : "rgb(17, 24, 39)";
  const statsTextColor = "rgb(201, 255, 0)";
  const borderColor = isLightMode ? "rgb(209, 213, 219)" : "rgb(17, 24, 39)";
  const lineColor = isLightMode ? "rgb(209, 213, 219)" : "rgb(17, 24, 39)";

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
      id="experience" 
      className="relative flex items-center justify-center overflow-hidden py-16 md:py-24 min-h-screen"
      animate={{
        backgroundColor: backgroundColor,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Stats Section */}
          <div className="mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0, color: textColor } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 w-full"
              style={{ 
                fontFamily: "var(--font-absans), sans-serif",
                color: textColor,
              }}
            >
              Driving measurable growth and engagement through thoughtful design and engineering.
            </motion.p>

            {/* Horizontal Separator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1, backgroundColor: borderColor } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full h-px mb-8"
              style={{ backgroundColor: borderColor }}
            />

            {/* Stats and Description Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Column 1: Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col"
              >
                {/* Stats Section */}
                <div className="flex flex-row gap-8 md:gap-12 items-start">
                  {/* Years of Experience */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.div 
                      className="text-6xl font-bold mb-3" 
                      style={{ 
                        fontFamily: "var(--font-absans), sans-serif",
                        color: statsTextColor,
                      }}
                    >
                      4+
                    </motion.div>
                    <motion.div 
                      className="text-lg uppercase tracking-wider"
                      animate={{ color: textColor }}
                      transition={{ duration: 0.6 }}
                      style={{ color: textColor }}
                    >
                      Years of Experience
                    </motion.div>
                  </motion.div>

                  {/* Projects Completed */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.div 
                      className="text-6xl font-bold mb-3" 
                      style={{ 
                        fontFamily: "var(--font-absans), sans-serif",
                        color: statsTextColor,
                      }}
                    >
                      30+
                    </motion.div>
                    <motion.div 
                      className="text-lg uppercase tracking-wider"
                      animate={{ color: textColor }}
                      transition={{ duration: 0.6 }}
                      style={{ color: textColor }}
                    >
                      Projects Completed
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Column 2: Description Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center"
              >
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0, color: textColor } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xl leading-relaxed"
                  style={{ color: textColor }}
                >
                  Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-12 md:mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold" 
              animate={{ color: textColor }}
              transition={{ duration: 0.6 }}
              style={{ 
                fontFamily: "var(--font-absans), sans-serif",
                color: textColor,
              }}
            >
              Experience
            </motion.h2>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative w-full" ref={timelineRef}>
            {/* Center Vertical Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full overflow-hidden"
              animate={{
                backgroundColor: lineColor,
              }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: lineColor,
              }}
            >
              {/* Animated Progress Line */}
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#C9FF00] origin-top shadow-lg shadow-[#C9FF00]/50"
                style={{
                  height: timelineProgress,
                }}
              />
            </motion.div>

            {/* Timeline Items */}
            <div className="relative space-y-24 md:space-y-32">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const [itemRef, itemInView] = useInView({
                  triggerOnce: false,
                  threshold: 0.3,
                });
                
                return (
                  <motion.div
                    key={index}
                    ref={itemRef}
                    initial={{ opacity: 0, y: 50, x: isLeft ? -50 : 50 }}
                    animate={itemInView ? { opacity: 1, y: 0, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className={`relative flex items-center ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isLeft ? "pr-0 md:pr-8" : "pl-0 md:pl-8"
                      }`}
                    >
                      <div className="mb-3">
                        <motion.h3 
                          className="text-xl md:text-2xl font-bold mb-1" 
                          animate={{ color: textColor }}
                          transition={{ duration: 0.6 }}
                          style={{ 
                            fontFamily: "var(--font-absans), sans-serif",
                            color: textColor,
                          }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.p 
                          className="text-lg font-semibold"
                          style={{ color: statsTextColor }}
                        >
                          {exp.company}
                        </motion.p>
                      </div>
                      
                      <motion.div 
                        className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 text-sm"
                        animate={{ color: textColor }}
                        transition={{ duration: 0.6 }}
                        style={{ color: textColor }}
                      >
                        <span>{exp.period}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{exp.location}</span>
                      </motion.div>
                      
                      <motion.p 
                        className="leading-relaxed text-sm md:text-base"
                        animate={{ color: textColor }}
                        transition={{ duration: 0.6 }}
                        style={{ color: textColor }}
                      >
                        {exp.description}
                      </motion.p>
                    </div>

                    {/* Center Dot */}
                    <motion.div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 z-10 flex items-center justify-center"
                      animate={{
                        backgroundColor: backgroundColor,
                        borderColor: borderColor,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{
                        backgroundColor: backgroundColor,
                        borderColor: borderColor,
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                        style={{ backgroundColor: statsTextColor }}
                        initial={{ scale: 0 }}
                        animate={itemInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                      />
                    </motion.div>

                    {/* Spacer for opposite side */}
                    <div className="w-full md:w-5/12 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: experiences.length * 0.15 + 0.5 }}
            className="mt-16 md:mt-24 text-center"
          >
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
              animate={{ color: textColor }}
              transition={{ duration: 0.6 }}
              style={{ 
                fontFamily: "var(--font-absans), sans-serif",
                color: textColor,
              }}
            >
              Ready to bring your project to life?
            </motion.h3>
            <motion.p
              className="text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto opacity-70"
              animate={{ color: textColor }}
              transition={{ duration: 0.6 }}
              style={{ color: textColor }}
            >
              Let's work together to create something amazing. Get in touch and let's discuss your next project.
            </motion.p>
            <motion.button
              onClick={() => {
                playClickSound();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-12 py-4 md:py-5 bg-[#C9FF00] text-gray-900 font-bold rounded-lg text-lg md:text-xl hover:bg-[#C9FF00]/90 transition-colors shadow-lg shadow-[#C9FF00]/20"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

