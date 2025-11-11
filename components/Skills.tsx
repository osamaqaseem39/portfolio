"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    icon: "⚛️",
    skills: [
      "React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS",
      "Tailwind CSS", "Material UI", "GSAP", "Lenis", "Swiper", "Bootstrap",
      "Styled Components", "Framer Motion", "Redux", "React Query", "Three.js",
      "Responsive Design", "Progressive Web Apps", "Component Architecture",
      "State Management", "UI/UX Design", "Performance Optimization"
    ],
  },
  {
    category: "Backend",
    icon: "🔧",
    skills: [
      "Node.js", "Express.js", "NestJS", "ASP.NET Core", "C#", "GraphQL",
      "REST APIs", "JWT Authentication", "Session Management", "File Upload",
      "Multer", "Cron Jobs", "Background Tasks", "API Documentation", "Swagger",
      "Error Handling", "Middleware", "Dependency Injection", "Clean Architecture",
      "Microservices", "Service-oriented Architecture", "Rate Limiting", "Caching"
    ],
  },
  {
    category: "Database",
    icon: "💾",
    skills: [
      "MongoDB", "SQL Server", "SQLite", "MySQL", "Entity Framework Core",
      "Mongoose", "Dapper", "Database Design", "Query Optimization",
      "Stored Procedures", "Database Migrations", "Data Modeling", "Indexing",
      "Transaction Management", "Backup and Recovery", "Data Validation"
    ],
  },
  {
    category: "Web3",
    icon: "⛓️",
    skills: [
      "Ethers.js", "Web3.js", "MetaMask", "WalletConnect", "Solana Web3.js",
      "Solana SPL Token", "Jupiter DEX", "Smart Contracts", "NFT", "DeFi",
      "Blockchain Integration", "Token Economics", "DApp Development"
    ],
  },
  {
    category: "DevOps",
    icon: "🚀",
    skills: [
      "Docker", "Git", "GitHub", "CI/CD", "Cloud Deployment", "Containerization",
      "Build Automation", "Monitoring", "Logging", "Performance Monitoring",
      "Security Scanning", "Cloud Services", "Server Management"
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: [
      "VS Code", "Visual Studio", "Android Studio", "Postman", "Swagger",
      "Git", "GitHub", "GitLab", "phpMyAdmin", "SQL Server Management Studio",
      "MongoDB Compass", "Figma", "Canva", "Trello", "Slack", "Discord",
      "Jest", "Browser Developer Tools", "Docker Desktop", "AWS Console",
      "Chrome DevTools", "Firebase Console", "Vercel", "Netlify"
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden mb-12">
            <motion.h2
              initial={{ x: "-100%" }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Skills
            </motion.h2>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const isFlipped = flippedCards.has(index);

              return (
                <div
                  key={index}
                  className="h-96 perspective-1000"
                  onClick={() => toggleFlip(index)}
                >
                  <motion.div
                    className="relative w-full h-full preserve-3d cursor-pointer"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="absolute w-full h-full backface-hidden rounded-lg bg-gray-800/50 border border-gray-700 p-6 flex flex-col items-center justify-center"
                    >
                      <div className="text-6xl mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold text-purple-400 mb-4">{category.category}</h3>
                      <p className="text-gray-400 text-center text-sm">
                        Click to see all skills
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {category.skills.slice(0, 4).map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {category.skills.length > 4 && (
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                            +{category.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      className="absolute w-full h-full backface-hidden rounded-lg bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500 p-6 rotate-y-180 overflow-y-auto"
                    >
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span>{category.icon}</span>
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: i * 0.02 }}
                            className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm hover:bg-purple-500/50 transition-colors cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
