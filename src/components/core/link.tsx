import element from './element'
import withLink from './withLink'

export default element
  .config({
    name: 'core/link',
  })
  .compose({
    withLink,
  })
  .attrs<{ href?: string; onClick?: MouseEvent | (() => void) }>(
    ({ href, onClick }) => {
      return {
        tag: href ? 'a' : onClick ? 'button' : 'span',
      }
    }
  )
  .theme((t) => ({
    transition: t.transition.base,
    border: 'none',
    textDecoration: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
  }))
