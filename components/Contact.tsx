"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Contact
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="mailto:osamaqa39@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all text-center"
              whileHover={{ scale: 1.05 }}
            >
              <HiMail className="text-purple-400 mx-auto mb-4" size={32} />
              <p className="text-white font-semibold mb-2">Email</p>
              <p className="text-gray-400 text-sm">osamaqa39@gmail.com</p>
            </motion.a>

            <motion.a
              href="tel:+923256413868"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all text-center"
              whileHover={{ scale: 1.05 }}
            >
              <HiPhone className="text-purple-400 mx-auto mb-4" size={32} />
              <p className="text-white font-semibold mb-2">Phone</p>
              <p className="text-gray-400 text-sm">+92 325 6413868</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center"
            >
              <HiLocationMarker className="text-purple-400 mx-auto mb-4" size={32} />
              <p className="text-white font-semibold mb-2">Location</p>
              <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://github.com/osamaqaseem39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={40} />
            </motion.a>
            
            <motion.a
              href="https://github.com/osamaqaseem39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={40} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

