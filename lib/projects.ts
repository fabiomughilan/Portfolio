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
  {
    slug: 'digimetal',
    title: 'Digimetal',
    tagline: 'Digital gold & silver investment platform for EY',
    description:
      'Enterprise-grade digital metals investment portal developed at Ernst & Young. Built a full component library with Storybook for design-system consistency across the platform. Implemented end-to-end investment flows including gold and silver trading, portfolio tracking, and statement generation using Next.js and Spring Boot microservices.',
    categories: ['fullstack'],
    tech: ['Next.js', 'TypeScript', 'Spring Boot', 'Kotlin', 'Storybook', 'REST APIs'],
    year: 2026,
    links: {},
    featured: true,
    color: '#2d7a60',
  },
  {
    slug: 'motor-insurance',
    title: 'Motor Insurance Portal',
    tagline: 'End-to-end motor insurance platform built at EY',
    description:
      'A full-stack motor insurance portal developed during the EY internship. Engineered policy issuance, claims processing, and renewal flows. Architected backend services with Spring Boot (Kotlin) and built a responsive, accessible UI with Next.js. Maintained a Storybook component library shared across the EY insurance product suite.',
    categories: ['fullstack'],
    tech: ['Next.js', 'TypeScript', 'Kotlin', 'Spring Boot', 'Storybook', 'PostgreSQL'],
    year: 2026,
    links: {},
    featured: true,
    color: '#3d6b58',
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
