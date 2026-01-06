"use client";

import { useMobile } from "@/hooks/useMobile";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileProjects from "@/components/mobile/MobileProjects";
import MobileFooter from "@/components/mobile/MobileFooter";
import MobileMusicButton from "@/components/mobile/MobileMusicButton";

export default function ProjectsPage() {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <main className="bg-white min-h-screen">
        <MobileHeader />
        <MobileProjects />
        <MobileFooter />
        <MobileMusicButton />
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}

