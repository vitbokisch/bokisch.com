import element from '~/components/core/element'

export default element
  .config({ name: 'base/Box/Main' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
    contentAlignY: 'block',
  })
  .theme((t) => ({
    backgroundColor: t.isDark ? t.color.dark.base : t.color.light.base,
    borderRadius: t.borderRadius.base,
    height: '100%',
  }))
  .sizes((t) => ({
    small: {
      padding: t.space.xSmall,
      boxShadow: '0px 2px 16px rgba(211, 211, 211, 0.5)',
    },
    medium: {
      padding: 36,
      boxShadow: '0px 2px 44px rgba(211, 211, 211, 0.5)',
    },
    large: {
      padding: 40,
      boxShadow: '0px 2px 44px rgba(211, 211, 211, 0.5)',
    },
  }))
  .multiple((t) => ({
    noShadow: {
      boxShadow: undefined,
    },
  }))
