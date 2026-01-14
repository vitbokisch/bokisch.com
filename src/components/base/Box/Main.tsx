import { element } from '~/components/core'

export default element
  .config({ name: 'base/Box' })
  .attrs({
    block: true,
    contentAlignX: 'block',
    contentAlignY: 'block',
  })
  .theme((t, m) => ({
    height: '100%',
    backgroundColor: m(t.color.light.base, t.color.dark.base),
    borderRadius: t.borderRadius.base,
    color: m(t.color.dark.base, t.color.light[100]),
  }))
  .states((t, m) => ({
    secondary: {
      backgroundColor: m(t.color.light[100], t.color.dark[100]),
    }
  }))
  .sizes((t, m) => ({
    small: {
      padding: t.space.xSmall,
      boxShadow: m(t.shadow.light.small, t.shadow.dark.small),
    },
    medium: {
      padding: { xs: 18, md: 36 },
      boxShadow: m(t.shadow.light.large, t.shadow.dark.large),
    },
    large: {
      padding: { xs: 24, md: 40 },
      boxShadow: m(t.shadow.light.large, t.shadow.dark.large),
    },
  }))
