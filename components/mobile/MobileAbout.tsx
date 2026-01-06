"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Image from "next/image";
import ReadingProgressText from "../ReadingProgressText";

export default function MobileAbout() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      <div className="w-full px-4">
        {/* About Me Section */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-black mb-6"
            style={{ fontFamily: "var(--font-absans), sans-serif" }}
          >
            About Me
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
                I'm Muhammad Osama Qaseem – a Full Stack Developer crafting enterprise-grade, scalable digital solutions. I specialize in developing enterprise ERP systems with ASP.NET Core 8, multi-tenant SaaS platforms, cross-platform mobile applications with Flutter, and Web3 solutions. I've built 15+ production applications and currently work at Voxity as a Full Stack Developer on multiple Web3 projects.
              </ReadingProgressText>
            </motion.div>

            {/* Developer Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="relative h-64 overflow-hidden max-w-sm mx-auto">
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
              </div>
              
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
      </div>
    </motion.section>
  );
}

