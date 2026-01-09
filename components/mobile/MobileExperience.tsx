"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useClickSound } from "@/hooks/useAudio";
import Link from "next/link";
import AnimatedLinkText from "../AnimatedLinkText";
import { FaExternalLinkAlt } from "react-icons/fa";

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
          <div className="flex flex-col items-center justify-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                onClick={playClickSound}
                className="inline-block px-5 py-2.5 bg-[#C9FF00] text-gray-900 font-bold rounded-lg text-sm hover:bg-[#C9FF00]/90 transition-colors"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                <AnimatedLinkText>Get In Touch</AnimatedLinkText>
              </Link>
            </motion.div>

            {/* Upwork Button */}
            <motion.a
              href="https://www.upwork.com/freelancers/~01b9eaa35da5d2f1a7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-xs px-5 py-2.5 bg-[#14A800] text-white font-bold rounded-lg text-sm hover:bg-[#0F7F00] transition-colors flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.577-1.207-2.644-7.495 2.67 1.207 2.645 6.319-2.25c.135.222.337.445.6.663.983.865 2.307 1.359 3.893 1.359 2.966 0 5.448-2.219 5.448-5.086 0-2.867-2.482-5.086-5.448-5.086-1.586 0-2.91.494-3.893 1.359-.263.218-.465.441-.6.663l-6.319-2.25L1.729 4.9l7.495 2.67-.228.577c-.939-.76-1.972-1.227-3.074-1.227C3.683 6.92 1.2 9.14 1.2 12.006c0 2.867 2.483 5.086 5.448 5.086 1.102 0 2.135-.467 3.074-1.227l.228.577 1.207 2.644 7.495-2.67-1.207-2.645-.228-.577c.939.76 1.972 1.227 3.074 1.227 2.966 0 5.448-2.219 5.448-5.086 0-2.867-2.482-5.086-5.448-5.086z"/>
              </svg>
              <span>Hire on Upwork</span>
              <FaExternalLinkAlt size={14} />
            </motion.a>

            {/* Fiverr Button */}
            <motion.a
              href="https://www.fiverr.com/s/NNmQdPy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-xs px-5 py-2.5 bg-[#1DBF73] text-white font-bold rounded-lg text-sm hover:bg-[#19A866] transition-colors flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <path d="M22.4062 6.73633C22.3047 6.43066 22.0336 6.21094 21.7109 6.16406L16.6406 5.5L13.9375 0.757812C13.7812 0.470312 13.4703 0.296875 13.1328 0.296875C12.7953 0.296875 12.4844 0.470312 12.3281 0.757812L9.625 5.5L4.55469 6.16406C4.23203 6.21094 3.96094 6.43066 3.85938 6.73633C3.75781 7.042 3.83594 7.37891 4.07031 7.61328L7.77344 11.3164L6.9375 16.375C6.89062 16.6977 6.99219 17.0234 7.21875 17.25C7.44531 17.4766 7.77109 17.5781 8.09375 17.5312L13.1328 16.6953L18.1719 17.5312C18.4945 17.5781 18.8203 17.4766 19.0469 17.25C19.2734 17.0234 19.375 16.6977 19.3281 16.375L18.4922 11.3164L22.1953 7.61328C22.4297 7.37891 22.5078 7.042 22.4062 6.73633Z"/>
              </svg>
              <span>Hire on Fiverr</span>
              <FaExternalLinkAlt size={14} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

