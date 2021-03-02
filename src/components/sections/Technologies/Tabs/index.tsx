import { VFC } from 'react'
import { useStore, observer } from '~/store'
import TabList from '~/components/base/TabList'
import text from '~/components/base/Text'
import Tab from '~/components/base/Tab'
import Popover from '~/components/base/Popover'

const Text = text.config({ inversed: true })

const Item = ({ children, ...props }) => (
  <Popover trigger={<Tab {...props} />}>
    <Text>{children}</Text>
  </Popover>
)

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
      <Item
        primary
        label="In love with"
        onClick={() => store.technologies?.setFilter(1)}
      >
        These technologies are the ones I’m currently using actively
        professionally or on side projects. Therefore, I’m usually familiar with
        new updates and current best practices.
      </Item>
      <Item
        secondary
        label="Experience with"
        onClick={() => store.technologies?.setFilter(2)}
      >
        These technologies are the ones I have worked with some time ago. I
        usually understand the principles of how they works and{' '}
        <Text strong>would be able to catchup quickly on new updates</Text>. I’m
        not using them actively anymore as I believe another tech can do a
        better job.
      </Item>
      <Item
        tertiary
        label="A little experience"
        onClick={() => store.technologies?.setFilter(3)}
      >
        These technologies are the ones I have worked with some time ago. I
        usually understand the principles of how they works and would be able to
        catchup quickly on new updates. I’m not using them actively anymore as I
        believe another tech can do a better job.
      </Item>
      <Item
        neutral
        label="Things o the past"
        onClick={() => store.technologies?.setFilter(4)}
      >
        These technologies are the ones I have worked very long time ago,
        studied or used them at universities. These tools{' '}
        <Text strong>I do not consider to use anymore</Text>. They have given me
        a lot of experience and helped evolve the tech industry in general.
        which I’m really grateful for.
      </Item>
    </TabList>
  )
}

export default observer(component)
