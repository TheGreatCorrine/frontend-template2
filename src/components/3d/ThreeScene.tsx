import React from 'react'
import { motion } from 'framer-motion'

const ThreeScene = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-neutral-950 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">我的项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 项目卡片将在这里添加 */}
        </div>
      </div>
    </motion.section>
  )
}

export default ThreeScene 