import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact</h1>
        <div className="space-y-6 text-gray-700">
        <p>
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <p>
          Feel free to reach out through any of the platforms below or send me an email at <a href="mailto:celentanoad91@gmail.com" className="text-blue-600 hover:text-teal-600 hover:underline transition-colors">celentanoad91@gmail.com</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <a 
            href="https://github.com/celentanoad" 
            className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg p-4 text-gray-700 hover:text-blue-600 hover:border-blue-400 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/alanna-celentano" 
            className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-teal-200 rounded-lg p-4 text-gray-700 hover:text-teal-600 hover:border-teal-400 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:celentanoad91@gmail.com" 
            className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-lg p-4 text-gray-700 hover:text-green-600 hover:border-green-400 transition-all"
          >
            <Mail size={24} />
            <span>celentanoad91@gmail.com</span>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
