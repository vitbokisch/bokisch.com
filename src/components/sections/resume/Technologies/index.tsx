import type { FC } from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Background from '~/components/base/Background'
import Text from '~/components/base/Text'
import Link from '~/components/base/Link'
import Section, { Header } from '~/components/base/Section'
import Tabs from './Tabs'
import Badges from './Badges'
import ChallengeButton from './ChallengeButton'

const component: FC = () => (
  <Background secondary>
    <Section id="technologies">
      <Header title="Technologies">
        Choosing the right tools might be overwhelming. Continuous learning,
        endless experimenting, and following new trends and best practices help
        to make the right choice easier.
      </Header>

      <Container width={({ xs, lg, xl, xxl }) => ({ xs, lg, xl, xxl })}>
        <Tabs />
        <Badges />
      </Container>
      <Container contentAlignX="center">
        <Row>
          <Col size={{ xs: 12, md: 8 }}>
            <Text base paragraph centered>
              …and many more. Check out my{' '}
              <Link primary href="https://github.com/vitbokisch?tab=stars">
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
      <ChallengeButton />
    </Section>
  </Background>
)

component.displayName = 'sections/Technologies'
export default component
