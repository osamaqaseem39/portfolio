'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200 // Increased offset for better detection

      // Check if we're at the top of the page
      if (scrollPosition < 300) {
        setActiveSection('home')
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Set initial active section
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center"
    >
      {/* Desktop Navigation - Floating Capsule */}
      <motion.nav
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 px-2 py-2"
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(item.href)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-black text-white shadow-md'
                : 'text-black hover:text-gray-600 hover:bg-gray-100'
            }`}
          >
            {item.name}
          </motion.button>
        ))}
      </motion.nav>

      {/* Mobile Navigation - Bottom Sheet Style */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 p-3 text-black hover:text-gray-600 transition-colors duration-200"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg py-4 px-6 border border-gray-200 min-w-[200px]"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-black text-white'
                      : 'text-black hover:text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header 