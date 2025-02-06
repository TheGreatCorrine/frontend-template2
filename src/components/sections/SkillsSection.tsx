import React from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Image } from '../common/Image'
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiVuedotjs,
  SiAngular,
  SiDjango,
  SiSpring,
  SiFlask,
  SiExpress,
  SiTailwindcss,
  SiDocker
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'

// 按类别组织技能
const skillCategories = {
  languages: [
    { icon: SiPython, name: 'Python', delay: 0.4 },
    { icon: DiJava, name: 'Java', delay: 0.6 },
    { icon: SiC, name: 'C', delay: 0.8 },
    { icon: SiCplusplus, name: 'C++', delay: 1.0 },
    { icon: SiDotnet, name: 'C#', delay: 1.2 },
    { icon: SiJavascript, name: 'JavaScript', delay: 1.4 },
    { icon: SiTypescript, name: 'TypeScript', delay: 1.6 },
    { icon: SiHtml5, name: 'HTML', delay: 1.8 },
    { icon: SiCss3, name: 'CSS', delay: 2.0 },
  ],
  databases: [
    { icon: SiPostgresql, name: 'PostgreSQL', delay: 2.2 },
    { icon: SiMysql, name: 'MySQL', delay: 2.4 },
    { icon: SiMongodb, name: 'MongoDB', delay: 2.6 },
  ],
  frameworks: [
    { icon: SiReact, name: 'React', delay: 2.8 },
    { icon: SiVuedotjs, name: 'Vue', delay: 3.0 },
    { icon: SiAngular, name: 'Angular', delay: 3.2 },
    { icon: SiDjango, name: 'Django', delay: 3.4 },
    { icon: SiSpring, name: 'Spring', delay: 3.6 },
    { icon: SiFlask, name: 'Flask', delay: 3.8 },
    { icon: SiExpress, name: 'Express', delay: 4.0 },
  ],
  tools: [
    { icon: SiNodedotjs, name: 'Node.js', delay: 4.2 },
    { icon: SiDocker, name: 'Docker', delay: 4.4 },
    { icon: SiGit, name: 'Git', delay: 4.6 },
    { icon: SiTailwindcss, name: 'Tailwind', delay: 4.8 },
  ],
}

// 展平数组用于圆形布局
const skills = Object.values(skillCategories).flat()

const bubbleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay
    }
  }),
  arranged: (params: { index: number; category: keyof typeof skillCategories }) => {
    const { index, category } = params
    const categoryPositions = {
      languages: { 
        x: 400,        // 减小距离
        y: -200,
        itemWidth: 140, // 减小间距
        align: 'right',
        itemsPerRow: 3
      },
      frameworks: { 
        x: 400,
        y: 50,
        itemWidth: 140,
        align: 'right',
        itemsPerRow: 3
      },
      databases: { 
        x: -400,
        y: -200,
        itemWidth: 140,
        align: 'left',
        itemsPerRow: 2
      },
      tools: { 
        x: -400,
        y: 50,
        itemWidth: 140,
        align: 'left',
        itemsPerRow: 2
      }
    }

    const pos = categoryPositions[category as keyof typeof categoryPositions]
    const row = Math.floor(index / pos.itemsPerRow)
    const column = index % pos.itemsPerRow

    return {
      x: pos.align === 'right'
        ? pos.x - (column * pos.itemWidth)
        : pos.x + (column * pos.itemWidth),
      y: pos.y + (row * 35),  // 减小垂直间距
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
        delay: 0
      }
    }
  }
}

// 分类标题的动画变体
const categoryLabelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 3 }  // 等待技能重排完成后显示
  }
}

// 分类标题位置
const categoryLabelPositions = {
  languages: { x: 400, y: -240 },
  frameworks: { x: 400, y: 20 },
  databases: { x: -400, y: -240 },
  tools: { x: -400, y: 20 }
}

