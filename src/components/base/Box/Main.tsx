import element from '~/components/core/element'

export default element
  .config({ name: 'base/Box' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
    contentAlignY: 'block',
  })
  .theme((t, _, v) => ({
    height: '100%',
    backgroundColor: v(t.color.light.base, t.color.dark.base),
    borderRadius: t.borderRadius.base,
    color: v(t.color.dark.base, t.color.light[100]),
  }))
  .sizes((t, _, v) => ({
    small: {
      padding: t.space.xSmall,
      boxShadow: v(t.shadow.light.small, t.shadow.dark.small),
    },
    medium: {
      padding: { xs: 18, md: 36 },
      boxShadow: v(t.shadow.light.large, t.shadow.dark.large),
    },
    large: {
      padding: { xs: 24, md: 40 },
      boxShadow: v(t.shadow.light.large, t.shadow.dark.large),
    },
  }))
