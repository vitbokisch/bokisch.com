import React from 'react'
import { useWindowResize } from '@vitus-labs/unistyle'
import element from '~/components/core/element'
import { Container, Row, Col } from '~/components/base/grid'
import BoxList from './BoxList'

type SplitData = <T extends Array<any>>(
  data: T
) => { leftSide: Array<any>; rightSide: Array<any> }

const splitData: SplitData = (data) =>
  data.reduce(
    (acc, item, i) => {
      if (i % 2 === 0) acc.rightSide.push(item)
      else acc.leftSide.push(item)

      return acc
    },
    { leftSide: [], rightSide: [] }
  )

const Timeline = element

const Line = element.attrs({ tag: 'span' }).theme((t, _, v) => ({
  position: 'absolute',
  left: '50%',
  width: 4,
  height: '100%',
  transform: 'translateX(-50%)',
  backgroundColor: v('#F3F3F3', '#3f3f3f'),
}))

const component = ({ data }) => {
  const { width } = useWindowResize()

  if (width < 992) {
    return (
      <Timeline>
        <Container columns={12} size={8} contentAlignX="center" gap={32}>
          <Row>
            <BoxList data={data} wrapComponent={Col} />
          </Row>
        </Container>
      </Timeline>
    )
  }

  const { leftSide, rightSide } = splitData(data)

  return (
    <Timeline>
      <Container columns={2} size={1} width={{ xs: '90%', lg: 960 }} gutter={0}>
        <Row>
          <Col>
            <BoxList
              data={leftSide}
              wrapProps={(_, { last, first }) => ({ first, last, odd: true })}
            />
          </Col>
          <Col>
            <BoxList
              data={rightSide}
              wrapProps={(_, { last }) => ({ last, even: true })}
            />
          </Col>
        </Row>
      </Container>
      <Line />
    </Timeline>
  )
}

export default component
