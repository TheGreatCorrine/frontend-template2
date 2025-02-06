import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { cn } from '../lib/utils'

export const DownloadButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative group",
        "inline-flex items-center gap-2.5 px-6 py-2.5",
        "bg-white/20 hover:bg-white/30",
        "backdrop-blur-xl",
        "border border-white/30",
        "rounded-full shadow-lg",
        "text-sm font-medium text-gray-800",
        "transition-all duration-300"
      )}
    >
      <Download className="w-4 h-4" />
      <span>Download CV</span>
      
      {/* 悬浮时的光晕效果 */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-white/80 via-white/50 to-white/80 opacity-0 group-hover:opacity-100 blur-md"
        initial={false}
        transition={{ duration: 0.2 }}
      />
      
      {/* 边框光晕 */}
      <motion.div
        className="absolute -inset-[1px] -z-20 rounded-full bg-white/40 opacity-0 group-hover:opacity-100 blur-sm"
        initial={false}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
} 