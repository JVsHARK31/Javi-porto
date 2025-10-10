'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Palette, Brain, Cpu, Globe, Smartphone, Cloud } from 'lucide-react'

const icons = [
  { Icon: Code2, color: '#61DAFB' },
  { Icon: Database, color: '#336791' },
  { Icon: Palette, color: '#FF6384' },
  { Icon: Brain, color: '#FF9F40' },
  { Icon: Cpu, color: '#4BC0C0' },
  { Icon: Globe, color: '#9966FF' },
  { Icon: Smartphone, color: '#FF6384' },
  { Icon: Cloud, color: '#36A2EB' },
]

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <item.Icon
            className="w-8 h-8 opacity-20"
            style={{ color: item.color }}
          />
        </motion.div>
      ))}
    </div>
  )
}
