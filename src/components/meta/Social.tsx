import React from 'react'
import config from '~/config'

const component = () => {
  // if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config?.openGraph?.url || config.url} />
      <meta
        property="og:title"
        content={config?.openGraph?.title || config.title}
      />
      <meta
        property="og:description"
        content={config?.openGraph?.description || config.description}
      />
      <meta property="og:image" content={config?.openGraph?.image} />

      <meta property="twitter:card" content={config?.twitter?.card} />
      <meta
        property="twitter:url"
        content={config?.twitter?.url || config.url}
      />
      <meta
        property="twitter:title"
        content={config?.twitter?.title || config.title}
      />
      <meta
        property="twitter:description"
        content={config?.twitter?.description || config.description}
      />
      <meta
        property="twitter:image"
        content={config?.twitter?.description || config?.openGraph?.image}
      />
    </>
  )
}

export default component
