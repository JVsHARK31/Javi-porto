'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: 'circle' | 'hexagon' | 'triangle'
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const newElements: FloatingElement[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      duration: 20 + Math.random() * 30,
      delay: Math.random() * 10,
      type: ['circle', 'hexagon', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'hexagon' | 'triangle'
    }))
    setElements(newElements)
  }, [])

  const getShape = (type: string) => {
    switch (type) {
      case 'circle':
        return (
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#floatingGradient)"
            strokeWidth="1"
            opacity="0.3"
          />
        )
      case 'hexagon':
        return (
          <polygon
            points="50,10 85,30 85,70 50,90 15,70 15,30"
            fill="none"
            stroke="url(#floatingGradient)"
            strokeWidth="1"
            opacity="0.3"
          />
        )
      case 'triangle':
        return (
          <polygon
            points="50,15 80,80 20,80"
            fill="none"
            stroke="url(#floatingGradient)"
            strokeWidth="1"
            opacity="0.3"
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="floatingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 182, 193, 0.6)">
              <animate
                attributeName="stop-color"
                values="rgba(255, 182, 193, 0.6);rgba(255, 105, 180, 0.6);rgba(255, 182, 193, 0.6)"
                dur="5s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="rgba(255, 105, 180, 0.3)">
              <animate
                attributeName="stop-color"
                values="rgba(255, 105, 180, 0.3);rgba(255, 77, 148, 0.3);rgba(255, 105, 180, 0.3)"
                dur="5s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -40, 20, -30, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: [0.445, 0.05, 0.55, 0.95] as const,
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ filter: 'url(#glow)' }}
          >
            <motion.g
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: element.delay * 0.5
              }}
            >
              {getShape(element.type)}
            </motion.g>
          </svg>
        </motion.div>
      ))}

      {/* Floating particles */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-sakura-300 to-pink-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100],
            x: [0, Math.random() * 40 - 20],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
        />
      ))}
    </div>
  )
}
