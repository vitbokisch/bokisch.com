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
      state={store.runtime.theme.variant}
      onChange={store.runtime.theme.toggleTheme}
    />
  )
}

export default observer(component)
