"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLinkText from "./AnimatedLinkText";
import ReadingProgressText from "./ReadingProgressText";

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

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const [viewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [statsInView, setStatsInView] = useState(false);

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


  // Intersection observers for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === statsRef.current) {
              setStatsInView(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
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
                About Me – Full Stack Web Development Services Expert
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              >
                <ReadingProgressText
                  highlightColor="#C9FF00"
                  defaultColor="#4B5563"
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  I am a passionate <strong>Full Stack Developer</strong> specializing in <Link href="/#services" className="text-[#C9FF00] hover:underline"><strong>full stack web development services</strong></Link>, <Link href="/#services" className="text-[#C9FF00] hover:underline"><strong>MERN stack development services</strong></Link>, <Link href="/blog/how-to-build-saas-product-from-scratch" className="text-[#C9FF00] hover:underline"><strong>SaaS product development services</strong></Link>, and <Link href="/blog/how-generative-ai-used-in-software-development" className="text-[#C9FF00] hover:underline"><strong>AI software development</strong></Link>. I focus on building clean, efficient, and scalable software solutions for startups and businesses. With expertise in <strong>startup web development services, fintech app development services, custom SaaS development, and web app development for startups</strong>, I deliver high-quality products that drive business growth. My development approach is business-oriented, performance-driven, and user-focused, with a deep understanding of <Link href="/blog/backend-architecture-scalable-apps" className="text-[#C9FF00] hover:underline"><strong>scalable web application architecture</strong></Link> and <strong>backend architecture for scalable apps</strong>.
                </ReadingProgressText>
              </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed mb-8"
            >
              <ReadingProgressText
                highlightColor="#C9FF00"
                defaultColor="#D1D5DB"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                Whether you need <Link href="/#services" className="text-[#C9FF00] hover:underline"><strong>full stack web development services</strong></Link> for your startup, <Link href="/#services" className="text-[#C9FF00] hover:underline"><strong>MERN stack development services</strong></Link> for scalable applications, <Link href="/blog/how-to-build-saas-product-from-scratch" className="text-[#C9FF00] hover:underline"><strong>SaaS product development services</strong></Link> from MVP to production, <Link href="/blog/how-generative-ai-used-in-software-development" className="text-[#C9FF00] hover:underline"><strong>AI software development</strong></Link> with intelligent features, <Link href="/#services" className="text-[#C9FF00] hover:underline"><strong>fintech app development services</strong></Link> with security compliance, <strong>custom SaaS development</strong> with multi-tenant architecture, <strong>web app development for startups</strong>, <Link href="/blog/backend-architecture-scalable-apps" className="text-[#C9FF00] hover:underline"><strong>custom backend development services</strong></Link>, or <strong>AI-powered web applications</strong>, I bring the technical expertise and proven experience to make it happen. Specializing in <strong>startup software development company</strong> solutions and <strong>small business web development services</strong>. <Link href="/contact" className="text-[#C9FF00] hover:underline font-semibold">Contact me</Link> to discuss your project.
              </ReadingProgressText>
            </motion.div>
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
                  <AnimatedLinkText>Let's Talk</AnimatedLinkText>
                </motion.a>
              </Link>
              <Link href="/#projects">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors inline-block cursor-pointer"
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  <AnimatedLinkText>View Projects</AnimatedLinkText>
                </motion.a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
