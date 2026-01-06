"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useClickSound } from "@/hooks/useAudio";
import { HiArrowUpRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export default function MobileAboutSection() {
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  const router = useRouter();

  const handleScrollToExperience = () => {
    playClickSound();
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateToAbout = () => {
    playClickSound();
    router.push("/about");
  };

  return (
    <motion.section 
      ref={viewRef}
      id="about" 
      className="relative min-h-screen flex items-center justify-center bg-gray-900 py-20"
    >
      <div className="w-full relative z-10 px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              I'm Muhammad Osama Qaseem – a Full Stack Developer crafting enterprise-grade, scalable digital solutions.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base text-gray-300 leading-relaxed mb-8"
            >
              I specialize in developing <strong>enterprise ERP systems</strong> with <strong>ASP.NET Core 8</strong>, <strong>multi-tenant SaaS platforms</strong>, <strong>cross-platform mobile applications</strong> with <strong>Flutter</strong>, and <strong>Web3 solutions</strong>. I've built 15+ production applications and currently work at Voxity as a Full Stack Developer on multiple <strong>Web3 projects</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.button
                onClick={handleNavigateToAbout}
                className="px-6 py-3 bg-lime-400 text-black font-medium rounded-lg flex items-center gap-2 hover:bg-lime-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
              
              <motion.button
                onClick={handleNavigateToAbout}
                className="w-12 h-12 rounded-full bg-lime-400 text-black flex items-center justify-center hover:bg-lime-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiArrowUpRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

