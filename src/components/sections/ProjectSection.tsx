import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  title: string
  subtitle: string
  description: string
  tags: string[]
  color: string
  imageUrl: string
}

const projects: Project[] = [
  {
    title: "Bitbo - Bitcoin Stats",
    subtitle: "Digital Product Design Solution",
    description: "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
    tags: ["UX Audit", "Design System"],
    color: "#F3E8FF",
    imageUrl: "/path/to/demo1.jpg"
  },
  {
    title: "Project Two",
    subtitle: "Mobile App Development",
    description: "A cross-platform mobile application focused on delivering seamless user experience with real-time data synchronization.",
    tags: ["React Native", "Firebase"],
    color: "#E8FFF3",
    imageUrl: "/path/to/demo2.jpg"
  },
  {
    title: "Project Three",
    subtitle: "Web Application",
    description: "Modern web application built with latest technologies focusing on performance and accessibility.",
    tags: ["React", "TypeScript"],
    color: "#FFE8E8",
    imageUrl: "/path/to/demo3.jpg"
  }
]

export const ProjectSection = () => {
  const [activeProject, setActiveProject] = React.useState(0)

  return (
    <section 
      id="projects"
      className="min-h-screen relative flex items-center justify-center py-20"
    >
      <div className="w-full max-w-6xl mx-auto px-4 relative">
        {/* 中央卡片 */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/30"
              style={{
                boxShadow: `
                  0 10px 30px -5px rgba(0, 0, 0, 0.05),
                  0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                  0 0 80px -20px ${projects[activeProject].color}66
                `
              }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* 项目图片 */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={projects[activeProject].imageUrl} 
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                </div>
                
                {/* 项目描述 */}
                <div className="p-10" style={{ backgroundColor: `${projects[activeProject].color}80` }}>
                  <h3 className="text-4xl font-semibold mb-4 text-pink-700 font-display">
                    {projects[activeProject].title}
                  </h3>
                  <h4 className="text-2xl mb-6 text-pink-600 font-display">
                    {projects[activeProject].subtitle}
                  </h4>
                  <p className="text-lg text-pink-500/90 mb-8">
                    {projects[activeProject].description}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {projects[activeProject].tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-pink-200 text-sm font-medium shadow-sm text-pink-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* 贴纸式项目选择器 */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {projects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-xl shadow-lg overflow-hidden border-2 ${activeProject === index ? 'border-white' : 'border-white/50'}`}
                style={{ 
                  transform: `rotate(${index * 2 - 2}deg)`,
                  backgroundColor: project.color,
                  boxShadow: activeProject === index 
                    ? '0 0 20px rgba(255, 255, 255, 0.5)' 
                    : '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-xl font-bold text-white/80">
                  {index + 1}
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* 左侧贴纸装饰 */}
          <motion.div 
            className="absolute -left-6 top-1/4 w-12 h-20 bg-[#FFD6CC] rounded-lg shadow-md"
            style={{ transform: 'rotate(-5deg)' }}
            whileHover={{ rotate: -2 }}
          />
          
          <motion.div 
            className="absolute -left-4 bottom-1/4 w-10 h-10 bg-[#E6F2FF] rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </div>
    </section>
  )
} 