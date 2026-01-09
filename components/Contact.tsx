"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useClickSound } from "@/hooks/useAudio";
import { useState } from "react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ 
                fontFamily: "var(--font-absans), sans-serif",
                color: "rgb(17, 24, 39)",
              }}
            >
              Get In Touch
            </h2>
            <p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Let's work together to bring your ideas to life. Reach out and let's start a conversation.
            </p>
          </motion.div>

          <div ref={ref} className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                href="mailto:connect@osamaqaseem.online"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-[#C9FF00] transition-all text-center shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={playClickSound}
              >
                <HiMail className="text-[#C9FF00] mx-auto mb-4" size={32} />
                <p className="text-gray-900 font-semibold mb-2" style={{ fontFamily: "var(--font-absans), sans-serif" }}>Email</p>
                <p className="text-gray-600 text-sm">connect@osamaqaseem.online</p>
              </motion.a>

              <motion.a
                href="tel:+923256413868"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-[#C9FF00] transition-all text-center shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={playClickSound}
              >
                <HiPhone className="text-[#C9FF00] mx-auto mb-4" size={32} />
                <p className="text-gray-900 font-semibold mb-2" style={{ fontFamily: "var(--font-absans), sans-serif" }}>Phone</p>
                <p className="text-gray-600 text-sm">+92 325 6413868</p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-lg p-6 border-2 border-gray-200 text-center shadow-sm"
              >
                <HiLocationMarker className="text-[#C9FF00] mx-auto mb-4" size={32} />
                <p className="text-gray-900 font-semibold mb-2" style={{ fontFamily: "var(--font-absans), sans-serif" }}>Location</p>
                <p className="text-gray-600 text-sm">Lahore, Pakistan</p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg p-6 md:p-8 border-2 border-gray-200 shadow-sm"
            >
              <h3
                className="text-2xl md:text-3xl font-bold mb-6 text-center"
                style={{ 
                  fontFamily: "var(--font-absans), sans-serif",
                  color: "rgb(17, 24, 39)",
                }}
              >
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#C9FF00] focus:outline-none transition-colors"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#C9FF00] focus:outline-none transition-colors"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#C9FF00] focus:outline-none transition-colors"
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#C9FF00] focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 text-center"
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-center"
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                  >
                    Something went wrong. Please try again or use the email link above.
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={playClickSound}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#C9FF00] text-gray-900 font-bold py-4 px-6 rounded-lg hover:bg-[#B8E600] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* CTA Section with Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gray-900 rounded-lg p-8 md:p-12 text-center"
            >
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                Let's Connect
              </h3>
              <p
                className="text-gray-400 mb-8 text-lg"
                style={{ fontFamily: "var(--font-absans), sans-serif" }}
              >
                Follow me on social media or reach out directly
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/osamaqaseem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-[#C9FF00] transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={playClickSound}
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </motion.a>
                
                <motion.a
                  href="https://wa.me/923256413868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-[#C9FF00] transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={playClickSound}
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  <FaWhatsapp size={20} />
                  WhatsApp
                </motion.a>
                
                <motion.a
                  href="https://github.com/osamaqaseem39"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-[#C9FF00] transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={playClickSound}
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  <FaGithub size={20} />
                  GitHub
                </motion.a>

                <motion.a
                  href="mailto:connect@osamaqaseem.online"
                  className="px-6 py-3 bg-[#C9FF00] text-gray-900 rounded-lg font-semibold hover:bg-[#B8E600] transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={playClickSound}
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  <HiMail size={20} />
                  Email Me
                </motion.a>
              </div>

              {/* Hire Me CTAs */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p
                  className="text-gray-400 mb-4 text-center text-sm"
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  Or hire me on freelance platforms
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <motion.a
                    href="https://www.upwork.com/freelancers/~01b9eaa35da5d2f1a7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#14A800] text-white rounded-lg font-semibold hover:bg-[#0F7F00] transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={playClickSound}
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                  >
                    <FaExternalLinkAlt size={16} />
                    Hire on Upwork
                  </motion.a>
                  
                  <motion.a
                    href="https://www.fiverr.com/s/NNmQdPy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#1DBF73] text-white rounded-lg font-semibold hover:bg-[#19A866] transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={playClickSound}
                    style={{ fontFamily: "var(--font-absans), sans-serif" }}
                  >
                    <FaExternalLinkAlt size={16} />
                    Hire on Fiverr
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