// 添加分类卡片的动画变体
const categoryCardVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      delay: 2.5,  // 等待气泡重排后显示
      duration: 0.5
    }
  }
}

// 分类卡片位置
const categoryCardPositions = {
  languages: { x: 400, y: -200 },
  frameworks: { x: 400, y: 100 },
  databases: { x: -400, y: -200 },
  tools: { x: -400, y: 100 }
}

// 添加新的技能卡片动画变体
const skillCardVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.5, // 在气泡消失后显示
      duration: 0.6,
      type: "spring",
      bounce: 0.3
    }
  }
}

// 中央卡片动画变体
const centerCardVariants = {
  initial: { 
    opacity: 1,
    scale: 1,
    x: '-50%',  // 保持居中
    y: '-50%'   // 保持居中
  },
  dimmed: { 
    opacity: 0.3,
    scale: 0.95,
    x: '-50%',  // 保持居中
    y: '-50%',  // 保持居中
    transition: { 
      delay: 1.2,
      duration: 0.4 
    }
  }
}

// 定义卡片尺寸和象限位置
const CARD_WIDTH = 300
const CARD_HEIGHT = 200  // 估算高度，根据实际内容调整
const SECTION_PADDING = 100  // 与边缘的安全距离

// 定义象限中心点位置（基于视口宽度）
const quadrantPositions = {
  languages: { 
    x: window.innerWidth * 0.75 - CARD_WIDTH/2,  // 右上象限，考虑卡片宽度
    y: window.innerHeight * 0.25 - CARD_HEIGHT/2
  },
  frameworks: { 
    x: window.innerWidth * 0.75 - CARD_WIDTH/2,  // 右下象限
    y: window.innerHeight * 0.75 - CARD_HEIGHT/2
  },
  databases: { 
    x: window.innerWidth * 0.25 - CARD_WIDTH/2,  // 左上象限
    y: window.innerHeight * 0.25 - CARD_HEIGHT/2
  },
  tools: { 
    x: window.innerWidth * 0.25 - CARD_WIDTH/2,  // 左下象限
    y: window.innerHeight * 0.75 - CARD_HEIGHT/2
  }
}

