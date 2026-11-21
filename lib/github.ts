export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  fork: boolean
  homepage: string | null
}

export const languageColors: Record<string, string> = {
  TypeScript:  '#3178c6',
  JavaScript:  '#f7df1e',
  Python:      '#3572a5',
  Rust:        '#dea584',
  Go:          '#00add8',
  Java:        '#b07219',
  Kotlin:      '#a97bff',
  Solidity:    '#aa6746',
  'C++':       '#f34b7d',
  C:           '#555555',
  HTML:        '#e34c26',
  CSS:         '#563d7c',
  Shell:       '#89e051',
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=owner`,
      {
        next: { revalidate: 3600 }, // re-fetch every hour
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'portfolio-site',
        },
      }
    )
    if (!res.ok) return []
    const repos: GitHubRepo[] = await res.json()
    return repos
      .filter((r) => !r.fork)           // exclude forks
      .sort((a, b) => b.stargazers_count - a.stargazers_count) // stars first
  } catch {
    return []
  }
}
