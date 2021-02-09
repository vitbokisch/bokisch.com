import dynamic from 'next/dynamic'
import element from '~/components/core/element'

const Icon = dynamic(() => import('../Icon'))

export default element
  .config({
    name: 'base/Link',
  })
  .attrs<{ href?: string; onClick?: MouseEvent; icon?: string }>(
    ({ href, onClick, icon }, theme) => {
      return {
        tag: href ? 'a' : onClick ? 'button' : 'span',
        beforeContent: icon ? <Icon name={icon} size="small" /> : undefined,
        gap: icon ? theme.space.medium : undefined,
      }
    }
  )
  .theme((t) => ({
    fontSize: 'inherit',
    textDecoration: 'none',
    color: t.isDark ? t.color.light.base : t.color.dark.base,

    hover: {
      color: t.isDark ? t.color.light.hover : t.color.dark.hover,
    },
    pressed: {
      color: t.isDark ? t.color.light.pressed : t.color.dark.pressed,
    },
  }))
  .states((t) => ({
    primary: {
      color: t.color.primary.base,

      hover: {
        color: t.color.primary.medium,
      },
      pressed: {
        color: t.color.primary.dark,
      },
    },
    secondary: {
      color: t.color.secondary.base,

      hover: {
        color: t.color.secondary.medium,
      },
      pressed: {
        color: t.color.secondary.dark,
      },
    },
    transparent: {
      backgroundColor: t.color.transparent,
    },
  }))
  .sizes((t) => ({
    large: {
      fontSize: t.fontSize.xLarge,
    },
  }))
