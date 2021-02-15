import link from '~/components/core/link'
import icon from '../Icon'

const Icon = icon.config({
  name: 'base/Link/Icon',
  consumer: (ctx) => ctx<typeof Link>(({ pseudo }) => ({ pseudo })),
})

const Link = link
  .config({
    name: 'base/Link',
    provider: true,
  })
  .attrs<{ icon?: string }>(({ icon }, theme) => ({
    beforeContent: icon ? <Icon name={icon} size="small" /> : undefined,
    gap: icon ? theme.space.medium : undefined,
  }))
  .theme((t) => ({
    fontSize: 'inherit',
    color: t.isDark ? t.color.light.base : t.color.dark.base,

    hover: {
      color: t.isDark ? t.color.tertiary.base : t.color.tertiary.base,
    },

    active: {
      color: t.isDark ? t.color.tertiary.medium : t.color.tertiary.medium,
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
    transparent: {
      backgroundColor: t.color.transparent,
    },
  }))
  .sizes((t) => ({
    large: {
      fontSize: t.fontSize.xLarge,
    },
  }))

export default Link
