// Optimized animation configurations for better performance
export const animationConfig = {
  // Enable GPU acceleration
  transition: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 30,
    mass: 1,
  },
  
  // Reduced motion for accessibility and performance
  reducedMotion: {
    type: 'tween' as const,
    duration: 0.3,
    ease: 'easeOut',
  },
  
  // Smooth spring animation
  smoothSpring: {
    type: 'spring' as const,
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  },
  
  // Fast spring for responsive interactions
  fastSpring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  },
  
  // Optimized hover animation
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 30,
    },
  },
  
  // Tap animation for better mobile UX
  tap: {
    scale: 0.98,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 30,
    },
  },
  
  // Stagger children with optimized delay
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced from 0.1-0.2 for smoother appearance
        delayChildren: 0.1,    // Reduced initial delay
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  
  // Optimized fade in animation
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  
  // Optimized slide up animation
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      },
    },
  },
}

// Check if user prefers reduced motion
export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Get appropriate animation config based on user preference
export const getAnimationConfig = (config: keyof typeof animationConfig) => {
  if (shouldReduceMotion()) {
    return animationConfig.reducedMotion
  }
  return animationConfig[config]
}
