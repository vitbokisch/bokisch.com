import React, { FC } from 'react'
import { IStore, useStore, observer } from '~/store'
import Icon from '~/components/base/Icon'

type Props = {
  store?: IStore
}

const component: FC = (props) => {
  const store = useStore('')
  const icon = store.runtime.menu.isOpen ? 'close' : 'menu'

  return (
    <Icon
      {...props}
      name={icon}
      medium
      onClick={store.runtime.menu.toggleMenu}
    />
  )
}

export default observer(component)

// export default Icon.config({ component })
//   .compose({ observer })
//   .attrs<{ name: never }>({})
