import { VFC } from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Background from '~/components/base/Background'
import Section, { Header } from '~/components/base/Section'
import CardList from '~/components/base/CardList'
import data from './data'

const transformedData = data.map((item) => ({
  title: item.name,
  subtitle: item.field,
  note: item.year,
  list: item.courses,
  logo: item.logo,
}))

const component: VFC = () => (
  <Background primary>
    <Background triangle />
    <Section id="education">
      <Header title="Education">
        An abroad experience is something I am really proud of. I have studied
        in Belgium and China. Different approaches, different cultures... what
        an eye openers. Bachelor degree
      </Header>

      <Container
        width={{ xs: '90%', xl: 980 }}
        columns={6}
        size={{ xs: 6, sm: 4, md: 3 }}
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
