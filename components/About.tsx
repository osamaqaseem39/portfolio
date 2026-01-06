"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const provenImpact = [
  {
    value: "4+",
    title: "Years Experience",
    description: "Professional development experience across Web3, SaaS, and enterprise applications.",
  },
  {
    value: "15+",
    title: "Production Apps",
    description: "Successfully delivered projects across various industries and technologies.",
  },
  {
    value: "30+",
    title: "Projects Completed",
    description: "From enterprise ERP systems to Web3 DApps and mobile applications.",
  },
  {
    value: "100%",
    title: "Client Satisfaction",
    description: "Delivering production-ready solutions that drive real business results.",
  },
];

const projectHighlights = [
  {
    name: "ERP SaaS System",
    tech: "ASP.NET Core 8, SOLID, DDD",
    description: "Multi-tenant enterprise solution with GraphQL, RBAC, and SQL Server",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "PerkUP",
    tech: "React, TypeScript, Flutter",
    description: "Loyalty management system with cross-platform mobile app",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "DEGN Ecosystem",
    tech: "NestJS, Web3, Solana",
    description: "Complete Web3 platform with Jupiter DEX integration",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "TOKENVERSE",
    tech: "Web3, Blockchain, DeFi",
    description: "Decentralized app for staking, swaps, and governance",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "NoblePOS",
    tech: "Vue.js, ASP.NET, EF Core",
    description: "Point of Sale system with clean architecture",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "15+ More Apps",
    tech: "Full Stack, Mobile, Web3",
    description: "E-commerce, gaming, transportation, and AI-powered solutions",
    color: "from-gray-500 to-slate-500",
  },
];

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

const specializations = [
  {
    title: "Web3 & Blockchain",
    items: [
      "Multi-chain development (Solana, Ethereum, BSC)",
      "Smart contract integration (Web3.js, Ethers.js)",
      "DEX integration (Jupiter DEX, Hyperliquid)",
      "DApp development with MetaMask & WalletConnect",
      "Token staking, NFT minting & governance",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend & Architecture",
    items: [
      "ASP.NET Core 8 enterprise development",
      "Entity Framework Core & database operations",
      "SOLID principles & DDD patterns",
      "RESTful APIs, JWT, OAuth2, API versioning",
      "Multi-tenant SaaS architecture",
      "SQL Server optimization, stored procedures",
      "GraphQL, WebSockets, Swagger documentation",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend & Mobile",
    items: [
      "React.js with Redux, code splitting",
      "Next.js, Vue.js with Vuex, Vue Router",
      "TypeScript, JavaScript (ES6+)",
      "Flutter & Dart cross-platform mobile",
      "Firebase integration, Provider state management",
      "Tailwind CSS, Framer Motion, Three.js",
      "3D web experiences & interactive gaming",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  
  const [viewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [statsInView, setStatsInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Scroll progress for image parallax
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(imageScrollProgress, [0, 1], ["0%", "15%"]);
  const imageOpacity = useTransform(imageScrollProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  // Scroll progress for stats section
  const { scrollYProgress: statsScrollProgress } = useScroll({
    target: statsRef,
    offset: ["start center", "end center"],
  });

  const statsScale = useTransform(statsScrollProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const smoothStatsScale = useSpring(statsScale, { stiffness: 100, damping: 30 });

  // Scroll progress for projects section
  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const projectsOpacity = useTransform(projectsScrollProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Intersection observers for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === statsRef.current) {
              setStatsInView(true);
            }
            if (entry.target === projectsRef.current) {
              setProjectsInView(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  // Combined ref callback
  const combinedRef = (node: HTMLElement | null) => {
    if (node) {
      (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
      viewRef(node);
    }
  };

  return (
    <motion.section 
      ref={combinedRef}
      id="about" 
      className="relative bg-[#F5F5F5]"
    >
      <div className="w-full">
        {/* Hero Introduction Section */}
        <div className="bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5] px-6 md:px-12 lg:px-20 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                Muhammad Osama Qaseem
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8"
              >
                Full Stack Developer • .NET Specialist • Mobile Developer • Web3 Expert
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                4+ years crafting enterprise-grade, scalable digital solutions across web, mobile, desktop, and blockchain platforms. Currently building the future at <span className="font-semibold text-black">Voxity</span> in Dubai.
              </motion.p>
            </motion.div>

            {/* Developer Image with Parallax */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 mb-24 -mx-6 md:-mx-12 lg:-mx-20 relative z-10"
              style={{ y: imageY, opacity: imageOpacity }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src="/myimage.png"
                  alt="Muhammad Osama Qaseem - Full Stack Developer and Web3 Specialist"
                  width={1920}
                  height={1080}
                  quality={100}
                  priority
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="bg-black text-white px-6 md:px-12 lg:px-20 py-16 md:py-24 relative z-20">
          <motion.div 
            className="max-w-7xl mx-auto"
            style={{ scale: smoothStatsScale }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              By The Numbers
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {provenImpact.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={statsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-[#C9FF00]" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                    {impact.value}
                  </div>
                  <div className="text-lg md:text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                    {impact.title}
                  </div>
                  <div className="text-sm text-gray-400 leading-relaxed">
                    {impact.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Highlights - Interactive Grid */}
        <div ref={projectsRef} className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <motion.div 
            className="max-w-7xl mx-auto"
            style={{ opacity: projectsOpacity }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={projectsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={projectsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="text-xl text-gray-700 mb-12"
            >
              A selection of production applications I've built
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectHighlights.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={projectsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-md -z-10`} />
                  <div className="relative bg-white p-6 rounded-2xl border-2 border-gray-200 group-hover:border-black transition-all duration-300 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 font-medium">{project.tech}</p>
                    <p className="text-sm text-gray-700 leading-relaxed flex-grow">{project.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-500 group-hover:text-black transition-colors">View Details →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Specializations Section */}
        <div className="bg-[#F5F5F5] px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Core Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -15 : 15 }}
                  animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 + index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  <div className="relative bg-white p-8 rounded-2xl border border-gray-200 h-full">
                    <h3 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {spec.title}
                    </h3>
                    <ul className="space-y-3">
                      {spec.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-700">
                          <span className="text-black mr-3 mt-1">▸</span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Arsenal - Interactive Tags */}
        <div className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Technology Arsenal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 mb-12"
            >
              A comprehensive toolkit for building modern, scalable applications
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-20 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Ready to Build Something Exceptional?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8"
            >
              Whether you need an <strong className="text-white">enterprise ERP system</strong> built with <strong className="text-white">ASP.NET Core 8</strong>, a <strong className="text-white">multi-tenant SaaS platform</strong>, a <strong className="text-white">cross-platform mobile app</strong> with <strong className="text-white">Flutter</strong>, a <strong className="text-white">Point of Sale system</strong>, an <strong className="text-white">e-commerce platform</strong>, a <strong className="text-white">3D gaming website</strong>, a <strong className="text-white">Web3 DApp</strong>, or <strong className="text-white">blockchain integration</strong>, I bring the technical expertise and proven experience to make it happen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#C9FF00] text-black font-bold rounded-lg hover:bg-[#B8E600] transition-colors inline-block cursor-pointer"
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  Let's Talk
                </motion.a>
              </Link>
              <Link href="/#projects">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors inline-block cursor-pointer"
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  View Projects
                </motion.a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
