import element from '~/components/core/element'

export default element
  .config({ name: 'base/Background' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
  })
  .theme((t) => ({
    margin: t.space.reset,
    padding: t.space.reset,
  }))
  .states((t) => ({
    primary: {
      backgroundColor: t.color.light[100],
    },
    secondary: {
      backgroundColor: t.color.light[200],
    },
  }))
