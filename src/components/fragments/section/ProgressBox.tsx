import React from 'react'
import heading from '~/components/base/Heading'
import element from '~/components/core/element'
import ProgressList from '~/components/base/ProgressList'

const Heading = heading.theme((t) => ({
  marginBottom: t.space.medium,
}))

const Box = element.attrs({
  contentDirection: 'rows',
  contentAlignX: 'block',
  contentAlignY: 'block',
  block: true,
})

type Item = {
  label: string
  level: number
}

type Props = {
  title: string
  data: Array<Item>
}

const transformData = (data: Array<Item>) =>
  data.map((item) => ({
    label: item.label,
    size: `level${item.level}`,
  }))

const component = ({ title, data, state }: Props) => (
  <Box>
    <Heading level4 label={title} />
    <ProgressList
      data={transformData(data)}
      itemProps={{ state }}
      gap="medium"
    />
  </Box>
)

export default component
