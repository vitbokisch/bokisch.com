import element from '~/components/core/element'

export default element
  .config({ name: 'base/Box' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
    contentAlignY: 'block',
  })
  .theme((t) => ({
    height: '100%',
    backgroundColor: t.isDark ? t.color.dark.base : t.color.light.base,
    borderRadius: t.borderRadius.base,
    color: t.isDark ? t.color.light[100] : t.color.dark.base,
  }))
  .sizes((t) => ({
    small: {
      padding: t.space.xSmall,
      boxShadow: t.isDark ? t.shadow.dark.small : t.shadow.light.small,
    },
    medium: {
      padding: 36,
      boxShadow: t.isDark ? t.shadow.dark.large : t.shadow.light.large,
    },
    large: {
      padding: 40,
      boxShadow: t.isDark ? t.shadow.dark.large : t.shadow.light.large,
    },
  }))
