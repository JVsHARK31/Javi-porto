'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Music } from 'lucide-react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.loop = true
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Auto-play prevented:', error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume
      } else {
        audioRef.current.volume = 0
      }
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/lagu-bunga-sakura.mp3" />
      
      {/* Floating Music Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      >
        <motion.div
          className={`relative ${isExpanded ? 'bg-white/95 dark:bg-gray-900/95' : 'bg-white/90 dark:bg-gray-900/90'} 
                     backdrop-blur-lg rounded-full shadow-2xl border border-sakura-200/50 dark:border-sakura-800/50
                     transition-all duration-300 ease-out`}
          animate={{
            width: isExpanded ? 280 : 56,
            height: isExpanded ? 120 : 56,
            borderRadius: isExpanded ? 20 : 28,
          }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Main Play Button */}
          <motion.button
            onClick={togglePlay}
            className={`absolute top-2 left-2 w-10 h-10 rounded-full 
                       bg-gradient-to-r from-sakura-400 to-pink-500 
                       flex items-center justify-center text-white shadow-lg
                       hover:scale-110 active:scale-95 transition-transform`}
            whileTap={{ scale: 0.9 }}
            animate={isPlaying ? {
              boxShadow: [
                '0 0 0 0 rgba(255, 77, 148, 0.7)',
                '0 0 0 10px rgba(255, 77, 148, 0)',
                '0 0 0 0 rgba(255, 77, 148, 0)'
              ]
            } : {}}
            transition={{
              duration: 1.5,
              repeat: isPlaying ? Infinity : 0,
              ease: 'easeOut'
            }}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="playing"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center justify-center"
                >
                  {/* Animated Music Bars */}
                  <div className="flex gap-0.5 h-4 items-end">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-white rounded-full"
                        animate={{
                          height: [8, 16, 8, 12, 8]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: 'easeInOut'
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="paused"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Music className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Expanded Controls */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="pt-14 px-4 pb-4"
              >
                {/* Title */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sakura-500">♪</span>
                    <span>Bunga Sakura</span>
                    {isPlaying && (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs text-sakura-400"
                      >
                        Playing...
                      </motion.span>
                    )}
                  </div>
                </motion.div>

                {/* Volume Control */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <button
                    onClick={toggleMute}
                    className="text-gray-500 dark:text-gray-400 hover:text-sakura-500 
                             transition-colors p-1"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full 
                             appearance-none cursor-pointer
                             [&::-webkit-slider-thumb]:appearance-none
                             [&::-webkit-slider-thumb]:w-3
                             [&::-webkit-slider-thumb]:h-3
                             [&::-webkit-slider-thumb]:rounded-full
                             [&::-webkit-slider-thumb]:bg-gradient-to-r
                             [&::-webkit-slider-thumb]:from-sakura-400
                             [&::-webkit-slider-thumb]:to-pink-500
                             [&::-webkit-slider-thumb]:shadow-lg
                             [&::-webkit-slider-thumb]:cursor-pointer
                             [&::-moz-range-thumb]:w-3
                             [&::-moz-range-thumb]:h-3
                             [&::-moz-range-thumb]:rounded-full
                             [&::-moz-range-thumb]:bg-gradient-to-r
                             [&::-moz-range-thumb]:from-sakura-400
                             [&::-moz-range-thumb]:to-pink-500
                             [&::-moz-range-thumb]:border-0
                             [&::-moz-range-thumb]:shadow-lg
                             [&::-moz-range-thumb]:cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        #ff4d94 0%, 
                        #ff4d94 ${(isMuted ? 0 : volume) * 100}%, 
                        #e5e7eb ${(isMuted ? 0 : volume) * 100}%, 
                        #e5e7eb 100%)`
                    }}
                  />
                  
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-8 text-right">
                    {Math.round((isMuted ? 0 : volume) * 100)}%
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating Sakura Petals around music player when playing */}
        {isPlaying && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-br from-sakura-300 to-pink-400 rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  x: [0, (i - 1) * 30, (i - 1) * 50, 0],
                  y: [0, -20, -40, -60],
                  scale: [0, 1, 0.8, 0],
                  opacity: [0, 1, 0.8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Visual Indicator when music starts/stops */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-full 
                       px-4 py-2 shadow-lg border border-sakura-200/50 dark:border-sakura-800/50"
            >
              <div className="flex items-center gap-2 text-sm">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  🌸
                </motion.span>
                <span className="text-gray-700 dark:text-gray-300">
                  Memutar Bunga Sakura
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
