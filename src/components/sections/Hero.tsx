import React from 'react'
import { motion } from 'framer-motion'
import { Image } from '../common/Image'
import { Background } from '../background/Background'
import { DownloadButton } from '../DownloadButton'

export const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen w-full">
      <Background />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen relative flex items-center justify-center"
      >
        <div className="w-full max-w-5xl mx-auto px-4 flex items-center">
          {/* 左侧文字 */}
          <div className="flex-1 max-w-lg pl-12">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-pink-600 mb-4 font-display"
            >
              Software Developer
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-pink-500/80 font-medium"
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