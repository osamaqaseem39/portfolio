"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { HiExternalLink, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const projects = [
  {
    name: "BestVersion1",
    url: "https://bestversion1.com",
    description: "Football Training & Coaching Platform",
    features: [
      "Built with Next.js 14 and TypeScript",
      "Video analysis and training programs",
      "Coach profiles and player outcomes",
      "Team showcase and testimonials",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Wings Impex",
    url: "https://wingsimpex.com",
    description: "Food Company - E-commerce & Admin Management System",
    features: [
      "Complete e-commerce platform with Next.js",
      "Payment processing with Stripe API",
      "Inventory management and analytics",
      "Admin dashboard with order management",
    ],
    technologies: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    name: "Payday Website",
    url: "https://paydayexpress.ca",
    description: "Financial Services Platform",
    features: [
      "Loan calculator and application forms",
      "Multi-step application process",
      "Interactive loan calculator with real-time updates",
      "Professional financial services UI/UX",
    ],
    technologies: ["Next.js", "React", "TypeScript"],
  },
  {
    name: "Dispatching Company Website",
    url: "https://freightslogistic.com",
    description: "Truck Dispatching Services Website",
    features: [
      "Built with Next.js 15 and TypeScript",
      "24/7 dispatch support and load booking",
      "Carrier setup and compliance support",
      "Pricing page and testimonials",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "EverXNode",
    url: "https://everxnode.com",
    description: "Node.js Development and Deployment Platform",
    features: [
      "Code editor and project templates",
      "Cloud deployment and container support",
      "Monitoring and logging tools",
      "CLI tools and API testing",
    ],
    technologies: ["Node.js", "Docker", "React"],
  },
  {
    name: "Arena SOL",
    url: "https://arenastudio.fun",
    description: "Gaming Platform Website",
    features: [
      "3D elements using Three.js",
      "Tournament system and leaderboards",
      "3D character models and gaming environments",
      "Interactive gaming elements and power-up features",
    ],
    technologies: ["Next.js", "Three.js", "Solana"],
  },
  {
    name: "Punjab AC",
    url: "https://punjabac.com",
    description: "Content Management System",
    features: [
      "Admin dashboard and public website",
      "Rich text editor and media management",
      "SEO optimization and content scheduling",
      "Version control and bulk operations",
    ],
    technologies: ["Next.js", "MongoDB", "CMS"],
  },
  {
    name: "Hypelet",
    url: "https://hypelet.pro",
    description: "Influencer Marketing Platform",
    features: [
      "Animated components with Framer Motion",
      "Dark theme design and smooth animations",
      "QR code generation for influencer profiles",
      "Redux Toolkit for state management",
    ],
    technologies: ["Next.js", "Framer Motion", "Redux"],
  },
  {
    name: "A.K. Traders",
    url: "https://aktraders.pk",
    description: "Freight Forwarding & Customs Clearance Platform",
    features: [
      "Built with Next.js 15 and PostgreSQL",
      "Shipment tracking and quote management",
      "Multi-role dashboard system",
      "Real-time shipment status updates",
    ],
    technologies: ["Next.js", "PostgreSQL", "TypeScript"],
  },
  {
    name: "DEGN Website",
    url: "https://degn.app",
    description: "Blockchain & Web3 Platform",
    features: [
      "Built with Next.js 15 and Web3 integration",
      "Wallet connection and smart contract interaction",
      "Ethereum blockchain support with MetaMask",
      "NFT integration and cross-chain support",
    ],
    technologies: ["Next.js", "Web3", "Ethereum"],
  },
  {
    name: "DEGN DApp",
    url: "#",
    description: "Solana DEX Token Trading Platform",
    features: [
      "Decentralized application for buying and selling DEX tokens",
      "NestJS backend with MongoDB and Jupiter API integration",
      "Wallet management, trading history, and portfolio tracking",
      "Multi-source price data integration with CoinMarketCap, CoinGecko, and Solscan",
    ],
    technologies: ["Next.js", "NestJS", "Solana", "MongoDB"],
  },
  {
    name: "Tekvers Website",
    url: "https://tekvers.com",
    description: "Software Company - Professional Services Website",
    features: [
      "E-commerce platform for stationary",
      "Product catalog and shopping cart",
      "Admin dashboard and order processing",
      "Payment processing and inventory tracking",
    ],
    technologies: ["Next.js", "E-commerce", "Stripe"],
  },
  {
    name: "Synovo Labs",
    url: "https://slabs-eight.vercel.app",
    description: "Web Development Agency Website",
    features: [
      "Built with Next.js 15, GSAP, and Framer Motion",
      "Smooth scrolling animations",
      "Portfolio showcase and technology stack",
      "Advanced animations with GSAP timelines",
    ],
    technologies: ["Next.js", "GSAP", "Framer Motion"],
  },
  {
    name: "Stationary E-commerce",
    url: "#",
    description: "Office Supplies E-commerce Platform",
    features: [
      "Comprehensive e-commerce platform for stationary and office supplies",
      "Product catalog, shopping cart, and checkout process",
      "Product categories, search functionality, and filtering system",
      "Admin dashboard, order processing, and customer management",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Taxi Application Platform",
    url: "#",
    description: "Full-Stack Transportation System",
    features: [
      "Comprehensive taxi booking and management platform",
      "Real-time tracking system using Google Maps API",
      "Secure payment processing with Stripe and PayPal",
      "Comprehensive admin dashboard with user management",
    ],
    technologies: ["React", "Node.js", "Google Maps", "Stripe"],
  },
  {
    name: "Car Maintenance Tracker",
    url: "#",
    description: "Full-Stack Mobile & Web Application",
    features: [
      "Comprehensive car maintenance tracking system",
      "Flutter mobile app and React web dashboard",
      "Offline functionality with SQLite",
      "Real-time data synchronization and maintenance scheduling",
    ],
    technologies: ["Flutter", "React", "MongoDB", "SQLite"],
  },
  {
    name: "Amazon Chat Assistant",
    url: "#",
    description: "Discord Bot",
    features: [
      "AI-powered Discord bot for Amazon FBA education",
      "Conversational AI with context management",
      "OpenAI GPT models for intelligent responses",
      "Educational content and conversation context preservation",
    ],
    technologies: ["Node.js", "Discord.js", "OpenAI"],
  },
  {
    name: "Discord Verify Bot",
    url: "#",
    description: "User Verification System",
    features: [
      "Sophisticated verification bot with multi-step questionnaire",
      "Modal forms, role management, and automated verification",
      "Multi-step questionnaire system with progressive verification",
      "GoHighLevel webhook for lead management",
    ],
    technologies: ["Node.js", "Discord.js", "Webhooks"],
  },
  {
    name: "PerkUP",
    url: "#",
    description: "Multi-Platform Loyalty & Rewards System",
    features: [
      "Comprehensive loyalty management system",
      "Real-time data synchronization between web and mobile",
      "ASP.NET Core backend with Entity Framework Core",
      "React admin dashboard and Flutter mobile app",
    ],
    technologies: ["ASP.NET Core", "React", "Flutter", "Entity Framework"],
  },
  {
    name: "NoblePOS",
    url: "https://noblepos.com",
    description: "Point of Sale & Business Management System",
    features: [
      "Comprehensive POS system for retail operations",
      "Clean architecture with Entity Framework Core",
      "Business logic layer for sales, inventory, purchases",
      "Domain layer with comprehensive entity models",
    ],
    technologies: ["Vue.js", "ASP.NET Core", "Entity Framework"],
  },
  {
    name: "WordPress Projects",
    url: "#",
    description: "Custom WordPress Development",
    features: [
      "AgentFusion.com: Custom real estate theme",
      "TwoTrackProperties.com: Property management system",
      "SKFramers.com: Construction company website",
      "Evoo.pk: E-commerce platform with multi-vendor system",
    ],
    technologies: ["WordPress", "PHP", "WooCommerce", "MySQL"],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentProjects = projects.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="py-20 px-4">
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
              Projects
            </motion.h2>
          </div>

          <div ref={ref} className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentProjects.map((project, index) => {
                  const globalIndex = currentIndex * itemsPerPage + index;
                  const isFlipped = flippedIndex === globalIndex;

                  return (
                    <div
                      key={globalIndex}
                      className="h-80 perspective-1000"
                    >
                      <motion.div
                        className="relative w-full h-full preserve-3d"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                        onHoverStart={() => setFlippedIndex(globalIndex)}
                        onHoverEnd={() => setFlippedIndex(null)}
                      >
                        <div
                          className="absolute w-full h-full backface-hidden rounded-lg bg-gray-800/50 border border-gray-700 p-6 cursor-pointer"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">{project.name}</h3>
                            <motion.a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.2, rotate: 15 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <HiExternalLink className="text-purple-400" size={20} />
                            </motion.a>
                          </div>
                          <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-500 text-xs mt-auto">Hover to see details</p>
                        </div>

                        <div
                          className="absolute w-full h-full backface-hidden rounded-lg bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500 p-6 rotate-y-180"
                        >
                          <h3 className="text-xl font-bold text-white mb-4">{project.name}</h3>
                          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                            {project.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-purple-500/30 text-purple-200 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                  onClick={prevPage}
                  className="p-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <HiChevronLeft size={24} />
                </motion.button>
                <span className="text-gray-400">
                  {currentIndex + 1} / {totalPages}
                </span>
                <motion.button
                  onClick={nextPage}
                  className="p-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <HiChevronRight size={24} />
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
