'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-minimal bg-white">
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
            Experience.
          </motion.h2>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-black mb-6">
              Work Experience
            </h3>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="card-minimal p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-black text-lg">Full Stack Developer</h4>
                    <p className="text-body font-medium">Voxity</p>
                    <p className="text-caption">Dubai, United Arab Emirates (Remote)</p>
                  </div>
                  <span className="text-caption">Aug 2024 - Present</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-body mb-3">
                    Contributing to multiple Web3 projects including admin dashboards, token exchange platforms, and blockchain-based games. 
                    Building scalable, secure, and interactive interfaces that integrate with smart contracts and token economies.
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-black">Key Responsibilities:</h5>
                    <ul className="text-body space-y-1 ml-4">
                      <li>• Developed admin dashboards for Solana-based crypto token exchanges with interactive charts and performance visualization</li>
                      <li>• Built responsive websites for blockchain games with token gating and wallet integrations (MetaMask, WalletConnect)</li>
                      <li>• Implemented dynamic leaderboards and user profiles reflecting on-chain activities</li>
                      <li>• Created minting portals for NFTs and managed token reward distributions</li>
                      <li>• Optimized frontend performance with React.js, Next.js, and Tailwind CSS</li>
                      <li>• Integrated smart contracts and enabled token-based gameplay mechanics</li>
                      <li>• Collaborated with designers and backend teams for seamless integration</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs', 'WebSockets', 'Ethers.js', 'Web3.js', 'MetaMask', 'WalletConnect', 'Chart.js', 'Recharts', 'Git', 'Vercel', 'Docker'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-black rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="card-minimal p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-black text-lg">Lead Software Engineer</h4>
                    <p className="text-body font-medium">Quest Enterprises Pakistan</p>
                    <p className="text-caption">Lahore, Pakistan</p>
                  </div>
                  <span className="text-caption">Oct 2023 - Jun 2024</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-body mb-3">
                    Led development of enterprise-level ERP systems and e-commerce platforms. Managed a team of 3 developers, 
                    implemented CI/CD pipelines, and delivered 4 major projects with 99.9% uptime.
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-black">Key Achievements:</h5>
                    <ul className="text-body space-y-1 ml-4">
                      <li>• Led development of comprehensive ERP system with 15+ modules including inventory, sales, HR, and finance</li>
                      <li>• Built e-commerce platform processing 10,000+ daily transactions with real-time inventory management</li>
                      <li>• Implemented automated testing reducing bug reports by 60% and deployment time by 40%</li>
                      <li>• Designed scalable microservices architecture supporting 50,000+ concurrent users</li>
                      <li>• Mentored junior developers and established coding standards improving team productivity by 35%</li>
                      <li>• Integrated payment gateways (Stripe, PayPal) and shipping APIs reducing checkout time by 50%</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'CI/CD', 'Jest', 'TypeScript', 'GraphQL', 'REST APIs', 'Microservices', 'Payment Integration', 'Team Leadership'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-black rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="card-minimal p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-black text-lg">Full Stack Developer</h4>
                    <p className="text-body font-medium">Quest Enterprises Pakistan</p>
                    <p className="text-caption">Lahore, Pakistan</p>
                  </div>
                  <span className="text-caption">Mar 2023 - Sep 2023</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-body mb-3">
                    Developed web applications and mobile apps using modern technologies. Built 8 client projects including 
                    e-commerce sites, admin dashboards, and custom business solutions.
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-black">Key Responsibilities:</h5>
                    <ul className="text-body space-y-1 ml-4">
                      <li>• Developed responsive web applications using React.js, Next.js, and Vue.js</li>
                      <li>• Built RESTful APIs and GraphQL endpoints with Node.js and Express.js</li>
                      <li>• Created mobile applications using React Native and Flutter</li>
                      <li>• Implemented authentication systems with JWT and OAuth</li>
                      <li>• Integrated third-party APIs and payment gateways</li>
                      <li>• Optimized application performance and database queries</li>
                      <li>• Collaborated with UI/UX designers to implement pixel-perfect designs</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Vue.js', 'React Native', 'Flutter', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT', 'OAuth', 'REST APIs', 'GraphQL', 'Payment Integration', 'Performance Optimization'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-black rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="card-minimal p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-black text-lg">Junior Developer</h4>
                    <p className="text-body font-medium">Quest Enterprises Pakistan</p>
                    <p className="text-caption">Lahore, Pakistan</p>
                  </div>
                  <span className="text-caption">Jun 2022 - Feb 2023</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-body mb-3">
                    Started as a junior developer working on frontend development and gradually expanded to full-stack development. 
                    Contributed to 5 client projects and learned modern web development practices.
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-black">Key Responsibilities:</h5>
                    <ul className="text-body space-y-1 ml-4">
                      <li>• Developed responsive user interfaces using HTML, CSS, JavaScript, and React.js</li>
                      <li>• Created reusable components and implemented modern CSS frameworks</li>
                      <li>• Assisted in backend development with Node.js and Express.js</li>
                      <li>• Worked with databases including MongoDB and MySQL</li>
                      <li>• Participated in code reviews and learned best practices</li>
                      <li>• Collaborated with senior developers on complex features</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git', 'Responsive Design', 'Component Development'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-black rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="card-minimal p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-black text-lg">Web Developer Intern</h4>
                    <p className="text-body font-medium">Tech Qode</p>
                    <p className="text-caption">Lahore, Pakistan</p>
                  </div>
                  <span className="text-caption">Jan 2022 - May 2022</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-body mb-3">
                    Internship focused on learning web development fundamentals and working on real client projects. 
                    Gained hands-on experience with modern web technologies and development workflows.
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-black">Key Responsibilities:</h5>
                    <ul className="text-body space-y-1 ml-4">
                      <li>• Learned HTML, CSS, JavaScript, and basic React.js development</li>
                      <li>• Assisted in creating responsive website layouts and components</li>
                      <li>• Worked on bug fixes and minor feature implementations</li>
                      <li>• Participated in team meetings and learned development processes</li>
                      <li>• Gained experience with version control using Git</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React.js', 'Git', 'Responsive Design', 'Web Development'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-black rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h3 className="text-xl font-semibold text-black mb-6">
              Education
            </h3>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="card-minimal p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-black text-lg">Bachelor of Science in Computer Science</h4>
                    <p className="text-body font-medium">University of Management and Technology</p>
                    <p className="text-caption">Lahore, Pakistan</p>
                  </div>
                  <span className="text-caption">2019 - 2023</span>
                </div>
                <p className="text-body">
                  Graduated with distinction. Focused on software engineering, algorithms, data structures, and web development. 
                  Completed final year project on blockchain-based voting system.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="card-minimal p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-black text-lg">A-Levels</h4>
                    <p className="text-body font-medium">Lahore Grammar School</p>
                    <p className="text-caption">Lahore, Pakistan</p>
                  </div>
                  <span className="text-caption">2017 - 2019</span>
                </div>
                <p className="text-body">
                  Completed A-Levels with focus on Mathematics, Physics, and Computer Science. 
                  Developed strong analytical and problem-solving skills.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="card-minimal p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-black text-lg">O-Levels</h4>
                    <p className="text-body font-medium">Lahore Grammar School</p>
                    <p className="text-caption">Lahore, Pakistan</p>
                  </div>
                  <span className="text-caption">2015 - 2017</span>
                </div>
                <p className="text-body">
                  Completed O-Levels with distinction. Studied Mathematics, Physics, Chemistry, and Computer Studies. 
                  Developed foundation in logical thinking and scientific approach.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 