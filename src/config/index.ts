import image from '~/assets/socials/preview.jpg'

type Config = {
  url: string
  title: string
  description: string
  keywords: string
  openGraph?: Partial<{
    url: string
    image: string
    title: string
    description: string
  }>
  twitter?: Partial<{
    title: string
    image: string
    url: string
    description: string
    card: string
  }>
}

const config: Config = {
  url: 'https://bokisch.com',
  title: 'Vit Bokisch',
  description: `I'm a person with The Advocate personality, analytical mind and passion for discovering the undiscovered.`,
  keywords:
    'Vit Bokisch, Architect, Frontend Engineer, Innovator, React.js, Developer, Resume, Vitus Labs',
  openGraph: {
    url: 'https://bokisch.com',
    image,
  },
}

export default config
