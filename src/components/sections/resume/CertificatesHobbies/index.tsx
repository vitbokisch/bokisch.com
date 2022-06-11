import { FC } from 'react'
import Background from '~/components/base/Background'
import Section, { Header } from '~/components/base/Section'
import { Container, Row, Col } from '~/components/base/grid'
import CardList from '~/components/base/CardList'
import data from './data'

const transformedData = data.map((item) => ({
  title: item.title,
  icon: item.icon,
  list: item.data,
}))

const component: FC = () => (
  <Background primary>
    <Section id="certificates-and-hobbies">
      <Header title="Certificates & Hobbies">
        Having hobbies and side projects is for me as important as having solid
        expertise in the professional field. There are many different things I
        like to do in my free time. Below are just some of them.
      </Header>

      <Container
        columns={6}
        size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
        gap={40}
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

component.displayName = 'sections/CertificatesHobbies'
export default component
