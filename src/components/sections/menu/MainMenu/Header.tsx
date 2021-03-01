import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Element from '~/components/base/Element'
import Logo, { LogoHeading } from '~/components/base/Logo'
import MenuTrigger from '~/components/sections/menu/MenuTrigger'

const component = () => (
  <Container columns={7}>
    <Row>
      <Col size={5}>
        <Logo />
        <LogoHeading />
      </Col>
      <Col size={2}>
        <Element block contentAlignX="spaceBetween">
          <span>&nbsp;</span>
          <MenuTrigger light />
        </Element>
      </Col>
    </Row>
  </Container>
)

export default component
