import { STORAGE, THEME } from '~/config/constants'

export const getDefaultTheme = () => {
  if (typeof window === 'undefined') {
    return THEME.light
  }

  const currentTheme = window.localStorage.getItem(STORAGE.THEME) as
    | keyof typeof THEME
    | null

  if (currentTheme && Object.values(THEME).includes(currentTheme)) {
    return currentTheme
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return THEME.dark
  } else {
    return THEME.light
  }
}
