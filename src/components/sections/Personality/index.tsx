import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Box from '~/components/fragments/section/Box'
import Quote from '~/components/base/Quote'
import Background from '~/components/base/Background'
import Link from '~/components/base/Link'
import Section from '~/components/base/Section'

const component = () => (
  <Background primary>
    <Container width={980}>
      <Quote>
        “If I had an hour to solve a problem I'd spend 55 minutes thinking about
        the problem and 5 minutes thinking about solutions.”
      </Quote>
    </Container>

    <Section>
      <Container columns={3} gap={40} gutter={0} size={1}>
        <Row>
          <Col>
            <Box icon="personality" title="INTJ-A Personality">
              I'm a person with <Link href="">The Architect personality</Link>{' '}
              and mind. They say that people with this personality type are
              imaginative yet decisive, ambitious yet private, amazingly
              curious, but they do not squander their energy. They are probably
              right.
            </Box>
          </Col>
          <Col>
            <Box icon="analytics" title="Analytical Mind">
              Everything seems like a puzzle and I really enjoy thinking about
              that and looking for a way to make things happen piece by piece so
              all these pieces together create a harmony. I never get tired of
              it. Well, when I do, I just need to take a rest for a while while
              I can get down back to the business even stronger.
            </Box>
          </Col>
          <Col>
            <Box icon="mind" title="Common sense">
              Put me in a water and I will learn how to swim, give me a
              challenging project and I bring fresh energy, new ideas and be
              happy moving things forward. I was born to face challenges and
              rely on my own common sense.
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </Background>
)

component.displayName = 'sections/Personality'
export default component
