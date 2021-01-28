import list from '~/components/core/list'
import element from '~/components/core/element'

const Item = element
  .attrs({
    block: true,
    tag: 'li',
    contentAlignX: 'center',
  })
  .multiple((t) => ({
    centered: {
      textAlign: 'center',
    },
  }))

export default list.config({ name: 'base/TextList' }).attrs({
  tag: 'ul',
  component: Item,
  contentAlignX: 'block',
  itemProps: {
    centered: true,
  },
})
