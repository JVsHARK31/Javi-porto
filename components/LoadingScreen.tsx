'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-gradient-to-br from-sakura-50 via-cream-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center"
        >
          <motion.div className="text-center">
            <motion.div
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                className="w-24 h-24 text-sakura-500"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z"
                  opacity="0.8"
                />
                <path
                  fill="currentColor"
                  d="M12 22C12 22 16 18 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 18 12 22 12 22Z"
                  opacity="0.7"
                />
                <path
                  fill="currentColor"
                  d="M2 12C2 12 6 8 10 8C12.2091 8 14 9.79086 14 12C14 14.2091 12.2091 16 10 16C6 16 2 12 2 12Z"
                  opacity="0.6"
                />
                <path
                  fill="currentColor"
                  d="M22 12C22 12 18 16 14 16C11.7909 16 10 14.2091 10 12C10 9.79086 11.7909 8 14 8C18 8 22 12 22 12Z"
                  opacity="0.5"
                />
              </svg>
            </motion.div>
            
            <motion.h2
              className="mt-6 text-2xl font-serif font-bold text-gradient-sakura"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Loading Portfolio
            </motion.h2>
            
            <motion.div
              className="mt-4 flex justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[0, 0.2, 0.4].map((delay, index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-sakura-500 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    delay,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
