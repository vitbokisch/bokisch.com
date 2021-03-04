import { useWindowResize } from '@vitus-labs/unistyle'
import { useStore, observer } from '~/store'
import Base from '~/components/base/Base'
import List from '~/components/base/List'
import Logo from '~/components/sections/brand/Logo'
import ThemeSwitch from '~/components/sections/theme/ThemeSwitch'
import MenuTrigger from '~/components/sections/menu/MenuTrigger'

const component = () => {
  const { width } = useWindowResize()
  const store = useStore('')

  return (
    <Base
      block
      content={<Logo onClick={store.runtime.menu.closeMenu} />}
      afterContent={
        <List contentDirection="inline" gap="xLarge">
          {width >= 576 ? <ThemeSwitch /> : null}
          <MenuTrigger light />
        </List>
      }
    />
  )
}

export default observer(component)
