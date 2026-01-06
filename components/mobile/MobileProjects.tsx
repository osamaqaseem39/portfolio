"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { useClickSound } from "@/hooks/useAudio";
import Image from "next/image";

const projects = [
  {
    name: "DEGN DApp",
    url: "https://degn.app",
    description: "Solana DEX Token Trading Platform with wallet connection, DeFi features, and DEX integrations",
    technologies: ["Next.js", "NestJS", "MongoDB", "Web3.js", "JWT", "Recharts"],
    image: "/degn.png",
  },
  {
    name: "BestVersion1",
    url: "https://bestversion1.com",
    description: "Football training and coaching platform featuring video analysis, training programs, and player profiles",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    image: "/bestversion1.png",
  },
  {
    name: "Synovo Labs",
    url: "https://slabs-eight.vercel.app",
    description: "Animated agency portfolio featuring scroll-triggered animations and technology showcases",
    technologies: ["Next.js 15", "GSAP", "Framer Motion"],
    image: "/synovolabs.png",
  },
  {
    name: "Voxity",
    url: "https://voxity.io",
    description: "Web3 Marketing Agency",
    technologies: ["Next.js", "Web3", "Blockchain"],
    image: "/voxity.png",
  },
  {
    name: "Softlogix",
    url: "https://softlogixconsultancy.com",
    description: "Professional Tax Consultancy & General Trading Solutions",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/soflogix.png",
  },
  {
    name: "IBS",
    url: "https://ibs-jade.vercel.app",
    description: "Vegetable and Fruit Exporter",
    technologies: ["Next.js", "React", "TypeScript"],
    image: "/ibs.png",
  },
];

export default function MobileProjects() {
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <motion.section 
      ref={viewRef}
      id="projects" 
      className="relative min-h-screen flex flex-col justify-center bg-gray-900 overflow-hidden py-16"
    >
      <div className="w-full px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid - Single Column */}
        <div className="space-y-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-lg overflow-hidden bg-gray-800"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                    {project.name}
                  </h3>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-[#C9FF00] transition-colors flex-shrink-0 ml-4"
                  >
                    <HiExternalLink size={20} />
                  </motion.a>
                </div>
                
                <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#C9FF00]/10 text-[#C9FF00] rounded text-xs border border-[#C9FF00]/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-[#C9FF00]/10 text-[#C9FF00] rounded text-xs border border-[#C9FF00]/20">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              onClick={() => {
                playClickSound();
                setShowAll(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#C9FF00] text-gray-900 font-bold rounded-lg hover:bg-[#B8E600] transition-colors"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Show More ({projects.length - 3} more)
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

