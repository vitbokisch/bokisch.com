import BoxList from '~/components/base/BoxList'
import component from '../ProgressBox'

export { component }

export default BoxList.config({ name: 'base/ProgressBoxList' }).attrs({
  component,
})
