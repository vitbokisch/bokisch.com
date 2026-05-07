import type { Theme } from './theme'

declare module '@pyreon/rocketstyle' {
  interface ThemeDefault extends Theme {}
}

declare module '@pyreon/unistyle' {
  interface ThemeDefault extends Theme {}
}
