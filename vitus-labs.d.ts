import '@vitus-labs/core'
import '@vitus-labs/rocketstyle'
import type { StylesTheme } from '@vitus-labs/unistyle'
import type { Theme } from './src/theme'

export type DefinedBreakpoins = {
  xs: true
  sm: true
  md: true
  lg: true
  xl: true
  xxl: true
  xxxl: true
}

export type ResponsiveStyles = Partial<{
  [I in keyof StylesTheme]:
    | StylesTheme[I]
    | Partial<{
        xs: StylesTheme[I]
        sm: StylesTheme[I]
        md: StylesTheme[I]
        lg: StylesTheme[I]
        xl: StylesTheme[I]
        xxl: StylesTheme[I]
        xxxl: StylesTheme[I]
      }>
    | Partial<
        [
          xs: StylesTheme[I],
          sm: StylesTheme[I],
          md: StylesTheme[I],
          lg: StylesTheme[I],
          xl: StylesTheme[I],
          xxl: StylesTheme[I],
          xxxl: StylesTheme[I]
        ]
      >
}>

export type Styles = ResponsiveStyles & {
  hover: ResponsiveStyles | null | undefined
} & {
  active: ResponsiveStyles | null | undefined
} & {
  focus: ResponsiveStyles | null | undefined
}

declare module '@vitus-labs/core' {
  export interface Breakpoints extends DefinedBreakpoins {}
}

declare module '@vitus-labs/rocketstyle' {
  export interface ThemeDefault extends Theme {}
  export interface StylesDefault extends Styles {}
}
