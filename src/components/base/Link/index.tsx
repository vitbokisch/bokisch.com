import { link } from '~/components/core'
import icon from '../Icon'

const Icon = icon.config({
  name: 'base/Link/Icon',
  consumer: (ctx) =>
    ctx<typeof Link>(({ pseudo, state }) => ({ pseudo, state })),
})

type Props = { icon?: string }

const Link = link
  .config({
    name: 'base/Link',
    provider: true,
  })
  .attrs<Props>(({ icon }, theme) => ({
    beforeContent: icon ? <Icon name={icon} size="small" /> : undefined,
    gap: icon ? theme.space.medium : undefined,
  }))
  .theme((t, m) => ({
    color: m(t.color.dark.base, t.color.light.base),

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
