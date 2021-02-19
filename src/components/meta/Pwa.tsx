import React from 'react'

const component = () => {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
        href="/public/apple-touch-startup-image-320x460.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
        href="/public/apple-touch-startup-image-640x920.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        href="/public/apple-touch-startup-image-640x1096.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        href="/public/apple-touch-startup-image-750x1294.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
        href="/public/apple-touch-startup-image-1182x2208.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)"
        href="/public/apple-touch-startup-image-1242x2148.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)"
        href="/public/apple-touch-startup-image-748x1024.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
        href="/public/apple-touch-startup-image-1496x2048.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)"
        href="/public/apple-touch-startup-image-768x1004.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
        href="/public/apple-touch-startup-image-1536x2008.png"
      />
      <link rel="manifest" href="/public/manifest.json" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" />
      <meta name="application-name" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta
        name="msapplication-TileImage"
        content="/public/mstile-144x144.png"
      />
      <meta name="msapplication-config" content="/public/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />
    </>
  )
}

export default component
