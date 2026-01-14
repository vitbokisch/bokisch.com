import type { FC } from 'react'
import Background from '~/components/base/Background'
import CardList from '~/components/base/CardList'
import { Col, Container, Row } from '~/components/base/grid'
import Section, { Header } from '~/components/base/Section'
import data from './data'

const transformedData = data.map((item) => ({
  title: item.position,
  subtitle: item.company,
  note: item.date,
  list: item.responsibilities,
}))

const component: FC = () => (
  <Background secondary>
    <Section id="education">
      <Header title="Work Experience">
        Delivered solutions for startups and enterprises. From building MVPs to
        scaling production systems, I've solved real problems at every stage.
      </Header>

      <Container
        width={{ xs: '90%', xl: 1380 }}
        columns={6}
        size={{ xs: 6, sm: 3, md: 2 }}
        gap={{ xs: 32, md: 64 }}
        gutter={0}
        contentAlignX="center"
      >
        <Row>
          <CardList data={transformedData} wrapComponent={Col} />
        </Row>
      </Container>
    </Section>
  </Background>
)

component.displayName = 'sections/Knowledge'
export default component
