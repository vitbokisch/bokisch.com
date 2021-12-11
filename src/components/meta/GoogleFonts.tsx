import { VFC } from 'react'
import config from '~/config'

const component: VFC = () => {
  if (!config.googleFonts) return null

  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href={config.googleFonts} />

      <noscript>
        <link rel="stylesheet" href={config.googleFonts} />
      </noscript>
    </>
  )
}

export default component
