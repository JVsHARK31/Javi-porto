'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import * as React from 'react'
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiGit, SiNodedotjs, SiPython, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#000000' },
      { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6' },
      { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 80, color: '#339933' },
      { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
      { name: 'Git', icon: SiGit, level: 85, color: '#F05032' },
    ],
  },
]

interface SkillBarProps {
  skill: {
    name: string
    icon: any
    level: number
    color: string
  }
}

function SkillBar({ skill }: SkillBarProps) {
  const Icon = skill.icon
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="mb-6 relative"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6" style={{ color: skill.color }} />
          </motion.div>
          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
        </div>
        <motion.span 
          className="text-sm font-semibold text-sakura-500"
          animate={{ scale: isHovered ? 1.2 : 1 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ 
            duration: 1.5, 
            delay: 0.2,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-sakura-400 to-pink-500 relative"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="skills"
      ref={ref}
      className="section-container bg-white dark:bg-gray-900"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            <span className="text-gradient-sakura">Keahlian</span>{' '}
            <span className="text-gray-900 dark:text-white">& Teknologi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sakura-400 to-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai dalam pengembangan perangkat lunak
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="sakura-card"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-sakura-400 to-pink-500 rounded-full" />
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <div className="sakura-card inline-block">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Selalu Belajar & Berkembang 🚀
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Saya terus mengeksplorasi teknologi baru dan meningkatkan keahlian saya
              untuk memberikan solusi terbaik
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
