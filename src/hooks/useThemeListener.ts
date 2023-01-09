import { useEffect, useCallback, useLayoutEffect } from 'react'
import { STORAGE, THEME } from '~/config/constants'

type Props = {
  theme: string
  setTheme: (theme: string) => void
}
const useThemeListener = ({ theme, setTheme }: Props) => {
  // if (typeof window === 'undefined') return

  // an initial hook for defining default theme
  useLayoutEffect(() => {
    const currentTheme = window.localStorage.getItem(STORAGE.THEME)

    if (currentTheme && Object.values(THEME).includes(currentTheme)) {
      setTheme(currentTheme)
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme(THEME.dark)
    } else {
      setTheme(THEME.light)
    }
  }, [setTheme])

  const updateTheme = useCallback(
    (e: StorageEvent) => {
      if (e.newValue) setTheme(e.newValue)
    },
    [setTheme]
  )

  // a hook for saving a default theme to local storage for the next time
  // and for observing changes and updating UI in other tabs as well
  useEffect(() => {
    const currentTheme = window.localStorage.getItem(STORAGE.THEME)
    if (currentTheme !== theme)
      window.localStorage.setItem(STORAGE.THEME, theme)

    window.addEventListener('storage', updateTheme)

    return () => window.removeEventListener('storage', updateTheme)
  }, [theme, updateTheme])
}

export default useThemeListener
