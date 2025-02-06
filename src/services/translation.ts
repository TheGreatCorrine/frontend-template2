import { useTranslation } from 'react-i18next'
import React from 'react'

// 使用备选的公共实例
const LIBRE_TRANSLATE_API_URL = 'https://translate.argosopentech.com/translate'

// 语言代码映射
const languageMap: { [key: string]: string } = {
  'zh': 'zh',
  'fr': 'fr',
  'en': 'en'
}

export async function translateText(text: string, targetLang: string) {
  try {
    console.log('Translating:', text, 'to', targetLang)  // 调试日志
    
    // 从完整语言代码中提取基础语言代码
    const baseTargetLang = languageMap[targetLang] || targetLang.split('-')[0]
    
    const response = await fetch(LIBRE_TRANSLATE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: baseTargetLang,
        format: 'text'
      })
    })

    if (!response.ok) {
      console.error('Translation API error:', await response.text())
      return text
    }

    const data = await response.json()
    console.log('Translation response:', data)  // 调试日志
    
    return data.translatedText || text

  } catch (error) {
    console.error('Translation error:', error)
    return text
  }
}

// 创建一个 hook 来处理动态翻译
export function useAutoTranslation() {
  const { i18n } = useTranslation()
  const [isLoading, setIsLoading] = React.useState(false)
  
  const autoTranslate = React.useCallback(async (text: string) => {
    const currentLang = i18n.language
    if (currentLang === 'en') return text
    
    // 添加缓存以避免重复翻译
    const cacheKey = `translation_${text}_${currentLang}`
    const cached = localStorage.getItem(cacheKey)
    if (cached) return cached

    setIsLoading(true)
    try {
      console.log('Starting translation for language:', currentLang)  // 添加调试日志
      const translatedText = await translateText(text, currentLang)
      console.log('Translation result:', translatedText)  // 添加调试日志
      if (translatedText !== text) {
        localStorage.setItem(cacheKey, translatedText)
      }
      return translatedText
    } finally {
      setIsLoading(false)
    }
  }, [i18n.language])

  return { autoTranslate, isLoading }
} 