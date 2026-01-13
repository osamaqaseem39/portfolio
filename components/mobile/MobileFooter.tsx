"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useClickSound } from "@/hooks/useAudio";
import Link from "next/link";
import AnimatedLinkText from "../AnimatedLinkText";

export default function MobileFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();

  // Scroll progress for footer animations
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const footerY = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);

  // Combined ref callback
  const combinedRef = (node: HTMLElement | null) => {
    if (node) {
      (footerRef as React.MutableRefObject<HTMLElement | null>).current = node;
      ref(node);
    }
  };

  return (
    <footer ref={combinedRef} className="py-12 px-4 bg-white border-t border-gray-200">
      <motion.div 
        className="container mx-auto max-w-7xl"
        style={{ y: footerY, opacity: footerOpacity }}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Ping Me Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact"
              onClick={playClickSound}
              className="inline-block px-8 py-4 bg-[#C9FF00] text-gray-900 font-bold rounded-lg text-base hover:bg-[#C9FF00]/90 transition-colors shadow-lg shadow-[#C9FF00]/20"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              <AnimatedLinkText>Press to Ping Me</AnimatedLinkText>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/osamaqaseem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#C9FF00] transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={playClickSound}
            >
              <FaLinkedin size={24} />
            </motion.a>
            
            <motion.a
              href="https://wa.me/923256413868"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#C9FF00] transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={playClickSound}
            >
              <FaWhatsapp size={24} />
            </motion.a>
            
            <motion.a
              href="https://github.com/osamaqaseem39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#C9FF00] transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={playClickSound}
            >
              <FaGithub size={24} />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-xs text-center"
            style={{ fontFamily: "var(--font-absans), sans-serif" }}
          >
            © {new Date().getFullYear()} Muhammad Osama Qaseem
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}

