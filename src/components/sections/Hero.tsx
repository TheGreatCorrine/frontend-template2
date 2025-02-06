import React from 'react'
import { motion } from 'framer-motion'
import { Image } from '../common/Image'
import { Background } from '../background/Background'
import { DownloadButton } from '../DownloadButton'

export const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen w-full">
      {/* 增强色斑效果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 主色斑 */}
        <div className="absolute top-1/4 -left-20 w-[800px] h-[800px] bg-[#FFB6C1]/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-[700px] h-[700px] bg-[#FFE4B5]/45 rounded-full blur-[120px]" />
        
        {/* 过渡色斑 - 与 Skills section 衔接 */}
        <div className="absolute bottom-0 left-1/3 w-[900px] h-[500px] bg-[#B0E0E6]/30 rounded-full blur-[150px]" />
      </div>
      <Background />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen relative bg-transparent flex items-center justify-center"
      >
        <div className="w-full max-w-5xl mx-auto px-4 flex items-center">
          {/* 左侧文字 */}
          <div className="flex-1 max-w-lg pl-12">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-normal text-black/70 mb-4"
            >
              Software Developer
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-black/70"
            >
              Over a decade of experience in building exceptional websites and digital products
            </motion.p>
          </div>

          {/* 右侧头像和按钮 */}
          <div className="flex-1 flex justify-center">
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-48 h-48 relative"
              >
                <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/avatar.jpg"
                    alt="Profile"
                    width={192}
                    height={192}
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex justify-center"
              >
                <DownloadButton />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
} 