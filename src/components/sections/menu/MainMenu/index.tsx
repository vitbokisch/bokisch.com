import React, { FC } from 'react'
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
  })

const data = [
  { label: 'About Me', href: '/something' },
  { label: 'Knowledge', href: '/something' },
  { label: 'Technologies', href: '/something' },
  { label: 'Work Experience', href: '/something' },
  { label: 'Education', href: '/something' },
  { label: 'Certificates & Hobbies', href: '/something' },
  { label: 'Career Timeline', href: '/something' },
]

// const print = [
//   { label: 'Download PDF', href: '', icon: 'email' },
//   { label: 'Print Document', href: '', icon: 'home' },
// ]

type Props = {
  store?: IStore
}

const component: FC<Props> = () => {
  const store = useStore('')

  if (!store.runtime.menu.isOpen) return null

  return (
    <Section>
      <Background />
      <Header />
      <Container columns={7}>
        <Row
          css={`
            margin-top: 64px;
          `}
        >
          <Col size={3}>
            <LinkList data={data} gap="xLarge" itemProps={{ size: 'large' }} />
          </Col>
          <Col size={2} />
          <Col size={2}>
            <SocialList />

            {/* <LinkList
              data={print}
              gap="large"
              itemProps={{ state: 'secondary' }}
            /> */}
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default observer(component)
