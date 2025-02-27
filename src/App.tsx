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
        <div className="relative min-h-screen bg-[#FFF0F0]">
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