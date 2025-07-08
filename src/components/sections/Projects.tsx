'use client'

import { ExternalLink, Github } from 'lucide-react'
import { useEffect, useState } from 'react'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  updated_at: string
  stargazers_count: number
  fork: boolean
}

interface Project {
  title: string
  description: string
  technologies: string[]
  deployedUrl?: string
  sourceUrl: string
  stars?: number
  language?: string | null
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  // Repos you want to display (comment out the ones you don't want)
  const displayedRepos = [
    'kanban-board',
    '100pushups',
    'dragon-slayers', 
    'hero-destroyer',
    'Hyrule-Stays',
    'The-Best-Barcade',
    'steam-collector',
    'Threes',
    // 'repo-name-to-hide', // Comment out repos you don't want to show
    // 'another-repo-to-hide',
  ]

  // Custom project data to supplement GitHub API data
  const customProjectData: Record<string, { deployedUrl?: string; customDescription?: string; technologies?: string[] }> = {
    'kanban-board': {
      // deployedUrl: 'https://hypertext-assassins-kanban.herokuapp.com/',
      customDescription: 'A front-end CRUD app, using React, that helps users organize tasks and to-do lists',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Bootstrap', 'React', 'Semantic UI React']
    },
    'dragon-slayers': {
      // deployedUrl: 'https://dragon-slayers.herokuapp.com/',
      customDescription: 'Dragon Slayers is a turn based game built for Mintbean\'s Multiplayer Hackathon',
      technologies: ['HTML', 'JavaScript', 'CSS', 'React.js']
    },
    'hero-destroyer': {
      deployedUrl: 'https://celentanoad.github.io/hero-destroyer',
      customDescription: 'Simple Javascript web game battling monsters and heroes',
      technologies: ['JavaScript', 'CSS', 'HTML']
    },
    'Hyrule-Stays': {
      // deployedUrl: 'https://hyrule-stays.herokuapp.com/',
      customDescription: 'Hyrule Stays is a campsite/stable review site based on the world of Hyrule from the Legend of Zelda video game series.',
      technologies: ['JavaScript', 'CSS', 'HTML', 'OAuth', 'Node.js', 'Express.js', 'Materialize', 'MongoDB']
    },
    'The-Best-Barcade': {
      // deployedUrl: 'https://thebestbarcade.herokuapp.com/',
      customDescription: 'A full-stack Python app to track arcade games and the local bars that have them.',
      technologies: ['CSS', 'HTML', 'Python', 'PostgreSQL', 'Materialize', 'Django', 'AWS']
    },
    'steam-collector': {
      // deployedUrl: 'https://steam-collector.herokuapp.com/',
      customDescription: 'Steam Collector is a full-stack MERN application which allows users to keep track of their games on the Steam game library.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Semantic UI React', 'React.js']
    },
    '100pushups': {
      deployedUrl: 'https://100pushups.netlify.app/',
      customDescription: 'This app is based off of the 100 pushups training program from: https://hundredpushups.com/',
      technologies: ['Javascript', 'React.js', 'Materialize']
    },
    'Threes': {
      deployedUrl: 'https://celentanoad.github.io/Threes/',
      customDescription: 'Threes is a web-based version of a gambling dice game.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  }

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/celentanoad/repos?sort=updated&per_page=100')
        const allRepos: GitHubRepo[] = await response.json()
        
        // Filter repos to only show the ones in displayedRepos array
        const filteredRepos = allRepos.filter(repo => 
          displayedRepos.includes(repo.name) && !repo.fork
        )
        
        setRepos(filteredRepos)
      } catch (error) {
        console.error('Error fetching repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  // Convert GitHub repos to project format
  const projects: Project[] = repos.map(repo => {
    const customData = customProjectData[repo.name] || {}
    
    return {
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: customData.customDescription || repo.description || 'No description available',
      technologies: customData.technologies || (repo.language ? [repo.language] : []),
      deployedUrl: customData.deployedUrl || undefined,
      sourceUrl: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language
    }
  })

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Projects</h1>
          <div className="text-center py-8">
            <p className="text-gray-700">Loading projects...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Projects</h1>
        <div className="space-y-6 text-gray-700 mb-8">
        <p>
          Here are some of the projects I&apos;ve worked on, showcasing my skills in full-stack development, responsive design, and modern web technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg hover:border-teal-300 transition-all">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              {project.stars !== undefined && project.stars > 0 && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span>⭐</span>
                  <span>{project.stars}</span>
                </div>
              )}
            </div>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200 text-xs px-2 py-1 rounded text-gray-800">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.deployedUrl && (
                <a 
                  href={project.deployedUrl}
                  className="flex items-center gap-2 text-blue-600 hover:text-teal-600 hover:underline text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Deployed Site
                </a>
              )}
              <a 
                href={project.sourceUrl}
                className="flex items-center gap-2 text-green-600 hover:text-blue-600 hover:underline text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Source Code
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
