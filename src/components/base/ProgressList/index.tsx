import list from '~/components/core/list'
import Progress from '../Progress'

export { Progress }

export default list
  .config({
    name: 'base/ProgressList',
  })
  .attrs({
    block: true,
    contentAlignX: 'block',
    component: Progress,
  })
  .styles(
    (css) => css`
      align-items: stretch;
    `
  )
