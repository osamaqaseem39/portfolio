"use client";

import { useMobile } from "@/hooks/useMobile";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import TechStacks from "@/components/TechStacks";
import Image from "@/components/Image";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import MemoryGame from "@/components/MemoryGame";
import Footer from "@/components/Footer";
import Script from "next/script";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// Mobile components
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileHero from "@/components/mobile/MobileHero";
import MobileAboutSection from "@/components/mobile/MobileAboutSection";
import MobileImage from "@/components/mobile/MobileImage";
import MobileServices from "@/components/mobile/MobileServices";
import MobileProjects from "@/components/mobile/MobileProjects";
import MobileExperience from "@/components/mobile/MobileExperience";
import MobileMemoryGame from "@/components/mobile/MobileMemoryGame";
import MobileFooter from "@/components/mobile/MobileFooter";
import MobileMusicButton from "@/components/mobile/MobileMusicButton";
import MobileTechStacks from "@/components/mobile/MobileTechStacks";
import Contact from "@/components/Contact";

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

export default function Home() {
  const isMobile = useMobile();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

  // Refs and state for animations
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [projectsInView, setProjectsInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
            if (entry.target === projectsRef.current) {
              setProjectsInView(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Full Stack Web Development Services | MERN Stack Developer",
    url: siteUrl,
    description: "Professional full stack web development services for startups and businesses. Expert MERN stack developer offering SaaS product development, AI software development, fintech app development, and custom web application solutions.",
    author: {
      "@type": "Person",
      name: "Muhammad Osama Qaseem",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Full Stack Web Development Services",
    provider: {
      "@type": "Person",
      name: "Muhammad Osama Qaseem",
      jobTitle: "Full Stack Developer",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Full Stack Web Development Services",
      "Startup Web Development Services",
      "MERN Stack Development Services",
      "SaaS Product Development Services",
      "AI Software Development",
      "Fintech App Development Services",
      "Custom SaaS Development",
      "Web App Development for Startups",
      "Custom Backend Development Services",
      "AI Web Development Services",
      "Mobile App Development",
      "Web3 Development",
      "Blockchain Development",
      "Enterprise Software Development",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What full stack web development services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer complete full stack web development services including custom software development, MERN stack applications, SaaS product development, AI-powered applications, fintech solutions, mobile app development, Web3 and blockchain development, and enterprise software solutions. I specialize in ASP.NET Core 8, React, Next.js, and scalable architecture."
        }
      },
      {
        "@type": "Question",
        "name": "How much experience do you have in web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I have over 4 years of professional web development experience, having successfully delivered 15+ production applications and completed 30+ projects across various industries including Web3, SaaS, fintech, e-commerce, and enterprise solutions. I maintain a 100% client satisfaction rate."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies and frameworks do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I specialize in modern web technologies including React.js, Next.js, Vue.js, TypeScript, ASP.NET Core 8, C#, Node.js, NestJS, MongoDB, SQL Server, and Web3 technologies like Solana Web3.js, Ethers.js, and Jupiter DEX. I also work with Flutter for mobile development and various DevOps tools for deployment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide SaaS product development and AI software development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I specialize in SaaS product development from MVP to full-scale platforms, including multi-tenant architecture and subscription management. For AI software development, I integrate generative AI and machine learning capabilities using tools like LangChain and OpenAI API to create intelligent, automated business solutions."
        }
      },
      {
        "@type": "Question",
        "name": "What industries and project types have you worked on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I've successfully delivered projects across diverse industries including Web3 platforms, SaaS applications, fintech solutions, e-commerce systems, transportation platforms, loyalty management systems, point-of-sale applications, gaming applications, and enterprise ERP systems. My portfolio includes blockchain DApps, AI-powered applications, and cross-platform mobile solutions."
        }
      }
    ]
  };

  if (isMobile) {
    return (
      <main className="bg-white min-h-screen">
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <MobileHeader />
        <MobileHero />
        <MobileAboutSection />
        <MobileImage />
        <MobileServices />
        <MobileTechStacks />
        <MobileProjects />
        <MobileExperience />
        <MobileMemoryGame />
        <MobileFooter />
        <MobileMusicButton />
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Header />
      <Hero />
      <AboutSection />
      <Image/>
      <Services />
      <TechStacks />
  

      {/* Specializations Section */}
      <div className="bg-[#F5F5F5] px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={true}
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
                animate={true}
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
            animate={true}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4"
            style={{ fontFamily: "var(--font-absans), sans-serif" }}
          >
            Technology Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={true}
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
                animate={true}
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
                      animate={true}
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
      <Projects />
      <Experience />
      <Blog />
      <MemoryGame />
      <Footer />
    </main>
  );
}

