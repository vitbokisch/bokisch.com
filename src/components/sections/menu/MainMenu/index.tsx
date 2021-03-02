import React, { FC } from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import { useStore, observer } from '~/store'
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

type Props = {
  menu: Array<{ label: string; href: string }>
}

const component: FC<Props> = ({ menu }) => {
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
                data={menu}
                gap="xLarge"
                itemProps={{
                  size: 'large',
                  onClick: store.runtime.menu.closeMenu,
                }}
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
