import React, { FC } from 'react'
import { IStore, useStore, observer } from '~/store'
import Switch from '~/components/base/Switch'

type Props = {
  store?: IStore
}

const component: FC<Props> = () => {
  const store = useStore('')

  return (
    <Switch
      active={store.runtime.theme.isDark}
      onChange={store.runtime.theme.toggleTheme}
    />
  )
}

export default Switch.config({ component }).compose({ observer })
