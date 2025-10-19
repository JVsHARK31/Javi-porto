'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  const text = String(children)
  const letters = text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.03
      }
    }
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function GlowText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{ 
        display: 'inline-block',
        lineHeight: 'inherit',
        verticalAlign: 'baseline'
      }}
      animate={{
        textShadow: [
          '0 0 20px rgba(255, 77, 148, 0)',
          '0 0 20px rgba(255, 77, 148, 0.5)',
          '0 0 20px rgba(255, 77, 148, 0)',
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.span>
  )
}
