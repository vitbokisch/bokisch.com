import { STORAGE, THEME } from '~/config/constants'

// eslint-disable-next-line import/prefer-default-export
export const getDefaultTheme = () => {
  if (typeof window === 'undefined') {
    return THEME.light
  }

  const currentTheme = window.localStorage.getItem(STORAGE.THEME) as
    | keyof typeof THEME
    | null

  if (currentTheme && Object.values(THEME).includes(currentTheme)) {
    return currentTheme
  }

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return THEME.dark
  }

  return THEME.light
}
