import type { FC } from 'react'
import { element } from '~/components/core'
import heading from '../Heading'
import ProgressList from '../ProgressList'

const Heading = heading.theme((t) => ({
  marginBottom: t.space.medium,
}))

const Box = element
  .attrs({
    contentAlignX: 'block',
    contentAlignY: 'block',
    block: true,
  })
  .theme((t, m) => ({
    color: m(t.color.dark[100], t.color.light[100]),
  }))

type Props = {
  state: string
  title: string
  data: Array<{
    label: string
    level: number
  }>
}

const transformData = (data: Props['data']) =>
  data.map((item) => ({
    label: item.label,
    size: `level${item.level}`,
  }))

const component: FC<Props> = ({ title, data, state }) => (
  <Box tag="article">
    <Heading tag="h1" level4 label={title} />
    <ProgressList
      data={transformData(data)}
      itemProps={{ state }}
      gap="medium"
    />
  </Box>
)

export default component
