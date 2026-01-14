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
      color: t.color.primary.base,
    },

    active: {
      color: t.color.primary.medium,
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
    light: {
      color: t.color.light.base,

      hover: {
        color: t.color.primary.base,
      },

      active: {
        color: t.color.primary.medium,
      },
    },
    dark: {
      color: t.color.dark.base,

      hover: {
        color: t.color.primary.base,
      },

      active: {
        color: t.color.primary.medium,
      },
    },
    transparent: {
      backgroundColor: t.color.transparent,
    },
  }))
