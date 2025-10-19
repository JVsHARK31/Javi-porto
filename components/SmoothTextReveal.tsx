'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SmoothTextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function SmoothTextReveal({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.8,
  once = true
}: SmoothTextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once,
    amount: 0.5,
    margin: "-50px"
  })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        animate={isInView ? { y: 0 } : { y: '100%' }}
        transition={{
          duration,
          delay,
          ease: [0.215, 0.61, 0.355, 1] as const, // Smooth cubic-bezier
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface WordRevealProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function WordReveal({ 
  text, 
  className = '',
  delay = 0,
  stagger = 0.05
}: WordRevealProps) {
  const words = text.split(' ')
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.5
  })

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + (i * stagger),
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  )
}

interface CharRevealProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function CharReveal({ 
  text, 
  className = '',
  delay = 0,
  stagger = 0.02
}: CharRevealProps) {
  const chars = text.split('')
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.5
  })

  return (
    <span ref={ref} className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ 
            y: 50, 
            opacity: 0,
            rotateX: -90,
            filter: 'blur(10px)'
          }}
          animate={isInView ? { 
            y: 0, 
            opacity: 1,
            rotateX: 0,
            filter: 'blur(0px)'
          } : { 
            y: 50, 
            opacity: 0,
            rotateX: -90,
            filter: 'blur(10px)'
          }}
          transition={{
            duration: 0.5,
            delay: delay + (i * stagger),
            ease: [0.215, 0.61, 0.355, 1] as const,
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}
