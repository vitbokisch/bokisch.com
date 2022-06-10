import { FC } from 'react'
import { ExtractProps } from '~/types'
import { useStore, observer } from '~/store'
import Icon from '~/components/base/Icon'

type Props = ExtractProps<typeof Icon>

const Component: FC<Omit<Props, 'name'>> = (props) => {
  const store = useStore('')
  const icon = store.runtime.menu.isOpen ? 'close' : 'menu'
  const label = store.runtime.menu.isOpen ? 'Close menu' : 'Open menu'

  return (
    <Icon
      {...props}
      name={icon}
      medium
      onClick={store.runtime.menu.toggleMenu}
      aria-label={label}
    />
  )
}

Component.displayName = 'sections/menu/MenuTrigger'
export default observer(Component)
