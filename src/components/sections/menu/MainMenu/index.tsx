import React, { FC } from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import { IStore, useStore, observer } from '~/store'
import { Container, Row, Col } from '~/components/base/grid'
import section from '~/components/base/Section'
import LinkList from '~/components/base/LinkList'
import SocialList from '~/components/sections/socials/SocialList'
import Background from './Background'
import Header from './HeaderA'

const Section = section
  .attrs({
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme({
    fullScreen: true,
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
  })

const data = [
  { label: 'About Me', href: '#about-me' },
  { label: 'Knowledge', href: '#knowledge' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Work Experience', href: '#work-experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates & Hobbies', href: '#certificates-and-hobbies' },
  { label: 'Career Timeline', href: '#career-timeline' },
]

type Props = {
  store?: IStore
}

const component: FC<Props> = () => {
  const store = useStore('')

  if (!store.runtime.menu.isOpen) return null

  return (
    <Section>
      <Background />
      <Container gutter={0} gap={{ xs: 48, sm: 0 }} columns={{ xs: 1, sm: 7 }}>
        <Header />

        <Row gutter={64}>
          <Col size={{ xs: 1, sm: 3 }}>
            <Provider inversed>
              <LinkList
                data={data}
                gap="xLarge"
                itemProps={{ size: 'large' }}
              />
            </Provider>
          </Col>
          <Col size={{ xs: 0, sm: 2 }} />
          <Col size={{ xs: 1, sm: 2 }}>
            <SocialList itemProps={{ light: true }} />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default observer(component)
