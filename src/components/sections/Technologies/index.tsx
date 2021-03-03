import React, { VFC } from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Background from '~/components/base/Background'
import button from '~/components/base/Button'
import Text from '~/components/base/Text'
import Link from '~/components/base/Link'
import Section, { Header } from '~/components/base/Section'
import Tabs from './Tabs'
import Badges from './Badges'

const Button = button.theme((t) => ({
  marginTop: t.space.large,
}))

const component: VFC = () => (
  <Background secondary>
    <Section id="technologies">
      <Header title="Technologies">
        Choosing the right tools might be overwhelming. By continuous learning,
        endless experimenting, and following new trends and best practices help
        to make the right choice easier.
      </Header>

      <Container width={({ lg, xl, xxl }: any) => ({ xs: '90%', lg, xl, xxl })}>
        <Tabs />
        <Badges />
      </Container>
      <Container contentAlignX="center">
        <Row>
          <Col size={{ xs: 12, md: 8 }}>
            <Text base paragraph centered>
              …and many more. Check out my{' '}
              <Link href="https://github.com/vitbokisch?tab=stars">
                Github stars
              </Link>{' '}
              to see what interesting stuff has caught my attention.
            </Text>
            <Text base centered>
              Uhm, what will come next?
            </Text>
          </Col>
        </Row>
      </Container>
      <Button label="Give me a new challenge" />
    </Section>
  </Background>
)

component.displayName = 'sections/Technologies'
export default component
