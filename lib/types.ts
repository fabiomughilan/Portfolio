export type Category =
  | 'web3'
  | 'ai'
  | 'fullstack'
  | 'mobile'
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
