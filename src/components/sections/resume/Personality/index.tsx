import { VFC } from 'react'
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
            <Card icon="personality" title="INFJ-T Personality">
              I&apos;m a person with{' '}
              <Link
                primary
                href="https://www.16personalities.com/profiles/2d5836f3f4526"
              >
                The Advocate
              </Link>{' '}
              personality and mind. I am are very imaginative, open-minded and
              curious. I prefer novelty over stability and focus on hidden
              meanings and future possibilities. I am more empathic and less
              competitive with focus on harmony and cooperation.
            </Card>

            <Card icon="analytics" title="Analytical Mind">
              Everything seems like a puzzle. I enjoy thinking about that and
              looking for a way to make things happen piece by piece so all
              these pieces together create harmony. I never get tired of it.
              Well, when I do, I just need to take a rest for a while to get
              down back to the business even stronger.
            </Card>

            <Card icon="mind" title="Common sense">
              I have a strong drive for constant improvement. I bring fresh
              energy, new ideas, and am happy moving things forward. I always
              see what can be done better way and strive to make it happen. I
              believe the key to success is in a deep understanding of problems
              to make informed decisions and improvements.
            </Card>
          </CardList>
        </Row>
      </Container>
    </Section>
  </Background>
)

component.displayName = 'sections/Personality'
export default component
