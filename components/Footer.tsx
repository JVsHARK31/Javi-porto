'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-cream-50 to-sakura-100 dark:from-gray-800 dark:to-gray-900 border-t border-sakura-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-gradient-sakura mb-4">
              JMA
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Mahasiswa Computer Science yang passionate dalam menciptakan solusi teknologi inovatif.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/javierathallah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-sakura-100 dark:hover:bg-sakura-900/30 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/javierathallah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-sakura-100 dark:hover:bg-sakura-900/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:javier.athallah@binus.ac.id"
                className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-sakura-100 dark:hover:bg-sakura-900/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2">
              {['Beranda', 'Tentang', 'Pengalaman', 'Keahlian', 'Proyek'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(`#${item.toLowerCase() === 'beranda' ? 'home' : item.toLowerCase()}`)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-sakura-500 dark:hover:text-sakura-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Kontak
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:javier.athallah@binus.ac.id"
                  className="hover:text-sakura-500 dark:hover:text-sakura-400 transition-colors"
                >
                  javier.athallah@binus.ac.id
                </a>
              </li>
              <li>Jakarta, Indonesia</li>
              <li>BINUS University</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-sakura-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Javier Muhammad Athallah. All rights reserved.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2"
            >
              Dibuat dengan <Heart className="w-4 h-4 text-sakura-500 fill-current animate-pulse" /> dan React
            </motion.p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
            <span>🌸</span>
            <span>Terinspirasi dari keindahan musim sakura</span>
            <span>🌸</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
