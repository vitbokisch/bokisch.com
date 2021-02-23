import React, { FC } from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import { IStore, useStore, observer } from '~/store'
import { Container, Row, Col } from '~/components/base/grid'
import section from '~/components/base/Section'
import LinkList from '~/components/base/LinkList'
import SocialList from '~/components/sections/socials/SocialList'
import Background from './Background'
import Header from './Header'

const Section = section
  .attrs({
    contentAlignY: 'top',
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
    <Provider inversed>
      <Section>
        <Background />
        <Header />
        <Container
          gutter={0}
          gap={{ xs: 36, md: 0 }}
          columns={{ xs: 1, md: 7 }}
        >
          <Row
            css={`
              margin-top: 64px;
            `}
          >
            <Col size={{ xs: 1, md: 3 }}>
              <LinkList
                data={data}
                gap="xLarge"
                itemProps={{ size: 'large' }}
              />
            </Col>
            <Col size={{ xs: 1, md: 1 }} />
            <Col size={{ xs: 1, md: 2 }}>
              <SocialList itemProps={{ light: true }} />

              {/* <LinkList
              data={print}
              gap="large"
              itemProps={{ state: 'secondary' }}
            /> */}
            </Col>
          </Row>
        </Container>
      </Section>
    </Provider>
  )
}

export default observer(component)
