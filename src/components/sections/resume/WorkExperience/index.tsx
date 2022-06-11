import { FC } from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Background from '~/components/base/Background'
import Section, { Header } from '~/components/base/Section'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import Button from '~/components/base/Button'
import IconLogoList from '~/components/base/IconLogoList'
import data from './data'

type Data = typeof data
const normalizeData = (data: Data) =>
  data.reduce((acc, item, i) => {
    acc.push(item)

    if (i === 3 || i === 6) {
      acc.push({ component: <Col size={{ xs: 0, md: 1.5 }} /> })
    }

    return acc
  }, [] as Array<Record<string, unknown>>)

const Component: FC = () => (
  <Background primary>
    <Section id="work-experience">
      <Header title="Work Experience">
        I am a <Text strong>freelancer with 8+ years of experience</Text> in the
        business in various positions. I have participated in several mid-large
        applications and realized tens of websites from the green field to
        production. My work has helped thousands of people around the world.
      </Header>

      <Container>
        <Heading level3 centered>
          Companies I have collaborated with:
        </Heading>
      </Container>

      <Container
        gap={{ xs: 8, sm: 16, md: 32 }}
        size={{ xs: 8, sm: 6, md: 3 }}
        contentAlignX="center"
      >
        <Row>
          <IconLogoList
            rootElement={false}
            data={normalizeData(data)}
            itemProps={{ variant: 'box' }}
            wrapComponent={Col}
          />
        </Row>
      </Container>

      <Button primary label="Show career timeline" href="#career-timeline" />
    </Section>
  </Background>
)

Component.displayName = 'sections/WorkExperience'
export default Component
