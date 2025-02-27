import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaTiktok, FaWeixin, FaYoutube } from 'react-icons/fa'
import { SiZhihu } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { useAutoTranslation } from '../../services/translation'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/your-profile',
    color: '#0077B5'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/your-username',
    color: '#333'
  },
  {
    name: 'Email',
    icon: MdEmail,
    url: 'mailto:your.email@gmail.com',
    color: '#EA4335'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/your-profile',
    color: '#E4405F'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/your-handle',
    color: '#1DA1F2'
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    url: 'https://tiktok.com/@your-handle',
    color: '#000000'
  },
  {
    name: 'WeChat',
    icon: FaWeixin,
    url: '#',  // 可以设置为弹出二维码
    color: '#07C160'
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://youtube.com/@your-channel',
    color: '#FF0000'
  },
  {
    name: 'Zhihu',
    icon: SiZhihu,
    url: 'https://zhihu.com/people/your-id',
    color: '#0084FF'
  }
]

export const ContactSection = () => {
  const { i18n } = useTranslation()
  const { autoTranslate, isLoading } = useAutoTranslation()
  const [translations, setTranslations] = React.useState({
    title: "Get in Touch",
    subtitle: "Feel free to reach out or just say hello"
  })

  // 添加留言板状态
  const [message, setMessage] = React.useState({
    name: '',
    email: '',
    content: ''
  })

  const updateTranslations = React.useCallback(async () => {
    try {
      console.log('Current language:', i18n.language)
      const [translatedTitle, translatedSubtitle] = await Promise.all([
        autoTranslate(translations.title),
        autoTranslate(translations.subtitle)
      ])

      console.log('New translations:', { translatedTitle, translatedSubtitle })
      setTranslations({
        title: translatedTitle,
        subtitle: translatedSubtitle
      })
    } catch (error) {
      console.error('Translation failed:', error)
    }
  }, [autoTranslate, translations.title, translations.subtitle, i18n.language])

  // 使用 i18next 的语言变化事件
  React.useEffect(() => {
    // 初始翻译
    updateTranslations()
    
    // 监听 i18next 的语言变化事件
    i18n.on('languageChanged', updateTranslations)
    
    return () => {
      i18n.off('languageChanged', updateTranslations)
    }
  }, [updateTranslations, i18n])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加发送消息的逻辑
    console.log('Message submitted:', message)
    // 清空表单
    setMessage({ name: '', email: '', content: '' })
  }

  // 在组件内部添加动画控制
  const titleControls = useAnimationControls()

  React.useEffect(() => {
    const sequence = async () => {
      // 从左边冲进来，带有减速效果
      await titleControls.start({
        x: 0,
        opacity: 1,
        transition: { 
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8
        }
      })
      
      // 等待一下
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // 向右冲出
      await titleControls.start({
        x: 1000,
        opacity: 0,
        transition: { 
          type: "spring",
          stiffness: 200,
          damping: 10,
          duration: 0.5
        }
      })
      
      // 最终定位
      await titleControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0 }
      })
    }
    
    sequence()
  }, [titleControls])

  return (
    <section 
      id="contact" 
      className="min-h-screen relative flex items-center justify-center py-20"
    >
      <div className="w-full max-w-6xl mx-auto px-4 relative">
        <div className="relative">
          <motion.h2 
            animate={titleControls}
            initial={{ opacity: 0, x: -1000 }}
            className="text-5xl font-semibold text-pink-700 mb-8 font-display tracking-wide"
          >
            {isLoading ? translations.title : translations.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-white/30"
            style={{
              boxShadow: `
                0 10px 30px -5px rgba(0, 0, 0, 0.05),
                0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                0 0 80px -20px rgba(255, 240, 240, 0.5)
              `
            }}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-r border-white/10 bg-white/10">
                <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
                  <div className="flex flex-col gap-3">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-3 rounded-xl bg-white/50 hover:bg-white/60 transition-colors backdrop-blur-sm border border-white/20"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="p-2.5 rounded-lg bg-white/70 shadow-md">
                          <link.icon 
                            className="w-5 h-5" 
                            style={{ color: link.color }}
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-black/70">
                            {link.name}
                          </span>
                          <p className="text-xs text-black/50 mt-0.5">
                            {link.url.startsWith('mailto:') 
                              ? link.url.replace('mailto:', '') 
                              : link.url.replace(/https?:\/\//, '')}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm">
                <div className="mb-6">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-black/60 text-center"
                  >
                    {isLoading ? translations.subtitle : translations.subtitle}
                  </motion.p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-sm font-medium text-pink-600">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={message.name}
                        onChange={(e) => setMessage(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-1.5 rounded-lg bg-white/60 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-medium text-black/60">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={message.email}
                        onChange={(e) => setMessage(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3 py-1.5 rounded-lg bg-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-medium text-black/60">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message.content}
                      onChange={(e) => setMessage(prev => ({ ...prev, content: e.target.value }))}
                      rows={2}
                      className="w-full px-3 py-1.5 rounded-lg bg-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm resize-none"
                      required
                    />
                  </div>
                  <div className="text-right">
                    <motion.button
                      type="submit"
                      className="px-6 py-2 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors shadow-md"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -left-6 top-1/4 w-12 h-12 bg-[#FFD6CC] rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
          />
          
          <motion.div 
            className="absolute -left-4 bottom-1/4 w-14 h-20 bg-[#E6F2FF] rounded-lg shadow-md"
            style={{ transform: 'rotate(5deg)' }}
            whileHover={{ rotate: 2 }}
          />
        </div>
      </div>
    </section>
  )
} 