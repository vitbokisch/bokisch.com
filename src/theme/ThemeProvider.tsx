import type { FC, ReactNode } from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import { Provider as provider } from '@vitus-labs/unistyle'
import { useStore, observer } from '~/store'
import theme from './theme'
import GlobalStyle from './GlobalStyles'

type Props = {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => {
  const { runtime } = useStore()

  return (
    <Provider theme={theme} mode={runtime.theme.variant} provider={provider}>
      <GlobalStyle theme={theme} blocked={runtime.menu.isOpen} />
      {children}
    </Provider>
  )
}

export default observer(Component)
