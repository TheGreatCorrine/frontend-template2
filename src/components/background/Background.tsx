import React from 'react'
import { motion } from 'framer-motion'

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 白色基础 */}
      <div className="absolute inset-0 bg-white" />
      
      {/* 主内容区域 */}
      <div className="absolute inset-12">
        {/* 主渐变背景 */}
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          {/* 基础颜色层 */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-rose-100 to-neutral-200" />
          
          {/* 径向渐变遮罩 - 从边缘向内渐变到透明 */}
          <div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,transparent_0%,transparent_45%,white_75%,white_100%)] blur-2xl" />
          <div className="absolute inset-[-25%] bg-[radial-gradient(circle_at_center,transparent_0%,transparent_35%,white_65%,white_100%)] blur-xl" />
        </div>
        
        {/* 内部光晕效果 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-orange-200/60 via-rose-200/40 to-transparent blur-[60px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-orange-300/50 via-rose-300/40 to-transparent blur-[40px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-rose-200/50 via-orange-200/40 to-transparent blur-[30px]" />
        </div>
      </div>

      {/* 覆盖在内容上方的白色光晕 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 四角大型白色光晕 */}
        <div className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-radial from-white via-white/80 to-transparent blur-[80px]" />
        <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-gradient-radial from-white via-white/80 to-transparent blur-[80px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-radial from-white via-white/80 to-transparent blur-[80px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-gradient-radial from-white via-white/80 to-transparent blur-[80px]" />
        
        {/* 上下边缘柔化 */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent blur-lg" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent blur-lg" />
        
        {/* 边缘补充光晕 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/90 via-white/50 to-transparent blur-[60px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/90 via-white/50 to-transparent blur-[60px]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[800px] bg-gradient-radial from-white/90 via-white/50 to-transparent blur-[60px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[800px] bg-gradient-radial from-white/90 via-white/50 to-transparent blur-[60px]" />
      </div>
    </div>
  )
} 