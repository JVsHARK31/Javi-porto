'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Software Engineer',
    organization: 'BINUS University',
    location: 'Jakarta, Indonesia',
    period: 'August 2024 - Present',
    description: 'Applying theoretical knowledge in practical scenarios, working on real-world projects, and gaining valuable industry experience in software development methodologies and best practices.',
    skills: ['Software Development', 'Full-Stack Development', 'Agile Methodology', 'Team Collaboration'],
  },
]

const education = [
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Bachelor of Computer Science',
    organization: 'BINUS University',
    location: 'Jakarta, Indonesia',
    period: 'August 2024 - August 2028',
    description: 'Comprehensive program covering algorithms, data structures, software design patterns, database systems, web development, mobile development, and artificial intelligence.',
    skills: ['Algorithms', 'Data Structures', 'Software Design Patterns', 'Database Systems', 'Web Development', 'Mobile Development', 'Artificial Intelligence'],
  },
]

interface TimelineItemProps {
  item: {
    type: string
    icon: any
    title: string
    organization: string
    location: string
    period: string
    description: string
    skills: string[]
  }
  index: number
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = item.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={itemVariants}
      className={`flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 relative`}
    >
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="sakura-card"
        >
          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <div className={`p-2 rounded-lg bg-gradient-to-r ${item.type === 'work' ? 'from-sakura-400 to-pink-500' : 'from-purple-400 to-indigo-500'}`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {item.title}
            </h3>
          </div>

          <h4 className="text-lg font-semibold text-sakura-500 mb-2">
            {item.organization}
          </h4>

          <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{item.period}</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full bg-sakura-100 dark:bg-sakura-900/30 text-sakura-600 dark:text-sakura-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-sakura-400 to-pink-500 shadow-lg z-10">
        <div className="w-4 h-4 rounded-full bg-white" />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const allItems = [...experiences, ...education]

  return (
    <section
      id="experience"
      ref={ref}
      className="section-container bg-gradient-to-b from-cream-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            <span className="text-gradient-sakura">Experience</span>{' '}
            <span className="text-gray-900 dark:text-white">& Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sakura-400 to-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in technology and software development
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sakura-400 via-pink-500 to-purple-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {allItems.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
