import { FC } from 'react'
import config from '~/config'

const component: FC = () => {
  if (!config.googleFonts) return null

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <link rel="stylesheet" href={config.googleFonts} />

      <noscript>
        <link rel="stylesheet" href={config.googleFonts} />
      </noscript>
    </>
  )
}

export default component
