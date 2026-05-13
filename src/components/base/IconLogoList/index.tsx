import { list } from '~/components/core'
import IconLogo from '../IconLogo'

export { IconLogo }

export default list.config({ name: 'base/IconLogoList', component: IconLogo }).attrs({
  contentAlignX: 'center',
  contentDirection: 'inline',
})
