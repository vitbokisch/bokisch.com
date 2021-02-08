import React, { FC } from 'react'
import { IStore, useStore, observer } from '~/store'
import BadgeList from '~/components/base/BadgeList'

const states = {
  1: 'primary',
  2: 'secondary',
  3: 'tertiary',
  4: 'neutral',
}

const transformedData = (data) =>
  data.map((item) => ({
    label: item.title,
    state: states[item.level],
    href: item.link,
  }))

type Props = {
  store?: IStore
}

const component: FC<Props> = () => {
  const store = useStore('')

  return (
    <BadgeList
      data={transformedData(store.technologies?.dataByLevel)}
      gap="medium"
      gapY="medium"
      contentAlignX="center"
    />
  )
}

export default observer(component)
