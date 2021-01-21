import element from '~/components/core/element'

export default element
  .config({ name: 'base/Box/Main' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
    contentAlignY: 'block',
    tag: 'article',
  })
  .theme((t) => ({
    backgroundColor: t.isDark ? t.color.dark.base : t.color.light[100],
    borderRadius: t.borderRadius.base,
    padding: 40,
    boxShadow: '0px 2px 44px rgba(211, 211, 211, 0.5)',
  }))
  .variants((t) => ({
    noShadow: {
      boxShadow: undefined,
      padding: t.space.reset,
    },
  }))
