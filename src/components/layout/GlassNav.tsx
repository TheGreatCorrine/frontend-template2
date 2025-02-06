import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export const GlassNav = () => {
  const [active, setActive] = React.useState('home')
  const sections = ['home', 'skills', 'projects', 'contact']
  const [hoveredTab, setHoveredTab] = React.useState<string | null>(null)

  // 监听滚动位置来更新激活的导航项
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const scrollThreshold = windowHeight / 2

      const sectionElements = sections.map(section => ({
        id: section,
        element: document.getElementById(section)
      }))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= scrollThreshold) {
            setActive(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = element.offsetTop
      window.scrollTo({
        top: sectionId === 'home' ? 0 : offset,
        behavior: 'smooth'
      })
      setActive(sectionId)
    }
  }

  return (
    <div className="fixed inset-x-0 bottom-8 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-auto"
      >
        <nav className="relative bg-white/20 backdrop-blur-xl px-8 py-2.5 rounded-full border border-white/30 shadow-lg">
          <div className="flex items-center gap-2 relative">
            {/* 滑动背景指示器 */}
            <motion.div
              className="absolute rounded-full bg-white/80 ring-1 ring-gray-300/50"
              layoutId="navbar-indicator"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              style={{
                width: 'var(--width)',
                height: 'var(--height)',
                top: 'var(--top)',
                left: 'var(--left)',
              }}
            />

            {sections.map((section) => (
              <motion.button
                key={section}
                type="button"
                ref={(el) => {
                  if (el && section === active) {
                    const rect = el.getBoundingClientRect()
                    el.style.setProperty('--width', `${rect.width}px`)
                    el.style.setProperty('--height', `${rect.height}px`)
                    el.style.setProperty('--top', `0px`)
                    el.style.setProperty('--left', `${el.offsetLeft}px`)
                  }
                }}
                onClick={() => scrollToSection(section)}
                onHoverStart={() => setHoveredTab(section)}
                onHoverEnd={() => setHoveredTab(null)}
                className={cn(
                  "relative px-6 py-2 rounded-full text-sm font-medium cursor-pointer group",
                  "transition-colors duration-200",
                  active === section 
                    ? "text-gray-800 ring-1 ring-gray-300/50" 
                    : "text-black/40 hover:text-black/60"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/80 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-white/80 via-white/50 to-white/80 opacity-0 group-hover:opacity-100 blur-sm -z-10"
                  initial={false}
                  transition={{ duration: 0.2 }}
                />
                <span className="relative z-10">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </motion.button>
            ))}
          </div>
        </nav>
      </motion.div>
    </div>
  )
} 