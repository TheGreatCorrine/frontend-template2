import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image } from '../common/Image'
import { 
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiC, SiCplusplus, SiDotnet,
  SiPostgresql, SiMysql, SiMongodb, SiReact, SiNodedotjs, SiGit, SiVuedotjs,
  SiAngular, SiDjango, SiSpring, SiFlask, SiExpress, SiTailwindcss, SiDocker
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'

// 按类别组织技能
const skillCategories = {
  languages: {
    title: "Programming Languages",
    color: "#F3E8FF", // 淡紫色
    skills: [
      { icon: SiPython, name: 'Python' },
      { icon: DiJava, name: 'Java' },
      { icon: SiC, name: 'C' },
      { icon: SiCplusplus, name: 'C++' },
      { icon: SiDotnet, name: 'C#' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiHtml5, name: 'HTML' },
      { icon: SiCss3, name: 'CSS' },
    ]
  },
  databases: {
    title: "Databases",
    color: "#E8FFF3", // 淡绿色
    skills: [
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: SiMysql, name: 'MySQL' },
      { icon: SiMongodb, name: 'MongoDB' },
    ]
  },
  frameworks: {
    title: "Frameworks",
    color: "#FFE8E8", // 淡粉色
    skills: [
      { icon: SiReact, name: 'React' },
      { icon: SiVuedotjs, name: 'Vue' },
      { icon: SiAngular, name: 'Angular' },
      { icon: SiDjango, name: 'Django' },
      { icon: SiSpring, name: 'Spring' },
      { icon: SiFlask, name: 'Flask' },
      { icon: SiExpress, name: 'Express' },
    ]
  },
  tools: {
    title: "Other Tools",
    color: "#E6F2FF", // 淡蓝色
    skills: [
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiDocker, name: 'Docker' },
      { icon: SiGit, name: 'Git' },
      { icon: SiTailwindcss, name: 'Tailwind' },
    ]
  }
}

type CategoryKey = keyof typeof skillCategories;
const categoryKeys = Object.keys(skillCategories) as CategoryKey[];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState<CategoryKey>('languages');

  return (
    <section 
      id="skills" 
      className="min-h-screen relative flex items-center justify-center py-20"
    >
      <div className="w-full max-w-6xl mx-auto px-4 relative">
        {/* 中央卡片 */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/30"
              style={{
                boxShadow: `
                  0 10px 30px -5px rgba(0, 0, 0, 0.05),
                  0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                  0 0 80px -20px ${skillCategories[activeCategory].color}66
                `
              }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* 左侧图片/介绍 */}
                <div className="relative p-10 flex flex-col justify-center">
                  <h3 className="text-4xl font-semibold mb-6 text-pink-700 font-display">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-lg text-pink-500/90 mb-8">
                    With over 10 years of experience, I've developed expertise in various {activeCategory === 'languages' ? 'programming languages' : activeCategory}.
                  </p>
                  
                  {/* 添加一些装饰元素替代图片 */}
                  <div className="relative h-48 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-32 h-32 rounded-full"
                      style={{ backgroundColor: skillCategories[activeCategory].color, opacity: 0.3 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative z-10 text-6xl"
                    >
                      {activeCategory === 'languages' && <SiJavascript />}
                      {activeCategory === 'databases' && <SiPostgresql />}
                      {activeCategory === 'frameworks' && <SiReact />}
                      {activeCategory === 'tools' && <SiDocker />}
                    </motion.div>
                  </div>
                </div>
                
                {/* 右侧技能列表 */}
                <div className="p-10" style={{ backgroundColor: `${skillCategories[activeCategory].color}80` }}>
                  <div className="grid grid-cols-2 gap-4">
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-pink-100 shadow-sm hover:bg-white/70 hover:border-pink-200 hover:shadow-md transition-all duration-300 group"
                        whileHover={{ 
                          scale: 1.03,
                          y: -2
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <skill.icon className="w-6 h-6 text-pink-500 group-hover:text-pink-600 transition-colors" />
                        <span className="text-base font-medium text-pink-600 group-hover:text-pink-700 transition-colors">{skill.name}</span>
                        
                        {/* 添加鼠标悬停时的光晕效果 */}
                        <motion.div
                          className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-pink-100/50 via-white/70 to-pink-100/50 opacity-0 group-hover:opacity-100 blur-sm"
                          initial={false}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* 贴纸式分类选择器 */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {categoryKeys.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-xl shadow-lg overflow-hidden border-2 ${activeCategory === category ? 'border-white' : 'border-white/50'}`}
                style={{ 
                  transform: `rotate(${index * 2 - 2}deg)`,
                  backgroundColor: skillCategories[category].color,
                  boxShadow: activeCategory === category 
                    ? '0 0 20px rgba(255, 255, 255, 0.5)' 
                    : '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {category === 'languages' && <SiJavascript className="w-6 h-6 text-white/80" />}
                  {category === 'databases' && <SiPostgresql className="w-6 h-6 text-white/80" />}
                  {category === 'frameworks' && <SiReact className="w-6 h-6 text-white/80" />}
                  {category === 'tools' && <SiDocker className="w-6 h-6 text-white/80" />}
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* 左侧贴纸装饰 */}
          <motion.div 
            className="absolute -left-6 top-1/4 w-12 h-12 bg-[#FFD6CC] rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
          />
          
          <motion.div 
            className="absolute -left-4 bottom-1/4 w-14 h-20 bg-[#E6F2FF] rounded-lg shadow-md"
            style={{ transform: 'rotate(5deg)' }}
            whileHover={{ rotate: 2 }}
          />
        </div>
      </div>
    </section>
  )
} 