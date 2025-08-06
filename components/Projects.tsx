'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: 'Wings Impex - Food Company E-commerce',
      description: 'Complete e-commerce platform with customer website (Next.js) and admin dashboard (React). Integrated payment processing, inventory management, and comprehensive analytics.',
      technologies: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
      github: 'https://github.com/osamaqaseem/wings-impex',
      live: 'https://wingsimpex.com',
      featured: true,
      category: 'React'
    },
    {
      title: 'Payday Website - Financial Services',
      description: 'Professional financial services website with loan calculator and application forms. Implemented multi-step application process with validation and progress tracking.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/osamaqaseem/payday-website',
      live: 'https://paydayexpress.ca',
      featured: true,
      category: 'React'
    },
    {
      title: 'Arena SOL - Gaming Platform',
      description: 'Gaming platform with 3D elements using Three.js and interactive components. Implemented tournament system, leaderboards, and community features.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Three.js', 'Styled Components'],
      github: 'https://github.com/osamaqaseem/arena-sol',
      live: 'https://arenasol.fun',
      featured: true,
      category: 'React'
    },
    {
      title: 'Punjab AC - Content Management System',
      description: 'CMS with admin dashboard and public website for content management. Implemented rich text editor, media management, and SEO optimization.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer'],
      github: 'https://github.com/osamaqaseem/punjab-ac',
      live: 'https://punjabac.com',
      featured: false,
      category: 'React'
    },
    {
      title: 'Hypelet - Influencer Marketing Platform',
      description: 'Modern influencer marketing website with animated components and QR code generation. Implemented dark theme design and smooth animations.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/osamaqaseem/hypelet',
      live: 'https://hypelet.pro',
      featured: false,
      category: 'React'
    },
    {
      title: 'Taxi Application Platform',
      description: 'Comprehensive taxi booking and management platform with real-time tracking and secure payments. Built React 18 frontend with TypeScript and Ant Design.',
      technologies: ['React', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'Google Maps API'],
      github: 'https://github.com/osamaqaseem/taxi-app',
      live: 'https://taxi-app-demo.com',
      featured: false,
      category: 'React'
    },
    {
      title: 'Car Maintenance Tracker',
      description: 'Comprehensive car maintenance tracking system with Flutter mobile app and React web dashboard. Implemented offline functionality and real-time data synchronization.',
      technologies: ['Flutter', 'React', 'TypeScript', 'NestJS', 'MongoDB', 'SQLite'],
      github: 'https://github.com/osamaqaseem/car-maintenance-tracker',
      live: 'https://car-maintenance-tracker.com',
      featured: true,
      category: 'Mobile'
    },
    {
      title: 'Backend Generator - Code Generation Tool',
      description: 'CLI tool for generating NestJS code with RBAC integration and GraphQL support. Automated creation of controllers, services, and GraphQL resolvers.',
      technologies: ['TypeScript', 'NestJS', 'GraphQL', 'MongoDB', 'Apollo Server'],
      github: 'https://github.com/osamaqaseem/backend-generator',
      live: null,
      featured: false,
      category: 'Backend'
    },
    {
      title: 'Amazon Chat Assistant - Discord Bot',
      description: 'AI-powered Discord bot for Amazon FBA education using OpenAI API. Implemented conversational AI with context management and educational features.',
      technologies: ['Python', 'Discord.py', 'OpenAI API', 'SQLite', 'Async Programming'],
      github: 'https://github.com/osamaqaseem/amazon-chat-assistant',
      live: null,
      featured: false,
      category: 'Backend'
    },
    {
      title: 'Discord Verify Bot',
      description: 'Sophisticated verification bot with multi-step questionnaire and webhook integration. Implemented modal forms, role management, and automated verification.',
      technologies: ['Python', 'Discord.py', 'JWT', 'Webhook Integration', 'Modal Forms'],
      github: 'https://github.com/osamaqaseem/discord-verify-bot',
      live: null,
      featured: false,
      category: 'Backend'
    },
    {
      title: 'PerkUP - Multi-Platform Loyalty System',
      description: 'Comprehensive loyalty management system with web admin and mobile app. Implemented real-time data synchronization between web and mobile platforms.',
      technologies: ['React', 'TypeScript', 'ASP.NET Core', 'Flutter', 'SQL Server', 'JWT'],
      github: 'https://github.com/osamaqaseem/perkup',
      live: 'https://perkup.com',
      featured: false,
      category: 'Mobile'
    },
    {
      title: 'NoblePOS - Point of Sale System',
      description: 'Comprehensive POS system for retail operations with inventory management. Implemented clean architecture with Entity Framework Core and Vue.js frontend.',
      technologies: ['ASP.NET Core', 'Vue.js', 'Entity Framework', 'SQL Server', 'JWT'],
      github: 'https://github.com/osamaqaseem/noblepos',
      live: 'https://noblepos.com',
      featured: false,
      category: 'Vue.js'
    },
    {
      title: 'AgentFusion.com - Real Estate',
      description: 'Custom real estate theme with property listings, agent profiles, and Google Maps integration. Built with WordPress and custom plugins.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Themes', 'Google Maps API'],
      github: 'https://github.com/osamaqaseem/agentfusion',
      live: 'https://agentfusion.com',
      featured: false,
      category: 'WordPress'
    },
    {
      title: 'TwoTrackProperties.com',
      description: 'Property management system with advanced search filters and virtual tour features. Multi-vendor system with local payment gateways.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'Payment Gateways'],
      github: 'https://github.com/osamaqaseem/twotrack-properties',
      live: 'https://twotrackproperties.com',
      featured: false,
      category: 'WordPress'
    },
    {
      title: 'SKFramers.com',
      description: 'Construction company website with portfolio gallery and testimonials system. Custom theme development with advanced features.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Themes', 'Portfolio Gallery'],
      github: 'https://github.com/osamaqaseem/skframers',
      live: 'https://skframers.com',
      featured: false,
      category: 'WordPress'
    },
    {
      title: 'Evoo.pk & Shop.Evoo.pk',
      description: 'E-commerce platform with multi-vendor system, local payment gateways, and mobile app integration. Complete online store solution.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'Mobile App Integration'],
      github: 'https://github.com/osamaqaseem/evoo',
      live: 'https://evoo.pk',
      featured: false,
      category: 'WordPress'
    }
  ]

  const categories = ['All', 'React', 'Vue.js', 'WordPress', 'Web3', 'Mobile', 'Backend']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-minimal bg-white">
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
            Projects.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-body text-gray-600 mb-8"
          >
            A collection of my recent work showcasing full-stack development, modern web technologies, and innovative solutions.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-minimal p-6"
              >
                <div className="mb-4">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full mb-3">
                      Featured
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {project.title}
                  </h3>
                  <p className="text-body mb-4 text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-black rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-minimal text-sm font-medium flex items-center"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-minimal text-sm font-medium flex items-center"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center py-12"
            >
              <p className="text-body text-gray-600">
                No projects found for the selected category.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/osamaqaseem39"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center px-8 py-3 text-lg font-semibold"
            >
              <Github size={20} className="mr-2" />
              View More Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 