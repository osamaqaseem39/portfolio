"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useClickSound } from "@/hooks/useAudio";
import SideMenu from "./SideMenu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "#projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const playClickSound = useClickSound();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isScrolled && (
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-transparent"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <motion.a
                  href="/"
                  className="text-2xl font-bold text-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={playClickSound}
                >
                  Osama Qaseem
                </motion.a>

                {/* Default Header Menu - Shows when not scrolled */}
                <div className="hidden md:flex items-center space-x-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-black transition-colors relative"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => {
                        playClickSound();
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          const targetId = item.href.substring(1);
                          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {item.name}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-black"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                  <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
                    <motion.a
                      href="https://www.linkedin.com/in/osamaqaseem39"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (navItems.length + 1) * 0.1 }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={playClickSound}
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/923256413868"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (navItems.length + 2) * 0.1 }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={playClickSound}
                    >
                      <FaWhatsapp size={20} />
                    </motion.a>
                    <motion.a
                      href="https://github.com/osamaqaseem39"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (navItems.length + 3) * 0.1 }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={playClickSound}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Hamburger Button - Only shows when scrolled */}
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors shadow-lg"
          onClick={() => {
            playClickSound();
            setIsMenuOpen(true);
          }}
        >
          <HiMenu size={24} />
        </motion.button>
      )}

      {/* Side Menu - Overlay when opened from hamburger */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} isOverlay={true} />
    </>
  );
}

