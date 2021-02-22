import link from '~/components/core/link'
import icon from '../Icon'

const Icon = icon.config({
  name: 'base/Link/Icon',
  consumer: (ctx) =>
    ctx<typeof Link>(({ pseudo, state }) => ({ pseudo, state })),
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
      color: t.color.tertiary.base,
    },

    active: {
      color: t.color.tertiary.medium,
    },
  }))
  .sizes((t) => ({
    large: {
      fontSize: { xs: t.fontSize.medium, lg: t.fontSize.xLarge },
    },
  }))

export default Link
