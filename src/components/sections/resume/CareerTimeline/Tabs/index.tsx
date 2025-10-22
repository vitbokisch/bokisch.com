import type { FC } from 'react'
import { useStore, observer } from '~/store'
import TabList, { Tab } from '~/components/base/TabList'

const Component: FC = () => {
  const { career } = useStore('')

  return (
    <TabList
      block
      contentAlignX="center"
      gap="large"
      gapY="medium"
      contentDirection={{ xs: 'rows', lg: 'inline' }}
    >
      <Tab
        primary
        label="Work Experience"
        onClick={() => career?.setFilter('work')}
      />
      <Tab
        secondary
        label="Own projects"
        onClick={() => career?.setFilter('sideProject')}
      />
      <Tab
        neutral
        label="Education"
        onClick={() => career?.setFilter('education')}
      />
    </TabList>
  )
}

export default observer(Component)
