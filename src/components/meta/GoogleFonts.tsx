import React from 'react'
import config from '~/config'

const component = () => {
  if (!config.googleFonts) return null

  return (
    <>
      <title title="hello"></title>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href={config.googleFonts} />
    </>
  )
}

export default component
