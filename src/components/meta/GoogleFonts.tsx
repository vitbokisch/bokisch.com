import config from '~/config'

const component = () => {
  if (!config.googleFonts) return null

  return <link rel="stylesheet" href={config.googleFonts} />
}

export default component
