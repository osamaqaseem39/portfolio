"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Enterprise .NET Development",
    description: "Building enterprise-grade applications with ASP.NET Core 8, following SOLID principles and Domain-Driven Design. Developing multi-tenant ERP systems, RESTful APIs with Entity Framework Core, JWT authentication, and SQL Server optimization.",
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
    title: "Full Stack Web Development",
    description: "Building scalable web applications using Next.js, React, Vue.js, Node.js, NestJS, and TypeScript. Creating modern, responsive interfaces with Tailwind CSS, Framer Motion, and Three.js for 3D experiences.",
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
    title: "ERP & SaaS Platform Development",
    description: "Developing comprehensive multi-tenant ERP systems and SaaS platforms with GraphQL, REST APIs, RBAC, tenant isolation, and modules for HRM, Finance, CRM, SCM, Sales, Procurement, and Manufacturing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Cross-Platform Mobile Development",
    description: "Building cross-platform mobile applications with Flutter & Dart, featuring Firebase integration, offline functionality, real-time synchronization, and native performance for both iOS and Android.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 18H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Web3 & Blockchain Development",
    description: "Building decentralized applications (DApps), token exchange platforms, and blockchain integrations using Web3.js, Ethers.js, Solana Web3.js, MetaMask, WalletConnect, and Jupiter DEX.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "06",
    title: "API & Database Architecture",
    description: "Designing robust APIs with ASP.NET Core, GraphQL, REST, and WebSockets. Optimizing SQL Server databases with stored procedures, triggers, indexing, and Entity Framework Core for efficient data operations.",
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
    number: "07",
    title: "E-commerce & Business Solutions",
    description: "Developing Point of Sale (POS) systems, e-commerce platforms with payment processing, loyalty management systems, transportation platforms, and business management solutions with real-time features.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6h18M16 10a4 4 0 11-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 150px", "end start"]
  });

  // Marquee movement: moves from right to left as scroll progresses
  // Scroll through all 7 services (50% of the duplicated set)
  const marqueeX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-180%"]
  );

  return (
    <motion.section 
      ref={sectionRef}
      id="services" 
      className="relative h-[1000px] flex flex-col justify-center overflow-hidden bg-[#F5F5F5]"
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
                  className="flex-shrink-0 w-[1728px] md:w-[864px] lg:w-[442px] px-6 md:px-8 lg:px-10"
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

