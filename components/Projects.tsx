'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 0.5,
      ease: [0.48, 0.15, 0.25, 1] as const,
    },
  },
}

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with complete features including payment system, product management, and admin dashboard.',
    image: '/images/project-1.jpg',
    category: 'Web Development',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/JVsHARK31',
    demo: 'https://example.com',
  },
  {
    title: 'AI Chatbot Assistant',
    description: 'AI-based chatbot that can answer questions and provide recommendations using Natural Language Processing.',
    image: '/images/project-2.jpg',
    category: 'AI & Machine Learning',
    tags: ['Python', 'TensorFlow', 'NLP', 'React'],
    github: 'https://github.com/JVsHARK31',
    demo: 'https://example.com',
  },
  {
    title: 'Portfolio Website Builder',
    description: 'Platform for creating portfolio websites with drag-and-drop editor and customizable templates.',
    image: '/images/project-3.jpg',
    category: 'Web Development',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/JVsHARK31',
    demo: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Intuitive task management application with team collaboration features, deadline tracking, and real-time notifications.',
    image: '/images/project-4.jpg',
    category: 'Mobile Development',
    tags: ['React Native', 'Redux', 'Node.js', 'Socket.io'],
    github: 'https://github.com/JVsHARK31',
    demo: 'https://example.com',
  },
]

const categories = ['All', 'Web Development', 'AI & Machine Learning', 'Mobile Development']

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    category: string
    tags: string[]
    github?: string
    demo?: string
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: {
          type: 'spring' as const,
          stiffness: 300,
          damping: 20
        }
      }}
      className="sakura-card overflow-hidden group perspective-1000 h-full flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          type: 'spring' as const,
          stiffness: 100,
          damping: 15,
          delay: 0.1
        }
      }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-4 aspect-video bg-gradient-to-br from-sakura-100 to-pink-100 dark:from-gray-700 dark:to-gray-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl sm:text-6xl opacity-20">🌸</div>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-gray-900" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
            >
              <ExternalLink className="w-5 h-5 text-gray-900" />
            </a>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-sakura-100 dark:bg-sakura-900/30 text-sakura-600 dark:text-sakura-400 mb-2">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-cream-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <section
      id="projects"
      ref={ref}
      className="section-container bg-gradient-to-b from-cream-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            <span className="text-gradient-sakura">Featured</span>{' '}
            <span className="text-gray-900 dark:text-white">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sakura-400 to-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some projects I have worked on with passion and dedication
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-sakura-400 to-pink-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-sakura-50 dark:hover:bg-sakura-900/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            variants={itemVariants}
            className="text-center py-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No projects in this category
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
