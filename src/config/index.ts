type Config = {
  url: string
  title: string
  description: string
  googleFonts: string
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
  description: `I'm a person with The Architect personality, analytical mind and passion for discovering the undiscovered.`,
  googleFonts:
    'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,500;1,300&display=swap',
  openGraph: {
    url: 'https://bokisch.com',
    image: require('~/assets/socials/preview.jpg'),
  },
}

export default config
