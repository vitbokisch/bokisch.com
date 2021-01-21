import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Header from '~/components/fragments/section/Header'
import Background from '~/components/base/Background'
import Section from '~/components/base/Section'
import ProgressBox from '~/components/fragments/section/ProgressBox'

const component = () => (
  <Background primary>
    <Section>
      <Header title="Knowledge">
        The preparation is the key for a smooth website design and development
        project. Broad knowledge from planning to launch stage is key for
        meeting requirements and effective realization with less headaches. I
        can speak Czech, English and modern JavaScript ;)
      </Header>

      <Container gap={24}>
        <Row>
          <Col>
            <ProgressBox />
          </Col>
          <Col>
            <ProgressBox />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBox />
          </Col>
          <Col>
            <ProgressBox />
          </Col>
        </Row>
      </Container>
    </Section>
  </Background>
)

component.displayName = 'sections/Knowledge'
export default component
