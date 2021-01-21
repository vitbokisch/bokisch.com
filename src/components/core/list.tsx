import rocketstyle from '@vitus-labs/rocketstyle'
import { styles, makeItResponsive } from '@vitus-labs/unistyle'
import { List } from '@vitus-labs/elements'
import type { Theme } from '~/config/theme'

type ComponentTheme = Parameters<typeof styles>[0]['theme']
type ComponentThemeDefinition = ComponentTheme

const listStyles = ({ theme: t, css, rootSize }) => css`
  margin: ${t.gap / 2}px;
`

export default rocketstyle<
  Theme,
  ComponentThemeDefinition & { gap?: number }
>()({
  dimensions: { gaps: 'gap' },
})({
  component: List,
  name: 'core/List',
})
  .attrs({
    rootElement: true,
    contentDirection: 'rows',
    vertical: true,
  })
  .theme((t) => ({
    boxSizing: 'border-box',
    margin: t.space.reset,
    padding: t.space.reset,
    listStyleType: 'none',
  }))
  .gaps((t) => ({
    small: {
      margin: (t.space.small * -1) / 2,
      gap: t.space.small,
    },
    medium: {
      margin: (t.space.medium * -1) / 2,
      gap: t.space.medium,
    },
    large: {
      margin: (t.space.large * -1) / 2,
      gap: t.space.large,
    },
    xLarge: {
      margin: (t.space.xLarge * -1) / 2,
      gap: t.space.xLarge,
    },
    xxLarge: {
      margin: (t.space.xxLarge * -1) / 2,
      gap: t.space.xxLarge,
    },
  }))
  .styles(
    (css) => css`
      ${({ $rocketstyle, rootElement }) => {
        const { gap, ...restStyles } = $rocketstyle

        const baseTheme = makeItResponsive({
          theme:
            {
              ...restStyles,
            } || {},
          styles,
          css,
        })

        const listTheme = makeItResponsive({
          theme: { gap },
          styles: listStyles,
          css,
        })

        return css`
          /* -------------------------------------------------------- */
          /* BASE STATE */
          /* -------------------------------------------------------- */
          flex-wrap: wrap;
          ${baseTheme};

          ${rootElement &&
          css`
            & > * {
              ${listTheme};
            }
          `};
        `
      }};
    `
  )
