import React from 'react'
import config from '~/config'

const APPLE_ICONS = [57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 1024]
const FAVICONS = [16, 32]

const component = () => (
  <>
    {APPLE_ICONS.map((item, i) => {
      const size = `${item}x${item}`

      return (
        <link
          key={i}
          rel="apple-touch-icon"
          sizes={size}
          href={`/public/apple-touch-icon-${size}.png`}
        />
      )
    })}

    {FAVICONS.map((item, i) => {
      const size = `${item}x${item}`

      return (
        <link
          key={i}
          rel="icon"
          type="image/png"
          sizes={size}
          href={`/public/favicon-${size}.png`}
        />
      )
    })}

    <link rel="shortcut icon" href={config.favicon?.src} />
  </>
)

export default component
