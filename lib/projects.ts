import { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'workverse',
    title: 'WorkVerse',
    tagline: 'Scalable 2D virtual office with real-time collaboration',
    description:
      'A 2D virtual office platform supporting real-time multi-user interactions and presence management. Implemented event-driven communication and real-time notifications using WebSockets and Push Protocol SDK. Integrated WebRTC for low-latency voice and video communication across multiple users. Won 1st Prize ($2,000) from Push Protocol at ETHGlobal Bangkok.',
    categories: ['fullstack', 'systems'],
    tech: ['React.js', 'Phaser 3', 'TypeScript', 'WebSockets', 'WebRTC', 'Push Protocol SDK'],
    year: 2024,
    links: { github: 'https://github.com/fabiomughilan/workverse' },
    featured: true,
    color: '#195d49',
  },
  {
    slug: 'travelai',
    title: 'TravelAI',
    tagline: 'AI-powered trip planner with multi-agent orchestration',
    description:
      'An advanced AI trip planner with conversational trip design, real-time node-based workflows, and multi-agent orchestration for personalised itineraries. LLM-based agents dynamically research destinations, optimise travel plans, and generate itineraries based on user preferences, budget, and constraints. Backend APIs built with FastAPI supporting end-to-end booking flows.',
    categories: ['ai', 'fullstack'],
    tech: ['Next.js', 'React Flow', 'LangGraph', 'CrewAI', 'FastAPI', 'Python'],
    year: 2024,
    links: { github: 'https://github.com/fabiomughilan/travelai' },
    featured: true,
    color: '#4a9070',
  },
]

export const categoryLabels: Record<string, string> = {
  ai: 'AI / ML',
  fullstack: 'Full-Stack',
  systems: 'Systems',
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(cat: string): Project[] {
  if (!cat) return projects
  return projects.filter((p) => p.categories.includes(cat as any))
}

export const featuredProjects = projects.filter((p) => p.featured)
