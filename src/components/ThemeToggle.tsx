import React from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/utils'
import { useTheme } from '../contexts/ThemeContext'

export const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme()

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      onClick={() => setIsDark(!isDark)}
      className={cn(
        "relative p-2.5 rounded-full",
        "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg",
        "transition-all duration-200"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-black"
        initial={false}
        animate={{
          opacity: isDark ? 1 : 0,
          scale: isDark ? 1 : 0.8
        }}
        transition={{ duration: 0.2 }}
      />
      <span className="relative z-10 block">
        {isDark ? (
          <Moon className="w-5 h-5 text-white" />
        ) : (
          <Sun className="w-5 h-5 text-black/60" />
        )}
      </span>
    </motion.button>
  )
} 