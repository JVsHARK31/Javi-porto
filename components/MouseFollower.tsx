'use client'

import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MouseFollower() {
  const [isHovering, setIsHovering] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16)
      mouseY.set(e.clientY - 16)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target || !target.tagName) return
      
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        (target.classList && target.classList.contains('interactive')) ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: 'spring' as const,
            stiffness: 300,
            damping: 20,
          }}
        >
          <div className="w-8 h-8 bg-white rounded-full opacity-90" />
        </motion.div>
      </motion.div>

      {/* Trailing cursor effect */}
      <motion.div
        className="fixed pointer-events-none z-[99]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            scale: isHovering ? 2.5 : 1.8,
            opacity: isHovering ? 0.3 : 0.15,
          }}
          transition={{
            type: 'spring' as const,
            stiffness: 150,
            damping: 25,
            mass: 1,
          }}
        >
          <div className="w-8 h-8 border-2 border-sakura-400 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Outer glow effect */}
      <motion.div
        className="fixed pointer-events-none z-[98]"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? [1, 1.2, 1] : 1,
            opacity: isHovering ? [0.5, 0.2, 0.5] : 0,
          }}
          transition={{
            scale: {
              duration: 1,
              repeat: isHovering ? Infinity : 0,
              ease: 'easeInOut'
            },
            opacity: {
              duration: 1,
              repeat: isHovering ? Infinity : 0,
              ease: 'easeInOut'
            }
          }}
        >
          <div className="w-8 h-8 bg-gradient-radial from-sakura-400 to-transparent rounded-full blur-xl" />
        </motion.div>
      </motion.div>
    </>
  )
}
