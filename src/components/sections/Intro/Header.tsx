import { Provider } from '@vitus-labs/rocketstyle'
import { useWindowResize } from '@vitus-labs/unistyle'
import Element from '~/components/base/Element'
import List from '~/components/base/List'
import Link from '~/components/base/Link'
import Logo, { LogoHeading } from '~/components/base/Logo'
import ThemeSwitch from '~/components/sections/theme/ThemeSwitch'
import MenuTrigger from '~/components/sections/menu/MenuTrigger'

const component = () => {
  const { width } = useWindowResize()

  return (
    <Element
      block
      beforeContentDirection="rows"
      beforeContent={
        <Link href="/" contentDirection="rows">
          <Logo />
          <LogoHeading />
        </Link>
      }
      afterContent={
        <>
          <List contentDirection="inline" gap="xLarge">
            {width >= 576 ? <ThemeSwitch /> : null}
            <Provider inversed>
              <MenuTrigger />
            </Provider>
          </List>
        </>
      }
    />
  )
}

export default component
