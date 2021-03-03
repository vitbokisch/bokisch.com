import BoxList from '~/components/base/BoxList'
import ProgressBox from '../ProgressBox'

export { ProgressBox }

export default BoxList.config({ name: 'base/ProgressBoxList' }).attrs({
  component: ProgressBox,
})
