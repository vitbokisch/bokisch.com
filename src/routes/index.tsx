import { Meta } from '@pyreon/zero/meta'
import Home from '~/components/pages/Home'
import config from '~/config'

export default function HomePage() {
  return (
    <>
      <Meta
        title="Vit Bokisch"
        description={config.description}
        canonical={config.url}
        siteName="Vit Bokisch"
        twitterCard="summary_large_image"
      />
      <Home />
    </>
  )
}
