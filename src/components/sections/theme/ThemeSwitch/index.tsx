import { VFC } from 'react'
import { IStore, useStore, observer } from '~/store'
import Switch from '~/components/base/Switch'

type Props = {
  store?: IStore
}

const component: VFC<Props> = () => {
  const store = useStore('')

  return (
    <Switch
      active={store.runtime.theme.isDark}
      onChange={store.runtime.theme.toggleTheme}
    />
  )
}

component.displayName = 'components/sections/theme/ThemeSwitch'
export default observer(component)
