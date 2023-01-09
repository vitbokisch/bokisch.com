type Config = {
  url: string
  title: string
  description: string
  keywords: string
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
  description: `I'm a person with The Advocate personality, analytical mind and passion for discovering the undiscovered.`,
  keywords:
    'Vit Bokisch, Architect, Frontend Engineer, Innovator, React.js, Developer, Resume, Vitus Labs',
  googleFonts:
    'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,500;1,300&display=swap',
  openGraph: {
    url: 'https://bokisch.com',
    // eslint-disable-next-line global-require
    image: require('~/assets/socials/preview.jpg'),
  },
}

export default config
