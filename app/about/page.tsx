"use client";

import { useMobile } from "@/hooks/useMobile";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileAbout from "@/components/mobile/MobileAbout";
import MobileFooter from "@/components/mobile/MobileFooter";

export default function AboutPage() {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <main className="bg-white min-h-screen">
        <MobileHeader />
        <MobileAbout />
        <MobileFooter />
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <About />
      <Footer />
    </main>
  );
}

