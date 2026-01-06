"use client";

import { useEffect, useRef, useState } from "react";

export function useAudio(src: string, options?: { volume?: number; loop?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(src);
    if (options?.volume !== undefined) {
      audioRef.current.volume = options.volume;
    }
    if (options?.loop) {
      audioRef.current.loop = true;
    }

    const audio = audioRef.current;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    // Attempt to play audio automatically when ready
    const handleCanPlay = () => {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          // Autoplay might be blocked by browser policy
          // This is expected and handled gracefully
          console.log("Autoplay prevented:", error);
        });
    };

    // Try to play when audio can play
    if (audio.readyState >= 2) {
      // Audio is already loaded
      handleCanPlay();
    } else {
      audio.addEventListener("canplay", handleCanPlay, { once: true });
    }

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.pause();
      audio.src = "";
    };
  }, [src, options?.volume, options?.loop]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return { play, pause, toggle, isPlaying };
}

// Hook for playing click sounds
export function useClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/click.mp3");
    audioRef.current.volume = 0.3;
  }, []);

  const play = () => {
    if (audioRef.current) {
      // Reset audio to start
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Ignore errors (e.g., if autoplay is blocked)
      });
    }
  };

  return play;
}

