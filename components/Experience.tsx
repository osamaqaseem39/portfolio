"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "Voxity",
    position: "Full Stack Developer",
    location: "Dubai, United Arab Emirates (Remote)",
    period: "08/2024 - Present",
    description: [
      "Contributed to multiple Web3 projects including admin dashboards, token exchange platforms, and websites for blockchain-based games",
      "Developed EverXNode, a Web3 platform with NFT licensing for AI compute nodes and token staking systems",
      "Built ArenaSol, a play-to-earn game studio on Solana with $ARENA token integration and 3D character visualizations",
      "Created the complete Degn ecosystem including a NestJS backend with Jupiter DEX integration, a one-tap trading website, and a full-featured DApp",
      "Integrated multiple blockchain networks (Solana, Ethereum, BSC) using Web3.js, Ethers.js, MetaMask, and WalletConnect",
      "Architected scalable Node.js and NestJS microservices backends with MongoDB, Firebase, REST APIs, and WebSockets",
    ],
    technologies: [
      "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase",
      "Ethers.js", "Web3.js", "TypeScript", "NestJS", "Three.js", "Framer Motion", "Redux",
      "Solana Web3.js", "Jupiter DEX", "Docker"
    ],
  },
  {
    company: "Quest Enterprises Pakistan",
    position: "Full Stack Developer",
    location: "Lahore, Pakistan",
    period: "01/2023 - 10/2023",
    description: [
      "Designed and implemented complete ERP modules including CRM, Project Management, Procurement, and Reporting Dashboards",
      "Developed secure and scalable RESTful APIs using ASP.NET Core",
      "Integrated SQL Server and MongoDB databases for optimal performance",
      "Introduced modular architecture and reusable UI components",
      "Implemented role-based access control (RBAC), custom permissions, and multi-tenant support",
      "Increased ERP system performance by optimizing database queries and reducing API payloads",
    ],
    technologies: [
      "React.js", "Vue.js", "TypeScript", "Tailwind CSS", "ASP.NET Core", "C#", "SQL Server",
      "MongoDB", "REST API", "Git", "Agile (Scrum)"
    ],
  },
  {
    company: "Quest Enterprises Pakistan",
    position: "Junior Software Engineer",
    location: "Lahore, Pakistan",
    period: "09/2021 - 12/2022",
    description: [
      "Collaborated with senior developers and UI/UX designers to create responsive, component-based frontends for ERP modules",
      "Consumed RESTful APIs and implemented efficient data binding, state management (Vuex/Redux), and form validation techniques",
      "Focused on pixel-perfect UI design using Tailwind CSS, ensuring mobile and cross-browser compatibility",
      "Maintained clean, well-documented code following Agile/Scrum practices and version control using Git",
    ],
    technologies: [
      "Vue.js", "React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", "Axios", "Git", "REST API"
    ],
  },
  {
    company: "Tech Qode Private Limited",
    position: "Associate Software Developer",
    location: "Lahore, Pakistan",
    period: "06/2020 - 08/2021",
    description: [
      "Contributed to the full-stack development of a Retail Management System designed to streamline sales, inventory, customer, and supplier management",
      "Developed responsive and user-friendly frontend components using Vue.js",
      "Designed and implemented backend APIs with ASP.NET Core Web API",
      "Utilized Command Query Repository System to clearly separate data modification from data retrieval",
      "Modeled and optimized SQL Server databases for efficient data access and integrity",
      "Implemented role-based access control (RBAC) to ensure secure user access and permissions",
    ],
    technologies: [
      "Vue.js", "ASP.NET Core", "Command Query Repository System", "SQL Server", "REST APIs", "C#", "Git", "Agile (Scrum)"
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div ref={ref} className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                  <p className="text-xl text-purple-400 mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
                <p className="text-gray-300 mt-2 md:mt-0">{exp.period}</p>
              </div>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm md:text-base">{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

