"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const education = [
  {
    institution: "Hajvery University Lahore",
    degree: "Bachelor of Science (BS) in Computer Science",
    period: "2021 - 2024",
  },
  {
    institution: "KIMS",
    degree: "A-levels",
    period: "2018 - 2020",
  },
  {
    institution: "Bloomfield Hall",
    degree: "O-levels",
    period: "2016 - 2018",
  },
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden mb-12">
            <motion.h2
              initial={{ x: "-100%" }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Education
            </motion.h2>
          </div>

          <div ref={ref} className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-xl text-purple-400">{edu.institution}</p>
                  </div>
                  <p className="text-gray-300 mt-2 md:mt-0">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
