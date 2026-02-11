import { useCallback, useEffect } from 'react'
import { getDefaultTheme } from '~/utils/theme'

type Props = {
  setTheme: (theme: 'light' | 'dark') => void
}

const useThemeListener = ({ setTheme }: Props) => {
  useEffect(() => {
    const defaultTheme = getDefaultTheme()
    setTheme(defaultTheme)
  }, [setTheme])

  const updateTheme = useCallback(
    (e: StorageEvent) => {
      if (e.newValue === 'light' || e.newValue === 'dark') {
        setTheme(e.newValue)
      }
    },
    [setTheme],
  )

  useEffect(() => {
    window.addEventListener('storage', updateTheme)
    return () => window.removeEventListener('storage', updateTheme)
  }, [updateTheme])
}

export default useThemeListener
