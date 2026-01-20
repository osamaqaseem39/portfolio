"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";

const specializations = [
  {
    title: "Web3 & Blockchain",
    items: [
      "Multi-chain development (Solana, Ethereum, BSC)",
      "Smart contract integration (Web3.js, Ethers.js)",
      "DEX integration (Jupiter DEX, Hyperliquid)",
      "DApp development with MetaMask & WalletConnect",
      "Token staking, NFT minting & governance",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend & Architecture",
    items: [
      "ASP.NET Core 8 enterprise development",
      "Entity Framework Core & database operations",
      "SOLID principles & DDD patterns",
      "RESTful APIs, JWT, OAuth2, API versioning",
      "Multi-tenant SaaS architecture",
      "SQL Server optimization, stored procedures",
      "GraphQL, WebSockets, Swagger documentation",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend & Mobile",
    items: [
      "React.js with Redux, code splitting",
      "Next.js, Vue.js with Vuex, Vue Router",
      "TypeScript, JavaScript (ES6+)",
      "Flutter & Dart cross-platform mobile",
      "Firebase integration, Provider state management",
      "Tailwind CSS, Framer Motion, Three.js",
      "3D web experiences & interactive gaming",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Specializations() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  // Scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="specializations"
      className="relative bg-[#F5F5F5] px-6 md:px-12 lg:px-20 py-16 md:py-24"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12"
          style={{ fontFamily: "var(--font-absans), sans-serif" }}
        >
          Core Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -15 : 15 }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 h-full">
                <h3 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                  {spec.title}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <span className="text-black mr-3 mt-1">▸</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
