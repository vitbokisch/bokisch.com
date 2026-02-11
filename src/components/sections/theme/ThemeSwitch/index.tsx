import type { FC } from 'react'
import { useStore } from '~/store'
import Switch from '~/components/base/Switch'

const Component: FC = () => {
  const { isDark, toggleTheme } = useStore()

  return <Switch active={isDark} onChange={toggleTheme} />
}

Component.displayName = 'components/sections/theme/ThemeSwitch'
export default Component
