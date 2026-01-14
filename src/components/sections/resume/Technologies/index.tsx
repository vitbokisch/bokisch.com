import type { FC } from 'react'
import Background from '~/components/base/Background'
import { Col, Container, Row } from '~/components/base/grid'
import Link from '~/components/base/Link'
import Section, { Header } from '~/components/base/Section'
import Text from '~/components/base/Text'
import Badges from './Badges'
import ChallengeButton from './ChallengeButton'

const component: FC = () => (
  <Background primary>
    <Section id="technologies">
      <Header title="Favorite Tech Stack">
        I don't just follow trends—I chase what actually solves problems. Every
        tool here is battle-tested, continuously refined, and obsessively
        optimized for the work that matters.
      </Header>

      <Container width={({ xs, lg, xl, xxl }) => ({ xs, lg, xl, xxl })}>
        <Badges />
      </Container>

      <Container contentAlignX="center">
        <Row>
          <Col size={{ xs: 12, md: 8 }}>
            <Text base paragraph centered>
              …and many more I've collected along the way. Curious what caught
              my eye? Check out my{' '}
              <Link primary href="https://github.com/vitbokisch?tab=stars">
                Github stars
              </Link>{' '}
              to see what's pushing my thinking forward. Always learning. Always
              building.
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
