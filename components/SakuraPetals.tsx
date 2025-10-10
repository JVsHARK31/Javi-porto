'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Petal {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  swayAmount: number
  rotationSpeed: number
  opacity: number
}

export default function SakuraPetals() {
  const [petals, setPetals] = useState<Petal[]>([])
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    // Generate initial petals with more natural variations
    const initialPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 25,
      size: 8 + Math.random() * 20,
      swayAmount: 20 + Math.random() * 40,
      rotationSpeed: 0.5 + Math.random() * 1.5,
      opacity: 0.4 + Math.random() * 0.4
    }))
    setPetals(initialPetals)

    // Detect scrolling
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          initial={{
            x: `${petal.x}vw`,
            y: -100,
            rotate: Math.random() * 360,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: [
              `${petal.x}vw`,
              `${petal.x + petal.swayAmount * 0.7}vw`,
              `${petal.x - petal.swayAmount}vw`,
              `${petal.x + petal.swayAmount * 0.5}vw`,
              `${petal.x}vw`
            ],
            y: '115vh',
            rotate: 360 * petal.rotationSpeed,
            opacity: [0, petal.opacity, petal.opacity, petal.opacity * 0.8, 0],
            scale: [0, 1, 1, 0.8, 0.6]
          }}
          transition={{
            x: {
              duration: petal.duration,
              repeat: Infinity,
              repeatType: 'loop',
              ease: [0.455, 0.03, 0.515, 0.955], // Custom bezier for natural sway
              times: [0, 0.2, 0.5, 0.8, 1]
            },
            y: {
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: [0.48, 0.15, 0.25, 1] // Gentle falling curve
            },
            rotate: {
              duration: petal.duration * 2,
              repeat: Infinity,
              delay: petal.delay,
              ease: "linear"
            },
            opacity: {
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: "easeInOut",
              times: [0, 0.1, 0.5, 0.9, 1]
            },
            scale: {
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: "easeInOut"
            }
          }}
          style={{
            width: petal.size,
            height: petal.size,
            filter: isScrolling ? 'blur(1.5px)' : 'blur(0.3px)',
            willChange: 'transform, opacity',
          }}
        >
          {/* Sakura Petal SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M50 20 Q30 30 25 50 Q30 70 50 80 Q70 70 75 50 Q70 30 50 20"
              fill="url(#petalGradient)"
              opacity={0.8}
              animate={{
                scale: isScrolling ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.5,
                repeat: isScrolling ? Infinity : 0,
                repeatType: 'reverse'
              }}
            />
            
            {/* Inner detail */}
            <path
              d="M50 35 Q40 40 38 50 Q40 60 50 65 Q60 60 62 50 Q60 40 50 35"
              fill="rgba(255, 182, 193, 0.5)"
            />
            
            {/* Petal veins */}
            <path
              d="M50 40 L50 60 M45 45 L50 50 L55 45"
              stroke="rgba(255, 105, 180, 0.3)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            
            <defs>
              <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB6C1">
                  <animate
                    attributeName="stop-color"
                    values="#FFB6C1;#FFC0CB;#FFB6C1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#FF69B4">
                  <animate
                    attributeName="stop-color"
                    values="#FF69B4;#FF1493;#FF69B4"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#FF1493">
                  <animate
                    attributeName="stop-color"
                    values="#FF1493;#FF69B4;#FF1493"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
      
      {/* Extra petals during scroll */}
      {isScrolling && (
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <motion.div
              key={`scroll-${i}`}
              className="absolute"
              initial={{
                x: `${Math.random() * 100}vw`,
                y: Math.random() * window.innerHeight,
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: `${Math.random() * 100}vw`,
                y: window.innerHeight + 100,
                scale: [0, 1, 0.5],
                opacity: [0, 0.8, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                ease: 'easeOut'
              }}
            >
              <div
                className="w-4 h-4 bg-gradient-to-br from-sakura-300 to-sakura-500 rounded-full"
                style={{
                  boxShadow: '0 0 10px rgba(255, 182, 193, 0.5)'
                }}
              />
            </motion.div>
          ))}
        </>
      )}
    </div>
  )
}
