import React from 'react'
import Background from '~/components/base/Background'
import Section from '~/components/base/Section'
import { Container, Row, Col } from '~/components/base/grid'
import Header from '~/components/fragments/section/Header'
import BoxList from '~/components/fragments/section/BoxList'
import data from './data'

const transformedData = data.map((item) => ({
  title: item.title,
  icon: item.icon,
  list: item.data,
}))

const component = () => (
  <Background primary>
    <Section>
      <Header title="Certificates & Hobbies">
        Having a broad knowledge from several fields is important to understand.
        Having a broad knowledge important to understand from several is.
      </Header>

      <Container size={4} gap={40}>
        <Row>
          <BoxList data={transformedData} wrapComponent={Col} />
        </Row>
      </Container>
    </Section>
  </Background>
)

component.displayName = 'sections/CertificatesHobbies'
export default component
