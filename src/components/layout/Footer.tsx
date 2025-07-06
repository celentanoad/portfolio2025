'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { scrollToSection } from '@/lib/utils'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/celentanoad', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alanna-celentano', icon: Linkedin },
    { name: 'Email', href: 'mailto:celentanoad91@gmail.com', icon: Mail },
  ]

  return (
    <footer className="bg-gradient-to-r from-blue-100 to-green-100 border-t border-gray-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">AC Portfolio</h3>
            <p className="text-gray-700 text-sm">
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                Home
              </a>
              <a href="#about" onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                About
              </a>
              <a href="#projects" onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-teal-600 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-400/30 text-center">
          <p className="text-gray-700 text-sm">
            © {currentYear} Alanna Celentano
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
