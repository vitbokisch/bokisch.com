import element from '~/components/core/element'

export default element
  .config({
    name: 'base/Section',
  })
  .attrs({
    block: true,
    tag: 'section',
    contentDirection: 'rows',
    contentAlignY: 'top',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    paddingY: { xs: t.space.xLarge, md: t.space.xxLarge },
  }))
  .variants({
    fullScreen: {
      height: '100vh',
    },
  })
