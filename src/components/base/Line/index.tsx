import { element } from '~/components/core'

export default element
  .config({ name: 'base/Line' })
  .attrs({
    tag: 'hr',
  })
  .theme((t, m) => ({
    width: '100%',
    margin: t.space.reset,
    padding: t.space.reset,
    border: '0',
    borderWidthTop: t.borderWidth.base,
    borderStyle: t.borderStyle.base,
    borderColor: m(t.color.light[200], t.color.dark[200]),
    marginTop: t.space.large,
    marginBottom: t.space.xLarge,
  }))
