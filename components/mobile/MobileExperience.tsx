"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useClickSound } from "@/hooks/useAudio";
import Link from "next/link";

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

export default function MobileExperience() {
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();

  return (
    <motion.section 
      ref={viewRef}
      id="experience" 
      className="relative flex items-center justify-center overflow-hidden py-16 min-h-screen bg-white"
    >
      <div className="w-full px-4">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <motion.p
            className="text-lg font-bold leading-tight mb-6 text-black"
            style={{ 
              fontFamily: "var(--font-absans), sans-serif",
            }}
          >
            Driving measurable growth and engagement through thoughtful design and engineering.
          </motion.p>

          <div className="w-full h-px bg-gray-300 mb-6" />

          <div className="flex gap-6 mb-6">
            <div>
              <div className="text-3xl font-bold mb-1.5 text-[#C9FF00]" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                4+
              </div>
              <div className="text-xs uppercase tracking-wider text-black">
                Years of Experience
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold mb-1.5 text-[#C9FF00]" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                30+
              </div>
              <div className="text-xs uppercase tracking-wider text-black">
                Projects Completed
              </div>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-black">
            Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.
          </p>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-black" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
            Experience
          </h2>
        </motion.div>

        {/* Timeline - Vertical */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[14px] top-0 bottom-0 w-0.5 bg-gray-300" />

          {/* Timeline Items */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-[6px] top-1.5 w-4 h-4 rounded-full bg-[#C9FF00] border-2 border-white shadow-md z-10" />

                <div className="mb-2">
                  <h3 className="text-base font-bold mb-1 text-black" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#C9FF00]">
                    {exp.company}
                  </p>
                </div>
                
                <div className="flex flex-col gap-0.5 mb-2 text-xs text-gray-600">
                  <span>{exp.period}</span>
                  <span className="text-xs">{exp.location}</span>
                </div>
                
                <p className="leading-relaxed text-xs text-black">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold mb-3 text-black" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
            Ready to bring your project to life?
          </h3>
          <p className="text-xs mb-5 text-gray-600">
            Let's work together to create something amazing. Get in touch and let's discuss your next project.
          </p>
          <Link href="/contact">
            <motion.button
              onClick={playClickSound}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-[#C9FF00] text-gray-900 font-bold rounded-lg text-sm hover:bg-[#C9FF00]/90 transition-colors"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

