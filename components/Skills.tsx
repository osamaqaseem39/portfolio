'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Shield, Users, Settings, Palette } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Palette size={24} />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Code size={24} />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'ASP.NET Core', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 88 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      title: 'Database & ORMs',
      icon: <Database size={24} />,
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'SQL Server', level: 85 },
        { name: 'Entity Framework', level: 82 },
        { name: 'MySQL', level: 80 },
        { name: 'Database Design', level: 85 },
        { name: 'Query Optimization', level: 83 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud size={24} />,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 82 },
        { name: 'Vercel', level: 88 },
        { name: 'Netlify', level: 85 }
      ]
    },
    {
      title: 'Web3 & Blockchain',
      icon: <Shield size={24} />,
      skills: [
        { name: 'Solidity', level: 75 },
        { name: 'Web3.js', level: 80 },
        { name: 'Ethers.js', level: 78 },
        { name: 'MetaMask', level: 82 },
        { name: 'Smart Contracts', level: 75 },
        { name: 'dApp Development', level: 78 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Settings size={24} />,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'Jest', level: 80 },
        { name: 'Docker Desktop', level: 85 },
        { name: 'Chrome DevTools', level: 88 }
      ]
    }
  ]

  const softSkills = [
    'Team Collaboration', 'Technical Leadership', 'Problem Solving', 'Analytical Thinking',
    'Code Review', 'Mentoring', 'Agile Methodologies', 'Requirements Analysis',
    'Stakeholder Management', 'Remote Work', 'Fast-paced Environment', 'Continuous Learning'
  ]

  return (
    <section id="skills" className="section-minimal bg-white">
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
            Skills.
          </motion.h2>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-black mb-8">
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + categoryIndex * 0.1 }}
                  className="card-minimal p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-black mr-3">
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-black text-lg">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-black">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-600">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                            className="bg-black h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center mb-6">
              <Users size={24} className="text-black mr-3" />
              <h3 className="text-xl font-semibold text-black">
                Soft Skills & Leadership
              </h3>
            </div>
            
            <div className="card-minimal p-6">
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.05 }}
                    className="px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium border border-gray-200 hover:border-black transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 