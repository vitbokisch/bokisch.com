import element from '~/components/core/element'
import Icon from '../Icon'

export default element
  .config({
    name: 'base/Link',
  })
  .attrs<{ href?: string; onClick?: MouseEvent; icon?: string }>(
    ({ href, onClick, icon }) => {
      return {
        tag: href ? 'a' : onClick ? 'button' : 'span',
        beforeContent: icon ? <Icon name={icon} size="small" /> : undefined,
      }
    }
  )
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
