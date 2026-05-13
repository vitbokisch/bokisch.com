import { list } from '~/components/core'
import IconLogo from '../IconLogo'

export { IconLogo }

export default list.config({ name: 'base/IconLogoList' }).attrs({
  component: IconLogo,
  contentAlignX: 'center',
  contentDirection: 'inline',
})
