"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techStacks = [
  {
    name: "MERN Stack",
    icon: "🚀",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Next.js Full Stack",
    icon: "⚡",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "AI & ML Stack",
    icon: "🤖",
    technologies: ["Python", "TensorFlow", "OpenAI API", "LangChain"],
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "DevOps & Cloud",
    icon: "☁️",
    technologies: ["Docker", "AWS", "Vercel", "CI/CD"],
    color: "from-orange-500 to-red-600",
  },
  {
    name: ".NET Stack",
    icon: "🔷",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Mobile Development",
    icon: "📱",
    technologies: ["React Native", "Expo", "Firebase", "Native APIs"],
    color: "from-teal-500 to-green-600",
  },
];

export default function MobileTechStacks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech-stacks" className="py-12 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3"
            >
              Tech Stacks
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-sm px-4"
            >
              Technology combinations for building modern applications
            </motion.p>
          </div>

          <div ref={ref} className="grid grid-cols-1 gap-4">
            {techStacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{stack.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {stack.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                          className={`px-2 py-1 bg-gradient-to-r ${stack.color} text-white rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
