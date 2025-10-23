'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { AnimatedText, GlowText } from './AnimatedText'
import { WordReveal, CharReveal } from './SmoothTextReveal'
import MagneticButton from './MagneticButton'
import { useState, useEffect } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      damping: 20,
      stiffness: 80,
      mass: 0.8,
      ease: [0.48, 0.15, 0.25, 1] as const,
    },
  },
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sakura-50 via-cream-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          x: mousePosition.x * 0.008,
          y: mousePosition.y * 0.008,
        }}
        transition={{ 
          type: 'spring' as const, 
          stiffness: 30,
          damping: 30,
          mass: 2
        }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-sakura-200 via-sakura-300 to-pink-300 rounded-full mix-blend-multiply filter blur-[80px]"
          animate={{
            scale: [1, 1.15, 1.05, 1],
            x: [0, 25, -10, 0],
            y: [0, -15, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.455, 0.03, 0.515, 0.955] as const,
            times: [0, 0.33, 0.66, 1]
          }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-pink-200 via-pink-300 to-sakura-300 rounded-full mix-blend-multiply filter blur-[100px]"
          animate={{
            scale: [1, 1.1, 1.2, 1],
            x: [0, -20, 15, 0],
            y: [0, 15, -10, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.43, 0.13, 0.23, 0.96] as const,
            delay: 1.5,
            times: [0, 0.25, 0.75, 1]
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-1/2 w-[28rem] h-[28rem] bg-gradient-to-br from-purple-200 via-sakura-200 to-pink-200 rounded-full mix-blend-multiply filter blur-[90px]"
          animate={{
            scale: [1, 1.25, 1.1, 1],
            x: [0, 18, -12, 0],
            y: [0, -25, 15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: [0.48, 0.15, 0.25, 1] as const,
            delay: 3,
            times: [0, 0.4, 0.7, 1]
          }}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container text-center relative z-10"
      >
        <motion.div 
          variants={itemVariants} 
          className="mb-6 relative"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sakura-100 to-pink-100 dark:from-sakura-900/30 dark:to-pink-900/30 text-sakura-600 dark:text-sakura-400 rounded-full text-sm font-medium shadow-lg"
            animate={{
              boxShadow: [
                '0 10px 25px -5px rgba(255, 77, 148, 0.2)',
                '0 10px 25px -5px rgba(255, 77, 148, 0.4)',
                '0 10px 25px -5px rgba(255, 77, 148, 0.2)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              👋
            </motion.span>
            Welcome to my portfolio
            <Sparkles className="w-4 h-4 animate-pulse" />
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 font-serif px-4 leading-tight"
          style={{ lineHeight: '1.2' }}
        >
          <span className="text-gray-900 dark:text-white inline-block mr-2 sm:mr-3 lg:mr-4">I'm</span>
          <GlowText className="text-gradient-sakura inline-block pb-2">Javier</GlowText>
          <br />
          <AnimatedText className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl inline-block mt-2" delay={0.5}>
            Muhammad Athallah
          </AnimatedText>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-3 sm:mb-4"
        >
          <WordReveal
            text="Computer Science Software Engineering Student"
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 block"
            delay={0.8}
            stagger={0.03}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-8"
        >
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            <WordReveal
              text="Passionate about creating innovative solutions through technology."
              delay={1.2}
              stagger={0.02}
            />
            <div>
              {' '}Focused on <CharReveal text="Software Engineering" className="text-sakura-500 font-semibold" delay={1.8} />,
              {' '}<CharReveal text="Frontend Development" className="text-sakura-500 font-semibold" delay={2.2} />, and
            </div>
            <div className="mt-1 sm:mt-2">
              {' '}<CharReveal text="Artificial Intelligence" className="text-sakura-500 font-semibold" delay={2.6} />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          <MagneticButton 
            className="w-full sm:w-auto"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="sakura-button group relative overflow-hidden text-sm sm:text-base">
              <span className="relative z-10">About Me</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-sakura-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ 
                  type: 'spring' as const, 
                  stiffness: 150,
                  damping: 20,
                  mass: 0.5
                }}
              />
            </div>
          </MagneticButton>
          
          <MagneticButton
            className="w-full sm:w-auto"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="sakura-button-outline group text-sm sm:text-base">
              <span className="relative z-10">View Projects</span>
            </div>
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-12"
        >
          {[
            { href: "https://github.com/JVsHARK31", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/javier-athallah", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:javier.athallah@binus.ac.id", icon: Mail, label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg relative group"
              aria-label={social.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  delay: 1.2 + index * 0.15,
                  type: 'spring' as const,
                  stiffness: 260,
                  damping: 20
                }
              }}
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -10, 10, -10, 0],
                boxShadow: '0 20px 40px -8px rgba(255, 77, 148, 0.4)',
                transition: {
                  rotate: {
                    duration: 0.5,
                    ease: 'easeInOut'
                  },
                  scale: {
                    type: 'spring' as const,
                    stiffness: 300,
                    damping: 15
                  }
                }
              }}
              whileTap={{ scale: 0.92 }}
            >
              <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 relative z-10" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-sakura-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          variants={itemVariants}
          onClick={scrollToAbout}
          className="animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-8 h-8 text-sakura-500" />
        </motion.button>
      </motion.div>
    </section>
  )
}
