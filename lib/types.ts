export type Category =
  | 'ai'
  | 'fullstack'
  | 'systems'

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  categories: Category[]
  tech: string[]
  year: number
  links: {
    github?: string
    live?: string
    demo?: string
  }
  featured: boolean
  color: string
}
