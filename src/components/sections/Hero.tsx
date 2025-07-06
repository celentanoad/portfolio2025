'use client'

import { scrollToSection } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowDown, File, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-800">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
                Alanna Celentano
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto">
              Software Developer who enjoys finding solutions to problems and seeking out answers from different perspectives
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 h-11 px-8"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white h-11 px-8"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <Link
              href="https://github.com/celentanoad"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alanna-celentano"
              className="text-gray-600 hover:text-teal-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://docs.google.com/document/d/1HrXDHFm8Q0NbEfXLf1r2HSvjqtD1At1TgQUYoj6ECXg/edit?usp=sharing"
              className="text-gray-600 hover:text-green-600 transition-colors"
              aria-label="View Resume"
            >
              <File size={24} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-8"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-blue-600 transition-colors animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
