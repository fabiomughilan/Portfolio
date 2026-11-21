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
    slug: 'mydevconnect',
    title: 'MyDevConnect',
    tagline: 'Professional network for developers',
    description:
      'A developer-first social platform with real-time code collaboration, pair-programming rooms, and project showcases. Features WebSocket-driven live sessions, GitHub OAuth integration, and a job board with skill-matching.',
    categories: ['fullstack'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'Redis', 'Docker'],
    year: 2024,
    links: {
      github: 'https://github.com/fabiomughilan/mydevconnect',
      live: 'https://mydevconnect.vercel.app',
    },
    featured: true,
    color: '#2d7a60',
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
    slug: 'defi-dashboard',
    title: 'DeFi Dashboard',
    tagline: 'Portfolio tracker for DeFi positions',
    description:
      'A unified dashboard aggregating positions across Uniswap, Aave, Compound, and Curve. Displays real-time impermanent loss, yield projections, and liquidation risk with customisable alerts.',
    categories: ['web3', 'fullstack'],
    tech: ['React', 'Ethers.js', 'The Graph', 'Node.js', 'TypeScript'],
    year: 2023,
    links: { github: 'https://github.com/fabiomughilan/defi-dashboard' },
    featured: false,
    color: '#195d49',
  },
  {
    slug: 'chain-bridge',
    title: 'ChainBridge',
    tagline: 'Cross-chain asset bridge protocol',
    description:
      'A trustless bridge enabling ERC-20 token transfers between Ethereum, Polygon, and BNB Chain using relayer nodes and threshold signatures. Includes a UI for monitoring bridge liquidity and transaction status.',
    categories: ['web3', 'systems'],
    tech: ['Solidity', 'TypeScript', 'Hardhat', 'React', 'Go'],
    year: 2023,
    links: { github: 'https://github.com/fabiomughilan/chain-bridge' },
    featured: false,
    color: '#195d49',
  },
  {
    slug: 'ml-pipeline',
    title: 'ML Pipeline',
    tagline: 'Automated ML training and deployment',
    description:
      'An end-to-end MLOps pipeline that orchestrates data ingestion, feature engineering, model training, evaluation, and deployment to production with rollback support. Integrates with AWS SageMaker and MLflow.',
    categories: ['ai', 'systems'],
    tech: ['Python', 'MLflow', 'AWS SageMaker', 'Airflow', 'Docker', 'Terraform'],
    year: 2023,
    links: { github: 'https://github.com/fabiomughilan/ml-pipeline' },
    featured: false,
    color: '#4a9070',
  },
  {
    slug: 'taskflow',
    title: 'TaskFlow',
    tagline: 'Real-time collaborative task manager',
    description:
      'A Kanban-style project management tool with real-time sync, nested sub-tasks, time tracking, and GitHub issue integration. Supports offline mode with conflict-free CRDT-based sync.',
    categories: ['fullstack'],
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Yjs'],
    year: 2022,
    links: {
      github: 'https://github.com/fabiomughilan/taskflow',
      live: 'https://taskflow-app.vercel.app',
    },
    featured: false,
    color: '#2d7a60',
  },
  {
    slug: 'rust-vm',
    title: 'Rust VM',
    tagline: 'Bytecode virtual machine in Rust',
    description:
      'A stack-based bytecode VM with a custom assembly language, garbage collector, and JIT compilation layer. Implements closures, coroutines, and a standard library. Used as a learning exploration into systems programming.',
    categories: ['systems'],
    tech: ['Rust', 'LLVM', 'Assembly'],
    year: 2022,
    links: { github: 'https://github.com/fabiomughilan/rust-vm' },
    featured: false,
    color: '#13201a',
  },
  {
    slug: 'fit-track',
    title: 'FitTrack',
    tagline: 'Cross-platform fitness tracking app',
    description:
      'A React Native fitness app with AI-powered workout recommendations, Apple Health and Google Fit sync, nutrition logging with barcode scanning, and a social layer for sharing achievements.',
    categories: ['mobile', 'ai'],
    tech: ['React Native', 'Expo', 'Python', 'TensorFlow Lite', 'Firebase'],
    year: 2022,
    links: { github: 'https://github.com/fabiomughilan/fittrack' },
    featured: false,
    color: '#4a9070',
  },
]

export const categoryLabels: Record<string, string> = {
  web3: 'Web3',
  ai: 'AI / ML',
  fullstack: 'Full-Stack',
  mobile: 'Mobile',
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
