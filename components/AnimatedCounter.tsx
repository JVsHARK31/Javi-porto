'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30
  })
  
  const display = useTransform(spring, (current) => 
    `${prefix}${Math.round(current)}${suffix}`
  )
  
  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, value, spring])
  
  return (
    <motion.span ref={ref}>
      <motion.span>{display}</motion.span>
    </motion.span>
  )
}
