import React from 'react'
import Element from '~/components/base/Element'
import List from '~/components/base/List'
import Logo, { LogoHeading } from '~/components/base/Logo'
import ThemeSwitch from '~/components/sections/theme/ThemeSwitch'
import MenuTrigger from '~/components/sections/menu/MenuTrigger'

const component = () => {
  return (
    <>
      <Element
        block
        beforeContent={<Logo />}
        afterContent={
          <>
            <List contentDirection="inline" gap="xLarge">
              <ThemeSwitch />
              <MenuTrigger />
            </List>
          </>
        }
      />
      <Element block beforeContent={LogoHeading} />
    </>
  )
}

export default component
