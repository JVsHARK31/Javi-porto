'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SamuraiAnimation() {
  const [isDrawing, setIsDrawing] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress to animation values
  const swordRotation = useTransform(scrollYProgress, [0, 0.3], [90, 0])
  const samuraiScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05])
  const samuraiOpacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1])
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.2 && !isDrawing) {
        setIsDrawing(true)
      } else if (latest <= 0.2 && isDrawing) {
        setIsDrawing(false)
      }
    })
    
    return () => unsubscribe()
  }, [scrollYProgress, isDrawing])

  return (
    <div className="fixed left-0 lg:left-10 bottom-0 z-40 pointer-events-none">
      <motion.div 
        className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96"
        style={{ 
          scale: samuraiScale,
          opacity: samuraiOpacity 
        }}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100,
          damping: 20,
          delay: 0.5 
        }}
      >
        {/* Samurai SVG */}
        <svg
          viewBox="0 0 200 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Samurai Body */}
          <motion.g
            animate={{
              y: isDrawing ? -5 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
          >
            {/* Traditional Armor */}
            <path
              d="M100 120 L80 180 L70 240 L130 240 L120 180 Z"
              fill="url(#armorGradient)"
              stroke="#2a2a2a"
              strokeWidth="2"
            />
            
            {/* Shoulder Guards */}
            <ellipse cx="75" cy="130" rx="20" ry="15" fill="#8B4513" stroke="#2a2a2a" strokeWidth="2"/>
            <ellipse cx="125" cy="130" rx="20" ry="15" fill="#8B4513" stroke="#2a2a2a" strokeWidth="2"/>
            
            {/* Head and Helmet */}
            <circle cx="100" cy="80" r="25" fill="#F4D4B6" />
            <path
              d="M75 70 Q100 50 125 70 L125 85 Q100 95 75 85 Z"
              fill="#2a2a2a"
              opacity="0.9"
            />
            
            {/* Kabuto (Helmet) */}
            <path
              d="M70 65 Q100 40 130 65 L125 75 Q100 85 75 75 Z"
              fill="url(#helmetGradient)"
              stroke="#2a2a2a"
              strokeWidth="2"
            />
            
            {/* Face Details */}
            <circle cx="90" cy="80" r="2" fill="#2a2a2a" />
            <circle cx="110" cy="80" r="2" fill="#2a2a2a" />
            <path d="M95 90 Q100 93 105 90" stroke="#2a2a2a" strokeWidth="1.5" fill="none" />
            
            {/* Arms */}
            <motion.g
              animate={{
                rotate: isDrawing ? -10 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10
              }}
            >
              <rect x="60" y="140" width="15" height="60" rx="5" fill="#8B4513" />
              <circle cx="67" cy="205" r="8" fill="#F4D4B6" />
            </motion.g>
            
            <motion.g
              animate={{
                rotate: isDrawing ? 20 : 5,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10
              }}
            >
              <rect x="125" y="140" width="15" height="60" rx="5" fill="#8B4513" />
              <circle cx="133" cy="205" r="8" fill="#F4D4B6" />
            </motion.g>
            
            {/* Legs */}
            <rect x="85" y="240" width="12" height="40" fill="#2a2a2a" />
            <rect x="103" y="240" width="12" height="40" fill="#2a2a2a" />
            
            {/* Traditional Sandals */}
            <ellipse cx="91" cy="285" rx="10" ry="5" fill="#8B4513" />
            <ellipse cx="109" cy="285" rx="10" ry="5" fill="#8B4513" />
          </motion.g>
          
          {/* Katana */}
          <motion.g
            style={{
              rotate: swordRotation,
              transformOrigin: "133px 205px"
            }}
          >
            {/* Sword Handle */}
            <rect x="128" y="195" width="10" height="30" rx="2" fill="#4a4a4a" />
            <rect x="129" y="196" width="8" height="28" rx="1" fill="#8B4513" />
            
            {/* Guard (Tsuba) */}
            <ellipse cx="133" cy="195" rx="12" ry="4" fill="#2a2a2a" />
            
            {/* Blade */}
            <motion.path
              d="M133 195 L133 120 Q135 118 133 116"
              stroke="url(#bladeGradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: isDrawing ? 1 : 0.3,
                filter: isDrawing ? "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))" : "none"
              }}
              transition={{
                pathLength: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 1.5
                },
                filter: {
                  duration: 0.3
                }
              }}
            />
            
            {/* Blade shine effect */}
            {isDrawing && (
              <motion.path
                d="M131 195 L131 120"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: [0, -75, -75]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            )}
          </motion.g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="armorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="50%" stopColor="#A0522D" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>
            
            <linearGradient id="helmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#4a4a4a" />
            </linearGradient>
            
            <linearGradient id="bladeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E8E8E8" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#D3D3D3" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Aura effect when drawing sword */}
        {isDrawing && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-sakura-400/30 via-transparent to-transparent blur-2xl" />
          </motion.div>
        )}
      </motion.div>
      
      {/* Wind effect lines */}
      {isDrawing && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                top: `${30 + i * 20}%`,
                width: '150%',
                left: '-25%'
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
