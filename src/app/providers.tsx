'use client'

import type { ReactNode } from 'react'
import '~/config/rocketstyle'
import { StoreContext, useCreateStore } from '~/store'
import { ThemeProvider } from '~/theme'
import useThemeListener from '~/hooks/useThemeListener'

export default function Providers({ children }: { children: ReactNode }) {
  const store = useCreateStore()

  useThemeListener({
    setTheme: store.setTheme,
  })

  return (
    <StoreContext.Provider value={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreContext.Provider>
  )
}
