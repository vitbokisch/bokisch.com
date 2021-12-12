import { VFC } from 'react'
import { useWindowResize } from '@vitus-labs/unistyle'
import { element } from '~/components/core'
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

const Line = element.attrs({ tag: 'span' }).theme((_, m) => ({
  position: 'absolute',
  left: '50%',
  width: 4,
  height: '100%',
  transform: 'translateX(-50%)',
  backgroundColor: m('#F3F3F3', '#3f3f3f'),
}))

type Props = {
  data: Array<Record<string, unknown>>
}

const component: VFC<Props> = ({ data }) => {
  const { width } = useWindowResize()

  if (width === 0) return null

  if (width >= 992) {
    const { leftSide, rightSide } = splitData(data)

    return (
      <Timeline>
        <Container
          columns={2}
          size={1}
          width={({ lg }: any) => ({ xs: '90%', lg })}
        >
          <Row>
            <Col>
              <BoxList
                data={leftSide}
                wrapProps={({ state }, { last, first }) => ({
                  first,
                  last,
                  odd: true,
                  state,
                })}
              />
            </Col>
            <Col>
              <BoxList
                data={rightSide}
                wrapProps={({ state }, { last }) => ({
                  last,
                  even: true,
                  state,
                })}
              />
            </Col>
          </Row>
        </Container>
        <Line />
      </Timeline>
    )
  }

  return (
    <Timeline>
      <Container
        columns={12}
        size={{ xs: 12, md: 10, sm: 8 }}
        contentAlignX="center"
        gap={32}
      >
        <Row>
          <BoxList data={data} wrapComponent={Col} />
        </Row>
      </Container>
    </Timeline>
  )
}

export default component
