import rocketstyle from '@vitus-labs/rocketstyle'
import { Text } from '@vitus-labs/elements'
import { styles, makeItResponsive } from '@vitus-labs/unistyle'
import type { Theme } from '~/config/theme'

type ComponentTheme = Parameters<typeof styles>[0]['theme']
type ComponentThemeDefinition = ComponentTheme & { hover: ComponentTheme } & {
  active: ComponentTheme
}

export default rocketstyle<Theme, ComponentThemeDefinition>()()({
  component: Text,
  name: 'core/Element',
})
  .theme((t) => ({
    lineHeight: t.lineHeight.base,
    color: t.isDark ? t.color.light.base : t.color.dark.base,
    fontFamily: t.fontFamily.base,
    margin: t.space.reset,
    padding: t.space.reset,
  }))
  .multiple((t) => ({
    left: {
      textAlign: 'left',
    },
    centered: {
      textAlign: 'center',
    },
    right: {
      textAlign: 'right',
    },
  }))
  .styles(
    (css) => css<any>`
      ${({
        href,
        onClick,
        $rocketstyle,
        $rocketstate: { disabled, active, hover, focus },
      }) => {
        const isDynamic = onClick || href

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
          `}

          /* -------------------------------------------------------- */
        /* HOVER STATE */
        /* -------------------------------------------------------- */
        ${!disabled &&
          !active &&
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
          active &&
          css`
            ${activeTheme};
          `};
        `
      }};
    `
  )
