import React, { FC } from 'react'
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

const component: FC = () => (
  <Background secondary>
    <Section>
      <Header title="Technologies">
        Choosing the right tools might be overhelming. By continuous learning,
        endless experimenting and following new trends and best practices help
        making the right choice easier.
      </Header>

      <Container>
        <Tabs />
        <Badges />
      </Container>
      <Container contentAlignX="center">
        <Row>
          <Col size={8}>
            <Text centered>
              …and many more. Checkout my <Link href="">GitHub stars</Link> to
              see what an interesting stuff have caught my attention. <br />
              Uhm, what will come next?
            </Text>
            <Button label="Give me a new challenge" />
          </Col>
        </Row>
      </Container>
    </Section>
  </Background>
)

component.displayName = 'sections/Technologies'
export default component
