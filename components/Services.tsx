"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    description: "Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "UI/UX Design & Frontend",
    description: "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="9" r="1.5" fill="currentColor"/>
        <path d="M21 15L16 10L12 14L9 11L3 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "SaaS Platform Development",
    description: "Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management. Ensuring scalability and secure user management.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "API & System Architecture",
    description: "Designing maintainable APIs with Prisma, and MongoDB. Focusing on optimization, security best practices, and efficient data flow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6.5H14M6.5 10V14M17.5 10V14M10 17.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "AI Operations (AIO)",
    description: "Implementing AI infrastructure, model deployment, and MLOps pipelines. Managing AI workflows, monitoring, and optimization for production AI systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    number: "06",
    title: "AI Integration & Automation",
    description: "Integrating AI capabilities into existing systems with OpenAI, Anthropic, and custom models. Building intelligent automation workflows and AI-powered features.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "07",
    title: "AI Development & Consulting",
    description: "Developing custom AI solutions, fine-tuning models, and providing AI strategy consulting. Building intelligent applications with machine learning and deep learning technologies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M9.75 17L9 20l-1 1v-3.5L6 16l-1.5-1.5L6 13l-1-1 1-1 1.5 1.5L9 10.5V7l1-1 1 1v3.5L13 10l1.5-1.5L13 7l1-1 1 1-1.5 1.5L18 10.5V14l1 1-1 1-1.5-1.5L15 16v3.5l-1 1-1-1-.75-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Marquee movement: moves from right to left as scroll progresses
  // Scroll through all 7 services (50% of the duplicated set)
  const marqueeX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  );

  return (
    <motion.section 
      ref={sectionRef}
      id="services" 
      className="relative min-h-[200vh] flex flex-col justify-center overflow-hidden bg-[#F5F5F5]"
    >
      <div className="w-full px-6 md:px-12 lg:px-20 pt-0 pb-16 md:pb-24">
        {/* Wavy Line at Top */}
        <div className="relative mb-8 h-3 md:h-4 overflow-visible">
          <svg 
            className="absolute top-0 left-0 w-full"
            viewBox="0 0 1200 40" 
            preserveAspectRatio="none"
            style={{ height: "100%" }}
          >
            <path
              d="M0,20 Q200,5 400,20 T800,20 T1200,20 L1200,40 L0,40 Z"
              fill="#C9FF00"
              stroke="#C9FF00"
              strokeWidth="2"
            />
            {/* Small circle indicator */}
            <circle cx="200" cy="20" r="4" fill="#2D2D2D" opacity="0.3" />
          </svg>
        </div>


        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
            Services
          </h2>
        </div>

        {/* Services Container with Marquee Effect */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            style={{
              x: marqueeX,
            }}
          >
            {/* Render services twice for seamless loop */}
            {[...services, ...services].map((service, index) => {
              const isLastInGroup = (index + 1) % services.length === 0;
              const isFirstInGroup = index % services.length === 0;
              return (
                <div
                  key={`${service.number}-${index}`}
                  className="flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[23vw] px-6 md:px-8 lg:px-10"
                >
                  <div className="relative h-full pb-8">
                    {/* Number */}
                    <div className="text-7xl md:text-8xl font-bold text-gray-800 mb-6 opacity-20" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {service.number}
                    </div>

                    {/* Icon Circle */}
                    <div className="mb-8">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#C9FF00] flex items-center justify-center text-gray-800 border-2 border-gray-800">
                        {service.icon}
                      </div>
                    </div>


                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed pr-4">
                    {service.description}
                  </p>
                </div>
              </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

