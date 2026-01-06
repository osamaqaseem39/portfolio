"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    description: "Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript.",
  },
  {
    number: "02",
    title: "UI/UX Design & Frontend",
    description: "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion.",
  },
  {
    number: "03",
    title: "SaaS Platform Development",
    description: "Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management.",
  },
  {
    number: "04",
    title: "API & System Architecture",
    description: "Designing maintainable APIs with Prisma, and MongoDB. Focusing on optimization and security.",
  },
  {
    number: "05",
    title: "AI Operations (AIO)",
    description: "Implementing AI infrastructure, model deployment, and MLOps pipelines.",
  },
  {
    number: "06",
    title: "AI Integration & Automation",
    description: "Integrating AI capabilities into existing systems with OpenAI, Anthropic, and custom models.",
  },
  {
    number: "07",
    title: "AI Development & Consulting",
    description: "Developing custom AI solutions, fine-tuning models, and providing AI strategy consulting.",
  },
];

export default function MobileServices() {
  const [viewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section 
      ref={viewRef}
      id="services" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F5F5F5] py-16"
    >
      <div className="w-full px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
            Services
          </h2>
        </motion.div>

        {/* Services List - Vertical Scroll */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 border-2 border-gray-200"
            >
              <div className="text-5xl font-bold text-gray-800 mb-4 opacity-20" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                {service.number}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

