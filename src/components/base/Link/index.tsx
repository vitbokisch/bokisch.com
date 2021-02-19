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
  .theme((t, _, v) => ({
    fontSize: 'inherit',
    color: v(t.color.dark.base, t.color.light.base),

    hover: {
      color: v(t.color.tertiary.base, t.color.tertiary.base),
    },

    active: {
      color: v(t.color.tertiary.base, t.color.tertiary.medium),
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
