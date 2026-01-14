import type { FC } from 'react'
import { observer, useStore } from '~/store'
import Base from '~/components/base/Base'
import List from '~/components/base/List'
import Logo from '~/components/sections/brand/Logo'
import ThemeSwitch from '~/components/sections/theme/ThemeSwitch'

const Component: FC = () => {
  const { runtime } = useStore()
  const { width } = runtime.viewport

  return (
    <Base
      block
      beforeContentDirection="rows"
      beforeContent={Logo}
      afterContent={
        <List tag="div" contentDirection="inline" gap="xLarge">
          {width >= 576 ? <ThemeSwitch /> : null}
        </List>
      }
    />
  )
}

Component.displayName = 'sections/Intro/Header'

export default observer(Component)
