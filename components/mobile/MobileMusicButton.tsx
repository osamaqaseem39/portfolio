"use client";

import { motion } from "framer-motion";
import { useAudio, useClickSound } from "@/hooks/useAudio";

export default function MobileMusicButton() {
  const { toggle: toggleMusic, isPlaying: isMusicPlaying } = useAudio("/bgmusic.mp3", { volume: 0.15, loop: true });
  const playClickSound = useClickSound();

  return (
    <motion.button
      className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 flex items-center justify-center transition-colors text-black shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        playClickSound();
        toggleMusic();
      }}
      title={isMusicPlaying ? "Pause Music" : "Play Music"}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {isMusicPlaying ? (
          <>
            <path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
            <path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
          </>
        ) : (
          <>
            <path d="M3 12h18" />
            <path d="M3 18h18" />
          </>
        )}
      </svg>
    </motion.button>
  );
}

