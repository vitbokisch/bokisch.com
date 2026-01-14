import rocketstyle from '@vitus-labs/rocketstyle'
import { List } from '@vitus-labs/elements'
import { styles, makeItResponsive, value } from '@vitus-labs/unistyle'

type ListStyles = Parameters<typeof makeItResponsive>[0]['styles']
const listStyles: ListStyles = ({ theme: t, css, rootSize }) => css`
  ${t.gap && `margin: ${value(t.gap / 2, rootSize)} !important;`};
  ${t.indent && `padding: ${value(t.indent / 2, rootSize)} !important;`};
`

const dimensions = { indent: 'indent', gaps: 'gap', gapsY: 'gapY' } as const

export default rocketstyle({
  dimensions,
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
      padding: t.space.xSmall / 2,
    },
    medium: {
      padding: t.space.medium / 2,
    },
    large: {
      padding: t.space.large / 2,
    },
    xLarge: {
      padding: t.space.xLarge / 2,
    },
    xxLarge: {
      padding: t.space.xxLarge / 2,
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
      ${({
        $rocketstyle,
        rootElement,
      }: // biome-ignore lint/suspicious/noExplicitAny: Complex rocketstyle library props typing
      any) => {
        const { gap, indent, ...restStyles } = $rocketstyle

        const baseTheme = makeItResponsive({
          theme: restStyles,
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
