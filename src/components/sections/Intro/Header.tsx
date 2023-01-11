import { FC } from 'react'
import { useStore, observer } from '~/store'
import { Provider } from '~/theme'
import Base from '~/components/base/Base'
import List from '~/components/base/List'
import Logo from '~/components/sections/brand/Logo'
import ThemeSwitch from '~/components/sections/theme/ThemeSwitch'
import MenuTrigger from '~/components/sections/menu/MenuTrigger'

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
          <Provider inversed>
            <MenuTrigger />
          </Provider>
        </List>
      }
    />
  )
}

export default observer(Component)
