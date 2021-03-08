import config from '~/config'

const component = () => {
  if (!config.googleFonts) return null

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={config.googleFonts} />

      <noscript>
        <link rel="stylesheet" href={config.googleFonts} />
      </noscript>
    </>
  )
}

export default component
