export interface Project {
  title: string
  imageUrl: string
  descriptionKey: string
  liveUrl: string
  sourceCodeUrl: string
  technologies: string[]
  hasLiveDemo?: boolean
}

export const projects: Project[] = [
  {
    title: 'Job Board Challenge',
    imageUrl: 'job-board.jpg',
    descriptionKey: 'projects.jobBoardDescription',
    liveUrl: 'https://job-board-challenge.vercel.app',
    sourceCodeUrl: 'https://github.com/arnau-romero-hazas/job-board-challenge',
    technologies: ['Nextjs', 'JavaScript', 'TailwindCSS'],
    hasLiveDemo: true
  },
  {
    title: 'Sotsocial',
    imageUrl: 'sotsocial.png',
    descriptionKey: 'projects.sotsocialDescription',
    liveUrl: '', // sin demo
    sourceCodeUrl: 'https://github.com/arnau-romero-hazas/sotsocial',
    technologies: ['React', 'Vite', 'CSS', 'Express', 'Nodejs', 'JavaScript', 'MongoDB'],
    hasLiveDemo: false
  },
  {
    title: 'PokApp',
    imageUrl: 'PokApp.png',
    descriptionKey: 'projects.pokappDescription',
    liveUrl: '', // sin demo
    sourceCodeUrl: 'https://github.com/arnau-romero-hazas/pokapp',
    technologies: ['ReactNative', 'JavaScript', 'ExpoGO', 'Nodejs', 'MongoDB', 'Express'],
    hasLiveDemo: false
  },
  {
    title: 'Portfolio',
    imageUrl: 'portfolio.jpg',
    descriptionKey: 'projects.portfolioDescription',
    liveUrl: 'https://arnau-romero-hazas.github.io/Portfolio/',
    sourceCodeUrl: 'https://github.com/arnau-romero-hazas/portfolio',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    hasLiveDemo: true
  }
]