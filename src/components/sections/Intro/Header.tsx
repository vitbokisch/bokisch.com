import React from 'react'
import Element from '~/components/base/Element'
import List from '~/components/base/List'
import Icon from '~/components/base/Icon'
import Logo, { LogoHeading } from '~/components/base/Logo'
import Switch from '~/components/base/Switch'

const component = () => {
  return (
    <>
      <Element
        block
        beforeContent={<Logo />}
        afterContent={
          <>
            <List contentDirection="inline" gap="xLarge">
              <Switch />
              <Icon name="menu" medium href="/" />
            </List>
          </>
        }
      />
      <Element block beforeContent={LogoHeading} />
    </>
  )
}

export default component
