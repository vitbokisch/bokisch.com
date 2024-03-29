import { useStore, observer } from '~/store'
import Base from '~/components/base/Base'
import List from '~/components/base/List'
import Logo from '~/components/sections/brand/Logo'
import ThemeSwitch from '~/components/sections/theme/ThemeSwitch'
import MenuTrigger from '~/components/sections/menu/MenuTrigger'

const MobileSettings = Base.theme({ marginY: 16 })

const Component = () => {
  const { runtime } = useStore()

  const { width } = runtime.viewport

  return (
    <>
      <Base
        block
        content={<Logo onClick={runtime.menu.closeMenu} />}
        afterContent={
          <List contentDirection="inline" gap="xLarge">
            {width >= 576 ? <ThemeSwitch /> : null}
            <MenuTrigger light />
          </List>
        }
      />
      {width < 576 && (
        <MobileSettings>
          <ThemeSwitch />
        </MobileSettings>
      )}
    </>
  )
}

Component.displayName = 'sections/menu/MainMenu'

export default observer(Component)
