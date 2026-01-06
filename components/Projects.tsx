"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
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
    name: "HB Sub Noor",
    url: "https://hbsubnoor.com",
    description: "A global leader in comprehensive packaging and strap solutions",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/strapack.png",
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
  {
    name: "ShesTrends",
    url: "https://shestrends.com",
    description: "Ecommerce Store",
    technologies: ["Next.js", "E-commerce", "Stripe"],
    image: "/shestrends.png",
  },
  {
    name: "Altitude Arena",
    url: "https://altitudearena.ae",
    description: "Bowling and Trampoline Arena",
    technologies: ["Next.js", "React", "TypeScript"],
    image: "/altitude.png",
  },
  {
    name: "Exalted",
    url: "https://exalted-lovat.vercel.app",
    description: "Coding & Packing Solutions",
    technologies: ["Next.js", "React", "TypeScript"],
    image: "/exalted.png",
  },
  {
    name: "Wingz Impex",
    url: "https://wingsimpex.com",
    description: "E-commerce and admin management system for a food trading company",
    technologies: ["Next.js", "React", "Stripe API", "MongoDB", "Tailwind CSS"],
    image: "/wingzimpex.png",
  },
  {
    name: "Payday Website",
    url: "https://paydayexpress.ca",
    description: "Financial services platform with multi-step loan applications, calculators, and email integration",
    technologies: ["React.js", "Node.js", "Firebase", "Tailwind CSS"],
    image: "/payday.png",
  },
  {
    name: "Freights Logistic",
    url: "https://freightslogistic.com",
    description: "Dispatching company website providing truck dispatch support, load booking, and compliance services",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    image: "/freightlogistic.png",
  },
  {
    name: "EverXNode",
    url: "https://everxnode.com",
    description: "Node.js development and deployment platform with NFT licensing, token staking, and cloud deployment systems",
    technologies: ["Next.js", "Node.js", "NestJS", "Docker", "MongoDB", "Ethers.js", "Web3.js"],
    image: "/everxnode.png",
  },
  {
    name: "Arena SOL",
    url: "https://arenastudio.fun",
    description: "Gaming platform with 3D visuals, token integration, and Solana blockchain support",
    technologies: ["React.js", "Three.js", "Solana Web3.js", "Tailwind CSS"],
    image: "/arena.jpeg",
  },
  {
    name: "Punjab AC",
    url: "https://punjabac.com",
    description: "Content Management System with admin dashboard, SEO tools, and analytics tracking",
    technologies: ["Next.js 14", "Node.js", "MongoDB"],
    image: "/punjabac.jpeg",
  },
  {
    name: "Hypelet",
    url: "https://hypelet.pro",
    description: "Web3 influencer marketing platform with animated components and QR code generation",
    technologies: ["React", "Redux", "Framer Motion", "Tailwind CSS"],
    image: "/hypelet.jpeg",
  },
  {
    name: "A.K. Traders",
    url: "https://aktraders.pk",
    description: "Freight forwarding and customs clearance platform with multi-role dashboard and shipment tracking",
    technologies: ["Next.js 15", "PostgreSQL", "Node.js"],
    image: "/aktraders.jpeg",
  },
  {
    name: "DEGN Website",
    url: "https://degn.app",
    description: "Blockchain & Web3 Platform",
    technologies: ["Next.js", "Web3", "Blockchain"],
    image: "/degn.png",
  },
  {
    name: "Tekvers",
    url: "https://tekvers.com",
    description: "Corporate website for a technology company offering software solutions and product management",
    technologies: ["Next.js", "React.js", "Node.js"],
    image: "/tekvers.png",
  },
  {
    name: "NoblePOS",
    url: "https://noblepos.com",
    description: "Comprehensive Point of Sale system for retail operations with inventory and sales management",
    technologies: ["Vue.js", "ASP.NET Core", "Entity Framework Core", "SQL Server"],
    image: "/noblepos.png",
  },
];

export default function Projects() {
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <motion.section 
      ref={viewRef}
      id="projects" 
      className="relative min-h-screen flex flex-col justify-center bg-gray-900 overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Project Image with 4:3 aspect ratio */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-gray-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 md:p-8">
                {/* Top section with title and link */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
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
                    <HiExternalLink size={24} />
                  </motion.a>
                </div>
                
                {/* Middle section with description */}
                <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Bottom section with technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#C9FF00]/10 text-[#C9FF00] rounded text-xs md:text-sm border border-[#C9FF00]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => {
                playClickSound();
                setShowAll(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#C9FF00] text-gray-900 font-bold rounded-lg hover:bg-[#B8E600] transition-colors"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Show More ({projects.length - 6} more)
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

