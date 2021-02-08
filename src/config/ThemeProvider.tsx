import React, { FC } from 'react'
import { Provider } from '@vitus-labs/unistyle'
import { IStore, useStore, observer } from '~/store'
import theme from '~/config/theme'
import GlobalStyle from '~/config/globalStyles'

type Props = {
  store?: IStore
}

const component: FC<Props> = ({ children }) => {
  const store = useStore('')

  const newTheme = { ...theme, isDark: store.runtime.theme.isDark }

  return (
    <Provider theme={newTheme}>
      <GlobalStyle theme={newTheme} />
      {children}
    </Provider>
  )
}

export default observer(component)
