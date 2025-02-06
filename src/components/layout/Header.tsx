import React from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '../ThemeToggle'
import { LanguageToggle } from '../LanguageToggle'

export const Header = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 right-6 flex items-center gap-3 z-40"
    >
      <LanguageToggle />
      <ThemeToggle />
    </motion.div>
  )
} 