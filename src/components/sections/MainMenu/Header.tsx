import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Element from '~/components/base/Logo'
import Logo, { LogoHeading } from '~/components/base/Logo'
import Icon from '~/components/base/Icon'

const component = () => (
  <Container columns={7}>
    <Row>
      <Col size={5}>
        <Logo />
        <LogoHeading />
      </Col>
      <Col size={2}>
        <Element block contentAlignX="spaceBetween">
          <span>CZ | EN</span>
          <Icon name="menu" medium />
        </Element>
      </Col>
    </Row>
  </Container>
)

export default component
