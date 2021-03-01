import list from '~/components/core/list'
import component from '~/components/base/Progress'

export { component }

export default list
  .config({
    name: 'base/ProgressList',
  })
  .attrs({
    block: true,
    contentAlignX: 'block',
    component,
  })
  .styles(
    (css) => css`
      align-items: stretch;
    `
  )
