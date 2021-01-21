import list from '~/components/core/list'
import element from '~/components/core/element'

export default list.config({ name: 'base/TextList' }).attrs({
  rootElement: true,
  tag: 'ul',
  component: element,
  contentAlignX: 'block',
  itemProps: { block: true, tag: 'li', contentDirection: 'center' },
})
