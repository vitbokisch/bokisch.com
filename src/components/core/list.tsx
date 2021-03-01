import rocketstyle from '@vitus-labs/rocketstyle'
import { List } from '@vitus-labs/elements'
import { styles, makeItResponsive, value } from '@vitus-labs/unistyle'
import type { Theme } from '~/theme'

type ComponentTheme = Parameters<typeof styles>[0]['theme']
type ComponentThemeDefinition = ComponentTheme

const listStyles = ({ theme: t, css, rootSize }: any) => css`
  ${t.gap && `margin: ${value(rootSize, [t.gap / 2])} !important;`};
  ${t.indent && `padding: ${value(rootSize, [t.indent / 2])} !important;`};
`

export default rocketstyle<
  Theme,
  ComponentThemeDefinition & Partial<{ gap: number; indent: number }>
>()({
  dimensions: { indent: 'indent', gaps: 'gap', gapsY: 'gapY' } as const,
  useBooleans: false,
})({
  component: List,
  name: 'core/List',
})
  .attrs({
    rootElement: true,
    contentDirection: 'rows',
  })
  .theme((t) => ({
    boxSizing: 'border-box',
    margin: t.space.reset,
    padding: t.space.reset,
    listStyleType: 'none',
  }))
  .indent((t) => ({
    small: {
      indent: t.space.xSmall / 2,
    },
    medium: {
      indent: t.space.medium / 2,
    },
    large: {
      indent: t.space.large / 2,
    },
    xLarge: {
      indent: t.space.xLarge / 2,
    },
    xxLarge: {
      indent: t.space.xxLarge / 2,
    },
  }))
  .gaps((t) => ({
    small: {
      margin: (t.space.xSmall * -1) / 2,
      gap: t.space.xSmall,
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
  .gapsY((t) => ({
    xSmall: {
      margin: t.space.xSmall,
    },
    small: {
      margin: t.space.small,
    },
    medium: {
      margin: t.space.medium,
    },
    large: {
      margin: t.space.large,
    },
    xLarge: {
      margin: t.space.xLarge,
    },
    xxLarge: {
      margin: t.space.xxLarge,
    },
  }))
  .styles(
    (css) => css`
      ${({ $rocketstyle, rootElement }: any) => {
        const { gap, indent, ...restStyles } = $rocketstyle

        const baseTheme = makeItResponsive({
          theme:
            {
              ...restStyles,
            } || {},
          styles,
          css,
        })

        const listTheme = makeItResponsive({
          theme: { gap, indent },
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
