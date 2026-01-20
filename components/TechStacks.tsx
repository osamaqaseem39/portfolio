"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techStacks = [
  {
    name: "MERN Stack",
    icon: "🚀",
    description: "Full-stack JavaScript development",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-500/10 to-emerald-600/10",
  },
  {
    name: "Next.js Full Stack",
    icon: "⚡",
    description: "Modern React framework with SSR",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-500/10 to-cyan-600/10",
  },
  {
    name: "AI & ML Stack",
    icon: "🤖",
    description: "Artificial Intelligence integration",
    technologies: ["Python", "TensorFlow", "OpenAI API", "LangChain"],
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-500/10 to-pink-600/10",
  },
  {
    name: "DevOps & Cloud",
    icon: "☁️",
    description: "Scalable deployment solutions",
    technologies: ["Docker", "AWS", "Vercel", "CI/CD"],
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-500/10 to-red-600/10",
  },
  {
    name: ".NET Stack",
    icon: "🔷",
    description: "Enterprise-grade C# development",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework"],
    color: "from-indigo-500 to-purple-600",
    bgColor: "from-indigo-500/10 to-purple-600/10",
  },
  {
    name: "Mobile Development",
    icon: "📱",
    description: "Cross-platform mobile apps",
    technologies: ["React Native", "Expo", "Firebase", "Native APIs"],
    color: "from-teal-500 to-green-600",
    bgColor: "from-teal-500/10 to-green-600/10",
  },
];

export default function TechStacks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech-stacks" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
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
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4"
            >
              Tech Stacks
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Specialized technology combinations I use to build robust, scalable, and modern applications
            </motion.p>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${stack.bgColor} border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{stack.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {stack.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{stack.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {stack.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (techIndex * 0.05) }}
                        className={`px-3 py-1 bg-gradient-to-r ${stack.color} text-white rounded-full text-sm font-medium shadow-sm`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </div>

                <div className={`h-1 bg-gradient-to-r ${stack.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Each stack is carefully chosen to optimize performance, maintainability, and scalability for different project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Production Ready
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Scalable Architecture
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Modern Best Practices
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
