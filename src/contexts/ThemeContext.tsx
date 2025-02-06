import React, { createContext, useContext, useEffect } from 'react'

type ThemeContextType = {
  isDark: boolean
  setIsDark: (dark: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = React.useState(false)

  useEffect(() => {
    // 检查系统主题偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
    document.documentElement.classList.toggle('dark', prefersDark)
  }, [])

  const handleThemeChange = (dark: boolean) => {
    console.log('Changing theme to:', dark ? 'dark' : 'light')
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 