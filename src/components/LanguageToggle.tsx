import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'
import { cn } from '../lib/utils'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from 'react-i18next'

// 修改语言配置
const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'zh', label: '中文' }
]

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { i18n } = useTranslation()

  // 检测系统语言
  React.useEffect(() => {
    const userLanguage = navigator.language.toLowerCase()
    if (userLanguage.startsWith('zh')) {
      setLanguage('中文')
      i18n.changeLanguage('zh')
    } else if (userLanguage.startsWith('fr')) {
      setLanguage('FR')
      i18n.changeLanguage('fr')
    } else {
      setLanguage('EN')
      i18n.changeLanguage('en')
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handleLanguageChange = async (lang: string) => {
    console.log('Changing language to:', lang)
    setLanguage(lang)
    
    // 映射语言代码
    const langCode = lang === '中文' ? 'zh' : lang.toLowerCase()
    console.log('Using language code:', langCode)
    
    // i18next 会自动触发 languageChanged 事件
    await i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={menuRef}>
      <motion.button
        type="button"
        onClick={handleClick}
        className={cn(
          "relative px-3 py-2 rounded-full text-sm font-medium cursor-pointer",
          "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg",
          "transition-all duration-200 flex items-center gap-2"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span>{language}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-full mt-2 z-50"
          >
            <div className="flex flex-col gap-1 p-1 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
              {['EN', 'FR', '中文'].filter(lang => lang !== language).map((lang) => (
                <motion.button
                  key={lang}
                  type="button"
                  onClick={() => handleLanguageChange(lang)}
                  className={cn(
                    "relative px-3 py-2 rounded-full text-sm font-medium cursor-pointer",
                    "transition-all duration-200 whitespace-nowrap",
                    "text-black/40 hover:text-black/60"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 