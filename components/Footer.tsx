"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-400"
        >
          © {new Date().getFullYear()} Muhammad Osama Qaseem. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

