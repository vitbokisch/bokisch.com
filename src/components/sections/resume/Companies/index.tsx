import type { FC } from 'react'
import Background from '~/components/base/Background'
import { Col, Container, Row } from '~/components/base/grid'
import Heading from '~/components/base/Heading'
import IconLogoList from '~/components/base/IconLogoList'
import Section, { Header } from '~/components/base/Section'
import Text from '~/components/base/Text'
import data from './data'

type Data = typeof data
const normalizeData = (data: Data) =>
  data.reduce(
    (acc, item, i) => {
      acc.push(item)

      if (i === 3 || i === 6) {
        acc.push({ component: () => <Col size={{ xs: 0, md: 1.5 }} /> })
      }

      return acc
    },
    [] as Record<string, unknown>[],
  )

const Component: FC = () => (
  <Background secondary>
    <Section id="years-of-shipping">
      <Header title="Years of Shipping">
        <Text strong>13+ years</Text> of experience. I've built dozens of
        products from zero to thousands of users — everything from greenfield
        apps to scaling legacy systems. The work has touched millions globally.
      </Header>

      <Container>
        <Heading level3 centered>
          Shipped excellence with:
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
    </Section>
  </Background>
)

Component.displayName = 'sections/WorkExperience'
export default Component
