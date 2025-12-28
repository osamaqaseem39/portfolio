"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { useClickSound } from "@/hooks/useAudio";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isOverlay?: boolean;
}

export default function SideMenu({ isOpen, onClose, isOverlay = false }: SideMenuProps) {
  const playClickSound = useClickSound();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    playClickSound();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.substring(1); // Remove the '#' from href
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  const menuContent = (
    <div className="h-full flex flex-col bg-gray-900 text-white p-8 md:p-12 relative">
      {/* Close Button - Only show in overlay mode */}
      {isOverlay && (
        <button
          onClick={() => {
            playClickSound();
            onClose();
          }}
          className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
        >
          <HiX size={28} />
        </button>
      )}

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white hover:text-gray-300 transition-colors flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={handleLinkClick}
          >
            {item.name}
            <span className="text-2xl md:text-3xl">+</span>
          </motion.a>
        ))}
      </div>

      {/* Personal Info Section */}
      <div className="mt-8 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="text-lg md:text-xl text-gray-300"
        >
          👋 Nice to see you!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-sm md:text-base text-gray-400"
        >
          I'm Muhammad Osama Qaseem, Software Engineer based in Pakistan.
        </motion.p>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-between items-end text-sm text-gray-400">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          Made with ❤️ by Mr. Osama
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          © 2025
        </motion.p>
      </div>
    </div>
  );

  if (isOverlay) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 h-full w-full md:w-2/3 lg:w-1/2 xl:w-2/5 z-50 shadow-2xl"
            >
              {menuContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 right-0 h-full w-full md:w-2/3 lg:w-1/2 xl:w-2/5 z-30 shadow-2xl"
    >
      {menuContent}
    </motion.div>
  );
}

