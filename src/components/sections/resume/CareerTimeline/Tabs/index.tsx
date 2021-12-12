import { VFC } from 'react'
import { useStore, observer } from '~/store'
import TabList, { Tab } from '~/components/base/TabList'

const component: VFC = () => {
  const store = useStore('')

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
        onClick={() => store.career?.setFilter(1)}
      />
      <Tab
        secondary
        label="Own projects"
        onClick={() => store.career?.setFilter(2)}
      />
      <Tab
        tertiary
        label="Internships"
        onClick={() => store.career?.setFilter(3)}
      />
      <Tab
        neutral
        label="Education"
        onClick={() => store.career?.setFilter(4)}
      />
    </TabList>
  )
}

export default observer(component)
