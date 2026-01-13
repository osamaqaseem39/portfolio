"use client";

import { useMobile } from "@/hooks/useMobile";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import Image from "@/components/Image";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
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
import MobileFooter from "@/components/mobile/MobileFooter";
import MobileMusicButton from "@/components/mobile/MobileMusicButton";
import Contact from "@/components/Contact";

export default function Home() {
  const isMobile = useMobile();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Full Stack Developer Portfolio | Hire Remote Developer",
    url: siteUrl,
    description: "Professional full stack developer portfolio. Hire a remote web, software, MERN stack, React, Node.js & blockchain developer for scalable applications.",
    author: {
      "@type": "Person",
      name: "Muhammad Osama Qaseem",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Full Stack Development Services",
    provider: {
      "@type": "Person",
      name: "Muhammad Osama Qaseem",
      jobTitle: "Full Stack Developer",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "Web3 Development",
      "Blockchain Development",
      "Enterprise Software Development",
    ],
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
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <MobileHeader />
        <MobileHero />
        <MobileAboutSection />
        <MobileImage />
        <MobileServices />
        <MobileProjects />
        <MobileExperience />
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
      <Projects />
      <Experience />
      <Blog />
      <Footer />
    </main>
  );
}

