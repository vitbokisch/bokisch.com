import React, { FC } from 'react'
import { IStore, useStore, observer } from '~/store'
import TabList from '~/components/base/TabList'
import Tab from '~/components/base/Tab'

type Props = {
  store?: IStore
}

const component: FC<Props> = () => {
  const store = useStore('')

  return (
    <TabList block contentAlignX="center" gap="large" gapY="medium">
      <Tab
        primary
        label="In love with"
        onClick={() => store.technologies?.setFilter(1)}
      />
      <Tab
        secondary
        label="Experience with"
        onClick={() => store.technologies?.setFilter(2)}
      />
      <Tab
        tertiary
        label="A little experience"
        onClick={() => store.technologies?.setFilter(3)}
      />
      <Tab
        neutral
        label="Things o the past"
        onClick={() => store.technologies?.setFilter(4)}
      />
    </TabList>
  )
}

export default observer(component)
