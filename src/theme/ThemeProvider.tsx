import type { FC, ReactNode } from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import { Provider as UnistyleProvider } from '@vitus-labs/unistyle'
import { useStore } from '~/store'
import theme from './theme'
import GlobalStyle from './GlobalStyles'

type Props = {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => {
  const { theme: themeVariant } = useStore()

  return (
    <Provider theme={theme} mode={themeVariant} provider={UnistyleProvider}>
      <GlobalStyle theme={theme} />
      {children}
    </Provider>
  )
}

export default Component
