import element from '~/components/core/element'

export default element
  .config({ name: 'base/Line' })
  .attrs({
    block: true,
    tag: 'hr',
  })
  .theme((t, _, v) => ({
    width: '100%',
    margin: t.space.reset,
    padding: t.space.reset,
    border: '0',
    borderWidthTop: t.borderWidth.base,
    borderStyle: t.borderStyle.base,
    borderColor: v(t.color.light[200], t.color.dark[200]),
    marginTop: t.space.large,
    marginBottom: t.space.xLarge,
  }))
