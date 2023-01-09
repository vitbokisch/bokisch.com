import element from './element'
import withLink from './withLink'

export default element
  .config({
    name: 'core/link',
  })
  .compose({
    withLink,
  })
  .attrs<{
    href?: string
    onClick?: MouseEvent | (() => void)
  }>(({ href, onClick }) => ({
    // eslint-disable-next-line no-nested-ternary
    tag: href ? 'a' : onClick ? 'button' : 'span',
  }))
  .theme((t, m) => ({
    transition: t.transition.base,
    border: 'none',
    backgroundColor: t.color.transparent,
    textDecoration: 'none',
    outline: 'none',
    padding: t.space.reset,
    margin: t.space.reset,
    color: m(t.color.dark.base, t.color.light.base),
    userSelect: 'none',

    hover: {
      color: t.color.tertiary.base,
    },

    active: {
      color: t.color.tertiary.medium,
    },
  }))
  .states((t) => ({
    primary: {
      color: t.color.primary.base,

      hover: {
        color: t.color.primary.medium,
      },
      active: {
        color: t.color.primary.dark,
      },
    },
    secondary: {
      color: t.color.secondary.base,

      hover: {
        color: t.color.secondary.medium,
      },
      active: {
        color: t.color.secondary.dark,
      },
    },
    tertiary: {
      color: t.color.tertiary.base,

      hover: {
        color: t.color.tertiary.medium,
      },
      active: {
        color: t.color.tertiary.dark,
      },
    },
    neutral: {
      color: t.color.neutral.base,

      hover: {
        color: t.color.neutral.medium,
      },
      active: {
        color: t.color.neutral.dark,
      },
    },
    light: {
      color: t.color.light.base,

      hover: {
        color: t.color.tertiary.base,
      },

      active: {
        color: t.color.tertiary.medium,
      },
    },
    dark: {
      color: t.color.dark.base,

      hover: {
        color: t.color.tertiary.base,
      },

      active: {
        color: t.color.tertiary.medium,
      },
    },
    transparent: {
      backgroundColor: t.color.transparent,
    },
  }))
