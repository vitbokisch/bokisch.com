import Box from './Box'
import Wrapper from './Wrapper'
import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import line from '~/components/base/Line'
import list from '~/components/core/list'

const splitData = (data) => {
  const leftSide = []
  const rightSide = []

  data.forEach((item, i) => {
    if (i % 2 === 0) rightSide.push(item)
    else leftSide.push(item)
  })

  return { leftSide, rightSide }
}

const Line = line.theme((t) => ({
  position: 'absolute',
  left: '50%',
  transform: 'rotate(90deg);',
}))

const List = list.attrs({ component: Box })

const component = ({ data }) => {
  const { leftSide, rightSide } = splitData(data)

  return (
    <Container columns={2} size={1} width={960} gap={160} gutter={0}>
      {/* <Line /> */}
      <Row>
        <Col>
          <List itemProps={{ odd: true }} data={leftSide} />
        </Col>
        <Col>
          <List itemProps={{ even: true }} data={rightSide} />
        </Col>
      </Row>
    </Container>
  )
}

export { Wrapper, Box }
export default component
