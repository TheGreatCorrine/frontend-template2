import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectSection } from './components/sections/ProjectSection'
import { ContactSection } from './components/sections/ContactSection'
import { GlassNav } from './components/layout/GlassNav'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-gradient-to-b from-white via-[#FFE6E6]/20 via-[#FFD6CC]/25 via-[#FFDAB9]/20 to-[#FFE4E1]/25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#FFF5EE]/40 via-[#FFE6E6]/20 to-transparent" />
          <div className="relative">
            <Header />
            <main className="relative">
              <Hero />
              <SkillsSection />
              <ProjectSection />
              <ContactSection />
            </main>
            <GlassNav />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App 