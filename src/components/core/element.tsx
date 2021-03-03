import rocketstyle from '@vitus-labs/rocketstyle'
import { Element } from '@vitus-labs/elements'
import { styles, makeItResponsive } from '@vitus-labs/unistyle'
import type { Theme } from '~/theme'

type ComponentTheme = Parameters<typeof styles>[0]['theme']
type ResponsiveThemeDefinition = {
  [I in keyof ComponentTheme]:
    | ComponentTheme[I]
    | Partial<{
        xs: ComponentTheme[I]
        sm: ComponentTheme[I]
        md: ComponentTheme[I]
        lg: ComponentTheme[I]
        xl: ComponentTheme[I]
        xxl: ComponentTheme[I]
      }>
    | [
        xs?: ComponentTheme[I],
        sm?: ComponentTheme[I],
        md?: ComponentTheme[I],
        lg?: ComponentTheme[I],
        xl?: ComponentTheme[I],
        xxl?: ComponentTheme[I]
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
          //@ts-ignore
          styles,
          css,
        })

        const hoverTheme = makeItResponsive({
          theme: hoverStyles,
          //@ts-ignore
          styles,
          css,
        })

        const focusTheme = makeItResponsive({
          theme: focusStyles,
          //@ts-ignore
          styles,
          css,
        })

        const activeTheme = makeItResponsive({
          theme: activeStyles,
          //@ts-ignore
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
