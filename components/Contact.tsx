'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Send, Phone, Globe } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="section-minimal bg-white">
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
            className="text-section font-bold text-black mb-8"
          >
            Get in touch
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail size={20} className="text-black" />
                  <div>
                    <p className="font-medium text-black">Email</p>
                    <a href="mailto:osama.qa.39@gmail.com" className="link-minimal text-body">
                      osama.qa.39@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone size={20} className="text-black" />
                  <div>
                    <p className="font-medium text-black">Phone</p>
                    <a href="tel:+923256413868" className="link-minimal text-body">
                      +92 325 641 3868
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Globe size={20} className="text-black" />
                  <div>
                    <p className="font-medium text-black">Website</p>
                    <a href="https://osamaqaseem.online" target="_blank" rel="noopener noreferrer" className="link-minimal text-body">
                      osamaqaseem.online
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail size={20} className="text-black" />
                  <div>
                    <p className="font-medium text-black">Location</p>
                    <p className="text-body">Dubai, United Arab Emirates (Remote)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="card-minimal p-6">
                <h3 className="text-xl font-semibold text-black mb-6">
                  Send a message
                </h3>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-minimal inline-flex items-center px-6 py-3 text-base font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 