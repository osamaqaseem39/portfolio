"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiExternalLink } from "react-icons/hi";

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
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <HiExternalLink className="text-purple-400" size={20} />
                </motion.a>
              </div>

              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

