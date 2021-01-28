import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Header from '~/components/fragments/section/Header'
import BoxList from '~/components/fragments/section/BoxList'
import Background from '~/components/base/Background'
import Section from '~/components/base/Section'
import data from './data'

const transformedData = data.map((item) => ({
  title: item.name,
  subtitle: item.field,
  note: item.year,
  list: item.courses,
}))

const component = () => (
  <Section>
    <Header title="Education">
      An abroad experience is something I am really proud of. I have studied in
      Belgium and China. Different approaches, different cultures... what an eye
      openers. Bachelor degree
    </Header>

    <Container width={980} columns={2} size={1} gap={64} gutter={0}>
      <Row>
        <BoxList data={transformedData} wrapComponent={Col} />
      </Row>
    </Container>
    <Background triangle />
  </Section>
)

component.displayName = 'sections/Knowledge'
export default component
