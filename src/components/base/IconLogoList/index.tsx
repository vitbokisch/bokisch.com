import list from '~/components/core/list'
import IconLogo from '../IconLogo'

export default list.config({ name: 'base/TextList' }).attrs({
  component: IconLogo,
  contentAlignX: 'center',
  contentDirection: 'inline',
})
