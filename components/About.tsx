'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-minimal bg-white">
      <div className="container-minimal">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-section font-bold text-black mb-4"
          >
            About me.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <a
              href="/resume.pdf"
              download
              className="btn-outline inline-flex items-center px-6 py-3 text-base font-medium"
            >
              <Download size={20} className="mr-2" />
              Download my resume
            </a>
          </motion.div>

          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-body mb-4">
              Full-Stack Software Engineer with 4+ years of experience building scalable web, mobile, and blockchain applications. 
              Specialized in React, TypeScript, and Flutter development with expertise in modern frontend frameworks, backend APIs, 
              cross-platform mobile development, and Web3 technologies.
            </p>
            <p className="text-body mb-4">
              I've built 15+ production applications across web, mobile, desktop, and blockchain platforms, including enterprise-level 
              ERP systems, e-commerce platforms, AI-powered Discord bots, and Web3 projects with crypto exchanges and blockchain games.
            </p>
            <p className="text-body">
              I excel in building scalable architectures, implementing real-time features, and delivering user-centric experiences that 
              drive business value. Passionate about leveraging modern technologies to solve complex problems and create innovative solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 