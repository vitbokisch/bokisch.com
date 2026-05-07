import Switch from '~/components/base/Switch'
import { isDarkSignal, toggleTheme } from '~/store'

const Component = () => (
  <Switch active={isDarkSignal()} onChange={toggleTheme} />
)

Component.displayName = 'components/sections/theme/ThemeSwitch'
export default Component
