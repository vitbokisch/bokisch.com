import React from 'react'
import Heading from '~/components/base/Heading'
import Progress from '~/components/base/Progress'

type Item = {
  label: string
  value: number
}

type Props = {
  title: string
  data: Array<Item>
}

const component = ({ title, data }: Props) => (
  <article>
    <Heading label={title} />
    <Progress primary />
    <Progress primary />
  </article>
)

export default component
