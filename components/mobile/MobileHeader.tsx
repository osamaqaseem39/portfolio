"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useClickSound } from "@/hooks/useAudio";
import { useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "#projects" },
  { name: "Contact", href: "/contact" },
];

export default function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const playClickSound = useClickSound();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    playClickSound();
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header - Always visible when scrolled */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.a
              href="/"
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={playClickSound}
            >
              Osama Qaseem
            </motion.a>

            <motion.button
              onClick={() => {
                playClickSound();
                setIsMenuOpen(true);
              }}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <HiMenu size={24} />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gray-900 z-50 shadow-2xl"
            >
              <div className="h-full flex flex-col p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => {
                      playClickSound();
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <HiX size={24} />
                  </button>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleLinkClick(item.href)}
                      className="text-3xl font-bold text-white text-left hover:text-[#C9FF00] transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-6 pt-8 border-t border-gray-700">
                  <motion.a
                    href="https://www.linkedin.com/in/osamaqaseem39"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#C9FF00] transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={playClickSound}
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/923256413868"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#C9FF00] transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={playClickSound}
                  >
                    <FaWhatsapp size={24} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/osamaqaseem39"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#C9FF00] transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={playClickSound}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