export const SkillsSection = () => {
  const ref = React.useRef(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
    once: false
  })
  const [arrangement, setArrangement] = React.useState<'circle' | 'arranged'>('circle')

  const lastBubbleDelay = Math.max(...skills.map(skill => skill.delay))
  const circleFormationTime = lastBubbleDelay + 0.8  // 0.8 是单个气泡的动画时长

  // 添加窗口尺寸状态
  const [dimensions, setDimensions] = React.useState<{ width: number; height: number }>({ width: 0, height: 0 })

  // 监听窗口尺寸变化
  React.useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // 计算卡片位置
  const getCardPosition = (category: keyof typeof skillCategories) => {
    const sectionWidth = dimensions.width
    const sectionHeight = dimensions.height
    
    const positions = {
      languages: { 
        x: (sectionWidth * 0.75) - (CARD_WIDTH/2),
        y: (sectionHeight * 0.25) - (CARD_HEIGHT/2)  // 减去卡片高度的一半
      },
      frameworks: { 
        x: (sectionWidth * 0.75) - (CARD_WIDTH/2),
        y: (sectionHeight * 0.75) - (CARD_HEIGHT/2)  // 减去卡片高度的一半
      },
      databases: { 
        x: (sectionWidth * 0.25) - (CARD_WIDTH/2),
        y: (sectionHeight * 0.25) - (CARD_HEIGHT/2)  // 减去卡片高度的一半
      },
      tools: { 
        x: (sectionWidth * 0.25) - (CARD_WIDTH/2),
        y: (sectionHeight * 0.75) - (CARD_HEIGHT/2)  // 减去卡片高度的一半
      }
    }

    return positions[category]
  }

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setArrangement('arranged')
      }, (circleFormationTime + 1) * 1000)  // 从 2 秒改为 1 秒
      return () => clearTimeout(timer)
    } else {
      setArrangement('circle')
    }
  }, [isInView, circleFormationTime])

  const getRandomPosition = (index: number) => {
    const totalSkills = skills.length
    const radius = 200
    const angle = (index / totalSkills) * Math.PI * 2
    
    // 使用 transform 的 translate 来调整位置，考虑气泡宽度
    const x = Math.cos(angle) * radius - 50  // 减去气泡宽度的一半
    const y = Math.sin(angle) * radius - 20  // 减去气泡高度的一半
    
    return { x, y }
  }

  return (
    <section 
      ref={ref}
      id="skills" 
      className="min-h-screen relative bg-transparent py-20"
    >
      {/* 增强色斑效果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 主色斑 */}
        <div className="absolute top-1/3 right-0 w-[900px] h-[900px] bg-[#B0E0E6]/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-[800px] h-[800px] bg-[#E6E6FA]/45 rounded-full blur-[130px]" />
        
        {/* 过渡色斑 - 与 Projects section 衔接 */}
        <div className="absolute bottom-0 right-1/4 w-[900px] h-[500px] bg-[#FFC0CB]/30 rounded-full blur-[150px]" />
      </div>
      <div className="relative w-full h-screen max-h-[900px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isInView && (
            <>
              {/* 中心卡片 */}
              <motion.div
                variants={centerCardVariants}
                initial="initial"
                animate={arrangement === 'arranged' ? 'dimmed' : 'initial'}
                className="absolute left-1/2 top-1/2 max-w-sm z-0"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                  {/* 工作场景图片 */}
                  <div className="w-full">
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="relative aspect-[4/3] overflow-hidden"
                    >
                      <Image
                        src="/skills.jpg"
                        alt="Workspace"
                        width={320}
                        height={240}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  </div>

                  {/* 文字部分 */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="p-5 text-center"
                  >
                    <p className="text-black/70 text-base">
                      As someone with 10 years of experience, I have developed expertise in the following technologies.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 技能气泡 - 只在圆形布局时显示 */}
              {arrangement === 'circle' && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  {/* 原有气泡代码保持不变 */}
                  {Object.entries(skillCategories).map(([category, items]) =>
                    items.map((skill, categoryIndex) => {
                      const { x, y } = getRandomPosition(skills.indexOf(skill))
                      
                      return (
                        <motion.div
                          key={skill.name}
                          custom={skill.delay}
                          variants={bubbleVariants}
                          initial="hidden"
                          animate="visible"
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute left-1/2 top-1/2"
                          style={arrangement === 'circle' ? { x, y } : undefined}
                        >
                          <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                            <skill.icon className="w-5 h-5 text-black/70" />
                            <span className="text-sm font-medium text-black/70">{skill.name}</span>
                          </div>
                        </motion.div>
                      )
                    })
                  )}
                </div>
              )}

              {/* 新的技能卡片 */}
              {arrangement === 'arranged' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {Object.entries(skillCategories).map(([category, skills]) => {
                    const position = getCardPosition(category as keyof typeof skillCategories)
                    
                    return (
                      <motion.div
                        key={category}
                        variants={skillCardVariants}
                        initial="hidden"
                        animate="visible"
                        className="absolute"
                        style={{
                          left: position.x,
                          top: position.y,
                          width: CARD_WIDTH,
                          height: CARD_HEIGHT,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 w-[300px]">
                          <h3 className="text-lg font-medium text-black/70 mb-4">
                            {category === 'languages' && 'Programming Languages'}
                            {category === 'frameworks' && 'Frameworks'}
                            {category === 'databases' && 'Databases'}
                            {category === 'tools' && 'Other Tools'}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                              <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-lg">
                                <skill.icon className="w-4 h-4 text-black/70" />
                                <span className="text-sm text-black/70">{skill.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 