import { useCallback, useEffect } from 'react'

type Props = {
  setTheme: (theme: 'light' | 'dark') => void
}

const useThemeListener = ({ setTheme }: Props) => {
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
