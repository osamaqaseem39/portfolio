"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    category: "Frontend",
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
    skills: [
      "MongoDB", "SQL Server", "SQLite", "MySQL", "Entity Framework Core",
      "Mongoose", "Dapper", "Database Design", "Query Optimization",
      "Stored Procedures", "Database Migrations", "Data Modeling", "Indexing",
      "Transaction Management", "Backup and Recovery", "Data Validation"
    ],
  },
  {
    category: "Web3",
    skills: [
      "Ethers.js", "Web3.js", "MetaMask", "WalletConnect", "Solana Web3.js",
      "Solana SPL Token", "Jupiter DEX", "Smart Contracts", "NFT", "DeFi",
      "Blockchain Integration", "Token Economics", "DApp Development"
    ],
  },
  {
    category: "DevOps",
    skills: [
      "Docker", "Git", "GitHub", "CI/CD", "Cloud Deployment", "Containerization",
      "Build Automation", "Monitoring", "Logging", "Performance Monitoring",
      "Security Scanning", "Cloud Services", "Server Management"
    ],
  },
  {
    category: "Tools",
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

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.02 }}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-purple-500 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

