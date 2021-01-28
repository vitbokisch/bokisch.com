import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import element from '~/components/core/element'
import line from '~/components/base/Line'
import list from '~/components/core/list'
import Box from './Box'
import Wrapper from './Wrapper'

type SplitData = <T extends Array<unknown>>(
  data: T
) => { leftSide: Partial<T>; rightSide: Partial<T> }

const splitData: SplitData = (data) => {
  const leftSide = []
  const rightSide = []

  data.forEach((item, i) => {
    if (i % 2 === 0) rightSide.push(item)
    else leftSide.push(item)
  })

  return { leftSide, rightSide }
}

const Timeline = element

const Line = element.attrs({ tag: 'span' }).theme((t) => ({
  position: 'absolute',
  left: '50%',
  width: 4,
  height: '100%',
  transform: 'translateX(-50%)',
  backgroundColor: '#F3F3F3',
}))

const List = list.attrs({ component: Box })

const component = ({ data }) => {
  const { leftSide, rightSide } = splitData(data)

  return (
    <Timeline>
      <Container columns={2} size={1} width={960} gutter={0}>
        <Row>
          <Col>
            <List
              data={leftSide}
              extendProps
              wrapProps={(_, { last, first }) => ({ first, last, odd: true })}
              wrapComponent={Wrapper}
            />
          </Col>
          <Col>
            <List
              data={rightSide}
              extendProps
              wrapProps={(_, { last }) => ({ last, even: true })}
              wrapComponent={Wrapper}
            />
          </Col>
        </Row>
      </Container>
      <Line />
    </Timeline>
  )
}

export { Wrapper, Box }
export default component
