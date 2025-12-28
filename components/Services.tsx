"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Image from "next/image";

const services = [
  "FULL-STACK DEVELOPER",
  "UI & UX DESIGNER",
  "WEB3 DEVELOPER",
  "SAAS PLATFORMS",
  "FRONTEND DEVELOPMENT",
  "BACKEND DEVELOPMENT",
  "BLOCKCHAIN INTEGRATION",
  "E-COMMERCE SOLUTIONS",
  "API DEVELOPMENT",
  "DATABASE DESIGN",
  "MOBILE APP DEVELOPMENT",
  "CLOUD ARCHITECTURE",
  "DEVOPS ENGINEERING",
  "MICROSERVICES",
  "REACT SPECIALIST",
  "NEXT.JS EXPERT",
  "NODE.JS DEVELOPER",
  "SOLIDITY DEVELOPER",
  "SMART CONTRACTS",
  "DAPP DEVELOPMENT",
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  // This hook tracks the scroll progress relative to the Services section.
  // It returns a value between 0 and 1 based on how much the section has entered the viewport.
  // 'offset' defines the start and end points for the animation:
  //   - "start 30vh": animation starts when the top of the section hits the bottom of the viewport
  //   - "start 130vh": animation ends when the top of the section reaches the top of the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 50vh", "start -70vh"]
  });

  // Scale up animation for content
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.7],
    [0.5, 1]
  );

  // Font size increase on scroll for marquee
  const marqueeFontSize = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 1.5]
  );

  // Inner content div border radius: starts with radius, reduces to 0 when full width
  const innerDivBorderRadius = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["24px", "0px"]
  );

  // Image width: goes from 120% to 70%, then 70% to 90%
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["100%", "60%", "90%"]
  );

  // White div width/height: starts at 500px, expands to 100%
  const whiteDivWidth = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["500px", "100%"]
  );

  const whiteDivHeight = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["500px", "2000px"]
  );

  // Border radius: starts large, reduces on scroll
  const whiteDivBorderRadius = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["50%", "0px"]
  );

  // Combined ref callback
  const combinedRef = (node: HTMLElement | null) => {
    if (node) {
      (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
      viewRef(node);
    }
  };

  return (
    <motion.section 
      ref={combinedRef}
      id="services" 
      style={{
        height: "180vh",
       
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 "
    >
      {/* White Div - scales up from centered square to full width/height, staying centered */}
      <motion.div
        className="absolute bg-gray-900 z-10 overflow-visible"
        style={{
          width: whiteDivWidth,
          height: whiteDivHeight,
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
          borderRadius: whiteDivBorderRadius,
        }}
      >
        {/* Full-size content - scales up on scroll */}
        <motion.div 
          className="absolute flex flex-col bg-white overflow-visible"
          style={{
            width: "100vw",
            border: "1px solid red",
            left: "calc(-50vw + 50%)",
            top: "calc(-50vh + 50%)",
            scale: contentScale,
            borderRadius: innerDivBorderRadius,
          }}
        >
          {/* Marquee Text on Top - scales up on scroll */}
          <div className="relative w-full py-16 md:py-20 lg:py-24 pb-8 md:pb-12 lg:pb-16 overflow-hidden mb-8 md:mb-12 lg:mb-16">
            <motion.div
              className="flex whitespace-nowrap"
              style={{
                scale: marqueeFontSize,
              }}
              animate={{
                x: [0, -5000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...services, ...services, ...services].map((service, index) => (
                <span
                  key={`${service}-${index}`}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-black"
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  {service}<span className="px-8">•</span> 
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image Container - Full Width, directly under marquee - scales up on scroll */}
          <motion.div 
            className="relative h-auto p-8 md:p-12 lg:p-16 mx-auto overflow-hidden"
            style={{
              width: imageWidth,
              aspectRatio: "1920/1080",
            }}
          >
            <Image
              src="/myimage.png"
              alt="Muhammad Osama Qaseem"
              width={1920}
              height={1080}
              className="object-contain grayscale rounded-lg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              quality={95}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

