"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Image from "next/image";
import ReadingProgressText from "../ReadingProgressText";

export default function MobileAbout() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Scroll progress for image parallax
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(imageScrollProgress, [0, 1], ["0%", "10%"]);
  const imageOpacity = useTransform(imageScrollProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
  const imageScale = useTransform(imageScrollProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  // Section scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const combinedRef = (node: HTMLElement | null) => {
    if (node) {
      (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
      viewRef(node);
    }
  };

  return (
    <motion.section 
      ref={combinedRef}
      id="about" 
      className="relative bg-[#F5F5F5] py-16"
    >
      <motion.div 
        className="w-full px-4"
        style={{ y: sectionY }}
      >
        {/* About Me Section */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-black mb-6"
            style={{ fontFamily: "var(--font-absans), sans-serif" }}
          >
            About Me – Full Stack Software Developer
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <ReadingProgressText
                highlightColor="#C9FF00"
                defaultColor="#111827"
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                I am a passionate <strong>Full Stack Developer</strong> focused on building clean, efficient, and scalable software solutions. I specialize in frontend and backend technologies that power modern web and mobile applications. I have worked with startups, agencies, and international clients to deliver high-quality products. My development approach is business-oriented, performance-driven, and user-focused.
              </ReadingProgressText>
            </motion.div>

            {/* Developer Image */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.div 
                className="relative h-64 overflow-hidden max-w-sm mx-auto"
                style={{ y: imageY, opacity: imageOpacity, scale: imageScale }}
              >
                <div className="absolute inset-0 bg-black rounded-lg">
                  <Image
                    src="/myimage.png"
                    alt="Developer"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full grayscale"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4 max-w-sm mx-auto"
              >
                <p className="text-base font-bold text-black text-center" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                  Driving measurable growth and engagement through thoughtful design and engineering.
                </p>
                
                <div className="flex gap-6 justify-center">
                  <div>
                    <div className="text-2xl font-bold text-black mb-1 text-center" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      4+
                    </div>
                    <div className="text-xs text-gray-700 text-center">
                      Years of Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black mb-1 text-center" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      30+
                    </div>
                    <div className="text-xs text-gray-700 text-center">
                      Projects Completed
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-black leading-relaxed text-center">
                  Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

