"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useClickSound } from "@/hooks/useAudio";
import Link from "next/link";
import AnimatedLinkText from "./AnimatedLinkText";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();

  return (
    <footer ref={ref} className="py-16 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-7xl">
        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-absans), sans-serif" }}>Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-absans), sans-serif" }}>Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  MERN Stack Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  AI Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Fintech Development
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-absans), sans-serif" }}>Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/how-to-build-saas-product-from-scratch" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Build SaaS Product
                </Link>
              </li>
              <li>
                <Link href="/blog/mern-stack-vs-mean-stack-complete-comparison" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  MERN vs MEAN Stack
                </Link>
              </li>
              <li>
                <Link href="/blog/how-generative-ai-used-in-software-development" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  AI in Development
                </Link>
              </li>
              <li>
                <Link href="/blog/frontend-development-best-practices-2025" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Frontend Best Practices
                </Link>
              </li>
              <li>
                <Link href="/blog/backend-architecture-scalable-apps" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Scalable Architecture
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-absans), sans-serif" }}>Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/osamaqaseem" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/osamaqaseem39" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://wa.me/923256413868" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:connect@osamaqaseem.online" className="text-gray-600 hover:text-[#C9FF00] transition-colors text-sm" onClick={playClickSound}>
                  Email
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Ping Me Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.button
                onClick={playClickSound}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-12 py-4 md:py-5 bg-[#C9FF00] text-gray-900 font-bold rounded-lg text-lg md:text-xl hover:bg-[#C9FF00]/90 transition-colors shadow-lg shadow-[#C9FF00]/20"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                <AnimatedLinkText>Press to Ping Me</AnimatedLinkText>
              </motion.button>
            </Link>
          </motion.div>

          {/* Center: Social Links */}
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
              <FaLinkedin size={28} />
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
              <FaWhatsapp size={28} />
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
              <FaGithub size={28} />
            </motion.a>
          </motion.div>

          {/* Right: Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-sm md:text-base"
            style={{ fontFamily: "var(--font-absans), sans-serif" }}
          >
            © {new Date().getFullYear()} Muhammad Osama Qaseem
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

