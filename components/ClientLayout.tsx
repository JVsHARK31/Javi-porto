'use client'

import { ReactNode, useEffect, useState } from 'react'
import ThemeProvider from './ThemeProvider'
import SakuraPetals from './SakuraPetals'
import Navbar from './Navbar'
import ScrollProgress from './ScrollProgress'
import ParticleBackground from './ParticleBackground'
import LoadingScreen from './LoadingScreen'
import MouseFollower from './MouseFollower'
import WaveAnimation from './WaveAnimation'
import FloatingElements from './FloatingElements'
import MusicPlayer from './MusicPlayer'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <ThemeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <FloatingElements />
      <WaveAnimation />
      <ParticleBackground />
      <SakuraPetals />
      {!isMobile && <MouseFollower />}
      <MusicPlayer />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
    </ThemeProvider>
  )
}
