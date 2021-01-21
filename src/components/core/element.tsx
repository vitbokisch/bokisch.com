import rocketstyle from '@vitus-labs/rocketstyle'
import { Element } from '@vitus-labs/elements'
import { styles, makeItResponsive } from '@vitus-labs/unistyle'
import type { Theme } from '~/config/theme'
import withLink from './withLink'

type ComponentTheme = Parameters<typeof styles>[0]['theme']
type ComponentThemeDefinition = ComponentTheme & { hover: ComponentTheme } & {
  active: ComponentTheme
} & {
  pressed: ComponentTheme
}

export default rocketstyle<Theme, ComponentThemeDefinition>()()({
  component: Element,
  name: 'core/Element',
})
  .compose({ withLink })
  .theme((t) => ({
    boxSizing: 'border-box',
    fontFamily: t.fontFamily.base,
  }))
  .styles(
    (css) => css`
      ${({
        href,
        onClick,
        $rocketstyle,
        $rocketstate: { disabled, active, hover, focus, pressed },
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
          (active || pressed) &&
          css`
            ${activeTheme};
          `};
        `
      }};
    `
  )
