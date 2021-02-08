import element from '~/components/core/element'

export default element
  .config({ name: 'base/Line' })
  .attrs({
    block: true,
    tag: 'hr',
  })
  .theme((t) => ({
    width: '100%',
    margin: t.space.reset,
    padding: t.space.reset,
    border: '0',
    borderWidthTop: t.borderWidth.base,
    borderStyle: t.borderStyle.base,
    borderColor: t.isDark ? t.color.dark.base : t.color.light[200],
    marginTop: t.space.large,
    marginBottom: t.space.xLarge,
  }))
