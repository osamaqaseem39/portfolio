"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useClickSound } from "@/hooks/useAudio";

// Card symbols/icons - 6 pairs for 4x3 grid
const cardSymbols = [
  "🎯", "🎯",
  "🚀", "🚀",
  "💻", "💻",
  "⚡", "⚡",
  "🎨", "🎨",
  "🔥", "🔥",
];

interface Card {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
  tilt: number;
}

export default function MobileMemoryGame() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();

  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  // Fisher-Yates shuffle algorithm for true randomization
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize game
  const initializeGame = useCallback(() => {
    const shuffled = shuffleArray(cardSymbols).map((symbol, index) => {
      // Add slight random tilt to each card (-5 to +5 degrees)
      const tilt = (Math.random() - 0.5) * 10;
      return {
        id: index,
        symbol,
        isFlipped: false,
        isMatched: false,
        tilt,
      };
    });
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setTime(0);
    setIsGameStarted(false);
    setIsGameComplete(false);
    setIsFlipping(false);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGameStarted && !isGameComplete) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameStarted, isGameComplete]);

  // Handle card flip
  const handleCardClick = (cardId: number) => {
    if (isFlipping || isGameComplete) return;
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (cards[cardId].isMatched) return;

    playClickSound();

    if (!isGameStarted) {
      setIsGameStarted(true);
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    const newCards = cards.map((card) =>
      card.id === cardId ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    // Check for match when two cards are flipped
    if (newFlippedCards.length === 2) {
      setIsFlipping(true);
      setTimeout(() => {
        const [firstId, secondId] = newFlippedCards;
        const firstCard = cards[firstId];
        const secondCard = cards[secondId];

        if (firstCard.symbol === secondCard.symbol) {
          // Match found
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isMatched: true, isFlipped: true }
                : card
            )
          );
        } else {
          // No match - flip back
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }

        setFlippedCards([]);
        setMoves((prev) => prev + 1);
        setIsFlipping(false);
      }, 1000);
    }
  };

  // Check if game is complete
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      setIsGameComplete(true);
      setIsGameStarted(false);
    }
  }, [cards]);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2
              className="text-3xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-absans), sans-serif",
                color: "rgb(17, 24, 39)",
              }}
            >
              Memory Game
            </h2>
            <p
              className="text-base text-gray-600"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Flip cards to find matching pairs
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="bg-gray-100 rounded-lg px-4 py-3 text-center flex-1">
              <p
                className="text-xs text-gray-600 mb-1"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                Time
              </p>
              <p
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                {formatTime(time)}
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg px-4 py-3 text-center flex-1">
              <p
                className="text-xs text-gray-600 mb-1"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                Moves
              </p>
              <p
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                {moves}
              </p>
            </div>
            <motion.button
              onClick={() => {
                playClickSound();
                initializeGame();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C9FF00] text-gray-900 font-bold px-4 py-3 rounded-lg hover:bg-[#B8E600] transition-colors text-sm"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              New
            </motion.button>
          </motion.div>

          {/* Game Board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-4 gap-3 max-w-sm mx-auto"
          >
            <AnimatePresence>
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1, rotateY: 0, rotate: card.tilt }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square"
                  style={{ rotate: card.tilt }}
                >
                  <motion.button
                    onClick={() => handleCardClick(card.id)}
                    disabled={isFlipping || card.isMatched}
                    className="w-full h-full relative perspective-1000"
                    style={{ transformStyle: "preserve-3d", rotate: card.tilt }}
                    whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.05, rotate: card.tilt + 2 } : {}}
                    whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.95 } : {}}
                  >
                    <motion.div
                      className="absolute inset-0 backface-hidden rounded-lg border-2 transition-all"
                      style={{
                        transform: card.isFlipped || card.isMatched ? "rotateY(180deg)" : "rotateY(0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center border-2 border-gray-400">
                        <span className="text-3xl">?</span>
                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 backface-hidden rounded-lg border-2 transition-all"
                      style={{
                        transform: card.isFlipped || card.isMatched ? "rotateY(0deg)" : "rotateY(180deg)",
                        transformStyle: "preserve-3d",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`w-full h-full rounded-lg flex items-center justify-center border-2 ${
                          card.isMatched
                            ? "bg-gradient-to-br from-[#C9FF00] to-[#B8E600] border-[#C9FF00]"
                            : "bg-gradient-to-br from-white to-gray-50 border-gray-300"
                        }`}
                      >
                        <span className="text-3xl">{card.symbol}</span>
                      </div>
                    </motion.div>
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Completion Message */}
          <AnimatePresence>
            {isGameComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="mt-6 text-center"
              >
                <div className="bg-[#C9FF00] rounded-lg p-6">
                  <h3
                    className="text-xl font-bold mb-3 text-gray-900"
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                  >
                    🎉 Congratulations! 🎉
                  </h3>
                  <p
                    className="text-gray-800 mb-3 text-sm"
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                  >
                    Completed in {formatTime(time)} with {moves} moves!
                  </p>
                  <motion.button
                    onClick={() => {
                      playClickSound();
                      initializeGame();
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-900 text-white font-bold px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                  >
                    Play Again
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

