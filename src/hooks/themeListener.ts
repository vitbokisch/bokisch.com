import { useEffect, useCallback } from 'react'
import { STORAGE, THEME } from '~/config/constants'

type Props = {
  theme: string
  setTheme: (theme: string) => void
}
const themeListener = ({ theme, setTheme }: Props) => {
  // an initial hook for defining default theme
  useEffect(() => {
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
  }, [])

  const updateTheme = useCallback((e: StorageEvent) => {
    if (e.newValue) setTheme(e.newValue)
  }, [])

  // a hook for saving a default theme to local storage for the next time
  // and for observing changes and updating UI in other tabs as well
  useEffect(() => {
    const currentTheme = window.localStorage.getItem(STORAGE.THEME)
    if (currentTheme !== theme)
      window.localStorage.setItem(STORAGE.THEME, theme)

    window.addEventListener('storage', updateTheme)

    return () => window.removeEventListener('storage', updateTheme)
  }, [theme])
}

export default themeListener
