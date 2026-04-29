import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { STORAGE, THEME } from '~/config/constants'
import { getDefaultTheme } from '~/utils/theme'

type ThemeVariant = 'light' | 'dark'

type StoreContextType = {
  theme: ThemeVariant
  isDark: boolean
  setTheme: (theme: ThemeVariant) => void
  toggleTheme: () => void
}

export const StoreContext = createContext<StoreContextType>({
  theme: 'light',
  isDark: false,
  setTheme: () => {},
  toggleTheme: () => {},
})

export const useStore = () => useContext(StoreContext)

export const useCreateStore = () => {
  const [theme, setThemeState] = useState<ThemeVariant>(THEME.light)

  useEffect(() => {
    setThemeState(getDefaultTheme())
  }, [])

  const setTheme = useCallback((variant: ThemeVariant) => {
    setThemeState(variant)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE.THEME, variant)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE.THEME, next)
      }
      return next
    })
  }, [])

  return {
    theme,
    isDark: theme === 'dark',
    setTheme,
    toggleTheme,
  }
}
