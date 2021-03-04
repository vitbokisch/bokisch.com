import rocketstyle from '@vitus-labs/rocketstyle'
import { Element } from '@vitus-labs/elements'
import { styles, StylesTheme, makeItResponsive } from '@vitus-labs/unistyle'
import type { Theme } from '~/theme'

type ResponsiveThemeDefinition = {
  [I in keyof StylesTheme]:
    | StylesTheme[I]
    | Partial<{
        xs: StylesTheme[I]
        sm: StylesTheme[I]
        md: StylesTheme[I]
        lg: StylesTheme[I]
        xl: StylesTheme[I]
        xxl: StylesTheme[I]
      }>
    | [
        xs?: StylesTheme[I],
        sm?: StylesTheme[I],
        md?: StylesTheme[I],
        lg?: StylesTheme[I],
        xl?: StylesTheme[I],
        xxl?: StylesTheme[I]
      ]
}

type ComponentThemeDefinition = ResponsiveThemeDefinition & {
  hover: ResponsiveThemeDefinition
} & {
  active: ResponsiveThemeDefinition
} & {
  focus: ResponsiveThemeDefinition
}

export default rocketstyle<Theme, ComponentThemeDefinition>()()({
  component: Element,
  name: 'core/Element',
})
  .theme((t) => ({
    fontFamily: t.fontFamily.base,
  }))
  .styles(
    (css) => css<any>`
      ${({ href, onClick, $rocketstyle, $rocketstate }) => {
        const isDynamic = onClick || href
        const { disabled, active, pseudo = {} } = $rocketstate
        const { hover, pressed, focus } = pseudo

        const {
          hover: hoverStyles = {},
          focus: focusStyles = {},
          active: activeStyles = {},
          ...restStyles
        } = $rocketstyle

        const baseTheme = makeItResponsive({
          theme:
            {
              ...restStyles,
            } || {},
          styles,
          css,
        })

        const hoverTheme = makeItResponsive({
          theme: hoverStyles,
          styles,
          css,
        })

        const focusTheme = makeItResponsive({
          theme: focusStyles,
          styles,
          css,
        })

        const activeTheme = makeItResponsive({
          theme: activeStyles,
          styles,
          css,
        })

        return css`
          /* -------------------------------------------------------- */
          /* BASE STATE */
          /* -------------------------------------------------------- */
          ${baseTheme};

          ${!disabled &&
          isDynamic &&
          css`
            cursor: pointer;
          `};

          /* -------------------------------------------------------- */
          /* HOVER STATE */
          /* -------------------------------------------------------- */
          ${!disabled &&
          !active &&
          isDynamic &&
          css`
            &:hover {
              ${hoverTheme};
            }
          `};

          ${hover &&
          css`
            ${hoverTheme};
          `};

          /* -------------------------------------------------------- */
          /* FOCUS STATE */
          /* -------------------------------------------------------- */
          ${!disabled &&
          css`
            &:focus {
              ${focusTheme};
            }
          `};

          ${focus &&
          css`
            ${focusTheme};
          `};

          /* -------------------------------------------------------- */
          /* ACTIVE / PRESSED STATE */
          /* -------------------------------------------------------- */
          ${!disabled &&
          isDynamic &&
          css`
            &:active {
              ${activeTheme};
            }
          `};

          ${!disabled &&
          (active || pressed) &&
          css`
            ${activeTheme};
          `};
        `
      }};
    `
  )
