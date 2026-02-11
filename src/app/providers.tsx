'use client'

import { useLayoutEffect, type ReactNode } from 'react'
import '~/config/rocketstyle'
import { StoreContext, useCreateStore } from '~/store'
import { ThemeProvider } from '~/theme'
import useThemeListener from '~/hooks/useThemeListener'

export default function Providers({ children }: { children: ReactNode }) {
  const store = useCreateStore()

  useLayoutEffect(() => {
    document.documentElement.style.colorScheme = store.theme
  }, [store.theme])

  useThemeListener({
    setTheme: store.setTheme,
  })

  return (
    <StoreContext.Provider value={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreContext.Provider>
  )
}
