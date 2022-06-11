import { FC } from 'react'
import Head from 'next/head'

type Props = { title?: string }

const component: FC<Props> = ({ title }) => (
  <Head>
    <title>[{title}] Vit Bokisch</title>
    <meta
      name="description"
      content="I'm a person with The Architect personality, analytical mind and passion for discovering the undiscovered."
    />
    <meta
      name="keywords"
      content="Vit Bokisch, Architect, Frontend Engineer, Innovator, React.js, Developer, Resume, Vitus Labs"
    />
  </Head>
)

component.displayName = 'components/meta/Seo'

export default component
