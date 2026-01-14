"use client";


import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useAudio, useClickSound } from "@/hooks/useAudio";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { toggle: toggleMusic, isPlaying: isMusicPlaying } = useAudio("/bgmusic.mp3", { volume: 0.15, loop: true });
  const playClickSound = useClickSound();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Background video moves slower (parallax effect)
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  // Content moves normally
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.5]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.0; // Normal speed
    
    // Ensure video plays and loops smoothly
    const handleCanPlay = () => {
      video.play().catch(() => {
        // Autoplay might be blocked, but loop will handle it
      });
    };

    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Cursor Follow Shadow */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: 0,
          top: 0,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div 
          className="w-96 h-96 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%)',
            boxShadow: '0 0 100px 50px rgba(0,0,0,0.1)',
          }}
        />
      </motion.div>

      {/* Video background with parallax */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          y: videoY,
          opacity: videoOpacity,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="w-2/3 h-2/3 object-contain"
          style={{
            filter: 'grayscale(1)',
          }}
        >
          <source src="/herobg.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Main Content with parallax */}
      <motion.div 
        className="w-full relative z-10"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div className="flex items-center justify-center min-h-screen relative">
          <div className="text-center relative">
            {/* Small intro text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-black mb-4"
            >
              Hi! I'm Muhammad Osama Qaseem
            </motion.p>
            
            {/* Main titles */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-black leading-tight"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Full Stack Developer<br />
              Building Scalable Web & Software Solutions
            </motion.h1>
          </div>

          {/* Left Sidebar - Social Icons */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6">
            {/* Vertical line with dot */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-32 bg-black"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            
            {/* Social icons */}
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
          </div>

          {/* Bottom Right Button - Music Control */}
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center transition-colors hidden md:flex text-black z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              playClickSound();
              toggleMusic();
            }}
            title={isMusicPlaying ? "Pause Music" : "Play Music"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
              {isMusicPlaying ? (
                <>
                  {/* Waves when playing */}
                  <path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
                  <path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
                </>
              ) : (
                <>
                  {/* Straight lines when paused */}
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </motion.button>

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
      </motion.div>
    </section>
  );
}
