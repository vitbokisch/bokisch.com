import element from '~/components/core/element'

export default element
  .config({
    name: 'base/Link',
  })
  .attrs<{ href?: string; onClick?: MouseEvent }>(({ href, onClick }) => {
    return {
      tag: href ? 'a' : onClick ? 'button' : 'span',
    }
  })
  .theme((t) => ({
    fontSize: 'inherit',
    color: t.color.primary.base,
    textDecoration: 'none',

    hover: {
      color: t.color.primary.hover,
    },
    pressed: {
      color: t.color.primary.pressed,
    },
  }))
  .states((t) => ({
    transparent: {
      backgroundColor: t.color.transparent,
    },
  }))
