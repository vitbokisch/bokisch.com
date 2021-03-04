import { ReactNode, VFC } from 'react'
import { ExtractProps } from '~/types'
import { useStore, observer } from '~/store'
import TabList, { Tab } from '~/components/base/TabList'
import Text from '~/components/base/Text'
import Popover from '~/components/base/Popover'

type TabItemProps = ExtractProps<typeof Tab> & { children: ReactNode }

const TabItem: VFC<TabItemProps> = ({ children, ...props }) => (
  <Popover trigger={<Tab {...props} />}>{children}</Popover>
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
      <TabItem
        primary
        label="In love with"
        onClick={() => store.technologies?.setFilter(1)}
      >
        These technologies are the ones{' '}
        <Text strong>I’m currently using actively professionally</Text> or on
        side projects. Therefore, I’m usually familiar with new updates and
        current best practices.
      </TabItem>
      <TabItem
        secondary
        label="Experience with"
        onClick={() => store.technologies?.setFilter(2)}
      >
        These technologies are the ones I have worked with some time ago. I
        usually understand the principles of how they work and{' '}
        <Text strong>would be able to catch up quickly on new updates</Text>.
        I’m not using them actively anymore as I believe another tech can do a
        better job.
      </TabItem>
      <TabItem
        tertiary
        label="A little experience"
        onClick={() => store.technologies?.setFilter(3)}
      >
        These technologies are the ones I have used just occasionally or didn't
        have an opportunity to discover them more yet. They are something
        promising{' '}
        <Text strong>
          I'm willing to learn more and add to my professional dev stack
        </Text>
        .
      </TabItem>
      <TabItem
        neutral
        label="Things of the past"
        onClick={() => store.technologies?.setFilter(4)}
      >
        These technologies are the ones I have worked with a very long time ago,
        studied or used at universities. These tools{' '}
        <Text strong>I do not consider using anymore</Text>. They have given me
        a lot of experience and helped evolve the tech industry in general which
        I’m grateful for.
      </TabItem>
    </TabList>
  )
}

export default observer(component)
