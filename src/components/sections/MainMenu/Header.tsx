import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Logo, { LogoHeading } from '~/components/base/Logo'

const component = () => (
  <Container columns={7}>
    <Row>
      <Col size={5}>
        <Logo />
        <LogoHeading />
      </Col>
      <Col size={2}>CZ | EN</Col>
    </Row>
  </Container>
)

export default component
