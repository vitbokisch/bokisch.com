import type { FC } from 'react'
import Background from '~/components/base/Background'
import { Col, Container, Row } from '~/components/base/grid'
import Heading from '~/components/base/Heading'
import IconLogoList from '~/components/base/IconLogoList'
import Section, { Header } from '~/components/base/Section'
import Text from '~/components/base/Text'
import data from './data'

const Component: FC = () => (
  <Background secondary>
    <Section id="years-of-shipping">
      <Header title="Years of Shipping">
        <Text strong>13+ years architecting product-grade web apps</Text>—
        frontend-led, full-stack capable — from MVP to scale. Most recently
        Product Engineer at Exaforce ($75M Series A, AI security). Founding
        engineer at 2 startups. Open-source maintainer
      </Header>

      <Container>
        <Heading level3 centered>
          Shipped excellence with:
        </Heading>
      </Container>

      <Container
        gap={{ xs: 8, sm: 16, md: 32 }}
        size={{ xs: 8, sm: 6, md: 4 }}
        contentAlignX="center"
      >
        <Row>
          <IconLogoList
            rootElement={false}
            data={data}
            itemProps={{ variant: 'box' }}
            wrapComponent={Col}
          />
        </Row>
      </Container>

      <Container contentAlignX="center">
        <Row>
          <Col size={{ xs: 12, md: 8 }}>
            <Text base paragraph centered>
              From 3-person founding teams to Series C engineering orgs.
            </Text>
            <Text base paragraph centered>
              Each role taught me a different way to ship product under
              different constraints.
            </Text>
          </Col>
        </Row>
      </Container>
    </Section>
  </Background>
)

Component.displayName = 'sections/WorkExperience'
export default Component
