import itt from '@/public/itt_escudo.png'
import tcs from '@/public/tata-logo.jpg'
import mipaw from '@/public/mipawmx.jpeg'
import muse from '@/public/muse.jpg'
import tibiaGenius from '@/public/tibia_genius.png'

export const experienceData = [
  {
    title: 'TecNM, Tepic',
    subtitle: 'B.Sc. in Computer Systems Engineering',
    description:
      'Graduated with a 3.7 GPA, specializing in agile app development and software engineering principles.',
    image: itt,
    date: '2018 - 2023',
  },
  {
    title: 'Tata Consultancy Service',
    subtitle: 'Business Intelligence Intern',
    description:
      'Interned @TCS, gaining hands-on experience in data analytics, report generation, and SQL optimization techniques.',
    image: tcs,
    date: '2023 - 2024',
  },
  {
    title: 'MiPawMx',
    subtitle: 'Full-Stack Developer',
    description:
      'Developed modular React.js components for a responsive UI and improved REST API usage through reusable services. Integrated features like recurring subscriptions through Stripe.',
    image: mipaw,
    date: '2024 - present',
  },
] as const

export const projectData = [
  {
    title: 'Muse',
    subtitle: 'Full-Stack Developer',
    description:
      "A web platform that aims to transform the way technology and culture are used, with the goal of creating a safe space where independent artists and cultural organizations can share the richness of Mexico's cultural identity.",
    tags: [
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Tailwind',
      'StoryBook',
      'Figma',
    ],
    image: muse,
  },
  {
    title: 'TibiaGenius',
    subtitle: 'Full-Stack Developer',
    description:
      "A website that recommends equipment variations depending on the player's character stats, vocation, hunting zone, and other factors.",
    tags: [
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Tailwind',
      'StoryBook',
      'Figma',
    ],
    image: tibiaGenius,
  },
]
