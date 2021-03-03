import { element } from '~/components/core'

export default element
  .config({
    name: 'base/Section',
  })
  .attrs<{ id?: string }>({
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
