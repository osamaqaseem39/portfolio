"use client";

import { useMobile } from "@/hooks/useMobile";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileContact from "@/components/mobile/MobileContact";

export default function ContactPage() {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <main className="bg-white min-h-screen">
        <MobileHeader />
        <div className="pt-16">
          <MobileContact />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="pt-24">
        <Contact />
      </div>
    </main>
  );
}

