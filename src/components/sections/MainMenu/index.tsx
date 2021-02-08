import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import section from '~/components/base/Section'
import LinkList from '~/components/base/LinkList'
import Background from './Background'
import Header from './Header'

const Section = section
  .attrs({
    contentAlignY: 'top',
  })
  .theme({
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

const socials = [
  { label: 'vit@bokisch.com', href: 'mailto:vit@bokisch.com', icon: 'email' },
  { label: 'bokisch.com', href: 'https://bokisch.com', icon: 'home' },
  {
    label: '/vitbokisch',
    href: 'https://www.linkedin.com/in/vitbokisch/',
    icon: 'linkedin',
  },
  {
    label: '/vitbokisch',
    href: 'https://github.com/vitbokisch',
    icon: 'github',
  },
  {
    label: '/vitbokisch',
    href: 'https://medium.com/@vitbokisch',
    icon: 'medium',
  },
  {
    label: '/vitbokisch',
    href: 'https://twitter.com/vitbokisch',
    icon: 'twitter',
  },
  {
    label: '/vitbokisch',
    href: 'https://stackoverflow.com/users/9223826/v%c3%adt-bokisch',
    icon: 'stackoverflow',
  },
  // { label: 'vitbokisch', href: '', icon: 'skype' },
]

const print = [
  { label: 'Download PDF', href: '', icon: 'email' },
  { label: 'Print Document', href: '', icon: 'home' },
]

const component = () => (
  <Section>
    <Background />
    <Header />
    <Container columns={7}>
      <Row
        css={`
          margin-top: 64px;
        `}
      >
        <Col size={5}>
          <LinkList data={data} gap="xLarge" itemProps={{ size: 'large' }} />
        </Col>
        <Col size={2}>
          <LinkList data={socials} gap="large" />
          <LinkList
            data={print}
            gap="large"
            itemProps={{ state: 'secondary' }}
          />
        </Col>
      </Row>
    </Container>
  </Section>
)

export default component
