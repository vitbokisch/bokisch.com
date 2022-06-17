import { FC } from 'react'
import Head from 'next/head'
import config from '~/config'

type Props = { title?: string; description?: string; keywords?: string }

const component: FC<Props> = ({
  title,
  description = config.description,
  keywords = config.keywords,
}) => (
  <Head>
    <title>[{title}] Vit Bokisch</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Head>
)

component.displayName = 'components/meta/Seo'

export default component
