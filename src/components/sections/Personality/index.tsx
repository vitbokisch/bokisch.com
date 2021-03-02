import React, { VFC } from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Card from '~/components/base/Card'
import CardList from '~/components/base/CardList'
import Background from '~/components/base/Background'
import Link from '~/components/base/Link'
import Section, { Header } from '~/components/base/Section'

const component: VFC = () => (
  <Background primary>
    <Section id="about-me">
      <Header title="About me" hidden />
      <Container
        columns={6}
        gap={40}
        gutter={0}
        contentAlignX="center"
        size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
      >
        <Row>
          <CardList rootElement={false} wrapComponent={Col}>
            <Card icon="personality" title="INTJ-A Personality">
              I'm a person with{' '}
              <Link
                primary
                href="https://www.16personalities.com/profiles/2d5836f3f4526"
              >
                The Architect
              </Link>{' '}
              personality and mind. They say that people with this personality
              type are imaginative yet decisive, ambitious yet private,
              amazingly curious, but they do not squander their energy. They are
              probably right.
            </Card>

            <Card icon="analytics" title="Analytical Mind">
              Everything seems like a puzzle and I really enjoy thinking about
              that and looking for a way to make things happen piece by piece so
              all these pieces together create a harmony. I never get tired of
              it. Well, when I do, I just need to take a rest for a while while
              I can get down back to the business even stronger.
            </Card>

            <Card icon="mind" title="Common sense">
              Put me in a water and I will learn how to swim, give me a
              challenging project and I bring fresh energy, new ideas and be
              happy moving things forward. I was born to face challenges and
              rely on my own common sense.
            </Card>
          </CardList>
        </Row>
      </Container>
    </Section>
  </Background>
)

component.displayName = 'sections/Personality'
export default component
