"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useAudio, useClickSound } from "@/hooks/useAudio";

export default function MobileHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toggle: toggleMusic, isPlaying: isMusicPlaying } = useAudio("/bgmusic.mp3", { volume: 0.15, loop: true });
  const playClickSound = useClickSound();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.0;
    const handleCanPlay = () => {
      video.play().catch(() => {});
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-16">
      {/* Video background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="w-[45%] h-[45%] max-w-[280px] max-h-[280px] object-cover opacity-30"
          style={{
            filter: 'grayscale(1)',
          }}
        >
          <source src="/herobg.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Main Content */}
      <div className="w-full relative z-10 px-4">
        <div className="text-center">
          {/* Small intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl text-black mb-4"
          >
            Hi! I'm Muhammad Osama Qaseem
          </motion.p>
          
          {/* Main titles */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-medium text-black leading-tight mb-8"
            style={{ fontFamily: "var(--font-absans), sans-serif" }}
          >
            Full Stack Developer
            <br />
            Web3 Developer.
          </motion.h1>

          {/* Social Icons - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <motion.a
              href="https://www.linkedin.com/in/osamaqaseem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={playClickSound}
            >
              <FaLinkedin size={24} />
            </motion.a>
            
            <motion.a
              href="https://wa.me/923256413868"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={playClickSound}
            >
              <FaWhatsapp size={24} />
            </motion.a>
            
            <motion.a
              href="https://github.com/osamaqaseem39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={playClickSound}
            >
              <FaGithub size={24} />
            </motion.a>
          </motion.div>

          {/* Music Control Button */}
          <motion.button
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center transition-colors text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              playClickSound();
              toggleMusic();
            }}
            title={isMusicPlaying ? "Pause Music" : "Play Music"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        </div>

        {/* Scroll Down Indicator */}
        <motion.p
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-black font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0.5, 1, 0.5], y: 0 }}
          transition={{ 
            opacity: { duration: 2, repeat: Infinity },
            y: { duration: 0.8, delay: 1 }
          }}
        >
          Scroll Down
        </motion.p>
      </div>
    </section>
  );
}

