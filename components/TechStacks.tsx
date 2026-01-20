"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const technologyCategories = [
  {
    title: "Frontend Technologies",
    technologies: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Three.js", "Redux", "Flutter", "Material UI", "Responsive Design"],
  },
  {
    title: "Backend Technologies",
    technologies: ["ASP.NET Core 8", "C#", ".NET", "SOLID Principles", "DDD", "Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "WebSockets", "JWT", "RBAC"],
  },
  {
    title: "Web3 & Blockchain",
    technologies: ["Web3.js", "Ethers.js", "Solana Web3.js", "MetaMask", "WalletConnect", "Jupiter DEX", "Turnkey", "Hyperliquid", "SPL Tokens"],
  },
  {
    title: "Databases",
    technologies: ["SQL Server", "Stored Procedures", "Triggers", "Entity Framework Core", "Database Optimization", "Data Migration", "MongoDB", "PostgreSQL", "Firebase", "Mongoose", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    technologies: ["Docker", "Docker Compose", "Git", "GitHub", "Vercel", "AWS", "AWS S3", "CI/CD"],
  },
  {
    title: "Tools & Libraries",
    technologies: ["Chart.js", "Recharts", "Axios", "JWT", "Passport.js", "SendGrid", "MoonPay API", "CoinGecko API", "Swagger"],
  },
];

export default function TechStacks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech-stacks" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-black mb-4"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Technology Arsenal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 max-w-2xl mx-auto"
            >
              A comprehensive toolkit for building modern, scalable applications
            </motion.p>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-black transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.1 + techIndex * 0.02
                      }}
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.3 }
                      }}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-black hover:text-white text-black rounded-lg text-xs font-medium transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
