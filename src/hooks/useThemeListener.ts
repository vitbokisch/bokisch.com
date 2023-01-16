import { useEffect, useCallback } from 'react'
import { STORAGE, THEME } from '~/config/constants'
import { getDefaultTheme } from '~/utils/theme'

type Props = {
  theme: keyof typeof THEME
  setTheme: (theme: keyof typeof THEME) => void
}
const useThemeListener = ({ theme, setTheme }: Props) => {
  // an initial hook for defining default theme
  useEffect(() => {
    const defaultTheme = getDefaultTheme()

    setTheme(defaultTheme)
  }, [setTheme])

  const updateTheme = useCallback(
    (e: StorageEvent) => {
      if (e.newValue) {
        setTheme(e.newValue as any)
      }
    },
    [setTheme]
  )

  useEffect(() => {
    setTheme(theme)
    window.localStorage.setItem(STORAGE.THEME, theme)
  }, [theme])

  // a hook for saving a default theme to local storage for the next time
  // and for observing changes and updating UI in other tabs as well
  useEffect(() => {
    window.addEventListener('storage', updateTheme)

    return () => window.removeEventListener('storage', updateTheme)
  }, [updateTheme])
}

export default useThemeListener
