'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Brain, Palette, Database, Sparkles } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const interests = [
  {
    icon: Code,
    title: 'Software Engineering',
    description: 'Membangun aplikasi yang robust dan scalable dengan best practices',
  },
  {
    icon: Palette,
    title: 'Frontend Development',
    description: 'Menciptakan user interface yang indah dan responsif',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Mengeksplorasi potensi kecerdasan buatan untuk solusi inovatif',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Merancang struktur data yang efisien dan optimal',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="about"
      ref={ref}
      className="section-container bg-white dark:bg-gray-900"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            <span className="text-gradient-sakura">Tentang</span>{' '}
            <span className="text-gray-900 dark:text-white">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sakura-400 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div variants={itemVariants} className="relative order-2 md:order-1">
            <motion.div 
              className="relative w-full max-w-sm md:max-w-md mx-auto px-4 md:px-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring' as const, stiffness: 300 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-sakura-400 to-pink-500 rounded-2xl"
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl">
                <img
                  src="/images/javier-profile.jpg"
                  alt="Javier Muhammad Athallah"
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-profile.jpg'
                  }}
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-sakura-500" />
                  <span className="text-sm font-medium text-sakura-500">Available</span>
                </motion.div>
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-sakura-200 dark:bg-sakura-900/30 rounded-full -z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 dark:bg-pink-900/30 rounded-full -z-10"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 order-1 md:order-2 px-4 md:px-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Halo! Saya Javier 👋
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Saya adalah mahasiswa <span className="font-semibold text-sakura-500">Computer Science Software Engineering</span> di 
              <span className="font-semibold text-sakura-500"> BINUS University</span>, Jakarta. 
              Dengan passion yang mendalam dalam teknologi, saya berkomitmen untuk menciptakan solusi-solusi 
              inovatif yang dapat memberikan dampak positif.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Sebagai <span className="font-semibold text-sakura-500">Software Engineer</span> di BINUS University, 
              saya memiliki kesempatan untuk menerapkan pengetahuan teoretis dalam proyek-proyek dunia nyata. 
              Pengalaman ini telah memperkaya pemahaman saya tentang metodologi pengembangan perangkat lunak 
              dan praktik terbaik dalam industri.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Saya terus mengembangkan keahlian saya dalam berbagai aspek pengembangan perangkat lunak, 
              dari frontend development hingga artificial intelligence. Setiap hari adalah kesempatan 
              untuk belajar hal baru dan berkontribusi dalam ekosistem teknologi.
            </p>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.2 } 
              }}
              className="sakura-card text-center relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-sakura-400 to-pink-500"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <interest.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {interest.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {interest.description}
              </p>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-sakura-400/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 flex justify-center gap-12 flex-wrap"
        >
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-4xl font-bold text-gradient-sakura">
              <AnimatedCounter value={4} suffix="+" />
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Years Coding</p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-4xl font-bold text-gradient-sakura">
              <AnimatedCounter value={20} suffix="+" />
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Projects Done</p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-4xl font-bold text-gradient-sakura">
              <AnimatedCounter value={15} suffix="+" />
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Technologies</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
