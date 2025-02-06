import React from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface Project {
  title: string
  subtitle: string
  description: string
  tags: string[]
  color: string
  image?: string
  imageUrl: string
  isReversed: boolean
}

const projects: Project[] = [
  {
    title: "Bitbo - Bitcoin Stats",
    subtitle: "Digital Product Design Solution",
    description: "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
    tags: ["UX Audit", "Design System"],
    color: "#F3E8FF",
    imageUrl: "/path/to/demo1.jpg",
    isReversed: false
  },
  {
    title: "Project Two",
    subtitle: "Mobile App Development",
    description: "A cross-platform mobile application focused on delivering seamless user experience with real-time data synchronization.",
    tags: ["React Native", "Firebase"],
    color: "#E8FFF3",
    imageUrl: "/path/to/demo2.jpg",
    isReversed: true
  },
  {
    title: "Project Three",
    subtitle: "Web Application",
    description: "Modern web application built with latest technologies focusing on performance and accessibility.",
    tags: ["React", "TypeScript"],
    color: "#FFE8E8",
    imageUrl: "/path/to/demo3.jpg",
    isReversed: false
  }
]

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectSection = () => {
  return (
    <section 
      id="projects"
      className="min-h-screen relative bg-transparent"
    >
      {/* 增强色斑效果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 主色斑 */}
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-[#FFC0CB]/45 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[900px] h-[900px] bg-[#98FB98]/40 rounded-full blur-[140px]" />
        
        {/* 过渡色斑 - 与 Contact section 衔接 */}
        <div className="absolute bottom-0 left-1/3 w-[900px] h-[500px] bg-[#FFB6C1]/35 rounded-full blur-[150px]" />
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      {project.isReversed ? (
        <>
          <Summary project={project} />
          <DemoImage project={project} />
        </>
      ) : (
        <>
          <DemoImage project={project} />
          <Summary project={project} />
        </>
      )}
    </motion.div>
  )
}

const Summary = ({ project }: { project: Project }) => (
  <div 
    className="p-12 rounded-3xl backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
    style={{ 
      backgroundColor: `${project.color}dd`,  // 增加透明度
      boxShadow: `
        0 4px 6px -1px rgba(0, 0, 0, 0.05),
        0 10px 15px -3px rgba(0, 0, 0, 0.05),
        0 0 0 1px rgba(255, 255, 255, 0.1) inset,
        0 0 80px -20px ${project.color}66
      `
    }}
  >
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl font-medium mb-4"
    >
      {project.title}
    </motion.h3>
    <motion.h4
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-2xl mb-6"
    >
      {project.subtitle}
    </motion.h4>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg text-black/60 mb-8"
    >
      {project.description}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex gap-3 flex-wrap"
    >
      {project.tags.map(tag => (
        <span 
          key={tag}
          className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 text-sm font-medium shadow-sm"
        >
          {tag}
        </span>
      ))}
    </motion.div>
  </div>
)

const DemoImage = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-sm border border-white/20"
  >
    <div className="relative group">
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none" />
    </div>
  </motion.div>
) 