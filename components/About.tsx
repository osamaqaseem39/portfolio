"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              I'm a passionate Full Stack Developer with expertise in building scalable web applications
              and Web3 solutions. Currently working at Voxity as a Full Stack Developer, where I contribute
              to multiple Web3 projects including admin dashboards, token exchange platforms, and blockchain-based games.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              My experience spans across various technologies including React, Next.js, Node.js, NestJS,
              MongoDB, SQL Server, and Web3 technologies like Ethers.js, Web3.js, and Solana Web3.js.
              I have a strong background in developing ERP systems, e-commerce platforms, and decentralized
              applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              I'm always eager to learn new technologies and tackle challenging problems. I believe in writing
              clean, maintainable code and following best practices to deliver high-quality solutions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

