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

export default function Home() {
  const isMobile = useMobile();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

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
      <Projects />
      <Experience />
      <Blog />
      <MemoryGame />
      <Footer />
    </main>
  );
}

