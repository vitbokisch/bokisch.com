import { FC, ReactNode } from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import { Provider as provider } from '@vitus-labs/unistyle'
import { useStore, observer } from '~/store'
import theme from './theme'
import GlobalStyle from './globalStyles'

type Props = {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => {
  const store = useStore('')

  return (
    <Provider
      theme={theme}
      mode={store.runtime.theme.variant as any}
      provider={provider}
    >
      <GlobalStyle theme={theme} blocked={store.runtime.menu.isOpen} />
      {children}
    </Provider>
  )
}

export default observer(Component)
